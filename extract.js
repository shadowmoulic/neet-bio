const fs = require('fs');
const vm = require('vm');
const path = require('path');

const brainDir = path.join(__dirname, 'brain');
const files = fs.readdirSync(brainDir).filter(f => f.endsWith('.html') && !f.includes('diagram-pack'));

let scriptNames = [];

const MNEMONICS_MAP = {
  loc: [
    { title: "Muscle properties", device: "<b>E</b>-<b>C</b>-<b>E</b>-<b>E</b>", expand: [ { L: "E", t: "Excitability" }, { L: "C", t: "Contractility" }, { L: "E", t: "Extensibility" }, { L: "E", t: "Elasticity" } ] },
    { title: "Vertebrae regions & count", device: "<b>C</b>ereal at 7, <b>T</b>urkey at 12, <b>L</b>unch at 5", expand: [ { L: "C", t: "Cervical (7)" }, { L: "T", t: "Thoracic (12)" }, { L: "L", t: "Lumbar (5)" }, { L: "S", t: "Sacrum (1, fused)" }, { L: "C", t: "Coccyx (1, fused)" } ] },
    { title: "Rib types", device: "<b>T</b>rue 7, <b>F</b>lose 3, <b>F</b>loat 2", expand: [ { L: "T", t: "True ribs (1–7)" }, { L: "F", t: "False ribs (8–10)" }, { L: "F", t: "Floating ribs (11–12)" } ] }
  ],
  exc: [
    { title: "Nitrogenous waste toxicity", device: "<b>A</b>mmonia > <b>U</b>rea > <b>U</b>ric acid", expand: [ { L: "A", t: "Ammonia — most toxic, needs most water" }, { L: "U", t: "Urea — moderate toxicity, moderate water" }, { L: "U", t: "Uric acid — least toxic, excreted as pellet/paste" } ] }
  ],
  bre: [
    { title: "ECG waves", device: "<b>P</b>-pushes Atria, <b>QRS</b>-Quivers Ventricles, <b>T</b>-Takes a rest", expand: [ { L: "P", t: "Atrial depolarisation (contraction)" }, { L: "QRS", t: "Ventricular depolarisation" }, { L: "T", t: "Ventricular repolarisation (relaxation)" } ] }
  ],
  c13: [
    { title: "Calvin cycle stages", device: "<b>C</b>ar-<b>R</b>ed-<b>R</b>eg", expand: [ { L: "C", t: "Carboxylation — CO2 fixed to RuBP using RuBisCO" }, { L: "R", t: "Reduction — ATP and NADPH used to form G3P/glucose" }, { L: "R", t: "Regeneration — RuBP regenerated using 1 ATP" } ] }
  ],
  c14: [
    { title: "RQ values", device: "<b>C</b>arb 1, <b>P</b>ro 0.9, <b>F</b>at 0.7", expand: [ { L: "C", t: "Carbohydrates (RQ = 1.0)" }, { L: "P", t: "Proteins (RQ ≈ 0.9)" }, { L: "F", t: "Fats/lipids (RQ ≈ 0.7)" } ] }
  ]
};

const CELL_NOTES = [
  {
    id: "cellcycle",
    heading: "Cell Cycle & Interphase",
    html: `
      <p>The <span class="term">cell cycle</span> is the sequence of events by which a cell duplicates its genome, synthesises other constituents, and divides into two cells.</p>
      <p><b>Interphase</b> occupies >95% of the cycle. It has three phases:</p>
      <ul>
        <li><b>G1 (Gap 1):</b> Cell is metabolically active and grows continuously; no DNA replication.</li>
        <li><b>S (Synthesis):</b> DNA replication occurs. DNA amount doubles (2C → 4C); chromosome number remains the same (2n). Centriole duplicates in the cytoplasm of animal cells.</li>
        <li><b>G2 (Gap 2):</b> Proteins are synthesised as the cell prepares for mitosis; growth continues.</li>
      </ul>
      <div class="callout"><b>G0 (Quiescent) Phase:</b> Cells that exit G1 phase to enter an inactive state. They remain metabolically active but do not divide unless called upon (e.g., heart cells).</div>
    `
  },
  {
    id: "mitosis",
    heading: "Mitosis (M Phase)",
    html: `
      <p>Mitosis is an <b>equational division</b>, producing two genetically identical diploid daughter cells. It has four karyokinesis stages:</p>
      <table class="cmp">
        <thead>
          <tr><th>Stage</th><th>Key Events</th></tr>
        </thead>
        <tbody>
          <tr><td><b>Prophase</b></td><td>Chromatin condenses; centrosomes move to opposite poles; spindle fibers form; nuclear envelope, nucleolus, Golgi and ER disappear.</td></tr>
          <tr><td><b>Metaphase</b></td><td>Spindle fibers attach to kinetochores; chromosomes align at the equator (metaphase plate).</td></tr>
          <tr><td><b>Anaphase</b></td><td>Centromeres split; sister chromatids separate and move to opposite poles.</td></tr>
          <tr><td><b>Telophase</b></td><td>Chromosomes decondense at the poles; nuclear envelope reforms; nucleolus, Golgi and ER reappear.</td></tr>
        </tbody>
      </table>
      <div class="callout"><b>Cytokinesis:</b> Plant cells divide by cell plate formation (inside-out); animal cells divide by cleavage furrow formation (outside-in).</div>
    `
  },
  {
    id: "meiosis",
    heading: "Meiosis",
    html: `
      <p>Meiosis is a <b>reductional division</b> that halves the chromosome number (diploid → haploid), producing four non-identical haploid cells.</p>
      <h4>Meiosis I (Prophase I Stages)</h4>
      <ul>
        <li><b>Leptotene:</b> Chromosomes become gradually visible under light microscope.</li>
        <li><b>Zygotene:</b> Synapsis of homologous chromosomes occurs, forming bivalents (tetrads) and the synaptonemal complex.</li>
        <li><b>Pachytene:</b> Crossing over occurs between non-sister chromatids of homologous chromosomes at recombination nodules (recombinase enzyme).</li>
        <li><b>Diplotene:</b> Dissolution of synaptonemal complex; chiasmata (X-shaped structures) become visible.</li>
        <li><b>Diakinesis:</b> Terminalisation of chiasmata; spindle assembly; nucleolus and nuclear envelope disappear.</li>
      </ul>
      <div class="callout"><b>Anaphase I vs. Anaphase II:</b> In Anaphase I, homologous chromosomes separate while sister chromatids remain associated. In Anaphase II, sister chromatids separate.</div>
    `
  }
];

