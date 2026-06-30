// src/main.js
// Ponto de entrada da aplicação (carregado pelo index.html como <script type="module">).
//
// A UI é renderizada via strings de HTML (ver src/render.js e src/screens/*),
// e os elementos usam atributos inline como onclick="doLogin(...)". Por isso,
// expomos explicitamente as funções de ação/estado em `window` abaixo — é o
// que permite o HTML gerado dinamicamente continuar chamando essas funções.

import './styles/main.css';

import { state, visitaPorId, carregarEstadoLocal } from './state/store.js';
import { render } from './render.js';
import { gerarDocxVisita } from './docx/gerarDocx.js';
import {
  selecionarContrato,
  voltarContrato,
  doLogin,
  logout,
  abrirFamilia,
  alterarVisita,
  irParaVisita,
  editarArea,
  voltarFamilias,
  voltarPlano,
  responder,
  adicionarRisco,
  removerRisco,
  capturarGPS,
  onFotosSelecionadas,
  removerFoto,
  alternarGpsFoto,
  salvarVisita,
  sincronizarTudo,
  toggleOffline,
} from './actions/actions.js';

// Estado acessível globalmente (usado por oninput="state.xxx=this.value" nas telas)
window.state = state;
window.visitaPorId = visitaPorId;
window.gerarDocxVisita = gerarDocxVisita;

// Ações
window.selecionarContrato = selecionarContrato;
window.voltarContrato = voltarContrato;
window.doLogin = doLogin;
window.logout = logout;
window.abrirFamilia = abrirFamilia;
window.alterarVisita = alterarVisita;
window.irParaVisita = irParaVisita;
window.editarArea = editarArea;
window.voltarFamilias = voltarFamilias;
window.voltarPlano = voltarPlano;
window.responder = responder;
window.adicionarRisco = adicionarRisco;
window.removerRisco = removerRisco;
window.capturarGPS = capturarGPS;
window.onFotosSelecionadas = onFotosSelecionadas;
window.removerFoto = removerFoto;
window.alternarGpsFoto = alternarGpsFoto;
window.salvarVisita = salvarVisita;
window.sincronizarTudo = sincronizarTudo;
window.toggleOffline = toggleOffline;

// Mantém o indicador online/offline sincronizado com o navegador
window.addEventListener('online', () => {
  state.online = true;
  render();
});
window.addEventListener('offline', () => {
  state.online = false;
  render();
});

carregarEstadoLocal();

async function aquecerCacheOffline() {
  if (!('caches' in window)) return;
  const cache = await caches.open('ater-cacau-campo-v2');
  const urls = new Set([
    `${location.origin}/`,
    `${location.origin}/index.html`,
    `${location.origin}/manifest.webmanifest`,
    ...performance
      .getEntriesByType('resource')
      .map((entry) => entry.name)
      .filter((url) => url.startsWith(location.origin)),
  ]);

  await Promise.all(
    [...urls].map(async (url) => {
      try {
        const res = await fetch(url, { cache: 'reload' });
        if (res.ok) await cache.put(url, res);
      } catch (err) {
        console.warn('Nao foi possivel guardar recurso offline', url, err);
      }
    })
  );
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then(() => navigator.serviceWorker.ready)
      .then(() => aquecerCacheOffline())
      .catch((err) => {
        console.warn('Nao foi possivel registrar o cache offline', err);
      });
  });
}

render();
