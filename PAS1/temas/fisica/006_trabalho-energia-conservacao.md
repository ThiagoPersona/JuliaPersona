# 006 - Trabalho, energia e conservação de energia

## Leitura rápida

- A ferramenta central deste tema é montar a **equação de energia completa** de uma situação (o que entra, o que se transforma, o que se dissipa) antes de tentar responder qualquer afirmação isolada.
- O erro mais comum é confundir **potência constante** com **aceleração constante** — são coisas bem diferentes, e essa troca aparece com frequência.
- O atalho: para problemas de energia com múltiplas etapas (rampa, atrito, mola), quebre o percurso em trechos e escreva o balanço de energia de cada trecho separadamente antes de juntar tudo.

## Por que cai no PAS

Este item é um dos mais cobrados de física: a prova gosta de montar cenários com várias etapas de conversão de energia (altura → velocidade → atrito → mola, ou combustão → energia cinética), testando se você sabe rastrear a energia em cada etapa e aplicar o princípio da conservação corretamente, mesmo quando há dissipação (atrito) no meio do caminho.

**Evidência real (2 questões, PAS 2024/2025):** um padrão recorrente é testar a diferença entre **potência constante** (que gera aceleração decrescente, não constante) e **aceleração constante** — e também testar se você entende como um sistema com múltiplas etapas de conversão de energia (rampa + atrito + mola) se resolve por partes.

## Conteúdo completo orientado ao programa

### Trabalho e energia cinética: o teorema trabalho-energia

O **trabalho** de uma força mede a "transferência de energia" que ela realiza sobre um corpo ao longo de um deslocamento. O **teorema trabalho-energia** diz que o trabalho total realizado sobre um corpo é igual à variação de sua energia cinética: `W_total = ΔKE = KE_final - KE_inicial`.

### Energia potencial gravitacional e energia potencial elástica

**Energia potencial gravitacional** (`PE=mgh`) é a energia associada à posição de um corpo num campo gravitacional. **Energia potencial elástica** (`PE_elástica=½kx²`) é a energia armazenada numa mola comprimida ou esticada, proporcional ao quadrado da deformação `x`.

### Rastreando energia por etapas: um problema com rampa, atrito e mola

Quando um problema tem várias etapas (trechos com atrito, trechos sem atrito, molas), o jeito mais seguro é rastrear a energia **etapa por etapa**, não tentar uma fórmula única para o processo inteiro.

Exemplo real: uma partícula de massa `m` parte do repouso no topo de uma rampa sem atrito, altura `h₁`. Desce até o solo (energia cinética `mgh₁`, toda a energia potencial virou cinética, já que a rampa não tem atrito). Atravessa uma região rugosa de comprimento `d`, coeficiente de atrito `μ` — perde energia `μmgd` para o atrito. Sobe uma segunda rampa sem atrito até um platô de altura `h₂<h₁` (perde `mgh₂` de energia cinética, que vira potencial). No platô sem atrito, comprime uma mola.

Rastreando a energia em cada etapa:

1. No fim da primeira rampa (base): `KE₁ = mgh₁`.
2. Depois da região rugosa: `KE₂ = mgh₁ - μmgd = mg(h₁-μd)` → velocidade `v=√(2g(h₁-μd))`.
3. No platô (altura `h₂`): `KE₃ = KE₂ - mgh₂ = mg(h₁-μd-h₂) = mg(h₁-h₂-μd)`.
4. Essa `KE₃` é o que comprime a mola: `½kx² = mg(h₁-h₂-μd)`.

**Para o PAS:** cada etapa do percurso "consome" ou "adiciona" um termo de energia específico — subir consome `mgh`, atravessar região com atrito consome `μmgd`. Rastrear isso passo a passo evita erros de tentar uma fórmula "tudo de uma vez".

### Condição-limite: quando o corpo não chega a comprimir a mola

