/* ====== data_molecular_inhe.js ====== */
DATA.chapters.molecular_inhe = {
  id: "molecular_inhe",
  num: 6,
  title: "Molecular Basis of Inheritance",
  subtitle: "DNA structure, packaging, replication, transcription, genetic code, translation, lac operon, HGP, and DNA fingerprinting — NCERT Class 12 Chapter 6",
  color: "#3b82f6",
  colorD: "#1d4ed8",
  glyph: "🧬",

  notes: [
    {
      id: "dna_structure_packaging",
      heading: "DNA Structure & Packaging",
      html: `
        <p><b>DNA (Deoxyribonucleic acid)</b> is a long polymer of deoxyribonucleotides. The length of DNA is defined by the number of base pairs (bp). E.g., bacteriophage &phi;&times;174 has 5386 nucleotides, bacteriophage &lambda; has 48502 bp, <i>E. coli</i> has 4.6 &times; 10<sup>6</sup> bp, and a haploid human genome has 3.3 &times; 10<sup>9</sup> bp.</p>
        
        <h4>1. Polynucleotide Chain Structure</h4>
        <p>A nucleotide consists of three components:</p>
        <ul>
          <li><b>Nitrogenous base</b>: Purines (Adenine, Guanine) and Pyrimidines (Cytosine, Uracil, Thymine). Thymine is unique to DNA; Uracil is unique to RNA.</li>
          <li><b>Pentose sugar</b>: Deoxyribose in DNA; Ribose in RNA (has an extra 2'-OH group making it reactive and unstable).</li>
          <li><b>Phosphate group</b>: Linked to the 5'-OH of a nucleoside via a phosphoester bond.</li>
        </ul>
        <p>Nucleotides are linked by <b>3'-5' phosphodiester bonds</b>. The backbone is made of sugar and phosphate, while nitrogenous bases project inwards.</p>
        
        <h4>2. Watson & Crick Double Helix Model (1953)</h4>
        <p>Based on X-ray diffraction data by Maurice Wilkins and Rosalind Franklin. Key features:</p>
        <ul>
          <li>Two polynucleotide chains with <b>anti-parallel polarity</b> (one 5'→3', the other 3'→5').</li>
          <li>Complementary base pairing: Adenine pairs with Thymine (<b>2 H-bonds</b>); Guanine pairs with Cytosine (<b>3 H-bonds</b>). According to <b>Chargaff's Rule</b>: [A]/[T] = [G]/[C] = 1.</li>
          <li>Right-handed coiling. The pitch of the helix is <b>3.4 nm</b> with roughly <b>10 bp per turn</b> (distance between base pairs is <b>0.34 nm</b>).</li>
        </ul>

        <h4>3. DNA Packaging</h4>
        <p>The length of human diploid DNA is ~2.2 metres, packed inside a nucleus of 10<sup>-6</sup> m.</p>
        <ul>
          <li><b>Prokaryotes</b>: Lack a defined nucleus; negatively charged DNA is held by positively charged proteins in the <b>nucleoid</b>.</li>
          <li><b>Eukaryotes</b>: DNA is wrapped around a positively charged <b>histone octamer</b> (rich in basic amino acids <b>Lysine and Arginine</b>) to form a <b>nucleosome</b>. A typical nucleosome contains <b>200 bp</b> of DNA.</li>
          <li>Nucleosomes appear as <b>"beads-on-a-string"</b> in chromatin under electron microscopy.</li>
          <li><b>Euchromatin</b>: Loosely packed, stains light, transcriptionally active.</li>
          <li><b>Heterochromatin</b>: Densely packed, stains dark, transcriptionally inactive.</li>
        </ul>
      `
    },
    {
      id: "search_for_genetic_material",
      heading: "Search for Genetic Material",
      html: `
        <h4>1. Transforming Principle (Griffith, 1928)</h4>
        <p>Frederick Griffith experimented with <i>Streptococcus pneumoniae</i> on mice:</p>
        <ul>
          <li><b>S-strain (Smooth)</b>: Mucous polysaccharide coat, virulent (kills mice).</li>
          <li><b>R-strain (Rough)</b>: No coat, non-virulent (mice survive).</li>
          <li>Injecting Heat-killed S + Live R into mice → Mice died. Live S-strain bacteria recovered.</li>
          <li><b>Conclusion</b>: R-strain was transformed by some "transforming principle" from heat-killed S-strain.</li>
        </ul>

        <h4>2. Biochemical Characterisation (Avery, MacLeod, McCarty, 1933-44)</h4>
        <p>Purified biochemicals (proteins, RNA, DNA) from heat-killed S-cells. Found that only <b>DNA</b> caused transformation. Proteases and RNases did not affect transformation, but <b>DNase inhibited it</b>, proving DNA is the genetic material.</p>

        <h4>3. Hershey-Chase Experiment (1952)</h4>
        <p>Unequivocal proof that DNA is the genetic material using bacteriophages (T2):</p>
        <ul>
          <li>Grew phages in radioactive media: <b><sup>32</sup>P (labels DNA)</b> or <b><sup>35</sup>S (labels protein coat)</b>.</li>
          <li>Infected <i>E. coli</i>, followed by blending and centrifugation.</li>
          <li>Radioactivity detected only in bacteria infected with <sup>32</sup>P-labelled phages → DNA entered the bacteria.</li>
        </ul>

        <h4>4. RNA World</h4>
        <p><b>RNA was the first genetic material</b>. Essential life processes evolved around RNA. RNA can act as a catalyst (ribozyme) but is unstable. DNA evolved from RNA with chemical modifications (e.g., deoxyribose sugar, Thymine instead of Uracil) for higher chemical stability and repair mechanisms.</p>
      `
    },
    {
      id: "replication_transcription",
      heading: "Replication & Transcription",
      html: `
        <h4>1. DNA Replication (Semiconservative)</h4>
        <p>Proposed by Watson and Crick. Proved by <b>Meselson & Stahl (1958)</b> using <i>E. coli</i> grown in <sup>15</sup>NH<sub>4</sub>Cl (heavy isotope), then transferred to <sup>14</sup>N medium. Density gradient centrifugation in <b>CsCl</b> showed: Gen 1 (20 mins) = 100% hybrid density; Gen 2 (40 mins) = 50% hybrid, 50% light. Taylor and colleagues proved the same in <i>Vicia faba</i> using radioactive thymidine.</p>
        <p><b>Enzymes & Mechanism</b>:</p>
        <ul>
          <li><b>DNA-dependent DNA polymerase</b>: Catalyses polymerisation with high speed and accuracy, only in the <b>5'→3' direction</b>.</li>
          <li><b>Replication Fork</b>: Small opening of helix. Replication is <b>continuous on the leading template strand (3'→5')</b> and <b>discontinuous on the lagging template strand (5'→3')</b>.</li>
          <li>Discontinuous fragments (Okazaki fragments) are joined by <b>DNA ligase</b>.</li>
          <li>Replication starts at a specific site called the <b>Origin of Replication (ori)</b>.</li>
        </ul>

        <h4>2. Transcription</h4>
        <p>The copying of genetic information from one strand of DNA into RNA. Governed by complementarity, except Adenine pairs with Uracil. Only one strand (template strand, 3'→5') is transcribed.</p>
        <p><b>Transcription Unit</b> consists of:</p>
        <ul>
          <li><b>Promoter</b>: Binding site for RNA polymerase, located at the 5'-end of the coding strand.</li>
          <li><b>Structural gene</b>: Template strand (3'→5') and Coding strand (5'→3', same sequence as RNA but with T instead of U).</li>
          <li><b>Terminator</b>: Defines the end of transcription, located at the 3'-end of the coding strand.</li>
        </ul>

        <h4>3. Transcription in Prokaryotes vs Eukaryotes</h4>
        <table class="cmp">
          <thead>
            <tr><th>Feature</th><th>Prokaryotes</th><th>Eukaryotes</th></tr>
          </thead>
          <tbody>
            <tr><td><b>Polymerases</b></td><td>Single RNA polymerase for all RNAs.</td><td>Three polymerases (RNA Pol I: rRNAs; Pol II: hnRNA/mRNA; Pol III: tRNA, 5S rRNA, snRNA).</td></tr>
            <tr><td><b>Processing</b></td><td>No processing needed; mRNA is functional immediately.</td><td>Primary transcript (hnRNA) undergoes <b>Splicing</b> (removes introns, joins exons), <b>Capping</b> (methyl guanosine triphosphate at 5'-end), and <b>Tailing</b> (poly-A tail at 3'-end).</td></tr>
            <tr><td><b>Coupling</b></td><td>Transcription and translation are coupled in cytoplasm.</td><td>Separated: transcription in nucleus, translation in cytoplasm.</td></tr>
          </tbody>
        </table>
      `
    },
    {
      id: "genetic_code_translation",
      heading: "Genetic Code & Translation",
      html: `
        <h4>1. The Genetic Code</h4>
        <p>George Gamow argued that a codon must consist of three bases (triplet) to code for 20 amino acids (4<sup>3</sup> = 64 combinations). Deciphered by Khorana (synthesised defined homopolymers/copolymers) and Nirenberg (cell-free protein synthesis system).</p>
        <p><b>Salient Features</b>:</p>
        <ul>
          <li><b>Triplet</b>: 61 codons code for amino acids; 3 are stop codons (<b>UAA, UAG, UGA</b>).</li>
          <li><b>Degenerate</b>: Some amino acids are coded by more than one codon.</li>
          <li><b>Contiguous</b>: Read in mRNA without punctuations.</li>
          <li><b>Nearly Universal</b>: E.g., UUU codes for Phenylalanine in bacteria and humans.</li>
          <li><b>AUG</b> has dual functions: codes for Methionine (Met) and acts as the **initiator codon**.</li>
        </ul>
        <p><b>Mutations</b>: Point mutation changes a single base pair (e.g., GAG &rarr; GUG in &beta;-globin chain causes Sickle Cell Anemia). Insertion or deletion of 1 or 2 bases shifts the reading frame (Frameshift mutation).</p>

        <h4>2. tRNA - The Adapter Molecule</h4>
        <p>Crick postulated tRNA. Secondary structure resembles a <b>clover leaf</b>; 3D structure is an **inverted L**. Has an <b>anticodon loop</b> (reads mRNA codon) and an <b>amino acid acceptor end</b> (binds amino acid at 3'-end).</p>

        <h4>3. Translation (Protein Synthesis)</h4>
        <p>The polymerisation of amino acids into a polypeptide chain:</p>
        <ul>
          <li><b>Activation/Charging</b>: Amino acids are activated by ATP and linked to cognate tRNA (**aminoacylation**).</li>
          <li><b>Ribosome Factory</b>: Small subunit binds mRNA; large subunit has two sites for tRNA binding. <b>23S rRNA</b> in bacteria acts as a ribozyme (catalyses peptide bond formation).</li>
          <li><b>Steps</b>: Initiation (starts at AUG), Elongation (movement along mRNA, peptide bond formation), and Termination (release factor binds stop codon). Untranslated Regions (UTRs) are present at both 5' and 3' ends for efficient translation.</li>
        </ul>
      `
    },
    {
      id: "regulation_hgp_fingerprinting",
      heading: "Regulation, HGP & DNA Fingerprinting",
      html: `
        <h4>1. Regulation of Gene Expression (Lac Operon)</h4>
        <p>Elucidated by Francois Jacob and Jacques Monod. The <b>operon</b> is a polycistronic structural gene regulated by a common promoter and regulatory genes.</p>
        <ul>
          <li><b>Regulatory gene (i)</b>: Codes for the repressor protein.</li>
          <li><b>Operator (o)</b>: Binding site for the repressor.</li>
          <li><b>Structural genes</b>: 
            <ul>
              <li><b>z</b>: codes for &beta;-galactosidase (hydrolyses lactose to glucose & galactose).</li>
              <li><b>y</b>: codes for permease (increases cell permeability to &beta;-galactosides).</li>
              <li><b>a</b>: codes for transacetylase.</li>
            </ul>
          </li>
          <li><b>In the absence of Inducer (Lactose)</b>: Repressor binds operator → RNA polymerase blocked → operon switched OFF.</li>
          <li><b>In the presence of Inducer (Lactose)</b>: Lactose binds repressor → repressor inactivated → RNA polymerase transcribes genes → operon switched ON.</li>
        </ul>

        <h4>2. Human Genome Project (HGP)</h4>
        <p>A 13-year mega-project (1990-2003) coordinated by US Dept of Energy and NIH. Methodologies: <b>ESTs (Expressed Sequence Tags)</b> (identifying all genes expressed as RNA) and <b>Sequence Annotation</b> (sequencing entire genome, coding & non-coding, and assigning functions).</p>
        <p><b>Salient Features</b>:</p>
        <ul>
          <li>Human genome contains <b>3 &times; 10<sup>9</sup> bp</b> (~3.1647 billion bp).</li>
          <li>Total genes: <b>~30,000</b>. Largest gene is **dystrophin** (2.4 million bases).</li>
          <li>99.9% of nucleotide bases are exactly the same in all humans.</li>
          <li>Less than 2% of the genome codes for proteins.</li>
          <li>Chromosome 1 has most genes (2968); Y has the fewest (231).</li>
          <li>About 1.4 million locations have single base DNA differences (**SNPs** - Single Nucleotide Polymorphisms).</li>
        </ul>

        <h4>3. DNA Fingerprinting</h4>
        <p>Developed by Alec Jeffreys. Uses **satellite DNA** (highly repetitive DNA showing high polymorphism) as probe. Specifically **VNTRs (Variable Number of Tandem Repeats)**.</p>
        <p><b>Steps</b>:</p>
        <div class="flow">
          <span class="step">Isolate DNA</span><span class="arr">→</span>
          <span class="step">Digest with Restriction Endonucleases</span><span class="arr">→</span>
          <span class="step">Separate by Gel Electrophoresis</span><span class="arr">→</span>
          <span class="step">Southern Blotting (transfer to nylon membrane)</span><span class="arr">→</span>
          <span class="step">Hybridisation using radioactive VNTR probe</span><span class="arr">→</span>
          <span class="step">Detection by Autoradiography</span>
        </div>
      `
    }
  ],

  mnemonics: [
    {
      title: "Pyrimidines in DNA/RNA",
      device: "<b>CUT</b> the **py**ramid",
      expand: [
        { L: "C", t: "Cytosine" },
        { L: "U", t: "Uracil (RNA only)" },
        { L: "T", t: "Thymine (DNA only)" },
        { L: "py", t: "Pyrimidines (single-ring bases)" }
      ]
    },
    {
      title: "Lac Operon Structural Genes",
      device: "<b>Z</b>ebra <b>Y</b>ells <b>A</b>lways",
      expand: [
        { L: "Z", t: "z gene codes for &beta;-galactosidase" },
        { L: "Y", t: "y gene codes for Permease" },
        { L: "A", t: "a gene codes for Transacetylase" }
      ]
    },
    {
      title: "Stop/Terminator Codons",
      device: "<b>U** **A**re **A**way, **U** **A**re **G**one, **U** **G**o **A**way",
      expand: [
        { L: "UAA", t: "Ochre (Stop codon)" },
        { L: "UAG", t: "Amber (Stop codon)" },
        { L: "UGA", t: "Opal (Stop codon)" }
      ]
    },
    {
      title: "DNA Replication Density Bands",
      device: "<b>H**appy **H**ybrid **L**ife",
      expand: [
        { L: "Heavy", t: "<sup>15</sup>N-labeled parental DNA band (bottom of CsCl gradient)" },
        { L: "Hybrid", t: "<sup>15</sup>N-<sup>14</sup>N intermediate density DNA band after 20 mins" },
        { L: "Light", t: "<sup>14</sup>N normal density DNA band appearing after 40 mins" }
      ]
    }
  ],

  flashcards: [
    { front: "What is the haploid nucleotide content of the human genome?", back: "3.3 &times; 10<sup>9</sup> base pairs (bp)." },
    { front: "State Chargaff's rule.", back: "In a double-stranded DNA, the ratios between Adenine & Thymine, and Guanine & Cytosine are constant and equal to 1 ([A]/[T] = [G]/[C] = 1)." },
    { front: "What is the pitch and distance between base pairs in a DNA double helix?", back: "Pitch of the helix is 3.4 nm; distance between base pairs is approximately 0.34 nm (roughly 10 bp per turn)." },
    { front: "What amino acids are histones rich in, and what is their charge?", back: "Rich in Lysine and Arginine residues, which carry positive charges in their side chains. Histone octamer binds negatively charged DNA." },
    { front: "How many base pairs of DNA are wrapped around a single nucleosome?", back: "A typical nucleosome contains 200 base pairs of DNA helix." },
    { front: "Differentiate between euchromatin and heterochromatin.", back: "Euchromatin is loosely packed, stains light, and is transcriptionally active. Heterochromatin is densely packed, stains dark, and is transcriptionally inactive." },
    { front: "Who proved the transforming principle biochemically, and how?", back: "Avery, MacLeod, and McCarty (1933-44) showed that only purified DNA from heat-killed S-strain transformed live R-strain, and DNase inhibited this." },
    { front: "What radioactive isotopes did Hershey and Chase use in their bacteriophage experiments?", back: "Phosphorus-32 (<sup>32</sup>P) to label DNA, and Sulfur-35 (<sup>35</sup>S) to label protein coats." },
    { front: "Name the isotopes used by Meselson and Stahl to prove semiconservative replication.", back: "Heavy isotope of Nitrogen (<sup>15</sup>N) and normal light Nitrogen (<sup>14</sup>N) using CsCl density gradient centrifugation." },
    { front: "What average rate of polymerisation does E. coli DNA polymerase achieve?", back: "Approximately 2000 base pairs (bp) per second, replicating its 4.6 &times; 10<sup>6</sup> bp genome in 18 minutes." },
    { front: "What are Okazaki fragments and how are they joined?", back: "Discontinuously synthesised DNA segments on the lagging template strand (5'→3'). They are joined together by DNA ligase." },
    { front: "Define the template and coding strands in a transcription unit.", back: "Template strand has 3'→5' polarity and is transcribed. Coding strand has 5'→3' polarity, is not transcribed, and has the same sequence as the transcribed RNA (with T instead of U)." },
    { front: "Which transcription factors associate with RNA polymerase in prokaryotes for initiation and termination?", back: "Sigma (&sigma;) factor for initiation, and Rho (&rho;) factor for termination." },
    { front: "Name the three eukaryotic RNA polymerases and their transcripts.", back: "RNA Pol I: transcribes rRNAs (28S, 18S, 5.8S). RNA Pol II: transcribes hnRNA (precursor of mRNA). RNA Pol III: transcribes tRNA, 5S rRNA, and snRNAs." },
    { front: "What are the post-transcriptional modifications of eukaryotic hnRNA?", back: "1. Splicing (removes introns, joins exons), 2. Capping (methyl guanosine triphosphate at 5'-end), 3. Tailing (200-300 adenylate residues at 3'-end)." },
    { front: "What is the dual function of the codon AUG?", back: "It acts as the initiator codon (tRNA binds to start translation) and codes for the amino acid Methionine (Met)." },
    { front: "What is the secondary structure of tRNA compared to its 3D structure?", back: "Secondary structure looks like a clover-leaf, while the actual 3D structure is a compact molecule resembling an inverted L." },
    { front: "Explain the role of the 23S rRNA in bacteria during translation.", back: "It acts as a ribozyme (catalytic RNA) to catalyse the formation of peptide bonds between amino acids." },
    { front: "What are the structural genes of the lac operon and their enzymes?", back: "z gene: &beta;-galactosidase. y gene: Permease. a gene: Transacetylase." },
    { front: "What is VNTR and what role does it play in DNA fingerprinting?", back: "Variable Number of Tandem Repeats (a class of minisatellites). VNTRs are highly polymorphic and serve as probes in Southern hybridization to detect individual-specific DNA band patterns." }
  ],

  recall: [
    {
      q: "Explain the Meselson and Stahl experiment showing semiconservative replication.",
      hint: "E. coli, 15N to 14N, CsCl gradient, 20 and 40 minutes",
      a: "Meselson and Stahl grew <i>E. coli</i> in <b><sup>15</sup>N</b> (heavy isotope) medium until all DNA was heavy. They transferred cells to <b><sup>14</sup>N</b> (light isotope) medium. DNA extracted after 1 generation (20 mins) showed an <b>intermediate/hybrid density</b> (<sup>15</sup>N-<sup>14</sup>N). DNA extracted after 2 generations (40 mins) showed <b>equal amounts of hybrid and light DNA</b>. This proved that DNA replication is semiconservative, where each replicated molecule consists of one parental and one newly synthesised strand."
    },
    {
      q: "Describe the transcription unit and how the template/coding strands are defined.",
      hint: "Promoter, structural gene, terminator, 3'→5' vs 5'→3'",
      a: "A transcription unit in DNA contains: 1. A <b>Promoter</b> (defines start, upstream 5' of coding strand), 2. <b>Structural gene</b>, 3. <b>Terminator</b> (defines end, downstream 3' of coding strand). The <b>Template strand</b> has 3'→5' polarity and directs RNA synthesis. The <b>Coding strand</b> has 5'→3' polarity and is displaced. RNA polymerase reads 3'→5', synthesising RNA 5'→3'. Thus, the RNA sequence is identical to the coding strand (except U in place of T)."
    },
    {
      q: "Explain the mechanism of the Lac Operon in 'ON' and 'OFF' states.",
      hint: "i gene, repressor, operator, inducer (lactose), z-y-a genes",
      a: "The lac operon consists of regulatory gene <i>i</i>, promoter, operator, and structural genes <i>z-y-a</i>. <b>OFF State (No Lactose)</b>: The <i>i</i> gene codes for an active repressor protein that binds to the operator. This blocks RNA polymerase from transcribing the structural genes. <b>ON State (Lactose Present)</b>: Lactose acts as an inducer, binding and inactivating the repressor. The inactive repressor cannot bind the operator, allowing RNA polymerase to transcribe <i>z</i> (&beta;-gal), <i>y</i> (permease), and <i>a</i> (transacetylase) to metabolise lactose."
    },
    {
      q: "What is the Human Genome Project? Summarise key findings about human genes.",
      hint: "30,000 genes, dystrophin, <2% coding, chromosome 1 vs Y, SNPs",
      a: "HGP was a mega-project (1990-2003) to sequence the human genome. Key findings: 1. Genome contains ~3 billion base pairs. 2. Total genes estimated at ~30,000. 3. Average gene has 3000 bases; largest is dystrophin (2.4 million bases). 4. Less than 2% of the genome codes for proteins. 5. Chromosome 1 has the most genes (2968); Y has the fewest (231). 6. 1.4 million locations have Single Nucleotide Polymorphisms (SNPs) which help map disease-associated sequences."
    },
    {
      q: "Outline the steps involved in DNA Fingerprinting.",
      hint: "Isolation, digestion, electrophoresis, blotting, hybridisation, autoradiography",
      a: "1. <b>Isolation</b> of DNA from sample. 2. <b>Digestion</b> of DNA by restriction endonucleases into fragments. 3. <b>Separation</b> of fragments by agarose gel electrophoresis. 4. <b>Southern Blotting</b>: transfer of separated fragments to a synthetic nylon membrane. 5. <b>Hybridisation</b> using radioactive VNTR probes that bind complementary repeat sequences. 6. <b>Detection</b>: exposing the membrane to X-ray film (autoradiography) to reveal individual-specific dark bands."
    }
  ],

  mcqs: [
    {
      q: "If a double stranded DNA has 20% Cytosine, what is the percentage of Adenine?",
      o: ["20%", "30%", "40%", "80%"],
      c: 1,
      e: "According to Chargaff's rule, Cytosine (C) = Guanine (G) = 20%. Total C+G = 40%. Thus, A+T = 100% - 40% = 60%. Since Adenine (A) = Thymine (T), A = 60% / 2 = 30%."
    },
    {
      q: "A typical nucleosome contains how many base pairs of DNA?",
      o: ["100 bp", "200 bp", "340 bp", "400 bp"],
      c: 1,
      e: "A nucleosome consists of negatively charged DNA wrapped around a positively charged histone octamer, covering approximately 200 base pairs of DNA helix."
    },
    {
      q: "In the Hershey-Chase experiment, what proved that DNA is the genetic material?",
      o: ["Radioactive sulfur was found in the supernatant", "Radioactive phosphorus was found inside the bacterial cell", "Radioactive sulfur was found inside the bacterial cell", "Radioactive phosphorus was found in the supernatant"],
      c: 1,
      e: "Bacteria infected with bacteriophages having radioactive DNA (labeled with <sup>32</sup>P) showed radioactivity inside the bacterial pellet, showing DNA enters the host."
    },
    {
      q: "The replication of DNA is discontinuous on the template with polarity:",
      o: ["3'→5'", "5'→3'", "Both directions", "3'→3'"],
      c: 1,
      e: "Since DNA polymerase can only synthesise DNA in the 5'→3' direction, replication is continuous on the 3'→5' template strand (leading) and discontinuous on the 5'→3' template strand (lagging)."
    },
    {
      q: "In eukaryotes, which RNA polymerase transcribes tRNA, 5S rRNA, and snRNAs?",
      o: ["RNA Polymerase I", "RNA Polymerase II", "RNA Polymerase III", "RNA Polymerase IV"],
      c: 2,
      e: "In eukaryotic nuclei: RNA Pol I transcribes major rRNAs (28S, 18S, 5.8S). RNA Pol II transcribes mRNA precursor (hnRNA). RNA Pol III transcribes tRNA, 5S rRNA, and snRNAs."
    },
    {
      q: "Which of the following is NOT a stop codon?",
      o: ["UAA", "UAG", "UGA", "AUG"],
      c: 3,
      e: "UAA, UAG, and UGA are stop (termination) codons. AUG is the start (initiator) codon and codes for Methionine."
    },
    {
      q: "The enzyme that catalyses peptide bond formation in bacteria is:",
      o: ["Peptidyl transferase (23S rRNA)", "Aminoacyl tRNA synthetase", "RNA Polymerase II", "DNA Ligase"],
      c: 0,
      e: "The 23S rRNA acts as a ribozyme (peptidyl transferase) in bacteria, catalysing peptide bond formation between adjacent amino acids during translation."
    },
    {
      q: "In the lac operon, which gene codes for the permease enzyme?",
      o: ["i gene", "z gene", "y gene", "a gene"],
      c: 2,
      e: "In the lac operon structural genes: z codes for &beta;-galactosidase, y codes for Permease (helps lactose enter the cell), and a codes for Transacetylase."
    }
  ],

  match: [
    { term: "Chargaff", def: "A/T = G/C = 1 ratio" },
    { term: "Griffith", def: "Transforming principle in pneumococcus" },
    { term: "Hershey & Chase", def: "Unequivocal proof of DNA as genetic material using bacteriophages" },
    { term: "Meselson & Stahl", def: "Semiconservative replication proof in E. coli" },
    { term: "Okazaki fragments", def: "Lagging strand discontinuous DNA segments" },
    { term: "Capping", def: "Methyl guanosine triphosphate added to 5'-end of hnRNA" },
    { term: "Lac y gene", def: "Codes for permease" },
    { term: "AUG", def: "Initiator codon & Methionine" },
    { term: "Dystrophin", def: "Largest human gene (2.4 million bases)" },
    { term: "Alec Jeffreys", def: "Developed DNA fingerprinting technique" }
  ],

  pathways: [
    {
      title: "The Central Dogma of Molecular Biology",
      prompt: "Order the flow of genetic information from storage to functional molecule.",
      steps: [
        "Double-stranded DNA in genome",
        "Transcription by RNA Polymerase",
        "Primary hnRNA transcript",
        "Splicing, capping, and tailing",
        "Mature mRNA exported to cytoplasm",
        "Translation at the ribosome",
        "Polypeptide chain (protein)"
      ]
    },
    {
      title: "DNA Fingerprinting Workflow",
      prompt: "Order the steps of Alec Jeffreys' DNA fingerprinting process.",
      steps: [
        "Isolate genomic DNA from forensic sample",
        "Digest DNA with restriction endonucleases",
        "Separate DNA fragments by gel electrophoresis",
        "Transfer fragments to nylon membrane (Southern blotting)",
        "Hybridise using radioactive VNTR probe",
        "Wash off unbound probes and expose to X-ray film",
        "Analyse dark bands by autoradiography"
      ]
    }
  ]
};
