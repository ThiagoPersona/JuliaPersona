# 004 - Gravitação universal e leis de Kepler

## Leitura rápida

- Mensagem central 1: a força gravitacional entre dois corpos depende do produto das massas e é inversamente proporcional ao quadrado da distância entre eles — dobrar a distância reduz a força a 1/4, não à metade.
- Mensagem central 2: o erro mais comum é confundir "peso" (força gravitacional local, que muda de planeta para planeta) com "massa" (quantidade de matéria, que não muda).
- Mensagem central 3: a Terceira Lei de Kepler relaciona o período orbital ao raio da órbita por meio de uma potência (T² proporcional a r³), não de uma proporção direta simples.

## Por que cai no PAS

O item 2.2.5-2.2.6 do programa de Física da Etapa 1 cobre "Lei da gravitação universal da mecânica newtoniana e campo gravitacional" e "Leis do movimento planetário de Kepler" — um tópico clássico de mecânica que costuma aparecer testando três frentes: o cálculo da força gravitacional (Lei de Newton), o conceito de campo gravitacional (aceleração da gravidade em função da massa e da distância ao centro do corpo) e a relação matemática entre período orbital e raio da órbita (Terceira Lei de Kepler).

Até o fechamento deste banco, nenhuma questão real de PAS ou Vestibular de Verão da UEM localizada nas provas já mineradas (PAS 2021-2025 Etapa 1 e Vestibular de Verão 2020-2025) testou especificamente este item de forma isolada — por isso a questão comentada abaixo é autoral (ver "Lacunas honestas"), escrita no mesmo formato de somatória usado pela UEM, a partir do formulário oficial de Física do Vestibular/PAS.

O que mais confunde quem estuda por decoreba: achar que a força gravitacional é proporcional à distância (e não ao inverso do quadrado da distância); confundir a constante `G` (gravitação universal, universal para qualquer par de massas) com `g` (aceleração da gravidade, que depende do planeta/corpo específico); e achar que dobrar o raio de uma órbita dobra o período orbital (quando, na verdade, a relação é T² ∝ r³).

## Conteúdo completo orientado ao programa

### Lei da gravitação universal

Isaac Newton formulou que dois corpos quaisquer com massa se atraem mutuamente com uma força proporcional ao produto de suas massas e inversamente proporcional ao quadrado da distância entre seus centros:

**F = G·(m₁·m₂)/d²**

em que `F` é o módulo da força de atração gravitacional (em newtons), `m₁` e `m₂` são as massas dos dois corpos (em kg), `d` é a distância entre seus centros (em metros) e `G` é a constante de gravitação universal (G ≈ 6,67×10⁻¹¹ N·m²/kg², a mesma para qualquer par de corpos no universo).

Essa força é sempre atrativa (nunca repulsiva) e atua em pares: pela Terceira Lei de Newton, o corpo 1 atrai o corpo 2 com a mesma intensidade com que o corpo 2 atrai o corpo 1, em sentidos opostos — mesmo que um dos corpos seja muito mais massivo que o outro (como a Terra e uma maçã), a força que cada um exerce sobre o outro tem o mesmo módulo.

**Para o PAS:** a relação com a distância é de INVERSO DO QUADRADO — se a distância dobra, a força cai para 1/4; se a distância triplica, a força cai para 1/9. Nunca trate essa relação como proporcionalidade direta ou inversamente proporcional "simples" (sem o quadrado).

### Campo gravitacional

Todo corpo com massa cria ao seu redor um campo gravitacional — uma região do espaço em que outro corpo, ao ser colocado, sofre uma força gravitacional. A intensidade do campo gravitacional (que é numericamente igual à aceleração da gravidade local) a uma distância `d` do centro de um corpo de massa `M` é dada por:

**g = G·M/d²**

Essa fórmula explica por que a aceleração da gravidade varia: (1) de planeta para planeta (depende da massa `M` do planeta) e (2) com a altitude (depende da distância `d` ao centro do planeta — quanto mais alto, maior o `d`, menor o `g`). Na superfície da Terra, `g` vale aproximadamente 9,8 m/s² (ou 10 m/s², valor usado em muitos exercícios por simplicidade).

O peso de um corpo é a força gravitacional que age sobre ele: **P = m·g**. Repare que a massa `m` de um corpo não muda de lugar para lugar (é uma propriedade intrínseca da quantidade de matéria), mas o peso muda, porque `g` muda.

