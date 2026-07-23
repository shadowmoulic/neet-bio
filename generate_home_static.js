/*
  Generates a fully-static, crawlable HTML shell for the homepage and injects it
  into index.html between marker comments. This solves the "empty body for
  Googlebot" problem: the client-side app still hydrates and takes over via
  App.render() on load, but search engines (and users before JS/Supabase finish
  loading) now see real text, real headings, and real <a href> links straight
  into the 900+ pre-rendered pSEO pages (/notes/*, /mcq/*, /flashcards/*).

  Run: node generate_home_static.js   (after generate_pseo.js, since it reuses
  the same chapter-data aggregation approach)
*/
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = __dirname;
const filesDir = path.join(rootDir, 'files');
const indexPath = path.join(rootDir, 'index.html');

const rootFiles = fs.readdirSync(rootDir)
  .filter(f => f.endsWith('.js') && ![
    'verify_chapters.js', 'components.js', 'auth.js', 'config.js', 'extract.js',
    'extract2.js', 'generate_sitemap.js', 'generate_sql_migration.js',
    'migrate_via_api.js', 'generate_pseo.js', 'generate_home_static.js',
    'append_flashcards.js', 'delete_dups.js', 'example.js', 'generate_stats.js'
  ].includes(f));

const subFiles = fs.existsSync(filesDir)
  ? fs.readdirSync(filesDir).filter(f => f.endsWith('.js')).map(f => path.join('files', f))
  : [];

const allFiles = [...rootFiles, ...subFiles];

const DATA = { chapters: {} };
allFiles.forEach(file => {
  const filePath = path.join(rootDir, file);
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    const sandbox = { DATA: { chapters: {} }, window: {} };
    sandbox.window.DATA = sandbox.DATA;
    vm.createContext(sandbox);
    vm.runInContext(code, sandbox);
    Object.keys(sandbox.DATA.chapters).forEach(key => {
      DATA.chapters[key] = sandbox.DATA.chapters[key];
    });
  } catch (e) { /* skip */ }
});

const CHAPTER_SLUGS = {
  'living': 'the-living-world', 'bioclassif': 'biological-classification',
  'plant': 'plant-kingdom', 'animal': 'animal-kingdom',
  'morph': 'morphology-of-flowering-plants', 'anat': 'anatomy-of-flowering-plants',
  'struct_anim': 'structural-organisation-in-animals', 'biomol': 'biomolecules',
  'ch9': 'biotechnology-principles-and-processes', 'biotech_app': 'biotechnology-and-its-applications',
  'orgpop': 'organisms-and-populations', 'ecosystem': 'ecosystem',
  'biodiv': 'biodiversity-and-conservation', 'repro_health': 'reproductive-health',
  'human_health': 'human-health-and-disease', 'molecular': 'molecular-basis-of-inheritance',
  'inheritance': 'principles-of-inheritance-and-variation',
  'sexual_repro': 'sexual-reproduction-in-flowering-plants', 'evolution': 'evolution',
  'human_repro': 'human-reproduction', 'microbes': 'microbes-in-human-welfare',
  'phy': 'physics', 'chem': 'chemistry'
};
const getSlug = (id) => CHAPTER_SLUGS[id] || id.toLowerCase().replace(/_/g, '-').replace(/\./g, '-');

const SUBJECT_MAP = {
  living: 'bio11', bioclassif: 'bio11', plant: 'bio11', animal: 'bio11',
  morph: 'bio11', anat: 'bio11', struct_anim: 'bio11', biomol: 'bio11',
  brain_biolab11_cell: 'bio11',
  brain_biolabphotosynthesisandresphtml_c13: 'bio11',
  brain_biolabphotosynthesisandresphtml_c14: 'bio11',
  brain_bodyworks3chpsbioclas11html_loc: 'bio11',
  brain_bodyworks3chpsbioclas11html_bre: 'bio11',
  brain_divisionlab01cellcyclehtml: 'bio11',
  brain_biolab11_plant: 'bio11',
  brain_biolab11_blood: 'bio12', brain_biolab11_neural: 'bio12',
  brain_biolab11_horm: 'bio12', brain_bodyworks3chpsbioclas11html_exc: 'bio12',
  repro_health: 'bio12', human_health: 'bio12',
  ch9: 'bio12', biotech_app: 'bio12',
  molecular: 'bio12', inheritance: 'bio12',
  sexual_repro: 'bio12',
  evolution: 'bio12', human_repro: 'bio12',
  biodiv: 'bio12', microbes: 'bio12',
  ecosystem: 'bio12', orgpop: 'bio12',
  phy: 'phy', chem: 'chem'
};
function getSubject(id) {
  if (SUBJECT_MAP[id]) return SUBJECT_MAP[id];
  if (id.startsWith('phy')) return 'phy';
  if (id.startsWith('chem')) return 'chem';
  if (id.startsWith('brain_biolab11')) return 'bio12';
  return 'bio11';
}
const SUBJECT_LABEL = { bio11: '🌿 Biology XI', bio12: '🧬 Biology XII', phy: '⚡ Physics', chem: '🧪 Chemistry' };
const SUBJECT_BADGE_CLASS = { bio11: 'badge-bio11', bio12: 'badge-bio12', phy: 'badge-phy', chem: 'badge-chem' };

