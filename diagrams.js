/* ======================================================================
   diagrams.js  —  Interactive NCERT Biology Diagram Learner (Class 11 & 12)
   ----------------------------------------------------------------------
   HOW IT WORKS
   - Each diagram = one background (image URL OR inline SVG) + hotspots.
   - Hotspots are placed by PERCENTAGE coordinates (x, y from 0–100),
     so they stay aligned on any screen size and any image aspect.
   - Two modes:
       LEARN → tap a pin to reveal its label (+ optional hint).
       TEST  → pins are blank; pick from a shuffled label bank. Scored.

   HOW TO SCALE THIS TO ALL ~40 DIAGRAMS  (read this, it's the whole point)
   - EASIEES path: use an image. Drop the NCERT/your-own diagram as a URL,
     then eyeball the hotspot x/y in percent. To find coords fast, open the
     image, and remember: left edge = 0, right = 100, top = 0, bottom = 100.
   - Use the DIAGRAM_TEMPLATE at the bottom to add a new one in ~2 min.
   - Keep SVG only for simple stuff you can't source as an image.

   MOUNTING
     <div id="diagram-app"></div>
     <script src="diagrams.js"></script>
     <script>DiagramLearner.mount(document.getElementById('diagram-app'));</script>
   ====================================================================== */

