export const VARIANTES = {
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
    respostasSpreadsheetId: '1aGw29AO-CNsJrRFbSAAQS89c-wDsNWDj_kcTmZUSB8Q',
    respostasSheetName: 'Respostas ao formulário 1',
    catalogoSpreadsheetId: '1aGw29AO-CNsJrRFbSAAQS89c-wDsNWDj_kcTmZUSB8Q',
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

export const APP_VARIANT = import.meta.env?.VITE_APP_VARIANT || '';

export function contratosDisponiveis() {
  return Object.values(VARIANTES).map(({ id, nome }) => ({ id, nome }));
}

export function appConfig(variant = APP_VARIANT || 'cacau_i') {
  return VARIANTES[variant] || VARIANTES.cacau_i;
}

export function visitasPadrao(variant = APP_VARIANT || 'cacau_i') {
  return appConfig(variant).etapas.map((etapa) => etapa.nome);
}
