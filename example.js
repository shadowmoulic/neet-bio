/* ====== example.js ====== */
/* 
  Template for a new chapter in The Naturalist's Codex.
  Use this format to generate additional chapters.
*/

DATA.chapters.example = {
  // 1. Basic Metadata
  id: "chapter_id_here", // unique string, e.g., "cell"
  num: 7, // Chapter number
  title: "Chapter Title",
  subtitle: "Brief subtitle summarizing the topics",
  color: "#3498db", // Main theme color (hex)
  colorD: "#2980b9", // Darker accent color (hex)
  glyph: "🔬", // A relevant emoji

  // 2. Study Notes (Array of sections)
  notes: [
    {
      id: "section1_id", // unique string for the section
      heading: "Section Heading",
      html: `
        <p>Your HTML content here. Use <b>bold</b> for emphasis.</p>
        <h4>Subheading</h4>
        <ul>
          <li>Point one</li>
          <li>Point two with <span class="kw">key word</span></li>
        </ul>
        <div class="callout"><b>Important:</b> A key takeaway goes here.</div>
        <table class="cmp">
          <thead><tr><th>Feature A</th><th>Feature B</th></tr></thead>
          <tbody>
            <tr><td>Detail A</td><td>Detail B</td></tr>
          </tbody>
        </table>
        <div class="flow"><span class="node">Step 1</span><span class="arr">→</span><span class="node">Step 2</span></div>
      `
    }
  ],

  // 3. Mnemonics (Memory Hooks)
  mnemonics: [
    {
      title: "Title of the Mnemonic",
      device: `<b>M</b>y <b>V</b>ery <b>E</b>ducated <b>M</b>other...`, // The mnemonic phrase
      expand: [
        { L: "M", t: "Mercury — first planet" },
        { L: "V", t: "Venus — second planet" }
      ]
    }
  ],

  // 4. Flashcards (Term / Definition pairs)
  flashcards: [
    { front: "What is the powerhouse of the cell?", back: "Mitochondria." },
    { front: "Define osmosis.", back: "Movement of water across a semi-permeable membrane from high to low concentration." }
  ],

  // 5. Active Recall (Questions and Model Answers)
  recall: [
    { 
      q: "Explain the fluid mosaic model of the cell membrane.", 
      hint: "Think about lipids and proteins.", 
      a: "The cell membrane is a <b>phospholipid bilayer</b> with embedded proteins that can move laterally, making it 'fluid'. It resembles a 'mosaic' because of the varied protein components."
    }
  ],

  // 6. Multiple Choice Questions
  mcqs: [
    {
      q: "Which of the following is responsible for protein synthesis?",
      o: ["Lysosome", "Ribosome", "Nucleus", "Golgi body"],
      c: 1, // Index of the correct option (0-based)
      e: "<b>Ribosomes</b> are the site of protein synthesis in all living cells." // Explanation shown after answering
    }
  ],

  // 7. Match-Up (Pairs to match)
  match: [
    { term: "Nucleus", def: "Contains genetic material" },
    { term: "Lysosome", def: "Digestive enzymes" }
  ],

  // 8. Build the Pathway (Sequencing tasks)
  pathways: [
    {
      title: "Central Dogma of Biology",
      prompt: "Order the steps from DNA to protein.",
      steps: ["DNA", "Transcription", "mRNA", "Translation", "Protein"]
    }
  ]
};
