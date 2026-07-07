/* ============================================================
   data_molecular_inhe.js — Chapter 5 · Molecular Basis of Inheritance
   Updated with Class 12 Chapter 5 data (molecular).
   ============================================================ */

DATA.chapters.molecular = {
  id: "molecular",
  num: 5,
  title: "Molecular Basis of Inheritance",
  subtitle: "DNA · replication · transcription · code · translation · lac operon · HGP · fingerprinting",
  color: "#0984e3",
  colorD: "#0563b0",
  glyph: "🧪",

  /* ---------------- STUDY NOTES ---------------- */
  notes: [
    {
      id: "the_dna",
      heading: "1 · The DNA — What & How Big",
      html: `
        <p><span class="kw">DNA (deoxyribonucleic acid)</span> is a long polymer of <b>deoxyribonucleotides</b>. Its length is usually expressed as the <b>number of nucleotides (bp)</b>.</p>
        <table class="cmp">
          <thead><tr><th>Organism</th><th>Genome size</th></tr></thead>
          <tbody>
            <tr><td>φX174 (bacteriophage)</td><td>5386 nucleotides</td></tr>
            <tr><td>Bacteriophage lambda (λ)</td><td>48,502 bp</td></tr>
            <tr><td>Escherichia coli</td><td>4.6 × 10⁶ bp</td></tr>
            <tr><td>Human (haploid)</td><td>3.3 × 10⁹ bp</td></tr>
          </tbody>
        </table>
        <div class="callout"><b>Note:</b> RNA was the first genetic material; DNA evolved later as a more stable molecule.</div>
      `
    },
    {
      id: "polynucleotide",
      heading: "2 · Structure of a Polynucleotide Chain",
      html: `
        <p>A <b>nucleotide</b> has three parts:</p>
        <div class="flow">
          <span class="node">Nitrogen base</span><span class="arr">+</span>
          <span class="node">Pentose sugar (deoxyribose)</span><span class="arr">+</span>
          <span class="node">Phosphate group</span>
        </div>
        <table class="cmp">
          <thead><tr><th>Purines (double ring)</th><th>Pyrimidines (single ring)</th></tr></thead>
          <tbody>
            <tr><td>Adenine (A), Guanine (G)</td><td>Cytosine (C), Thymine (T in DNA)</td></tr>
            <tr><td colspan="2">In RNA, <b>Uracil (U)</b> replaces Thymine.</td></tr>
          </tbody>
        </table>
        <ul>
          <li><b>Nucleoside</b> = base + sugar; <b>Nucleotide</b> = nucleoside + phosphate.</li>
          <li>Nucleotides are joined by <b>3′–5′ phosphodiester bonds</b>, forming a sugar-phosphate <b>backbone</b> with bases projecting inward.</li>
          <li>A polynucleotide has a free <b>5′-phosphate</b> end and a free <b>3′-OH</b> end.</li>
        </ul>
      `
    },
    {
      id: "double_helix",
      heading: "3 · The Watson–Crick Double Helix (1953)",
      html: `
        <p>Built on <b>Chargaff's rules</b> (A=T, G=C; so purines = pyrimidines) and the <b>X-ray diffraction</b> data of <b>Maurice Wilkins & Rosalind Franklin</b>.</p>
        <table class="cmp">
          <thead><tr><th>Feature</th><th>Value / Description</th></tr></thead>
          <tbody>
            <tr><td>Strands</td><td>Two, coiled in a <b>right-handed</b> helix</td></tr>
            <tr><td>Orientation</td><td><b>Antiparallel</b> (one 5′→3′, the other 3′→5′)</td></tr>
            <tr><td>Base pairing</td><td>A=T (2 H-bonds), G≡C (3 H-bonds) — complementary</td></tr>
            <tr><td>Pitch (one turn)</td><td>3.4 nm containing ~10 base pairs</td></tr>
            <tr><td>Rise per base pair</td><td>0.34 nm (3.4 Å)</td></tr>
            <tr><td>Diameter</td><td>Uniform 2 nm (purine always pairs a pyrimidine)</td></tr>
          </tbody>
        </table>
        <div class="callout"><b>Central Dogma (F. Crick):</b> DNA → (transcription) → RNA → (translation) → Protein. In <b>retroviruses</b> the flow reverses: RNA → DNA (reverse transcriptase).</div>
      `
    },
    {
      id: "packaging",
      heading: "4 · Packaging of the DNA Helix",
      html: `
        <p>A human diploid cell's DNA is ~<b>2.2 metres</b> long, yet fits inside a tiny nucleus through tight packaging. (Distance between two consecutive base pairs = 0.34 nm.)</p>
        <div class="flow">
          <span class="node">DNA + Histone octamer</span><span class="arr">→</span>
          <span class="node">Nucleosome (~200 bp)</span><span class="arr">→</span>
          <span class="node">"Beads on string" chromatin</span><span class="arr">→</span>
          <span class="node">Condensed chromatin</span><span class="arr">→</span>
          <span class="node">Chromosome</span>
        </div>
        <ul>
          <li>Negatively charged DNA wraps around positively charged <b>histones</b> (rich in <b>lysine & arginine</b>).</li>
          <li>A <b>histone octamer</b> (8 molecules) forms the core of a <b>nucleosome</b>.</li>
          <li><b>Non-histone chromosomal (NHC) proteins</b> aid higher-order packing.</li>
        </ul>
        <table class="cmp">
          <thead><tr><th>Euchromatin</th><th>Heterochromatin</th></tr></thead>
          <tbody>
            <tr><td>Loosely packed, lightly stained</td><td>Densely packed, darkly stained</td></tr>
            <tr><td>Transcriptionally <b>active</b></td><td>Transcriptionally <b>inactive</b></td></tr>
          </tbody>
        </table>
      `
    },
    {
      id: "search_genetic",
      heading: "5 · The Search for Genetic Material",
      html: `
        <h4>Griffith's transforming principle (1928)</h4>
        <p>Using <i>Streptococcus pneumoniae</i>: <b>S strain</b> (smooth, capsulated, virulent) killed mice; <b>R strain</b> (rough, no capsule, avirurent) did not. Heat-killed S alone was harmless, but <b>heat-killed S + live R killed the mice</b>, and live S bacteria were recovered — R had been <b>transformed</b> by some 'principle' from S.</p>
        <h4>Avery, MacLeod & McCarty (1933–44)</h4>
        <p>They purified biochemicals from heat-killed S and showed the <b>transforming principle is DNA</b>: <b>DNase</b> abolished transformation, but <b>protease</b> and <b>RNase</b> did not.</p>
        <h4>Hershey & Chase (1952) — bacteriophage experiment</h4>
        <div class="flow">
          <span class="node">Label protein with ³⁵S, DNA with ³²P</span><span class="arr">→</span>
          <span class="node">Infect E. coli</span><span class="arr">→ blend + centrifuge</span>
          <span class="node">Radioactive ³²P enters cells → DNA is genetic material</span>
        </div>
        <p><b>³⁵S (protein) stayed outside</b>; <b>³²P (DNA) entered the bacteria</b>, proving DNA is the genetic material.</p>
        <div class="callout"><b>Properties genetic material must have:</b> (1) replicate, (2) be chemically & structurally stable, (3) allow slow mutation (for evolution), (4) express itself as Mendelian characters. DNA fits best; RNA (with a reactive 2′-OH and uracil) mutates faster and is less stable — so it also acts as genetic material in some viruses (e.g. TMV, QB phage).</p>
      `
    },
    {
      id: "rna_world",
      heading: "6 · RNA World",
      html: `
        <p>Evidence suggests <b>RNA was the first genetic material</b>. RNA could act as a <b>genetic material and a catalyst (ribozyme)</b>. Being reactive, it was unstable, so evolution favoured the chemically more stable <b>DNA</b> for information storage, with RNA taking over many functional/catalytic roles (rRNA, tRNA).</p>
      `
    },
    {
      id: "replication",
      heading: "7 · DNA Replication (Semiconservative)",
      html: `
        <p>Watson & Crick proposed <b>semiconservative replication</b>: each old strand serves as a <b>template</b>, so each daughter DNA has one parental and one new strand.</p>
        <h4>Experimental proof</h4>
        <ul>
          <li><b>Meselson & Stahl (1958)</b> — grew E. coli in ¹⁵N (heavy) then shifted to ¹⁴N; used <b>CsCl density-gradient centrifugation</b>. After one generation DNA was of <b>intermediate (hybrid)</b> density; after two generations, hybrid + light bands appeared — confirming semiconservative replication.</li>
          <li><b>Taylor et al. (1958)</b> — used radioactive thymidine in <i>Vicia faba</i> (faba bean) to prove it in chromosomes.</li>
        </ul>
        <h4>Machinery</h4>
        <ul>
          <li>Main enzyme: <b>DNA-dependent DNA polymerase</b>; polymerises only in the <b>5′→3′</b> direction, with high speed (~2000 bp/second in E. coli) and accuracy.</li>
          <li>Energy & substrate come from <b>deoxyribonucleoside triphosphates (dNTPs)</b>.</li>
          <li>Replication starts at an <b>origin (ori)</b>, opening a <b>replication fork</b>.</li>
        </ul>
        <table class="cmp">
          <thead><tr><th>Leading strand</th><th>Lagging strand</th></tr></thead>
          <tbody>
            <tr><td>Synthesised <b>continuously</b></td><td>Synthesised <b>discontinuously</b> as <b>Okazaki fragments</b></td></tr>
            <tr><td>—</td><td>Fragments joined by <b>DNA ligase</b></td></tr>
          </tbody>
        </table>
        <div class="callout"><b>Timing:</b> replication occurs in the <b>S-phase</b> of the cell cycle.</div>
      `
    },
    {
      id: "transcription",
      heading: "8 · Transcription",
      html: `
        <p><b>Transcription</b> = copying genetic information from one <b>template strand</b> of DNA into RNA. Only a <b>segment</b> of DNA and only <b>one strand</b> is copied.</p>
        <div class="callout"><b>Why only one strand & one segment?</b> If both strands coded, they'd specify two different proteins (they are complementary), and a double-stranded RNA product could not be translated and would need separating.</div>
        <h4>Transcription unit</h4>
        <div class="flow">
          <span class="node">Promoter</span><span class="arr">→</span>
          <span class="node">Structural gene</span><span class="arr">→</span>
          <span class="node">Terminator</span>
        </div>
        <ul>
          <li><b>Template strand</b>: 3′→5′, actually copied. <b>Coding strand</b>: 5′→3′, same sequence as RNA (T instead of U); not copied.</li>
          <li><b>Promoter</b> lies towards the 5′ end (upstream) of the coding strand and provides the RNA-polymerase binding site; <b>terminator</b> lies at the 3′ end (downstream).</li>
        </ul>
        <h4>In bacteria vs eukaryotes</h4>
        <table class="cmp">
          <thead><tr><th>Bacteria</th><th>Eukaryotes</th></tr></thead>
          <tbody>
            <tr><td>Single RNA polymerase</td><td>Three RNA polymerases</td></tr>
            <tr><td><b>σ (sigma)</b> factor for initiation; <b>ρ (rho)</b> factor for termination</td><td>RNA Pol I → rRNA; Pol II → hnRNA (mRNA precursor); Pol III → tRNA, 5S rRNA, snRNA</td></tr>
          </tbody>
        </table>
        <h4>hnRNA processing (eukaryotes)</h4>
        <ul>
          <li><b>Capping</b> — methyl guanosine triphosphate added at the 5′ end.</li>
          <li><b>Tailing</b> — poly-A tail added at the 3′ end.</li>
          <li><b>Splicing</b> — <b>introns</b> (non-coding, intervening) removed; <b>exons</b> (coding, expressed) joined. Genes are 'split genes'.</li>
        </ul>
      `
    },
    {
      id: "genetic_code",
      heading: "9 · The Genetic Code",
      html: `
        <p><span class="kw">George Gamow</span> proposed a <b>triplet code</b>. <b>Nirenberg & Khorana</b> (with Ochoa's enzyme, polynucleotide phosphorylase) deciphered it.</p>
        <ul>
          <li>There are <b>64 codons</b>: <b>61 code for amino acids</b>; <b>3 are stop codons</b> — <b>UAA, UAG, UGA</b>.</li>
          <li><b>AUG</b> is the <b>start codon</b> and also codes for methionine.</li>
        </ul>
        <h4>Properties of the code</h4>
        <table class="cmp">
          <thead><tr><th>Property</th><th>Meaning</th></tr></thead>
          <tbody>
            <tr><td>Triplet</td><td>Three bases = one codon = one amino acid</td></tr>
            <tr><td>Degenerate</td><td>Most amino acids have more than one codon</td></tr>
            <tr><td>Unambiguous & specific</td><td>One codon codes for only one amino acid</td></tr>
            <tr><td>Nearly universal</td><td>Same codons across most organisms (e.g. UUU = Phe everywhere)</td></tr>
            <tr><td>Non-overlapping & commaless</td><td>Read continuously, base by base, without gaps</td></tr>
          </tbody>
        </table>
        <h4>tRNA — the adaptor molecule</h4>
        <p>Postulated by <b>Crick</b>: tRNA has an <b>anticodon loop</b> complementary to the codon and an <b>amino-acid acceptor end</b>. It has a clover-leaf secondary structure; an <b>initiator tRNA</b> exists, but there is <b>no tRNA for stop codons</b>.</p>
        <div class="callout"><b>Mutation link:</b> A single base change (point mutation) causes sickle-cell anaemia; insertions/deletions cause frameshift mutations.</div>
      `
    },
    {
      id: "translation",
      heading: "10 · Translation",
      html: `
        <p><b>Translation</b> = polymerising amino acids in the order dictated by mRNA, joined by <b>peptide bonds</b>.</p>
        <div class="flow">
          <span class="node">Charging of tRNA (aminoacylation, uses ATP)</span><span class="arr">→</span>
          <span class="node">Initiation at AUG</span><span class="arr">→</span>
          <span class="node">Elongation</span><span class="arr">→</span>
          <span class="node">Termination (stop codon)</span>
        </div>
        <ul>
          <li>The <b>ribosome</b> is the site ('cellular factory'); its <b>rRNA acts as a ribozyme</b> (catalyst).</li>
          <li>mRNA has <b>untranslated regions (UTRs)</b> before the start and after the stop codon, needed for efficient translation.</li>
        </ul>
      `
    },
    {
      id: "lac_operon",
      heading: "11 · Regulation of Gene Expression — the lac operon",
      html: `
        <p>In prokaryotes, gene expression is regulated mainly at <b>transcription initiation</b>. The classic model is the <b>lac operon</b> (Jacob & Monod).</p>
        <div class="flow">
          <span class="node">Regulatory gene i (repressor)</span><span class="arr">·</span>
          <span class="node">Promoter p</span><span class="arr">·</span>
          <span class="node">Operator o</span><span class="arr">·</span>
          <span class="node">z</span><span class="arr">·</span><span class="node">y</span><span class="arr">·</span><span class="node">a</span>
        </div>
        <table class="cmp">
          <thead><tr><th>Gene</th><th>Product / role</th></tr></thead>
          <tbody>
            <tr><td>i</td><td>Repressor protein</td></tr>
            <tr><td>z</td><td>β-galactosidase (breaks lactose → galactose + glucose)</td></tr>
            <tr><td>y</td><td>Permease (lactose entry)</td></tr>
            <tr><td>a</td><td>Transacetylase</td></tr>
          </tbody>
        </table>
        <table class="cmp">
          <thead><tr><th>No lactose (OFF)</th><th>Lactose present (ON)</th></tr></thead>
          <tbody>
            <tr><td>Repressor binds the operator → RNA polymerase blocked → no transcription.</td><td>Lactose (<b>inducer</b>) binds repressor → repressor inactivated → RNA polymerase transcribes z, y, a → enzymes made.</td></tr>
          </tbody>
        </table>
        <div class="callout"><b>Type:</b> the lac operon is under <b>negative regulation</b> (the repressor switches it off).</div>
      `
    },
    {
      id: "hgp",
      heading: "12 · Human Genome Project (HGP)",
      html: `
        <p>An international 'megaproject' (<b>1990–2003</b>) to sequence the ~3 × 10⁹ bp human genome, coordinated by the US DOE and NIH (with the Wellcome Trust and others). It gave rise to <b>bioinformatics</b>.</p>
        <h4>Two approaches</h4>
        <table class="cmp">
          <thead><tr><th>Expressed Sequence Tags (ESTs)</th><th>Sequence Annotation</th></tr></thead>
          <tbody>
            <tr><td>Focus on the <b>expressed genes</b> only</td><td>Sequence the <b>whole genome</b>, then assign functions to regions</td></tr>
          </tbody>
        </table>
        <h4>Salient features</h4>
        <ul>
          <li>Genome ≈ <b>3164.7 million bp</b>; average gene ≈ 3000 bases.</li>
          <li>Largest known gene: <b>dystrophin</b> (~2.4 million bases).</li>
          <li>~<b>30,000 genes</b> — far fewer than expected.</li>
          <li><b>99.9%</b> of bases are identical in all people; &lt;2% of the genome codes for proteins.</li>
          <li>Chromosome <b>1</b> has the most genes (2968); the <b>Y</b> chromosome the fewest (231).</li>
          <li>~1.4 million single-base variations — <b>SNPs (single nucleotide polymorphisms)</b>.</li>
        </ul>
      `
    },
    {
      id: "dna_fingerprint",
      heading: "13 · DNA Fingerprinting",
      html: `
        <p>Developed by <span class="kw">Alec Jeffreys</span>. It compares highly variable regions of DNA between individuals.</p>
        <ul>
          <li>Based on <b>VNTR (Variable Number of Tandem Repeats)</b>, a type of <b>satellite DNA</b> showing high <b>polymorphism</b>.</li>
          <li>VNTR sizes vary widely between individuals (0.1–20 kb).</li>
        </ul>
        <h4>Steps</h4>
        <div class="flow">
          <span class="node">Isolate DNA</span><span class="arr">→</span>
          <span class="node">Cut with restriction enzymes</span><span class="arr">→</span>
          <span class="node">Separate by electrophoresis</span><span class="arr">→</span>
          <span class="node">Blot to membrane (Southern blotting)</span><span class="arr">→</span>
          <span class="node">Hybridise with labelled VNTR probe</span><span class="arr">→</span>
          <span class="node">Autoradiography</span>
        </div>
        <div class="callout"><b>Uses:</b> forensic identification, paternity/maternity testing, and studies of population and genetic diversity.</div>
      `
    }
  ],

  /* ---------------- MNEMONICS ---------------- */
  mnemonics: [
    {
      title: "Purines vs Pyrimidines — \"Pure As Gold\" / \"CUT the Py\"",
      device: `<b>Pur</b>ines = <b>A</b>denine & <b>G</b>uanine (Pure As Gold) · <b>Pyrimidines = C, U, T</b> (CUT)`,
      expand: [
        { L: "Purines", t: "Adenine, Guanine — double ring (Pure As Gold)" },
        { L: "Pyrimidines", t: "Cytosine, Uracil, Thymine — single ring (CUT)" },
        { L: "Pairing", t: "A=T (2 bonds), G≡C (3 bonds)" }
      ]
    },
    {
      title: "Double helix numbers — \"3.4 / 10 / 0.34 / 2\"",
      device: `Pitch <b>3.4 nm</b> · <b>10 bp</b> per turn · rise <b>0.34 nm</b> · diameter <b>2 nm</b>`,
      expand: [
        { L: "3.4 nm", t: "One full turn (pitch)" },
        { L: "10", t: "Base pairs per turn" },
        { L: "0.34 nm", t: "Distance between adjacent base pairs" },
        { L: "2 nm", t: "Uniform diameter" }
      ]
    },
    {
      title: "Search for genetic material — \"GAH!\" (Griffith→Avery→Hershey)",
      device: `<b>G</b>riffith (transformation) → <b>A</b>very et al. (DNA) → <b>H</b>ershey-Chase (proof)`,
      expand: [
        { L: "G", t: "Griffith 1928 — transforming principle in Streptococcus" },
        { L: "A", t: "Avery, MacLeod, McCarty — the principle is DNA" },
        { L: "H", t: "Hershey & Chase 1952 — ³²P DNA enters, proving DNA is genetic material" }
      ]
    },
    {
      title: "Central Dogma — \"Do Read The Protein\"",
      device: `<b>D</b>NA → (transcription) <b>R</b>NA → (translation) → <b>P</b>rotein`,
      expand: [
        { L: "DNA→RNA", t: "Transcription" },
        { L: "RNA→Protein", t: "Translation" },
        { L: "Reverse", t: "Retroviruses: RNA→DNA (reverse transcriptase)" }
      ]
    },
    {
      title: "Stop codons — \"U Are Away / U Are Gone / U Go Away\"",
      device: `<b>UAA · UAG · UGA</b> — the three stop codons`,
      expand: [
        { L: "UAA", t: "U Are Away (ochre)" },
        { L: "UAG", t: "U Are Gone (amber)" },
        { L: "UGA", t: "U Go Away (opal)" },
        { L: "AUG", t: "START codon (also methionine)" }
      ]
    },
    {
      title: "hnRNA processing — \"Cap, Tail, Splice\"",
      device: `<b>Cap</b> (5′) · <b>Tail</b> poly-A (3′) · <b>Splice</b> out introns`,
      expand: [
        { L: "Cap", t: "Methyl guanosine triphosphate at 5′ end" },
        { L: "Tail", t: "Poly-A tail at 3′ end" },
        { L: "Splice", t: "Introns removed, EXONS EXpressed & joined" }
      ]
    },
    {
      title: "lac operon genes — \"i-p-o-z-y-a\"",
      device: `<b>i</b> repressor · <b>p</b> promoter · <b>o</b> operator · <b>z</b> β-gal · <b>y</b> permease · <b>a</b> transacetylase`,
      expand: [
        { L: "z", t: "β-galactosidase — splits lactose" },
        { L: "y", t: "permease — lets lactose in" },
        { L: "a", t: "transacetylase" },
        { L: "Inducer", t: "Lactose inactivates the repressor → operon ON" }
      ]
    },
    {
      title: "HGP big numbers — \"30k / 2% / 99.9%\"",
      device: `~<b>30,000</b> genes · <b>&lt;2%</b> codes protein · <b>99.9%</b> bases identical`,
      expand: [
        { L: "30,000", t: "Approx. number of human genes" },
        { L: "Dystrophin", t: "Largest gene (~2.4 million bases)" },
        { L: "Chr 1 / Y", t: "Most genes (2968) / fewest (231)" }
      ]
    }
  ],

  /* ---------------- FLASHCARDS (50+) ---------------- */
  flashcards: [
    { front: "What is DNA chemically?", back: "A long polymer of deoxyribonucleotides." },
    { front: "Genome size of E. coli?", back: "4.6 × 10⁶ base pairs." },
    { front: "Number of base pairs in the human haploid genome?", back: "About 3.3 × 10⁹ bp." },
    { front: "Number of nucleotides in bacteriophage φX174?", back: "5386 nucleotides." },
    { front: "Three components of a nucleotide?", back: "A nitrogen base, a pentose sugar (deoxyribose), and a phosphate group." },
    { front: "Name the two purines.", back: "Adenine and Guanine (double-ring bases)." },
    { front: "Name the pyrimidines in DNA and in RNA.", back: "DNA: Cytosine and Thymine; RNA: Cytosine and Uracil." },
    { front: "Difference between a nucleoside and a nucleotide?", back: "Nucleoside = base + sugar; nucleotide = nucleoside + phosphate." },
    { front: "Which bond links nucleotides in a strand?", back: "The 3′–5′ phosphodiester bond." },
    { front: "Who proposed the DNA double helix and when?", back: "James Watson and Francis Crick, in 1953." },
    { front: "State Chargaff's rule.", back: "A = T and G = C; total purines = total pyrimidines." },
    { front: "Whose X-ray data helped build the double helix?", back: "Maurice Wilkins and Rosalind Franklin." },
    { front: "How are the two DNA strands oriented?", back: "Antiparallel — one runs 5′→3′, the other 3′→5′." },
    { front: "Number of hydrogen bonds in A–T and G–C pairs?", back: "A=T has 2; G≡C has 3." },
    { front: "Pitch of the DNA helix and base pairs per turn?", back: "3.4 nm pitch with about 10 base pairs per turn." },
    { front: "Distance between two adjacent base pairs?", back: "0.34 nm (3.4 Å)." },
    { front: "Diameter of the DNA double helix?", back: "A uniform 2 nm." },
    { front: "State the Central Dogma.", back: "DNA → RNA → Protein (transcription then translation)." },
    { front: "Which enzyme reverses the central dogma and in what organisms?", back: "Reverse transcriptase, in retroviruses (RNA → DNA)." },
    { front: "Approximate length of DNA in a human cell?", back: "About 2.2 metres." },
    { front: "What are histones and why do they bind DNA?", back: "Positively charged proteins (rich in lysine & arginine) that bind negatively charged DNA." },
    { front: "What is a nucleosome?", back: "DNA (~200 bp) wound around a histone octamer (8 histone molecules)." },
    { front: "Euchromatin vs heterochromatin?", back: "Euchromatin = loosely packed, active; heterochromatin = densely packed, inactive." },
    { front: "What did Griffith discover and in which organism?", back: "The 'transforming principle' in Streptococcus pneumoniae (1928)." },
    { front: "Which strains did Griffith use?", back: "S strain (smooth, virulent) and R strain (rough, avirulent)." },
    { front: "Who proved the transforming principle is DNA?", back: "Avery, MacLeod and McCarty (DNase abolished transformation)." },
    { front: "What did Hershey and Chase prove and how?", back: "That DNA is the genetic material, using ³²P-DNA and ³⁵S-protein labelled bacteriophages." },
    { front: "Which radioactive label entered the bacteria in Hershey–Chase?", back: "³²P (DNA); ³⁵S (protein) remained outside." },
    { front: "Why is DNA more stable than RNA?", back: "RNA has a reactive 2′-OH group and uracil, making it more reactive and mutable; DNA (with thymine) is more stable." },
    { front: "What was likely the first genetic material?", back: "RNA (the 'RNA world'); it could store information and act as a ribozyme." },
    { front: "What type of DNA replication occurs?", back: "Semiconservative — each daughter DNA has one old and one new strand." },
    { front: "Who experimentally proved semiconservative replication?", back: "Meselson and Stahl (1958) using ¹⁵N/¹⁴N E. coli and CsCl centrifugation." },
    { front: "Who confirmed semiconservative replication in chromosomes?", back: "Taylor et al. (1958) using Vicia faba (faba bean)." },
    { front: "Main enzyme of DNA replication and its direction?", back: "DNA-dependent DNA polymerase; works only 5′→3′." },
    { front: "What provides energy for replication?", back: "Deoxyribonucleoside triphosphates (dNTPs), which are also the substrate." },
    { front: "Leading vs lagging strand?", back: "Leading is synthesised continuously; lagging is discontinuous (Okazaki fragments joined by DNA ligase)." },
    { front: "In which phase does DNA replication occur?", back: "The S-phase of the cell cycle." },
    { front: "Define transcription.", back: "Copying genetic information from a DNA template strand into RNA." },
    { front: "Name the three parts of a transcription unit.", back: "Promoter, structural gene, and terminator." },
    { front: "Template vs coding strand?", back: "Template (3′→5′) is copied; coding strand (5′→3′) has the same sequence as RNA except T for U." },
    { front: "Roles of sigma and rho factors in bacteria?", back: "Sigma (σ) initiates transcription; rho (ρ) terminates it." },
    { front: "Which RNA polymerase makes mRNA precursor (hnRNA) in eukaryotes?", back: "RNA polymerase II." },
    { front: "Three steps of hnRNA processing?", back: "Capping (5′), tailing (poly-A at 3′), and splicing (introns out, exons joined)." },
    { front: "Introns vs exons?", back: "Introns are non-coding intervening sequences (removed); exons are coding, expressed sequences (retained)." },
    { front: "Who proposed the triplet nature of the genetic code?", back: "George Gamow." },
    { front: "How many codons, and how many code for amino acids?", back: "64 codons; 61 code for amino acids, 3 are stop codons." },
    { front: "Name the three stop codons.", back: "UAA, UAG and UGA." },
    { front: "Which codon is the start codon?", back: "AUG (also codes for methionine)." },
    { front: "What does 'degenerate code' mean?", back: "Most amino acids are coded by more than one codon." },
    { front: "What is the adaptor molecule of translation?", back: "tRNA (postulated by Crick) — it has an anticodon and an amino-acid acceptor end." },
    { front: "Which molecule acts as the ribozyme in translation?", back: "rRNA of the ribosome." },
    { front: "Who proposed the lac operon model?", back: "François Jacob and Jacques Monod." },
    { front: "What is the inducer of the lac operon?", back: "Lactose (it inactivates the repressor, switching the operon on)." },
    { front: "Function of the z gene of the lac operon?", back: "Codes β-galactosidase, which splits lactose into galactose and glucose." },
    { front: "Duration of the Human Genome Project?", back: "1990 to 2003." },
    { front: "Approximate number of human genes found by HGP?", back: "About 30,000 (fewer than expected)." },
    { front: "Largest human gene?", back: "Dystrophin (~2.4 million bases)." },
    { front: "What fraction of the human genome codes for proteins?", back: "Less than 2%." },
    { front: "Who developed DNA fingerprinting?", back: "Alec Jeffreys." },
    { front: "DNA fingerprinting is based on which repetitive DNA?", back: "VNTR (Variable Number of Tandem Repeats), a type of satellite DNA." },
    { front: "Which blotting technique is used in DNA fingerprinting?", back: "Southern blotting." }
  ],

  /* ---------------- ACTIVE RECALL (30) ---------------- */
  recall: [
    { q: "Describe the structure of a nucleotide.", hint: "Three parts.", a: "A nucleotide has a <b>nitrogen base</b>, a <b>pentose sugar</b> (deoxyribose in DNA), and a <b>phosphate group</b>. Base + sugar = nucleoside; adding phosphate makes a nucleotide." },
    { q: "List the salient features of the Watson–Crick double helix.", hint: "Strands, pairing, dimensions.", a: "Two <b>antiparallel</b> strands form a <b>right-handed</b> helix; bases pair complementarily (<b>A=T</b> with 2 H-bonds, <b>G≡C</b> with 3); pitch <b>3.4 nm</b> with ~<b>10 bp/turn</b>; adjacent bp <b>0.34 nm</b> apart; uniform <b>2 nm</b> diameter." },
    { q: "State Chargaff's rules and their significance.", hint: "Ratios.", a: "In DNA, <b>A = T</b> and <b>G = C</b>, so purines equal pyrimidines. This complementary base ratio was crucial evidence for the base-pairing scheme of the double helix." },
    { q: "Explain how DNA is packaged inside the nucleus.", hint: "Histones → nucleosome → chromatin.", a: "Negatively charged DNA wraps around positively charged <b>histone octamers</b> to form <b>nucleosomes</b> (~200 bp each). Nucleosomes form a 'beads-on-string' <b>chromatin</b>, which coils further (aided by NHC proteins) into the <b>chromosome</b>." },
    { q: "Describe Griffith's transformation experiment.", hint: "S and R strains, mice.", a: "Live S killed mice; live R and heat-killed S did not. But <b>heat-killed S + live R killed the mice</b>, and live S were recovered — showing R was <b>transformed</b> by a 'principle' from the dead S cells." },
    { q: "How did Avery, MacLeod and McCarty identify the transforming principle?", hint: "Enzymes.", a: "They treated the heat-killed S extract with different enzymes: <b>DNase abolished</b> transformation while <b>protease and RNase did not</b>, proving the transforming principle is <b>DNA</b>." },
    { q: "Explain the Hershey–Chase experiment.", hint: "Radioactive labels.", a: "Bacteriophages were labelled with <b>³²P (DNA)</b> or <b>³⁵S (protein)</b> and used to infect E. coli. After blending and centrifuging, radioactive <b>³²P entered the bacteria</b> while ³⁵S stayed outside — proving <b>DNA is the genetic material</b>." },
    { q: "What properties must a genetic material possess?", hint: "Four points.", a: "It must (1) <b>replicate</b>, (2) be <b>chemically and structurally stable</b>, (3) allow <b>slow mutation</b> for evolution, and (4) <b>express as Mendelian characters</b>. DNA fulfils these better than RNA." },
    { q: "Why is DNA a better genetic material than RNA?", hint: "2′-OH, T vs U.", a: "RNA's <b>2′-OH group</b> makes it reactive and unstable, and it mutates faster; DNA's deoxyribose and <b>thymine</b> (in place of uracil) make it chemically more stable and better suited to store information." },
    { q: "Describe the Meselson–Stahl experiment.", hint: "Heavy nitrogen, centrifugation.", a: "E. coli grown in <b>¹⁵N</b> then shifted to <b>¹⁴N</b>; DNA separated by <b>CsCl density-gradient centrifugation</b>. After one generation all DNA was <b>hybrid (intermediate)</b> density; after two, hybrid and light bands appeared — confirming <b>semiconservative</b> replication." },
    { q: "Distinguish the leading and lagging strands in replication.", hint: "Continuous vs Okazaki.", a: "Because polymerase works only 5′→3′, the <b>leading strand</b> is made <b>continuously</b> toward the fork, while the <b>lagging strand</b> is made <b>discontinuously</b> as <b>Okazaki fragments</b> that DNA ligase joins." },
    { q: "Why is only one DNA strand transcribed, and only a segment?", hint: "Two proteins problem.", a: "If both strands were transcribed, they would code for <b>two different proteins</b> (they are complementary), and the resulting <b>double-stranded RNA</b> could not be translated. So only the template segment of one strand is copied." },
    { q: "Name the parts of a transcription unit and their positions.", hint: "Promoter–gene–terminator.", a: "A <b>promoter</b> (upstream/5′ of the coding strand, RNA-polymerase binding site), the <b>structural gene</b>, and a <b>terminator</b> (downstream/3′)." },
    { q: "Compare transcription in bacteria and eukaryotes.", hint: "Number of polymerases, factors.", a: "Bacteria use <b>one RNA polymerase</b> with a <b>σ factor</b> (initiation) and <b>ρ factor</b> (termination). Eukaryotes have <b>three</b>: Pol I (rRNA), Pol II (hnRNA/mRNA), Pol III (tRNA, 5S rRNA, snRNA)." },
    { q: "Describe hnRNA processing in eukaryotes.", hint: "Cap, tail, splice.", a: "The primary transcript is <b>capped</b> (methyl guanosine triphosphate at 5′), <b>tailed</b> (poly-A at 3′), and <b>spliced</b> (introns removed, exons joined) to give mature mRNA." },
    { q: "List the salient features of the genetic code.", hint: "Triplet, degenerate, universal...", a: "It is a <b>triplet</b>, <b>degenerate</b> (>1 codon per amino acid), <b>unambiguous and specific</b>, <b>nearly universal</b>, <b>non-overlapping and commaless</b>, with <b>AUG</b> as start and <b>UAA/UAG/UGA</b> as stops." },
    { q: "How many codons code for amino acids and how many are stop codons?", hint: "64 total.", a: "Of 64 codons, <b>61 code for amino acids</b> and <b>3 (UAA, UAG, UGA) are stop codons</b>. AUG also serves as the start codon (methionine)." },
    { q: "Explain the adaptor role of tRNA.", hint: "Anticodon + amino acid.", a: "Crick proposed tRNA as an <b>adaptor</b>: its <b>anticodon</b> reads the mRNA codon while its <b>acceptor end</b> carries the specific amino acid, linking the nucleotide code to the correct amino acid." },
    { q: "What is charging (aminoacylation) of tRNA?", hint: "ATP.", a: "Activation of an amino acid using <b>ATP</b> and its linkage to the correct tRNA — needed before the amino acid can be added to the growing polypeptide." },
    { q: "Describe the role of the ribosome in translation.", hint: "Two subunits, rRNA.", a: "The ribosome (two subunits) is the site of protein synthesis; its <b>rRNA acts as a ribozyme</b> catalysing peptide-bond formation as the mRNA is read codon by codon." },
    { q: "Explain the lac operon in the absence of lactose.", hint: "Repressor on operator.", a: "The <b>i gene</b> makes a <b>repressor</b> that binds the <b>operator</b>, blocking RNA polymerase. So the structural genes z, y, a are <b>not transcribed</b> and the enzymes are not made." },
    { q: "Explain the lac operon when lactose is present.", hint: "Inducer.", a: "Lactose acts as an <b>inducer</b>, binding and inactivating the repressor. RNA polymerase then transcribes z, y and a, producing <b>β-galactosidase, permease and transacetylase</b>." },
    { q: "What kind of regulation does the lac operon show?", hint: "Repressor.", a: "It is <b>negative regulation</b> — the operon is switched off by a repressor that is only relieved when the inducer (lactose) is present." },
    { q: "What was the Human Genome Project and its goals?", hint: "1990–2003.", a: "An international megaproject (1990–2003) to sequence the ~3 billion bp human genome, identify all genes, and store the data — which launched the field of <b>bioinformatics</b>." },
    { q: "Give five salient features of the human genome.", hint: "Numbers.", a: "~<b>3164.7 million bp</b>; ~<b>30,000 genes</b>; <b>dystrophin</b> is the largest gene; <b>99.9%</b> of bases are identical across people; <b>&lt;2%</b> codes for proteins; chromosome 1 has the most genes, Y the fewest; ~1.4 million SNPs." },
    { q: "Differentiate the two HGP sequencing approaches.", hint: "ESTs vs annotation.", a: "The <b>EST</b> approach focused only on the <b>expressed genes</b>; the <b>sequence annotation</b> approach sequenced the <b>whole genome</b> first and then assigned functions to the coding and non-coding regions." },
    { q: "Explain the principle of DNA fingerprinting.", hint: "VNTR polymorphism.", a: "It exploits <b>VNTRs</b> (variable number of tandem repeats), a highly <b>polymorphic satellite DNA</b>. The number of repeats differs greatly between individuals, giving each person a unique banding pattern." },
    { q: "Outline the steps of DNA fingerprinting.", hint: "Cut, run, blot, probe.", a: "<b>Isolate DNA → digest with restriction enzymes → separate by electrophoresis → transfer by Southern blotting → hybridise with a labelled VNTR probe → visualise by autoradiography</b>." },
    { q: "State three uses of DNA fingerprinting.", hint: "Forensics, family, populations.", a: "<b>Forensic identification</b> (crime scenes), <b>paternity/maternity testing</b>, and studies of <b>population and genetic diversity</b>." },
    { q: "What is a nucleosome and how much DNA does it hold?", hint: "Histone octamer.", a: "A <b>nucleosome</b> is the basic packing unit — DNA (~<b>200 bp</b>) wound around a core of <b>eight histone molecules</b> (a histone octamer). Nucleosomes give chromatin its beads-on-string look." }
  ],

  /* ---------------- MCQs (50) ---------------- */
  mcqs: [
    { q: "DNA is a polymer of:", o: ["Amino acids", "Deoxyribonucleotides", "Ribonucleotides", "Fatty acids"], c: 1, e: "DNA is a polymer of deoxyribonucleotides." },
    { q: "The genome size of E. coli is:", o: ["5386 bp", "48,502 bp", "4.6 × 10⁶ bp", "3.3 × 10⁹ bp"], c: 2, e: "E. coli ≈ 4.6 million bp." },
    { q: "Which of these is a purine?", o: ["Cytosine", "Thymine", "Uracil", "Guanine"], c: 3, e: "Adenine and Guanine are purines." },
    { q: "In RNA, thymine is replaced by:", o: ["Cytosine", "Uracil", "Guanine", "Adenine"], c: 1, e: "Uracil replaces thymine in RNA." },
    { q: "A nucleoside consists of:", o: ["Base + phosphate", "Base + sugar", "Sugar + phosphate", "Base + sugar + phosphate"], c: 1, e: "Nucleoside = base + sugar; adding phosphate gives a nucleotide." },
    { q: "Nucleotides are linked by:", o: ["Peptide bonds", "Hydrogen bonds", "Phosphodiester bonds", "Glycosidic bonds"], c: 2, e: "3′–5′ phosphodiester bonds form the backbone." },
    { q: "The DNA double helix was proposed in:", o: ["1928", "1944", "1953", "1961"], c: 2, e: "Watson and Crick, 1953." },
    { q: "Chargaff's rule states that:", o: ["A = G", "A = T and G = C", "A + G = C", "Purines = 2 × pyrimidines"], c: 1, e: "A pairs T, G pairs C; purines = pyrimidines." },
    { q: "The two strands of DNA are:", o: ["Parallel", "Antiparallel", "Identical", "Both 5′→3′"], c: 1, e: "They run antiparallel (5′→3′ and 3′→5′)." },
    { q: "How many hydrogen bonds are between G and C?", o: ["1", "2", "3", "4"], c: 2, e: "G≡C has three hydrogen bonds." },
    { q: "The distance between two adjacent base pairs is:", o: ["0.34 nm", "3.4 nm", "2 nm", "10 nm"], c: 0, e: "0.34 nm; a full turn (pitch) is 3.4 nm." },
    { q: "Number of base pairs per turn of B-DNA is about:", o: ["5", "10", "15", "20"], c: 1, e: "About 10 bp per 3.4 nm turn." },
    { q: "The diameter of the DNA helix is:", o: ["1 nm", "2 nm", "3.4 nm", "0.34 nm"], c: 1, e: "A uniform 2 nm." },
    { q: "The Central Dogma was proposed by:", o: ["Watson", "Crick", "Nirenberg", "Khorana"], c: 1, e: "Francis Crick proposed the central dogma." },
    { q: "Reverse transcription (RNA → DNA) occurs in:", o: ["Bacteria", "Retroviruses", "Fungi", "All eukaryotes"], c: 1, e: "Retroviruses use reverse transcriptase." },
    { q: "Histones are rich in the amino acids:", o: ["Glutamate & aspartate", "Lysine & arginine", "Glycine & alanine", "Cysteine & methionine"], c: 1, e: "Lysine and arginine give histones a positive charge." },
    { q: "A nucleosome contains DNA of about:", o: ["50 bp", "100 bp", "200 bp", "500 bp"], c: 2, e: "~200 bp wound on a histone octamer." },
    { q: "Transcriptionally active chromatin is:", o: ["Heterochromatin", "Euchromatin", "Satellite DNA", "Telomere"], c: 1, e: "Euchromatin is loosely packed and active." },
    { q: "Griffith worked with the bacterium:", o: ["E. coli", "Streptococcus pneumoniae", "Salmonella", "Bacillus"], c: 1, e: "He used Streptococcus pneumoniae (Diplococcus)." },
    { q: "The transforming principle was identified as DNA by:", o: ["Griffith", "Hershey & Chase", "Avery, MacLeod & McCarty", "Meselson & Stahl"], c: 2, e: "Their enzyme experiments showed DNA is the transforming principle." },
    { q: "Hershey and Chase used which radioactive isotopes?", o: ["¹⁴C and ³H", "³²P and ³⁵S", "¹⁵N and ¹⁴N", "¹²⁵I and ³²P"], c: 1, e: "³²P labelled DNA, ³⁵S labelled protein." },
    { q: "In Hershey–Chase, which entered the bacteria?", o: ["³⁵S protein", "³²P DNA", "Both", "Neither"], c: 1, e: "³²P (DNA) entered — proving DNA is genetic material." },
    { q: "RNA is less stable than DNA mainly because of:", o: ["Thymine", "The 2′-OH group", "Phosphate", "Double strands"], c: 1, e: "The reactive 2′-OH makes RNA labile." },
    { q: "The likely first genetic material was:", o: ["DNA", "Protein", "RNA", "Lipid"], c: 2, e: "The RNA world hypothesis: RNA came first." },
    { q: "DNA replication is:", o: ["Conservative", "Semiconservative", "Dispersive", "Random"], c: 1, e: "Each daughter has one old and one new strand." },
    { q: "Semiconservative replication was proved by:", o: ["Watson & Crick", "Meselson & Stahl", "Griffith", "Jacob & Monod"], c: 1, e: "Meselson and Stahl (1958)." },
    { q: "Meselson and Stahl used:", o: ["Radioactive P", "Heavy nitrogen ¹⁵N", "³⁵S", "Fluorescent dye"], c: 1, e: "¹⁵N (heavy) and CsCl density-gradient centrifugation." },
    { q: "DNA polymerase synthesises DNA in the direction:", o: ["3′→5′", "5′→3′", "Both", "Random"], c: 1, e: "Always 5′→3′." },
    { q: "The discontinuously synthesised strand produces:", o: ["Primers", "Okazaki fragments", "Introns", "Codons"], c: 1, e: "Okazaki fragments on the lagging strand." },
    { q: "Okazaki fragments are joined by:", o: ["Helicase", "Primase", "DNA ligase", "Topoisomerase"], c: 2, e: "DNA ligase seals the fragments." },
    { q: "DNA replication occurs during which phase?", o: ["G1", "S", "G2", "M"], c: 1, e: "The S-phase of interphase." },
    { q: "The DNA strand that is copied is the:", o: ["Coding strand", "Sense strand", "Template strand", "Both strands"], c: 2, e: "Only the template (3′→5′) strand is transcribed." },
    { q: "A transcription unit has, in order:", o: ["Terminator–gene–promoter", "Promoter–structural gene–terminator", "Operator–gene–promoter", "Gene–promoter–terminator"], c: 1, e: "Promoter, structural gene, terminator." },
    { q: "In bacteria, transcription is terminated with the help of:", o: ["Sigma factor", "Rho factor", "Ligase", "Primase"], c: 1, e: "The ρ (rho) factor aids termination." },
    { q: "In eukaryotes, mRNA precursor (hnRNA) is made by:", o: ["RNA Pol I", "RNA Pol II", "RNA Pol III", "DNA Pol"], c: 1, e: "RNA polymerase II makes hnRNA." },
    { q: "Introns are:", o: ["Coding sequences", "Non-coding intervening sequences", "Promoters", "Poly-A tails"], c: 1, e: "Introns are removed during splicing; exons are expressed." },
    { q: "Capping of hnRNA adds ___ at the 5′ end.", o: ["Poly-A", "Methyl guanosine triphosphate", "Uracil", "Sigma factor"], c: 1, e: "A methyl guanosine triphosphate cap." },
    { q: "The triplet nature of the genetic code was proposed by:", o: ["Nirenberg", "Khorana", "George Gamow", "Ochoa"], c: 2, e: "George Gamow proposed the triplet code." },
    { q: "How many of the 64 codons are stop codons?", o: ["1", "2", "3", "4"], c: 2, e: "Three: UAA, UAG, UGA." },
    { q: "The start codon is:", o: ["UAA", "AUG", "UGA", "GUG"], c: 1, e: "AUG (also codes methionine)." },
    { q: "That most amino acids have more than one codon shows the code is:", o: ["Ambiguous", "Overlapping", "Degenerate", "Non-universal"], c: 2, e: "This is degeneracy of the code." },
    { q: "The adaptor molecule in translation is:", o: ["mRNA", "rRNA", "tRNA", "hnRNA"], c: 2, e: "tRNA, as postulated by Crick." },
    { q: "The catalytic (ribozyme) role in the ribosome is played by:", o: ["Protein", "rRNA", "tRNA", "mRNA"], c: 1, e: "rRNA acts as the ribozyme." },
    { q: "The lac operon was described by:", o: ["Watson & Crick", "Jacob & Monod", "Beadle & Tatum", "Hershey & Chase"], c: 1, e: "François Jacob and Jacques Monod." },
    { q: "The inducer of the lac operon is:", o: ["Glucose", "Lactose", "Galactose", "Repressor"], c: 1, e: "Lactose inactivates the repressor." },
    { q: "The z gene of the lac operon codes for:", o: ["Permease", "Transacetylase", "β-galactosidase", "Repressor"], c: 2, e: "β-galactosidase splits lactose." },
    { q: "The Human Genome Project ran from:", o: ["1985–1995", "1990–2003", "2000–2010", "1975–1990"], c: 1, e: "1990 to 2003." },
    { q: "The largest human gene is:", o: ["Haemoglobin", "Dystrophin", "Insulin", "Collagen"], c: 1, e: "Dystrophin (~2.4 million bases)." },
    { q: "DNA fingerprinting was developed by:", o: ["Alec Jeffreys", "Kary Mullis", "Fred Sanger", "Har Gobind Khorana"], c: 0, e: "Alec Jeffreys developed it, using VNTRs." },
    { q: "DNA fingerprinting is based on polymorphism in:", o: ["Exons", "Promoters", "VNTR / satellite DNA", "tRNA genes"], c: 2, e: "Variable Number of Tandem Repeats (satellite DNA)." }
  ],

  /* ---------------- MATCH-UP (18 pairs) ---------------- */
  match: [
    { term: "Watson & Crick", def: "Double-helix model of DNA (1953)" },
    { term: "Chargaff's rule", def: "A=T, G=C" },
    { term: "Griffith", def: "Transforming principle" },
    { term: "Avery, MacLeod, McCarty", def: "Transforming principle is DNA" },
    { term: "Hershey & Chase", def: "DNA is genetic material (phage)" },
    { term: "Meselson & Stahl", def: "Semiconservative replication proof" },
    { term: "DNA ligase", def: "Joins Okazaki fragments" },
    { term: "Template strand", def: "Strand copied during transcription" },
    { term: "Sigma factor", def: "Initiation of bacterial transcription" },
    { term: "Rho factor", def: "Termination of bacterial transcription" },
    { term: "RNA Pol II", def: "Makes hnRNA (mRNA precursor)" },
    { term: "Introns", def: "Non-coding sequences removed by splicing" },
    { term: "AUG", def: "Start codon (methionine)" },
    { term: "UAA/UAG/UGA", def: "Stop codons" },
    { term: "tRNA", def: "Adaptor molecule" },
    { term: "Jacob & Monod", def: "lac operon model" },
    { term: "Dystrophin", def: "Largest human gene" },
    { term: "Alec Jeffreys", def: "DNA fingerprinting (VNTR)" }
  ],

  /* ---------------- BUILD THE PATHWAY (4 sets) ---------------- */
  pathways: [
    { title: "Central Dogma", prompt: "Order the flow of genetic information.", steps: ["DNA", "Transcription", "mRNA (after processing)", "Translation", "Protein"] },
    { title: "DNA packaging", prompt: "Order the levels of DNA packaging.", steps: ["DNA double helix", "Histone octamer wrapping", "Nucleosome", "Beads-on-string chromatin", "Condensed chromatin", "Chromosome"] },
    { title: "hnRNA → mRNA processing", prompt: "Order eukaryotic mRNA maturation.", steps: ["Primary transcript (hnRNA)", "5′ capping", "3′ poly-A tailing", "Splicing (introns removed)", "Mature mRNA"] },
    { title: "DNA fingerprinting", prompt: "Order the DNA fingerprinting steps.", steps: ["Isolate DNA", "Digest with restriction enzymes", "Electrophoresis", "Southern blotting", "Hybridise with labelled VNTR probe", "Autoradiography"] }
  ],

  /* ---------------- BOSS BATTLE (hard MCQs) ---------------- */
  boss: [
    { q: "If a DNA sample has 20% adenine, what percentage is cytosine?", o: ["20%", "30%", "40%", "60%"], c: 1, e: "A=T=20% each (40%), so G+C=60%, and C=G=30%." },
    { q: "A eukaryotic gene that appears interrupted by non-coding stretches is called a:", o: ["Operon", "Split gene", "Pseudogene", "Cistron"], c: 1, e: "Coding exons interrupted by introns → split gene." },
    { q: "After two generations in the Meselson–Stahl experiment, the DNA bands observed were:", o: ["All heavy", "All hybrid", "Hybrid + light", "All light"], c: 2, e: "One hybrid and one light band appear after the second generation." },
    { q: "Which is the correct 5′→3′ mRNA sequence transcribed from the template 3′-TAC-5′ (read appropriately)?", o: ["AUG", "UAC", "TAC", "ATG"], c: 0, e: "Template 3′-TAC-5′ gives mRNA 5′-AUG-3′ — the start codon." },
    { q: "The lac operon would remain permanently OFF if there is a mutation making the:", o: ["Repressor unable to bind operator", "Repressor unable to bind inducer", "Promoter stronger", "z gene longer"], c: 1, e: "A repressor that cannot bind lactose stays on the operator, keeping the operon off." },
    { q: "The number of high-energy bonds used to charge one tRNA and add one amino acid is best described as:", o: ["Zero — it is spontaneous", "Requires ATP for activation", "Requires only GTP", "Requires DNA"], c: 1, e: "Amino-acid activation (charging) is ATP-dependent." },
    { q: "Which statement about the genetic code is FALSE?", o: ["It is degenerate", "It is overlapping", "It is nearly universal", "It is commaless"], c: 1, e: "The code is NON-overlapping — read continuously without overlap." },
    { q: "A frameshift is most likely caused by:", o: ["Single base substitution", "Insertion or deletion of one base", "Silent mutation", "Capping"], c: 1, e: "Adding/removing a base shifts the reading frame." },
    { q: "Sickle-cell anaemia at the molecular/code level results from:", o: ["Frameshift", "A single base substitution (point mutation)", "Deletion of a codon", "Nonsense over whole gene"], c: 1, e: "A single base change (GAG→GUG) — a point mutation." },
    { q: "Why can RNA act as both genetic material and enzyme?", o: ["It is double-stranded", "It can store information and catalyse (ribozyme)", "It has thymine", "It is very stable"], c: 1, e: "RNA can carry information and fold to catalyse reactions." },
    { q: "In the human genome, chromosome with most genes and chromosome with fewest are, respectively:", o: ["Y and 1", "1 and Y", "21 and X", "X and 21"], c: 1, e: "Chromosome 1 (2968 genes) most; Y (231) fewest." },
    { q: "If the coding strand reads 5′-ATGGCT-3′, the mRNA reads:", o: ["5′-AUGGCU-3′", "5′-UACCGA-3′", "3′-AUGGCU-5′", "5′-TACCGA-3′"], c: 0, e: "mRNA matches the coding strand with U replacing T: 5′-AUGGCU-3′." }
  ]
};

