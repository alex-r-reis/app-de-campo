const VARIANTES = {
  cacau_i: {
    id: 'cacau_i',
    nome: 'Cacau I',
    respostasSpreadsheetId: '1EksAOYswZ4MozlrGHnwA5zVyH0xAsVYWi_5f_I1Rzls',
    respostasSheetName: 'Respostas ao formulário 1',
    catalogoSpreadsheetId: '1EksAOYswZ4MozlrGHnwA5zVyH0xAsVYWi_5f_I1Rzls',
    catalogoGid: '142660285',
    etapas: [
      { nome: 'Visita Técnica III', coluna: 'Quais práticas serão realizadas (III)' },
      { nome: 'Visita Técnica IV', coluna: 'Quais práticas serão realizadas IV' },
      {
        nome: 'Dia de Campo II - Controle Integrado de Pragas e Doenças (MIPD)',
        fixas: ['Dia de Campo II - Controle Integrado de Pragas e Doenças (MIPD)'],
      },
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
      { nome: 'Visita Técnica I', coluna: 'Quais práticas serão realizadas (I)' },
      { nome: 'Visita Técnica II', coluna: 'Quais práticas serão realizadas (II)' },
      { nome: 'Visita Técnica III', coluna: 'Quais práticas serão realizadas (III)' },
      { nome: 'Visita Técnica IV', coluna: 'Quais práticas serão realizadas IV' },
      {
        nome: 'Dia de Campo I - Controle Integrado de Pragas e Doenças (MIPD)',
        fixas: ['Dia de Campo I - Controle Integrado de Pragas e Doenças (MIPD)'],
      },
      {
        nome: 'Dia de Campo II - Adubação e Manejo da Fertilidade do Solo com Uso de Alternativas Locais',
        fixas: ['Dia de Campo II - Adubação e Manejo da Fertilidade do Solo com Uso de Alternativas Locais'],
      },
      {
        nome: 'Dia de Campo III - Poda (Formação e Produção)',
        fixas: ['Dia de Campo III - Poda (Formação e Produção)'],
      },
    ],
  },
};

export const APP_VARIANT = import.meta.env?.VITE_APP_VARIANT || 'cacau_i';

export function appConfig() {
  return VARIANTES[APP_VARIANT] || VARIANTES.cacau_i;
}

export function visitasPadrao() {
  return appConfig().etapas.map((etapa) => etapa.nome);
}
