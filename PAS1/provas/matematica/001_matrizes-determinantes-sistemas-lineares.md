# Questões - Matrizes, determinantes e sistemas lineares

> Marque as afirmações que você julga corretas e clique em **Corrigir**. Ver o formato de somatória em `REGRAS_DO_MATERIAL.md`.

**Itens neste banco:** 7 questões reais (PAS/UEM 2022, 2023, 2024, 2025 e Vestibular de Verão UEM 2025), com gabarito definitivo confirmado. Todas as contas foram conferidas manualmente antes de publicar (não é só o gabarito oficial "de olhos fechados").

## Fontes reais usadas neste banco

- PAS/UEM, Etapa 1, 2025, Questões 27 e 29. Gabarito definitivo publicado pela Comissão Central do Vestibular Unificado da UEM.
- PAS/UEM, Etapa 1, 2024, Questão 24. Gabarito definitivo publicado pela Comissão Central do Vestibular Unificado da UEM.
- PAS/UEM, Etapa 1, 2023, Questões 18 e 23 (Conhecimentos Gerais). Gabarito definitivo publicado pela Comissão Central do Vestibular Unificado da UEM.
- PAS/UEM, Etapa 1, 2022, Questão 24 (Conhecimentos Gerais). Gabarito definitivo publicado pela Comissão Central do Vestibular Unificado da UEM.
- Vestibular de Verão UEM, 2025, Questão 37. Gabarito definitivo publicado pela Comissão Central do Vestibular Unificado da UEM.

---

<div class="quiz-card" data-correct="01,02,04,16">
<p class="quiz-source">PAS/UEM 2025, Etapa 1, Questão 29</p>
<p><strong>1. Sejam A e B matrizes quadradas de ordem n &gt; 1, tais que AB = A e BA = B. Nessas condições, assinale o que for correto.</strong></p>
<div class="quiz-options">
<label class="quiz-option"><input type="checkbox" value="01"> 01) A³ = A.</label>
<label class="quiz-option"><input type="checkbox" value="02"> 02) AB⁴A = A.</label>
<label class="quiz-option"><input type="checkbox" value="04"> 04) ((A+B)ᵗ)² = 2(A+B)ᵗ.</label>
<label class="quiz-option"><input type="checkbox" value="08"> 08) (A+B)² = A² + 2AB + B².</label>
<label class="quiz-option"><input type="checkbox" value="16"> 16) (BA)² = B.</label>
</div>
<button class="quiz-check" type="button">Corrigir</button>
<div class="quiz-feedback" hidden>
<p><strong>Gabarito oficial: 01-02-04-16 (soma 23).</strong> Fonte: PAS/UEM 2025, Etapa 1, Questão 29.</p>
<ul class="quiz-explain">
<li><strong>01. Correta.</strong> De AB=A: A² = A·A = (AB)·A = A·(BA) = A·B = AB = A. Logo A é idempotente (A²=A), e A³=A²·A=A·A=A²=A.</li>
<li><strong>02. Correta.</strong> De forma análoga, B²=B (idempotente), logo B⁴=(B²)²=B²=B. Então AB⁴A=ABA=(AB)A=A·A=A²=A.</li>
<li><strong>04. Correta.</strong> Como A²=A, B²=B, AB=A, BA=B: (A+B)²=A²+AB+BA+B²=A+A+B+B=2(A+B). Transpondo os dois lados dessa igualdade e usando (M²)ᵗ=(Mᵗ)², chega-se a ((A+B)ᵗ)²=2(A+B)ᵗ.</li>
<li><strong>08. Errada.</strong> A identidade correta é (A+B)²=2A+2B (item acima), enquanto A²+2AB+B²=A+2A+B=3A+B — só seriam iguais se A=B, o que não é dado.</li>
<li><strong>16. Correta.</strong> BA=B, logo (BA)²=B²=B (já que B é idempotente).</li>
</ul>
<p><strong>Pegadinha principal:</strong> a afirmação 08 usa o "quadrado da soma" como se fosse números comuns — mas em álgebra matricial, (A+B)²=A²+AB+BA+B² (sem poder juntar AB+BA=2AB, porque AB e BA podem ser diferentes).</p>
</div>
</div>

