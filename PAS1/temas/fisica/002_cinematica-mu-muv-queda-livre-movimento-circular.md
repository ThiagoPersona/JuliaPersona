# 002 - Cinemática: MU, MUV, queda livre e movimento circular

## Leitura rápida

- Cinemática descreve **como** um corpo se move (posição, velocidade, tempo), sem se importar com a causa (força) — isso vem depois, na Dinâmica.
- O erro mais comum é montar a equação de posição errada (esquecer a posição inicial, ou usar mal o instante de referência) ou confundir grandezas que "parecem" proporcionais mas não são.
- O atalho: escreva sempre a **função horária da posição** (`x = x₀ + vt` para MU) antes de qualquer conta — ela resolve praticamente todo problema de encontro, alcance ou comparação de móveis.

## Por que cai no PAS

Este item é praticamente garantido na prova, geralmente como um problema aplicado envolvendo dois móveis (comparar velocidades, achar ponto de encontro) ou lançamento de projéteis (decompor movimento horizontal e vertical). A prova gosta de misturar, na mesma questão, um cálculo correto de posição/velocidade com uma afirmação que aplica errado uma fórmula (soma velocidades como escalares quando devia ser vetorial, por exemplo).

**Evidência real (2 questões, PAS 2024/2025):** o padrão de pegadinha mais recorrente é achar que uma grandeza do lançamento horizontal (tempo de queda, alcance) depende de uma variável que na verdade não influencia ela (ex.: achar que o tempo de queda depende da velocidade horizontal inicial) — e, no MU, tratar acumulação constante de velocidade como se fosse "aceleração" quando na verdade o movimento é uniforme, sem aceleração.

## Conteúdo completo orientado ao programa

### Movimento uniforme (MU): função horária da posição

No **movimento uniforme**, a velocidade é constante — o móvel percorre distâncias iguais em intervalos de tempo iguais. A função horária da posição é:

`x(t) = x₀ + v·t`

onde `x₀` é a posição inicial (no instante de referência escolhido) e `v` é a velocidade (constante).

Exemplo real: dois carros, A e B, em MU na mesma estrada. Em um tempo `T`, A está no km 58, B no km 70. Trinta minutos depois, A está no km 78, B no km 82,5. Calculando a velocidade de cada um pela variação de posição em 0,5h: `vA = (78-58)/0,5 = 40km/h`; `vB = (82,5-70)/0,5 = 25km/h`. Com as funções horárias montadas a partir daí (`xA(t)=58+40t`, `xB(t)=70+25t`, com `t` medido a partir de `T`), dá para responder qualquer pergunta sobre encontro, posição em outro instante, ou posição em `t=0`.

**Para o PAS:** o primeiro passo de qualquer problema de MU com dois móveis é achar a velocidade de cada um (pela variação de posição sobre o tempo) e só depois montar as funções horárias — tentar resolver "de cabeça" sem escrever a função é a maior fonte de erro.

### Encontro de dois móveis: iguale as posições

Para achar quando (e onde) dois móveis se encontram, iguale as duas funções horárias de posição e resolva para `t`.

Exemplo real (continuação): `xA(t)=xB(t)` → `58+40t=70+25t` → `15t=12` → `t=0,8h`. Substituindo: `xA(0,8)=58+40(0,8)=90km`. Os automóveis se encontram no km 90.

**Para o PAS:** "alcançar" outro móvel significa estar na mesma posição no mesmo instante — sempre iguale as funções horárias, nunca compare só as velocidades.

### Extrapolando para antes do instante de referência

Uma pegadinha comum é pedir a posição de um móvel **antes** do instante `T` usado como referência no enunciado — a função horária vale para qualquer `t`, inclusive negativo (antes de `T`).

Exemplo real: se em `t=0` (medido a partir de um referencial diferente) o carro A estava no km 18, e sabendo que `vA=40km/h`, o tempo entre esse `t=0` e o instante `T` é `T = (58-18)/40 = 1h`. Nesse mesmo intervalo, o carro B andou `25×1=25km`, então em `t=0` ele estava em `70-25=45km`.

