const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = __dirname;
const filesDir = path.join(rootDir, 'files');

// Gather all JS chapter files
const rootFiles = fs.readdirSync(rootDir)
  .filter(f => f.endsWith('.js') && f.startsWith('data_') && f !== 'verify_chapters.js' && f !== 'components.js' && f !== 'auth.js' && f !== 'config.js' && f !== 'extract.js' && f !== 'extract2.js' && f !== 'generate_sitemap.js' && f !== 'generate_sql_migration.js' && f !== 'migrate_via_api.js');

if (fs.existsSync(path.join(rootDir, 'bio_ch9_ch10.js'))) {
  rootFiles.push('bio_ch9_ch10.js');
}

const subFiles = fs.existsSync(filesDir)
  ? fs.readdirSync(filesDir).filter(f => f.endsWith('.js')).map(f => path.join('files', f))
  : [];

const allFiles = [...rootFiles, ...subFiles];
const allChapters = {};

allFiles.forEach(file => {
  const filePath = path.join(rootDir, file);
  try {
    const code = fs.readFileSync(filePath, 'utf-8');
    const sandbox = { DATA: { chapters: {} }, window: {} };
    sandbox.window.DATA = sandbox.DATA;
    vm.createContext(sandbox);
    vm.runInContext(code, sandbox);
    
    Object.keys(sandbox.DATA.chapters).forEach(key => {
      const ch = sandbox.DATA.chapters[key];
      if (ch && ch.id) {
        allChapters[ch.id] = ch;
      }
    });
  } catch (e) {
    console.error(`Error parsing ${file}: ${e.message}`);
  }
});

const SUBJECT_MAP = {
  /* Class 11 Biology */
  living:       'Class 11 Bio', bioclassif:    'Class 11 Bio', plant:     'Class 11 Bio', animal:   'Class 11 Bio',
  morph:        'Class 11 Bio', anat:          'Class 11 Bio', struct_anim: 'Class 11 Bio', biomol:  'Class 11 Bio',
  brain_biolab11_cell:   'Class 11 Bio',
  brain_biolabphotosynthesisandresphtml_c13: 'Class 11 Bio',
  brain_biolabphotosynthesisandresphtml_c14: 'Class 11 Bio',
  brain_bodyworks3chpsbioclas11html_loc: 'Class 11 Bio',
  brain_bodyworks3chpsbioclas11html_bre: 'Class 11 Bio',
  brain_divisionlab01cellcyclehtml: 'Class 11 Bio',
  brain_biolab11_plant: 'Class 11 Bio',
  /* Class 12 Biology */
  brain_biolab11_blood:  'Class 12 Bio', brain_biolab11_neural: 'Class 12 Bio',
  brain_biolab11_horm:   'Class 12 Bio', brain_bodyworks3chpsbioclas11html_exc: 'Class 12 Bio',
  repro_health:  'Class 12 Bio', human_health:  'Class 12 Bio',
  ch9:           'Class 12 Bio', biotech_app:   'Class 12 Bio',
  molecular: 'Class 12 Bio', inheritance: 'Class 12 Bio',
  sexual_repro:  'Class 12 Bio',
  evolution:     'Class 12 Bio', human_repro:  'Class 12 Bio',
  biodiv:        'Class 12 Bio', microbes:      'Class 12 Bio',
  ecosystem:     'Class 12 Bio', orgpop:        'Class 12 Bio',
  biotech_principles: 'Class 12 Bio'
};

function getSubject(id) {
  if (SUBJECT_MAP[id]) return SUBJECT_MAP[id];
  if (id.startsWith('phy')) return 'Physics';
  if (id.startsWith('chem')) return 'Chemistry';
  if (id.startsWith('brain_biolab11')) return 'Class 12 Bio';
  return 'Class 11 Bio'; // fallback
}

const chapters = Object.values(allChapters).sort((a, b) => parseInt(a.num || '0') - parseInt(b.num || '0'));

let csvContent = "Chapter Number,Chapter ID,Title,Class/Subject,Flashcards,MCQs,Mnemonics,Recall,Match,Pathways\n";
const lessThan50 = [];

chapters.forEach(ch => {
  const fcCount = (ch.flashcards || []).length;
  const mcqCount = (ch.mcqs || []).length;
  const mnemCount = (ch.mnemonics || []).length;
  const recallCount = (ch.recall || []).length;
  const matchCount = (ch.match || []).length;
  const pathwayCount = (ch.pathways || []).length;

  const subject = getSubject(ch.id);

  if (fcCount < 50) {
    lessThan50.push({ title: ch.title, count: fcCount });
  }

  // Quote the title to handle commas safely
  const safeTitle = `"${ch.title.replace(/"/g, '""')}"`;
  csvContent += `${ch.num || ''},${ch.id},${safeTitle},${subject},${fcCount},${mcqCount},${mnemCount},${recallCount},${matchCount},${pathwayCount}\n`;
});

fs.writeFileSync(path.join(rootDir, 'chapter_stats.csv'), csvContent);

console.log("=== Chapters with less than 50 flashcards ===");
lessThan50.forEach(c => {
  console.log(`- ${c.title}: ${c.count} cards`);
});
console.log("\nCreated chapter_stats.csv with full details!");
