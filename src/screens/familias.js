// src/screens/familias.js
import { state, getFamilias } from '../state/store.js';

export function screenFamilias() {
  const familias = getFamilias();
  const rows = familias
    .map((f) => {
      const stamp =
        f.status === 'visitado'
          ? `<span class="stamp ok">visitado</span>`
          : `<span class="stamp pending">pendente</span>`;
      return `
    <div class="card clickable" onclick="abrirFamilia('${f.id}')">
      <div class="fam-row">
        <div>
          <div class="fam-name">${f.chefeFamilia}</div>
          <div class="fam-meta">${f.comunidade} · ${f.osp}</div>
        </div>
        ${stamp}
      </div>
    </div>`;
    })
    .join('');
  return `
  <div class="content">
    <h2 class="screen-title">Famílias atendidas</h2>
    <div class="screen-sub">${state.tecnico.regiao} · ${familias.length} famílias</div>
    ${rows}
  </div>`;
}
