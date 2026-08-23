// Manifesto de conteúdo do PAS/UEM - Etapa 1 (1º ano do Ensino Médio).
// Fonte-mãe: Manual do Candidato PAS/UEM 2026 (Programa de Prova para a Etapa 1),
// arquivo local em "Fontes Oficiais/manual_candidato_pas2026.pdf".
//
// Estrutura oficial da prova (Art. 19-21 do Manual do Candidato):
// - 40 questões objetivas, divididas em 5 áreas de 8 questões cada, todas no
//   formato de somatória (5 afirmações 01/02/04/08/16 por questão).
// - 1 redação (0 a 120 pontos), com gênero textual definido a cada edição.
// - Etapa 1 vale peso 1 no cômputo final (Etapa 2 e 3 valem peso 2 cada).

const areas = {
  "linguagens-portugues": {
    title: "Linguagens e suas Tecnologias — Língua Portuguesa",
    questoesNaProva: 8,
    disciplinas: ["portugues", "literatura"]
  },
  "linguagens-outras": {
    title: "Linguagens e suas Tecnologias — Artes, Educação Física e Língua Estrangeira",
    questoesNaProva: 8,
    disciplinas: ["ingles", "artes", "educacao-fisica"]
  },
  matematica: {
    title: "Matemática e suas Tecnologias",
    questoesNaProva: 8,
    disciplinas: ["matematica"]
  },
  "ciencias-natureza": {
    title: "Ciências da Natureza e suas Tecnologias",
    questoesNaProva: 8,
    disciplinas: ["biologia", "fisica", "quimica"]
  },
  "ciencias-humanas": {
    title: "Ciências Humanas e Sociais Aplicadas",
    questoesNaProva: 8,
    disciplinas: ["filosofia", "geografia", "historia", "sociologia"]
  }
};

function chapter(id, title, fileSlug, editalMapping, editalItems, options = {}) {
  return {
    id,
    title,
    label: `${id} - ${title}`,
    themePath: `temas/${options.groupId}/${fileSlug}.md`,
    questionPath: `provas/${options.groupId}/${fileSlug}.md`,
    editalMapping,
    editalItems,
    priority: options.priority || "média",
    status: options.status || "esqueleto"
  };
}

function group(id, title, shortTitle, area, editalBlock, chapters) {
  return {
    id,
    title,
    shortTitle,
    area,
    editalBlock,
    chapters: chapters.map((item) => ({ ...item, groupId: id, groupTitle: title, groupShortTitle: shortTitle }))
  };
}

