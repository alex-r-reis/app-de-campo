# ATER Cacau Campo

App de campo (online/offline) para técnicos de ATER coletarem relatórios de
acompanhamento de visita na cadeia produtiva do cacau — com lista de famílias
atendidas, plano de implementação já cadastrado, captura de GPS, fotos
georreferenciadas, geração automática do relatório em **.docx**, sincronização
automática com uma **pasta no Google Drive** e uma **planilha no Google
Sheets**, e um **painel de administração** para acompanhar tudo.

> Stack do app de campo: **Vite + JavaScript puro (vanilla)**, sem framework de UI.
> Stack do backend: **Node.js + Express**, usando a biblioteca oficial `googleapis`.

---

## 1. Visão geral da arquitetura

```
┌─────────────────────┐        HTTP (multipart/form-data)        ┌──────────────────────┐
│  App de campo        │ ───────────────────────────────────────▶ │  Backend (server/)    │
│  (index.html)         │                                          │  Node + Express        │
│  - login do ATEC       │ ◀─────────────────────────────────────  │  - cria pasta no Drive  │
│  - famílias/plano       │              JSON (status)              │  - sobe .docx + fotos   │
│  - GPS, fotos, .docx      │                                       │  - adiciona linha no    │
└─────────────────────┘                                            │    Google Sheets         │
                                                                     └──────────┬───────────┘
┌─────────────────────┐        HTTP (GET /api/visitas)                         │
│  Painel admin         │ ◀──────────────────────────────────────────────────┘
│  (admin.html)          │
│  - lista visitas         │
│  - link p/ pasta no Drive │
│  - link p/ planilha        │
└─────────────────────┘
```

O app de campo **nunca fala direto com o Google** — ele envia os dados para
o backend, e é o backend (com uma conta de serviço do Google Cloud) quem sobe
os arquivos para o Drive e escreve na planilha. Isso evita que cada técnico
precise fazer login com uma conta Google própria.

## 2. Requisitos

