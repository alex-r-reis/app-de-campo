// src/data/familias.js
// Base de famílias atendidas, organizadas por id de técnico (ver tecnicos.js).
// Cada família contém o Plano de Implementação (objetivos/metas) já cadastrado na base.
// O plano de ELENILTON GOMES DA SILVA (t8_f4) reproduz o documento real enviado;
// as demais famílias usam o plano-modelo do Cardápio de Práticas (Anexo III) até que
// os planos individuais de cada família sejam cadastrados.

const FAMILIAS = {
  t1: [
    {
      id:'t1_f1', chefeFamilia:'Benedito de Jesus Sousa Miranda', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t1_f1m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t1_f1m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t1_f1m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t1_f1m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t1_f2', chefeFamilia:'Domingos Fonseca Costa', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t1_f2m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t1_f2m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t1_f2m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t1_f2m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t1_f3', chefeFamilia:'Jacinaldo de Sousa Marciel', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t1_f3m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t1_f3m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t1_f3m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t1_f3m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t1_f4', chefeFamilia:'Juscelita Correa de Sousa', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t1_f4m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t1_f4m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t1_f4m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t1_f4m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t1_f5', chefeFamilia:'Manoel de Jesus Sousa da Conceição', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t1_f5m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t1_f5m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t1_f5m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t1_f5m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t1_f6', chefeFamilia:'Manoel Oliveira Costa', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t1_f6m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t1_f6m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t1_f6m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t1_f6m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t1_f7', chefeFamilia:'Manoel Santana Fonseca dos Santos', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t1_f7m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t1_f7m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t1_f7m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t1_f7m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t1_f8', chefeFamilia:'Manoel Sousa da Conceição', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t1_f8m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t1_f8m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t1_f8m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t1_f8m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t1_f9', chefeFamilia:'Maria Benedita Ribeiro de Sousa', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t1_f9m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t1_f9m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t1_f9m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t1_f9m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t1_f10', chefeFamilia:'Maria Benedita Sousa da Conceição', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t1_f10m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t1_f10m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t1_f10m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t1_f10m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t1_f11', chefeFamilia:'Maria de Jesus Pinheiro Gomes', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t1_f11m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t1_f11m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t1_f11m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t1_f11m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t1_f12', chefeFamilia:'Maria Izabel Miranda Lobato', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t1_f12m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t1_f12m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t1_f12m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t1_f12m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t1_f13', chefeFamilia:'Maria Liduina Pantoja Borgues', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t1_f13m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t1_f13m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t1_f13m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t1_f13m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t1_f14', chefeFamilia:'Mauricio Correa Gomes', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t1_f14m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t1_f14m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t1_f14m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t1_f14m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t1_f15', chefeFamilia:'Rosinaldo Quaresma Miranda', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t1_f15m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t1_f15m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t1_f15m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t1_f15m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t1_f16', chefeFamilia:'Timóteo Lobato Chaves', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t1_f16m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t1_f16m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t1_f16m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t1_f16m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t1_f17', chefeFamilia:'Ubaldo Conceição da Costa', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t1_f17m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t1_f17m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t1_f17m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t1_f17m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    }
  ],
  t2: [
    {
      id:'t2_f1', chefeFamilia:'Aldenira Batista da Silva e Silva', osp:'FVPP',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t2_f1m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t2_f1m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t2_f1m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t2_f1m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t2_f2', chefeFamilia:'Amauri Mendes da Silva', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t2_f2m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t2_f2m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t2_f2m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t2_f2m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t2_f3', chefeFamilia:'Ana Cristina Lopes de Carvalho', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t2_f3m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t2_f3m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t2_f3m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t2_f3m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t2_f4', chefeFamilia:'Cleiciane Francisco Pires', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t2_f4m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t2_f4m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t2_f4m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t2_f4m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t2_f5', chefeFamilia:'Derisvaldo Sousa Moreira', osp:'FVPP',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t2_f5m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t2_f5m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t2_f5m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t2_f5m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t2_f6', chefeFamilia:'Dulcimar Mendes Dias da Silva', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t2_f6m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t2_f6m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t2_f6m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t2_f6m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t2_f7', chefeFamilia:'Francelucio Barbosa Santos', osp:'FVPP',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t2_f7m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t2_f7m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t2_f7m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t2_f7m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t2_f8', chefeFamilia:'Gilvana da Silva Gonçalves', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t2_f8m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t2_f8m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t2_f8m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t2_f8m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t2_f9', chefeFamilia:'Ilisvaldo Moreira de Souza', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t2_f9m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t2_f9m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t2_f9m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t2_f9m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t2_f10', chefeFamilia:'Ivone Francelina Cezario', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t2_f10m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t2_f10m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t2_f10m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t2_f10m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t2_f11', chefeFamilia:'João Anteles Moreira', osp:'FVPP',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t2_f11m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t2_f11m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t2_f11m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t2_f11m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t2_f12', chefeFamilia:'Jose Arimateia Barbosa dos Santos', osp:'FVPP',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t2_f12m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t2_f12m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t2_f12m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t2_f12m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t2_f13', chefeFamilia:'Jose Gomes dos Santos', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t2_f13m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t2_f13m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t2_f13m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t2_f13m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t2_f14', chefeFamilia:'Joselio Pereira dos Santos', osp:'FVPP',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t2_f14m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t2_f14m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t2_f14m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t2_f14m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t2_f15', chefeFamilia:'Leoninice Socorro da Silva Guedes', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t2_f15m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t2_f15m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t2_f15m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t2_f15m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t2_f16', chefeFamilia:'Marcos Roberto dos Santos', osp:'FVPP',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t2_f16m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t2_f16m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t2_f16m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t2_f16m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t2_f17', chefeFamilia:'Maria Luiza Batista Silva', osp:'FVPP',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t2_f17m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t2_f17m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t2_f17m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t2_f17m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t2_f18', chefeFamilia:'Patricia Vasconcelos do Nascimento', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t2_f18m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t2_f18m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t2_f18m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t2_f18m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t2_f19', chefeFamilia:'Pyerre da Silva Gonçalves', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t2_f19m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t2_f19m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t2_f19m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t2_f19m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t2_f20', chefeFamilia:'Ricado do Monte e Silva', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t2_f20m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t2_f20m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t2_f20m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t2_f20m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t2_f21', chefeFamilia:'Ronaldo Ribeiro Pereira', osp:'FVPP',
      comunidade:'Medicilândia', area:'Não informada',
      coordBase:{lat:-3.4233, lng:-52.8867},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t2_f21m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t2_f21m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t2_f21m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t2_f21m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t2_f22', chefeFamilia:'Rusbimario Queiroz Silva', osp:'FVPP',
      comunidade:'Medicilândia', area:'Não informada',
      coordBase:{lat:-3.4233, lng:-52.8867},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t2_f22m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t2_f22m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t2_f22m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t2_f22m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t2_f23', chefeFamilia:'Suzana Oliveira dos Santos', osp:'FVPP',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t2_f23m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t2_f23m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t2_f23m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t2_f23m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    }
  ],
  t3: [
    {
      id:'t3_f1', chefeFamilia:'Andre Oliveira do Nascimento', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t3_f1m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t3_f1m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t3_f1m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t3_f1m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t3_f2', chefeFamilia:'Auricimar Rodrigues da Conceição', osp:'FVPP',
      comunidade:'Medicilândia', area:'Não informada',
      coordBase:{lat:-3.4233, lng:-52.8867},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t3_f2m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t3_f2m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t3_f2m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t3_f2m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t3_f3', chefeFamilia:'Dgivane da Costa Santos', osp:'FVPP',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t3_f3m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t3_f3m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t3_f3m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t3_f3m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t3_f4', chefeFamilia:'Domingos Alves de Oliveira', osp:'FVPP',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t3_f4m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t3_f4m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t3_f4m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t3_f4m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t3_f5', chefeFamilia:'Edimar Quirino da Costa', osp:'FVPP',
      comunidade:'Medicilândia', area:'Não informada',
      coordBase:{lat:-3.4233, lng:-52.8867},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t3_f5m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t3_f5m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t3_f5m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t3_f5m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t3_f6', chefeFamilia:'Fagundes Barbosa de Moraes', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t3_f6m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t3_f6m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t3_f6m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t3_f6m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t3_f7', chefeFamilia:'Francisco Ribamar de Moraes', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t3_f7m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t3_f7m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t3_f7m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t3_f7m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t3_f8', chefeFamilia:'Gelda Maria Pinto da Costa Pantoja', osp:'FVPP',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t3_f8m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t3_f8m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t3_f8m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t3_f8m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t3_f9', chefeFamilia:'Ireni Maria de Sousa Pinheiro', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t3_f9m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t3_f9m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t3_f9m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t3_f9m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t3_f10', chefeFamilia:'Ivanilson Silva Viana', osp:'FVPP',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t3_f10m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t3_f10m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t3_f10m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t3_f10m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t3_f11', chefeFamilia:'Jose Aparecido Nunes de Carvalho', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t3_f11m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t3_f11m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t3_f11m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t3_f11m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t3_f12', chefeFamilia:'Jose Edmar Rosa', osp:'FVPP',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t3_f12m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t3_f12m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t3_f12m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t3_f12m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t3_f13', chefeFamilia:'José Itamar de Moraes', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t3_f13m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t3_f13m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t3_f13m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t3_f13m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t3_f14', chefeFamilia:'Maria das Graças de Oliveira Moraes', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t3_f14m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t3_f14m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t3_f14m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t3_f14m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t3_f15', chefeFamilia:'Maria das Graças Magalhães', osp:'FVPP',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t3_f15m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t3_f15m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t3_f15m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t3_f15m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t3_f16', chefeFamilia:'Marli Bloemer Felix', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t3_f16m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t3_f16m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t3_f16m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t3_f16m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t3_f17', chefeFamilia:'Michel Quirino da Costa', osp:'FVPP',
      comunidade:'Medicilândia', area:'Não informada',
      coordBase:{lat:-3.4233, lng:-52.8867},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t3_f17m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t3_f17m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t3_f17m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t3_f17m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t3_f18', chefeFamilia:'Odalvo Aranha de Carvalho', osp:'FVPP',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t3_f18m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t3_f18m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t3_f18m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t3_f18m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t3_f19', chefeFamilia:'Raimundo Nazaré Mendonça', osp:'FVPP',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t3_f19m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t3_f19m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t3_f19m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t3_f19m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t3_f20', chefeFamilia:'Sonia Maria Vieira da Silva do Prado', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t3_f20m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t3_f20m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t3_f20m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t3_f20m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t3_f21', chefeFamilia:'Valdir Mendonça', osp:'FVPP',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t3_f21m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t3_f21m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t3_f21m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t3_f21m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t3_f22', chefeFamilia:'Victoria Vieira Bintencourt', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t3_f22m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t3_f22m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t3_f22m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t3_f22m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    }
  ],
  t4: [
    {
      id:'t4_f1', chefeFamilia:'Andrelina Bastos Miranda', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t4_f1m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t4_f1m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t4_f1m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t4_f1m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t4_f2', chefeFamilia:'Antônio Miguel Sousa da Conceição', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t4_f2m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t4_f2m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t4_f2m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t4_f2m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t4_f3', chefeFamilia:'Carlos Miranda Lobato', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t4_f3m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t4_f3m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t4_f3m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t4_f3m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t4_f4', chefeFamilia:'Deusalina dos Santos Pinheiro', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t4_f4m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t4_f4m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t4_f4m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t4_f4m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t4_f5', chefeFamilia:'Elizabeth da Costa Pinheiro', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t4_f5m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t4_f5m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t4_f5m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t4_f5m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t4_f6', chefeFamilia:'Geraldo Ribeiro de Sousa', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t4_f6m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t4_f6m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t4_f6m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t4_f6m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t4_f7', chefeFamilia:'José Maria Pantoja', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t4_f7m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t4_f7m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t4_f7m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t4_f7m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t4_f8', chefeFamilia:'Leubaldo Fonseca Costa', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t4_f8m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t4_f8m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t4_f8m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t4_f8m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t4_f9', chefeFamilia:'Liduina Miranda Lobato', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t4_f9m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t4_f9m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t4_f9m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t4_f9m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t4_f10', chefeFamilia:'Manoel dos Santos Farias', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t4_f10m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t4_f10m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t4_f10m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t4_f10m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t4_f11', chefeFamilia:'Manoel Sebastião Miranda Gomes', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t4_f11m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t4_f11m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t4_f11m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t4_f11m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t4_f12', chefeFamilia:'Maria do Socorro Pinheiro Maués', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t4_f12m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t4_f12m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t4_f12m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t4_f12m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t4_f13', chefeFamilia:'Maria Francinete Fonseca Corrêa', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t4_f13m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t4_f13m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t4_f13m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t4_f13m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t4_f14', chefeFamilia:'Maria Sousa da Conceição', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t4_f14m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t4_f14m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t4_f14m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t4_f14m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t4_f15', chefeFamilia:'Orivaldo Miranda Lobato', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t4_f15m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t4_f15m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t4_f15m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t4_f15m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t4_f16', chefeFamilia:'Raimundo Fonseca Pantoja', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t4_f16m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t4_f16m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t4_f16m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t4_f16m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t4_f17', chefeFamilia:'Sebastião Sousa da Conceição', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t4_f17m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t4_f17m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t4_f17m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t4_f17m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t4_f18', chefeFamilia:'Simão Pedro Sousa Gomes', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t4_f18m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t4_f18m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t4_f18m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t4_f18m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    }
  ],
  t5: [
    {
      id:'t5_f1', chefeFamilia:'Aurilucia de Oliveira Souza', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t5_f1m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t5_f1m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t5_f1m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t5_f1m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t5_f2', chefeFamilia:'Maria Célia de Miranda Firmino', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t5_f2m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t5_f2m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t5_f2m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t5_f2m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t5_f3', chefeFamilia:'Angelica Azevedo Bandeira Neves', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t5_f3m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t5_f3m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t5_f3m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t5_f3m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t5_f4', chefeFamilia:'Daniel dos Anjos Silva', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t5_f4m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t5_f4m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t5_f4m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t5_f4m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t5_f5', chefeFamilia:'Francisca Azevedo do Nascimento', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t5_f5m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t5_f5m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t5_f5m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t5_f5m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t5_f6', chefeFamilia:'Gustavo Garnier Dias Pinto', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t5_f6m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t5_f6m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t5_f6m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t5_f6m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t5_f7', chefeFamilia:'João Carlos Silva Soares', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t5_f7m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t5_f7m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t5_f7m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t5_f7m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t5_f8', chefeFamilia:'Kelvin Nascimento de Souza', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t5_f8m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t5_f8m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t5_f8m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t5_f8m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t5_f9', chefeFamilia:'Paulo Azevedo Bandeira', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t5_f9m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t5_f9m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t5_f9m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t5_f9m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t5_f10', chefeFamilia:'Aldielis Pontes', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t5_f10m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t5_f10m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t5_f10m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t5_f10m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t5_f11', chefeFamilia:'Vicente Peixoto Filho', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t5_f11m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t5_f11m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t5_f11m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t5_f11m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t5_f12', chefeFamilia:'Francineia Nascimento dos Santos da Silva', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t5_f12m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t5_f12m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t5_f12m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t5_f12m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t5_f13', chefeFamilia:'Antônio José Firmino', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t5_f13m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t5_f13m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t5_f13m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t5_f13m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t5_f14', chefeFamilia:'Gilmar Firmino', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t5_f14m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t5_f14m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t5_f14m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t5_f14m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t5_f15', chefeFamilia:'Liliane Moreira', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t5_f15m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t5_f15m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t5_f15m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t5_f15m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t5_f16', chefeFamilia:'Marcia Barbosa de Souza', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t5_f16m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t5_f16m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t5_f16m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t5_f16m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t5_f17', chefeFamilia:'Mariângela Pontes da Silva', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t5_f17m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t5_f17m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t5_f17m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t5_f17m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t5_f18', chefeFamilia:'Raimunda Pereira da Silva', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t5_f18m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t5_f18m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t5_f18m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t5_f18m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t5_f19', chefeFamilia:'Zacarias Inacio Morais', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t5_f19m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t5_f19m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t5_f19m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t5_f19m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t5_f20', chefeFamilia:'Antonia Almeida da Silva', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t5_f20m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t5_f20m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t5_f20m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t5_f20m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t5_f21', chefeFamilia:'Antonia Ferreira Coutinho', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t5_f21m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t5_f21m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t5_f21m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t5_f21m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t5_f22', chefeFamilia:'Antonia Vanderly Silva de Assis', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t5_f22m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t5_f22m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t5_f22m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t5_f22m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    }
  ],
  t6: [
    {
      id:'t6_f1', chefeFamilia:'Andreia da Silva Sousa', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t6_f1m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t6_f1m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t6_f1m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t6_f1m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t6_f2', chefeFamilia:'Gerusa Pereira Bezerra', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t6_f2m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t6_f2m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t6_f2m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t6_f2m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t6_f3', chefeFamilia:'Jessica Miranda Batista', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t6_f3m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t6_f3m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t6_f3m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t6_f3m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t6_f4', chefeFamilia:'Laiane Soares dos Santos', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t6_f4m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t6_f4m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t6_f4m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t6_f4m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t6_f5', chefeFamilia:'Lenice Divina Ramos', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t6_f5m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t6_f5m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t6_f5m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t6_f5m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t6_f6', chefeFamilia:'Maria Ferreira da Costa', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t6_f6m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t6_f6m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t6_f6m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t6_f6m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t6_f7', chefeFamilia:'Marivalda Nunes Negreiro', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t6_f7m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t6_f7m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t6_f7m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t6_f7m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t6_f8', chefeFamilia:'Patricia Mourão da Silva', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t6_f8m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t6_f8m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t6_f8m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t6_f8m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t6_f9', chefeFamilia:'Sandro Langhinotti', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t6_f9m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t6_f9m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t6_f9m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t6_f9m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    }
  ],
  t7: [
    {
      id:'t7_f1', chefeFamilia:'Ademar Pantoja Ferreira', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t7_f1m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t7_f1m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t7_f1m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t7_f1m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t7_f2', chefeFamilia:'Alex de Jesus Castro da Costa', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t7_f2m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t7_f2m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t7_f2m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t7_f2m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t7_f3', chefeFamilia:'Ana Clistina Sousa da Conceição', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t7_f3m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t7_f3m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t7_f3m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t7_f3m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t7_f4', chefeFamilia:'Antonio Oliveira Miranda', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t7_f4m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t7_f4m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t7_f4m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t7_f4m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t7_f5', chefeFamilia:'Domingos dos Santos Pinheiro', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t7_f5m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t7_f5m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t7_f5m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t7_f5m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t7_f6', chefeFamilia:'José Francisco Conceição Maciel', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t7_f6m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t7_f6m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t7_f6m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t7_f6m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t7_f7', chefeFamilia:'Josué Pantoja dos Santos', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t7_f7m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t7_f7m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t7_f7m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t7_f7m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t7_f8', chefeFamilia:'Kalena Conceição Maciel', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t7_f8m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t7_f8m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t7_f8m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t7_f8m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t7_f9', chefeFamilia:'Maria Benedita Corrêa Pantoja', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t7_f9m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t7_f9m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t7_f9m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t7_f9m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t7_f10', chefeFamilia:'Maria do Socorro dos Santos Pantoja da Silva', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t7_f10m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t7_f10m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t7_f10m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t7_f10m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t7_f11', chefeFamilia:'Maria Luiza Quaresma da Conceição', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t7_f11m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t7_f11m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t7_f11m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t7_f11m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t7_f12', chefeFamilia:'Maria Ribeiro de Sousa', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t7_f12m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t7_f12m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t7_f12m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t7_f12m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t7_f13', chefeFamilia:'Maria Rosemira Ferreira de Miranda', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t7_f13m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t7_f13m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t7_f13m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t7_f13m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t7_f14', chefeFamilia:'Nazareno de Jesus Souza Gomes', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t7_f14m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t7_f14m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t7_f14m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t7_f14m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t7_f15', chefeFamilia:'Nonato da Silva Lobato', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t7_f15m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t7_f15m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t7_f15m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t7_f15m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t7_f16', chefeFamilia:'Rosa Natalina Sousa Gomes', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t7_f16m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t7_f16m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t7_f16m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t7_f16m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t7_f17', chefeFamilia:'Rosana Quaresma Miranda', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t7_f17m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t7_f17m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t7_f17m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t7_f17m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t7_f18', chefeFamilia:'Rosildo dos Santos Miranda', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t7_f18m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t7_f18m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t7_f18m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t7_f18m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t7_f19', chefeFamilia:'Walter Miranda Lobato', osp:'CAEPIM',
      comunidade:'Igarapé-Miri', area:'Não informada',
      coordBase:{lat:-1.9809, lng:-48.9597},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t7_f19m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t7_f19m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t7_f19m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t7_f19m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    }
  ],
  t8: [
    {
      id:'t8_f1', chefeFamilia:'Ana Lucia Araújo de Sousa', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t8_f1m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t8_f1m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t8_f1m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t8_f1m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t8_f2', chefeFamilia:'Anilson Francisco Mardegan', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t8_f2m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t8_f2m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t8_f2m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t8_f2m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t8_f3', chefeFamilia:'Carlindo Lima da Silva', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t8_f3m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t8_f3m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t8_f3m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t8_f3m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t8_f4', chefeFamilia:'Elenilton Gomes da Silva', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica III - Implementação/melhoria de Práticas Sustentáveis',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Orientar a adubação de cova e de cobertura nas áreas produtivas, visando melhorar a fertilidade do solo e o desenvolvimento das plantas', metas:[
            {id:'t8_f4m1', texto:'Realizar adubação em 100% da área planejada, conforme análise de solo (se houver)'},
          ]},
          { titulo:'Objetivo 2', texto:'Capacitar os(as) agricultores(as) em técnicas de poda de formação e produção', metas:[
            {id:'t8_f4m2', texto:'Capacitar ao menos 1 membro da família e realizar poda em ao menos 25% das plantas da área acompanhada'},
          ]},
          { titulo:'Objetivo 3', texto:'Renovar áreas improdutivas e aumentar a produtividade do sistema', metas:[
            {id:'t8_f4m3', texto:'Capacitar ao menos 1 membro da família; renovar ao menos 25% das plantas improdutivas identificadas no diagnóstico no ciclo'},
          ]},
        ]
      }
    },
    {
      id:'t8_f5', chefeFamilia:'Genilson Novais da Silva', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t8_f5m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t8_f5m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t8_f5m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t8_f5m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t8_f6', chefeFamilia:'Genival Novais da Silva', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t8_f6m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t8_f6m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t8_f6m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t8_f6m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t8_f7', chefeFamilia:'Helyane Oliveira da Silva', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t8_f7m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t8_f7m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t8_f7m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t8_f7m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t8_f8', chefeFamilia:'Ismael Silva Frutuoso', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t8_f8m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t8_f8m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t8_f8m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t8_f8m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t8_f9', chefeFamilia:'João da Silva Araújo', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t8_f9m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t8_f9m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t8_f9m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t8_f9m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t8_f10', chefeFamilia:'Marcos Antonio da Silva', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t8_f10m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t8_f10m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t8_f10m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t8_f10m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t8_f11', chefeFamilia:'Maria Aldinelia de Sousa Frutuoso', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t8_f11m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t8_f11m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t8_f11m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t8_f11m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t8_f12', chefeFamilia:'Maria de Fátima Moura Silva', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t8_f12m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t8_f12m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t8_f12m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t8_f12m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t8_f13', chefeFamilia:'Maria de Jesus de Araújo', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t8_f13m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t8_f13m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t8_f13m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t8_f13m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t8_f14', chefeFamilia:'Maria Lúcia Araújo Filomeno', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t8_f14m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t8_f14m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t8_f14m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t8_f14m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t8_f15', chefeFamilia:'Marinete Silva Frutuoso', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t8_f15m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t8_f15m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t8_f15m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t8_f15m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t8_f16', chefeFamilia:'Ricardo Carlos Paiva', osp:'FVPP',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t8_f16m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t8_f16m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t8_f16m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t8_f16m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t8_f17', chefeFamilia:'Maria Valdereza Alves Pereira', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t8_f17m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t8_f17m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t8_f17m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t8_f17m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t8_f18', chefeFamilia:'Rosiane Silva de Oliveira', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t8_f18m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t8_f18m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t8_f18m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t8_f18m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t8_f19', chefeFamilia:'Rosilene Silva de Oliveira', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t8_f19m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t8_f19m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t8_f19m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t8_f19m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t8_f20', chefeFamilia:'Sebastião Felix', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t8_f20m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t8_f20m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t8_f20m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t8_f20m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t8_f21', chefeFamilia:'Valtair de Almeida Lourenço', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t8_f21m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t8_f21m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t8_f21m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t8_f21m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t8_f22', chefeFamilia:'Zacarias Nascimento dos Santos', osp:'STTR Altamira',
      comunidade:'Altamira', area:'Não informada',
      coordBase:{lat:-3.2033, lng:-52.2064},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t8_f22m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t8_f22m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t8_f22m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t8_f22m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    }
  ],
  t9: [
    {
      id:'t9_f1', chefeFamilia:'Adriane da Silva Pereira', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t9_f1m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t9_f1m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t9_f1m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t9_f1m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t9_f2', chefeFamilia:'Alesandra Rodrigues de Souza', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t9_f2m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t9_f2m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t9_f2m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t9_f2m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t9_f3', chefeFamilia:'Ana Kelle Pereira Rodrigues', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t9_f3m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t9_f3m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t9_f3m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t9_f3m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t9_f4', chefeFamilia:'Antonio Alves de Souza', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t9_f4m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t9_f4m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t9_f4m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t9_f4m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t9_f5', chefeFamilia:'Cleilza Lopes', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t9_f5m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t9_f5m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t9_f5m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t9_f5m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t9_f6', chefeFamilia:'Darleni Pereira de Souza', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t9_f6m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t9_f6m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t9_f6m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t9_f6m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t9_f7', chefeFamilia:'Edimeires Lindalva Maciel', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t9_f7m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t9_f7m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t9_f7m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t9_f7m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t9_f8', chefeFamilia:'Gercina Diógenes de Meneses Neves', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t9_f8m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t9_f8m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t9_f8m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t9_f8m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t9_f9', chefeFamilia:'Jaime Martins de Sousa', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t9_f9m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t9_f9m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t9_f9m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t9_f9m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t9_f10', chefeFamilia:'James Machado Neves', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t9_f10m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t9_f10m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t9_f10m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t9_f10m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t9_f11', chefeFamilia:'Joelma Meneses da Silva', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t9_f11m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t9_f11m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t9_f11m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t9_f11m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t9_f12', chefeFamilia:'Joselia Ferreira Batista', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t9_f12m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t9_f12m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t9_f12m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t9_f12m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t9_f13', chefeFamilia:'Leoni da Aparecida Machado', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t9_f13m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t9_f13m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t9_f13m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t9_f13m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t9_f14', chefeFamilia:'Luciana Oliveira Santos', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t9_f14m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t9_f14m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t9_f14m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t9_f14m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t9_f15', chefeFamilia:'Maria Antonia Martins de Morais', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t9_f15m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t9_f15m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t9_f15m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t9_f15m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t9_f16', chefeFamilia:'Maria dos Santos Valerio', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t9_f16m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t9_f16m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t9_f16m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t9_f16m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t9_f17', chefeFamilia:'Maria Helena Gomes', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t9_f17m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t9_f17m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t9_f17m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t9_f17m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t9_f18', chefeFamilia:'Maria Josefa Machado Neves', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t9_f18m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t9_f18m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t9_f18m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t9_f18m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t9_f19', chefeFamilia:'Maria Nilde Martins', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t9_f19m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t9_f19m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t9_f19m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t9_f19m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t9_f20', chefeFamilia:'Maria Oneide Silvino Camarco e Barros', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t9_f20m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t9_f20m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t9_f20m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t9_f20m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t9_f21', chefeFamilia:'Simone Carvalho da Silva Ferro', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t9_f21m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t9_f21m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t9_f21m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t9_f21m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t9_f22', chefeFamilia:'Sonia Duarte Costa Ferro', osp:'AMPPF',
      comunidade:'São Félix do Xingu', area:'Não informada',
      coordBase:{lat:-6.6447, lng:-51.995},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t9_f22m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t9_f22m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t9_f22m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t9_f22m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    }
  ],
  t10: [
    {
      id:'t10_f1', chefeFamilia:'Ademar Ferreira do Nascimento', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f1m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f1m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f1m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f1m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t10_f2', chefeFamilia:'Dagusan Pereira Lima', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f2m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f2m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f2m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f2m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t10_f3', chefeFamilia:'Darlan Costa Silva', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f3m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f3m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f3m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f3m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t10_f4', chefeFamilia:'Débora Nascimento dos Santos', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f4m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f4m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f4m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f4m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t10_f5', chefeFamilia:'Deusirene dos Reis Silva', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f5m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f5m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f5m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f5m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t10_f6', chefeFamilia:'Eduardo Clemente', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f6m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f6m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f6m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f6m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t10_f7', chefeFamilia:'Flavia Leite Costa', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f7m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f7m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f7m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f7m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t10_f8', chefeFamilia:'Geraldo Batista da Silva', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f8m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f8m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f8m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f8m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t10_f9', chefeFamilia:'Idamar Santos de Jesus', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f9m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f9m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f9m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f9m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t10_f10', chefeFamilia:'Ines Woiciechowskis', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f10m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f10m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f10m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f10m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t10_f11', chefeFamilia:'Joana Darc Batista França', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f11m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f11m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f11m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f11m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t10_f12', chefeFamilia:'Leida Alves Caldeira', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f12m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f12m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f12m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f12m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t10_f13', chefeFamilia:'Magna Alves de Oliveira Rodrigues', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f13m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f13m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f13m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f13m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t10_f14', chefeFamilia:'Maria Angelica de Souza Viana', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f14m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f14m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f14m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f14m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t10_f15', chefeFamilia:'Maria de Souza Caminhas', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f15m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f15m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f15m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f15m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t10_f16', chefeFamilia:'Nilza Pereira de Macedo Amorim', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f16m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f16m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f16m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f16m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t10_f17', chefeFamilia:'Odilon Correia da Silva Filho', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f17m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f17m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f17m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f17m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t10_f18', chefeFamilia:'Reginaldo Gomes de Oliveira', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f18m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f18m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f18m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f18m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t10_f19', chefeFamilia:'Renata Pereira do Nascimento Leal', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f19m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f19m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f19m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f19m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t10_f20', chefeFamilia:'Rogerenry Ferreira de Sousa', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f20m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f20m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f20m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f20m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t10_f21', chefeFamilia:'Rogerio Pereira dos Santos', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f21m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f21m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f21m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f21m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t10_f22', chefeFamilia:'Valdecy Pereira Lopes', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f22m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f22m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f22m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f22m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t10_f23', chefeFamilia:'Valderez Gonçalves de Souza', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f23m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f23m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f23m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f23m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t10_f24', chefeFamilia:'Valdivino Correia da Silva', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f24m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f24m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f24m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f24m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t10_f25', chefeFamilia:'Wilson Jose Alves', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t10_f25m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t10_f25m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t10_f25m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t10_f25m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    }
  ],
  t11: [
    {
      id:'t11_f1', chefeFamilia:'Dorvalino Coutinho da Silva', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t11_f1m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t11_f1m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t11_f1m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t11_f1m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t11_f2', chefeFamilia:'Joserlan Alves', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t11_f2m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t11_f2m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t11_f2m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t11_f2m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t11_f3', chefeFamilia:'Weberson Ramos Hubner', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t11_f3m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t11_f3m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t11_f3m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t11_f3m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t11_f4', chefeFamilia:'Antonio Jose Santos Alomba', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t11_f4m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t11_f4m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t11_f4m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t11_f4m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t11_f5', chefeFamilia:'Joel Pinto de Souza', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t11_f5m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t11_f5m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t11_f5m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t11_f5m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t11_f6', chefeFamilia:'Ivanildo Barbosa da Silva', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t11_f6m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t11_f6m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t11_f6m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t11_f6m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t11_f7', chefeFamilia:'Jamilson Marques Ferreira', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t11_f7m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t11_f7m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t11_f7m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t11_f7m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t11_f8', chefeFamilia:'Sergio Texeira de Miranda', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t11_f8m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t11_f8m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t11_f8m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t11_f8m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t11_f9', chefeFamilia:'Rosangela Jorge', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t11_f9m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t11_f9m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t11_f9m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t11_f9m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t11_f10', chefeFamilia:'Balbina José dos Santos', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t11_f10m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t11_f10m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t11_f10m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t11_f10m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t11_f11', chefeFamilia:'Gineon dos Santos Aguiar', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t11_f11m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t11_f11m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t11_f11m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t11_f11m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t11_f12', chefeFamilia:'Leone Nascimento dos Santos', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t11_f12m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t11_f12m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t11_f12m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t11_f12m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t11_f13', chefeFamilia:'Valdemir dos Santos Aguiar', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t11_f13m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t11_f13m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t11_f13m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t11_f13m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    }
  ],
  t12: [
    {
      id:'t12_f1', chefeFamilia:'Fatima Costa Brito Barros', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t12_f1m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t12_f1m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t12_f1m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t12_f1m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t12_f2', chefeFamilia:'Altino Leite de Albuquerque', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t12_f2m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t12_f2m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t12_f2m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t12_f2m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t12_f3', chefeFamilia:'Alvaro Roberto Fregerio Caçador', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t12_f3m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t12_f3m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t12_f3m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t12_f3m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t12_f4', chefeFamilia:'Cleber Ferreira Sena', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t12_f4m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t12_f4m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t12_f4m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t12_f4m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t12_f5', chefeFamilia:'Delinaldo dos Santos Aguiar', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t12_f5m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t12_f5m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t12_f5m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t12_f5m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t12_f6', chefeFamilia:'Diene do Carmo Moura', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t12_f6m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t12_f6m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t12_f6m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t12_f6m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t12_f7', chefeFamilia:'Eizonaldo Vagens de Oliveira', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t12_f7m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t12_f7m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t12_f7m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t12_f7m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t12_f8', chefeFamilia:'Ezoildes de Oliveira Silva', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t12_f8m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t12_f8m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t12_f8m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t12_f8m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t12_f9', chefeFamilia:'Igor Rocha da Silva', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t12_f9m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t12_f9m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t12_f9m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t12_f9m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t12_f10', chefeFamilia:'João Batista da Silva', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t12_f10m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t12_f10m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t12_f10m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t12_f10m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t12_f11', chefeFamilia:'Johny Xavier da Silva', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t12_f11m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t12_f11m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t12_f11m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t12_f11m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t12_f12', chefeFamilia:'Leila Maria Miranda da Rocha', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t12_f12m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t12_f12m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t12_f12m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t12_f12m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t12_f13', chefeFamilia:'Manoel Claudino da Silva Filho', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t12_f13m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t12_f13m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t12_f13m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t12_f13m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t12_f14', chefeFamilia:'Maria Alves de Oliveira', osp:'APRUCAPEFI',
      comunidade:'Brasil Novo', area:'Não informada',
      coordBase:{lat:-3.2906, lng:-52.5878},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t12_f14m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t12_f14m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t12_f14m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t12_f14m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    }
  ],
  t13: [
    {
      id:'t13_f1', chefeFamilia:'Adenilson Correia da Silva', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f1m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f1m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f1m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f1m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t13_f2', chefeFamilia:'Claudia Lopes Rodrigues', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f2m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f2m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f2m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f2m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t13_f3', chefeFamilia:'Claudson Ferreira da Silva', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f3m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f3m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f3m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f3m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t13_f4', chefeFamilia:'Creomar Santana Ferreira Xavier', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f4m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f4m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f4m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f4m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t13_f5', chefeFamilia:'Elane Silva Costa', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f5m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f5m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f5m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f5m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t13_f6', chefeFamilia:'Elizete Oliveira Silva Gonçalves', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f6m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f6m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f6m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f6m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t13_f7', chefeFamilia:'Girleia dos Santos Silva', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f7m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f7m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f7m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f7m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t13_f8', chefeFamilia:'Jesuina Gomes da Cruz', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f8m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f8m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f8m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f8m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t13_f9', chefeFamilia:'Jesus Oliveira Lopes', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f9m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f9m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f9m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f9m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t13_f10', chefeFamilia:'Joelma Gomes da Silva', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f10m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f10m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f10m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f10m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t13_f11', chefeFamilia:'Maria das Dores Alves Gomes', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f11m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f11m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f11m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f11m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t13_f12', chefeFamilia:'Maria de Oliveira da Cruz', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f12m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f12m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f12m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f12m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t13_f13', chefeFamilia:'Maria Deuzuita Alves de Sousa', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f13m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f13m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f13m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f13m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t13_f14', chefeFamilia:'Marilza Maria de Brito', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f14m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f14m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f14m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f14m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t13_f15', chefeFamilia:'Natanael Lopes Dias da Silva', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f15m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f15m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f15m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f15m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t13_f16', chefeFamilia:'Neide Barbosa Lima Kaspary', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f16m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f16m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f16m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f16m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t13_f17', chefeFamilia:'Neli Candido Costa Dartora', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f17m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f17m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f17m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f17m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t13_f18', chefeFamilia:'Ozana Lourenço de Oliveira', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f18m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f18m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f18m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f18m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t13_f19', chefeFamilia:'Paulo Henrique do Carmo Borba', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f19m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f19m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f19m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f19m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t13_f20', chefeFamilia:'Raquel da Silva Martins', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f20m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f20m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f20m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f20m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t13_f21', chefeFamilia:'Sandra Fontinelle dos Santos', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f21m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f21m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f21m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f21m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t13_f22', chefeFamilia:'Ueliton Ferreira Soares', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f22m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f22m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f22m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f22m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t13_f23', chefeFamilia:'Valdevaldo Pacheco dos Santos', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f23m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f23m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f23m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f23m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t13_f24', chefeFamilia:'Vanir Rodrigues da Silva', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f24m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f24m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f24m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f24m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t13_f25', chefeFamilia:'Waldilei Firmino Campo', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t13_f25m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t13_f25m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t13_f25m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t13_f25m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    }
  ],
  t14: [
    {
      id:'t14_f1', chefeFamilia:'Alexandra Miranda da Silva', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t14_f1m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t14_f1m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t14_f1m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t14_f1m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t14_f2', chefeFamilia:'Bertulina Gomes Lima', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t14_f2m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t14_f2m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t14_f2m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t14_f2m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t14_f3', chefeFamilia:'Cecilia Oliveira de Almeida Linhares', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t14_f3m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t14_f3m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t14_f3m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t14_f3m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t14_f4', chefeFamilia:'Cirlene Oliveira Marafon', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t14_f4m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t14_f4m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t14_f4m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t14_f4m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t14_f5', chefeFamilia:'Clerio Rodrigues de Aguiar', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t14_f5m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t14_f5m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t14_f5m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t14_f5m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t14_f6', chefeFamilia:'Edvan Leoncio dos Santos', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t14_f6m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t14_f6m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t14_f6m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t14_f6m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t14_f7', chefeFamilia:'Florivaldo Pereira da Silva', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t14_f7m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t14_f7m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t14_f7m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t14_f7m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t14_f8', chefeFamilia:'Francisca de Sousa Caldas', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t14_f8m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t14_f8m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t14_f8m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t14_f8m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t14_f9', chefeFamilia:'Francisco Torres da Silva', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t14_f9m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t14_f9m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t14_f9m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t14_f9m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t14_f10', chefeFamilia:'Genesi Venice Rechwiebeling', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t14_f10m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t14_f10m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t14_f10m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t14_f10m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t14_f11', chefeFamilia:'Geni Batista da Silva', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t14_f11m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t14_f11m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t14_f11m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t14_f11m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t14_f12', chefeFamilia:'Helil Viana de Souza', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t14_f12m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t14_f12m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t14_f12m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t14_f12m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t14_f13', chefeFamilia:'Idael Araujo Lopes', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t14_f13m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t14_f13m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t14_f13m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t14_f13m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t14_f14', chefeFamilia:'José Diones da Silva Dias', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t14_f14m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t14_f14m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t14_f14m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t14_f14m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t14_f15', chefeFamilia:'Kaliany Fidelis da Silva', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t14_f15m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t14_f15m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t14_f15m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t14_f15m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t14_f16', chefeFamilia:'Lecy Fidelis da Silva', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t14_f16m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t14_f16m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t14_f16m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t14_f16m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t14_f17', chefeFamilia:'Luciana de Lima', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t14_f17m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t14_f17m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t14_f17m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t14_f17m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t14_f18', chefeFamilia:'Marcia Muriele da Silva Dias', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t14_f18m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t14_f18m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t14_f18m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t14_f18m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t14_f19', chefeFamilia:'Maria do Carmo Dias Pereira Melo', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t14_f19m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t14_f19m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t14_f19m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t14_f19m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t14_f20', chefeFamilia:'Maria Lucimar Barbosa da Silva', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t14_f20m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t14_f20m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t14_f20m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t14_f20m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t14_f21', chefeFamilia:'Paula da Silva Dias', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t14_f21m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t14_f21m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t14_f21m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t14_f21m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t14_f22', chefeFamilia:'Vilmar Ferreira dos Santos', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t14_f22m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t14_f22m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t14_f22m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t14_f22m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    }
  ],
  t15: [
    {
      id:'t15_f1', chefeFamilia:'Joao Rodrigues Araujo', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f1m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f1m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f1m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f1m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t15_f2', chefeFamilia:'Maria de Lourdes Lopes do Carmo', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f2m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f2m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f2m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f2m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t15_f3', chefeFamilia:'Sebastiana Mota Lima', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f3m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f3m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f3m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f3m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t15_f4', chefeFamilia:'Aline de Oliveira Martins Carvalho', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f4m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f4m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f4m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f4m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t15_f5', chefeFamilia:'Katia Beatriz Brandao da Silva', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f5m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f5m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f5m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f5m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t15_f6', chefeFamilia:'Ozilene da Silva da Conceição Matos', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f6m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f6m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f6m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f6m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t15_f7', chefeFamilia:'Eloi Luís Schmidt', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f7m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f7m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f7m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f7m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t15_f8', chefeFamilia:'Daniel Silva Matos', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f8m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f8m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f8m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f8m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t15_f9', chefeFamilia:'Maria Glaucia Alves de Souza', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f9m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f9m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f9m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f9m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t15_f10', chefeFamilia:'Karina Figueira Borges', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f10m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f10m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f10m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f10m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t15_f11', chefeFamilia:'Hyngryd Nogueira de Sousa', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f11m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f11m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f11m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f11m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t15_f12', chefeFamilia:'Carlos Ferreira de Souza', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f12m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f12m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f12m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f12m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t15_f13', chefeFamilia:'Jose Silva da Rocha', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f13m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f13m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f13m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f13m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t15_f14', chefeFamilia:'Eliane de Souza Costa', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f14m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f14m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f14m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f14m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t15_f15', chefeFamilia:'Marly dos Santos', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f15m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f15m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f15m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f15m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t15_f16', chefeFamilia:'Diego Rodrigo Machado', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f16m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f16m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f16m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f16m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t15_f17', chefeFamilia:'Sônia Lopes da Silva Vieira', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f17m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f17m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f17m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f17m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t15_f18', chefeFamilia:'Léia Carvalho da Conceição', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f18m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f18m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f18m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f18m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t15_f19', chefeFamilia:'Jucilene Gonçalves de Oliveira', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f19m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f19m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f19m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f19m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t15_f20', chefeFamilia:'Ana Paula Barbosa de Oliveira', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f20m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f20m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f20m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f20m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t15_f21', chefeFamilia:'Maria Lúcia Nogueira', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f21m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f21m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f21m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f21m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t15_f22', chefeFamilia:'Ronemar Stanke', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f22m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f22m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f22m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f22m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t15_f23', chefeFamilia:'Islene Marques Lima', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f23m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f23m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f23m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f23m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t15_f24', chefeFamilia:'Gustavo Pereira Urbano', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f24m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f24m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f24m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f24m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t15_f25', chefeFamilia:'Maria Francisca da Sillva Dias', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t15_f25m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t15_f25m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t15_f25m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t15_f25m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    }
  ],
  t16: [
    {
      id:'t16_f1', chefeFamilia:'Ademilson Ferreira Lustoza', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f1m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f1m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f1m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f1m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t16_f2', chefeFamilia:'Ailton Silva Lustoza', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f2m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f2m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f2m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f2m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t16_f3', chefeFamilia:'Aldemar Ferreira Gomes', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f3m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f3m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f3m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f3m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t16_f4', chefeFamilia:'Aldezi Gonçalves da Cruz', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f4m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f4m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f4m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f4m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t16_f5', chefeFamilia:'Aleia de Sousa Godoi', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f5m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f5m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f5m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f5m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t16_f6', chefeFamilia:'Andre Pereira Messias', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f6m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f6m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f6m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f6m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t16_f7', chefeFamilia:'Antonia Arrais Dias', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f7m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f7m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f7m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f7m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t16_f8', chefeFamilia:'Antonio Baldini', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f8m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f8m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f8m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f8m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t16_f9', chefeFamilia:'Antonio Ferreira Campos', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f9m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f9m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f9m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f9m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t16_f10', chefeFamilia:'Edilaine Martins Vieira', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f10m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f10m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f10m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f10m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t16_f11', chefeFamilia:'Ilda de Maria Silva Brito', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f11m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f11m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f11m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f11m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t16_f12', chefeFamilia:'Joana Darc Nascimento Alves', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f12m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f12m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f12m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f12m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t16_f13', chefeFamilia:'Joao Herculano da Silva', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f13m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f13m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f13m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f13m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t16_f14', chefeFamilia:'Joao Jose Fernandes Lustosa', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f14m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f14m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f14m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f14m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t16_f15', chefeFamilia:'Jocelia de Sousa Santos', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f15m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f15m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f15m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f15m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t16_f16', chefeFamilia:'Jose Francisco Bernado', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f16m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f16m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f16m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f16m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t16_f17', chefeFamilia:'Joselino Manoel de Sousa', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f17m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f17m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f17m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f17m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t16_f18', chefeFamilia:'Jovaldino Dias Pereira', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f18m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f18m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f18m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f18m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t16_f19', chefeFamilia:'Jozeni Bezerra', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f19m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f19m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f19m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f19m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t16_f20', chefeFamilia:'Maria Dalva Borges dos Santos', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f20m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f20m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f20m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f20m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t16_f21', chefeFamilia:'Marineide de Sousa Rios', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f21m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f21m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f21m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f21m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t16_f22', chefeFamilia:'Mauricelia Celestino Rodrigues de Sousa', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f22m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f22m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f22m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f22m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t16_f23', chefeFamilia:'Odete Maria de Lima', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f23m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f23m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f23m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f23m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t16_f24', chefeFamilia:'Terezinha de Jesus Lira de Melo', osp:'STR Tucumã',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f24m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f24m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f24m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f24m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    },
    {
      id:'t16_f25', chefeFamilia:'Wesley Matos Moreira', osp:'ASPROFERRO',
      comunidade:'Tucumã', area:'Não informada',
      coordBase:{lat:-6.7458, lng:-51.1531},
      status:'pendente', proximaVisita:'Visita Técnica I - Diagnóstico',
      plano:{
        objetivos:[
          { titulo:'Objetivo 1', texto:'Melhorar a fertilidade do solo e o manejo fitossanitário do cacaueiro', metas:[
            {id:'t16_f25m1', texto:'Realizar adubação de cova/cobertura conforme recomendação técnica'},
            {id:'t16_f25m2', texto:'Capacitar a família em técnicas de poda de formação e produção'},
          ]},
          { titulo:'Objetivo 2', texto:'Fortalecer o planejamento produtivo e o controle natural de pragas', metas:[
            {id:'t16_f25m3', texto:'Implantar caderno de campo para registro da produção'},
            {id:'t16_f25m4', texto:'Produzir e aplicar defensivos naturais no manejo fitossanitário'},
          ]},
        ]
      }
    }
  ]
};

export { FAMILIAS };
