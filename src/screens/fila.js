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
        </div>
        <button class="btn btn-ghost" style="margin-top:10px;" onclick="gerarDocxVisita(visitaPorId('${v.id}'))">Baixar relatório (.docx)</button>
        ${fotosBtn}
        <button class="btn btn-danger" style="margin-top:8px;" onclick="removerVisitaSalva('${v.id}')">Retirar relatório do aparelho</button>
      </div>`;
    })
    .join('');

  return `
  <div class="content">
    <span class="back-link" onclick="voltarFamilias()">‹ FAMÍLIAS</span>
    <h2 class="screen-title">Relatórios salvos</h2>
    <div class="screen-sub">Relatórios armazenados no dispositivo. Baixe o .docx e salve as fotos carimbadas antes de retirar do aparelho.</div>
    ${rows}
  </div>`;
}
