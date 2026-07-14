/* ====== data_sexual_repro.js ====== */
DATA.chapters.sexual_repro = {
  id: "sexual_repro",
  num: 2,
  title: "Sexual Reproduction in Flowering Plants",
  subtitle: "Microsporogenesis, megasporogenesis, pollination types, double fertilization, endosperm, embryogeny, and apomixis — NCERT Class 12 Chapter 2",
  color: "#f59e0b",
  colorD: "#b45309",
  glyph: "🌸",

  notes: [
    {
      id: "male_gametophyte",
      heading: "Stamen, Microsporangium & Pollen Grain",
      html: `
        <p>A typical stamen consists of a long slender stalk called **filament** and a terminal bilateral structure called **anther**. The anther is typically <b>bilobed and dithecous</b> (two thecae per lobe), and contains four microsporangia (tetrasporangiate).</p>
        
        <h4>1. Structure of Microsporangium</h4>
        <p>A microsporangium is surrounded by four wall layers:</p>
        <ul>
          <li><b>Epidermis</b>: Outer single protective layer.</li>
          <li><b>Endothecium</b>: Fibrous layer helping in anther dehiscence.</li>
          <li><b>Middle layers</b>: 1-3 layers that degenerate at maturity.</li>
          <li><b>Tapetum</b>: Innermost layer. It has dense cytoplasm and is generally **multinucleate**. It nourishes the developing pollen grains.</li>
        </ul>
        <p>At the center of each microsporangium is the **sporogenous tissue** in young anthers.</p>
        
        <h4>2. Microsporogenesis</h4>
        <p>The process of formation of microspores from a pollen mother cell (PMC) through meiosis. PMCs undergo meiosis to form a tetrad of microspores. As the anther matures and dehydrates, the microspores dissociate and develop into **pollen grains**.</p>
        
        <h4>3. Pollen Grain Structure</h4>
        <p>Represents the male gametophyte. It has a two-layered wall:</p>
        <ul>
          <li><b>Exine</b>: Hard outer layer made of **sporopollenin** (one of the most resistant organic materials known; tolerates high temp, strong acids/alkali; no enzyme can degrade it). It has **germ pores** where sporopollenin is absent.</li>
          <li><b>Intine</b>: Thin, continuous inner wall made of cellulose and pectin.</li>
        </ul>
        <p>A mature pollen grain has two cells:</p>
        <ul>
          <li><b>Vegetative cell</b>: Larger, rich food reserves, large irregular nucleus.</li>
          <li><b>Generative cell</b>: Small, spindle-shaped, floats in vegetative cell cytoplasm. It divides mitotically to form **two male gametes**.</li>
        </ul>
        <div class="callout"><b>Pollen Shedding Stage:</b> In over 60% of angiosperms, pollen is shed at the <b>2-celled stage</b> (vegetative + generative). In the remaining species, the generative cell divides first, and pollen is shed at the <b>3-celled stage</b>.</div>
      `
    },
    {
      id: "female_gametophyte",
      heading: "Pistil, Ovule & Megasporogenesis",
      html: `
        <p>The gynoecium represents the female reproductive part and consists of stigma, style, and ovary. Within the ovary is the ovarian cavity containing the placenta, from which megasporangia (commonly called **ovules**) arise.</p>
        
        <h4>1. Structure of Megasporangium (Ovule)</h4>
        <p>Key regions of a typical anatropous ovule:</p>
        <ul>
          <li><b>Funicle</b>: Stalk attaching the ovule to the placenta.</li>
          <li><b>Hilum</b>: Junction where the body of the ovule fuses with the funicle.</li>
          <li><b>Integuments</b>: Protective envelopes (outer & inner) surrounding the nucellus.</li>
          <li><b>Micropyle</b>: Small opening at the tip where integuments are absent.</li>
          <li><b>Chalaza</b>: Basal part of the ovule, opposite the micropylar end.</li>
          <li><b>Nucellus</b>: Central mass of parenchymatous cells containing abundant food reserves.</li>
        </ul>

        <h4>2. Megasporogenesis & Embryo Sac Development</h4>
        <p>The process of formation of megaspores from the Megaspore Mother Cell (MMC). A single MMC in the micropylar region of the nucellus undergoes meiosis to form a tetrad of four megaspores. </p>
        <p>In most flowering plants, <b>three megaspores degenerate, and only one remains functional</b>. The functional megaspore develops into the female gametophyte (embryo sac) through mitotic divisions. This is called **monosporic development**.</p>
        
        <h4>3. The 7-Celled, 8-Nucleate Embryo Sac</h4>
        <p>A mature embryo sac has a unique distribution of 8 nuclei in 7 cells:</p>
        <ul>
          <li><b>Egg apparatus</b> (at the micropylar end): Comprises **two synergids** and **one egg cell**. Synergids have finger-like **filiform apparatus** that guide the pollen tube.</li>
          <li><b>Antipodals</b> (at the chalazal end): Three cells.</li>
          <li><b>Central cell</b>: The largest single cell containing **two polar nuclei**.</li>
        </ul>
      `
    },
    {
      id: "pollination_mechanisms",
      heading: "Pollination & Outbreeding Devices",
      html: `
        <p><b>Pollination</b> is the transfer of pollen grains from the anther to the stigma of a pistil.</p>
        
        <h4>1. Kinds of Pollination</h4>
        <ul>
          <li><b>Autogamy</b>: Transfer of pollen from anther to stigma of the *same* flower. E.g., <i>Viola</i>, <i>Oxalis</i>, <i>Commelina</i>. These plants produce:
            <ul>
              <li><b>Chasmogamous flowers</b>: Exposed anthers and stigma.</li>
              <li><b>Cleistogamous flowers</b>: Never open; assure seed-set even in the absence of pollinators; strictly autogamous.</li>
            </ul>
          </li>
          <li><b>Geitonogamy</b>: Transfer of pollen from anther of one flower to stigma of another flower on the *same* plant. Functionally cross-pollination, but genetically self-pollination.</li>
          <li><b>Xenogamy</b>: Transfer of pollen from anther to stigma of a *different* plant. Brings genetically different pollens.</li>
        </ul>

        <h4>2. Agents of Pollination</h4>
        <ul>
          <li><b>Wind (Anemophily)</b>: Pollen grains are light and non-sticky; stamens well-exposed; stigmas feathery. Commonly single ovule per ovary. E.g., Corn cob (tassels are stigma & style), grasses.</li>
          <li><b>Water (Hydrophily)</b>: Rare, mostly in monocots. E.g., <i>Vallisneria</i>, <i>Hydrilla</i>, and <i>Zostera</i> (seagrass). Pollen grains are long, ribbon-like, and protected by a mucilaginous coat.</li>
          <li><b>Biotic Agents (Animals/Insects)</b>: Most common biotic pollinating agents are bees. Flowers are large, colourful, fragrant, and rich in nectar. Floral rewards include nectar and pollen grains, or safe egg-laying sites (e.g., <i>Amorphophallus</i>, and the <i>Yucca</i> plant/moth relationship).</li>
        </ul>

        <h4>3. Outbreeding Devices</h4>
        <p>Mechanisms to discourage self-pollination and encourage cross-pollination (to avoid inbreeding depression):</p>
        <ul>
          <li>Pollen release and stigma receptivity are not synchronised.</li>
          <li>Anther and stigma are placed at different positions.</li>
          <li><b>Self-incompatibility</b>: A genetic mechanism preventing self-pollen from fertilising the ovules by inhibiting pollen germination/tube growth.</li>
          <li>Production of unisexual flowers (e.g., castor, maize, papaya).</li>
        </ul>
      `
    },
    {
      id: "double_fertilisation",
      heading: "Pollen-Pistil Interaction & Double Fertilisation",
      html: `
        <h4>1. Pollen-Pistil Interaction</h4>
        <p>A dynamic process involving pollen recognition followed by promotion or inhibition. The pistil checks compatibility. Compatible pollen germinates on the stigma to produce a pollen tube, which grows through the tissues of the style, reaches the ovary, enters the micropyle of the ovule, and enters a synergid through the **filiform apparatus**.</p>
        
        <h4>2. The Double Fertilisation Event</h4>
        <p>Unique to angiosperms. The pollen tube releases <b>two male gametes</b> into the cytoplasm of the synergid:</p>
        <ul>
          <li><b>Syngamy</b>: One male gamete (n) moves towards the egg cell and fuses with its nucleus to form a diploid <b>Zygote (2n)</b>, which develops into the embryo.</li>
          <li><b>Triple Fusion</b>: The second male gamete (n) moves to the central cell and fuses with the two polar nuclei (2n) to form a triploid <b>Primary Endosperm Nucleus (PEN, 3n)</b>.</li>
        </ul>
        <p>Since two types of fusions (Syngamy and Triple Fusion) take place in an embryo sac, the phenomenon is termed **Double Fertilisation**. The central cell becomes the **Primary Endosperm Cell (PEC)** and develops into endosperm.</p>
      `
    },
    {
      id: "post_fertilisation",
      heading: "Post-Fertilisation Structures & Events",
      html: `
        <p>Post-fertilisation events include endosperm and embryo development, maturation of ovule into seed, and ovary into fruit.</p>
        
        <h4>1. Endosperm Development</h4>
        <p>Endosperm development **precedes** embryo development to ensure nutrition is available. 
          <ul>
            <li><b>Free-nuclear endosperm</b>: The PEN undergoes successive nuclear divisions without cell wall formation. E.g., Coconut water (contains thousands of free nuclei).</li>
            <li><b>Cellular endosperm</b>: Cell wall formation occurs subsequently. E.g., White coconut kernel (outer tissue).</li>
          </ul>
        </p>

        <h4>2. Embryo Development (Embryogeny)</h4>
        <p>The zygote gives rise to the proembryo, then to globular, heart-shaped, and mature embryo stages.</p>
        <ul>
          <li><b>Dicot Embryo</b>: Consists of an embryonal axis and <b>two cotyledons</b>. The portion of embryonal axis above cotyledons is the **epicotyl** (terminates in plumule). The portion below is the **hypocotyl** (terminates in radicle and root cap).</li>
          <li><b>Monocot Embryo</b>: Possesses only **one cotyledon**, called **scutellum** (placed laterally). The embryonal axis has the radical and root cap enclosed in an undifferentiated sheath called **coleorhiza**, and the shoot apex enclosed in a hollow foliar structure called **coleoptile**.</li>
        </ul>

        <h4>3. Seeds and Fruits</h4>
        <ul>
          <li><b>Non-albuminous (Non-endospermous) seeds</b>: Have no residual endosperm (completely consumed during development). E.g., Pea, groundnut.</li>
          <li><b>Albuminous (Endospermous) seeds</b>: Retain part of the endosperm. E.g., Wheat, maize, barley, castor, sunflower.</li>
          <li><b>Perisperm</b>: Persistent, residual nucellus in seeds. E.g., Black pepper, beet.</li>
          <li><b>False fruits</b>: Thalamus contributes to fruit formation along with ovary. E.g., Apple, strawberry, cashew. True fruits develop solely from the ovary. **Parthenocarpic fruits** develop without fertilisation (e.g., Banana).</li>
        </ul>

        <h4>4. Apomixis & Polyembryony</h4>
        <ul>
          <li><b>Apomixis</b>: Production of seeds without fertilisation (a form of asexual reproduction mimicking sexual reproduction). E.g., Asteraceae, grasses.</li>
          <li><b>Polyembryony</b>: Occurrence of more than one embryo in a seed. E.g., Citrus, Mango (nucellar cells protrude into embryo sac and develop into embryos).</li>
        </ul>
      `
    }
  ],

  mnemonics: [
    {
      title: "Microsporangium Wall Layers",
      device: "<b>E**very **E**ngineer **M**akes **T**alks",
      expand: [
        { L: "E", t: "Epidermis (outermost protective)" },
        { L: "E", t: "Endothecium (fibrous, dehiscence)" },
        { L: "M", t: "Middle layers (1-3 storage layers)" },
        { L: "T", t: "Tapetum (innermost nutrient layer, multinucleated)" }
      ]
    },
    {
      title: "Mature 7-Celled Embryo Sac",
      device: "<b>A**lways **S**ave **E**xtra **C**ash",
      expand: [
        { L: "A", t: "3 Antipodals (at chalazal end)" },
        { L: "S", t: "2 Synergids (at micropylar end)" },
        { L: "E", t: "1 Egg cell (together with synergids forms egg apparatus)" },
        { L: "C", t: "1 Central cell (largest cell, containing 2 polar nuclei)" }
      ]
    },
    {
      title: "Outbreeding Devices",
      device: "<b>S**top **S**elfing **P**ollen **P**lease",
      expand: [
        { L: "S", t: "Self-incompatibility (genetic block)" },
        { L: "S", t: "Spatial separation (different positions of anthers and stigma)" },
        { L: "P", t: "Pollen/stigma non-synchrony (different maturation times)" },
        { L: "P", t: "Production of unisexual flowers" }
      ]
    }
  ],

  flashcards: [
    { front: "What is the male reproductive part of the flower?", back: "Androecium (whorl of stamens)." },
    { front: "What does the anther typically consist of?", back: "It is bilobed, with each lobe having two thecae (dithecous)." },
    { front: "What is microsporogenesis?", back: "The process of formation of microspores from a pollen mother cell (PMC) through meiosis." },
    { front: "What are the two layers of the pollen grain wall?", back: "Exine (outer, made of sporopollenin) and Intine (inner, made of cellulose and pectin)." },
    { front: "What are the two cells found in a mature pollen grain?", back: "Vegetative cell (larger) and Generative cell (smaller, divides to form male gametes)." },
    { front: "What is the female reproductive part of the flower?", back: "Gynoecium (pistil)." },
    { front: "What is megasporogenesis?", back: "The formation of megaspores from the megaspore mother cell (MMC)." },
    { front: "Describe the typical angiosperm embryo sac at maturity.", back: "8-nucleate but 7-celled." },
    { front: "What is pollination?", back: "The transfer of pollen grains to the stigma of a pistil." },
    { front: "Define autogamy.", back: "Pollination within the same flower." },
    { front: "What is the role of the filiform apparatus?", back: "Guides the pollen tube into the synergid." },
    { front: "What is double fertilization?", back: "Syngamy (fusion of male gamete with egg) + Triple fusion (fusion of male gamete with two polar nuclei)." },
    { front: "What does the Primary Endosperm Nucleus (PEN) develop into?", back: "Endosperm, which nourishes the developing embryo." },
    { front: "What is apomixis?", back: "A form of asexual reproduction that mimics sexual reproduction by producing seeds without fertilization." },
    { front: "What is polyembryony?", back: "The occurrence of more than one embryo in a seed." },

    { front: "Describe the typical lobes and thecae structure of an angiosperm anther.", back: "Typically bilobed and dithecous (each lobe has two thecae, making a total of four microsporangia)." },
    { front: "What is the function and key nuclear characteristic of the tapetum?", back: "It nourishes the developing pollen grains; its cells possess dense cytoplasm and are generally multinucleate." },
    { front: "Name the substance that makes up the exine, and state its properties.", back: "Sporopollenin — one of the most resistant organic materials known; can withstand high temperatures, strong acids or alkalis, and is not degraded by any enzyme." },
    { front: "What are germ pores?", back: "Apertures on the pollen exine where sporopollenin is absent, allowing the pollen tube to emerge during germination." },
    { front: "Name the two cells of a mature pollen grain.", back: "Vegetative cell (larger, has abundant food reserve and irregular nucleus) and Generative cell (smaller, spindle-shaped, divides to form two male gametes)." },
    { front: "At what cell stage is pollen shed in the majority of angiosperms?", back: "In over 60% of angiosperms, pollen is shed at the 2-celled stage (vegetative + generative)." },
    { front: "Identify the parts of an ovule that correspond to its stalk and basal region.", back: "Stalk = Funicle; basal region (opposite micropyle) = Chalaza." },
    { front: "What is monosporic embryo sac development?", back: "The development of an embryo sac from a single functional megaspore, while the other three megaspores in the tetrad degenerate." },
    { front: "List the components of the egg apparatus in a mature embryo sac.", back: "Two synergids and one egg cell, located at the micropylar end." },
    { front: "What is the function of the filiform apparatus?", back: "Finger-like projections on the synergids that guide the entry of the pollen tube into the embryo sac." },
    { front: "State the cellular and nuclear composition of a mature angiosperm embryo sac.", back: "It is 7-celled and 8-nucleate (3 antipodals, 2 synergids, 1 egg, 1 central cell with 2 polar nuclei)." },
    { front: "What is cleistogamy and its advantage/disadvantage?", back: "Production of flowers that never open (e.g. Commelina). Advantage: assured seed-set without pollinators. Disadvantage: strictly self-pollination (no genetic variation)." },
    { front: "Describe geitonogamy.", back: "Transfer of pollen grains from the anther to the stigma of another flower on the same plant. Functionally cross-pollination, genetically self-pollination." },
    { front: "How is pollen adapted for wind pollination?", back: "Pollen grains are light, dry, and non-sticky, produced in large numbers; stamens are well-exposed; stigmas are feathery." },
    { front: "Give examples of freshwater and marine plants pollinated by water.", back: "Freshwater: Vallisneria, Hydrilla. Marine: Zostera (seagrasses)." },
    { front: "What is self-incompatibility?", back: "A genetic outbreeding mechanism that prevents self-pollen from germinating or growing a pollen tube in the style, preventing self-fertilisation." },
    { front: "Explain the double fertilisation event.", back: "Unique to angiosperms. Involves two fusions: Syngamy (male gamete + egg &rarr; 2n Zygote) and Triple Fusion (male gamete + 2 polar nuclei &rarr; 3n Primary Endosperm Nucleus)." },
    { front: "What represents the free-nuclear and cellular parts of a coconut?", back: "Coconut water represents the free-nuclear endosperm (thousands of free nuclei); the white kernel tissue represents the cellular endosperm." },
    { front: "What is the scutellum in a monocot embryo?", back: "The single large cotyledon, situated laterally on the embryonal axis." },
    { front: "Define apomixis and polyembryony with examples.", back: "Apomixis: seed production without fertilisation (e.g. Asteraceae, grasses). Polyembryony: presence of multiple embryos in a seed (e.g. Citrus, Mango)." }
  ],

  recall: [
    {
      q: "Explain microsporogenesis and the development of the male gametophyte.",
      hint: "PMC, meiosis, tetrad, vegetative/generative cells, exine",
      a: "Inside the microsporangium, each cell of the sporogenous tissue is a potential Pollen Mother Cell (PMC). The PMC undergoes meiosis to form a tetrad of haploid microspores (microsporogenesis). As the anther matures and dehydrates, the microspores dissociate and develop into pollen grains (male gametophytes). The pollen grain develops a two-layered wall: the outer hard exine (made of sporopollenin) and inner intine. Its cytoplasm divides unequally into a large vegetative cell and a small generative cell, which divides mitotically to yield two male gametes."
    },
    {
      q: "Describe the structure of a mature female gametophyte (embryo sac) in angiosperms.",
      hint: "functional megaspore, 3 mitoses, 7 cells, 8 nuclei, egg apparatus",
      a: "A functional megaspore undergoes three sequential mitotic nuclear divisions to produce 8 nuclei. Cell walls are laid down to organize them into 7 cells (8-nucleate, 7-celled embryo sac): 1. <b>Egg Apparatus</b> (micropylar end): 1 egg cell and 2 synergids with filiform apparatus. 2. <b>Antipodals</b> (chalazal end): 3 cells. 3. <b>Central Cell</b>: 1 large cell in the middle containing 2 polar nuclei. This monosporic embryo sac development is typical of most angiosperms."
    },
    {
      q: "Discuss outbreeding devices in plants and why they are necessary.",
      hint: "inbreeding depression, self-incompatibility, unisexual, non-synchrony",
      a: "Continuous self-pollination leads to inbreeding depression. To prevent this, plants use outbreeding devices: 1. <b>Non-synchrony</b>: pollen release and stigma receptivity happen at different times. 2. <b>Anther/Stigma positioning</b>: placed far apart to avoid contact. 3. <b>Self-incompatibility</b>: genetic block preventing self-pollen germination. 4. <b>Unisexual flowers</b>: dioecious plants (male & female flowers on separate plants, like papaya) completely prevent both autogamy and geitonogamy."
    },
    {
      q: "Detail the fusions that constitute Double Fertilisation in angiosperms.",
      hint: "syngamy, triple fusion, zygote, PEN, triploid, diploid",
      a: "Double fertilisation involves two distinct fusions in the embryo sac: 1. <b>Syngamy</b>: One of the male gametes (n) fuses with the egg cell (n) to produce a diploid Zygote (2n), which develops into the embryo. 2. <b>Triple Fusion</b>: The second male gamete (n) fuses with the two polar nuclei (2n) in the central cell to produce a triploid Primary Endosperm Nucleus (PEN, 3n). Because both fusions occur within the same embryo sac, it is called double fertilisation."
    },
    {
      q: "Explain how apomixis works and its commercial importance in agriculture.",
      hint: "seed without fertilisation, hybrid seeds, clonal, cost saving",
      a: "Apomixis is the production of seeds without fertilisation (asexual reproduction mimicking sexual). In some plants, a diploid egg cell is formed without reduction division and develops directly into an embryo. In others (like Citrus), nucellar cells divide and protrude into the embryo sac to form embryos. <b>Commercial importance</b>: Hybrid seeds must be bought every year by farmers as hybrid traits segregate in the next generation. If hybrids are made apomictic, the seeds will maintain hybrid characters generation after generation, saving farmers high seed costs."
    }
  ],

  mcqs: [
    {
      q: "Which wall layer of the microsporangium provides nutrition to developing pollen grains?",
      o: ["Epidermis", "Endothecium", "Middle layers", "Tapetum"],
      c: 3,
      e: "The tapetum is the innermost layer of the microsporangial wall. Its cells have dense cytoplasm, are generally multinucleate, and nourish the developing pollen grains."
    },
    {
      q: "The outer exine layer of pollen grains is highly resistant because of:",
      o: ["Cellulose", "Pectin", "Sporopollenin", "Lignin"],
      c: 2,
      e: "Pollen exine is composed of sporopollenin, a highly resistant organic polymer that tolerates extreme temperatures, strong acids, and alkalis. No enzyme is known to degrade it."
    },
    {
      q: "During megasporogenesis, the megaspore mother cell (MMC) undergoes meiosis to produce how many functional megaspores?",
      o: ["One", "Two", "Three", "Four"],
      c: 0,
      e: "MMC undergoes meiosis to form four megaspores. In most angiosperms, three degenerate and only one remains functional to develop into the embryo sac."
    },
    {
      q: "Filiform apparatus is a characteristic feature of:",
      o: ["Antipodal cells", "Egg cell", "Synergids", "Central cell"],
      c: 2,
      e: "Filiform apparatus consists of finger-like projections at the micropylar end of synergids. It plays a key role in guiding the pollen tube into the synergid."
    },
    {
      q: "Cleistogamous flowers ensure:",
      o: ["Cross-pollination", "Assured seed-set without pollinators", "High genetic variability", "Insect attraction"],
      c: 1,
      e: "Cleistogamous flowers never open. As a result, anthers and stigmas lie close to each other, ensuring pollination and seed-set even in the absence of any pollinating agents."
    },
    {
      q: "Water-pollinated flowers like Vallisneria have pollen grains protected by a:",
      o: ["Thick exine of sporopollenin", "Mucilaginous sheath", "Cellulose covering", "Pectin layer"],
      c: 1,
      e: "In water-pollinated plants, pollen grains are long and ribbon-like, and they are covered by a mucilaginous sheath that prevents them from getting wet."
    },
    {
      q: "Triple fusion in double fertilisation refers to the fusion of:",
      o: ["One male gamete with egg cell", "Two male gametes with egg cell", "One male gamete with two polar nuclei", "Two polar nuclei with each other"],
      c: 2,
      e: "Triple fusion is the fusion of one haploid male gamete (n) with the two haploid polar nuclei (2n, or secondary nucleus) in the central cell, forming the triploid PEN (3n)."
    },
    {
      q: "Persistent, residual nucellus in the seed is called:",
      o: ["Endosperm", "Scutellum", "Perisperm", "Pericarp"],
      c: 2,
      e: "In some seeds (e.g., black pepper and beet), remnants of the nucellus persist as a thin, papery layer called the perisperm."
    },
    {
      q: "Which wall layer of the microsporangium provides nutrition to developing pollen grains?",
      o: ["Epidermis", "Endothecium", "Middle layers", "Tapetum"],
      c: 3,
      e: "The tapetum is the innermost layer of the microsporangial wall. Its cells have dense cytoplasm, are generally multinucleate, and nourish the developing pollen grains."
    },
    {
      q: "The outer exine layer of pollen grains is highly resistant because of:",
      o: ["Cellulose", "Pectin", "Sporopollenin", "Lignin"],
      c: 2,
      e: "Pollen exine is composed of sporopollenin, a highly resistant organic polymer that tolerates extreme temperatures, strong acids, and alkalis. No enzyme is known to degrade it."
    },
    {
      q: "During megasporogenesis, the megaspore mother cell (MMC) undergoes meiosis to produce how many functional megaspores?",
      o: ["One", "Two", "Three", "Four"],
      c: 0,
      e: "MMC undergoes meiosis to form four megaspores. In most angiosperms, three degenerate and only one remains functional to develop into the embryo sac."
    },
    {
      q: "Filiform apparatus is a characteristic feature of:",
      o: ["Antipodal cells", "Egg cell", "Synergids", "Central cell"],
      c: 2,
      e: "Filiform apparatus consists of finger-like projections at the micropylar end of synergids. It plays a key role in guiding the pollen tube into the synergid."
    },
    {
      q: "Cleistogamous flowers ensure:",
      o: ["Cross-pollination", "Assured seed-set without pollinators", "High genetic variability", "Insect attraction"],
      c: 1,
      e: "Cleistogamous flowers never open. As a result, anthers and stigmas lie close to each other, ensuring pollination and seed-set even in the absence of any pollinating agents."
    },
    {
      q: "Water-pollinated flowers like Vallisneria have pollen grains protected by a:",
      o: ["Thick exine of sporopollenin", "Mucilaginous sheath", "Cellulose covering", "Pectin layer"],
      c: 1,
      e: "In water-pollinated plants, pollen grains are long and ribbon-like, and they are covered by a mucilaginous sheath that prevents them from getting wet."
    },
    {
      q: "Triple fusion in double fertilisation refers to the fusion of:",
      o: ["One male gamete with egg cell", "Two male gametes with egg cell", "One male gamete with two polar nuclei", "Two polar nuclei with each other"],
      c: 2,
      e: "Triple fusion is the fusion of one haploid male gamete (n) with the two haploid polar nuclei (2n, or secondary nucleus) in the central cell, forming the triploid PEN (3n)."
    },
    {
      q: "Persistent, residual nucellus in the seed is called:",
      o: ["Endosperm", "Scutellum", "Perisperm", "Pericarp"],
      c: 2,
      e: "In some seeds (e.g., black pepper and beet), remnants of the nucellus persist as a thin, papery layer called the perisperm."
    },
    {
      q: "Geitonogamy is functionally which type of pollination?",
      o: ["Self-pollination", "Cross-pollination", "Both autogamy and cross-pollination", "Neither"],
      c: 1,
      e: "Geitonogamy involves pollen transfer between different flowers on the same plant. Functionally, it is cross-pollination (different flowers), but genetically it is equivalent to self-pollination (same plant's genome)."
    },
    {
      q: "A typical angiosperm anther is described as:",
      o: ["Unilobed and dithecous", "Bilobed and dithecous", "Trilobed and monothecous", "Bilobed and monothecous"],
      c: 1,
      e: "A typical angiosperm anther is bilobed, with each lobe having two thecae (dithecous), making it tetrasporangiate (with four microsporangia total)."
    },
    {
      q: "The process of transfer of pollen from a different plant is called:",
      o: ["Autogamy", "Geitonogamy", "Xenogamy", "Hydrophily"],
      c: 2,
      e: "Xenogamy is the transfer of pollen from an anther of one plant to a stigma of a genetically different plant. It is the only type of pollination that brings truly new genetic material."
    },
    {
      q: "A mature embryo sac has how many cells and nuclei?",
      o: ["7 cells and 7 nuclei", "8 cells and 8 nuclei", "7 cells and 8 nuclei", "6 cells and 8 nuclei"],
      c: 2,
      e: "A mature angiosperm embryo sac is 7-celled but 8-nucleate, because the large central cell contains two polar nuclei."
    },
    {
      q: "Antipodal cells in the embryo sac are located at the:",
      o: ["Micropylar end", "Chalazal end", "Central region", "Funicle"],
      c: 1,
      e: "The three antipodal cells are located at the chalazal end of the embryo sac, opposite the micropylar end where the egg apparatus is located."
    },
    {
      q: "The coconut water represents which type of endosperm?",
      o: ["Cellular endosperm", "Helobial endosperm", "Free-nuclear endosperm", "Perisperm"],
      c: 2,
      e: "Coconut water represents free-nuclear endosperm (thousands of free nuclei without cell wall formation). The white coconut kernel is cellular endosperm."
    },
    {
      q: "Which of the following plants shows polyembryony?",
      o: ["Rice", "Wheat", "Citrus", "Maize"],
      c: 2,
      e: "Polyembryony (multiple embryos in a seed) is commonly found in Citrus and Mango, where nucellar cells divide to form additional embryos alongside the zygotic embryo."
    },
    {
      q: "Self-incompatibility prevents:",
      o: ["Cross-pollination", "Xenogamy", "Self-pollen germination on the stigma", "Seed development"],
      c: 2,
      e: "Self-incompatibility is a genetic mechanism where the stigma recognises and rejects self-pollen (same genotype), preventing self-fertilisation and promoting outbreeding."
    },
    {
      q: "In which plant does a moth act as the exclusive pollinator in a mutualistic relationship?",
      o: ["Amorphophallus", "Yucca", "Vallisneria", "Commelina"],
      c: 1,
      e: "Yucca plant and Pronuba moth share a highly specific and obligate mutualistic relationship, where the moth pollinates the Yucca flower and uses it as an egg-laying site."
    },
    {
      q: "Pollen grains can be stored in liquid nitrogen for long periods because of the resistance of:",
      o: ["Intine", "Sporopollenin in exine", "Starch in the vegetative cell", "Cellulose of cell wall"],
      c: 1,
      e: "Sporopollenin in the pollen exine is extremely resistant and allows pollen grains to survive for long periods, including storage in liquid nitrogen (cryopreservation) for breeding programmes."
    },
    {
      q: "What is the scutellum in a monocot seed (e.g., maize)?",
      o: ["Two cotyledons", "The radicle", "The plumule", "The single lateral cotyledon"],
      c: 3,
      e: "In monocots, the embryo has a single cotyledon called the scutellum, situated laterally on the embryonal axis. It helps absorb food from the endosperm."
    },
    {
      q: "What does Primary Endosperm Nucleus (PEN) develop into?",
      o: ["Embryo", "Seed coat", "Endosperm", "Cotyledon"],
      c: 2,
      e: "The triploid (3n) Primary Endosperm Nucleus develops into the endosperm, which nourishes the developing embryo within the seed."
    },
    {
      q: "Apomixis in plants means:",
      o: ["Sexual reproduction with double fertilisation", "Clonal seed production without fertilisation", "Vegetative propagation through runners", "Seed dormancy mechanism"],
      c: 1,
      e: "Apomixis is the production of seeds without fertilisation (asexual reproduction). It allows plants to produce clonal offspring through seeds, bypassing meiosis and fertilisation."
    },
    {
      q: "Which endothecium layer helps in anther dehiscence?",
      o: ["Tapetum (innermost)", "Epidermis (outermost)", "Endothecium (fibrous layer)", "Middle layers"],
      c: 2,
      e: "The endothecium is the second layer of the microsporangium wall, having fibrous thickenings, which help in the dehiscence (opening) of the anther to release pollen."
    }
  ],

  match: [
    { term: "Dithecous anther", def: "Two thecae per anther lobe" },
    { term: "Tapetum", def: "Multinucleate nutritive layer" },
    { term: "Sporopollenin", def: "Organic material resistant to enzymes and acids" },
    { term: "Germ pore", def: "Exine region lacking sporopollenin" },
    { term: "Egg apparatus", def: "Two synergids plus one egg cell" },
    { term: "Cleistogamous", def: "Flowers that remain closed" },
    { term: "Vallisneria", def: "Freshwater water-pollinated plant" },
    { term: "Double fertilisation", def: "Syngamy and triple fusion" },
    { term: "Scutellum", def: "Single lateral cotyledon in monocots" },
    { term: "Apomixis", def: "Seeds developed without fertilisation" }
  ],

  pathways: [
    {
      title: "Microsporogenesis and Male Gamete Formation",
      prompt: "Order the stages from sporogenous tissue to functional male gametes.",
      steps: [
        "Sporogenous tissue cells differentiate into PMCs",
        "PMC undergoes meiosis to form a microspore tetrad",
        "Microspores dissociate and dehydrate into pollen grains",
        "Pollen nucleus divides mitotically (unequal cytokinesis)",
        "Vegetative and generative cells form (2-celled pollen)",
        "Generative cell divides mitotically into two male gametes"
      ]
    },
    {
      title: "Pollen-Pistil Interaction & Fertilisation",
      prompt: "Order the events from pollen landing on stigma to double fertilisation.",
      steps: [
        "Compatible pollen lands and germinates on the stigma",
        "Pollen tube grows through the style towards the ovary",
        "Pollen tube enters the ovule via the micropyle",
        "Filiform apparatus guides tube entry into one synergid",
        "Two male gametes are discharged into the synergid cytoplasm",
        "One gamete fuses with egg; other fuses with polar nuclei"
      ]
    },
    {
      title: "Megasporogenesis and Embryo Sac Formation",
      prompt: "Order the stages from MMC to mature female gametophyte.",
      steps: [
        "Single MMC differentiates in the nucellus",
        "MMC undergoes meiosis to produce tetrad of 4 megaspores",
        "Three megaspores degenerate; one functional megaspore remains",
        "Functional megaspore undergoes first mitotic division",
        "Two successive mitotic divisions produce 8 nuclei",
        "Cell walls form: 3 antipodals (chalazal), 2 synergids + 1 egg (micropylar), 1 central cell with 2 polar nuclei",
        "7-celled, 8-nucleate embryo sac is complete"
      ]
    }
  ]
};