(function () {
  "use strict";

  /* =====================================================================
     1. DATA  — add diagrams here. Group by class → chapter.
        hotspot: { x, y, label, hint? }   x,y are 0–100 (% of the box)
        background: EITHER  { img: "url" }   OR   { svg: `<svg...>` }
     ===================================================================== */
  const DATA = {
    diagrams: {
      // -------- CLASS 11 : Neural Control & Coordination --------
      neuron: {
        id: "neuron",
        cls: 11,
        chapter: "Neural Control & Coordination",
        title: "Structure of a Neuron",
        color: "#8e44ad",
        // Inline SVG demo (no image needed). You can swap this for { img: "..." }.
        background: {
          svg: `
            <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              <!-- dendrites -->
              <g stroke="#8e44ad" stroke-width="4" fill="none">
                <path d="M150 200 L70 120"/><path d="M150 200 L60 180"/>
                <path d="M150 200 L70 250"/><path d="M150 200 L90 300"/>
                <path d="M120 160 L80 130"/><path d="M120 240 L80 280"/>
              </g>
              <!-- cell body -->
              <circle cx="180" cy="200" r="55" fill="#e8d5f2" stroke="#8e44ad" stroke-width="4"/>
              <circle cx="180" cy="200" r="22" fill="#8e44ad"/>
              <!-- axon -->
              <rect x="235" y="188" width="360" height="24" rx="12" fill="#e8d5f2" stroke="#8e44ad" stroke-width="3"/>
              <!-- myelin segments -->
              <ellipse cx="320" cy="200" rx="40" ry="22" fill="#f4a261" stroke="#8e44ad" stroke-width="3"/>
              <ellipse cx="430" cy="200" rx="40" ry="22" fill="#f4a261" stroke="#8e44ad" stroke-width="3"/>
              <ellipse cx="540" cy="200" rx="40" ry="22" fill="#f4a261" stroke="#8e44ad" stroke-width="3"/>
              <!-- axon terminals -->
              <g stroke="#8e44ad" stroke-width="4" fill="none">
                <path d="M595 200 L680 150"/><path d="M595 200 L700 200"/><path d="M595 200 L680 250"/>
              </g>
              <circle cx="682" cy="150" r="7" fill="#8e44ad"/>
              <circle cx="702" cy="200" r="7" fill="#8e44ad"/>
              <circle cx="682" cy="250" r="7" fill="#8e44ad"/>
            </svg>`
        },
        hotspots: [
          { x: 10, y: 40, label: "Dendrites", hint: "Receive signals from other neurons" },
          { x: 22, y: 50, label: "Cell body (Cyton)", hint: "Contains nucleus & organelles" },
          { x: 22, y: 50, label: "Nucleus", hint: "Dark central mass — control centre", y2: true },
          { x: 40, y: 50, label: "Myelin sheath", hint: "Fatty insulation, speeds impulse" },
          { x: 46, y: 65, label: "Axon", hint: "Carries impulse away from cyton" },
          { x: 62, y: 50, label: "Node of Ranvier", hint: "Gap between myelin — saltatory conduction" },
          { x: 87, y: 40, label: "Axon terminals", hint: "Release neurotransmitters at synapse" }
        ]
      },

      // -------- CLASS 11 : Photosynthesis (Chloroplast) --------
      chloroplast: {
        id: "chloroplast",
        cls: 11,
        chapter: "Photosynthesis in Higher Plants",
        title: "Structure of a Chloroplast",
        color: "#27ae60",
        background: {
          svg: `
            <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="400" cy="200" rx="330" ry="150" fill="#eafaf1" stroke="#27ae60" stroke-width="5"/>
              <ellipse cx="400" cy="200" rx="312" ry="134" fill="none" stroke="#27ae60" stroke-width="3"/>
              <!-- grana stacks -->
              <g>
                ${[260, 400, 540].map(cx => `
                  <g>
                    ${[0,1,2,3,4].map(i => `<ellipse cx="${cx}" cy="${170+i*16}" rx="38" ry="9" fill="#27ae60" opacity="0.85"/>`).join("")}
                  </g>`).join("")}
              </g>
              <!-- stroma lamellae connecting grana -->
              <path d="M298 200 L362 200 M438 200 L502 200" stroke="#1e8449" stroke-width="6"/>
              <!-- a free stroma dot to mark stroma region -->
              <circle cx="400" cy="290" r="5" fill="#1e8449"/>
            </svg>`
        },
        hotspots: [
          { x: 8,  y: 30, label: "Outer membrane", hint: "Freely permeable envelope" },
          { x: 12, y: 55, label: "Inner membrane", hint: "Selectively permeable" },
          { x: 50, y: 75, label: "Stroma", hint: "Fluid matrix — site of dark reactions (Calvin cycle)" },
          { x: 33, y: 45, label: "Granum", hint: "Stack of thylakoids" },
          { x: 50, y: 43, label: "Thylakoid", hint: "Site of light reactions; holds chlorophyll" },
          { x: 62, y: 50, label: "Stroma lamella", hint: "Connects grana together" }
        ]
      }

      // ↓↓↓ ADD MORE DIAGRAMS HERE — copy DIAGRAM_TEMPLATE from the bottom ↓↓↓
    }
  };

  /* =====================================================================
     2. STYLES (injected once)
     ===================================================================== */
  const CSS = `
  .dl-wrap{font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;max-width:920px;margin:0 auto;color:#1c1c1e}
  .dl-bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:14px}
  .dl-bar select{padding:8px 10px;border:1px solid #d0d0d5;border-radius:8px;font-size:14px;background:#fff}
  .dl-modes{margin-left:auto;display:flex;background:#eee;border-radius:10px;padding:3px}
  .dl-modes button{border:0;background:transparent;padding:7px 16px;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;color:#555}
  .dl-modes button.on{background:#fff;color:#000;box-shadow:0 1px 3px rgba(0,0,0,.15)}
  .dl-title{font-size:18px;font-weight:700;margin:2px 0 10px}
  .dl-stage{position:relative;width:100%;border:1px solid #e4e4e8;border-radius:14px;background:#fafafa;overflow:hidden}
  .dl-stage svg,.dl-stage img{display:block;width:100%;height:auto}
  .dl-pin{position:absolute;transform:translate(-50%,-50%);z-index:5}
  .dl-dot{width:22px;height:22px;border-radius:50%;border:3px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.35);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#fff}
  .dl-tag{position:absolute;left:50%;top:-8px;transform:translate(-50%,-100%);white-space:nowrap;background:#1c1c1e;color:#fff;padding:5px 9px;border-radius:7px;font-size:12.5px;font-weight:600;pointer-events:none;opacity:0;transition:opacity .12s}
  .dl-pin.show .dl-tag{opacity:1}
  .dl-tag:after{content:"";position:absolute;left:50%;top:100%;transform:translateX(-50%);border:5px solid transparent;border-top-color:#1c1c1e}
  .dl-hint{font-size:11px;font-weight:400;opacity:.85;display:block}
  .dl-bank{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}
  .dl-chip{padding:8px 12px;border-radius:20px;border:1px solid #ccc;background:#fff;font-size:13.5px;font-weight:600;cursor:pointer;user-select:none}
  .dl-chip.sel{background:#1c1c1e;color:#fff;border-color:#1c1c1e}
  .dl-chip.used{opacity:.35;pointer-events:none;text-decoration:line-through}
  .dl-foot{display:flex;align-items:center;gap:12px;margin-top:14px}
  .dl-score{font-size:15px;font-weight:700}
  .dl-btn{border:0;border-radius:9px;padding:9px 16px;font-weight:700;font-size:14px;cursor:pointer;background:#1c1c1e;color:#fff}
  .dl-note{font-size:12.5px;color:#777;margin-top:6px}
  .dl-pin.ok .dl-dot{background:#27ae60!important}
  .dl-pin.no .dl-dot{background:#e74c3c!important}
  `;

  /* =====================================================================
     3. ENGINE
     ===================================================================== */
  const DiagramLearner = {
    _el: null,
    _mode: "learn",     // "learn" | "test"
    _currentId: null,
    _selectedChip: null,
    _answers: {},       // pinIndex -> label chosen (test mode)

    mount(el, diagramId) {
      if (!el) return console.error("DiagramLearner.mount: no element");
      this._el = el;
      if (!document.getElementById("dl-style")) {
        const s = document.createElement("style");
        s.id = "dl-style"; s.textContent = CSS;
        document.head.appendChild(s);
      }
      const ids = Object.keys(DATA.diagrams);
      if (diagramId && DATA.diagrams[diagramId]) {
        this._currentId = diagramId;
      } else if (!this._currentId) {
        this._currentId = ids[0];
      }
      this.render();
    },

    _diagram() { return DATA.diagrams[this._currentId]; },

    render() {
      const d = this._diagram();
      const ids = Object.keys(DATA.diagrams);
      this._answers = {};
      this._selectedChip = null;

      const options = ids.map(id => {
        const x = DATA.diagrams[id];
        return `<option value="${id}" ${id === this._currentId ? "selected" : ""}>Class ${x.cls} · ${x.title}</option>`;
      }).join("");

      this._el.innerHTML = `
        <div class="dl-wrap">
          <div class="dl-bar">
            <select class="dl-select">${options}</select>
            <div class="dl-modes">
              <button data-mode="learn" class="${this._mode === "learn" ? "on" : ""}">Learn</button>
              <button data-mode="test"  class="${this._mode === "test" ? "on" : ""}">Test</button>
            </div>
          </div>
          <div class="dl-title" style="color:${d.color}">${d.title}
            <span style="color:#999;font-weight:500;font-size:13px;">— ${d.chapter}</span>
          </div>
          <div class="dl-stage">${d.background.svg || `<img src="${d.background.img}" alt="${d.title}">`}</div>
          <div class="dl-body"></div>
        </div>`;

      // wire controls
      this._el.querySelector(".dl-select").onchange = (e) => {
        this._currentId = e.target.value; this.render();
      };
      this._el.querySelectorAll(".dl-modes button").forEach(b => {
        b.onclick = () => { this._mode = b.dataset.mode; this.render(); };
      });

      this._mode === "learn" ? this._renderLearn() : this._renderTest();
    },

    _stage() { return this._el.querySelector(".dl-stage"); },
    _body()  { return this._el.querySelector(".dl-body"); },

    _renderLearn() {
      const d = this._diagram();
      const stage = this._stage();
      d.hotspots.forEach((h, i) => {
        const pin = this._makePin(h, i, d.color);
        pin.querySelector(".dl-dot").textContent = i + 1;
        pin.onclick = () => pin.classList.toggle("show");
        stage.appendChild(pin);
      });
      this._body().innerHTML = `<div class="dl-note">Tap any numbered pin to reveal its label. Switch to <b>Test</b> to quiz yourself.</div>`;
    },

    _renderTest() {
      const d = this._diagram();
      const stage = this._stage();

      // blank pins
      d.hotspots.forEach((h, i) => {
        const pin = this._makePin(h, i, "#95a5a6");
        pin.querySelector(".dl-dot").textContent = "?";
        pin.dataset.idx = i;
        pin.onclick = () => this._placeLabel(i, pin);
        stage.appendChild(pin);
      });

      // shuffled unique label bank
      const labels = [...new Set(d.hotspots.map(h => h.label))];
      shuffle(labels);
      const chips = labels.map(l =>
        `<div class="dl-chip" data-label="${escapeHtml(l)}">${escapeHtml(l)}</div>`
      ).join("");

      this._body().innerHTML = `
        <div class="dl-bank">${chips}</div>
        <div class="dl-foot">
          <button class="dl-btn dl-check">Check answers</button>
          <span class="dl-score"></span>
        </div>
        <div class="dl-note">Pick a label, then tap the pin it belongs to. Tap a placed pin to clear it.</div>`;

      this._el.querySelectorAll(".dl-chip").forEach(c => {
        c.onclick = () => {
          if (c.classList.contains("used")) return;
          this._el.querySelectorAll(".dl-chip").forEach(x => x.classList.remove("sel"));
          c.classList.add("sel");
          this._selectedChip = c.dataset.label;
        };
      });
      this._el.querySelector(".dl-check").onclick = () => this._check();
    },

    _placeLabel(idx, pin) {
      // tapping a filled pin clears it
      if (this._answers[idx]) {
        const freed = this._answers[idx];
        delete this._answers[idx];
        pin.classList.remove("show", "ok", "no");
        pin.querySelector(".dl-dot").textContent = "?";
        pin.querySelector(".dl-tag").innerHTML = "";
        this._refreshChips(freed);
        return;
      }
      if (!this._selectedChip) return;
      this._answers[idx] = this._selectedChip;
      pin.classList.add("show");
      pin.querySelector(".dl-dot").textContent = "•";
      pin.querySelector(".dl-tag").textContent = this._selectedChip;
      this._el.querySelectorAll(".dl-chip").forEach(c => {
        if (c.dataset.label === this._selectedChip) c.classList.add("used");
      });
      this._selectedChip = null;
      this._el.querySelectorAll(".dl-chip").forEach(x => x.classList.remove("sel"));
    },

    _refreshChips(label) {
      // re-enable a chip if no pin still uses it
      const stillUsed = Object.values(this._answers).includes(label);
      if (!stillUsed) {
        this._el.querySelectorAll(".dl-chip").forEach(c => {
          if (c.dataset.label === label) c.classList.remove("used");
        });
      }
    },

    _check() {
      const d = this._diagram();
      let correct = 0;
      d.hotspots.forEach((h, i) => {
        const pin = this._stage().querySelector(`.dl-pin[data-idx="${i}"]`);
        const chosen = this._answers[i];
        pin.classList.remove("ok", "no");
        if (chosen === h.label) { pin.classList.add("ok", "show"); correct++; }
        else if (chosen) { pin.classList.add("no", "show"); }
      });
      const total = d.hotspots.length;
      const s = this._el.querySelector(".dl-score");
      s.textContent = `${correct} / ${total} correct`;
      s.style.color = correct === total ? "#27ae60" : "#e67e22";
    },

    _makePin(h, i, color) {
      const pin = document.createElement("div");
      pin.className = "dl-pin";
      pin.dataset.idx = i;
      // small vertical offset for stacked labels sharing a coord (e.g. nucleus inside cyton)
      const yy = h.y2 ? h.y + 12 : h.y;
      pin.style.left = h.x + "%";
      pin.style.top = yy + "%";
      pin.innerHTML = `
        <div class="dl-tag">${escapeHtml(h.label)}${h.hint ? `<span class="dl-hint">${escapeHtml(h.hint)}</span>` : ""}</div>
        <div class="dl-dot" style="background:${color}"></div>`;
      return pin;
    }
  };

  /* helpers */
  function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }

  // expose
  window.DiagramLearner = DiagramLearner;
  window.DIAGRAM_DATA = DATA; // so you can inspect/extend at runtime

  /* =====================================================================
     DIAGRAM_TEMPLATE  — copy this into DATA.diagrams to add a new one.
     ---------------------------------------------------------------------
     RECOMMENDED (scalable) = image + percentage hotspots:

     DATA.diagrams.nephron = {
       id: "nephron",
       cls: 11,
       chapter: "Excretory Products & their Elimination",
       title: "Structure of a Nephron",
       color: "#e67e22",
       background: { img: "https://your-cdn.com/nephron.png" },  // <-- your image
       hotspots: [
         { x: 20, y: 30, label: "Bowman's capsule", hint: "Cup around the glomerulus" },
         { x: 35, y: 55, label: "PCT", hint: "Proximal convoluted tubule" },
         { x: 55, y: 70, label: "Loop of Henle", hint: "Concentrates urine" }
         // ...add all labels for this diagram
       ]
     };

     Notes:
     - x,y are 0–100 (% of the image box). Left→right = x, top→bottom = y.
     - Duplicate a coordinate + add  y2:true  to stack two labels near one point.
     - Use svg:`...` instead of img only when you can't source an image.
     ===================================================================== */

})();
