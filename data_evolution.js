/* ============================================================
   data_evolution.js — Chapter 6 · Evolution
   Updated with Class 12 Chapter 6 data (evolution).
   ============================================================ */

DATA.chapters.evolution = {
  id: "evolution",
  num: 6,
  title: "Evolution",
  subtitle: "Origin of life · evidences · Darwin · mechanisms · Hardy-Weinberg · human evolution",
  color: "#00b894",
  colorD: "#00806a",
  glyph: "🦕",

  /* ---------------- STUDY NOTES ---------------- */
  notes: [
    {
      id: "origin_universe",
      heading: "1 · Origin of the Universe & Earth",
      html: `
        <p>The <span class="kw">Big Bang theory</span> explains the origin of the universe: a huge explosion (~<b>20 billion years ago</b>) caused the universe to expand and cool, forming galaxies, stars and planets.</p>
        <div class="flow">
          <span class="node">Big Bang (~20 bya)</span><span class="arr">→</span>
          <span class="node">Earth forms (~4.5 bya)</span><span class="arr">→</span>
          <span class="node">Early atmosphere (CH₄, NH₃, H₂, water vapour)</span><span class="arr">→</span>
          <span class="node">Oceans, then life (~3.5–4 bya)</span>
        </div>
        <ul>
          <li>The <b>Earth</b> formed about <b>4.5 billion years ago</b>; there was no atmosphere at first.</li>
          <li>Water vapour, methane, ammonia and carbon dioxide were released from the molten core; UV rays split water into H₂ and O₂.</li>
          <li>As Earth cooled, water vapour condensed into <b>rain, forming the oceans</b> where life later appeared.</li>
        </ul>
      `
    },
    {
      id: "origin_life_theories",
      heading: "2 · Theories of the Origin of Life",
      html: `
        <table class="cmp">
          <thead><tr><th>Theory</th><th>Idea / Status</th></tr></thead>
          <tbody>
            <tr><td><span class="kw">Panspermia</span></td><td>Life (spores) came from outer space — an early belief of some astronomers.</td></tr>
            <tr><td><span class="kw">Spontaneous generation (abiogenesis)</span></td><td>Life arose from non-living/decaying matter — <b>disproved by Louis Pasteur</b>.</td></tr>
            <tr><td><span class="kw">Chemical evolution (Oparin–Haldane)</span></td><td>First life arose from <b>pre-existing non-living organic molecules</b> under a reducing atmosphere.</td></tr>
          </tbody>
        </table>
        <h4>Pasteur's swan-neck flask experiment</h4>
        <p>Pasteur showed that life comes only from pre-existing life: <b>pre-sterilised, sealed/curved-neck flasks stayed lifeless</b>, while flasks open to air (letting in germs) grew microbes — disproving spontaneous generation.</p>
        <h4>Miller–Urey experiment (1953)</h4>
        <div class="flow">
          <span class="node">CH₄ + H₂ + NH₃ + water vapour</span><span class="arr">→ electric discharge</span>
          <span class="node">Amino acids formed</span>
        </div>
        <p>Stanley Miller created early-Earth conditions in a closed flask and passed <b>electric discharge</b> through a mix of methane, hydrogen, ammonia and water vapour, producing <b>amino acids</b> — experimental support for <b>chemical evolution</b>.</p>
      `
    },
    {
      id: "evidence_fossils",
      heading: "3 · Evidence — Palaeontology (Fossils)",
      html: `
        <p><span class="kw">Fossils</span> are remains/impressions of past organisms found in rocks. Different-aged sedimentary layers hold different life forms, showing how organisms have <b>changed over time</b>.</p>
        <ul>
          <li>Fossils in deeper (older) rock layers represent more ancient life.</li>
          <li>They provide a <b>record of extinct organisms</b> and the sequence of evolution (a geological time scale).</li>
        </ul>
        <div class="callout"><b>Key point:</b> fossils are direct evidence that life forms have evolved and that many are now extinct.</div>
      `
    },
    {
      id: "evidence_anatomy",
      heading: "4 · Evidence — Comparative Anatomy (Homology vs Analogy)",
      html: `
        <table class="cmp">
          <thead><tr><th>Feature</th><th>Homologous organs</th><th>Analogous organs</th></tr></thead>
          <tbody>
            <tr><td>Structure/origin</td><td><b>Same</b> fundamental structure & origin</td><td><b>Different</b> structure & origin</td></tr>
            <tr><td>Function</td><td>Different functions</td><td>Similar functions</td></tr>
            <tr><td>Evolution type</td><td><b>Divergent</b> evolution</td><td><b>Convergent</b> evolution</td></tr>
            <tr><td>Animal examples</td><td>Forelimbs of whale, bat, cheetah, human (same bones)</td><td>Wings of butterfly & bird; eye of octopus & mammal; flippers of penguin & dolphin</td></tr>
            <tr><td>Plant examples</td><td>Thorn & tendril of Bougainvillea & Cucurbita</td><td>Sweet potato (root) & potato (stem)</td></tr>
          </tbody>
        </table>
        <div class="callout"><b>Remember:</b> Homologous = <b>same origin, different job</b> (divergent). Analogous = <b>different origin, same job</b> (convergent).</div>
      `
    },
    {
      id: "adaptive_radiation",
      heading: "5 · Adaptive Radiation",
      html: `
        <p><span class="kw">Adaptive radiation</span> is the evolution of many different species from a single ancestral form in a given geographical area, each adapted to a different habitat.</p>
        <ul>
          <li><b>Darwin's finches</b> (Galapagos Islands) — from a seed-eating ancestor, many types with different beaks (insect-eaters, etc.) evolved.</li>
          <li><b>Australian marsupials</b> — a variety of marsupials radiated from one ancestral stock.</li>
        </ul>
        <div class="callout"><b>Convergent evolution:</b> when two unrelated adaptive radiations in isolated areas produce similar forms (e.g. placental wolf and the Tasmanian wolf/marsupial resemble each other).</div>
      `
    },
    {
      id: "darwin",
      heading: "6 · Darwin's Theory of Natural Selection",
      html: `
        <p><span class="kw">Charles Darwin</span>, after his voyage on <b>HMS Beagle</b>, proposed <b>evolution by natural selection</b>. <b>Alfred Russel Wallace</b> reached similar conclusions independently.</p>
        <h4>Core ideas</h4>
        <ul>
          <li>Existing life forms share similarities and <b>common ancestors</b> (branching descent).</li>
          <li>Populations show <b>heritable variation</b>; more offspring are produced than can survive.</li>
          <li>Individuals better <b>fit</b> to the environment survive and reproduce more (differential reproduction) — nature 'selects' them.</li>
          <li><b>Fitness</b> = reproductive success (leaving more progeny).</li>
        </ul>
        <h4>Industrial melanism — natural selection observed</h4>
        <p>In the <b>peppered moth (Biston betularia)</b> in England: before industrialisation, <b>light moths</b> were common (camouflaged on lichen-covered trees). After industrial soot darkened the trees, <b>dark (melanic) moths</b> survived better as birds picked off the now-visible light ones — a clear case of natural selection. Similarly, <b>DDT-resistant mosquitoes</b> and <b>antibiotic-resistant microbes</b> show evolution in action.</p>
      `
    },
    {
      id: "mechanisms_lamarck_devries",
      heading: "7 · Lamarck & de Vries — Other Mechanisms",
      html: `
        <table class="cmp">
          <thead><tr><th>Lamarck</th><th>de Vries (Mutation theory)</th></tr></thead>
          <tbody>
            <tr><td><b>Inheritance of acquired characters</b> via <b>use and disuse</b> of organs.</td><td>Evolution driven by <b>mutations</b> (large, sudden changes = <b>saltation</b>).</td></tr>
            <tr><td>Example: giraffe's long neck from stretching to reach leaves.</td><td>Based on the evening primrose, <b>Oenothera lamarckiana</b>.</td></tr>
            <tr><td>Now discredited (acquired traits are not inherited).</td><td>Variation is random and directionless — unlike Darwin's small, directional variations.</td></tr>
          </tbody>
        </table>
        <div class="callout"><b>Darwin vs de Vries:</b> Darwin's variations are <b>small and gradual</b>; de Vries's mutations are <b>large and discontinuous (saltation)</b>.</div>
      `
    },
    {
      id: "hardy_weinberg",
      heading: "8 · Hardy–Weinberg Principle",
      html: `
        <p>In an ideal population, <b>allele frequencies remain constant</b> across generations — this is <span class="kw">genetic equilibrium</span>. The sum of all allele frequencies is the <b>gene pool</b>.</p>
        <div class="callout"><b>Equation:</b> p² + 2pq + q² = 1, where p + q = 1. (p = frequency of allele A, q = frequency of allele a; p² = AA, 2pq = Aa, q² = aa.)</div>
        <h4>Five factors that disturb equilibrium (→ evolution)</h4>
        <table class="cmp">
          <thead><tr><th>Factor</th><th>Effect</th></tr></thead>
          <tbody>
            <tr><td>Gene migration (gene flow)</td><td>Alleles move in/out with migrating individuals</td></tr>
            <tr><td>Genetic drift</td><td>Random change in allele frequency (strong in small populations); the <b>founder effect</b> is a case of drift</td></tr>
            <tr><td>Mutation</td><td>Source of new alleles</td></tr>
            <tr><td>Genetic recombination</td><td>New allele combinations</td></tr>
            <tr><td>Natural selection</td><td>Non-random survival/reproduction</td></tr>
          </tbody>
        </table>
        <h4>Types of natural selection</h4>
        <table class="cmp">
          <thead><tr><th>Type</th><th>Effect on the population</th></tr></thead>
          <tbody>
            <tr><td>Stabilising</td><td>Favours the <b>average</b>; removes extremes (no change in mean)</td></tr>
            <tr><td>Directional</td><td>Favours <b>one extreme</b>; shifts the mean</td></tr>
            <tr><td>Disruptive</td><td>Favours <b>both extremes</b>; splits into two peaks</td></tr>
          </tbody>
        </table>
      `
    },
    {
      id: "brief_account",
      heading: "9 · A Brief Account of Evolution",
      html: `
        <div class="flow">
          <span class="node">First cellular life (~2000 mya)</span><span class="arr">→</span>
          <span class="node">Invertebrates (~500 mya)</span><span class="arr">→</span>
          <span class="node">Fish / amphibians</span><span class="arr">→</span>
          <span class="node">Reptiles (dinosaurs)</span><span class="arr">→</span>
          <span class="node">Birds & Mammals</span>
        </div>
        <ul>
          <li>Jawless fish evolved ~350 mya; lobefins gave rise to the first amphibians.</li>
          <li>Amphibians → reptiles, which dominated (the dinosaurs).</li>
          <li>Some reptiles gave rise to <b>birds</b> and others to <b>mammals</b>.</li>
          <li>Dinosaurs suddenly went extinct (~65 mya) in a mass extinction.</li>
          <li><b>Continental drift</b> isolated Australia → its unique marsupials.</li>
        </ul>
      `
    },
    {
      id: "human_evolution",
      heading: "10 · Origin & Evolution of Man",
      html: `
        <table class="cmp">
          <thead><tr><th>Form</th><th>Time / brain</th><th>Key feature</th></tr></thead>
          <tbody>
            <tr><td><span class="kw">Dryopithecus & Ramapithecus</span></td><td>~15 mya</td><td>Ape-like; Ramapithecus more man-like, Dryopithecus more ape-like</td></tr>
            <tr><td><span class="kw">Australopithecus</span></td><td>~3–4 mya</td><td>East African grasslands; walked <b>upright</b>; ate fruit</td></tr>
            <tr><td><span class="kw">Homo habilis</span></td><td>~2 mya; 650–800 cc</td><td>First human-like being; probably did not eat meat</td></tr>
            <tr><td><span class="kw">Homo erectus</span></td><td>~1.5 mya; ~900 cc</td><td>Probably ate meat (fossils in Java)</td></tr>
            <tr><td><span class="kw">Homo neanderthalensis</span></td><td>1400 cc; ~1 lakh–40,000 ya</td><td>Used hides, buried the dead; Near East & Central Asia</td></tr>
            <tr><td><span class="kw">Homo sapiens</span></td><td>Arose in Africa</td><td>Modern humans; migrated across continents</td></tr>
          </tbody>
        </table>
        <ul>
          <li>Ice Age between 75,000 and 10,000 years ago.</li>
          <li>Agriculture began ~10,000 years ago; human settlements formed.</li>
          <li>Pre-historic cave art (e.g. <b>Bhimbetka</b>, MP) is ~18,000 years old.</li>
          <li>Ice Age between 75,000 and 10,000 years ago.</li>
        </ul>
      `
    }
  ],

  /* ---------------- MNEMONICS ---------------- */
  mnemonics: [
    {
      title: "Origin-of-life timeline — \"20-4.5-4\"",
      device: `Big Bang <b>~20 bya</b> · Earth <b>~4.5 bya</b> · Life <b>~4 bya</b>`,
      expand: [
        { L: "20 bya", t: "Big Bang — universe forms" },
        { L: "4.5 bya", t: "Earth forms" },
        { L: "~4 bya", t: "Life appears in the oceans" }
      ]
    },
    {
      title: "Miller–Urey gases — \"MAHW\"",
      device: `<b>M</b>ethane · <b>A</b>mmonia · <b>H</b>ydrogen · <b>W</b>ater vapour → amino acids`,
      expand: [
        { L: "M", t: "Methane (CH₄)" },
        { L: "A", t: "Ammonia (NH₃)" },
        { L: "H", t: "Hydrogen (H₂)" },
        { L: "W", t: "Water vapour + electric spark → amino acids" }
      ]
    },
    {
      title: "Homologous vs Analogous — \"Homo=Same origin, Ana=Same function\"",
      device: `<b>Homo</b>logous → <b>divergent</b> (same origin) · <b>Ana</b>logous → <b>convergent</b> (same function)`,
      expand: [
        { L: "Homologous", t: "Whale/bat/human forelimb — divergent" },
        { L: "Analogous", t: "Butterfly & bird wing — convergent" },
        { L: "Trick", t: "Homo = same Home (origin); Ana = same Action (function)" }
      ]
    },
    {
      title: "Hardy–Weinberg 5 factors — \"Mget-M-R-S\" (Migration, Drift, Mutation, Recombination, Selection)",
      device: `<b>M</b>igration · genetic <b>D</b>rift · <b>M</b>utation · <b>R</b>ecombination · natural <b>S</b>election`,
      expand: [
        { L: "Migration", t: "Gene flow between populations" },
        { L: "Drift", t: "Random change; founder effect" },
        { L: "Mutation", t: "New alleles" },
        { L: "Recombination", t: "New combinations" },
        { L: "Selection", t: "Non-random survival" }
      ]
    },
    {
      title: "Selection types — \"Stab-Direct-Disrupt\"",
      device: `<b>Stabilising</b> (middle) · <b>Directional</b> (one end) · <b>Disruptive</b> (both ends)`,
      expand: [
        { L: "Stabilising", t: "Favours average, one peak stays" },
        { L: "Directional", t: "Favours one extreme, mean shifts" },
        { L: "Disruptive", t: "Favours both extremes, two peaks" }
      ]
    },
    {
      title: "Human evolution order — \"Dry-Aus-Habilis-Erectus-Neander-Sapiens\"",
      device: `<b>Dry</b>opithecus → <b>Aus</b>tralopithecus → H. <b>habilis</b> → H. <b>erectus</b> → <b>Neander</b>thal → H. <b>sapiens</b>`,
      expand: [
        { L: "Dryopithecus", t: "~15 mya, ape-like" },
        { L: "Australopithecus", t: "~3–4 mya, upright" },
        { L: "H. habilis", t: "~2 mya, 650–800 cc, no meat" },
        { L: "H. erectus", t: "~1.5 mya, 900 cc, ate meat" },
        { L: "Neanderthal", t: "1400 cc, buried dead" },
        { L: "H. sapiens", t: "Modern human, from Africa" }
      ]
    },
    {
      title: "Brain-size ladder — \"habilis<erectus<sapiens\"",
      device: `<b>650–800</b> (habilis) → <b>900</b> (erectus) → <b>1400</b> (Neanderthal)`,
      expand: [
        { L: "650–800 cc", t: "Homo habilis" },
        { L: "900 cc", t: "Homo erectus" },
        { L: "1400 cc", t: "Neanderthal (large!)" }
      ]
    }
  ],

  /* ---------------- FLASHCARDS (50+) ---------------- */
  flashcards: [
    { front: "Which theory explains the origin of the universe?", back: "The Big Bang theory (~20 billion years ago)." },
    { front: "When did the Earth form?", back: "About 4.5 billion years ago." },
    { front: "When did life first appear on Earth?", back: "About 3.5–4 billion years ago, in the oceans." },
    { front: "What is panspermia?", back: "The idea that life (as spores) came to Earth from outer space." },
    { front: "What is spontaneous generation (abiogenesis)?", back: "The disproved idea that life arises from non-living/decaying matter." },
    { front: "Who disproved spontaneous generation and how?", back: "Louis Pasteur, using his swan-neck flask experiment." },
    { front: "Who proposed chemical evolution (origin from organic molecules)?", back: "Oparin and Haldane." },
    { front: "What conditions did early Earth have for chemical evolution?", back: "A reducing atmosphere (CH₄, NH₃, H₂, water vapour), high temperature, no free oxygen." },
    { front: "What did the Miller–Urey experiment demonstrate?", back: "That amino acids can form from CH₄, NH₃, H₂ and water vapour with electric discharge — supporting chemical evolution." },
    { front: "Which gases did Miller use in his flask?", back: "Methane, ammonia, hydrogen, and water vapour." },
    { front: "What are fossils?", back: "Remains or impressions of past organisms preserved in rocks." },
    { front: "How do fossils support evolution?", back: "Different rock layers contain different life forms, showing change over time and extinct organisms." },
    { front: "Define homologous organs with an example.", back: "Same structure/origin but different functions (divergent evolution); e.g. forelimbs of whale, bat, human." },
    { front: "Define analogous organs with an example.", back: "Different structure/origin but similar function (convergent evolution); e.g. wings of butterfly and bird." },
    { front: "Homologous organs indicate which type of evolution?", back: "Divergent evolution." },
    { front: "Analogous organs indicate which type of evolution?", back: "Convergent evolution." },
    { front: "Give a plant example of homologous organs.", back: "Thorn (Bougainvillea) and tendril (Cucurbita)." },
    { front: "Give a plant example of analogous organs.", back: "Sweet potato (modified root) and potato (modified stem)." },
    { front: "What is adaptive radiation?", back: "Evolution of many species from one ancestor in an area, each adapted to a different habitat." },
    { front: "Give the classic example of adaptive radiation.", back: "Darwin's finches on the Galapagos Islands." },
    { front: "Name another example of adaptive radiation.", back: "Australian marsupials radiating from one ancestral stock." },
    { front: "Whose voyage led to the theory of natural selection, and on which ship?", back: "Charles Darwin, aboard HMS Beagle." },
    { front: "Who independently proposed natural selection with Darwin?", back: "Alfred Russel Wallace." },
    { front: "What is 'fitness' in Darwinian terms?", back: "Reproductive success — leaving more surviving offspring." },
    { front: "What is industrial melanism?", back: "The rise of dark (melanic) peppered moths after industrial soot darkened trees — natural selection." },
    { front: "Scientific name of the peppered moth?", back: "Biston betularia." },
    { front: "Give two modern examples of natural selection in action.", back: "DDT-resistant mosquitoes and antibiotic-resistant bacteria." },
    { front: "What was Lamarck's theory?", back: "Inheritance of acquired characters through use and disuse of organs (e.g. giraffe's neck)." },
    { front: "Why is Lamarck's theory rejected?", back: "Acquired characters are not inherited by offspring." },
    { front: "Who proposed the mutation theory of evolution?", back: "Hugo de Vries." },
    { front: "On which plant was de Vries' mutation theory based?", back: "Evening primrose, Oenothera lamarckiana." },
    { front: "What is saltation?", back: "A single-step large mutation causing sudden, discontinuous variation (de Vries)." },
    { front: "How do Darwin's and de Vries' variations differ?", back: "Darwin's are small and gradual; de Vries' are large and discontinuous (saltation)." },
    { front: "State the Hardy–Weinberg principle.", back: "In an ideal population, allele frequencies stay constant across generations (genetic equilibrium)." },
    { front: "Write the Hardy–Weinberg equation.", back: "p² + 2pq + q² = 1, with p + q = 1." },
    { front: "In the equation, what do p² and q² represent?", back: "p² = homozygous dominant (AA); q² = homozygous recessive (aa); 2pq = heterozygous (Aa)." },
    { front: "What is a gene pool?", back: "The total of all genes and their alleles in a population." },
    { front: "Name the five factors that alter allele frequencies.", back: "Gene migration, genetic drift, mutation, recombination, and natural selection." },
    { front: "What is genetic drift?", back: "Random change in allele frequency, strong in small populations." },
    { front: "What is the founder effect?", back: "A form of genetic drift where a few founders start a new population with different allele frequencies." },
    { front: "Stabilising selection — effect?", back: "Favours average individuals; removes extremes; mean stays the same." },
    { front: "Directional selection — effect?", back: "Favours one extreme; shifts the population mean." },
    { front: "Disruptive selection — effect?", back: "Favours both extremes; produces two peaks." },
    { front: "When did dinosaurs go extinct?", back: "About 65 million years ago, in a mass extinction." },
    { front: "How did Australia get its unique marsupials?", back: "Continental drift isolated Australia, allowing marsupials to radiate." },
    { front: "Name the ~15-mya ancestors of man.", back: "Dryopithecus and Ramapithecus." },
    { front: "Which early form first walked upright, and when?", back: "Australopithecus, about 3–4 million years ago." },
    { front: "Brain capacity of Homo habilis?", back: "About 650–800 cc; probably did not eat meat." },
    { front: "Brain capacity of Homo erectus?", back: "About 900 cc; probably ate meat." },
    { front: "Brain capacity of Neanderthal man?", back: "About 1400 cc; used hides and buried the dead." },
    { front: "Where did Homo sapiens arise?", back: "In Africa, then migrated across the continents." },
    { front: "When did agriculture begin?", back: "About 10,000 years ago." },
    { front: "How old is the cave art at Bhimbetka?", back: "About 18,000 years old." },
    { front: "When was the Ice Age?", back: "Between about 75,000 and 10,000 years ago." }
  ],

  /* ---------------- ACTIVE RECALL (30) ---------------- */
  recall: [
    { q: "Describe the Big Bang theory and the timeline of Earth and life.", hint: "20, 4.5, 4.", a: "The <b>Big Bang</b> (~20 bya) caused the universe to expand and cool, forming galaxies and stars. The <b>Earth formed ~4.5 bya</b>, and <b>life appeared ~3.5–4 bya</b> in the early oceans." },
    { q: "How did Pasteur disprove spontaneous generation?", hint: "Swan-neck flask.", a: "Using <b>swan-neck flasks</b>, Pasteur showed that pre-sterilised broth stayed lifeless when air-borne germs were kept out, but grew microbes when exposed to air — proving <b>life comes only from pre-existing life</b>." },
    { q: "Explain the Oparin–Haldane hypothesis.", hint: "Chemical evolution.", a: "Oparin and Haldane proposed that the first life arose by <b>chemical evolution</b> — simple inorganic molecules combined into organic molecules under a <b>reducing atmosphere</b> (CH₄, NH₃, H₂), which gradually formed the first life." },
    { q: "Describe the Miller–Urey experiment and its significance.", hint: "Gases + spark.", a: "Miller passed <b>electric discharge</b> through <b>CH₄, NH₃, H₂ and water vapour</b> in a closed flask (simulating early Earth) and obtained <b>amino acids</b>, giving experimental support to <b>chemical evolution</b>." },
    { q: "How do fossils provide evidence for evolution?", hint: "Rock layers.", a: "Fossils in different-aged rock layers show <b>different life forms</b>; older (deeper) rocks hold more ancient organisms, giving a record of <b>change over time</b> and of <b>extinct</b> species." },
    { q: "Differentiate homologous and analogous organs.", hint: "Origin vs function.", a: "<b>Homologous</b> organs share the <b>same origin</b> but differ in function (divergent evolution) — e.g. forelimbs of whale/bat/human. <b>Analogous</b> organs differ in origin but share <b>function</b> (convergent evolution) — e.g. wings of butterfly and bird." },
    { q: "Give animal and plant examples of homologous organs.", hint: "Forelimbs; thorn/tendril.", a: "Animals: forelimbs of <b>whale, bat, cheetah and human</b> (same bones). Plants: <b>thorn of Bougainvillea and tendril of Cucurbita</b>." },
    { q: "Give examples of analogous organs.", hint: "Wings, eyes, flippers.", a: "Wings of <b>butterfly and bird</b>; eyes of <b>octopus and mammals</b>; flippers of <b>penguin and dolphin</b>; and <b>sweet potato (root) vs potato (stem)</b>." },
    { q: "What is adaptive radiation? Give examples.", hint: "Finches, marsupials.", a: "The evolution of <b>many species from one ancestor</b> in one area, each adapted to a different habitat. Examples: <b>Darwin's finches</b> (Galapagos) and <b>Australian marsupials</b>." },
    { q: "When is adaptive radiation called convergent evolution?", hint: "Two radiations, similar forms.", a: "When two <b>independent adaptive radiations</b> in isolated areas produce <b>similar-looking forms</b> — e.g. the placental wolf and the marsupial (Tasmanian) wolf resemble each other." },
    { q: "Outline Darwin's theory of natural selection.", hint: "Variation, fitness, descent.", a: "Populations show heritable <b>variation</b> and produce excess offspring; individuals better <b>fit</b> to the environment survive and reproduce more (differential reproduction); over time this leads to <b>branching descent</b> from common ancestors." },
    { q: "Explain industrial melanism as evidence of natural selection.", hint: "Peppered moth.", a: "In the peppered moth (<i>Biston betularia</i>), <b>light moths dominated</b> before industrialisation (camouflaged on lichen). Soot-darkened trees then favoured <b>dark moths</b>, as birds ate the visible light ones — showing selection by the environment." },
    { q: "State Lamarck's theory and why it is rejected.", hint: "Use and disuse; giraffe.", a: "Lamarck proposed <b>inheritance of acquired characters</b> through use and disuse (e.g. the giraffe's neck lengthening from stretching). It is rejected because <b>acquired characters are not passed to offspring</b>." },
    { q: "Describe de Vries' mutation theory and how it differs from Darwin's view.", hint: "Saltation, Oenothera.", a: "From work on <b>Oenothera lamarckiana</b>, de Vries argued evolution occurs by <b>mutations</b> — sudden, large, discontinuous changes (<b>saltation</b>). This differs from Darwin's <b>small, gradual, directional</b> variations." },
    { q: "State the Hardy–Weinberg principle and its equation.", hint: "p²+2pq+q².", a: "In an ideal population, <b>allele frequencies stay constant</b> across generations (genetic equilibrium). Mathematically, <b>p² + 2pq + q² = 1</b> where <b>p + q = 1</b>." },
    { q: "What does each term of the Hardy–Weinberg equation mean?", hint: "AA, Aa, aa.", a: "<b>p²</b> = frequency of homozygous dominant (AA); <b>2pq</b> = heterozygous (Aa); <b>q²</b> = homozygous recessive (aa); p and q are the allele frequencies of A and a." },
    { q: "List and explain the five factors that change allele frequencies.", hint: "Migration to selection.", a: "<b>Gene migration</b> (flow of alleles), <b>genetic drift</b> (random change; includes founder effect), <b>mutation</b> (new alleles), <b>recombination</b> (new combinations), and <b>natural selection</b> (non-random survival). These disturb equilibrium and cause evolution." },
    { q: "What is genetic drift and the founder effect?", hint: "Chance, small population.", a: "<b>Genetic drift</b> is a random change in allele frequency, pronounced in <b>small populations</b>. The <b>founder effect</b> occurs when a few individuals found a new population whose allele frequencies differ from the original." },
    { q: "Compare stabilising, directional and disruptive selection.", hint: "Middle, one end, both ends.", a: "<b>Stabilising</b> favours the <b>average</b> and removes extremes (mean unchanged). <b>Directional</b> favours <b>one extreme</b> (mean shifts). <b>Disruptive</b> favours <b>both extremes</b> (two peaks form)." },
    { q: "Give a brief account of the evolution of life forms.", hint: "Cells → invertebrates → vertebrates.", a: "First <b>cellular life ~2000 mya</b>, then <b>invertebrates (~500 mya)</b>, fish, amphibians, and <b>reptiles</b> (dinosaurs, which dominated then went extinct ~65 mya). Some reptiles gave rise to <b>birds</b> and others to <b>mammals</b>." },
    { q: "How did the unique fauna of Australia arise?", hint: "Continental drift.", a: "<b>Continental drift</b> isolated Australia, and its <b>marsupials</b> underwent adaptive radiation into many forms without competition from placental mammals." },
    { q: "Describe Australopithecus.", hint: "3–4 mya, upright.", a: "<b>Australopithecus</b> (~3–4 mya) lived in the East African grasslands, <b>walked upright</b> and probably <b>ate fruit</b> — an early man-like primate." },
    { q: "Compare Homo habilis and Homo erectus.", hint: "Brain size, diet.", a: "<b>Homo habilis</b> (~2 mya, 650–800 cc) was the first human-like being and probably <b>did not eat meat</b>. <b>Homo erectus</b> (~1.5 mya, ~900 cc) had a larger brain and <b>probably ate meat</b>." },
    { q: "Describe Neanderthal man.", hint: "1400 cc, culture.", a: "<b>Homo neanderthalensis</b> had a brain of ~<b>1400 cc</b>, lived in the Near East and Central Asia, used <b>animal hides</b> for protection and <b>buried their dead</b>." },
    { q: "Where and how did modern humans (Homo sapiens) spread?", hint: "Africa, migration.", a: "<b>Homo sapiens</b> arose in <b>Africa</b> and gradually <b>migrated across the continents</b>, spreading during and after the Ice Age (75,000–10,000 ya)." },
    { q: "What key cultural milestones mark human evolution?", hint: "Agriculture, art.", a: "<b>Agriculture</b> began ~<b>10,000 years ago</b>, leading to settlements; and pre-historic <b>cave art</b> (e.g. Bhimbetka) is about <b>18,000 years old</b>." },
    { q: "Why is the octopus eye and mammal eye an example of analogy?", hint: "Different origin, same function.", a: "They perform the <b>same function</b> (vision) but developed from <b>different embryonic origins</b> and structures — a case of <b>convergent evolution</b>." },
    { q: "How do antibiotic-resistant bacteria illustrate evolution?", hint: "Selection pressure.", a: "Antibiotics act as a <b>selection pressure</b>: resistant variants survive and reproduce while susceptible ones die, so the population rapidly becomes <b>resistant</b> — natural selection observed within a short time." },
    { q: "What is the difference between divergent and convergent evolution?", hint: "Spread out vs come together.", a: "<b>Divergent evolution</b>: a common ancestor gives rise to different forms (homologous organs). <b>Convergent evolution</b>: unrelated organisms evolve similar features for similar functions (analogous organs)." },
    { q: "Why does natural selection require heritable variation?", hint: "Passing traits on.", a: "Only <b>heritable</b> variations can be passed to offspring. If advantageous traits are not inherited, selection cannot accumulate them across generations, so evolution would not occur." }
  ],

  /* ---------------- MCQs (50) ---------------- */
  mcqs: [
    { q: "The origin of the universe is explained by:", o: ["Panspermia", "The Big Bang theory", "Special creation", "Spontaneous generation"], c: 1, e: "The Big Bang theory (~20 bya)." },
    { q: "The Earth is about how old?", o: ["4.5 million years", "45 million years", "4.5 billion years", "20 billion years"], c: 2, e: "~4.5 billion years old." },
    { q: "The idea that life came from outer space is:", o: ["Abiogenesis", "Panspermia", "Biogenesis", "Chemical evolution"], c: 1, e: "Panspermia." },
    { q: "Spontaneous generation was disproved by:", o: ["Darwin", "Oparin", "Louis Pasteur", "Miller"], c: 2, e: "Pasteur's swan-neck flask experiment." },
    { q: "Chemical evolution was proposed by:", o: ["Darwin & Wallace", "Oparin & Haldane", "Watson & Crick", "Lamarck"], c: 1, e: "Oparin and Haldane." },
    { q: "The Miller–Urey experiment produced:", o: ["Nucleic acids", "Amino acids", "Proteins", "Cells"], c: 1, e: "Amino acids formed from simple gases." },
    { q: "Which gas was NOT used by Miller?", o: ["Methane", "Ammonia", "Oxygen", "Hydrogen"], c: 2, e: "The early atmosphere was reducing — no free oxygen." },
    { q: "Direct evidence of evolution comes from:", o: ["Fossils", "Vestigial organs only", "Embryos only", "DNA only"], c: 0, e: "Fossils are direct palaeontological evidence." },
    { q: "Forelimbs of whale, bat and human are:", o: ["Analogous", "Homologous", "Vestigial", "Unrelated"], c: 1, e: "Same structure, different function — homologous." },
    { q: "Homologous organs indicate:", o: ["Convergent evolution", "Divergent evolution", "No evolution", "Adaptive radiation"], c: 1, e: "Divergent evolution." },
    { q: "Wings of a butterfly and a bird are:", o: ["Homologous", "Analogous", "Vestigial", "Identical"], c: 1, e: "Different origin, same function — analogous." },
    { q: "Analogous organs are a result of:", o: ["Divergent evolution", "Convergent evolution", "Genetic drift", "Mutation"], c: 1, e: "Convergent evolution." },
    { q: "Which is an example of analogous organs in plants?", o: ["Thorn & tendril", "Sweet potato & potato", "Whale & bat limbs", "Heart & brain"], c: 1, e: "Sweet potato (root) & potato (stem) — same function, different origin." },
    { q: "Darwin's finches are a classic example of:", o: ["Convergent evolution", "Adaptive radiation", "Genetic drift", "Industrial melanism"], c: 1, e: "Adaptive radiation on the Galapagos." },
    { q: "Darwin travelled on the ship:", o: ["HMS Victory", "HMS Beagle", "HMS Endeavour", "HMS Challenger"], c: 1, e: "HMS Beagle." },
    { q: "Who independently proposed natural selection with Darwin?", o: ["Lamarck", "de Vries", "Wallace", "Mendel"], c: 2, e: "Alfred Russel Wallace." },
    { q: "In Darwinian terms, fitness means:", o: ["Physical strength", "Reproductive success", "Body size", "Long life"], c: 1, e: "Fitness = leaving more surviving offspring." },
    { q: "The peppered moth example illustrates:", o: ["Genetic drift", "Natural selection", "Mutation theory", "Lamarckism"], c: 1, e: "Industrial melanism = natural selection." },
    { q: "Scientific name of the peppered moth is:", o: ["Drosophila melanogaster", "Biston betularia", "Oenothera lamarckiana", "Pisum sativum"], c: 1, e: "Biston betularia." },
    { q: "Inheritance of acquired characters was proposed by:", o: ["Darwin", "Lamarck", "de Vries", "Wallace"], c: 1, e: "Lamarck (use and disuse)." },
    { q: "Lamarck explained the giraffe's long neck by:", o: ["Mutation", "Use and disuse", "Genetic drift", "Selection"], c: 1, e: "Stretching (use) lengthening the neck, then inherited." },
    { q: "The mutation theory of evolution was given by:", o: ["Darwin", "Hugo de Vries", "Lamarck", "Wallace"], c: 1, e: "Hugo de Vries." },
    { q: "de Vries' mutation theory was based on:", o: ["Pea", "Fruit fly", "Oenothera lamarckiana", "Peppered moth"], c: 2, e: "The evening primrose, Oenothera lamarckiana." },
    { q: "Sudden large heritable changes (saltation) were emphasised by:", o: ["Darwin", "de Vries", "Lamarck", "Mendel"], c: 1, e: "de Vries called them saltation." },
    { q: "Darwin's variations are described as:", o: ["Large and sudden", "Small and gradual", "Non-heritable", "Always harmful"], c: 1, e: "Small, gradual and directional." },
    { q: "The Hardy–Weinberg equation is:", o: ["p + q = 1", "p² + 2pq + q² = 1", "p² + q² = 1", "2pq = 1"], c: 1, e: "p² + 2pq + q² = 1 (with p+q=1)." },
    { q: "In Hardy–Weinberg, 2pq represents:", o: ["AA", "Aa", "aa", "Total"], c: 1, e: "Heterozygotes (Aa)." },
    { q: "The total of all alleles in a population is the:", o: ["Genotype", "Gene pool", "Phenotype", "Genome"], c: 1, e: "The gene pool." },
    { q: "Which is NOT a factor changing allele frequency?", o: ["Gene flow", "Genetic drift", "Mutation", "Photosynthesis"], c: 3, e: "The five factors are migration, drift, mutation, recombination, selection." },
    { q: "Random change in allele frequency is:", o: ["Natural selection", "Genetic drift", "Gene flow", "Mutation"], c: 1, e: "Genetic drift — strong in small populations." },
    { q: "The founder effect is a special case of:", o: ["Mutation", "Genetic drift", "Selection", "Migration"], c: 1, e: "It is a form of genetic drift." },
    { q: "Selection that favours average individuals is:", o: ["Directional", "Disruptive", "Stabilising", "Artificial"], c: 2, e: "Stabilising selection removes extremes." },
    { q: "Selection that shifts the mean toward one extreme is:", o: ["Stabilising", "Directional", "Disruptive", "Neutral"], c: 1, e: "Directional selection." },
    { q: "Selection favouring both extremes is:", o: ["Stabilising", "Directional", "Disruptive", "Balancing"], c: 2, e: "Disruptive selection — produces two peaks." },
    { q: "Dinosaurs went extinct about:", o: ["6.5 mya", "65 mya", "650 mya", "1.5 mya"], c: 1, e: "About 65 million years ago." },
    { q: "Australia's unique marsupials are explained by:", o: ["Mutation", "Continental drift & isolation", "Panspermia", "Artificial selection"], c: 1, e: "Isolation by continental drift allowed marsupial radiation." },
    { q: "The ~15-mya ancestors of man were:", o: ["Australopithecus", "Homo habilis", "Dryopithecus & Ramapithecus", "Homo erectus"], c: 2, e: "Dryopithecus and Ramapithecus." },
    { q: "The first upright-walking man-like primate was:", o: ["Homo habilis", "Australopithecus", "Homo erectus", "Neanderthal"], c: 1, e: "Australopithecus (~3–4 mya)." },
    { q: "Homo habilis had a brain capacity of about:", o: ["450 cc", "650–800 cc", "900 cc", "1400 cc"], c: 1, e: "650–800 cc; probably did not eat meat." },
    { q: "Homo erectus had a brain capacity of about:", o: ["650 cc", "900 cc", "1200 cc", "1400 cc"], c: 1, e: "About 900 cc; probably ate meat." },
    { q: "Neanderthal man had a brain capacity of about:", o: ["800 cc", "900 cc", "1400 cc", "2000 cc"], c: 2, e: "About 1400 cc." },
    { q: "Modern Homo sapiens arose in:", o: ["Asia", "Europe", "Africa", "Australia"], c: 2, e: "In Africa, then migrated outward." },
    { q: "Agriculture began about how long ago?", o: ["1,000 years", "10,000 years", "100,000 years", "1 million years"], c: 1, e: "About 10,000 years ago." },
    { q: "Pre-historic cave art at Bhimbetka is about how old?", o: ["1,800 years", "18,000 years", "180,000 years", "1.8 million years"], c: 1, e: "About 18,000 years old." },
    { q: "The Ice Age occurred between:", o: ["75,000–10,000 ya", "1 mya–500,000 ya", "10,000–1,000 ya", "100–50 ya"], c: 0, e: "Roughly 75,000 to 10,000 years ago." },
    { q: "Eyes of octopus and mammals are an example of:", o: ["Homology", "Analogy", "Vestigial organs", "Mutation"], c: 1, e: "Analogous — convergent evolution." },
    { q: "Antibiotic-resistant bacteria demonstrate:", o: ["Lamarckism", "Natural selection", "Genetic drift", "Panspermia"], c: 1, e: "Selection pressure favouring resistant variants." },
    { q: "Divergent evolution produces:", o: ["Analogous organs", "Homologous organs", "Vestigial organs", "Identical organs"], c: 1, e: "Homologous organs from a common ancestor." },
    { q: "Which sequence of human evolution is correct?", o: ["erectus → habilis → sapiens", "habilis → erectus → sapiens", "sapiens → erectus → habilis", "erectus → sapiens → habilis"], c: 1, e: "Homo habilis → Homo erectus → Homo sapiens." }
  ],

  /* ---------------- MATCH-UP (18 pairs) ---------------- */
  match: [
    { term: "Big Bang", def: "Origin of the universe (~20 bya)" },
    { term: "Panspermia", def: "Life came from outer space" },
    { term: "Louis Pasteur", def: "Disproved spontaneous generation" },
    { term: "Oparin–Haldane", def: "Chemical evolution" },
    { term: "Miller–Urey", def: "Amino acids from simple gases" },
    { term: "Fossils", def: "Palaeontological evidence" },
    { term: "Homologous organs", def: "Same origin, divergent evolution" },
    { term: "Analogous organs", def: "Same function, convergent evolution" },
    { term: "Darwin's finches", def: "Adaptive radiation" },
    { term: "HMS Beagle", def: "Darwin's voyage" },
    { term: "Biston betularia", def: "Peppered moth (industrial melanism)" },
    { term: "Lamarck", def: "Inheritance of acquired characters" },
    { term: "Hugo de Vries", def: "Mutation theory (saltation)" },
    { term: "p² + 2pq + q² = 1", def: "Hardy–Weinberg equation" },
    { term: "Genetic drift", def: "Random allele-frequency change" },
    { term: "Founder effect", def: "Drift in a new small population" },
    { term: "Australopithecus", def: "First upright primate (~3–4 mya)" },
    { term: "Neanderthal", def: "1400 cc brain; buried the dead" }
  ],

  /* ---------------- BUILD THE PATHWAY (4 sets) ---------------- */
  pathways: [
    { title: "Origin of life", prompt: "Order the origin-of-life sequence.", steps: ["Big Bang (~20 bya)", "Earth forms (~4.5 bya)", "Reducing atmosphere (CH₄, NH₃, H₂)", "Chemical evolution of organic molecules", "First cellular life (~2 bya)"] },
    { title: "Miller–Urey experiment", prompt: "Order Miller's experiment.", steps: ["Mix CH₄, NH₃, H₂, water vapour", "Apply electric discharge", "Condense the mixture", "Amino acids formed"] },
    { title: "Human evolution", prompt: "Order the human evolutionary line.", steps: ["Dryopithecus/Ramapithecus (~15 mya)", "Australopithecus (~3–4 mya)", "Homo habilis (~2 mya)", "Homo erectus (~1.5 mya)", "Neanderthal man", "Homo sapiens"] },
    { title: "Natural selection (peppered moth)", prompt: "Order the industrial-melanism story.", steps: ["Light moths common on lichen", "Industrial soot darkens trees", "Light moths now visible to birds", "Dark moths survive & reproduce", "Dark moths become common"] }
  ],

  /* ---------------- BOSS BATTLE (hard MCQs) ---------------- */
  boss: [
    { q: "In a population, q² (aa) = 0.04. What is the frequency of the recessive allele q?", o: ["0.02", "0.2", "0.4", "0.16"], c: 1, e: "q = √0.04 = 0.2." },
    { q: "Continuing the above (q = 0.2), the frequency of heterozygotes (2pq) is:", o: ["0.16", "0.32", "0.64", "0.04"], c: 1, e: "p = 0.8, so 2pq = 2 × 0.8 × 0.2 = 0.32." },
    { q: "Which pair best contrasts divergent vs convergent evolution?", o: ["Homologous vs analogous organs", "Fossils vs embryos", "Drift vs selection", "Mutation vs recombination"], c: 0, e: "Homologous (divergent) vs analogous (convergent)." },
    { q: "A key difference between Darwinism and de Vries' theory is that de Vries emphasised:", o: ["Gradual variation", "Single-step large mutations (saltation)", "Use and disuse", "Common ancestry"], c: 1, e: "de Vries stressed saltation (discontinuous mutations)." },
    { q: "Placental wolf and Tasmanian (marsupial) wolf resembling each other is:", o: ["Divergent evolution", "Convergent evolution / adaptive radiation", "Genetic drift", "Lamarckism"], c: 1, e: "Two independent radiations converging in form." },
    { q: "If a small group colonises an island and its allele frequencies differ from the source, this is:", o: ["Natural selection", "Gene flow", "Founder effect", "Mutation"], c: 2, e: "The founder effect — a case of genetic drift." },
    { q: "Which condition would keep a population in Hardy–Weinberg equilibrium?", o: ["Frequent mutation", "Strong selection", "No migration, no drift, no selection, no mutation, random mating", "Small population size"], c: 2, e: "Equilibrium needs all five disturbing factors to be absent, plus random mating." },
    { q: "Stabilising selection is best shown by:", o: ["A shift to larger body size", "Two divergent forms", "Most offspring near the mean value", "Increase in mutation rate"], c: 2, e: "Stabilising selection favours the average and removes extremes." },
    { q: "Which sequence correctly lists increasing brain size?", o: ["Neanderthal < erectus < habilis", "habilis < erectus < Neanderthal", "erectus < habilis < Neanderthal", "sapiens < habilis < erectus"], c: 1, e: "650–800 (habilis) < 900 (erectus) < 1400 cc (Neanderthal)." },
    { q: "The reducing nature of the early atmosphere was important because:", o: ["It contained free oxygen", "The absence of O₂ allowed organic molecules to form and persist", "It was rich in ozone", "It had no carbon"], c: 1, e: "Free oxygen would oxidise organic molecules; a reducing atmosphere allowed chemical evolution." },
    { q: "Which is the best evidence that evolution is still occurring?", o: ["Fossils", "Homologous organs", "Antibiotic and pesticide resistance", "Vestigial organs"], c: 2, e: "Resistance evolving within our lifetime shows ongoing selection." },
    { q: "Thorn of Bougainvillea and tendril of Cucurbita are homologous because they:", o: ["Do the same job", "Arise from the same position (axillary bud) but differ in function", "Are found in animals", "Are analogous"], c: 1, e: "Same origin (axillary position), different functions — homology (divergent)." }
  ]
};

