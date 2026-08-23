# 001 - Matrizes, determinantes e sistemas lineares

## Leitura rápida

- Matriz é só uma tabela organizada de números — o que importa é saber operar com ela (somar, multiplicar, calcular determinante) e traduzir um sistema de equações para a forma matricial e de volta.
- O erro mais comum é tentar "resolver tudo na força bruta" (substituição, tentativa) em vez de usar as propriedades — número de equações x incógnitas, determinante, consistência do sistema — que resolvem a questão mais rápido e com menos chance de erro de conta.
- O atalho que resolve a maioria das questões: antes de calcular qualquer coisa, classifique o sistema (quantas equações, quantas incógnitas, é possível/impossível, determinado/indeterminado) — isso já elimina metade das alternativas em muitas questões.

## Por que cai no PAS

Este item aparece com muito peso: é comum a prova trazer uma questão inteira só sobre um sistema linear (seja em forma de equações, seja em forma matricial `AX=B`), pedindo para verificar se uma terna é solução, classificar o sistema (possível/impossível, determinado/indeterminado) e reconhecer propriedades do determinante — tudo dentro da mesma questão de somatória.

**Evidência real (4 questões, PAS 2024/2025 e Vestibular de Verão 2025):** o padrão mais comum é dar um sistema linear (por equações ou em forma matricial) e testar, ao mesmo tempo: (1) se uma terna numérica específica é solução (basta substituir e conferir), (2) classificação do sistema (possível determinado, possível indeterminado, ou impossível) e (3) uma propriedade de determinante ligada a essa classificação. Outra pergunta recorrente usa matrizes abstratas (sem números, só propriedades como `AB=A`) para testar se você consegue manipular álgebra matricial sem se perder.

## Conteúdo completo orientado ao programa

### Matriz: conceito e operações básicas

Uma **matriz** é uma tabela retangular de números organizados em linhas e colunas. Uma matriz com `m` linhas e `n` colunas é dita de ordem `m×n`. Quando `m=n`, é uma **matriz quadrada** de ordem `n`.

- **Adição de matrizes:** soma-se elemento a elemento, só é possível entre matrizes de mesma ordem.
- **Multiplicação por escalar:** multiplica-se cada elemento da matriz pelo número.
- **Multiplicação de matrizes:** `A×B` só é possível se o número de colunas de `A` for igual ao número de linhas de `B`. O elemento na posição (linha i, coluna j) do produto é a soma dos produtos "linha i de A" pela "coluna j de B", termo a termo. **A multiplicação de matrizes não é comutativa em geral**: `AB` pode ser diferente de `BA`.

**Para o PAS:** sempre confira as dimensões antes de multiplicar — e nunca assuma `AB=BA` a menos que isso seja dado como hipótese do problema.

### Matriz inversa

A **matriz inversa** de uma matriz quadrada `A`, quando existe, é a matriz `A⁻¹` tal que `A×A⁻¹=A⁻¹×A=I` (matriz identidade). Nem toda matriz quadrada tem inversa — só as que têm **determinante diferente de zero** (matrizes "não singulares").

### Sistema linear e sua forma matricial

Um sistema de equações lineares pode ser escrito na forma matricial `AX=B`, onde `A` é a matriz dos coeficientes, `X` é o vetor-coluna das incógnitas e `B` é o vetor-coluna dos termos independentes.

Exemplo real: o sistema com `A=[[1,2,6],[3,-1,1]]`, `X=[x,y,z]`, `B=[0,3]` representa, quando expandido, as equações `x+2y+6z=0` e `3x-y+z=3` — duas equações, três incógnitas.

**Para o PAS:** saber "traduzir" da forma matricial `AX=B` para as equações completas (e vice-versa) é pré-requisito para resolver quase toda questão desse tipo.

### Classificação de sistemas lineares: possível/impossível, determinado/indeterminado

| Classificação | O que significa | Quando ocorre |
|---|---|---|
| **Possível e determinado (SPD)** | Tem exatamente uma solução | Número de equações independentes = número de incógnitas |
| **Possível e indeterminado (SPI)** | Tem infinitas soluções | Menos equações independentes do que incógnitas, mas sistema consistente |
| **Impossível (SI)** | Não tem solução | As equações se contradizem (ex.: duas equações levam a "0 = número diferente de zero") |

