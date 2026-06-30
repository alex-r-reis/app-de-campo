// src/actions/actions.js
// Toda função aqui muda o `state` e, no final, chama `render()` para repintar
// a tela. São essas funções que os atributos onclick/oninput do HTML chamam
// (expostas em window pelo src/main.js).

import { TECNICOS } from '../data/tecnicos.js';
import { VISITAS_PADRAO } from '../data/tecnicos.js';
import {
  state,
  getFamilia,
  fmtDataHoje,
  isOnline,
  objetivosAtivos,
  metasAtivas,
  persistirEstadoLocal,
} from '../state/store.js';
import { render } from '../render.js';
import { gerarDocxVisita } from '../docx/gerarDocx.js';
import { buscarDadosCampo, enviarVisitaParaServidor } from '../services/api.js';
import { proximaEtapa } from '../utils/cronograma.js';

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function respostasDasMetas(metas) {
  return metas.reduce((acc, meta) => {
    if (state.respostas[meta.id]) acc[meta.id] = state.respostas[meta.id];
    return acc;
  }, {});
}

function atividadesAvaliadas(objetivos, respostas, nomeVisita) {
  return objetivos.flatMap((objetivo) =>
    objetivo.metas.map((meta) => ({
      id: meta.id,
      atividadeId: meta.atividadeId || meta.pratica || meta.id,
      pratica: meta.texto,
      nomeVisita,
      objetivo: objetivo.texto || '',
      meta: meta.texto || '',
      status: respostas[meta.id] || '',
      indicadores: meta.indicadores || '',
      metodologia: meta.metodologia || '',
      insumos: meta.insumos || '',
    }))
  );
}

export function showToast(msg) {
  state.toast = msg;
  render();
  setTimeout(() => {
    state.toast = null;
  }, 2000);
}

export async function doLogin(id) {
  state.tecnico = TECNICOS.find((t) => t.id === id);
  state.screen = 'familias';
  state.carregandoDadosCampo = true;
  state.erroDadosCampo = '';
  render();

  try {
    const dados = await buscarDadosCampo();
    state.familiasCampo = dados.familias || [];
    state.dadosCampoAtualizadoEm = dados.atualizadoEm || new Date().toISOString();
    persistirEstadoLocal();
  } catch (err) {
    state.erroDadosCampo = state.familiasCampo.length
      ? 'Não foi possível atualizar a planilha agora. Usando o último cache local.'
      : `Não foi possível carregar a planilha: ${err.message}`;
  } finally {
    state.carregandoDadosCampo = false;
    render();
  }
}

export function logout() {
  Object.assign(state, {
    screen: 'login',
    tecnico: null,
    familiaId: null,
    respostas: {},
    observacoes: '',
    proximosPassos: '',
    gps: null,
    fotos: [],
    erroDadosCampo: '',
  });
  render();
}

export function abrirFamilia(id) {
  const fam = getFamilia(id);
  state.familiaId = id;
  state.nomeVisita = fam.proximaVisita || VISITAS_PADRAO[0];
  state.proximosPassos = proximaEtapa(state.nomeVisita);
  state.resumoVisita = '';
  state.respostas = {};
  state.riscos = [];
  state.conclusao = '';
  state.gps = null;
  state.fotos = [];
  state.screen = 'plano';
  render();
}

export function alterarVisita(nomeVisita) {
  state.nomeVisita = nomeVisita;
  state.proximosPassos = proximaEtapa(nomeVisita);
  render();
}

export function irParaVisita() {
  state.screen = 'visita';
  render();
}

export function editarArea(valor) {
  getFamilia(state.familiaId).area = valor;
  persistirEstadoLocal();
}

export function voltarFamilias() {
  state.screen = 'familias';
  render();
}

export function voltarPlano() {
  state.screen = 'plano';
  render();
}

export function responder(mid, valor) {
  state.respostas[mid] = valor;
  render();
}

export function adicionarRisco() {
  state.riscos.push({ descricao: '', mitigacao: '' });
  render();
}

export function removerRisco(idx) {
  state.riscos.splice(idx, 1);
  render();
}

export function capturarGPS() {
  const fam = getFamilia(state.familiaId);
  const aplicarSimulado = () => {
    state.gps = {
      lat: fam.coordBase.lat + (Math.random() - 0.5) * 0.0009,
      lng: fam.coordBase.lng + (Math.random() - 0.5) * 0.0009,
      acc: (8 + Math.random() * 10).toFixed(0),
      timestamp: Date.now(),
      simulado: true,
    };
    render();
  };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        state.gps = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          acc: Math.round(pos.coords.accuracy),
          timestamp: Date.now(),
          simulado: false,
        };
        render();
      },
      () => {
        aplicarSimulado();
      },
      { timeout: 4000 }
    );
  } else {
    aplicarSimulado();
  }
}

