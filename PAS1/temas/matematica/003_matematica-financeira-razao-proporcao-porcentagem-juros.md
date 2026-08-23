# 003 - Matemática financeira: razão, proporção, porcentagem e juros

## Leitura rápida

- Matemática financeira no PAS é sempre aplicada a um contexto real (dividir pagamento por área pintada, comparar preços de produtos, calcular juros de investimento, aplicar imposto e desconto em sequência) — não pede fórmula solta, pede montar a conta certa para a situação.
- O erro mais comum é aplicar porcentagens sucessivas como se fossem somas simples (achar que 13% de aumento seguido de 10% de desconto dá "3% de aumento líquido") — não dá, porque a segunda porcentagem incide sobre um valor já alterado pela primeira.
- O atalho: em problemas de porcentagem/juros em sequência, calcule passo a passo sobre o valor atualizado a cada etapa — nunca some ou subtraia percentuais diretamente.

## Por que cai no PAS

Este é um dos itens de maior peso da prova: praticamente garantido pelo menos uma questão inteira de matemática financeira aplicada, geralmente embutida numa situação do cotidiano (compra de produtos, investimento, imposto, divisão de pagamento por proporção). A prova gosta de misturar, na mesma questão, um cálculo correto e uma "regra de bolso" errada sobre porcentagem, para testar se você realmente entende o mecanismo ou só decorou atalhos.

**Evidência real (4 questões, PAS 2024/2025 e Vestibular de Verão 2025):** todas as questões deste banco compartilham o mesmo padrão de pegadinha — uma afirmação aplica corretamente uma porcentagem/proporção, e outra comete o erro clássico de tratar porcentagens sucessivas como se fossem aditivas, ou de calcular a base errada para a porcentagem.

## Conteúdo completo orientado ao programa

### Razão e proporção: dividir algo proporcionalmente a uma grandeza

**Razão** é a comparação entre duas grandezas (`a/b`). **Proporção** é a igualdade entre duas razões. Em problemas de divisão proporcional, um valor total é repartido de acordo com a proporção de uma grandeza associada a cada parte (área, tempo, peso).

Exemplo real: "o custo total da mão de obra (R$75.000) foi dividido proporcionalmente à área pintada por cada um; João recebeu R$45.000". Para achar a área total pintada, use a taxa por m²: `R$75.000 ÷ R$30/m² = 2.500m²`. A fração recebida por João é `45.000/75.000 = 60%`, ou seja, ele pintou 60% da área total (`1.500m²`), e Pedro pintou os 40% restantes (`1.000m²`).

**Para o PAS:** em divisão proporcional, a fração do pagamento recebido é **igual** à fração da grandeza associada (aqui, área) — não precisa resolver equação, basta calcular a razão.

### Porcentagem: sempre identifique a base do cálculo

**Porcentagem** é uma razão com denominador 100. O erro mais comum em problemas de porcentagem não é a conta em si, mas identificar **sobre qual valor** a porcentagem incide — a "base" do cálculo.

Exemplo real: comparando preços de papel higiênico por metro, é preciso calcular o preço por metro de cada produto (preço total ÷ metros totais), não comparar os preços totais diretamente — produtos com quantidades diferentes só são comparáveis depois de reduzidos à mesma unidade (preço por metro, ou preço por rolo).

**Para o PAS:** antes de calcular uma porcentagem ou comparar preços, pergunte "porcentagem/preço de quê, em relação a quê?" — identificar a base certa evita a maioria dos erros.

### Aumentos e descontos sucessivos: nunca some as porcentagens

Quando um valor sofre um aumento percentual seguido de um desconto percentual (ou vice-versa), **cada porcentagem incide sobre o valor já modificado pela etapa anterior** — não se pode somar/subtrair as porcentagens diretamente.

Exemplo real: um serviço de R$800 recebe um aumento de 13% e depois um desconto de 10% sobre o novo valor.

1. Aumento de 13%: `800 × 1,13 = 904`.
2. Desconto de 10% sobre R$904: `904 × 0,90 = 813,60`.

O valor final é **R$813,60**, um aumento líquido de apenas `(813,60-800)/800 = 1,7%` sobre o valor original — **não** os "13% - 10% = 3%" que uma conta ingênua sugeriria.

**Para o PAS:** a "regra de bolso" de somar/subtrair porcentagens sucessivas está sempre errada quando a segunda porcentagem incide sobre um valor diferente do original. Calcule sempre em etapas, multiplicando pelo fator (`1 + taxa` para aumento, `1 - taxa` para desconto).

### Juros compostos: o efeito multiplicativo ano a ano

Em **juros compostos**, o rendimento de cada período incide sobre o montante já acumulado (capital + juros anteriores), não sobre o capital inicial isolado. Para uma taxa fixa `i` ao ano, por `t` anos, o montante é `C×(1+i)ᵗ`. Para taxas variáveis por ano (`i₁, i₂, i₃`), o montante é `C×(1+i₁)×(1+i₂)×(1+i₃)`.

