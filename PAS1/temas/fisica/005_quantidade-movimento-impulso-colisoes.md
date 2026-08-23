# 005 - Quantidade de movimento, impulso e colisões

## Leitura rápida

- Colisão elástica é aquela em que **duas** grandezas se conservam ao mesmo tempo: quantidade de movimento (sempre, em qualquer colisão) e energia cinética (só nas elásticas).
- O erro mais comum é usar uma fórmula "decorada" para velocidades finais sem verificar se ela realmente vem das duas equações de conservação — ou fazer conta errada e não perceber porque não confere o resultado.
- O atalho: depois de calcular as velocidades finais, **sempre confira** se a quantidade de movimento total e a energia cinética total continuam os mesmos de antes da colisão — é a forma mais segura de saber se você acertou a conta.

## Por que cai no PAS

Este item cobra o cálculo de quantidade de movimento e energia cinética antes/depois de uma colisão, e a compreensão de que colisões elásticas se resolvem com duas equações (conservação de momento + conservação de energia cinética) e duas incógnitas (as velocidades finais dos dois corpos).

**Evidência real (PAS/UEM 2024, Etapa 1, Questão 18):** a questão trouxe dois blocos em colisão elástica e testou cálculo de quantidade de movimento total, energia cinética total, e as velocidades finais de cada bloco — com valores "quase certos" nas alternativas erradas, para testar se você faz a conta completa ou "chuta" um valor plausível.

## Conteúdo completo orientado ao programa

### Quantidade de movimento (momento linear): sempre se conserva numa colisão

A **quantidade de movimento** (ou momento linear) de um corpo é `p=m×v`. Num sistema isolado (sem forças externas), a quantidade de movimento **total** se conserva em **qualquer** tipo de colisão — elástica, inelástica ou perfeitamente inelástica.

`p_antes = p_depois` → `m_A·v_A + m_B·v_B = m_A·v'_A + m_B·v'_B`

**Para o PAS:** a conservação da quantidade de movimento vale sempre, em qualquer colisão — é a energia cinética que só se conserva no caso particular das colisões elásticas.

### Energia cinética: só se conserva em colisões elásticas

A **energia cinética** de um corpo é `KE=½mv²`. Numa **colisão elástica**, a energia cinética total do sistema **antes** é igual à energia cinética total **depois** — nenhuma energia é perdida para deformação, calor ou som. Em colisões inelásticas, parte da energia cinética se transforma em outras formas de energia, e a energia cinética total **diminui**.

Exemplo real: blocos A (2kg, `v_A=4m/s`) e B (3kg, `v_B=-2m/s`), movendo-se um em direção ao outro (por isso os sinais opostos). Energia cinética antes da colisão: `KE_A=½(2)(4²)=16J`; `KE_B=½(3)(2²)=6J`; total = `22J`.

### Resolvendo uma colisão elástica: duas equações, duas incógnitas

Para achar as velocidades finais `v'_A` e `v'_B` numa colisão elástica, monta-se um sistema com **duas equações**:

1. Conservação da quantidade de movimento: `m_A·v_A + m_B·v_B = m_A·v'_A + m_B·v'_B`
2. Conservação da energia cinética: `½m_A·v_A² + ½m_B·v_B² = ½m_A·v'_A² + ½m_B·v'_B²`

Duas equações, duas incógnitas (`v'_A`, `v'_B`) — o sistema tem solução única (fora a solução trivial "nada mudou").

Exemplo real (continuação): `m_A=2kg`, `v_A=4m/s`; `m_B=3kg`, `v_B=-2m/s`. Resolvendo o sistema (ou usando as fórmulas de colisão elástica unidimensional): `v'_A=-3,2m/s`; `v'_B=2,8m/s`.

**Conferindo:** quantidade de movimento antes = `2(4)+3(-2)=2kg·m/s`; depois = `2(-3,2)+3(2,8)=-6,4+8,4=2kg·m/s` ✓. Energia cinética antes = `22J`; depois = `½(2)(3,2²)+½(3)(2,8²)=10,24+11,76=22J` ✓. As duas conferências batem, confirmando que os valores calculados estão corretos.

