/*
  Builds a fully-static revamped homepage concept at /home-demo/index.html.
  Not linked from primary nav — a design/copy pitch for comparison against the
  live homepage. Pulls real chapter data so counts and links are accurate.
  Run: node generate_home_demo.js
*/
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = __dirname;
const filesDir = path.join(rootDir, 'files');
const outDir = path.join(rootDir, 'home-demo');

const rootFiles = fs.readdirSync(rootDir)
  .filter(f => f.endsWith('.js') && ![
    'verify_chapters.js', 'components.js', 'auth.js', 'config.js', 'extract.js',
    'extract2.js', 'generate_sitemap.js', 'generate_sql_migration.js',
    'migrate_via_api.js', 'generate_pseo.js', 'generate_home_static.js',
    'generate_home_demo.js', 'append_flashcards.js', 'delete_dups.js',
    'example.js', 'generate_stats.js'
  ].includes(f));
const subFiles = fs.existsSync(filesDir)
  ? fs.readdirSync(filesDir).filter(f => f.endsWith('.js')).map(f => path.join('files', f))
  : [];
const allFiles = [...rootFiles, ...subFiles];

const DATA = { chapters: {} };
allFiles.forEach(file => {
  try {
    const code = fs.readFileSync(path.join(rootDir, file), 'utf-8');
    const sandbox = { DATA: { chapters: {} }, window: {} };
    sandbox.window.DATA = sandbox.DATA;
    vm.createContext(sandbox);
    vm.runInContext(code, sandbox);
    Object.keys(sandbox.DATA.chapters).forEach(key => { DATA.chapters[key] = sandbox.DATA.chapters[key]; });
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
const SUBJECT_LABEL = { bio11: 'Biology XI', bio12: 'Biology XII', phy: 'Physics', chem: 'Chemistry' };

function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

const chapters = Object.values(DATA.chapters).sort((a, b) => {
  const na = parseInt(a.num), nb = parseInt(b.num);
  if (isNaN(na) && isNaN(nb)) return String(a.num).localeCompare(String(b.num));
  if (isNaN(na)) return 1;
  if (isNaN(nb)) return -1;
  return na - nb;
});
let totCards = 0, totMcq = 0, totMnem = 0;
chapters.forEach(c => { totCards += (c.flashcards || []).length; totMcq += (c.mcqs || []).length; totMnem += (c.mnemonics || []).length; });

const SUBJECTS = ['bio11', 'bio12', 'phy', 'chem'];
const chapterListHtml = SUBJECTS.map(subj => {
  const chs = chapters.filter(c => getSubject(c.id) === subj);
  if (!chs.length) return '';
  return `
      <div class="demo-subject-group">
        <h3>${SUBJECT_LABEL[subj]} <span>${chs.length} chapters</span></h3>
        <div class="demo-chip-row">
          ${chs.map(c => `<a href="/notes/${getSlug(c.id)}/" class="demo-chip">${esc(c.title)}</a>`).join('')}
        </div>
      </div>`;
}).join('');

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question", "name": "Is Smart Bio Notes free to start?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every chapter's study notes, a sample of flashcards, and a demo quiz are free and open — no signup needed. Full flashcard decks, active recall, and Boss Battles unlock with a paid plan." }
    },
    {
      "@type": "Question", "name": "What does Smart Bio Notes cover for NEET 2027?",
      "acceptedAnswer": { "@type": "Answer", "text": `The full NCERT Class 11 and 12 Biology syllabus across ${chapters.filter(c=>['bio11','bio12'].includes(getSubject(c.id))).length} chapters, plus Physics and Chemistry — with ${totCards}+ flashcards, ${totMcq}+ MCQs, and ${totMnem}+ mnemonics.` }
    },
    {
      "@type": "Question", "name": "How is this different from just reading notes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Reading feels productive but fades fast. Smart Bio Notes is built around active recall and spaced repetition — you retrieve answers from memory first, then self-grade, which is what actually moves facts into long-term memory." }
    },
    {
      "@type": "Question", "name": "Can I try a chapter before paying?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes — every chapter has a public Study Notes page, a live MCQ demo, and a flashcard preview you can use right now without an account." }
    }
  ]
};

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Smart Bio Notes — Stop Re-Reading. Start Remembering. | NEET 2027</title>
  <meta name="description" content="A revamped concept homepage for Smart Bio Notes: the full NCERT Class 11 &amp; 12 syllabus turned into flashcards, active recall, and quiz battles for NEET 2027.">
  <meta name="robots" content="noindex, follow">
  <link rel="canonical" href="https://smartbionotes.in/home-demo/">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,900;1,9..144,500&family=Inter:wght@400;500;600;700;800&family=Spline+Sans+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../index.css">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧬</text></svg>">

  <script type="application/ld+json">
