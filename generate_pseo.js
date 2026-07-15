const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = __dirname;
const filesDir = path.join(rootDir, 'files');

// Gather files
const rootFiles = fs.readdirSync(rootDir)
  .filter(f => f.endsWith('.js') && f !== 'verify_chapters.js' && f !== 'components.js' && f !== 'auth.js' && f !== 'config.js' && f !== 'extract.js' && f !== 'extract2.js' && f !== 'generate_sitemap.js' && f !== 'generate_sql_migration.js' && f !== 'migrate_via_api.js' && f !== 'generate_pseo.js' && f !== 'append_flashcards.js' && f !== 'delete_dups.js' && f !== 'example.js' && f !== 'generate_stats.js');

const subFiles = fs.existsSync(filesDir)
  ? fs.readdirSync(filesDir).filter(f => f.endsWith('.js')).map(f => path.join('files', f))
  : [];

const allFiles = [...rootFiles, ...subFiles];
console.log(`Found ${allFiles.length} chapter files for pSEO generation.`);

const DATA = { chapters: {} };
global.window = {};
global.DATA = DATA;

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
  } catch (e) {
    // Skip failed files silently
  }
});

const CHAPTER_SLUGS = {
  'living': 'the-living-world',
  'bioclassif': 'biological-classification',
  'plant': 'plant-kingdom',
  'animal': 'animal-kingdom',
  'morph': 'morphology-of-flowering-plants',
  'anat': 'anatomy-of-flowering-plants',
  'struct_anim': 'structural-organisation-in-animals',
  'biomol': 'biomolecules',
  'ch9': 'biotechnology-principles-and-processes',
  'biotech_app': 'biotechnology-and-its-applications',
  'orgpop': 'organisms-and-populations',
  'ecosystem': 'ecosystem',
  'biodiv': 'biodiversity-and-conservation',
  'repro_health': 'reproductive-health',
  'human_health': 'human-health-and-disease',
  'molecular': 'molecular-basis-of-inheritance',
  'inheritance': 'principles-of-inheritance-and-variation',
  'sexual_repro': 'sexual-reproduction-in-flowering-plants',
  'evolution': 'evolution',
  'human_repro': 'human-reproduction',
  'microbes': 'microbes-in-human-welfare',
  'phy': 'physics',
  'chem': 'chemistry'
};

const getSlug = (id) => CHAPTER_SLUGS[id] || id.toLowerCase().replace(/_/g, '-').replace(/\./g, '-');

