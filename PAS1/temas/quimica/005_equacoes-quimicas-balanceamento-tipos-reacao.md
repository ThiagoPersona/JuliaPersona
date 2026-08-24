# 005 - Equações químicas, balanceamento e tipos de reação

## Leitura rápida

- Uma equação química balanceada respeita a Lei de Lavoisier (conservação da massa) — o número de átomos de cada elemento é sempre igual dos dois lados.
- O erro mais comum é usar mal os coeficientes estequiométricos ao calcular quantidade de produto a partir de uma massa de reagente que não corresponde a um número "redondo" de mols.
- O atalho: para qualquer pergunta de "quanto de X produz quanto de Y", converta primeiro a massa dada para **mols** (usando a massa molar), depois aplique a proporção da equação balanceada — nunca tente uma regra de três direta com massa sem passar por mol.

## Por que cai no PAS

Este item cobra leitura e interpretação de uma equação química já balanceada — identificar tipo de reação, tipo de composto formado (óxido, sal), aplicações práticas, e fazer cálculos estequiométricos simples usando massa molar. A prova gosta de testar se você sabe converter massa para mol antes de aplicar a proporção da equação.

**Evidência real:** duas questões reais cobrem este tema — PAS 2025 Questão 38 (decomposição do hidróxido de cálcio) e Vestibular de Verão UEM 2023 Questão 44 (produção industrial de etanol a partir da cana-de-açúcar, com duas equações balanceadas em sequência).

| Prova | Ano | O que caiu neste tema |
|---|---:|---|
| PAS/UEM, Etapa 1 | 2025 | Questão 38: decomposição do hidróxido de cálcio, tipo de ligação, cálculo estequiométrico, classificação de óxido |
| Vestibular de Verão UEM | 2023 | Questão 44: hidrólise da sacarose, fermentação alcoólica, mistura azeotrópica, geometria molecular do CO₂ |

## Conteúdo completo orientado ao programa

### Balanceamento: a Lei de Lavoisier em ação

Uma equação química está **balanceada** quando o número de átomos de cada elemento é o mesmo nos reagentes e nos produtos — consequência direta da **Lei de Lavoisier** (conservação da massa: "na natureza, nada se cria, nada se perde, tudo se transforma"). O balanceamento por **tentativa** consiste em ajustar os coeficientes (números na frente das fórmulas) até que a contagem de átomos feche dos dois lados.

Exemplo real: `Ca(OH)₂(s) → CaO(s) + H₂O(l)`. Contando átomos: à esquerda, 1 Ca, 2 O (dentro das duas hidroxilas) + 2 H; à direita, 1 Ca (no CaO) + 1 O (no CaO) + 1 O (no H₂O) + 2 H (no H₂O) = 1 Ca, 2 O, 2 H. Já está balanceada, com todos os coeficientes iguais a 1.

### Massa molar e conversão massa ↔ mol

A **massa molar** de um composto é a soma das massas atômicas dos elementos que o formam (multiplicadas pela quantidade de átomos de cada um na fórmula). Ela permite converter entre massa (em gramas) e quantidade de matéria (em mols): `n = massa / massa molar`.

Exemplo real: `Ca(OH)₂` tem massa molar `40 (Ca) + 2×(16+1) (duas hidroxilas OH) = 40+34=74g/mol`. Uma massa de `37g` de `Ca(OH)₂` corresponde a `n=37/74=0,5mol` — **meio mol**, não um mol inteiro.

**Para o PAS:** antes de aplicar a proporção estequiométrica da equação (que relaciona **mols**, não gramas diretamente), sempre converta a massa dada para mol usando a massa molar — pular essa etapa é a fonte mais comum de erro em cálculo estequiométrico.

### Aplicando a proporção estequiométrica

Numa equação balanceada com coeficientes 1:1:1, como `Ca(OH)₂ → CaO + H₂O`, a proporção em mols entre reagente e produto também é 1:1. Então, se você tem `0,5mol` de `Ca(OH)₂`, a reação produz `0,5mol` de `H₂O` — não `1mol`, porque a quantidade inicial de reagente já era meio mol, não um mol inteiro.

**Para o PAS:** "X gramas de reagente geram Y mols de produto" só está certo se você fizer a conversão completa: massa → mol do reagente → mol do produto (pela proporção da equação) — pular a primeira conversão é o erro mais comum.

### Separação de produtos por estado físico

Quando uma reação produz substâncias em estados físicos diferentes (por exemplo, um sólido e um líquido, como `CaO(s)` e `H₂O(l)`), os produtos podem, em princípio, ser separados por métodos físicos simples — como **filtração** (separar sólido de líquido).

### Classificação de óxidos: óxido básico

Um **óxido básico** é um óxido de metal que reage com água formando uma base (hidróxido). O `CaO` (óxido de cálcio, também chamado de "cal virgem") é um óxido básico clássico — inclusive é amplamente usado na **construção civil** (produção de cal e cimento).

