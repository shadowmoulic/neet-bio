/* ====== data_biotech.js — Chapter 9: Biotechnology – Principles and Processes ====== */
DATA.chapters.biotech = {
  id: "biotech",
  num: 9,
  title: "Biotechnology: Principles & Processes",
  subtitle: "Genetic engineering, restriction enzymes, vectors, cloning & PCR — NCERT Ch 9",
  color: "#22c55e",
  colorD: "#14532d",
  glyph: "🧪",

  notes: [
    {
      id: "bt_intro",
      heading: "What is Biotechnology?",
      html: `
        <p><b>Biotechnology</b>: Using live organisms or enzymes to produce products and processes useful to humans.</p>
        <p><b>EFB definition</b>: 'Integration of natural science and organisms, cells, parts thereof, and molecular analogues for products and services.'</p>
        <h4>Two core techniques of modern biotechnology</h4>
        <ul>
          <li><b>Genetic engineering</b>: Altering chemistry of DNA/RNA, introducing it into host to change phenotype.</li>
          <li><b>Bioprocess engineering</b>: Maintaining sterile conditions in chemical engineering to grow desired microbe/cell at large scale.</li>
        </ul>
        <h4>Three basic steps of genetic modification</h4>
        <div class="flow"><span class="step">Identify DNA with desired genes</span><span class="arr">→</span><span class="step">Introduce DNA into host</span><span class="arr">→</span><span class="step">Maintain and transfer DNA to progeny</span></div>
        <p>First recombinant DNA was constructed in <b>1972</b> by <b>Stanley Cohen and Herbert Boyer</b>.</p>
      `
    },
    {
      id: "bt_tools",
      heading: "Tools of Recombinant DNA Technology",
      html: `
        <h4>1. Restriction Enzymes ("Molecular Scissors")</h4>
        <p>First restriction endonuclease isolated: <b>Hind II</b> (1968). Today <b>more than 900</b> restriction enzymes isolated from over <b>230 strains</b> of bacteria.</p>
        <p><b>Naming convention:</b> 1st letter = genus; 2nd & 3rd = species; e.g., <b>EcoRI</b> = <i>Escherichia coli</i> RY13, isolated in order I.</p>
        <ul>
          <li>Exonucleases — remove nucleotides from the <b>ends</b> of DNA.</li>
          <li>Endonucleases — cut at <b>specific internal sites</b> (recognition sequences).</li>
          <li>Recognition sequences are <b>palindromic</b> (read same on both strands in 5'→3' direction). Example: <code>5'—GAATTC—3' / 3'—CTTAAG—5'</code></li>
          <li>Cutting leaves single-stranded overhangs = <b>sticky ends</b> → allows joining by DNA ligase.</li>
        </ul>
        <div class="callout"><b>Gel electrophoresis:</b> DNA fragments separated by size through agarose gel under electric field. DNA is negatively charged → moves towards anode. Stained with <b>ethidium bromide</b> and visualised under UV light. Bands cut out = <b>elution</b>.</div>
        <h4>2. Cloning Vectors</h4>
        <p>Plasmids and bacteriophages that replicate inside bacterial cells independent of chromosomal DNA.</p>
        <h4>Requirements for a vector</h4>
        <ul>
          <li><b>ori</b> — origin of replication: controls copy number.</li>
          <li><b>Selectable marker</b>: identifies transformants (e.g., antibiotic resistance genes — <i>ampR</i>, <i>tetR</i>).</li>
          <li><b>Cloning sites</b>: few recognition sites for restriction enzymes.</li>
        </ul>
        <p>Classic vector: <b>pBR322</b> — has <i>ampR</i> (ampicillin), <i>tetR</i> (tetracycline), ori, rop gene.</p>
        <p><b>Insertional inactivation</b>: Foreign DNA inserted into β-galactosidase gene → bacteria produce no colour (white colonies = recombinants; blue colonies = non-recombinants).</p>
        <p><b>Plant vector</b>: Ti plasmid of <i>Agrobacterium tumefaciens</i> — T-DNA delivered into plant cells.</p>
        <p><b>Animal vector</b>: Disarmed retroviruses — deliver genes into animal cells.</p>
        <h4>3. Competent Host</h4>
        <p>DNA is hydrophilic → cannot cross cell membrane normally. Bacteria made competent by treatment with divalent cations (e.g., Ca²⁺) → incubate with DNA on ice → heat shock at 42°C → back to ice.</p>
        <p>Other methods: <b>Micro-injection</b> (into animal cell nucleus), <b>Biolistics/gene gun</b> (gold/tungsten particles coated with DNA, for plants), <b>Disarmed pathogen vectors</b>.</p>
      `
    },
    {
      id: "bt_process",
      heading: "Processes of Recombinant DNA Technology",
      html: `
        <div class="flow">
          <span class="step">1. Isolate DNA</span><span class="arr">→</span>
          <span class="step">2. Cut with restriction enzymes</span><span class="arr">→</span>
          <span class="step">3. Amplify by PCR</span><span class="arr">→</span>
          <span class="step">4. Ligate into vector</span><span class="arr">→</span>
          <span class="step">5. Transform into host</span><span class="arr">→</span>
          <span class="step">6. Culture in bioreactor</span><span class="arr">→</span>
          <span class="step">7. Downstream processing</span>
        </div>
        <h4>DNA Isolation</h4>
        <p>Cell lysis enzymes: <b>lysozyme</b> (bacteria), <b>cellulase</b> (plant), <b>chitinase</b> (fungi). Remove RNA (ribonuclease), proteins (protease). DNA precipitates with <b>chilled ethanol</b> — visible as fine threads.</p>
        <h4>PCR (Polymerase Chain Reaction)</h4>
        <ul>
          <li>Amplifies gene of interest in vitro using two primers + DNA polymerase.</li>
          <li>Three steps per cycle: <b>Denaturation</b> → <b>Primer annealing</b> → <b>Extension</b>.</li>
          <li>Thermostable polymerase: <b>Taq polymerase</b> from <i>Thermus aquaticus</i>.</li>
          <li>Can amplify to ~1 billion copies.</li>
        </ul>
        <h4>Bioreactor</h4>
        <p>Large vessel (100–1000 litres) for growing cells under optimal conditions (temp, pH, oxygen). Most common type: <b>stirred-tank bioreactor</b>.</p>
        <h4>Downstream Processing</h4>
        <p>Separation, purification, formulation, quality control testing before marketing.</p>
      `
    }
  ],

  mnemonics: [
    {
      title: "EcoRI Palindrome",
      device: "5'–GAATTC–3' reads same as 3'–CTTAAG–5' from 5'→3' on both strands",
      expand: [
        { L: "", t: "Like 'MALAYALAM' — reads same forwards and backwards. Restriction enzymes recognise these palindromes." }
      ]
    },
    {
      title: "Lysis enzymes for DNA isolation",
      device: "<b>L</b>ong <b>C</b>hocolate <b>C</b>ake",
      expand: [
        { L: "L", t: "Lysozyme — bacteria" },
        { L: "C", t: "Cellulase — plant cells" },
        { L: "C", t: "Chitinase — fungi" }
      ]
    },
    {
      title: "PCR Steps",
      device: "<b>D</b>ogs <b>P</b>lay <b>E</b>legantly",
      expand: [
        { L: "D", t: "Denaturation — strands separated at high temperature" },
        { L: "P", t: "Primer annealing — primers bind to template" },
        { L: "E", t: "Extension — Taq polymerase builds new strand" }
      ]
    }
  ],

  flashcards: [
    { front: "Who constructed the first recombinant DNA and when?", back: "Stanley Cohen and Herbert Boyer in 1972, by linking antibiotic resistance gene to a Salmonella typhimurium plasmid." },
    { front: "What is the first restriction enzyme and what was its recognition site?", back: "Hind II — recognises a specific six base pair sequence. Isolated in 1968." },
    { front: "How are restriction enzymes named? Give an example.", back: "1st letter = genus, 2nd & 3rd = species. E.g., EcoRI = Escherichia coli, strain RY13, isolated first." },
    { front: "What are sticky ends?", back: "Single-stranded overhanging DNA sequences left after restriction enzyme cuts near the palindrome — they can hydrogen bond with complementary cut ends, enabling ligation." },
    { front: "What is gel electrophoresis and which dye is used?", back: "Separation of DNA fragments by size through agarose gel under electric current. Stained with ethidium bromide; visualised under UV light." },
    { front: "What are the required features of a cloning vector?", back: "1. Origin of replication (ori), 2. Selectable marker (e.g., antibiotic resistance gene), 3. Cloning sites (recognition sites for restriction enzymes)." },
    { front: "What is insertional inactivation?", back: "Foreign DNA inserted into β-galactosidase gene inactivates it — no colour produced in presence of chromogenic substrate → white colonies = recombinants." },
    { front: "What is Taq polymerase and where does it come from?", back: "Thermostable DNA polymerase from Thermus aquaticus. Used in PCR to extend primers at high temperatures without denaturing." },
    { front: "What are the three steps of PCR?", back: "1. Denaturation (high temp — strands separate), 2. Primer annealing, 3. Extension (Taq polymerase builds new strand)." },
    { front: "How are bacteria made competent to take up DNA?", back: "Treatment with divalent cations (Ca²⁺) → incubation with DNA on ice → brief heat shock at 42°C → back on ice." },
    { front: "What is the gene gun method?", back: "Biolistics — micro-particles of gold or tungsten coated with DNA fired at high velocity into plant cells." },
    { front: "Ti plasmid of Agrobacterium tumefaciens is used for?", back: "As a cloning vector to transfer genes into plant cells. The T-DNA portion is delivered into plant cells causing tumour, but modified versions deliver desired genes." },
    { front: "What is pBR322?", back: "A commonly used E. coli cloning vector with: ampR (ampicillin resistance), tetR (tetracycline resistance), ori, rop gene, and several restriction sites." },
    { front: "What is downstream processing?", back: "Post-biosynthetic steps: separation, purification, formulation, clinical trials and quality control testing before a product is ready for marketing." }
  ],

  recall: [
    {
      q: "Explain the features required in a cloning vector.",
      hint: "ori, selectable marker, cloning sites",
      a: "1. Origin of replication (ori): sequence from where replication starts — controls copy number. 2. Selectable marker: helps select transformants from non-transformants, e.g., antibiotic resistance genes. 3. Cloning sites: few specific recognition sites for restriction enzymes so foreign DNA can be inserted without fragmenting the vector. In pBR322, foreign DNA inserted at BamHI site of tetR gene inactivates tetracycline resistance but bacteria still grow on ampicillin — recombinants identified."
    },
    {
      q: "What is PCR? Describe the three steps of each PCR cycle.",
      hint: "Denaturation, Annealing, Extension; Taq polymerase",
      a: "PCR (Polymerase Chain Reaction): amplifies specific DNA sequences in vitro using primers and DNA polymerase. Each cycle: 1. Denaturation — high temperature separates double-stranded DNA into single strands. 2. Primer annealing — temperature lowered; short complementary oligonucleotide primers bind to template strands. 3. Extension — Taq polymerase (from Thermus aquaticus, thermostable) extends primers using nucleotides, synthesising new strands. Repeated cycles amplify to ~1 billion copies."
    },
    {
      q: "What are restriction enzymes? How do they create sticky ends?",
      hint: "Palindrome, cut near centre, single-stranded overhangs",
      a: "Restriction endonucleases are bacterial enzymes that recognise specific palindromic sequences in DNA (same sequence on both strands in 5'→3' direction). They cut DNA a little away from the centre of the palindrome between the same two bases on opposite strands. This leaves short single-stranded overhanging sequences at the ends, called sticky ends. These sticky ends can hydrogen bond with complementary sticky ends from other DNA cut by the same enzyme, facilitating joining by DNA ligase."
    }
  ],

  mcqs: [
    {
      q: "The first recombinant DNA molecule was constructed by:",
      o: ["Watson and Crick", "Cohen and Boyer", "Herbert Boyer alone", "Hershey and Chase"],
      c: 1,
      e: "Stanley Cohen and Herbert Boyer constructed the first recombinant DNA in 1972 by linking an antibiotic resistance gene with a plasmid of Salmonella typhimurium."
    },
    {
      q: "The first restriction endonuclease isolated was:",
      o: ["EcoRI", "BamHI", "Hind II", "PstI"],
      c: 2,
      e: "Hind II was the first restriction endonuclease isolated (1968). It always cuts DNA at a specific point by recognising a specific sequence of six base pairs."
    },
    {
      q: "In EcoRI, 'R' stands for:",
      o: ["Restriction", "RY13 (strain name)", "RNA", "Replication"],
      c: 1,
      e: "In EcoRI: E = Escherichia, co = coli, R = RY13 (strain name), I = first enzyme isolated from that strain."
    },
    {
      q: "Gel electrophoresis separates DNA fragments based on:",
      o: ["Charge alone", "Size (smaller fragments move farther)", "Sequence", "G+C content"],
      c: 1,
      e: "In agarose gel electrophoresis, smaller DNA fragments move farther from the loading well because of sieving effect. DNA moves toward anode (positive electrode) as it is negatively charged."
    },
    {
      q: "Insertional inactivation of β-galactosidase gene leads to:",
      o: ["Blue colonies = recombinants", "White colonies = non-recombinants", "White colonies = recombinants", "No colony formation"],
      c: 2,
      e: "When foreign DNA is inserted into the β-galactosidase gene, it is inactivated. No colour is produced in presence of chromogenic substrate → white colonies = recombinants. Blue colonies = non-recombinants."
    },
    {
      q: "Thermostable DNA polymerase used in PCR is obtained from:",
      o: ["Escherichia coli", "Agrobacterium tumefaciens", "Thermus aquaticus", "Bacillus subtilis"],
      c: 2,
      e: "Taq polymerase is isolated from Thermus aquaticus (a thermophilic bacterium). It remains active during the high-temperature denaturation step of PCR."
    },
    {
      q: "Ti plasmid is used as a cloning vector for:",
      o: ["Animal cells", "Bacterial cells", "Plant cells", "Fungal cells"],
      c: 2,
      e: "The Ti (tumor-inducing) plasmid of Agrobacterium tumefaciens is modified into a cloning vector that can deliver genes of interest into plant cells."
    },
    {
      q: "The selectable marker in pBR322 vector is/are:",
      o: ["Only ampicillin resistance", "Only tetracycline resistance", "Both ampicillin and tetracycline resistance genes", "Kanamycin resistance"],
      c: 2,
      e: "pBR322 carries both ampR (ampicillin resistance) and tetR (tetracycline resistance) genes as selectable markers, along with ori and rop gene."
    }
  ],

  match: [
    { term: "Hind II", def: "First restriction endonuclease" },
    { term: "EcoRI", def: "From Escherichia coli RY13 strain" },
    { term: "Taq polymerase", def: "Thermostable enzyme from Thermus aquaticus" },
    { term: "pBR322", def: "Classic E. coli cloning vector" },
    { term: "Ti plasmid", def: "Agrobacterium vector for plant transformation" },
    { term: "Sticky ends", def: "Single-stranded overhangs after restriction enzyme cut" },
    { term: "Insertional inactivation", def: "White colony = recombinant (β-galactosidase inactive)" },
    { term: "Biolistics", def: "Gene gun method — gold particles coated with DNA" },
    { term: "Elution", def: "Extraction of separated DNA band from agarose gel" },
    { term: "ori", def: "Origin of replication in cloning vector" }
  ],

  pathways: [
    {
      title: "Recombinant DNA Technology Sequence",
      prompt: "Order the steps of rDNA technology.",
      steps: [
        "Isolate DNA from source organism",
        "Cut DNA with restriction endonuclease (creates sticky ends)",
        "Amplify gene of interest by PCR",
        "Ligate gene of interest into vector using DNA ligase",
        "Transform recombinant DNA into competent host cells",
        "Identify and select transformants using selectable markers",
        "Culture host cells in bioreactor at large scale",
        "Downstream processing: purify and formulate product"
      ]
    }
  ]
};
