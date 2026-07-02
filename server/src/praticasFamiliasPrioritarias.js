const COLUNA_TECNICO = 'ATEC responsável';
const COLUNA_FAMILIA = 'Nome completo do chefe da família';
const COLUNA_VISITA_III = 'Quais práticas serão realizadas (III)';
const COLUNA_VISITA_IV = 'Quais práticas serão realizadas IV';

const ATUALIZACOES = [
  ['Alexsandro Lima De Sousa Junior', 'ALDENIRA BATISTA DA SILVA E SILVA', 'FVPP', 'Adubação de cova/cobertura', 'Capacitação em poda'],
  ['Alexsandro Lima De Sousa Junior', 'AMAURI MENDES DA SILVA', 'STTR Altamira', 'Colheita e pós-colheita', 'Adubação de cova/cobertura'],
  ['Alexsandro Lima De Sousa Junior', 'ANA CRISTINA LOPES DE CARVALHO', 'STTR Altamira', 'Colheita e pós-colheita', 'Fermentação de cacau'],
  ['Alexsandro Lima De Sousa Junior', 'CLEICIANE FRANCISCO PIRES', 'STTR Altamira', 'Colheita e pós-colheita', 'Adubação de cova/cobertura'],
  ['Alexsandro Lima De Sousa Junior', 'DERISVALDO SOUSA MOREIRA', 'FVPP', 'Colheita e pós-colheita', 'Adubação de cova/cobertura'],
  ['Alexsandro Lima De Sousa Junior', 'DULCIMAR MENDES DIAS DA SILVA', 'STTR Altamira', 'Colheita e pós-colheita', 'Fermentação de cacau'],
  ['Alexsandro Lima De Sousa Junior', 'FRANCELUCIO BARBOSA SANTOS', 'FVPP', 'Colheita e pós-colheita', 'Fermentação de cacau'],
  ['Alexsandro Lima De Sousa Junior', 'GILVANA DA SILVA GONÇALVES', 'STTR Altamira', 'Colheita e pós-colheita, Capacitação em renovação de áreas', 'Adubação de cova/cobertura'],
  ['Alexsandro Lima De Sousa Junior', 'ILISVALDO MOREIRA DE SOUZA', 'STTR Altamira', 'Colheita e pós-colheita', 'Adubação de cova/cobertura'],
  ['Alexsandro Lima De Sousa Junior', 'IVONE FRANCELINA CEZARIO', 'STTR Altamira', 'Instalação de cochos de fermentação', 'Fermentação de cacau'],
  ['Alexsandro Lima De Sousa Junior', 'JOÃO ANTELES MOREIRA', 'FVPP', 'Colheita e pós-colheita', 'Fermentação de cacau'],
  ['Alexsandro Lima De Sousa Junior', 'JOSE GOMES DOS SANTOS', 'STTR Altamira', 'Colheita e pós-colheita', 'Adubação de cova/cobertura'],
  ['Alexsandro Lima De Sousa Junior', 'JOSELIO PEREIRA DOS SANTOS', 'FVPP', 'Irrigação simples', 'Adubação de cova/cobertura'],
  ['Alexsandro Lima De Sousa Junior', 'MARCOS ROBERTO DOS SANTOS', 'FVPP', 'Capacitação em poda', 'Capacitação em poda'],
  ['Alexsandro Lima De Sousa Junior', 'MARIA BENEDITA RIBEIRO DE SOUSA', 'CAEPIM', 'Produção de mudas', 'Capacitação em poda'],
  ['Alexsandro Lima De Sousa Junior', 'MARIA LUIZA BATISTA SILVA', 'FVPP', 'Adubação de cova/cobertura', 'Capacitação em poda'],
  ['Alexsandro Lima De Sousa Junior', 'PATRICIA VASCONCELOS DO NASCIMENTO', 'STTR Altamira', 'Colheita e pós-colheita', 'Adubação de cova/cobertura'],
  ['Alexsandro Lima De Sousa Junior', 'PYERRE DA SILVA GONÇALVES', 'STTR Altamira', 'Irrigação simples', 'Adubação de cova/cobertura'],
  ['Alexsandro Lima De Sousa Junior', 'Ricado Do Monte E Silva', 'STTR Altamira', 'Colheita e pós-colheita', 'Adubação de cova/cobertura'],
  ['Alexsandro Lima De Sousa Junior', 'RONALDO RIBEIRO PEREIRA', 'FVPP', 'Adubação de cova/cobertura', 'Adubação de cova/cobertura'],
  ['Wellington Varela de Fraga', 'Ana Lucia Araújo De Sousa', 'FVPP', 'Fermentação de cacau, Gestão da produção', 'Produção de defensivos naturais'],
  ['Wellington Varela de Fraga', 'ANILSON FRANCISCO MADERGAN', 'FVPP', 'Colheita e pós-colheita, Gestão da produção', 'Secagem de amêndoas, Irrigação simples'],
  ['Wellington Varela de Fraga', 'CARLINDO LIMA DA SILVA', 'FVPP', 'Capacitação em renovação de áreas', 'Produção de defensivos naturais'],
  ['Wellington Varela de Fraga', 'ELENILTON GOMES DA SILVA', 'FVPP', 'Adubação de cova/cobertura, Capacitação em poda, Capacitação em renovação de áreas', 'Gestão da produção, Produção de defensivos naturais'],
  ['Wellington Varela de Fraga', 'GENILSON NOVAIS DA SILVA', 'FVPP', 'Colheita e pós-colheita, Secagem de amêndoas', 'Produção de defensivos naturais'],
  ['Wellington Varela de Fraga', 'GENIVAL NOVAIS DA SILVA', 'FVPP', 'Colheita e pós-colheita, Secagem de amêndoas', 'Gestão da produção, Produção de defensivos naturais'],
  ['Wellington Varela de Fraga', 'HELYANE OLIVEIRA DA SILVA', 'FVPP', 'Capacitação em poda', 'Capacitação em poda'],
  ['Wellington Varela de Fraga', 'ISMAEL SILVA FRUTUOSO', 'FVPP', 'Adubação de cova/cobertura', 'Produção de defensivos naturais'],
  ['Wellington Varela de Fraga', 'JOÃO DA SILVA ARAUJO', 'FVPP', 'Adubação de cova/cobertura, Capacitação em renovação de áreas, Implantação de SAF', 'Gestão da produção, Produção de defensivos naturais'],
  ['Wellington Varela de Fraga', 'MARCOS ANTONIO DA SILVA', 'FVPP', 'Fermentação de cacau, Instalação de cochos de fermentação', 'Secagem de amêndoas, Capacitação em renovação de áreas'],
  ['Wellington Varela de Fraga', 'MARIA ALDINELIA DE SOUSA FRUTUOSO', 'FVPP', 'Adubação de cova/cobertura', 'Colheita e pós-colheita'],
  ['Wellington Varela de Fraga', 'MARIA DE FATIMA MOURA SILVA', 'FVPP', 'Adubação de cova/cobertura', 'Adubação de cova/cobertura'],
  ['Wellington Varela de Fraga', 'MARIA DE JESUS DE ARAUJO', 'FVPP', 'Adubação de cova/cobertura', 'Gestão da produção'],
  ['Wellington Varela de Fraga', 'MARIA LUCIA ARAUJO FILOMENO', 'FVPP', 'Capacitação em poda', 'Produção de defensivos naturais'],
  ['Wellington Varela de Fraga', 'MARIA VALDEREZA ALVES PEREIRA', 'STTR Altamira', 'Adubação de cova/cobertura, Irrigação simples', 'Produção de defensivos naturais'],
  ['Wellington Varela de Fraga', 'RICARDO CARLOS PAIVA', 'FVPP', 'Fermentação de cacau, Capacitação em poda', 'Produção de defensivos naturais'],
  ['Wellington Varela de Fraga', 'ROSIANE SILVA DE OLIVEIRA', 'STTR Altamira', 'Seleção de sementes/mudas', 'Gestão da produção'],
  ['Wellington Varela de Fraga', 'ROSILENE SILVA DE OLIVEIRA', 'STTR Altamira', 'Adubação de cova/cobertura', 'Produção de biofertilizante líquido'],
  ['Wellington Varela de Fraga', 'SEBASTIÃO FELIX', 'STTR Altamira', 'Adubação de cova/cobertura', 'Adubação de cova/cobertura'],
  ['Wellington Varela de Fraga', 'VALTAIR DE ALMEIDA LOURENÇO', 'STTR Altamira', 'Fermentação de cacau, Capacitação em poda', 'Gestão da produção, Irrigação simples'],
  ['Wellington Varela de Fraga', 'ZACARIAS NASCIMENTO DOS SANTOS', 'STTR Altamira', 'Capacitação em renovação de áreas', 'Produção de defensivos naturais'],
  ['Geraldo Magela Andrade Rodrigues Junior', 'Andre Oliveira Do Nascimento', 'STTR Altamira', 'Irrigação simples', 'Adubação de cova/cobertura, Capacitação em poda'],
  ['Geraldo Magela Andrade Rodrigues Junior', 'Auricimar Rodrigues Da Conceição', 'FVPP', 'Adubação de cova/cobertura', 'Implantação de SAF'],
  ['Geraldo Magela Andrade Rodrigues Junior', 'Dgivane Da Costa Santos', 'FVPP', 'Capacitação em poda', 'Irrigação simples'],
  ['Geraldo Magela Andrade Rodrigues Junior', 'Domingo Alves de Oliveira', 'FVPP', 'Adubação de cova/cobertura', 'Capacitação em poda'],
  ['Geraldo Magela Andrade Rodrigues Junior', 'Edimar Quirino Da Costa', 'FVPP', 'Capacitação em poda, Capacitação em renovação de áreas', 'Irrigação simples'],
  ['Geraldo Magela Andrade Rodrigues Junior', 'Fagundes Barbosa De Moraes', 'FVPP', 'Adubação de cova/cobertura', 'Capacitação em poda'],
  ['Geraldo Magela Andrade Rodrigues Junior', 'Francisco Ribamar de Morais', 'FVPP', 'Classificação e armazenamento', 'Classificação e armazenamento'],
  ['Geraldo Magela Andrade Rodrigues Junior', 'Gelda Maria Pinto da Costa Pantoja', 'FVPP', 'Irrigação simples', 'Adubação de cova/cobertura'],
  ['Geraldo Magela Andrade Rodrigues Junior', 'Ireni Maria De Sousa Pinheiro', 'STTR Altamira', 'Secagem de amêndoas, Gestão da produção, Capacitação em poda', 'Adubação de cova/cobertura, Irrigação simples'],
  ['Geraldo Magela Andrade Rodrigues Junior', 'Ivanilson Dilva Viana', 'FVPP', 'Irrigação simples', 'Adubação de cova/cobertura'],
  ['Geraldo Magela Andrade Rodrigues Junior', 'Jose Aparecido Nunes De Carvalho', 'STTR Altamira', 'Capacitação em poda', 'Irrigação simples'],
  ['Geraldo Magela Andrade Rodrigues Junior', 'Jose Edmar Rosa', 'FVPP', 'Capacitação em poda', 'Adubação de cova/cobertura'],
  ['Geraldo Magela Andrade Rodrigues Junior', 'Maria Das Graças De Oliveira Moraes', 'FVPP', 'Gestão da produção', 'Capacitação em poda'],
  ['Geraldo Magela Andrade Rodrigues Junior', 'Maria das Graças Magalhães', 'FVPP', 'Capacitação em poda', 'Capacitação em renovação de áreas'],
  ['Geraldo Magela Andrade Rodrigues Junior', 'Marli Bloemer Felix', 'STTR Altamira', 'Adubação de cova/cobertura', 'Capacitação em poda'],
  ['Geraldo Magela Andrade Rodrigues Junior', 'Michel Quirino Da Costa', 'FVPP', 'Capacitação em poda, Irrigação simples', 'Capacitação em renovação de áreas'],
  ['Geraldo Magela Andrade Rodrigues Junior', 'Odalvo Aranha de Carvalho', 'FVPP', 'Capacitação em poda', 'Adubação de cova/cobertura'],
  ['Geraldo Magela Andrade Rodrigues Junior', 'Raimundo Nazaré Mendonça', 'FVPP', 'Capacitação em poda', 'Capacitação em renovação de áreas'],
  ['Geraldo Magela Andrade Rodrigues Junior', 'Sonia Maria Vieira Da Silva Do Prado', 'STTR Altamira', 'Adubação de cova/cobertura, Capacitação em poda', 'Irrigação simples'],
  ['Geraldo Magela Andrade Rodrigues Junior', 'Valdir Mendonça', 'FVPP', 'Capacitação em poda', 'Irrigação simples'],
  ['Geraldo Magela Andrade Rodrigues Junior', 'Victoria Vieira Bintencourt', 'STTR Altamira', 'Adubação de cova/cobertura, Capacitação em poda', 'Capacitação em renovação de áreas, Irrigação simples'],
  ['Alexsandro Lima De Sousa Junior', 'SUZANA OLIVEIRA DOS SANTOS', 'FVPP', 'Colheita e pós-colheita', 'Adubação de cova/cobertura'],
];

function normalizar(valor) {
  return String(valor || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .replace(/\s+/g, ' ')
    .toLowerCase();
}

function chave(tecnico, familia) {
  return `${normalizar(tecnico)}::${normalizar(familia)}`;
}

const ATUALIZACOES_POR_FAMILIA = new Map(
  ATUALIZACOES.map(([tecnico, familia, osp, visitaIII, visitaIV]) => [
    chave(tecnico, familia),
    { osp, visitaIII, visitaIV },
  ])
);

export function aplicarPraticasFamiliasPrioritarias(row) {
  const atualizacao = ATUALIZACOES_POR_FAMILIA.get(chave(row[COLUNA_TECNICO], row[COLUNA_FAMILIA]));
  if (!atualizacao) return row;

  return {
    ...row,
    OSP: atualizacao.osp || row.OSP,
    [COLUNA_VISITA_III]: atualizacao.visitaIII,
    [COLUNA_VISITA_IV]: atualizacao.visitaIV,
  };
}

export function totalPraticasFamiliasPrioritarias() {
  return ATUALIZACOES.length;
}