// Helper to make directory recursive
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Generate base HTML head and layout with structured JSON-LD schemas
function getBaseHeader(title, desc, depth = 2, schemas = null) {
  const relPath = '../'.repeat(depth);
  let schemaTags = '';
  if (schemas) {
    const schemaArray = Array.isArray(schemas) ? schemas : [schemas];
    schemaTags = schemaArray.map(s => `\n  <script type="application/ld+json">\n${JSON.stringify(s, null, 2)}\n  </script>`).join('');
  }
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | Smart Bio Notes</title>
  <meta name="description" content="${desc}">
  ${schemaTags}
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,900;1,9..144,500&family=Inter:wght@400;500;600;700;800&family=Spline+Sans+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  
  <!-- Styling -->
  <link rel="stylesheet" href="${relPath}index.css">
  
  <style>
    body {
      background-image: radial-gradient(1200px 600px at 80% -10%, #1b3527 0, transparent 60%);
      background-attachment: fixed;
    }
    .pseo-container {
      max-width: 800px;
      margin: 40px auto;
      padding: clamp(20px, 5vw, 40px);
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: var(--r);
      box-shadow: var(--shadow);
    }
    .pseo-header {
      border-bottom: 1px solid var(--line);
      padding-bottom: 24px;
      margin-bottom: 30px;
    }
    .pseo-header h1 {
      font-family: var(--serif);
      font-size: clamp(28px, 5vw, 38px);
      color: var(--gold);
      margin-bottom: 8px;
    }
    .pseo-header p {
      color: var(--ink-dim);
      font-size: 16px;
    }
    .back-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: var(--gold);
      text-decoration: none;
      font-weight: 500;
      margin-bottom: 20px;
      font-size: 14px;
      transition: transform 0.2s;
    }
    .back-btn:hover {
      transform: translateX(-4px);
    }
    .widget-box {
      margin-top: 40px;
      background: var(--bg2);
      border: 1px solid var(--line2);
      border-radius: var(--rs);
      padding: 24px;
    }
    .widget-box h3 {
      font-family: var(--serif);
      color: var(--gold);
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .cta-banner {
      margin-top: 40px;
      background: linear-gradient(135deg, var(--panel2), var(--bg2));
      border: 1px solid var(--gold);
      padding: 30px;
      border-radius: var(--r);
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .cta-banner::before {
      content: '👑';
      position: absolute;
      font-size: 120px;
      opacity: 0.05;
      right: -20px;
      bottom: -30px;
    }
    .cta-banner h2 {
      font-family: var(--serif);
      color: var(--gold);
      margin-bottom: 10px;
    }
    .cta-banner p {
      color: var(--ink-dim);
      margin-bottom: 20px;
      font-size: 15px;
    }
    .cta-btn {
      display: inline-block;
      background: var(--gold);
      color: #1a130a;
      font-weight: 700;
      padding: 12px 28px;
      border-radius: 8px;
      text-decoration: none;
      transition: background 0.2s, transform 0.2s;
      box-shadow: 0 4px 15px rgba(226, 179, 95, 0.2);
    }
    .cta-btn:hover {
      background: var(--gold-deep);
      transform: translateY(-2px);
    }
    
    /* Widget Styles */
    .widget-card {
      min-height: 180px;
      background: var(--panel);
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      cursor: pointer;
      position: relative;
      perspective: 1000px;
    }
    .widget-card-inner {
      width: 100%;
      height: 100%;
      transition: transform 0.6s;
      transform-style: preserve-3d;
      position: relative;
    }
    .widget-card.flipped .widget-card-inner {
      transform: rotateY(180deg);
    }
    .card-face {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      box-sizing: border-box;
    }
    .card-back {
      transform: rotateY(180deg);
      background: var(--panel2);
      color: var(--ink);
    }
    .widget-options {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      width: 100%;
      margin-top: 15px;
    }
    .widget-opt {
      background: var(--panel);
      border: 1px solid var(--line);
      padding: 12px 16px;
      border-radius: 8px;
      text-align: left;
      transition: 0.2s;
      width: 100%;
    }
    .widget-opt:hover {
      border-color: var(--gold);
      background: var(--panel2);
    }
    .widget-opt.correct {
      border-color: var(--ok);
      background: rgba(95, 194, 126, 0.1);
      color: var(--ok);
    }
    .widget-opt.wrong {
      border-color: var(--bad);
      background: rgba(233, 116, 95, 0.1);
      color: var(--bad);
    }

    /* Silo Internal Link Styles */
    .silo-nav {
      background: var(--panel2);
      border: 1px solid var(--line);
      padding: 15px;
      border-radius: 8px;
      margin-bottom: 30px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-items: center;
    }
    .silo-nav span {
      font-weight: 600;
      color: var(--ink-dim);
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .silo-link {
      background: var(--panel);
      border: 1px solid var(--line2);
      color: var(--gold);
      padding: 6px 12px;
      border-radius: 6px;
      text-decoration: none;
      font-size: 13px;
      transition: 0.2s;
    }
    .silo-link:hover {
      background: var(--line2);
      color: #fff;
    }
    .related-links-section {
      margin-top: 40px;
      border-top: 1px solid var(--line);
      padding-top: 25px;
    }
    .related-links-section h4 {
      font-family: var(--serif);
      color: var(--gold);
      font-size: 18px;
      margin-bottom: 15px;
    }
    .related-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 12px;
    }
    .related-card {
      background: var(--panel2);
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 12px 16px;
      text-decoration: none;
      transition: 0.2s;
    }
    .related-card:hover {
      border-color: var(--gold);
      background: var(--line);
    }
    .related-card h5 {
      color: #fff;
      font-size: 14px;
      margin-bottom: 4px;
    }
    .related-card p {
      color: var(--ink-faint);
      font-size: 12px;
      margin: 0;
    }
  </style>
</head>
<body>
  <div class="pseo-container">
    <a href="${relPath}" class="back-btn">← Back to Codex Home</a>
`;
}

function getBaseFooter() {
  return `
  </div>
</body>
</html>`;
}

// Keep track of sitemap urls
const sitemapUrls = [
  { loc: 'https://smartbionotes.vercel.app/', priority: '1.0', changefreq: 'daily' },
  { loc: 'https://smartbionotes.vercel.app/terms/', priority: '0.5', changefreq: 'monthly' },
  { loc: 'https://smartbionotes.vercel.app/privacy/', priority: '0.5', changefreq: 'monthly' },
  { loc: 'https://smartbionotes.vercel.app/guide/', priority: '0.8', changefreq: 'weekly' },
  { loc: 'https://smartbionotes.vercel.app/pricing/', priority: '0.8', changefreq: 'monthly' }
];

const glossaryTerms = [];
const comparisonPages = [];

// Phase 1: Extract all glossary terms and comparisons first so we can link to them
Object.keys(DATA.chapters).forEach(id => {
  const ch = DATA.chapters[id];
  const slug = getSlug(id);

  // Gather Glossary terms from match sets
  if (ch.match && Array.isArray(ch.match)) {
    ch.match.forEach(item => {
      if (item.term && item.def) {
        glossaryTerms.push({
          term: item.term,
          def: item.def,
          chapterTitle: ch.title,
          chapterSlug: slug,
          chapterId: id
        });
      }
    });
  }

  // Gather Comparison data from notes
  if (ch.notes && Array.isArray(ch.notes)) {
    ch.notes.forEach(note => {
      const cmpRegex = /<table class="cmp">([\s\S]*?)<\/table>/g;
      let match;
      while ((match = cmpRegex.exec(note.html)) !== null) {
        const tableHtml = match[0];
        let vsTitle = "Comparison";
        
        // Find nearest header before table
        const headerMatch = note.heading || "";
        if (headerMatch && headerMatch.toLowerCase().includes('vs')) {
          vsTitle = headerMatch;
        } else {
          const thRegex = /<th>(.*?)<\/th>/g;
          const ths = [];
          let thMatch;
          while ((thMatch = thRegex.exec(tableHtml)) !== null) {
            ths.push(thMatch[1].replace(/<[^>]*>/g, '').trim());
          }
          if (ths.length >= 2) {
            vsTitle = `${ths[0]} vs ${ths[1]}`;
          } else {
            vsTitle = `${ch.title} Concepts Comparison`;
          }
        }
        
        vsTitle = vsTitle.replace(/<[^>]*>/g, '').trim();
        const compareSlug = vsTitle.toLowerCase()
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-');

        comparisonPages.push({
          title: vsTitle,
          table: tableHtml,
          chapterTitle: ch.title,
          chapterSlug: slug,
          chapterId: id,
          slug: compareSlug
        });
      }
    });
  }
});

// Phase 2: Generate all Note, MCQ, Flashcards, Glossary, and Compare pages
Object.keys(DATA.chapters).forEach(id => {
  const ch = DATA.chapters[id];
  const slug = getSlug(id);
  
  const notesDir = path.join(rootDir, 'notes', slug);
  const mcqDir = path.join(rootDir, 'mcq', slug);
  const flashDir = path.join(rootDir, 'flashcards', slug);
  
  ensureDir(notesDir);
  ensureDir(mcqDir);
  ensureDir(flashDir);

  sitemapUrls.push({ loc: `https://smartbionotes.vercel.app/notes/${slug}/`, priority: '0.8', changefreq: 'weekly' });
  sitemapUrls.push({ loc: `https://smartbionotes.vercel.app/mcq/${slug}/`, priority: '0.8', changefreq: 'weekly' });
  sitemapUrls.push({ loc: `https://smartbionotes.vercel.app/flashcards/${slug}/`, priority: '0.8', changefreq: 'weekly' });

  // Get related elements for this chapter
  const thisChapterTerms = glossaryTerms.filter(t => t.chapterId === id).slice(0, 5);
  const thisChapterComparisons = comparisonPages.filter(c => c.chapterId === id).slice(0, 4);

  // Silo nav helper
  const getSiloNav = (currentMode) => {
    return `
    <div class="silo-nav">
      <span>Chapter Content:</span>
      <a href="../../notes/${slug}/" class="silo-link" style="${currentMode === 'notes' ? 'background: var(--line2); color: #fff;' : ''}">Study Notes</a>
      <a href="../../mcq/${slug}/" class="silo-link" style="${currentMode === 'mcq' ? 'background: var(--line2); color: #fff;' : ''}">MCQ Practice</a>
      <a href="../../flashcards/${slug}/" class="silo-link" style="${currentMode === 'flashcards' ? 'background: var(--line2); color: #fff;' : ''}">Flashcards</a>
    </div>
    `;
  };

  /* ----------------------------------------------------
     1. CHAPTER NOTES PAGE
     ---------------------------------------------------- */
  const notesHtmlContent = ch.notes.map((n, i) => `
    <div class="note-sec" style="margin-bottom: 40px;">
      <h3 style="font-family: var(--serif); color: var(--gold); border-bottom: 1px solid var(--line); padding-bottom: 8px; margin-bottom: 16px;">
        ${ch.num}.${i + 1} ${n.heading}
      </h3>
      ${n.html}
    </div>
  `).join('');

  const firstThreeFlashcards = (ch.flashcards || []).slice(0, 3);
  
  // Construct terms section if terms exist
  let termsListHtml = '';
  if (thisChapterTerms.length > 0) {
    termsListHtml = `
      <div class="related-links-section">
        <h4>Glossary & Defined Terms</h4>
        <p style="color: var(--ink-dim); font-size: 14px; margin-bottom: 15px;">Definitions of critical concepts covered in this chapter:</p>
        <div class="related-grid">
          ${thisChapterTerms.map(t => {
            const termSlug = t.term.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
            return `
              <a href="../../glossary/${termSlug}/" class="related-card">
                <h5>${t.term}</h5>
                <p>${t.def.substring(0, 60)}${t.def.length > 60 ? '...' : ''}</p>
              </a>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  // Construct comparisons section if they exist
  let compsListHtml = '';
  if (thisChapterComparisons.length > 0) {
    compsListHtml = `
      <div class="related-links-section">
        <h4>NCERT Comparison Sheets</h4>
        <p style="color: var(--ink-dim); font-size: 14px; margin-bottom: 15px;">Review the key distinctions and contrast tables from this chapter:</p>
        <div class="related-grid">
          ${thisChapterComparisons.map(c => `
            <a href="../../compare/${c.slug}/" class="related-card">
              <h5>${c.title}</h5>
              <p>Direct difference table & concepts contrast.</p>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Notes schema (LearningResource)
  const notesSchema = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    "name": `${ch.title} Study Notes`,
    "description": `Comprehensive study notes and revision materials for Class 11/12 NEET Biology chapter: ${ch.title}.`,
    "learningResourceType": "Study Guide",
    "educationalLevel": "NEET Preparation",
    "about": {
      "@type": "Thing",
      "name": ch.title
    }
  };

  const notesPage = `
    ${getBaseHeader(ch.title + " Study Notes", `Study guide, notes, and interactive revision material for Class 11/12 NEET Biology: ${ch.title}.`, 2, notesSchema)}
    <div class="pseo-header">
      <span class="chip" style="background: var(--line2); color: var(--gold); padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-bottom: 10px; display: inline-block;">Chapter ${ch.num}</span>
      <h1>${ch.glyph} ${ch.title} Study Notes</h1>
      <p>${ch.subtitle || 'Complete study notes and curriculum overview.'}</p>
    </div>
    
    ${getSiloNav('notes')}

    <div class="notes-content">
      ${notesHtmlContent}
    </div>

    <!-- Mini Widget: Flashcards Preview -->
    <div class="widget-box">
      <h3>⚡ Mini-Review: Interactive Flashcards</h3>
      <p style="color: var(--ink-dim); font-size: 14px; margin-bottom: 20px;">Test your knowledge below. Tap the card to flip it!</p>
      
      <div id="flashcard-widget" class="widget-card" onclick="flipWidgetCard()">
        <div class="widget-card-inner" id="widget-card-inner" style="position: relative; height: 180px; width: 100%; transform-style: preserve-3d; transition: transform 0.6s;">
          <div class="card-face card-front" style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <strong style="color: var(--gold); font-size: 13px; text-transform: uppercase; margin-bottom: 10px;">Question</strong>
            <span id="widget-front-text" style="font-size: 18px; font-weight: 500;">${firstThreeFlashcards[0]?.front || 'Ready to start?'}</span>
            <div style="font-size: 11px; color: var(--ink-faint); margin-top: 15px;">Tap to Reveal</div>
          </div>
          <div class="card-face card-back" style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; display: flex; flex-direction: column; justify-content: center; align-items: center; transform: rotateY(180deg); background: var(--panel2);">
            <strong style="color: var(--gold); font-size: 13px; text-transform: uppercase; margin-bottom: 10px;">Answer</strong>
            <span id="widget-back-text" style="font-size: 16px; color: var(--ink);">${firstThreeFlashcards[0]?.back || ''}</span>
            <div style="font-size: 11px; color: var(--ink-faint); margin-top: 15px;">Tap to Flip Back</div>
          </div>
        </div>
      </div>
      
      <div style="margin-top: 16px; display: flex; justify-content: space-between; align-items: center;">
        <span id="card-progress" style="font-size: 13px; color: var(--ink-dim);">Card 1 of ${firstThreeFlashcards.length}</span>
        <button onclick="nextWidgetCard(event)" class="cta-btn" style="padding: 6px 16px; font-size: 13px; box-shadow: none;">Next Card →</button>
      </div>
    </div>

    ${termsListHtml}
    ${compsListHtml}

    <!-- CTA Banner -->
    <div class="cta-banner">
      <h2>Unlock the Full Study System</h2>
      <p>Get immediate access to the full platform including Active Recall sheets, Mnemonics devices, drag-and-drop Pathway steps, and Boss Battles for ${ch.title}!</p>
      <a href="/" class="cta-btn">Unlock the entire Smart Bio Notes for only ₹149 today!</a>
    </div>

    <script>
      const widgetCards = ${JSON.stringify(firstThreeFlashcards)};
      let currentCardIdx = 0;
      
      function flipWidgetCard() {
        document.getElementById('widget-card-inner').style.transform = 
          document.getElementById('widget-card-inner').style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
      }
      
      function nextWidgetCard(event) {
        event.stopPropagation();
        // Reset flip
        document.getElementById('widget-card-inner').style.transform = 'rotateY(0deg)';
        
        setTimeout(() => {
          currentCardIdx = (currentCardIdx + 1) % widgetCards.length;
          document.getElementById('widget-front-text').textContent = widgetCards[currentCardIdx].front;
          document.getElementById('widget-back-text').textContent = widgetCards[currentCardIdx].back;
          document.getElementById('card-progress').textContent = "Card " + (currentCardIdx + 1) + " of " + widgetCards.length;
        }, 200);
      }
    </script>
    ${getBaseFooter()}
  `;
  fs.writeFileSync(path.join(notesDir, 'index.html'), notesPage, 'utf-8');


  /* ----------------------------------------------------
     2. MCQ PRACTICE PAGE
     ---------------------------------------------------- */
  const firstFiveMcqs = (ch.mcqs || []).slice(0, 5);
  
  // MCQ schema (Quiz)
  const mcqSchema = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "name": `${ch.title} MCQ Practice Test`,
    "description": `Practice multiple choice questions with explanations for ${ch.title} NEET preparation.`,
    "about": {
      "@type": "Thing",
      "name": ch.title
    },
    "hasPart": firstFiveMcqs.map((q, idx) => ({
      "@type": "Question",
      "name": q.q,
      "suggestedAnswer": q.o.map((o, optIdx) => ({
        "@type": "Answer",
        "text": o,
        "position": optIdx + 1
      })),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.o[q.c],
        "comment": {
          "@type": "Comment",
          "text": q.e
        }
      }
    }))
  };

  const mcqPage = `
    ${getBaseHeader(ch.title + " MCQ Practice", `Free interactive MCQ practice and question bank with explanations for Class 11/12 NEET Biology: ${ch.title}.`, 2, mcqSchema)}
    <div class="pseo-header">
      <span class="chip" style="background: var(--line2); color: var(--gold); padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-bottom: 10px; display: inline-block;">Chapter ${ch.num} Practice</span>
      <h1>${ch.glyph} ${ch.title} MCQs</h1>
      <p>Master multiple-choice questions with real-time explanations.</p>
    </div>

    ${getSiloNav('mcq')}

    <!-- Mini Widget: MCQ Quiz -->
    <div class="widget-box" style="margin-top: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
        <h3 style="margin: 0;">🎯 Live Quiz Widget</h3>
        <span id="quiz-progress" style="font-size: 14px; color: var(--ink-dim);">Question 1 of ${firstFiveMcqs.length}</span>
      </div>
      
      <div id="quiz-widget">
        <div id="quiz-question" style="font-size: 17px; font-weight: 600; margin-bottom: 20px;">${firstFiveMcqs[0]?.q || 'No questions available.'}</div>
        <div class="widget-options" id="quiz-options">
          ${(firstFiveMcqs[0]?.o || []).map((opt, i) => `
            <button class="widget-opt" onclick="selectOption(${i})">${opt}</button>
          `).join('')}
        </div>
        <div id="quiz-explanation" style="margin-top: 20px; padding: 15px; border-radius: 8px; font-size: 14px; display: none; line-height: 1.5;"></div>
        <button id="quiz-next-btn" onclick="nextQuestion()" class="cta-btn" style="margin-top: 20px; display: none; width: 100%; text-align: center;">Next Question →</button>
      </div>
    </div>

    <!-- CTA Banner -->
    <div class="cta-banner">
      <h2>Challenge the Boss Battle!</h2>
      <p>You've completed the demo quiz. Unlock the complete deck of ${(ch.mcqs || []).length} questions and test your skills in the hard-mode Boss Battle!</p>
      <a href="/" class="cta-btn">Start Practice Now</a>
    </div>

    <script>
      const quizData = ${JSON.stringify(firstFiveMcqs)};
      let currentQIdx = 0;
      let score = 0;
      let answered = false;

      function selectOption(optIdx) {
        if (answered) return;
        answered = true;
        
        const q = quizData[currentQIdx];
        const correct = q.c;
        const options = document.querySelectorAll('.widget-opt');
        
        options.forEach((btn, idx) => {
          if (idx === correct) {
            btn.classList.add('correct');
          } else if (idx === optIdx) {
            btn.classList.add('wrong');
          }
        });
        
        const expDiv = document.getElementById('quiz-explanation');
        expDiv.style.display = 'block';
        if (optIdx === correct) {
          score++;
          expDiv.style.background = 'rgba(95, 194, 126, 0.1)';
          expDiv.style.border = '1px solid var(--ok)';
          expDiv.style.color = 'var(--ok)';
          expDiv.innerHTML = "<strong>Correct!</strong> " + q.e;
        } else {
          expDiv.style.background = 'rgba(233, 116, 95, 0.1)';
          expDiv.style.border = '1px solid var(--bad)';
          expDiv.style.color = 'var(--bad)';
          expDiv.innerHTML = "<strong>Incorrect.</strong> " + q.e;
        }
        
        document.getElementById('quiz-next-btn').style.display = 'block';
      }

      function nextQuestion() {
        answered = false;
        currentQIdx++;
        
        if (currentQIdx >= quizData.length) {
          document.getElementById('quiz-widget').innerHTML = \`
            <div style="text-align: center; padding: 20px;">
              <div style="font-size: 48px; margin-bottom: 15px;">🏆</div>
              <h4 style="font-size: 20px; font-family: var(--serif); color: var(--gold); margin-bottom: 8px;">Quiz Finished!</h4>
              <p style="font-size: 16px; color: var(--ink-dim);">You scored \${score} out of \${quizData.length}.</p>
            </div>
          \`;
          document.getElementById('quiz-progress').style.display = 'none';
          return;
        }
        
        const q = quizData[currentQIdx];
        document.getElementById('quiz-question').textContent = q.q;
        document.getElementById('quiz-explanation').style.display = 'none';
        document.getElementById('quiz-next-btn').style.display = 'none';
        
        const optsDiv = document.getElementById('quiz-options');
        optsDiv.innerHTML = q.o.map((opt, i) => \`
          <button class="widget-opt" onclick="selectOption(\${i})">\${opt}</button>
        \`).join('');
        
        document.getElementById('quiz-progress').textContent = "Question " + (currentQIdx + 1) + " of " + quizData.length;
      }
    </script>
    ${getBaseFooter()}
  `;
  fs.writeFileSync(path.join(mcqDir, 'index.html'), mcqPage, 'utf-8');


  /* ----------------------------------------------------
     3. FLASHCARDS SET PAGE
     ---------------------------------------------------- */
  // Flashcard Schema (FAQPage for Q&As)
  const flashcardSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": firstThreeFlashcards.map(fc => ({
      "@type": "Question",
      "name": fc.front,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": fc.back
      }
    }))
  };

  const flashcardPage = `
    ${getBaseHeader(ch.title + " Flashcards Set", `Study with interactive, digital flashcards for Class 11/12 NEET Biology: ${ch.title}.`, 2, flashcardSchema)}
    <div class="pseo-header">
      <span class="chip" style="background: var(--line2); color: var(--gold); padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-bottom: 10px; display: inline-block;">Flashcards</span>
      <h1>${ch.glyph} ${ch.title} Flashcards</h1>
      <p>Memorise key terms and core biological concepts with active recall.</p>
    </div>

    ${getSiloNav('flashcards')}

    <!-- Mini Widget: Flashcards Preview -->
    <div class="widget-box" style="margin-top: 20px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
        <h3 style="margin: 0;">⚡ Flashcard Simulator</h3>
        <span id="fc-progress" style="font-size: 14px; color: var(--ink-dim);">Card 1 of ${firstThreeFlashcards.length}</span>
      </div>
      
      <div id="fc-widget-card" class="widget-card" onclick="flipFcCard()" style="height: 200px;">
        <div class="widget-card-inner" id="fc-card-inner" style="position: relative; height: 100%; width: 100%; transform-style: preserve-3d; transition: transform 0.6s;">
          <div class="card-face card-front" style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <strong style="color: var(--gold); font-size: 13px; text-transform: uppercase; margin-bottom: 10px;">Front</strong>
            <span id="fc-front-text" style="font-size: 18px; font-weight: 500;">${firstThreeFlashcards[0]?.front || ''}</span>
            <div style="font-size: 11px; color: var(--ink-faint); margin-top: 15px;">Tap to Flip</div>
          </div>
          <div class="card-face card-back" style="position: absolute; width: 100%; height: 100%; backface-visibility: hidden; display: flex; flex-direction: column; justify-content: center; align-items: center; transform: rotateY(180deg); background: var(--panel2);">
            <strong style="color: var(--gold); font-size: 13px; text-transform: uppercase; margin-bottom: 10px;">Back</strong>
            <span id="fc-back-text" style="font-size: 16px; color: var(--ink);">${firstThreeFlashcards[0]?.back || ''}</span>
            <div style="font-size: 11px; color: var(--ink-faint); margin-top: 15px;">Tap to Flip Back</div>
          </div>
        </div>
      </div>
      
      <div style="margin-top: 20px; display: flex; justify-content: space-between; align-items: center;">
        <button onclick="nextFcCard(false, event)" class="cta-btn" style="background: var(--bad); color: #fff; padding: 6px 16px; font-size: 13px; box-shadow: none;">↻ Again</button>
        <button onclick="nextFcCard(true, event)" class="cta-btn" style="background: var(--ok); color: #fff; padding: 6px 16px; font-size: 13px; box-shadow: none;">✓ Known</button>
      </div>
    </div>

    <!-- CTA Banner -->
    <div class="cta-banner">
      <h2>Gain Your Unfair Advantage</h2>
      <p>Track your mastery level with our custom spaced-repetition algorithm. Unlock all ${(ch.flashcards || []).length} flashcards in this deck now!</p>
      <a href="/" class="cta-btn">Unlock Full Deck</a>
    </div>

    <script>
      const fcCards = ${JSON.stringify(firstThreeFlashcards)};
      let currentFcIdx = 0;
      let masteredCount = 0;

      function flipFcCard() {
        document.getElementById('fc-card-inner').style.transform = 
          document.getElementById('fc-card-inner').style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
      }

      function nextFcCard(isKnown, event) {
        event.stopPropagation();
        if (isKnown) masteredCount++;
        
        // Reset flip
        document.getElementById('fc-card-inner').style.transform = 'rotateY(0deg)';
        
        setTimeout(() => {
          currentFcIdx++;
          if (currentFcIdx >= fcCards.length) {
            document.getElementById('fc-widget-card').innerHTML = \`
              <div style="text-align: center; padding: 20px;">
                <div style="font-size: 48px; margin-bottom: 15px;">🏁</div>
                <h4 style="font-size: 20px; font-family: var(--serif); color: var(--gold); margin-bottom: 8px;">Review Complete!</h4>
                <p style="font-size: 16px; color: var(--ink-dim);">You mastered \${masteredCount} out of \${fcCards.length} cards.</p>
              </div>
            \`;
            document.getElementById('fc-progress').style.display = 'none';
            return;
          }
          
          document.getElementById('fc-front-text').textContent = fcCards[currentFcIdx].front;
          document.getElementById('fc-back-text').textContent = fcCards[currentFcIdx].back;
          document.getElementById('fc-progress').textContent = "Card " + (currentFcIdx + 1) + " of " + fcCards.length;
        }, 200);
      }
    </script>
    ${getBaseFooter()}
  `;
  fs.writeFileSync(path.join(flashDir, 'index.html'), flashcardPage, 'utf-8');
});


