/* Pattern-recognition layer: classify-first decision trees per question type,
 * plus the trap library. From §4 and §5 of the research doc.
 */
window.GMAT_DATA = window.GMAT_DATA || {};

window.GMAT_DATA.decisionTrees = [
  {
    name: "Critical Reasoning — classify then attack",
    steps: [
      "Read the QUESTION STEM first → classify the type before reading the argument.",
      "Map premise vs. conclusion; pre-phrase your own answer.",
      "Assumption → run the Negation Test (negate the choice; if argument breaks, it's required).",
      "Strengthen / Weaken → look for a new alternative cause or a closed/opened gap.",
      "Inference / 'must be true' → stay literal; reject anything one step beyond the text.",
      "Evaluate → ask the Yes/No two-path question that swings the conclusion.",
      "Paradox → find the fact that reconciles BOTH opposing facts.",
      "Boldface → assign each bold portion a role (premise, conclusion, opposing view).",
      "Eliminate by scope; extreme language (always/never/all) is usually wrong."
    ]
  },
  {
    name: "Data Sufficiency — AD / BCE grid",
    steps: [
      "Fully understand the stem and the question MODE (Value vs. Yes/No).",
      "Test statement (1) ALONE. Sufficient → answer is A or D. Not → B, C, or E.",
      "Test statement (2) ALONE, independently (don't carry over (1)'s info).",
      "Combine ONLY if neither alone is sufficient.",
      "Insufficiency needs just ONE counterexample.",
      "Don't SOLVE — judge. Watch constraints: positive integer, zero, negatives."
    ],
    answers: window.GMAT_DATA.DS_CHOICES || [
      "(A) (1) ALONE sufficient, (2) alone not.",
      "(B) (2) ALONE sufficient, (1) alone not.",
      "(C) BOTH TOGETHER sufficient, NEITHER alone.",
      "(D) EACH ALONE sufficient.",
      "(E) TOGETHER NOT sufficient."
    ]
  },
  {
    name: "Reading Comprehension — structure first",
    steps: [
      "First pass: read for STRUCTURE — main point, author's stance, function of each paragraph, contrast signals (but, however, although).",
      "Don't memorize details; note WHERE they live.",
      "Main Idea → the revision/argument the whole passage builds toward.",
      "Detail → return to the exact lines; beware recall-trap paraphrases.",
      "Inference → supported but not stated; reject 'one step too far'.",
      "Tone/Function → why a thing is mentioned, not just what."
    ]
  },
  {
    name: "Two-Part Analysis — pair elimination",
    steps: [
      "Classify the subtype within ~15 seconds.",
      "Read each column header SEPARATELY — they ask different things.",
      "Eliminate impossible pairs first.",
      "Remember: no partial credit — both cells must be right."
    ]
  },
  {
    name: "Quant — recognize the family",
    steps: [
      "Recognize the problem family on sight (rate, ratio, percent, sets, quadratic…).",
      "Pick a tool: smart numbers, backsolving from answers, estimation, POE.",
      "No calculator — keep mental-math fluency sharp.",
      "Flag-and-move if stuck > 2:30; never leave the section incomplete."
    ]
  }
];

window.GMAT_DATA.trapLibrary = [
  { trap: "Extreme-language answers", tell: "always / never / all / none / only", fix: "Default-suspect; the GMAT rewards qualified, moderate claims." },
  { trap: "Recall-trap (RC)", tell: "An answer echoes exact passage words", fix: "Match meaning, not vocabulary; the right answer often paraphrases." },
  { trap: "Percent-vs-absolute", tell: "Mixing % change with raw counts", fix: "Ask: percent OF what base? 20% up then 20% down ≠ 100%." },
  { trap: "Assuming figures to scale", tell: "Estimating lengths/areas from a drawing", fix: "Use given values only; figures are not drawn to scale." },
  { trap: "Over-combining DS statements", tell: "Jumping to (C) reflexively", fix: "Always test each statement ALONE first." },
  { trap: "Rushing Graphics Interpretation", tell: "Deceptively easy chart", fix: "Slow down; count intervals not points; read the axis units." },
  { trap: "'One step too far' inference", tell: "Logical-but-unstated leap", fix: "Stay within what the text guarantees." },
  { trap: "Solving instead of judging (DS)", tell: "Computing the exact value", fix: "You only need to know IF it's determined, not what it is." },
  { trap: "Averaging times in work problems", tell: "Adding/averaging hours", fix: "Add RATES (1/a + 1/b), then invert." },
  { trap: "Even-exponent oversight", tell: "Perfect-square divisibility", fix: "Exponents in a perfect square must be even." }
];