**Para o PAS:** depois de calcular as velocidades finais, sempre confira as duas conservações (momento e energia cinética) com os números que você achou — é o jeito mais seguro de detectar um erro de conta antes de responder.

## Diferenças que costumam ser trocadas

| Conceito A | Conceito B | Como a prova troca | Como não cair |
|---|---|---|---|
| Quantidade de movimento (sempre se conserva) | Energia cinética (só se conserva em colisão elástica) | Confunde as duas grandezas ou assume que ambas sempre se conservam | Momento: sempre. Energia cinética: só em colisão elástica |
| Cálculo correto das velocidades finais (via sistema de 2 equações) | Valor "quase certo" mas errado | Apresenta um número próximo do correto, mas que não bate com as duas conservações | Sempre confira as duas conservações com o resultado calculado |

## Como caiu na prova: questão comentada

**Fonte: PAS/UEM 2024, Etapa 1, Questão 18 (gabarito: 02-16 = soma 18)**

Contexto: blocos A (2kg, 4m/s) e B (3kg, -2m/s), movendo-se um em direção ao outro, colisão elástica, sem atrito, trajetória retilínea.

1. "soma das quantidades de movimento antes da colisão é 14kg·m/s" — **errada**: `2(4)+3(-2)=8-6=2kg·m/s`, não 14.
2. "soma das energias cinéticas antes da colisão é 22J" — **correta**: `16J+6J=22J`.
3. "velocidade do bloco A após a colisão é v'_A=-4m/s" — **errada**: o valor correto, pela conservação de momento e energia, é `v'_A=-3,2m/s`.
4. "velocidade do bloco B após a colisão é v'_B=2m/s" — **errada**: o valor correto é `v'_B=2,8m/s`.
5. "as velocidades após a colisão podem ser determinadas resolvendo-se um sistema de equações com duas incógnitas" — **correta**: é exatamente o método (conservação de momento + conservação de energia cinética, duas equações, duas incógnitas).
6. Soma das corretas: 02+16 = 18, batendo com o gabarito oficial.

## Pegadinhas do PAS

- Errar a conta da soma de quantidade de movimento (esquecer o sinal negativo de uma velocidade em sentido oposto).
- Aceitar um valor de velocidade final "redondo" e plausível (como -4m/s) sem checar se ele realmente satisfaz as duas conservações.
- Confundir conservação de energia cinética (só em colisão elástica) com conservação de momento (sempre).

## Como resolver questões

1. Calcule a quantidade de movimento total e a energia cinética total **antes** da colisão — são os valores de referência para conferir depois.
2. Para colisão elástica, monte as duas equações de conservação (momento e energia cinética) e resolva o sistema.
3. Depois de achar as velocidades finais, sempre confira: a soma de momento bate com o valor antes? A soma de energia cinética bate?
4. Preste atenção aos sinais das velocidades — corpos se movendo em sentidos opostos têm velocidades de sinais opostos.

## Lacunas honestas

- Este tema tem uma questão real comentada (PAS 2024, Questão 18), focada em colisão elástica unidimensional. Falta um exemplo real de colisão inelástica (perda de energia cinética) e de impulso de uma força (variação do momento linear ao longo do tempo).
- Falta explorar o Vestibular de Verão (2020-2025, já baixado) para este tema.

## Checklist de revisão

- [ ] Li o item do programa correspondente no Manual do Candidato.
- [ ] Sei calcular quantidade de movimento e energia cinética de um sistema de dois corpos.
- [ ] Sei montar o sistema de duas equações (momento + energia cinética) para uma colisão elástica.
- [ ] Sei conferir um resultado de colisão checando as duas conservações.
- [ ] Resolvi a questão comentada deste tema sem olhar o gabarito antes.

## Questões relacionadas

- [Resolver questões deste tema](../../provas/fisica/005_quantidade-movimento-impulso-colisoes.md)

## Referências

**Manual e programa oficial**

- Manual do Candidato PAS/UEM 2026, Programa de Prova para a Etapa 1 — Física, itens 2.2.7-2.2.8, 2.2.12-2.2.13.

**Provas reais usadas**

- PAS/UEM 2024, Etapa 1, Questão 18 — `Fontes Oficiais/provas-anteriores/pas24_E1.pdf` e `pas24_gabdef.pdf`.