<div class="quiz-card" data-correct="04,08,16">
<p class="quiz-source">PAS/UEM 2025, Etapa 1, Questão 27</p>
<p><strong>2. Uma fábrica embala peças automotivas em dois tipos de caixas: uma com capacidade de 96kg e outra com capacidade de 120kg. Essas embalagens são distribuídas às lojas varejistas em dois tipos de caminhão: o caminhão de tipo I tem capacidade máxima de 3 toneladas e 27 caixas; o caminhão de tipo II tem capacidade máxima de 14 toneladas e 120 caixas. Com base nessas informações, e assuntos correlatos, assinale o que for correto.</strong></p>
<div class="quiz-options">
<label class="quiz-option"><input type="checkbox" value="01"> 01) Se x e y são soluções inteiras positivas do sistema linear {x+y=14, 96x+120y=1.400}, então a capacidade máxima de um caminhão de tipo II é atingida.</label>
<label class="quiz-option"><input type="checkbox" value="02"> 02) Se x e y são soluções inteiras positivas do sistema linear {x+y=27, 96x+120y=3}, então a capacidade máxima de um caminhão de tipo I é atingida.</label>
<label class="quiz-option"><input type="checkbox" value="04"> 04) Se x e y são soluções inteiras positivas do sistema linear {x+y=27, 96x+120y=3.000}, então a capacidade máxima de um caminhão de tipo I é atingida.</label>
<label class="quiz-option"><input type="checkbox" value="08"> 08) Se um caminhão do tipo I transporta 20 caixas de 120kg e 7 caixas de 96kg, então ele estará transportando sua capacidade máxima.</label>
<label class="quiz-option"><input type="checkbox" value="16"> 16) Se um caminhão do tipo II transporta 103 caixas de 120kg e 17 caixas de 96kg, então ele estará transportando sua capacidade máxima.</label>
</div>
<button class="quiz-check" type="button">Corrigir</button>
<div class="quiz-feedback" hidden>
<p><strong>Gabarito oficial: 04-08-16 (soma 28).</strong> Fonte: PAS/UEM 2025, Etapa 1, Questão 27.</p>
<ul class="quiz-explain">
<li><strong>01. Errada.</strong> x+y=14 e peso 1.400kg não correspondem a nenhum limite do tipo II (120 caixas / 14.000kg) — escala completamente diferente.</li>
<li><strong>02. Errada.</strong> Um peso total de apenas 3kg para 27 caixas é impossível (nenhuma caixa pesa perto disso) — sistema sem solução válida no contexto.</li>
<li><strong>04. Correta.</strong> Resolvendo x+y=27 e 96x+120y=3.000: substituindo x=27-y, 96(27-y)+120y=3.000 → 2.592+24y=3.000 → y=17, x=10 (inteiros positivos). Peso = 96(10)+120(17)=960+2.040=3.000kg = exatamente 3 toneladas, e 27 caixas = exatamente o máximo. Capacidade máxima do tipo I atingida.</li>
<li><strong>08. Errada.</strong> 20 caixas de 120kg + 7 caixas de 96kg = 27 caixas (bate com o máximo), mas o peso é 20×120+7×96=2.400+672=3.072kg — <strong>excede</strong> os 3.000kg (3 toneladas) permitidos. Carga inválida, não é "capacidade máxima atingida" corretamente.</li>
<li><strong>16. Correta.</strong> 103 caixas de 120kg + 17 caixas de 96kg = 120 caixas (exatamente o máximo do tipo II). Peso = 103×120+17×96=12.360+1.632=13.992kg, dentro do limite de 14.000kg — carga válida que atinge o limite de caixas (a restrição que "trava" primeiro).</li>
</ul>
<p><strong>Pegadinha principal:</strong> "atingir a capacidade máxima" não exige que TODAS as restrições (peso e número de caixas) estejam exatamente no limite ao mesmo tempo — basta que uma delas seja atingida sem violar a outra (ver afirmação 16). Já a afirmação 08 mostra o oposto: bater o limite de caixas violando o limite de peso não conta como "capacidade máxima atingida" corretamente.</p>
</div>
</div>

