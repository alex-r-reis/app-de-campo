import { VISITAS_PADRAO } from '../data/tecnicos.js';

export function proximaEtapa(nomeAtual) {
  const idx = VISITAS_PADRAO.indexOf(nomeAtual);
  if (idx === -1 || idx === VISITAS_PADRAO.length - 1) {
    return 'Encerramento do ciclo de acompanhamento';
  }
  return VISITAS_PADRAO[idx + 1];
}
