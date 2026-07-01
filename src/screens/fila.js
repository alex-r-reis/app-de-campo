// src/screens/fila.js
import { state, isOnline, pendentesCount } from '../state/store.js';

export function screenFila() {
  if (state.visitasSalvas.length === 0) {
    return `<div class="content"><div class="empty-state">Nenhum relat\u00f3rio salvo ainda.</div>
      <button class="btn btn-ghost" onclick="voltarFamilias()">Voltar para fam\u00edlias</button></div>`;
  }

  const rows = state.visitasSalvas
    .slice()
    .reverse()
    .map((v) => {
      const stamp = v.sincronizado
        ? `<span class="stamp ok stamp-pop">sincronizado</span>`
        : `<span class="stamp pending">pendente</span>`;
      return `
    <div class="card">
      <div class="fam-row">
        <div>
          <div class="fam-name" style="font-size:14px;">${v.chefeFamilia}</div>
          <div class="fam-meta">${v.nomeVisita}<br>${v.data} - ${Object.keys(v.respostas).length} metas - ${v.fotos.length} foto(s)</div>
        </div>
        ${stamp}
      </div>
      <button class="btn btn-ghost" style="margin-top:10px;" onclick="gerarDocxVisita(visitaPorId('${v.id}'))">Baixar relat\u00f3rio (.docx)</button>
      <button class="btn btn-danger" style="margin-top:8px;" onclick="removerVisitaSalva('${v.id}')">Retirar relat\u00f3rio do aparelho</button>
      ${v.syncError ? `<div class="gps-warn sync-error">Erro: ${v.syncError}</div>` : ''}
      ${v.driveUrl ? `<a class="btn btn-ghost" style="display:block;text-align:center;margin-top:8px;" href="${v.driveUrl}" target="_blank">Ver pasta no Drive</a>` : ''}
    </div>`;
    })
    .join('');

  const n = pendentesCount();
  return `
  <div class="content">
    <span class="back-link" onclick="voltarFamilias()">‹ FAM\u00cdLIAS</span>
    <h2 class="screen-title">Fila de envio</h2>
    <div class="screen-sub">Relat\u00f3rios armazenados no dispositivo</div>
    ${rows}
    ${n > 0 ? `<button class="btn btn-primary" ${isOnline() ? '' : 'disabled'} onclick="sincronizarTudo()">${isOnline() ? 'Sincronizar ' + n + ' relat\u00f3rio(s)' : 'Aguardando conex\u00e3o'}</button>` : ''}
  </div>`;
}
