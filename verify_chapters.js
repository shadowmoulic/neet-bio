const fs = require('fs');
const path = require('path');
const vm = require('vm');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.js') && f !== 'verify_chapters.js' && f !== 'components.js' && f !== 'auth.js' && f !== 'config.js' && f !== 'extract.js' && f !== 'extract2.js');

console.log(`Found ${files.length} JS files to check.`);

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  const code = fs.readFileSync(filePath, 'utf-8');

  // Stub sandbox to run the JS file and extract chapters
  const sandbox = {
    DATA: {
      chapters: {}
    },
    console: console
  };
  vm.createContext(sandbox);

  try {
    vm.runInContext(code, sandbox);
  } catch (e) {
    console.error(`[ERROR] Failed to run ${file}: ${e.message}`);
    return;
  }

  const chapters = sandbox.DATA.chapters;
  const chapterKeys = Object.keys(chapters);

  if (chapterKeys.length === 0) {
    console.log(`[WARN] ${file} did not define any chapters in DATA.chapters.`);
    return;
  }

  chapterKeys.forEach(key => {
    const ch = chapters[key];
    console.log(`\n--- Checking Chapter: ${key} (Title: "${ch.title || 'N/A'}") in ${file} ---`);

    const missingMeta = [];
    ['id', 'num', 'title', 'subtitle', 'color', 'colorD', 'glyph'].forEach(field => {
      if (ch[field] === undefined || ch[field] === null || ch[field] === '') {
        missingMeta.push(field);
      }
    });
    if (missingMeta.length > 0) {
      console.log(`  [ERR] Missing basic metadata fields: ${missingMeta.join(', ')}`);
    }

    // Check notes
    if (!ch.notes) {
      console.log(`  [ERR] 'notes' is missing.`);
    } else if (!Array.isArray(ch.notes)) {
      console.log(`  [ERR] 'notes' is not an array.`);
    } else if (ch.notes.length === 0) {
      console.log(`  [WARN] 'notes' array is empty.`);
    } else {
      ch.notes.forEach((n, idx) => {
        const missing = [];
        if (!n.id) missing.push('id');
        if (!n.heading) missing.push('heading');
        if (!n.html) missing.push('html');
        if (missing.length > 0) {
          console.log(`    [ERR] note[${idx}] missing: ${missing.join(', ')}`);
        }
      });
    }

    // Check mnemonics
    if (!ch.mnemonics) {
      console.log(`  [ERR] 'mnemonics' is missing.`);
    } else if (!Array.isArray(ch.mnemonics)) {
      console.log(`  [ERR] 'mnemonics' is not an array.`);
    } else if (ch.mnemonics.length === 0) {
      console.log(`  [WARN] 'mnemonics' array is empty.`);
    } else {
      ch.mnemonics.forEach((m, idx) => {
        const missing = [];
        if (!m.title) missing.push('title');
        if (!m.device) missing.push('device');
        if (!m.expand) missing.push('expand');
        if (missing.length > 0) {
          console.log(`    [ERR] mnemonic[${idx}] missing: ${missing.join(', ')}`);
        } else if (!Array.isArray(m.expand)) {
          console.log(`    [ERR] mnemonic[${idx}].expand is not an array.`);
        }
      });
    }

    // Check flashcards
    if (!ch.flashcards) {
      console.log(`  [ERR] 'flashcards' is missing.`);
    } else if (!Array.isArray(ch.flashcards)) {
      console.log(`  [ERR] 'flashcards' is not an array.`);
    } else if (ch.flashcards.length === 0) {
      console.log(`  [WARN] 'flashcards' array is empty.`);
    } else {
      ch.flashcards.forEach((f, idx) => {
        if (f.front === undefined || f.back === undefined) {
          const keys = Object.keys(f);
          console.log(`    [ERR] flashcard[${idx}] lacks 'front' or 'back'. Has keys: ${keys.join(', ')}`);
        }
      });
    }

    // Check recall
    if (!ch.recall) {
      console.log(`  [ERR] 'recall' is missing.`);
    } else if (!Array.isArray(ch.recall)) {
      console.log(`  [ERR] 'recall' is not an array.`);
    } else if (ch.recall.length === 0) {
      console.log(`  [WARN] 'recall' array is empty.`);
    } else {
      ch.recall.forEach((r, idx) => {
        const missing = [];
        if (r.q === undefined) missing.push('q');
        if (r.hint === undefined) missing.push('hint');
        if (r.a === undefined) missing.push('a');
        if (missing.length > 0) {
          console.log(`    [ERR] recall[${idx}] missing: ${missing.join(', ')}`);
        }
      });
    }

    // Check mcqs
    if (!ch.mcqs) {
      console.log(`  [ERR] 'mcqs' is missing.`);
    } else if (!Array.isArray(ch.mcqs)) {
      console.log(`  [ERR] 'mcqs' is not an array.`);
    } else if (ch.mcqs.length === 0) {
      console.log(`  [WARN] 'mcqs' array is empty.`);
    } else {
      ch.mcqs.forEach((m, idx) => {
        const missing = [];
        if (m.q === undefined) missing.push('q');
        if (m.o === undefined) missing.push('o');
        if (m.c === undefined) missing.push('c');
        if (m.e === undefined) missing.push('e');
        if (missing.length > 0) {
          console.log(`    [ERR] mcq[${idx}] missing: ${missing.join(', ')}`);
        } else {
          if (!Array.isArray(m.o)) console.log(`    [ERR] mcq[${idx}].o is not an array.`);
          if (typeof m.c !== 'number') console.log(`    [ERR] mcq[${idx}].c is not a number.`);
        }
      });
    }

    // Check match
    if (!ch.match) {
      console.log(`  [ERR] 'match' is missing.`);
    } else if (!Array.isArray(ch.match)) {
      console.log(`  [ERR] 'match' is not an array.`);
    } else if (ch.match.length === 0) {
      console.log(`  [WARN] 'match' array is empty.`);
    } else {
      ch.match.forEach((m, idx) => {
        if (m.term === undefined || m.def === undefined) {
          const keys = Object.keys(m);
          console.log(`    [ERR] match[${idx}] lacks 'term' or 'def'. Has keys: ${keys.join(', ')}`);
        }
      });
    }

    // Check pathways
    if (!ch.pathways) {
      console.log(`  [ERR] 'pathways' is missing.`);
    } else if (!Array.isArray(ch.pathways)) {
      console.log(`  [ERR] 'pathways' is not an array.`);
    } else if (ch.pathways.length === 0) {
      console.log(`  [WARN] 'pathways' array is empty.`);
    } else {
      ch.pathways.forEach((p, idx) => {
        const missing = [];
        if (p.title === undefined) missing.push('title');
        if (p.prompt === undefined) missing.push('prompt');
        if (p.steps === undefined) missing.push('steps');
        if (missing.length > 0) {
          console.log(`    [ERR] pathway[${idx}] missing: ${missing.join(', ')}`);
        } else if (!Array.isArray(p.steps)) {
          console.log(`    [ERR] pathway[${idx}].steps is not an array.`);
        }
      });
    }
  });
});
