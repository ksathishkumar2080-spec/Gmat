/* Curriculum tree = the exhaustive concept list from §3 of the research doc.
 * Every concept is a module. Mastery % is tracked per module in localStorage.
 * Sections: quant, verbal, data.
 */
window.GMAT_DATA = window.GMAT_DATA || {};

window.GMAT_DATA.curriculum = [
  {
    section: "quant",
    label: "Quantitative Reasoning",
    blurb: "Problem Solving only · arithmetic + algebra · NO geometry · NO calculator. Algebra + Arithmetic dominate (~50%+).",
    groups: [
      {
        name: "Arithmetic & Number Properties",
        weight: "High frequency",
        concepts: [
          "Fractions, decimals, estimation",
          "Order of operations (PEMDAS), factorials",
          "Percentages: calculation, percent change, successive",
          "Ratios & proportions",
          "Averages and weighted averages",
          "Integer properties (even/odd, +/−)",
          "Divisibility rules, factors, multiples",
          "Primes & prime factorization",
          "LCM & GCD/GCF",
          "Remainder theory",
          "Evenly spaced / consecutive-integer sets"
        ]
      },
      {
        name: "Powers & Roots",
        concepts: [
          "Exponent rules (negative, fractional, zero)",
          "Roots & rationalizing denominators",
          "Perfect vs. non-perfect roots",
          "Exponential equations"
        ]
      },
      {
        name: "Algebra",
        weight: "High frequency",
        concepts: [
          "Linear equations (1 & 2 variable; substitution & elimination)",
          "Solving one variable in terms of another",
          "Quadratics (FOIL, factoring, zero-product, identities)",
          "Rational expressions",
          "Inequalities (incl. compound)",
          "Absolute value",
          "Functions & custom-symbol problems, domain/range, compound functions",
          "Arithmetic & geometric sequences",
          "Min/max",
          "'Must be true / could be true' logic"
        ]
      },
      {
        name: "Word Problems / Applied",
        concepts: [
          "Rates, speed/distance/time",
          "Work/rate",
          "Mixtures",
          "Overlapping sets (2- and 3-set Venn/matrix)",
          "Profit/loss, simple interest, basic growth/reduction",
          "Unit conversions"
        ]
      },
      {
        name: "Statistics",
        concepts: [
          "Mean, median, mode, range",
          "Standard deviation (concept & comparison)"
        ]
      },
      {
        name: "Counting & Probability",
        concepts: [
          "Combinations & permutations",
          "Probability (single/multiple events, and/or rules)",
          "Sets"
        ]
      }
    ]
  },
  {
    section: "verbal",
    label: "Verbal Reasoning",
    blurb: "Critical Reasoning + Reading Comprehension only · NO Sentence Correction. Assumption/Strengthen/Weaken/Inference ≈ 75% of CR.",
    groups: [
      {
        name: "Critical Reasoning — type taxonomy",
        weight: "Core 75%",
        concepts: [
          "Assumption (Negation Test)",
          "Strengthen",
          "Weaken / find-the-flaw",
          "Inference / 'must be true'",
          "Evaluate (Yes-No two-path)",
          "Explain the discrepancy / Resolve the paradox",
          "Boldface (role of two bolded portions)",
          "Method of reasoning / structure",
          "Conclusion / main-point",
          "Complete the passage",
          "Dialogue (two speakers)",
          "Plan-type"
        ]
      },
      {
        name: "Reading Comprehension",
        concepts: [
          "Main Idea / Primary Purpose",
          "Detail / Supporting Idea",
          "Inference",
          "Tone / Attitude",
          "Function / 'why mentioned'",
          "Logical Structure / Organization",
          "Application / Out-of-context",
          "Active reading & passage mapping (structure first)"
        ]
      },
      {
        name: "Wrong-answer pattern drills",
        concepts: [
          "Too-broad / too-narrow scope",
          "'One step too far' inference",
          "Extreme tone language",
          "Recall-trap answers echoing passage words"
        ]
      }
    ]
  },
  {
    section: "data",
    label: "Data Insights",
    blurb: "5 question types · on-screen calculator allowed · NO partial credit on multi-part. The strategic swing section — lowest mean, most improvable.",
    groups: [
      {
        name: "Data Sufficiency (20–40%)",
        concepts: [
          "AD / BCE elimination grid",
          "Value vs. Yes/No modes",
          "Test (1) alone, then (2) alone, combine last",
          "Insufficiency via single counterexample",
          "Constraint traps (positive integer, zero/negatives)"
        ]
      },
      {
        name: "Graphics Interpretation (20–30%)",
        weight: "Lowest accuracy — protect time",
        concepts: [
          "Read chart/graph, fill 2 dropdowns",
          "Axis & scale reading",
          "Trend / rate-of-change reading",
          "Avoid rushing deceptively-easy items"
        ]
      },
      {
        name: "Multi-Source Reasoning (10–20%)",
        concepts: [
          "2–3 tabbed sources",
          "Spot discrepancies across tabs",
          "Judge relevance / sufficiency",
          "Budget ~7.5 min for a dataset"
        ]
      },
      {
        name: "Table Analysis (10–20%)",
        concepts: [
          "Sortable table reading",
          "Dichotomous true/false statements",
          "Column-by-column evaluation"
        ]
      },
      {
        name: "Two-Part Analysis (10–20%)",
        concepts: [
          "One prompt, two interdependent answers",
          "Classify subtype in ~15 sec",
          "Eliminate impossible pairs first",
          "No partial credit awareness"
        ]
      }
    ]
  }
];
