// src/screens/plano.js
import { state, getFamilia } from '../state/store.js';

export function screenPlano() {
  const fam = getFamilia(state.familiaId);
  const objetivos = fam.plano.objetivos
    .map(
      (o) => `
    <div class="card">
      <div class="obj-title">${o.titulo}</div>
      <div class="obj-texto">${o.texto}</div>
      ${o.metas
        .map(
          (m, i) =>
            `<div class="goal-item"><span class="goal-num">${String(i + 1).padStart(2, '0')}</span><span>${m.texto}</span></div>`
        )
        .join('')}
    </div>
  `
    )
    .join('');
  return `
  <div class="content">
    <span class="back-link" onclick="voltarFamilias()">‹ FAMÍLIAS</span>
    <h2 class="screen-title">${fam.chefeFamilia}</h2>
    <div class="screen-sub">Plano já cadastrado na base do aplicativo</div>

    <div class="header-grid">
      <div class="mi"><div class="lbl">OSP</div><div class="val">${fam.osp}</div></div>
      <div class="mi"><div class="lbl">Cidade</div><div class="val">${fam.comunidade}</div></div>
      <div class="mi full">
        <div class="lbl">Área</div>
        <input class="mi-edit" type="text" value="${fam.area}" placeholder="Ex.: 4,2 ha" oninput="editarArea(this.value)">
      </div>
    </div>

    <div class="section-label">Atividades programadas</div>
    ${objetivos}

    <button class="btn btn-primary" onclick="irParaVisita()">Iniciar relatório de visita</button>
  </div>`;
}
