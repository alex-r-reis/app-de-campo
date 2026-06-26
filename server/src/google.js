// server/src/google.js
// Autenticação via Service Account (conta de serviço) do Google Cloud.
// Não usa OAuth interativo: o backend autentica direto com a chave privada
// da conta de serviço, então cada técnico não precisa logar com Google.
//
// Pré-requisito: a pasta do Drive e a planilha do Sheets precisam estar
// COMPARTILHADAS com o e-mail da conta de serviço (GOOGLE_SERVICE_ACCOUNT_EMAIL),
// com permissão de "Editor". Veja o passo a passo no README principal.

import { google } from 'googleapis';

let cachedAuth = null;

export function getAuth() {
  if (cachedAuth) return cachedAuth;

  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!email || !rawKey) {
    throw new Error(
      'Credenciais do Google não configuradas. Defina GOOGLE_SERVICE_ACCOUNT_EMAIL e ' +
        'GOOGLE_PRIVATE_KEY em server/.env (veja server/.env.example).'
    );
  }

  // No .env, quebras de linha da chave privada vêm escritas como "\n" literal —
  // aqui convertemos de volta para quebras de linha reais.
  const key = rawKey.replace(/\\n/g, '\n');

  cachedAuth = new google.auth.JWT({
    email,
    key,
    scopes: [
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  });

  return cachedAuth;
}

export function getDrive() {
  return google.drive({ version: 'v3', auth: getAuth() });
}

export function getSheets() {
  return google.sheets({ version: 'v4', auth: getAuth() });
}
