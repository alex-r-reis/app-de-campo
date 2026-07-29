// src/actions/actions.js
// Toda função aqui muda o `state` e, no final, chama `render()` para repintar
// a tela. São essas funções que os atributos onclick/oninput do HTML chamam
// (expostas em window pelo src/main.js).

import { validarSenhaTecnico, tecnicoPorId } from '../data/tecnicos.js';
import { appConfig } from '../data/appConfig.js';
import {
  state,
  getFamilia,
  fmtDataHoje,
  isOnline,
  objetivosAtivos,
  metasAtivas,
  visitasDaFamilia,
  persistirEstadoLocal,
  aplicarContrato,
} from '../state/store.js';
import { render } from '../render.js';
import { gerarDocxVisita } from '../docx/gerarDocx.js';
import { buscarDadosCampo, enviarVisitaParaServidor, verificarServidorDisponivel } from '../services/api.js';
import { proximaEtapa } from '../utils/cronograma.js';

const LOGO_CARIMBO_SRC = '/brand/muiraquita-watermark.png';
let logoCarimboPromise = null;

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function carregarImagem(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function carregarLogoCarimbo() {
  if (!logoCarimboPromise) {
    logoCarimboPromise = carregarImagem(LOGO_CARIMBO_SRC).catch((err) => {
      console.warn('Nao foi possivel carregar a logo do carimbo', err);
      return null;
    });
  }
  return logoCarimboPromise;
}

function canvasToBlob(canvas, tipo, qualidade) {
  return new Promise((resolve) => {
    if (canvas.toBlob) {
      canvas.toBlob((blob) => resolve(blob), tipo, qualidade);
      return;
    }
    fetch(canvas.toDataURL(tipo, qualidade))
      .then((res) => res.blob())
      .then(resolve)
      .catch(() => resolve(null));
  });
}

function obterGpsAtual() {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve(null);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          acc: Math.round(pos.coords.accuracy),
          timestamp: Date.now(),
          simulado: false,
        });
      },
      () => resolve(null),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  });
}

function dataUrlParaBlob(dataUrl) {
  return fetch(dataUrl).then((res) => res.blob());
}

