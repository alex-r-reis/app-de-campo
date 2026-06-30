// server/src/sheetsService.js
// Cada visita sincronizada vira uma linha na planilha (aba "Visitas").

import { getSheets } from './google.js';
import { getAppConfig } from './appConfig.js';

const ABA = process.env.GOOGLE_SHEET_TAB_NAME || 'Visitas';

function sheetIdParaVariant(variant) {
  const config = getAppConfig(variant);
  return process.env.GOOGLE_SHEET_ID || config.destinoSheetId;
}

function exigirSheetId(sheetId) {
  if (!sheetId) {
    throw new Error('GOOGLE_SHEET_ID não configurado em server/.env');
  }
}

/**
 * Adiciona uma linha ao final da planilha.
 * @param {Array<string>} valores
 * @param {string} variant
 */
export async function adicionarLinha(valores, variant) {
  const sheetId = sheetIdParaVariant(variant);
  exigirSheetId(sheetId);
  const sheets = getSheets();
  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: `${ABA}!A:A`,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values: [valores] },
  });
}

/**
 * Lê todas as linhas de dados (a partir da linha 2, pulando o cabeçalho).
 * Usado pelo painel de administração.
 * @param {string} variant
 */
export async function listarLinhas(variant) {
  const sheetId = sheetIdParaVariant(variant);
  exigirSheetId(sheetId);
  const sheets = getSheets();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: `${ABA}!A2:Z`,
  });
  return res.data.values || [];
}
