/* ====== data_biotech_app.js — Chapter 10: Biotechnology and Its Applications ====== */
DATA.chapters.biotech_app = {
  id: "biotech_app",
  num: 10,
  title: "Biotechnology & Its Applications",
  subtitle: "GM crops, insulin, gene therapy, transgenic animals, GEAC and biopiracy — NCERT Ch 10",
  color: "#14b8a6",
  colorD: "#134e4a",
  glyph: "🌾",

  notes: [
    {
      id: "bta_agri",
      heading: "Biotechnological Applications in Agriculture",
      html: `
        <h4>Tissue Culture & Micropropagation</h4>
        <ul>
          <li><b>Totipotency</b>: ability of a cell to generate a whole plant.</li>
          <li><b>Micropropagation</b>: producing thousands of identical plants (somaclones) from explants in vitro.</li>
          <li>Used for: tomato, banana, apple, sugarcane, potato.</li>
          <li>Meristems (apical/axillary) are <b>virus-free</b> — can produce disease-free plants.</li>
          <li><b>Somatic hybridisation</b>: fusing protoplasts of two species → hybrid plant (e.g., <i>Pomato</i> = potato + tomato protoplast fusion).</li>
        </ul>
        <h4>Genetically Modified Organisms (GMOs)</h4>
        <p>GM plants have been useful for:</p>
        <ul>
          <li>Tolerance to abiotic stress (cold, drought, salt, heat).</li>
          <li>Reduced reliance on chemical pesticides (pest-resistant crops).</li>
          <li>Reduced post-harvest losses.</li>
          <li>Increased mineral use efficiency.</li>
          <li>Enhanced nutritional value — e.g., <b>Golden Rice</b> (Vitamin A–enriched rice).</li>
        </ul>
        <h4>Bt Crops (Bio-pesticide)</h4>
        <p><b>Bt toxin</b> produced by <i>Bacillus thuringiensis</i>. Protein crystals = <b>inactive protoxin</b>. When insect ingests it → alkaline pH of gut solubilises crystals → <b>active toxin</b> → binds midgut epithelial cells → pores → cell swelling and lysis → insect death.</p>
        <p><b>cry genes</b> encode Bt toxins:</p>
        <ul>
          <li><b>cryIAc</b> and <b>cryIIAb</b> — control cotton bollworms (Bt cotton).</li>
          <li><b>cryIAb</b> — controls corn borer.</li>
        </ul>
        <h4>RNAi — Pest Resistant Plants</h4>
        <p>RNA interference — silences specific mRNA of nematode. Nematode <i>Meloidogyne incognita</i> infects tobacco roots. Using <i>Agrobacterium</i> vectors, nematode-specific genes introduced to produce sense + antisense RNA → dsRNA → RNAi → nematode cannot survive in transgenic host.</p>
      `
    },
    {
      id: "bta_medicine",
      heading: "Biotechnological Applications in Medicine",
      html: `
        <h4>Genetically Engineered Insulin</h4>
        <p>Insulin = two polypeptide chains: <b>chain A</b> and <b>chain B</b>, linked by disulphide bridges. Humans produce insulin as <b>pro-insulin</b> (contains C peptide, which is removed during maturation).</p>
        <p>In <b>1983</b>, Eli Lilly synthesised DNA sequences for chains A and B, introduced them into E. coli plasmids. Chains A and B produced separately, extracted, combined with disulphide bonds → functional human insulin.</p>
        <div class="callout"><b>Advantage</b>: Recombinant insulin is identical to human insulin — does not induce immune response unlike cattle/pig insulin used earlier.</div>
        <h4>Gene Therapy</h4>
        <p>Collection of methods to correct a gene defect — inserting functional genes into cells/tissues.</p>
        <p>First clinical gene therapy (1990): 4-year-old girl with <b>ADA (Adenosine Deaminase) deficiency</b>.</p>
        <ul>
          <li>ADA deficiency: deletion of gene for adenosine deaminase → immune system dysfunction.</li>
          <li>Lymphocytes withdrawn → functional ADA cDNA introduced using retroviral vector → reinfused.</li>
          <li>Not permanent — requires periodic infusion. Permanent cure: introduce gene into embryonic stem cells / bone marrow cells.</li>
        </ul>
        <h4>Molecular Diagnosis</h4>
        <ul>
          <li><b>PCR</b>: detects very low concentration of pathogen/mutated genes before symptoms appear. Used for HIV detection, cancer gene mutations.</li>
          <li><b>DNA probe</b>: radioactively labelled ssDNA/RNA hybridises to complementary sequence — autoradiography detects it. Mutated gene = no hybridisation → no signal on film.</li>
          <li><b>ELISA</b> (Enzyme Linked Immunosorbent Assay): based on antigen-antibody interaction — detects antigens or antibodies of pathogen.</li>
        </ul>
      `
    },
    {
      id: "bta_transgenic",
      heading: "Transgenic Animals",
      html: `
        <p><b>Transgenic animals</b>: DNA manipulated to possess and express an extra foreign gene. >95% of all transgenic animals are mice.</p>
        <h4>Uses of transgenic animals</h4>
        <ul>
          <li><b>Normal physiology and development</b>: study gene regulation and effects on body functions (e.g., insulin-like growth factor study).</li>
          <li><b>Disease models</b>: transgenic models for human diseases — cancer, cystic fibrosis, rheumatoid arthritis, Alzheimer's.</li>
          <li><b>Biological products</b>: 
            <ul>
              <li>Human protein α-1-antitrypsin (treats emphysema) from transgenic sheep.</li>
              <li><b>Rosie</b> (1997) — first transgenic cow — produced human protein-enriched milk (2.4 g/litre of human alpha-lactalbumin).</li>
            </ul>
          </li>
          <li><b>Vaccine safety</b>: transgenic mice test polio vaccine safety (may replace monkeys).</li>
          <li><b>Chemical safety testing (toxicity testing)</b>: transgenic animals more sensitive to toxic substances → results faster.</li>
        </ul>
      `
    },
    {
      id: "bta_ethics",
      heading: "Ethical Issues & Biopiracy",
      html: `
        <h4>GEAC</h4>
        <p><b>Genetic Engineering Approval Committee (GEAC)</b> — Indian government body. Makes decisions on validity of GM research and safety of introducing GM organisms for public services.</p>
        <h4>Biopiracy</h4>
        <p>Use of bio-resources by multinational companies without proper authorisation or compensatory payment to the countries/people concerned.</p>
        <ul>
          <li>Examples: Basmati rice (1997, American company patented through US Patent and Trademark Office — derived from Indian farmers' varieties); Turmeric, Neem (traditional herbal medicines).</li>
          <li>India has 200,000+ varieties of rice; 27 documented Basmati varieties.</li>
        </ul>
        <p>The Indian Parliament cleared the second amendment of the Indian Patents Bill to prevent unauthorised exploitation of bio-resources.</p>
      `
    }
  ],

  mnemonics: [
    {
      title: "Bt cry gene targets",
      device: "<b>IAc + IIAb = Cotton Bollworm; IAb = Corn Borer</b>",
      expand: [
        { L: "", t: "cryIAc & cryIIAb → cotton bollworm control (Bt cotton)" },
        { L: "", t: "cryIAb → corn borer control" }
      ]
    },
    {
      title: "Transgenic cow Rosie",
      device: "ROSIE — Recombinant Offspring Secreting Improved Enriched-milk",
      expand: [
        { L: "", t: "First transgenic cow (1997). Produced human alpha-lactalbumin enriched milk — 2.4 g/litre. More nutritionally balanced for human babies." }
      ]
    }
  ],

  flashcards: [
    { front: "What is totipotency?", back: "The capacity of a single cell to generate a whole plant (used in tissue culture/micropropagation)." },
    { front: "What are somaclones?", back: "Genetically identical plants produced by micropropagation from explants of a single parent plant." },
    { front: "What is Pomato?", back: "A somatic hybrid formed by fusing protoplasts of potato and tomato. Did not have desired characteristics for commercial use." },
    { front: "Why is meristem used to produce virus-free plants?", back: "Apical and axillary meristems are virus-free even if the rest of the plant is infected." },
    { front: "What is Golden Rice?", back: "A GM rice variety enriched with Vitamin A (β-carotene). Example of enhanced nutritional value through genetic engineering." },
    { front: "How does Bt toxin work?", back: "Bt toxin (from Bacillus thuringiensis) is an inactive protoxin. Alkaline pH in insect gut activates it → binds midgut epithelial cells → creates pores → cell lysis → insect death." },
    { front: "What are cry genes?", back: "Genes in Bacillus thuringiensis encoding Bt toxin proteins. cryIAc & cryIIAb → cotton bollworms; cryIAb → corn borer." },
    { front: "What is RNAi?", back: "RNA interference — silencing of specific mRNA by complementary dsRNA. Used to protect tobacco plants from nematode Meloidogyne incognita." },
    { front: "When was recombinant human insulin first produced and by whom?", back: "1983 by Eli Lilly, using DNA sequences for insulin chains A and B inserted into E. coli plasmids." },
    { front: "What is ADA deficiency and how was gene therapy used?", back: "Adenosine deaminase (ADA) deficiency — gene deletion → immune dysfunction. First clinical gene therapy (1990): patient's lymphocytes + retroviral vector carrying functional ADA cDNA → reinfused." },
    { front: "What is ELISA?", back: "Enzyme Linked Immunosorbent Assay — diagnostic technique based on antigen-antibody interaction to detect pathogen antigens or patient antibodies." },
    { front: "What is Rosie?", back: "First transgenic cow (1997). Produced human alpha-lactalbumin enriched milk (2.4 g/litre) — more nutritious for human babies than normal cow milk." },
    { front: "What is GEAC?", back: "Genetic Engineering Approval Committee — Indian government body that evaluates validity of GM research and safety of GM organisms for public use." },
    { front: "What is biopiracy?", back: "Use of bio-resources by multinational companies without proper authorisation or compensatory payment to the country/people concerned (e.g., Basmati rice, neem, turmeric patents)." }
  ],

  recall: [
    {
      q: "Explain how Bt cotton provides resistance to insects.",
      hint: "Bacillus thuringiensis, cry genes, inactive protoxin, gut pH",
      a: "Bt cotton contains cry genes (cryIAc and cryIIAb) from Bacillus thuringiensis. These genes encode insecticidal Bt toxin proteins. In the bacterium, toxin exists as inactive protoxin crystals. When cotton bollworm ingests Bt cotton plant tissue, the alkaline pH of the insect's gut solubilises the crystals, activating the toxin. Activated toxin binds to the surface of midgut epithelial cells, creates pores, causing cell swelling and lysis, ultimately killing the insect. This eliminates need for insecticide spraying."
    },
    {
      q: "What are transgenic animals? List their uses with one example for each.",
      hint: "5 uses: physiology, disease models, biological products, vaccine safety, chemical safety",
      a: "Transgenic animals have their DNA manipulated to possess and express an extra foreign gene. Uses: (1) Normal physiology: study insulin-like growth factor by introducing genes that alter it. (2) Disease models: transgenic mice model cancer, cystic fibrosis, Alzheimer's. (3) Biological products: Rosie (transgenic cow) produces human alpha-lactalbumin in milk; transgenic sheep produce α-1-antitrypsin for emphysema treatment. (4) Vaccine safety testing: transgenic mice test polio vaccine safety. (5) Chemical/toxicity testing: transgenic animals more sensitive to toxic substances — results faster."
    }
  ],

  mcqs: [
    {
      q: "Golden rice is enriched with:",
      o: ["Iron", "Vitamin C", "Vitamin A (β-carotene)", "Folic acid"],
      c: 2,
      e: "Golden Rice is a genetically modified variety of rice enriched with Vitamin A (β-carotene). It is an example of enhanced nutritional value through GM technology."
    },
    {
      q: "The nematode Meloidogyne incognita infects:",
      o: ["Cotton roots", "Tobacco plant roots", "Rice plants", "Corn roots"],
      c: 1,
      e: "Meloidogyne incognita is a nematode that infects the roots of tobacco plants, causing a great reduction in yield. It is controlled using RNAi technology."
    },
    {
      q: "The cry genes cryIAc and cryIIAb control:",
      o: ["Corn borer", "Mosquitoes", "Cotton bollworms", "Tobacco aphids"],
      c: 2,
      e: "cryIAc and cryIIAb genes encode Bt toxin proteins that control cotton bollworms (Bt cotton). cryIAb controls corn borer."
    },
    {
      q: "First clinical gene therapy was given in 1990 for:",
      o: ["Sickle-cell anaemia", "Haemophilia", "ADA deficiency", "Cystic fibrosis"],
      c: 2,
      e: "The first clinical gene therapy was given in 1990 to a 4-year-old girl with adenosine deaminase (ADA) deficiency using retroviral vector carrying functional ADA cDNA."
    },
    {
      q: "ELISA is based on the principle of:",
      o: ["DNA hybridisation", "Antigen-antibody interaction", "PCR amplification", "Gel electrophoresis"],
      c: 1,
      e: "ELISA (Enzyme Linked Immunosorbent Assay) is based on antigen-antibody interaction to detect pathogen antigens or antibodies produced against pathogen."
    },
    {
      q: "Rosie, the first transgenic cow, produced milk enriched with:",
      o: ["Human casein", "Human alpha-lactalbumin", "Human insulin", "Human Growth Hormone"],
      c: 1,
      e: "Rosie (1997) was the first transgenic cow — produced human alpha-lactalbumin enriched milk (2.4 g/litre), more nutritionally balanced for human babies."
    },
    {
      q: "GEAC stands for:",
      o: ["General Engineering and Agri Committee", "Genetic Engineering Approval Committee", "Genetic and Environmental Assessment Council", "Gene Expression Advisory Committee"],
      c: 1,
      e: "GEAC = Genetic Engineering Approval Committee — Indian government body that decides on the validity of GM research and safety of GM organisms."
    },
    {
      q: "Somatic hybridisation involves:",
      o: ["Fusion of gametes", "Fusion of protoplasts of two different plant varieties", "Hybridisation of somatic cells with eggs", "Crossing two varieties by pollination"],
      c: 1,
      e: "Somatic hybridisation involves fusing protoplasts (plant cells without cell walls) from two different species to form hybrid protoplasts that can grow into a new hybrid plant (e.g., Pomato from potato + tomato)."
    }
  ],

  match: [
    { term: "Golden Rice", def: "GM rice enriched with Vitamin A" },
    { term: "Pomato", def: "Somatic hybrid of potato and tomato" },
    { term: "Bt cotton", def: "Contains cryIAc and cryIIAb genes" },
    { term: "Rosie", def: "First transgenic cow (1997)" },
    { term: "GEAC", def: "Genetic Engineering Approval Committee" },
    { term: "Biopiracy", def: "Use of bio-resources without authorisation/payment" },
    { term: "ELISA", def: "Antigen-antibody based diagnosis" },
    { term: "RNAi", def: "dsRNA-mediated silencing of nematode mRNA" },
    { term: "ADA deficiency", def: "First gene therapy target (1990)" },
    { term: "Micropropagation", def: "Producing identical plants (somaclones) from explants" }
  ],

  pathways: [
    {
      title: "How Bt Toxin kills insects",
      prompt: "Order the steps of Bt toxin mechanism.",
      steps: [
        "Bt gene (cry) cloned into crop plant",
        "Insect ingests plant tissue containing inactive protoxin crystals",
        "Alkaline pH in insect gut solubilises crystal",
        "Protoxin converts to active toxin",
        "Active toxin binds to midgut epithelial cells",
        "Pores created in cell membrane",
        "Cell swelling and lysis",
        "Insect dies"
      ]
    }
  ]
};
