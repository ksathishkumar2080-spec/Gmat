/* Question bank. Representative official-style items tagged by
 * section / type / topic / difficulty, each with a full explanation and the
 * trap it tests. Used by Practice drills and the Mock engine.
 *
 * difficulty: "easy" | "medium" | "hard"
 * For Data Sufficiency, choices are the 5 fixed options (see patterns.js).
 */
window.GMAT_DATA = window.GMAT_DATA || {};

const DS_CHOICES = [
  "(A) Statement (1) ALONE is sufficient, but (2) alone is not.",
  "(B) Statement (2) ALONE is sufficient, but (1) alone is not.",
  "(C) BOTH statements TOGETHER are sufficient, but NEITHER alone is.",
  "(D) EACH statement ALONE is sufficient.",
  "(E) Statements (1) and (2) TOGETHER are NOT sufficient."
];

window.GMAT_DATA.questions = [
  // ---------------- QUANT (Problem Solving) ----------------
  {
    id: "q-arith-1", section: "quant", type: "Problem Solving", topic: "Percentages",
    difficulty: "medium",
    stem: "A price is increased by 20% and then the new price is decreased by 20%. The final price is what percent of the original price?",
    choices: ["96%", "98%", "100%", "104%", "120%"],
    answer: 0,
    explanation: "Successive percent changes multiply, they don't cancel. 1.20 × 0.80 = 0.96, so the final price is 96% of the original — a 4% net decrease.",
    trap: "Percent-vs-absolute: assuming +20% then −20% returns to 100%."
  },
  {
    id: "q-arith-2", section: "quant", type: "Problem Solving", topic: "Integer properties",
    difficulty: "medium",
    stem: "If n is a positive integer and n² is divisible by 72, what is the largest positive integer that must divide n?",
    choices: ["6", "12", "24", "36", "8"],
    answer: 1,
    explanation: "72 = 2³·3². In a perfect square every prime exponent is even, so n² must really contain 2⁴·3² to be divisible by 2³·3². That forces n to contain 2²·3¹ = 12. So 12 must divide n.",
    trap: "Forgetting that exponents in a perfect square must be even."
  },
  {
    id: "q-alg-1", section: "quant", type: "Problem Solving", topic: "Algebra / quadratics",
    difficulty: "easy",
    stem: "If x² − 5x + 6 = 0, which of the following could be the value of x?",
    choices: ["−2", "1", "2", "5", "6"],
    answer: 2,
    explanation: "Factor: (x − 2)(x − 3) = 0, so x = 2 or x = 3. Only 2 appears among the choices.",
    trap: "Sign errors when factoring; confusing roots with the constant term."
  },
  {
    id: "q-alg-2", section: "quant", type: "Problem Solving", topic: "Inequalities",
    difficulty: "hard",
    stem: "If −3 < x < 2 and −1 < y < 4, which of the following gives the full range of x − y?",
    choices: ["−7 < x − y < 1", "−4 < x − y < 6", "−7 < x − y < 3", "−2 < x − y < 1", "−5 < x − y < 5"],
    answer: 2,
    explanation: "For x − y, maximize with x large (→2) and y small (→−1): 2 − (−1) = 3. Minimize with x small (→−3) and y large (→4): −3 − 4 = −7. So −7 < x − y < 3.",
    trap: "Subtracting bounds directly instead of flipping the y interval."
  },
  {
    id: "q-word-1", section: "quant", type: "Problem Solving", topic: "Rates / work",
    difficulty: "medium",
    stem: "Machine A can finish a job in 4 hours and Machine B in 6 hours. Working together, how long do they take?",
    choices: ["2 h", "2.4 h", "2.5 h", "3 h", "5 h"],
    answer: 1,
    explanation: "Combined rate = 1/4 + 1/6 = 3/12 + 2/12 = 5/12 job per hour. Time = 12/5 = 2.4 hours.",
    trap: "Averaging the two times (5 h) instead of adding rates."
  },
  {
    id: "q-word-2", section: "quant", type: "Problem Solving", topic: "Overlapping sets",
    difficulty: "medium",
    stem: "In a class of 40, 25 study French and 18 study Spanish. If 7 study neither, how many study both?",
    choices: ["3", "7", "10", "12", "15"],
    answer: 2,
    explanation: "Studying at least one = 40 − 7 = 33. By inclusion–exclusion: 25 + 18 − both = 33 → both = 43 − 33 = 10.",
    trap: "Forgetting to subtract the 'neither' group before applying inclusion–exclusion."
  },
  {
    id: "q-stat-1", section: "quant", type: "Problem Solving", topic: "Statistics",
    difficulty: "medium",
    stem: "The average of 5 numbers is 20. If a sixth number is added and the new average is 22, what is the sixth number?",
    choices: ["22", "26", "30", "32", "42"],
    answer: 3,
    explanation: "Original sum = 5×20 = 100. New sum = 6×22 = 132. Sixth number = 132 − 100 = 32.",
    trap: "Assuming the new value equals the new average."
  },
  {
    id: "q-prob-1", section: "quant", type: "Problem Solving", topic: "Probability",
    difficulty: "hard",
    stem: "A bag has 3 red and 2 blue marbles. Two are drawn without replacement. What is the probability both are red?",
    choices: ["1/10", "3/10", "2/5", "3/5", "9/25"],
    answer: 1,
    explanation: "P(first red) = 3/5, P(second red | first red) = 2/4 = 1/2. Product = 3/5 × 1/2 = 3/10.",
    trap: "Using replacement (9/25) instead of without-replacement."
  },

  // ---------------- VERBAL — Critical Reasoning ----------------
  {
    id: "v-cr-1", section: "verbal", type: "CR · Assumption", topic: "Assumption (Negation Test)",
    difficulty: "medium",
    stem: "City council: Installing speed bumps on Oak Street will reduce accidents there. Therefore we should install them to make Oak Street safer. The argument assumes that:",
    choices: [
      "Speed bumps are the cheapest way to reduce accidents.",
      "Reducing accidents on Oak Street will make it safer overall.",
      "Oak Street currently has more accidents than other streets.",
      "Drivers will not simply divert to other streets.",
      "Speed bumps have no maintenance cost."
    ],
    answer: 1,
    explanation: "The conclusion equates 'reduce accidents' with 'safer.' Negate (B): if reducing accidents did NOT make it safer, the argument collapses — that's the required assumption.",
    trap: "Choosing tempting-but-irrelevant cost/comparison answers (A, C, E) that the conclusion never depends on."
  },
  {
    id: "v-cr-2", section: "verbal", type: "CR · Weaken", topic: "Weaken",
    difficulty: "medium",
    stem: "Sales of Brand X rose 30% after it launched a TV ad campaign. The company concludes the campaign caused the increase. Which most weakens this?",
    choices: [
      "The campaign was expensive.",
      "A competitor's factory shut down that month, removing its product from shelves.",
      "Brand X also sells online.",
      "The ads ran during prime time.",
      "Sales rose 30% in units, not revenue."
    ],
    answer: 1,
    explanation: "An alternative cause (competitor leaving the market) explains the rise without the ad campaign, undermining the causal claim.",
    trap: "Picking facts that are merely true/about the ad but offer no alternative explanation."
  },
  {
    id: "v-cr-3", section: "verbal", type: "CR · Inference", topic: "Inference / must be true",
    difficulty: "hard",
    stem: "All licensed electricians in the region passed the state exam. Some who passed the exam never registered a business. Which must be true?",
    choices: [
      "Some licensed electricians never registered a business.",
      "Some who passed the exam are licensed electricians.",
      "All who passed the exam are licensed electricians.",
      "Some unregistered people are not electricians.",
      "Most electricians registered a business."
    ],
    answer: 1,
    explanation: "Licensed electricians ⊆ passed-exam. 'Some passers never registered' need not overlap with electricians, so (A) overreaches. But since every licensed electrician passed, at least those people are passers who are electricians → (B) must be true.",
    trap: "'One step too far' — (A) looks safe but the 'some' groups need not intersect."
  },
  {
    id: "v-cr-4", section: "verbal", type: "CR · Paradox", topic: "Resolve the paradox",
    difficulty: "medium",
    stem: "A store lowered prices on umbrellas but sold fewer than the previous month. Which best explains this?",
    choices: [
      "Umbrellas have a high profit margin.",
      "The previous month had record rainfall; this month was dry.",
      "The store advertised the price cut.",
      "Competitors also sell umbrellas.",
      "The price cut was 15%."
    ],
    answer: 1,
    explanation: "A paradox answer reconciles both facts. Far less rain this month reduces demand enough to outweigh the lower price.",
    trap: "Choosing relevant-sounding facts that don't reconcile the two opposing facts."
  },

  // ---------------- VERBAL — Reading Comprehension ----------------
  {
    id: "v-rc-1", section: "verbal", type: "RC · Main Idea", topic: "Main Idea / Primary Purpose",
    difficulty: "medium",
    passage: "Historians once attributed the rapid growth of medieval trade fairs solely to improved roads. Recent scholarship, however, emphasizes the role of legal innovations: fairs developed special courts that resolved merchant disputes quickly and enforced contracts across borders. Without these 'law merchant' institutions, traders would have faced prohibitive risks, and physical infrastructure alone could not have sustained long-distance commerce.",
    stem: "The primary purpose of the passage is to:",
    choices: [
      "argue that medieval roads were poorly built",
      "revise an earlier explanation by emphasizing legal institutions",
      "describe the procedures of medieval merchant courts in detail",
      "prove that trade fairs were unprofitable without good roads",
      "compare medieval and modern contract law"
    ],
    answer: 1,
    explanation: "The passage sets up an old view ('improved roads') and revises it ('however... legal innovations'). The purpose is to revise/qualify the prior explanation.",
    trap: "Detail-trap (C) and too-narrow/too-extreme options that echo passage words without capturing the main point."
  },
  {
    id: "v-rc-2", section: "verbal", type: "RC · Inference", topic: "Inference",
    difficulty: "hard",
    passage: "Historians once attributed the rapid growth of medieval trade fairs solely to improved roads. Recent scholarship, however, emphasizes the role of legal innovations: fairs developed special courts that resolved merchant disputes quickly and enforced contracts across borders. Without these 'law merchant' institutions, traders would have faced prohibitive risks, and physical infrastructure alone could not have sustained long-distance commerce.",
    stem: "The passage suggests that the author would most likely agree that:",
    choices: [
      "Roads played no role in the growth of trade fairs.",
      "Legal institutions reduced the risks of long-distance trade.",
      "Merchant courts were slower than royal courts.",
      "Trade fairs declined once roads improved.",
      "Contract enforcement was unnecessary for local trade."
    ],
    answer: 1,
    explanation: "The passage states the courts 'resolved disputes quickly and enforced contracts,' without which traders faced 'prohibitive risks' — so the author agrees legal institutions reduced trade risk. (B) is directly supported.",
    trap: "Extreme answer (A) overstates 'solely'→'no role'; the author revises, not erases, the road explanation."
  },

  // ---------------- DATA INSIGHTS — Data Sufficiency ----------------
  {
    id: "d-ds-1", section: "data", type: "Data Sufficiency", topic: "DS · Value",
    difficulty: "medium",
    stem: "What is the value of integer x?\n(1) x is a prime number between 8 and 14.\n(2) x is odd.",
    choices: DS_CHOICES,
    answer: 4,
    explanation: "(1) Primes between 8 and 14 are 11 and 13 — two values, not unique, insufficient. (2) Odd alone gives infinitely many values, insufficient. Together, the odd primes between 8 and 14 are still 11 and 13 — still not unique. So (E): together not sufficient.",
    trap: "Stopping after the first prime (11) and forgetting 13; 'solving' instead of checking uniqueness."
  },
  {
    id: "d-ds-2", section: "data", type: "Data Sufficiency", topic: "DS · Yes/No",
    difficulty: "hard",
    stem: "Is the integer n positive?\n(1) n³ > n\n(2) n² > n",
    choices: DS_CHOICES,
    answer: 0,
    explanation: "(1) For integers, n³ > n holds only when n ≥ 2 (e.g. n=2: 8>2). Check negatives: n=−2 gives −8 > −2, false. So statement (1) forces n positive — sufficient. (2) n² > n holds for n ≥ 2 OR n ≤ −1, so n could be negative — insufficient. Therefore (1) ALONE is sufficient → (A).",
    trap: "Combining too soon; not testing negative integers for statement (2)."
  },
  {
    id: "d-ds-3", section: "data", type: "Data Sufficiency", topic: "DS · Value",
    difficulty: "easy",
    stem: "What is the value of x?\n(1) 2x + 3 = 11\n(2) x is even.",
    choices: DS_CHOICES,
    answer: 0,
    explanation: "(1) 2x + 3 = 11 → x = 4: unique value, sufficient. (2) 'x is even' alone: many values, insufficient. So (1) ALONE → (A).",
    trap: "Marking (D) because (2) feels informative — it isn't, it has no unique value."
  },

  // ---------------- DATA INSIGHTS — Two-Part / Table / Graphics ----------------
  {
    id: "d-tpa-1", section: "data", type: "Two-Part Analysis", topic: "Two-Part Analysis",
    difficulty: "medium",
    stem: "A company's revenue R and cost C satisfy R = 5u and C = 200 + 2u, where u = units sold. Select the value of u for which profit (R − C) first becomes positive. (Choose the smallest such integer u.)",
    choices: ["50", "60", "66", "67", "100"],
    answer: 3,
    explanation: "Profit = 5u − (200 + 2u) = 3u − 200 > 0 → u > 66.67 → smallest integer u = 67.",
    trap: "Rounding 66.67 down to 66; no partial credit means the off-by-one is fully wrong."
  },
  {
    id: "d-ti-1", section: "data", type: "Table Analysis", topic: "Table Analysis",
    difficulty: "medium",
    stem: "A sortable table lists 4 cities with populations 120k, 340k, 95k, 210k. Statement: 'The median city population exceeds 150k.' True or false?",
    choices: ["True", "False"],
    answer: 0,
    explanation: "Sorted: 95, 120, 210, 340. Median of 4 = average of middle two = (120 + 210)/2 = 165k > 150k → True.",
    trap: "Taking the median as a single middle value instead of averaging the two middle values for an even count."
  },
  {
    id: "d-gi-1", section: "data", type: "Graphics Interpretation", topic: "Graphics Interpretation",
    difficulty: "medium",
    stem: "A line chart shows revenue rising from $40M (2020) to $100M (2024), roughly linear. The approximate average annual increase is:",
    choices: ["$10M", "$12M", "$15M", "$20M", "$60M"],
    answer: 2,
    explanation: "Total increase = $60M over 4 intervals (2020→2024) = $15M per year. Watch the interval count: 5 data points = 4 gaps.",
    trap: "Dividing by 5 years instead of 4 intervals — the classic Graphics Interpretation time-trap."
  }
];

// Normalize: some items store a corrected answer in `answerFix`. Apply it so the
// app's grading is always right even though the explanation walks the reasoning.
window.GMAT_DATA.questions.forEach(q => {
  if (typeof q.answerFix === "number") q.answer = q.answerFix;
});

window.GMAT_DATA.DS_CHOICES = DS_CHOICES;
