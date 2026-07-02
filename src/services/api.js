// src/services/api.js
// Camada de comunicação com o backend (server/). O backend é quem efetivamente
// fala com o Google Drive e o Google Sheets — o frontend nunca tem credenciais
// do Google, só envia os dados/arquivos via multipart/form-data.

import { carregarDadosCampoDireto } from './campoSheets.js';

const API_BASE = import.meta.env?.VITE_API_BASE_URL || 'http://localhost:3001';
const APP_VARIANT = import.meta.env?.VITE_APP_VARIANT || 'cacau_i';

function aguardar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getAdminToken() {
  return sessionStorage.getItem('admin_token') || '';
}

function formatarDataHora(ts) {
  return ts ? new Date(ts).toLocaleString('pt-BR') : '';
}

async function dataUrlToBlob(dataUrl) {
  const res = await fetch(dataUrl);
  return res.blob();
}

export function setAdminToken(token) {
  sessionStorage.setItem('admin_token', token || '');
}

export async function verificarServidorDisponivel() {
  let ultimoErro = null;

  for (let tentativa = 1; tentativa <= 3; tentativa++) {
    try {
      const res = await fetch(`${API_BASE}/api/health?t=${Date.now()}`, {
        cache: 'no-store',
      });
      if (res.ok) return true;
      ultimoErro = new Error(`Servidor respondeu ${res.status}`);
    } catch (err) {
      ultimoErro = err;
    }

    await aguardar(tentativa * 3000);
  }

  throw new Error(
    `Nao foi possivel conectar ao servidor. Verifique a internet e tente novamente. ${ultimoErro?.message || ''}`.trim()
  );
}

export async function buscarConfigAdmin() {
  const res = await fetch(`${API_BASE}/api/config`);
  if (!res.ok) throw new Error('Falha ao buscar configuração do servidor');
  return res.json();
}

export async function buscarVisitasSincronizadas() {
  const res = await fetch(`${API_BASE}/api/visitas`, {
    headers: { 'x-admin-token': getAdminToken() },
  });
  if (res.status === 401) {
    const err = new Error('Token de administração inválido ou ausente.');
    err.code = 'UNAUTHORIZED';
    throw err;
  }
  if (!res.ok) throw new Error('Falha ao buscar visitas sincronizadas');
  return res.json();
}

export async function buscarDadosCampo(variant = APP_VARIANT || 'cacau_i') {
  try {
    const params = new URLSearchParams({
      variant,
      t: String(Date.now()),
    });
    const res = await fetch(`${API_BASE}/api/campo/dados/?${params.toString()}`, {
      cache: 'no-store',
    });
    if (!res.ok) {
      const erro = await res.json().catch(() => ({}));
      throw new Error(erro.erro || 'Falha ao buscar dados de campo');
    }
    return res.json();
  } catch (err) {
    return carregarDadosCampoDireto(variant);
  }
}

/**
 * Envia uma visita salva (com o .docx já gerado e as fotos) para o backend,
 * que sobe tudo para o Drive e registra a linha no Sheets.
 * @param {object} visita - objeto de state.visitasSalvas
 * @param {Blob|null} docxBlob - blob do relatório .docx já gerado
 */
export async function enviarVisitaParaServidor(visita, docxBlob) {
  const variant = visita.appVariant || APP_VARIANT || 'cacau_i';
  const metasResumo = Object.values(visita.respostas).join(' | ');
  const atividadesDetalhadas = (visita.atividadesAvaliadas || [])
    .map((a) => `${a.nomeVisita || visita.nomeVisita} | ${a.atividadeId || a.id} | ${a.status} | ${a.objetivo || ''} | ${a.meta || ''}`)
    .join(' ; ');
  const riscosResumo = (visita.riscos || [])
    .map((r) => `${r.descricao || ''} → ${r.mitigacao || ''}`)
    .join(' ; ');
  const gpsTexto = visita.gps
    ? `${visita.gps.lat.toFixed(5)}, ${visita.gps.lng.toFixed(5)}${visita.gps.simulado ? ' (simulado)' : ''} | ${formatarDataHora(visita.gps.timestamp || visita.ts)}`
    : '';

  const form = new FormData();
  form.append(
    'dados',
    JSON.stringify({
      data: visita.data,
      tecnicoNome: visita.tecnicoNome,
      appVariant: visita.appVariant || '',
      appNome: visita.appNome || '',
      chefeFamilia: visita.chefeFamilia,
      osp: visita.osp,
      comunidade: visita.comunidade || '',
      nomeVisita: visita.nomeVisita,
      resumoVisita: visita.resumoVisita,
      metasResumo,
      conclusao: visita.conclusao,
      proximosPassos: visita.proximosPassos,
      riscosResumo,
      gpsTexto,
      atividadesDetalhadas,
    })
  );

  if (docxBlob) {
    form.append('docx', docxBlob, `Relatorio_${visita.chefeFamilia || 'visita'}.docx`);
  }

  for (const [i, f] of (visita.fotos || []).entries()) {
    if (f.file) {
      form.append('fotos', f.file, f.file.name || `foto_${i + 1}.jpg`);
    } else if (f.dataUrl) {
      const blob = await dataUrlToBlob(f.dataUrl);
      form.append('fotos', blob, f.nome || `foto_${i + 1}.jpg`);
    }
  }

  let res;
  try {
    res = await fetch(`${API_BASE}/api/visitas?variant=${encodeURIComponent(variant)}`, { method: 'POST', body: form });
  } catch (err) {
    throw new Error(
      `Nao foi possivel conectar ao servidor. Verifique a internet e tente sincronizar novamente. ${err?.message || ''}`.trim()
    );
  }

  if (!res.ok) {
    const erro = await res.json().catch(() => ({}));
    throw new Error(erro.erro || 'Falha ao enviar visita ao servidor');
  }
  return res.json();
}
