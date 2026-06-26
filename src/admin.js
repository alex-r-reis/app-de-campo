// src/admin.js
// Painel de administração: mostra todas as visitas já sincronizadas (lidas
// direto da planilha do Google Sheets pelo backend) e links rápidos para a
// pasta no Drive e para a planilha. É uma página separada (admin.html),
// independente do app de campo (index.html).

import './styles/main.css';
import { buscarConfigAdmin, buscarVisitasSincronizadas, setAdminToken } from './services/api.js';

const COLUNAS = [
  'Data', 'Hora', 'Técnico', 'Chefe de Família', 'OSP', 'Comunidade',
  'Visita', 'Resumo', 'Metas', 'Conclusão', 'Próximos passos', 'Riscos',
  'GPS', 'Relatório', 'Qtde Fotos', 'Pasta no Drive',
];

const ROOT = document.getElementById('admin-app');

function telaCarregando() {
  ROOT.innerHTML = `<div class="content"><div class="empty-state">Carregando dados do servidor...</div></div>`;
}

function telaPedirToken(mensagemErro) {
  ROOT.innerHTML = `
    <div class="content">
      <h2 class="screen-title">Administração</h2>
      <div class="screen-sub">Acesso protegido</div>
      ${mensagemErro ? `<div class="gps-warn" style="margin-bottom:10px;">${mensagemErro}</div>` : ''}
      <div class="field">
        <label class="field-label">Token de administração</label>
        <input class="input" type="password" id="admin-token-input" placeholder="Definido em server/.env (ADMIN_TOKEN)">
      </div>
      <button class="btn btn-primary" id="admin-token-btn">Entrar</button>
    </div>`;
  document.getElementById('admin-token-btn').onclick = () => {
    const valor = document.getElementById('admin-token-input').value;
    setAdminToken(valor);
    init();
  };
}

function telaErroConexao(mensagem) {
  ROOT.innerHTML = `
    <div class="content">
      <div class="empty-state">
        Não foi possível conectar ao servidor (${mensagem}).<br><br>
        Verifique se o backend está rodando — veja <code>server/README</code> ou a seção
        "Backend" do README principal (<code>cd server &amp;&amp; npm install &amp;&amp; npm run dev</code>).
      </div>
    </div>`;
}

function telaPainel(config, linhas) {
  const links = `
    <div class="card">
      ${config.driveFolderUrl ? `<a class="btn btn-ghost" style="display:block;text-align:center;margin-bottom:8px;" href="${config.driveFolderUrl}" target="_blank">📁 Abrir pasta no Google Drive</a>` : '<div class="section-hint">Pasta do Drive ainda não configurada (GOOGLE_DRIVE_FOLDER_ID).</div>'}
      ${config.sheetUrl ? `<a class="btn btn-ghost" style="display:block;text-align:center;" href="${config.sheetUrl}" target="_blank">📊 Abrir planilha no Google Sheets</a>` : '<div class="section-hint">Planilha ainda não configurada (GOOGLE_SHEET_ID).</div>'}
    </div>`;

  const tabela = linhas.length === 0
    ? `<div class="empty-state">Nenhuma visita sincronizada ainda.</div>`
    : `<div class="card" style="overflow-x:auto; padding:0;">
        <table style="width:100%; border-collapse:collapse; font-size:12px; white-space:nowrap;">
          <thead>
            <tr style="text-align:left; color:var(--accent); background:var(--surface-2);">
              ${COLUNAS.map((c) => `<th style="padding:8px 10px;">${c}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${linhas
              .map(
                (linha) => `
              <tr style="border-top:1px solid var(--line);">
                ${COLUNAS.map((_, i) => {
                  const valor = linha[i] || '';
                  const isLink = (i === 13 || i === 15) && valor.startsWith('http');
                  return `<td style="padding:8px 10px; max-width:220px; overflow:hidden; text-overflow:ellipsis;">${
                    isLink ? `<a href="${valor}" target="_blank">abrir ↗</a>` : valor
                  }</td>`;
                }).join('')}
              </tr>`
              )
              .join('')}
          </tbody>
        </table>
      </div>`;

  ROOT.innerHTML = `
    <div class="topbar">
      <div class="who">
        <div class="avatar">A</div>
        <div>
          <div class="nome">Administração</div>
          <div class="reg">ATER Cacau Campo</div>
        </div>
      </div>
    </div>
    <div class="content">
      <h2 class="screen-title">Painel de administração</h2>
      <div class="screen-sub">${linhas.length} visita(s) sincronizada(s) com o Drive e o Sheets</div>
      ${links}
      ${tabela}
    </div>`;
}

async function init() {
  telaCarregando();
  let config;
  try {
    config = await buscarConfigAdmin();
  } catch (err) {
    telaErroConexao(err.message);
    return;
  }

  try {
    const dados = await buscarVisitasSincronizadas();
    telaPainel(config, dados.linhas || []);
  } catch (err) {
    if (err.code === 'UNAUTHORIZED') {
      telaPedirToken('Token inválido ou ausente. Informe o ADMIN_TOKEN configurado no servidor.');
    } else {
      telaErroConexao(err.message);
    }
  }
}

init();