**Para o PAS:** a função horária de posição funciona "para trás" no tempo também — não pense nela como algo que só se aplica "dali para frente".

### Lançamento horizontal: movimento vertical e horizontal são independentes

No **lançamento horizontal** (um objeto lançado horizontalmente de uma altura `h`, com velocidade inicial `v₀`), o movimento se decompõe em dois eixos **independentes**:

- **Eixo vertical:** queda livre, começando com velocidade vertical zero. Tempo de queda: `t_q = √(2h/g)` — depende **só** de `h` e `g`, **não** de `v₀`.
- **Eixo horizontal:** movimento uniforme com velocidade constante `v₀` (sem aceleração horizontal, já que não há força horizontal, desprezando resistência do ar).

O **alcance** horizontal é `A = v₀ × t_q = v₀ × √(2h/g)` — proporcional a `v₀` e a `√h` (não a `h` diretamente).

A **velocidade final**, ao atingir o solo, é a soma **vetorial** das componentes horizontal (`v₀`, constante) e vertical (`√(2gh)`, ganha na queda) — pelo teorema de Pitágoras: `v_final = √(v₀² + 2gh)`, **nunca** a soma simples `v₀+√(2gh)` (as duas componentes são perpendiculares, não se somam como números).

A trajetória resultante é uma **parábola**, não um arco de círculo.

O momento linear horizontal (`m×v₀`) permanece **constante** durante toda a queda, já que não há força horizontal atuando (na ausência de resistência do ar).

**Para o PAS:** decore que o tempo de queda **não depende** da velocidade horizontal — é a pegadinha mais recorrente deste tema; e que a velocidade final se calcula por Pitágoras, nunca por soma direta das componentes.

## Diferenças que costumam ser trocadas

| Conceito A | Conceito B | Como a prova troca | Como não cair |
|---|---|---|---|
| Tempo de queda (só depende de h e g) | Tempo de queda "proporcional" a v₀ | Afirma que t_q depende da velocidade horizontal | No lançamento horizontal, o eixo vertical é independente do horizontal |
| Velocidade final = soma vetorial (Pitágoras) | Velocidade final = soma escalar simples | Soma direto v₀+√(2gh) | Componentes perpendiculares se combinam por Pitágoras, não soma direta |
| Trajetória parabólica | Trajetória circular | Descreve a trajetória do lançamento como arco de círculo | Sob gravidade constante, a trajetória é sempre uma parábola |
| MU (velocidade constante, sem aceleração) | MUV (aceleração constante) | Atribui aceleração "estritamente positiva" a um corpo em MU | MU tem, por definição, aceleração zero |

## Como caiu na prova: questões comentadas

**Fonte: PAS/UEM 2025, Etapa 1, Questão 37 — lançamento horizontal (gabarito: 02-16 = soma 18)**

Setup: objeto massa `m`, lançado horizontalmente de altura `h`, velocidade inicial `v₀`, gravidade `g`. Tempo de queda `t_q`, alcance `A`.

1. "`t_q` é proporcional a `v₀`" — **errada**: o tempo de queda depende só de `h` e `g` (`t_q=√(2h/g)`), não de `v₀`.
2. "`A` é proporcional a `v₀` e `√h`" — **correta**: `A=v₀×√(2h/g)`, proporcional a `v₀` e a `√h`.
3. "velocidade final (módulo) = `v₀+√(2gh)`" — **errada**: o correto é `√(v₀²+2gh)` (soma vetorial via Pitágoras, já que as componentes são perpendiculares).
4. "trajetória vista do solo é um arco de círculo" — **errada**: é uma parábola.
5. "componente horizontal do momento linear permanece constante e igual a `mv₀`" — **correta**: sem força horizontal, o momento linear horizontal se conserva.
6. Soma das corretas: 02+16 = 18, batendo com o gabarito oficial.

