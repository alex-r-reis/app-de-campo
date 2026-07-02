import { appConfig } from '../data/appConfig.js';
import { completarPraticasFamiliasCacauII } from '../data/praticasFamiliasCacauII.js';
import { aplicarPraticasFamiliasPrioritarias } from '../data/praticasFamiliasPrioritarias.js';

const COORDS_MUNICIPIO = {
  altamira: { lat: -3.2033, lng: -52.2064 },
  'brasil novo': { lat: -3.2979, lng: -52.5344 },
  medicilandia: { lat: -3.4464, lng: -52.8889 },
  'medicilândia': { lat: -3.4464, lng: -52.8889 },
  tucuma: { lat: -6.7458, lng: -51.1531 },
  'tucumã': { lat: -6.7458, lng: -51.1531 },
  'sao felix do xingu': { lat: -6.6425, lng: -51.9904 },
  'são félix do xingu': { lat: -6.6425, lng: -51.9904 },
  'igarape-miri': { lat: -1.9809, lng: -48.9597 },
  'igarapé-miri': { lat: -1.9809, lng: -48.9597 },
};

const METAS_MULTIPLAS_FIXAS = new Map([
  [
    'capacitacao em poda',
    ['Capacitar ≥1 membro da família', 'Realizar poda em ≥25% das plantas da área acompanhada'],
  ],
  [
    'capacitacao em renovacao de areas',
    ['Capacitar ≥1 membro da família', 'Renovar ≥25% das plantas improdutivas identificadas no diagnóstico no ciclo.'],
  ],
  [
    'gestao da producao',
    ['Implantar ≥1 instrumento de gestão com ≥2 tipos de registros (produção e preço).', 'Capacitar ≥ 2 membros da família capacitados em seu uso.'],
  ],
]);

