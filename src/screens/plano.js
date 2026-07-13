import { atividadePorNome } from '../data/atividades.js';
import { state, getFamilia, objetivosAtivos } from '../state/store.js';

export function screenPlano() {
  const fam = getFamilia(state.familiaId);
  const atividade = atividadePorNome(state.nomeVisita);
  const atividadeLabel = fam.atividadesPorVisita?.[state.nomeVisita] ? state.nomeVisita : atividade.atividade;
  const visitaOpts = state.visitasPadrao.map(
    (v) => `<option value="${v}" ${state.nomeVisita === v ? 'selected' : ''}>${v}</option>`
  ).join('');
  const objetivos = objetivosAtivos(fam)
    .map(
      (o) => {
        const tituloObjetivo = o.atividade ? `${o.titulo} - ${o.atividade}` : o.titulo;
        return `
    <div class="card">
      <div class="obj-title">${tituloObjetivo}</div>
      <div class="obj-texto">${o.texto}</div>
      ${o.metas
        .map(
          (m, i) =>
            `<div class="goal-item"><span class="goal-num">${String(i + 1).padStart(2, '0')}</span><span>${m.texto}${m.meta ? `<small class="goal-detail">${m.meta}</small>` : ''}</span></div>`
        )
        .join('')}
    </div>
  `;
      }
    )
    .join('');

  return `
  <div class="content">
    <span class="back-link" onclick="voltarFamilias()">‹ FAMÍLIAS</span>
    <h2 class="screen-title">${fam.chefeFamilia}</h2>
    <div class="screen-sub">Plano cadastrado na base offline do aplicativo</div>

    <div class="header-grid">
      <div class="mi"><div class="lbl">OSP</div><div class="val">${fam.osp}</div></div>
      <div class="mi"><div class="lbl">Cidade</div><div class="val">${fam.comunidade}</div></div>
      <div class="mi full">
        <div class="lbl">Atividade</div>
        <select class="input-inline" onchange="alterarVisita(this.value)">${visitaOpts}</select>
      </div>
      <div class="mi full">
        <div class="lbl">Área</div>
        <input class="mi-edit" type="text" value="${fam.area}" placeholder="Ex.: 4,2 ha" oninput="editarArea(this.value)">
      </div>
    </div>

    <div class="section-label">Atividades programadas</div>
    <div class="section-hint">${atividadeLabel}</div>
    ${objetivos}

    <button class="btn btn-primary" onclick="irParaVisita()">Iniciar relatório de visita</button>
  </div>`;
}
