// src/render.js
// Recebe o estado atual e repinta a tela correspondente dentro de #app.
// É chamado por toda action que altera o `state` (ver src/actions/actions.js).

import { state } from './state/store.js';
import { topbar, steps } from './screens/topbar.js';
import { screenContrato } from './screens/contrato.js';
import { screenLogin } from './screens/login.js';
import { screenFamilias } from './screens/familias.js';
import { screenPlano } from './screens/plano.js';
import { screenVisita } from './screens/visita.js';
import { screenFila } from './screens/fila.js';

export function render() {
  let body = '';
  if (state.screen === 'contrato') body = screenContrato();
  else if (state.screen === 'login') body = screenLogin();
  else if (state.screen === 'familias') body = topbar() + steps() + screenFamilias();
  else if (state.screen === 'plano') body = topbar() + steps() + screenPlano();
  else if (state.screen === 'visita') body = topbar() + steps() + screenVisita();
  else if (state.screen === 'fila') body = topbar() + steps() + screenFila();

  const toast = state.toast ? `<div class="toast">${state.toast}</div>` : '';
  document.getElementById('app').innerHTML = body + toast;
}