<div class="quiz-card" data-correct="01,08,16">
<p class="quiz-source">PAS/UEM 2024, Etapa 1, Questão 24</p>
<p><strong>3. Considere o sistema linear dado na forma matricial AX = B, em que A = [[1, 2, 6], [3, -1, 1]], X = [x, y, z] e B = [0, 3]. Assinale o que for correto.</strong></p>
<div class="quiz-options">
<label class="quiz-option"><input type="checkbox" value="01"> 01) A terna ordenada (2, 2, -1) é uma solução desse sistema.</label>
<label class="quiz-option"><input type="checkbox" value="02"> 02) O sistema é um sistema linear homogêneo.</label>
<label class="quiz-option"><input type="checkbox" value="04"> 04) O sistema possui apenas uma solução.</label>
<label class="quiz-option"><input type="checkbox" value="08"> 08) O sistema possui duas equações e três incógnitas.</label>
<label class="quiz-option"><input type="checkbox" value="16"> 16) O sistema é possível e indeterminado.</label>
</div>
<button class="quiz-check" type="button">Corrigir</button>
<div class="quiz-feedback" hidden>
<p><strong>Gabarito oficial: 01-08-16 (soma 25).</strong> Fonte: PAS/UEM 2024, Etapa 1, Questão 24.</p>
<ul class="quiz-explain">
<li><strong>01. Correta.</strong> O sistema expandido é x+2y+6z=0 e 3x-y+z=3. Testando (2,2,-1): 2+2(2)+6(-1)=2+4-6=0 ✓; 3(2)-2+(-1)=6-2-1=3 ✓. É solução.</li>
<li><strong>02. Errada.</strong> Sistema homogêneo exige B=0 em todas as posições; aqui B=[0,3], com um termo diferente de zero.</li>
<li><strong>04. Errada.</strong> Com 2 equações independentes para 3 incógnitas, sobra uma variável livre — o sistema tem infinitas soluções, não uma só.</li>
<li><strong>08. Correta.</strong> Direto da forma matricial: A é 2×3, logo 2 equações e 3 incógnitas.</li>
<li><strong>16. Correta.</strong> O sistema é consistente (tem solução, item 01) e tem infinitas soluções (item 04) — por definição, possível e indeterminado.</li>
</ul>
<p><strong>Pegadinha principal:</strong> confirmar que uma terna específica é solução (01) não significa que essa seja a <em>única</em> solução (04) — com mais incógnitas do que equações independentes, encontrar uma solução geralmente indica que existem infinitas outras.</p>
</div>
</div>

<div class="quiz-card" data-correct="04,08,16">
<p class="quiz-source">Vestibular de Verão UEM 2025, Questão 37</p>
<p><strong>4. Considere o sistema linear {2x + y - z = 4, x - 3y + 2z = 5, -2x - y + z = 1}. Assinale o que for correto.</strong></p>
<div class="quiz-options">
<label class="quiz-option"><input type="checkbox" value="01"> 01) Esse sistema possui infinitas soluções.</label>
<label class="quiz-option"><input type="checkbox" value="02"> 02) x = 2, y = 0 e z = 0 é uma solução para esse sistema linear.</label>
<label class="quiz-option"><input type="checkbox" value="04"> 04) Restringindo-se as equações do sistema ao plano cartesiano ao considerarmos z identicamente nulo, a primeira e a terceira equações do sistema passam a representar retas paralelas.</label>
<label class="quiz-option"><input type="checkbox" value="08"> 08) O sistema não possui solução que satisfaça a condição y = 1.</label>
<label class="quiz-option"><input type="checkbox" value="16"> 16) O determinante da matriz 3 × 3 (formada pelos coeficientes das incógnitas desse sistema linear) é nulo.</label>
</div>
<button class="quiz-check" type="button">Corrigir</button>
<div class="quiz-feedback" hidden>
<p><strong>Gabarito oficial: 04-08-16 (soma 28).</strong> Fonte: Vestibular de Verão UEM 2025, Questão 37.</p>
<ul class="quiz-explain">
<li><strong>01. Errada.</strong> Somando a 1ª e a 3ª equação: (2x-2x)+(y-y)+(-z+z)=4+1 → 0=5, uma contradição. O sistema é <strong>impossível</strong> (nenhuma solução), não indeterminado.</li>
<li><strong>02. Errada.</strong> Testando (2,0,0) na 2ª equação: 2-0+0=2, mas deveria ser 5. Não satisfaz.</li>
<li><strong>04. Correta.</strong> Com z=0: 1ª equação vira 2x+y=4; 3ª vira -2x-y=1, ou seja, 2x+y=-1. Mesma inclinação (mesmos coeficientes de x e y), interceptos diferentes: retas paralelas.</li>
<li><strong>08. Correta.</strong> Como o sistema não tem solução alguma (item 01), em particular não tem nenhuma solução com y=1 — é um caso específico de "nenhuma solução".</li>
<li><strong>16. Correta.</strong> Os coeficientes da 3ª equação (-2,-1,1) são exatamente -1× os coeficientes da 1ª equação (2,1,-1) — linhas linearmente dependentes, logo determinante nulo.</li>
</ul>
<p><strong>Pegadinha principal:</strong> a afirmação 01 tenta fazer parecer que "não ter solução única" significa "ter infinitas soluções" — mas a soma das equações revela uma contradição, o que classifica o sistema como impossível, não indeterminado.</p>
</div>
</div>

