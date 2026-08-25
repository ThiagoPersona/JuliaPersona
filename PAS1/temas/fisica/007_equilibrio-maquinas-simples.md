# 007 - Equilíbrio e máquinas simples

## Leitura rápida

- Mensagem central 1: um corpo rígido só está em equilíbrio quando DUAS condições valem ao mesmo tempo — a força resultante é nula E o torque (momento) resultante é nulo; equilíbrio de uma partícula (sem tamanho) só exige a primeira condição.
- Mensagem central 2: o erro mais comum é calcular só a soma das forças e esquecer de verificar os torques, achando que "força resultante zero" já garante equilíbrio de qualquer corpo.
- Mensagem central 3: máquinas simples (alavancas, polias, planos inclinados) nunca multiplicam trabalho ou energia — elas trocam força por distância (ou o contrário), mantendo o trabalho realizado aproximadamente constante.

## Por que cai no PAS

O item 2.2.14-2.2.15 do programa de Física da Etapa 1 cobre "Equilíbrio de uma partícula e equilíbrio de um corpo rígido" e "Polias e máquinas simples" — um tópico que testa a diferença entre equilíbrio de translação (força resultante nula) e equilíbrio de rotação (torque resultante nulo), além da vantagem mecânica de dispositivos simples usados para facilitar o levantamento ou o deslocamento de cargas.

Até o fechamento deste banco, nenhuma questão real de PAS ou Vestibular de Verão da UEM localizada nas provas já mineradas (PAS 2021-2025 Etapa 1 e Vestibular de Verão 2020-2025) testou especificamente este item de forma isolada — por isso a questão comentada abaixo é autoral (ver "Lacunas honestas"), escrita no mesmo formato de somatória usado pela UEM.

O que mais confunde quem estuda por decoreba: achar que "estar em equilíbrio" significa "estar parado" (na verdade, equilíbrio inclui também o movimento retilíneo uniforme, sem aceleração); esquecer que o equilíbrio de um corpo rígido (com tamanho, capaz de girar) exige checar torques, não só forças; e achar que uma máquina simples (como uma alavanca ou uma polia móvel) faz "surgir energia do nada", quando na verdade ela apenas troca força por distância percorrida, mantendo o trabalho (aproximadamente) constante.

## Conteúdo completo orientado ao programa

### Equilíbrio de uma partícula

Uma partícula (um ponto material, sem dimensões, usado como modelo simplificado de um corpo pequeno) está em equilíbrio quando a soma vetorial de todas as forças que agem sobre ela é nula:

**ΣF = 0**

Isso não significa necessariamente que a partícula está parada — pela Primeira Lei de Newton (princípio da inércia), força resultante nula corresponde tanto ao repouso (equilíbrio estático) quanto ao movimento retilíneo uniforme, com velocidade constante (equilíbrio dinâmico). O que a condição ΣF=0 garante é que não há aceleração.

**Para o PAS:** "equilíbrio" não é sinônimo de "parado" — um corpo em movimento retilíneo uniforme também está em equilíbrio, porque sua aceleração é zero.

### Equilíbrio de um corpo rígido

Um corpo rígido é um corpo com dimensões (não um ponto), que pode não apenas se deslocar (translação), mas também girar (rotação) em torno de um eixo. Para que um corpo rígido esteja em equilíbrio completo, DUAS condições precisam valer simultaneamente:

1. **Equilíbrio de translação**: a soma vetorial de todas as forças é nula (ΣF=0) — o mesmo critério da partícula.
2. **Equilíbrio de rotação**: a soma de todos os torques (momentos de força) em relação a qualquer ponto é nula (Στ=0) — sem isso, o corpo pode não se deslocar, mas ainda assim começar a girar.

O **torque** (ou momento de uma força) mede a capacidade de uma força de provocar rotação em torno de um eixo ou ponto, e é calculado por:

**τ = F·d·sen θ**

em que `F` é o módulo da força aplicada, `d` é a distância entre o ponto de aplicação da força e o eixo de rotação (o braço de alavanca), e `θ` é o ângulo entre a força e o braço de alavanca. O torque é máximo quando a força é aplicada perpendicularmente ao braço (θ=90°, sen θ=1) e nulo quando a força é aplicada na mesma direção do braço (θ=0°, sen θ=0) — por isso é mais fácil abrir uma porta empurrando-a perpendicularmente à sua superfície, longe das dobradiças, do que empurrando-a próximo às dobradiças ou na direção da própria porta.

