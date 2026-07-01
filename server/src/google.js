// server/src/google.js
// Autenticacao Google para Drive/Sheets.
//
// Preferimos OAuth de usuario quando configurado, pois Service Accounts nao
// possuem cota de armazenamento no "Meu Drive" e falham ao criar arquivos.
// A Service Account fica como fallback para ambientes com Shared Drives.

import { google } from 'googleapis';

const SCOPES = [
  'https://www.googleapis.com/auth/drive',
  'https://www.googleapis.com/auth/spreadsheets',
];

let cachedAuth = null;

export function getAuth() {
  if (cachedAuth) return cachedAuth;

  const oauthClientId = process.env.GOOGLE_OAUTH_CLIENT_ID;
  const oauthClientSecret = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
  const oauthRefreshToken = process.env.GOOGLE_OAUTH_REFRESH_TOKEN;

  if (oauthClientId || oauthClientSecret || oauthRefreshToken) {
    if (!oauthClientId || !oauthClientSecret || !oauthRefreshToken) {
      throw new Error(
        'Credenciais OAuth incompletas. Defina GOOGLE_OAUTH_CLIENT_ID, ' +
          'GOOGLE_OAUTH_CLIENT_SECRET e GOOGLE_OAUTH_REFRESH_TOKEN.'
      );
    }

    const oauth = new google.auth.OAuth2(oauthClientId, oauthClientSecret);
    oauth.setCredentials({ refresh_token: oauthRefreshToken });
    cachedAuth = oauth;
    return cachedAuth;
  }

  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!email || !rawKey) {
    throw new Error(
      'Credenciais do Google nao configuradas. Defina credenciais OAuth ou ' +
        'GOOGLE_SERVICE_ACCOUNT_EMAIL e GOOGLE_PRIVATE_KEY.'
    );
  }

  const key = rawKey.replace(/\\n/g, '\n');

  cachedAuth = new google.auth.JWT({
    email,
    key,
    scopes: SCOPES,
  });

  return cachedAuth;
}

export function getDrive() {
  return google.drive({ version: 'v3', auth: getAuth() });
}

export function getSheets() {
  return google.sheets({ version: 'v4', auth: getAuth() });
}
