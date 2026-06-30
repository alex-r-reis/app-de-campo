// src/screens/login.js
import { TECNICOS } from '../data/tecnicos.js';
import { state } from '../state/store.js';
import logoUrl from '../assets/logo.png';

export function screenLogin() {
  const opts = TECNICOS.map((t) => `<option value="${t.id}">${t.nome} — ${t.registro}</option>`).join('');
  return `
  <div class="login-wrap">
    <div class="logo-block">
      <img class="logo-img" src="${logoUrl}" alt="Logo" style="width:180px; height:auto;">
      <div class="tag"><h1 style="display:inline;font-family:Candara,sans-serif;font-size:48px;">MUIRAQUITÃ</h1><span style="display:inline;font-family:Candara,sans-serif;font-size:32px;"> Socioambiental</span></div>
      <h1>ATER CACAU</h1>
      <div class="sub">${state.appNome || 'Visita de campo'}</div>
    </div>
    <div class="field">
      <label class="field-label">Técnico(a)</label>
      <select class="input" id="sel-tecnico">${opts}</select>
    </div>
    <div class="field">
      <label class="field-label">Senha</label>
      <input class="input" id="senha-tecnico" type="password" placeholder="Digite sua senha">
    </div>
    <button class="btn btn-primary" onclick="doLogin(document.getElementById('sel-tecnico').value, document.getElementById('senha-tecnico').value)">Entrar</button>
    <button class="btn btn-ghost" style="margin-top:10px;" onclick="voltarContrato()">Trocar contrato</button>
    <div style="text-align:center; margin-top:20px; font-size:15px; color:var(--text-dim);">Senha inicial: registro ATEC do técnico</div>
  </div>`;
}