**Como detectar um sistema impossível rapidamente:** se, ao somar ou combinar linearmente as equações, você chega a uma afirmação falsa (como `0 = 5`), o sistema é impossível — não tem solução nenhuma, para nenhum valor de nenhuma incógnita.

Exemplo real: no sistema `2x+y-z=4`, `x-3y+2z=5`, `-2x-y+z=1`, somando a 1ª e a 3ª equação: `(2x-2x)+(y-y)+(-z+z) = 4+1` → `0 = 5`. Contradição! Esse sistema é **impossível** — não existe solução, e isso já resolve várias afirmações da questão de uma vez (nenhuma terna numérica vai satisfazer todas as equações; não há solução com nenhuma condição extra, como `y=1`).

**Para o PAS:** antes de tentar resolver um sistema por substituição, teste se somar/subtrair equações revela uma contradição — é o jeito mais rápido de identificar um sistema impossível.

### Sistemas com mais incógnitas do que equações: geometricamente, retas ou planos

Quando um sistema tem menos equações do que incógnitas (por exemplo, 2 equações e 3 incógnitas), se for consistente, ele normalmente tem **infinitas soluções** (é indeterminado) — sobra pelo menos uma "variável livre".

Exemplo real: `x+2y+6z=0` e `3x-y+z=3` (2 equações, 3 incógnitas). Testando a terna `(2,2,-1)`: `2+2(2)+6(-1)=2+4-6=0` ✓ e `3(2)-2+(-1)=6-2-1=3` ✓ — é solução! Como há 2 equações "independentes" (não são múltiplas uma da outra) para 3 incógnitas, o sistema tem infinitas soluções — é **possível e indeterminado**.

**Para o PAS:** "o sistema possui apenas uma solução" costuma ser a armadilha nesse tipo de questão — sistemas com mais incógnitas do que equações independentes raramente têm solução única.

### Determinante: o que ele revela sobre o sistema

O **determinante** da matriz dos coeficientes de um sistema quadrado (mesmo número de equações e incógnitas) diz se o sistema é determinado ou não: se **determinante ≠ 0**, o sistema é possível e determinado (solução única); se **determinante = 0**, o sistema é indeterminado ou impossível.

Uma pista prática para saber se o determinante é zero **sem calcular**: se uma linha (equação) da matriz é múltipla de outra (por exemplo, linha 3 = -1 × linha 1), as linhas são linearmente dependentes, e o determinante é zero.

Exemplo real: no sistema `2x+y-z=4`, `x-3y+2z=5`, `-2x-y+z=1` — repare que os coeficientes da 3ª equação `(-2,-1,1)` são exatamente `-1×(2,1,-1)` (coeficientes da 1ª equação). Como uma linha é múltipla da outra, o determinante da matriz 3×3 é **zero**, sem precisar calcular pelo método de Sarrus ou cofatores.

**Para o PAS:** sempre que possível, procure múltiplos entre linhas antes de calcular determinante "na unha" — economiza tempo e reduz erro de conta.

### Álgebra matricial abstrata: manipulando sem números

Algumas questões dão apenas **propriedades** de matrizes (sem números), como `AB=A` e `BA=B`, e pedem para deduzir outras propriedades usando manipulação algébrica.

Exemplo real: se `AB=A` e `BA=B` (com `A`, `B` quadradas de mesma ordem), então:
- `A²=A·A=(AB)·A=A·(BA)=A·B=AB=A` → ou seja, `A²=A` (A é **idempotente**).
- Da mesma forma, `B²=B` (B também é idempotente).
- Daí, `A³=A²·A=A·A=A²=A`.
- E `(A+B)²=A²+AB+BA+B²=A+A+B+B=2(A+B)` — uma identidade central que resolve várias afirmações de uma vez.

**Para o PAS:** em álgebra matricial abstrata, **substitua repetidamente as hipóteses dadas** (aqui, `AB=A` e `BA=B`) dentro da expressão que você quer simplificar — é assim que se chega a atalhos como `A²=A` sem nunca usar números concretos.

## Diferenças que costumam ser trocadas

