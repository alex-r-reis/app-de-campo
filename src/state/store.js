import { FAMILIAS } from '../data/familias.js';
import { objetivosDaAtividade } from '../data/atividades.js';
import { visitasPadrao } from '../data/appConfig.js';

const STORAGE_KEY = 'ater-cacau-campo:v2';

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
  const cacheCompativel = !state.dadosCampoVariant || state.dadosCampoVariant === state.appVariant;
  const dinamicas = cacheCompativel
    ? state.familiasCampo.filter((familia) => normalizar(familia.tecnicoNome) === normalizar(state.tecnico.nome))
    : [];
  if (dinamicas.length) return dinamicas;
  if (state.appVariant && state.appVariant !== 'cacau_i') return [];
  return FAMILIAS[state.tecnico.id] || [];
}

export function getFamilia(id) {
  return getFamilias().find((f) => f.id === id);
}

function normalizar(valor) {
  return String(valor || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toLowerCase();
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
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
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
    state.familiasCampo = payload.familiasCampo || [];
    state.dadosCampoVariant = payload.dadosCampoVariant || '';
    state.dadosCampoAtualizadoEm = payload.dadosCampoAtualizadoEm || '';
  } catch (err) {
    console.warn('Nao foi possivel restaurar dados locais', err);
  }
}

export function aplicarContrato(variant, nome = '') {
  state.appVariant = variant;
  state.appNome = nome;
  state.visitasPadrao = visitasPadrao(variant);
}
