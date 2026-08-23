# Fontes Oficiais

Documentos oficiais da UEM usados como fonte-mãe deste material. Baixados diretamente de `vestibular.uem.br` e `cvu.uem.br`.

## Arquivos

- `manual_candidato_pas2026.pdf` — Manual do Candidato PAS/UEM 2026 completo (inscrição, regras, sistema de pontuação e o programa de prova das 3 etapas). A seção "Programa de Prova para a Etapa 1" foi extraída e reorganizada em [`../CONTEUDO_PROGRAMATICO.md`](../CONTEUDO_PROGRAMATICO.md).
- `provas-anteriores/pasAA_E1.pdf` — caderno de prova real da Etapa 1 do ano 20AA (ex.: `pas25_E1.pdf` = prova de 2025).
- `provas-anteriores/pasAA_gabdef.pdf` — gabarito definitivo oficial do ano 20AA.
- `_extracted/*.txt` — texto extraído desses PDFs com `pdftotext -layout -enc UTF-8` (ou sem `-layout` no caso dos gabaritos — ver nota abaixo), para facilitar busca e cópia de questões reais ao escrever os temas.

## O que temos e o que falta

| Ano | Caderno de prova (E1) | Gabarito definitivo |
|---|---|---|
| 2025 | ✅ | ✅ confirmado |
| 2024 | ✅ | ✅ confirmado |
| 2023 | ✅ | ❌ não encontrado no site oficial com o padrão de URL usado |
| 2022 | ✅ | ❌ não encontrado no site oficial com o padrão de URL usado |
| 2021 | ✅ | ❌ não encontrado no site oficial com o padrão de URL usado |

Antes de usar uma questão de 2021-2023 no material, é preciso localizar o gabarito oficial correspondente (procurar em `www.cvu.uem.br` ou `vestibular.uem.br`, editais daquele ano) — sem gabarito confirmado, nenhuma questão desses anos deve entrar no banco de questões, conforme `../REGRAS_DO_MATERIAL.md`.

## Como extrair mais questões reais

Ver o passo a passo completo em `../REGRAS_DO_MATERIAL.md`, seção "Como extrair questões reais dos PDFs baixados". Resumo:

```
pdftotext -layout -enc UTF-8 "provas-anteriores/pasAA_E1.pdf" "_extracted/pasAA_E1.txt"
pdftotext -enc UTF-8 "provas-anteriores/pasAA_gabdef.pdf" "_extracted/pasAA_gabdef_raw.txt"
```

O gabarito **sem** `-layout` sai como três listas sequenciais (números das questões, respostas numéricas, códigos das alternativas corretas) que se correspondem posição a posição — é mais fácil de mapear do que a versão com `-layout`, que embaralha a tabela.

## Não versionar publicamente

Se esta pasta algum dia for publicada (ex.: GitHub Pages), os PDFs completos das provas não precisam ser versionados publicamente além do que a própria UEM já disponibiliza — a UEM os publica de forma aberta em `vestibular.uem.br`, mas o ideal é linkar para a fonte oficial em vez de redistribuir os arquivos binários.