/* ===== Chapter 6 TOP-UP (extends flashcards -> 80, recall -> 50, mcqs -> 70) ===== */
(function(){
  var C = DATA.chapters.evolution;

  C.flashcards.push(
    { front: "What are vestigial organs? Give three human examples.", back: "Reduced, functionless remnants of organs useful in ancestors — e.g., vermiform appendix, wisdom teeth, nictitating membrane (plica semilunaris), ear muscles, body hair." },
    { front: "What do vestigial organs indicate?", back: "Common ancestry — they are evidence of evolution from ancestors in whom the organ was functional." },
    { front: "Which fossil is the connecting link between reptiles and birds?", back: "Archaeopteryx." },
    { front: "Which reptilian and avian features did Archaeopteryx show?", back: "Bird-like: feathers and wings. Reptile-like: teeth in jaws, a long bony tail and clawed digits on the wings." },
    { front: "Give an example of a 'living fossil'.", back: "Limulus (king crab), Sphenodon, Latimeria (coelacanth), and Ginkgo — little-changed over long geological time." },
    { front: "What is biochemical/molecular evidence for evolution?", back: "Similarity in fundamental molecules (DNA, proteins like cytochrome-c) across species; the more related two species, the more alike their molecules." },
    { front: "What are coacervates?", back: "Oparin's proposed membrane-bound droplets of organic molecules that could have been the precursors of the first cells (protobionts)." },
    { front: "What were the earliest organisms like?", back: "Simple anaerobic, chemoheterotrophic prokaryotes living in the primitive ocean without free oxygen." },
    { front: "How did free oxygen appear in Earth's atmosphere?", back: "Through photosynthesis by early cyanobacteria (blue-green algae)." },
    { front: "Name the three geological eras in order (recent last).", back: "Palaeozoic → Mesozoic → Cenozoic." },
    { front: "Which era is called the 'Age of Reptiles'?", back: "The Mesozoic era — dinosaurs dominated it." },
    { front: "Which era is called the 'Age of Mammals'?", back: "The Cenozoic era — mammals (and flowering plants) diversified." },
    { front: "What is convergent evolution?", back: "Unrelated groups independently evolving similar features (analogous organs) due to similar environments — e.g., flippers of penguins and dolphins." },
    { front: "What is divergent evolution?", back: "A common ancestral structure modified for different functions (homologous organs) — e.g., forelimbs of whale, bat, cheetah and human." },
    { front: "What is speciation?", back: "The evolutionary process by which new species arise from existing ones." },
    { front: "What is reproductive isolation?", back: "Barriers that prevent interbreeding between populations, allowing them to diverge into separate species." },
    { front: "Distinguish microevolution and macroevolution.", back: "Microevolution = small changes in allele frequency within a population; macroevolution = large-scale changes producing new species and higher groups over long time." },
    { front: "Allopatric vs sympatric speciation?", back: "Allopatric: new species form when populations are geographically separated. Sympatric: new species form within the same area without physical separation." },
    { front: "Hardy–Weinberg: if q² = 0.04, what is the carrier frequency (2pq)?", back: "q = 0.2, p = 0.8, so carriers 2pq = 2 × 0.8 × 0.2 = 0.32 (32%)." },
    { front: "Sweet potato and potato — homologous or analogous?", back: "Analogous — sweet potato is a modified root and potato a modified stem, but both store food (similar function, different origin)." },
    { front: "Thorn of Bougainvillea and tendril of Cucurbita — homologous or analogous?", back: "Homologous — both arise from the axillary bud position but serve different functions (protection vs climbing)." },
    { front: "Who was Cro-Magnon man?", back: "An early modern human (Homo sapiens) of Europe, ~34,000–10,000 years ago, associated with cave art and tool-making." },
    { front: "Compare Dryopithecus and Ramapithecus.", back: "Dryopithecus was more ape-like (hairy, walked like a gorilla); Ramapithecus was more man-like — both lived ~15 million years ago." },
    { front: "Describe Australopithecus.", back: "Lived ~3–4 mya in East African grasslands, walked upright, ~500 cc brain, ate fruits and hunted with stone weapons." },
    { front: "Give the correct sequence of human evolution.", back: "Dryopithecus/Ramapithecus → Australopithecus → Homo habilis → Homo erectus → Homo neanderthalensis → Homo sapiens." },
    { front: "Which cytochrome-based evidence supports common ancestry?", back: "The near-identical structure of respiratory proteins like cytochrome-c across diverse organisms — a molecular homology." }
  );

  C.recall.push(
    { q: "What are vestigial organs and how do they support evolution?", hint: "Reduced remnants.", a: "Vestigial organs are reduced, non-functional structures that were functional in ancestors — e.g., the appendix, wisdom teeth and nictitating membrane in humans. Their presence points to descent with modification from ancestors that used them." },
    { q: "Describe Archaeopteryx as a connecting link.", hint: "Reptile + bird.", a: "Archaeopteryx had feathers and wings like birds but also teeth, a long bony tail and clawed wing-digits like reptiles. This mix shows birds evolved from reptilian ancestors — a fossil connecting link." },
    { q: "Give the biochemical (molecular) evidence for evolution.", hint: "Shared molecules.", a: "All life uses the same DNA/RNA, genetic code, ATP and similar proteins. The degree of similarity in molecules such as cytochrome-c mirrors evolutionary relatedness — strong evidence of common ancestry." },
    { q: "Describe coacervates and the origin of the first cells.", hint: "Oparin's droplets.", a: "Oparin suggested organic molecules in the primitive ocean aggregated into membrane-bound coacervates. These protobionts could exchange materials with surroundings and, on acquiring self-replication, gave rise to the first primitive cells." },
    { q: "Outline the geological eras and their dominant life forms.", hint: "Palaeozoic, Mesozoic, Cenozoic.", a: "Palaeozoic — first land plants, amphibians and reptiles; Mesozoic — 'age of reptiles', dinosaurs and first birds/mammals; Cenozoic — 'age of mammals', flowering plants and eventually humans." },
    { q: "Explain how oxygen entered the early atmosphere.", hint: "Photosynthesis.", a: "The early atmosphere was reducing, without free oxygen. Photosynthetic cyanobacteria released O₂ as a by-product; it gradually accumulated, formed the ozone layer, and enabled aerobic life." },
    { q: "Define speciation and reproductive isolation.", hint: "New species, barriers.", a: "Speciation is the formation of new species from existing ones. It requires reproductive isolation — barriers (geographic, behavioural, temporal, etc.) that stop gene flow, letting populations diverge until they can no longer interbreed." },
    { q: "Distinguish microevolution from macroevolution.", hint: "Scale.", a: "Microevolution is small-scale change in allele frequencies within a population (e.g., pesticide resistance). Macroevolution is large-scale change over long time producing new species, genera and higher taxa." },
    { q: "Distinguish allopatric and sympatric speciation.", hint: "Geography.", a: "In allopatric speciation, a physical barrier separates populations, which then diverge (e.g., Darwin's finches on different islands). In sympatric speciation, new species arise within the same area without geographic separation." },
    { q: "Solve: in a population, 4% show a recessive trait. Find carrier frequency.", hint: "q² = 0.04.", a: "q² = 0.04 → q = 0.2; p = 1 − 0.2 = 0.8. Carriers = 2pq = 2 × 0.8 × 0.2 = 0.32, i.e., 32% of the population are heterozygous carriers." },
    { q: "Explain why allele frequencies stay constant in an ideal population.", hint: "Hardy–Weinberg conditions.", a: "If the population is large, mates randomly, and has no mutation, migration, genetic drift or selection, allele frequencies (p and q) and genotype frequencies (p², 2pq, q²) remain constant — genetic equilibrium." },
    { q: "Explain convergent and divergent evolution with examples.", hint: "Analogy vs homology.", a: "Convergent evolution gives analogous organs in unrelated groups facing similar demands (wings of insects, birds, bats). Divergent evolution modifies a common ancestral structure for different roles, giving homologous organs (mammalian forelimbs)." },
    { q: "Give three examples each of homologous and analogous organs.", hint: "Origin vs function.", a: "Homologous: forelimbs of whale/bat/human; thorn of Bougainvillea & tendril of Cucurbita; vertebrate hearts. Analogous: wings of butterfly & bird; eyes of octopus & mammal; flippers of penguin & dolphin; sweet potato (root) & potato (stem)." },
    { q: "Describe adaptive radiation on the Galapagos and in Australia.", hint: "Finches and marsupials.", a: "On the Galapagos, one ancestral finch radiated into many species with different beaks (Darwin's finches). In isolated Australia, ancestral marsupials radiated into diverse forms (kangaroo, koala, wombat) filling many niches — both examples of adaptive radiation." },
    { q: "Explain how DDT/antibiotic resistance illustrates natural selection.", hint: "Pre-existing variation.", a: "A few individuals already carry resistance genes. When DDT or an antibiotic is applied, susceptible ones die and resistant ones survive and reproduce, so resistance spreads quickly — natural selection observed within our lifetime." },
    { q: "Contrast de Vries' and Darwin's views on how species form.", hint: "Saltation vs gradualism.", a: "Darwin held that species arise gradually by selection of small heritable variations. De Vries proposed that large, sudden mutations (saltation) create new species in a single step. Modern biology favours gradual change with mutation as raw material." },
    { q: "Describe the main stages in the origin of life.", hint: "Chemical then biological.", a: "Chemical evolution: simple gases formed organic monomers (Miller–Urey), which polymerised and aggregated into coacervates/protobionts. Biological evolution began when these acquired self-replication and membranes, producing the first anaerobic prokaryotic cells." },
    { q: "Why is the Miller–Urey experiment significant for the Oparin–Haldane idea?", hint: "Lab support.", a: "By sparking a mixture of CH₄, NH₃, H₂ and water vapour, Miller and Urey produced amino acids, showing that organic building blocks of life could form abiotically under early-Earth conditions — direct support for chemical evolution." },
    { q: "Trace the sequence of human evolution with brain sizes.", hint: "Habilis → sapiens.", a: "Australopithecus (~500 cc) → Homo habilis (~650–800 cc) → Homo erectus (~900 cc) → Homo neanderthalensis (~1400 cc) → Homo sapiens (~1350 cc), showing a general trend of increasing brain size and tool use." },
    { q: "What features distinguish Neanderthals from modern humans?", hint: "Robust vs gracile.", a: "Neanderthals (Homo neanderthalensis, ~1400 cc brain) were robust, heavy-browed, cold-adapted and used tools and buried their dead. Modern Homo sapiens are more gracile, arose in Africa, and spread worldwide, developing agriculture and art." }
  );

  C.mcqs.push(
    { q: "The vermiform appendix in humans is an example of a:", o: ["Homologous organ", "Analogous organ", "Vestigial organ", "Connecting link"], c: 2, e: "It is a reduced, functionless remnant — a vestigial organ." },
    { q: "The connecting link between reptiles and birds is:", o: ["Peripatus", "Archaeopteryx", "Sphenodon", "Latimeria"], c: 1, e: "Archaeopteryx shows both reptilian and avian features." },
    { q: "Archaeopteryx resembled reptiles in having:", o: ["Feathers", "Wings", "Teeth and a long bony tail", "A four-chambered heart"], c: 2, e: "Teeth, clawed digits and a bony tail are reptilian traits." },
    { q: "A well-known 'living fossil' is:", o: ["Housefly", "Limulus (king crab)", "Frog", "Pigeon"], c: 1, e: "Limulus has changed little over geological time." },
    { q: "Coacervates in the origin-of-life scheme were proposed by:", o: ["Darwin", "Oparin", "Pasteur", "Miller"], c: 1, e: "Oparin proposed coacervates as precursors of cells." },
    { q: "The earliest organisms on Earth were most likely:", o: ["Aerobic eukaryotes", "Anaerobic prokaryotes", "Photosynthetic plants", "Multicellular animals"], c: 1, e: "Life began as anaerobic prokaryotes in an oxygen-free ocean." },
    { q: "Free oxygen first accumulated in the atmosphere due to:", o: ["Volcanic gases", "Photosynthesis by cyanobacteria", "Meteor impacts", "UV splitting of water only"], c: 1, e: "Cyanobacterial photosynthesis released O₂." },
    { q: "The era known as the 'Age of Reptiles' is the:", o: ["Palaeozoic", "Mesozoic", "Cenozoic", "Precambrian"], c: 1, e: "Dinosaurs dominated the Mesozoic." },
    { q: "Mammals became the dominant land vertebrates during the:", o: ["Palaeozoic", "Mesozoic", "Cenozoic", "Archean"], c: 2, e: "The Cenozoic is the 'Age of Mammals'." },
    { q: "Similarity of cytochrome-c among many species is an example of ___ evidence:", o: ["Palaeontological", "Anatomical", "Biochemical (molecular)", "Embryological"], c: 2, e: "Shared molecules indicate common ancestry." },
    { q: "If 4% of a population shows a recessive trait (q² = 0.04), the frequency of carriers (2pq) is:", o: ["0.16", "0.20", "0.32", "0.64"], c: 2, e: "q = 0.2, p = 0.8, 2pq = 0.32." },
    { q: "Flippers of penguins and dolphins are:", o: ["Homologous (divergent)", "Analogous (convergent)", "Vestigial", "Connecting links"], c: 1, e: "Similar form for swimming from unrelated ancestors — analogous." },
    { q: "Divergent evolution gives rise to:", o: ["Analogous organs", "Homologous organs", "Vestigial organs", "Living fossils"], c: 1, e: "A common structure diversifies into homologous organs." },
    { q: "The essential requirement for speciation is:", o: ["Large body size", "Reproductive isolation", "High mutation only", "Long lifespan"], c: 1, e: "Isolation stops gene flow, allowing divergence." },
    { q: "Sweet potato (modified root) and potato (modified stem) are:", o: ["Homologous", "Analogous", "Vestigial", "Connecting links"], c: 1, e: "Same function (storage), different origins — analogous." },
    { q: "Formation of new species from geographically separated populations is:", o: ["Sympatric speciation", "Allopatric speciation", "Convergence", "Genetic drift"], c: 1, e: "Geographic separation defines allopatric speciation." },
    { q: "Compared with Dryopithecus, Ramapithecus was:", o: ["More ape-like", "More man-like", "Fully aquatic", "A reptile"], c: 1, e: "Ramapithecus showed more man-like features." },
    { q: "Cro-Magnon man belonged to the species:", o: ["Homo habilis", "Homo erectus", "Homo sapiens", "Australopithecus"], c: 2, e: "Cro-Magnons were early modern Homo sapiens." },
    { q: "The correct sequence of human evolution is:", o: ["Homo erectus → Australopithecus → Homo habilis → Homo sapiens", "Australopithecus → Homo habilis → Homo erectus → Homo sapiens", "Homo habilis → Australopithecus → Homo sapiens → Homo erectus", "Homo sapiens → Homo erectus → Homo habilis → Australopithecus"], c: 1, e: "Australopithecus → habilis → erectus → sapiens." },
    { q: "The near-universality of the genetic code across species is evidence of the ___ type:", o: ["Anatomical", "Palaeontological", "Molecular", "Embryological"], c: 2, e: "Shared code implies common molecular ancestry." },
    { q: "Which pair are homologous organs?", o: ["Wings of bird and insect", "Forelimbs of whale and bat", "Eye of octopus and mammal", "Flippers of penguin and dolphin"], c: 1, e: "Whale and bat forelimbs share ancestry — homologous." }
  );
})();
