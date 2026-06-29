import { opcoesProximaEtapa } from '../data/atividades.js';

export function proximaEtapa(nomeAtual) {
  return opcoesProximaEtapa(nomeAtual)[0] || 'Encerramento do ciclo de acompanhamento';
}
