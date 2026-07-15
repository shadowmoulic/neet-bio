/* ================================================================
   CELL CYCLE & CELL DIVISION  ·  NCERT Class 11 Biology (Ch 10)
   Drop-in replacement. Key + id preserved so the app keeps working.
   Modes fed: Study Notes · Flashcards · Active Recall · Quiz Battle
              · Match-Up · Build the Pathway · Boss Battle (uses mcqs)
   ================================================================ */
DATA.chapters['brain_divisionlab01cellcyclehtml'] = {
  id: "brain_divisionlab01cellcyclehtml",
  num: 10,
  title: "Cell Cycle & Cell Division",
  subtitle: "Cell cycle · Interphase · Mitosis · Meiosis · Significance",
  color: "#5B4BD6",
  colorD: "#3E32A0",
  glyph: "🧬",

  notes: [
    {
      id: "cellcycle",
      heading: "The Cell Cycle & Interphase",
      html: `
      <p>The <span class="kw">cell cycle</span> is the ordered sequence of events by which a cell duplicates its genome, synthesises the other constituents of the cell, and eventually divides into two daughter cells. It is a self-controlled, tightly regulated process.</p>
      <p>Human cells in culture divide roughly <b>once every 24 hours</b>. The time varies hugely between organisms — <b>yeast</b> can complete a cycle in about <b>90 minutes</b>.</p>
      <h4>The two broad phases</h4>
      <div class="flow">
        <span class="node">Interphase (&gt;95% of the cycle)</span><span class="arr">→</span><span class="node">M phase (Mitosis, ~1 hr)</span>
      </div>
      <p><b>Interphase</b> is misleadingly called the "resting phase" — the cell is actually extremely busy preparing for division. It is the longest phase and is split into three sub-phases:</p>
      <table class="cmp"><thead><tr><th>Phase</th><th>What happens</th><th>DNA</th></tr></thead><tbody>
        <tr><td><b>G₁ (Gap 1)</b></td><td>Cell is metabolically active, grows continuously, makes RNA &amp; proteins. <span class="kw">No DNA replication.</span></td><td>2C · 2n</td></tr>
        <tr><td><b>S (Synthesis)</b></td><td><span class="kw">DNA replication</span> — DNA amount doubles. In animal cells the <b>centriole</b> also duplicates in the cytoplasm.</td><td>2C→4C · 2n</td></tr>
        <tr><td><b>G₂ (Gap 2)</b></td><td>Proteins (esp. tubulin for spindle) are synthesised; cell grows and gears up for mitosis.</td><td>4C · 2n</td></tr>
      </tbody></table>
      <div class="callout"><b>Key trap:</b> In S phase the <b>amount of DNA doubles (2C → 4C)</b> but the <b>chromosome number stays the same (2n)</b>. Each chromosome now simply has two sister chromatids joined at the centromere.</div>
      <h4>The G₀ (quiescent) phase</h4>
      <p>Cells that do not divide further exit the cycle from <b>G₁</b> and enter <span class="kw">G₀</span>. Such cells remain metabolically active but stop proliferating unless specifically signalled. Examples: <b>heart muscle cells</b> and <b>nerve cells (neurons)</b>.</p>
      `
    },
    {
      id: "mphase",
      heading: "M Phase — Mitosis (Karyokinesis)",
      html: `
      <p>The <b>M phase</b> represents the actual division and consists of two overlapping events: <span class="kw">karyokinesis</span> (division of the nucleus) followed by <span class="kw">cytokinesis</span> (division of the cytoplasm).</p>
      <p>Mitosis is an <b>equational division</b> — the two daughter cells are genetically identical to the parent and to each other, and the chromosome number is conserved (2n → 2n). Karyokinesis has four stages:</p>
      <table class="cmp"><thead><tr><th>Stage</th><th>Key events</th></tr></thead><tbody>
        <tr><td><b>Prophase</b></td><td>Chromatin <b>condenses</b> into compact chromosomes (each = 2 chromatids at a centromere); centrosome (with 2 centrioles) has duplicated and the two move to <b>opposite poles</b>, initiating spindle formation; nuclear envelope, nucleolus, Golgi and ER <b>disappear</b>.</td></tr>
        <tr><td><b>Metaphase</b></td><td>Chromosomes are <b>most condensed</b> and align at the <span class="kw">metaphase plate</span> (equator); spindle fibres attach to the <b>kinetochores</b> on the centromeres.</td></tr>
        <tr><td><b>Anaphase</b></td><td><b>Centromeres split</b>, sister chromatids separate and move as daughter chromosomes toward opposite poles (centromere leading, arms trailing).</td></tr>
        <tr><td><b>Telophase</b></td><td>Chromosomes reach the poles and <b>decondense</b>; nuclear envelope, nucleolus, Golgi and ER <b>reappear</b>; two daughter nuclei form.</td></tr>
      </tbody></table>
      <div class="flow">
        <span class="node">Prophase</span><span class="arr">→</span><span class="node">Metaphase</span><span class="arr">→</span><span class="node">Anaphase</span><span class="arr">→</span><span class="node">Telophase</span><span class="arr">→</span><span class="node">Cytokinesis</span>
      </div>
      <h4>Cytokinesis</h4>
      <table class="cmp"><thead><tr><th>Animal cell</th><th>Plant cell</th></tr></thead><tbody>
        <tr><td>A <b>cleavage furrow</b> appears in the plasma membrane and deepens <span class="kw">outside → inward</span> until the cell pinches in two.</td><td>A <b>cell plate</b> forms in the middle and grows <span class="kw">centre → outward (inside-out)</span> toward the wall, because the rigid cell wall cannot pinch.</td></tr>
      </tbody></table>
      <div class="callout"><b>Syncytium:</b> Sometimes karyokinesis is <b>not</b> followed by cytokinesis, giving a multinucleate cell (a syncytium) — e.g. the <b>liquid endosperm of coconut</b>.</div>
      `
    },
    {
      id: "mitosigni",
      heading: "Significance of Mitosis",
      html: `
      <p>Mitosis is the basis of growth and maintenance of the body. Its biological roles:</p>
      <ul>
        <li><b>Growth</b> of multicellular organisms from a single zygote.</li>
        <li><b>Repair &amp; replacement</b> — worn-out cells of gut lining, blood cells, skin epidermis are constantly replaced.</li>
        <li><b>Restores the nucleo-cytoplasmic ratio</b> — as a cell grows its cytoplasm outpaces the nucleus; division corrects this.</li>
        <li><b>Cell number constancy</b> — chromosome number stays identical in every body cell.</li>
        <li><b>Asexual reproduction</b> in single-celled organisms and <b>vegetative propagation</b> in plants.</li>
      </ul>
      <div class="callout"><b>Where it occurs:</b> Mitosis is typically confined to the <b>diploid somatic cells</b>. In plants it is restricted to the <b>meristematic tissues</b>. (Note: some lower plants &amp; social insects show mitosis in haploid cells too.)</div>
      `
    },
    {
      id: "meiosis1",
      heading: "Meiosis I — The Reductional Division",
      html: `
      <p><b>Meiosis</b> is the division that halves the chromosome number: a diploid cell (2n) gives four <b>haploid (n)</b> cells. It occurs in the <span class="kw">meiocytes</span> (gamete mother cells / germ cells) during gamete or spore formation.</p>
      <h4>The four defining features of meiosis</h4>
      <ul>
        <li>Involves <b>two sequential rounds</b> of nuclear &amp; cell division — <b>Meiosis I</b> and <b>Meiosis II</b> — but only <b>ONE round of DNA replication</b>.</li>
        <li>Meiosis I involves <b>pairing of homologous chromosomes</b> and <b>recombination</b> (crossing over).</li>
        <li><b>Four haploid</b> daughter cells are produced.</li>
        <li>Meiosis I is <b>reductional</b> (2n→n); Meiosis II is <b>equational</b> (n→n).</li>
      </ul>
      <h4>Prophase I — the longest, most eventful stage (5 sub-stages)</h4>
      <table class="cmp"><thead><tr><th>Sub-stage</th><th>Key event</th></tr></thead><tbody>
        <tr><td><b>Leptotene</b></td><td>Chromosomes become gradually visible under the light microscope; they begin to condense.</td></tr>
        <tr><td><b>Zygotene</b></td><td><span class="kw">Synapsis</span> — homologous chromosomes pair, forming a <b>bivalent (tetrad)</b>; the <b>synaptonemal complex</b> forms between them.</td></tr>
        <tr><td><b>Pachytene</b></td><td><span class="kw">Crossing over</span> — exchange of segments between non-sister chromatids at <b>recombination nodules</b>, catalysed by the enzyme <b>recombinase</b>. Bivalents now clearly appear as tetrads.</td></tr>
        <tr><td><b>Diplotene</b></td><td>The synaptonemal complex <b>dissolves</b>; homologues separate slightly but stay joined at <b>chiasmata</b> (X-shaped sites of crossing over).</td></tr>
        <tr><td><b>Diakinesis</b></td><td><b>Terminalisation</b> of chiasmata; chromosomes fully condense; spindle assembles; nucleolus &amp; nuclear envelope disappear — marks the end of Prophase I.</td></tr>
      </tbody></table>
      <h4>Metaphase I → Telophase I</h4>
      <table class="cmp"><thead><tr><th>Stage</th><th>Event</th></tr></thead><tbody>
        <tr><td><b>Metaphase I</b></td><td><b>Bivalents</b> line up at the equator; spindle fibres from opposite poles attach to the paired homologues.</td></tr>
        <tr><td><b>Anaphase I</b></td><td><span class="kw">Homologous chromosomes separate</span> and move to opposite poles — but <b>sister chromatids stay joined</b> at their centromeres. <em>(This is the actual reduction step.)</em></td></tr>
        <tr><td><b>Telophase I</b></td><td>Nuclear membrane &amp; nucleolus reappear; cytokinesis follows giving a <b>dyad</b> of cells.</td></tr>
      </tbody></table>
      <div class="callout"><b>Interkinesis:</b> the short gap between Meiosis I and II. It is generally short-lived and — crucially — has <b>NO DNA replication</b>.</div>
      `
    },
    {
      id: "meiosis2",
      heading: "Meiosis II & Significance of Meiosis",
      html: `
      <p><b>Meiosis II</b> starts immediately after Meiosis I (no S phase in between) and resembles a normal <b>mitosis</b> — an <b>equational</b> division on the already-haploid cells.</p>
      <table class="cmp"><thead><tr><th>Stage</th><th>Event</th></tr></thead><tbody>
        <tr><td><b>Prophase II</b></td><td>Nuclear membrane disappears again; chromosomes condense.</td></tr>
        <tr><td><b>Metaphase II</b></td><td>Chromosomes align at the equator; spindle fibres attach to kinetochores of the two chromatids.</td></tr>
        <tr><td><b>Anaphase II</b></td><td><span class="kw">Centromeres split</span> — sister chromatids finally separate and move to opposite poles.</td></tr>
        <tr><td><b>Telophase II</b></td><td>Two nuclei form at each pole; result overall = <b>four haploid cells</b>.</td></tr>
      </tbody></table>
      <div class="callout"><b>Anaphase I vs Anaphase II — the classic exam trap:</b> Anaphase I → <b>homologous chromosomes</b> separate (chromatids still joined). Anaphase II → <b>sister chromatids</b> separate.</div>
      <h4>Significance of meiosis</h4>
      <ul>
        <li><b>Conserves the chromosome number</b> of a species across sexually reproducing generations (halved in gametes, restored at fertilisation).</li>
        <li>Generates <b>genetic variation</b> — through <b>crossing over</b> (Pachytene) and <b>independent assortment</b> of homologues (Metaphase/Anaphase I).</li>
        <li>This variation is the <b>raw material for evolution</b> and natural selection.</li>
      </ul>
      `
    },
    {
      id: "comparison",
      heading: "Mitosis vs Meiosis + Ploidy Reference",
      html: `
      <table class="cmp"><thead><tr><th>Feature</th><th>Mitosis</th><th>Meiosis</th></tr></thead><tbody>
        <tr><td><b>Where</b></td><td>Somatic cells / meristems</td><td>Meiocytes (germ / spore mother cells)</td></tr>
        <tr><td><b>Divisions</b></td><td>One</td><td>Two (I &amp; II)</td></tr>
        <tr><td><b>DNA replication</b></td><td>Once before division</td><td>Once, before Meiosis I only</td></tr>
        <tr><td><b>Daughter cells</b></td><td><b>2</b></td><td><b>4</b></td></tr>
        <tr><td><b>Ploidy of products</b></td><td>Diploid (2n) — same as parent</td><td>Haploid (n) — halved</td></tr>
        <tr><td><b>Pairing / synapsis</b></td><td>Absent</td><td>Present (Zygotene)</td></tr>
        <tr><td><b>Crossing over</b></td><td>Absent</td><td>Present (Pachytene)</td></tr>
        <tr><td><b>Genetic result</b></td><td>Identical to parent</td><td>Genetically variable</td></tr>
        <tr><td><b>Purpose</b></td><td>Growth, repair, replacement</td><td>Gamete formation, variation</td></tr>
      </tbody></table>
      <h4>DNA content &amp; ploidy through the phases</h4>
      <table class="cmp"><thead><tr><th>Point in time</th><th>DNA (C)</th><th>Chromosome no.</th></tr></thead><tbody>
        <tr><td>G₁</td><td>2C</td><td>2n</td></tr>
        <tr><td>After S / G₂</td><td>4C</td><td>2n</td></tr>
        <tr><td>End of Mitosis (each cell)</td><td>2C</td><td>2n</td></tr>
        <tr><td>End of Meiosis I (each cell)</td><td>2C</td><td>n</td></tr>
        <tr><td>End of Meiosis II (each cell)</td><td>1C</td><td>n</td></tr>
      </tbody></table>
      <div class="callout"><b>Read this carefully:</b> after Meiosis I the DNA is 2C but chromosome number is already <b>n</b> (each chromosome still has 2 chromatids). Only after Meiosis II does DNA fall to 1C. That mismatch is a favourite MCQ.</div>
      `
    }
  ],

  mnemonics: [
    { title: "Order of mitosis", device: "IPMAT → Please Make A Two", expand: [
      { L: "", t: "<em>Interphase, Prophase, Metaphase, Anaphase, Telophase.</em> For the M-phase stages alone: <b>P-M-A-T</b> = 'Please Make A Two' — one cell becomes two." } ] },
    { title: "What each mitosis stage does", device: "Pack · Middle · Apart · Two", expand: [
      { L: "", t: "Prophase = <em>Pack</em> (chromatin condenses), Metaphase = <em>Middle</em> (equator), Anaphase = <em>Apart</em> (chromatids split), Telophase = <em>Two</em> nuclei reform." } ] },
    { title: "Interphase sub-phases", device: "Grow · Sync · Get-ready", expand: [
      { L: "", t: "G1 = <em>Grow</em> (no DNA copy), S = <em>Synthesis</em> (DNA copies, 2C→4C), G2 = <em>Get ready</em>. G0 = paused — alive but not dividing." } ] },
    { title: "Prophase-I sub-stages", device: "Lazy Zebras Pull Down Drapes", expand: [
      { L: "", t: "<em>Leptotene · Zygotene · Pachytene · Diplotene · Diakinesis</em> — the five steps of the longest meiotic stage, in order." } ] },
    { title: "Zygotene vs Pachytene", device: "Zip, then sWaP", expand: [
      { L: "", t: "<em>Zygotene</em> = <b>Zip</b> together (synapsis). <em>Pachytene</em> = swa<b>P</b> segments (crossing over)." } ] },
    { title: "Diplotene = X marks the spot", device: "DipLotene → chiasmata visible", expand: [
      { L: "", t: "In <em>Diplotene</em> the synaptonemal complex dissolves and the <b>chiasmata</b> (X-shapes) finally become visible." } ] },
    { title: "Anaphase I vs II", device: "I = homologues, II = sisters", expand: [
      { L: "", t: "<em>Anaphase I</em>: homologous chromosomes separate (chromatids still joined). <em>Anaphase II</em>: sister chromatids separate. Never mix these up." } ] },
    { title: "Cytokinesis: plant vs animal", device: "Plants Plate, Animals Pinch", expand: [
      { L: "", t: "<em>Plant</em> cells build a cell <b>Plate</b> (centre→out). <em>Animal</em> cells form a cleavage furrow that <b>Pinches</b> inward (out→in)." } ] },
    { title: "Reductional vs Equational", device: "Meiosis-I Reduces, Meiosis-II Equals", expand: [
      { L: "", t: "Meiosis <b>I = Reductional</b> (2n→n, homologues split). Meiosis <b>II = Equational</b> like mitosis (sister chromatids split)." } ] },
    { title: "Two sources of variation", device: "Cross & Assort", expand: [
      { L: "", t: "Variation in meiosis comes from <b>Cross</b>ing over (Pachytene) + independent <b>Assort</b>ment of homologues (Metaphase I)." } ] },
    { title: "S-phase golden rule", device: "DNA doubles, number doesn't", expand: [
      { L: "", t: "In S phase DNA content 2C→4C but chromosome <b>number stays 2n</b>. Doubling ≠ number change." } ] },
    { title: "G0 cells that don't divide", device: "Heart & Head", expand: [
      { L: "", t: "Classic <em>G0 / non-dividing</em> examples: <b>Heart</b> muscle cells and <b>Head</b> = neurons (nerve cells)." } ] }
  ],

  flashcards: [
    { front: "What is the cell cycle?", back: "The ordered sequence of events by which a cell duplicates its genome, synthesises its other constituents, and divides into two daughter cells." },
    { front: "How often does a typical human cell divide?", back: "About once every 24 hours." },
    { front: "How fast can yeast complete a cell cycle?", back: "In about 90 minutes — far faster than human cells." },
    { front: "What are the two broad phases of the cell cycle?", back: "Interphase (the long preparatory phase) and the M phase (mitosis / actual division)." },
    { front: "How much of the cell cycle is interphase?", back: "More than 95%. The M phase itself is short (~1 hour in human cells)." },
    { front: "Why is 'resting phase' a misnomer for interphase?", back: "The cell is actually very active during interphase — growing, making RNA/proteins, and (in S) replicating DNA. It only 'rests' from dividing." },
    { front: "Name the three sub-phases of interphase in order.", back: "G1 → S → G2, after which the cell enters the M phase." },
    { front: "What happens in G1 phase?", back: "The cell is metabolically active and grows continuously, but does NOT replicate its DNA." },
    { front: "What happens in S phase?", back: "DNA replication — DNA content doubles (2C → 4C). In animal cells the centriole also duplicates in the cytoplasm." },
    { front: "Does chromosome number change during S phase?", back: "No. DNA amount doubles but chromosome number stays 2n — each chromosome now has two sister chromatids." },
    { front: "What happens in G2 phase?", back: "Proteins (including tubulin for the spindle) are synthesised and the cell keeps growing as it prepares for mitosis." },
    { front: "What is the G0 (quiescent) phase?", back: "A phase cells enter from G1 when they stop dividing. They stay metabolically active but do not proliferate unless signalled." },
    { front: "Give two examples of cells in G0.", back: "Heart muscle cells and nerve cells (neurons)." },
    { front: "From which phase do cells exit into G0?", back: "From G1 phase." },
    { front: "What is the DNA content and ploidy in G1?", back: "2C DNA, 2n chromosome number." },
    { front: "What are the two events of the M phase?", back: "Karyokinesis (division of the nucleus) followed by cytokinesis (division of the cytoplasm)." },
    { front: "Define karyokinesis and cytokinesis.", back: "Karyokinesis = division of the nucleus. Cytokinesis = division of the cytoplasm/cell body." },
    { front: "Is mitosis equational or reductional?", back: "Equational — chromosome number is conserved (2n → 2n) and daughter cells are genetically identical." },
    { front: "Name the four stages of mitosis in order.", back: "Prophase → Metaphase → Anaphase → Telophase." },
    { front: "Key features of Prophase?", back: "Chromatin condenses into compact chromosomes (each = 2 chromatids at a centromere); centrosomes move to opposite poles forming the spindle; nuclear envelope, nucleolus, ER and Golgi disappear." },
    { front: "What happens to the nuclear envelope during prophase?", back: "It disappears (along with the nucleolus, ER and Golgi complex)." },
    { front: "What is the metaphase plate?", back: "The equatorial plane of the cell where all chromosomes align single-file during metaphase." },
    { front: "Key features of Metaphase?", back: "Chromosomes are most condensed and align at the metaphase plate; spindle fibres attach to the kinetochores on the centromeres." },
    { front: "What is a kinetochore?", back: "A disc-shaped protein structure on the centromere to which spindle fibres attach." },
    { front: "When are chromosomes most condensed?", back: "During metaphase." },
    { front: "Key features of Anaphase?", back: "Centromeres split, sister chromatids separate, and daughter chromosomes move to opposite poles (centromere leading, arms trailing)." },
    { front: "What splits during anaphase (mitosis)?", back: "The centromere of each chromosome splits, freeing the two sister chromatids." },
    { front: "Key features of Telophase?", back: "Chromosomes reach the poles and decondense; nuclear envelope, nucleolus, ER and Golgi reappear; two daughter nuclei form." },
    { front: "What reappears during telophase?", back: "The nuclear envelope, nucleolus, ER and Golgi complex." },
    { front: "What is cytokinesis in an animal cell?", back: "A cleavage furrow forms in the plasma membrane and deepens from the outside inward until the cell splits in two." },
    { front: "What is cytokinesis in a plant cell?", back: "A cell plate forms in the middle and grows outward (inside-out) toward the wall, because the rigid wall cannot pinch." },
    { front: "Why can't a plant cell divide by a cleavage furrow?", back: "Its rigid cell wall cannot pinch inward, so it builds a cell plate from the centre outward instead." },
    { front: "What is a syncytium? Give an example.", back: "A multinucleate cell formed when karyokinesis is not followed by cytokinesis — e.g. the liquid endosperm of coconut." },
    { front: "Where does mitosis occur in plants?", back: "Only in the meristematic tissues." },
    { front: "List the biological significance of mitosis.", back: "Growth, repair/replacement of cells, restoring the nucleo-cytoplasmic ratio, keeping chromosome number constant, and asexual/vegetative reproduction." },
    { front: "What is the nucleo-cytoplasmic ratio and how does mitosis help?", back: "As a cell grows its cytoplasm outpaces the nucleus; mitosis restores the balance between nuclear and cytoplasmic volume." },
    { front: "What is meiosis?", back: "A division involving one round of DNA replication and two sequential divisions, producing four haploid cells from one diploid cell." },
    { front: "Why is meiosis called 'reductional'?", back: "It halves the chromosome number (diploid 2n → haploid n). The full number is restored at fertilisation." },
    { front: "How many daughter cells does meiosis produce, and of what ploidy?", back: "Four cells, all haploid (n)." },
    { front: "How many DNA replications and how many divisions in meiosis?", back: "One DNA replication (before Meiosis I) followed by two divisions (Meiosis I and Meiosis II)." },
    { front: "Where does meiosis occur?", back: "In the meiocytes (gamete/spore mother cells, i.e. germ cells) during gamete or spore formation." },
    { front: "Which meiotic division is reductional and which is equational?", back: "Meiosis I is reductional (2n→n); Meiosis II is equational (n→n, like mitosis)." },
    { front: "Name the five sub-stages of Prophase I in order.", back: "Leptotene → Zygotene → Pachytene → Diplotene → Diakinesis." },
    { front: "What happens in Leptotene?", back: "Chromosomes become gradually visible under the light microscope and begin to condense." },
    { front: "What happens in Zygotene?", back: "Synapsis — homologous chromosomes pair to form bivalents (tetrads); the synaptonemal complex forms between them." },
    { front: "What is synapsis?", back: "The pairing of homologous chromosomes during Zygotene of Prophase I." },
    { front: "What is a synaptonemal complex?", back: "A protein framework that forms between paired homologous chromosomes during synapsis (Zygotene)." },
    { front: "What is a bivalent (tetrad)?", back: "A pair of synapsed homologous chromosomes — it contains four chromatids, hence 'tetrad'." },
    { front: "What happens in Pachytene?", back: "Crossing over — non-sister chromatids of homologues exchange segments at recombination nodules, catalysed by recombinase." },
    { front: "What is crossing over?", back: "The exchange of genetic material (segments) between non-sister chromatids of homologous chromosomes; a key source of variation." },
    { front: "What is a recombination nodule?", back: "The site on the bivalent where crossing over (recombination) occurs; the enzyme recombinase acts here." },
    { front: "Which enzyme mediates crossing over?", back: "Recombinase." },
    { front: "What happens in Diplotene?", back: "The synaptonemal complex dissolves; homologues separate slightly but stay joined at chiasmata (X-shaped crossing-over sites)." },
    { front: "What is a chiasma?", back: "An X-shaped point where non-sister chromatids remain joined after crossing over; becomes visible in Diplotene." },
    { front: "What happens in Diakinesis?", back: "Terminalisation of chiasmata, full condensation of chromosomes, spindle assembly, and disappearance of the nucleolus and nuclear envelope — marking the end of Prophase I." },
    { front: "What is terminalisation?", back: "The movement of chiasmata toward the ends of the chromosomes during Diakinesis." },
    { front: "What happens in Metaphase I?", back: "Bivalents align at the equator; spindle fibres from opposite poles attach to the paired homologous chromosomes." },
    { front: "In Anaphase I, what separates?", back: "Homologous chromosomes separate to opposite poles — but the sister chromatids stay joined at their centromeres." },
    { front: "What happens in Telophase I?", back: "Nuclear membrane and nucleolus reappear; cytokinesis follows to give a dyad of cells." },
    { front: "What is a dyad?", back: "The pair of haploid cells produced at the end of Meiosis I." },
    { front: "What is interkinesis?", back: "The short gap between Meiosis I and Meiosis II. It has NO DNA replication." },
    { front: "Does DNA replication occur in interkinesis?", back: "No — there is no S phase between Meiosis I and Meiosis II." },
    { front: "Meiosis II resembles which division?", back: "A normal mitosis — it is an equational division on the already-haploid cells." },
    { front: "What happens in Anaphase II?", back: "Centromeres split and sister chromatids finally separate, moving to opposite poles." },
    { front: "In Anaphase II, what separates?", back: "Sister chromatids separate (centromeres split)." },
    { front: "What is the final product of meiosis?", back: "Four haploid cells, each genetically different from one another and from the parent." },
    { front: "State the significance of meiosis.", back: "It conserves the species' chromosome number across generations and creates genetic variation via crossing over and independent assortment — the raw material for evolution." },
    { front: "Name the two sources of genetic variation in meiosis.", back: "Crossing over (Pachytene) and independent assortment of homologous chromosomes (Metaphase/Anaphase I)." },
    { front: "What restores the diploid number after meiosis?", back: "Fertilisation — the fusion of two haploid gametes." },
    { front: "Anaphase I vs Anaphase II — the key difference?", back: "Anaphase I: homologous chromosomes separate (chromatids joined). Anaphase II: sister chromatids separate." },
    { front: "Distinguish chromosome, chromatid and centromere.", back: "A chromosome is the whole condensed DNA structure; a chromatid is one of its two identical copies after replication; the centromere is the constricted region joining sister chromatids." },
    { front: "What are homologous chromosomes?", back: "A matching pair of chromosomes (one maternal, one paternal) with the same genes at the same loci, though possibly different alleles." },
    { front: "How many daughter cells: mitosis vs meiosis?", back: "Mitosis → 2 cells; Meiosis → 4 cells." },
    { front: "Ploidy of products: mitosis vs meiosis?", back: "Mitosis → diploid (same as parent); Meiosis → haploid (halved)." },
    { front: "Does crossing over occur in mitosis?", back: "No — synapsis and crossing over are exclusive to Meiosis I." },
    { front: "What is independent assortment?", back: "The random orientation of maternal/paternal homologues at Metaphase I, so each gamete gets a unique mix of chromosomes." },
    { front: "DNA content at end of Meiosis I per cell?", back: "2C DNA but chromosome number is already n (each chromosome still has 2 chromatids)." },
    { front: "DNA content at end of Meiosis II per cell?", back: "1C DNA, n chromosomes." },
    { front: "Which centrosome component duplicates in S phase?", back: "The centriole (in the cytoplasm of animal cells)." },
    { front: "What lines up at the equator in mitotic metaphase vs Metaphase I?", back: "Mitotic metaphase: individual chromosomes. Metaphase I: bivalents (paired homologues)." },
    { front: "Which phase is the longest in the whole cell cycle?", back: "Interphase (>95% of the cycle)." },
    { front: "Which sub-stage of Prophase I is the longest event?", back: "Prophase I itself is the longest phase of meiosis; crossing over occurs in its Pachytene sub-stage." }
  ],

  recall: [
    { q: "Define the cell cycle and name its two broad phases.", hint: "Duplicate + divide.", a: `The <b>cell cycle</b> is the ordered sequence of events by which a cell duplicates its genome, synthesises its other constituents and divides into two. Its two phases are <b>Interphase</b> (long, preparatory) and the <b>M phase</b> (actual division).` },
    { q: "Describe what happens in each of G1, S and G2, including DNA content.", hint: "Grow, copy, get-ready.", a: `<b>G1:</b> active growth, RNA/protein synthesis, NO DNA replication (2C). <b>S:</b> DNA replication, content doubles 2C→4C, centriole duplicates in animal cells. <b>G2:</b> protein/tubulin synthesis, growth, prepares for mitosis (4C). Chromosome number stays 2n throughout.` },
    { q: "What is the G0 phase and which cells typically enter it?", hint: "Alive but paused.", a: `<b>G0 (quiescent stage)</b> is entered from G1 by cells that stop dividing. They remain metabolically active but do not proliferate unless signalled. Examples: <b>heart muscle cells</b> and <b>neurons</b>.` },
    { q: "Explain why S phase doubles DNA but not chromosome number.", hint: "Two chromatids, one centromere.", a: `In S phase each chromosome is replicated, so DNA content goes 2C→4C. But the two copies (sister chromatids) stay joined at a single <b>centromere</b> and are still counted as <b>one chromosome</b> — so number remains 2n.` },
    { q: "Distinguish karyokinesis from cytokinesis.", hint: "Nucleus vs cytoplasm.", a: `<b>Karyokinesis</b> = division of the nucleus (the four stages P-M-A-T). <b>Cytokinesis</b> = division of the cytoplasm/cell body that follows, physically splitting the cell in two.` },
    { q: "Describe the events of Prophase (mitosis).", hint: "Condense + spindle + disappear.", a: `Chromatin <b>condenses</b> into compact chromosomes (each = 2 chromatids at a centromere); the duplicated <b>centrosomes move to opposite poles</b> and initiate the spindle; the <b>nuclear envelope, nucleolus, ER and Golgi disappear</b>.` },
    { q: "What defines Metaphase, and what is the role of the kinetochore?", hint: "Equator + attachment.", a: `Chromosomes are <b>most condensed</b> and align at the <b>metaphase plate</b> (equator). Spindle fibres attach to the <b>kinetochore</b> — a protein disc on the centromere — which is the anchoring point that later pulls chromatids apart.` },
    { q: "Explain what happens in Anaphase and Telophase of mitosis.", hint: "Split then rebuild.", a: `<b>Anaphase:</b> centromeres split, sister chromatids separate and move as daughter chromosomes to opposite poles. <b>Telophase:</b> chromosomes decondense at the poles and the nuclear envelope, nucleolus, ER and Golgi reappear, forming two nuclei.` },
    { q: "Compare cytokinesis in plant and animal cells.", hint: "Plate vs furrow.", a: `<b>Animal:</b> a <b>cleavage furrow</b> pinches the membrane from outside inward. <b>Plant:</b> a <b>cell plate</b> forms in the centre and grows outward (inside-out), because the rigid wall cannot pinch.` },
    { q: "What is a syncytium and how does it arise? Give an example.", hint: "Nucleus divides, cell doesn't.", a: `A <b>syncytium</b> is a multinucleate cell that forms when <b>karyokinesis is not followed by cytokinesis</b>. Example: the <b>liquid endosperm of coconut</b>.` },
    { q: "List the biological significance of mitosis.", hint: "GROWTH + repair.", a: `Growth of the organism, repair and replacement of worn-out cells (gut, blood, skin), restoration of the <b>nucleo-cytoplasmic ratio</b>, maintenance of a constant chromosome number, and asexual/vegetative reproduction.` },
    { q: "Where is mitosis normally restricted in plants, and in the body generally?", hint: "Meristem / somatic.", a: `In plants mitosis is confined to the <b>meristematic tissues</b>. In general it occurs in the <b>diploid somatic cells</b> of the body (some lower plants/organisms also show it in haploid cells).` },
    { q: "Define meiosis and state its four defining features.", hint: "Two divisions, one replication.", a: `<b>Meiosis</b> halves the chromosome number (2n→n) giving four haploid cells. Features: (1) two sequential divisions but only <b>one DNA replication</b>; (2) pairing of homologues + recombination; (3) <b>four haploid</b> products; (4) Meiosis I reductional, Meiosis II equational.` },
    { q: "Name the five sub-stages of Prophase I and the single defining event of each.", hint: "Lazy Zebras...", a: `<b>Leptotene</b> — chromosomes become visible; <b>Zygotene</b> — synapsis (synaptonemal complex); <b>Pachytene</b> — crossing over; <b>Diplotene</b> — synaptonemal complex dissolves, chiasmata visible; <b>Diakinesis</b> — terminalisation, NE & nucleolus disappear.` },
    { q: "Explain synapsis and the synaptonemal complex.", hint: "Zygotene.", a: `<b>Synapsis</b> is the point-by-point pairing of homologous chromosomes in Zygotene. The <b>synaptonemal complex</b> is the protein framework that assembles between the paired homologues, holding them together as a bivalent (tetrad).` },
    { q: "Describe crossing over: where, when, and by which enzyme.", hint: "Pachytene nodules.", a: `<b>Crossing over</b> is the exchange of segments between <b>non-sister chromatids</b> of homologous chromosomes. It occurs in <b>Pachytene</b> at <b>recombination nodules</b> and is catalysed by <b>recombinase</b>. It is a major source of genetic variation.` },
    { q: "What are chiasmata, when do they become visible, and what is terminalisation?", hint: "X-shapes.", a: `<b>Chiasmata</b> are X-shaped points where non-sister chromatids stay joined after crossing over; they become visible in <b>Diplotene</b>. <b>Terminalisation</b> (in Diakinesis) is their movement toward the chromosome ends.` },
    { q: "Contrast Anaphase I with Anaphase II.", hint: "Homologues vs sisters.", a: `<b>Anaphase I:</b> homologous chromosomes separate to opposite poles while sister chromatids remain joined (the reductional step). <b>Anaphase II:</b> centromeres split and sister chromatids finally separate.` },
    { q: "What is interkinesis and why is it important that it lacks an S phase?", hint: "No copying.", a: `<b>Interkinesis</b> is the short gap between Meiosis I and II. Because there is <b>no DNA replication</b>, the DNA is not doubled again — this is why the final products are truly haploid with reduced DNA (1C).` },
    { q: "Why is Meiosis II described as being 'like mitosis'?", hint: "Equational.", a: `Meiosis II is an <b>equational division</b> — it separates sister chromatids (centromere splits in Anaphase II) exactly as mitosis does, but it acts on cells that are already <b>haploid</b>.` },
    { q: "State the significance of meiosis in three points.", hint: "Constancy + variation + evolution.", a: `(1) It <b>conserves the chromosome number</b> of the species across generations (halved in gametes, restored at fertilisation). (2) It creates <b>genetic variation</b> through crossing over and independent assortment. (3) This variation is the <b>raw material for evolution</b>.` },
    { q: "Explain how meiosis generates genetic variation.", hint: "Two mechanisms.", a: `Two independent mechanisms: <b>crossing over</b> (exchange of segments between homologues in Pachytene) and <b>independent assortment</b> (random maternal/paternal orientation of homologues at Metaphase I), which together give each gamete a unique genetic combination.` },
    { q: "Compare mitosis and meiosis on: number of divisions, daughter cells, ploidy, and crossing over.", hint: "Table it.", a: `<b>Divisions:</b> mitosis 1, meiosis 2. <b>Daughter cells:</b> 2 vs 4. <b>Ploidy of products:</b> diploid (same) vs haploid (halved). <b>Crossing over:</b> absent in mitosis, present in Meiosis I.` },
    { q: "Track DNA content (C) and chromosome number (n) from G1 through the end of meiosis.", hint: "2C/2n start.", a: `G1: 2C, 2n → after S/G2: 4C, 2n → end of Meiosis I: 2C, <b>n</b> (chromatids still joined) → end of Meiosis II: 1C, n. The mismatch after Meiosis I (2C but n) is the classic trap.` },
    { q: "What distinguishes the alignment at mitotic metaphase from Metaphase I of meiosis?", hint: "Singles vs pairs.", a: `At <b>mitotic metaphase</b> individual chromosomes line up single-file at the equator. At <b>Metaphase I</b> it is the <b>bivalents</b> (paired homologues) that align, with spindle fibres attaching to the paired homologues.` },
    { q: "Define homologous chromosomes and explain why they matter in meiosis.", hint: "Maternal + paternal.", a: `<b>Homologous chromosomes</b> are a matching maternal-paternal pair carrying the same genes at the same loci (possibly different alleles). Their pairing and separation in Meiosis I is what halves the chromosome number and, via crossing over, generates variation.` },
    { q: "Why is interphase called the resting phase, and is the term accurate?", hint: "Busy, not idle.", a: `It is called 'resting' only because the cell is not visibly dividing. The term is <b>inaccurate</b> — the cell is highly active, growing and synthesising RNA, proteins and (in S) replicating DNA.` },
    { q: "In which cell types and tissues does meiosis take place?", hint: "Meiocytes.", a: `Meiosis occurs in the <b>meiocytes</b> — the gamete/spore mother cells (germ cells) — during the formation of gametes (in animals) or spores (in plants), converting diploid cells to haploid.` },
    { q: "Describe the four stages of Meiosis II.", hint: "Mitosis-like.", a: `<b>Prophase II:</b> nuclear membrane disappears, chromosomes condense. <b>Metaphase II:</b> chromosomes align at equator, spindle attaches to chromatid kinetochores. <b>Anaphase II:</b> centromeres split, chromatids separate. <b>Telophase II:</b> nuclei reform — final total = 4 haploid cells.` },
    { q: "What is the nucleo-cytoplasmic ratio and how is it linked to the need for cell division?", hint: "Volume balance.", a: `It is the ratio of nuclear volume to cytoplasmic volume. As a cell grows, cytoplasm increases faster than the nucleus can service it; <b>mitosis restores the ratio</b> by producing smaller cells each with a proportionate nucleus.` },
    { q: "Explain why a defect in the enzyme recombinase would reduce genetic variation.", hint: "Application.", a: `Recombinase catalyses <b>crossing over</b> at recombination nodules in Pachytene. Without it, non-sister chromatids could not exchange segments, so one of the two major sources of variation would be lost — gametes would carry only parental (non-recombinant) chromosome combinations.` },
    { q: "A cell has 4C DNA and 2n chromosomes. Which phase(s) could it be in, and why?", hint: "Post-S.", a: `It has replicated its DNA (4C) but not yet reduced number (2n), so it is in <b>G2</b>, or in <b>Prophase/Metaphase/early Anaphase of mitosis</b> — any point after S but before the centromeres split and chromatids are counted as separate chromosomes.` },
    { q: "Why must gametes be haploid for sexual reproduction to work?", hint: "Fertilisation math.", a: `If gametes were diploid, fertilisation would double the chromosome number every generation. Meiosis halves it to <b>n</b> so that fusion of two gametes at fertilisation restores exactly the species' diploid number (2n).` },
    { q: "Distinguish a bivalent, a chiasma and a recombination nodule.", hint: "Structure vs site vs point.", a: `A <b>bivalent (tetrad)</b> is a pair of synapsed homologues (4 chromatids). A <b>recombination nodule</b> is the site on the bivalent where crossing over occurs. A <b>chiasma</b> is the visible X-shaped junction that remains after crossing over.` },
    { q: "What would happen if cytokinesis repeatedly failed after karyokinesis?", hint: "Multinucleate.", a: `You would get a <b>syncytium</b> — a single large cell containing many nuclei (like coconut's liquid endosperm), because nuclei keep dividing but the cytoplasm is never partitioned.` },
    { q: "Order the disappearance and reappearance of the nuclear envelope across mitosis.", hint: "Prophase vs Telophase.", a: `The nuclear envelope (with nucleolus, ER, Golgi) <b>disappears in Prophase</b> and <b>reappears in Telophase</b>. Between them (Metaphase, Anaphase) the chromosomes are exposed to the cytoplasm and manipulated by the spindle.` },
    { q: "Which specific meiotic events occur in Prophase I and would be absent from any mitotic prophase?", hint: "Pairing + swapping.", a: `<b>Synapsis</b> (pairing of homologues, Zygotene), <b>synaptonemal complex</b> formation, <b>crossing over</b> (Pachytene), and <b>chiasmata</b> (Diplotene) — none of these occur in mitosis.` },
    { q: "Explain the statement: 'Meiosis I is reductional, Meiosis II is equational.'", hint: "What each halves/keeps.", a: `<b>Meiosis I</b> reduces chromosome number 2n→n by separating homologues (reductional). <b>Meiosis II</b> keeps number constant (n→n) by separating sister chromatids — like mitosis (equational).` },
    { q: "How many chromatids are present in a tetrad, and why is that name used?", hint: "Four.", a: `A tetrad has <b>four</b> chromatids — two homologous chromosomes each contributing two sister chromatids. 'Tetra' = four, hence tetrad; it is another name for a bivalent.` },
    { q: "Why is the M phase short compared with interphase, despite being the most dramatic part?", hint: "Prep vs act.", a: `Almost all the preparation — growth, DNA replication, protein synthesis — is front-loaded into interphase (>95% of the cycle). By the time M phase begins, everything is ready, so the physical division itself takes only about an hour.` },
    { q: "Give the phase where each occurs: DNA replication, synapsis, crossing over, centromere splitting (meiosis).", hint: "Map them.", a: `DNA replication → <b>S phase</b>; synapsis → <b>Zygotene (Prophase I)</b>; crossing over → <b>Pachytene (Prophase I)</b>; centromere splitting → <b>Anaphase II</b> (in Anaphase I homologues separate, not chromatids).` },
    { q: "What is a dyad and how does it relate to the tetrad and the final gametes?", hint: "Two then four.", a: `A <b>dyad</b> is the pair of haploid cells at the end of Meiosis I (each still with 2-chromatid chromosomes). Each dyad cell then undergoes Meiosis II, so the two cells become <b>four</b> — the eventual haploid products.` },
    { q: "Why does the chromosome number effectively halve at the end of Meiosis I even though DNA is still 2C?", hint: "Counting rule.", a: `In Anaphase I whole homologues are pulled apart, so each daughter cell receives only <b>one member of each pair</b> → number is now <b>n</b>. But because each chromosome still carries 2 sister chromatids, the DNA content is still 2C until Meiosis II separates them.` },
    { q: "Summarise the roles of the centromere across the cell cycle.", hint: "Join + attach + release.", a: `The <b>centromere</b> joins sister chromatids after replication, carries the <b>kinetochore</b> for spindle attachment, and its splitting is what releases chromatids to opposite poles in Anaphase (mitosis / Meiosis II).` },
    { q: "If a species has 2n = 24, how many chromosomes are in each cell after mitosis, after Meiosis I, and after Meiosis II?", hint: "Do the math.", a: `After <b>mitosis</b>: 24 (2n, unchanged). After <b>Meiosis I</b>: 12 (n, but each still 2-chromatid). After <b>Meiosis II</b>: 12 (n, single chromatids). Number halves at Meiosis I; DNA per chromosome halves at Meiosis II.` },
    { q: "Why is meiotic variation considered the raw material for evolution?", hint: "Selection needs differences.", a: `Evolution by natural selection requires <b>heritable differences</b> among individuals. Meiosis manufactures these differences (via crossing over + independent assortment) so that offspring are genetically varied, giving selection something to act upon.` },
    { q: "List everything that disappears in Prophase and everything that reappears in Telophase.", hint: "Same four things.", a: `Disappear in Prophase: <b>nuclear envelope, nucleolus, Golgi complex and ER</b>. The same four <b>reappear in Telophase</b>. Meanwhile the spindle forms in Prophase and breaks down by Telophase.` },
    { q: "Explain the difference between a chromosome and a chromatid using S phase as the reference point.", hint: "Before vs after.", a: `Before S phase a chromosome is a single DNA thread. After S phase it consists of <b>two identical sister chromatids</b> joined at the centromere — still one chromosome, now made of two chromatids, until the centromere splits.` },
    { q: "Why can't Meiosis produce identical daughter cells like mitosis does?", hint: "Pairing + swapping + assortment.", a: `Because Meiosis I involves <b>crossing over</b> (segment exchange) and <b>independent assortment</b> of homologues, each product ends up with a unique recombined chromosome set — so the four cells are genetically different from each other and the parent.` },
    { q: "State the fate of the centrosome/centriole through interphase and mitosis.", hint: "Duplicate then separate.", a: `The <b>centriole duplicates in S phase</b>. In Prophase the two centrosomes <b>move to opposite poles</b> and organise the spindle; each daughter cell inherits one centrosome after division.` },
    { q: "Why is interphase, not M phase, the phase most relevant to cell-cycle regulation and cancer?", hint: "Checkpoints + replication.", a: `Interphase is where the cell grows, replicates DNA (S) and passes key decision points about whether to divide. Faults in these controls (e.g. unchecked passage from G1) drive uncontrolled proliferation — the hallmark of cancer.` }
  ],

  mcqs: [
    { q: "Roughly what fraction of the cell cycle is interphase?", o: ["About 5%", "About half", "About 75%", "More than 95%"], c: 3, e: "Interphase is the long preparatory phase; the M phase is comparatively brief (~1 hr in human cells)." },
    { q: "A typical human cell in culture divides approximately once every:", o: ["90 minutes", "6 hours", "24 hours", "7 days"], c: 2, e: "Human cells ~24 h; yeast is the fast one at ~90 min." },
    { q: "Yeast can complete its cell cycle in about:", o: ["90 minutes", "24 hours", "12 hours", "3 hours"], c: 0, e: "Yeast divides roughly every 90 minutes." },
    { q: "In which phase does DNA replication occur?", o: ["G1 phase", "S phase", "G2 phase", "M phase"], c: 1, e: "S = Synthesis; DNA content doubles from 2C to 4C." },
    { q: "During S phase, the chromosome number:", o: ["doubles", "halves", "stays the same", "triples"], c: 2, e: "DNA amount doubles, but each chromosome simply gains a second chromatid — number is unchanged." },
    { q: "During S phase the DNA content of the cell changes from:", o: ["4C to 2C", "2C to 4C", "1C to 2C", "2C to 1C"], c: 1, e: "Replication doubles DNA: 2C → 4C." },
    { q: "In which phase is the cell metabolically active and growing but NOT replicating DNA?", o: ["S", "G2", "G1", "M"], c: 2, e: "G1 = growth without DNA replication." },
    { q: "Proteins and tubulin needed for the spindle are chiefly synthesised in:", o: ["G1", "S", "G2", "Telophase"], c: 2, e: "G2 prepares the cell for mitosis, including spindle proteins." },
    { q: "Which phase do cells enter when they permanently stop dividing?", o: ["G2", "S", "G0", "Prophase"], c: 2, e: "G0 is the quiescent stage; cells exit from G1." },
    { q: "Cells exit the cell cycle into G0 from which phase?", o: ["G2", "S", "M", "G1"], c: 3, e: "G0 is entered from G1." },
    { q: "Which of these is a classic example of a cell in G0?", o: ["Skin epidermal cell", "Bone marrow stem cell", "Heart muscle cell", "Intestinal crypt cell"], c: 2, e: "Heart muscle cells and neurons typify G0 (non-dividing but active)." },
    { q: "In animal cells, the centriole duplicates during:", o: ["G1", "S phase", "Prophase", "Anaphase"], c: 1, e: "Centriole duplication happens in S phase, in the cytoplasm." },
    { q: "The M phase consists of:", o: ["Only karyokinesis", "Only cytokinesis", "Karyokinesis then cytokinesis", "S phase then G2"], c: 2, e: "M phase = nuclear division (karyokinesis) followed by cytoplasmic division (cytokinesis)." },
    { q: "Mitosis is best described as a(n):", o: ["Reductional division", "Equational division", "Haploid division", "Multiple fission"], c: 1, e: "Mitosis is equational — number conserved, daughters identical." },
    { q: "What is the correct order of mitosis stages?", o: ["Prophase, Anaphase, Metaphase, Telophase", "Prophase, Metaphase, Anaphase, Telophase", "Metaphase, Prophase, Telophase, Anaphase", "Telophase, Anaphase, Metaphase, Prophase"], c: 1, e: "PMAT — 'Please Make A Two'." },
    { q: "During prophase, which structure disappears?", o: ["Spindle fibres", "Nuclear envelope", "Chromosomes", "Centromere"], c: 1, e: "Nuclear envelope, nucleolus, ER and Golgi disappear in prophase." },
    { q: "Chromosomes line up at the equator during:", o: ["Prophase", "Metaphase", "Anaphase", "Telophase"], c: 1, e: "Metaphase = Middle; they are also most condensed here." },
    { q: "Spindle fibres attach to chromosomes at the:", o: ["Telomere", "Kinetochore", "Nucleolus", "Cell plate"], c: 1, e: "The kinetochore is the protein disc on the centromere where spindle fibres attach." },
    { q: "Chromosomes are most highly condensed during:", o: ["Prophase", "Metaphase", "Anaphase", "Interphase"], c: 1, e: "Maximum condensation occurs at metaphase." },
    { q: "Centromeres split and sister chromatids separate during:", o: ["Prophase", "Metaphase", "Anaphase", "Telophase"], c: 2, e: "Anaphase = Apart; centromeres split." },
    { q: "In anaphase, chromosomes move to the poles:", o: ["Arms first", "Centromere first", "Randomly", "In pairs"], c: 1, e: "Daughter chromosomes move centromere-leading, arms trailing." },
    { q: "The nuclear envelope and nucleolus reappear during:", o: ["Prophase", "Metaphase", "Anaphase", "Telophase"], c: 3, e: "Telophase reverses prophase — envelope, nucleolus, ER, Golgi return." },
    { q: "Cytokinesis in an animal cell occurs by:", o: ["Cell plate formation", "Cleavage furrow", "Cell wall deposition", "Budding only"], c: 1, e: "A cleavage furrow pinches the membrane from outside inward." },
    { q: "Cytokinesis in a plant cell occurs by:", o: ["Cleavage furrow", "Cell plate formation", "Pinching of membrane", "Fragmentation"], c: 1, e: "A cell plate grows from the centre outward, since the rigid wall can't pinch." },
    { q: "The plant cell plate forms and grows:", o: ["Outside → inward", "Centre → outward (inside-out)", "Top → bottom", "Randomly"], c: 1, e: "Cell plate grows centrifugally from the middle toward the wall." },
    { q: "A multinucleate cell formed when karyokinesis is not followed by cytokinesis is called a:", o: ["Zygote", "Syncytium", "Gamete", "Meiocyte"], c: 1, e: "That's a syncytium — e.g. coconut's liquid endosperm." },
    { q: "The liquid endosperm of coconut is an example of a:", o: ["Haploid tissue", "Syncytium", "Meristem", "Callus"], c: 1, e: "It is a free-nuclear (syncytial) tissue." },
    { q: "In plants, mitosis is normally restricted to:", o: ["Cortex", "Meristematic tissues", "Phloem", "Epidermis only"], c: 1, e: "Meristems are the sites of mitotic division in plants." },
    { q: "Which is NOT a significance of mitosis?", o: ["Growth", "Repair of tissues", "Genetic variation", "Restoring nucleo-cytoplasmic ratio"], c: 2, e: "Variation is a feature of meiosis, not mitosis (mitosis gives identical cells)." },
    { q: "Mitosis restores the balance between which two volumes?", o: ["Water and solute", "Nuclear and cytoplasmic", "Vacuole and cytosol", "ER and Golgi"], c: 1, e: "It restores the nucleo-cytoplasmic ratio." },
    { q: "Meiosis produces how many daughter cells?", o: ["Two", "Three", "Four", "Eight"], c: 2, e: "Four haploid cells result from meiosis." },
    { q: "The daughter cells of meiosis are:", o: ["Diploid and identical", "Haploid and identical", "Haploid and variable", "Diploid and variable"], c: 2, e: "Four haploid, genetically variable cells." },
    { q: "How many rounds of DNA replication occur in meiosis?", o: ["One", "Two", "Three", "Zero"], c: 0, e: "One replication (before Meiosis I), followed by two divisions." },
    { q: "Meiosis occurs in the:", o: ["Somatic cells", "Meiocytes (germ cells)", "Meristem", "Cork cambium"], c: 1, e: "Meiosis is confined to meiocytes/gamete mother cells." },
    { q: "Which division is reductional?", o: ["Mitosis", "Meiosis I", "Meiosis II", "Amitosis"], c: 1, e: "Meiosis I halves the chromosome number (reductional)." },
    { q: "Which division is equational and mitosis-like?", o: ["Meiosis I", "Meiosis II", "Both I and II", "Neither"], c: 1, e: "Meiosis II separates sister chromatids like mitosis (equational)." },
    { q: "The correct order of Prophase I sub-stages is:", o: ["Zygotene, Leptotene, Pachytene, Diplotene, Diakinesis", "Leptotene, Zygotene, Pachytene, Diplotene, Diakinesis", "Leptotene, Pachytene, Zygotene, Diakinesis, Diplotene", "Diakinesis, Diplotene, Pachytene, Zygotene, Leptotene"], c: 1, e: "Lazy Zebras Pull Down Drapes." },
    { q: "Synapsis of homologous chromosomes occurs in:", o: ["Leptotene", "Zygotene", "Pachytene", "Diplotene"], c: 1, e: "Zygotene = zip together (synapsis)." },
    { q: "The synaptonemal complex forms during:", o: ["Leptotene", "Zygotene", "Diakinesis", "Metaphase I"], c: 1, e: "It assembles between paired homologues in Zygotene." },
    { q: "A pair of synapsed homologous chromosomes is called a:", o: ["Centromere", "Bivalent (tetrad)", "Chiasma", "Spindle"], c: 1, e: "A bivalent, also called a tetrad (four chromatids)." },
    { q: "Crossing over takes place during:", o: ["Leptotene", "Zygotene", "Pachytene", "Diplotene"], c: 2, e: "Pachytene = swap; crossing over at recombination nodules." },
    { q: "Crossing over occurs between:", o: ["Sister chromatids", "Non-sister chromatids of homologues", "Two centromeres", "Two spindles"], c: 1, e: "Segments are exchanged between non-sister chromatids." },
    { q: "The enzyme that mediates crossing over is:", o: ["Ligase", "Recombinase", "Helicase", "Polymerase"], c: 1, e: "Recombinase acts at the recombination nodule." },
    { q: "Recombination nodules appear on the bivalent during:", o: ["Leptotene", "Pachytene", "Diplotene", "Diakinesis"], c: 1, e: "Recombination nodules are sites of crossing over in Pachytene." },
    { q: "The synaptonemal complex dissolves and chiasmata become visible in:", o: ["Zygotene", "Pachytene", "Diplotene", "Diakinesis"], c: 2, e: "Diplotene — chiasmata (X-shapes) appear." },
    { q: "Chiasmata are:", o: ["Sites of DNA replication", "X-shaped sites of crossing over", "Protein discs on centromeres", "Spindle attachment points"], c: 1, e: "They mark where non-sister chromatids stay joined after crossing over." },
    { q: "Terminalisation of chiasmata occurs in:", o: ["Diplotene", "Diakinesis", "Metaphase I", "Anaphase I"], c: 1, e: "Chiasmata move to the chromosome ends in Diakinesis." },
    { q: "The end of Prophase I is marked by:", o: ["DNA replication", "Disappearance of nucleolus and nuclear envelope", "Formation of cell plate", "Cytokinesis"], c: 1, e: "Diakinesis ends Prophase I as the nucleolus and NE disappear and the spindle assembles." },
    { q: "Bivalents (not single chromosomes) align at the equator during:", o: ["Mitotic metaphase", "Metaphase I", "Metaphase II", "Anaphase I"], c: 1, e: "In Metaphase I the paired homologues (bivalents) line up." },
    { q: "In Anaphase I, what separates?", o: ["Sister chromatids", "Homologous chromosomes", "Centrioles only", "Nucleoli"], c: 1, e: "Homologues separate; sister chromatids stay joined — the reductional step." },
    { q: "In Anaphase I, the sister chromatids:", o: ["Separate completely", "Remain joined at their centromeres", "Disappear", "Fuse together"], c: 1, e: "They stay attached; only homologues move apart in Anaphase I." },
    { q: "The pair of cells produced at the end of Meiosis I is called a:", o: ["Tetrad", "Dyad", "Bivalent", "Zygote"], c: 1, e: "Meiosis I gives a dyad of haploid cells." },
    { q: "Interkinesis is characterised by:", o: ["DNA replication", "No DNA replication", "Crossing over", "Synapsis"], c: 1, e: "The gap between Meiosis I and II has NO S phase." },
    { q: "In Anaphase II, what separates?", o: ["Homologous chromosomes", "Bivalents", "Sister chromatids", "Nucleoli"], c: 2, e: "Centromeres split and sister chromatids separate in Anaphase II." },
    { q: "The overall product of meiosis is:", o: ["2 diploid cells", "4 diploid cells", "4 haploid cells", "2 haploid cells"], c: 2, e: "Four haploid cells from one diploid meiocyte." },
    { q: "Which is a source of genetic variation in meiosis?", o: ["Cleavage furrow", "Crossing over", "Nucleolus reformation", "Cell plate formation"], c: 1, e: "Crossing over (and independent assortment) generate variation." },
    { q: "Independent assortment of homologues occurs at:", o: ["Metaphase I", "Telophase II", "S phase", "G0"], c: 0, e: "Random maternal/paternal orientation of bivalents at Metaphase I." },
    { q: "The chromosome number of a species is restored after meiosis by:", o: ["Mitosis", "Fertilisation", "Interkinesis", "Cytokinesis"], c: 1, e: "Fusion of two haploid gametes at fertilisation restores 2n." },
    { q: "Which event does NOT occur in mitosis?", o: ["Spindle formation", "Centromere splitting", "Synapsis", "Chromosome condensation"], c: 2, e: "Synapsis (and crossing over) are exclusive to Meiosis I." },
    { q: "At the end of Meiosis I, each cell has:", o: ["2C DNA and n chromosomes", "4C DNA and 2n chromosomes", "1C DNA and n chromosomes", "2C DNA and 2n chromosomes"], c: 0, e: "Number is already n but DNA is still 2C (chromatids joined)." },
    { q: "At the end of Meiosis II, each cell has:", o: ["2C, 2n", "1C, n", "4C, 2n", "2C, n"], c: 1, e: "1C DNA, n chromosomes — fully haploid." },
    { q: "Homologous chromosomes carry:", o: ["Different genes at different loci", "Same genes at same loci", "Only maternal alleles", "No genes"], c: 1, e: "They match gene-for-gene at the same loci (alleles may differ)." },
    { q: "The longest phase of the entire cell cycle is:", o: ["Prophase", "Interphase", "Metaphase", "Telophase"], c: 1, e: "Interphase occupies >95% of the cycle." },
    { q: "The longest phase of meiosis is:", o: ["Metaphase I", "Prophase I", "Anaphase II", "Telophase II"], c: 1, e: "Prophase I (with its five sub-stages) is the longest." },
    { q: "Number of daughter cells and ploidy from mitosis:", o: ["4, haploid", "2, diploid", "2, haploid", "4, diploid"], c: 1, e: "Mitosis → 2 diploid cells." },
    { q: "Which lines up at the metaphase plate in a normal mitotic metaphase?", o: ["Bivalents", "Individual chromosomes", "Tetrads", "Homologue pairs"], c: 1, e: "Individual chromosomes align single-file in mitosis." },
    { q: "Cell plate formation is associated with:", o: ["Animal cytokinesis", "Plant cytokinesis", "Karyokinesis", "Interphase"], c: 1, e: "Plant cells build a cell plate; animals use a furrow." },
    { q: "The reduction in chromosome number in meiosis actually happens at:", o: ["Anaphase II", "Anaphase I", "Metaphase II", "Telophase II"], c: 1, e: "Anaphase I separates homologues → number becomes n." },
    { q: "Which of the following is TRUE of Meiosis II?", o: ["Involves synapsis", "Involves crossing over", "Separates sister chromatids", "Is preceded by DNA replication"], c: 2, e: "Meiosis II is mitosis-like and separates chromatids; no replication before it." },
    { q: "A tetrad contains how many chromatids?", o: ["Two", "Three", "Four", "Eight"], c: 2, e: "Two homologues × two chromatids = four (hence 'tetrad')." },
    { q: "Which structure joins sister chromatids?", o: ["Kinetochore", "Centromere", "Chiasma", "Spindle pole"], c: 1, e: "The centromere holds sister chromatids together." },
    { q: "Assertion: DNA content doubles in S phase. Reason: The chromosome number also doubles in S phase.", o: ["Both true, Reason explains Assertion", "Both true, Reason does not explain Assertion", "Assertion true, Reason false", "Both false"], c: 2, e: "DNA doubles (true) but chromosome NUMBER does not change in S phase (Reason false)." },
    { q: "Assertion: Meiosis I is reductional. Reason: Homologous chromosomes separate in Anaphase I.", o: ["Both true, Reason explains Assertion", "Both true, Reason does not explain Assertion", "Assertion true, Reason false", "Both false"], c: 0, e: "Separation of homologues is exactly why Meiosis I halves the number." },
    { q: "Assertion: Interphase is called the resting phase. Reason: The cell is metabolically inactive during interphase.", o: ["Both true, Reason explains Assertion", "Assertion true, Reason false", "Assertion false, Reason true", "Both false"], c: 1, e: "The name is traditional, but the cell is highly active — so the Reason is false." },
    { q: "If a cell shows 4C DNA and 2n chromosomes, it is most likely in:", o: ["G1", "Early S", "G2 or mitotic prophase/metaphase", "End of meiosis II"], c: 2, e: "Post-replication (4C) but pre-reduction (2n) fits G2 or mitotic prophase/metaphase." },
    { q: "A species with 2n = 24 will have how many chromosomes per cell after Meiosis I?", o: ["24", "12", "48", "6"], c: 1, e: "Anaphase I halves the number: 24 → 12 (each still 2-chromatid)." },
    { q: "Which sequence correctly pairs the stage with its event?", o: ["Zygotene – crossing over", "Pachytene – synapsis", "Diplotene – chiasmata visible", "Diakinesis – synaptonemal complex forms"], c: 2, e: "Diplotene is when the chiasmata become visible; the others are mismatched." },
    { q: "A drug that blocks recombinase would most directly reduce:", o: ["DNA replication", "Genetic variation via crossing over", "Cleavage furrow formation", "Spindle assembly"], c: 1, e: "Recombinase enables crossing over, a key source of variation." },
    { q: "In which of these is the nuclear envelope present?", o: ["Metaphase", "Anaphase", "Interphase", "Prophase (late)"], c: 2, e: "The envelope is intact during interphase; it breaks down by prophase." },
    { q: "The dyad of cells is directly converted into a tetrad of cells by:", o: ["Meiosis I", "Meiosis II", "Mitosis", "Cytokinesis of G2"], c: 1, e: "Each dyad cell divides in Meiosis II → four (tetrad of) cells." },
    { q: "Which of the following correctly describes coconut water/liquid endosperm?", o: ["Diploid cellular tissue", "A free-nuclear syncytium", "A meristem", "A gamete"], c: 1, e: "It is a syncytium — many nuclei, no cell partitioning." },
    { q: "Genetic variation from independent assortment arises because:", o: ["Chromatids exchange segments", "Homologues orient randomly at Metaphase I", "The nucleolus reforms", "DNA replicates twice"], c: 1, e: "Random orientation of each bivalent at Metaphase I mixes maternal/paternal chromosomes." },
    { q: "Which is the correct chronological order for a meiocyte?", o: ["S → Meiosis I → interkinesis → Meiosis II", "Meiosis I → S → Meiosis II", "Meiosis II → interkinesis → Meiosis I", "S → Meiosis II → Meiosis I"], c: 0, e: "One S phase, then Meiosis I, a replication-free interkinesis, then Meiosis II." },
    { q: "Sister chromatids are genetically identical EXCEPT where affected by:", o: ["Synapsis", "Crossing over", "Cytokinesis", "Nucleolus reformation"], c: 1, e: "Crossing over can make regions of sister/non-sister chromatids differ (recombinant)." },
    { q: "The spindle apparatus begins to form in:", o: ["Prophase", "Metaphase", "Anaphase", "Telophase"], c: 0, e: "Spindle formation starts in prophase as centrosomes move apart." },
    { q: "Which correctly matches division to product number?", o: ["Mitosis → 4", "Meiosis → 2", "Mitosis → 2, Meiosis → 4", "Both → 2"], c: 2, e: "Mitosis yields 2; meiosis yields 4." },
    { q: "Why must sexually reproducing organisms use meiosis?", o: ["To speed up growth", "To keep chromosome number constant across generations", "To repair wounds", "To make identical clones"], c: 1, e: "Halving in gametes + restoration at fertilisation keeps 2n stable each generation." },
    { q: "In G2 phase, which is TRUE?", o: ["DNA is 2C", "DNA is 4C and chromosomes 2n", "Chromosomes are haploid", "DNA replication is ongoing"], c: 1, e: "After S, the cell is 4C, 2n and prepares for mitosis." },
    { q: "Which pair is correctly matched?", o: ["Anaphase I – sister chromatids separate", "Anaphase II – homologues separate", "Anaphase I – homologues separate", "Metaphase I – single chromosomes align"], c: 2, e: "Anaphase I separates homologues; Anaphase II separates chromatids." },
    { q: "In a cell with 2n = 8, how many bivalents form during Zygotene?", o: ["8", "4", "16", "2"], c: 1, e: "Homologues pair up, so 8 chromosomes form 4 bivalents (each = 2 homologues)." }
  ],

  match: [
    { term: "Cell cycle", def: "Sequence: duplicate genome, synthesise constituents, divide" },
    { term: "Interphase", def: "Longest phase (>95%); cell grows and copies DNA" },
    { term: "G1 phase", def: "Growth and metabolism, no DNA replication" },
    { term: "S phase", def: "DNA replication (2C → 4C)" },
    { term: "G2 phase", def: "Protein/tubulin synthesis, prepares for mitosis" },
    { term: "G0 phase", def: "Quiescent; active but non-dividing (e.g. neurons)" },
    { term: "Karyokinesis", def: "Division of the nucleus" },
    { term: "Cytokinesis", def: "Division of the cytoplasm" },
    { term: "Prophase", def: "Chromatin condenses; nuclear envelope disappears" },
    { term: "Metaphase", def: "Chromosomes most condensed; align at equator" },
    { term: "Anaphase", def: "Centromeres split; chromatids move to poles" },
    { term: "Telophase", def: "Two nuclei reform; chromosomes decondense" },
    { term: "Metaphase plate", def: "Equatorial plane where chromosomes align" },
    { term: "Kinetochore", def: "Protein disc on centromere for spindle attachment" },
    { term: "Centromere", def: "Constricted region joining sister chromatids" },
    { term: "Cleavage furrow", def: "Animal cytokinesis, pinches outside → in" },
    { term: "Cell plate", def: "Plant cytokinesis, grows centre → outward" },
    { term: "Syncytium", def: "Multinucleate cell; e.g. coconut liquid endosperm" },
    { term: "Equational division", def: "Mitosis / Meiosis II — chromatids separate, number kept" },
    { term: "Reductional division", def: "Meiosis I — homologues separate, number halved" },
    { term: "Meiocyte", def: "Gamete/spore mother cell where meiosis occurs" },
    { term: "Leptotene", def: "Chromosomes become gradually visible" },
    { term: "Zygotene", def: "Synapsis of homologues; synaptonemal complex" },
    { term: "Pachytene", def: "Crossing over at recombination nodules" },
    { term: "Diplotene", def: "Synaptonemal complex dissolves; chiasmata visible" },
    { term: "Diakinesis", def: "Terminalisation; nucleolus & envelope disappear" },
    { term: "Synapsis", def: "Pairing of homologous chromosomes" },
    { term: "Synaptonemal complex", def: "Protein framework between paired homologues" },
    { term: "Bivalent / tetrad", def: "Paired homologues containing four chromatids" },
    { term: "Recombination nodule", def: "Site where crossing over occurs" },
    { term: "Recombinase", def: "Enzyme that catalyses crossing over" },
    { term: "Crossing over", def: "Segment exchange between non-sister chromatids" },
    { term: "Chiasma", def: "X-shaped junction of crossing over" },
    { term: "Terminalisation", def: "Chiasmata move to chromosome ends" },
    { term: "Anaphase I", def: "Homologous chromosomes separate" },
    { term: "Anaphase II", def: "Sister chromatids separate" },
    { term: "Interkinesis", def: "Gap between Meiosis I and II; no DNA replication" },
    { term: "Dyad", def: "Two haploid cells formed after Meiosis I" },
    { term: "Independent assortment", def: "Random orientation of homologues at Metaphase I" },
    { term: "Homologous chromosomes", def: "Maternal-paternal pair, same genes at same loci" },
    { term: "Nucleo-cytoplasmic ratio", def: "Nuclear:cytoplasmic volume balance restored by mitosis" },
    { term: "Fertilisation", def: "Restores diploid number after meiosis" }
  ],

  pathways: [
    { title: "Cell cycle phases", prompt: "Order the phases from the start of interphase to division.", steps: ["G1 phase", "S phase", "G2 phase", "M phase"] },
    { title: "Mitosis stages", prompt: "Order the stages of nuclear division through to splitting.", steps: ["Prophase", "Metaphase", "Anaphase", "Telophase", "Cytokinesis"] },
    { title: "Prophase I sub-stages", prompt: "Order the five sub-stages of meiotic Prophase I.", steps: ["Leptotene", "Zygotene", "Pachytene", "Diplotene", "Diakinesis"] },
    { title: "Full meiosis sequence", prompt: "Arrange the meiotic stages from Meiosis I through Meiosis II.", steps: ["Prophase I", "Metaphase I", "Anaphase I", "Telophase I", "Prophase II", "Metaphase II", "Anaphase II", "Telophase II"] },
    { title: "Events within Prophase I", prompt: "Order what happens to a bivalent through Prophase I.", steps: ["Chromosomes become visible", "Synapsis forms the bivalent", "Synaptonemal complex assembles", "Crossing over at recombination nodules", "Synaptonemal complex dissolves, chiasmata appear", "Terminalisation of chiasmata"] },
    { title: "DNA & number through a meiocyte", prompt: "Order these states of DNA/chromosomes from start to finish.", steps: ["2C, 2n (G1)", "4C, 2n (after S)", "2C, n (after Meiosis I)", "1C, n (after Meiosis II)"] }
  ]
};
