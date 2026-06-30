const VARIANTES = {
  cacau_i: {
    id: 'cacau_i',
    nome: 'Cacau I',
    respostasSpreadsheetId: '1EksAOYswZ4MozlrGHnwA5zVyH0xAsVYWi_5f_I1Rzls',
    respostasSheetName: 'Respostas ao formulário 1',
    catalogoSpreadsheetId: '1EksAOYswZ4MozlrGHnwA5zVyH0xAsVYWi_5f_I1Rzls',
    catalogoGid: '142660285',
    etapas: [
      'Visita Técnica III',
      'Visita Técnica IV',
      'Dia de Campo II - Controle Integrado de Pragas e Doenças (MIPD)',
    ],
  },
  cacau_ii: {
    id: 'cacau_ii',
    nome: 'Cacau II',
    respostasSpreadsheetId: '1ZH_agLukxYtnKCRdWXYR19Qehr7wCUzL2P50-hWNvPk',
    respostasSheetName: 'Respostas ao formulário 1',
    catalogoSpreadsheetId: '1ZH_agLukxYtnKCRdWXYR19Qehr7wCUzL2P50-hWNvPk',
    catalogoGid: '1277230255',
    etapas: [
      'Visita Técnica I',
      'Visita Técnica II',
      'Visita Técnica III',
      'Visita Técnica IV',
      'Dia de Campo I - Controle Integrado de Pragas e Doenças (MIPD)',
      'Dia de Campo II - Adubação e Manejo da Fertilidade do Solo com Uso de Alternativas Locais',
      'Dia de Campo III - Poda (Formação e Produção)',
    ],
  },
};

export const APP_VARIANT = import.meta.env?.VITE_APP_VARIANT || 'cacau_i';

export function appConfig() {
  return VARIANTES[APP_VARIANT] || VARIANTES.cacau_i;
}

export function visitasPadrao() {
  return appConfig().etapas;
}
