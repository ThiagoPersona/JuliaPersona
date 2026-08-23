# 003 - Lógica elementar: inferência, lógica proposicional e silogismo categórico

## Leitura rápida

- Existem três tipos clássicos de inferência — **dedutiva**, **indutiva** e **abdutiva** — e cada uma tem uma relação diferente entre premissas e conclusão: a prova adora trocar as definições entre elas.
- O erro mais comum é confundir "dedução" com "raciocínio de premissa particular para conclusão geral" — é o contrário: a dedução típica vai de premissas mais gerais para uma conclusão que já está contida nelas (não amplia o conteúdo); quem generaliza a partir de casos particulares é a indução.
- O atalho: pergunte "a conclusão desta inferência tem mais informação do que as premissas (ampliativo → indução) ou está garantida logicamente pelas premissas (não ampliativo, necessário → dedução)?".

## Por que cai no PAS

Este item cobra os fundamentos da lógica: o que é consequência lógica, a diferença entre inferência dedutiva, indutiva e abdutiva (item 3.1), e os operadores lógico-proposicionais e o silogismo categórico (item 3.2). A prova gosta de descrever corretamente uma característica de um tipo de inferência, mas atribuí-la ao tipo errado (por exemplo, descrever indução e chamar de dedução).

**Evidência real (PAS/UEM 2025, Etapa 1, Questão 18):** a questão testou a definição de validade na dedução, o raciocínio por analogia como forma de indução, e duas armadilhas de troca de rótulo (chamar de "indutivo" um raciocínio dedutivo, e vice-versa).

## Conteúdo completo orientado ao programa

### O que é uma inferência lógica

Uma **inferência** é o processo de raciocínio pelo qual se chega a uma conclusão a partir de uma ou mais premissas (afirmações de partida). A lógica clássica distingue os tipos de inferência pela **relação de necessidade** entre premissas e conclusão.

### Inferência dedutiva

Na **inferência dedutiva**, se as premissas do argumento forem verdadeiras, a conclusão será **necessariamente** verdadeira — a verdade das premissas garante logicamente a verdade da conclusão. Um argumento nessas condições é chamado de **válido** (a validade depende da forma lógica do argumento, não do conteúdo específico das premissas). A dedução é considerada **não ampliativa** (ou "restritiva"): a conclusão não contém informação além do que já estava, de algum modo, contido nas premissas — por isso, ela costuma partir de premissas mais gerais (universais) para uma conclusão mais específica (particular), sem ultrapassar o que as premissas já garantem.

Exemplo clássico de silogismo dedutivo: "Todo homem é mortal (premissa universal); Sócrates é homem (premissa particular); logo, Sócrates é mortal (conclusão particular, necessariamente verdadeira se as premissas forem verdadeiras)."

**Para o PAS:** dedução = premissas garantem necessariamente a conclusão; argumento válido depende da forma lógica; a dedução é não ampliativa (não vai de particular para "mais amplo").

### Inferência indutiva

Na **inferência indutiva**, mesmo que as premissas sejam verdadeiras, a conclusão **não é necessariamente** verdadeira — ela é apenas provável ou razoável, com grau de confiança variável. Por isso, o termo técnico "válido/inválido" (que se aplica à dedução) não se aplica propriamente à indução: mesmo um argumento indutivo razoável é, tecnicamente, considerado "inválido" no sentido dedutivo estrito, porque não há garantia lógica. A indução é considerada **ampliativa**: ela parte de casos particulares (observações específicas) para chegar a uma conclusão de maior extensão (uma generalização), acrescentando informação que não estava garantida nas premissas.

Exemplo clássico: "O sol nasceu todos os dias observados até hoje; logo, o sol nascerá amanhã" — a conclusão vai além do que as premissas garantem com certeza.

Um caso particular de indução é a **inferência por analogia**: parte-se de premissas que identificam uma propriedade comum entre dois ou mais objetos/casos, e conclui-se, por semelhança, que eles compartilham também outra propriedade.

**Para o PAS:** indução = premissas não garantem necessariamente a conclusão; é ampliativa (particular → geral); mesmo um argumento indutivo razoável é chamado, tecnicamente, de "inválido" (o termo válido é reservado à dedução).

### Inferência abdutiva

A **inferência abdutiva** (ou abdução) é o raciocínio que parte de um fato observado (surpreendente ou a explicar) e busca a **melhor explicação possível** para esse fato, formulando uma hipótese explicativa — mesmo sem certeza de que ela é a única explicação possível. É o tipo de raciocínio típico do diagnóstico médico ou da investigação: observa-se um sintoma/pista e infere-se a causa mais provável.

### Consequência lógica e operadores lógico-proposicionais

A **consequência lógica** é a relação entre premissas e conclusão que garante que, sendo as premissas verdadeiras, a conclusão não pode ser falsa (relação central da dedução válida). A **lógica proposicional** usa **operadores** (conectivos lógicos) para combinar proposições simples em proposições compostas: negação (não), conjunção (e), disjunção (ou), condicional (se... então), bicondicional (se e somente se). Cada operador tem regras precisas de quando a proposição composta resultante é verdadeira ou falsa.

### Silogismo categórico e quadrado de oposições

O **silogismo categórico** é uma forma de argumento dedutivo composto por duas premissas e uma conclusão, cada uma delas uma proposição categórica (do tipo "Todo S é P", "Nenhum S é P", "Algum S é P", "Algum S não é P"). O **quadrado de oposições** é um esquema clássico que organiza a relação lógica entre esses quatro tipos de proposição categórica (universal afirmativa, universal negativa, particular afirmativa, particular negativa), mostrando quais pares são contraditórios, contrários, subcontrários ou subalternos entre si.