function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

const chapters = Object.values(DATA.chapters).sort((a, b) => {
  const na = parseInt(a.num), nb = parseInt(b.num);
  if (isNaN(na) && isNaN(nb)) return String(a.num).localeCompare(String(b.num));
  if (isNaN(na)) return 1;
  if (isNaN(nb)) return -1;
  return na - nb;
});

let totCards = 0, totMcq = 0, totMnem = 0;
chapters.forEach(c => {
  totCards += (c.flashcards || []).length;
  totMcq += (c.mcqs || []).length;
  totMnem += (c.mnemonics || []).length;
});

function chapCardHTML(c) {
  const slug = getSlug(c.id);
  const subj = getSubject(c.id);
  return `<a href="/notes/${slug}/" class="chap-card" style="--cc:${c.color}; text-decoration:none; display:block;">
        <span class="subject-badge ${SUBJECT_BADGE_CLASS[subj] || ''}">${SUBJECT_LABEL[subj] || subj}</span>
        <div class="glyph">${c.glyph}</div>
        <h3 style="color:#ffffff;">${esc(c.title)}</h3>
        <div class="sub">${esc(c.subtitle)}</div>
        <div class="pct"><span>${(c.flashcards || []).length} cards</span><span>${(c.mcqs || []).length} MCQs</span></div>
        <div class="static-links" style="display:flex; gap:8px; margin-top:10px; flex-wrap:wrap;">
          <span class="static-link">📖 Notes</span>
          <a href="/mcq/${slug}/" class="static-link" onclick="event.stopPropagation()">🎯 MCQs</a>
          <a href="/flashcards/${slug}/" class="static-link" onclick="event.stopPropagation()">⚡ Flashcards</a>
        </div>
      </a>`;
}

const MODES = [
  { mi: "📖", t: "Study Notes", d: "Every section with flow diagrams, comparison tables & formulas — your reference." },
  { mi: "🧠", t: "Mnemonics", d: "Memory hooks for examples, names and tricky concepts." },
  { mi: "🃏", t: "Flashcards", d: "Flip, self-judge, and track what you've mastered." },
  { mi: "✍️", t: "Active Recall", d: "Type the answer from memory, reveal, then self-grade. The core engine." },
  { mi: "⚔️", t: "Quiz Battle", d: "Rapid MCQs with instant explanations." },
  { mi: "🔗", t: "Match-Up", d: "Race the clock to pair terms with their meanings." },
  { mi: "🧩", t: "Build the Pathway", d: "Drag the steps into the correct sequence." },
  { mi: "🏷️", t: "Diagram Labeling", d: "Practice labeling key biological structures and pathways." },
  { mi: "👑", t: "Boss Battle", d: "Every concept & hard name in one long run. 3 lives — clear them all." }
];

const cardsHTML = chapters.map(chapCardHTML).join('\n');
const modesHTML = MODES.map(m => `<div class="mode-card"><div class="mi">${m.mi}</div><h3>${m.t}</h3><p>${m.d}</p></div>`).join('');

const bioChapterCount = chapters.filter(c => ['bio11', 'bio12'].includes(getSubject(c.id))).length;

const WHY_ITEMS = [
  { h: "Retrieval over re-reading", p: "Every mode forces you to produce the answer first — from a blank flashcard, a typed recall prompt, or a live MCQ — before you see it confirmed." },
  { h: "Spaced, not crammed", p: "Cards you get wrong are reshuffled back into the deck instead of disappearing, so weak spots resurface until they're actually mastered." },
  { h: "NCERT-accurate, exam-ready", p: "Every note, mnemonic, and MCQ explanation is written directly against the NCERT Class 11 & 12 textbooks NEET draws from — no filler." }
];