Exemplo real: capital `C` a 15% ao ano fixo por 3 anos: montante = `C×1,15³ = C×1,520875` (rendimento de ≈52%). Capital `C` com taxas 10%, 15%, 20% nos 3 anos: montante = `C×1,10×1,15×1,20 = C×1,518` (rendimento de ≈51,8%).

**Curiosidade útil:** sob **juros simples** (onde o percentual de cada ano incide sempre sobre o capital original, sem efeito composto), a ordem das taxas não importa — somar `10%+15%+20%=45%` dá o mesmo resultado que somar `15%+15%+15%=45%`. Ou seja, as duas opções de investimento do exemplo teriam rendimento **igual** sob juros simples, mesmo tendo taxas de composição diferentes — só há vantagem de uma opção sobre a outra quando o regime é de juros **compostos**.

**Para o PAS:** para decidir se uma opção de investimento é mais vantajosa, calcule o fator multiplicativo total (produto de `1+taxa` de cada período) — não basta comparar as taxas nominais.

## Diferenças que costumam ser trocadas

| Conceito A | Conceito B | Como a prova troca | Como não cair |
|---|---|---|---|
| Aumento/desconto sucessivo (multiplicativo) | Soma/subtração direta de percentuais | Diz que "aumento de 13% + desconto de 10% = 3% de aumento" | Calcule em etapas, multiplicando pelo fator de cada uma |
| Juros compostos (efeito multiplicativo) | Juros simples (efeito aditivo, base fixa) | Compara taxas nominais sem considerar o regime | Sob juros simples, ordem/distribuição da taxa não muda o resultado final |
| Fração do pagamento = fração da grandeza (divisão proporcional) | Cálculo via sistema de equações | Tenta montar equação onde uma simples razão resolve | Calcule a razão direta entre a parte e o total |
| Preço total | Preço por unidade (metro, kg, rolo) | Compara preços totais de produtos com quantidades diferentes | Sempre reduza à mesma unidade antes de comparar |

## Como caiu na prova: questões comentadas

**Fonte: PAS/UEM 2025, Etapa 1, Questão 25 — divisão proporcional (gabarito: 02-04 = soma 06)**

Contexto: custo de mão de obra R$30/m², pagamento total R$75.000, João recebeu R$45.000.

1. "área de João foi inferior à de Pedro" — **errada**: João recebeu 60% do total (mais que os 40% de Pedro), logo pintou mais área, não menos.
2. "João recebeu 60% do pagamento total" — **correta**: `45.000/75.000=0,60=60%`.
3. "área total pintada foi 2.500m²" — **correta**: `75.000÷30=2.500m²`.
4. "Pedro pintou mais de 1.200m²" — **errada**: Pedro pintou 40% de 2.500m² = 1.000m², que é menos de 1.200m².
5. "se mão de obra é 40% do custo total, material = R$120.000" — **errada**: custo total = `75.000÷0,40=187.500`; material = `187.500-75.000=112.500`, não `120.000`.
6. Soma das corretas: 02+04 = 06, batendo com o gabarito oficial.

**Fonte: PAS/UEM 2025, Etapa 1, Questão 26 — juros compostos (gabarito: 02-04-08 = soma 14)**

Contexto: opção 1, taxa fixa 15% ao ano por 3 anos; opção 2, taxas 10%, 15%, 20% nos 3 anos. Juros compostos.

1. "capital de R$1.000 em cada opção, montante somado supera R$4.000" — **errada**: montante opção 1 = `1.000×1,520875≈1.520,88`; opção 2 = `1.000×1,518=1.518`; soma ≈ `3.038,88`, não supera R$4.000.
2. "as duas opções têm rendimento superior a 50%" — **correta**: opção 1 rende ≈52,09%; opção 2 rende ≈51,8% — ambas acima de 50%.
3. "montante final é diretamente proporcional ao capital investido" — **correta**: como o montante é `C × fator`, dobrar `C` dobra o montante, em ambas as opções.
4. "primeira opção é mais vantajosa que a segunda" — **correta**: fator opção 1 (`1,520875`) é maior que o fator opção 2 (`1,518`).
5. "se juros simples, a segunda seria mais vantajosa" — **errada**: em juros simples, as duas dariam o mesmo rendimento (`45%` de acréscimo em ambas), não uma vantagem para a segunda.
6. Soma das corretas: 02+04+08 = 14, batendo com o gabarito oficial.

**Fonte: PAS/UEM 2024, Etapa 1, Questão 25 — comparação de preços (gabarito: 02-08-16 = soma 26)**

Contexto: Papel A (4 rolos de 20m, R$5,60), Papel B (72 rolos de 30m, R$129,60), Papel C (24 rolos de 40m, R$32,40).

