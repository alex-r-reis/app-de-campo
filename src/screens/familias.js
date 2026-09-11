import { state, getFamilias } from '../state/store.js';

export function screenFamilias() {
  const familias = getFamilias();
  const ordemFamilias = state.ordemFamilias === 'za' ? 'za' : 'az';
  const sentidoOrdenacao = ordemFamilias === 'za' ? -1 : 1;
  const collator = new Intl.Collator('pt-BR', { sensitivity: 'base' });
  const familiasOrdenadas = [...familias].sort(
    (a, b) => collator.compare(a.chefeFamilia || '', b.chefeFamilia || '') * sentidoOrdenacao
  );
  const totalRelatorios = state.visitasSalvas.length;
  const origem = state.familiasCampo.length ? 'Planilha em tempo real' : 'Base local';
  const atualizacao = state.dadosCampoAtualizadoEm
    ? ` · atualizado em ${new Date(state.dadosCampoAtualizadoEm).toLocaleString('pt-BR')}`
    : '';
  const statusDados = state.carregandoDadosCampo
    ? '<div class="info-box"><span class="info-lbl">Dados</span>Atualizando famílias e atividades da planilha...</div>'
    : state.erroDadosCampo
      ? `<div class="gps-warn" style="margin-bottom:10px;">${state.erroDadosCampo}</div>`
      : '';

  const rows = familiasOrdenadas
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
    <div class="screen-sub">${state.appNome} · ${state.tecnico.regiao} · ${familias.length} famílias · ${origem}${atualizacao}</div>
    ${statusDados}
    ${totalRelatorios ? `<button class="btn btn-ghost" style="margin-bottom:12px;" onclick="irParaFila()">Ver relat\u00f3rios realizados (${totalRelatorios})</button>` : ''}
    <div class="family-tools">
      <label class="family-order-label" for="ordemFamilias">Organizar famílias</label>
      <select id="ordemFamilias" class="family-order-select" onchange="alterarOrdemFamilias(this.value)">
        <option value="az" ${ordemFamilias === 'az' ? 'selected' : ''}>A-Z</option>
        <option value="za" ${ordemFamilias === 'za' ? 'selected' : ''}>Z-A</option>
      </select>
    </div>
    ${rows || '<div class="empty-state">Nenhuma família encontrada para este técnico.</div>'}
  </div>`;
}