function nomeArquivoSeguro(valor) {
  return String(valor || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function textoCarimboFoto({ gps, familia, tecnico, visita, timestamp }) {
  const linhas = [
    `Data/hora: ${new Date(timestamp).toLocaleString('pt-BR')}`,
    gps
      ? `GPS: ${gps.lat.toFixed(5)}, ${gps.lng.toFixed(5)} | precisao +/-${gps.acc}m`
      : 'GPS: nao capturado pelo dispositivo',
    `Familia: ${familia?.chefeFamilia || ''}`,
    `ATEC: ${tecnico?.nome || ''}`,
    `Etapa: ${visita || ''}`,
  ];
  return linhas.filter(Boolean);
}

function desenharLogoCarimbo(ctx, logo, width, height, boxHeight, margem) {
  if (!logo) return;
  const logoSize = Math.min(Math.round(boxHeight * 0.82), Math.round(width * 0.18));
  const x = width - margem - logoSize;
  const y = height - boxHeight + Math.round((boxHeight - logoSize) / 2);
  ctx.save();
  ctx.globalAlpha = 0.28;
  ctx.drawImage(logo, x, y, logoSize, logoSize);
  ctx.restore();
}

function aplicarCarimbo(ctx, width, height, linhas, logo) {
  const margem = Math.max(16, Math.round(width * 0.025));
  const fontSize = Math.max(18, Math.round(width * 0.028));
  const lineHeight = Math.round(fontSize * 1.28);
  const boxHeight = lineHeight * linhas.length + margem;
  ctx.save();
  ctx.fillStyle = 'rgba(0, 0, 0, 0.68)';
  ctx.fillRect(0, height - boxHeight, width, boxHeight);
  desenharLogoCarimbo(ctx, logo, width, height, boxHeight, margem);
  ctx.fillStyle = '#ffffff';
  ctx.font = `600 ${fontSize}px Arial, sans-serif`;
  ctx.textBaseline = 'top';
  const logoReserva = logo ? Math.min(Math.round(boxHeight * 0.92), Math.round(width * 0.2)) + margem : 0;
  linhas.forEach((linha, idx) => {
    ctx.fillText(linha, margem, height - boxHeight + Math.round(margem / 2) + idx * lineHeight, width - margem * 2 - logoReserva);
  });
  ctx.restore();
}

async function compactarFoto(file, metadados = {}) {
  if (!file?.type?.startsWith('image/')) {
    return { file, dataUrl: await fileToDataUrl(file), tipo: file?.type || '', nome: file?.name || '' };
  }

  const urlOriginal = URL.createObjectURL(file);
  try {
    const img = await carregarImagem(urlOriginal);
    const maxDim = 1280;
    const escala = Math.min(1, maxDim / Math.max(img.width || maxDim, img.height || maxDim));
    const width = Math.max(1, Math.round((img.width || maxDim) * escala));
    const height = Math.max(1, Math.round((img.height || maxDim) * escala));
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, width, height);
    const logo = await carregarLogoCarimbo();
    aplicarCarimbo(ctx, width, height, textoCarimboFoto(metadados), logo);
    const tipo = 'image/jpeg';
    const blob = await canvasToBlob(canvas, tipo, 0.72);
    if (!blob) throw new Error('Falha ao compactar imagem');
    const nome = (file.name || 'foto.jpg').replace(/\.[^.]+$/, '.jpg');
    const arquivo = typeof File !== 'undefined' ? new File([blob], nome, { type: tipo }) : blob;
    return { file: arquivo, dataUrl: await fileToDataUrl(blob), tipo, nome };
  } catch (err) {
    console.warn('Nao foi possivel compactar foto; usando arquivo original', err);
    return { file, dataUrl: await fileToDataUrl(file), tipo: file.type || '', nome: file.name || '' };
  } finally {
    URL.revokeObjectURL(urlOriginal);
  }
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

export function selecionarContrato(variant) {
  const config = appConfig(variant);
  aplicarContrato(config.id, config.nome);
  state.screen = 'login';
  state.erroDadosCampo = '';
  persistirEstadoLocal();
  render();
}

export function voltarContrato() {
  Object.assign(state, {
    screen: 'contrato',
    tecnico: null,
    appVariant: '',
    appNome: '',
    visitasPadrao: [],
    erroDadosCampo: '',
  });
  persistirEstadoLocal();
  render();
}

export async function doLogin(id, senha) {
  const tecnico = tecnicoPorId(id, state.appVariant);
  if (!state.appVariant) {
    showToast('Selecione o contrato antes de entrar');
    state.screen = 'contrato';
    render();
    return;
  }
  if (!validarSenhaTecnico(tecnico, senha)) {
    showToast(tecnico ? 'Senha inválida. Use o registro ATEC do técnico.' : 'Técnico não cadastrado neste contrato.');
    return;
  }

  state.tecnico = tecnico;
  state.screen = 'familias';
  state.carregandoDadosCampo = true;
  state.erroDadosCampo = '';
  render();

  try {
    const dados = await buscarDadosCampo(state.appVariant);
    state.familiasCampo = dados.familias || [];
    state.dadosCampoVariant = dados.variant || state.appVariant;
    state.visitasPadrao = dados.etapas || state.visitasPadrao;
    state.dadosCampoAtualizadoEm = dados.atualizadoEm || new Date().toISOString();
    persistirEstadoLocal();
  } catch (err) {
    state.erroDadosCampo = state.familiasCampo.length
      ? 'Não foi possível atualizar a planilha agora. Usando o último cache local.'
      : `Não foi possível carregar a planilha: ${err.message}`;
  } finally {
    state.carregandoDadosCampo = false;
    persistirEstadoLocal();
    render();
  }
}

export function logout() {
  Object.assign(state, {
    screen: 'contrato',
    tecnico: null,
    appVariant: '',
    appNome: '',
    visitasPadrao: [],
    familiaId: null,
    nomeVisita: '',
    resumoVisita: '',
    respostas: {},
    riscos: [],
    conclusao: '',
    proximosPassos: '',
    gps: null,
    fotos: [],
    editandoVisitaId: null,
    erroDadosCampo: '',
  });
  persistirEstadoLocal();
  render();
}

export function abrirFamilia(id) {
  const fam = getFamilia(id);
  const visitas = visitasDaFamilia(fam);
  const visitaInicial = visitas.includes(fam.proximaVisita)
    ? fam.proximaVisita
    : visitas[0] || fam.proximaVisita || '';
  state.familiaId = id;
  state.nomeVisita = visitaInicial;
  state.proximosPassos = proximaEtapa(state.nomeVisita, visitas);
  state.resumoVisita = '';
  state.respostas = {};
  state.riscos = [];
  state.conclusao = '';
  state.gps = null;
  state.fotos = [];
  state.editandoVisitaId = null;
  state.screen = 'plano';
  persistirEstadoLocal();
  render();
}

export function alterarVisita(nomeVisita) {
  const fam = getFamilia(state.familiaId);
  const visitas = visitasDaFamilia(fam);
  state.nomeVisita = nomeVisita;
  state.proximosPassos = proximaEtapa(nomeVisita, visitas);
  persistirEstadoLocal();
  render();
}

export function irParaVisita() {
  state.screen = 'visita';
  persistirEstadoLocal();
  render();
}

export function irParaFila() {
  state.editandoVisitaId = null;
  state.screen = 'fila';
  persistirEstadoLocal();
  render();
}

export function editarArea(valor) {
  getFamilia(state.familiaId).area = valor;
  persistirEstadoLocal();
}

export function voltarFamilias() {
  state.screen = 'familias';
  persistirEstadoLocal();
  render();
}

export function voltarPlano() {
  state.editandoVisitaId = null;
  state.screen = 'plano';
  persistirEstadoLocal();
  render();
}

export function responder(mid, valor) {
  state.respostas[mid] = valor;
  persistirEstadoLocal();
  render();
}

export function adicionarRisco() {
  state.riscos.push({ descricao: '', mitigacao: '' });
  persistirEstadoLocal();
  render();
}

export function removerRisco(idx) {
  state.riscos.splice(idx, 1);
  persistirEstadoLocal();
  render();
}

export function capturarGPS() {
  obterGpsAtual().then((gps) => {
    if (!gps) {
      showToast('Nao foi possivel capturar GPS real. Verifique a permissao de localizacao.');
      return;
    }
    state.gps = gps;
    persistirEstadoLocal();
    render();
  });
}

export async function onFotosSelecionadas(input) {
  const files = Array.from(input.files || []);
  const fam = getFamilia(state.familiaId);
  for (const file of files) {
    const timestamp = Date.now();
    const gps = await obterGpsAtual();
    if (gps) state.gps = gps;
    const foto = await compactarFoto(file, {
      gps,
      familia: fam,
      tecnico: state.tecnico,
      visita: state.nomeVisita,
      timestamp,
    });
    const url = URL.createObjectURL(foto.file);
    state.fotos.push({
      url,
      file: foto.file,
      dataUrl: foto.dataUrl,
      nome: foto.nome,
      tipo: foto.tipo,
      legenda: '',
      gps,
      timestamp,
    });
  }
  persistirEstadoLocal();
  render();
  input.value = '';
  if (files.length) showToast('Foto registrada com data, hora e GPS na imagem');
}

export function removerFoto(idx) {
  state.fotos.splice(idx, 1);
  persistirEstadoLocal();
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
  persistirEstadoLocal();
  render();
}

export async function salvarFotoNoCelular(idx) {
  try {
    const foto = state.fotos[idx];
    if (!foto?.dataUrl) return;
    const nome = foto.nome || `foto_${idx + 1}.jpg`;
    const blob = await dataUrlParaBlob(foto.dataUrl);
    const arquivo = typeof File !== 'undefined' ? new File([blob], nome, { type: foto.tipo || 'image/jpeg' }) : null;

    if (navigator.canShare && arquivo && navigator.canShare({ files: [arquivo] }) && navigator.share) {
      await navigator.share({ files: [arquivo], title: nome });
      return;
    }

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = nome;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 1000);
  } catch (err) {
    console.error('Falha ao salvar foto no celular', err);
    showToast('Nao foi possivel salvar a foto no celular');
  }
}

export async function salvarFotosVisitaNoCelular(id) {
  try {
    const visita = state.visitasSalvas.find((item) => item.id === id);
    const fotos = visita?.fotos || [];
    if (!fotos.length) {
      showToast('Este relatorio nao possui fotos');
      return;
    }

    const arquivos = [];
    for (const [idx, foto] of fotos.entries()) {
      if (!foto.dataUrl) continue;
      const blob = await dataUrlParaBlob(foto.dataUrl);
      const nome = `${nomeArquivoSeguro(visita.chefeFamilia)}_${idx + 1}.jpg`;
      if (typeof File !== 'undefined') {
        arquivos.push(new File([blob], nome, { type: foto.tipo || 'image/jpeg' }));
      } else {
        arquivos.push({ blob, nome });
      }
    }

    if (navigator.canShare && arquivos[0] instanceof File && navigator.canShare({ files: arquivos }) && navigator.share) {
      await navigator.share({ files: arquivos, title: `Fotos ${visita.chefeFamilia}` });
      return;
    }

    arquivos.forEach((arquivo, idx) => {
      const blob = arquivo instanceof File ? arquivo : arquivo.blob;
      const nome = arquivo instanceof File ? arquivo.name : arquivo.nome;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = nome || `foto_${idx + 1}.jpg`;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 1000 + idx * 100);
    });
  } catch (err) {
    console.error('Falha ao salvar fotos no celular', err);
    showToast('Nao foi possivel salvar as fotos no celular');
  }
}

