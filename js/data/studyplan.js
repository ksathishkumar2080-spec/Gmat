/* Default study plan = the 16-week schedule from §6, adjustable by weekly hours.
 * Plus the benchmark-driven adjustment rules.
 */
window.GMAT_DATA = window.GMAT_DATA || {};

window.GMAT_DATA.studyPlan = {
  totalWeeks: 16,
  hoursPerWeek: [15, 22],
  totalHours: [200, 260],
  phases: [
    {
      label: "Week 0 — Diagnostic & Foundations",
      weeks: "W0",
      focus: "Baseline + math refresh",
      tasks: [
        "Take a free official practice exam COLD for a true baseline.",
        "Foundations-of-Math refresher if pen-and-paper math is rusty.",
        "Set up the error log before you answer a single practice question."
      ]
    },
    {
      label: "Month 1 — Learn Concepts Section by Section",
      weeks: "W1–4",
      focus: "Untimed, accuracy-first",
      tasks: [
        "Quant fundamentals: arithmetic → number properties → algebra → word problems → statistics → counting/probability.",
        "Verbal fundamentals: CR argument structure + assumption family first; RC active-reading & mapping.",
        "Introduce DI mechanics.",
        "Per sub-topic: learn → timed cementing quiz → mixed set.",
        "Start the error log immediately — tag every miss."
      ]
    },
    {
      label: "Month 2 — Application & Accuracy",
      weeks: "W5–8",
      focus: "Topical mastery, rising difficulty",
      tasks: [
        "Timed topic sets; daily mixed CR/RC.",
        "Build Data Sufficiency + the four IR-derived DI types.",
        "Weekly mixed sets so earlier topics don't fade.",
        "One practice test mid-month.",
        "GATE: medium-difficulty accuracy ≥ 85% before pushing into hard questions."
      ]
    },
    {
      label: "Month 3 — Mixed / Timed + Mocks",
      weeks: "W9–12",
      focus: "Full timed sections",
      tasks: [
        "Full timed sections; 2 full-length mocks.",
        "Deep error-log review drives next week's focus.",
        "Push into hard official questions.",
        "Target the largest-upside section(s) — often DI and/or Verbal — while defending Quant."
      ]
    },
    {
      label: "Month 4 — Test Readiness",
      weeks: "W13–16",
      focus: "Simulation & polish",
      tasks: [
        "1–2 full mocks per week under exact conditions.",
        "Rehearse section order and the bookmark / 3-edit workflow.",
        "Stamina + timing polish.",
        "Stop new content ~1.5 weeks out — error-log re-solves, maintenance sets, high-yield flashcards only.",
        "Final 2–3 days: rest, light review, no mocks."
      ]
    }
  ],
  adjustmentRules: [
    "If mock scores plateau > 2 weeks below 685, run a section/type/timing diagnostic BEFORE adding volume.",
    "If any section sits > 15–20 percentile points below the others, reallocate study time to it.",
    "If medium-difficulty accuracy < 85%, fix mediums before grinding hard questions.",
    "If a 'careless' error category trends above ~10% of misses, that is your #1 priority.",
    "Very low diagnostic (sub-500)? Extend the plan rather than compress it."
  ]
};
