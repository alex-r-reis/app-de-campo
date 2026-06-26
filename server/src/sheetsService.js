// server/src/sheetsService.js
// Cada visita sincronizada vira uma linha na planilha (aba "Visitas").
// A primeira linha da aba deve conter os cabeçalhos (ver README) — o backend
// só faz "append" (adiciona linha no final), nunca sobrescreve nada.

import { getSheets } from './google.js';

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const ABA = process.env.GOOGLE_SHEET_TAB_NAME || 'Visitas';

function exigirSheetId() {
  if (!SHEET_ID) {
    throw new Error('GOOGLE_SHEET_ID não configurado em server/.env');
  }
}

/**
 * Adiciona uma linha ao final da planilha.
 * @param {Array<string>} valores
 */
export async function adicionarLinha(valores) {
  exigirSheetId();
  const sheets = getSheets();
  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: `${ABA}!A:A`,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: { values: [valores] },
  });
}

/**
 * Lê todas as linhas de dados (a partir da linha 2, pulando o cabeçalho).
 * Usado pelo painel de administração.
 */
export async function listarLinhas() {
  exigirSheetId();
  const sheets = getSheets();
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: `${ABA}!A2:Z`,
  });
  return res.data.values || [];
}
