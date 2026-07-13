/* ====== data_microbes.js ====== */
DATA.chapters.microbes = {
  id: "microbes",
  num: 10,
  title: "Microbes in Human Welfare",
  subtitle: "LAB in curd, industrial fermentation, sewage treatment, biogas, biocontrol agents, and biofertilisers — NCERT Class 12 Chapter 10",
  color: "#10b981",
  colorD: "#065f46",
  glyph: "🦠",

  notes: [
    {
      id: "household_industrial",
      heading: "Microbes in Household & Industrial Products",
      html: `
        <h4>1. Household Products</h4>
        <ul>
          <li><b>Curd</b>: Lactic Acid Bacteria (<b>LAB</b>/<i>Lactobacillus</i>) grow in milk and convert it to curd by producing acids that coagulate and partially digest milk proteins. LAB improves nutritional value by increasing **Vitamin B12** and checks disease-causing microbes in the stomach.</li>
          <li><b>Dough</b>: Fermented by bacteria (producing CO<sub>2</sub> which causes puffed-up appearance) for Dosa/Idli. Bread dough is fermented by **Baker's yeast** (<i>Saccharomyces cerevisiae</i>).</li>
          <li><b>Cheese</b>: 
            <ul>
              <li><b>Swiss Cheese</b>: Has large holes due to high production of CO<sub>2</sub> by the bacterium <i>Propionibacterium sharmanii</i>.</li>
              <li><b>Roquefort Cheese</b>: Ripened by growing a specific fungus on them for a particular flavour.</li>
            </ul>
          </li>
        </ul>
        
        <h4>2. Industrial Products</h4>
        <p>Grown in very large vessels called **fermentors**.</p>
        <ul>
          <li><b>Fermented Beverages</b>: Brewer's yeast (<i>Saccharomyces cerevisiae</i>) ferments malted cereals and fruit juices into ethanol. Wine and Beer are produced **without distillation**, while Whisky, Brandy, and Rum are produced **by distillation** of the fermented broth.</li>
          <li><b>Antibiotics</b>: **Penicillin** was discovered by Alexander Fleming while working on <i>Staphylococcus</i> bacteria (mould was <i>Penicillium notatum</i>). Its full potential was established by Ernest Chain and Howard Florey (Nobel Prize in 1945).</li>
        </ul>
      `
    },
    {
      id: "chemicals_enzymes",
      heading: "Chemicals, Enzymes & Bioactive Molecules",
      html: `
        <h4>1. Organic Acids</h4>
        <table class="cmp">
          <thead>
            <tr><th>Acid</th><th>Microbe Source</th><th>Type</th></tr>
          </thead>
          <tbody>
            <tr><td><b>Citric Acid</b></td><td><i>Aspergillus niger</i></td><td>Fungus</td></tr>
            <tr><td><b>Acetic Acid</b></td><td><i>Acetobacter aceti</i></td><td>Bacterium</td></tr>
            <tr><td><b>Butyric Acid</b></td><td><i>Clostridium butylicum</i></td><td>Bacterium</td></tr>
            <tr><td><b>Lactic Acid</b></td><td><i>Lactobacillus</i></td><td>Bacterium</td></tr>
          </tbody>
        </table>

        <h4>2. Enzymes & Applications</h4>
        <ul>
          <li><b>Lipases</b>: Used in detergent formulations to remove oily stains from laundry.</li>
          <li><b>Pectinases & Proteases</b>: Used to clear bottled fruit juices.</li>
          <li><b>Streptokinase</b>: Produced by <i>Streptococcus</i> bacterium. Modified genetically, it is used as a **"clot buster"** to remove blood clots from vessels in patients with myocardial infarction (heart attack).</li>
        </ul>

        <h4>3. Bioactive Molecules</h4>
        <ul>
          <li><b>Cyclosporin A</b>: Produced by the fungus <i>Trichoderma polysporum</i>. Used as an **immunosuppressive agent** in organ-transplant patients.</li>
          <li><b>Statins</b>: Produced by the yeast <i>Monascus purpureus</i>. Used as **blood-cholesterol lowering agents** by competitively inhibiting the enzyme responsible for cholesterol synthesis.</li>
        </ul>
      `
    },
    {
      id: "sewage_treatment",
      heading: "Microbes in Sewage Treatment",
      html: `
        <p>Sewage contains large amounts of organic matter and pathogenic microbes. It is treated in **Sewage Treatment Plants (STPs)** before discharge.</p>
        
        <h4>1. Primary Treatment (Physical)</h4>
        <p>Physical removal of large and small particles through sequential filtration (removes floating debris) and sedimentation (removes grit/soil). Settled solids form **primary sludge**; supernatant is the **effluent**.</p>
        
        <h4>2. Secondary Treatment (Biological)</h4>
        <div class="flow">
          <span class="step">Effluent aerated and agitated</span><span class="arr">→</span>
          <span class="step">Aerobic microbes form 'Flocs'</span><span class="arr">→</span>
          <span class="step">Flocs consume organic matter</span><span class="arr">→</span>
          <span class="step">BOD drops significantly</span>
        </div>
        <ul>
          <li><b>Flocs</b>: Masses of bacteria associated with fungal filaments to form mesh-like structures.</li>
          <li><b>BOD (Biochemical Oxygen Demand)</b>: The amount of oxygen consumed if all organic matter in 1 litre of water were oxidised by bacteria. Higher BOD = higher polluting potential.</li>
          <li>Once BOD drops, effluent is passed to a settling tank where flocs sediment as **activated sludge**.</li>
          <li>A small part of activated sludge is pumped back to the aeration tank (inoculum); the rest goes to **anaerobic sludge digesters**.</li>
          <li>Anaerobic bacteria digest flocs, producing **biogas** (mixture of **Methane (CH<sub>4</sub>), Hydrogen Sulfide (H<sub>2</sub>S), and CO<sub>2</sub>**).</li>
        </ul>
      `
    },
    {
      id: "biogas_biocontrol_biofertilisers",
      heading: "Biogas, Biocontrol & Biofertilisers",
      html: `
        <h4>1. Biogas Production</h4>
        <p>Biogas is a gas mixture produced by microbial activity. Major gas is methane, produced by anaerobic methanogens like <i>Methanobacterium</i> (found in cattle rumen and anaerobic sludge). Biogas plants ferment cow dung ('Gobar gas').</p>

        <h4>2. Microbes as Biocontrol Agents</h4>
        <ul>
          <li>Ladybird beetles control aphids; Dragonflies control mosquitoes.</li>
          <li><b><i>Bacillus thuringiensis</i> (Bt)</b>: Dry spores mixed with water are sprayed on plants. Caterpillars eat them, and the toxin is activated in their **alkaline gut**, killing them.</li>
          <li><b><i>Trichoderma</i></b>: Free-living fungi in root ecosystems; act as effective biocontrol agents against several plant pathogens.</li>
          <li><b>Baculoviruses (<i>Nucleopolyhedrovirus</i>)</b>: Species-specific, narrow-spectrum insecticidal pathogens. Safe for mammals, birds, and non-target insects; ideal for **IPM (Integrated Pest Management)**.</li>
        </ul>

        <h4>3. Microbes as Biofertilisers</h4>
        <ul>
          <li><b>Bacteria</b>: Symbiotic <i>Rhizobium</i> in legume root nodules. Free-living nitrogen fixers like <i>Azotobacter</i> and <i>Azospirillum</i>.</li>
          <li><b>Fungi (Mycorrhiza)</b>: Fungi of genus <i>Glomus</i> form symbiotic associations with roots. The fungus absorbs **phosphorus** from the soil and transfers it to the plant, also conferring drought and salinity tolerance.</li>
          <li><b>Cyanobacteria</b>: Autotrophic nitrogen fixers in aquatic/terrestrial habitats (e.g., <i>Anabaena</i>, <i>Nostoc</i>, <i>Oscillatoria</i>). Crucial biofertilisers in paddy fields.</li>
        </ul>
      `
    }
  ],

  mnemonics: [
    {
      title: "Microbial Organic Acids",
      device: "<b>A**nger **N**eeded **C**itrus; **A**lways **A**ccept **A**cetic",
      expand: [
        { L: "Aspergillus niger", t: "Aspergillus niger (fungus) -> Citric acid" },
        { L: "Acetobacter aceti", t: "Acetobacter aceti (bacterium) -> Acetic acid" },
        { L: "Clostridium butylicum", t: "Clostridium butylicum -> Butyric acid" }
      ]
    },
    {
      title: "Biogas Component Gases",
      device: "<b>M**ammals **C**an't **H**ide **S**cents",
      expand: [
        { L: "Methane", t: "Methane (CH4) — major component" },
        { L: "Carbon dioxide", t: "Carbon dioxide (CO2)" },
        { L: "Hydrogen Sulfide", t: "Hydrogen Sulfide (H2S)" }
      ]
    },
    {
      title: "Bioactive Molecules & Sources",
      device: "<b>T**ry **P**olysporum **C**yclosporin; **M**onascus **P**urpureus **S**tatins",
      expand: [
        { L: "Trichoderma polysporum", t: "Trichoderma polysporum yields Cyclosporin A (immunosuppressant)" },
        { L: "Monascus purpureus", t: "Monascus purpureus yields Statins (cholesterol lowering)" }
      ]
    }
  ],

  flashcards: [
{front:"Which microbe is primarily responsible for converting milk to curd?", back:"Lactobacillus (Lactic Acid Bacteria or LAB)."},
{front:"How does LAB improve the nutritional quality of curd?", back:"By increasing Vitamin B12 content."},
{front:"What yeast is known as baker's yeast and brewer's yeast?", back:"Saccharomyces cerevisiae."},
{front:"Which microbe produces the antibiotic Penicillin?", back:"Penicillium notatum."},
{front:"Who discovered Penicillin?", back:"Alexander Fleming."},
{front:"Which microbe produces Citric Acid?", back:"Aspergillus niger (a fungus)."},
{front:"What is the medical use of Streptokinase and which microbe produces it?", back:"Used as a 'clot buster' for heart attack patients; produced by Streptococcus."},
{front:"Which microbe produces Cyclosporin A and what is its use?", back:"Trichoderma polysporum; used as an immunosuppressive agent in organ transplants."},
{front:"What are statins used for and what produces them?", back:"Blood-cholesterol lowering agents; produced by Monascus purpureus (yeast)."},
{front:"What is the primary treatment of sewage?", back:"Physical removal of particles (filtration and sedimentation)."},
{front:"What are flocs in secondary sewage treatment?", back:"Masses of bacteria associated with fungal filaments to form mesh-like structures."},
{front:"What is Biochemical Oxygen Demand (BOD)?", back:"The amount of oxygen consumed if all organic matter in 1L of water were oxidized by bacteria."},
{front:"What does methanobacterium produce during anaerobic sludge digestion?", back:"Biogas (primarily methane, H2S, and CO2)."},
{front:"Give an example of a microbial biocontrol agent used against caterpillars.", back:"Bacillus thuringiensis (Bt)."},
{front:"What are mycorrhizae?", back:"Symbiotic associations between fungi (like Glomus) and plant roots that absorb phosphorus from soil."},
{front:"Which group of organisms act as biofertilizers in paddy fields?", back:"Cyanobacteria (e.g., Anabaena, Nostoc, Oscillatoria)."},
{front:"What are baculoviruses used for?", back:"Biological control of insects and other arthropods (e.g., genus Nucleopolyhedrovirus)."},

    { front: "Which acid coagulates milk proteins to form curd, and what bacteria produces it?", back: "Lactic acid, produced by Lactic Acid Bacteria (LAB / Lactobacillus)." },
    { front: "How does curdling improve the nutritional value of milk?", back: "It increases the content of Vitamin B12." },
    { front: "Name the bacterium responsible for the large holes in Swiss cheese.", back: "Propionibacterium sharmanii, which produces a large amount of carbon dioxide." },
    { front: "Which beverages are produced without distillation?", back: "Wine and beer. (Whisky, brandy, and rum require distillation)." },
    { front: "Who discovered Penicillin and from which organism?", back: "Alexander Fleming, from the green mould Penicillium notatum (inhibited Staphylococcus bacteria)." },
    { front: "Name the source organism for Citric acid and state its type.", back: "Aspergillus niger, which is a fungus." },
    { front: "Name the source organism and type for Butyric acid.", back: "Clostridium butylicum, which is a bacterium." },
    { front: "What is Streptokinase, its source, and clinical use?", back: "A 'clot buster' enzyme produced by Streptococcus bacterium, used to dissolve blood clots in patients with myocardial infarction." },
    { front: "Name the source and clinical use of Cyclosporin A.", back: "Produced by the fungus Trichoderma polysporum; used as an immunosuppressive agent in organ-transplant patients." },
    { front: "What are statins, their source, and how do they function?", back: "Blood-cholesterol lowering molecules produced by the yeast Monascus purpureus; they competitively inhibit the cholesterol-synthesising enzyme." },
    { front: "Define 'flocs' in sewage treatment.", back: "Masses of aerobic bacteria associated with fungal filaments that form mesh-like structures in aeration tanks." },
    { front: "What is BOD and what does it indicate?", back: "Biochemical Oxygen Demand; it measures the amount of oxygen required to degrade organic matter in water. Higher BOD indicates higher organic pollution." },
    { front: "Which gases make up biogas?", back: "Methane (CH<sub>4</sub>), Carbon dioxide (CO<sub>2</sub>), and Hydrogen Sulfide (H<sub>2</sub>S)." },
    { front: "How does Bacillus thuringiensis (Bt) kill caterpillars?", back: "It releases toxic protein crystals that dissolve in the alkaline pH of the insect's midgut, creating pores and causing death." },
    { front: "What are Baculoviruses and why are they used in IPM?", back: "Species-specific, narrow-spectrum insecticidal pathogens (genus Nucleopolyhedrovirus) that do not harm non-target insects or mammals." },
    { front: "Which genus of fungi forms mycorrhiza and what nutrient does it absorb?", back: "The genus Glomus; it absorbs phosphorus from the soil and transfers it to the host plant." }
  ],

  recall: [
    {
      q: "Explain the biochemical roles and source organisms of Cyclosporin A and Statins.",
      hint: "Trichoderma polysporum, organ-transplant, Monascus purpureus, cholesterol",
      a: "1. <b>Cyclosporin A</b>: Produced by the fungus <i>Trichoderma polysporum</i>. It acts as an immunosuppressive agent, preventing the host immune system from rejecting transplanted organs. 2. <b>Statins</b>: Produced by the yeast <i>Monascus purpureus</i>. They function as blood-cholesterol lowering agents by competitively binding and inhibiting the enzyme responsible for synthesising cholesterol in the body."
    },
    {
      q: "Outline the secondary biological treatment of sewage in an STP.",
      hint: "aeration, flocs, BOD, settling, activated sludge, anaerobic digester",
      a: "Secondary treatment is biological: 1. Primary effluent is passed into large aeration tanks, where aerobic bacteria and fungi grow into mesh-like <b>flocs</b>. 2. Flocs consume organic matter, lowering the <b>BOD</b> of the water. 3. Once BOD is low, effluent goes to settling tanks where flocs sediment as <b>activated sludge</b>. 4. A small part of the sludge inoculates new aeration tanks, while the rest goes to <b>anaerobic sludge digesters</b>, where anaerobic bacteria digest flocs, producing biogas (methane, H2S, CO2)."
    },
    {
      q: "Describe how Bacillus thuringiensis and Baculoviruses serve as biocontrol agents.",
      hint: "caterpillars, alkaline gut, Nucleopolyhedrovirus, narrow spectrum",
      a: "1. <b>Bacillus thuringiensis (Bt)</b>: Produces insecticidal protein crystals. When eaten by caterpillars, the alkaline pH of their gut solubilises the crystals, releasing active toxins that bind to epithelial cells, create pores, and kill the insect. 2. <b>Baculoviruses (Nucleopolyhedrovirus)</b>: Viruses that target specific insect pests and arthropods. They are narrow-spectrum and have no side effects on plants, mammals, or non-target beneficial insects, making them ideal for Integrated Pest Management (IPM)."
    },
    {
      q: "Explain the role of Glomus and Cyanobacteria as biofertilisers in agriculture.",
      hint: "Mycorrhiza, phosphorus, paddy fields, Anabaena",
      a: "1. <b>Glomus</b>: A genus of fungi that forms symbiotic <b>mycorrhiza</b> with plant roots. The fungus absorbs soil phosphorus and delivers it to the plant, while providing resistance to root pathogens and drought. 2. <b>Cyanobacteria</b> (e.g., <i>Anabaena</i>, <i>Nostoc</i>): Autotrophic organisms that fix atmospheric nitrogen. In waterlogged paddy fields, cyanobacteria serve as critical biofertilisers, improving soil nitrogen content and boosting crop yield."
    }
  ],

  mcqs: [
    {
      q: "Lactic Acid Bacteria (LAB) check the growth of disease-causing microbes in the stomach and increase:",
      o: ["Vitamin B1", "Vitamin B12", "Vitamin C", "Vitamin D"],
      c: 1,
      e: "LAB grows in milk and converts it to curd, digesting casein and enriching the curd with Vitamin B12, which is essential for human health."
    },
    {
      q: "Which of the following organic acids is produced by a fungal microbe?",
      o: ["Acetic acid", "Citric acid", "Butyric acid", "Lactic acid"],
      c: 1,
      e: "Citric acid is produced by Aspergillus niger, which is a fungus. Acetic acid (Acetobacter), butyric acid (Clostridium), and lactic acid (Lactobacillus) are produced by bacteria."
    },
    {
      q: "Which enzyme is clinically referred to as a 'clot buster'?",
      o: ["Lipase", "Pectinase", "Streptokinase", "Amylase"],
      c: 2,
      e: "Streptokinase, produced by Streptococcus, is genetically engineered to serve as a clot buster, dissolving blood clots in patients with heart attacks."
    },
    {
      q: "BOD is a measure of:",
      o: ["Inorganic minerals in sewage", "Pathogenic load in water", "Organic matter in water", "Dissolved oxygen in aeration tank"],
      c: 2,
      e: "BOD (Biochemical Oxygen Demand) measures the amount of oxygen required by bacteria to decompose the organic matter present in a water sample. It is a direct indicator of organic pollution levels."
    },
    {
      q: "During anaerobic digestion of sewage sludge, which mixture of gases is produced?",
      o: ["Methane, Oxygen, CO2", "Methane, Hydrogen Sulfide, CO2", "Ethane, Hydrogen Sulfide, CO2", "Methane, Nitrogen, Oxygen"],
      c: 1,
      e: "Anaerobic sludge digesters host bacteria that digest organic mass, producing biogas, which is composed of Methane (CH<sub>4</sub>), Hydrogen Sulfide (H<sub>2</sub>S), and Carbon dioxide (CO<sub>2</sub>)."
    },
    {
      q: "The Bt toxin is activated in the caterpillar's gut due to:",
      o: ["Acidic pH", "Neutral pH", "Alkaline pH", "High temperature"],
      c: 2,
      e: "Bt toxin is ingested as an inactive protoxin. It is solubilised and activated in the alkaline pH of the insect's midgut, leading to cell lysis."
    },
    {
      q: "Baculoviruses used as biocontrol agents belong to the genus:",
      o: ["Glomus", "Nucleopolyhedrovirus", "Trichoderma", "Methanobacterium"],
      c: 1,
      e: "Baculoviruses used for narrow-spectrum biological control belong to the genus Nucleopolyhedrovirus, targeting specific insect families."
    },
    {
      q: "Fungi of the genus Glomus form symbiotic associations to absorb which mineral?",
      o: ["Nitrogen", "Phosphorus", "Potassium", "Iron"],
      c: 1,
      e: "Mycorrhizal fungi of the genus Glomus absorb phosphorus from soil minerals and transfer it to the host plant."
    }
  ],

  match: [
    { term: "LAB", def: "Increases Vitamin B12 in curd" },
    { term: "Propionibacterium", def: "Produces Swiss cheese large holes" },
    { term: "Aspergillus niger", def: "Fungal source of citric acid" },
    { term: "Clostridium", def: "Bacterial source of butyric acid" },
    { term: "Streptokinase", def: "Myocardial infarction clot buster" },
    { term: "Cyclosporin A", def: "Immunosuppressant from Trichoderma polysporum" },
    { term: "Statins", def: "Competitive cholesterol synthesis inhibitor" },
    { term: "Flocs", def: "Bacteria + fungal filaments mesh in sewage" },
    { term: "Bt spore", def: "Activated in caterpillar's alkaline gut" },
    { term: "Glomus", def: "Mycorrhizal fungus absorbing phosphorus" }
  ],

  pathways: [
    {
      title: "Biological Sewage Treatment Sequence",
      prompt: "Order the stages of secondary sewage treatment from effluent entry to biogas production.",
      steps: [
        "Pass primary effluent into large aeration tanks",
        "Constantly agitate effluent and pump in air",
        "Aerobic microbes grow into mesh-like flocs",
        "Flocs digest organic matter, decreasing BOD",
        "Transfer effluent to settling tank to sediment flocs",
        "Collect sediment as activated sludge",
        "Pump activated sludge into anaerobic digesters",
        "Anaerobic bacteria digest sludge, producing biogas"
      ]
    },
    {
      title: "Bt Toxin Activation Pathway",
      prompt: "Order the molecular steps that occur when a pest encounters Bt.",
      steps: [
        "Bt bacterium produces crystalline inactive protoxin",
        "Insect pest feeds on leaves sprayed with Bt spores",
        "Spores reach the midgut of the insect larva",
        "Alkaline pH of midgut solubilises the toxin crystals",
        "Activated toxin binds to surface of midgut epithelial cells",
        "Toxin creates pores, causing swelling and cell lysis",
        "Gut lining ruptures, leading to death of the insect"
      ]
    }
  ]
};
