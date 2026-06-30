import { VISITAS_PADRAO } from './tecnicos.js';

const CATALOGO_PRATICAS = [
  {
    pratica: 'Adubação de cova/cobertura',
    objetivo: 'Orientar a realização da adubação de cova e de cobertura nas áreas produtivas, visando melhorar a fertilidade do solo e o desenvolvimento das plantas.',
    metas: ['Realizar adubação em 100% da área planejada, conforme análise de solo (se houver)'],
  },
  {
    pratica: 'Capacitação em poda',
    objetivo: 'Capacitar os(as) agricultores(as) em técnicas de poda de formação e produção, visando aprimorar o manejo das plantas, aumentando a produtividade, a sanidade e a longevidade dos cultivos',
    metas: ['Capacitar ≥1 membro da família', 'Realizar poda em ≥25% das plantas da área acompanhada'],
  },
  {
    pratica: 'Capacitação em renovação de áreas',
    objetivo: 'Renovar áreas improdutivas e aumentar a produtividade do sistema',
    metas: ['Capacitar ≥1 membro da família', 'Renovar ≥25% das plantas improdutivas identificadas no diagnóstico no ciclo.'],
  },
  {
    pratica: 'Classificação e armazenamento',
    objetivo: 'Melhorar a qualidade e conservação da produção',
    metas: ['Classificar e armazenar 100% da produção em estrutura adequada, mantendo perdas pós-armazenamento ≤5%.'],
  },
  {
    pratica: 'Colheita e pós-colheita',
    objetivo: 'Reduzir perdas pós-colheita e garantir a qualidade do produto',
    metas: ['Aplicar protocolo de colheita e pós-colheita em 100% da produção, com perdas ≤10% em relação à produção colhida.'],
  },
  {
    pratica: 'Compostagem',
    objetivo: 'Produzir adubo orgânico com materiais disponíveis na propriedade',
    metas: ['Construir e manejar ≥1 leira ativa'],
  },
  {
    pratica: 'Construção de viveiro',
    objetivo: 'Implementar a construção de viveiro familiar',
    metas: ['Construir ≥1 viveiro com capacidade ≥200 mudas/ciclo, dimensionado conforme plano de produção da propriedade.'],
  },
  {
    pratica: 'Controle de plantas espontâneas',
    objetivo: 'Promover o manejo das plantas espontâneas visando reduzir a competição com as culturas produtivas por água, luz e nutrientes',
    metas: ['Realizar ≥1 manejos por ciclo, mantendo cobertura controlada em 100% da área produtiva acompanhada.'],
  },
  {
    pratica: 'Fermentação de cacau',
    objetivo: 'Melhorar a qualidade das amêndoas de cacau por meio da adequada condução do processo de fermentação',
    metas: ['Realizar fermentação em 100% da produção conforme protocolo técnico, com ≥80% das amêndoas classificadas como qualidade comercial.'],
  },
  {
    pratica: 'Gestão da produção',
    objetivo: 'Fortalecer o planejamento e a organização produtiva',
    metas: ['Implantar ≥1 instrumento de gestão com ≥2 tipos de registros (produção e preço).', 'Capacitar ≥ 2 membros da família capacitados em seu uso.'],
  },
  {
    pratica: 'Implantação de SAF',
    objetivo: 'Diversificar a produção e promover sustentabilidade ambiental',
    metas: ['Implantar ou ampliar ≥0,06 ha de SAF por unidade familiar, com ≥4 espécies consorciadas.'],
  },
  {
    pratica: 'Instalação de cochos de fermentação',
    objetivo: 'Melhorar a infraestrutura de beneficiamento do cacau por meio da implantação de estruturas adequadas para fermentação das amêndoas',
    metas: ['Instalar ≥1 cocho, com uso em pelo menos 1 ciclo de fermentação.'],
  },
  {
    pratica: 'Irrigação simples',
    objetivo: 'Melhorar a disponibilidade hídrica para as culturas por meio da implantação de sistema simples de irrigação na área produtiva',
    metas: ['Instalar e operar sistema simples em ≥25% da área crítica, com manutenção registrada mensalmente.'],
  },
  {
    pratica: 'Plantio de culturas',
    objetivo: 'Ampliar e/ou renovar áreas produtivas por meio da implantação de culturas agrícolas conforme planejamento técnico',
    metas: ['Implantar ou renovar ≥0,06 ha de culturas agrícolas conforme planejamento da unidade produtiva.'],
  },
  {
    pratica: 'Produção de biofertilizante líquido',
    objetivo: 'Produzir insumo orgânico (biofertilizante líquido) para melhoria da nutrição e desenvolvimento das plantas',
    metas: ['Produzir ≥1 lote de biofertilizante para aplicação na área acompanhada.'],
  },
  {
    pratica: 'Produção de defensivos naturais',
    objetivo: 'Promover o controle sustentável de pragas e doenças',
    metas: ['Produzir e aplicar ≥1 tipo de defensivo natural em 100% da área acompanhada, com redução de ≥20% na incidência de pragas/doenças em relação à linha de base.'],
  },
  {
    pratica: 'Produção de mudas',
    objetivo: 'Produzir mudas de qualidade para implantação e/ou renovação de áreas produtivas.',
    metas: ['Produzir ≥25 mudas de qualidade, com taxa de germinação ≥70% e sobrevivência ≥80%.'],
  },
  {
    pratica: 'Secagem de amêndoas',
    objetivo: 'Garantir a qualidade final das amêndoas de cacau por meio da adequada condução do processo de secagem',
    metas: ['Realizar secagem em 100% da produção conforme protocolo técnico, com umidade final entre 6–8% e ≥80% das amêndoas em padrão comercial.'],
  },
  {
    pratica: 'Seleção de sementes/mudas',
    objetivo: 'Melhorar a qualidade genética e sanitária das culturas por meio da seleção de sementes e/ou mudas adequadas para implantação',
    metas: ['Selecionar 100% do material propagativo conforme critérios técnicos definidos (sanidade, vigor, procedência), com registro por lote.'],
  },
];

