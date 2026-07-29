import { state } from '../state/store.js';

export function screenFila() {
  if (state.visitasSalvas.length === 0) {
    return `
    <div class="content">
      <span class="back-link" onclick="voltarFamilias()">‹ FAMÍLIAS</span>
      <h2 class="screen-title">Relatórios salvos</h2>
      <div class="empty-state">Nenhum relatório salvo neste dispositivo.</div>
      <button class="btn btn-ghost" onclick="voltarFamilias()">Voltar para famílias</button>
    </div>`;
  }

  const ultimo = state.visitasSalvas[state.visitasSalvas.length - 1];
  const prontoResumo = ultimo
    ? `<div class="info-box"><span class="info-lbl">Relatório pronto</span>${ultimo.chefeFamilia} - ${ultimo.nomeVisita}</div>`
    : '';

  const rows = state.visitasSalvas
    .slice()
    .reverse()
    .map((v) => {
      const fotosBtn = v.fotos?.length
        ? `<button class="btn btn-ghost" style="margin-top:8px;" onclick="salvarFotosVisitaNoCelular('${v.id}')">Salvar fotos no celular</button>`
        : '';

      return `
      <div class="card">
        <div class="fam-row">
          <div>
            <div class="fam-name" style="font-size:14px;">${v.chefeFamilia}</div>
            <div class="fam-meta">${v.nomeVisita}<br>${v.data} - ${Object.keys(v.respostas || {}).length} metas - ${(v.fotos || []).length} foto(s)</div>
          </div>
          <span class="stamp ok">PRONTO</span>
        </div>
        <button class="btn btn-ghost" style="margin-top:10px;" onclick="editarVisitaSalva('${v.id}')">Revisar / editar no app</button>
        <button class="btn btn-ghost" style="margin-top:8px;" onclick="gerarDocxVisita(visitaPorId('${v.id}'))">Baixar relatório pronto (.docx)</button>
        ${fotosBtn}
        <button class="btn btn-danger" style="margin-top:8px;" onclick="removerVisitaSalva('${v.id}')">Retirar relatório do aparelho</button>
      </div>`;
    })
    .join('');

  return `
  <div class="content">
    <span class="back-link" onclick="voltarFamilias()">‹ FAMÍLIAS</span>
    <h2 class="screen-title">Relatórios salvos</h2>
    <div class="screen-sub">Relatórios prontos armazenados no dispositivo. Revise, edite ou baixe o .docx antes de retirar do aparelho.</div>
    ${prontoResumo}
    ${rows}
  </div>`;
}