const FAQ_ITEMS = [
  { q: "Is Smart Bio Notes free to start?", a: "Yes. Every chapter's study notes, a sample of flashcards, and a demo quiz are free and open — no signup needed. Full flashcard decks, active recall, and Boss Battles unlock with a paid plan." },
  { q: "What does Smart Bio Notes cover for NEET 2027?", a: `The full NCERT Class 11 and 12 Biology syllabus across ${bioChapterCount} chapters, plus Physics and Chemistry — with ${totCards}+ flashcards, ${totMcq}+ MCQs, and ${totMnem}+ mnemonics.` },
  { q: "How is this different from just reading notes?", a: "Reading feels productive but fades fast. Smart Bio Notes is built around active recall and spaced repetition — you retrieve answers from memory first, then self-grade, which is what actually moves facts into long-term memory." },
  { q: "Can I try a chapter before paying?", a: "Yes — every chapter has a public Study Notes page, a live MCQ demo, and a flashcard preview you can use right now without an account." }
];

const whyHTML = WHY_ITEMS.map((w, i) => `<div class="why-card"><div class="n">0${i + 1}</div><h3>${w.h}</h3><p>${w.p}</p></div>`).join('');
const faqHTML = FAQ_ITEMS.map(f => `<div class="faq-item"><h3>${f.q}</h3><p>${f.a}</p></div>`).join('');

const STATIC_MAIN = `
      <section class="hero">
        <div class="eyebrow">The Ultimate AI-Optimized Study System</div>
        <h1>Smart Bio <em>Notes</em></h1>
        <p>Your complete AI-powered NEET 2027 companion. Master Biology, Physics, and Chemistry with adaptive flashcards, active recall, MCQs, and smart mnemonics — built from the full NCERT Class 11 &amp; 12 syllabus.</p>
        <div class="hero-stats">
          <div class="hero-stat"><b>${chapters.length}</b><span>Chapters</span></div>
          <div class="hero-stat"><b>${totCards}</b><span>Flashcards</span></div>
          <div class="hero-stat"><b>${totMcq}</b><span>Quiz Qs</span></div>
          <div class="hero-stat"><b>${totMnem}</b><span>Mnemonics</span></div>
        </div>
      </section>

      <div class="section-label">
        <h2>All ${chapters.length} NEET 2027 Chapters</h2>
        <div class="rule"></div>
        <span class="chap-count">Biology XI &amp; XII · Physics · Chemistry</span>
      </div>
      <div class="chapters" id="chap-grid">
${cardsHTML}
      </div>

      <div class="section-label"><h2>How to use it</h2><div class="rule"></div></div>
      <div class="modes">${modesHTML}</div>

      <div class="section-label"><h2>Why this works</h2><div class="rule"></div></div>
      <p style="color:var(--ink-dim); font-size:14px; max-width:640px; margin-bottom:20px; line-height:1.6;">Highlighting and re-reading create a false sense of mastery. The testing effect and spaced repetition — retrieving an answer from memory, then reviewing it again just before you'd forget — are what move facts into long-term memory.</p>
      <div class="why-grid">${whyHTML}</div>

      <div class="section-label"><h2>Frequently asked</h2><div class="rule"></div></div>
      <div class="faq-list">${faqHTML}</div>

      <noscript>
        <div style="margin-top:40px; padding:20px; border:1px solid var(--line); border-radius:12px; background:var(--panel);">
          <p>This page works without JavaScript for reading — but the interactive flashcards, active recall, quizzes and boss battles need it enabled. Every chapter above links to a fully static Study Notes, MCQ and Flashcards page you can read right now.</p>
        </div>
      </noscript>`;

const TOPBAR = `<div class="topbar">
  <div class="brand" style="cursor: pointer;" onclick="event.preventDefault(); App.go('/')">
    <div class="mark">🧬</div>
    <h1>The Smart Bio Notes<span>NEET 2027 · Full Syllabus</span></h1>
  </div>
  <div class="spacer"></div>
  <div class="xp-pill"><span class="lvl-badge" id="lvlBadge">Lv 1</span> <b id="xpVal">0</b> XP</div>
  <button class="icon-btn" title="Reset all progress" onclick="App.resetAll()">⟳</button>
 </div>`;

