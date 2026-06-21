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

// ---------------- ADDITIONAL BANK (expansion) ----------------
window.GMAT_DATA.questions.push(
  // ----- QUANT -----
  {
    id: "q-arith-3", section: "quant", type: "Problem Solving", topic: "Remainder theory",
    difficulty: "hard",
    stem: "When the positive integer n is divided by 5 the remainder is 3, and when divided by 7 the remainder is 4. What is the smallest possible value of n?",
    choices: ["11", "18", "23", "32", "38"],
    answer: 1,
    explanation: "Need n ≡ 3 (mod 5) and n ≡ 4 (mod 7). Test multiples: 18 → 18/5 = 3 r3 ✓ and 18/7 = 2 r4 ✓. So 18 is smallest.",
    trap: "Checking only one congruence; the answer must satisfy BOTH simultaneously."
  },
  {
    id: "q-pow-1", section: "quant", type: "Problem Solving", topic: "Powers & Roots",
    difficulty: "easy",
    stem: "What is the value of (2⁵ · 2³) / 2⁶ ?",
    choices: ["2", "4", "8", "16", "32"],
    answer: 1,
    explanation: "Add exponents when multiplying: 2⁵·2³ = 2⁸. Subtract when dividing: 2⁸/2⁶ = 2² = 4.",
    trap: "Multiplying the exponents instead of adding/subtracting them."
  },
  {
    id: "q-seq-1", section: "quant", type: "Problem Solving", topic: "Sequences",
    difficulty: "medium",
    stem: "In an arithmetic sequence the first term is 3 and the common difference is 4. What is the 10th term?",
    choices: ["36", "39", "40", "43", "37"],
    answer: 1,
    explanation: "aₙ = a₁ + (n−1)d = 3 + (10−1)·4 = 3 + 36 = 39.",
    trap: "Using n instead of (n−1): 3 + 10·4 = 43 is the classic off-by-one."
  },
  {
    id: "q-mix-1", section: "quant", type: "Problem Solving", topic: "Mixtures",
    difficulty: "medium",
    stem: "A 6-liter solution is 30% salt. How many liters of pure water must be added to make it 18% salt?",
    choices: ["2", "3", "4", "5", "6"],
    answer: 2,
    explanation: "Salt = 0.30·6 = 1.8 L and is unchanged. Need 1.8/(6+w) = 0.18 → 6+w = 10 → w = 4 liters.",
    trap: "Forgetting the salt amount stays constant while only volume changes."
  },
  {
    id: "q-stat-2", section: "quant", type: "Problem Solving", topic: "Standard deviation",
    difficulty: "medium",
    stem: "Which list has the greater standard deviation? List X: {5, 5, 5, 5}. List Y: {2, 4, 6, 8}.",
    choices: ["List X", "List Y", "They are equal", "Cannot be determined", "Both are zero"],
    answer: 1,
    explanation: "Standard deviation measures spread. List X has no spread (SD = 0); List Y is spread around its mean, so List Y has the greater SD.",
    trap: "Thinking equal means/sums imply equal SD — SD depends on spread, not the mean."
  },
  {
    id: "q-comb-1", section: "quant", type: "Problem Solving", topic: "Combinations",
    difficulty: "medium",
    stem: "How many different 2-person committees can be formed from 6 people?",
    choices: ["12", "15", "30", "36", "720"],
    answer: 1,
    explanation: "Order doesn't matter, so use combinations: 6C2 = (6·5)/(2·1) = 15.",
    trap: "Using permutations (6·5 = 30) when order doesn't matter."
  },
  {
    id: "q-abs-1", section: "quant", type: "Problem Solving", topic: "Absolute value",
    difficulty: "easy",
    stem: "If |x − 3| = 5, which of the following could be the value of x?",
    choices: ["−5", "−2", "2", "5", "3"],
    answer: 1,
    explanation: "|x − 3| = 5 means x − 3 = 5 (x = 8) or x − 3 = −5 (x = −2). Only −2 appears.",
    trap: "Solving only the positive case and missing the negative branch."
  },
  {
    id: "q-ratio-1", section: "quant", type: "Problem Solving", topic: "Ratios",
    difficulty: "hard",
    stem: "If a : b = 3 : 4 and b : c = 2 : 5, what is a : c?",
    choices: ["3 : 5", "3 : 10", "6 : 5", "2 : 5", "3 : 20"],
    answer: 1,
    explanation: "Make b common. a:b = 3:4 → 6:8; b:c = 2:5 → 8:20. So a:c = 6:20 = 3:10.",
    trap: "Multiplying across without aligning the shared term b first."
  },

  // ----- VERBAL · CR -----
  {
    id: "v-cr-5", section: "verbal", type: "CR · Strengthen", topic: "Strengthen",
    difficulty: "medium",
    stem: "Researchers gave a new fertilizer to one field and none to an adjacent field; the treated field yielded 25% more. They conclude the fertilizer caused the higher yield. Which most strengthens this?",
    choices: [
      "The fertilizer is inexpensive.",
      "The two fields had nearly identical soil, sunlight, and rainfall.",
      "The treated field was slightly larger.",
      "Other farms also use fertilizer.",
      "The yield was measured by weight."
    ],
    answer: 1,
    explanation: "Strengthening a causal claim means ruling out alternative explanations. If the fields were otherwise identical, the fertilizer is the most likely cause of the difference.",
    trap: "Choosing facts about cost/measurement that don't address whether something ELSE caused the gap."
  },
  {
    id: "v-cr-6", section: "verbal", type: "CR · Evaluate", topic: "Evaluate (Yes-No two-path)",
    difficulty: "hard",
    stem: "A city plans to reduce traffic by adding a bus line, expecting many drivers to switch. Answering which question would be most useful in evaluating the plan?",
    choices: [
      "How much will the buses cost to operate?",
      "Do a significant number of current drivers travel routes the new bus line will serve?",
      "What color will the new buses be?",
      "How many cities have bus lines?",
      "When was the last bus line added?"
    ],
    answer: 1,
    explanation: "An Evaluate answer is a question whose Yes/No answers swing the conclusion. If many drivers DO travel those routes, the plan can work; if not, it fails — so it tests the plan directly.",
    trap: "Picking questions that are interesting but whose answers don't change whether the plan succeeds."
  },
  {
    id: "v-cr-7", section: "verbal", type: "CR · Boldface", topic: "Boldface",
    difficulty: "hard",
    stem: "Critics claim the museum's new wing wasted money. **But attendance has doubled since it opened.** Therefore, the investment is already paying off. In the argument, the boldface portion plays which role?",
    choices: [
      "It is the main conclusion of the argument.",
      "It is evidence offered to support the argument's conclusion.",
      "It is the position the argument opposes.",
      "It is an assumption the argument requires.",
      "It restates the critics' claim."
    ],
    answer: 1,
    explanation: "The conclusion is 'the investment is already paying off.' The bold sentence (attendance doubled) is the evidence given for that conclusion — a premise, not the conclusion.",
    trap: "Confusing the supporting premise with the conclusion it supports."
  },
  {
    id: "v-cr-8", section: "verbal", type: "CR · Complete", topic: "Complete the passage",
    difficulty: "medium",
    stem: "Electric cars produce no tailpipe emissions, but in regions where electricity comes mainly from coal, charging them still generates substantial pollution. Therefore, switching to electric cars reduces total pollution only if ______.",
    choices: [
      "electric cars are cheaper to maintain",
      "the electricity used to charge them comes from cleaner sources",
      "more charging stations are built",
      "drivers travel fewer miles overall",
      "coal plants operate at night"
    ],
    answer: 1,
    explanation: "The passage says coal-based charging still pollutes, so the benefit holds only when the charging electricity is cleaner. The completion must follow logically from that conditional.",
    trap: "Picking a generally-true benefit that doesn't complete the specific 'only if' logic."
  },
  {
    id: "v-cr-9", section: "verbal", type: "CR · Method", topic: "Method of reasoning / structure",
    difficulty: "hard",
    stem: "Economist: My opponent argues that raising the minimum wage always kills jobs. But several cities raised it last year with no measurable job loss. So the claim is overstated. The economist argues by:",
    choices: [
      "appealing to an authority on wages",
      "citing counterexamples that contradict a universal claim",
      "attacking the opponent's character",
      "redefining the term 'minimum wage'",
      "predicting future job losses"
    ],
    answer: 1,
    explanation: "The opponent's claim is universal ('always'). The economist offers cases where the predicted effect didn't occur — counterexamples that undercut a universal claim.",
    trap: "Describing the topic instead of the logical METHOD; the question asks HOW, not WHAT."
  },

  // ----- VERBAL · RC (new passage, three question types) -----
  {
    id: "v-rc-3", section: "verbal", type: "RC · Detail", topic: "Detail / Supporting Idea",
    difficulty: "medium",
    passage: "Bioluminescence — light produced by living organisms — is far more common in the ocean than on land. Most deep-sea species that glow use it for one of three purposes: to attract prey, to find mates, or to startle predators. Surprisingly, the chemistry involved is remarkably similar across unrelated species, suggesting the trait evolved independently many times, a phenomenon biologists call convergent evolution.",
    stem: "According to the passage, deep-sea bioluminescence is used for all of the following EXCEPT:",
    choices: [
      "attracting prey",
      "finding mates",
      "startling predators",
      "navigating in currents",
      "none of the above are mentioned"
    ],
    answer: 3,
    explanation: "The passage lists exactly three purposes: attract prey, find mates, startle predators. 'Navigating in currents' is never mentioned, so it's the EXCEPT answer.",
    trap: "EXCEPT/NOT questions: the right answer is the one NOT supported — read carefully for the odd one out."
  },
  {
    id: "v-rc-4", section: "verbal", type: "RC · Function", topic: "Function / why mentioned",
    difficulty: "hard",
    passage: "Bioluminescence — light produced by living organisms — is far more common in the ocean than on land. Most deep-sea species that glow use it for one of three purposes: to attract prey, to find mates, or to startle predators. Surprisingly, the chemistry involved is remarkably similar across unrelated species, suggesting the trait evolved independently many times, a phenomenon biologists call convergent evolution.",
    stem: "The author mentions 'convergent evolution' primarily in order to:",
    choices: [
      "argue that all glowing species share a common ancestor",
      "explain why similar chemistry appears in unrelated species",
      "list a fourth purpose of bioluminescence",
      "question whether bioluminescence is useful",
      "compare ocean and land organisms"
    ],
    answer: 1,
    explanation: "The term is introduced right after noting the chemistry is similar across UNRELATED species — it names/explains that pattern. Its function is to account for the surprising similarity.",
    trap: "(A) inverts it — convergent evolution means NOT a common ancestor; a recall-trap that flips the meaning."
  },
  {
    id: "v-rc-5", section: "verbal", type: "RC · Tone", topic: "Tone / Attitude",
    difficulty: "medium",
    passage: "Bioluminescence — light produced by living organisms — is far more common in the ocean than on land. Most deep-sea species that glow use it for one of three purposes: to attract prey, to find mates, or to startle predators. Surprisingly, the chemistry involved is remarkably similar across unrelated species, suggesting the trait evolved independently many times, a phenomenon biologists call convergent evolution.",
    stem: "The author's attitude toward the similarity in bioluminescent chemistry is best described as:",
    choices: [
      "dismissive",
      "intrigued",
      "alarmed",
      "skeptical",
      "indifferent"
    ],
    answer: 1,
    explanation: "The word 'Surprisingly' and the careful explanation signal genuine interest. 'Intrigued' fits; the tone is neither negative nor neutral.",
    trap: "Extreme-tone traps (alarmed, dismissive) overshoot the measured, curious academic register."
  },

  // ----- DATA INSIGHTS -----
  {
    id: "d-ds-4", section: "data", type: "Data Sufficiency", topic: "DS · Yes/No",
    difficulty: "medium",
    stem: "Is x > 0?\n(1) x² = 9\n(2) x³ = 27",
    choices: DS_CHOICES,
    answer: 1,
    explanation: "(1) x² = 9 → x = 3 or x = −3, so we can't tell the sign — insufficient. (2) x³ = 27 → x = 3 only (cubes keep sign), so x > 0 — sufficient. Answer (B).",
    trap: "Treating x² = 9 as giving a single positive root; squares lose the sign, cubes don't."
  },
  {
    id: "d-ds-5", section: "data", type: "Data Sufficiency", topic: "DS · Value",
    difficulty: "hard",
    stem: "What is the value of x + y?\n(1) x + 2y = 8\n(2) 2x + 4y = 16",
    choices: DS_CHOICES,
    answer: 4,
    explanation: "(2) is just (1) multiplied by 2 — they're the same line, giving no new information. Neither alone nor together pins down x + y (infinitely many solutions). Answer (E).",
    trap: "Marking (C): two equations look like enough, but they're dependent — not two independent constraints."
  },
  {
    id: "d-msr-1", section: "data", type: "Multi-Source Reasoning", topic: "Multi-Source Reasoning",
    difficulty: "medium",
    passage: "TAB 1 — Pricing: Standard plan $20/mo, Pro plan $50/mo.\nTAB 2 — Usage limits: Standard allows 1,000 API calls/mo; Pro allows 10,000.\nTAB 3 — Policy: Overage on Standard is billed at $0.05 per extra call; Pro has no overage fee.",
    stem: "A customer on the Standard plan makes 1,400 API calls in a month. What is their total bill?",
    choices: ["$20", "$40", "$50", "$70", "$90"],
    answer: 1,
    explanation: "Standard base = $20 (Tab 1). Overage = 1,400 − 1,000 = 400 calls (Tab 2) at $0.05 each (Tab 3) = $20. Total = $20 + $20 = $40.",
    trap: "MSR requires combining all three tabs; using only the base price ($20) or the wrong limit drops the overage."
  },
  {
    id: "d-msr-2", section: "data", type: "Multi-Source Reasoning", topic: "Multi-Source Reasoning",
    difficulty: "hard",
    passage: "TAB 1 — Pricing: Standard plan $20/mo, Pro plan $50/mo.\nTAB 2 — Usage limits: Standard allows 1,000 API calls/mo; Pro allows 10,000.\nTAB 3 — Policy: Overage on Standard is billed at $0.05 per extra call; Pro has no overage fee.",
    stem: "For a customer expecting 1,800 calls/month, which plan is cheaper, and by how much?",
    choices: [
      "Standard, by $10",
      "Pro, by $10",
      "Pro, by $30",
      "They cost the same",
      "Standard, by $30"
    ],
    answer: 1,
    explanation: "Standard = $20 + (1,800 − 1,000)·$0.05 = $20 + $40 = $60. Pro = $50 flat (1,800 < 10,000 limit). Pro is cheaper by $60 − $50 = $10.",
    trap: "Discrepancy-spotting: the lower base price isn't the cheaper total once overage from another tab is applied."
  },
  {
    id: "d-tpa-2", section: "data", type: "Two-Part Analysis", topic: "Two-Part Analysis",
    difficulty: "medium",
    stem: "x and y are positive integers with x + y = 10 and x > y. Which value pair (x, y) is valid? Choose the pair where x is as small as possible.",
    choices: ["(9, 1)", "(8, 2)", "(7, 3)", "(6, 4)", "(5, 5)"],
    answer: 3,
    explanation: "Need x + y = 10, both positive integers, and x > y. Smallest valid x: (6,4) works (6>4); (5,5) fails x>y. So (6, 4).",
    trap: "(5,5) sums to 10 but violates x > y — no partial credit for a near-miss pair."
  },
  {
    id: "d-ti-2", section: "data", type: "Table Analysis", topic: "Table Analysis",
    difficulty: "medium",
    stem: "A sortable table lists 5 products with profit margins: 12%, 8%, 20%, 15%, 5%. Statement: 'More than half the products have a margin above 10%.' True or false?",
    choices: ["True", "False"],
    answer: 0,
    explanation: "Margins above 10%: 12%, 20%, 15% — that's 3 of 5. 3 > 2.5, so more than half → True.",
    trap: "'More than half' of 5 means at least 3; counting exactly half (2.5) wrong leads to errors."
  },
  {
    id: "d-gi-2", section: "data", type: "Graphics Interpretation", topic: "Graphics Interpretation",
    difficulty: "medium",
    stem: "A bar chart shows quarterly sales: Q1 = 40, Q2 = 60, Q3 = 50, Q4 = 90 (units in thousands). The percent increase from Q1 to Q4 is approximately:",
    choices: ["50%", "90%", "100%", "125%", "225%"],
    answer: 3,
    explanation: "Percent increase = (90 − 40)/40 = 50/40 = 1.25 = 125%.",
    trap: "Using the final value over the initial (90/40 = 225%) instead of the CHANGE over the initial."
  }
);

// Normalize: some items store a corrected answer in `answerFix`. Apply it so the
// app's grading is always right even though the explanation walks the reasoning.
window.GMAT_DATA.questions.forEach(q => {
  if (typeof q.answerFix === "number") q.answer = q.answerFix;
});

window.GMAT_DATA.DS_CHOICES = DS_CHOICES;