export async function onFotosSelecionadas(input) {
  const files = Array.from(input.files || []);
  for (const file of files) {
    const url = URL.createObjectURL(file);
    const dataUrl = await fileToDataUrl(file);
    state.fotos.push({
      url,
      file,
      dataUrl,
      nome: file.name || '',
      tipo: file.type || '',
      legenda: '',
      gps: state.gps ? { lat: state.gps.lat, lng: state.gps.lng, simulado: state.gps.simulado } : null,
      timestamp: Date.now(),
    });
  }
  render();
  input.value = '';
}

export function removerFoto(idx) {
  state.fotos.splice(idx, 1);
  render();
}

/**
 * Marca ou remove a coordenada GPS de uma foto específica — usado porque
 * nem toda foto precisa (ou pode) ser georreferenciada.
 */
export function alternarGpsFoto(idx) {
  const foto = state.fotos[idx];
  if (!foto) return;
  if (foto.gps) {
    foto.gps = null;
  } else if (state.gps) {
    foto.gps = { lat: state.gps.lat, lng: state.gps.lng, simulado: state.gps.simulado };
  } else {
    showToast('Capture a localização GPS antes de marcar a coordenada da foto');
    return;
  }
  render();
}

export function salvarVisita() {
  const fam = getFamilia(state.familiaId);
  const objetivosSnapshot = objetivosAtivos(fam, state.nomeVisita);
  const metas = metasAtivas(fam, state.nomeVisita);
  const respostas = respostasDasMetas(metas);
  const visita = {
    id: 'v' + Date.now(),
    familiaId: fam.id,
    chefeFamilia: fam.chefeFamilia,
    osp: fam.osp,
    comunidade: fam.comunidade,
    tecnicoNome: state.tecnico.nome,
    nomeVisita: state.nomeVisita,
    data: fmtDataHoje(),
    ts: Date.now(),
    resumoVisita: state.resumoVisita,
    atividade: state.nomeVisita,
    objetivosSnapshot: JSON.parse(JSON.stringify(objetivosSnapshot)),
    respostas,
    atividadesAvaliadas: atividadesAvaliadas(objetivosSnapshot, respostas, state.nomeVisita),
    riscos: [...state.riscos],
    conclusao: state.conclusao,
    proximosPassos: state.proximosPassos || proximaEtapa(state.nomeVisita),
    gps: state.gps,
    fotos: state.fotos.map((f) => ({
      file: f.file,
      dataUrl: f.dataUrl || null,
      nome: f.nome || f.file?.name || '',
      tipo: f.tipo || f.file?.type || '',
      gps: f.gps,
      legenda: f.legenda || '',
      timestamp: f.timestamp,
    })),
    sincronizado: false,
    docxGerado: false,
    docxBlob: null,
    driveUrl: null,
  };
  state.visitasSalvas.push(visita);
  fam.status = 'visitado';
  if (VISITAS_PADRAO.includes(visita.proximosPassos)) {
    fam.proximaVisita = visita.proximosPassos;
  }
  state.screen = 'fila';
  persistirEstadoLocal();
  render();
  showToast('Relatório de visita salvo no dispositivo');
  gerarDocxVisita(visita).then(({ blob }) => {
    visita.docxBlob = blob;
    visita.docxGerado = true;
    persistirEstadoLocal();
    render();
  });
}

export async function sincronizarTudo() {
  if (!isOnline()) return;
  const pendentes = state.visitasSalvas.filter((v) => !v.sincronizado);
  if (pendentes.length === 0) return;

  showToast(`Sincronizando ${pendentes.length} relatório(s)...`);
  let sucesso = 0;
  let falha = 0;

  for (const visita of pendentes) {
    try {
      const resultado = await enviarVisitaParaServidor(visita, visita.docxBlob);
      visita.sincronizado = true;
      visita.driveUrl = resultado.pastaUrl || null;
      sucesso++;
    } catch (err) {
      console.error('Falha ao sincronizar visita', visita.id, err);
      falha++;
    }
    persistirEstadoLocal();
    render();
  }

  if (falha === 0) {
    showToast(`${sucesso} relatório(s) sincronizado(s) com o Drive e a planilha`);
  } else {
    showToast(`${sucesso} sincronizado(s), ${falha} falharam — verifique o servidor e tente novamente`);
  }
}

export function toggleOffline() {
  state.forcedOffline = !state.forcedOffline;
  render();
}
