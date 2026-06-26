// src/state/store.js
// Estado global da aplicação + helpers puros de leitura.
// Mantido como um objeto simples (sem framework de estado) para ficar fiel
// à lógica original do protótipo: qualquer tela lê/escreve direto em `state`
// e chama `render()` (em src/render.js) para repintar a UI.

import { FAMILIAS } from '../data/familias.js';

export const state = {
  screen: 'login',
  online: typeof navigator !== 'undefined' ? navigator.onLine : true,
  forcedOffline: false,
  tecnico: null,
  familiaId: null,
  nomeVisita: '',
  resumoVisita: '',
  respostas: {},          // {metaId: 'Integral'|'Parcial'|'Não realizada'}
  riscos: [],             // [{descricao, mitigacao}]
  conclusao: '',          // complemento de texto livre do(a) ATEC (resumo de cumprimento é automático)
  gps: null,              // {lat,lng,acc,timestamp,simulado}
  fotos: [],              // [{url, file, gps, legenda, timestamp}]
  visitasSalvas: [],
  toast: null,
};

export function isOnline() {
  return state.online && !state.forcedOffline;
}

export function getFamilias() {
  return FAMILIAS[state.tecnico.id];
}

export function getFamilia(id) {
  return getFamilias().find((f) => f.id === id);
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

export function totalRespondidas() {
  return Object.keys(state.respostas).length;
}

export function slug(str) {
  return (str || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}