### Reações em sequência: da sacarose ao etanol

Um processo industrial real pode envolver **mais de uma equação química em sequência**, cada uma representando uma etapa distinta. Exemplo real: a produção de etanol a partir da cana-de-açúcar segue duas etapas balanceadas:

**Etapa I — hidrólise da sacarose**: `C₁₂H₂₂O₁₁ + H₂O → C₆H₁₂O₆ (glicose) + C₆H₁₂O₆ (frutose)`. Essa reação quebra o dissacarídeo sacarose (com adição de água) em dois monossacarídeos — glicose e frutose.

**Etapa II — fermentação alcoólica**: `C₆H₁₂O₆ → 2 CH₃CH₂OH + 2 CO₂`. Essa reação, promovida por fungos (microrganismos heterótrofos que obtêm alimento por absorção), converte a glicose em etanol e gás carbônico.

**Para o PAS:** identifique sempre qual etapa de um processo em múltiplas equações está sendo testada em cada afirmação — uma questão pode misturar detalhes da etapa I (hidrólise) com detalhes da etapa II (fermentação) na mesma lista de alternativas.

### Mistura azeotrópica: quando a destilação fracionada não separa

Uma **mistura azeotrópica** é uma mistura de dois (ou mais) líquidos que, numa proporção específica, se comporta como se fosse uma substância pura durante a fervura — ou seja, **não pode ser separada por destilação fracionada** simples, porque o vapor produzido tem a mesma composição do líquido original. O **álcool 96°GL** (96% em volume de etanol e 4% em volume de água) é um exemplo real de mistura azeotrópica.

### Geometria molecular: CO₂ é linear e apolar, não angular e polar

O gás carbônico (`CO₂`) tem geometria molecular **linear** (os três átomos alinhados: O=C=O) e é uma molécula **apolar** — os dois dipolos das ligações C=O têm a mesma intensidade e direções opostas, cancelando-se mutuamente (diferente da água, H₂O, que tem geometria angular e é polar).

**Para o PAS:** não confunda a geometria do CO₂ (linear, apolar) com a da água (angular, polar) — a diferença vem dos pares de elétrons não ligantes presentes na água (e ausentes no CO₂).

## Diferenças que costumam ser trocadas

| Conceito A | Conceito B | Como a prova troca | Como não cair |
|---|---|---|---|
| Massa convertida para mol antes de aplicar proporção | Massa usada diretamente como se fosse "quantidade em mols" | Diz que X gramas geram Y mols sem converter para mol primeiro | Sempre calcule n=massa/massa molar antes de aplicar a proporção da equação |
| CO₂: geometria linear, molécula apolar | H₂O: geometria angular, molécula polar | Atribui ao CO₂ geometria angular e polaridade | CO₂ é linear e apolar; a água é angular e polar (por causa dos pares não ligantes) |
| Mistura azeotrópica: não separável por destilação fracionada simples | Mistura comum: separável por destilação fracionada | Diz que uma mistura azeotrópica pode ser separada por destilação fracionada comum | Azeótropos exigem técnicas especiais de separação, não a destilação fracionada simples |
| Compostos de ligação iônica (Ca(OH)₂, CaO) | Compostos de ligação covalente (H₂O) | Generaliza "todos os compostos da equação são iônicos" | H₂O é molecular/covalente, mesmo numa equação com compostos iônicos |
| Óxido básico (reage com água, forma base) | Óxido ácido (reage com água, forma ácido) | Confunde os dois tipos de óxido | CaO (óxido de metal) é básico; óxidos de não metal costumam ser ácidos |

## Como caiu na prova: questão comentada

**Fonte: PAS/UEM 2025, Etapa 1, Questão 38 (gabarito: 01-08-16 = soma 25)**

Contexto: `Ca(OH)₂(s) → CaO(s) + H₂O(l)`. Massas molares: Ca=40g/mol, O=16g/mol, H=1g/mol.

1. "produtos resultantes podem ser separados por filtração" — **correta**: CaO é sólido, H₂O é líquido — dá para separar por filtração.
2. "os três compostos são formados por ligações iônicas" — **errada**: `Ca(OH)₂` e `CaO` são iônicos, mas `H₂O` é um composto molecular (ligação covalente) — nem todos são iônicos.
3. "37g de hidróxido de cálcio geram 1mol de moléculas de água" — **errada**: `37g÷74g/mol=0,5mol` de `Ca(OH)₂`, que gera `0,5mol` de água (proporção 1:1), não 1mol.
4. "há formação de um óxido básico" — **correta**: CaO é óxido de metal, classificado como óxido básico.
5. "o óxido envolvido na reação é usado na construção civil" — **correta**: CaO (cal virgem) é amplamente usado em cimento e argamassa.
6. Soma das corretas: 01+08+16 = 25, batendo com o gabarito oficial.