/* ----------------------------------------------------
   4. GLOSSARY TERM PAGES
   ---------------------------------------------------- */
console.log(`Generating pages for ${glossaryTerms.length} glossary terms.`);
glossaryTerms.forEach((item, idx) => {
  const termSlug = item.term.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  
  const glossaryDir = path.join(rootDir, 'glossary', termSlug);
  ensureDir(glossaryDir);

  sitemapUrls.push({ loc: `https://smartbionotes.vercel.app/glossary/${termSlug}/`, priority: '0.6', changefreq: 'monthly' });

  // Matching game items
  const shuffledOthers = glossaryTerms
    .filter(g => g.term !== item.term)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  
  const matches = [{ term: item.term, def: item.def, correct: true }, ...shuffledOthers.map(o => ({ term: o.term, def: o.def, correct: false }))];
  const matchingOptions = matches.sort(() => 0.5 - Math.random());

  // SILO INTERNAL LINKS
  const peerTerms = glossaryTerms
    .filter(t => t.chapterSlug === item.chapterSlug && t.term !== item.term)
    .slice(0, 4);

  const otherSiloTerms = glossaryTerms
    .filter(t => t.chapterSlug !== item.chapterSlug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  const peerTermsHtml = peerTerms.length > 0 
    ? `
      <div class="related-links-section">
        <h4>Other terms to learn in ${item.chapterTitle}</h4>
        <div class="related-grid">
          ${peerTerms.map(t => {
            const peerSlug = t.term.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
            return `
              <a href="../../glossary/${peerSlug}/" class="related-card">
                <h5>${t.term}</h5>
                <p>Glossary definition & review game.</p>
              </a>
            `;
          }).join('')}
        </div>
      </div>
    ` : '';

  const otherSiloTermsHtml = `
    <div class="related-links-section">
      <h4>Popular NEET Definitions</h4>
      <div class="related-grid">
        ${otherSiloTerms.map(t => {
          const peerSlug = t.term.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
          return `
            <a href="../../glossary/${peerSlug}/" class="related-card">
              <h5>${t.term}</h5>
              <p>Learn term definition in context of ${t.chapterTitle}.</p>
            </a>
          `;
        }).join('')}
      </div>
    </div>
  `;

  // Glossary schemas (DefinedTerm and FAQPage)
  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": item.term,
    "description": item.def,
    "inDefinedTermSet": {
      "@type": "DefinedTermSet",
      "name": "NEET Biology Glossary",
      "url": "https://smartbionotes.vercel.app/glossary/"
    }
  };

  const glossaryFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is the definition of ${item.term} for NEET prep?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.def
        }
      }
    ]
  };

  const glossaryPage = `
    ${getBaseHeader(`What is ${item.term}? Definition & Explanation`, `Learn the definition and meaning of ${item.term} for NEET Biology. Pulls from ${item.chapterTitle}.`, 2, [definedTermSchema, glossaryFaqSchema])}
    <div class="pseo-header">
      <span class="chip" style="background: var(--line2); color: var(--gold); padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-bottom: 10px; display: inline-block;">NEET Glossary Term</span>
      <h1>${item.term}</h1>
      <p style="font-size: 18px; color: #fff; margin-top: 15px; line-height: 1.6;">
        <strong>Definition:</strong> ${item.def}
      </p>
    </div>

    <!-- Interactive Glossary Review Game -->
    <div class="widget-box" style="margin-top: 30px;">
      <h3>🎮 Check Your Recall</h3>
      <p style="color: var(--ink-dim); font-size: 14px; margin-bottom: 20px;">Which concept matches the description below?</p>
      <div style="font-size: 16px; font-weight: 500; background: var(--panel2); padding: 15px; border-radius: 8px; margin-bottom: 20px; border: 1px solid var(--line);">
        "${item.def}"
      </div>
      
      <div class="widget-options" id="glossary-options">
        ${matchingOptions.map((opt, i) => `
          <button class="widget-opt" onclick="checkGlossaryOption(${i}, ${opt.correct})">${opt.term}</button>
        `).join('')}
      </div>
      <div id="glossary-result" style="margin-top: 20px; padding: 15px; border-radius: 8px; font-size: 14px; display: none;"></div>
    </div>

    <div style="margin-top: 30px;">
      <h3 style="font-family: var(--serif); color: var(--gold); border-bottom: 1px solid var(--line); padding-bottom: 8px; margin-bottom: 15px;">Related Study Material</h3>
      <p style="color: var(--ink-dim);">This term belongs to the Class 11/12 NEET curriculum chapter <strong>${item.chapterTitle}</strong>. Explore full notes, active recall flashcards, and pathway diagrams below:</p>
      <div style="display: flex; gap: 12px; margin-top: 15px; flex-wrap: wrap;">
        <a href="../../notes/${item.chapterSlug}/" style="display: inline-block; background: var(--line); color: var(--gold); border: 1px solid var(--line2); padding: 8px 16px; border-radius: 6px; text-decoration: none; font-size: 14px;">View Chapter Notes</a>
        <a href="../../mcq/${item.chapterSlug}/" style="display: inline-block; background: var(--line); color: var(--gold); border: 1px solid var(--line2); padding: 8px 16px; border-radius: 6px; text-decoration: none; font-size: 14px;">Practice MCQs</a>
        <a href="../../flashcards/${item.chapterSlug}/" style="display: inline-block; background: var(--line); color: var(--gold); border: 1px solid var(--line2); padding: 8px 16px; border-radius: 6px; text-decoration: none; font-size: 14px;">Study Flashcards</a>
      </div>
    </div>

    ${peerTermsHtml}
    ${otherSiloTermsHtml}

    <!-- CTA Banner -->
    <div class="cta-banner" style="margin-top: 40px;">
      <h2>Master All 500+ NEET Terms</h2>
      <p>Level up your medical school prep. Learn terms, solve interactive match matrices, and beat the clock in Match-Up!</p>
      <a href="/" class="cta-btn">Unlock the entire Smart Bio Notes for only ₹149 today!</a>
    </div>

    <script>
      let answered = false;
      function checkGlossaryOption(optIdx, isCorrect) {
        if (answered) return;
        answered = true;
        
        const options = document.querySelectorAll('.widget-opt');
        options.forEach((btn, idx) => {
          if (idx === optIdx) {
            btn.classList.add(isCorrect ? 'correct' : 'wrong');
          } else if (btn.textContent === "${item.term.replace(/"/g, '\\"')}") {
            btn.classList.add('correct');
          }
        });
        
        const result = document.getElementById('glossary-result');
        result.style.display = 'block';
        if (isCorrect) {
          result.style.background = 'rgba(95, 194, 126, 0.1)';
          result.style.border = '1px solid var(--ok)';
          result.style.color = 'var(--ok)';
          result.innerHTML = "<strong>Correct!</strong> Great job reinforcing your active memory.";
        } else {
          result.style.background = 'rgba(233, 116, 95, 0.1)';
          result.style.border = '1px solid var(--bad)';
          result.style.color = 'var(--bad)';
          result.innerHTML = "<strong>Not quite.</strong> The correct term is <strong>${item.term.replace(/"/g, '\\"')}</strong>.";
        }
      }
    </script>
    ${getBaseFooter()}
  `;
  fs.writeFileSync(path.join(glossaryDir, 'index.html'), glossaryPage, 'utf-8');
});