export function editarVisitaSalva(id) {
  const visita = state.visitasSalvas.find((item) => item.id === id);
  if (!visita) return;

  state.familiaId = visita.familiaId;
  state.nomeVisita = visita.nomeVisita;
  state.resumoVisita = visita.resumoVisita || '';
  state.respostas = { ...(visita.respostas || {}) };
  state.riscos = (visita.riscos || []).map((risco) => ({ ...risco }));
  state.conclusao = visita.conclusao || '';
  state.proximosPassos = visita.proximosPassos || '';
  state.gps = visita.gps || null;
  state.fotos = (visita.fotos || []).map((foto) => ({
    ...foto,
    file: foto.file || null,
    url: foto.url || foto.dataUrl || '',
  }));
  state.editandoVisitaId = id;
  state.screen = 'visita';
  persistirEstadoLocal();
  render();
}

export function salvarVisita() {
  const fam = getFamilia(state.familiaId);
  const visitas = visitasDaFamilia(fam);
  const editandoId = state.editandoVisitaId;
  const visitaOriginal = editandoId ? state.visitasSalvas.find((item) => item.id === editandoId) : null;
  const objetivosSnapshot = objetivosAtivos(fam, state.nomeVisita);
  const metas = metasAtivas(fam, state.nomeVisita);
  const respostas = respostasDasMetas(metas);
  const proximaProgramada = visitas.includes(state.proximosPassos)
    ? state.proximosPassos
    : proximaEtapa(state.nomeVisita, visitas);
  const visita = {
    id: editandoId || 'v' + Date.now(),
    familiaId: fam.id,
    chefeFamilia: fam.chefeFamilia,
    osp: fam.osp,
    comunidade: fam.comunidade,
    tecnicoNome: state.tecnico.nome,
    appVariant: state.appVariant,
    appNome: state.appNome,
    nomeVisita: state.nomeVisita,
    data: fmtDataHoje(),
    ts: visitaOriginal?.ts || Date.now(),
    atualizadoEm: editandoId ? new Date().toISOString() : null,
    resumoVisita: state.resumoVisita,
    atividade: state.nomeVisita,
    objetivosSnapshot: JSON.parse(JSON.stringify(objetivosSnapshot)),
    respostas,
    atividadesAvaliadas: atividadesAvaliadas(objetivosSnapshot, respostas, state.nomeVisita),
    riscos: [...state.riscos],
    conclusao: state.conclusao,
    proximosPassos: proximaProgramada,
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
    syncError: '',
  };
  if (editandoId) {
    const idx = state.visitasSalvas.findIndex((item) => item.id === editandoId);
    if (idx >= 0) {
      state.visitasSalvas.splice(idx, 1);
      state.visitasSalvas.push(visita);
    } else {
      state.visitasSalvas.push(visita);
    }
  } else {
    state.visitasSalvas.push(visita);
  }
  fam.status = 'visitado';
  if (visitas.includes(visita.proximosPassos)) {
    fam.proximaVisita = visita.proximosPassos;
  }
  state.familiaId = null;
  state.nomeVisita = '';
  state.resumoVisita = '';
  state.respostas = {};
  state.riscos = [];
  state.conclusao = '';
  state.proximosPassos = '';
  state.gps = null;
  state.fotos = [];
  state.editandoVisitaId = null;
  state.screen = 'fila';
  persistirEstadoLocal();
  render();
  showToast(editandoId ? 'Relatorio atualizado no dispositivo' : 'Relatório de visita salvo no dispositivo');
}

