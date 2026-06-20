const fs = require('fs');
const vm = require('vm');
const path = require('path');

const brainDir = path.join(__dirname, 'brain');
const files = fs.readdirSync(brainDir).filter(f => f.endsWith('.html') && !f.includes('diagram-pack'));

let scriptNames = [];

files.forEach((file, index) => {
  const content = fs.readFileSync(path.join(brainDir, file), 'utf-8');
  const scriptRegex = /<script>([\s\S]*?)<\/script>/g;
  let match;
  let code = '';
  while ((match = scriptRegex.exec(content)) !== null) {
    code += match[1] + '\n';
  }

  // Convert const to var for top-level variables so they appear in sandbox
  code = code.replace(/\bconst (CH|FLASH|MCQ)\b/g, 'var $1');

  // We can just execute the code inside a try-catch for every statement, or simpler:
  // Catch the DOM errors but keep the variables.
  // We'll stub out document completely.
  let preCode = `
    var document = new Proxy({}, { get: () => function() { return new Proxy({}, { get: () => function(){} }); } });
    var window = new Proxy({}, { get: () => function() {} });
    var localStorage = { getItem: () => null, setItem: () => {} };
    function setTimeout() {}
    function clearTimeout() {}
    function setInterval() {}
    function clearInterval() {}
  `;

  const sandbox = {
    console: console,
    Math: Math,
    JSON: JSON,
    STATE: {},
    MEM: {}
  };
  vm.createContext(sandbox);

  try {
    vm.runInContext(preCode + code, sandbox);
  } catch (e) {
    console.log(`Error running script from ${file}: ${e.message}`);
  }

  // Map
  let chapters = [];

  if (sandbox.CH) {
    for (const key in sandbox.CH) {
      const chData = sandbox.CH[key];
      let chapter = {
        id: `brain_${file.replace(/[^a-zA-Z0-9]/g, '')}_${key}`,
        num: key.replace(/[^0-9]/g, '').toUpperCase() || (index+1).toString(),
        title: chData.title || 'Unknown Title',
        subtitle: chData.sub || chData.eyebrow || '',
        color: chData.accent === 'green' ? '#34d399' : (chData.accent === 'amber' ? '#f5a524' : '#3498db'),
        colorD: chData.accent === 'green' ? '#0f3b2c' : (chData.accent === 'amber' ? '#3d2a08' : '#2980b9'),
        glyph: '🦠',
        notes: [],
        mnemonics: [],
        flashcards: [],
        recall: [],
        mcqs: [],
        match: [],
        pathways: []
      };

      if (sandbox.FLASH && sandbox.FLASH[key]) {
        sandbox.FLASH[key].forEach(f => {
          if (Array.isArray(f) && f.length >= 2) {
            chapter.flashcards.push({ front: f[0], back: f[1] });
            chapter.recall.push({ q: f[0], hint: 'Think...', a: f[1] });
          }
        });
      }

      if (sandbox.MCQ && sandbox.MCQ[key]) {
        sandbox.MCQ[key].forEach(m => {
          if (Array.isArray(m) && m.length >= 4) {
            chapter.mcqs.push({ q: m[0], o: m[1], c: m[2], e: m[3] || '' });
          }
        });
      }
      chapters.push(chapter);
    }
  } else if (sandbox.CARDS) {
    let chapter = {
      id: `brain_${file.replace(/[^a-zA-Z0-9]/g, '')}`,
      num: 'CELL',
      title: 'Cell Cycle & Division',
      subtitle: 'Extracted from Division Lab',
      color: '#5B4BD6',
      colorD: '#3E32A0',
      glyph: '🧬',
      notes: [],
      mnemonics: [],
      flashcards: [],
      recall: [],
      mcqs: [],
      match: [],
      pathways: []
    };

    sandbox.CARDS.forEach(c => {
      chapter.flashcards.push({ front: c.q, back: c.a });
      chapter.recall.push({ q: c.q, hint: 'Think...', a: c.a });
    });

    if (sandbox.QUIZ) {
      sandbox.QUIZ.forEach(q => {
        chapter.mcqs.push({ q: q.q, o: q.o, c: q.c, e: q.e || '' });
      });
    }

    if (sandbox.MNEM) {
      sandbox.MNEM.forEach(m => {
        chapter.mnemonics.push({
          title: m.key || 'Mnemonic',
          device: m.hook,
          expand: [{ L: '', t: m.exp || '' }]
        });
      });
    }
    chapters.push(chapter);
  }

  chapters.forEach((ch) => {
    const filename = `data_${ch.id}.js`;
    scriptNames.push(filename);
    const content = `/* Extracted from ${file} */\nDATA.chapters['${ch.id}'] = ${JSON.stringify(ch, null, 2)};\n`;
    fs.writeFileSync(path.join(__dirname, filename), content);
    console.log(`Generated ${filename} from ${file}`);
  });
});

console.log('SCRIPT_NAMES=' + scriptNames.join(','));
