import { VISITAS_PADRAO } from './tecnicos.js';

const ATIVIDADES_CAMPO = [
  {
    id: 'visita-1-diagnostico',
    nome: VISITAS_PADRAO[0],
    atividade: 'Diagnóstico da unidade produtiva e pactuação do plano de ação',
    objetivos: [
      {
        texto: 'Caracterizar a situação atual da família, da área de cacau e dos principais pontos de atenção produtiva',
        metas: [
          'Registrar informações da área, infraestrutura, manejo atual e histórico produtivo',
          'Identificar limitações de solo, sanidade, sombreamento, produtividade e organização da propriedade',
        ],
      },
      {
        texto: 'Definir prioridades técnicas para orientar as próximas ações de ATER',
        metas: [
          'Pactuar com a família as práticas prioritárias que serão acompanhadas no ciclo',
          'Orientar os primeiros registros no caderno de campo e os indicadores que serão monitorados',
        ],
      },
    ],
    proximasEtapas: [
      VISITAS_PADRAO[1],
      'Reagendar diagnóstico para complementar informações',
      'Atendimento técnico complementar antes da próxima visita',
    ],
  },
  {
    id: 'visita-2-acompanhamento',
    nome: VISITAS_PADRAO[1],
    atividade: 'Acompanhamento técnico das práticas pactuadas',
    objetivos: [
      {
        texto: 'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro',
        metas: [
          'Realizar adubação de cova/cobertura conforme recomendação técnica',
          'Capacitar a família em técnicas de poda de formação e produção',
        ],
      },
      {
        texto: 'Fortalecer o planejamento produtivo e o controle natural de pragas',
        metas: [
          'Implantar caderno de campo para registro da produção',
          'Produzir e aplicar defensivos naturais no manejo fitossanitário',
        ],
      },
    ],
    proximasEtapas: [
      VISITAS_PADRAO[2],
      'Reforçar acompanhamento da Visita Técnica II',
      'Atendimento técnico complementar para prática pendente',
    ],
  },
  {
    id: 'visita-3-praticas-sustentaveis',
    nome: VISITAS_PADRAO[2],
    atividade: 'Implementação e melhoria de práticas sustentáveis',
    objetivos: [
      {
        texto: 'Implantar práticas sustentáveis de manejo produtivo e conservação da área',
        metas: [
          'Orientar correção de solo, cobertura morta, compostagem ou adubação orgânica conforme necessidade',
          'Acompanhar poda, manejo de sombra e tratos culturais em talhões priorizados',
        ],
      },
      {
        texto: 'Aprimorar o sistema produtivo com foco em regularidade, sanidade e resiliência',
        metas: [
          'Indicar práticas de diversificação, consórcio ou recomposição de plantas quando aplicável',
          'Registrar evidências de melhoria e pendências para o Dia de Campo ou próxima visita',
        ],
      },
    ],
    proximasEtapas: [
      VISITAS_PADRAO[3],
      'Reforçar implementação de prática sustentável',
      'Atendimento técnico complementar para manejo da área',
    ],
  },
  {
    id: 'dia-campo-mipd',
    nome: VISITAS_PADRAO[3],
    atividade: 'Dia de Campo - Controle Integrado de Pragas e Doenças (MIPD)',
    objetivos: [
      {
        texto: 'Capacitar as famílias no monitoramento e controle integrado de pragas e doenças do cacaueiro',
        metas: [
          'Demonstrar identificação de sintomas, pragas, doenças e níveis de atenção no campo',
          'Orientar práticas de poda fitossanitária, remoção de material infectado e manejo preventivo',
        ],
      },
      {
        texto: 'Estimular adoção coletiva de práticas de manejo integrado e registro das ocorrências',
        metas: [
          'Realizar demonstração prática de preparo ou aplicação segura de solução recomendada',
          'Definir encaminhamentos coletivos e registros que serão acompanhados na visita seguinte',
        ],
      },
    ],
    proximasEtapas: [
      VISITAS_PADRAO[4],
      'Realizar novo momento coletivo de MIPD',
      'Atendimento técnico complementar para foco fitossanitário',
    ],
  },
  {
    id: 'visita-4-monitoramento',
    nome: VISITAS_PADRAO[4],
    atividade: 'Monitoramento de resultados e encerramento do ciclo',
    objetivos: [
      {
        texto: 'Avaliar os resultados das práticas implementadas e os avanços do plano de acompanhamento',
        metas: [
          'Verificar cumprimento das metas pactuadas e registrar evidências de melhoria produtiva',
          'Avaliar sanidade, vigor das plantas, registros de produção e pendências técnicas',
        ],
      },
      {
        texto: 'Consolidar aprendizados e orientar continuidade do manejo pela família',
        metas: [
          'Definir recomendações finais e ações de manutenção após o ciclo de visitas',
          'Registrar encaminhamentos para novo ciclo, assistência complementar ou encerramento',
        ],
      },
    ],
    proximasEtapas: [
      'Encerramento do ciclo de acompanhamento',
      'Atendimento técnico complementar pós-monitoramento',
      'Novo ciclo de acompanhamento',
    ],
  },
];

export function atividadesProgramadas() {
  return ATIVIDADES_CAMPO;
}

export function atividadePorNome(nome) {
  return (
    ATIVIDADES_CAMPO.find((atividade) => atividade.nome === nome) || {
      id: nome,
      nome,
      atividade: nome,
      objetivos: [],
      proximasEtapas: ['Encerramento do ciclo de acompanhamento'],
    }
  );
}

export function objetivosDaAtividade(familia, nomeVisita) {
  if (familia?.atividadesPorVisita?.[nomeVisita]) {
    return familia.atividadesPorVisita[nomeVisita];
  }

  const atividade = atividadePorNome(nomeVisita);
  if (!atividade) return familia?.plano?.objetivos || [];

  return atividade.objetivos.map((objetivo, oi) => ({
    titulo: objetivo.titulo || `Objetivo ${oi + 1}`,
    texto: objetivo.texto,
    metas: objetivo.metas.map((texto, mi) => ({
      id: `${familia.id}_${atividade.id}_o${oi + 1}_m${mi + 1}`,
      texto,
    })),
  }));
}

export function opcoesProximaEtapa(nomeVisita) {
  const idx = VISITAS_PADRAO.indexOf(nomeVisita);
  if (idx === -1 || idx === VISITAS_PADRAO.length - 1) return ['Encerramento do ciclo de acompanhamento'];
  return [VISITAS_PADRAO[idx + 1], 'Atendimento técnico complementar', 'Reagendar etapa atual'];
}
