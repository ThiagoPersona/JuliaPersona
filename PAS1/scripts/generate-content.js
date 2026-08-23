const fs = require("node:fs");
const path = require("node:path");

const { areas, chapterGroups, getAllChapters, buildSidebarMarkdown } = require("../content-manifest");

const root = path.resolve(__dirname, "..");

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function writeIfMissingOrSkeleton(filePath, content, marker) {
  const full = path.join(root, filePath);
  if (fs.existsSync(full)) {
    const existing = fs.readFileSync(full, "utf8");
    if (!existing.includes(marker)) {
      return false; // arquivo já foi desenvolvido a mão - não sobrescrever
    }
  }
  ensureDir(full);
  fs.writeFileSync(full, content, "utf8");
  return true;
}

const SKELETON_MARKER = "<!-- pas1-skeleton -->";

function buildTemaSkeleton(chapterItem) {
  const itemsList = chapterItem.editalItems.map((item) => `- ${item}`).join("\n");
  const isRedacao = chapterItem.groupId === "redacao";
  const questoesSection = isRedacao
    ? `## Prática\n\nRedação é avaliada por gênero textual escrito (0 a 120 pontos), não por questão de somatória. A prática deste tema é escrever o gênero e revisar contra os critérios oficiais de correção do PAS (ver o manual do candidato).`
    : `## Questões\n\n- [Abrir banco de questões deste tema](../../provas/${chapterItem.groupId}/${path.basename(chapterItem.themePath)})`;
  return `${SKELETON_MARKER}
# ${chapterItem.label}

> Conteúdo em desenvolvimento. Este capítulo já está no menu e no roteiro oficial do PAS/UEM 2026, Etapa 1 (${chapterItem.editalMapping}), mas o texto denso (teoria completa, tabelas de diferenças, pegadinhas e questão comentada) ainda não foi escrito. Ver \`REGRAS_DO_MATERIAL.md\` e \`TEMPLATE_TEMA.md\` para o padrão exigido antes de marcar este tema como pronto.

## O que o programa oficial cobre aqui

${itemsList}

## Prioridade sugerida

Prioridade: **${chapterItem.priority}** (revisar depois de mapear questões reais para confirmar).

${questoesSection}

## Referências

- Manual do Candidato PAS/UEM 2026, Programa de Prova para a Etapa 1 — ${chapterItem.editalMapping}.
`;
}

function buildProvasSkeleton(chapterItem) {
  return `${SKELETON_MARKER}
# Questões - ${chapterItem.title}

> Banco de questões em construção. Quando publicadas, as questões seguem o formato oficial de somatória do PAS/UEM (5 afirmações 01/02/04/08/16, correção automática com pontuação parcial) — ver \`REGRAS_DO_MATERIAL.md\`.

Nenhuma questão publicada ainda para este tema.

## Fontes disponíveis para extrair questões reais

- Provas da Etapa 1 baixadas em \`Fontes Oficiais/provas-anteriores/\` (2021 a 2025).
- Gabarito definitivo confirmado disponível localmente para as provas de 2024 e 2025.
- Ver o passo a passo de extração em \`REGRAS_DO_MATERIAL.md\`, seção "Como extrair questões reais dos PDFs baixados".

## Tema relacionado

- [Voltar para a teoria deste tema](../../temas/${chapterItem.groupId}/${path.basename(chapterItem.themePath)})
`;
}

function generateChapterFiles() {
  let created = 0;
  let skipped = 0;
  getAllChapters().forEach((chapterItem) => {
    const temaOk = writeIfMissingOrSkeleton(chapterItem.themePath, buildTemaSkeleton(chapterItem), SKELETON_MARKER);
    if (temaOk) created += 1; else skipped += 1;

    // Redação é avaliada por gênero textual (escrita), não por questão de somatória.
    if (chapterItem.groupId === "redacao") return;
    const provaOk = writeIfMissingOrSkeleton(chapterItem.questionPath, buildProvasSkeleton(chapterItem), SKELETON_MARKER);
    if (provaOk) created += 1; else skipped += 1;
  });
  console.log(`Capítulos: ${created} arquivo(s) gerado(s)/atualizado(s), ${skipped} preservado(s) (já desenvolvidos).`);
}

function generateSidebar() {
  fs.writeFileSync(path.join(root, "_sidebar.md"), buildSidebarMarkdown(), "utf8");
  console.log("_sidebar.md gerado.");
}

