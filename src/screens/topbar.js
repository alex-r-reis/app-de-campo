// src/screens/topbar.js
import { state, isOnline, pendentesCount } from '../state/store.js';

export function topbar() {
  if (!state.tecnico) return '';
  const online = isOnline();
  const initials = state.tecnico.nome
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');
  return `
  <div class="topbar">
    <div class="who">
      <div class="avatar">${initials}</div>
      <div>
        <div class="nome">${state.tecnico.nome}</div>
        <div class="reg">${state.tecnico.registro}</div>
      </div>
    </div>
    <div class="conn ${online ? 'online' : 'offline'}" onclick="toggleOffline()" title="Clique para simular modo offline">
      <span class="dot"></span>${online ? 'ONLINE' : 'OFFLINE'}
    </div>
  </div>
  ${pendingStrip()}
  `;
}

export function pendingStrip() {
  const n = pendentesCount();
  if (n === 0) return '';
  const online = isOnline();
  return `
  <div class="pending-strip">
    <span>${n} relat\u00f3rio${n > 1 ? 's' : ''} pendente${n > 1 ? 's' : ''} de sincroniza\u00e7\u00e3o</span>
    <div class="pending-actions">
      <button onclick="irParaFila()">Ver relat\u00f3rios</button>
      <button onclick="sincronizarTudo()" ${online ? '' : 'disabled'}>${online ? 'Sincronizar' : 'Sem conex\u00e3o'}</button>
    </div>
  </div>`;
}

export function steps() {
  if (!['plano', 'visita', 'fila'].includes(state.screen)) return '';
  const order = ['familias', 'plano', 'visita', 'fila'];
  const labels = ['01 FAM\u00cdLIA', '02 PLANO', '03 VISITA', '04 ENVIO'];
  const idx = order.indexOf(state.screen);
  return `<div class="steps">${labels
    .map((l, i) => {
      const cls = i < idx ? 'done' : i === idx ? 'active' : '';
      return `<div class="step ${cls}">${l}</div>`;
    })
    .join('')}</div>`;
}
