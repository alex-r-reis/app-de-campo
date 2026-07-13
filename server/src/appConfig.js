const VARIANTES = {
  cacau_i: {
    id: 'cacau_i',
    nome: 'Cacau I',
    respostasSpreadsheetId: '1EksAOYswZ4MozlrGHnwA5zVyH0xAsVYWi_5f_I1Rzls',
    respostasSheetName: 'Respostas ao formulário 1',
    catalogoSpreadsheetId: '1EksAOYswZ4MozlrGHnwA5zVyH0xAsVYWi_5f_I1Rzls',
    catalogoGid: '142660285',
    destinoDriveFolderId: '1TR9AD40zh5AJr8DL9R5PGqLzLzp70CC3',
    destinoSheetId: '11DvDXRJy7MwV0WIeYWafrBGiQJNqA8Mxk08S7khDMRs',
    etapas: [
      { nome: 'Visita Técnica III', coluna: 'Quais práticas serão realizadas (III)' },
      {
        nome: 'Dia de Campo II - Controle Integrado de Pragas e Doenças (MIPD)',
        fixas: ['Dia de Campo II - Controle Integrado de Pragas e Doenças (MIPD)'],
      },
      { nome: 'Visita Técnica IV', coluna: 'Quais práticas serão realizadas IV' },
    ],
  },
  cacau_ii: {
    id: 'cacau_ii',
    nome: 'Cacau II',
    respostasSpreadsheetId: '1aGw29AO-CNsJrRFbSAAQS89c-wDsNWDj_kcTmZUSB8Q',
    respostasSheetName: 'Respostas ao formulário 1',
    catalogoSpreadsheetId: '1aGw29AO-CNsJrRFbSAAQS89c-wDsNWDj_kcTmZUSB8Q',
    catalogoGid: '1277230255',
    destinoDriveFolderId: '11LOzXsewOhAjuXEobaNg1o5rJEQwlhos',
    destinoSheetId: '1gS1tk6N_R9Onsi9FOoP8-I5VvdgBnn5La7c9mSa4WWk',
    etapas: [
      { nome: 'Visita Técnica I', coluna: 'Quais práticas serão realizadas (I)' },
      {
        nome: 'Dia de Campo I - Controle Integrado de Pragas e Doenças (MIPD)',
        fixas: ['Dia de Campo I - Controle Integrado de Pragas e Doenças (MIPD)'],
      },
      { nome: 'Visita Técnica II', coluna: 'Quais práticas serão realizadas (II)' },
      {
        nome: 'Dia de Campo II - Adubação e Manejo da Fertilidade do Solo com Uso de Alternativas Locais',
        fixas: ['Dia de Campo II - Adubação e Manejo da Fertilidade do Solo com Uso de Alternativas Locais'],
      },
      { nome: 'Visita Técnica III', coluna: 'Quais práticas serão realizadas (III)' },
      {
        nome: 'Dia de Campo III - Poda (Formação e Produção)',
        fixas: ['Dia de Campo III - Poda (Formação e Produção)'],
      },
      { nome: 'Visita Técnica IV', coluna: 'Quais práticas serão realizadas IV' },
    ],
  },
};

export function getAppVariant() {
  return process.env.APP_VARIANT || process.env.VITE_APP_VARIANT || 'cacau_i';
}

export function getAppConfig(variant = getAppVariant()) {
  return VARIANTES[variant] || VARIANTES.cacau_i;
}
