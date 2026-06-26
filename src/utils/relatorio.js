// src/utils/relatorio.js
// Gera o texto-resumo da Conclusão a partir do cumprimento de cada meta
// (Integral / Parcial / Não realizada), agrupando e unificando as metas que
// tiveram a mesma resposta — em vez de repetir uma frase por meta.

const ORDEM_STATUS = ['Integral', 'Parcial', 'Não realizada'];

const VERBOS = {
  Integral: { singular: 'foi cumprida integralmente', plural: 'foram cumpridas integralmente' },
  Parcial: { singular: 'foi cumprida parcialmente', plural: 'foram cumpridas parcialmente' },
  'Não realizada': { singular: 'não foi realizada', plural: 'não foram realizadas' },
};

function formatarLista(itens) {
  if (itens.length === 1) return itens[0];
  if (itens.length === 2) return `${itens[0]} e ${itens[1]}`;
  return `${itens.slice(0, -1).join(', ')} e ${itens[itens.length - 1]}`;
}

/**
 * @param {Array} objetivosSnapshot - fam.plano.objetivos (ou snapshot salvo na visita)
 * @param {object} respostas - {metaId: 'Integral'|'Parcial'|'Não realizada'}
 * @returns {string}
 */
export function gerarResumoCumprimento(objetivosSnapshot, respostas) {
  const metas = (objetivosSnapshot || []).flatMap((o) => o.metas);
  if (metas.length === 0) return 'Nenhuma meta cadastrada para esta visita.';

  const grupos = { Integral: [], Parcial: [], 'Não realizada': [] };
  metas.forEach((m, idx) => {
    const status = respostas?.[m.id] || 'Não realizada';
    (grupos[status] || grupos['Não realizada']).push(idx + 1);
  });

  const frases = [];
  ORDEM_STATUS.forEach((status) => {
    const numeros = grupos[status];
    if (!numeros || numeros.length === 0) return;
    const lista = formatarLista(numeros.map((n) => `Meta ${n}`));
    const verbo = numeros.length === 1 ? VERBOS[status].singular : VERBOS[status].plural;
    frases.push(`${lista} ${verbo}.`);
  });

  if (frases.length === 0) return 'Nenhuma meta avaliada nesta visita.';
  return frases.join(' ');
}
