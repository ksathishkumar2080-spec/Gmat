/* Scoring & percentile engine data.
 * Source: GMAC official "Total Score Sorted by Percentile Ranking" (July 2025,
 * data window July 2020–June 2025) and section-score tables reproduced via
 * Target Test Prep / Leland.
 *
 * IMPORTANT (per research caveats): the concordance is many-to-many and GMAC
 * republishes it every Q3. Keep these as updatable DATA, never hard-coded logic.
 * Edit the arrays below when GMAC ships a new table.
 */
window.GMAT_DATA = window.GMAT_DATA || {};

window.GMAT_DATA.lastUpdated = "July 2025 (GMAC concordance)";

// Legacy 200-800  <->  Focus 205-805  <->  total percentile
window.GMAT_DATA.concordance = [
  { legacy: 750, focus: 705, percentile: 98.0 },
  { legacy: 740, focus: 685, percentile: 95.8 }, // <- the 740-equivalent floor
  { legacy: 730, focus: 685, percentile: 95.8 },
  { legacy: 720, focus: 665, percentile: 92.1 },
  { legacy: 710, focus: 655, percentile: 90.5 },
  { legacy: 700, focus: 645, percentile: 86.7 },
  { legacy: 690, focus: 635, percentile: 81.9 },
  { legacy: 680, focus: 635, percentile: 81.9 }
];

// Default app target derived from the research: train toward a band, not a point.
window.GMAT_DATA.target = {
  floorFocus: 685,        // legacy 740 equivalent, ~95.8th percentile
  bandLowFocus: 685,
  bandHighFocus: 705,     // ~98th percentile (clear, don't just touch)
  sections: {
    // 60-90 scale, with required band + the percentile each point maps to
    quant:   { label: "Quantitative", low: 86, high: 88, mean: 78.06,
               points: { 86: 91, 87: 93, 88: 96 },
               note: "Hardest section to rank highly in (quant-strong international pool). No calculator." },
    verbal:  { label: "Verbal", low: 85, high: 86, mean: 79.34,
               points: { 85: 94, 86: 96 },
               note: "High verbal is now a strong differentiator." },
    data:    { label: "Data Insights", low: 83, high: 84, mean: null,
               points: { 82: 93, 83: 95, 84: 96 },
               note: "Lowest section mean — most efficient place to gain percentile." }
  }
};

// Total-score percentile lookup (Focus scale, 205-805 in 10s ending in 5).
// Interpolated/keyed off the concordance band for mock feedback.
window.GMAT_DATA.totalPercentile = [
  { focus: 705, percentile: 98.0 },
  { focus: 695, percentile: 97.0 },
  { focus: 685, percentile: 95.8 },
  { focus: 675, percentile: 94.0 },
  { focus: 665, percentile: 92.1 },
  { focus: 655, percentile: 90.5 },
  { focus: 645, percentile: 86.7 },
  { focus: 635, percentile: 81.9 },
  { focus: 625, percentile: 77.0 },
  { focus: 615, percentile: 71.0 },
  { focus: 605, percentile: 65.0 },
  { focus: 585, percentile: 54.0 },
  { focus: 565, percentile: 43.0 },
  { focus: 545, percentile: 33.0 },
  { focus: 505, percentile: 18.0 }
];

// Helper: nearest total percentile for a given Focus total.
window.GMAT_DATA.percentileForTotal = function (focusTotal) {
  const table = window.GMAT_DATA.totalPercentile;
  let best = table[0];
  let bestDiff = Infinity;
  for (const row of table) {
    const d = Math.abs(row.focus - focusTotal);
    if (d < bestDiff) { bestDiff = d; best = row; }
  }
  return best.percentile;
};

// Helper: is a mock total at/above the 685 floor?
window.GMAT_DATA.isAtTarget = function (focusTotal) {
  return focusTotal >= window.GMAT_DATA.target.floorFocus;
};