/* ----------------------------------------------------
   5. COMPARISON VS PAGES
   ---------------------------------------------------- */
console.log(`Generating pages for ${comparisonPages.length} comparison topics.`);
comparisonPages.forEach((item, idx) => {
  const compareDir = path.join(rootDir, 'compare', item.slug);
  ensureDir(compareDir);

  sitemapUrls.push({ loc: `https://smartbionotes.vercel.app/compare/${item.slug}/`, priority: '0.7', changefreq: 'monthly' });

  // Get peer comparisons
  const peerComparisons = comparisonPages
    .filter(c => c.chapterSlug === item.chapterSlug && c.slug !== item.slug)
    .slice(0, 3);
  
  // Get other comparisons
  const otherSiloComparisons = comparisonPages
    .filter(c => c.chapterSlug !== item.chapterSlug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const peerComparisonsHtml = peerComparisons.length > 0 
    ? `
      <div class="related-links-section">
        <h4>Other contrast sheets in ${item.chapterTitle}</h4>
        <div class="related-grid">
          ${peerComparisons.map(c => `
            <a href="../../compare/${c.slug}/" class="related-card">
              <h5>${c.title}</h5>
              <p>NCERT side-by-side contrast analysis.</p>
            </a>
          `).join('')}
        </div>
      </div>
    ` : '';

  const otherSiloComparisonsHtml = `
    <div class="related-links-section">
      <h4>Popular NEET Differences Sheets</h4>
      <div class="related-grid">
        ${otherSiloComparisons.map(c => `
          <a href="../../compare/${c.slug}/" class="related-card">
            <h5>${c.title}</h5>
            <p>Learn core differences in ${c.chapterTitle}.</p>
          </a>
        `).join('')}
      </div>
    </div>
  `;

  // Compare schema (FAQPage)
  const compareSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is the difference between ${item.title.split(' vs ').join(' and ')}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Core difference sheet comparing ${item.title.split(' vs ').join(' and ')} for NCERT class 11 & 12 exam prep.`
        }
      }
    ]
  };

  const comparePage = `
    ${getBaseHeader(`${item.title} Comparison & Key Differences`, `Understand differences and similarities of ${item.title} for NEET biology. Comprehensive table explanation.`, 2, compareSchema)}
    <div class="pseo-header">
      <span class="chip" style="background: var(--line2); color: var(--gold); padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-bottom: 10px; display: inline-block;">NCERT Comparison Sheet</span>
      <h1>${item.title}</h1>
      <p>Key differences, features, and comparative analysis of ${item.title.replace(' vs ', ' and ')}.</p>
    </div>

    <div style="margin-top: 30px; overflow-x: auto;">
      ${item.table}
    </div>

    <!-- Context Chapter and Internal Links -->
    <div style="margin-top: 40px; padding: 20px; border: 1px solid var(--line); border-radius: 8px; background: var(--panel2);">
      <h3 style="font-family: var(--serif); color: var(--gold); margin-top: 0; margin-bottom: 10px;">Context Chapter</h3>
      <p style="color: var(--ink-dim); font-size: 14px; margin-bottom: 15px;">This comparison table is part of the chapter notes for <strong>${item.chapterTitle}</strong>. Get complete notes, flashcards, active recall sheets, and test prep modes:</p>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <a href="../../notes/${item.chapterSlug}/" class="cta-btn" style="font-size: 13px; padding: 8px 18px; box-shadow: none;">View Chapter Notes</a>
        <a href="../../mcq/${item.chapterSlug}/" class="cta-btn" style="font-size: 13px; padding: 8px 18px; box-shadow: none; background: var(--panel); border: 1px solid var(--line2); color: var(--gold);">Practice MCQs</a>
        <a href="../../flashcards/${item.chapterSlug}/" class="cta-btn" style="font-size: 13px; padding: 8px 18px; box-shadow: none; background: var(--panel); border: 1px solid var(--line2); color: var(--gold);">Study Flashcards</a>
      </div>
    </div>

    ${peerComparisonsHtml}
    ${otherSiloComparisonsHtml}

    <!-- CTA Banner -->
    <div class="cta-banner" style="margin-top: 40px;">
      <h2>Unlock All Study Aids</h2>
      <p>Level up your NEET 2027 preparation. Interactive pathway diagrams, mock test series, study schedules, and customized AI revision plans!</p>
      <a href="/" class="cta-btn">Upgrade to Premium</a>
    </div>
    ${getBaseFooter()}
  `;
  fs.writeFileSync(path.join(compareDir, 'index.html'), comparePage, 'utf-8');
});


/* ----------------------------------------------------
   6. GENERATING SITEMAP.XML
   ---------------------------------------------------- */
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

sitemapUrls.forEach(u => {
  xml += '  <url>\n';
  xml += `    <loc>${u.loc}</loc>\n`;
  xml += `    <changefreq>${u.changefreq}</changefreq>\n`;
  xml += `    <priority>${u.priority}</priority>\n`;
  xml += '  </url>\n';
});

xml += '</urlset>\n';

fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), xml, 'utf-8');
console.log(`Successfully generated sitemap.xml with ${sitemapUrls.length} URLs.`);
