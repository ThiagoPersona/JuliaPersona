# Regras do material

## Fonte-mãe

O **Manual do Candidato PAS/UEM 2026** (`Fontes Oficiais/manual_candidato_pas2026.pdf`), seção "Programa de Prova para a Etapa 1", é a fonte principal deste projeto. O menu lateral, a ordem de estudo e cada capítulo devem corresponder a um item real do conteúdo programático oficial dessa etapa.

## Norte

Este material existe para uma coisa: a aprovação da Julia na Etapa 1 do PAS/UEM. O texto deve ser denso o suficiente para que ela estude **só pelo capítulo**, sem precisar abrir o PDF do manual ou o material escolar de origem para entender o item do programa. Um capítulo curto, genérico ou raso não cumpre esse objetivo, mesmo que "cubra" o tópico.

**Ensinar o assunto inteiro vem antes de mapear pegadinha.** O capítulo precisa cobrir o conteúdo completo do item do programa como um professor ensinaria do zero — todos os subtópicos, todas as classificações, com definição e exemplo — e só depois empilhar a camada de "como o PAS/UEM cobra isso". Questão real é evidência e prática, não o limite do que deve ser ensinado.

**O conteúdo teórico deve valer por si, além do PAS/UEM.** É conteúdo de Ensino Médio: a explicação deve servir a qualquer aluno querendo aprender o assunto (inclusive para o Vestibular de Verão da UEM e para outros vestibulares/ENEM), com a camada "como o PAS cobra isso" entrando por cima, não como moldura da explicação.

## Formato oficial da prova (Etapa 1)

Todo o banco de questões deste projeto segue o formato real da prova, descrito no Art. 19-21 do Manual do Candidato:

- 40 questões objetivas, divididas em **5 áreas de 8 questões cada**: Língua Portuguesa; demais Linguagens (Artes, Educação Física e Língua Estrangeira); Matemática; Ciências da Natureza (Biologia, Física, Química); Ciências Humanas e Sociais Aplicadas (Filosofia, Geografia, História, Sociologia).
- Cada questão tem **5 afirmações**, identificadas pelos códigos **01, 02, 04, 08 e 16**. O candidato marca todas as que julgar corretas; a resposta é a **soma** dos códigos marcados.
- Pontuação por questão: 6,0 pontos se acertar exatamente o gabarito. Se marcar só alternativas corretas (nenhuma errada), ganha pontuação parcial proporcional ao número de alternativas corretas da questão (1 correta = 6,0; 2 = 3,0 cada; 3 = 2,0 cada; 4 = 1,5 cada; 5 = 1,2 cada). Se marcar **qualquer** alternativa errada, ou deixar tudo em branco, a questão vale **zero**. Se todas as 5 afirmações forem falsas, só pontua quem não marcar nada.
- Redação: gênero textual definido a cada edição (na Etapa 1: carta de solicitação, comentário de postagens ou resposta argumentativa), valendo de 0 a 120 pontos.
- Peso da Etapa 1 no cômputo final: 1 (a Etapa 2 e a Etapa 3 valem peso 2 cada).

**Todo banco de questões deste projeto usa esse formato de somatória**, nunca múltipla escolha de alternativa única — isso é o que o leitor (`index.html`) sabe corrigir automaticamente.

## Hierarquia de fontes

1. **Prova oficial da Etapa 1 do PAS/UEM, com gabarito definitivo confirmado.** Prioridade máxima — mesmo processo seletivo, mesma etapa. Disponíveis localmente em `Fontes Oficiais/provas-anteriores/`.
2. **Manual do Candidato PAS/UEM 2026 e eventuais retificações.** Define o programa, a ordem e a estrutura de cada capítulo.
3. **Provas do Vestibular de Verão da UEM, com gabarito definitivo confirmado.** Mesma instituição, mesmo formato de somatória — usada como fonte de peso equivalente à do PAS quando o assunto da questão bate com um item do programa da Etapa 1 (o Vestibular de Verão cobre conteúdo mais amplo, do Ensino Médio completo, então nem toda questão dele serve — só as que batem com o nível/conteúdo da Etapa 1). Disponíveis localmente em `Fontes Oficiais/provas-anteriores-vestibular/`.
4. **Provas de outras etapas do PAS (2 e 3) sobre o mesmo tópico**, quando servirem para ampliar prática de um assunto que também é da Etapa 1.
5. **Material escolar e apostilas de cursinho.** Usados para triagem de tema e apoio de explicação, nunca copiados literalmente.
6. **Fontes de referência atual** (livros didáticos, sites oficiais, dicionários) para conferência de fatos, dados e atualizações.

Regra de conflito: se houver divergência entre fontes, vale a mais recente e a de nível hierárquico mais alto nesta lista.

## Banco de questões: objetivo é ser grande, não ilustrativo

O banco de questões de cada tema não é uma vitrine de "1 exemplo por capítulo" — o objetivo é reunir **o máximo de questões reais e verificadas** que couberem no tema, vindas de qualquer prova da UEM (PAS ou Vestibular de Verão, qualquer ano disponível localmente) que trate do mesmo assunto. Isso é um trabalho contínuo: a cada sessão, mais questões devem ser extraídas e adicionadas aos temas já existentes, não só aos temas ainda vazios. Um tema com 1-2 questões reais não está "pronto" só por ter saído do zero — ele deve continuar crescendo enquanto houver questão real disponível nas provas já baixadas (ou em novas provas buscadas).

## Questões reais vs. questões autorais