const chapterGroups = [
  group("portugues", "Língua Portuguesa", "Português", "linguagens-portugues", "Língua Portuguesa (Etapa 1), itens 1-10", [
    chapter("001", "Compreensão e interpretação de textos", "001_compreensao-interpretacao-textos", "Língua Portuguesa 1", [
      "Compreensão e interpretação de textos."
    ], { groupId: "portugues", priority: "altíssima", status: "completo" }),
    chapter("002", "Gêneros do discurso: condições de produção e marcas de estilo", "002_generos-discurso-condicoes-producao", "Língua Portuguesa 2, 7", [
      "Condições de produção, estrutura composicional e marcas de estilo de diferentes gêneros do discurso.",
      "Vozes sociais nos gêneros do discurso."
    ], { groupId: "portugues", priority: "alta" }),
    chapter("003", "Sintaxe e produção de sentido no período simples", "003_sintaxe-periodo-simples", "Língua Portuguesa 3, 10", [
      "Funções sintáticas e produção do sentido.",
      "Período simples e produção de sentido."
    ], { groupId: "portugues", priority: "altíssima" }),
    chapter("004", "Variação linguística do português brasileiro", "004_variacao-linguistica", "Língua Portuguesa 4", [
      "Variação linguística do Português Brasileiro."
    ], { groupId: "portugues", priority: "média" }),
    chapter("005", "Coesão textual: organizadores, operadores discursivos e conectivos", "005_coesao-textual-organizadores-conectivos", "Língua Portuguesa 5", [
      "Organizadores textuais, operadores discursivos e/ou conectivos relevantes para a coesão."
    ], { groupId: "portugues", priority: "altíssima" }),
    chapter("006", "Argumentação: argumentos e contra-argumentos", "006_argumentacao-argumentos-contra-argumentos", "Língua Portuguesa 6", [
      "Argumentação: argumentos e contra-argumentos."
    ], { groupId: "portugues", priority: "alta" }),
    chapter("007", "Discurso oral e modalizadores do discurso", "007_discurso-oral-modalizadores", "Língua Portuguesa 8-9", [
      "Discurso oral: aspectos sinestésicos e adequação da fala a diferentes contextos.",
      "Modalizadores do discurso e seus efeitos de sentido."
    ], { groupId: "portugues", priority: "média" })
  ]),

  group("literatura", "Literaturas em Língua Portuguesa", "Literatura", "linguagens-portugues", "Literaturas em Língua Portuguesa (Etapa 1)", [
    chapter("001", "Literatura infantojuvenil: Ana Maria Machado", "001_literatura-infantojuvenil-ana-maria-machado", "Literatura - obra obrigatória", [
      "Ana Maria Machado, Isso ninguém me tira (ed. Ática, 2019)."
    ], { groupId: "literatura", priority: "altíssima" }),
    chapter("002", "Poesia colonial brasileira: Gregório de Matos, Gonzaga e Cláudio Manuel da Costa", "002_poesia-colonial-brasileira", "Literatura - obras obrigatórias", [
      "Gregório de Matos: poemas selecionados.",
      "Tomás Antônio Gonzaga: liras e sonetos de Marília de Dirceu.",
      "Cláudio Manuel da Costa: poemas selecionados."
    ], { groupId: "literatura", priority: "altíssima" }),
    chapter("003", "Poesia portuguesa: Camões", "003_poesia-portuguesa-camoes", "Literatura - obra obrigatória", [
      "Luís Vaz de Camões: sonetos selecionados."
    ], { groupId: "literatura", priority: "alta" }),
    chapter("004", "Literatura brasileira contemporânea: Leminski e Veríssimo", "004_literatura-brasileira-contemporanea-leminski-verissimo", "Literatura - obras obrigatórias", [
      "Paulo Leminski: poemas selecionados.",
      "Luís Fernando Veríssimo: crônicas selecionadas."
    ], { groupId: "literatura", priority: "altíssima" }),
    chapter("005", "Literatura africana de língua portuguesa: Pepetela", "005_literatura-africana-lingua-portuguesa-pepetela", "Literatura - obra obrigatória", [
      "Pepetela: A Montanha da água lilás: fábula para todas as idades."
    ], { groupId: "literatura", priority: "alta" }),
    chapter("006", "Teoria literária: gêneros, figuras de linguagem, periodização e versificação", "006_teoria-literaria-generos-figuras-periodizacao-versificacao", "Literatura - ferramentas de leitura", [
      "Gêneros literários, figuras de linguagem, periodização, elementos da narrativa e versificação aplicados às obras do programa."
    ], { groupId: "literatura", priority: "altíssima" })
  ]),

  group("ingles", "Língua Inglesa", "Inglês", "linguagens-outras", "Língua Inglesa (Etapa 1), itens 1.1-1.3", [
    chapter("001", "Gêneros textuais e estratégias de leitura em inglês", "001_generos-textuais-estrategias-leitura", "Língua Inglesa 1.1-1.2", [
      "Gêneros textuais do cotidiano, da imprensa e midiáticos (autobiografia, e-mail, notícia, anúncio, meme, etc.).",
      "Estratégias de leitura: ideia principal, detalhes, inferência lógica, organização textual, texto verbal e não verbal."
    ], { groupId: "ingles", priority: "altíssima" }),
    chapter("002", "Gramática funcional: pronomes, artigos e tempos verbais", "002_gramatica-pronomes-artigos-tempos-verbais", "Língua Inglesa 1.3 (a-j)", [
      "Personal pronouns; possessive adjectives/pronouns; articles.",
      "Simple present, present continuous, simple past, past continuous, simple future, immediate future."
    ], { groupId: "ingles", priority: "altíssima" }),
    chapter("003", "Gramática funcional: imperativo, there to be, question words e outros", "003_gramatica-imperativo-there-to-be-question-words", "Língua Inglesa 1.3 (k-p)", [
      "Imperative; there to be (present/past); question words.",
      "Prepositions (in, on, at); quantifiers (countable/uncountable); plural of nouns."
    ], { groupId: "ingles", priority: "alta" })
  ]),

  group("artes", "Arte", "Artes", "linguagens-outras", "Arte (Etapa 1), itens 1-4", [
    chapter("001", "Música: parâmetros do som e gêneros musicais brasileiros", "001_musica-parametros-som-generos-brasileiros", "Arte 1", [
      "Som, ruído e música; parâmetros do som; instrumentos musicais.",
      "Música ocidental contemporânea; samba, bossa nova e rock."
    ], { groupId: "artes", priority: "média" }),
    chapter("002", "Artes visuais: modernismo latino-americano, arte contemporânea e arte política", "002_artes-visuais-modernismo-contemporaneo-politico", "Arte 2", [
      "Arte moderna na América Latina: estilos, vanguardas e artistas.",
      "Arte contemporânea: performance, videoarte e instalação.",
      "Arte e política: movimentos feminista, negro, LGBT e indígena."
    ], { groupId: "artes", priority: "alta" }),
    chapter("003", "Artes cênicas: teatro improvisacional e elementos da linguagem cênica", "003_artes-cenicas-teatro-improvisacional-elementos", "Arte 3", [
      "Teatro improvisacional: experimentação corporal, vocal e criação cênica.",
      "Elementos da linguagem: jogo, ação, personagem, espaço cênico, visualidades, sonoridades e dramaturgias.",
      "Teatro, cultura e diversidade: manifestações populares, negras, indígenas, feministas e LGBTQIAPN+."
    ], { groupId: "artes", priority: "média" }),
    chapter("004", "Dança: elementos, dança contemporânea e danças típicas brasileiras", "004_danca-elementos-contemporanea-tipicas-brasileiras", "Arte 4", [
      "Elementos da dança: movimento corporal, espaço e tempo.",
      "Dança contemporânea e danças típicas brasileiras."
    ], { groupId: "artes", priority: "média" })
  ]),

  group("educacao-fisica", "Educação Física", "Ed. Física", "linguagens-outras", "Educação Física (Etapa 1), itens 1-5", [
    chapter("001", "Jogos cooperativos versus jogos competitivos", "001_jogos-cooperativos-competitivos", "Educação Física 1.1", [
      "Diferença entre jogos competitivos e cooperativos; tipos de jogos cooperativos e sua aplicabilidade."
    ], { groupId: "educacao-fisica", priority: "média" }),
    chapter("002", "Dança de salão como expressão corporal", "002_danca-salao-expressao-corporal", "Educação Física 2.1", [
      "O movimento como elemento constituinte do corpo e meio de expressão em sociedade."
    ], { groupId: "educacao-fisica", priority: "baixa" }),
    chapter("003", "Ginástica de condicionamento físico", "003_ginastica-condicionamento-fisico", "Educação Física 3.1", [
      "Tipos de ginástica e suas intencionalidades."
    ], { groupId: "educacao-fisica", priority: "baixa" }),
    chapter("004", "Esporte plural: educação, participação/lazer e mídia", "004_esporte-plural-educacao-participacao-midia", "Educação Física 4.1", [
      "Esporte como manifestação da cultura corporal de movimento: esporte educação, esporte participação/lazer.",
      "O esporte como veículo de alienação nas mídias digitais."
    ], { groupId: "educacao-fisica", priority: "média" }),
    chapter("005", "Lutas: valores humanos e cultura de movimento", "005_lutas-valores-humanos-cultura-movimento", "Educação Física 5", [
      "Valores humanos na prática das lutas no contexto escolar.",
      "As lutas como manifestação da cultura de movimento."
    ], { groupId: "educacao-fisica", priority: "média" })
  ]),

  group("filosofia", "Filosofia", "Filosofia", "ciencias-humanas", "Filosofia (Etapa 1), itens 1-3", [
    chapter("001", "Origem da filosofia e métodos filosóficos", "001_origem-filosofia-metodos-filosoficos", "Filosofia 1", [
      "Surgimento do discurso filosófico; argumentação filosófica e experimentos de pensamento.",
      "Filosofia grega: sofística x filosofia, método socrático, teoria das ideias, teses cosmológicas e antropológicas."
    ], { groupId: "filosofia", priority: "altíssima" }),
    chapter("002", "Teoria do conhecimento: ceticismo, racionalismo, empirismo e idealismo transcendental", "002_teoria-conhecimento-ceticismo-racionalismo-empirismo-idealismo", "Filosofia 2", [
      "O problema da possibilidade do conhecimento; evidência, opinião e senso comum.",
      "Ceticismo, racionalismo, empirismo e idealismo transcendental."
    ], { groupId: "filosofia", priority: "altíssima" }),
    chapter("003", "Lógica elementar: inferência, lógica proposicional e silogismo categórico", "003_logica-elementar-inferencia-proposicional-silogismo", "Filosofia 3.1-3.2", [
      "Consequência lógica; inferência dedutiva, indutiva e abdutiva.",
      "Operadores lógico-proposicionais; teoria do silogismo categórico e quadrado de oposições."
    ], { groupId: "filosofia", priority: "alta" }),
    chapter("004", "Falácias formais e não formais", "004_falacias-formais-nao-formais", "Filosofia 3.3", [
      "Falácias semânticas, de relevância e indutivas."
    ], { groupId: "filosofia", priority: "alta" })
  ]),

  group("geografia", "Geografia", "Geografia", "ciencias-humanas", "Geografia (Etapa 1), itens 1-3", [
    chapter("001", "Conceitos geográficos, localização e representação cartográfica", "001_conceitos-geograficos-localizacao-cartografia", "Geografia 1.1-1.4", [
      "Conceitos geográficos fundamentais; localização e orientação.",
      "Movimento da Terra e fusos horários; representação cartográfica e ação antrópica."
    ], { groupId: "geografia", priority: "alta" }),
    chapter("002", "Estrutura geológica e relevo", "002_estrutura-geologica-relevo", "Geografia 1.5-1.6", [
      "Estrutura da Terra, tectônica de placas e rochas.",
      "Estruturas e formas do relevo; agentes internos e externos."
    ], { groupId: "geografia", priority: "média" }),
    chapter("003", "Clima, biomas, solos e hidrografia", "003_clima-biomas-solos-hidrografia", "Geografia 1.7-1.10", [
      "Fatores e elementos do clima; circulação atmosférica; fenômenos e tipos climáticos.",
      "Biomas, solos e hidrografia."
    ], { groupId: "geografia", priority: "altíssima" }),
    chapter("004", "Recursos naturais, energia e impactos ambientais", "004_recursos-naturais-energia-impactos-ambientais", "Geografia 2", [
      "Recursos naturais: tipos e formas de ocorrência; fontes de energia.",
      "Impactos ambientais gerados pela exploração e pelo uso dos recursos naturais."
    ], { groupId: "geografia", priority: "alta" }),
    chapter("005", "A integração do Paraná com o global", "005_integracao-parana-global", "Geografia 3", [
      "O Estado do Paraná em sua integração com dinâmicas econômicas e territoriais globais."
    ], { groupId: "geografia", priority: "média" })
  ]),

  group("historia", "História", "História", "ciencias-humanas", "História (Etapa 1), itens 1-5", [
    chapter("001", "Antiguidade Ocidental: Grécia e Roma", "001_antiguidade-ocidental-grecia-roma", "História 1", [
      "Democracia, cidadania e escravidão; cultura da pólis.",
      "Expansão romana, política imperial e crise do século III d.C."
    ], { groupId: "historia", priority: "alta" }),
    chapter("002", "O Ocidente na Idade Média", "002_ocidente-idade-media", "História 2", [
      "Sociedade feudal e economia medieval.",
      "Estado, Igreja, cultura e saber na Idade Média."
    ], { groupId: "historia", priority: "alta" }),
    chapter("003", "História Moderna: crise medieval, Estados Nacionais e grandes navegações", "003_historia-moderna-estados-nacionais-navegacoes", "História 3", [
      "Crise da sociedade medieval e nascimento do mundo moderno.",
      "Formação dos Estados Nacionais; grandes navegações e revolução comercial."
    ], { groupId: "historia", priority: "altíssima" }),
    chapter("004", "Brasil colonial: economia, política, sociedade e cultura", "004_brasil-colonial-economia-politica-sociedade-cultura", "História 4", [
      "O período colonial brasileiro em seus aspectos econômico, político, social e cultural."
    ], { groupId: "historia", priority: "altíssima" }),
    chapter("005", "Paraná: colonização, povos e formação histórica", "005_parana-colonizacao-povos-formacao-historica", "História 5", [
      "Processo de colonização do Paraná: povos indígenas, europeus e africanos.",
      "Economia, cultura, política, conflitos sociais e relações de trabalho."
    ], { groupId: "historia", priority: "altíssima" })
  ]),

  group("sociologia", "Sociologia", "Sociologia", "ciencias-humanas", "Sociologia (Etapa 1), itens 1-3", [
    chapter("001", "Indivíduo e sociedade: interações, sociabilidades e identidades", "001_individuo-sociedade-interacoes-identidades", "Sociologia 1", [
      "O eu e o outro: relações entre indivíduo e sociedade.",
      "Interações, sociabilidades e identidades sociais; ações individuais e coletivas."
    ], { groupId: "sociologia", priority: "média" }),
    chapter("002", "Socialização, instituições sociais e juventude como categoria social", "002_socializacao-instituicoes-juventude", "Sociologia 2", [
      "Processos de socialização nas diferentes instituições sociais.",
      "A juventude como categoria social."
    ], { groupId: "sociologia", priority: "alta" }),
    chapter("003", "O mundo do trabalho contemporâneo", "003_mundo-trabalho-contemporaneo", "Sociologia 3", [
      "Modos de organização e divisão social no trabalho contemporâneo."
    ], { groupId: "sociologia", priority: "média" })
  ]),

  group("matematica", "Matemática", "Matemática", "matematica", "Matemática (Etapa 1), itens 1-4", [
    chapter("001", "Matrizes, determinantes e sistemas lineares", "001_matrizes-determinantes-sistemas-lineares", "Matemática 1", [
      "Conceito, elementos, adição e multiplicação de matrizes; matriz inversa.",
      "Sistemas lineares e matrizes associadas; resolução e discussão de um sistema linear."
    ], { groupId: "matematica", priority: "altíssima" }),
    chapter("002", "Conjuntos numéricos, medidas e notação científica", "002_conjuntos-numericos-medidas-notacao-cientifica", "Matemática 2", [
      "Números racionais e irracionais: operações, ordem, valor absoluto, intervalos.",
      "Unidades de medida e conversão; unidades de dados; notação científica e algarismos significativos."
    ], { groupId: "matematica", priority: "alta" }),
    chapter("003", "Matemática financeira: razão, proporção, porcentagem e juros", "003_matematica-financeira-razao-proporcao-porcentagem-juros", "Matemática 3", [
      "Razões, proporções, divisão proporcional e regra de três simples e composta.",
      "Porcentagem, médias, aumentos, descontos, juros simples e compostos.",
      "Sistemas de amortização (Price, SAC), inflação e indicadores socioeconômicos (IDH)."
    ], { groupId: "matematica", priority: "altíssima" }),
    chapter("004", "Estatística e análise de dados", "004_estatistica-analise-dados", "Matemática 4", [
      "Frequência absoluta; medidas de tendência central (média, mediana, moda) e de dispersão (variância, desvio-padrão).",
      "Interpretação de gráficos, tabelas e tabelas de frequência."
    ], { groupId: "matematica", priority: "altíssima" })
  ]),

  group("biologia", "Biologia", "Biologia", "ciencias-natureza", "Biologia (Etapa 1), itens 1-8", [
    chapter("001", "Fundamentos da Biologia: histórico, características e origem da vida", "001_fundamentos-biologia-historico-caracteristicas-origem-vida", "Biologia 1-4", [
      "Histórico, importância e abrangência da Biologia; caracterização dos seres vivos.",
      "Níveis de organização dos seres vivos; origem da vida."
    ], { groupId: "biologia", priority: "média" }),
    chapter("002", "Biologia celular: composição química e metabolismo da célula", "002_biologia-celular-composicao-metabolismo", "Biologia 5.1-5.2", [
      "Composição química da célula e necessidades alimentares.",
      "Componentes celulares (membrana, citoplasma, núcleo): estrutura e função.",
      "Metabolismo energético (respiração, fermentação, fotossíntese, quimiossíntese) e de controle (DNA, RNA, síntese proteica); cariótipo humano."
    ], { groupId: "biologia", priority: "altíssima" }),
    chapter("003", "Divisão celular: ciclo celular, mitose e meiose", "003_divisao-celular-mitose-meiose", "Biologia 5.3", [
      "Ciclo celular; mitose e meiose."
    ], { groupId: "biologia", priority: "altíssima" }),
    chapter("004", "Reprodução humana, gametogênese, fecundação e métodos contraceptivos", "004_reproducao-humana-gametogenese-fecundacao-contraceptivos", "Biologia 6", [
      "Tipos de reprodução; sistema genital masculino e feminino; formação de gametas.",
      "Fecundação; métodos contraceptivos e infecções sexualmente transmissíveis."
    ], { groupId: "biologia", priority: "altíssima" }),
    chapter("005", "Histologia: tecidos epitelial, conjuntivo, muscular e nervoso", "005_histologia-tecidos-epitelial-conjuntivo-muscular-nervoso", "Biologia 7", [
      "Características, estrutura e função dos tecidos epitelial, conjuntivo, muscular e nervoso."
    ], { groupId: "biologia", priority: "alta" }),
    chapter("006", "Ciência e saúde aplicadas à Etapa 1", "006_ciencia-saude-aplicadas-etapa-1", "Biologia 8", [
      "Aplicações de ciência e saúde relacionadas à citologia, reprodução e histologia da Etapa 1."
    ], { groupId: "biologia", priority: "média" })
  ]),

  group("fisica", "Física", "Física", "ciencias-natureza", "Física (Etapa 1), itens 1-2", [
    chapter("001", "Grandezas físicas, medição e Sistema Internacional", "001_grandezas-fisicas-medicao-sistema-internacional", "Física 1", [
      "Noções de medição em física; Sistema Internacional de Unidades (SI).",
      "Grandezas escalares e vetoriais; relação funcional entre grandezas e representação gráfica."
    ], { groupId: "fisica", priority: "média" }),
    chapter("002", "Cinemática: MU, MUV, queda livre e movimento circular", "002_cinematica-mu-muv-queda-livre-movimento-circular", "Física 2.1", [
      "Deslocamento escalar e vetorial; movimento uniforme (MU) e uniformemente variado (MUV).",
      "Queda livre, lançamento de projéteis; movimento circular uniforme (MCU) e uniformemente variado (MCUV).",
      "Função horária do movimento e representação gráfica."
    ], { groupId: "fisica", priority: "altíssima" }),
    chapter("003", "Dinâmica: leis de Newton, forças e plano inclinado", "003_dinamica-leis-newton-forcas-plano-inclinado", "Física 2.2.1-2.2.4", [
      "Referenciais inerciais e princípio da inércia; força e princípio fundamental da dinâmica; ação e reação.",
      "Forças peso, elástica e de contato (normal e atrito); força centrípeta; plano inclinado."
    ], { groupId: "fisica", priority: "altíssima" }),
    chapter("004", "Gravitação universal e leis de Kepler", "004_gravitacao-universal-leis-kepler", "Física 2.2.5-2.2.6", [
      "Lei da gravitação universal e campo gravitacional.",
      "Leis do movimento planetário de Kepler."
    ], { groupId: "fisica", priority: "média" }),
    chapter("005", "Quantidade de movimento, impulso e colisões", "005_quantidade-movimento-impulso-colisoes", "Física 2.2.7-2.2.8, 2.2.12-2.2.13", [
      "Quantidade de movimento linear e impulso de uma força; conservação da quantidade de movimento.",
      "Colisões entre corpos; sistema de partículas e centro de massa."
    ], { groupId: "fisica", priority: "alta" }),
    chapter("006", "Trabalho, energia e conservação de energia", "006_trabalho-energia-conservacao", "Física 2.2.9-2.2.11", [
      "Trabalho, energia cinética, energia potencial e potência.",
      "Forças conservativas e não conservativas; princípio da conservação de energia."
    ], { groupId: "fisica", priority: "altíssima" }),
    chapter("007", "Equilíbrio e máquinas simples", "007_equilibrio-maquinas-simples", "Física 2.2.14-2.2.15", [
      "Equilíbrio de uma partícula e de um corpo rígido.",
      "Polias e máquinas simples."
    ], { groupId: "fisica", priority: "média" })
  ]),

  group("quimica", "Química", "Química", "ciencias-natureza", "Química (Etapa 1), itens 1-5", [
    chapter("001", "Estados físicos da matéria e separação de misturas", "001_estados-fisicos-materia-separacao-misturas", "Química 1.1-1.4", [
      "Estados físicos da matéria e mudanças de fase; ocorrência de substâncias na natureza.",
      "Propriedades físicas como identificação de substâncias; processos de separação de misturas."
    ], { groupId: "quimica", priority: "média" }),
    chapter("002", "Estrutura atômica, modelos atômicos e tabela periódica", "002_estrutura-atomica-modelos-tabela-periodica", "Química 1.5-1.8", [
      "Representação simbólica de elementos e substâncias.",
      "Estrutura atômica e modelos atômicos; tabela periódica dos elementos."
    ], { groupId: "quimica", priority: "alta" }),
    chapter("003", "Ligações químicas e interações intermoleculares", "003_ligacoes-quimicas-interacoes-intermoleculares", "Química 2", [
      "Ligações iônicas, covalentes e metálicas.",
      "Substâncias orgânicas e inorgânicas, moleculares e iônicas; interações e polaridade intermoleculares."
    ], { groupId: "quimica", priority: "altíssima" }),
    chapter("004", "Radioatividade", "004_radioatividade", "Química 3", [
      "Emissões radioativas; transformações químicas nucleares; transmutação natural e artificial.",
      "A radioatividade no cotidiano: benefícios e malefícios."
    ], { groupId: "quimica", priority: "média" }),
    chapter("005", "Equações químicas, balanceamento e tipos de reação", "005_equacoes-quimicas-balanceamento-tipos-reacao", "Química 4.1-4.4", [
      "Equações químicas e balanceamento (método por tentativas); tipos de reações químicas.",
      "Estados de agregação de reagentes e produtos; representação das transformações químicas."
    ], { groupId: "quimica", priority: "altíssima" }),
    chapter("006", "Cálculos estequiométricos", "006_calculos-estequiometricos", "Química 4.5-4.9", [
      "Caracterização e identificação de substâncias; aspectos quantitativos das transformações químicas.",
      "Leis das reações químicas; cálculo estequiométrico envolvendo massa molar e número de Avogadro."
    ], { groupId: "quimica", priority: "alta" }),
    chapter("007", "Funções inorgânicas: ácidos, bases, sais e óxidos", "007_funcoes-inorganicas-acidos-bases-sais-oxidos", "Química 5", [
      "Características de ácidos, bases, sais e óxidos.",
      "Propriedades: indicadores, condutibilidade elétrica, reação com metais e neutralização.",
      "Impactos ambientais do uso de diferentes substâncias no cotidiano."
    ], { groupId: "quimica", priority: "altíssima" })
  ]),

  group("redacao", "Redação", "Redação", "linguagens-portugues", "Redação (Etapa 1), itens 1-3", [
    chapter("001", "Carta de solicitação", "001_carta-solicitacao", "Redação 1", [
      "Estrutura, finalidade e registro de linguagem da carta de solicitação."
    ], { groupId: "redacao", priority: "altíssima" }),
    chapter("002", "Comentário de postagens", "002_comentario-postagens", "Redação 2", [
      "Estrutura, finalidade e registro de linguagem do comentário de postagens."
    ], { groupId: "redacao", priority: "altíssima" }),
    chapter("003", "Resposta argumentativa", "003_resposta-argumentativa", "Redação 3", [
      "Estrutura, finalidade e construção de argumentos na resposta argumentativa."
    ], { groupId: "redacao", priority: "altíssima" })
  ])
];