## Diferenças que costumam ser trocadas

| Conceito A | Conceito B | Como a prova troca | Como não cair |
|---|---|---|---|
| Dedução: não ampliativa, premissas gerais → conclusão garantida | Indução: ampliativa, premissas particulares → conclusão generalizada | Descreve o padrão da indução (particular → maior extensão, ampliativo) e chama de "dedução", ou vice-versa | Dedução = necessidade lógica, não ampliativa; indução = probabilidade, ampliativa (particular → geral) |
| Validade (dedução): premissas verdadeiras garantem conclusão verdadeira | "Força"/razoabilidade (indução): premissas verdadeiras tornam conclusão provável, não garantida | Aplica "válido/inválido" à indução como se fosse o mesmo critério da dedução | O termo "válido" é técnico da dedução; um argumento indutivo razoável ainda é, tecnicamente, "inválido" no sentido dedutivo |
| Indução por analogia: semelhança entre casos particulares | Indução por generalização: vários casos particulares → regra geral | Confunde os dois subtipos de indução | Analogia compara dois casos específicos; generalização parte de vários casos para uma regra |

## Como caiu na prova: questão comentada

**Fonte: PAS/UEM 2025, Etapa 1, Questão 18 (gabarito: 01-02-08 = soma 11)**

"Acerca dos tipos de inferência lógica, assinale o que for correto."

1. "Na inferência dedutiva, se as premissas do argumento forem verdadeiras, a conclusão será necessariamente verdadeira e o argumento será considerado válido" — **correta**: definição padrão de dedução e validade.
2. "Na inferência por analogia, um tipo de indução, parte-se de premissas que, a partir de alguma propriedade comum, permitem concluir outra propriedade por semelhança dos objetos analisados" — **correta**: descrição padrão da inferência por analogia como subtipo de indução.
3. "Na inferência indutiva, parte-se de premissas universais a fim de concluir uma proposição particular e, por isso, o argumento indutivo é considerado restritivo" — **errada**: essa é a descrição da **dedução** (premissas universais → conclusão particular, não ampliativa/"restritiva"), mal atribuída à indução, que na verdade parte de particulares para generalizar.
4. "Na inferência indutiva, se as premissas do argumento forem verdadeiras, a conclusão não será necessariamente verdadeira, e o argumento, mesmo se razoável, será considerado inválido" — **correta**: descrição precisa de que o termo "válido" (técnico da dedução) não se aplica à indução, mesmo quando ela é razoável.
5. "Na inferência dedutiva, parte-se de premissas particulares a fim de concluir fatos de maior extensão, e por isso, o argumento dedutivo é considerado ampliativo" — **errada**: essa é a descrição da **indução** (particular → maior extensão, ampliativo), mal atribuída à dedução, que é não ampliativa.
6. Soma das corretas: 01+02+08 = 11, batendo com o gabarito oficial.

## Pegadinhas do PAS

- Trocar as definições de dedução e indução entre si — quem vai de particular para geral (ampliativo) é a indução, não a dedução.
- Aplicar o termo técnico "válido/inválido" (da dedução) à indução como se fosse o mesmo critério de avaliação.
- Confundir inferência por analogia (comparação entre casos específicos) com generalização indutiva simples.

## Como resolver questões

1. Para cada afirmação sobre inferência, primeiro identifique o tipo citado (dedutiva, indutiva, abdutiva) e depois confira se a descrição (direção particular↔geral, ampliativo/não ampliativo, necessário/provável) realmente corresponde a esse tipo.
2. Lembre a régua central: dedução = necessária, não ampliativa; indução = provável, ampliativa; abdução = melhor explicação para um fato observado.
3. Desconfie de frases que aplicam "válido/inválido" à indução como sinônimo de "razoável/não razoável" — tecnicamente, validade é conceito da dedução.

## Lacunas honestas

- Este tema tem uma questão real comentada (PAS 2025, Questão 18), cobrindo os tipos de inferência (dedutiva, indutiva, analogia). Falta um exemplo real específico sobre abdução, sobre operadores lógico-proposicionais e sobre o silogismo categórico/quadrado de oposições — a explicação acima é teórica, sem verificação direta contra uma questão real do PAS.
- Falta explorar o Vestibular de Verão (2020-2025, já baixado) para este tema.

## Checklist de revisão

- [ ] Li o item do programa correspondente no Manual do Candidato.
- [ ] Sei diferenciar dedução, indução e abdução pela relação entre premissas e conclusão.
- [ ] Sei explicar por que a dedução é "não ampliativa" e a indução é "ampliativa".
- [ ] Sei explicar por que o termo "válido" tecnicamente só se aplica à dedução.
- [ ] Resolvi a questão comentada deste tema sem olhar o gabarito antes.

## Questões relacionadas

- [Resolver questões deste tema](../../provas/filosofia/003_logica-elementar-inferencia-proposicional-silogismo.md)

## Referências

**Manual e programa oficial**

- Manual do Candidato PAS/UEM 2026, Programa de Prova para a Etapa 1 — Filosofia 3.1-3.2.

**Provas reais usadas**

- PAS/UEM 2025, Etapa 1, Questão 18 — `Fontes Oficiais/provas-anteriores/pas25_E1.pdf` e `pas25_gabdef.pdf`.
