/* ====== data_organisms_pop.js ====== */
DATA.chapters.organisms_pop = {
  id: "organisms_pop",
  num: 13,
  title: "Organisms & Populations",
  subtitle: "Abiotic factors, homeostasis, xerophytic adaptations, population growth models, and species interactions — NCERT Class 12 Chapter 13",
  color: "#10b981",
  colorD: "#065f46",
  glyph: "🦁",

  notes: [
    {
      id: "abiotic_factors_responses",
      heading: "Abiotic Factors & Organism Responses",
      html: `
        <h4>1. Key Abiotic Factors</h4>
        <ul>
          <li><b>Temperature</b>: Most relevant factor. Average temp decreases from equator to poles. Affects enzyme kinetics and basal metabolism. 
            <ul>
              <li><b>Eurythermal</b>: Tolerate a wide range of temperatures.</li>
              <li><b>Stenothermal</b>: Restricted to a narrow range of temperatures. (E.g., mango trees cannot grow in Canada; snow leopards are not found in Kerala).</li>
            </ul>
          </li>
          <li><b>Water</b>: Life on Earth originated in water and is unsustainable without it. Osmotic concentration is key.
            <ul>
              <li><b>Euryhaline</b>: Tolerate a wide range of salinities.</li>
              <li><b>Stenohaline</b>: Restricted to a narrow range of salinities. Salinity is <5 ppt in fresh water, 30–35 ppt in sea, and >100 ppt in hypersaline lagoons.</li>
            </ul>
          </li>
          <li><b>Light & Soil</b>: Light governs photosynthesis and photoperiodism. Soil properties (pH, mineral composition, grain size) determine vegetation.</li>
        </ul>
        
        <h4>2. Responses to Abiotic Factors (Homeostasis)</h4>
        <table class="cmp">
          <thead>
            <tr><th>Response</th><th>Mechanism & Characteristics</th></tr>
          </thead>
          <tbody>
            <tr><td><b>Regulate</b></td><td>Maintain internal constancy (thermoregulation and osmoregulation). E.g., all birds, mammals, and very few lower vertebrates. Sweat in summer (cooling); shiver in winter (warmth). Energetically expensive (reason why small animals like shrews are rarely found in polar regions; high surface-area-to-volume ratio causes rapid heat loss).</td></tr>
            <tr><td><b>Conform</b></td><td>Cannot maintain constant internal environment; body temperature changes with ambient temperature. 99% of animals and almost all plants are conformers.</td></tr>
            <tr><td><b>Migrate</b></td><td>Move temporarily from stressful habitats to hospitable areas. E.g., migratory birds from Siberia visit **Keoladeo National Park** (Bharatpur, Rajasthan) in winter.</td></tr>
            <tr><td><b>Suspend</b></td><td>Survival via inactivity. E.g., thick-walled spores in bacteria/fungi; seed dormancy. **Hibernation** (winter sleep in bears), **Aestivation** (summer sleep in snails/fish), and **Diapause** (suspended development in zooplanktons).</td></tr>
          </tbody>
        </table>
      `
    },
    {
      id: "adaptations",
      heading: "Adaptations",
      html: `
        <p>An **adaptation** is any attribute of the organism (morphological, physiological, behavioural) that enables it to survive and reproduce in its habitat.</p>
        
        <h4>1. Desert Adaptations</h4>
        <ul>
          <li><b>Kangaroo Rat</b> (Arizona desert): Meets water needs through **internal fat oxidation** (water is a byproduct) and exerts the ability to **concentrate its urine** to a minimal volume.</li>
          <li><b>Xerophytes (Desert Plants)</b>: Thick cuticle, **sunken stomata** in deep pits to reduce transpiration, **CAM pathway** (stomata open only at night), and leaves modified into spines (photosynthesis by flattened green stems, e.g., <i>Opuntia</i>).</li>
        </ul>

        <h4>2. Cold Climate Adaptations</h4>
        <ul>
          <li><b>Allen's Rule</b>: Mammals from colder climates generally have **shorter ears and limbs** to minimise heat loss.</li>
          <li><b>Polar Seals</b>: Possess a thick layer of fat called **blubber** below the skin, which acts as an insulator and reduces heat loss.</li>
        </ul>

        <h4>3. Physiological & Behavioural Adaptations</h4>
        <ul>
          <li><b>Altitude Sickness</b> (e.g., Rohtang Pass >3500m): Nausea, fatigue, and heart palpitations due to low pO<sub>2</sub>. The body compensates by:
            <ol>
              <li>Increasing Red Blood Cell (RBC) production.</li>
              <li>Decreasing the binding affinity of haemoglobin.</li>
              <li>Increasing the breathing rate.</li>
            </ol>
          </li>
          <li><b>Desert Lizards</b> (Behavioural): Lack physiological thermoregulation. They bask in the sun to absorb heat when body temp drops, and move to shade when body temp rises.</li>
        </ul>
      `
    },
    {
      id: "population_growth",
      heading: "Population Attributes & Growth Models",
      html: `
        <h4>1. Population Attributes</h4>
        <p>Populations have attributes that individuals do not: Birth and Death rates (per capita), Sex ratio, and Age distribution. Age distribution is represented by **Age Pyramids**:</p>
        <ul>
          <li><b>Expanding</b>: Triangular pyramid, with a broad base of pre-reproductive individuals.</li>
          <li><b>Stable</b>: Bell-shaped pyramid.</li>
          <li><b>Declining</b>: Urn-shaped pyramid, with a narrow base of pre-reproductive individuals.</li>
        </ul>

        <h4>2. Population Growth Equation</h4>
        <p>Population density ($N$) changes due to Natality ($B$), Mortality ($D$), Immigration ($I$), and Emigration ($E$):</p>
        <p align="center"><b>$N_{t+1} = N_t + [(B + I) - (D + E)]$</b></p>

        <h4>3. Growth Models</h4>
        <table class="cmp">
          <thead>
            <tr><th>Exponential Growth (Unlimited Resources)</th><th>Logistic Growth (Limited Resources)</th></tr>
          </thead>
          <tbody>
            <tr><td>Geometric/exponential increase. Unrealistic in nature.</td><td>Realistic. Population reaches **Carrying Capacity (K)** where growth stops.</td></tr>
            <tr><td>Equation: 
              <p><b>$dN/dt = rN$</b></p>
              Integral form: <b>$N_t = N_0e^{rt}$</b><br/>
              (where $r$ = intrinsic rate of natural increase).
            </td><td>Equation (Verhulst-Pearl Logistic Growth):
              <p><b>$dN/dt = rN \left(\frac{K - N}{K}\right)$</b></p>
            </td></tr>
            <tr><td><b>J-shaped curve</b></td><td><b>S-shaped (Sigmoid) curve</b></td></tr>
          </tbody>
        </table>
      `
    },
    {
      id: "population_interactions",
      heading: "Population Interactions",
      html: `
        <p>In nature, interspecific interactions arise from populations of two different species. Types of interactions:</p>
        
        <h4>1. Mutualism (+ / +)</h4>
        <p>Both species benefit. E.g., **Lichens** (fungus + photosynthesising algae/cyanobacteria), **Mycorrhiza** (fungi of genus <i>Glomus</i> + roots of plants). **Orchid <i>Ophrys</i>** utilizes **sexual deceit** where one petal mimics a female bee to get pollinated by a male bee during pseudocopulation.</p>

        <h4>2. Commensalism (+ / 0)</h4>
        <p>One benefits, the other is unaffected. E.g., Orchid growing as an epiphyte on a mango branch; Barnacles growing on the back of a whale; Cattle egret birds feeding on insects stirred up by grazing cattle; Clownfish living among stinging sea anemone tentacles.</p>

        <h4>3. Parasitism (+ / -) & Predation (+ / -)</h4>
        <ul>
          <li><b>Parasitism</b>: E.g., <i>Cuscuta</i> (parasitic plant on hedges; lacks chlorophyll), Liver fluke (requires snail and fish hosts), Brood parasitism (Koel lays eggs in Crow's nest; Crow incubates them).</li>
          <li><b>Predation</b>: Predators act as conduits for energy transfer and keep prey populations stable. E.g., Prickly pear cactus controlled by Cactoblastis moth in Australia. Calotropis plant produces toxic **cardiac glycosides** to avoid herbivores.</li>
        </ul>

        <h4>4. Competition (- / -)</h4>
        <ul>
          <li><b>Competitive Exclusion Principle (Gause)</b>: Two closely related species competing for the same resources cannot co-exist indefinitely; the competitively inferior is eliminated. E.g., Abingdon tortoise in Galapagos went extinct within a decade after goats were introduced due to goats' greater browsing efficiency.</li>
          <li><b>Resource Partitioning</b>: Competing species evolve different feeding times or foraging patterns to co-exist. E.g., MacArthur showed five species of warblers co-existing on the same tree.</li>
        </ul>
      `
    }
  ],

  mnemonics: [
    {
      title: "Responses to Abiotic Stress",
      device: "<b>R**eal **C**ats **M**eow **S**adly",
      expand: [
        { L: "R", t: "Regulate (internal constancy)" },
        { L: "C", t: "Conform (change with ambient environment)" },
        { L: "M", t: "Migrate (move away temporarily)" },
        { L: "S", t: "Suspend (inactivity like hibernation/diapause)" }
      ]
    },
    {
      title: "Population Interactions",
      device: "<b>M**utual **C**ompanions **P**redate **P**arasites **C**ompetitively",
      expand: [
        { L: "M", t: "Mutualism (+ / +)" },
        { L: "C", t: "Commensalism (+ / 0)" },
        { L: "P", t: "Predation (+ / -)" },
        { L: "P", t: "Parasitism (+ / -)" },
        { L: "C", t: "Competition (- / -)" }
      ]
    }
  ],

  flashcards: [
    { front: "Define eurythermal and stenothermal organisms.", back: "Eurythermal: tolerate wide temperature range (e.g. mammals). Stenothermal: restricted to narrow temperature range (e.g. corals, mango trees)." },
    { front: "Define euryhaline and stenohaline organisms.", back: "Euryhaline: tolerate wide salinity range. Stenohaline: restricted to narrow salinity range." },
    { front: "Why are small animals like shrews rarely found in polar regions?", back: "Small size gives them a high surface-area-to-volume ratio, causing them to lose body heat very fast; they must expend huge energy to maintain body temperature through metabolism." },
    { front: "Explain how the Kangaroo Rat adapts to desert water scarcity.", back: "1. Oxidises internal fats (yielding water as a byproduct), 2. Concentrates its urine to a highly viscous state to minimise water loss." },
    { front: "What features represent xerophytic adaptations in desert plants?", back: "Thick cuticle, sunken stomata, CAM pathway (stomata open at night), and leaves reduced to spines with green flattened stems (e.g., Opuntia) doing photosynthesis." },
    { front: "State Allen's Rule.", back: "Mammals from colder climates tend to have shorter ears and limbs to minimise heat loss." },
    { front: "Explain the physiological changes that occur during altitude sickness.", back: "Caused by low pO2; body compensates by: 1. Increasing RBC production, 2. Decreasing haemoglobin-oxygen binding affinity, 3. Increasing breathing rate." },
    { front: "Give examples of hibernation, aestivation, and diapause.", back: "Hibernation: winter sleep in bears. Aestivation: summer sleep in snails/fish. Diapause: stage of suspended development in zooplankton." },
    { front: "What are the shapes of expanding, stable, and declining age pyramids?", back: "Expanding: triangular (broad pre-reproductive base). Stable: bell-shaped. Declining: urn-shaped (narrow base)." },
    { front: "Write the equation for population density at time t+1.", back: "N<sub>t+1</sub> = N<sub>t</sub> + [(B + I) - (D + E)] (where B=birth, I=immigration, D=death, E=emigration)." },
    { front: "Write the equation for Verhulst-Pearl Logistic Growth.", back: "dN/dt = rN((K - N)/K) (where K is the Carrying Capacity and r is the intrinsic rate of natural increase)." },
    { front: "State Gause's Competitive Exclusion Principle.", back: "Two closely related species competing for the same limiting resources cannot co-exist indefinitely; the competitively inferior species is eventually eliminated." },
    { front: "What is resource partitioning?", back: "Evolved mechanism where competing species avoid direct competition by choosing different feeding times or foraging behaviors (e.g., MacArthur's warblers)." },
    { front: "What toxin is produced by Calotropis weeds as defense?", back: "Highly poisonous cardiac glycosides, which deter feeding herbivores." },
    { front: "What is brood parasitism? Give an example.", back: "A parasite bird laying eggs in a host's nest to let the host incubate them. E.g., Koel laying eggs in a Crow's nest." },
    { front: "Explain sexual deceit in the Mediterranean orchid Ophrys.", back: "One petal of the orchid mimics a female bee in appearance and odour. Male bees attempt pseudocopulation with the flower, transferring pollen from one orchid to another." }
  ],

  recall: [
    {
      q: "Explain why polar regions lack small endothermic animals like hummingbirds and shrews.",
      hint: "surface-area-to-volume ratio, heat loss, metabolic rate",
      a: "Thermoregulation is energetically expensive. Heat loss or heat gain is a function of surface area. Small animals have a very high <b>surface-area-to-volume ratio</b>. Consequently, they lose body heat extremely fast when it is cold outside. To maintain internal body temperature, they must generate heat by consuming food at an extremely fast rate, which is unsustainable in harsh, resource-poor polar climates."
    },
    {
      q: "Describe the physiological adjustments the human body makes to adapt to high altitudes.",
      hint: "low pO2, Rohtang Pass, RBC, haemoglobin affinity, hyperventilation",
      a: "At high altitudes (like Rohtang Pass >3500m), low atmospheric pressure reduces oxygen levels, causing altitude sickness (nausea, fatigue). The body adapts physiologically within days by: 1. <b>Increasing RBC count</b> to bind more oxygen. 2. <b>Decreasing haemoglobin-oxygen affinity</b>, allowing oxygen to be released to tissues more easily. 3. <b>Increasing breathing rate</b> (hyperventilation) to take in more air."
    },
    {
      q: "Contrast exponential and logistic population growth models, explaining the carrying capacity.",
      hint: "J-curve vs S-curve, dN/dt = rN, resources limiting, K",
      a: "1. <b>Exponential Growth</b>: Occurs when resources are unlimited. The growth is geometric, represented by $dN/dt = rN$, forming a <b>J-shaped curve</b>. Unrealistic in nature. 2. <b>Logistic Growth</b>: Occurs when resources are limited. The population grows until it reaches the <b>Carrying Capacity (K)</b> (maximum individuals the environment can support). Represented by $dN/dt = rN((K-N)/K)$, forming a Sigmoid/S-shaped curve. More realistic."
    },
    {
      q: "Compare mutualism, commensalism, and competition, providing biological examples of each.",
      hint: "+/+ vs +/0 vs -/-, Mycorrhiza, orchid epiphyte, Gause tortoise",
      a: "1. <b>Mutualism (+/+)</b>: Both species benefit, e.g., mycorrhizal fungi absorbing nutrients for plant roots, or lichens. 2. <b>Commensalism (+/0)</b>: One benefits, other unaffected, e.g., an orchid growing as an epiphyte on a mango branch, or cattle egrets following grazing cows. 3. <b>Competition (-/-)</b>: Both are harmed, e.g., Abingdon tortoise going extinct in Galapagos after goats outcompeted them for food."
    }
  ],

  mcqs: [
    {
      q: "Organisms that are restricted to a narrow range of salinity tolerance are classified as:",
      o: ["Euryhaline", "Stenohaline", "Eurythermal", "Stenothermal"],
      c: 1,
      e: "Stenohaline organisms are restricted to a narrow range of salinity (salt concentration), whereas euryhaline organisms tolerate wide ranges."
    },
    {
      q: "Which response to abiotic stress is shown by Siberian cranes visiting Bharatpur, Rajasthan?",
      o: ["Regulation", "Conforming", "Migration", "Suspension"],
      c: 2,
      e: "Siberian cranes migrate thousands of miles from cold Siberia to Keoladeo National Park in Bharatpur to escape harsh winter conditions, which is a migration response."
    },
    {
      q: "Allen's rule states that mammals in colder climates have:",
      o: ["Thicker blubber under skin", "Shorter ears and limbs", "Larger body size", "Higher metabolic rates"],
      c: 1,
      e: "Allen's Rule states that colder-climate mammals have shorter ears and limbs to minimise surface area, thereby reducing heat loss."
    },
    {
      q: "A population pyramid with an urn-shaped distribution indicates that the population is:",
      o: ["Expanding", "Stable", "Declining", "Fluctuating"],
      c: 2,
      e: "An urn-shaped pyramid has a narrow base of pre-reproductive individuals, showing that births are declining and the population is shrinking."
    },
    {
      q: "In the logistic growth equation, K represents:",
      o: ["Intrinsic rate of natural increase", "Population density", "Carrying capacity", "Regression coefficient"],
      c: 2,
      e: "In the Verhulst-Pearl Logistic Growth equation, K represents the carrying capacity, which is the maximum size the environment can support."
    },
    {
      q: "What was the biological agent introduced to control the invasive Prickly pear cactus in Australia?",
      o: ["Goat", "Coelacanth", "Cactoblastis moth", "Ladybird beetle"],
      c: 2,
      e: "The invasive Prickly pear cactus spread over millions of hectares in Australia. It was successfully controlled by introducing a cactus-feeding moth (Cactoblastis) from South America."
    },
    {
      q: "Brood parasitism is seen between which two birds?",
      o: ["Orchid and Bee", "Koel and Crow", "Sea anemone and Clown fish", "Egret and Cow"],
      c: 1,
      e: "Brood parasitism occurs when the parasitic Koel lays eggs in the nest of a host Crow, which incubates and rears them due to egg mimicry."
    },
    {
      q: "The interaction where an orchid grows as an epiphyte on a mango branch is:",
      o: ["Mutualism", "Commensalism", "Competition", "Amensalism"],
      c: 1,
      e: "The orchid benefits from physical support and exposure to light, while the mango tree is neither harmed nor benefited. This is a classic example of commensalism (+ / 0)."
    }
  ],

  match: [
    { term: "Stenothermal", def: "Restricted to narrow temperature range" },
    { term: "Diapause", def: "Suspended development stage in zooplankton" },
    { term: "Allen's Rule", def: "Shorter ears and limbs in cold climates" },
    { term: "Opuntia", def: "CAM pathway & leaves reduced to spines" },
    { term: "Keoladeo Park", def: "Bharatpur sanctuary hosting Siberian cranes" },
    { term: "Urn-shaped pyramid", def: "Represents a declining population" },
    { term: "dN/dt = rN", def: "Exponential population growth rate" },
    { term: "Carrying Capacity", def: "K, limiting resource cap in logistic growth" },
    { term: "Cardiac glycosides", def: "Calotropis toxic chemical defense" },
    { term: "Sexual deceit", def: "Orchid Ophrys mimicking female bee" }
  ],

  pathways: [
    {
      title: "Logistic Population Growth Phases",
      prompt: "Order the growth phases of a population showing Sigmoid growth.",
      steps: [
        "Lag phase (initial slow establishment and growth)",
        "Acceleration phase (growth begins to speed up)",
        "Log/Exponential phase (rapid increase in population size)",
        "Deceleration phase (growth slows as resources become limiting)",
        "Asymptote phase (growth rate reaches zero)",
        "Stable population density at Carrying Capacity (K)"
      ]
    },
    {
      title: "Somatic Adaptation to High Altitudes",
      prompt: "Order the somatic steps of adapting to low oxygen pressure at high altitudes.",
      steps: [
        "Ascend to a high altitude (e.g. Rohtang Pass >3500m)",
        "Suffer altitude sickness due to low oxygen availability",
        "Breathing rate increases immediately to capture more air",
        "Kidneys release erythropoietin to stimulate bone marrow",
        "Body increases total Red Blood Cell (RBC) count",
        "Haemoglobin-oxygen binding affinity drops, releasing O2 easily",
        "Sickness symptoms resolve, representing acclimatisation"
      ]
    }
  ]
};
