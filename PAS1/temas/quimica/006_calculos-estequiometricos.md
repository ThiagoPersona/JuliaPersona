# 006 - Cálculos estequiométricos

## Leitura rápida

- Estequiometria é sempre uma questão de **proporção em mols** entre reagentes e produtos — os coeficientes de uma equação balanceada dizem exatamente essa proporção, e todo cálculo (massa, volume de gás, número de moléculas) passa primeiro pela conversão para mols.
- O erro mais comum é confundir "1 mol de enxofre sólido" com massa direta sem verificar se a fórmula do reagente é atômica (S) ou molecular (S₈) — isso muda o fator de conversão em processos com várias etapas.
- O atalho: quando uma reação tem várias etapas, some os coeficientes de gás consumido/produzido etapa por etapa (mantendo a mesma base — o mesmo "1 mol" de referência) antes de aplicar a equação dos gases ideais (PV=nRT) para achar volume.

## Por que cai no PAS

Este item cobra a caracterização quantitativa das transformações químicas, as leis das reações químicas, e o cálculo estequiométrico envolvendo massa molar e número de Avogadro — inclusive combinando estequiometria com a equação geral dos gases ideais para calcular volumes de gases consumidos ou produzidos. A prova gosta de processos industriais reais (como a produção de ácido sulfúrico) com várias etapas de reação, testando se você sabe acompanhar a proporção estequiométrica ao longo de todas elas.

**Evidência real:** duas questões reais cobrem este tema — Vestibular de Verão UEM 2025 Questão 45 (produção industrial de ácido sulfúrico, processo com três etapas) e 2023 Questão 45 (formação do óxido férrico, cálculo estequiométrico "clássico" com reagente limitante).

| Prova | Ano | O que caiu neste tema |
|---|---:|---|
| Vestibular de Verão UEM | 2025 | Questão 45: produção de ácido sulfúrico (3 etapas), oxirredução, gases ideais |
| Vestibular de Verão UEM | 2023 | Questão 45: formação do óxido férrico, prótons/elétrons de um íon, número de oxidação, porcentagem em massa, reagente limitante |

## Conteúdo completo orientado ao programa

### A proporção estequiométrica: sempre em mols

Uma equação química balanceada informa a proporção, em **mols**, entre reagentes e produtos. Para qualquer cálculo estequiométrico (massa, volume de gás, número de partículas), o caminho é sempre: converter o dado disponível para **mol**, aplicar a proporção da equação balanceada, e converter o resultado (em mol) para a unidade pedida.

### Balanceamento com múltiplos elementos: usando coeficientes literais

Em processos industriais com fórmulas moleculares grandes (como o enxofre elementar, S₈), o balanceamento pode ser feito com **coeficientes literais** (x, y, z) que são determinados exigindo que o número de átomos de cada elemento seja igual dos dois lados da equação. Exemplo real, para a primeira etapa da produção de ácido sulfúrico:

`xS₈(s) + yO₂(g) → zSO₂(g)`

Para 1 mol de S₈ (x=1), cada molécula de S₈ tem 8 átomos de enxofre, então são necessários **z=8** SO₂ (para acomodar os 8 átomos de S). Cada SO₂ tem 2 átomos de O, totalizando 16 átomos de O nos produtos — que vêm de **y=8** moléculas de O₂ (cada O₂ tem 2 átomos de O). Logo: x=1, y=8, z=8.

**Para o PAS:** ao balancear com coeficientes literais, conte átomo por átomo de cada elemento, sempre relacionando o número de átomos na molécula (como os 8 átomos de S no S₈) com os coeficientes da equação.

### Oxirredução: acompanhando o número de oxidação ao longo de várias etapas

Numa reação de **oxirredução**, um elemento perde elétrons (é **oxidado**, seu número de oxidação aumenta) enquanto outro ganha elétrons (é **reduzido**, seu número de oxidação diminui). Em processos de múltiplas etapas, é preciso acompanhar o número de oxidação do mesmo elemento em cada etapa separadamente — ele pode variar em algumas etapas e permanecer constante em outras.

