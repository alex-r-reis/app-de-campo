import { FAMILIAS } from '../data/familias.js';
import { objetivosDaAtividade } from '../data/atividades.js';
import { visitasPadrao } from '../data/appConfig.js';
import { tecnicoPorId } from '../data/tecnicos.js';

const STORAGE_KEY = 'ater-cacau-campo:v2';
const CACAU_I_DIA_CAMPO_II_PADRAO = 'Dia de Campo II - Controle Integrado de Pragas e Doenças (MIPD)';
const CACAU_I_DIA_CAMPO_II_CAEPIM = 'DC II - Capacitação em Gestão Produtiva e Comercialização';
const CACAU_I_PRATICA_CAEPIM = 'DC II A1 - Capacitação em Gestão Produtiva e Comercialização';

export const state = {
  screen: 'contrato',
  online: typeof navigator !== 'undefined' ? navigator.onLine : true,
  forcedOffline: false,
  appVariant: '',
  appNome: '',
  visitasPadrao: [],
  tecnico: null,
  familiaId: null,
  nomeVisita: '',
  resumoVisita: '',
  respostas: {},
  riscos: [],
  conclusao: '',
  proximosPassos: '',
  gps: null,
  fotos: [],
  editandoVisitaId: null,
  visitasSalvas: [],
  familiasCampo: [],
  dadosCampoVariant: '',
  dadosCampoAtualizadoEm: '',
  carregandoDadosCampo: false,
  erroDadosCampo: '',
  toast: null,
};

export function isOnline() {
  return state.online && !state.forcedOffline;
}

export function getFamilias() {
  const nomesTecnico = [state.tecnico?.nome];
  if (state.tecnico?.id === 't17') nomesTecnico.push('Vitor');
  const cacheCompativel = !state.dadosCampoVariant || state.dadosCampoVariant === state.appVariant;
  const dinamicas = cacheCompativel
    ? state.familiasCampo
        .map(normalizarFamiliaCampo)
        .filter((familia) => nomesTecnico.some((nome) => normalizar(familia.tecnicoNome) === normalizar(nome)))
    : [];
  if (dinamicas.length) return dinamicas;
  if (state.appVariant && state.appVariant !== 'cacau_i') return [];
  return FAMILIAS[state.tecnico.id] || [];
}

function familiaDaVisitaSalva(visita) {
  if (!visita) return null;
  return {
    id: visita.familiaId,
    chefeFamilia: visita.chefeFamilia,
    osp: visita.osp || '',
    comunidade: visita.comunidade || '',
    area: visita.area || 'Não informada',
    tecnicoNome: visita.tecnicoNome || state.tecnico?.nome || '',
    proximaVisita: visita.proximosPassos || visita.nomeVisita,
    visitasPadrao: state.visitasPadrao?.length ? state.visitasPadrao : [visita.nomeVisita],
    atividadesPorVisita: {
      [visita.nomeVisita]: visita.objetivosSnapshot || [],
    },
    plano: { objetivos: visita.objetivosSnapshot || [] },
  };
}

export function getFamilia(id) {
  const familia = getFamilias().find((f) => f.id === id);
  if (familia) return familia;
  const visita = state.editandoVisitaId
    ? state.visitasSalvas.find((item) => item.id === state.editandoVisitaId)
    : state.visitasSalvas.find((item) => item.familiaId === id);
  return familiaDaVisitaSalva(visita);
}

export function visitasDaFamilia(familia) {
  return familia?.visitasPadrao?.length ? familia.visitasPadrao : state.visitasPadrao;
}

