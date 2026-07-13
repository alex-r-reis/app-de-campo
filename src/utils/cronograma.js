import { VISITAS_PADRAO } from '../data/tecnicos.js';

export function proximaEtapa(nomeAtual, visitas = VISITAS_PADRAO) {
  const idx = visitas.indexOf(nomeAtual);
  if (idx === -1 || idx === visitas.length - 1) {
    return '';
  }
  return visitas[idx + 1];
}