Exemplo real (produção de H₂SO₄): na etapa I (`S₈ + O₂ → SO₂`), o enxofre vai de número de oxidação 0 (elemento puro) para +4 (no SO₂) — uma **oxidação** do enxofre; o oxigênio vai de 0 (O₂) para -2 (no SO₂) — uma **redução** do oxigênio. Na etapa II (`SO₂ + O₂ → SO₃`), o enxofre vai de +4 para +6 — outra oxidação. Já na etapa III (`SO₃ + H₂O → H₂SO₄`), o enxofre **permanece em +6** dos dois lados — essa etapa não é de oxirredução, é apenas uma reação de hidratação/formação de ácido.

**Para o PAS:** não assuma que o número de oxidação de um elemento muda em **todas** as etapas de um processo com múltiplas reações — confira etapa por etapa; etapas de simples combinação com água costumam não ser redox.

### Somando o consumo de reagente ao longo de várias etapas

Quando um mesmo reagente (como o O₂) é consumido em mais de uma etapa de um processo, o total consumido é a **soma** das quantidades usadas em cada etapa, sempre na mesma base de referência (por exemplo, "por mol de S₈ processado até o fim").

Exemplo real: para 1 mol de S₈ (8 mol de átomos de S), a etapa I consome y=8 mol de O₂; a etapa II (`SO₂ + ½O₂ → SO₃`, aplicada a z=8 mol de SO₂) consome 8×½=4 mol de O₂ adicionais. Total de O₂ consumido = 8+4 = **12 mol**.

### Combinando estequiometria com a equação dos gases ideais

Depois de calcular a quantidade de gás em **mol**, é possível calcular seu **volume** em determinadas condições de temperatura e pressão usando a equação dos gases ideais: `PV = nRT`, onde P é a pressão, V o volume, n o número de mols, R a constante dos gases (0,082 L·atm/mol·K) e T a temperatura em Kelvin.

Exemplo real: nas CNTP (T=273K, P=1,0atm), o volume de 12 mol de O₂ é `V = nRT/P = 12 × 0,082 × 273 / 1,0 ≈ 268,8L` — um volume **maior que 260L**, confirmando a proporção esperada (o valor de referência de 22,4L/mol nas CNTP, multiplicado por 12 mol, dá exatamente esse resultado).

**Para o PAS:** lembre o valor de referência — nas CNTP, 1 mol de qualquer gás ideal ocupa aproximadamente 22,4L; multiplique pelo número de mols calculado para obter o volume total.

### Reagente limitante: identificando quem "acaba primeiro"

Quando uma reação envolve dois reagentes em quantidades não necessariamente proporcionais aos coeficientes da equação balanceada, é preciso identificar o **reagente limitante** — aquele que se esgota primeiro e, por isso, determina a quantidade máxima de produto formado (o outro reagente fica em excesso, sobrando ao final).

Exemplo real: na reação `4Fe(s) + 3O₂(g) → 2Fe₂O₃(s)`, a proporção é 4 mol de Fe para cada 3 mol de O₂. Se temos 12 mol de Fe e 10 mol de O₂: para consumir todo o Fe (12 mol), seriam necessários `12×(3/4)=9mol` de O₂ — como há 10 mol disponíveis (mais que o necessário), o **ferro é o reagente limitante** (o oxigênio sobra, fica em excesso).

**Para o PAS:** para identificar o reagente limitante, calcule quanto do segundo reagente seria necessário para consumir totalmente o primeiro (usando a proporção da equação) — se a quantidade disponível do segundo reagente for maior que a necessária, o primeiro reagente é o limitante.

### Calculando prótons e elétrons de um íon a partir do número atômico

O número de **prótons** de um elemento é sempre igual ao seu **número atômico** (Z), independentemente de o átomo estar na forma neutra ou como íon — formar um íon nunca muda o número de prótons do núcleo. Já o número de **elétrons** muda conforme a carga do íon: um cátion com carga +n tem **n elétrons a menos** que o átomo neutro.

Exemplo real: o ferro (Z=26) tem sempre 26 prótons. No óxido férrico (Fe₂O₃), o ferro está na forma de cátion Fe³⁺ (perde 3 elétrons) — portanto, tem `26-3=23` elétrons.

### Porcentagem em massa de um elemento num composto

Para calcular a **porcentagem em massa** de um elemento dentro de um composto, divida a massa desse elemento (multiplicada pela sua atomicidade na fórmula) pela massa molar total do composto, e multiplique por 100.

Exemplo real: no Fe₂O₃ (massa molar = 2×56+3×16=160g/mol), a massa de ferro é `2×56=112g/mol`. A porcentagem em massa de ferro é `112/160=0,70=70%`.