<div class="quiz-card" data-correct="01,08,16">
<p class="quiz-source">PAS/UEM 2022, Etapa 1, Questão 24 (Conhecimentos Gerais)</p>
<p><strong>5. Em relação à matriz A_{m×n} = (a_ij), em que a_ij = i − j, com m, n, i, j = 1, 2, 3, 4, ..., assinale o que for correto.</strong></p>
<div class="quiz-options">
<label class="quiz-option"><input type="checkbox" value="01"> 01) Se m &gt; n, então A não é uma matriz quadrada.</label>
<label class="quiz-option"><input type="checkbox" value="02"> 02) Se m = 3 e n = 5, então a matriz A tem 15 entradas não nulas.</label>
<label class="quiz-option"><input type="checkbox" value="04"> 04) Se m = n, então a matriz A é a matriz identidade.</label>
<label class="quiz-option"><input type="checkbox" value="08"> 08) Se m = n = 2, então a matriz A é inversível.</label>
<label class="quiz-option"><input type="checkbox" value="16"> 16) Se A é uma matriz de ordem 3, então todos os elementos acima da diagonal principal são números inteiros negativos.</label>
</div>
<button class="quiz-check" type="button">Corrigir</button>
<div class="quiz-feedback" hidden>
<p><strong>Gabarito oficial: 01-08-16 (soma 25).</strong> Fonte: PAS/UEM, Etapa 1, 2022, Questão 24.</p>
<ul class="quiz-explain">
<li><strong>01. Correta.</strong> Matriz quadrada exige número de linhas igual ao número de colunas (m=n); se m&gt;n, não pode ser quadrada.</li>
<li><strong>02. Errada.</strong> Matriz 3×5 tem 15 entradas totais, mas as entradas com i=j (i=j=1,2,3) valem zero — restam 12 entradas não nulas, não 15.</li>
<li><strong>04. Errada.</strong> Quando m=n, a diagonal principal (i=j) vale sempre zero, não 1 — logo A não é a matriz identidade (é, na verdade, antissimétrica).</li>
<li><strong>08. Correta.</strong> Para m=n=2: A = [[0,-1],[1,0]]. Determinante = 0×0-(-1×1)=1≠0, logo A é inversível.</li>
<li><strong>16. Correta.</strong> Elementos acima da diagonal principal têm j&gt;i, logo a_ij=i-j&lt;0 — são sempre inteiros negativos.</li>
</ul>
<p><strong>Pegadinha principal:</strong> a afirmação 04 tenta associar "m=n" (matriz quadrada) à matriz identidade, mas a regra a_ij=i-j força a diagonal principal a ser sempre zero, o oposto da identidade (diagonal 1).</p>
</div>
</div>