const SINONIMOS_PRATICAS = [
  ['adubação', 'Adubação de cova/cobertura'],
  ['poda', 'Capacitação em poda'],
  ['renovação', 'Capacitação em renovação de áreas'],
  ['caderno de campo', 'Gestão da produção'],
  ['registro da produção', 'Gestão da produção'],
  ['defensivos naturais', 'Produção de defensivos naturais'],
  ['biofertilizante', 'Produção de biofertilizante líquido'],
  ['compostagem', 'Compostagem'],
  ['fermentação', 'Fermentação de cacau'],
  ['secagem', 'Secagem de amêndoas'],
  ['viveiro', 'Construção de viveiro'],
  ['saf', 'Implantação de SAF'],
  ['mudas', 'Produção de mudas'],
  ['sementes', 'Seleção de sementes/mudas'],
  ['colheita', 'Colheita e pós-colheita'],
];

function normalizar(valor) {
  return String(valor || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function catalogoPorNome(nome) {
  return CATALOGO_PRATICAS.find((item) => normalizar(item.pratica) === normalizar(nome));
}

function praticaPorTexto(texto) {
  const normalizado = normalizar(texto);
  const sinonimo = SINONIMOS_PRATICAS.find(([termo]) => normalizado.includes(normalizar(termo)));
  if (!sinonimo) return null;
  return catalogoPorNome(sinonimo[1]);
}

function praticasFallback(familia) {
  const metasPlano = (familia?.plano?.objetivos || []).flatMap((objetivo) => objetivo.metas || []);
  const vistas = new Set();
  const praticas = [];

  metasPlano.forEach((meta) => {
    const pratica = praticaPorTexto(meta.texto);
    if (pratica && !vistas.has(pratica.pratica)) {
      vistas.add(pratica.pratica);
      praticas.push(pratica);
    }
  });

  return praticas;
}

function objetivosDeCatalogo(familia, nomeVisita) {
  const praticas = praticasFallback(familia);
  return praticas.map((pratica, idx) => ({
    titulo: `Objetivo ${idx + 1}`,
    texto: pratica.objetivo,
    atividade: pratica.pratica,
    metas: pratica.metas.map((meta, metaIdx) => ({
      id: `${familia.id}_${nomeVisita}_${pratica.pratica}_meta_${metaIdx + 1}`,
      atividadeId: pratica.pratica,
      pratica: pratica.pratica,
      texto: meta,
    })),
  }));
}

export function atividadesProgramadas() {
  return CATALOGO_PRATICAS;
}

export function atividadePorNome(nome) {
  return {
    id: nome,
    nome,
    atividade: nome,
    objetivos: [],
    proximasEtapas: opcoesProximaEtapa(nome),
  };
}

export function objetivosDaAtividade(familia, nomeVisita) {
  if (familia?.atividadesPorVisita?.[nomeVisita]) {
    return familia.atividadesPorVisita[nomeVisita];
  }
  return objetivosDeCatalogo(familia, nomeVisita);
}

export function opcoesProximaEtapa(nomeVisita) {
  const idx = VISITAS_PADRAO.indexOf(nomeVisita);
  if (idx === -1 || idx === VISITAS_PADRAO.length - 1) return ['Encerramento do ciclo de acompanhamento'];
  return [VISITAS_PADRAO[idx + 1], 'Atendimento técnico complementar', 'Reagendar etapa atual'];
}