| Conceito A | Conceito B | Como a prova troca | Como não cair |
|---|---|---|---|
| Sistema impossível | Sistema indeterminado | Confunde "não tem solução" com "tem infinitas soluções" | Teste se somar/combinar equações gera uma contradição (0 = número ≠ 0) — se sim, é impossível |
| `AB` | `BA` | Assume que multiplicação de matrizes comuta | Só use `AB=BA` se isso for dado como hipótese |
| Matriz quadrada com determinante 0 | Matriz sem inversa | Trata como conceitos diferentes | São a mesma coisa: determinante 0 ⟺ matriz não tem inversa |
| Sistema com mais incógnitas que equações | Sistema com solução única | Assume que basta achar uma solução para o sistema ser determinado | Ache uma solução não garante unicidade — confira se há variável livre |

## Como caiu na prova: questões comentadas

**Fonte: PAS/UEM 2025, Etapa 1, Questão 29 — matrizes abstratas (gabarito: 01-02-04-16 = soma 23)**

Enunciado: sejam `A` e `B` matrizes quadradas de ordem `n>1`, tais que `AB=A` e `BA=B`.

1. `A³=A` (correta): como mostrado acima, `A²=A` (idempotente), logo `A³=A²·A=A·A=A²=A`.
2. `AB⁴A=A` (correta): de forma análoga, `B²=B`, logo `B⁴=(B²)²=B²=B`; então `AB⁴A=ABA=(AB)A=A·A=A²=A`.
3. `((A+B)ᵗ)²=2(A+B)ᵗ` (correta): já que `(A+B)²=2(A+B)` (identidade derivada acima), transpondo os dois lados: `((A+B)²)ᵗ=(2(A+B))ᵗ`, e como `(M²)ᵗ=(Mᵗ)²`, chega-se a `((A+B)ᵗ)²=2(A+B)ᵗ`.
4. `(A+B)²=A²+2AB+B²` (**errada**): a identidade correta é `(A+B)²=2A+2B` (mostrada acima), enquanto `A²+2AB+B²=A+2A+B=3A+B` — as duas só seriam iguais se `A=B`, o que não é dado.
5. `(BA)²=B` (correta): como `BA=B`, `(BA)²=B²=B`.
6. Soma das corretas: 01+02+04+16 = 23, batendo com o gabarito oficial.

**Fonte: PAS/UEM 2025, Etapa 1, Questão 27 — sistema linear em contexto (gabarito: 04-08-16 = soma 28)**

Contexto: fábrica com caixas de 96kg e 120kg; caminhão tipo I (máx. 3 toneladas / 27 caixas), tipo II (máx. 14 toneladas / 120 caixas).

1. Testando `x+y=27` (máximo de caixas do tipo I) e `96x+120y=3000` (3 toneladas em kg): resolvendo, `x=10, y=17` — solução inteira positiva válida, então a capacidade máxima do tipo I é de fato atingida. **Correta**.
2. Um caminhão tipo I com 20 caixas de 120kg + 7 caixas de 96kg: total de 27 caixas (bate com o máximo), mas o peso é `20×120+7×96=3072kg`, que **excede** os 3000kg permitidos — carga inválida, não é "capacidade máxima atingida" de forma válida. **Errada**.
3. Um caminhão tipo II com 103 caixas de 120kg + 17 caixas de 96kg: total de 120 caixas (exatamente o máximo de caixas do tipo II); peso = `103×120+17×96=13.992kg`, dentro do limite de 14.000kg — carga válida que atinge o limite de caixas. **Correta**.
4. Soma das corretas: 04+08+16 = 28, batendo com o gabarito oficial.

**Fonte: PAS/UEM 2024, Etapa 1, Questão 24 — sistema linear em forma matricial (gabarito: 01-08-16 = soma 25)**

Sistema `AX=B`, com `A=[[1,2,6],[3,-1,1]]`, `X=[x,y,z]`, `B=[0,3]` — ou seja, `x+2y+6z=0` e `3x-y+z=3`.

1. A terna `(2,2,-1)`: `2+2(2)+6(-1)=0` ✓ e `3(2)-2+(-1)=3` ✓ — é solução. **Correta**.
2. O sistema é homogêneo? Não — homogêneo exige `B=0` em todas as posições, e aqui `B=[0,3]`, com um termo diferente de zero. **Errada**.
3. O sistema tem 2 equações e 3 incógnitas (literal, direto da forma matricial). **Correta**.
4. O sistema é possível (tem solução, mostrado acima) e indeterminado (2 equações para 3 incógnitas, sobra uma variável livre). **Correta**.
5. Soma das corretas: 01+08+16 = 25, batendo com o gabarito oficial.