**Para o PAS:** massa é invariável (mesma em qualquer lugar do universo); peso varia de acordo com o campo gravitacional local. Um astronauta tem a mesma massa na Terra e na Lua, mas pesa menos na Lua, porque a Lua tem menor massa e, portanto, menor `g` em sua superfície.

### As três Leis de Kepler

Johannes Kepler, a partir de observações astronômicas (principalmente de Tycho Brahe), formulou três leis que descrevem o movimento dos planetas ao redor do Sol — leis que, mais tarde, Newton demonstrou serem consequência da própria lei da gravitação universal.

**1ª Lei de Kepler (Lei das órbitas):** todo planeta descreve uma órbita elíptica ao redor do Sol, com o Sol ocupando um dos focos da elipse (não o centro). Isso significa que a distância entre o planeta e o Sol varia ao longo da órbita — não é um círculo perfeito.

**2ª Lei de Kepler (Lei das áreas):** o segmento de reta que liga o planeta ao Sol varre áreas iguais em intervalos de tempo iguais. Consequência prática: como a órbita é elíptica, o planeta se move mais rápido quando está mais próximo do Sol (periélio) e mais devagar quando está mais distante (afélio) — para varrer a mesma área em regiões de raios diferentes, é preciso percorrer arcos maiores nas regiões mais próximas.

**3ª Lei de Kepler (Lei dos períodos):** o quadrado do período orbital (`T`) de um planeta é proporcional ao cubo do raio médio de sua órbita (`r`):

**T² = k·r³**

em que `k` é uma constante que depende do corpo central (por exemplo, do Sol, se estamos falando de planetas do Sistema Solar) — a mesma constante `k` vale para todos os planetas que orbitam o mesmo astro central. Essa lei permite comparar períodos e raios orbitais de diferentes planetas sem precisar calcular a constante `k` diretamente: se dois planetas orbitam o mesmo Sol, (T₁²/T₂²) = (r₁³/r₂³).

**Para o PAS:** a relação da Terceira Lei é ao QUADRADO do período e ao CUBO do raio — dobrar o raio da órbita multiplica o período por 2^(3/2) ≈ 2,83, não por 2. Esse é o ponto mais explorado em questões sobre o tema.

## Diferenças que costumam ser trocadas

| Conceito A | Conceito B | Como a prova troca | Como não cair |
|---|---|---|---|
| Massa (quantidade de matéria, invariável) | Peso (força gravitacional local, variável) | A prova troca "massa" por "peso" como se fossem sinônimos, ou afirma que a massa de um corpo muda de planeta para planeta | Massa não muda de lugar para lugar; peso (P=m·g) muda porque `g` muda conforme o planeta/altitude |
| Constante G (gravitação universal, fixa) | Aceleração da gravidade g (varia por planeta/altitude) | A prova confunde as duas constantes, tratando `G` como se fosse `g` | `G` é universal e igual em qualquer lugar do universo; `g` depende da massa e do raio do corpo central específico |
| Relação de força com a distância (inverso do QUADRADO) | Relação de força com a distância (inversamente proporcional simples) | A prova afirma que dobrar a distância reduz a força pela metade | Dobrar a distância reduz a força para 1/4 (não para 1/2), porque a relação é com o quadrado da distância |
| 3ª Lei de Kepler: T² ∝ r³ | Proporcionalidade direta simples entre T e r | A prova afirma que dobrar o raio da órbita dobra o período orbital | T²∝r³ significa que dobrar o raio multiplica o período por 2^(3/2)≈2,83, não por 2 |

## Como caiu na prova: questão comentada

**Questão autoral, no formato oficial de somatória do PAS/UEM (nenhuma questão real localizada até o momento sobre este item específico — ver "Lacunas honestas")**

"Considerando a lei da gravitação universal, o conceito de campo gravitacional e as leis de Kepler, assinale o que for correto."

1. **Leia o comando**: pede julgamento de 5 afirmações independentes sobre gravitação e leis de Kepler.
2. **Julgue cada afirmação:**

01) "Se a distância entre dois corpos triplica, mantidas as massas constantes, a força de atração gravitacional entre eles cai para 1/9 do valor original." — **Correta.** F∝1/d²; triplicando d, a força cai para 1/3²=1/9.

02) "A massa de um astronauta é a mesma na Terra e na Lua, mas seu peso é menor na Lua, pois a Lua tem menor massa e, portanto, menor campo gravitacional em sua superfície." — **Correta.** Massa é invariável; peso depende do campo gravitacional local (g=GM/d²), menor na Lua por ela ter menor massa.