**Fonte: PAS/UEM 2024, Etapa 1, Questão 17 — MU com dois carros (gabarito: 01-08 = soma 09)**

Setup: carros A e B, MU. Em tempo `T`: A no km 58, B no km 70. 30 min depois: A no km 78, B no km 82,5.

1. "automóvel A alcança automóvel B no quilômetro 90" — **correta**: calculado acima (velocidades 40km/h e 25km/h, encontro em `t=0,8h` após `T`, no km 90).
2. "automóvel B chegará antes ao quilômetro 100" — **errada**: A (mais rápido, 40km/h) chega ao km 100 em `t=1,05h`; B (25km/h) chega em `t=1,2h` — A chega primeiro, não B.
3. "velocidade escalar de A é menor que a de B" — **errada**: `vA=40km/h > vB=25km/h`.
4. "se em `t=0` o carro A estava no km 18, então B estava no km 45" — **correta**: `T=1h` (tempo entre `t=0` e `T`, calculado por `(58-18)/40`); posição de B em `t=0`: `70-25×1=45km`.
5. "automóvel A tem aceleração estritamente positiva" — **errada**: ambos estão em MU (movimento uniforme), que por definição tem aceleração zero.
6. Soma das corretas: 01+08 = 09, batendo com o gabarito oficial.

## Pegadinhas do PAS

- Atribuir dependência de `v₀` ao tempo de queda no lançamento horizontal (não existe — são eixos independentes).
- Somar componentes perpendiculares de velocidade como números comuns, em vez de por Pitágoras.
- Descrever a trajetória de um lançamento horizontal como circular, em vez de parabólica.
- Atribuir aceleração a um corpo descrito como em "movimento uniforme".
- Comparar "quem chega primeiro" sem calcular o tempo de chegada de cada móvel.

## Como resolver questões

1. Sempre monte a função horária de posição de cada móvel antes de comparar ou calcular encontro.
2. Para lançamento horizontal, trate os eixos vertical e horizontal como problemas **separados** — resolva um de cada vez.
3. Para velocidade final vetorial, use Pitágoras quando as componentes forem perpendiculares — nunca some diretamente.
4. Para "quem chega primeiro", calcule o tempo de chegada de cada um e compare os tempos, não as velocidades isoladamente.

## Lacunas honestas

- Este tema já tem duas questões reais comentadas (PAS 2024 e 2025), cobrindo MU com dois móveis e lançamento horizontal. Falta um exemplo real de MUV (aceleração constante, não nula), queda livre pura (sem componente horizontal) e movimento circular uniforme (MCU).
- Falta explorar o Vestibular de Verão (2020-2025, já baixado) para este tema.

## Checklist de revisão

- [ ] Li o item do programa correspondente no Manual do Candidato.
- [ ] Sei montar a função horária de posição para MU e usá-la para achar encontros.
- [ ] Sei explicar por que o tempo de queda no lançamento horizontal não depende da velocidade horizontal.
- [ ] Sei calcular a velocidade final de um lançamento horizontal por Pitágoras (não soma direta).
- [ ] Sei que a trajetória de um lançamento horizontal é uma parábola.
- [ ] Resolvi as duas questões comentadas deste tema sem olhar o gabarito antes.

## Questões relacionadas

- [Resolver questões deste tema](../../provas/fisica/002_cinematica-mu-muv-queda-livre-movimento-circular.md)

## Referências

**Manual e programa oficial**

- Manual do Candidato PAS/UEM 2026, Programa de Prova para a Etapa 1 — Física, item 2.1.

**Provas reais usadas**

- PAS/UEM 2025, Etapa 1, Questão 37 — `Fontes Oficiais/provas-anteriores/pas25_E1.pdf` e `pas25_gabdef.pdf`.
- PAS/UEM 2024, Etapa 1, Questão 17 — `Fontes Oficiais/provas-anteriores/pas24_E1.pdf` e `pas24_gabdef.pdf`.
