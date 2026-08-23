# 002 - Conjuntos numéricos, medidas e notação científica

## Leitura rápida

- Este tema mistura três habilidades: julgar propriedades de números reais (racionais/irracionais, valor absoluto), converter unidades de medida em problemas do cotidiano, e operar com notação científica.
- O erro mais comum é confiar na "regra decorada" sem checar o caso concreto — nem toda soma de irracionais é irracional, nem toda propriedade "parece certa" resiste a um contraexemplo simples.
- O atalho: para questões de números reais, teste um contraexemplo numérico antes de aceitar uma afirmação "sempre verdadeira"; para conversão de unidades, escreva a conta completa (não estime de cabeça); para notação científica, confira separadamente a mantissa e o expoente.

## Por que cai no PAS

Este item aparece de duas formas bem diferentes: (1) afirmações teóricas sobre números reais, testando se você sabe quando uma propriedade "geralmente verdadeira" falha; e (2) problemas aplicados de conversão de unidade ou notação científica, testando se você faz a conta com cuidado, sem errar potência de dez ou fator de conversão.

**Evidência real (3 questões, PAS 2024/2025):** o padrão de pegadinha nas afirmações teóricas sobre números reais é sempre o mesmo — pegar uma propriedade que **parece** universal (soma de irracionais, comparação de potências negativas) e testar se você sabe que ela **não** vale sempre. Já nas questões aplicadas (conversão de unidade, notação científica), o erro mais comum é de conta — errar uma casa decimal ou uma potência de dez.

## Conteúdo completo orientado ao programa

### Números racionais e irracionais: propriedades que "quase sempre" valem, mas não sempre

**Racionais** são números que podem ser escritos como fração de inteiros (`a/b`, com `b≠0`) — incluem inteiros, decimais exatos e dízimas periódicas. **Irracionais** não podem ser escritos como fração — dízimas não periódicas, como `√2`, `π`.

Propriedades de fechamento (o que "fica dentro" do mesmo conjunto ao operar):

| Operação | Racionais | Irracionais |
|---|---|---|
| Soma de dois do mesmo tipo | Sempre racional | **Nem sempre** irracional (contraexemplo: `√2 + (-√2) = 0`, que é racional) |
| Multiplicação por racional não-nulo | Sempre racional | Racional × irracional (≠0) é sempre irracional |

**Para o PAS:** "a soma de dois números irracionais é sempre irracional" é **falsa** — o contraexemplo clássico (`√2` e `-√2` somando zero) já derruba a afirmação. Já "a soma de racionais é sempre racional" é **verdadeira**, propriedade de fechamento dos racionais.

### Valor absoluto e comparação de expressões numéricas

**Valor absoluto** `|x|` é a distância de `x` até zero — sempre um número não negativo. Questões costumam pedir para calcular ou comparar expressões com valor absoluto, frações e potências, exigindo conta cuidadosa passo a passo.

Exemplo real: `|3/5 - 5/3 - 1/2|`. Reduzindo ao mesmo denominador (30): `18/30 - 50/30 - 15/30 = -47/30`. Valor absoluto: `47/30`. Uma afirmação que testa exatamente esse resultado exige a conta completa, sem atalho.

**Para o PAS:** resolva a expressão **dentro** do módulo primeiro (incluindo o sinal), só depois aplique o valor absoluto — inverter a ordem é a fonte mais comum de erro.

### Potências: comparando expoentes negativos

Uma pegadinha comum: comparar `a⁻ⁿ` com `b⁻ᵐ` "de cabeça", assumindo que base ou expoente maior sempre dá resultado maior. Isso não vale para expoentes negativos.

Exemplo real: `2⁻⁸` vs `8⁻²`. Calculando: `2⁻⁸ = 1/256 ≈ 0,0039`; `8⁻² = 1/64 ≈ 0,0156`. Apesar de `2⁻⁸` ter expoente "mais negativo", o resultado é **menor**, não maior — a intuição de "quanto mais negativo o expoente, maior o número" é falsa.

**Para o PAS:** com expoentes negativos, sempre converta para fração (`a⁻ⁿ = 1/aⁿ`) antes de comparar — não confie na leitura direta dos expoentes.

### Conversão de unidades: monte a equação completa

Problemas de conversão (tempo, comprimento, volume, massa) pedem para transformar uma unidade em outra e comparar com um valor dado. O erro mais comum é converter só parte da conta ou esquecer de ajustar a escala.