function countRealQuestions(questionPath) {
  const full = path.join(root, questionPath);
  if (!fs.existsSync(full)) return 0;
  const content = fs.readFileSync(full, "utf8");
  const matches = content.match(/<div class="quiz-card"/g);
  return matches ? matches.length : 0;
}

function generateProvasIndex() {
  const lines = [
    "# Banco de questões por matéria",
    "",
    "Todas as questões seguem o formato oficial de somatória do PAS/UEM (5 afirmações 01/02/04/08/16). Abra o tema para estudar a teoria antes de treinar.",
    ""
  ];

  Object.entries(areas).forEach(([areaId, areaInfo]) => {
    lines.push(`## ${areaInfo.title}`);
    lines.push("");
    lines.push("| Disciplina | Tema | Questões | Abrir |");
    lines.push("|---|---|---:|---|");
    areaInfo.disciplinas.forEach((discId) => {
      const groupItem = chapterGroups.find((item) => item.id === discId);
      if (!groupItem) return;
      groupItem.chapters.forEach((chapterItem) => {
        const count = countRealQuestions(chapterItem.questionPath);
        lines.push(`| ${groupItem.shortTitle} | ${chapterItem.title} | ${count} | [Abrir](${chapterItem.questionPath}) |`);
      });
    });
    lines.push("");
  });

  const redacaoGroup = chapterGroups.find((item) => item.id === "redacao");
  if (redacaoGroup) {
    lines.push(`## ${redacaoGroup.title} (avaliação à parte, 0 a 120 pontos)`);
    lines.push("");
    lines.push("| Gênero textual | Abrir |");
    lines.push("|---|---|");
    redacaoGroup.chapters.forEach((chapterItem) => {
      lines.push(`| ${chapterItem.title} | [Abrir](${chapterItem.themePath}) |`);
    });
    lines.push("");
  }

  fs.writeFileSync(path.join(root, "PROVAS.md"), lines.join("\n"), "utf8");
  console.log("PROVAS.md gerado.");
}

function generateConteudoProgramatico() {
  const lines = [
    "# Conteúdo programático oficial - Etapa 1",
    "",
    "Extraído do **Manual do Candidato PAS/UEM 2026**, seção \"Programa de Prova para a Etapa 1\" (`Fontes Oficiais/manual_candidato_pas2026.pdf`). Cada item linka direto para o capítulo de estudo correspondente.",
    "",
    "A prova da Etapa 1 tem 40 questões objetivas em 5 áreas de 8 questões cada, mais 1 redação (0-120 pontos). Ver a estrutura completa da prova em [REGRAS_DO_MATERIAL.md](REGRAS_DO_MATERIAL.md).",
    ""
  ];

  Object.entries(areas).forEach(([areaId, areaInfo]) => {
    lines.push(`## ${areaInfo.title}`);
    lines.push("");
    lines.push(`*${areaInfo.questoesNaProva} questões desta área na prova (formato de somatória).*`);
    lines.push("");
    areaInfo.disciplinas.forEach((discId) => {
      const groupItem = chapterGroups.find((item) => item.id === discId);
      if (!groupItem) return;
      lines.push(`### ${groupItem.title}`);
      lines.push("");
      groupItem.chapters.forEach((chapterItem) => {
        lines.push(`- **[${chapterItem.label}](${chapterItem.themePath})** — ${chapterItem.editalMapping}`);
        chapterItem.editalItems.forEach((item) => lines.push(`  - ${item}`));
      });
      lines.push("");
    });
  });

  const redacaoGroup = chapterGroups.find((item) => item.id === "redacao");
  if (redacaoGroup) {
    lines.push(`## ${redacaoGroup.title} (avaliação à parte, 0 a 120 pontos)`);
    lines.push("");
    redacaoGroup.chapters.forEach((chapterItem) => {
      lines.push(`- **[${chapterItem.label}](${chapterItem.themePath})** — ${chapterItem.editalMapping}`);
      chapterItem.editalItems.forEach((item) => lines.push(`  - ${item}`));
    });
    lines.push("");
  }

  fs.writeFileSync(path.join(root, "CONTEUDO_PROGRAMATICO.md"), lines.join("\n"), "utf8");
  console.log("CONTEUDO_PROGRAMATICO.md gerado.");
}

generateChapterFiles();
generateSidebar();
generateProvasIndex();
generateConteudoProgramatico();
