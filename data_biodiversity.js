/* ====== data_biodiversity.js ====== */
DATA.chapters.biodiversity = {
  id: "biodiversity",
  num: 15,
  title: "Biodiversity & Conservation",
  subtitle: "Levels of biodiversity, species-area relationships, the 'Evil Quartet' of extinction, and in-situ vs ex-situ conservation — NCERT Class 12 Chapter 15",
  color: "#10b981",
  colorD: "#065f46",
  glyph: "🌿",

  notes: [
    {
      id: "levels_of_biodiversity",
      heading: "What is Biodiversity & Its Levels?",
      html: `
        <p><b>Biodiversity</b> is the term popularised by sociobiologist <b>Edward Wilson</b> to describe the combined diversity at all levels of biological organisation.</p>
        
        <h4>Three Key Levels of Biodiversity</h4>
        <ul>
          <li><b>Genetic Diversity</b>: Variation within a single species. E.g., the medicinal plant <i>Rauwolfia vomitoria</i> growing in different Himalayan ranges shows variation in the concentration and potency of the active chemical **reserpine**. India has more than <b>50,000 genetically different strains of rice</b> and <b>1,000 varieties of mango</b>.</li>
          <li><b>Species Diversity</b>: Diversity at the species level. E.g., the Western Ghats have a greater amphibian species diversity than the Eastern Ghats.</li>
          <li><b>Ecological Diversity</b>: Variation at the ecosystem level. India has deserts, rain forests, mangroves, coral reefs, wetlands, estuaries, and alpine meadows, offering much greater ecosystem diversity than a Scandinavian country like Norway.</li>
        </ul>
        
        <h4>Global & National Species Estimates</h4>
        <ul>
          <li>IUCN (2004) reports slightly more than **1.5 million** species described.</li>
          <li>Ecologist **Robert May** proposed a conservative and scientifically sound global estimate of <b>7 million species</b>.</li>
          <li>More than 70% of all recorded species are **animals**, while plants (including fungi) comprise no more than 22%.</li>
          <li>Among animals, **insects** are the most species-rich group (accounting for ~70% of all animal species).</li>
          <li>The number of fungi species globally is greater than the combined total of fish, amphibians, reptiles, and mammals.</li>
        </ul>
      `
    },
    {
      id: "patterns_of_biodiversity",
      heading: "Patterns of Biodiversity",
      html: `
        <h4>1. Latitudinal Gradients</h4>
        <p>Species diversity decreases as we move away from the equator towards the poles. Tropics (23.5° N to 23.5° S) harbour more species than temperate or polar areas. E.g., the **Amazonian rain forest** in South America has the greatest biodiversity on Earth, housing >40,000 plants, 3,000 fish, 1,300 birds, 427 mammals, and 125,000 invertebrates.</p>
        <p><b>Why Tropics have Higher Diversity?</b></p>
        <ul>
          <li><b>Speciation time</b>: Temperate regions were subjected to frequent glaciations, while tropics remained relatively undisturbed for millions of years, allowing species to diversify.</li>
          <li><b>Constant environment</b>: Tropical environments are less seasonal, more constant, and predictable, promoting niche specialisation.</li>
          <li><b>Solar energy</b>: Higher solar energy input in tropics contributes to higher productivity, indirectly supporting greater diversity.</li>
        </ul>

        <h4>2. Species-Area Relationship (Alexander von Humboldt)</h4>
        <p>German naturalist Alexander von Humboldt observed that within a region, species richness increases with explored area, but only up to a limit. On a logarithmic scale, the relationship is a straight line:</p>
        <p align="center"><b>$\log S = \log C + Z \log A$</b></p>
        <p>Where $S$ = Species richness, $A$ = Area, $C$ = Y-intercept, and $Z$ = slope of the line (**regression coefficient**).</p>
        <ul>
          <li>For small regions, $Z$ values lie between <b>0.1 and 0.2</b> (regardless of taxonomic group or region).</li>
          <li>For very large areas (like continents), the slope is steeper ($Z$ values range between <b>0.6 and 1.2</b>). E.g., for frugivorous birds in tropical forests of different continents, $Z = 1.15$.</li>
        </ul>
      `
    },
    {
      id: "importance_and_loss",
      heading: "Importance & Loss of Biodiversity",
      html: `
        <h4>1. Importance of Diversity to Ecosystems</h4>
        <ul>
          <li><b>David Tilman</b> showed that plots with more species exhibited less year-to-year variation in total biomass and showed increased productivity.</li>
          <li><b>Rivet Popper Hypothesis (Paul Ehrlich)</b>: Compares an ecosystem to an airplane, and species to rivets. Popping rivets on the wings (loss of key species driving major ecosystem functions) is a major threat to flight safety (ecosystem stability) compared to losing rivets inside the cabin (minor species).</li>
        </ul>

        <h4>2. Major Causes of Biodiversity Loss (The "Evil Quartet")</h4>
        <ol>
          <li><b>Habitat Loss and Fragmentation</b>: The most important cause. E.g., the Amazon rain forest (the **'lungs of the planet'**) once covered 14% of Earth's land, but now covers less than 6%. Large habitats broken into fragments severely affect mammals and birds requiring large territories.</li>
          <li><b>Over-exploitation</b>: Humans over-exploited natural resources, leading to the extinction of species like **Steller's sea cow** and **Passenger pigeon**.</li>
          <li><b>Alien Species Invasions</b>: Introduction of non-native species causes decline of indigenous species. E.g., **Nile perch** introduced into Lake Victoria (East Africa) led to the extinction of >200 species of **cichlid fish**. Invasive weeds like **Parthenium (carrot grass)**, **Lantana**, and **Eichhornia (water hyacinth)**. African catfish <i>Clarias gariepinus</i> introduced for aquaculture threatens native catfishes.</li>
          <li><b>Co-extinctions</b>: When a host species becomes extinct, its obligate parasites or mutualists also go extinct. E.g., co-evolved plant-pollinator mutualisms.</li>
        </ol>
      `
    },
    {
      id: "conservation_methods",
      heading: "Biodiversity Conservation Methods",
      html: `
        <h4>1. Why Conserve?</h4>
        <ul>
          <li><b>Narrowly Utilitarian</b>: Humans derive direct economic benefits (food, timber, fibers, and 25% of all drugs are derived from plants).</li>
          <li><b>Broadly Utilitarian</b>: Ecosystem services like oxygen production (Amazon forest provides ~20% of Earth's O<sub>2</sub>), pollination, flood control, and aesthetic pleasure.</li>
          <li><b>Ethical</b>: Every species has an intrinsic value; we have a moral duty to pass on our biological legacy in good order to future generations.</li>
        </ul>

        <h4>2. How to Conserve?</h4>
        <table class="cmp">
          <thead>
            <tr><th>In-situ Conservation (On-site)</th><th>Ex-situ Conservation (Off-site)</th></tr>
          </thead>
          <tbody>
            <tr><td>Protecting the endangered species within its natural habitat.</td><td>Protecting the threatened species by removing it from its natural habitat to a secure setting.</td></tr>
            <tr><td><b>Examples</b>:
              <ul>
                <li><b>Biodiversity Hotspots</b>: Areas of high species richness & endemism (originally 25, now 34 globally; 3 cover India: Western Ghats-Sri Lanka, Indo-Burma, and Himalaya).</li>
                <li><b>Biosphere Reserves</b> (14 in India), <b>National Parks</b> (90 in India), and <b>Wildlife Sanctuaries</b> (448 in India).</li>
                <li><b>Sacred Groves</b>: Protected forest tracts based on religious beliefs. E.g., Khasi & Jaintia Hills (Meghalaya), Aravalli Hills (Rajasthan), Western Ghats of Maharashtra & Karnataka.</li>
              </ul>
            </td><td><b>Examples</b>:
              <ul>
                <li>Zoological Parks (Zoos)</li>
                <li>Botanical Gardens</li>
                <li>Wildlife Safari Parks</li>
                <li><b>Cryopreservation</b>: Preserving gametes of threatened species in viable conditions at ultra-low temperatures (<b>-196°C</b> in liquid nitrogen).</li>
                <li>Seed Banks and Tissue Culture.</li>
              </ul>
            </td></tr>
          </tbody>
        </table>

        <h4>International Treaties</h4>
        <ul>
          <li><b>The Earth Summit</b> (Rio de Janeiro, 1992): Called upon all nations to take appropriate measures for biodiversity conservation and sustainable utilisation of resources.</li>
          <li><b>The World Summit on Sustainable Development</b> (Johannesburg, 2002): 190 countries pledged to significantly reduce the rate of biodiversity loss at global, regional, and local levels by 2010.</li>
        </ul>
      `
    }
  ],

  mnemonics: [
    {
      title: "The Evil Quartet (Causes of Loss)",
      device: "<b>H**ungry **O**wls **A**ttack **C**hickens",
      expand: [
        { L: "H", t: "Habitat loss and fragmentation" },
        { L: "O", t: "Over-exploitation" },
        { L: "A", t: "Alien species invasions" },
        { L: "C", t: "Co-extinctions" }
      ]
    },
    {
      title: "Ex-situ Conservation Examples",
      device: "<b>Z**oos **B**reed **W**ild **C**ats",
      expand: [
        { L: "Zoos", t: "Zoological Parks" },
        { L: "B", t: "Botanical Gardens" },
        { L: "W", t: "Wildlife Safari Parks" },
        { L: "C", t: "Cryopreservation & Seed Banks" }
      ]
    },
    {
      title: "Sacred Groves of India",
      device: "<b>K**hasi **A**ravalli **W**estern **S**arguja",
      expand: [
        { L: "Khasi", t: "Khasi and Jaintia Hills in Meghalaya" },
        { L: "Aravalli", t: "Aravalli Hills in Rajasthan" },
        { L: "Western", t: "Western Ghats of Karnataka and Maharashtra" },
        { L: "Sarguja", t: "Sarguja, Bastar, and Chanda areas of Madhya Pradesh" }
      ]
    }
  ],

  flashcards: [
    { front: "Who popularised the term 'Biodiversity'?", back: "Edward Wilson, a sociobiologist." },
    { front: "Give an example of genetic diversity within a single species in India.", back: "Rauwolfia vomitoria producing different concentrations of the chemical reserpine. Also, India has >50,000 strains of rice and >1,000 varieties of mango." },
    { front: "State Robert May's global estimate of species diversity.", back: "Approximately 7 million species globally." },
    { front: "Among all animal species, which taxonomic group is the most diverse?", back: "Insects, making up about 70% of all animal species." },
    { front: "Why do the tropics have greater species diversity than temperate regions?", back: "1. Undisturbed environment for millions of years (no glaciations), 2. Constant, seasonal-free environment encouraging niche specialisation, 3. Higher solar energy input." },
    { front: "Who proposed the Species-Area Relationship?", back: "German naturalist and explorer Alexander von Humboldt." },
    { front: "What does the slope of the line (Z) represent in the species-area equation?", back: "The regression coefficient (or steepness of the slope)." },
    { front: "What is the typical value of Z for small regions versus entire continents?", back: "In small regions, Z is 0.1 to 0.2. In entire continents, Z is much steeper, ranging from 0.6 to 1.2 (e.g., 1.15 for frugivorous birds)." },
    { front: "Explain the 'Rivet Popper Hypothesis' and name its proposer.", back: "Proposed by Paul Ehrlich. Compares ecosystem species to rivets on an airplane. Popping rivets on wings (extinction of key species) threatens flight safety (ecosystem collapse) directly." },
    { front: "What is the 'Evil Quartet'?", back: "The four major causes of biodiversity loss: 1. Habitat loss and fragmentation, 2. Over-exploitation, 3. Alien species invasions, 4. Co-extinctions." },
    { front: "Identify the most critical cause of biodiversity loss.", back: "Habitat loss and fragmentation (e.g., Amazon forest shrinking from 14% to under 6% of Earth's land)." },
    { front: "Name three invasive alien weed species in India.", back: "Parthenium (carrot grass), Lantana, and Eichhornia (water hyacinth)." },
    { front: "Explain what Nile Perch introduction caused in Lake Victoria.", back: "It led to the extinction of an ecologically unique assemblage of more than 200 species of native cichlid fish." },
    { front: "What are biodiversity hotspots and how many exist globally?", back: "Regions with high levels of species richness and high endemism (species confined only to that area). There are 34 hotspots globally." }
  ],

  recall: [
    {
      q: "Differentiate between genetic, species, and ecological diversity with examples.",
      hint: "Rauwolfia / mango, Western vs Eastern Ghats, India vs Norway",
      a: "1. <b>Genetic Diversity</b>: Genetic variation within a single species, e.g., reserpine concentration in <i>Rauwolfia vomitoria</i>, or 50,000 strains of rice. 2. <b>Species Diversity</b>: Variety of species in a region, e.g., amphibian diversity is greater in the Western Ghats than in the Eastern Ghats. 3. <b>Ecological Diversity</b>: Diversity of ecosystems in a region, e.g., India's variety of rain forests, deserts, and mangroves is much higher than Scandinavia's (Norway)."
    },
    {
      q: "State the Species-Area Relationship equation and explain the significance of the Z value.",
      hint: "S=CA^Z, regression coefficient, small vs large area",
      a: "The relationship is described by Alexander von Humboldt as $\\log S = \\log C + Z \\log A$ (or $S = CA^Z$). $S$ is species richness, $A$ is area, $C$ is Y-intercept, and $Z$ is the regression coefficient (slope). For small areas, the slope is constant ($Z = 0.1-0.2$), regardless of taxon or region. For very large areas like continents, the slope is much steeper ($Z = 0.6-1.2$), showing that species richness increases faster as larger areas are explored."
    },
    {
      q: "Detail the four factors of the 'Evil Quartet' driving species extinctions.",
      hint: "lungs of planet, passenger pigeon, Nile perch, obligate mutualists",
      a: "1. <b>Habitat Loss & Fragmentation</b>: Destroys homes; e.g., Amazon deforestation. Fragmentation isolates populations. 2. <b>Over-exploitation</b>: Human greed leads to species loss (e.g., Steller's sea cow, passenger pigeon). 3. <b>Alien Species Invasion</b>: Non-native species outcompete indigenous ones (e.g., Nile perch in Lake Victoria, Water hyacinth in India). 4. <b>Co-extinctions</b>: Extinction of host automatically drives obligate parasites or co-evolved pollinators to extinction."
    },
    {
      q: "Differentiate between in-situ and ex-situ conservation, giving examples of each.",
      hint: "on-site vs off-site, hotspots, sacred groves, cryopreservation",
      a: "<b>In-situ (On-site)</b>: Protecting species inside their natural habitat. E.g., National Parks, Wildlife Sanctuaries, Biosphere Reserves, Sacred Groves, and Biodiversity Hotspots (like Western Ghats). <b>Ex-situ (Off-site)</b>: Removing threatened species to a protective setting. E.g., Zoological Parks, Botanical Gardens, Wildlife Safari Parks, and Cryopreservation (storing gametes at -196°C in liquid nitrogen) or Seed Banks."
    },
    {
      q: "Summarise the Earth Summit and the World Summit on Sustainable Development.",
      hint: "Rio de Janeiro 1992, Johannesburg 2002, targets",
      a: "1. <b>The Earth Summit</b> (Rio de Janeiro, 1992): A historic convention where nations committed to conserving biodiversity and ensuring the sustainable utilisation of biological resources. 2. <b>The World Summit</b> (Johannesburg, 2002): 190 countries pledged to reduce the current rate of biodiversity loss at global, regional, and local levels by the year 2010."
    }
  ],

  mcqs: [
    {
      q: "India has how many varieties of mango and genetically different strains of rice?",
      o: ["1,000 mango; 50,000 rice", "50,000 mango; 1,000 rice", "10,000 mango; 100,000 rice", "1,000 mango; 10,000 rice"],
      c: 0,
      e: "India possesses immense genetic diversity, including more than 50,000 genetically different strains of rice and over 1,000 varieties of mango."
    },
    {
      q: "According to Robert May, the total number of species on Earth is about:",
      o: ["1.5 million", "7 million", "17 million", "70 million"],
      c: 1,
      e: "Robert May estimated the global species diversity to be around 7 million, which is considered a scientifically sound and conservative estimate."
    },
    {
      q: "In the species-area relationship log S = log C + Z log A, Z represents:",
      o: ["Species richness", "Slope of the line (regression coefficient)", "Area explored", "Y-intercept"],
      c: 1,
      e: "In the species-area relationship, Z represents the regression coefficient, which represents the steepness of the slope of the line."
    },
    {
      q: "The slope of the species-area relationship (Z) for frugivorous birds in tropical forests of different continents is:",
      o: ["0.15", "0.6", "1.15", "1.5"],
      c: 2,
      e: "When species-area relationships are analysed across very large areas like entire continents, the slope Z becomes much steeper. For frugivorous birds, it is 1.15."
    },
    {
      q: "Which of the following is NOT a part of the 'Evil Quartet'?",
      o: ["Habitat loss and fragmentation", "Over-exploitation", "In-situ conservation", "Alien species invasions"],
      c: 2,
      e: "In-situ conservation is a method of protecting biodiversity, whereas the 'Evil Quartet' refers to the four major causes of biodiversity loss."
    },
    {
      q: "Which invasive alien species is also known as the 'Terror of Bengal'?",
      o: ["Parthenium", "Lantana", "Eichhornia crassipes (Water Hyacinth)", "Clarias gariepinus"],
      c: 2,
      e: "Eichhornia crassipes (water hyacinth) is an invasive aquatic weed introduced for its flowers, which clogged waterways, choked native life, and earned the name 'Terror of Bengal'."
    },
    {
      q: "How many biodiversity hotspots are recognised globally?",
      o: ["14", "25", "34", "90"],
      c: 2,
      e: "Initially, 25 biodiversity hotspots were identified. Later, 9 more were added, bringing the total number of global biodiversity hotspots to 34."
    },
    {
      q: "Cryopreservation of gametes at -196°C is an example of:",
      o: ["In-situ conservation", "Ex-situ conservation", "In-vitro micropropagation", "Sacred grove protection"],
      c: 1,
      e: "Cryopreservation (storing gametes in liquid nitrogen at -196°C) is an off-site method of protecting genetic material, which is a form of ex-situ conservation."
    }
  ],

  match: [
    { term: "Edward Wilson", def: "Popularised the term 'biodiversity'" },
    { term: "Reserpine", def: "Active chemical from Rauwolfia vomitoria" },
    { term: "Robert May", def: "Estimated 7 million global species" },
    { term: "Amphibian diversity", def: "Greater in Western Ghats than Eastern Ghats" },
    { term: "Alexander von Humboldt", def: "Formulated species-area relationship" },
    { term: "Paul Ehrlich", def: "Proposed Rivet Popper Hypothesis" },
    { term: "Amazon Forest", def: "Lungs of the planet (originally 14% of land)" },
    { term: "Nile Perch", def: "Alien species in Lake Victoria" },
    { term: "Western Ghats & Himalayas", def: "Biodiversity hotspots in India" },
    { term: "Cryopreservation", def: "Ex-situ conservation at -196°C" }
  ],

  pathways: [
    {
      title: "Alexander von Humboldt's Species-Area Logic",
      prompt: "Order the logical steps leading to the species-area relationship.",
      steps: [
        "Select a geographical region for ecological study",
        "Measure the species richness in a small starting area",
        "Increase the explored area systematically",
        "Observe that species richness increases as area increases",
        "Note that the rate of increase slows down at larger areas",
        "Plot data on a logarithmic scale to obtain a straight line"
      ]
    },
    {
      title: "Ex-situ Cryopreservation Workflow",
      prompt: "Order the steps of conserving threatened gametes ex-situ.",
      steps: [
        "Identify and locate the threatened species in the wild",
        "Collect viable gamete samples (sperm/egg/pollen)",
        "Prepare samples with cryoprotectants to prevent ice damage",
        "Freeze samples rapidly down to -196°C",
        "Store in liquid nitrogen cryo-containers (Seed/Gene bank)",
        "Thaw and fertilise in-vitro when needed for propagation"
      ]
    }
  ]
};
