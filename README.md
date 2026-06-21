# GMAT 740 Trainer (Focus Edition)

A simple, self-contained prep app that trains toward a **legacy-740 equivalent**
on the GMAT Focus Edition — a **Focus 685 floor** (≈95.8th percentile), with a
**685–705 training band** for safety. Built directly from the research foundation
in `GMAT_740_Research_Foundation`.

No build step, no dependencies, no backend. Open it and study; all progress is
saved in your browser's `localStorage`.

## Run it

```bash
# simplest — just open the file
open index.html            # macOS
xdg-open index.html        # Linux

# or serve it (recommended, avoids any file:// quirks)
python3 -m http.server 8000
# then visit http://localhost:8000
```

## What's inside (maps to the research "app build order")

| Spec item | Where it lives |
|-----------|----------------|
| 1. Locked to Focus Edition (3 sections, 64 Q, 205–805 / 60–90) | `js/data/concordance.js`, Scoring view |
| 2. Scoring / percentile engine (GMAC July-2025 concordance, default target 685, band 685–705, back-solved Q86–88 / V85–86 / DI83–84) | `js/data/concordance.js`, **Scoring & Target** |
| 3. Curriculum tree (exhaustive §3 concept list, per-concept mastery) | `js/data/curriculum.js`, **Curriculum** |
| 4. Pattern-recognition layer (CR/DS/RC/TPA decision trees + trap library) | `js/data/patterns.js`, **Patterns & Traps** |
| 5. Progress tracking + first-class error log with why-wrong tagging, scheduled re-solves, and a **careless-error-rate** metric | `js/storage.js`, **Error Log** + Dashboard |
| 6. Mock engine (balanced full mix, Focus-scale scoring, next-focus recommendation, below-685 flag) | `js/app.js`, **Mock Test** |
| 7. 16-week study plan with benchmark-driven adjustment rules | `js/data/studyplan.js`, **16-Week Plan** |

## Features

- **Dashboard** — careless-error rate, medium-difficulty accuracy gate (≥85%),
  re-solves due, and section mastery bars.
- **Scoring & Target** — full legacy↔Focus↔percentile concordance, required
  section bands, and a quick total→percentile checker.
- **Curriculum** — the entire syllabus as collapsible modules; drilling updates
  mastery %.
- **Practice** — filter by section/difficulty, on-screen timer (~2 min/Q),
  full explanations + the specific trap each item tests, and one-click "send to
  error log" with a why-wrong tag (concept gap / misread / careless / timing).
- **Patterns & Traps** — classify-first decision trees and the trap library.
- **Error Log** — the highest-leverage tool: tagged misses, careless-rate
  tracking, and spaced re-solves (default 3 days).
- **Mock Test** — a condition-faithful mixed mock scored on 205–805; wrong
  answers auto-populate the error log; any total below 685 is flagged.
- **16-Week Plan** — the foundations → mastery → mixed/timed → mocks schedule
  with checkable tasks.

## Updating data (important)

The concordance is many-to-many and GMAC republishes it every Q3. Percentile and
concordance tables are kept as **editable data**, not hard-coded logic — edit
`js/data/concordance.js` when a new GMAC table ships. The question bank in
`js/data/questions.js` is representative official-style content; swap in / add
more items there (same shape) to grow it.

## Notes

- GMAC does not publish official topic-weighting percentages; frequency figures
  in the curriculum are directional (third-party analyses of official questions).
- This app is a study/training tool and is not affiliated with GMAC.