Uma pergunta clássica desse tipo de problema: sob que condição o corpo **para antes** de comprimir a mola? Isso acontece quando toda a energia cinética se esgota antes de chegar lá, ou seja, quando `KE₃ ≤ 0`: `h₁-h₂-μd ≤ 0`, ou seja, `h₁-h₂ ≤ μd`.

**Para o PAS:** condições-limite ("para que o corpo pare antes de...") sempre se resolvem igualando a zero (ou a uma desigualdade) o termo de energia relevante — aqui, a energia cinética disponível para comprimir a mola.

### Potência: taxa de transferência de energia no tempo

**Potência** é a taxa de transferência (ou conversão) de energia por unidade de tempo: `P=E/t` (potência média) ou `P=dE/dt` (instantânea). Quando a potência é **constante**, a energia cresce linearmente com o tempo (`E=Pt`), mas isso **não** significa que a velocidade cresça linearmente — como `E=KE=½mv²`, temos `v=√(2Pt/m)`, ou seja, a velocidade cresce com a **raiz quadrada** do tempo, não linearmente. Como consequência, a aceleração (`dv/dt`) **não é constante** sob potência constante — ela diminui ao longo do tempo.

Exemplo real: um carro de 1000kg, inicialmente em repouso, consome combustível a taxa constante (portanto potência constante), liberando 5000kJ por mol de octano queimado. Queimando `0,01mol`, a energia liberada é `0,01×5000kJ=50kJ=50.000J`. Toda essa energia vira energia cinética: `½(1000)v²=50.000` → `v²=100` → `v=10m/s`.

**Para o PAS:** "potência constante" **não** implica "aceleração constante" — essa é uma das trocas mais comuns e mais exploradas neste tema. Potência constante implica velocidade crescendo com `√t`, e aceleração **decrescente** ao longo do tempo.

## Diferenças que costumam ser trocadas

| Conceito A | Conceito B | Como a prova troca | Como não cair |
|---|---|---|---|
| Potência constante (v ∝ √t, aceleração decresce) | Aceleração constante (v ∝ t, MUV) | Afirma que velocidade cresce linearmente ou aceleração é constante sob potência constante | Sob potência constante, v=√(2Pt/m) — cresce com raiz de t, não linearmente |
| Energia cinética disponível para comprimir a mola (após todas as perdas) | Energia cinética inicial (sem descontar perdas) | Ignora a energia perdida no trecho com atrito ao calcular a energia que chega à mola | Rastreie a energia etapa por etapa, descontando cada perda |
| Condição-limite: energia cinética residual ≤ 0 | Condição-limite mal definida | Erra a desigualdade ou o termo que deve ser comparado a zero | Escreva a expressão da energia cinética residual e iguale/compare a zero |

## Como caiu na prova: questões comentadas

**Fonte: PAS/UEM 2025, Etapa 1, Questão 36 — rampa, atrito e mola (gabarito: 04-08 = soma 12)**

Contexto: partícula massa `m`, parte do repouso a altura `h₁`, desce rampa sem atrito, atravessa região rugosa (comprimento `d`, atrito `μ`), sobe a plataforma sem atrito de altura `h₂<h₁`, comprime mola de constante `k`.

1. "comprimento de compressão da mola não muda ao dobrar ambas as alturas `h₁` e `h₂`" — **errada**: a energia na mola é `mg(h₁-h₂-μd)`; dobrar `h₁` e `h₂` muda esse valor (a menos que `h₁=h₂`, o que não é o caso geral), então a compressão muda.
2. "energia potencial elástica armazenada na mola é `mg(h₁-h₂)`" — **errada**: falta descontar a perda por atrito; o valor correto é `mg(h₁-h₂-μd)`.
3. "velocidade da partícula imediatamente após a região rugosa é `v=√(2g(h₁-μd))`" — **correta**: exatamente o resultado da etapa 2 do rastreamento de energia acima.
4. "para a partícula parar antes de comprimir a mola, `h₁-h₂` deve ser menor ou igual a `μd`" — **correta**: é a condição-limite derivada acima.
5. "aumentar a distância `d` não altera o comprimento de compressão da mola" — **errada**: aumentar `d` aumenta a perda por atrito (`μd`), reduzindo a energia disponível e, portanto, a compressão da mola.
6. Soma das corretas: 04+08 = 12, batendo com o gabarito oficial.

