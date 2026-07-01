// src/utils/relatorio.js
// Gera o texto-resumo da conclusao a partir do cumprimento de cada meta,
// agrupando metas com a mesma resposta para evitar repeticao desnecessaria.

const ORDEM_STATUS = ['Integral', 'Parcial', 'Nao realizada'];

const TEXTOS_PADRAO = {
  Integral:
    'foram cumpridas integralmente, conforme o planejamento estabelecido, com a execu\u00e7\u00e3o de todas as atividades previstas.',
  Parcial:
    'foram cumpridas parcialmente, com a execu\u00e7\u00e3o de parte das atividades previstas, permanecendo as a\u00e7\u00f5es remanescentes programadas para as pr\u00f3ximas etapas.',
  'Nao realizada':
    'n\u00e3o foram realizadas, tendo sua execu\u00e7\u00e3o sido reprogramada para as pr\u00f3ximas etapas ou canceladas.',
};

const STATUS_NORMALIZADO = {
  Integral: 'Integral',
  Parcial: 'Parcial',
  'Nao realizada': 'Nao realizada',
  'Não realizada': 'Nao realizada',
  'NÃ£o realizada': 'Nao realizada',
};

function formatarLista(itens) {
  if (itens.length === 1) return itens[0];
  if (itens.length === 2) return `${itens[0]} e ${itens[1]}`;
  return `${itens.slice(0, -1).join(', ')} e ${itens[itens.length - 1]}`;
}

/**
 * @param {Array} objetivosSnapshot - fam.plano.objetivos (ou snapshot salvo na visita)
 * @param {object} respostas - {metaId: 'Integral'|'Parcial'|'Nao realizada'}
 * @returns {string}
 */
export function gerarResumoCumprimento(objetivosSnapshot, respostas) {
  const metas = (objetivosSnapshot || []).flatMap((o) => o.metas);
  if (metas.length === 0) return 'Nenhuma meta cadastrada para esta visita.';

  const grupos = { Integral: [], Parcial: [], 'Nao realizada': [] };
  metas.forEach((m, idx) => {
    const status = STATUS_NORMALIZADO[respostas?.[m.id]] || 'Nao realizada';
    grupos[status].push(idx + 1);
  });

  const frases = [];
  ORDEM_STATUS.forEach((status) => {
    const numeros = grupos[status];
    if (!numeros || numeros.length === 0) return;
    const lista = formatarLista(numeros.map((n) => `Meta ${n}`));
    frases.push(`${lista} ${TEXTOS_PADRAO[status]}`);
  });

  if (frases.length === 0) return 'Nenhuma meta avaliada nesta visita.';
  return frases.join(' ');
}
