// src/utils/cronograma.js
// Calcula automaticamente o "Próximos passos" do relatório com base na etapa
// atual da visita, seguindo a sequência real do cronograma de ATER
// (Visita Técnica I → II → III → Dia de Campo → Visita Técnica IV).

import { VISITAS_PADRAO } from '../data/tecnicos.js';

/**
 * Retorna o nome da próxima etapa prevista no cronograma, dado o nome da
 * etapa/visita atual. Se a etapa atual não for encontrada na sequência ou
 * for a última, indica o encerramento do ciclo.
 * @param {string} nomeAtual
 * @returns {string}
 */
export function proximaEtapa(nomeAtual) {
  const idx = VISITAS_PADRAO.indexOf(nomeAtual);
  if (idx === -1 || idx === VISITAS_PADRAO.length - 1) {
    return 'Encerramento do ciclo de acompanhamento';
  }
  return VISITAS_PADRAO[idx + 1];
}