function normalizar(valor) {
  return String(valor || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase();
}

function slug(valor) {
  return normalizar(valor)
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function coordMunicipio(municipio) {
  return COORDS_MUNICIPIO[normalizar(municipio)] || { lat: -3.5, lng: -52.0 };
}

function listaPraticas(valor) {
  return String(valor || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

function carregarGviz({ spreadsheetId, sheetName, gid }) {
  return new Promise((resolve, reject) => {
    const callback = `__aterSheets_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const query = gid ? `gid=${encodeURIComponent(gid)}` : `sheet=${encodeURIComponent(sheetName)}`;
    const script = document.createElement('script');
    const cleanup = () => {
      delete window[callback];
      script.remove();
    };

    window[callback] = (payload) => {
      cleanup();
      if (payload.status === 'error') {
        reject(new Error(payload.errors?.[0]?.detailed_message || 'Falha ao ler planilha'));
        return;
      }
      resolve(payload.table);
    };

    script.onerror = () => {
      cleanup();
      reject(new Error('Falha de rede ao ler planilha'));
    };

    script.src = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=responseHandler:${callback};out:json&${query}`;
    document.head.appendChild(script);
  });
}

function valorCelula(cell) {
  return cell?.v ?? cell?.f ?? '';
}

function tabelaParaObjetos(table) {
  const labels = (table.cols || []).map((col) => col.label || '');
  let rows = table.rows || [];
  let headers = labels;

  if (!headers.some((header) => String(header).trim()) && rows.length > 0) {
    headers = (rows[0].c || []).map(valorCelula);
    rows = rows.slice(1);
  }

  return rows.map((row) => {
    const obj = {};
    headers.forEach((header, idx) => {
      obj[header] = valorCelula(row.c?.[idx]);
    });
    return obj;
  });
}

function montarCatalogo(linhasCatalogo) {
  const mapa = new Map();
  linhasCatalogo.forEach((linha) => {
    const nome = linha['Práticas / demandas das famílias'];
    if (!nome) return;
    const metasFixas = METAS_MULTIPLAS_FIXAS.get(normalizar(nome));
    const metas = metasFixas
      ? [...metasFixas]
      : [linha['Meta 1'], linha['Meta 2']]
          .map((meta) => String(meta || '').trim())
          .filter(Boolean);

    if (metas.length === 0 && linha.Metas) {
      String(linha.Metas)
        .split(';')
        .map((meta) => meta.trim())
        .filter(Boolean)
        .forEach((meta) => metas.push(meta));
    }

    mapa.set(normalizar(nome), {
      eixo: linha.Eixo || '',
      pratica: nome,
      objetivo: linha.Objetivo || '',
      metas,
      indicadores: linha.Indicadores || '',
      metodologia: linha['Metodologia(s) e Ferramentas'] || '',
      insumos: linha['Insumos e Materiais Necessários'] || '',
      etapasAtividade: linha['Etapas da Atividade'] || '',
    });
  });
  return mapa;
}

function detalhePratica(nome, catalogo) {
  const detalhe = catalogo.get(normalizar(nome));
  if (detalhe) return detalhe;
  return {
    eixo: 'Atividade coletiva',
    pratica: nome,
    objetivo: nome,
    metas: ['Realizar atividade conforme programação técnica.'],
    indicadores: '',
    metodologia: '',
    insumos: '',
    etapasAtividade: '',
  };
}

function objetivosPorEtapa(row, config, catalogo) {
  return config.etapas.reduce((acc, etapa) => {
    const praticas = etapa.fixas || listaPraticas(row[etapa.coluna]);
    acc[etapa.nome] = praticas.map((pratica, idx) => {
      const detalhe = detalhePratica(pratica, catalogo);
      return {
        titulo: `Objetivo ${idx + 1}`,
        texto: detalhe.objetivo || detalhe.pratica,
        atividade: detalhe.pratica,
        metas: (detalhe.metas.length ? detalhe.metas : ['Realizar atividade conforme programação técnica.']).map((meta, metaIdx) => ({
          id: `${detalhe.pratica}::meta_${metaIdx + 1}`,
          atividadeId: detalhe.pratica,
          pratica: detalhe.pratica,
          texto: meta,
          indicadores: detalhe.indicadores,
          metodologia: detalhe.metodologia,
          insumos: detalhe.insumos,
          etapasAtividade: detalhe.etapasAtividade,
          eixo: detalhe.eixo,
        })),
      };
    });
    return acc;
  }, {});
}

export async function carregarDadosCampoDireto(variant) {
  const config = appConfig(variant);
  const [respostasTable, catalogoTable] = await Promise.all([
    carregarGviz({
      spreadsheetId: config.respostasSpreadsheetId,
      sheetName: config.respostasSheetName,
    }),
    carregarGviz({
      spreadsheetId: config.catalogoSpreadsheetId,
      gid: config.catalogoGid,
    }),
  ]);

  const respostasBase = tabelaParaObjetos(respostasTable).map(aplicarPraticasFamiliasPrioritarias);
  const respostas = config.id === 'cacau_ii' ? completarPraticasFamiliasCacauII(respostasBase) : respostasBase;
  const catalogo = montarCatalogo(tabelaParaObjetos(catalogoTable));

  const familias = respostas
    .filter((row) => row['Nome completo do chefe da família'])
    .map((row, idx) => {
      const chefeFamilia = row['Nome completo do chefe da família'];
      const municipio = row.Município || '';
      return {
        id: `${config.id}_${idx + 1}_${slug(chefeFamilia)}`,
        variant: config.id,
        contratoNome: config.nome,
        chefeFamilia,
        tecnicoNome: row['ATEC responsável'] || '',
        osp: row.OSP || '',
        comunidade: municipio,
        area: 'Não informada',
        coordBase: coordMunicipio(municipio),
        status: 'pendente',
        proximaVisita: config.etapas[0]?.nome || '',
        plano: { objetivos: [] },
        atividadesPorVisita: objetivosPorEtapa(row, config, catalogo),
      };
    });

  return {
    variant: config.id,
    nome: config.nome,
    etapas: config.etapas.map((etapa) => etapa.nome),
    familias,
    atualizadoEm: new Date().toISOString(),
  };
}
