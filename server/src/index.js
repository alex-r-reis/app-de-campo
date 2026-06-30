// server/src/index.js
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { criarPasta, enviarArquivo } from './driveService.js';
import { adicionarLinha, listarLinhas } from './sheetsService.js';
import { carregarDadosCampo } from './campoService.js';
import { getAppConfig, getAppVariant } from './appConfig.js';

const app = express();
app.use(cors());
app.use(express.json({ limit: '2mb' }));

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 25 * 1024 * 1024 }, // 25MB por arquivo
});

const CONFIG = getAppConfig();
const PASTA_RAIZ_ID = process.env.GOOGLE_DRIVE_FOLDER_ID || CONFIG.destinoDriveFolderId;
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || '';

/** Middleware simples de proteção do painel de administração.
 * Se ADMIN_TOKEN estiver definido no .env, exige o header x-admin-token.
 * Se não estiver definido, o painel fica aberto (modo desenvolvimento/local). */
function exigirAdmin(req, res, next) {
  if (!ADMIN_TOKEN) return next();
  const token = req.header('x-admin-token');
  if (token !== ADMIN_TOKEN) {
    return res.status(401).json({ erro: 'Token de administração inválido ou ausente.' });
  }
  next();
}

app.get('/api/health', (req, res) => {
  res.json({ ok: true, variant: getAppVariant(), mensagem: 'Servidor ATER Cacau Campo no ar.' });
});

// Configuração pública usada pelo painel de administração (links do Drive/Sheets)
app.get('/api/config', (req, res) => {
  res.json({
    variant: CONFIG.id,
    nome: CONFIG.nome,
    driveFolderUrl: PASTA_RAIZ_ID ? `https://drive.google.com/drive/folders/${PASTA_RAIZ_ID}` : null,
    sheetUrl: process.env.GOOGLE_SHEET_ID || CONFIG.destinoSheetId
      ? `https://docs.google.com/spreadsheets/d/${process.env.GOOGLE_SHEET_ID || CONFIG.destinoSheetId}`
      : null,
    exigeToken: Boolean(ADMIN_TOKEN),
  });
});

app.get('/api/campo/dados', async (req, res) => {
  try {
    const dados = await carregarDadosCampo(req.query.variant || getAppVariant());
    res.json(dados);
  } catch (err) {
    console.error('Erro ao carregar dados de campo:', err.message);
    res.status(500).json({ erro: err.message });
  }
});

// Lista as visitas já sincronizadas (lidas direto da planilha) — usado pelo painel de admin
app.get('/api/visitas', exigirAdmin, async (req, res) => {
  try {
    const linhas = await listarLinhas();
    res.json({ linhas });
  } catch (err) {
    console.error('Erro ao listar visitas:', err.message);
    res.status(500).json({ erro: err.message });
  }
});

// Recebe uma visita do app de campo: cria uma subpasta no Drive, envia o
// .docx e as fotos para lá, e registra uma linha na planilha.
app.post(
  '/api/visitas',
  upload.fields([
    { name: 'docx', maxCount: 1 },
    { name: 'fotos', maxCount: 30 },
  ]),
  async (req, res) => {
    try {
      const dados = JSON.parse(req.body.dados || '{}');

      const nomePasta = [dados.data, dados.chefeFamilia, dados.nomeVisita]
        .filter(Boolean)
        .join(' - ');
      const pasta = await criarPasta(nomePasta || `Visita ${Date.now()}`, PASTA_RAIZ_ID);

      let linkDocx = '';
      const arquivoDocx = req.files?.docx?.[0];
      if (arquivoDocx) {
        const enviado = await enviarArquivo({
          nome: arquivoDocx.originalname || 'relatorio.docx',
          mimeType: arquivoDocx.mimetype || 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          buffer: arquivoDocx.buffer,
          pastaId: pasta.id,
        });
        linkDocx = enviado.webViewLink || '';
      }

      const linksFotos = [];
      for (const foto of req.files?.fotos || []) {
        const enviado = await enviarArquivo({
          nome: foto.originalname || `foto_${linksFotos.length + 1}.jpg`,
          mimeType: foto.mimetype || 'image/jpeg',
          buffer: foto.buffer,
          pastaId: pasta.id,
        });
        linksFotos.push(enviado.webViewLink || '');
      }

      await adicionarLinha([
        dados.data || '',
        new Date().toLocaleTimeString('pt-BR'),
        dados.tecnicoNome || '',
        dados.chefeFamilia || '',
        dados.osp || '',
        dados.comunidade || '',
        dados.nomeVisita || '',
        dados.resumoVisita || '',
        dados.metasResumo || '',
        dados.conclusao || '',
        dados.proximosPassos || '',
        dados.riscosResumo || '',
        dados.gpsTexto || '',
        linkDocx,
        String(linksFotos.length),
        pasta.webViewLink || '',
        dados.atividadesDetalhadas || '',
      ]);

      res.json({ ok: true, pastaUrl: pasta.webViewLink, docxUrl: linkDocx, fotosUrls: linksFotos });
    } catch (err) {
      console.error('Erro ao sincronizar visita:', err);
      res.status(500).json({ ok: false, erro: err.message });
    }
  }
);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor ATER Cacau Campo rodando em http://localhost:${PORT}`);
  if (!ADMIN_TOKEN) {
    console.warn(
      'Aviso: ADMIN_TOKEN não definido — o painel de administração ficará acessível sem senha. ' +
        'Defina ADMIN_TOKEN em server/.env antes de usar fora da sua rede local.'
    );
  }
});

// Exportado apenas para facilitar testes automatizados/integração.
export { app };
