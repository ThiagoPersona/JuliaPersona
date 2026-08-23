# 003 - Dinâmica: leis de Newton, forças e plano inclinado

## Leitura rápida

- Em plano inclinado com atrito, a ferramenta mais poderosa costuma não ser decompor forças passo a passo, mas usar o **teorema trabalho-energia**: a energia cinética inicial se transforma em energia potencial (subida) mais energia dissipada pelo atrito.
- O erro mais comum é esquecer de contabilizar a energia cinética inicial ao comparar variação de energia potencial com o trabalho do atrito — as duas coisas só seriam iguais se o corpo partisse do repouso.
- O atalho: escreva a equação de energia completa (`KE_inicial = ΔPE + |trabalho do atrito|`) antes de julgar qualquer afirmação sobre o que "é igual" a quê.

## Por que cai no PAS

Este item cobra situações com forças de contato (atrito, normal) atuando junto com a força peso em planos inclinados, testando se você aplica corretamente o princípio da conservação de energia **quando há uma força não conservativa envolvida** — o atrito, que dissipa energia mecânica ao longo do trajeto.

**Evidência real (PAS/UEM 2024, Etapa 1, Questão 16):** um bloco é lançado para cima de um plano inclinado com atrito, e a questão testa cálculo de energia cinética inicial, a relação (não trivial) entre variação de energia potencial e trabalho do atrito, o sinal do trabalho do atrito, e o método correto para achar a altura máxima.

## Conteúdo completo orientado ao programa

### Forças num plano inclinado: peso, normal e atrito

Num plano inclinado, a força peso (`P=mg`, vertical, para baixo) se decompõe em duas componentes: uma **paralela** ao plano (`P·senθ`, que "puxa" o corpo para baixo do plano) e uma **perpendicular** ao plano (`P·cosθ`, equilibrada pela força normal). Quando há atrito, a força de atrito atua **paralela ao plano**, sempre **contrária ao movimento** — se o corpo sobe, o atrito aponta para baixo do plano; se desce, aponta para cima.

### Trabalho da força de atrito: sempre negativo (dissipa energia)

O **atrito é uma força não conservativa**: o trabalho que ela realiza sobre um corpo em movimento é sempre **negativo** (retira energia mecânica do sistema, dissipando-a como calor), independentemente da direção do movimento.

**Para o PAS:** "a força de atrito realiza trabalho negativo ao longo do trajeto" é sempre verdadeiro quando o atrito se opõe ao movimento — essa é uma propriedade estrutural do atrito, não algo que dependa dos números específicos do problema.

### Energia mecânica não se conserva na presença de atrito

Quando só forças conservativas atuam (peso, força elástica), a soma de energia cinética e potencial (energia mecânica total) se conserva. **Com atrito, isso deixa de valer** — parte da energia mecânica se transforma em calor, então a soma `KE+PE` **diminui** ao longo do trajeto, não se mantém constante.

**Para o PAS:** nunca aceite "a soma das energias potencial e cinética é conservada" quando o problema já informa que há uma força de atrito (não conservativa) atuando — é a negação direta da própria definição de força não conservativa.

### Teorema trabalho-energia com atrito: a ferramenta certa para achar a altura máxima

Para achar até onde um corpo sobe (altura máxima) num plano com atrito, use o teorema trabalho-energia generalizado:

`Energia cinética inicial = Variação de energia potencial + |Trabalho do atrito|`

ou, de forma equivalente, somando os trabalhos de todas as forças:

`W_peso + W_atrito = ΔKE`

Exemplo real: bloco de massa 2kg lançado a 5m/s para cima de um plano inclinado a 30°, com atrito de módulo constante 1N.

- Energia cinética inicial: `KE = ½mv² = ½(2)(5²) = 25J`.
- No ponto mais alto, o corpo momentaneamente para (`KE_final=0`).
- Pela equação de energia: `25J = ΔPE + |W_atrito|` — ou seja, `ΔPE = 25 - |W_atrito|`, **não** `ΔPE = |W_atrito|` sozinho (a energia cinética inicial de 25J também entra na conta).

**Para o PAS:** a afirmação "a diferença de energia potencial é igual ao trabalho realizado pelo atrito" costuma **esquecer** o termo da energia cinética inicial — sempre escreva a equação completa antes de comparar dois termos isolados.

## Diferenças que costumam ser trocadas

