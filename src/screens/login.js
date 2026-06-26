// src/screens/login.js
import { TECNICOS } from '../data/tecnicos.js';
import logoUrl from '../assets/logo.png';

export function screenLogin() {
  const opts = TECNICOS.map((t) => `<option value="${t.id}">${t.nome} — ${t.registro}</option>`).join('');
  return `
  <div class="login-wrap">
    <div class="logo-block">
      <img class="logo-img" src="${logoUrl}" alt="Logo" style="width:180px; height:auto;">
      <div class="tag"><h1 style="display:inline;font-family:Candara,sans-serif;font-size:48px;">MUIRAQUITÃ</h1><span style="display:inline;font-family:Candara,sans-serif;font-size:32px;"> Socioambiental</span></div>
      <h1>ATER CACAU</h1>
      <div class="sub">Visita de campo</div>
    </div>
    <div class="field">
      <label class="field-label">Técnico(a)</label>
      <select class="input" id="sel-tecnico">${opts}</select>
    </div>
    <div class="field">
      <label class="field-label">Senha</label>
      <input class="input" type="password" placeholder="••••••••" value="demo">
    </div>
    <button class="btn btn-primary" onclick="doLogin(document.getElementById('sel-tecnico').value)">Entrar</button>
    <div style="text-align:center; margin-top:20px; font-size:15px; color:var(--text-dim);"></div>
  </div>`;
}