export function removerVisitaSalva(id) {
  const visita = state.visitasSalvas.find((item) => item.id === id);
  if (!visita) return;
  const ok = window.confirm(`Retirar o relatorio de ${visita.chefeFamilia} deste aparelho?`);
  if (!ok) return;
  state.visitasSalvas = state.visitasSalvas.filter((item) => item.id !== id);
  persistirEstadoLocal();
  render();
  showToast('Relatorio retirado do dispositivo');
}

export async function sincronizarTudo() {
  if (!isOnline()) return;
  const pendentes = state.visitasSalvas.filter((v) => !v.sincronizado);
  if (pendentes.length === 0) return;

  showToast(`Sincronizando ${pendentes.length} relatório(s)...`);
  let sucesso = 0;
  let falha = 0;

  try {
    await verificarServidorDisponivel();
  } catch (err) {
    pendentes.forEach((visita) => {
      visita.syncError = err?.message || 'Servidor indisponivel';
    });
    persistirEstadoLocal();
    render();
    showToast('Servidor indisponivel para sincronizacao. Tente novamente em alguns instantes.');
    return;
  }

  for (const visita of pendentes) {
    try {
      if (!visita.docxBlob) {
        const { blob } = await gerarDocxVisita(visita, { baixar: false });
        visita.docxBlob = blob;
        visita.docxGerado = true;
      }
      const resultado = await enviarVisitaParaServidor(visita, visita.docxBlob);
      visita.sincronizado = true;
      visita.driveUrl = resultado.pastaUrl || null;
      visita.docxBlob = null;
      visita.syncError = '';
      sucesso++;
    } catch (err) {
      console.error('Falha ao sincronizar visita', visita.id, err);
      visita.syncError = err?.message || 'Falha desconhecida ao sincronizar';
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
  persistirEstadoLocal();
  render();
}