${JSON.stringify(faqSchema, null, 2)}
  </script>

  <style>
    body { background-image: radial-gradient(1200px 600px at 80% -10%, #1b3527 0, transparent 60%), radial-gradient(900px 500px at -10% 110%, #16291f 0, transparent 55%); background-attachment: fixed; }
    .demo-nav { position: sticky; top: 0; z-index: 50; display: flex; align-items: center; gap: 14px; padding: 14px clamp(14px, 4vw, 40px); background: rgba(14,28,23,.85); backdrop-filter: blur(12px); border-bottom: 1px solid var(--line); }
    .demo-nav .brand { display: flex; align-items: center; gap: 11px; text-decoration: none; }
    .demo-nav .mark { width: 38px; height: 38px; border-radius: 11px; display: grid; place-items: center; background: linear-gradient(135deg, #1f3a2c, #0e1c17); border: 1px solid var(--gold); font-size: 20px; }
    .demo-nav h2 { font-family: var(--serif); font-weight: 600; font-size: 17px; color: var(--ink); }
    .demo-nav .spacer { flex: 1; }
    .demo-nav a.navlink { color: var(--ink-dim); text-decoration: none; font-size: 14px; font-weight: 500; margin-left: 22px; }
    .demo-nav a.navlink:hover { color: var(--gold); }
    .demo-badge { background: var(--panel2); border: 1px solid var(--gold); color: var(--gold); font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px; text-transform: uppercase; letter-spacing: .05em; margin-left: 16px; }

    .demo-wrap { max-width: 1180px; margin: 0 auto; padding: 0 clamp(16px, 4vw, 40px); }

    .demo-hero { display: grid; grid-template-columns: 1.1fr 1fr; gap: 50px; align-items: center; padding: clamp(50px,8vw,90px) 0 60px; }
    @media (max-width: 900px) { .demo-hero { grid-template-columns: 1fr; padding-top: 40px; } }
    .demo-hero .eyebrow { display: inline-block; color: var(--gold); font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; background: var(--panel2); border: 1px solid var(--line2); padding: 6px 14px; border-radius: 20px; margin-bottom: 20px; }
    .demo-hero h1 { font-family: var(--serif); font-size: clamp(38px, 5.5vw, 60px); line-height: 1.05; margin-bottom: 20px; }
    .demo-hero h1 em { color: var(--gold); font-style: normal; }
    .demo-hero p.lede { font-size: 17px; color: var(--ink-dim); max-width: 520px; margin-bottom: 30px; line-height: 1.65; }
    .demo-cta-row { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 30px; }
    .demo-btn-primary, .demo-btn-ghost { display: inline-flex; align-items: center; gap: 8px; padding: 14px 26px; border-radius: 10px; font-weight: 700; font-size: 15px; text-decoration: none; transition: transform .15s, background .15s; }
    .demo-btn-primary { background: var(--gold); color: #1a130a; box-shadow: 0 8px 24px -8px rgba(226,179,95,.45); }
    .demo-btn-primary:hover { background: var(--gold-deep); transform: translateY(-2px); }
    .demo-btn-ghost { background: var(--panel); border: 1px solid var(--line2); color: var(--ink); }
    .demo-btn-ghost:hover { border-color: var(--gold); color: var(--gold); }
    .demo-trust { display: flex; gap: 26px; flex-wrap: wrap; font-size: 13px; color: var(--ink-faint); }
    .demo-trust span { display: flex; align-items: center; gap: 6px; }

    .demo-preview { background: var(--panel); border: 1px solid var(--line); border-radius: var(--r); box-shadow: var(--shadow); padding: 22px; }
    .demo-preview .fc-tag { font-size: 11px; text-transform: uppercase; letter-spacing: .08em; color: var(--gold); font-weight: 700; margin-bottom: 10px; }
    .demo-flip { min-height: 190px; background: var(--panel2); border: 1px solid var(--line2); border-radius: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 22px; cursor: pointer; }
    .demo-flip .q { font-family: var(--serif); font-size: 18px; margin-bottom: 8px; }
    .demo-flip .tap { font-size: 12px; color: var(--ink-faint); margin-top: 14px; }
    .demo-preview-stats { display: flex; justify-content: space-around; margin-top: 18px; text-align: center; }
    .demo-preview-stats b { display: block; font-family: var(--serif); color: var(--gold); font-size: 22px; }
    .demo-preview-stats span { font-size: 11px; color: var(--ink-faint); text-transform: uppercase; letter-spacing: .05em; }

    .demo-stats-bar { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; padding: 30px; background: var(--panel); border: 1px solid var(--line); border-radius: var(--r); margin-bottom: 70px; }
    @media (max-width: 700px) { .demo-stats-bar { grid-template-columns: repeat(2,1fr); } }
    .demo-stats-bar div { text-align: center; }
    .demo-stats-bar b { display: block; font-family: var(--serif); font-size: 30px; color: var(--gold); }
    .demo-stats-bar span { font-size: 12px; color: var(--ink-dim); text-transform: uppercase; letter-spacing: .05em; }

    .demo-section { margin-bottom: 80px; }
    .demo-section-head { text-align: center; max-width: 620px; margin: 0 auto 44px; }
    .demo-section-head .kicker { color: var(--gold); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 10px; display: block; }
    .demo-section-head h2 { font-family: var(--serif); font-size: clamp(26px,3.5vw,36px); margin-bottom: 12px; }
    .demo-section-head p { color: var(--ink-dim); font-size: 15px; line-height: 1.6; }

    .demo-why-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
    @media (max-width: 800px) { .demo-why-grid { grid-template-columns: 1fr; } }
    .demo-why-card { background: var(--panel); border: 1px solid var(--line); border-radius: var(--r); padding: 26px; }
    .demo-why-card .n { font-family: var(--mono); color: var(--gold); font-size: 13px; font-weight: 700; margin-bottom: 12px; }
    .demo-why-card h4 { font-family: var(--serif); font-size: 19px; margin-bottom: 10px; }
    .demo-why-card p { color: var(--ink-dim); font-size: 14px; line-height: 1.6; }

    .demo-modes-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
    @media (max-width: 800px) { .demo-modes-grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 520px) { .demo-modes-grid { grid-template-columns: 1fr; } }
    .demo-mode { background: var(--panel); border: 1px solid var(--line); border-radius: 12px; padding: 20px; }
    .demo-mode .mi { font-size: 24px; margin-bottom: 8px; }
    .demo-mode h4 { font-size: 15px; margin-bottom: 6px; }
    .demo-mode p { font-size: 13px; color: var(--ink-dim); line-height: 1.5; }

    .demo-subject-group { margin-bottom: 26px; }
    .demo-subject-group h3 { font-family: var(--serif); font-size: 18px; margin-bottom: 12px; }
    .demo-subject-group h3 span { font-size: 12px; color: var(--ink-faint); font-weight: 400; font-family: var(--sans); margin-left: 8px; }
    .demo-chip-row { display: flex; flex-wrap: wrap; gap: 8px; }
    .demo-chip { background: var(--panel); border: 1px solid var(--line); color: var(--ink-dim); font-size: 13px; padding: 7px 13px; border-radius: 8px; text-decoration: none; transition: .15s; }
    .demo-chip:hover { border-color: var(--gold); color: var(--gold); }

    .demo-pricing-band { background: linear-gradient(135deg, var(--panel2), var(--bg2)); border: 1px solid var(--gold); border-radius: var(--r); padding: clamp(28px,5vw,50px); text-align: center; position: relative; overflow: hidden; }
    .demo-pricing-band::before { content: '👑'; position: absolute; font-size: 140px; opacity: .05; right: -20px; bottom: -30px; }
    .demo-pricing-band h2 { font-family: var(--serif); color: var(--gold); font-size: clamp(24px,3vw,32px); margin-bottom: 12px; }
    .demo-pricing-band p { color: var(--ink-dim); max-width: 520px; margin: 0 auto 24px; font-size: 15px; line-height: 1.6; }

    .demo-faq { max-width: 760px; margin: 0 auto; }
    .demo-faq-item { border-bottom: 1px solid var(--line); padding: 18px 0; }
    .demo-faq-item h4 { font-size: 16px; margin-bottom: 8px; color: var(--ink); }
    .demo-faq-item p { font-size: 14px; color: var(--ink-dim); line-height: 1.6; }
  </style>
</head>
<body>
  <nav class="demo-nav">
    <a href="/home-demo/" class="brand"><div class="mark">🧬</div><h2>Smart Bio Notes</h2></a>
    <span class="demo-badge">Concept</span>
    <div class="spacer"></div>
    <a href="#modes" class="navlink">How it works</a>
    <a href="#chapters" class="navlink">Chapters</a>
    <a href="/pricing/" class="navlink">Pricing</a>
    <a href="/" class="demo-btn-ghost" style="padding:8px 18px; font-size:13px;">Open the app →</a>
  </nav>

  <div class="demo-wrap">
    <section class="demo-hero">
      <div>
        <span class="eyebrow">Built for NEET 2027 · Full NCERT Syllabus</span>
        <h1>Stop re-reading.<br>Start <em>remembering</em>.</h1>
        <p class="lede">Smart Bio Notes turns every chapter of Class 11 &amp; 12 Biology, plus Physics and Chemistry, into flashcards, active recall drills, and quiz battles — the study methods that actually stick, not just feel productive.</p>
        <div class="demo-cta-row">
          <a href="/" class="demo-btn-primary">Start studying free →</a>
          <a href="/notes/the-living-world/" class="demo-btn-ghost">Preview a chapter</a>
        </div>
        <div class="demo-trust">
          <span>✅ No signup to browse notes</span>
          <span>✅ ${chapters.length} chapters live</span>
          <span>✅ Built from NCERT</span>
        </div>
      </div>
      <div class="demo-preview">
        <div class="fc-tag">Live Flashcard Preview</div>
        <div class="demo-flip" id="demoFlip" onclick="const b=document.getElementById('demoFlipBack'),f=document.getElementById('demoFlipFront'); const show=b.style.display==='flex'; b.style.display=show?'none':'flex'; f.style.display=show?'flex':'none';">
          <div id="demoFlipFront" style="display:flex; flex-direction:column; align-items:center;">
            <div class="q">What are the two words in a scientific name called?</div>
            <div class="tap">Tap to reveal answer</div>
          </div>
          <div id="demoFlipBack" style="display:none; flex-direction:column; align-items:center;">
            <div class="q">Generic name (genus) + specific epithet — binomial nomenclature.</div>
            <div class="tap">Tap to flip back</div>
          </div>
        </div>
        <div class="demo-preview-stats">
          <div><b>${totCards}</b><span>Flashcards</span></div>
          <div><b>${totMcq}</b><span>MCQs</span></div>
          <div><b>${totMnem}</b><span>Mnemonics</span></div>
        </div>
      </div>
    </section>

    <section class="demo-stats-bar">
      <div><b>${chapters.length}</b><span>Chapters covered</span></div>
      <div><b>${totCards}</b><span>Flashcards</span></div>
      <div><b>${totMcq}</b><span>Quiz questions</span></div>
      <div><b>9</b><span>Study modes</span></div>
    </section>

    <section class="demo-section">
      <div class="demo-section-head">
        <span class="kicker">Why this works</span>
        <h2>Reading feels productive. Recalling is what remembers.</h2>
        <p>Highlighting and re-reading create a false sense of mastery. The testing effect and spaced repetition — retrieving an answer from memory, then reviewing it again just before you'd forget — are what move facts into long-term memory.</p>
      </div>
      <div class="demo-why-grid">
        <div class="demo-why-card"><div class="n">01</div><h4>Retrieval over re-reading</h4><p>Every mode forces you to produce the answer first — from a blank flashcard, a typed recall prompt, or a live MCQ — before you see it confirmed.</p></div>
        <div class="demo-why-card"><div class="n">02</div><h4>Spaced, not crammed</h4><p>Cards you get wrong are reshuffled back into the deck instead of disappearing, so weak spots resurface until they're actually mastered.</p></div>
        <div class="demo-why-card"><div class="n">03</div><h4>NCERT-accurate, exam-ready</h4><p>Every note, mnemonic, and MCQ explanation is written directly against the NCERT Class 11 &amp; 12 textbooks NEET draws from — no filler.</p></div>
      </div>
    </section>

    <section class="demo-section" id="modes">
      <div class="demo-section-head">
        <span class="kicker">One system, nine modes</span>
        <h2>Every way to learn a concept, in one place</h2>
        <p>Start with notes, drill with flashcards, test yourself with recall, then prove it under pressure in a timed quiz or boss battle.</p>
      </div>
      <div class="demo-modes-grid">
        <div class="demo-mode"><div class="mi">📖</div><h4>Study Notes</h4><p>Every section with flow diagrams, comparison tables &amp; formulas.</p></div>
        <div class="demo-mode"><div class="mi">🧠</div><h4>Mnemonics</h4><p>Memory hooks for examples, names and tricky concepts.</p></div>
        <div class="demo-mode"><div class="mi">🃏</div><h4>Flashcards</h4><p>Flip, self-judge, and track what you've mastered.</p></div>
        <div class="demo-mode"><div class="mi">✍️</div><h4>Active Recall</h4><p>Type the answer from memory, reveal, then self-grade.</p></div>
        <div class="demo-mode"><div class="mi">⚔️</div><h4>Quiz Battle</h4><p>Rapid MCQs with instant explanations.</p></div>
        <div class="demo-mode"><div class="mi">🔗</div><h4>Match-Up</h4><p>Race the clock to pair terms with their meanings.</p></div>
        <div class="demo-mode"><div class="mi">🧩</div><h4>Build the Pathway</h4><p>Drag biological steps into the correct sequence.</p></div>
        <div class="demo-mode"><div class="mi">🏷️</div><h4>Diagram Labeling</h4><p>Label key biological structures and pathways.</p></div>
        <div class="demo-mode"><div class="mi">👑</div><h4>Boss Battle</h4><p>Every concept in one long run. 3 lives — clear them all.</p></div>
      </div>
    </section>

    <section class="demo-section" id="chapters">
      <div class="demo-section-head">
        <span class="kicker">Full syllabus, already live</span>
        <h2>Browse all ${chapters.length} chapters</h2>
        <p>Every chapter links to a free study notes page — no login required.</p>
      </div>
      ${chapterListHtml}
    </section>

    <section class="demo-section">
      <div class="demo-pricing-band">
        <h2>Plans start at ₹149 for your first month</h2>
        <p>Browse every chapter's notes and try a demo quiz for free. Upgrade to unlock full flashcard decks, active recall, mnemonics, and Boss Battles for one or both classes.</p>
        <a href="/pricing/" class="demo-btn-primary">See plans &amp; pricing →</a>
      </div>
    </section>

    <section class="demo-section">
      <div class="demo-section-head">
        <span class="kicker">Questions</span>
        <h2>Frequently asked</h2>
      </div>
      <div class="demo-faq">
        <div class="demo-faq-item"><h4>Is Smart Bio Notes free to start?</h4><p>Yes. Every chapter's study notes, a sample of flashcards, and a demo quiz are free and open — no signup needed. Full flashcard decks, active recall, and Boss Battles unlock with a paid plan.</p></div>
        <div class="demo-faq-item"><h4>What does it cover for NEET 2027?</h4><p>The full NCERT Class 11 and 12 Biology syllabus, plus Physics and Chemistry — ${totCards}+ flashcards, ${totMcq}+ MCQs, and ${totMnem}+ mnemonics across ${chapters.length} chapters.</p></div>
        <div class="demo-faq-item"><h4>How is this different from just reading notes?</h4><p>Reading feels productive but fades fast. Smart Bio Notes is built around active recall and spaced repetition — you retrieve answers from memory first, then self-grade, which is what actually moves facts into long-term memory.</p></div>
        <div class="demo-faq-item"><h4>Can I try a chapter before paying?</h4><p>Yes — every chapter has a public Study Notes page, a live MCQ demo, and a flashcard preview you can use right now without an account.</p></div>
      </div>
    </section>
  </div>

  <footer class="site-footer">
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
          <a href="/">All Chapters</a>
          <a href="/?filter=bio11">Biology XI</a>
          <a href="/?filter=bio12">Biology XII</a>
        </div>
        <div class="link-col">
          <div class="footer-heading" style="font-size: 14px; font-weight: bold; margin-bottom: 12px; color: var(--ink);">Resources</div>
          <a href="/?filter=phy">Physics</a>
          <a href="/?filter=chem">Chemistry</a>
          <a href="/guide/">How to use (Guide)</a>
        </div>
        <div class="link-col">
          <div class="footer-heading" style="font-size: 14px; font-weight: bold; margin-bottom: 12px; color: var(--ink);">Legal</div>
          <a href="/terms/">Terms of Service</a>
          <a href="/privacy/">Privacy Policy</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; ${new Date().getFullYear()} Smart Bio Notes. All rights reserved.</p>
      <p>This is a concept redesign at /home-demo — not the live homepage.</p>
    </div>
  </footer>
</body>
</html>`;

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8');
console.log(`Wrote home-demo/index.html — ${chapters.length} chapters, ${totCards} cards, ${totMcq} MCQs.`);
