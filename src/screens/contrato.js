import { contratosDisponiveis } from '../data/appConfig.js';
import logoUrl from '../assets/logo.png';

export function screenContrato() {
  const cards = contratosDisponiveis()
    .map(
      (contrato) => `
    <button class="card clickable contract-card" onclick="selecionarContrato('${contrato.id}')">
      <div class="obj-title">${contrato.nome}</div>
      <div class="obj-texto">Entrar no aplicativo de campo</div>
    </button>`
    )
    .join('');

  return `
  <div class="login-wrap">
    <div class="logo-block">
      <img class="logo-img" src="${logoUrl}" alt="Logo" style="width:180px; height:auto;">
      <div class="tag"><h1 style="display:inline;font-family:Candara,sans-serif;font-size:48px;">MUIRAQUITÃƒ</h1><span style="display:inline;font-family:Candara,sans-serif;font-size:32px;"> Socioambiental</span></div>
      <h1>ATER CACAU</h1>
      <div class="sub">Selecione o contrato</div>
    </div>
    <div class="contract-list">${cards}</div>
  </div>`;
}