const CELL_MATCH = [
  { term: "G1 phase", def: "Cell growth, no DNA replication" },
  { term: "S phase", def: "DNA replication (content doubles)" },
  { term: "G2 phase", def: "Protein synthesis, preparing for mitosis" },
  { term: "G0 phase", def: "Quiescent stage, metabolically active but suspended division" },
  { term: "Prophase", def: "Chromatin condensation, spindle formation" },
  { term: "Metaphase", def: "Chromosomes align at equator" },
  { term: "Anaphase", def: "Centromeres split, sister chromatids move apart" },
  { term: "Telophase", def: "Two nuclei reform, chromosomes decondense" },
  { term: "Zygotene", def: "Synapsis of homologous chromosomes (bivalent forms)" },
  { term: "Pachytene", def: "Crossing over & recombination" },
  { term: "Diplotene", def: "Dissolution of synaptonemal complex, chiasmata visible" },
  { term: "Diakinesis", def: "Terminalisation of chiasmata, nuclear envelope breaks down" }
];

const CELL_PATHWAYS = [
  {
    title: "Mitosis Stages",
    prompt: "Order the stages of cell division from start to finish.",
    steps: ["Prophase", "Metaphase", "Anaphase", "Telophase", "Cytokinesis"]
  },
  {
    title: "Interphase Phases",
    prompt: "Order the phases of cell growth and DNA synthesis.",
    steps: ["G1 phase", "S phase", "G2 phase", "M phase"]
  },
  {
    title: "Prophase I Sub-stages",
    prompt: "Order the sub-stages of meiotic prophase I.",
    steps: ["Leptotene", "Zygotene", "Pachytene", "Diplotene", "Diakinesis"]
  }
];

files.forEach((file, index) => {
  const content = fs.readFileSync(path.join(brainDir, file), 'utf-8');
  const scriptRegex = /<script>([\s\S]*?)<\/script>/g;
  let match;
  let code = '';
  while ((match = scriptRegex.exec(content)) !== null) {
    code += match[1] + '\n';
  }

  // Convert const to var for top-level variables so they appear in sandbox
  code = code.replace(/\bconst (CH|FLASH|MCQ|NOTES|MATCH|SEQ)\b/g, 'var $1');

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
        mnemonics: MNEMONICS_MAP[key] || [],
        flashcards: [],
        recall: [],
        mcqs: [],
        match: [],
        pathways: []
      };

      // Extract Notes
      if (sandbox.NOTES && sandbox.NOTES[key]) {
        sandbox.NOTES[key].forEach(n => {
          chapter.notes.push({
            id: (n.n || '').replace(/\W/g, '') || n.t.replace(/\W/g, ''),
            heading: n.t,
            html: n.body
          });
        });
      }

      // Extract Flashcards & Recall
      if (sandbox.FLASH && sandbox.FLASH[key]) {
        sandbox.FLASH[key].forEach(f => {
          if (Array.isArray(f) && f.length >= 2) {
            chapter.flashcards.push({ front: f[0], back: f[1] });
            chapter.recall.push({ q: f[0], hint: 'Think...', a: f[1] });
          }
        });
      }

      // Extract MCQs
      if (sandbox.MCQ && sandbox.MCQ[key]) {
        sandbox.MCQ[key].forEach(m => {
          if (Array.isArray(m) && m.length >= 4) {
            chapter.mcqs.push({ q: m[0], o: m[1], c: m[2], e: m[3] || '' });
          }
        });
      }

      // Extract Match-Up
      if (sandbox.MATCH && sandbox.MATCH[key]) {
        sandbox.MATCH[key].forEach(set => {
          if (set.pairs) {
            set.pairs.forEach(pair => {
              if (Array.isArray(pair) && pair.length >= 2) {
                chapter.match.push({ term: pair[0], def: pair[1] });
              }
            });
          }
        });
      }

      // Extract Pathways
      if (sandbox.SEQ && sandbox.SEQ[key]) {
        sandbox.SEQ[key].forEach(s => {
          chapter.pathways.push({
            title: s.title || '',
            prompt: s.sub || s.prompt || '',
            steps: s.steps || []
          });
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
      notes: CELL_NOTES,
      mnemonics: [],
      flashcards: [],
      recall: [],
      mcqs: [],
      match: CELL_MATCH,
      pathways: CELL_PATHWAYS
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
