/* ====== data_ecosystem.js ====== */
DATA.chapters.ecosystem = {
  id: "ecosystem",
  num: 14,
  title: "Ecosystem",
  subtitle: "Productivity, decomposition steps, energy flow, ecological pyramids, and ecological succession — NCERT Class 12 Chapter 14",
  color: "#10b981",
  colorD: "#065f46",
  glyph: "🌲",

  notes: [
    {
      id: "ecosystem_structure_productivity",
      heading: "Ecosystem Structure & Productivity",
      html: `
        <p>An **ecosystem** is a functional unit of nature, where living organisms interact among themselves and with the physical environment. Key structural feature: <b>Stratification</b> (vertical distribution of different species occupying different levels; e.g., trees occupy top, shrubs middle, herbs/grasses bottom in a forest).</p>
        
        <h4>Four Basic Functional Aspects</h4>
        <p>Productivity, Decomposition, Energy Flow, and Nutrient Cycling.</p>
        
        <h4>1. Primary Productivity</h4>
        <p>The rate of biomass or organic matter production per unit area over a time period by plants during photosynthesis. Units: g/m²/yr or kcal/m²/yr.</p>
        <ul>
          <li><b>GPP (Gross Primary Productivity)</b>: Rate of production of organic matter during photosynthesis.</li>
          <li><b>NPP (Net Primary Productivity)</b>: The biomass available for consumption by heterotrophs (herbivores and decomposers).
            <p align="center"><b>$NPP = GPP - R$</b></p>
            Where $R$ = Respiration losses of plants.
          </li>
          <li><b>Secondary Productivity</b>: Rate of formation of new organic matter by consumers.</li>
        </ul>
        <div class="callout"><b>Global Productivity Count:</b> Total annual net primary productivity of the whole biosphere is ~<b>170 billion tons</b> (dry weight). Oceans cover 70% of Earth but contribute only <b>55 billion tons</b>, due to nutrients and light limitation.</div>
      `
    },
    {
      id: "decomposition",
      heading: "Decomposition Process & Regulators",
      html: `
        <p><b>Decomposition</b> is the process where decomposers break down complex organic matter into inorganic substances like CO<sub>2</sub>, water, and nutrients. The raw material for decomposition is **detritus** (dead plant remains like leaves, bark, flowers, and dead animal remains/feces).</p>
        
        <h4>Five Key Steps in Decomposition</h4>
        <ol>
          <li><b>Fragmentation</b>: Detritivores (e.g., earthworms) break down detritus into smaller particles.</li>
          <li><b>Leaching</b>: Water-soluble inorganic nutrients descend into the soil horizon and precipitate as unavailable salts.</li>
          <li><b>Catabolism</b>: Bacterial and fungal enzymes degrade detritus into simpler inorganic substances.</li>
          <li><b>Humification</b>: Leads to the accumulation of <b>humus</b> (a dark-coloured, amorphous substance). Humus is highly resistant to microbial action, decomposes slowly, and serves as a reservoir of nutrients.</li>
          <li><b>Mineralisation</b>: Humus is further degraded by microbes to release inorganic nutrients.</li>
        </ol>

        <h4>Regulators of Decomposition Rate</h4>
        <ul>
          <li><b>Chemical Composition</b>: Decomposition is slower if detritus is rich in **lignin and chitin**, and faster if rich in **nitrogen and water-soluble sugars**.</li>
          <li><b>Climatic Factors</b>: Warm and moist environments **favour** decomposition, whereas low temperature and anaerobiosis (lack of O<sub>2</sub>) **inhibit** it.</li>
        </ul>
      `
    },
    {
      id: "energy_flow_pyramids",
      heading: "Energy Flow & Ecological Pyramids",
      html: `
        <h4>1. Energy Flow</h4>
        <p>Except for deep-sea hydrothermal ecosystems, the Sun is the sole source of energy. Plants capture only <b>2–10%</b> of **PAR (Photosynthetically Active Radiation)** (which is <50% of total incident solar radiation) to sustain the living world. Energy flow is **unidirectional** and obeys the laws of thermodynamics.</p>
        <ul>
          <li><b>GFC (Grazing Food Chain)</b>: Begins with producers (Trophic level 1 &rarr; Herbivores T2 &rarr; Carnivores T3).</li>
          <li><b>DFC (Detritus Food Chain)</b>: Begins with dead organic matter. It is the major channel for energy flow in terrestrial ecosystems.</li>
          <li><b>Ten Percent Law (Lindeman)</b>: Only 10% of the energy is transferred from a lower trophic level to the next higher level; the rest is lost as respiration/heat.</li>
        </ul>

        <h4>2. Ecological Pyramids</h4>
        <p>The graphic representation of trophic structure. Three types:</p>
        <ul>
          <li><b>Pyramid of Numbers</b>: Usually upright (e.g., grassland). Can be inverted (e.g., one tree supporting thousands of herbivorous insects).</li>
          <li><b>Pyramid of Biomass</b>: Usually upright. Exception: **Inverted in oceans**, where the biomass of phytoplankton (producers) is much smaller than the biomass of zooplankton/fish (consumers) because of rapid turnover.</li>
          <li><b>Pyramid of Energy</b>: <b>Always upright</b>, without exception, as energy is lost as heat at each trophic transfer.</li>
        </ul>
      `
    },
    {
      id: "succession_nutrient_cycles",
      heading: "Ecological Succession & Nutrient Cycles",
      html: `
        <h4>1. Ecological Succession</h4>
        <p>The gradual and predictable change in species composition of a given area.
          <ul>
            <li><b>Primary Succession</b>: Starts in bare areas where no life existed before (e.g., bare rock, cooled lava, newly formed pond). Very slow.</li>
            <li><b>Secondary Succession</b>: Starts in areas where natural vegetation was destroyed (e.g., abandoned farms, burned forests). Faster, as soil is already present.</li>
          </ul>
        </p>
        <p><b>Succession on Land</b>:</p>
        <ul>
          <li><b>Hydrarch Succession</b>: Starts in water, moving from hydric to **mesic** (medium water) conditions.</li>
          <li><b>Xerarch Succession</b>: Starts in dry areas (bare rock). **Pioneer species** are **lichens**, which secrete acids to weather rocks, followed by mosses, herbs, shrubs, and finally a forest (climax community, **mesic** state).</li>
        </ul>

        <h4>2. Nutrient Cycling (Biogeochemical Cycles)</h4>
        <p>The movement of nutrient elements through ecosystem components. Two types:</p>
        <ul>
          <li><b>Gaseous Cycles</b>: Reservoir is in atmosphere or hydrosphere. E.g., **Carbon Cycle** (71% of global carbon is dissolved in oceans; $4 \times 10^{13}$ kg fixed annually via photosynthesis).</li>
          <li><b>Sedimentary Cycles</b>: Reservoir is Earth's crust. E.g., **Phosphorus Cycle** (weathering of rocks releases phosphates into soil; no gaseous respiratory release of phosphorus).</li>
        </ul>
      `
    }
  ],

  mnemonics: [
    {
      title: "Decomposition Steps",
      device: "<b>F**resh **L**emon **C**ake **H**elps **M**en",
      expand: [
        { L: "F", t: "Fragmentation (physical breakdown)" },
        { L: "L", t: "Leaching (nutrients wash down)" },
        { L: "C", t: "Catabolism (enzymatic breakdown)" },
        { L: "H", t: "Humification (humus forms)" },
        { L: "M", t: "Mineralisation (minerals released)" }
      ]
    },
    {
      title: "Xerarch Succession Stages",
      device: "<b>L**ittle **M**osses **H**ate **S**unny **T**rees",
      expand: [
        { L: "L", t: "Lichens (pioneers)" },
        { L: "M", t: "Mosses" },
        { L: "H", t: "Herbs" },
        { L: "S", t: "Shrubs" },
        { L: "T", t: "Trees (climax forest)" }
      ]
    }
  ],

  flashcards: [
    { front: "What is ecological stratification?", back: "The vertical distribution of different species occupying different levels in an ecosystem (e.g., canopy trees at the top, grasses at the bottom)." },
    { front: "Write the equation relating Gross and Net Primary Productivity.", back: "NPP = GPP - R (where R is respiration loss)." },
    { front: "What is secondary productivity?", back: "The rate of formation of new organic matter by consumers." },
    { front: "Explain why oceans have low primary productivity despite covering 70% of Earth.", back: "Oceans contribute only 55 billion tons of NPP (out of 170 billion tons total) because of light limitation with depth and nutrient deficiency." },
    { front: "What is detritus?", back: "Dead organic remains (fallen leaves, twigs, bark, flowers, and dead animal remains/feces) that serve as raw material for decomposition." },
    { front: "Describe the characteristics and function of humus.", back: "Humus is a dark, amorphous, acidic substance formed during humification; it is highly resistant to microbial action, decomposes very slowly, and acts as a nutrient reservoir." },
    { front: "How do lignin/chitin content affect decomposition rates?", back: "Detritus rich in lignin and chitin decomposes very slowly; detritus rich in nitrogen and water-soluble sugars decomposes rapidly." },
    { front: "Define PAR and state how much of it is captured by plants.", back: "Photosynthetically Active Radiation (represents <50% of incident solar energy). Plants capture only 2-10% of PAR (or 1-5% of total incident light) for photosynthesis." },
    { front: "State Lindeman's Ten Percent Law of energy transfer.", back: "During energy transfer from one trophic level to the next, only 10% of the energy is stored as biomass; 90% is lost as respiration/heat." },
    { front: "Which ecological pyramid can NEVER be inverted, and why?", back: "The pyramid of energy is always upright because energy is lost as heat at each successive trophic level transfer (Second Law of Thermodynamics)." },
    { front: "Give an example of an inverted pyramid of biomass.", back: "The pyramid of biomass in a marine ecosystem (phytoplankton biomass is less than zooplankton/fish biomass due to rapid phytoplankton turnover)." },
    { front: "Differentiate between primary and secondary ecological succession.", back: "Primary: occurs in barren areas where no life existed before (bare rock, slow). Secondary: occurs in areas where previous communities were destroyed (abandoned farm, faster)." },
    { front: "Name the pioneer species in xerarch succession.", back: "Lichens (weather the rock by secreting acids, preparing soil for mosses)." },
    { front: "To what moisture state do both hydrarch and xerarch successions lead?", back: "They both lead to medium water (mesic) conditions." },
    { front: "Contrast gaseous and sedimentary nutrient cycles.", back: "Gaseous: reservoir is in the atmosphere/hydrosphere (e.g. Carbon, Nitrogen). Sedimentary: reservoir is in the Earth's crust (e.g. Phosphorus, Sulfur)." },
    { front: "What percentage of an organism's dry weight is carbon?", back: "About 49% of the dry weight of living organisms is carbon (second only to water)." }
  ],

  recall: [
    {
      q: "Differentiate between Gross Primary Productivity (GPP) and Net Primary Productivity (NPP).",
      hint: "respiration losses, organic matter, heterotrophs availability",
      a: "<b>Gross Primary Productivity (GPP)</b> is the total rate at which organic matter/biomass is produced by plants during photosynthesis. <b>Net Primary Productivity (NPP)</b> is the actual biomass that remains after subtracting the plant's own respiration losses ($NPP = GPP - R$). NPP is the actual energy/biomass available for consumption by herbivores and decomposers in the next trophic levels."
    },
    {
      q: "Outline the five steps of detritus decomposition in the soil.",
      hint: "Fragmentation, leaching, catabolism, humification, mineralisation",
      a: "1. <b>Fragmentation</b>: Detritivores (like earthworms) break detritus into smaller pieces. 2. <b>Leaching</b>: Water-soluble inorganic nutrients seep into the soil. 3. <b>Catabolism</b>: Fungal and bacterial enzymes break down detritus into simpler inorganic chemicals. 4. <b>Humification</b>: Accumulation of dark, amorphous, nutrient-rich <b>humus</b>. 5. <b>Mineralisation</b>: Microbes degrade humus, releasing inorganic minerals back to the soil."
    },
    {
      q: "Explain why the marine pyramid of biomass is inverted while the energy pyramid is always upright.",
      hint: "phytoplankton turnover, thermodynamic loss",
      a: "In oceans, the pyramid of biomass is **inverted** because the standing crop biomass of phytoplankton (producers) at any given moment is very low compared to zooplankton and fish. However, phytoplanktons reproduce and turn over extremely fast, sustaining the system. The **pyramid of energy is always upright** because according to thermodynamics, energy is lost as heat during transfer; a higher trophic level can never receive more energy than the level below it."
    },
    {
      q: "Describe the stages of xerarch succession starting on bare rock.",
      hint: "lichens, mosses, annual herbs, climax forest, mesic",
      a: "Xerarch succession begins on bare dry rock: 1. <b>Lichens</b> (pioneer species) colonise the rock, secreting acids that weather the rock into soil. 2. <b>Mosses</b> take hold in the shallow soil, accumulating organic matter. 3. <b>Herbs and grasses</b> invade next as soil thickens. 4. <b>Shrubs</b> shade out herbs. 5. Finally, <b>Trees</b> establish, creating a stable climax forest community. The environment transitions from dry (xeric) to medium-moisture (mesic)."
    },
    {
      q: "Outline the phosphorus cycle and contrast it with the carbon cycle.",
      hint: "sedimentary, weathering, gaseous phase, respiration",
      a: "The **phosphorus cycle** is sedimentary: its primary reservoir is phosphate rocks. Weathering releases phosphates into soil water, which are absorbed by plants and passed to consumers. Decomposition returns it to the soil. Unlike the **carbon cycle**, which is gaseous (CO2 in atmosphere, released by respiration, covers 71% of oceans), the phosphorus cycle has no gaseous phase, and no phosphorus is released into the atmosphere during respiration."
    }
  ],

  mcqs: [
    {
      q: "The available biomass for consumption by heterotrophs is called:",
      o: ["Gross Primary Productivity", "Net Primary Productivity", "Secondary Productivity", "Standing Crop"],
      c: 1,
      e: "Net Primary Productivity (NPP = GPP - R) is the biomass left after plant respiration, which is available to herbivores and decomposers."
    },
    {
      q: "The total annual net primary productivity of the biosphere is about 170 billion tons. What is the contribution of oceans?",
      o: ["115 billion tons", "55 billion tons", "170 billion tons", "35 billion tons"],
      c: 1,
      e: "Oceans contribute only 55 billion tons (~32% of global NPP) despite covering 70% of Earth's surface, because of light attenuation and nutrient limitation."
    },
    {
      q: "Decomposition of detritus is faster when it is rich in:",
      o: ["Lignin and chitin", "Nitrogen and water-soluble sugars", "Cellulose and lignin", "Chitin and tannins"],
      c: 1,
      e: "Decomposition rates are determined by chemical composition. Detritus rich in nitrogen and sugars decomposes fast; detritus rich in tough polymers like lignin/chitin decomposes slowly."
    },
    {
      q: "In a terrestrial ecosystem, the major conduit of energy flow is the:",
      o: ["Grazing Food Chain (GFC)", "Detritus Food Chain (DFC)", "Parasitic Food Chain", "Solar Radiation Chain"],
      c: 1,
      e: "In terrestrial ecosystems, a much larger fraction of energy flows through the Detritus Food Chain (DFC) than the Grazing Food Chain (GFC) due to massive leaf/litter fall."
    },
    {
      q: "A marine pyramid of biomass is typically:",
      o: ["Upright", "Inverted", "Spindle-shaped", "Bell-shaped"],
      c: 1,
      e: "The marine pyramid of biomass is inverted because the biomass of phytoplankton (producers) is less than the zooplankton and fish that feed on them, due to their rapid turnover rate."
    },
    {
      q: "The pioneer species on a bare rock during xerarch succession are:",
      o: ["Mosses", "Lichens", "Liverworts", "Ferns"],
      c: 1,
      e: "Lichens are the pioneer species in xerarch succession. They secrete acids that weather the bare rock, forming soil."
    },
    {
      q: "Both hydrarch and xerarch successions culminate in which community?",
      o: ["Hydric community", "Xeric community", "Mesic community", "Halophytic community"],
      c: 2,
      e: "Succession always progresses towards a medium-water (mesic) state, whether starting in water (hydrarch) or on dry rock (xerarch)."
    },
    {
      q: "Which of the following nutrient cycles is a sedimentary cycle?",
      o: ["Carbon cycle", "Nitrogen cycle", "Phosphorus cycle", "Oxygen cycle"],
      c: 2,
      e: "The phosphorus cycle is a sedimentary cycle with its reservoir in the Earth's crust (rocks). Carbon, nitrogen, and oxygen are gaseous cycles."
    }
  ],

  match: [
    { term: "Stratification", def: "Vertical distribution of species in a forest" },
    { term: "NPP", def: "GPP minus respiration losses (R)" },
    { term: "Oceans NPP", def: "55 billion tons dry weight" },
    { term: "Detritus", def: "Raw material for decomposition" },
    { term: "Leaching", def: "Water-soluble nutrients precipitate into soil" },
    { term: "Humus", def: "Dark, amorphous, slow-decomposing substance" },
    { term: "DFC", def: "Food chain starting with dead organic matter" },
    { term: "Pyramid of Energy", def: "Always upright without exception" },
    { term: "Lichens", def: "Pioneer species on bare rock" },
    { term: "Phosphorus Cycle", def: "Sedimentary cycle with rock reservoir" }
  ],

  pathways: [
    {
      title: "Grazing vs Detritus Food Chain Energy flow",
      prompt: "Order the trophic levels in a terrestrial Grazing Food Chain.",
      steps: [
        "Solar energy captured by green leaves (Producers)",
        "Grasses produce organic biomass (Trophic Level 1)",
        "Rabbits consume grass leaves (Primary Consumers, T2)",
        "Wild cats hunt and feed on rabbits (Secondary Consumers, T3)",
        "Tigers feed on wild cats (Tertiary/Top Consumers, T4)",
        "Tigers die and their remains are decomposed by fungi"
      ]
    },
    {
      title: "Xerarch Succession progression",
      prompt: "Order the stages of xerarch succession from bare rock to climax forest.",
      steps: [
        "Bare rock is weathered by acids from pioneer lichens",
        "Mosses colonise the thin soil pockets",
        "Annual herbs and grasses establish on organic soil",
        "Perennial grasses and weeds cover the terrain",
        "Shrubs and small woody plants shade out grasses",
        "Climax forest trees reach full canopy size (mesic state)"
      ]
    }
  ]
};