**Fonte: Vestibular de Verão UEM 2025, Questão 37 — sistema impossível (gabarito: 04-08-16 = soma 28)**

Sistema: `2x+y-z=4`, `x-3y+2z=5`, `-2x-y+z=1`.

1. Somando a 1ª e a 3ª equação: `0=5` — sistema **impossível**, não tem solução nenhuma. Isso já derruba a afirmação de "infinitas soluções" e confirma que nenhuma terna específica é solução.
2. Restringindo a `z=0`: 1ª equação vira `2x+y=4`; 3ª vira `-2x-y=1`, ou seja `2x+y=-1` — duas retas com o mesmo coeficiente angular e interceptos diferentes: **paralelas**. Correta.
3. Como o sistema não tem solução alguma, também não tem solução com `y=1` — a afirmação "não possui solução que satisfaça y=1" é **verdadeira** (é um caso particular de "não possui solução nenhuma").
4. O determinante é nulo porque a linha 3 é `-1×` a linha 1 (linhas linearmente dependentes).
5. Soma das corretas: 04+08+16 = 28, batendo com o gabarito oficial.

## Pegadinhas do PAS

- Assumir que um sistema com solução encontrada é automaticamente "determinado" (única solução) — sempre confira se sobra variável livre.
- Tentar resolver um sistema por substituição direta em vez de testar contradição (somar/subtrair equações) quando o sistema pode ser impossível.
- Assumir `AB=BA` sem essa hipótese estar dada no enunciado.
- Confundir "atingir o limite de uma restrição" (ex.: número de caixas) com "atingir o limite de todas as restrições simultaneamente" (peso também no limite).

## Como resolver questões

1. Identifique quantas equações e quantas incógnitas o sistema tem — isso já indica se é provável ser determinado, indeterminado ou precisa de mais investigação.
2. Teste contradição: some/subtraia equações para ver se aparece algo como `0 = número diferente de zero` (sistema impossível).
3. Para testar se uma terna é solução, substitua em **todas** as equações — não pare na primeira que bater.
4. Em álgebra matricial abstrata, substitua repetidamente as hipóteses dadas dentro da expressão que você quer provar ou refutar.
5. Procure múltiplos entre linhas da matriz de coeficientes antes de calcular determinante — se uma linha é múltipla de outra, o determinante já é zero.

## Lacunas honestas

- Este tema já tem quatro questões reais comentadas (PAS 2024, PAS 2025 e Vestibular de Verão 2025), cobrindo sistema com solução, sistema impossível, matrizes abstratas e sistema em forma matricial. Falta um exemplo real específico de cálculo de matriz inversa numérica (2×2 ou 3×3).
- Falta explorar mais anos do Vestibular de Verão (2020-2024, já baixados) para este tema.

## Checklist de revisão

- [ ] Li o item do programa correspondente no Manual do Candidato.
- [ ] Sei somar, multiplicar matrizes e explicar por que `AB≠BA` em geral.
- [ ] Sei classificar um sistema como possível determinado, possível indeterminado ou impossível.
- [ ] Sei detectar um sistema impossível somando/combinando equações, sem resolver tudo na força bruta.
- [ ] Sei relacionar determinante zero com sistema indeterminado/impossível e com matriz sem inversa.
- [ ] Resolvi as quatro questões comentadas deste tema sem olhar o gabarito antes.

## Questões relacionadas

- [Resolver questões deste tema](../../provas/matematica/001_matrizes-determinantes-sistemas-lineares.md)

## Referências

**Manual e programa oficial**

- Manual do Candidato PAS/UEM 2026, Programa de Prova para a Etapa 1 — Matemática, item 1.

**Provas reais usadas**

- PAS/UEM 2025, Etapa 1, Questões 27 e 29 — `Fontes Oficiais/provas-anteriores/pas25_E1.pdf` e `pas25_gabdef.pdf`.
- PAS/UEM 2024, Etapa 1, Questão 24 — `Fontes Oficiais/provas-anteriores/pas24_E1.pdf` e `pas24_gabdef.pdf`.
- Vestibular de Verão UEM 2025, Questão 37 — `Fontes Oficiais/provas-anteriores-vestibular/ve25_P1.pdf` e `ve25_gabdef.pdf`.
