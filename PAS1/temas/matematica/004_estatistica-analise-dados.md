# 004 - Estatística e análise de dados

## Leitura rápida

- Este tema cobra cinco conceitos que costumam aparecer juntos na mesma questão: média, moda, mediana (medidas de tendência central) e variância, desvio padrão (medidas de dispersão) — mais leitura de gráficos e tabelas.
- O erro mais comum é confundir as fórmulas ou generalizar uma relação entre variância e desvio padrão que só vale às vezes (não sempre).
- O atalho: para achar a mediana, **sempre ordene os dados primeiro** — pegar o valor "do meio" sem ordenar é o erro mais comum e mais bobo dessa matéria.

## Por que cai no PAS

Este item costuma vir como uma questão só, baseada numa tabela de dados reais (notas de alunos, por exemplo), pedindo para calcular ou julgar afirmações sobre média, moda, mediana, variância e desvio padrão ao mesmo tempo — testando se você sabe a definição exata de cada medida e não troca uma pela outra.

**Evidência real (PAS/UEM 2025, Etapa 1, Questão 32):** a questão deu uma tabela com as notas de 5 alunos em 3 avaliações e testou cálculo de variância e desvio padrão de um aluno específico, comparação entre média e moda de avaliações diferentes, cálculo de mediana, e uma afirmação teórica generalizando (erradamente) a relação entre desvio padrão e variância.

## Conteúdo completo orientado ao programa

### Medidas de tendência central: média, moda e mediana

- **Média aritmética:** soma de todos os valores dividida pela quantidade de valores.
- **Moda:** o valor que mais se repete no conjunto de dados. Pode não haver moda (todos os valores diferentes) ou haver mais de uma (empate na frequência mais alta).
- **Mediana:** o valor "do meio" quando os dados estão **ordenados**. Com número ímpar de valores, é o valor central; com número par, é a média dos dois valores centrais.

**Para o PAS:** para achar a mediana, ordene os dados do menor para o maior **antes** de identificar a posição central — usar a ordem "como os dados aparecem na tabela" é o erro mais comum.

Exemplo real: notas da Avaliação 3 de 5 alunos: `70, 93, 80, 91, 56`. Ordenando: `56, 70, 80, 91, 93`. Com 5 valores (ímpar), a mediana é o valor central (3º posição): `80`.

### Medidas de dispersão: variância e desvio padrão

**Variância** mede o quanto os valores de um conjunto se afastam, em média, da média do conjunto — é a **média dos quadrados dos desvios** (cada valor menos a média, elevado ao quadrado). **Desvio padrão** é a **raiz quadrada da variância** — tem a vantagem de estar na mesma unidade dos dados originais (a variância está "ao quadrado").

Fórmula (variância populacional): para valores `x₁, x₂, ..., xₙ` com média `x̄`:

`Variância = [(x₁-x̄)² + (x₂-x̄)² + ... + (xₙ-x̄)²] / n`

`Desvio padrão = √Variância`

Exemplo real: notas do Aluno A nas 3 avaliações: `56, 66, 70`. Média: `(56+66+70)/3=64`. Desvios: `56-64=-8`, `66-64=2`, `70-64=6`. Quadrados dos desvios: `64, 4, 36`. Soma: `104`. Variância: `104/3≈34,67`. Desvio padrão: `√(104/3)≈5,89`.

**Para o PAS:** o desvio padrão é sempre a **raiz quadrada** da variância — nunca o contrário, e nunca uma relação fixa tipo "sempre maior" ou "sempre menor" entre os dois.

### A relação entre variância e desvio padrão não é fixa

Uma pegadinha clássica é afirmar que "o desvio padrão é sempre maior que a variância" (ou o contrário). Isso **depende do valor numérico da variância**:

- Se a variância é **maior que 1**, o desvio padrão (raiz quadrada) é **menor** que a variância. Exemplo: variância = 4 → desvio padrão = 2 (menor que 4).
- Se a variância é **menor que 1** (entre 0 e 1), o desvio padrão é **maior** que a variância. Exemplo: variância = 0,25 → desvio padrão = 0,5 (maior que 0,25).
- Se a variância é exatamente 1, os dois são iguais.

**Para o PAS:** nunca aceite uma afirmação que compara variância e desvio padrão com "sempre maior" ou "sempre menor" — a relação depende do valor concreto da variância em cada caso.

