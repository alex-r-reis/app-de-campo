// server/src/driveService.js
// Cria uma subpasta por visita (dentro da pasta raiz configurada em
// GOOGLE_DRIVE_FOLDER_ID) e envia para lá o .docx do relatório e as fotos.

import { Readable } from 'node:stream';
import { getDrive } from './google.js';

/**
 * Cria uma pasta no Drive.
 * @param {string} nome
 * @param {string|undefined} pastaPaiId
 */
export async function criarPasta(nome, pastaPaiId) {
  const drive = getDrive();
  const res = await drive.files.create({
    requestBody: {
      name: nome,
      mimeType: 'application/vnd.google-apps.folder',
      parents: pastaPaiId ? [pastaPaiId] : undefined,
    },
    fields: 'id, webViewLink',
  });
  return res.data; // { id, webViewLink }
}

/**
 * Envia um arquivo (buffer em memória) para uma pasta do Drive.
 * @param {{nome: string, mimeType: string, buffer: Buffer, pastaId?: string}} opts
 */
export async function enviarArquivo({ nome, mimeType, buffer, pastaId }) {
  const drive = getDrive();
  const res = await drive.files.create({
    requestBody: {
      name: nome,
      parents: pastaId ? [pastaId] : undefined,
    },
    media: {
      mimeType,
      body: Readable.from(buffer),
    },
    fields: 'id, webViewLink, webContentLink',
  });
  return res.data; // { id, webViewLink, webContentLink }
}