**Fonte: PAS/UEM 2024, Etapa 1, Questão 20 — combustão e potência (gabarito: 01-02-04 = soma 07)**

Contexto: carro 1000kg, octano como combustível, 1mol de octano libera 5000kJ, carro parte do repouso, combustível consumido a taxa constante, toda energia vira movimento.

1. "combustão completa do octano: `2C₈H₁₈+25O₂→16CO₂+18H₂O`" — **correta**: equação balanceada corretamente (16 carbonos, 36 hidrogênios, 50 oxigênios de cada lado).
2. "velocidade do carro após queima de 0,01mol de octano é 10m/s" — **correta**: `0,01×5000kJ=50.000J=½(1000)v²` → `v=10m/s`.
3. "potência fornecida ao carro é constante" — **correta**: consequência direta de "combustível consumido a taxa constante".
4. "velocidade do carro cresce linearmente com o tempo" — **errada**: com potência constante, `v∝√t`, crescimento em raiz quadrada, não linear.
5. "aceleração do carro é constante" — **errada**: com `v∝√t`, a aceleração (`dv/dt`) diminui ao longo do tempo, não é constante.
6. Soma das corretas: 01+02+04 = 07, batendo com o gabarito oficial.

## Pegadinhas do PAS

- Confundir potência constante com aceleração constante (são conceitos diferentes: sob potência constante, a velocidade cresce com `√t`, não linearmente).
- Esquecer de descontar a energia perdida por atrito ao calcular a energia disponível numa etapa posterior do percurso.
- Errar a condição-limite de "parar antes de" um evento, sem igualar/comparar corretamente o termo de energia residual a zero.

## Como resolver questões

1. Para problemas em múltiplas etapas, rastreie a energia etapa por etapa — nunca tente uma fórmula única para o processo inteiro.
2. Para condições-limite ("para que o corpo pare antes de..."), escreva a expressão da energia residual e resolva a desigualdade/igualdade correspondente.
3. Para potência, lembre que `P` constante implica `E=Pt` (linear em `t`), mas como `E=½mv²`, a velocidade cresce com `√t`, e a aceleração **não** é constante.

## Lacunas honestas

- Este tema já tem duas questões reais comentadas (PAS 2024 e 2025), cobrindo energia em múltiplas etapas com atrito e potência/combustão. Falta um exemplo real específico só sobre forças conservativas x não conservativas (definição isolada) e sobre trabalho de uma força constante em trajetória simples.
- Falta explorar o Vestibular de Verão (2020-2025, já baixado) para este tema.

## Checklist de revisão

- [ ] Li o item do programa correspondente no Manual do Candidato.
- [ ] Sei rastrear energia etapa por etapa num percurso com múltiplas conversões (altura, atrito, mola).
- [ ] Sei escrever a condição-limite para "o corpo parar antes de" um evento.
- [ ] Sei explicar por que potência constante não implica aceleração constante.
- [ ] Resolvi as duas questões comentadas deste tema sem olhar o gabarito antes.

## Questões relacionadas

- [Resolver questões deste tema](../../provas/fisica/006_trabalho-energia-conservacao.md)

## Referências

**Manual e programa oficial**

- Manual do Candidato PAS/UEM 2026, Programa de Prova para a Etapa 1 — Física, itens 2.2.9-2.2.11.

**Provas reais usadas**

- PAS/UEM 2025, Etapa 1, Questão 36 — `Fontes Oficiais/provas-anteriores/pas25_E1.pdf` e `pas25_gabdef.pdf`.
- PAS/UEM 2024, Etapa 1, Questão 20 — `Fontes Oficiais/provas-anteriores/pas24_E1.pdf` e `pas24_gabdef.pdf`.