## Diferenças que costumam ser trocadas

| Conceito A | Conceito B | Como a prova troca | Como não cair |
|---|---|---|---|
| Mediana com dados ordenados | Valor "do meio" na ordem em que aparece na tabela | Não ordena os dados antes de achar a posição central | Sempre ordene primeiro |
| Variância | Desvio padrão | Afirma relação fixa ("sempre maior/menor") entre os dois | Desvio padrão = raiz quadrada da variância; a comparação depende do valor numérico |
| Média de um conjunto | Moda de outro conjunto | Compara medidas de conjuntos de dados diferentes sem calcular cada um | Calcule cada medida separadamente antes de comparar |

## Como caiu na prova: questão comentada

**Fonte: PAS/UEM 2025, Etapa 1, Questão 32 (gabarito: 01-02 = soma 03)**

Tabela: notas de 5 alunos (A a E) em 3 avaliações. Aluno A: `56, 66, 70` (média 64).

1. "variância no conjunto das notas do aluno A é igual a 104/3" — **correta**: desvios ao quadrado somam 104 (calculado acima), dividido por 3 valores = `104/3`.
2. "desvio padrão no conjunto das notas do aluno A é menor que 6" — **correta**: `√(104/3)≈5,89`, que é menor que 6.
3. "média aritmética da avaliação 1 é menor que a moda da avaliação 2" — **errada**: avaliação 1 (`56,87,64,35,93`) tem média `335/5=67`; avaliação 2 (`66,90,56,56,35`) tem moda `56` (repete duas vezes). `67<56` é falso.
4. "mediana da avaliação 3 é 78" — **errada**: avaliação 3 ordenada é `56,70,80,91,93`; mediana (valor central) é `80`, não `78`.
5. "desvio padrão de um conjunto de dados é sempre maior que a variância" — **errada**: só é verdade quando a variância é menor que 1; para variância maior que 1 (como neste caso, `≈34,67`), o desvio padrão (`≈5,89`) é **menor** que a variância.
6. Soma das corretas: 01+02 = 03, batendo com o gabarito oficial.

## Pegadinhas do PAS

- Não ordenar os dados antes de achar a mediana.
- Comparar medidas (média, moda) de conjuntos de dados diferentes sem calcular cada um corretamente.
- Aceitar uma relação fixa e geral entre variância e desvio padrão sem checar o valor numérico.

## Como resolver questões

1. Sempre ordene os dados antes de identificar a mediana.
2. Calcule a média primeiro — ela é a base para variância e desvio padrão.
3. Para variância: calcule cada desvio (valor menos média), eleve ao quadrado, some e divida pela quantidade de valores.
4. Para desvio padrão: tire a raiz quadrada da variância — não confunda os dois nem assuma relação fixa entre eles.
5. Ao comparar medidas de conjuntos diferentes, calcule cada uma separadamente antes de comparar.

## Lacunas honestas

- Este tema tem uma questão real comentada (PAS 2025, Questão 32), cobrindo bem variância, desvio padrão, média, moda e mediana no mesmo contexto. Falta um exemplo real de leitura/interpretação de gráfico (barras, linhas, setores) e de tabela de frequência.
- Falta explorar o Vestibular de Verão (2020-2025, já baixado) e outros anos do PAS para este tema.

## Checklist de revisão

- [ ] Li o item do programa correspondente no Manual do Candidato.
- [ ] Sei calcular média, moda e mediana de um conjunto de dados (ordenando antes de achar a mediana).
- [ ] Sei calcular variância e desvio padrão passo a passo.
- [ ] Sei que a relação entre variância e desvio padrão depende do valor numérico da variância, não é fixa.
- [ ] Resolvi a questão comentada deste tema sem olhar o gabarito antes.

## Questões relacionadas

- [Resolver questões deste tema](../../provas/matematica/004_estatistica-analise-dados.md)

## Referências

**Manual e programa oficial**

- Manual do Candidato PAS/UEM 2026, Programa de Prova para a Etapa 1 — Matemática, item 4.

**Provas reais usadas**

- PAS/UEM 2025, Etapa 1, Questão 32 — `Fontes Oficiais/provas-anteriores/pas25_E1.pdf` e `pas25_gabdef.pdf`.
