/* localStorage-backed persistence: error log, per-concept mastery, mock history.
 * Error log is a first-class feature with why-wrong tagging and scheduled re-solves.
 */
window.Store = (function () {
  const KEY = "gmat740_v1";

  function load() {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || {};
    } catch (e) {
      return {};
    }
  }
  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }
  function db() {
    const d = load();
    d.errorLog = d.errorLog || [];      // [{id, qid, section, type, topic, why, note, ts, resolveOn, resolved}]
    d.mastery = d.mastery || {};         // { conceptKey: {seen, correct} }
    d.attempts = d.attempts || [];       // [{qid, section, type, difficulty, correct, seconds, ts}]
    d.mocks = d.mocks || [];             // [{ts, totals:{...}, focusTotal, percentile}]
    d.planChecks = d.planChecks || {};   // { taskKey: true }
    d.settings = d.settings || { hoursPerWeek: 18 };
    return d;
  }

  const WHY_TAGS = ["concept gap", "misread", "careless", "timing"];

  return {
    WHY_TAGS,
    all: db,

    // ---- attempts & mastery ----
    recordAttempt(att) {
      const d = db();
      d.attempts.push(Object.assign({ ts: Date.now() }, att));
      // mastery keyed by topic
      const key = att.topic || att.type || att.section;
      const m = d.mastery[key] || { seen: 0, correct: 0 };
      m.seen += 1;
      if (att.correct) m.correct += 1;
      d.mastery[key] = m;
      save(d);
    },

    // ---- error log ----
    addError(entry) {
      const d = db();
      const days = 3; // default spaced re-solve in 3 days
      d.errorLog.push(Object.assign({
        id: "e" + Date.now() + Math.floor(Math.random() * 1000),
        ts: Date.now(),
        resolveOn: Date.now() + days * 86400000,
        resolved: false
      }, entry));
      save(d);
    },
    resolveError(id) {
      const d = db();
      const e = d.errorLog.find(x => x.id === id);
      if (e) { e.resolved = true; save(d); }
    },
    deleteError(id) {
      const d = db();
      d.errorLog = d.errorLog.filter(x => x.id !== id);
      save(d);
    },

    // careless-error rate = careless misses / total misses (the critical metric)
    carelessRate() {
      const d = db();
      const misses = d.errorLog;
      if (!misses.length) return null;
      const careless = misses.filter(e => e.why === "careless").length;
      return Math.round((careless / misses.length) * 100);
    },

    dueResolves() {
      const d = db();
      const now = Date.now();
      return d.errorLog.filter(e => !e.resolved && e.resolveOn <= now);
    },

    // ---- accuracy stats ----
    accuracyByDifficulty() {
      const d = db();
      const out = { easy: { s: 0, c: 0 }, medium: { s: 0, c: 0 }, hard: { s: 0, c: 0 } };
      d.attempts.forEach(a => {
        const b = out[a.difficulty];
        if (b) { b.s++; if (a.correct) b.c++; }
      });
      return out;
    },

    // ---- mocks ----
    addMock(mock) {
      const d = db();
      d.mocks.push(Object.assign({ ts: Date.now() }, mock));
      save(d);
    },

    // ---- plan ----
    togglePlanTask(key) {
      const d = db();
      d.planChecks[key] = !d.planChecks[key];
      save(d);
      return d.planChecks[key];
    },

    setHours(h) {
      const d = db();
      d.settings.hoursPerWeek = h;
      save(d);
    },

    reset() {
      localStorage.removeItem(KEY);
    }
  };
})();
