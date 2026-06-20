const fs = require('fs');
const vm = require('vm');
const path = require('path');

const file = 'biolab 11 bio 0,2.html';
const content = fs.readFileSync(path.join(__dirname, 'brain', file), 'utf-8');
const scriptRegex = /<script>([\s\S]*?)<\/script>/g;
let match;
let code = '';
while ((match = scriptRegex.exec(content)) !== null) {
  code += match[1] + '\n';
}

code = code.replace(/\bconst (DATA)\b/g, 'var $1');

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
  _mem: {},
  store: { get:()=>null, set:()=>{} }
};
vm.createContext(sandbox);

try {
  vm.runInContext(preCode + code, sandbox);
} catch (e) {
  console.log(`Error running script from ${file}: ${e.message}`);
}

if (sandbox.DATA) {
  for (const key in sandbox.DATA) {
    const chData = sandbox.DATA[key];
    
    // biolab 11 bio 0,2.html uses a structure similar to our DATA.chapters
    // but its meta properties might be inside `meta`.
    const meta = chData.meta || {};
    
    let chapter = {
      id: `brain_${file.replace(/[^a-zA-Z0-9]/g, '')}_${key}`,
      num: meta.num || key.toUpperCase(),
      title: meta.title || 'Unknown Title',
      subtitle: meta.blurb || '',
      color: meta.color || '#7C6CFF',
      colorD: '#3E32A0',
      glyph: meta.icon || '🦠',
      notes: chData.notes ? chData.notes.map(n => ({ id: n.h.replace(/\W/g, ''), heading: n.h, html: n.html })) : [],
      mnemonics: chData.mnemonics ? chData.mnemonics.map(m => ({ title: m.expands || 'Mnemonic', device: m.hook, expand: [{L:'', t: m.note||''}] })) : [],
      flashcards: chData.flashcards || [],
      recall: chData.recall || [],
      mcqs: chData.mcqs || [],
      match: chData.match || [],
      pathways: chData.pathways || []
    };

    const filename = `data_brain_biolab11_${key}.js`;
    const outContent = `/* Extracted from ${file} */\nDATA.chapters['${chapter.id}'] = ${JSON.stringify(chapter, null, 2)};\n`;
    fs.writeFileSync(path.join(__dirname, filename), outContent);
    console.log(`Generated ${filename}`);
  }
}
