# Questões - Estatística e análise de dados

> Marque as afirmações que você julga corretas e clique em **Corrigir**. Ver o formato de somatória em `REGRAS_DO_MATERIAL.md`.

**Itens neste banco:** 2 questões oficiais do PAS/UEM (2023 e 2025), Etapa 1, com gabarito definitivo confirmado. Contas conferidas manualmente antes de publicar.

## Fontes reais usadas neste banco

- PAS/UEM, Etapa 1, 2025, Questão 32. Gabarito definitivo publicado pela Comissão Central do Vestibular Unificado da UEM.
- PAS/UEM, Etapa 1, 2023, Questão 24 (Conhecimentos Gerais). Gabarito definitivo publicado pela Comissão Central do Vestibular Unificado da UEM.

---

### Tabela-base

Notas de uma turma na disciplina de Matemática, em três avaliações de um trimestre:

| Alunos | Avaliação 1 | Avaliação 2 | Avaliação 3 |
|---|---|---|---|
| Aluno A | 56 | 66 | 70 |
| Aluno B | 87 | 90 | 93 |
| Aluno C | 64 | 56 | 80 |
| Aluno D | 35 | 56 | 91 |
| Aluno E | 93 | 35 | 56 |

---

<div class="quiz-card" data-correct="01,02">
<p class="quiz-source">PAS/UEM 2025, Etapa 1, Questão 32</p>
<p><strong>1. Com base nessa tabela e sobre os conceitos de média, moda, mediana, variância e desvio padrão, assinale o que for correto.</strong></p>
<div class="quiz-options">
<label class="quiz-option"><input type="checkbox" value="01"> 01) A variância no conjunto das notas do aluno A é igual a 104/3.</label>
<label class="quiz-option"><input type="checkbox" value="02"> 02) O desvio padrão no conjunto das notas do aluno A é menor que 6.</label>
<label class="quiz-option"><input type="checkbox" value="04"> 04) A média aritmética da avaliação 1 é menor que a moda da avaliação 2.</label>
<label class="quiz-option"><input type="checkbox" value="08"> 08) A mediana da avaliação 3 é 78.</label>
<label class="quiz-option"><input type="checkbox" value="16"> 16) O desvio padrão de um conjunto de dados é sempre maior que a variância desse mesmo conjunto.</label>
</div>
<button class="quiz-check" type="button">Corrigir</button>
<div class="quiz-feedback" hidden>
<p><strong>Gabarito oficial: 01-02 (soma 03).</strong> Fonte: PAS/UEM 2025, Etapa 1, Questão 32.</p>
<ul class="quiz-explain">
<li><strong>01. Correta.</strong> Notas do aluno A: 56, 66, 70. Média = 64. Desvios: −8, 2, 6. Quadrados: 64, 4, 36. Soma = 104. Variância = 104/3.</li>
<li><strong>02. Correta.</strong> Desvio padrão = √(104/3) ≈ 5,89, que é menor que 6.</li>
<li><strong>04. Errada.</strong> Avaliação 1 (56,87,64,35,93): média = 335/5 = 67. Avaliação 2 (66,90,56,56,35): moda = 56 (repete). 67 &lt; 56 é falso.</li>
<li><strong>08. Errada.</strong> Avaliação 3 (70,93,80,91,56) ordenada: 56,70,80,91,93. Mediana (valor central) = 80, não 78.</li>
<li><strong>16. Errada.</strong> Só é verdade quando a variância é menor que 1. Aqui a variância (≈34,67) é maior que 1, e o desvio padrão (≈5,89) é <em>menor</em> que ela — o oposto do afirmado.</li>
</ul>
<p><strong>Pegadinha principal:</strong> a afirmação 16 generaliza uma relação entre desvio padrão e variância que só vale para variância menor que 1 — neste caso concreto (variância ≈34,67), a relação é o oposto do afirmado.</p>
</div>
</div>

<div class="quiz-card" data-correct="04,08">
<p class="quiz-source">PAS/UEM, Etapa 1, 2023, Questão 24 (Conhecimentos Gerais)</p>
<p><strong>2. Considere o gráfico de barras do consumo de água (em m³) de um pequeno edifício ao longo de um ano: janeiro=3, fevereiro=6, março=6, abril=6, maio=12, junho=12, julho=12, agosto=12, setembro=6, outubro=6, novembro=6, dezembro=9. Com base nesse gráfico, assinale o que for correto.</strong></p>
<div class="quiz-options">
<label class="quiz-option"><input type="checkbox" value="01"> 01) O consumo médio semestral é de 45m³.</label>
<label class="quiz-option"><input type="checkbox" value="02"> 02) A frequência relativa do maior consumo é de 30%.</label>
<label class="quiz-option"><input type="checkbox" value="04"> 04) A moda do consumo mensal é 6m³.</label>
<label class="quiz-option"><input type="checkbox" value="08"> 08) A variância do consumo é de 9,5m³.</label>
<label class="quiz-option"><input type="checkbox" value="16"> 16) A média de consumo é 9m³.</label>
</div>
<button class="quiz-check" type="button">Corrigir</button>
<div class="quiz-feedback" hidden>
<p><strong>Gabarito oficial: 04-08 (soma 12).</strong> Fonte: PAS/UEM, Etapa 1, 2023, Questão 24.</p>
<ul class="quiz-explain">
<li><strong>01. Errada.</strong> A soma do primeiro semestre é 3+6+6+6+12+12=45, mas isso é a SOMA, não a MÉDIA (que seria 45÷6=7,5).</li>
<li><strong>02. Errada.</strong> O maior valor (12m³) ocorre em 4 dos 12 meses: 4/12≈33,3%, não 30%.</li>
<li><strong>04. Correta.</strong> O valor 6 aparece 6 vezes (fev,mar,abr,set,out,nov), mais que qualquer outro valor — é a moda.</li>
<li><strong>08. Correta.</strong> Soma total=96; média=96/12=8. Soma dos quadrados dos desvios: (3−8)²+6×(6−8)²+4×(12−8)²+(9−8)²=25+24+64+1=114; variância=114/12=9,5.</li>
<li><strong>16. Errada.</strong> A média é 96/12=8m³, não 9m³.</li>
</ul>
<p><strong>Pegadinha principal:</strong> a afirmação 01 confunde a SOMA do semestre (45) com a MÉDIA (que seria 7,5) — sempre confira se "médio" está sendo calculado como média de fato, ou apenas somado.</p>
</div>
</div>

## Tema relacionado

- [Voltar para a teoria deste tema](../../temas/matematica/004_estatistica-analise-dados.md)