**Para o PAS:** verificar só ΣF=0 não garante o equilíbrio de um corpo rígido — é preciso verificar também Στ=0. Uma barra pode ter forças que se cancelam (ΣF=0) mas, se aplicadas em pontos diferentes, ainda assim gerar rotação (Στ≠0), e vice-versa.

### Máquinas simples

Máquinas simples são dispositivos mecânicos elementares que modificam a intensidade, a direção ou o sentido de uma força aplicada, facilitando a realização de um trabalho — mas sem multiplicar o trabalho ou a energia envolvida (desconsiderando perdas por atrito, o trabalho realizado pela força aplicada é igual ao trabalho útil realizado sobre a carga). As principais categorias são:

- **Alavancas**: uma barra rígida que gira em torno de um ponto fixo (o fulcro ou apoio), usada para multiplicar força às custas de percorrer uma distância maior, ou vice-versa. Uma alavanca está em equilíbrio quando o torque da força aplicada (potência) é igual ao torque da força resistente (resistência/carga) em relação ao fulcro: F_potência·d_potência = F_resistência·d_resistência.
- **Planos inclinados**: uma superfície inclinada usada para erguer uma carga com menos força do que ergue-la verticalmente, às custas de percorrer uma distância maior ao longo da rampa (já estudado em detalhe no tema de Dinâmica).
- **Polias (roldanas)**: rodas com um sulco por onde passa uma corda ou cabo, usadas para mudar a direção de uma força ou para ganhar vantagem mecânica.

### Polia fixa x polia móvel

Essa é a distinção mais cobrada dentro do tópico de polias:

- **Polia fixa**: presa a um suporte fixo (como um teto), ela apenas MUDA A DIREÇÃO da força aplicada — por exemplo, transforma uma força para baixo em uma força equivalente para cima na carga. Não há ganho de força: a intensidade da força necessária para erguer a carga é igual ao peso da carga (desconsiderando o atrito).
- **Polia móvel**: presa à própria carga (que se move junto com a polia), ela oferece VANTAGEM MECÂNICA — a força necessária para erguer a carga é igual à metade do peso da carga, porque o peso é sustentado por dois segmentos de corda. Em compensação, é preciso puxar o dobro do comprimento de corda para erguer a carga a uma determinada altura.

| Tipo de polia | Ganha força? | Muda direção? | Relação entre força e peso da carga |
|---|---|---|---|
| Polia fixa | Não | Sim | F = P (mesma intensidade) |
| Polia móvel | Sim | Não (a força e o deslocamento da carga ficam no mesmo sentido geral) | F = P/2 |

**Para o PAS:** puxar uma corda com menos força usando uma polia móvel não é "trabalho grátis" — para compensar a força menor, é preciso puxar uma distância maior de corda. O trabalho realizado (força × distância) permanece, em condições ideais sem atrito, o mesmo que seria necessário para erguer a carga diretamente.

## Diferenças que costumam ser trocadas

| Conceito A | Conceito B | Como a prova troca | Como não cair |
|---|---|---|---|
| Equilíbrio (força resultante nula, pode incluir MRU) | Repouso (velocidade nula) | A prova trata "em equilíbrio" como sinônimo de "parado" | Equilíbrio inclui tanto o repouso quanto o movimento retilíneo uniforme — o que importa é a aceleração nula |
| Equilíbrio de translação (ΣF=0) | Equilíbrio de rotação (Στ=0) | A prova afirma que verificar só a soma das forças garante o equilíbrio de um corpo rígido | Um corpo rígido só está em equilíbrio completo se ΣF=0 E Στ=0 ao mesmo tempo |
| Polia fixa (só muda direção, sem ganho de força) | Polia móvel (ganho de força, F=P/2) | A prova troca as vantagens de uma pelo outro tipo de polia | Só a polia móvel reduz a força necessária; a fixa apenas redireciona a força aplicada |
| Máquina simples (troca força por distância, sem ganhar trabalho) | "Multiplicador de energia" (ganho líquido de trabalho) | A prova sugere que uma máquina simples permite realizar mais trabalho com menos esforço, sem contrapartida | Em condições ideais, o trabalho realizado é o mesmo com ou sem a máquina simples — ela troca força por distância percorrida, nunca cria trabalho extra |

## Como caiu na prova: questão comentada

**Questão autoral, no formato oficial de somatória do PAS/UEM (nenhuma questão real localizada até o momento sobre este item específico — ver "Lacunas honestas")**

"Sobre equilíbrio de corpos e máquinas simples, assinale o que for correto."

1. **Leia o comando**: pede julgamento de 5 afirmações independentes sobre equilíbrio e máquinas simples.
2. **Julgue cada afirmação:**