| Conceito A | Conceito B | Como a prova troca | Como não cair |
|---|---|---|---|
| ΔPE = KE_inicial − \|trabalho do atrito\| | ΔPE = trabalho do atrito (isolado) | Omite o termo da energia cinética inicial na equação de energia | Sempre escreva a equação de energia completa, com todos os termos |
| Energia mecânica não se conserva (há atrito) | Energia mecânica se conserva | Afirma conservação de energia mecânica mesmo com atrito explícito no enunciado | Atrito = força não conservativa = energia mecânica total diminui |
| Trabalho do atrito sempre negativo (se opõe ao movimento) | Trabalho do atrito de sinal variável | Trata o sinal do trabalho do atrito como incerto | Atrito sempre remove energia — trabalho negativo, por definição |

## Como caiu na prova: questão comentada

**Fonte: PAS/UEM 2024, Etapa 1, Questão 16 (gabarito: 01-04-16 = soma 21)**

Contexto: bloco de 2kg lançado a 5m/s para cima de um plano inclinado a 30°, com força de atrito constante de módulo 1N (não conservativa).

1. "energia cinética inicial do bloco é 25J" — **correta**: `KE=½(2)(5²)=25J`.
2. "a diferença de energia potencial entre o ponto mais alto e o ponto de lançamento é igual ao trabalho realizado pela força de atrito" — **errada**: falta o termo da energia cinética inicial; a relação completa é `ΔPE = KE_inicial + W_atrito` (com `W_atrito` negativo), não `ΔPE = W_atrito` isoladamente.
3. "a força de atrito realiza trabalho negativo ao longo do trajeto" — **correta**: propriedade estrutural do atrito, que sempre se opõe ao movimento.
4. "a soma das energias potencial e cinética do bloco é conservada" — **errada**: com atrito (força não conservativa) atuando, a energia mecânica total diminui ao longo do trajeto — não se conserva.
5. "a altura máxima pode ser encontrada combinando-se o princípio da conservação da energia com o fato de a força de atrito ser não conservativa" — **correta**: é exatamente o método correto — usar a equação de energia generalizada (conservação de energia total, incluindo o termo dissipado pelo atrito).
6. Soma das corretas: 01+04+16 = 21, batendo com o gabarito oficial.

## Pegadinhas do PAS

- Igualar variação de energia potencial ao trabalho do atrito, esquecendo o termo de energia cinética inicial.
- Afirmar conservação de energia mecânica num problema que já descreve explicitamente uma força de atrito (não conservativa).
- Tratar o sinal do trabalho do atrito como incerto ou dependente do problema (é sempre negativo, quando o atrito se opõe ao movimento).

## Como resolver questões

1. Identifique todas as forças atuantes e classifique cada uma como conservativa (peso, elástica) ou não conservativa (atrito).
2. Escreva a equação de energia completa: `KE_inicial + PE_inicial = KE_final + PE_final + |energia dissipada pelo atrito|`.
3. Substitua os valores conhecidos e isole a incógnita pedida — nunca compare dois termos da equação isoladamente sem passar pela equação completa.
4. Confirme que o sinal do trabalho do atrito é sempre negativo quando ele se opõe ao movimento.

## Lacunas honestas

- Este tema tem uma questão real comentada (PAS 2024, Questão 16), focada em energia num plano inclinado com atrito. Falta um exemplo real específico sobre decomposição de forças (peso, normal) num plano inclinado **sem** atrito, e sobre as leis de Newton (inércia, ação e reação) isoladamente.
- Falta explorar o Vestibular de Verão (2020-2025, já baixado) para este tema.

## Checklist de revisão

- [ ] Li o item do programa correspondente no Manual do Candidato.
- [ ] Sei decompor a força peso num plano inclinado (componentes paralela e perpendicular).
- [ ] Sei explicar por que o trabalho do atrito é sempre negativo quando ele se opõe ao movimento.
- [ ] Sei escrever a equação de energia completa para um problema com atrito, sem esquecer nenhum termo.
- [ ] Resolvi a questão comentada deste tema sem olhar o gabarito antes.

## Questões relacionadas

- [Resolver questões deste tema](../../provas/fisica/003_dinamica-leis-newton-forcas-plano-inclinado.md)

## Referências

**Manual e programa oficial**

- Manual do Candidato PAS/UEM 2026, Programa de Prova para a Etapa 1 — Física, itens 2.2.1-2.2.4.

**Provas reais usadas**

- PAS/UEM 2024, Etapa 1, Questão 16 — `Fontes Oficiais/provas-anteriores/pas24_E1.pdf` e `pas24_gabdef.pdf`.