/* ===== Chapter 5 TOP-UP (extends flashcards -> 82, recall -> 50, mcqs -> 71) ===== */
(function(){
  var C = DATA.chapters.molecular;

  C.flashcards.push(
    { front: "Which sugar distinguishes DNA from RNA?", back: "DNA has deoxyribose (no 2′-OH); RNA has ribose (2′-OH present), making RNA more reactive and less stable." },
    { front: "In which direction does a new DNA strand grow?", back: "5′ → 3′; nucleotides are added to the free 3′-OH end." },
    { front: "What is the origin of replication (ori)?", back: "A specific DNA sequence where replication begins; bacteria have one, eukaryotic chromosomes have many." },
    { front: "What is a replication fork?", back: "The Y-shaped region where the parental strands separate and new strands are synthesised." },
    { front: "Which enzyme unwinds the DNA double helix during replication?", back: "Helicase (aided by topoisomerase/gyrase to relieve supercoiling)." },
    { front: "Which enzyme seals nicks between Okazaki fragments?", back: "DNA ligase." },
    { front: "What are Okazaki fragments?", back: "Short DNA segments made discontinuously on the lagging strand, later joined by DNA ligase." },
    { front: "What is the 'wobble' position of a codon?", back: "The third base, where non-standard pairing is allowed, so one tRNA can read several synonymous codons — a basis of the code's degeneracy." },
    { front: "Which enzyme charges a tRNA with its amino acid?", back: "Aminoacyl-tRNA synthetase (one specific enzyme per amino acid)." },
    { front: "Name the three phases of translation.", back: "Initiation, elongation, and termination." },
    { front: "What is the 5′ cap added to eukaryotic mRNA?", back: "A methyl guanosine triphosphate (methyl-GTP) that aids ribosome binding and protects the mRNA." },
    { front: "What is added at the 3′ end during mRNA processing?", back: "A poly-A tail (many adenylate residues) that stabilises the mRNA and aids export." },
    { front: "What is splicing?", back: "Removal of introns and joining of exons in hnRNA to form mature mRNA." },
    { front: "Which RNA polymerases transcribe rRNA, mRNA and tRNA in eukaryotes?", back: "Pol I → rRNA; Pol II → hnRNA (mRNA precursor); Pol III → tRNA and small RNAs." },
    { front: "What is the P-site and A-site of a ribosome?", back: "The A-site accepts the incoming aminoacyl-tRNA; the P-site holds the growing peptidyl-tRNA." },
    { front: "Which amino acid does the start codon AUG specify?", back: "Methionine (formyl-methionine in bacteria)." },
    { front: "What are VNTRs used in DNA fingerprinting?", back: "Variable Number of Tandem Repeats — short sequences repeated a different number of times in each person, giving a unique banding pattern." },
    { front: "What technique amplifies tiny DNA samples for fingerprinting?", back: "PCR (Polymerase Chain Reaction)." },
    { front: "What does the operator do in the lac operon?", back: "It is the DNA site where the repressor binds to block transcription of the structural genes." },
    { front: "How many genes and structural genes are in the lac operon?", back: "Three structural genes — z (β-galactosidase), y (permease), a (transacetylase) — under one promoter/operator." },
    { front: "What fraction of the human genome is repetitive, and how many chromosomes carry it?", back: "A large part is repetitive/non-coding; the sequence is spread over 24 distinct chromosome types (22 autosomes + X + Y)." },
    { front: "What does ELSI stand for in the Human Genome Project?", back: "Ethical, Legal and Social Issues — a programme addressing the implications of genome data." }
  );

  C.recall.push(
    { q: "List the enzymes of DNA replication and their functions.", hint: "Unwind, prime, extend, seal.", a: "<b>Helicase</b> unwinds the helix; <b>topoisomerase/gyrase</b> relieves supercoiling; <b>primase</b> lays RNA primers; <b>DNA polymerase III</b> extends 5′→3′; <b>DNA polymerase I</b> replaces primers; <b>DNA ligase</b> seals nicks." },
    { q: "Why is replication continuous on one strand and discontinuous on the other?", hint: "Polymerase only makes 5′→3′.", a: "DNA polymerase adds only to a 3′-OH, so it can copy the 3′→5′ template continuously (leading strand) but must copy the other template in short 5′→3′ pieces (Okazaki fragments = lagging strand), later joined by ligase." },
    { q: "Explain the significance of the 5′→3′ rule in replication.", hint: "Antiparallel constraint.", a: "Because the strands are antiparallel and polymerase works only 5′→3′, the two new strands are made in opposite physical directions at the fork, forcing the leading/lagging arrangement." },
    { q: "Describe initiation of translation.", hint: "Ribosome assembles at AUG.", a: "The small ribosomal subunit binds mRNA near the start codon AUG; the initiator tRNA (carrying Met) pairs there; the large subunit joins to form the functional ribosome with the initiator tRNA in the P-site." },
    { q: "Describe elongation and termination of translation.", hint: "A-site, peptide bond, stop codon.", a: "In elongation, each aminoacyl-tRNA enters the A-site, a peptide bond forms (catalysed by rRNA), and the ribosome translocates. Termination occurs when a stop codon (UAA/UAG/UGA) enters the A-site and release factors free the polypeptide." },
    { q: "Explain the wobble hypothesis.", hint: "Third base flexibility.", a: "The first two codon bases pair strictly, but the third (wobble) position allows relaxed pairing, so a single tRNA can recognise several synonymous codons — accounting for the code being degenerate yet efficient." },
    { q: "How is a tRNA charged with its amino acid?", hint: "ATP + synthetase.", a: "Aminoacyl-tRNA synthetase, using ATP, attaches the correct amino acid to the 3′ end of its specific tRNA, forming an aminoacyl-tRNA ready for the ribosome." },
    { q: "Describe capping and tailing of eukaryotic mRNA.", hint: "5′ and 3′ modifications.", a: "A methyl-guanosine cap is added to the 5′ end (aids ribosome binding and protection) and a poly-A tail to the 3′ end (stability and export), before the mRNA leaves the nucleus." },
    { q: "Why must hnRNA be processed before translation?", hint: "Introns.", a: "hnRNA contains introns (non-coding) between exons. Splicing removes introns and joins exons; capping and tailing follow, producing a functional mRNA — this split-gene arrangement is unique to eukaryotes." },
    { q: "Distinguish the three eukaryotic RNA polymerases.", hint: "I, II, III.", a: "RNA polymerase I transcribes rRNAs; II transcribes hnRNA (mRNA precursor); III transcribes tRNA, 5S rRNA and small nuclear RNAs." },
    { q: "How does the lac operon act as a switch?", hint: "Inducible negative control.", a: "It is normally OFF: the repressor (from gene i) binds the operator. When lactose (inducer) is present, it inactivates the repressor, RNA polymerase transcribes z, y and a, and the enzymes to use lactose are made — an inducible, negatively controlled system." },
    { q: "What are the functions of the lac operon's three structural genes?", hint: "z, y, a.", a: "z encodes β-galactosidase (splits lactose into glucose + galactose); y encodes permease (lactose uptake); a encodes transacetylase." },
    { q: "Why is the genetic code called nearly universal, and name an exception.", hint: "Same codons across species.", a: "Almost all organisms read the same codons for the same amino acids, showing common ancestry. A known exception is some codon reassignments in mitochondria." },
    { q: "How does PCR help DNA fingerprinting?", hint: "Amplification.", a: "PCR amplifies minute or degraded DNA samples (e.g., from a crime scene) into millions of copies, enough to detect VNTR patterns reliably." },
    { q: "What is polymorphism and why is it central to DNA fingerprinting?", hint: "Sequence variation.", a: "Polymorphism is heritable variation in DNA sequence (especially repeat number in VNTRs) between individuals. These differences create a banding pattern unique to each person (except identical twins)." },
    { q: "Outline the ethical (ELSI) concerns of the Human Genome Project.", hint: "Privacy, discrimination.", a: "Genome data raises issues of genetic privacy, possible discrimination by insurers or employers, ownership of sequence data, and the responsible use of predictive genetic information — addressed by the ELSI programme." },
    { q: "State three practical applications of the Human Genome Project.", hint: "Medicine, evolution, forensics.", a: "Understanding and diagnosing genetic diseases, developing personalised/precision medicine, and providing reference data for evolutionary and forensic studies." },
    { q: "Compare the two sequencing strategies used in the HGP.", hint: "Clone-by-clone vs shotgun.", a: "The public consortium used a map-based, clone-by-clone approach (ordering fragments before sequencing); Celera used whole-genome shotgun sequencing (random fragments assembled by computer)." },
    { q: "Why is DNA replication described as semiconservative, and how was it shown?", hint: "Meselson–Stahl.", a: "Each daughter molecule keeps one parental strand and one new strand. Meselson and Stahl grew E. coli in ¹⁵N then ¹⁴N; density-gradient centrifugation showed one intermediate band after one generation, confirming the model." },
    { q: "Explain why the coding strand is not transcribed.", hint: "Template polarity.", a: "RNA polymerase reads the template (3′→5′) strand to build mRNA 5′→3′. The coding strand has the same sequence as the mRNA (with T for U) and merely serves as a reference; it is not read." }
  );

  C.mcqs.push(
    { q: "The sugar present in DNA is:", o: ["Ribose", "Deoxyribose", "Glucose", "Fructose"], c: 1, e: "DNA has deoxyribose (lacks the 2′-OH of ribose)." },
    { q: "A newly synthesised DNA strand grows in the direction:", o: ["3′ → 5′", "5′ → 3′", "Both directions equally", "Randomly"], c: 1, e: "Polymerase adds nucleotides to the free 3′-OH end." },
    { q: "The enzyme that unwinds the DNA double helix is:", o: ["Ligase", "Helicase", "Primase", "Polymerase III"], c: 1, e: "Helicase separates the two strands at the fork." },
    { q: "Okazaki fragments are joined together by:", o: ["Helicase", "Primase", "DNA ligase", "Topoisomerase"], c: 2, e: "DNA ligase seals the nicks on the lagging strand." },
    { q: "The wobble position of a codon is the:", o: ["First base", "Second base", "Third base", "Anticodon loop"], c: 2, e: "Relaxed pairing at the third base underlies degeneracy." },
    { q: "A tRNA is charged with its amino acid by:", o: ["Peptidyl transferase", "Aminoacyl-tRNA synthetase", "RNA polymerase", "Reverse transcriptase"], c: 1, e: "This enzyme uses ATP to attach the correct amino acid." },
    { q: "The 5′ cap of eukaryotic mRNA is:", o: ["Poly-A", "Methyl guanosine triphosphate", "A stop codon", "An intron"], c: 1, e: "Methyl-GTP cap aids ribosome binding and protection." },
    { q: "In eukaryotes, tRNA is transcribed by:", o: ["RNA polymerase I", "RNA polymerase II", "RNA polymerase III", "DNA polymerase"], c: 2, e: "Pol III makes tRNA, 5S rRNA and snRNAs." },
    { q: "The site on the ribosome that receives incoming aminoacyl-tRNA is the:", o: ["P-site", "A-site", "E-site", "Operator"], c: 1, e: "The A-site accepts the new aminoacyl-tRNA." },
    { q: "The initiator amino acid in translation is:", o: ["Valine", "Methionine", "Glycine", "Leucine"], c: 1, e: "AUG codes for methionine, the start amino acid." },
    { q: "DNA fingerprinting relies on polymorphism in:", o: ["Exons", "VNTRs (tandem repeats)", "Ribosomal RNA", "Introns of the lac operon"], c: 1, e: "Variable Number Tandem Repeats differ between individuals." },
    { q: "Tiny forensic DNA samples are amplified for fingerprinting using:", o: ["Southern blotting", "PCR", "Centrifugation", "Electrophoresis alone"], c: 1, e: "PCR multiplies minute samples into detectable amounts." },
    { q: "The operator of the lac operon is the site where the ___ binds:", o: ["Inducer", "Repressor", "RNA polymerase permanently", "Ribosome"], c: 1, e: "The repressor binds the operator to block transcription." },
    { q: "The y gene of the lac operon codes for:", o: ["β-galactosidase", "Permease", "Transacetylase", "Repressor"], c: 1, e: "Permease controls lactose entry into the cell." },
    { q: "Splicing refers to the removal of:", o: ["Exons", "Introns", "The poly-A tail", "The 5′ cap"], c: 1, e: "Introns are excised and exons joined to make mature mRNA." },
    { q: "The poly-A tail is added to the ___ end of mRNA.", o: ["5′", "3′", "Both ends", "Neither end"], c: 1, e: "The poly-A tail stabilises the 3′ end." },
    { q: "The number of many origins of replication is characteristic of:", o: ["Prokaryotes", "Eukaryotes", "Viruses only", "Plasmids"], c: 1, e: "Eukaryotic chromosomes replicate from multiple origins." },
    { q: "RNA polymerase reads the template strand in the direction:", o: ["5′ → 3′", "3′ → 5′", "Both", "Neither"], c: 1, e: "It reads template 3′→5′ while building RNA 5′→3′." },
    { q: "The 'ELSI' programme of the HGP dealt with:", o: ["Enzyme labelling", "Ethical, legal and social issues", "Electrophoresis standards", "Exon–intron sizing"], c: 1, e: "ELSI addressed the societal implications of genome data." },
    { q: "The near-universality of the genetic code is evidence for:", o: ["Independent origins of life", "A common evolutionary ancestry", "Lamarckism", "Reverse transcription"], c: 1, e: "Shared codon meaning across life implies common descent." },
    { q: "Which enzyme lays down the RNA primer needed to start replication?", o: ["Ligase", "Primase", "Helicase", "Gyrase"], c: 1, e: "Primase synthesises the short RNA primer for polymerase." }
  );
})();