function normalizar(valor) {
  return String(valor || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase();
}

function objetivoDiaCampoCaepim() {
  return [
    {
      titulo: 'Objetivo 1',
      texto: CACAU_I_PRATICA_CAEPIM,
      atividade: CACAU_I_PRATICA_CAEPIM,
      metas: [
        {
          id: `${CACAU_I_PRATICA_CAEPIM}::meta_1`,
          atividadeId: CACAU_I_PRATICA_CAEPIM,
          pratica: CACAU_I_PRATICA_CAEPIM,
          texto: 'Realizar atividade conforme programação técnica.',
          indicadores: '',
          metodologia: '',
          insumos: '',
          etapasAtividade: '',
          eixo: 'Atividade coletiva',
        },
      ],
    },
  ];
}

function normalizarFamiliaCampo(familia) {
  if (normalizar(familia?.variant) !== 'cacau_i' || normalizar(familia?.osp) !== 'caepim') {
    return familia;
  }

  const atividadesPorVisita = { ...(familia.atividadesPorVisita || {}) };
  atividadesPorVisita[CACAU_I_DIA_CAMPO_II_CAEPIM] = objetivoDiaCampoCaepim();
  delete atividadesPorVisita[CACAU_I_DIA_CAMPO_II_PADRAO];

  familia.visitasPadrao = ['Visita Técnica III', CACAU_I_DIA_CAMPO_II_CAEPIM, 'Visita Técnica IV'];
  familia.atividadesPorVisita = atividadesPorVisita;
  if (familia.proximaVisita === CACAU_I_DIA_CAMPO_II_PADRAO) {
    familia.proximaVisita = CACAU_I_DIA_CAMPO_II_CAEPIM;
  }
  return familia;
}

export function fmtCoord(n) {
  return n.toFixed(5);
}

export function fmtHora(ts) {
  const d = new Date(ts);
  return d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

export function fmtDataHoje() {
  return new Date().toLocaleDateString('pt-BR');
}

export function pendentesCount() {
  return state.visitasSalvas.filter((v) => !v.sincronizado).length;
}

export function visitaPorId(id) {
  return state.visitasSalvas.find((v) => v.id === id);
}

export function todasMetas(fam) {
  return fam.plano.objetivos.flatMap((o) => o.metas);
}

export function objetivosAtivos(fam, nomeVisita = state.nomeVisita) {
  return objetivosDaAtividade(fam, nomeVisita);
}

export function metasAtivas(fam, nomeVisita = state.nomeVisita) {
  return objetivosAtivos(fam, nomeVisita).flatMap((o) => o.metas);
}

export function totalRespondidas(metas = []) {
  return metas.filter((m) => !!state.respostas[m.id]).length;
}

export function slug(str) {
  return (str || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function visitasParaPersistencia() {
  return state.visitasSalvas.map((visita) => ({
    ...visita,
    docxBlob: null,
    fotos: (visita.fotos || []).map((foto) => ({
      gps: foto.gps || null,
      legenda: foto.legenda || '',
      timestamp: foto.timestamp,
      dataUrl: foto.dataUrl || null,
      nome: foto.nome || foto.file?.name || '',
      tipo: foto.tipo || foto.file?.type || '',
    })),
  }));
}

function fotosParaPersistencia(fotos = []) {
  return fotos.map((foto) => ({
    gps: foto.gps || null,
    legenda: foto.legenda || '',
    timestamp: foto.timestamp,
    dataUrl: foto.dataUrl || null,
    nome: foto.nome || foto.file?.name || '',
    tipo: foto.tipo || foto.file?.type || '',
  }));
}

function rascunhoParaPersistencia() {
  return {
    familiaId: state.familiaId,
    nomeVisita: state.nomeVisita,
    resumoVisita: state.resumoVisita,
    respostas: state.respostas,
    riscos: state.riscos,
    conclusao: state.conclusao,
    proximosPassos: state.proximosPassos,
    gps: state.gps,
    fotos: fotosParaPersistencia(state.fotos),
    editandoVisitaId: state.editandoVisitaId,
  };
}

function familiasParaPersistencia() {
  return Object.values(FAMILIAS)
    .flat()
    .map((familia) => ({
      id: familia.id,
      area: familia.area,
      status: familia.status,
      proximaVisita: familia.proximaVisita,
    }));
}

export function persistirEstadoLocal() {
  if (typeof localStorage === 'undefined') return;
  const payload = {
    visitasSalvas: visitasParaPersistencia(),
    familias: familiasParaPersistencia(),
    familiasCampo: state.familiasCampo,
    dadosCampoVariant: state.dadosCampoVariant,
    dadosCampoAtualizadoEm: state.dadosCampoAtualizadoEm,
    session: state.tecnico
      ? {
          tecnicoId: state.tecnico.id,
          appVariant: state.appVariant,
          appNome: state.appNome,
          visitasPadrao: state.visitasPadrao,
        }
      : null,
    draft: rascunhoParaPersistencia(),
    forcedOffline: state.forcedOffline,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (err) {
    console.warn('Nao foi possivel salvar dados locais', err);
  }
}

export function carregarEstadoLocal() {
  if (typeof localStorage === 'undefined') return;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;

  try {
    const payload = JSON.parse(raw);
    const familiasPorId = new Map(Object.values(FAMILIAS).flat().map((familia) => [familia.id, familia]));

    (payload.familias || []).forEach((salva) => {
      const familia = familiasPorId.get(salva.id);
      if (!familia) return;
      familia.area = salva.area ?? familia.area;
      familia.status = salva.status ?? familia.status;
      familia.proximaVisita = salva.proximaVisita ?? familia.proximaVisita;
    });

    state.visitasSalvas = (payload.visitasSalvas || []).map((visita) => ({
      ...visita,
      docxBlob: null,
      fotos: (visita.fotos || []).map((foto) => ({
        ...foto,
        file: null,
        url: foto.dataUrl || '',
      })),
    }));
    state.familiasCampo = (payload.familiasCampo || []).map(normalizarFamiliaCampo);
    state.dadosCampoVariant = payload.dadosCampoVariant || '';
    state.dadosCampoAtualizadoEm = payload.dadosCampoAtualizadoEm || '';
    state.forcedOffline = Boolean(payload.forcedOffline);

    if (payload.session?.appVariant && payload.session?.tecnicoId) {
      aplicarContrato(payload.session.appVariant, payload.session.appNome || '');
      const tecnico = tecnicoPorId(payload.session.tecnicoId, payload.session.appVariant);
      if (tecnico) {
        state.tecnico = tecnico;
        state.visitasPadrao = payload.session.visitasPadrao?.length
          ? payload.session.visitasPadrao
          : state.visitasPadrao;
        state.screen = 'familias';
      }
    }

    if (payload.draft) {
      state.familiaId = payload.draft.familiaId || null;
      state.nomeVisita = payload.draft.nomeVisita || '';
      state.resumoVisita = payload.draft.resumoVisita || '';
      state.respostas = payload.draft.respostas || {};
      state.riscos = payload.draft.riscos || [];
      state.conclusao = payload.draft.conclusao || '';
      state.proximosPassos = payload.draft.proximosPassos || '';
      state.gps = payload.draft.gps || null;
      state.fotos = (payload.draft.fotos || []).map((foto) => ({
        ...foto,
        file: null,
        url: foto.dataUrl || '',
      }));
      state.editandoVisitaId = payload.draft.editandoVisitaId || null;
    }
  } catch (err) {
    console.warn('Nao foi possivel restaurar dados locais', err);
  }
}

export function aplicarContrato(variant, nome = '') {
  state.appVariant = variant;
  state.appNome = nome;
  state.visitasPadrao = visitasPadrao(variant);
}

export function temRascunhoAtivo() {
  return (
    state.screen === 'visita' &&
    Boolean(
      state.familiaId ||
        state.resumoVisita ||
        Object.keys(state.respostas || {}).length ||
        (state.riscos || []).length ||
        state.conclusao ||
        state.gps ||
        (state.fotos || []).length ||
        state.editandoVisitaId
    )
  );
}