03 (código 04)) "Segundo a 2ª Lei de Kepler, um planeta se move com velocidade constante ao longo de toda a sua órbita elíptica." — **Errada.** Pela lei das áreas, a velocidade varia: é maior no periélio (mais próximo do Sol) e menor no afélio (mais distante).

04 (código 08)) "Se dois planetas orbitam a mesma estrela e o raio orbital do planeta A é o dobro do raio orbital do planeta B, o período orbital de A é o dobro do período orbital de B." — **Errada.** Pela 3ª Lei de Kepler (T²∝r³), dobrar o raio multiplica o período por 2^(3/2)≈2,83, não por 2.

05 (código 16)) "A constante de gravitação universal G tem o mesmo valor para qualquer par de corpos no universo, mas a aceleração da gravidade g varia conforme a massa e o raio do corpo que a gera." — **Correta.** Descrição precisa da diferença entre G (universal) e g (local, calculado por g=GM/d²).

3. **Soma dos códigos corretos**: 01+02+16 = **soma 19**.

## Pegadinhas do PAS

- Tratar a relação força-distância como proporcionalidade simples, ignorando o quadrado (F∝1/d², não F∝1/d).
- Confundir massa (invariável) com peso (variável conforme o campo gravitacional local).
- Achar que a velocidade orbital de um planeta é constante — pela 2ª Lei de Kepler, ela varia ao longo da órbita elíptica.
- Tratar a 3ª Lei de Kepler como proporção direta simples entre período e raio, ignorando as potências (T²∝r³).

## Como resolver questões

1. Identifique se a afirmação trata de força (Lei de Newton), campo/aceleração (g=GM/d²) ou período orbital (Leis de Kepler) — são fórmulas diferentes, não misture.
2. Em qualquer relação com "quadrado" ou "cubo" (F∝1/d², T²∝r³), refaça o cálculo numérico antes de aceitar uma comparação simples proposta pela afirmação.
3. Lembre que massa nunca muda; peso e aceleração da gravidade sempre podem mudar de um corpo celeste para outro.
4. Desconfie de afirmações que descrevem velocidade orbital ou período orbital como "constantes" sem qualificação.
5. Some os códigos das afirmações que você tem certeza que são corretas antes de marcar.

## Lacunas honestas

- Nenhuma questão real de PAS/UEM ou Vestibular de Verão da UEM sobre este item específico (gravitação universal e leis de Kepler) foi localizada nas provas já baixadas e mineradas neste projeto (PAS 2021-2025, Etapa 1; Vestibular de Verão 2020-2025, Provas 1 e 2). A questão comentada acima é **autoral** — escrita por este projeto no formato oficial de somatória, a partir do formulário e das constantes físicas usadas pela própria UEM — e não deve ser confundida com questão oficial.
- Se uma prova futura (ou uma prova mais antiga ainda não baixada) trouxer uma questão real sobre este item, ela deve substituir ou complementar a questão autoral acima, seguindo a hierarquia de fontes do projeto (ver `REGRAS_DO_MATERIAL.md`).
- Este resumo não cobre movimento de satélites artificiais em detalhe (velocidade orbital, energia de órbita) além do que está diretamente ligado às leis de Kepler e à gravitação universal — se o programa exigir mais profundidade nesse ponto, é preciso revisar material escolar complementar.

## Checklist de revisão

- [ ] Li o item 2.2.5-2.2.6 do programa de Física no Manual do Candidato.
- [ ] Sei calcular a força gravitacional entre dois corpos com a fórmula F=G·m₁·m₂/d².
- [ ] Sei diferenciar massa (invariável) de peso (variável, P=m·g).
- [ ] Sei enunciar as três Leis de Kepler e aplicar a relação T²∝r³ em comparações entre planetas.
- [ ] Resolvi a questão comentada (autoral) deste tema sem olhar a resposta antes.
- [ ] Sei apontar a pegadinha mais provável neste tema.

## Questões relacionadas

- [Resolver questões deste tema](../../provas/fisica/004_gravitacao-universal-leis-kepler.md)

## Referências

**Manual e programa oficial**

- Manual do Candidato PAS/UEM 2026, Programa de Prova para a Etapa 1 — Física 2.2.5-2.2.6.

**Fonte da questão comentada**

- Questão autoral deste projeto, no formato oficial de somatória do PAS/UEM, construída a partir do formulário e das constantes físicas oficiais (G=6,67×10⁻¹¹N·m²/kg²) usadas nos cadernos de prova da UEM.
