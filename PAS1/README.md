# PAS/UEM - Etapa 1 (1º ano do Ensino Médio)

Material de estudo da Julia para a Etapa 1 do Processo de Avaliação Seriada (PAS) da Universidade Estadual de Maringá (UEM) — 2026.

## Como usar

- **Leitor online:** abra `index.html` neste diretório (funciona offline, sem precisar de servidor — é um leitor Docsify que lê os arquivos `.md` da própria pasta).
- **Conteúdo programático oficial:** [CONTEUDO_PROGRAMATICO.md](CONTEUDO_PROGRAMATICO.md) — o que cai, matéria por matéria, direto do Manual do Candidato.
- **Como estudar com este material:** [REGRAS_DO_MATERIAL.md](REGRAS_DO_MATERIAL.md) — explica o formato de prova do PAS e como o material foi construído.
- **Banco de questões:** [PROVAS.md](PROVAS.md) — lista de todos os temas com link direto para treinar.

## O que é o PAS/UEM

O PAS é um processo seletivo alternativo da UEM, feito em **3 etapas**, uma por ano do Ensino Médio:

| Etapa | Quando | Peso no resultado final |
|---|---|---:|
| Etapa 1 | Final do 1º ano | 1 |
| Etapa 2 | Final do 2º ano | 2 |
| Etapa 3 | Final do 3º ano (+ prova de conhecimentos específicos do curso) | 2 |

Cada etapa é uma prova única, de 5 horas, com **redação** (0 a 120 pontos) e **40 questões objetivas** no formato de somatória (5 afirmações por questão, códigos 01/02/04/08/16 — ver detalhes em [REGRAS_DO_MATERIAL.md](REGRAS_DO_MATERIAL.md)), divididas em 5 áreas de 8 questões cada:

1. Língua Portuguesa (Português + Literatura)
2. Demais Linguagens (Artes, Educação Física, Língua Estrangeira)
3. Matemática
4. Ciências da Natureza (Biologia, Física, Química)
5. Ciências Humanas e Sociais Aplicadas (Filosofia, Geografia, História, Sociologia)

## Estrutura desta pasta

```
PAS1/
├── index.html                 # leitor do material (abrir no navegador)
├── README.md                  # esta página
├── CONTEUDO_PROGRAMATICO.md   # o que cai, extraído do manual oficial
├── REGRAS_DO_MATERIAL.md      # como o material foi construído e como estudar
├── TEMPLATE_TEMA.md           # modelo usado para escrever cada capítulo
├── PROVAS.md                  # índice do banco de questões
├── content-manifest.js        # lista de todas as matérias/temas (fonte da estrutura do site)
├── temas/<materia>/*.md       # teoria de cada tema, por matéria
├── provas/<materia>/*.md      # banco de questões de cada tema, por matéria
├── Fontes Oficiais/           # manual do candidato + provas anteriores baixadas da UEM
└── scripts/generate-content.js # gera o esqueleto de temas/provas a partir do manifesto
```

## Status do material

A estrutura completa (todas as matérias e temas do programa oficial da Etapa 1) já está criada e navegável pelo menu lateral. O conteúdo denso (teoria completa + questões reais comentadas) está sendo preenchido aos poucos, matéria por matéria — capítulos ainda não desenvolvidos mostram um aviso "conteúdo em desenvolvimento" no topo.

**Já completo, como referência de padrão:** Português > [Compreensão e interpretação de textos](temas/portugues/001_compreensao-interpretacao-textos.md), com banco de questões reais do PAS/UEM 2025.