1. "papel A tem o metro mais barato" — **errada**: preço/m: A=R$0,07; B=R$0,06; C=R$0,03375 — o mais barato por metro é C, não A.
2. "o papel com rolo mais barato é o que tem a maior quantidade de papel no rolo" — **correta**: preço por rolo: A=R$1,40; B=R$1,80; C=R$1,35 — o rolo mais barato é C, que também tem o maior comprimento por rolo (40m).
3. "papel B é 10% mais caro que A por metro" — **errada**: B (R$0,06/m) é na verdade mais barato que A (R$0,07/m), não mais caro.
4. "rolo de C custa 75% do preço do rolo de B" — **correta**: `1,35/1,80=0,75=75%`.
5. "o produto mais barato é o papel A" — **correta**: entre os preços totais anunciados (R$5,60 / R$129,60 / R$32,40), o menor é o de A.
6. Soma das corretas: 02+08+16 = 26, batendo com o gabarito oficial.

**Fonte: Vestibular de Verão UEM 2025, Questão 40 — aumento e desconto sucessivos (gabarito: 01-04-08 = soma 13)**

Contexto: serviço de R$800, acréscimo de 13%, depois desconto de 10% sobre o novo valor.

1. "valor pago após o desconto foi R$813,60" — **correta**: `800×1,13×0,90=813,60`.
2. "aumento de x% sobre um valor V resulta em V+x%" — **errada**: não se pode somar um valor monetário com um percentual; o correto é `V×(1+x/100)`.
3. "sem a pressão popular, o valor seria R$904,00" — **correta**: só o aumento de 13%: `800×1,13=904`.
4. "se acréscimo fosse 10% e desconto 13%, valor final seria menor que o inicial" — **correta**: `800×1,10×0,87=765,60`, menor que `800`.
5. "desconto de 10% sobre acréscimo de 13% resulta em 3% de acréscimo" — **errada**: o resultado real é `813,60`, um acréscimo de apenas `1,7%` sobre `800`, não `3%`.
6. Soma das corretas: 01+04+08 = 13, batendo com o gabarito oficial.

## Pegadinhas do PAS

- Somar ou subtrair porcentagens sucessivas diretamente, em vez de calcular fator por fator.
- Comparar preços totais de produtos com quantidades diferentes, sem reduzir à mesma unidade (preço por metro, por kg, por rolo).
- Calcular porcentagem sobre a base errada (ex.: sobre o valor final em vez do valor original, ou vice-versa).
- Assumir que a opção com "taxa nominal mais alta" é sempre mais vantajosa, sem calcular o fator composto completo.

## Como resolver questões

1. Identifique a base de cada porcentagem — sobre qual valor ela realmente incide.
2. Em aumentos/descontos sucessivos, calcule etapa por etapa multiplicando pelo fator (`1±taxa`), nunca somando percentuais.
3. Em divisão proporcional, calcule a razão parte/total antes de tentar montar equações.
4. Em comparação de preços, reduza sempre à mesma unidade (preço por metro, por kg, por rolo) antes de comparar.
5. Em juros compostos, calcule o fator multiplicativo total do período — compare fatores, não taxas nominais isoladas.

## Lacunas honestas

- Este tema já tem quatro questões reais comentadas (PAS 2024, 2025 e Vestibular de Verão 2025), cobrindo divisão proporcional, juros compostos, comparação de preços e aumento/desconto sucessivo. Falta um exemplo real específico de sistema de amortização (Price ou SAC) e de indicadores como IDH aplicados a cálculo.
- Falta explorar mais anos do Vestibular de Verão (2020-2024, já baixados) para este tema.

## Checklist de revisão

- [ ] Li o item do programa correspondente no Manual do Candidato.
- [ ] Sei calcular divisão proporcional pela razão parte/total.
- [ ] Sei que aumentos/descontos sucessivos não se somam — preciso multiplicar por fatores em etapas.
- [ ] Sei comparar preços de produtos reduzindo à mesma unidade.
- [ ] Sei calcular e comparar o fator multiplicativo de juros compostos com taxas variáveis.
- [ ] Resolvi as quatro questões comentadas deste tema sem olhar o gabarito antes.

## Questões relacionadas

- [Resolver questões deste tema](../../provas/matematica/003_matematica-financeira-razao-proporcao-porcentagem-juros.md)

## Referências

**Manual e programa oficial**

- Manual do Candidato PAS/UEM 2026, Programa de Prova para a Etapa 1 — Matemática, item 3.

**Provas reais usadas**

- PAS/UEM 2025, Etapa 1, Questões 25 e 26 — `Fontes Oficiais/provas-anteriores/pas25_E1.pdf` e `pas25_gabdef.pdf`.
- PAS/UEM 2024, Etapa 1, Questão 25 — `Fontes Oficiais/provas-anteriores/pas24_E1.pdf` e `pas24_gabdef.pdf`.
- Vestibular de Verão UEM 2025, Questão 40 — `Fontes Oficiais/provas-anteriores-vestibular/ve25_P1.pdf` e `ve25_gabdef.pdf`.
