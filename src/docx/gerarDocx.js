// src/docx/gerarDocx.js
// Geração do relatório .docx de acompanhamento de visita, fiel ao modelo
// "Relatório de Acompanhamento de Visita | ATER - Cadeia Produtiva do Cacau".
//
// Diferença importante em relação ao protótipo HTML único: aqui a biblioteca
// `docx` vem do npm (bundlada pelo Vite), então a geração funciona 100% offline
// desde o primeiro uso — não depende de carregar nada de um CDN.

import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  ImageRun,
  AlignmentType,
  WidthType,
  ShadingType,
  VerticalMergeType,
  BorderStyle,
  VerticalAlign,
} from 'docx';
import { slug } from '../state/store.js';
import { gerarResumoCumprimento } from '../utils/relatorio.js';

const COR_FAIXA = 'F2A93B';   // laranja do modelo
const COR_TITULO = '1E4D2B';  // verde escuro do modelo
const BORDA = { style: BorderStyle.SINGLE, size: 2, color: '999999' };
const BORDAS = { top: BORDA, bottom: BORDA, left: BORDA, right: BORDA };
const LARGURA = 9360;

function celula(texto, opts = {}) {
  return new TableCell({
    borders: BORDAS,
    width: { size: opts.width || LARGURA, type: WidthType.DXA },
    shading: opts.fill ? { fill: opts.fill, type: ShadingType.CLEAR } : undefined,
    verticalAlign: VerticalAlign.CENTER,
    columnSpan: opts.colSpan,
    verticalMerge: opts.merge,
    margins: { top: 80, bottom: 80, left: 100, right: 100 },
    children: [
      new Paragraph({
        alignment: opts.center ? AlignmentType.CENTER : AlignmentType.LEFT,
        children: [
          new TextRun({ text: texto || '', bold: !!opts.bold, color: opts.color, size: opts.size || 20 }),
        ],
      }),
    ],
  });
}

/** Variante de célula que aceita múltiplos parágrafos já montados
 * (usado na Conclusão, que soma o resumo automático + o texto livre do ATEC). */
function celulaParagrafos(paragrafos, opts = {}) {
  return new TableCell({
    borders: BORDAS,
    width: { size: opts.width || LARGURA, type: WidthType.DXA },
    shading: opts.fill ? { fill: opts.fill, type: ShadingType.CLEAR } : undefined,
    verticalAlign: VerticalAlign.CENTER,
    margins: { top: 80, bottom: 80, left: 100, right: 100 },
    children: paragrafos,
  });
}

function faixaTitulo(texto) {
  return new Table({
    width: { size: LARGURA, type: WidthType.DXA },
    columnWidths: [LARGURA],
    rows: [
      new TableRow({
        children: [celula(texto, { width: LARGURA, fill: COR_TITULO, color: 'FFFFFF', bold: true, center: true, size: 24 })],
      }),
    ],
  });
}

function faixaSecao(texto) {
  return new Table({
    width: { size: LARGURA, type: WidthType.DXA },
    columnWidths: [LARGURA],
    rows: [
      new TableRow({ children: [celula(texto, { width: LARGURA, fill: COR_FAIXA, bold: true, center: true })] }),
    ],
  });
}

function getImageDims(url, maxW = 360, maxH = 280) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const w = img.naturalWidth;
      const h = img.naturalHeight;
      const ratio = Math.min(maxW / w, maxH / h, 1);
      resolve({ width: Math.round(w * ratio), height: Math.round(h * ratio) });
    };
    img.onerror = () => resolve({ width: Math.round(maxW * 0.6), height: Math.round(maxH * 0.6) });
    img.src = url;
  });
}

function extTipo(file) {
  const t = (file && file.type) || '';
  if (t.includes('png')) return 'png';
  if (t.includes('gif')) return 'gif';
  if (t.includes('bmp')) return 'bmp';
  return 'jpg';
}

async function fotoArrayBuffer(foto) {
  if (foto.file) return foto.file.arrayBuffer();
  if (foto.dataUrl) {
    const res = await fetch(foto.dataUrl);
    return res.arrayBuffer();
  }
  throw new Error('Foto sem arquivo local');
}

function fotoTipo(foto) {
  if (foto.file) return extTipo(foto.file);
  const tipo = foto.tipo || foto.dataUrl?.slice(0, 40) || '';
  if (tipo.includes('png')) return 'png';
  if (tipo.includes('gif')) return 'gif';
  if (tipo.includes('bmp')) return 'bmp';
  return 'jpg';
}

function fotoSrc(foto) {
  if (foto.file) return URL.createObjectURL(foto.file);
  return foto.dataUrl || '';
}