- [Node.js](https://nodejs.org/) 18 ou superior (recomendado 18 LTS / 20 LTS)
- npm 9+ (vem com o Node)
- VS Code (ou qualquer editor)
- Uma conta Google e acesso ao [Google Cloud Console](https://console.cloud.google.com/) (gratuito) para criar a conta de serviço

## 3. Instalação

Este projeto tem **duas partes**: o app de campo (raiz) e o backend (pasta `server/`).
Instale as duas:

```bash
# app de campo
npm install

# backend
cd server
npm install
cd ..
```

## 4. Configurando a integração com Google Drive e Sheets

### 4.1 Criar a conta de serviço (Service Account)

1. Acesse o [Google Cloud Console](https://console.cloud.google.com/) e crie um projeto (ou use um existente).
2. No menu, vá em **APIs e serviços → Biblioteca** e ative:
   - **Google Drive API**
   - **Google Sheets API**
3. Vá em **APIs e serviços → Credenciais → Criar credenciais → Conta de serviço**.
4. Dê um nome (ex.: `ater-cacau-campo`) e conclua a criação.
5. Na conta de serviço criada, vá em **Chaves → Adicionar chave → Criar nova chave → JSON**.
   Um arquivo `.json` será baixado — **guarde-o com cuidado, ele não pode ser versionado**.
6. Anote o **e-mail da conta de serviço** (campo `client_email` no JSON, termina em `...iam.gserviceaccount.com`).

### 4.2 Criar e compartilhar a pasta no Google Drive

1. Crie uma pasta no seu Google Drive (ex.: "ATER Cacau Campo - Relatórios").
2. Compartilhe essa pasta com o e-mail da conta de serviço (passo anterior), com permissão de **Editor**.
3. Copie o **ID da pasta** a partir da URL: `https://drive.google.com/drive/folders/1oVUgyb5qLx9dAeLzrHw7fr78s73SGMFh?hl=pt-br`.

### 4.3 Criar e compartilhar a planilha no Google Sheets

1. Crie uma planilha nova no Google Sheets.
2. Na primeira aba, renomeie para `Visitas` (ou outro nome, e ajuste `GOOGLE_SHEET_TAB_NAME`).
3. Na primeira linha, adicione os cabeçalhos (sugestão, 16 colunas):
   `Data | Hora | Técnico | Chefe de Família | OSP | Comunidade | Visita | Resumo | Metas | Conclusão | Próximos passos | Riscos | GPS | Relatório | Qtde Fotos | Pasta no Drive`
4. Compartilhe a planilha com o e-mail da conta de serviço, com permissão de **Editor**.
5. Copie o **ID da planilha** a partir da URL: `https://docs.google.com/spreadsheets/d/ESTE_TRECHO_É_O_ID/edit`.

### 4.4 Preencher o `.env` do backend

```bash
cd server
cp .env.example .env
```

Abra `server/.env` e preencha:
- `GOOGLE_SERVICE_ACCOUNT_EMAIL` → o `client_email` do JSON
- `GOOGLE_PRIVATE_KEY` → o `private_key` do JSON (mantenha as quebras de linha como `\n`, entre aspas)
- `GOOGLE_DRIVE_FOLDER_ID` → ID da pasta (passo 4.2)
- `GOOGLE_SHEET_ID` → ID da planilha (passo 4.3)
- `ADMIN_TOKEN` → defina uma senha simples para proteger o painel de administração (recomendado fora da sua rede local)

### 4.5 Preencher o `.env` do app de campo

Na raiz do projeto:

```bash
cp .env.example .env
```

Por padrão, `VITE_API_BASE_URL=http://localhost:3001` já aponta para o backend local — não precisa mudar nada se for rodar tudo na mesma máquina.

## 5. Rodando localmente

Você precisa de **dois terminais abertos** (backend + app de campo):

**Terminal 1 — backend:**
```bash
cd server
npm run dev
```
Vai mostrar: `Servidor ATER Cacau Campo rodando em http://localhost:3001`

**Terminal 2 — app de campo:**
```bash
npm run dev
```
Vai mostrar o endereço do app (`http://localhost:5173`) e do painel de administração (`http://localhost:5173/admin.html`).

> Sem o backend rodando, o app de campo continua funcionando normalmente
> (login, plano, visita, GPS, fotos, geração local do `.docx`) — só a
> sincronização com Drive/Sheets e o painel de administração precisam dele.

## 6. Build de produção

```bash
npm run build      # gera dist/ com index.html e admin.html
npm run preview    # testa o build localmente

cd server
npm start          # roda o backend em modo produção
```

Em produção, hospede o backend em um servidor com Node (ex.: Render, Railway,
uma VPS) e ajuste `VITE_API_BASE_URL` para a URL pública dele antes do build
do app de campo.

## 7. Estrutura de pastas

```
ater-cacau-campo/
├── index.html                  # App de campo (técnicos)
├── admin.html                   # Painel de administração
├── package.json
├── vite.config.js               # build multi-página (index + admin)
├── tsconfig.json
├── .env.example
├── .gitignore
├── .vscode/
│   └── extensions.json
├── public/
└── src/
    ├── main.js                   # entrada do app de campo
    ├── admin.js                   # entrada do painel de administração
    ├── render.js
    ├── styles/main.css
    ├── data/
    │   ├── tecnicos.js            # 16 ATECs reais + VISITAS_PADRAO
    │   └── familias.js            # 323 famílias reais
    ├── state/store.js
    ├── actions/actions.js
    ├── services/
    │   └── api.js                 # comunicação com o backend (Drive/Sheets)
    ├── docx/gerarDocx.js
    └── screens/
        ├── topbar.js, login.js, familias.js, plano.js, visita.js, fila.js
└── server/                       # Backend Node + Express
    ├── package.json
    ├── .env.example
    └── src/
        ├── index.js               # rotas da API (POST/GET /api/visitas)
        ├── google.js               # autenticação (conta de serviço)
        ├── driveService.js         # upload de pastas/arquivos no Drive
        └── sheetsService.js        # leitura/escrita no Sheets
```

## 8. Fluxo da aplicação

1. **Login** → escolhe o(a) ATEC (lista real de 16 técnicos)
2. **Famílias atendidas** → lista das famílias daquele técnico (323 famílias reais)
3. **Plano** → objetivos/metas já cadastrados na base para aquela família (área é editável)
4. **Visita** → captura GPS, fotos georreferenciadas, marca cumprimento de cada
   meta (Integral/Parcial/Não realizada), registra riscos/problemas e
   propostas de solução, conclusão técnica e próximos passos
5. **Salvar** → grava a visita no dispositivo (mesmo offline) e gera/baixa
   automaticamente o `.docx` do relatório
6. **Fila de envio** → mostra relatórios pendentes; ao sincronizar (com
   internet), o backend:
   - cria uma **subpasta no Drive** (nomeada com data + família + visita)
   - sobe o **.docx** e todas as **fotos** para essa subpasta
   - adiciona **uma linha na planilha** do Google Sheets com os dados da visita e os links gerados
7. **Painel de administração** (`admin.html`) → lista todas as visitas
   sincronizadas (lidas direto da planilha) e tem botões para abrir a pasta
   raiz do Drive e a planilha completa

### Sobre os dados

- `src/data/tecnicos.js` e `src/data/familias.js` contêm a base real
  fornecida (16 ATECs, 323 famílias, OSP e município de cada uma).
- A família **Elenilton Gomes da Silva** (ATEC: Wellington Varela de Fraga,
  OSP: FVPP, Brasil Novo) usa o **plano de implementação real** extraído do
  documento oficial (Visita Técnica III: Adubação de cova/cobertura,
  Capacitação em poda, Capacitação em renovação de áreas).
- As demais famílias usam um **plano-modelo genérico**, baseado no
  "Cardápio de Práticas e Atividades Técnicas" (Anexo III do plano real),
  até que os planos individuais de cada família sejam cadastrados.

### Sobre o offline

- O app detecta `navigator.onLine` e tem um botão no topo para **simular
  modo offline** manualmente (útil para testes).
- Relatórios salvos offline ficam na **fila de envio** com selo "pendente"
  até serem sincronizados — a sincronização real com Drive/Sheets só roda
  quando o app está online e o backend está acessível.
- A geração do `.docx` roda inteiramente no navegador (a biblioteca `docx`
  é empacotada pelo Vite no build, sem depender de CDN).
- **Importante:** hoje a fila de visitas salvas fica em memória (estado
  JavaScript) — se a aba do navegador for fechada antes de sincronizar, a
  fila se perde. Para persistência real entre sessões, o próximo passo é
  salvar `state.visitasSalvas` em IndexedDB.

### Sobre o painel de administração

- Acesse em `http://localhost:5173/admin.html` (em produção, no mesmo domínio do app de campo, trocando `/` por `/admin.html`).
- Se `ADMIN_TOKEN` estiver definido no `server/.env`, o painel pede esse
  token antes de listar os dados (ele fica salvo só na sessão do navegador,
  via `sessionStorage`).
- Se `ADMIN_TOKEN` estiver vazio, o painel fica aberto sem senha — adequado
  apenas para uso em rede local/confiável.

## 9. Comandos rápidos

```bash
# app de campo
npm install
npm run dev        # http://localhost:5173 (app) e /admin.html (painel)
npm run build
npm run preview

# backend
cd server
npm install
npm run dev         # http://localhost:3001
npm start           # modo produção
```

## 10. Como abrir no VS Code

1. Extraia o projeto (ou clone o repositório) em uma pasta no seu computador.
2. Abra o VS Code e use **File → Open Folder...** (ou `code .` no terminal).
3. Abra **dois terminais integrados** (`` Ctrl+` ``, depois o botão de "+"):
   - Terminal 1: `cd server && npm install && npm run dev`
   - Terminal 2: `npm install && npm run dev`
4. `Ctrl+clique` nos links que aparecem nos terminais para abrir no navegador.
5. (Opcional) Instale as extensões recomendadas que o VS Code vai sugerir.

## 11. Possíveis problemas e soluções

| Sintoma | Causa provável | Solução |
|---|---|---|
| `npm install` falha por versão do Node | Node muito antigo | Atualize para Node 18+ (`nvm install 18`) |
| Painel admin mostra "Não foi possível conectar ao servidor" | Backend não está rodando | Rode `cd server && npm run dev` em outro terminal |
| Sincronizar dá erro / fica "pendente" sempre | Credenciais do Google incorretas, ou pasta/planilha não compartilhada com a conta de serviço | Revise a seção 4; confira o terminal do backend para a mensagem de erro exata |
| `GOOGLE_PRIVATE_KEY` causa erro de autenticação | Quebras de linha perdidas ao copiar a chave | Mantenha o valor inteiro entre aspas duplas, com `\n` literal (não quebras de linha reais) no arquivo `.env` |
| GPS não captura no navegador desktop | Navegador sem permissão/sem GPS de hardware | O app já cai automaticamente para coordenada **simulada** próxima do município da família |
| Câmera não abre ao clicar em "Adicionar fotos" | Testando fora de `localhost`/HTTPS | Acesse via `http://localhost:5173` no próprio PC, ou configure HTTPS para testar em outro dispositivo |
| Porta 5173 ou 3001 já em uso | Outro processo rodando | Pare o outro processo, ou mude a porta (`vite --port 5174` / `PORT=3002` no `server/.env`) |

---

Projeto gerado a partir do protótipo funcional (HTML único) já validado,
reorganizado em módulos para desenvolvimento contínuo em ambiente local, com
backend de sincronização com Google Drive/Sheets e painel de administração.