## Diferenças que costumam ser trocadas

| Conceito A | Conceito B | Como a prova troca | Como não cair |
|---|---|---|---|
| Oxirredução: número de oxidação muda apenas nas etapas em que há transferência de elétrons | Afirmação generalizada: número de oxidação muda em "todas" as etapas de um processo multi-etapas | Afirma que o número de oxidação de um elemento varia em todas as etapas de um processo | Confira etapa por etapa — etapas de hidratação/combinação simples costumam não ser redox |
| S₈ (molécula, 8 átomos de enxofre) | S (átomo isolado) | Confunde "1 mol de enxofre sólido" com 1 mol de átomos de S, sem considerar a fórmula molecular S₈ | Sempre confirme se a fórmula do reagente é atômica ou molecular antes de montar a proporção |
| Consumo total de reagente = soma do consumido em cada etapa (mesma base de referência) | Considerar apenas uma das etapas isoladamente | Calcula o consumo de gás usando só uma etapa do processo | Some o consumo de todas as etapas relevantes, mantendo a mesma base ("por mol de X processado") |
| Número de prótons: sempre igual ao número atômico (não muda ao formar íon) | Número de elétrons: muda conforme a carga do íon | Confunde prótons com elétrons ao calcular a composição de um íon | Prótons = Z sempre; elétrons = Z − carga do cátion (ou Z + carga do ânion) |
| Reagente limitante: identificado comparando a quantidade necessária x disponível do outro reagente | Assumir que o reagente com menor quantidade em mol é sempre o limitante | Aponta o reagente limitante só pela quantidade em mol, sem usar a proporção da equação | Calcule quanto do outro reagente seria necessário, usando a proporção da equação balanceada |

## Como caiu na prova: questão comentada

**Fonte: Vestibular de Verão UEM 2025, Questão 45 (gabarito: 01-02-08-16 = soma 27)**

"A obtenção do ácido sulfúrico envolve três etapas de reação, cujas equações não balanceadas são dadas a seguir: (I) xS₈(s) + yO₂(g) → zSO₂(g); (II) zSO₂(g) + y/2O₂(g) → zSO₃(g); (III) 8xSO₃(g) + zH₂O(l) → yH₂SO₄(aq). Certo volume V de oxigênio reagiu com enxofre sólido e produziu 8mols de SO₂ gasoso, e houve consumo de todo o oxigênio. As condições da reação foram T=273K, p=1,0atm. (Dados: a atmosfera contém 21% de oxigênio em volume e R=0,082L·atm/mol·K.) Com base nessas informações, assinale o que for correto."

1. "Na etapa (I) do processo o oxigênio sofreu redução" — **correta**: o oxigênio vai de 0 (O₂) para -2 (no SO₂), um ganho de elétrons — redução.
2. "Os coeficientes estequiométricos para a reação de 1mol de enxofre sólido são x=1, y=8, z=8" — **correta**: balanceamento correto contando os 8 átomos de S no S₈.
4. "O elemento químico enxofre está presente nas três reações acima. O número de oxidação do enxofre varia dos reagentes para os produtos nas três etapas da reação" — **errada**: na etapa III (SO₃→H₂SO₄), o enxofre permanece em +6 — não há variação nessa etapa.
8. "O total de gás oxigênio consumido na reação de 1mol de enxofre sólido até formar ácido sulfúrico foi de 12mols" — **correta**: 8 mol (etapa I) + 4 mol (etapa II) = 12 mol.
16. "Nas CNTP o volume de gás oxigênio consumido foi maior do que 260L" — **correta**: 12mol × 22,4L/mol ≈ 268,8L, maior que 260L.

Soma das corretas: 01+02+08+16 = 27, batendo com o gabarito oficial.

**Fonte: Vestibular de Verão UEM 2023, Questão 45 (gabarito: 01-04-08-16 = soma 29)**

"Considere a equação química balanceada que representa a formação do óxido férrico (Fe₂O₃) e assinale o que for correto: 4Fe(s) + 3O₂(g) → 2Fe₂O₃(s)."