function textoMetaRelatorio(meta) {
  if (!meta?.meta) return meta?.texto || '';
  return `${meta.texto} - Meta: ${meta.meta}`;
}

/**
 * Gera o .docx da visita, dispara o download no navegador e devolve o blob
 * (usado por src/actions/actions.js para depois enviar ao backend/Drive).
 * @param {object} visita - objeto de visita salvo em state.visitasSalvas
 * @returns {Promise<{blob: Blob, nomeArq: string}>}
 */
export async function gerarDocxVisita(visita) {
  if (!visita) return;

  // ---------- Cabeçalho ----------
  const wHead = Math.floor(LARGURA / 5);
  const tabelaCabecalho = new Table({
    width: { size: LARGURA, type: WidthType.DXA },
    columnWidths: [wHead, wHead, wHead, wHead, LARGURA - 4 * wHead],
    rows: [
      new TableRow({
        children: [
          celula('Chefe de Família', { width: wHead, fill: COR_FAIXA, bold: true, center: true }),
          celula('OSP', { width: wHead, fill: COR_FAIXA, bold: true, center: true }),
          celula('Técnico(a)', { width: wHead, fill: COR_FAIXA, bold: true, center: true }),
          celula('Visita', { width: wHead, fill: COR_FAIXA, bold: true, center: true }),
          celula('Data', { width: LARGURA - 4 * wHead, fill: COR_FAIXA, bold: true, center: true }),
        ],
      }),
      new TableRow({
        children: [
          celula(visita.chefeFamilia, { width: wHead, center: true }),
          celula(visita.osp, { width: wHead, center: true }),
          celula(visita.tecnicoNome, { width: wHead, center: true }),
          celula(visita.nomeVisita, { width: wHead, center: true }),
          celula(visita.data, { width: LARGURA - 4 * wHead, center: true }),
        ],
      }),
    ],
  });

  // ---------- Resumo da visita ----------
  const tabelaResumo = new Table({
    width: { size: LARGURA, type: WidthType.DXA },
    columnWidths: [LARGURA],
    rows: [
      new TableRow({ children: [celula('Resumo da Visita (Orientações oferecidas)', { width: LARGURA, fill: COR_FAIXA, bold: true })] }),
      new TableRow({ children: [celula(visita.resumoVisita || '—', { width: LARGURA })] }),
    ],
  });

  // ---------- Atividades programadas ----------
  // Importante: o merge vertical (Meta N / texto da meta abrangendo as 3 linhas
  // Integral/Parcial/Não realizada) usa SOMENTE `verticalMerge` (RESTART/CONTINUE).
  // Não combinar com `rowSpan` no mesmo conjunto de células — usar os dois
  // mecanismos juntos faz o Word duplicar/desalinhar colunas nessa tabela.
  const wLabel = 1700;
  const wTexto = 4600;
  const wMark = 800;
  const wCump = LARGURA - wLabel - wTexto - wMark;
  const linhasAtividades = [];

  visita.objetivosSnapshot.forEach((obj, oi) => {
    linhasAtividades.push(
      new TableRow({
        children: [
          celula(`Objetivo ${oi + 1}`, { width: wLabel, bold: true }),
          celula(obj.texto, { width: wTexto, bold: true }),
          celula('Cumprimento da Meta', { width: wMark + wCump, colSpan: 2, bold: true, center: true }),
        ],
      })
    );
    obj.metas.forEach((m, mi) => {
      const valor = visita.respostas[m.id] || 'Não realizada';
      ['Integral', 'Parcial', 'Não realizada'].forEach((op, oidx) => {
        const marcado = valor === op;
        linhasAtividades.push(
          new TableRow({
            children: [
              oidx === 0
                ? celula(`Meta ${mi + 1}`, { width: wLabel, merge: VerticalMergeType.RESTART })
                : celula('', { width: wLabel, merge: VerticalMergeType.CONTINUE }),
              oidx === 0
                ? celula(textoMetaRelatorio(m), { width: wTexto, merge: VerticalMergeType.RESTART })
                : celula('', { width: wTexto, merge: VerticalMergeType.CONTINUE }),
              celula(marcado ? 'x' : '', { width: wMark, center: true, bold: true }),
              celula(op, { width: wCump }),
            ],
          })
        );
      });
    });
  });
  const tabelaAtividades = new Table({
    width: { size: LARGURA, type: WidthType.DXA },
    columnWidths: [wLabel, wTexto, wMark, wCump],
    rows: linhasAtividades,
  });

  // ---------- Riscos e problemas ----------
  const linhasRiscos = [
    new TableRow({
      children: [
        celula('PROBLEMA ENCONTRADO', { width: LARGURA / 2, bold: true, center: true }),
        celula('PROPOSTA DE SOLUÇÃO', { width: LARGURA / 2, bold: true, center: true }),
      ],
    }),
  ];
  if (visita.riscos.length === 0) {
    linhasRiscos.push(
      new TableRow({
        children: [
          celula('Nenhum risco relatado nesta visita', { width: LARGURA / 2 }),
          celula('—', { width: LARGURA / 2 }),
        ],
      })
    );
  } else {
    visita.riscos.forEach((r) => {
      linhasRiscos.push(
        new TableRow({
          children: [
            celula(r.descricao || '—', { width: LARGURA / 2 }),
            celula(r.mitigacao || '—', { width: LARGURA / 2 }),
          ],
        })
      );
    });
  }
  const tabelaRiscos = new Table({ width: { size: LARGURA, type: WidthType.DXA }, columnWidths: [LARGURA / 2, LARGURA / 2], rows: linhasRiscos });

  // ---------- Conclusão ----------
  // Soma do resumo automático (gerado a partir do cumprimento de cada meta,
  // unificando respostas iguais) + o complemento de texto livre do ATEC.
  const resumoAutomatico = gerarResumoCumprimento(visita.objetivosSnapshot, visita.respostas);
  const paragrafosConclusao = [new Paragraph({ children: [new TextRun({ text: resumoAutomatico, size: 20 })] })];
  if (visita.conclusao && visita.conclusao.trim()) {
    paragrafosConclusao.push(new Paragraph({ children: [new TextRun({ text: visita.conclusao, size: 20 })] }));
  }

  const tabelaConclusao = new Table({
    width: { size: LARGURA, type: WidthType.DXA },
    columnWidths: [LARGURA],
    rows: [
      new TableRow({ children: [celula('Conclusão (Avaliações Técnicas)', { width: LARGURA, fill: COR_FAIXA, bold: true })] }),
      new TableRow({ children: [celulaParagrafos(paragrafosConclusao, { width: LARGURA })] }),
      new TableRow({ children: [celula('Próximos passos: ' + (visita.proximosPassos || '—'), { width: LARGURA })] }),
    ],
  });

  // ---------- Fotos (georreferenciadas ou não, com legenda opcional) ----------
  const blocosFotos = [];
  for (const f of visita.fotos) {
    let dims = { width: 240, height: 180 };
    const src = fotoSrc(f);
    try {
      dims = await getImageDims(src);
    } catch (e) {
      // mantém dimensões padrão se a imagem não puder ser lida
    }
    let buffer;
    try {
      buffer = await fotoArrayBuffer(f);
    } catch (e) {
      continue;
    }
    blocosFotos.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new ImageRun({ data: buffer, type: fotoTipo(f), transformation: dims })],
      })
    );
    if (f.legenda && f.legenda.trim()) {
      blocosFotos.push(
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: f.legenda, bold: true, size: 18 })],
        })
      );
    }
    const coordTxt = f.gps
      ? `Lat ${f.gps.lat.toFixed(5)}, Lng ${f.gps.lng.toFixed(5)}${f.gps.simulado ? ' (simulado)' : ''}`
      : 'Sem coordenada';
    blocosFotos.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({ text: `${coordTxt} · ${new Date(f.timestamp).toLocaleString('pt-BR')}`, size: 16, italics: true, color: '555555' }),
        ],
      })
    );
    blocosFotos.push(new Paragraph({ text: '' }));
  }
  if (blocosFotos.length === 0) {
    blocosFotos.push(
      new Paragraph({ children: [new TextRun({ text: 'Nenhuma foto registrada nesta visita.', italics: true, color: '888888' })] })
    );
  }

  const doc = new Document({
    sections: [
      {
        properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 720, right: 720, bottom: 720, left: 720 } } },
        children: [
          faixaTitulo('Relatório de Acompanhamento de Visita | ATER - Cadeia Produtiva do Cacau'),
          new Paragraph({ text: '' }),
          tabelaCabecalho,
          new Paragraph({ text: '' }),
          tabelaResumo,
          new Paragraph({ text: '' }),
          faixaSecao('Atividades Programadas'),
          tabelaAtividades,
          new Paragraph({ text: '' }),
          faixaSecao('Riscos e Problemas'),
          tabelaRiscos,
          new Paragraph({ text: '' }),
          tabelaConclusao,
          new Paragraph({ text: '' }),
          new Paragraph({
            children: [new TextRun({ text: 'Registros Fotográficos', bold: true, size: 24 })],
            alignment: AlignmentType.CENTER,
          }),
          new Paragraph({ text: '' }),
          ...blocosFotos,
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  const nomeArq = `Relatorio_ATER_${slug(visita.chefeFamilia)}_${slug(visita.nomeVisita)}.docx`;
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = nomeArq;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 1000);

  return { blob, nomeArq };
}