function getAllChapters() {
  return chapterGroups.flatMap((groupItem) => groupItem.chapters.map((item) => ({
    ...item,
    groupId: groupItem.id,
    groupTitle: groupItem.title,
    groupShortTitle: groupItem.shortTitle,
    area: groupItem.area
  })));
}

function getChapterById(groupId, id) {
  const groupItem = chapterGroups.find((item) => item.id === groupId);
  if (!groupItem) return null;
  return groupItem.chapters.find((item) => item.id === String(id).padStart(3, "0"));
}

function buildSidebarMarkdown() {
  const topLevelPages = [
    { title: "Comece aqui", path: "README.md" },
    { title: "Conteúdo programático oficial", path: "CONTEUDO_PROGRAMATICO.md" },
    { title: "Como estudar (regras do material)", path: "REGRAS_DO_MATERIAL.md" },
    { title: "Banco de questões por matéria", path: "PROVAS.md" }
  ];

  const lines = topLevelPages.map((page) => `- [${page.title}](${page.path})`);
  lines.push("");

  Object.entries(areas).forEach(([areaId, areaInfo]) => {
    lines.push(`- **${areaInfo.title}**`);
    areaInfo.disciplinas.forEach((discId) => {
      const groupItem = chapterGroups.find((item) => item.id === discId);
      if (!groupItem) return;
      lines.push(`  - **${groupItem.title}**`);
      groupItem.chapters.forEach((item) => {
        lines.push(`    - [${item.label}](${item.themePath})`);
      });
    });
  });

  const redacaoGroup = chapterGroups.find((item) => item.id === "redacao");
  if (redacaoGroup) {
    lines.push(`- **${redacaoGroup.title} (0 a 120 pontos, avaliação à parte)**`);
    redacaoGroup.chapters.forEach((item) => {
      lines.push(`  - [${item.label}](${item.themePath})`);
    });
  }

  return `${lines.join("\n")}\n`;
}

module.exports = {
  areas,
  chapterGroups,
  getAllChapters,
  getChapterById,
  buildSidebarMarkdown
};
