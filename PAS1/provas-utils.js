(function(root) {
  // Motor de correção do formato de somatória do PAS/UEM (Art. 21 do Manual do
  // Candidato): cada questão tem 5 afirmações (01,02,04,08,16), o candidato marca
  // as que julga corretas e a resposta final é a soma dos códigos marcados.
  // Pontuação: 6,0 se acertar exatamente o gabarito; valor parcial proporcional ao
  // número de alternativas corretas da questão, se marcar só corretas (nenhuma
  // errada); 0 (zero) se marcar qualquer alternativa errada ou deixar em branco.
  const PARTIAL_CREDIT_TABLE = { 1: 6.0, 2: 3.0, 3: 2.0, 4: 1.5, 5: 1.2 };
  const MAX_QUESTION_SCORE = 6.0;

  function normalizeText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function parseCodes(value) {
    return String(value || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  // selectedCodes/correctCodes: arrays de strings entre "01","02","04","08","16".
  function scoreSomaQuestion(selectedCodes, correctCodes) {
    const selected = new Set(selectedCodes || []);
    const correct = new Set(correctCodes || []);
    const correctCount = correct.size;

    if (correctCount === 0) {
      // Todas as afirmações da questão são falsas: só pontua quem não marcar nada.
      const score = selected.size === 0 ? MAX_QUESTION_SCORE : 0;
      return { score, max: MAX_QUESTION_SCORE, isFullCredit: score === MAX_QUESTION_SCORE, hasWrongMark: selected.size > 0 };
    }

    let hasWrongMark = false;
    let hitCount = 0;
    selected.forEach((code) => {
      if (correct.has(code)) {
        hitCount += 1;
      } else {
        hasWrongMark = true;
      }
    });

    if (hasWrongMark || hitCount === 0) {
      return { score: 0, max: MAX_QUESTION_SCORE, isFullCredit: false, hasWrongMark };
    }

    const perAlternative = PARTIAL_CREDIT_TABLE[correctCount] || 0;
    const rawScore = Math.round(hitCount * perAlternative * 100) / 100;
    const score = Math.min(rawScore, MAX_QUESTION_SCORE);
    return { score, max: MAX_QUESTION_SCORE, isFullCredit: hitCount === correctCount, hasWrongMark: false };
  }

  function getQuizProgressStats(progress, total) {
    const rows = progress && typeof progress === "object" ? Object.values(progress) : [];
    const answered = rows.filter((item) => item && item.locked).length;
    const totalScore = rows.reduce((sum, item) => sum + (item && item.locked ? Number(item.score) || 0 : 0), 0);
    const maxPossible = answered * MAX_QUESTION_SCORE;
    const safeTotal = Math.max(Number(total) || answered, answered);

    return {
      answered,
      total: safeTotal,
      totalScore: Math.round(totalScore * 100) / 100,
      maxScore: safeTotal * MAX_QUESTION_SCORE,
      completion: safeTotal ? Math.round((answered / safeTotal) * 100) : 0,
      accuracy: maxPossible ? Math.round((totalScore / maxPossible) * 100) : null
    };
  }

  function getRouteFromLink(href) {
    return String(href || "")
      .replace(/^#\/?/, "")
      .replace(/^\.\//, "")
      .split(/[?#]/)[0]
      .replace(/\.md$/, "");
  }

  const api = {
    MAX_QUESTION_SCORE,
    PARTIAL_CREDIT_TABLE,
    parseCodes,
    scoreSomaQuestion,
    getQuizProgressStats,
    getRouteFromLink,
    normalizeText
  };

  root.PasQuizTools = api;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
})(typeof window !== "undefined" ? window : globalThis);
