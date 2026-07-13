import { atividadePorNome, opcoesProximaEtapa } from '../data/atividades.js';
import {
  state,
  getFamilia,
  isOnline,
  fmtCoord,
  fmtDataHoje,
  objetivosAtivos,
  metasAtivas,
  totalRespondidas,
  visitasDaFamilia,
} from '../state/store.js';
import { gerarResumoCumprimento } from '../utils/relatorio.js';
import { proximaEtapa } from '../utils/cronograma.js';

export function screenVisita() {
  const fam = getFamilia(state.familiaId);
  const visitas = visitasDaFamilia(fam);
  const atividade = atividadePorNome(state.nomeVisita);
  const atividadeLabel = fam.atividadesPorVisita?.[state.nomeVisita] ? state.nomeVisita : atividade.atividade;
  const objetivos = objetivosAtivos(fam);
  const metas = metasAtivas(fam);
  const fmtDataHora = (ts) => new Date(ts).toLocaleString('pt-BR');

  const objetivosForm = objetivos
    .map(
      (o) => {
        const tituloObjetivo = o.atividade ? `${o.titulo} - ${o.atividade}` : o.titulo;
        return `
    <div class="card">
      <div class="obj-title">${tituloObjetivo}</div>
      <div class="obj-texto">${o.texto}</div>
      ${o.metas
        .map((m) => {
          const opts = ['Integral', 'Parcial', 'Não realizada']
            .map((op) => {
              const sel = state.respostas[m.id] === op;
              const cls = op === 'Integral' ? 'integral' : op === 'Parcial' ? 'parcial' : 'nao';
              return `<button class="opt ${sel ? 'sel ' + cls : ''}" onclick="responder('${m.id}','${op}')">${op}</button>`;
            })
            .join('');
          return `<div class="meta-row"><div class="meta-text">${m.texto}${m.meta ? `<small class="goal-detail">${m.meta}</small>` : ''}</div><div class="opts">${opts}</div></div>`;
        })
        .join('')}
    </div>
  `;
      }
    )
    .join('');

  const riscos = state.riscos
    .map(
      (r, i) => `
    <div class="risco-card">
      <button class="risco-remove" onclick="removerRisco(${i})">×</button>
      <span class="risco-lbl">Problema encontrado</span>
      <textarea class="field-text" style="min-height:44px; margin-bottom:8px;" oninput="state.riscos[${i}].descricao=this.value" placeholder="Ex.: incidência de podridão-parda em parte da área">${r.descricao}</textarea>
      <span class="risco-lbl">Proposta de solução</span>
      <textarea class="field-text" style="min-height:44px;" oninput="state.riscos[${i}].mitigacao=this.value" placeholder="Ex.: remoção dos frutos afetados e reforço da poda fitossanitária">${r.mitigacao}</textarea>
    </div>
  `
    )
    .join('');

  const gpsBox = state.gps
    ? `
    <div class="gps-readout">
      LAT ${fmtCoord(state.gps.lat)}  LNG ${fmtCoord(state.gps.lng)}<br>
      precisão ±${state.gps.acc}m · ${fmtDataHora(state.gps.timestamp)}
    </div>
    ${state.gps.simulado ? '<div class="gps-warn">Coordenada simulada - permissão de localização indisponível neste navegador</div>' : ''}
  `
    : `<div class="gps-readout empty">Nenhuma coordenada capturada ainda</div>`;

  const fotos = state.fotos
    .map((f, i) => {
      const temGps = !!f.gps;
      const coordTxt = temGps ? `${fmtCoord(f.gps.lat)}, ${fmtCoord(f.gps.lng)}${f.gps.simulado ? ' (simulado)' : ''}` : 'sem coordenada';
      return `
    <div class="photo-item">
      <button class="photo-remove" onclick="removerFoto(${i})">×</button>
      <div class="photo-thumb"><img src="${f.url}"></div>
      <div class="photo-item-body">
        <input class="photo-legenda" type="text" value="${f.legenda || ''}" placeholder="Legenda da foto (opcional)" oninput="state.fotos[${i}].legenda=this.value">
        <div class="photo-meta-row">
          <span class="photo-coord ${temGps ? 'com-gps' : ''}">${coordTxt} · ${fmtDataHora(f.timestamp)}</span>
          <button class="photo-gps-btn ${temGps ? 'ativo' : ''}" onclick="alternarGpsFoto(${i})">${temGps ? 'Remover coordenada' : 'Usar coordenada atual'}</button>
        </div>
      </div>
    </div>`;
    })
    .join('');

  const respondidas = totalRespondidas(metas);
  const total = metas.length;
  const podeSalvar = respondidas === total;

  const visitaOpts = visitas.map(
    (v) => `<option value="${v}" ${state.nomeVisita === v ? 'selected' : ''}>${v}</option>`
  ).join('');

  const resumoAutomatico = gerarResumoCumprimento(objetivos, state.respostas);
  const proximasEtapas = opcoesProximaEtapa(state.nomeVisita, visitas);
  const proximaBase = state.proximosPassos || proximaEtapa(state.nomeVisita, visitas);
  const proximaSelecionada = proximasEtapas.includes(proximaBase) ? proximaBase : '';
  const proximasOpts = proximasEtapas
    .map((op) => `<option value="${op}" ${proximaSelecionada === op ? 'selected' : ''}>${op}</option>`)
    .join('');

  return `
  <div class="content">
    <span class="back-link" onclick="voltarPlano()">‹ PLANO</span>
    <h2 class="screen-title">Relatório de Acompanhamento de Visita</h2>
    <div class="screen-sub">Cadeia Produtiva do Cacau · ${respondidas}/${total} metas avaliadas</div>

    <div class="header-grid">
      <div class="mi"><div class="lbl">Chefe de Família</div><div class="val">${fam.chefeFamilia}</div></div>
      <div class="mi"><div class="lbl">OSP</div><div class="val">${fam.osp}</div></div>
      <div class="mi"><div class="lbl">Técnico(a)</div><div class="val">${state.tecnico.nome}</div></div>
      <div class="mi"><div class="lbl">Data</div><div class="val">${fmtDataHoje()}</div></div>
      <div class="mi full">
        <div class="lbl">Visita / atividade atual</div>
        <select class="input-inline" onchange="alterarVisita(this.value)">${visitaOpts}</select>
      </div>
    </div>

    <div class="section-label">Resumo da visita (orientações oferecidas)</div>
    <textarea class="obs" oninput="state.resumoVisita=this.value" placeholder="Descreva as orientações repassadas e indicadores observados">${state.resumoVisita}</textarea>

    <div class="section-label" style="margin-top:18px;">Atividades programadas</div>
    <div class="section-hint">${atividadeLabel}</div>
    ${objetivosForm}

    <div class="section-label" style="margin-top:18px;">Riscos e problemas</div>
    ${riscos}
    <button class="add-risco" onclick="adicionarRisco()">+ Adicionar risco ou problema</button>

    <div class="section-label" style="margin-top:18px;">Conclusão (avaliações técnicas)</div>
    <div class="info-box">
      <span class="info-lbl">Resumo automático (cumprimento das metas)</span>
      ${resumoAutomatico}
    </div>
    <textarea class="obs" oninput="state.conclusao=this.value" placeholder="Conclusão da visita técnica">${state.conclusao}</textarea>

    <div class="section-label" style="margin-top:18px;">Próximos passos</div>
    <div class="info-box">
      <span class="info-lbl">Selecione a próxima etapa</span>
      <select class="input-inline" onchange="state.proximosPassos=this.value" ${proximasEtapas.length ? '' : 'disabled'}>${proximasOpts}</select>
    </div>

    <div class="section-label" style="margin-top:18px;">Localização GPS</div>
    <div class="gps-box">
      ${gpsBox}
      <button class="btn btn-ghost" onclick="capturarGPS()">Capturar localização atual</button>
    </div>

    <div class="section-label">Registros fotográficos</div>
    <div class="card">
      <label class="btn btn-ghost" style="display:block; text-align:center;">
        Adicionar fotos da galeria / câmera
        <input type="file" accept="image/*" multiple capture="environment" style="display:none" onchange="onFotosSelecionadas(this)">
      </label>
      ${state.fotos.length ? `<div class="photos-list">${fotos}</div>` : `<div style="font-size:11px;color:var(--text-dim); margin-top:8px;">A coordenada GPS de cada foto é opcional - use "Usar coordenada atual" em cada foto para georreferenciá-la, ou deixe sem coordenada.</div>`}
    </div>

    <button class="btn btn-primary" style="margin-top:16px;" ${podeSalvar ? '' : 'disabled'} onclick="salvarVisita()">
      ${isOnline() ? 'Salvar relatório no dispositivo' : 'Salvar no dispositivo (offline)'}
    </button>
    ${!podeSalvar ? '<div style="font-size:11px;color:var(--text-dim); margin-top:6px; text-align:center;">Avalie o cumprimento de todas as metas desta atividade para salvar</div>' : ''}
  </div>`;
}
