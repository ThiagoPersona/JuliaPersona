# Fontes Oficiais

Documentos oficiais da UEM usados como fonte-mãe deste material. Baixados diretamente de `vestibular.uem.br` e `cvu.uem.br`.

## Arquivos

- `manual_candidato_pas2026.pdf` — Manual do Candidato PAS/UEM 2026 completo (inscrição, regras, sistema de pontuação e o programa de prova das 3 etapas). A seção "Programa de Prova para a Etapa 1" foi extraída e reorganizada em [`../CONTEUDO_PROGRAMATICO.md`](../CONTEUDO_PROGRAMATICO.md).
- `provas-anteriores/pasAA_E1.pdf` — caderno de prova real da Etapa 1 do PAS, ano 20AA (ex.: `pas25_E1.pdf` = PAS de 2025).
- `provas-anteriores/pasAA_gabdef.pdf` — gabarito definitivo oficial do PAS, ano 20AA.
- `provas-anteriores-vestibular/veAA_P1.pdf` — caderno de prova real do Vestibular de Verão, ano 20AA (ex.: `ve25_P1.pdf` = Vestibular de Verão de 2025).
- `provas-anteriores-vestibular/veAA_gabdef.pdf` — gabarito definitivo oficial do Vestibular de Verão, ano 20AA.
- `_extracted/*.txt` — texto extraído desses PDFs com `pdftotext`, para facilitar busca e cópia de questões reais ao escrever os temas (ver método completo em `../REGRAS_DO_MATERIAL.md`).

O Vestibular de Verão é a prova principal da UEM (todo o Ensino Médio, feita ao final do 3º ano) — cobre conteúdo mais amplo que o PAS Etapa 1, mas usa o **mesmo formato de somatória** e a mesma banca (CVU/UEM), então questões dele que batem com o nível/conteúdo da Etapa 1 são fonte válida e de peso equivalente ao PAS (ver hierarquia de fontes em `../REGRAS_DO_MATERIAL.md`).

## O que temos e o que falta

### PAS

| Ano | Caderno de prova (E1) | Gabarito definitivo |
|---|---|---|
| 2025 | ✅ | ✅ confirmado |
| 2024 | ✅ | ✅ confirmado |
| 2023 | ✅ | ❌ não encontrado no site oficial com o padrão de URL usado |
| 2022 | ✅ | ❌ não encontrado no site oficial com o padrão de URL usado |
| 2021 | ✅ | ❌ não encontrado no site oficial com o padrão de URL usado |

### Vestibular de Verão

| Ano | Caderno de prova (P1) | Gabarito definitivo |
|---|---|---|
| 2025 | ✅ | ✅ confirmado |
| 2024 | ✅ | ✅ confirmado |
| 2023 | ✅ | ✅ confirmado |
| 2022 | ✅ | ✅ confirmado |
| 2021 | ✅ | ✅ confirmado |
| 2020 | ✅ | ✅ confirmado |

Antes de usar uma questão de PAS 2021-2023 no material, é preciso localizar o gabarito oficial correspondente (procurar em `www.cvu.uem.br` ou `vestibular.uem.br`, editais daquele ano) — sem gabarito confirmado, nenhuma questão desses anos deve entrar no banco de questões, conforme `../REGRAS_DO_MATERIAL.md`. Os 6 anos do Vestibular de Verão já têm gabarito confirmado e estão liberados para uso.

## Como extrair mais questões reais

Ver o passo a passo completo em `../REGRAS_DO_MATERIAL.md`, seção "Como extrair questões reais dos PDFs baixados". Resumo:

```
pdftotext -layout -enc UTF-8 "provas-anteriores/pasAA_E1.pdf" "_extracted/pasAA_E1.txt"
pdftotext -enc UTF-8 "provas-anteriores/pasAA_gabdef.pdf" "_extracted/pasAA_gabdef_raw.txt"
```

O gabarito do PAS **sem** `-layout` sai como três listas sequenciais (números das questões, respostas numéricas, códigos das alternativas corretas) que se correspondem posição a posição.

**Gabaritos do Vestibular de Verão têm fonte sem mapeamento de texto** (`pdftotext` retorna caracteres ilegíveis, com ou sem `-layout`). Para esses, renderizar como imagem e ler visualmente:

```
pdftoppm -png -r 200 "provas-anteriores-vestibular/veAA_gabdef.pdf" "veAA_gab"
```

(poppler-utils instalado via winget, pacote `oschwartz10612.Poppler`; se não estiver no PATH da sessão atual, o executável fica em `%LOCALAPPDATA%\Microsoft\WinGet\Packages\oschwartz10612.Poppler_*\poppler-*\Library\bin\`).

## Não versionar publicamente

Os PDFs completos das provas (`.pdf`) e os textos brutos extraídos (`_extracted/*.txt`) **não são versionados no git** deste projeto (ver `.gitignore` na raiz) — eles reproduzem o conteúdo integral das provas, e o ideal é linkar para a fonte oficial em vez de redistribuir esse material. O que é publicado são os resumos, comentários e questões curadas nos arquivos de `temas/` e `provas/`.