- **Questão real** é aquela extraída de um caderno oficial do PAS/UEM (ou do Vestibular de Verão da UEM), com enunciado fiel, as 5 afirmações fiéis e gabarito oficial definitivo conferido (prova, ano, etapa, número). É sempre a preferência do projeto.
- **Questão autoral** é escrita por este projeto, no padrão observado da UEM (mesmo formato de somatória), quando ainda não há questão real suficiente para o tema. Deve estar identificada como autoral no próprio card, nunca disfarçada de questão oficial.
- Quando um tema tiver poucas questões reais cobrindo o exato item do programa, isso deve ser registrado como lacuna honesta — não deve ser preenchido forçando a classificação de uma questão real em um tema ao qual ela não pertence de fato.

## Como extrair questões reais dos PDFs baixados

### Cadernos de prova (E1.pdf / P1.pdf)

Esses PDFs têm texto selecionável. Extrair com:

```
pdftotext -layout -enc UTF-8 arquivo.pdf saida.txt
```

(`pdftotext` e o resto do poppler-utils estão instalados via winget — `oschwartz10612.Poppler` — e disponíveis no PATH; havia também uma cópia mais antiga em `C:\Program Files\Git\mingw64\bin\pdftotext.exe`.) Localizar o bloco `————— Questão NN —————` com as 5 afirmações 01/02/04/08/16. Atenção: provas com layout de duas colunas por página podem embaralhar um pouco a ordem do texto extraído — ler o resultado com atenção e, se preciso, usar os números de linha impressos no próprio texto-base para reordenar trechos.

### Gabaritos (gabdef.pdf)

**Provas do PAS:** normalmente têm texto selecionável. Extrair **sem** a flag `-layout` (o modo `-layout` embaralha a tabela em provas com colunas):

```
pdftotext -enc UTF-8 gabdef.pdf saida_raw.txt
```

No modo padrão, a extração produz três listas sequenciais: números das questões (na ordem 1..40/1..50, com blocos repetidos para cada opção de língua estrangeira), respostas numéricas e alternativas corretas — a posição N da lista "Questão" corresponde à posição N das listas "Resposta"/"Alternativa(s) Correta(s)".

**Gabaritos do Vestibular de Verão:** costumam usar fontes Type 3 sem mapeamento de texto — `pdftotext` retorna caracteres ilegíveis/embaralhados, mesmo sem `-layout`. Nesse caso, renderizar a página como imagem e ler visualmente:

```
pdftoppm -png -r 200 gabdef.pdf saida_gab
```

e abrir os `.png` gerados com a ferramenta de leitura de imagem — a tabela Questão/Resposta/Alternativa(s) Correta(s) aparece legível, ainda que o texto não seja selecionável.

### Depois de extrair

1. Conferir a lógica do gabarito contra o texto da questão antes de publicar (ex.: se a afirmação usa "sempre"/"unicamente" e o texto-base contradiz isso, ela deve mesmo estar fora do gabarito).
2. Gabarito definitivo confirmado disponível localmente para: PAS 2024 e 2025; Vestibular de Verão 2020-2025. As provas do PAS de 2021-2023 estão salvas mas **sem gabarito confirmado neste projeto** — registrar como lacuna se forem usadas.

## Estilo

- Escrever em linguagem própria, clara e prática — lembrando que quem lê tem 14-15 anos e está no 1º ano do Ensino Médio.
- Priorizar aprovação: conceito, diferença, pegadinha e forma de resolver.
- Não copiar trechos longos de livros didáticos ou apostilas.
- Não inventar questão, gabarito, data ou dado numérico.
- Quando faltar fonte, escrever a lacuna de modo explícito.
- Tabelas para comparar conceitos parecidos, diferenças e pegadinhas.
- Não transformar o capítulo em bullet solto: desenvolver em prosa técnica quando o assunto pedir explicação encadeada.

## Questões

- Preservar o gabarito oficial ou local conferido, no formato de somatória (código dos itens corretos, ex.: `02,04,08`).
- Identificar fonte, ano, etapa e número da questão quando disponível.
- Comentar cada uma das 5 afirmações, não só a alternativa "certa" — no formato de somatória, cada afirmação é uma mini-questão de certo/errado.
- Não usar justificativa genérica como "está errada porque o gabarito é outro".

## Menu do site (`_sidebar.md`)

O menu lateral é gerado por `scripts/generate-content.js` a partir de `content-manifest.js`, agrupado pelas 5 áreas oficiais da prova. Não editar `_sidebar.md` à mão sem também atualizar o manifesto — ele será sobrescrito na próxima geração.

## Checklist para um capítulo ficar pronto

- [ ] Tem "Por que cai no PAS" com evidência real (prova/etapa/ano/questão), não afirmação genérica.
- [ ] Tem conteúdo completo em prosa, suficiente para estudar sem abrir outra fonte.
- [ ] Tem tabela de diferenças entre conceitos que costumam ser trocados.
- [ ] Tem pelo menos uma questão real comentada (formato de somatória), quando existir fonte disponível; se não existir, a lacuna está registrada.
- [ ] Tem passo a passo de resolução de questão.
- [ ] Tem checklist de revisão e referências completas (manual do candidato, prova real usada, material escolar).
- [ ] O arquivo pode ser estudado sozinho, sem precisar abrir o PDF de origem.

## Publicação

- Manter `.nojekyll` se este material for publicado via GitHub Pages.
- Não versionar publicamente cadernos de prova completos além do que a própria UEM já disponibiliza publicamente em `vestibular.uem.br`.
- Testar links, renderização Markdown e correção automática das questões antes de considerar um capítulo pronto.
