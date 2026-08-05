const COLUNA_TECNICO = "ATEC responsável";
const COLUNA_FAMILIA = "Nome completo do chefe da família";
const COLUNA_MUNICIPIO = "Município";
const COLUNA_VISITA_I = "Quais práticas serão realizadas (I)";
const COLUNA_VISITA_II = "Quais práticas serão realizadas (II)";
const COLUNA_VISITA_III = "Quais práticas serão realizadas (III)";
const COLUNA_VISITA_IV = "Quais práticas serão realizadas IV";
const TECNICO_VITOR = "Vitor Ramos do Prado";

const ATUALIZACOES_CACAU_II = [
  {
    "tecnico": "Lucas Morais Silva",
    "familia": "Léia Carvalho da Conceição",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Fermentação de cacau, Secagem de amêndoas",
    "visitaII": "Compostagem, Produção de biofertilizante líquido, Produção de defensivos naturais",
    "visitaIII": "Adubação de cova/cobertura, Capacitação em renovação de áreas",
    "visitaIV": "Instalação de cochos de fermentação, Capacitação em poda"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Ademilson Ferreira Lustoza",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Colheita e pós-colheita, Fermentação de cacau, Controle de plantas espontâneas",
    "visitaII": "Colheita e pós-colheita, Secagem de amêndoas, Controle de plantas espontâneas",
    "visitaIII": "Capacitação em poda, Capacitação em renovação de áreas",
    "visitaIV": "Capacitação em poda, Capacitação em renovação de áreas, Seleção de sementes/mudas"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Ailton Silva Lustoza",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Colheita e pós-colheita, Controle de plantas espontâneas, Construção de viveiro, Irrigação simples",
    "visitaII": "Produção de mudas",
    "visitaIII": "Capacitação em poda, Seleção de sementes/mudas",
    "visitaIV": "Capacitação em poda, Plantio de culturas, Seleção de sementes/mudas"
  },
  {
    "tecnico": "Carlos Eduardo Nunes Leal",
    "familia": "Dagusan Pereira Lima",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Secagem de amêndoas, Capacitação em poda, Controle de plantas espontâneas",
    "visitaII": "Controle de plantas espontâneas, Construção de viveiro, Irrigação simples",
    "visitaIII": "Adubação de cova/cobertura, Produção de defensivos naturais, Plantio de culturas",
    "visitaIV": "Classificação e armazenamento, Capacitação em poda"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Edilaine Martins Vieira",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Controle de plantas espontâneas, Irrigação simples",
    "visitaII": "Construção de viveiro",
    "visitaIII": "Produção de mudas, Seleção de sementes/mudas",
    "visitaIV": "Adubação de cova/cobertura, Capacitação em poda, Seleção de sementes/mudas"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Ilda De Maria Silva Brito",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Controle de plantas espontâneas, Construção de viveiro",
    "visitaII": "Produção de mudas, Seleção de sementes/mudas",
    "visitaIII": "Produção de mudas, Seleção de sementes/mudas",
    "visitaIV": "Capacitação em poda, Capacitação em renovação de áreas"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Terezinha De Jesus Lira De Melo",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Colheita e pós-colheita, Fermentação de cacau, Secagem de amêndoas, Controle de plantas espontâneas",
    "visitaII": "Classificação e armazenamento, Colheita e pós-colheita, Fermentação de cacau, Secagem de amêndoas",
    "visitaIII": "Capacitação em poda",
    "visitaIV": "Capacitação em poda, Controle de plantas espontâneas"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Jovaldino Dias Pereira",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Colheita e pós-colheita, Fermentação de cacau, Secagem de amêndoas, Controle de plantas espontâneas",
    "visitaII": "Produção de mudas, Seleção de sementes/mudas",
    "visitaIII": "Capacitação em poda, Capacitação em renovação de áreas",
    "visitaIV": "Capacitação em poda, Produção de mudas, Seleção de sementes/mudas"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Aleia De Sousa Godoi",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Classificação e armazenamento, Colheita e pós-colheita, Fermentação de cacau, Secagem de amêndoas",
    "visitaII": "Controle de plantas espontâneas",
    "visitaIII": "Capacitação em poda, Capacitação em renovação de áreas",
    "visitaIV": "Capacitação em poda, Capacitação em renovação de áreas"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Jozeni Bezerra Monteiro",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Classificação e armazenamento, Colheita e pós-colheita, Fermentação de cacau, Secagem de amêndoas, Irrigação simples",
    "visitaII": "Controle de plantas espontâneas, Produção de mudas, Seleção de sementes/mudas",
    "visitaIII": "Capacitação em poda, Capacitação em renovação de áreas",
    "visitaIV": "Adubação de cova/cobertura, Capacitação em poda"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Marineide De Sousa Rios",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Colheita e pós-colheita, Fermentação de cacau, Secagem de amêndoas, Compostagem",
    "visitaII": "Compostagem, Controle de plantas espontâneas",
    "visitaIII": "Produção de mudas, Seleção de sementes/mudas",
    "visitaIV": "Capacitação em poda, Seleção de sementes/mudas"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Odete Maria De Lima",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Colheita e pós-colheita, Fermentação de cacau, Secagem de amêndoas, Construção de viveiro",
    "visitaII": "Controle de plantas espontâneas, Produção de mudas",
    "visitaIII": "Capacitação em poda, Produção de mudas, Seleção de sementes/mudas",
    "visitaIV": "Adubação de cova/cobertura, Seleção de sementes/mudas"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Jocelia De Sousa Santos",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Colheita e pós-colheita, Fermentação de cacau, Secagem de amêndoas",
    "visitaII": "Controle de plantas espontâneas, Produção de mudas, Seleção de sementes/mudas",
    "visitaIII": "Capacitação em poda",
    "visitaIV": "Adubação de cova/cobertura, Seleção de sementes/mudas"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Jose Francisco Bernado",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Irrigação simples",
    "visitaII": "Construção de viveiro, Irrigação simples",
    "visitaIII": "Produção de mudas, Seleção de sementes/mudas",
    "visitaIV": "Adubação de cova/cobertura, Capacitação em poda, Capacitação em renovação de áreas"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Aldemar Ferreira Gomes",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Produção de mudas, Seleção de sementes/mudas",
    "visitaII": "Controle de plantas espontâneas",
    "visitaIII": "Capacitação em renovação de áreas",
    "visitaIV": "Adubação de cova/cobertura, Capacitação em poda, Seleção de sementes/mudas"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Joao Herculano Da Silva",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Compostagem, Irrigação simples",
    "visitaII": "Produção de mudas, Seleção de sementes/mudas",
    "visitaIII": "Controle de plantas espontâneas, Produção de mudas, Seleção de sementes/mudas",
    "visitaIV": "Adubação de cova/cobertura, Capacitação em poda, Capacitação em renovação de áreas"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Antonio Baldini",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Irrigação simples",
    "visitaII": "Construção de viveiro, Produção de mudas",
    "visitaIII": "Controle de plantas espontâneas, Produção de mudas, Seleção de sementes/mudas",
    "visitaIV": "Adubação de cova/cobertura, Capacitação em poda, Capacitação em renovação de áreas"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Joao Jose Fernandes Lustosa",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Controle de plantas espontâneas, Irrigação simples",
    "visitaII": "Controle de plantas espontâneas, Produção de mudas, Seleção de sementes/mudas",
    "visitaIII": "Capacitação em poda, Capacitação em renovação de áreas",
    "visitaIV": "Capacitação em poda, Capacitação em renovação de áreas"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Andre Pereira Messias",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Construção de viveiro",
    "visitaII": "Produção de mudas, Seleção de sementes/mudas",
    "visitaIII": "Controle de plantas espontâneas, Seleção de sementes/mudas",
    "visitaIV": "Capacitação em poda, Produção de mudas, Seleção de sementes/mudas"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Antonio Ferreira Campos",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Classificação e armazenamento, Colheita e pós-colheita, Fermentação de cacau",
    "visitaII": "Controle de plantas espontâneas",
    "visitaIII": "Capacitação em poda",
    "visitaIV": "Capacitação em renovação de áreas"
  },
  {
    "tecnico": "Lucas Morais Silva",
    "familia": "Joao Rodrigues Araujo",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Gestão da produção",
    "visitaII": "Fermentação de cacau",
    "visitaIII": "Secagem de amêndoas",
    "visitaIV": "Capacitação em poda"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Maria Dalva Borges Dos Santos",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Irrigação simples",
    "visitaII": "Controle de plantas espontâneas, Construção de viveiro",
    "visitaIII": "Produção de mudas, Seleção de sementes/mudas",
    "visitaIV": "Adubação de cova/cobertura, Capacitação em poda, Capacitação em renovação de áreas"
  },
  {
    "tecnico": "Lucas Morais Silva",
    "familia": "Maria De Lourdes Lopes Do Carmo",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Gestão da produção",
    "visitaII": "Construção de viveiro",
    "visitaIII": "Produção de mudas",
    "visitaIV": "Plantio de culturas"
  },
  {
    "tecnico": "Lucas Morais Silva",
    "familia": "Katia Beatriz Brandao Da Silva",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Compostagem",
    "visitaII": "Produção de biofertilizante líquido",
    "visitaIII": "Capacitação em poda, Capacitação em renovação de áreas",
    "visitaIV": "Adubação de cova/cobertura"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Joselino Manoel De Sousa",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Compostagem, Irrigação simples",
    "visitaII": "Controle de plantas espontâneas, Produção de mudas, Seleção de sementes/mudas",
    "visitaIII": "Capacitação em poda",
    "visitaIV": "Adubação de cova/cobertura, Seleção de sementes/mudas"
  },
  {
    "tecnico": "Lucas Morais Silva",
    "familia": "Ozilene Da Silva Da Conceição Matos",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Gestão da produção",
    "visitaII": "Compostagem, Produção de biofertilizante líquido",
    "visitaIII": "Capacitação em poda, Capacitação em renovação de áreas",
    "visitaIV": "Adubação de cova/cobertura, Irrigação simples"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Mauricelia Celestino Rodrigues De Sousa",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Controle de plantas espontâneas, Irrigação simples",
    "visitaII": "Construção de viveiro",
    "visitaIII": "Produção de mudas, Seleção de sementes/mudas",
    "visitaIV": "Adubação de cova/cobertura, Capacitação em poda, Capacitação em renovação de áreas"
  },
  {
    "tecnico": "Lucas Morais Silva",
    "familia": "Eloi Luís Schmidt",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Gestão da produção",
    "visitaII": "Produção de biofertilizante líquido, Produção de defensivos naturais",
    "visitaIII": "Fermentação de cacau",
    "visitaIV": "Capacitação em poda"
  },
  {
    "tecnico": "Lucas Morais Silva",
    "familia": "Daniel Silva Matos",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Gestão da produção",
    "visitaII": "Colheita e pós-colheita",
    "visitaIII": "Secagem de amêndoas",
    "visitaIV": "Capacitação em poda"
  },
  {
    "tecnico": "Lucas Morais Silva",
    "familia": "Maria Glaucia Alves De Souza",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Gestão da produção",
    "visitaII": "Construção de viveiro",
    "visitaIII": "Produção de mudas",
    "visitaIV": "Capacitação em poda, Capacitação em renovação de áreas"
  },
  {
    "tecnico": "Lucas Morais Silva",
    "familia": "Karina Figueira Borges",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Gestão da produção, Plantio de culturas",
    "visitaII": "Compostagem, Produção de biofertilizante líquido, Produção de defensivos naturais",
    "visitaIII": "Capacitação em poda, Capacitação em renovação de áreas",
    "visitaIV": "Adubação de cova/cobertura"
  },
  {
    "tecnico": "Lucas Morais Silva",
    "familia": "Hyngryd Nogueira De Sousa",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Gestão da produção",
    "visitaII": "Compostagem, Produção de biofertilizante líquido",
    "visitaIII": "Capacitação em poda",
    "visitaIV": "Secagem de amêndoas, Adubação de cova/cobertura"
  },
  {
    "tecnico": "Lucas Morais Silva",
    "familia": "Carlos Ferreira De Souza",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Gestão da produção",
    "visitaII": "Fermentação de cacau",
    "visitaIII": "Colheita e pós-colheita",
    "visitaIV": "Capacitação em poda"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Antonia Arrais Dias",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Colheita e pós-colheita, Fermentação de cacau, Secagem de amêndoas",
    "visitaII": "Construção de viveiro, Produção de mudas",
    "visitaIII": "Controle de plantas espontâneas, Seleção de sementes/mudas",
    "visitaIV": "Adubação de cova/cobertura, Capacitação em poda"
  },
  {
    "tecnico": "Lucas Morais Silva",
    "familia": "Jucilene Gonçalves De Oliveira",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Fermentação de cacau, Gestão da produção",
    "visitaII": "Compostagem, Produção de biofertilizante líquido",
    "visitaIII": "Produção de defensivos naturais",
    "visitaIV": "Capacitação em poda, Controle de plantas espontâneas"
  },
  {
    "tecnico": "Lucas Morais Silva",
    "familia": "Ana Paula Barbosa De Oliveira",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Gestão da produção",
    "visitaII": "Produção de biofertilizante líquido",
    "visitaIII": "Produção de defensivos naturais",
    "visitaIV": "Capacitação em poda"
  },
  {
    "tecnico": "Lucas Morais Silva",
    "familia": "Islene Marques Lima",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Gestão da produção, Irrigação simples",
    "visitaII": "Compostagem, Produção de biofertilizante líquido, Produção de defensivos naturais",
    "visitaIII": "Capacitação em poda, Capacitação em renovação de áreas",
    "visitaIV": "Adubação de cova/cobertura"
  },
  {
    "tecnico": "Lucas Morais Silva",
    "familia": "Gustavo Pereira Urbano",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Gestão da produção",
    "visitaII": "Compostagem",
    "visitaIII": "Produção de biofertilizante líquido",
    "visitaIV": "Capacitação em poda, Capacitação em renovação de áreas"
  },
  {
    "tecnico": "Lucas Morais Silva",
    "familia": "Maria Francisca Da Sillva Dias",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Gestão da produção",
    "visitaII": "Fermentação de cacau",
    "visitaIII": "Secagem de amêndoas",
    "visitaIV": "Capacitação em poda"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Wesley Matos Moreira",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Colheita e pós-colheita, Fermentação de cacau",
    "visitaII": "Controle de plantas espontâneas",
    "visitaIII": "Capacitação em poda",
    "visitaIV": "Adubação de cova/cobertura, Capacitação em poda"
  },
  {
    "tecnico": "Carlos Eduardo Nunes Leal",
    "familia": "Rogerio Pereira dos santos",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Adubação de cova/cobertura, Capacitação em poda, Controle de plantas espontâneas",
    "visitaII": "Capacitação em poda, Produção de defensivos naturais",
    "visitaIII": "Capacitação em poda, Controle de plantas espontâneas, Produção de biofertilizante líquido",
    "visitaIV": "Classificação e armazenamento, Colheita e pós-colheita, Fermentação de cacau, Produção de defensivos naturais"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Aldezi Gonçalves Da Cruz",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Colheita e pós-colheita, Fermentação de cacau, Secagem de amêndoas",
    "visitaII": "Controle de plantas espontâneas",
    "visitaIII": "Capacitação em poda",
    "visitaIV": "Adubação de cova/cobertura, Capacitação em poda"
  },
  {
    "tecnico": "Lucas Morais Silva",
    "familia": "Sebastiana Mota Lima",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Gestão da produção",
    "visitaII": "Capacitação em renovação de áreas",
    "visitaIII": "Compostagem, Produção de biofertilizante líquido, Produção de defensivos naturais",
    "visitaIV": "Capacitação em poda"
  },
  {
    "tecnico": "Kheiliany Luara Souza Barbosa",
    "familia": "Idael Araujo Lopes",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Compostagem, Gestão da produção",
    "visitaII": "Controle de plantas espontâneas, Seleção de sementes/mudas",
    "visitaIII": "Produção de biofertilizante líquido, Produção de defensivos naturais",
    "visitaIV": "Irrigação simples"
  },
  {
    "tecnico": "Kheiliany Luara Souza Barbosa",
    "familia": "Alexandra Miranda da Silva",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Colheita e pós-colheita, Fermentação de cacau",
    "visitaII": "Adubação de cova/cobertura, Capacitação em poda",
    "visitaIII": "Compostagem",
    "visitaIV": "Gestão da produção"
  },
  {
    "tecnico": "Kheiliany Luara Souza Barbosa",
    "familia": "Cecilia Oliveira de Almeida Linhares",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Secagem de amêndoas, Compostagem",
    "visitaII": "Fermentação de cacau",
    "visitaIII": "Colheita e pós-colheita",
    "visitaIV": "Capacitação em poda"
  },
  {
    "tecnico": "Kheiliany Luara Souza Barbosa",
    "familia": "Cirlene Oliveira Marafon",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Capacitação em poda",
    "visitaII": "Colheita e pós-colheita",
    "visitaIII": "Compostagem",
    "visitaIV": "Gestão da produção"
  },
  {
    "tecnico": "Kheiliany Luara Souza Barbosa",
    "familia": "Clerio Rodrigues de Aguiar",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Capacitação em poda",
    "visitaII": "Colheita e pós-colheita, Compostagem",
    "visitaIII": "Controle de plantas espontâneas",
    "visitaIV": "Gestão da produção"
  },
  {
    "tecnico": "Kheiliany Luara Souza Barbosa",
    "familia": "Edvan Leoncio dos Santos",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Compostagem",
    "visitaII": "Gestão da produção",
    "visitaIII": "Produção de biofertilizante líquido",
    "visitaIV": "Produção de defensivos naturais"
  },
  {
    "tecnico": "Kheiliany Luara Souza Barbosa",
    "familia": "Florivaldo Pereira da Silva",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Colheita e pós-colheita, Compostagem",
    "visitaII": "Capacitação em poda",
    "visitaIII": "Gestão da produção, Controle de plantas espontâneas",
    "visitaIV": "Produção de defensivos naturais"
  },
  {
    "tecnico": "Kheiliany Luara Souza Barbosa",
    "familia": "Francisca de Sousa Caldas",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Capacitação em poda",
    "visitaII": "Compostagem",
    "visitaIII": "Gestão da produção",
    "visitaIV": "Instalação de cochos de fermentação"
  },
  {
    "tecnico": "Kheiliany Luara Souza Barbosa",
    "familia": "Francisco Torres  da Silva",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Capacitação em poda",
    "visitaII": "Compostagem",
    "visitaIII": "Instalação de cochos de fermentação",
    "visitaIV": "Produção de biofertilizante líquido"
  },
  {
    "tecnico": "Kheiliany Luara Souza Barbosa",
    "familia": "Genesi Venice Rechwiebeling",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Capacitação em poda",
    "visitaII": "Colheita e pós-colheita",
    "visitaIII": "Compostagem",
    "visitaIV": "Gestão da produção"
  },
  {
    "tecnico": "Kheiliany Luara Souza Barbosa",
    "familia": "Geni Batista da Silva",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Capacitação em poda",
    "visitaII": "Colheita e pós-colheita",
    "visitaIII": "Compostagem",
    "visitaIV": "Produção de biofertilizante líquido"
  },
  {
    "tecnico": "Kheiliany Luara Souza Barbosa",
    "familia": "Helil Viana de Sousa",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Capacitação em poda",
    "visitaII": "Colheita e pós-colheita, Compostagem",
    "visitaIII": "Fermentação de cacau, Gestão da produção",
    "visitaIV": "Produção de biofertilizante líquido, Produção de defensivos naturais"
  },
  {
    "tecnico": "Kheiliany Luara Souza Barbosa",
    "familia": "Lecy Fidelis da Silva",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Capacitação em poda",
    "visitaII": "Adubação de cova/cobertura",
    "visitaIII": "Colheita e pós-colheita",
    "visitaIV": "Compostagem"
  },
  {
    "tecnico": "Kheiliany Luara Souza Barbosa",
    "familia": "Bertulina Gomes Lima",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Capacitação em poda",
    "visitaII": "Colheita e pós-colheita",
    "visitaIII": "Produção de biofertilizante líquido",
    "visitaIV": "Produção de defensivos naturais"
  },
  {
    "tecnico": "Kheiliany Luara Souza Barbosa",
    "familia": "José Diones da Silva Dias",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Adubação de cova/cobertura",
    "visitaII": "Capacitação em poda",
    "visitaIII": "Produção de biofertilizante líquido",
    "visitaIV": "Produção de defensivos naturais"
  },
  {
    "tecnico": "Kheiliany Luara Souza Barbosa",
    "familia": "Kaliany Fidelis da Silva",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Capacitação em poda",
    "visitaII": "Colheita e pós-colheita",
    "visitaIII": "Produção de biofertilizante líquido",
    "visitaIV": "Produção de defensivos naturais"
  },
  {
    "tecnico": "Kheiliany Luara Souza Barbosa",
    "familia": "Luciana de Lima",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Adubação de cova/cobertura",
    "visitaII": "Colheita e pós-colheita",
    "visitaIII": "Produção de biofertilizante líquido",
    "visitaIV": "Produção de defensivos naturais"
  },
  {
    "tecnico": "Kheiliany Luara Souza Barbosa",
    "familia": "Marcia Muriele da Silva Dias",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Adubação de cova/cobertura",
    "visitaII": "Colheita e pós-colheita",
    "visitaIII": "Gestão da produção",
    "visitaIV": "Produção de biofertilizante líquido"
  },
  {
    "tecnico": "Kheiliany Luara Souza Barbosa",
    "familia": "Maria do Carmo dias Pereira Melo",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Adubação de cova/cobertura",
    "visitaII": "Colheita e pós-colheita",
    "visitaIII": "Produção de biofertilizante líquido",
    "visitaIV": "Produção de defensivos naturais"
  },
  {
    "tecnico": "Kheiliany Luara Souza Barbosa",
    "familia": "Maria Lucimar Barbosa da Silva",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Adubação de cova/cobertura",
    "visitaII": "Capacitação em poda",
    "visitaIII": "Irrigação simples",
    "visitaIV": "Produção de biofertilizante líquido"
  },
  {
    "tecnico": "Kheiliany Luara Souza Barbosa",
    "familia": "Paula da silva Dias",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Adubação de cova/cobertura",
    "visitaII": "Capacitação em poda",
    "visitaIII": "Gestão da produção",
    "visitaIV": "Produção de defensivos naturais"
  },
  {
    "tecnico": "Kheiliany Luara Souza Barbosa",
    "familia": "Vilmar Ferreira dos Santos",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Adubação de cova/cobertura",
    "visitaII": "Colheita e pós-colheita",
    "visitaIII": "Produção de biofertilizante líquido",
    "visitaIV": "Produção de defensivos naturais"
  },
  {
    "tecnico": "Carlos Eduardo Nunes Leal",
    "familia": "rogerio pereira dos santos",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Capacitação em poda, Controle de plantas espontâneas, Produção de defensivos naturais",
    "visitaII": "Gestão da produção, Capacitação em poda, Controle de plantas espontâneas, Produção de defensivos naturais",
    "visitaIII": "Gestão da produção, Capacitação em poda, Controle de plantas espontâneas, Produção de defensivos naturais",
    "visitaIV": "Gestão da produção, Capacitação em poda, Controle de plantas espontâneas, Produção de defensivos naturais"
  },
  {
    "tecnico": "Carlos Eduardo Nunes Leal",
    "familia": "wilson jose alves",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Colheita e pós-colheita, Fermentação de cacau, Instalação de cochos de fermentação",
    "visitaII": "Capacitação em poda, Produção de defensivos naturais, Implantação de SAF",
    "visitaIII": "Capacitação em poda, Produção de defensivos naturais, Implantação de SAF",
    "visitaIV": "Capacitação em poda, Produção de defensivos naturais, Implantação de SAF"
  },
  {
    "tecnico": "Carlos Eduardo Nunes Leal",
    "familia": "renata pereira do nascimento leal",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Gestão da produção, Adubação de cova/cobertura, Produção de defensivos naturais",
    "visitaII": "Gestão da produção, Capacitação em poda, Controle de plantas espontâneas, Produção de defensivos naturais",
    "visitaIII": "Gestão da produção, Controle de plantas espontâneas, Produção de defensivos naturais",
    "visitaIV": "Capacitação em poda, Controle de plantas espontâneas, Produção de defensivos naturais"
  },
  {
    "tecnico": "Carlos Eduardo Nunes Leal",
    "familia": "valdivino correia da silva",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Gestão da produção, Produção de defensivos naturais, Produção de mudas",
    "visitaII": "Capacitação em poda, Controle de plantas espontâneas, Produção de defensivos naturais",
    "visitaIII": "Fermentação de cacau, Gestão da produção, Produção de defensivos naturais",
    "visitaIV": "Adubação de cova/cobertura, Controle de plantas espontâneas, Produção de defensivos naturais"
  },
  {
    "tecnico": "Carlos Eduardo Nunes Leal",
    "familia": "reginal gomes de oliveira",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Capacitação em poda, Controle de plantas espontâneas, Produção de defensivos naturais",
    "visitaII": "Adubação de cova/cobertura, Capacitação em poda, Produção de defensivos naturais",
    "visitaIII": "Gestão da produção, Adubação de cova/cobertura, Controle de plantas espontâneas, Produção de defensivos naturais",
    "visitaIV": "Gestão da produção, Adubação de cova/cobertura, Produção de defensivos naturais"
  },
  {
    "tecnico": "Carlos Eduardo Nunes Leal",
    "familia": "valdecy pereira lopes",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Colheita e pós-colheita, Gestão da produção, Produção de defensivos naturais",
    "visitaII": "Gestão da produção, Adubação de cova/cobertura, Controle de plantas espontâneas, Produção de defensivos naturais",
    "visitaIII": "Gestão da produção, Capacitação em poda, Produção de defensivos naturais",
    "visitaIV": "Colheita e pós-colheita, Adubação de cova/cobertura, Capacitação em poda, Produção de defensivos naturais"
  },
  {
    "tecnico": "Carlos Eduardo Nunes Leal",
    "familia": "flavia leite costa",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Fermentação de cacau, Gestão da produção, Produção de defensivos naturais",
    "visitaII": "Gestão da produção, Adubação de cova/cobertura, Capacitação em poda, Produção de defensivos naturais",
    "visitaIII": "Adubação de cova/cobertura, Capacitação em poda, Controle de plantas espontâneas, Produção de defensivos naturais",
    "visitaIV": "Adubação de cova/cobertura, Capacitação em poda, Produção de defensivos naturais"
  },
  {
    "tecnico": "Carlos Eduardo Nunes Leal",
    "familia": "joana darc batista frança",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Fermentação de cacau, Gestão da produção, Capacitação em poda",
    "visitaII": "Gestão da produção, Adubação de cova/cobertura, Capacitação em poda, Produção de defensivos naturais",
    "visitaIII": "Gestão da produção, Adubação de cova/cobertura, Produção de defensivos naturais",
    "visitaIV": "Adubação de cova/cobertura, Capacitação em poda, Controle de plantas espontâneas, Produção de defensivos naturais"
  },
  {
    "tecnico": "Carlos Eduardo Nunes Leal",
    "familia": "maria angelica de souza viana",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Secagem de amêndoas, Controle de plantas espontâneas, Produção de defensivos naturais",
    "visitaII": "Gestão da produção, Adubação de cova/cobertura, Capacitação em poda, Produção de defensivos naturais",
    "visitaIII": "Fermentação de cacau, Gestão da produção, Controle de plantas espontâneas, Produção de defensivos naturais",
    "visitaIV": "Fermentação de cacau, Gestão da produção, Capacitação em poda, Produção de defensivos naturais"
  },
  {
    "tecnico": "Carlos Eduardo Nunes Leal",
    "familia": "nilza pereira de macedo amorim",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Colheita e pós-colheita, Gestão da produção, Produção de defensivos naturais",
    "visitaII": "Gestão da produção, Adubação de cova/cobertura, Capacitação em poda",
    "visitaIII": "Gestão da produção, Adubação de cova/cobertura, Capacitação em poda, Produção de defensivos naturais",
    "visitaIV": "Gestão da produção, Capacitação em poda, Controle de plantas espontâneas, Produção de defensivos naturais"
  },
  {
    "tecnico": "Carlos Eduardo Nunes Leal",
    "familia": "magna alves de oliveira rodrigues",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Fermentação de cacau, Capacitação em poda, Produção de defensivos naturais",
    "visitaII": "Gestão da produção, Capacitação em poda, Produção de defensivos naturais",
    "visitaIII": "Gestão da produção, Adubação de cova/cobertura, Capacitação em poda, Produção de defensivos naturais",
    "visitaIV": "Gestão da produção, Adubação de cova/cobertura, Capacitação em poda, Produção de defensivos naturais"
  },
  {
    "tecnico": "Carlos Eduardo Nunes Leal",
    "familia": "Valderez gonçalves de souza",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Fermentação de cacau, Gestão da produção, Adubação de cova/cobertura, Implantação de SAF",
    "visitaII": "Gestão da produção, Adubação de cova/cobertura, Capacitação em poda, Produção de defensivos naturais",
    "visitaIII": "Capacitação em poda, Produção de defensivos naturais, Implantação de SAF, Plantio de culturas",
    "visitaIV": "Gestão da produção, Adubação de cova/cobertura, Capacitação em poda, Produção de defensivos naturais"
  },
  {
    "tecnico": "Carlos Eduardo Nunes Leal",
    "familia": "rogerenry ferreira de sousa",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Adubação de cova/cobertura, Capacitação em poda, Construção de viveiro",
    "visitaII": "Capacitação em poda, Controle de plantas espontâneas, Produção de defensivos naturais, Construção de viveiro",
    "visitaIII": "Secagem de amêndoas, Gestão da produção, Controle de plantas espontâneas, Produção de defensivos naturais",
    "visitaIV": "Gestão da produção, Capacitação em poda, Capacitação em renovação de áreas, Controle de plantas espontâneas, Produção de defensivos naturais"
  },
  {
    "tecnico": "Carlos Eduardo Nunes Leal",
    "familia": "darlan costa silva",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Gestão da produção, Adubação de cova/cobertura, Controle de plantas espontâneas, Produção de defensivos naturais",
    "visitaII": "Gestão da produção, Adubação de cova/cobertura, Capacitação em poda, Capacitação em renovação de áreas",
    "visitaIII": "Gestão da produção, Adubação de cova/cobertura, Capacitação em renovação de áreas, Controle de plantas espontâneas",
    "visitaIV": "Adubação de cova/cobertura, Capacitação em poda, Capacitação em renovação de áreas, Produção de defensivos naturais"
  },
  {
    "tecnico": "Carlos Eduardo Nunes Leal",
    "familia": "geraldo batista silva",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Capacitação em renovação de áreas, Controle de plantas espontâneas, Produção de defensivos naturais",
    "visitaII": "Gestão da produção, Adubação de cova/cobertura, Capacitação em poda, Produção de defensivos naturais",
    "visitaIII": "Gestão da produção, Adubação de cova/cobertura, Capacitação em renovação de áreas, Produção de defensivos naturais",
    "visitaIV": "Gestão da produção, Adubação de cova/cobertura, Capacitação em renovação de áreas, Produção de defensivos naturais"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Joana Darc Nascimento Alves",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Colheita e pós-colheita, Fermentação de cacau, Secagem de amêndoas, Irrigação simples",
    "visitaII": "Construção de viveiro, Produção de mudas, Seleção de sementes/mudas",
    "visitaIII": "Adubação de cova/cobertura",
    "visitaIV": "Capacitação em poda, Capacitação em renovação de áreas"
  },
  {
    "tecnico": "Pablo Henrique Schmidt Amaral",
    "familia": "Joana Darc Nascimento Alves",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Colheita e pós-colheita, Fermentação de cacau, Secagem de amêndoas, Irrigação simples",
    "visitaII": "Controle de plantas espontâneas, Construção de viveiro, Produção de mudas, Seleção de sementes/mudas",
    "visitaIII": "Capacitação em poda",
    "visitaIV": "Adubação de cova/cobertura, Capacitação em poda"
  },
  {
    "tecnico": "Carlos Eduardo Nunes Leal",
    "familia": "geraldo batista silva",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Adubação de cova/cobertura, Capacitação em poda, Controle de plantas espontâneas, Produção de defensivos naturais",
    "visitaII": "Capacitação em poda, Controle de plantas espontâneas, Produção de defensivos naturais",
    "visitaIII": "Capacitação em poda, Capacitação em renovação de áreas, Produção de defensivos naturais",
    "visitaIV": "Gestão da produção, Capacitação em poda, Controle de plantas espontâneas"
  },
  {
    "tecnico": "Carlos Eduardo Nunes Leal",
    "familia": "leida Alves Caldeira",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Colheita e pós-colheita, Adubação de cova/cobertura, Capacitação em poda, Controle de plantas espontâneas, Produção de defensivos naturais",
    "visitaII": "Gestão da produção, Capacitação em poda, Produção de defensivos naturais",
    "visitaIII": "Gestão da produção, Adubação de cova/cobertura, Capacitação em poda",
    "visitaIV": "Gestão da produção, Produção de defensivos naturais"
  },
  {
    "tecnico": "Carlos Eduardo Nunes Leal",
    "familia": "Ademar Ferreira do Nascimento",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Fermentação de cacau, Secagem de amêndoas, Adubação de cova/cobertura, Capacitação em poda",
    "visitaII": "Adubação de cova/cobertura, Capacitação em poda",
    "visitaIII": "Gestão da produção, Controle de plantas espontâneas, Produção de defensivos naturais",
    "visitaIV": "Gestão da produção, Controle de plantas espontâneas, Produção de defensivos naturais"
  },
  {
    "tecnico": "Deborah da Silva Araújo",
    "familia": "Diene do Carmo Moura",
    "osp": "APRUCAPEFI",
    "municipio": "Brasil Novo",
    "visitaI": "Gestão da produção, Adubação de cova/cobertura",
    "visitaII": "Capacitação em poda, Controle de plantas espontâneas",
    "visitaIII": "Produção de biofertilizante líquido, Produção de defensivos naturais, Plantio de culturas",
    "visitaIV": "Gestão da produção"
  },
  {
    "tecnico": "Deborah da Silva Araújo",
    "familia": "Leila Maria Miranda da Rocha",
    "osp": "APRUCAPEFI",
    "municipio": "Brasil Novo",
    "visitaI": "Gestão da produção, Adubação de cova/cobertura",
    "visitaII": "Capacitação em poda, Produção de defensivos naturais",
    "visitaIII": "Capacitação em renovação de áreas, Produção de biofertilizante líquido, Produção de defensivos naturais",
    "visitaIV": "Fermentação de cacau, Instalação de cochos de fermentação"
  },
  {
    "tecnico": "Deborah da Silva Araújo",
    "familia": "Maria Alves de Oliveira",
    "osp": "APRUCAPEFI",
    "municipio": "Brasil Novo",
    "visitaI": "Produção de defensivos naturais",
    "visitaII": "Produção de defensivos naturais",
    "visitaIII": "Produção de biofertilizante líquido",
    "visitaIV": "Produção de defensivos naturais"
  },
  {
    "tecnico": "Deborah da Silva Araújo",
    "familia": "Altino Leite de Albuquerque",
    "osp": "APRUCAPEFI",
    "municipio": "Brasil Novo",
    "visitaI": "Capacitação em poda, Capacitação em renovação de áreas",
    "visitaII": "Adubação de cova/cobertura, Produção de biofertilizante líquido",
    "visitaIII": "Produção de defensivos naturais",
    "visitaIV": "Produção de defensivos naturais"
  },
  {
    "tecnico": "Deborah da Silva Araújo",
    "familia": "Álvaro Roberto Fregerio Caçador",
    "osp": "APRUCAPEFI",
    "municipio": "Brasil Novo",
    "visitaI": "Gestão da produção, Capacitação em poda",
    "visitaII": "Adubação de cova/cobertura",
    "visitaIII": "Instalação de cochos de fermentação",
    "visitaIV": "Fermentação de cacau"
  },
  {
    "tecnico": "Deborah da Silva Araújo",
    "familia": "Cleber Ferreira Sena",
    "osp": "APRUCAPEFI",
    "municipio": "Brasil Novo",
    "visitaI": "Adubação de cova/cobertura",
    "visitaII": "Capacitação em poda",
    "visitaIII": "Produção de biofertilizante líquido",
    "visitaIV": "Produção de defensivos naturais"
  },
  {
    "tecnico": "Deborah da Silva Araújo",
    "familia": "Eizonaldo Vargens de Oliveira",
    "osp": "APRUCAPEFI",
    "municipio": "Brasil Novo",
    "visitaI": "Adubação de cova/cobertura, Capacitação em poda",
    "visitaII": "Capacitação em renovação de áreas",
    "visitaIII": "Fermentação de cacau",
    "visitaIV": "Instalação de cochos de fermentação, Secagem de amêndoas"
  },
  {
    "tecnico": "Deborah da Silva Araújo",
    "familia": "Ezoildes de Oliveira Silva",
    "osp": "APRUCAPEFI",
    "municipio": "Brasil Novo",
    "visitaI": "Adubação de cova/cobertura",
    "visitaII": "Capacitação em poda, Produção de mudas",
    "visitaIII": "Produção de biofertilizante líquido",
    "visitaIV": "Produção de defensivos naturais"
  },
  {
    "tecnico": "Deborah da Silva Araújo",
    "familia": "Fátima Costa Brito Barros",
    "osp": "APRUCAPEFI",
    "municipio": "Brasil Novo",
    "visitaI": "Adubação de cova/cobertura",
    "visitaII": "Capacitação em renovação de áreas",
    "visitaIII": "Produção de biofertilizante líquido, Produção de defensivos naturais",
    "visitaIV": "Instalação de cochos de fermentação"
  },
  {
    "tecnico": "Deborah da Silva Araújo",
    "familia": "Igor Rocha da Silva",
    "osp": "APRUCAPEFI",
    "municipio": "Brasil Novo",
    "visitaI": "Adubação de cova/cobertura, Controle de plantas espontâneas",
    "visitaII": "Irrigação simples",
    "visitaIII": "Fermentação de cacau",
    "visitaIV": "Secagem de amêndoas"
  },
  {
    "tecnico": "Deborah da Silva Araújo",
    "familia": "João Batista da Silva",
    "osp": "APRUCAPEFI",
    "municipio": "Brasil Novo",
    "visitaI": "Gestão da produção, Adubação de cova/cobertura",
    "visitaII": "Capacitação em poda",
    "visitaIII": "Produção de biofertilizante líquido, Produção de defensivos naturais",
    "visitaIV": "Instalação de cochos de fermentação, Secagem de amêndoas"
  },
  {
    "tecnico": "Deborah da Silva Araújo",
    "familia": "Manoel Claudino da Silva Filho",
    "osp": "APRUCAPEFI",
    "municipio": "Brasil Novo",
    "visitaI": "Adubação de cova/cobertura, Controle de plantas espontâneas",
    "visitaII": "Capacitação em poda",
    "visitaIII": "Capacitação em renovação de áreas",
    "visitaIV": "Produção de defensivos naturais"
  },
  {
    "tecnico": "Valdemir Ferreira Lima",
    "familia": "Adenilson Correia Da Silva",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Gestão da produção, Adubação de cova/cobertura",
    "visitaII": "Capacitação em poda, Capacitação em renovação de áreas",
    "visitaIII": "Produção de biofertilizante líquido",
    "visitaIV": "Produção de defensivos naturais"
  },
  {
    "tecnico": "Valdemir Ferreira Lima",
    "familia": "Claudia Lopes Rodrigues",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Adubação de cova/cobertura, Controle de plantas espontâneas",
    "visitaII": "Capacitação em poda, Produção de mudas",
    "visitaIII": "Gestão da produção",
    "visitaIV": "Implantação de SAF, Plantio de culturas"
  },
  {
    "tecnico": "Valdemir Ferreira Lima",
    "familia": "Claudson Ferreira Da Silva",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Gestão da produção, Implantação de SAF",
    "visitaII": "Plantio de culturas, Produção de mudas",
    "visitaIII": "Controle de plantas espontâneas, Irrigação simples",
    "visitaIV": "Adubação de cova/cobertura, Capacitação em renovação de áreas"
  },
  {
    "tecnico": "Valdemir Ferreira Lima",
    "familia": "Creomar Santana Ferreira Xavier",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Compostagem, Adubação de cova/cobertura",
    "visitaII": "Gestão da produção, Implantação de SAF",
    "visitaIII": "Capacitação em poda, Controle de plantas espontâneas",
    "visitaIV": "Produção de biofertilizante líquido, Irrigação simples, Plantio de culturas"
  },
  {
    "tecnico": "Vitor Ramos do Prado",
    "familia": "Elane Silva Costa",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Adubação de cova/cobertura, Capacitação em poda",
    "visitaII": "Compostagem, Capacitação em renovação de áreas",
    "visitaIII": "Fermentação de cacau, Gestão da produção",
    "visitaIV": "Irrigação simples"
  },
  {
    "tecnico": "Vitor Ramos do Prado",
    "familia": "Elizete Oliveira Silva Gonçalves",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Adubação de cova/cobertura, Capacitação em poda",
    "visitaII": "Gestão da produção, Irrigação simples",
    "visitaIII": "Produção de biofertilizante líquido",
    "visitaIV": "Produção de defensivos naturais"
  },
  {
    "tecnico": "Valdemir Ferreira Lima",
    "familia": "Girleia Dos Santos Silva",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Adubação de cova/cobertura, Capacitação em poda",
    "visitaII": "Colheita e pós-colheita, Capacitação em renovação de áreas",
    "visitaIII": "Produção de biofertilizante líquido, Produção de defensivos naturais",
    "visitaIV": "Fermentação de cacau, Gestão da produção"
  },
  {
    "tecnico": "Valdemir Ferreira Lima",
    "familia": "Jesuina Gomes Da Cruz",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Adubação de cova/cobertura, Produção de biofertilizante líquido",
    "visitaII": "Capacitação em poda, Capacitação em renovação de áreas",
    "visitaIII": "Gestão da produção",
    "visitaIV": "Irrigação simples"
  },
  {
    "tecnico": "Valdemir Ferreira Lima",
    "familia": "Jesus Oliveira Lopes",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Gestão da produção, Adubação de cova/cobertura, Controle de plantas espontâneas",
    "visitaII": "Gestão da produção, Capacitação em poda, Irrigação simples",
    "visitaIII": "Compostagem, Gestão da produção, Adubação de cova/cobertura",
    "visitaIV": "Gestão da produção, Capacitação em poda, Produção de defensivos naturais, Plantio de culturas"
  },
  {
    "tecnico": "Valdemir Ferreira Lima",
    "familia": "Joelma Gomes Da Silva",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Compostagem, Adubação de cova/cobertura",
    "visitaII": "Capacitação em poda, Capacitação em renovação de áreas",
    "visitaIII": "Gestão da produção, Controle de plantas espontâneas",
    "visitaIV": "Produção de biofertilizante líquido, Irrigação simples"
  },
  {
    "tecnico": "Vitor Ramos do Prado",
    "familia": "Maria Das Dores Alves Gomes",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Adubação de cova/cobertura, Capacitação em poda",
    "visitaII": "Capacitação em renovação de áreas, Controle de plantas espontâneas",
    "visitaIII": "Gestão da produção",
    "visitaIV": "Irrigação simples"
  },
  {
    "tecnico": "Valdemir Ferreira Lima",
    "familia": "Maria De Oliveira Da Cruz",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Adubação de cova/cobertura, Capacitação em poda",
    "visitaII": "Compostagem, Gestão da produção, Controle de plantas espontâneas",
    "visitaIII": "Implantação de SAF, Irrigação simples",
    "visitaIV": "Produção de biofertilizante líquido, Produção de defensivos naturais"
  },
  {
    "tecnico": "Valdemir Ferreira Lima",
    "familia": "Maria Deuzuita Alves De Sousa",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Compostagem, Adubação de cova/cobertura, Produção de biofertilizante líquido",
    "visitaII": "Controle de plantas espontâneas, Plantio de culturas",
    "visitaIII": "Gestão da produção, Irrigação simples",
    "visitaIV": "Capacitação em poda, Produção de defensivos naturais"
  },
  {
    "tecnico": "Valdemir Ferreira Lima",
    "familia": "Marilza Maria De Brito",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Gestão da produção, Adubação de cova/cobertura",
    "visitaII": "Capacitação em poda, Capacitação em renovação de áreas",
    "visitaIII": "Plantio de culturas, Produção de mudas",
    "visitaIV": "Gestão da produção, Controle de plantas espontâneas"
  },
  {
    "tecnico": "Valdemir Ferreira Lima",
    "familia": "Natanael Lopes Dias Da Silva",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Adubação de cova/cobertura, Irrigação simples",
    "visitaII": "Capacitação em poda, Capacitação em renovação de áreas",
    "visitaIII": "Gestão da produção, Implantação de SAF",
    "visitaIV": "Produção de mudas"
  },
  {
    "tecnico": "Vitor Ramos do Prado",
    "familia": "Neli Candido Costa Dartora",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Adubação de cova/cobertura, Capacitação em poda",
    "visitaII": "Capacitação em renovação de áreas, Controle de plantas espontâneas",
    "visitaIII": "Gestão da produção, Plantio de culturas",
    "visitaIV": "Produção de biofertilizante líquido, Produção de defensivos naturais"
  },
  {
    "tecnico": "Vitor Ramos do Prado",
    "familia": "Ozana Lourenço De Oliveira",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Compostagem, Adubação de cova/cobertura",
    "visitaII": "Produção de biofertilizante líquido, Produção de defensivos naturais",
    "visitaIII": "Capacitação em poda, Capacitação em renovação de áreas",
    "visitaIV": "Gestão da produção, Irrigação simples"
  },
  {
    "tecnico": "Valdemir Ferreira Lima",
    "familia": "Paulo Henrique Do Carmo Borba",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Compostagem, Controle de plantas espontâneas",
    "visitaII": "Gestão da produção, Irrigação simples",
    "visitaIII": "Capacitação em poda, Capacitação em renovação de áreas",
    "visitaIV": "Gestão da produção, Adubação de cova/cobertura"
  },
  {
    "tecnico": "Vitor Ramos do Prado",
    "familia": "Raquel Da Silva Martins",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Adubação de cova/cobertura, Capacitação em poda",
    "visitaII": "Compostagem, Capacitação em renovação de áreas",
    "visitaIII": "Gestão da produção, Irrigação simples, Plantio de culturas",
    "visitaIV": "Produção de biofertilizante líquido, Produção de defensivos naturais"
  },
  {
    "tecnico": "Valdemir Ferreira Lima",
    "familia": "Sandra Fontinelle Dos Santos",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Compostagem, Gestão da produção",
    "visitaII": "Adubação de cova/cobertura, Capacitação em poda",
    "visitaIII": "Produção de defensivos naturais",
    "visitaIV": "Produção de biofertilizante líquido"
  },
  {
    "tecnico": "Valdemir Ferreira Lima",
    "familia": "Ueliton Ferreira Soares",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Secagem de amêndoas, Gestão da produção",
    "visitaII": "Capacitação em poda, Capacitação em renovação de áreas",
    "visitaIII": "Adubação de cova/cobertura, Produção de biofertilizante líquido",
    "visitaIV": "Compostagem, Irrigação simples"
  },
  {
    "tecnico": "Vitor Ramos do Prado",
    "familia": "Valdevaldo Pacheco Dos Santos",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Fermentação de cacau, Gestão da produção",
    "visitaII": "Capacitação em poda, Controle de plantas espontâneas",
    "visitaIII": "Adubação de cova/cobertura, Produção de biofertilizante líquido",
    "visitaIV": "Produção de defensivos naturais"
  },
  {
    "tecnico": "Vitor Ramos do Prado",
    "familia": "Vanir Rodrigues Da Silva",
    "osp": "STR Tucumã",
    "municipio": "Tucumã",
    "visitaI": "Compostagem, Gestão da produção",
    "visitaII": "Adubação de cova/cobertura, Capacitação em poda",
    "visitaIII": "Produção de biofertilizante líquido",
    "visitaIV": "Produção de defensivos naturais"
  },
  {
    "tecnico": "Valdemir Ferreira Lima",
    "familia": "Waldilei Firmino Campo",
    "osp": "ASPROFERRO",
    "municipio": "Tucumã",
    "visitaI": "Adubação de cova/cobertura, Produção de mudas",
    "visitaII": "Capacitação em poda, Plantio de culturas",
    "visitaIII": "Gestão da produção",
    "visitaIV": "Controle de plantas espontâneas, Irrigação simples"
  }
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

const TECNICO_FRANCISCO_REMANEJADO = "Francisco Romildo Xavier Idelfonso";
const TECNICOS_ANTIGOS_VITOR = new Set([normalizar(TECNICO_FRANCISCO_REMANEJADO), normalizar("Vitor"), normalizar("Valdemir Ferreira Lima")]);
const FAMILIAS_ATRIBUIDAS_VITOR = new Set(
  ATUALIZACOES_CACAU_II
    .filter((item) => normalizar(item.tecnico) === normalizar(TECNICO_VITOR))
    .map((item) => normalizar(item.familia))
);

const FAMILIAS_REMANEJADAS_FRANCISCO = new Set(
  ATUALIZACOES_CACAU_II
    .filter((item) => item.tecnico === "Valdemir Ferreira Lima" || item.tecnico === TECNICO_VITOR)
    .map((item) => chave(TECNICO_FRANCISCO_REMANEJADO, item.familia))
);

const ATUALIZACOES_POR_FAMILIA = new Map(
  ATUALIZACOES_CACAU_II.map((item) => [chave(item.tecnico, item.familia), item])
);

function linhaDaAtualizacao(item) {
  return {
    [COLUNA_TECNICO]: item.tecnico,
    [COLUNA_FAMILIA]: item.familia,
    OSP: item.osp,
    [COLUNA_MUNICIPIO]: item.municipio,
    [COLUNA_VISITA_I]: item.visitaI,
    [COLUNA_VISITA_II]: item.visitaII,
    [COLUNA_VISITA_III]: item.visitaIII,
    [COLUNA_VISITA_IV]: item.visitaIV,
  };
}

export function aplicarPraticasFamiliasCacauII(row) {
  const atualizacao = ATUALIZACOES_POR_FAMILIA.get(chave(row[COLUNA_TECNICO], row[COLUNA_FAMILIA]));
  if (!atualizacao) return row;

  return {
    ...row,
    OSP: atualizacao.osp || row.OSP,
    [COLUNA_MUNICIPIO]: atualizacao.municipio || row[COLUNA_MUNICIPIO],
    [COLUNA_VISITA_I]: atualizacao.visitaI,
    [COLUNA_VISITA_II]: atualizacao.visitaII,
    [COLUNA_VISITA_III]: atualizacao.visitaIII,
    [COLUNA_VISITA_IV]: atualizacao.visitaIV,
  };
}

export function completarPraticasFamiliasCacauII(rows) {
  const vistos = new Set();
  const atualizadas = [];

  rows.forEach((row) => {
    const rowChave = chave(row[COLUNA_TECNICO], row[COLUNA_FAMILIA]);
    if (FAMILIAS_ATRIBUIDAS_VITOR.has(normalizar(row[COLUNA_FAMILIA])) && TECNICOS_ANTIGOS_VITOR.has(normalizar(row[COLUNA_TECNICO]))) return;
    if (FAMILIAS_REMANEJADAS_FRANCISCO.has(rowChave)) return;
    if (vistos.has(rowChave)) return;
    vistos.add(rowChave);
    atualizadas.push(aplicarPraticasFamiliasCacauII(row));
  });

  ATUALIZACOES_CACAU_II.forEach((item) => {
    const itemChave = chave(item.tecnico, item.familia);
    if (vistos.has(itemChave)) return;
    vistos.add(itemChave);
    atualizadas.push(linhaDaAtualizacao(item));
  });

  return atualizadas;
}

export function totalPraticasFamiliasCacauII() {
  return ATUALIZACOES_CACAU_II.length;
}