Exemplo real: "se em cada 20ml de refrigerante há 2,5g de açúcar, então em uma lata de 0,35L há mais de 40g de açúcar?" — Primeiro converta 0,35L para ml: `0,35L = 350ml`. Depois monte a proporção: `350ml ÷ 20ml = 17,5` (quantas "porções" de 20ml cabem em 350ml). Multiplique pelo açúcar por porção: `17,5 × 2,5g = 43,75g`. Como `43,75g > 40g`, a afirmação é **verdadeira**.

**Para o PAS:** escreva a conversão de unidade como primeiro passo isolado (ex.: `0,35L → 350ml`), depois monte a proporção — misturar as duas etapas numa conta só é onde mais se erra.

### Notação científica: mantissa e expoente são operações separadas

**Notação científica** escreve um número como `m × 10ⁿ`, onde `1 ≤ m < 10`. Nas quatro operações:

- **Multiplicação:** multiplica-se as mantissas e **soma-se** os expoentes.
- **Divisão:** divide-se as mantissas e **subtrai-se** os expoentes.
- **Soma/subtração:** só é direta se os expoentes forem **iguais** — some as mantissas e mantenha o expoente. Se os expoentes forem diferentes, é preciso igualá-los primeiro.

Exemplo real: `(6,022×10²³) + (3,011×10²³)`. Como os expoentes já são iguais (23), soma-se as mantissas: `6,022+3,011=9,033`, mantendo o expoente: `9,033×10²³`. A pegadinha da questão real somava também os expoentes (`23+23=46`), o que está **errado** — soma de potências de mesma base não soma os expoentes quando a operação é adição, só quando é multiplicação.

Outro exemplo real: `(0,0000013) × (42000000)`. Convertendo: `1,3×10⁻⁶ × 4,2×10⁷ = (1,3×4,2)×10^(-6+7) = 5,46×10¹ = 54,6`. Aqui sim, na multiplicação, os expoentes se somam.

**Para o PAS:** antes de operar, pergunte "isso é soma/subtração ou multiplicação/divisão?" — a regra do expoente muda completamente entre os dois casos.

## Diferenças que costumam ser trocadas

| Conceito A | Conceito B | Como a prova troca | Como não cair |
|---|---|---|---|
| Propriedade válida para racionais | Mesma propriedade "estendida" para irracionais | Generaliza fechamento dos racionais para os irracionais | Teste um contraexemplo (ex.: `√2 + (-√2)`) antes de aceitar |
| Comparação de expoentes negativos pela "aparência" | Comparação pelo valor calculado | Assume que expoente mais negativo = número maior | Converta para fração antes de comparar |
| Soma de potências de 10 (mantém expoente) | Multiplicação de potências de 10 (soma expoente) | Soma os expoentes numa adição de notação científica | Só some expoentes em multiplicação; em soma, iguale os expoentes primeiro |

## Como caiu na prova: questões comentadas

**Fonte: PAS/UEM 2024, Etapa 1, Questão 23 — números reais (gabarito: 02-08 = soma 10)**

1. "Soma de irracionais é sempre irracional" — **errada**: contraexemplo `√2+(-√2)=0` (racional).
2. "Soma de racionais é sempre racional" — **correta**: propriedade de fechamento dos racionais.
3. `2⁻⁸ > 8⁻²` — **errada**: `2⁻⁸≈0,0039` e `8⁻²≈0,0156`; a desigualdade está invertida.
4. `|3/5-5/3-1/2| = 47/30` — **correta**: conta conferida acima, resultado exato `-47/30`, valor absoluto `47/30`.
5. `√16=±4` — **errada**: o símbolo `√` (raiz principal) de um número positivo é sempre o valor **positivo**; `√16=4`, não `±4` (o `±` só aparece ao resolver uma equação como `x²=16`, não ao calcular `√16` diretamente).
6. Soma das corretas: 02+08 = 10, batendo com o gabarito oficial.

**Fonte: PAS/UEM 2025, Etapa 1, Questão 28 — conversão de unidades (gabarito: 02-08-16 = soma 26)**

