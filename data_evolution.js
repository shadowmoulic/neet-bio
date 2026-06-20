/* ====== data_evolution.js ====== */
DATA.chapters.evolution = {
  id: "evolution",
  num: 7,
  title: "Evolution",
  subtitle: "Origin of life, homologous/analogous organs, Darwinian theory, adaptive radiation, Hardy-Weinberg, and human evolution — NCERT Class 12 Chapter 7",
  color: "#f43f5e",
  colorD: "#9f1239",
  glyph: "🦖",

  notes: [
    {
      id: "origin_of_life",
      heading: "Origin of Life & Miller's Experiment",
      html: `
        <p>The universe is about <b>20 billion years old</b>, originating from the **Big Bang**. Earth formed about <b>4.5 billion years ago</b>, and life appeared <b>500 million years</b> later (4 billion years ago).</p>
        
        <h4>1. Theories of Origin of Life</h4>
        <ul>
          <li><b>Panspermia</b>: Units of life (spores) were transferred to different planets including Earth.</li>
          <li><b>Spontaneous Generation (Abiogenesis)</b>: Life came from decaying and rotting matter. Disproved by **Louis Pasteur** using pre-sterilised flasks (showed life comes only from pre-existing life).</li>
          <li><b>Oparin-Haldane Chemical Evolution</b>: First forms of life arose from non-living organic molecules (RNA, proteins) preceded by chemical evolution (formation of diverse organic molecules from inorganic constituents).</li>
        </ul>
        
        <h4>2. Miller-Urey Experiment (1953)</h4>
        <p>Harold Urey and Stanley Miller created conditions of primitive Earth (reducing atmosphere, high temp, volcanic storms) in a laboratory scale:</p>
        <ul>
          <li>Methane (<b>CH<sub>4</sub></b>), Ammonia (<b>NH<sub>3</sub></b>), Hydrogen (<b>H<sub>2</sub></b>), and Water vapour (<b>H<sub>2</sub>O</b>) at <b>800°C</b> in a closed flask.</li>
          <li>Electric discharge (lightning simulation) was applied.</li>
          <li>After 15 days, they observed the formation of **amino acids** (alanine, glycine, aspartic acid). Other scientists observed sugars, nitrogen bases, pigments, and fats.</li>
        </ul>
      `
    },
    {
      id: "evidences_for_evolution",
      heading: "Evidences for Evolution",
      html: `
        <h4>1. Paleontological Evidence</h4>
        <p>Fossils in different sedimentary layers indicate the geological period in which organisms existed. Shows that life forms varied over time and certain life forms were restricted to specific geological times.</p>
        
        <h4>2. Comparative Anatomy & Morphology</h4>
        <table class="cmp">
          <thead>
            <tr><th>Homologous Organs (Divergent Evolution)</th><th>Analogous Organs (Convergent Evolution)</th></tr>
          </thead>
          <tbody>
            <tr><td>Shared ancestry, similar anatomical structure, but perform **different functions**.</td><td>Different origins, different structures, but perform **similar functions** due to similar habitats.</td></tr>
            <tr><td><b>Examples</b>:
              <ul>
                <li>Bones of forelimbs in Whales, Bats, Cheetahs, and Humans.</li>
                <li>Thorns of <i>Bougainvillea</i> and Tendrils of <i>Cucurbita</i>.</li>
              </ul>
            </td><td><b>Examples</b>:
              <ul>
                <li>Wings of Butterfly and Birds.</li>
                <li>Eye of Octopus and Mammals.</li>
                <li>Flippers of Penguins and Dolphins.</li>
                <li>Sweet potato (root modification) and Potato (stem modification).</li>
              </ul>
            </td></tr>
          </tbody>
        </table>

        <h4>3. Adaptive Radiation</h4>
        <p>The process of evolution of different species starting from a point in a geographical area and radiating to other areas (habitats). E.g., **Darwin's Finches** in Galapagos Islands (evolved from seed-eating ancestors to insectivorous/vegetarian finches with different beak shapes) and **Australian Marsupials**.</p>
      `
    },
    {
      id: "evolutionary_theories",
      heading: "Theories of Evolution",
      html: `
        <h4>1. Lamarckism (Theory of Use & Disuse)</h4>
        <p>Proposed by Jean Baptiste Lamarck. Evolution of life forms occurred by the use and disuse of organs. E.g., Giraffes elongated their necks to forage leaves on tall trees, passing this acquired character to progeny. Disproved by modern genetics.</p>

        <h4>2. Darwinian Theory of Natural Selection</h4>
        <p>Proposed by Charles Darwin (based on observations during his voyage on **H.M.S. Beagle**). Two key concepts:</p>
        <ul>
          <li><b>Branching Descent</b>: Diverse species evolved from common ancestors.</li>
          <li><b>Natural Selection</b>: Nature selects organisms with useful variations that make them better adapted to survive and reproduce (high **fitness**).</li>
        </ul>

        <h4>3. Mutation Theory (Hugo de Vries)</h4>
        <p>Based on work on evening primrose (<i>Oenothera lamarckiana</i>). He proposed that mutations are the source of evolution.</p>
        <ul>
          <li>Darwinian variations are minor, slow, and directional.</li>
          <li>De Vries mutations are **random, sudden, and directionless**.</li>
          <li>De Vries believed mutation caused speciation in a single step, termed **Saltation** (single-step large mutation).</li>
        </ul>
      `
    },
    {
      id: "hardy_weinberg",
      heading: "Hardy-Weinberg Principle",
      html: `
        <p>In a given population, allele frequencies are stable and constant from generation to generation. This is called genetic equilibrium. The total gene pool (all alleles in a population) remains constant.</p>
        
        <h4>Mathematical Expression</h4>
        <p>If $p$ and $q$ represent the frequencies of allele $A$ and allele $a$ respectively:</p>
        <p align="center"><b>$p^2 + 2pq + q^2 = 1$</b></p>
        <p>Where $p^2$ = frequency of AA (homozygous dominant), $q^2$ = frequency of aa (homozygous recessive), and $2pq$ = frequency of Aa (heterozygous).</p>
        
        <h4>Factors Affecting Hardy-Weinberg Equilibrium</h4>
        <ul>
          <li><b>Gene Migration/Gene Flow</b>: Gene frequencies change in both donor and recipient populations.</li>
          <li><b>Genetic Drift</b>: Random change in allele frequencies occurring by chance in small populations. Can lead to **Founder Effect** (a small group starts a new colony, and their alleles dictate the new population's genetic makeup).</li>
          <li><b>Mutation</b>: Introduces new alleles.</li>
          <li><b>Genetic Recombination</b>: Occurs during crossing over in meiosis.</li>
          <li><b>Natural Selection</b>: Leads to three types of curves:
            <ul>
              <li><b>Stabilising</b>: Selects mean character value (peak gets higher and narrower).</li>
              <li><b>Directional</b>: Selects one extreme value (peak shifts in one direction).</li>
              <li><b>Disruptive</b>: Selects both extreme values (two peaks form, splitting the population).</li>
            </ul>
          </li>
        </ul>
      `
    },
    {
      id: "human_evolution",
      heading: "Brief Account of Human Evolution",
      html: `
        <p>Chronological sequence of human ancestors:</p>
        <ol>
          <li><b>Dryopithecus / Ramapithecus</b> (15 mya): Hairy, walked like gorillas. Dryopithecus was more ape-like; Ramapithecus was more man-like.</li>
          <li><b>Australopithecines</b> (2 mya): Lived in East African grasslands. Hunted with stone weapons, essentially ate fruit.</li>
          <li><b>Homo habilis</b> (2 mya): First human-like hominid. Brain capacity <b>650–800 cc</b>. Did not eat meat.</li>
          <li><b>Homo erectus</b> (1.5 mya): Fossil discovered in Java (1891). Brain capacity <b>900 cc</b>. Ate meat.</li>
          <li><b>Neanderthal Man</b> (100,000–40,000 years ago): Lived in Near East and Central Asia. Brain size <b>1400 cc</b>. Used hides to protect bodies and buried their dead.</li>
          <li><b>Homo sapiens</b> (75,000–10,000 years ago): Arose in Africa during the last ice age. Developed cave art (18,000 years ago) and agriculture (10,000 years ago).</li>
        </ol>
      `
    }
  ],

  mnemonics: [
    {
      title: "Hardy-Weinberg Factors",
      device: "<b>G**iant **G**orillas **M**ake **R**eally **N**ice **S**nacks",
      expand: [
        { L: "G", t: "Gene Migration (Gene Flow)" },
        { L: "G", t: "Genetic Drift (Founder Effect / Bottleneck)" },
        { L: "M", t: "Mutation" },
        { L: "R", t: "Recombination (during meiosis)" },
        { L: "N", t: "Natural Selection" }
      ]
    },
    {
      title: "Miller's Gas Mixture",
      device: "<b>M**any **A**ngry **H**ippos **W**atered",
      expand: [
        { L: "M", t: "Methane (CH4)" },
        { L: "A", t: "Ammonia (NH3)" },
        { L: "H", t: "Hydrogen (H2)" },
        { L: "W", t: "Water vapour (H2O)" }
      ]
    },
    {
      title: "Human Ancestor Brain Capacities",
      device: "<b>H**andy **E**rect **N**eanderthals",
      expand: [
        { L: "Habilis", t: "Homo habilis — 650–800 cc (handy man)" },
        { L: "Erectus", t: "Homo erectus — 900 cc" },
        { L: "Neanderthal", t: "Neanderthal man — 1400 cc" }
      ]
    }
  ],

  flashcards: [
    { front: "What is the estimated age of Earth and when did life first appear?", back: "Earth formed ~4.5 billion years ago; life appeared ~4 billion years ago (500 million years after Earth's formation)." },
    { front: "Who experimentally disproved the theory of Spontaneous Generation?", back: "Louis Pasteur, using pre-sterilised swan-neck flasks to show that life arises only from pre-existing life." },
    { front: "State the gases and temperature used in Miller's experiment.", back: "Methane (CH<sub>4</sub>), Ammonia (NH<sub>3</sub>), Hydrogen (H<sub>2</sub>), and Water vapour (H<sub>2</sub>O) at 800°C." },
    { front: "What organic compounds were formed in Miller's experiment?", back: "Amino acids (specifically Glycine, Alanine, and Aspartic acid)." },
    { front: "What are homologous organs? Give two examples.", back: "Organs sharing common anatomical origin but serving different functions. E.g., Forelimbs of whale/bat/human, and thorns of Bougainvillea / tendrils of Cucurbita." },
    { front: "What evolutionary process does the homologous organs represent?", back: "Divergent evolution." },
    { front: "What are analogous organs? Give two examples.", back: "Organs with different structures but similar functions due to adaptation to similar habitats. E.g., Wings of butterfly/bird, and sweet potato (root) / potato (stem)." },
    { front: "What evolutionary process do analogous organs represent?", back: "Convergent evolution." },
    { front: "Define adaptive radiation with a key example.", back: "Evolution of different species starting from a point in a geographical area and radiating to other habitats. E.g., Darwin's Finches in Galapagos or Australian Marsupials." },
    { front: "State the two key concepts of Darwin's theory of evolution.", back: "1. Branching Descent (common ancestry), 2. Natural Selection (survival of the fittest)." },
    { front: "How do Darwinian variations differ from mutations according to Hugo de Vries?", back: "Darwinian variations are small, slow, and directional. Hugo de Vries mutations are random, sudden, and directionless." },
    { front: "What is saltation?", back: "A single-step large mutation that Hugo de Vries believed caused speciation." },
    { front: "Write the mathematical equation representing Hardy-Weinberg equilibrium.", back: "p<sup>2</sup> + 2pq + q<sup>2</sup> = 1 (where p & q are allele frequencies)." },
    { front: "What is genetic drift and where does it occur?", back: "Random change in allele frequencies occurring purely by chance, primarily operating in small populations. Can cause the Founder Effect." },
    { front: "Name the three types of natural selection curves.", back: "1. Stabilising selection, 2. Directional selection, 3. Disruptive selection." },
    { front: "State the brain capacity of Homo habilis and their diet.", back: "Brain capacity: 650–800 cc. They did not eat meat." },
    { front: "Which human ancestor is known to have buried their dead first?", back: "Neanderthal man (brain capacity 1400 cc, lived 100,000–40,000 years ago)." }
  ],

  recall: [
    {
      q: "Explain Oparin and Haldane's theory of chemical evolution and how it was tested.",
      hint: "reducing atmosphere, Stanley Miller, 800°C, amino acids",
      a: "Oparin and Haldane proposed that life originated from non-living organic molecules ('life from non-life') preceded by chemical evolution. Stanley Miller and Harold Urey tested this in 1953 by building an apparatus simulating early Earth conditions: a closed system with CH4, NH3, H2, and H2O at 800°C with electric sparks. After 15 days, they detected amino acids (glycine, alanine, aspartic acid), proving organic monomers can form spontaneously in a reducing atmosphere."
    },
    {
      q: "Compare divergent and convergent evolution with anatomical examples.",
      hint: "homologous vs analogous, common ancestor vs habitat adapt",
      a: "<b>Divergent Evolution</b>: Organisms with a common ancestor adapt along different paths, yielding <b>homologous organs</b> (same structure, different functions). E.g., forelimb bones of whales, cheetahs, and humans. <b>Convergent Evolution</b>: Unrelated organisms adapt to similar environments, yielding <b>analogous organs</b> (different structures, same function). E.g., eye of octopus vs mammal, or sweet potato (root) vs potato (stem)."
    },
    {
      q: "Discuss the Hardy-Weinberg principle and the factors that disrupt genetic equilibrium.",
      hint: "p2+2pq+q2=1, gene flow, genetic drift, founder effect",
      a: "The Hardy-Weinberg principle states that allele frequencies in a population remain stable and constant (equilibrium) from generation to generation in the absence of evolutionary forces. It is expressed as p^2 + 2pq + q^2 = 1. Equilibrium is disrupted by: 1. Gene migration/flow, 2. Genetic drift (random changes in small populations), 3. Mutation, 4. Genetic recombination (meiosis), and 5. Natural selection."
    },
    {
      q: "Describe the three types of natural selection patterns.",
      hint: "stabilising, directional, disruptive, peaks",
      a: "1. <b>Stabilising Selection</b>: Nature selects the mean value. The peak of the curve narrows and tallies (e.g., medium birth weight in babies). 2. <b>Directional Selection</b>: Nature selects one extreme value, shifting the entire peak in one direction (e.g., industrial melanism in peppered moths). 3. <b>Disruptive Selection</b>: Nature selects both extreme values over the mean, forming two peaks and eventually splitting the population."
    },
    {
      q: "Provide a chronological account of human evolution from Ramapithecus to Homo sapiens.",
      hint: "Ramapithecus, habilis, erectus, Neanderthal, brain capacities",
      a: "Human evolution sequence: 1. <b>Ramapithecus</b> (15 mya): man-like hominid. 2. <b>Australopithecines</b> (2 mya): walked upright, used stone tools. 3. <b>Homo habilis</b> (2 mya): brain 650-800 cc, herbivore, first hominid. 4. <b>Homo erectus</b> (1.5 mya): brain 900 cc, carnivore, Java man. 5. <b>Neanderthals</b> (100k-40k ya): brain 1400 cc, buried dead, wore hides. 6. <b>Homo sapiens</b> (75k-10k ya): modern man, arose in Africa, developed cave art and farming."
    }
  ],

  mcqs: [
    {
      q: "Miller's experiment did NOT use which of the following gases?",
      o: ["Methane", "Ammonia", "Oxygen", "Hydrogen"],
      c: 2,
      e: "Primitive Earth had a reducing atmosphere lacking free oxygen (O<sub>2</sub>). Miller simulated this using CH<sub>4</sub>, NH<sub>3</sub>, H<sub>2</sub>, and H<sub>2</sub>O."
    },
    {
      q: "Thorns of Bougainvillea and tendrils of Cucurbita are examples of:",
      o: ["Analogous organs", "Homologous organs", "Vestigial organs", "Retrogressive organs"],
      c: 1,
      e: "Both thorns of Bougainvillea and tendrils of Cucurbita arise from the axillary position (anatomically homologous), but thorns protect while tendrils climb."
    },
    {
      q: "Convergent evolution is best illustrated by:",
      o: ["Darwin's finches", "Flippers of penguins and dolphins", "Bones of bat wings and cheetah paws", "Bougainvillea thorns and Cucurbita tendrils"],
      c: 1,
      e: "Flippers of penguins (birds) and dolphins (mammals) have different anatomical structures but serve the same function (swimming), representing convergent evolution."
    },
    {
      q: "According to Hugo de Vries, mutations are:",
      o: ["Small and directional", "Random and directionless", "Large and directional", "Small and random"],
      c: 1,
      e: "Hugo de Vries proposed that mutations occur suddenly, are random and directionless, in contrast to Darwin's small, gradual, and directional variations."
    },
    {
      q: "Hardy-Weinberg equilibrium is disrupted by genetic drift, which is a random change in allele frequencies occurring in:",
      o: ["Very large populations", "Small populations", "Populations with high gene flow", "None of the above"],
      c: 1,
      e: "Genetic drift represents random fluctuations in allele frequencies that occur by chance, which has a significant impact specifically in small populations."
    },
    {
      q: "Which type of natural selection shifts the population peak towards one extreme character value?",
      o: ["Stabilising selection", "Directional selection", "Disruptive selection", "Artificial selection"],
      c: 1,
      e: "Directional selection selects individuals at one extreme of the phenotypic range, causing the peak of the curve to shift in that direction."
    },
    {
      q: "The hominid ancestor with a brain capacity of 900 cc who ate meat was:",
      o: ["Homo habilis", "Homo erectus", "Neanderthal man", "Australopithecus"],
      c: 1,
      e: "Homo erectus lived about 1.5 million years ago, had a brain capacity of 900 cc, and fossils indicate they ate meat."
    },
    {
      q: "The first human ancestor to bury their dead was:",
      o: ["Homo habilis", "Neanderthal Man", "Homo erectus", "Cro-Magnon Man"],
      c: 1,
      e: "Neanderthal man, who lived near East and Central Asia (100,000–40,000 years ago) with a 1400 cc brain, used hides and buried their dead."
    }
  ],

  match: [
    { term: "Big Bang", def: "Origin of universe 20 billion years ago" },
    { term: "Louis Pasteur", def: "Disproved spontaneous generation" },
    { term: "Miller & Urey", def: "Electric discharge simulating primitive Earth" },
    { term: "Divergent evolution", def: "Homologous organs like whale and human limbs" },
    { term: "Convergent evolution", def: "Analogous organs like sweet potato and potato" },
    { term: "Galapagos Finches", def: "Classic example of adaptive radiation" },
    { term: "Saltation", def: "Single-step large mutation causing speciation" },
    { term: "Founder Effect", def: "Genetic drift starting a new colony" },
    { term: "Homo habilis", def: "First human-like hominid (650-800 cc)" },
    { term: "Neanderthal", def: "1400 cc brain, buried dead" }
  ],

  pathways: [
    {
      title: "Hardy-Weinberg Genetic Drift (Founder Effect)",
      prompt: "Order the stages leading to the Founder Effect.",
      steps: [
        "A large parental population exists in equilibrium",
        "A small group of individuals is isolated or migrates away",
        "The colonisers carry only a random subset of original alleles",
        "The colonisers reproduce in isolation in the new habitat",
        "The new population exhibits significantly altered allele frequencies",
        "The isolated group forms a distinct new species (Founder Effect)"
      ]
    },
    {
      title: "Human Evolutionary Sequence",
      prompt: "Order the human ancestors from oldest to most modern.",
      steps: [
        "Dryopithecus and Ramapithecus",
        "Australopithecines in East Africa",
        "Homo habilis (650-800 cc)",
        "Homo erectus (900 cc)",
        "Neanderthal Man (1400 cc)",
        "Homo sapiens (modern human)"
      ]
    }
  ]
};