Este mesmo tema de balanceamento também aparece, num contexto biológico, na Questão 15 do PAS 2024 (equação geral da respiração/fermentação de açúcares) — ver o capítulo de [Biologia celular](../../temas/biologia/002_biologia-celular-composicao-metabolismo.md), que já cobre em detalhe a propriedade de que a razão entre coeficientes estequiométricos é sempre constante, independente da quantidade de reagente fornecida.

**Fonte: Vestibular de Verão UEM 2023, Questão 44 (gabarito: 01-02-04 = soma 07)**

Contexto: "A produção do álcool 96°GL a partir da cana-de-açúcar pode ser representada pelas seguintes equações: I) C₁₂H₂₂O₁₁ + H₂O → C₆H₁₂O₆ (glicose) + C₆H₁₂O₆ (frutose); II) C₆H₁₂O₆ → 2 CH₃CH₂OH + 2CO₂. Sobre o assunto e as substâncias envolvidas, assinale o que for correto."

1. "na primeira etapa ocorre a hidrólise do dissacarídeo, que produz os monossacarídeos glicose e frutose" — **correta**: descrição precisa da etapa I.
2. "na segunda etapa ocorre a fermentação alcoólica promovida por fungos, que são microrganismos heterótrofos (obtêm seu alimento por absorção de nutrientes do meio)" — **correta**: descrição precisa da etapa II.
4. "o álcool 96°GL é uma mistura de 96% em volume de etanol e 4% em volume de água. Essa mistura, que não pode ser separada por destilação fracionada, é conhecida como mistura azeotrópica" — **correta**: fato real sobre o azeótropo etanol-água.
8. "o gás carbônico é uma molécula polar com geometria angular" — **errada**: o CO₂ é uma molécula apolar, de geometria linear.
16. "o etanol também pode ser obtido em escala industrial a partir da reação de oxidação do ácido acético" — **errada**: é o contrário — o etanol é oxidado para formar ácido acético (vinagre), não o inverso.

Soma das corretas: 01+02+04 = 07, batendo com o gabarito oficial.

## Pegadinhas do PAS

- Usar a massa de um reagente diretamente como "quantidade em mols", sem dividir pela massa molar primeiro.
- Generalizar que todos os compostos de uma equação têm o mesmo tipo de ligação (iônica ou covalente).
- Confundir óxido básico com óxido ácido.
- Atribuir ao CO₂ geometria angular e polaridade — ele é linear e apolar.
- Inverter a direção de uma reação real (dizer que o etanol vem da oxidação do ácido acético, quando é o oposto).

## Como resolver questões

1. Confirme que a equação está balanceada (conte átomos de cada elemento nos dois lados).
2. Para cálculos estequiométricos, converta sempre massa → mol (usando massa molar) antes de aplicar a proporção dos coeficientes.
3. Para tipo de ligação, analise cada composto individualmente — não generalize para a equação inteira.
4. Para classificar óxidos, identifique se o elemento ligado ao oxigênio é metal (óxido básico, geralmente) ou não metal (óxido ácido, geralmente).

## Lacunas honestas

- Este tema tem duas questões reais comentadas (PAS 2025 Q38 e Vestibular de Verão UEM 2023 Q44), cobrindo balanceamento, massa molar, classificação de óxido, reações em sequência, mistura azeotrópica e geometria molecular. Falta um exemplo real específico sobre tipos de reação (síntese, decomposição, simples troca, dupla troca) e sobre o método de balanceamento por tentativas aplicado a uma equação mais complexa.
- Falta explorar mais anos do Vestibular de Verão (2020-2022, 2024-2025 já usados parcialmente) para este tema.

## Checklist de revisão

- [ ] Li o item do programa correspondente no Manual do Candidato.
- [ ] Sei conferir se uma equação está balanceada, contando átomos de cada elemento.
- [ ] Sei converter massa para mol usando massa molar, antes de aplicar proporção estequiométrica.
- [ ] Sei classificar um óxido como básico ou ácido, conforme o elemento ligado ao oxigênio.
- [ ] Sei explicar por que uma mistura azeotrópica não se separa por destilação fracionada simples.
- [ ] Sei a geometria molecular e a polaridade do CO₂.
- [ ] Resolvi as duas questões comentadas deste tema sem olhar o gabarito antes.

## Questões relacionadas

- [Resolver questões deste tema](../../provas/quimica/005_equacoes-quimicas-balanceamento-tipos-reacao.md)

## Referências

**Manual e programa oficial**

- Manual do Candidato PAS/UEM 2026, Programa de Prova para a Etapa 1 — Química, itens 4.1-4.4.

**Provas reais usadas**

- PAS/UEM 2025, Etapa 1, Questão 38 — `Fontes Oficiais/provas-anteriores/pas25_E1.pdf` e `pas25_gabdef.pdf`.
- Vestibular de Verão UEM 2023, Questão 44 — `Fontes Oficiais/provas-anteriores-vestibular/ve23_P1.pdf` e `ve23_gabdef.pdf`.