1. "350 segundos = 3,5 minutos" — **errada**: `350÷60=5,83` minutos, não 3,5.
2. "20ml com 2,5g de açúcar → 0,35L (350ml) tem mais de 40g" — **correta**: conta completa acima, resultado `43,75g`.
3. "passo de 35cm, 3300 passos percorrem 1,15km" — **errada**: `3300×0,35m=1.155m=1,155km`, não exatamente `1,15km`.
4. "torneira de 150ml/s, 15 minutos causam 135L de desperdício" — **correta**: `15min=900s`; `900×150ml=135.000ml=135L`.
5. "ovo de 150g custa R$45, preço por kg é R$300" — **correta**: `R$45 ÷ 0,150kg = R$300/kg`.
6. Soma das corretas: 02+08+16 = 26, batendo com o gabarito oficial.

**Fonte: PAS/UEM 2025, Etapa 1, Questão 31 — notação científica (gabarito: 01-08-16 = soma 25)**

1. `2,025×10²⁰²⁵ = 0,2025×10²⁰²⁶` — **correta**: `0,2025×10×10²⁰²⁵=2,025×10²⁰²⁵` (multiplicar a mantissa por 10 e diminuir o expoente em 1 mantém o valor).
2. `0,000000101 = 1,01×10⁻⁶` — **errada**: contando as casas decimais corretamente, `0,000000101=1,01×10⁻⁷`, não `10⁻⁶`.
3. `(6,022×10²³)+(3,011×10²³)=9,033×10⁴⁶` — **errada**: em soma de mesma potência, soma-se as mantissas e mantém o expoente: resultado correto é `9,033×10²³`.
4. `(0,0000013)×(42000000)=54,6` — **correta**: `1,3×10⁻⁶ × 4,2×10⁷ = 5,46×10¹ = 54,6`.
5. `(0,0000854)÷(0,00000000122)=7×10⁴` — **correta**: `8,54×10⁻⁵ ÷ 1,22×10⁻⁹ = (8,54/1,22)×10⁴ ≈ 7×10⁴`.
6. Soma das corretas: 01+08+16 = 25, batendo com o gabarito oficial.

## Pegadinhas do PAS

- Generalizar uma propriedade de fechamento dos racionais para os irracionais sem testar contraexemplo.
- Comparar potências de expoente negativo "pela aparência" do expoente, sem converter para fração.
- Somar expoentes de potências de 10 numa operação de adição (regra que só vale para multiplicação).
- Misturar etapas de conversão de unidade numa única conta, sem isolar cada passo.

## Como resolver questões

1. Para afirmações "sempre verdadeiras" sobre números reais, procure primeiro um contraexemplo simples antes de aceitar.
2. Para potências negativas, converta para fração antes de comparar.
3. Para conversão de unidade, escreva a conversão isolada como primeiro passo, depois monte a proporção/conta.
4. Para notação científica, identifique se a operação é soma/subtração (mantém expoente igual) ou multiplicação/divisão (soma/subtrai expoente) antes de operar.

## Lacunas honestas

- Este tema já tem três questões reais comentadas (PAS 2024 e 2025), cobrindo números reais, conversão de unidades e notação científica. Falta um exemplo real sobre intervalos numéricos e representação decimal de frações ordinárias.
- Falta explorar o Vestibular de Verão (2020-2025, já baixado) para ampliar este tema.

## Checklist de revisão

- [ ] Li o item do programa correspondente no Manual do Candidato.
- [ ] Sei um contraexemplo para "soma de irracionais é sempre irracional".
- [ ] Sei comparar potências de expoente negativo convertendo para fração.
- [ ] Sei a regra de expoente para soma/subtração x multiplicação/divisão em notação científica.
- [ ] Resolvi as três questões comentadas deste tema sem olhar o gabarito antes.

## Questões relacionadas

- [Resolver questões deste tema](../../provas/matematica/002_conjuntos-numericos-medidas-notacao-cientifica.md)

## Referências

**Manual e programa oficial**

- Manual do Candidato PAS/UEM 2026, Programa de Prova para a Etapa 1 — Matemática, item 2.

**Provas reais usadas**

- PAS/UEM 2024, Etapa 1, Questão 23 — `Fontes Oficiais/provas-anteriores/pas24_E1.pdf` e `pas24_gabdef.pdf`.
- PAS/UEM 2025, Etapa 1, Questões 28 e 31 — `Fontes Oficiais/provas-anteriores/pas25_E1.pdf` e `pas25_gabdef.pdf`.