01) "Um corpo em movimento retilíneo uniforme está em equilíbrio, pois a força resultante que age sobre ele é nula." — **Correta.** Equilíbrio (ΣF=0) inclui tanto o repouso quanto o MRU, já que em ambos os casos a aceleração é nula.

02) "Para que um corpo rígido esteja em equilíbrio completo, basta que a soma vetorial das forças que agem sobre ele seja nula." — **Errada.** É preciso também que a soma dos torques (momentos de força) seja nula — só a força resultante nula não impede a rotação do corpo.

04) "O torque de uma força em relação a um eixo é máximo quando essa força é aplicada perpendicularmente ao braço de alavanca." — **Correta.** τ=F·d·senθ é máximo quando θ=90° (sen90°=1).

08) "Uma polia fixa reduz pela metade a força necessária para erguer uma carga, além de mudar a direção da força aplicada." — **Errada.** A polia fixa apenas muda a direção da força, sem reduzir sua intensidade; quem reduz a força pela metade é a polia móvel.

16) "Em uma máquina simples ideal (sem atrito), o trabalho realizado pela força aplicada é igual ao trabalho útil realizado sobre a carga, ainda que a força e a distância percorrida sejam diferentes das que seriam necessárias sem a máquina." — **Correta.** É o princípio fundamental das máquinas simples: elas trocam força por distância, sem alterar o trabalho total em condições ideais.

3. **Soma dos códigos corretos**: 01+04+16 = **soma 21**.

## Pegadinhas do PAS

- Tratar "equilíbrio" como sinônimo de "repouso", ignorando o movimento retilíneo uniforme.
- Verificar só a soma das forças e esquecer de checar os torques ao avaliar o equilíbrio de um corpo rígido (com tamanho, capaz de girar).
- Trocar as vantagens da polia fixa (só muda direção) pelas da polia móvel (reduz força pela metade).
- Achar que uma máquina simples permite ganhar trabalho "de graça", sem perceber que ela sempre troca força por distância percorrida.

## Como resolver questões

1. Identifique se a afirmação trata de uma partícula (só ΣF=0 importa) ou de um corpo rígido (ΣF=0 E Στ=0 precisam valer).
2. Em questões sobre torque, confira o ângulo entre a força e o braço de alavanca — torque máximo é sempre com força perpendicular ao braço.
3. Em questões sobre polias, identifique se a polia é fixa (só muda direção) ou móvel (reduz força pela metade, mas exige puxar mais corda).
4. Lembre que nenhuma máquina simples ideal aumenta o trabalho total — ela troca força por distância, ou distância por força.
5. Some os códigos das afirmações que você tem certeza que são corretas antes de marcar.

## Lacunas honestas

- Nenhuma questão real de PAS/UEM ou Vestibular de Verão da UEM sobre este item específico (equilíbrio de partícula/corpo rígido e máquinas simples) foi localizada nas provas já baixadas e mineradas neste projeto (PAS 2021-2025, Etapa 1; Vestibular de Verão 2020-2025, Provas 1 e 2). A questão comentada acima é **autoral** — escrita por este projeto no formato oficial de somatória, e não deve ser confundida com questão oficial.
- Se uma prova futura (ou uma prova mais antiga ainda não baixada) trouxer uma questão real sobre este item, ela deve substituir ou complementar a questão autoral acima, seguindo a hierarquia de fontes do projeto (ver `REGRAS_DO_MATERIAL.md`).
- Este resumo não aprofunda o cálculo de vantagem mecânica de sistemas compostos de várias polias associadas (talhas) — se o programa exigir esse nível de detalhe, é preciso revisar material escolar complementar.

## Checklist de revisão

- [ ] Li o item 2.2.14-2.2.15 do programa de Física no Manual do Candidato.
- [ ] Sei diferenciar equilíbrio de translação (ΣF=0) de equilíbrio de rotação (Στ=0).
- [ ] Sei calcular torque com τ=F·d·senθ e identificar quando ele é máximo.
- [ ] Sei diferenciar polia fixa (muda direção, sem ganho de força) de polia móvel (ganha força, F=P/2).
- [ ] Resolvi a questão comentada (autoral) deste tema sem olhar a resposta antes.
- [ ] Sei apontar a pegadinha mais provável neste tema.

## Questões relacionadas

- [Resolver questões deste tema](../../provas/fisica/007_equilibrio-maquinas-simples.md)

## Referências

**Manual e programa oficial**

- Manual do Candidato PAS/UEM 2026, Programa de Prova para a Etapa 1 — Física 2.2.14-2.2.15.

**Fonte da questão comentada**

- Questão autoral deste projeto, no formato oficial de somatória do PAS/UEM.