const FOOTER = `<footer class="site-footer">
  <div class="footer-content">
    <div class="footer-brand" style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px;">
      <div class="mark" style="font-size: 28px; background: rgba(255,215,0,0.15); width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 12px; box-shadow: 0 4px 15px rgba(255,215,0,0.1);">🧬</div>
      <div class="brand-text" style="text-align: left;">
        <div style="margin: 0 0 4px 0; font-family: var(--serif); color: var(--ink); font-size: 20px; font-weight: bold;">Smart Bio Notes</div>
        <p style="margin: 0; font-size: 11px; color: var(--gold); text-transform: uppercase; letter-spacing: 0.5px; opacity: 0.9;">NEET 2027 · Bio XI &amp; XII · Physics · Chemistry</p>
      </div>
    </div>
    <div class="footer-links">
      <div class="link-col">
        <div class="footer-heading" style="font-size: 14px; font-weight: bold; margin-bottom: 12px; color: var(--ink);">Explore</div>
        <a href="/" onclick="event.preventDefault(); App.go('/')">All Chapters</a>
        <a href="/?filter=bio11" onclick="event.preventDefault(); App.go('/?filter=bio11')">Biology XI</a>
        <a href="/?filter=bio12" onclick="event.preventDefault(); App.go('/?filter=bio12')">Biology XII</a>
      </div>
      <div class="link-col">
        <div class="footer-heading" style="font-size: 14px; font-weight: bold; margin-bottom: 12px; color: var(--ink);">Resources</div>
        <a href="/?filter=phy" onclick="event.preventDefault(); App.go('/?filter=phy')">Physics</a>
        <a href="/?filter=chem" onclick="event.preventDefault(); App.go('/?filter=chem')">Chemistry</a>
        <a href="/guide/">How to use (Guide)</a>
      </div>
      <div class="link-col">
        <div class="footer-heading" style="font-size: 14px; font-weight: bold; margin-bottom: 12px; color: var(--ink);">Legal</div>
        <a href="/terms/">Terms of Service</a>
        <a href="/privacy/">Privacy Policy</a>
        <a href="#" onclick="window.scrollTo(0,0)">Back to Top</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; <span id="cpyear">${new Date().getFullYear()}</span> Smart Bio Notes. All rights reserved.</p>
    <p>Built for deep understanding &amp; memory.</p>
  </div>
 </footer>`;

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": chapters.map((c, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "url": `https://smartbionotes.in/notes/${getSlug(c.id)}/`,
    "name": c.title
  }))
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_ITEMS.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
};
const SCHEMA_BLOCK = [itemListSchema, faqSchema]
  .map(s => `<script type="application/ld+json">\n${JSON.stringify(s, null, 2)}\n  </script>`)
  .join('\n  ');

let html = fs.readFileSync(indexPath, 'utf-8');

function replaceBetween(src, startMarker, endMarker, content) {
  const startIdx = src.indexOf(startMarker);
  const endIdx = src.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1) throw new Error(`Markers not found: ${startMarker}`);
  return src.slice(0, startIdx + startMarker.length) + '\n' + content + '\n' + src.slice(endIdx);
}

if (!html.includes('<!--STATIC_HOME_START-->')) {
  html = html.replace('<main id="app"></main>', `<main id="app"><!--STATIC_HOME_START-->\n<!--STATIC_HOME_END--></main>`);
}
if (!html.includes('<!--STATIC_TOPBAR_START-->')) {
  html = html.replace('<body>', `<body>\n<!--STATIC_TOPBAR_START-->\n<!--STATIC_TOPBAR_END-->`);
}
if (!html.includes('<!--STATIC_FOOTER_START-->')) {
  html = html.replace('</body>', `<!--STATIC_FOOTER_START-->\n<!--STATIC_FOOTER_END-->\n</body>`);
}
if (!html.includes('<!--STATIC_SCHEMA_START-->')) {
  html = html.replace('</head>', `  <!--STATIC_SCHEMA_START-->\n  <!--STATIC_SCHEMA_END-->\n</head>`);
}

html = replaceBetween(html, '<!--STATIC_HOME_START-->', '<!--STATIC_HOME_END-->', STATIC_MAIN);
html = replaceBetween(html, '<!--STATIC_TOPBAR_START-->', '<!--STATIC_TOPBAR_END-->', TOPBAR);
html = replaceBetween(html, '<!--STATIC_FOOTER_START-->', '<!--STATIC_FOOTER_END-->', FOOTER);
html = replaceBetween(html, '<!--STATIC_SCHEMA_START-->', '<!--STATIC_SCHEMA_END-->', SCHEMA_BLOCK);

fs.writeFileSync(indexPath, html, 'utf-8');
console.log(`Injected static shell into index.html: ${chapters.length} chapters, ${totCards} cards, ${totMcq} MCQs.`);