<div class="quiz-card" data-correct="02,04,16">
<p class="quiz-source">PAS/UEM, Etapa 1, 2023, Questão 18 (Conhecimentos Gerais)</p>
<p><strong>6. Considere dois movimentos, 1 e 2, do centro de massa de um determinado corpo em uma trajetória retilínea. O comprimento é expresso em metros, e o tempo, em segundos. As posições dos respectivos movimentos em função do tempo, x₁(t) e x₂(t), são colocadas na seguinte equação matricial: X = M.C, em que X = (x₁(t), x₂(t)), M = [[1, 2], [1, 4]] e C = (1, t). Assinale o que for correto.</strong></p>
<div class="quiz-options">
<label class="quiz-option"><input type="checkbox" value="01"> 01) No instante inicial dos movimentos 1 e 2, t = 0s, o corpo está na origem do sistema de coordenadas.</label>
<label class="quiz-option"><input type="checkbox" value="02"> 02) No movimento 1, o corpo levará 2s para percorrer 4m.</label>
<label class="quiz-option"><input type="checkbox" value="04"> 04) O determinante da matriz transposta de M é igual a 2.</label>
<label class="quiz-option"><input type="checkbox" value="08"> 08) No movimento 2, a velocidade do corpo é de 2m/s.</label>
<label class="quiz-option"><input type="checkbox" value="16"> 16) A velocidade do movimento 2 é o dobro da velocidade do movimento 1.</label>
</div>
<button class="quiz-check" type="button">Corrigir</button>
<div class="quiz-feedback" hidden>
<p><strong>Gabarito oficial: 02-04-16 (soma 22).</strong> Fonte: PAS/UEM, Etapa 1, 2023, Questão 18.</p>
<ul class="quiz-explain">
<li><strong>01. Errada.</strong> Multiplicando X=M.C: x₁(t)=1+2t e x₂(t)=1+4t. Em t=0, x₁=1 e x₂=1 — não é a origem (0).</li>
<li><strong>02. Correta.</strong> x₁(t)-x₁(0)=2t; para percorrer 4m, 2t=4 → t=2s.</li>
<li><strong>04. Correta.</strong> det(M)=1×4-2×1=2; como det(Mᵀ)=det(M), o determinante da transposta também é 2.</li>
<li><strong>08. Errada.</strong> v₂=dx₂/dt=4m/s, não 2m/s.</li>
<li><strong>16. Correta.</strong> v₁=2m/s e v₂=4m/s; de fato v₂=2×v₁.</li>
</ul>
<p><strong>Pegadinha principal:</strong> a afirmação 01 ignora o termo constante (1) em ambas as equações de posição — em t=0 o corpo já parte de x=1, não da origem.</p>
</div>
</div>

<div class="quiz-card" data-correct="04,08,16">
<p class="quiz-source">PAS/UEM, Etapa 1, 2023, Questão 23 (Conhecimentos Gerais)</p>
<p><strong>7. Considere o sistema linear S = {x+y+z=8, 4x-4y+2z=0}. Considere, também, a matriz A, que é a matriz dos coeficientes de S, e a matriz B = [[1,2,3],[1,2,3],[1,2,3]]. Assinale o que for correto.</strong></p>
<div class="quiz-options">
<label class="quiz-option"><input type="checkbox" value="01"> 01) O sistema S é possível e determinado com solução (1, 3, 4).</label>
<label class="quiz-option"><input type="checkbox" value="02"> 02) A soma das matrizes A e B é uma matriz de ordem 3.</label>
<label class="quiz-option"><input type="checkbox" value="04"> 04) O produto AB é uma matriz com duas linhas e três colunas.</label>
<label class="quiz-option"><input type="checkbox" value="08"> 08) O sistema homogêneo associado à matriz B possui infinitas soluções.</label>
<label class="quiz-option"><input type="checkbox" value="16"> 16) O sistema S₁ = {3x-y+2z=8, x-y+½z=0} é equivalente ao sistema S.</label>
</div>
<button class="quiz-check" type="button">Corrigir</button>
<div class="quiz-feedback" hidden>
<p><strong>Gabarito oficial: 04-08-16 (soma 28).</strong> Fonte: PAS/UEM, Etapa 1, 2023, Questão 23.</p>
<ul class="quiz-explain">
<li><strong>01. Errada.</strong> (1,3,4) de fato satisfaz as duas equações, mas o sistema tem 2 equações e 3 incógnitas — é possível, porém INDETERMINADO (infinitas soluções), não determinado.</li>
<li><strong>02. Errada.</strong> A é 2×3 e B é 3×3 — dimensões diferentes, a soma A+B não está definida.</li>
<li><strong>04. Correta.</strong> A(2×3)·B(3×3) resulta em uma matriz 2×3 (linhas de A por colunas de B).</li>
<li><strong>08. Correta.</strong> As três linhas de B são idênticas (posto 1), logo o sistema homogêneo Bx=0 tem posto menor que o número de incógnitas — infinitas soluções.</li>
<li><strong>16. Correta.</strong> S₁ é obtido de S por combinações lineares válidas: (3x-y+2z=8) = 1×(x+y+z=8) + 0,5×(4x-4y+2z=0); e (x-y+0,5z=0) = 0,25×(4x-4y+2z=0) — operações reversíveis que preservam o conjunto-solução.</li>
</ul>
<p><strong>Pegadinha principal:</strong> a afirmação 01 confunde "ter uma solução válida" com "ser determinado" — um sistema com mais incógnitas que equações independentes tem infinitas soluções, mesmo que uma delas seja facilmente verificável.</p>
</div>
</div>

## Tema relacionado

- [Voltar para a teoria deste tema](../../temas/matematica/001_matrizes-determinantes-sistemas-lineares.md)
