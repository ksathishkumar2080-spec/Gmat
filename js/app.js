/* GMAT 740 Trainer — single-page app.
 * Hash router + view renderers. No build step, no dependencies.
 */
(function () {
  const D = window.GMAT_DATA;
  const app = document.getElementById("app");

  // ---------- small DOM helpers ----------
  const el = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstChild; };
  const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const pct = (c, s) => (s ? Math.round((c / s) * 100) : 0);

  const ROUTES = [
    { id: "dashboard", label: "Dashboard", icon: "◎" },
    { id: "scoring", label: "Scoring & Target", icon: "◈" },
    { id: "curriculum", label: "Curriculum", icon: "❏" },
    { id: "practice", label: "Practice", icon: "✎" },
    { id: "patterns", label: "Patterns & Traps", icon: "⚡" },
    { id: "errors", label: "Error Log", icon: "⚑" },
    { id: "mock", label: "Mock Test", icon: "◷" },
    { id: "plan", label: "16-Week Plan", icon: "▤" }
  ];

  // ---------- layout ----------
  function shell(active) {
    document.getElementById("nav").innerHTML = ROUTES.map(r =>
      `<a href="#${r.id}" class="navlink ${r.id === active ? "active" : ""}">
         <span class="ico">${r.icon}</span>${r.label}</a>`
    ).join("");
  }

  // =====================================================================
  // DASHBOARD
  // =====================================================================
  function viewDashboard() {
    const t = D.target;
    const careless = Store.carelessRate();
    const due = Store.dueResolves().length;
    const acc = Store.accuracyByDifficulty();
    const med = acc.medium;
    const medPct = pct(med.c, med.s);
    const data = Store.all();
    const attempts = data.attempts.length;
    const lastMock = data.mocks[data.mocks.length - 1];

    const carelessClass = careless === null ? "" : (careless > 10 ? "bad" : "good");

    return `
      <h1>Dashboard</h1>
      <p class="lede">Target: <strong>Focus ${t.floorFocus}</strong> (legacy-740 equivalent, ≈95.8th pct) —
        training band <strong>${t.bandLowFocus}–${t.bandHighFocus}</strong>.
        Required: <strong>Q${t.sections.quant.low}–${t.sections.quant.high}</strong> /
        <strong>V${t.sections.verbal.low}–${t.sections.verbal.high}</strong> /
        <strong>DI${t.sections.data.low}–${t.sections.data.high}</strong>, balanced.</p>

      <div class="grid">
        <div class="card metric ${carelessClass}">
          <div class="metric-label">Careless-error rate</div>
          <div class="metric-val">${careless === null ? "—" : careless + "%"}</div>
          <div class="metric-sub">${careless === null ? "Log some misses to track" :
            (careless > 10 ? "Above 10% — #1 thing to fix" : "Under control (≤10%)")}</div>
        </div>
        <div class="card metric ${med.s ? (medPct >= 85 ? "good" : "warn") : ""}">
          <div class="metric-label">Medium-difficulty accuracy</div>
          <div class="metric-val">${med.s ? medPct + "%" : "—"}</div>
          <div class="metric-sub">${med.s ? (medPct >= 85 ? "Gate cleared (≥85%)" : "Below 85% gate — fix before hard Qs") : "No medium attempts yet"}</div>
        </div>
        <div class="card metric">
          <div class="metric-label">Re-solves due</div>
          <div class="metric-val">${due}</div>
          <div class="metric-sub">${due ? "Scheduled error re-solves waiting" : "Nothing due"}</div>
        </div>
        <div class="card metric">
          <div class="metric-label">Questions attempted</div>
          <div class="metric-val">${attempts}</div>
          <div class="metric-sub">${lastMock ? "Last mock: Focus " + lastMock.focusTotal : "No mock yet"}</div>
        </div>
      </div>

      <div class="card">
        <h2>Section mastery snapshot</h2>
        ${sectionBars()}
      </div>

      <div class="card">
        <h2>Why 685+ is harder than it looks</h2>
        <ul class="bullets">
          <li><strong>Careless errors must approach zero</strong> — one avoidable miss can cost 10–20 points.</li>
          <li><strong>No weak section</strong> — all three must sit in the 83–88 range; you can't carry one.</li>
          <li><strong>Mediums near-automatic</strong> — if medium accuracy &lt; 85%, fix that before hard questions.</li>
        </ul>
        <div class="row">
          <a class="btn" href="#practice">Start a drill</a>
          <a class="btn ghost" href="#mock">Take a mock</a>
        </div>
      </div>`;
  }

  function sectionBars() {
    const data = Store.all();
    return D.curriculum.map(sec => {
      // aggregate mastery across this section's topics from attempts
      let seen = 0, correct = 0;
      data.attempts.filter(a => a.section === sec.section).forEach(a => { seen++; if (a.correct) correct++; });
      const p = pct(correct, seen);
      return `<div class="bar-row">
        <span class="bar-label">${sec.label}</span>
        <div class="bar"><div class="bar-fill" style="width:${seen ? p : 2}%"></div></div>
        <span class="bar-num">${seen ? p + "%" : "—"} <small>(${seen})</small></span>
      </div>`;
    }).join("");
  }

  // =====================================================================
  // SCORING & TARGET
  // =====================================================================
  function viewScoring() {
    const t = D.target;
    const rows = D.concordance.map(c =>
      `<tr class="${c.focus === t.floorFocus ? "hl" : ""}">
        <td>${c.legacy}</td><td>${c.focus}</td><td>${c.percentile}%</td></tr>`).join("");

    const sec = (k) => {
      const s = t.sections[k];
      const pts = Object.entries(s.points).map(([p, pc]) => `${p}→${pc}th`).join(" · ");
      return `<tr><td><strong>${s.label}</strong></td>
        <td>${s.low}–${s.high}</td>
        <td>${pts}</td>
        <td>${s.mean ? s.mean : "—"}</td></tr>`;
    };

    return `
      <h1>Scoring &amp; Target</h1>
      <p class="lede">Format: 3 equal sections · 64 questions · 2h15m · Focus total <strong>205–805</strong>
        (10-pt steps, always ending in 5) · sections <strong>60–90</strong> (1-pt steps), equally weighted.</p>

      <div class="card">
        <h2>Concordance — your 740 resolved</h2>
        <p class="muted">GMAC official, ${esc(D.lastUpdated)}. Many-to-many; updates each Q3 — kept as editable data.</p>
        <table class="tbl">
          <thead><tr><th>Legacy (200–800)</th><th>Focus (205–805)</th><th>Percentile</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
        <p class="note">Your floor: <strong>Focus ${t.floorFocus}</strong> (legacy 740, 95.8th).
          Training band <strong>${t.bandLowFocus}–${t.bandHighFocus}</strong> to clear, not just touch.</p>
      </div>

      <div class="card">
        <h2>Required section scores (60–90)</h2>
        <table class="tbl">
          <thead><tr><th>Section</th><th>Target band</th><th>Point→percentile</th><th>Section mean</th></tr></thead>
          <tbody>${sec("quant")}${sec("verbal")}${sec("data")}</tbody>
        </table>
        <ul class="bullets">
          <li><strong>Quant</strong> — hardest to rank highly (quant-strong international pool).</li>
          <li><strong>Verbal</strong> — high verbal is now a strong differentiator.</li>
          <li><strong>Data Insights</strong> — lowest mean → most efficient place to gain percentile.</li>
        </ul>
      </div>

      <div class="card">
        <h2>Quick total → percentile check</h2>
        <div class="row">
          <input id="totalIn" class="num" type="number" placeholder="e.g. 685" step="10" />
          <button class="btn" id="totalBtn">Check</button>
          <span id="totalOut" class="pill"></span>
        </div>
      </div>`;
  }

  // =====================================================================
  // CURRICULUM
  // =====================================================================
  function viewCurriculum() {
    const data = Store.all();
    const masteryFor = (topic) => {
      const m = data.mastery[topic];
      return m ? pct(m.correct, m.seen) + "% (" + m.seen + ")" : "";
    };
    const sections = D.curriculum.map(sec => `
      <div class="card">
        <h2>${sec.label}</h2>
        <p class="muted">${esc(sec.blurb)}</p>
        ${sec.groups.map(g => `
          <details class="grp">
            <summary>${esc(g.name)} ${g.weight ? `<span class="tag">${esc(g.weight)}</span>` : ""}</summary>
            <ul class="concepts">
              ${g.concepts.map(c => `<li>${esc(c)} <span class="mscore">${masteryFor(c)}</span></li>`).join("")}
            </ul>
          </details>`).join("")}
      </div>`).join("");
    return `<h1>Curriculum Tree</h1>
      <p class="lede">Every concept from the exhaustive syllabus. Drill items in Practice update your mastery here.</p>
      ${sections}`;
  }

  // =====================================================================
  // PRACTICE  (drill engine with timer + error-log capture)
  // =====================================================================
  let practiceState = null;

  function viewPractice() {
    const sections = [["all", "All sections"], ["quant", "Quant"], ["verbal", "Verbal"], ["data", "Data Insights"]];
    const diffs = [["all", "All"], ["easy", "Easy"], ["medium", "Medium"], ["hard", "Hard"]];
    return `<h1>Practice Drills</h1>
      <p class="lede">Classify on sight, time yourself (~2 min/Q), and every miss can be sent straight to the error log.</p>
      <div class="card">
        <div class="row">
          <label>Section
            <select id="pSec">${sections.map(s => `<option value="${s[0]}">${s[1]}</option>`).join("")}</select></label>
          <label>Difficulty
            <select id="pDiff">${diffs.map(s => `<option value="${s[0]}">${s[1]}</option>`).join("")}</select></label>
          <button class="btn" id="pStart">Start drill</button>
        </div>
      </div>
      <div id="pArea"></div>`;
  }

  function startPractice() {
    const sec = document.getElementById("pSec").value;
    const diff = document.getElementById("pDiff").value;
    let pool = D.questions.filter(q =>
      (sec === "all" || q.section === sec) && (diff === "all" || q.difficulty === diff));
    if (!pool.length) { document.getElementById("pArea").innerHTML = `<div class="card">No questions match that filter.</div>`; return; }
    // shuffle
    pool = pool.slice().sort(() => Math.random() - 0.5);
    practiceState = { pool, i: 0, answered: false, startTs: Date.now() };
    renderQuestion();
  }

  function renderQuestion() {
    const s = practiceState;
    const q = s.pool[s.i];
    s.startTs = Date.now();
    const area = document.getElementById("pArea");
    area.innerHTML = `
      <div class="card qcard">
        <div class="qmeta">
          <span class="tag">${esc(q.section)}</span>
          <span class="tag">${esc(q.type)}</span>
          <span class="tag ${q.difficulty}">${q.difficulty}</span>
          <span class="timer" id="qTimer">0:00</span>
          <span class="counter">${s.i + 1} / ${s.pool.length}</span>
        </div>
        ${q.passage ? `<div class="passage">${esc(q.passage)}</div>` : ""}
        <div class="stem">${esc(q.stem).replace(/\n/g, "<br>")}</div>
        <div class="choices" id="qChoices">
          ${q.choices.map((c, idx) =>
            `<button class="choice" data-idx="${idx}">${String.fromCharCode(65 + idx)}. ${esc(c)}</button>`).join("")}
        </div>
        <div id="qFeedback"></div>
      </div>`;
    startTimer();
    area.querySelectorAll(".choice").forEach(b =>
      b.addEventListener("click", () => answer(parseInt(b.dataset.idx, 10))));
  }

  let timerInt = null;
  function startTimer() {
    clearInterval(timerInt);
    const start = Date.now();
    const t = document.getElementById("qTimer");
    timerInt = setInterval(() => {
      const sec = Math.floor((Date.now() - start) / 1000);
      if (t) t.textContent = Math.floor(sec / 60) + ":" + String(sec % 60).padStart(2, "0");
    }, 500);
  }

  function answer(idx) {
    const s = practiceState;
    if (s.answered) return;
    s.answered = true;
    clearInterval(timerInt);
    const q = s.pool[s.i];
    const seconds = Math.round((Date.now() - s.startTs) / 1000);
    const correct = idx === q.answer;

    Store.recordAttempt({ qid: q.id, section: q.section, type: q.type, topic: q.topic, difficulty: q.difficulty, correct, seconds });

    document.querySelectorAll(".choice").forEach((b, i) => {
      b.disabled = true;
      if (i === q.answer) b.classList.add("right");
      if (i === idx && !correct) b.classList.add("wrong");
    });

    const fb = document.getElementById("qFeedback");
    fb.innerHTML = `
      <div class="feedback ${correct ? "ok" : "no"}">
        <strong>${correct ? "Correct" : "Not quite"}</strong> · ${seconds}s
        <p>${esc(q.explanation)}</p>
        <p class="traptag">⚠ Trap: ${esc(q.trap)}</p>
        ${!correct ? `
          <div class="logbox">
            <span>Send to error log — why wrong?</span>
            <div class="whyrow">
              ${Store.WHY_TAGS.map(w => `<button class="whybtn" data-why="${w}">${w}</button>`).join("")}
            </div>
          </div>` : ""}
        <div class="row">
          ${s.i < s.pool.length - 1 ? `<button class="btn" id="nextQ">Next question →</button>`
            : `<button class="btn" id="doneQ">Finish</button>`}
        </div>
      </div>`;

    fb.querySelectorAll(".whybtn").forEach(b => b.addEventListener("click", () => {
      Store.addError({ qid: q.id, section: q.section, type: q.type, topic: q.topic, why: b.dataset.why, note: q.stem.slice(0, 80) });
      b.closest(".logbox").innerHTML = `<span class="ok-inline">✓ Logged as "${b.dataset.why}" — re-solve scheduled in 3 days.</span>`;
    }));

    const next = document.getElementById("nextQ");
    if (next) next.addEventListener("click", () => { s.i++; s.answered = false; renderQuestion(); });
    const done = document.getElementById("doneQ");
    if (done) done.addEventListener("click", () => { document.getElementById("pArea").innerHTML = `<div class="card">Drill complete. Nice work — check the Dashboard for updated mastery.</div>`; });
  }

  // =====================================================================
  // PATTERNS & TRAPS
  // =====================================================================
  function viewPatterns() {
    const trees = D.decisionTrees.map(t => `
      <div class="card">
        <h2>${esc(t.name)}</h2>
        <ol class="steps">${t.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol>
        ${t.answers ? `<div class="ds-grid">${t.answers.map(a => `<div class="ds-cell">${esc(a)}</div>`).join("")}</div>` : ""}
      </div>`).join("");
    const traps = `
      <div class="card">
        <h2>Trap Library</h2>
        <table class="tbl">
          <thead><tr><th>Trap</th><th>Tell</th><th>Fix</th></tr></thead>
          <tbody>${D.trapLibrary.map(t =>
            `<tr><td><strong>${esc(t.trap)}</strong></td><td class="muted">${esc(t.tell)}</td><td>${esc(t.fix)}</td></tr>`).join("")}</tbody>
        </table>
      </div>`;
    return `<h1>Patterns &amp; Traps</h1>
      <p class="lede">Classify-first decision trees + the trap library. Internalize these until classification is automatic.</p>
      ${trees}${traps}`;
  }

  // =====================================================================
  // ERROR LOG
  // =====================================================================
  function viewErrors() {
    const data = Store.all();
    const log = data.errorLog.slice().reverse();
    const careless = Store.carelessRate();
    const counts = {};
    data.errorLog.forEach(e => counts[e.why] = (counts[e.why] || 0) + 1);

    const summary = Store.WHY_TAGS.map(w =>
      `<span class="pill">${w}: <strong>${counts[w] || 0}</strong></span>`).join("");

    const rows = log.length ? log.map(e => {
      const due = !e.resolved && e.resolveOn <= Date.now();
      return `<tr class="${e.resolved ? "muted" : (due ? "due" : "")}">
        <td>${esc(e.section)}<br><small>${esc(e.type)}</small></td>
        <td>${esc(e.topic || "")}</td>
        <td><span class="why ${e.why.replace(" ", "-")}">${esc(e.why)}</span></td>
        <td>${e.resolved ? "✓ resolved" : (due ? "⏰ due now" : new Date(e.resolveOn).toLocaleDateString())}</td>
        <td>
          ${e.resolved ? "" : `<button class="mini" data-res="${e.id}">resolve</button>`}
          <button class="mini ghost" data-del="${e.id}">delete</button>
        </td>
      </tr>`;
    }).join("") : `<tr><td colspan="5" class="muted">No misses logged yet — they'll appear here from Practice and Mock.</td></tr>`;

    return `<h1>Error Log</h1>
      <p class="lede">The highest-leverage tool. At a 740-target, keep the careless category under ~10% of misses.</p>
      <div class="card">
        <div class="row wrap">
          <span class="metric-inline ${careless !== null && careless > 10 ? "bad" : "good"}">
            Careless rate: <strong>${careless === null ? "—" : careless + "%"}</strong></span>
          ${summary}
        </div>
      </div>
      <div class="card">
        <table class="tbl errlog">
          <thead><tr><th>Section</th><th>Topic</th><th>Why wrong</th><th>Re-solve</th><th></th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
  }

  // =====================================================================
  // MOCK TEST  (compact adaptive-flavored full mix + scoring)
  // =====================================================================
  let mockState = null;

  function viewMock() {
    if (mockState && !mockState.done) return renderMockQuestion();
    const data = Store.all();
    const hist = data.mocks.slice().reverse().map(m =>
      `<tr><td>${new Date(m.ts).toLocaleDateString()}</td><td>Focus ${m.focusTotal}</td>
        <td>${m.percentile}%</td><td class="${m.focusTotal >= D.target.floorFocus ? "good" : "bad"}">
        ${m.focusTotal >= D.target.floorFocus ? "✓ at target" : "below 685"}</td></tr>`).join("");
    return `<h1>Mock Test</h1>
      <p class="lede">A condition-faithful mixed mock across all three sections. Any total below <strong>685</strong> is flagged below-target.</p>
      <div class="card">
        <p>This compact mock pulls a balanced mix from the bank, times you, scores it on the Focus 205–805 scale, and gives a next-focus recommendation.</p>
        <button class="btn" id="mockStart">Start mock</button>
      </div>
      ${hist ? `<div class="card"><h2>Mock history</h2>
        <table class="tbl"><thead><tr><th>Date</th><th>Total</th><th>Percentile</th><th>Status</th></tr></thead>
        <tbody>${hist}</tbody></table></div>` : ""}`;
  }

  function startMock() {
    // balanced pull
    const pick = (sec, n) => D.questions.filter(q => q.section === sec).sort(() => Math.random() - 0.5).slice(0, n);
    const pool = [...pick("quant", 4), ...pick("verbal", 4), ...pick("data", 4)].sort(() => Math.random() - 0.5);
    mockState = { pool, i: 0, results: [], startTs: Date.now(), done: false };
    renderMockQuestion();
  }

  function renderMockQuestion() {
    const s = mockState;
    const q = s.pool[s.i];
    s.qStart = Date.now();
    app.innerHTML = `
      <h1>Mock Test</h1>
      <div class="card qcard">
        <div class="qmeta">
          <span class="tag">${esc(q.section)}</span>
          <span class="tag">${esc(q.type)}</span>
          <span class="counter">${s.i + 1} / ${s.pool.length}</span>
        </div>
        ${q.passage ? `<div class="passage">${esc(q.passage)}</div>` : ""}
        <div class="stem">${esc(q.stem).replace(/\n/g, "<br>")}</div>
        <div class="choices">
          ${q.choices.map((c, idx) => `<button class="choice" data-idx="${idx}">${String.fromCharCode(65 + idx)}. ${esc(c)}</button>`).join("")}
        </div>
      </div>`;
    app.querySelectorAll(".choice").forEach(b => b.addEventListener("click", () => {
      const idx = parseInt(b.dataset.idx, 10);
      const correct = idx === q.answer;
      const seconds = Math.round((Date.now() - s.qStart) / 1000);
      s.results.push({ q, correct, seconds });
      Store.recordAttempt({ qid: q.id, section: q.section, type: q.type, topic: q.topic, difficulty: q.difficulty, correct, seconds });
      if (!correct) Store.addError({ qid: q.id, section: q.section, type: q.type, topic: q.topic, why: "concept gap", note: "[mock] " + q.stem.slice(0, 70) });
      s.i++;
      if (s.i < s.pool.length) renderMockQuestion(); else finishMock();
    }));
  }

  function finishMock() {
    const s = mockState; s.done = true;
    // score each section 60-90 based on accuracy, then map to Focus total band.
    const bySec = { quant: [], verbal: [], data: [] };
    s.results.forEach(r => bySec[r.q.section].push(r.correct));
    const secScore = (arr) => {
      if (!arr.length) return 75;
      const a = arr.filter(Boolean).length / arr.length;
      return Math.round(60 + a * 30); // 60..90
    };
    const totals = { quant: secScore(bySec.quant), verbal: secScore(bySec.verbal), data: secScore(bySec.data) };
    const avg = (totals.quant + totals.verbal + totals.data) / 3;
    // map 60-90 avg → 205-805, rounded to nearest 10 ending in 5
    let focusTotal = 205 + Math.round(((avg - 60) / 30) * 600 / 10) * 10;
    focusTotal = Math.max(205, Math.min(805, focusTotal));
    const percentile = D.percentileForTotal(focusTotal);
    Store.addMock({ totals, focusTotal, percentile });

    // weakest section = next focus
    const weakest = Object.entries(totals).sort((a, b) => a[1] - b[1])[0];
    const secLabel = { quant: "Quant", verbal: "Verbal", data: "Data Insights" }[weakest[0]];
    const atTarget = focusTotal >= D.target.floorFocus;

    app.innerHTML = `
      <h1>Mock Result</h1>
      <div class="card metric ${atTarget ? "good" : "bad"}">
        <div class="metric-label">Estimated Focus Total</div>
        <div class="metric-val">${focusTotal}</div>
        <div class="metric-sub">${percentile}th percentile — ${atTarget ? "✓ at/above the 685 target" : "below the 685 target"}</div>
      </div>
      <div class="card">
        <h2>Section estimates (60–90)</h2>
        <table class="tbl">
          <thead><tr><th>Section</th><th>Est. score</th><th>Target band</th></tr></thead>
          <tbody>
            <tr><td>Quant</td><td>${totals.quant}</td><td>86–88</td></tr>
            <tr><td>Verbal</td><td>${totals.verbal}</td><td>85–86</td></tr>
            <tr><td>Data Insights</td><td>${totals.data}</td><td>83–84</td></tr>
          </tbody>
        </table>
        <p class="note">Next-week focus: <strong>${secLabel}</strong> (your weakest section this mock).
          Wrong answers were auto-added to your error log — tag the why-wrong reasons there.</p>
        <div class="row">
          <button class="btn" id="mockAgain">New mock</button>
          <a class="btn ghost" href="#errors">Review error log</a>
        </div>
      </div>`;
    document.getElementById("mockAgain").addEventListener("click", () => { mockState = null; startMock(); });
  }

  // =====================================================================
  // 16-WEEK PLAN
  // =====================================================================
  function viewPlan() {
    const p = D.studyPlan;
    const checks = Store.all().planChecks;
    const phases = p.phases.map((ph, pi) => `
      <div class="card">
        <h2>${esc(ph.label)} <span class="tag">${esc(ph.weeks)}</span></h2>
        <p class="muted">Focus: ${esc(ph.focus)}</p>
        <ul class="checklist">
          ${ph.tasks.map((task, ti) => {
            const key = "p" + pi + "t" + ti;
            return `<li><label><input type="checkbox" data-task="${key}" ${checks[key] ? "checked" : ""}/> ${esc(task)}</label></li>`;
          }).join("")}
        </ul>
      </div>`).join("");
    return `<h1>16-Week Plan</h1>
      <p class="lede">Beginner → Focus 685–705 · ~${p.hoursPerWeek[0]}–${p.hoursPerWeek[1]} hrs/week (~${p.totalHours[0]}–${p.totalHours[1]} hrs total).
        Check off tasks as you go.</p>
      ${phases}
      <div class="card">
        <h2>Adjustment rules</h2>
        <ul class="bullets">${p.adjustmentRules.map(r => `<li>${esc(r)}</li>`).join("")}</ul>
      </div>`;
  }

  // =====================================================================
  // ROUTER
  // =====================================================================
  function render() {
    const route = (location.hash.replace("#", "") || "dashboard");
    shell(route);
    let html;
    switch (route) {
      case "scoring": html = viewScoring(); break;
      case "curriculum": html = viewCurriculum(); break;
      case "practice": html = viewPractice(); break;
      case "patterns": html = viewPatterns(); break;
      case "errors": html = viewErrors(); break;
      case "mock": html = viewMock(); break;
      case "plan": html = viewPlan(); break;
      default: html = viewDashboard();
    }
    if (html !== undefined) app.innerHTML = html;
    wire(route);
    window.scrollTo(0, 0);
  }

  // post-render event wiring per view
  function wire(route) {
    if (route === "practice") {
      const b = document.getElementById("pStart");
      if (b) b.addEventListener("click", startPractice);
    }
    if (route === "mock") {
      const b = document.getElementById("mockStart");
      if (b) b.addEventListener("click", startMock);
    }
    if (route === "scoring") {
      const b = document.getElementById("totalBtn");
      if (b) b.addEventListener("click", () => {
        const v = parseInt(document.getElementById("totalIn").value, 10);
        const out = document.getElementById("totalOut");
        if (!v) { out.textContent = ""; return; }
        const p = D.percentileForTotal(v);
        out.textContent = `${v} → ~${p}th pct ${v >= D.target.floorFocus ? "✓ at target" : "(below 685)"}`;
        out.className = "pill " + (v >= D.target.floorFocus ? "good" : "bad");
      });
    }
    if (route === "errors") {
      app.querySelectorAll("[data-res]").forEach(b => b.addEventListener("click", () => { Store.resolveError(b.dataset.res); render(); }));
      app.querySelectorAll("[data-del]").forEach(b => b.addEventListener("click", () => { Store.deleteError(b.dataset.del); render(); }));
    }
    if (route === "plan") {
      app.querySelectorAll("[data-task]").forEach(c => c.addEventListener("change", () => Store.togglePlanTask(c.dataset.task)));
    }
  }

  window.addEventListener("hashchange", render);
  render();
})();