1. "no óxido férrico o ferro tem 26 prótons e 23 elétrons" — **correta**: 26 prótons (número atômico do Fe); 26−3=23 elétrons (Fe³⁺, perde 3 elétrons).
2. "o número de oxidação do ferro no produto da reação é +2" — **errada**: no Fe₂O₃, o ferro tem número de oxidação +3, não +2.
4. "a porcentagem em massa de ferro no óxido férrico é de 70%" — **correta**: massa molar Fe₂O₃=160g/mol; massa de Fe=112g/mol; 112/160=70%.
8. "na reação completa de 12mol de ferro e 10mol de gás oxigênio o ferro é o reagente limitante" — **correta**: para consumir 12mol de Fe seriam necessários 9mol de O₂ (proporção 4:3); como há 10mol disponíveis, o Fe é o limitante.
16. "na reação completa de 12mol de ferro e 10mol de gás oxigênio são produzidos 960g de Fe₂O₃" — **correta**: com Fe limitante (12mol), produção = 12×(2/4)=6mol de Fe₂O₃; massa=6×160=960g.

Soma das corretas: 01+04+08+16 = 29, batendo com o gabarito oficial.

## Pegadinhas do PAS

- Generalizar que o número de oxidação de um elemento muda em todas as etapas de um processo com múltiplas reações — confira etapa por etapa.
- Confundir "1 mol de enxofre sólido" com 1 mol de átomos de S, sem considerar que o enxofre elementar é molecular (S₈).
- Esquecer de somar o consumo de reagente em todas as etapas relevantes do processo, considerando apenas uma delas.
- Esquecer de converter mol para volume usando a equação dos gases ideais (ou o valor de referência 22,4L/mol nas CNTP).
- Confundir número de oxidação do ferro num óxido (errar entre +2 e +3).
- Identificar o reagente limitante só pela quantidade em mol, sem aplicar a proporção da equação balanceada.

## Como resolver questões

1. Para balancear com coeficientes literais, conte átomos de cada elemento nos dois lados, elemento por elemento.
2. Para oxirredução em processos com várias etapas, calcule o número de oxidação do elemento de interesse em cada etapa separadamente — não generalize.
3. Para consumo total de um reagente ao longo de várias etapas, some as quantidades consumidas em cada etapa, mantendo a mesma base de referência.
4. Para converter mol em volume de gás, use PV=nRT (ou 22,4L/mol nas CNTP, como caso particular).

## Lacunas honestas

- Este tema tem duas questões reais comentadas (Vestibular de Verão UEM 2025 Q45 e 2023 Q45), cobrindo balanceamento com coeficientes literais, oxirredução multi-etapas, gases ideais, reagente limitante e porcentagem em massa. Falta um exemplo real do PAS (Etapa 1) sobre cálculo estequiométrico simples envolvendo número de Avogadro diretamente.
- Estas questões vêm do Vestibular de Verão (não do PAS) — mantidas por estarem dentro do nível de conteúdo da Etapa 1 (cálculo estequiométrico envolvendo massa molar consta explicitamente no item 4.5-4.9 do programa de Química).

## Checklist de revisão

- [ ] Li o item do programa correspondente no Manual do Candidato.
- [ ] Sei balancear uma equação com coeficientes literais, contando átomos elemento por elemento.
- [ ] Sei identificar oxidação e redução comparando o número de oxidação de reagentes e produtos.
- [ ] Sei que nem toda etapa de um processo multi-etapas é necessariamente redox.
- [ ] Sei somar o consumo de um reagente ao longo de várias etapas de um processo.
- [ ] Sei aplicar PV=nRT (ou 22,4L/mol nas CNTP) para converter mol em volume de gás.
- [ ] Sei identificar o reagente limitante numa reação com dois reagentes.
- [ ] Sei calcular prótons/elétrons de um íon e a porcentagem em massa de um elemento num composto.
- [ ] Resolvi as duas questões comentadas deste tema sem olhar o gabarito antes.

## Questões relacionadas

- [Resolver questões deste tema](../../provas/quimica/006_calculos-estequiometricos.md)

## Referências

**Manual e programa oficial**

- Manual do Candidato PAS/UEM 2026, Programa de Prova para a Etapa 1 — Química 4.5-4.9.

**Provas reais usadas**

- Vestibular de Verão UEM 2025, Questão 45 — `Fontes Oficiais/provas-anteriores-vestibular/ve25_P1.pdf` e `ve25_gabdef.pdf`.
- Vestibular de Verão UEM 2023, Questão 45 — `Fontes Oficiais/provas-anteriores-vestibular/ve23_P1.pdf` e `ve23_gabdef.pdf`.
