/* ====== data_human_health.js — Chapter 7: Human Health and Disease ====== */
DATA.chapters.human_health = {
  id: "human_health",
  num: 7,
  title: "Human Health & Disease",
  subtitle: "Immunity, AIDS, cancer, infectious diseases, drugs & alcohol — NCERT Ch 7",
  color: "#f43f5e",
  colorD: "#881337",
  glyph: "🛡️",

  notes: [
    {
      id: "hh_diseases",
      heading: "Common Infectious Diseases in Humans",
      html: `
        <table class="cmp">
          <thead><tr><th>Disease</th><th>Pathogen</th><th>Transmission</th><th>Key Symptoms</th></tr></thead>
          <tbody>
            <tr><td><b>Typhoid</b></td><td><i>Salmonella typhi</i> (bacterium)</td><td>Contaminated food/water</td><td>Sustained high fever 39–40°C, intestinal perforation. Confirmed by <b>Widal test</b>.</td></tr>
            <tr><td><b>Pneumonia</b></td><td><i>Streptococcus pneumoniae, Haemophilus influenzae</i></td><td>Inhaling droplets; sharing utensils</td><td>Fever, chills, cough; alveoli fill with fluid; lips/nails turn gray/bluish.</td></tr>
            <tr><td><b>Common Cold</b></td><td>Rhino viruses</td><td>Contaminated objects, droplets</td><td>Nasal congestion, sore throat, cough; lasts 3–7 days. Infects nose/respiratory passage only, NOT lungs.</td></tr>
            <tr><td><b>Malaria</b></td><td><i>Plasmodium</i> spp. (protozoan); <i>P. falciparum</i> = most deadly</td><td>Female Anopheles mosquito (vector)</td><td>Chill and high fever every 3–4 days due to haemozoin release.</td></tr>
            <tr><td><b>Amoebiasis</b></td><td><i>Entamoeba histolytica</i></td><td>Contaminated food/water; houseflies as mechanical carriers</td><td>Constipation, abdominal pain, stools with mucous and blood.</td></tr>
            <tr><td><b>Ascariasis</b></td><td><i>Ascaris</i> (roundworm)</td><td>Contaminated soil/water/plants</td><td>Internal bleeding, muscle pain, fever, anaemia, intestinal blockage.</td></tr>
            <tr><td><b>Filariasis (Elephantiasis)</b></td><td><i>Wuchereria bancrofti / W. malayi</i></td><td>Female mosquito bite</td><td>Chronic inflammation of lymphatic vessels of lower limbs; gross deformity.</td></tr>
            <tr><td><b>Ringworm</b></td><td>Fungi: <i>Microsporum, Trichophyton, Epidermophyton</i></td><td>Soil; shared towels/combs</td><td>Dry, scaly lesions on skin, nails, scalp; intense itching.</td></tr>
          </tbody>
        </table>
        <div class="callout"><b>Typhoid Mary</b>: Mary Mallon, a cook who was a typhoid carrier — spread typhoid for years through food without showing symptoms herself.</div>
        <div class="callout"><b>Malaria parasite</b> needs two hosts: human and female Anopheles mosquito. Sporozoites enter via mosquito bite → multiply in liver → attack RBCs → haemozoin released.</div>
      `
    },
    {
      id: "hh_immunity",
      heading: "Immunity — Innate and Acquired",
      html: `
        <h4>Innate Immunity (Non-specific, present at birth)</h4>
        <table class="cmp">
          <thead><tr><th>Barrier</th><th>Examples</th></tr></thead>
          <tbody>
            <tr><td><b>Physical</b></td><td>Skin; mucus coating of epithelium lining respiratory, GI, urogenital tracts</td></tr>
            <tr><td><b>Physiological</b></td><td>Acid in stomach; saliva; tears — prevent microbial growth</td></tr>
            <tr><td><b>Cellular</b></td><td>PMNL-neutrophils, monocytes, natural killer cells (lymphocytes), macrophages — phagocytose microbes</td></tr>
            <tr><td><b>Cytokine</b></td><td>Interferons — secreted by virus-infected cells; protect non-infected cells from viral infection</td></tr>
          </tbody>
        </table>
        <h4>Acquired Immunity (Specific, has memory)</h4>
        <ul>
          <li><b>Primary response</b>: first encounter with pathogen — low intensity.</li>
          <li><b>Secondary (anamnestic) response</b>: subsequent encounter — highly intensified, due to memory B & T cells.</li>
          <li><b>B-lymphocytes</b>: produce antibodies (humoral immune response).</li>
          <li><b>T-lymphocytes</b>: cell-mediated immunity (CMI) — responsible for graft rejection.</li>
          <li>Antibody structure: 4 peptide chains — 2 light + 2 heavy (H₂L₂). Types: IgA, IgM, IgE, IgG.</li>
        </ul>
        <h4>Active vs Passive Immunity</h4>
        <ul>
          <li><b>Active</b>: body produces antibodies itself (slow; via vaccination or natural infection). Memory generated.</li>
          <li><b>Passive</b>: ready-made antibodies given (quick but no memory). Examples: colostrum (IgA for newborn), antitoxin for snake bite, tetanus antitoxin.</li>
        </ul>
        <div class="callout"><b>Colostrum</b> = yellowish fluid secreted by mother in early lactation → rich in IgA antibodies for the newborn.</div>
        <h4>Allergy</h4>
        <p>Exaggerated immune response to environmental antigens (allergens). Antibodies produced: IgE type. Mast cells release <b>histamine and serotonin</b> → symptoms: sneezing, watery eyes, running nose, breathing difficulty. Treatment: <b>anti-histamines, adrenalin, steroids</b>.</p>
        <h4>Auto-immunity</h4>
        <p>Body attacks its own cells. Example: <b>Rheumatoid arthritis</b>.</p>
        <h4>Lymphoid Organs</h4>
        <ul>
          <li><b>Primary</b>: bone marrow (all blood cells including lymphocytes), thymus (T-lymphocyte maturation). Thymus is large at birth, reduces to very small size by puberty.</li>
          <li><b>Secondary</b>: spleen (filter blood, reservoir of erythrocytes), lymph nodes (trap microorganisms from lymph), tonsils, Peyer's patches, appendix.</li>
          <li><b>MALT</b> (Mucosa-Associated Lymphoid Tissue): ~50% of lymphoid tissue in body, lining respiratory/digestive/urogenital tracts.</li>
        </ul>
      `
    },
    {
      id: "hh_aids",
      heading: "AIDS",
      html: `
        <p><b>AIDS</b> = Acquired Immuno Deficiency Syndrome. First reported in <b>1981</b>. Killed >25 million people worldwide.</p>
        <p>Caused by <b>HIV</b> (Human Immunodeficiency Virus) — a <b>retrovirus</b> with RNA genome enclosed in an envelope.</p>
        <h4>Transmission routes</h4>
        <ul>
          <li>Sexual contact with infected person.</li>
          <li>Transfusion of contaminated blood/blood products.</li>
          <li>Sharing infected needles (IV drug abusers).</li>
          <li>Infected mother to child through placenta.</li>
        </ul>
        <h4>Mechanism (How HIV destroys immunity)</h4>
        <div class="flow">
          <span class="step">HIV enters macrophages</span><span class="arr">→</span>
          <span class="step">RNA → viral DNA (reverse transcriptase)</span><span class="arr">→</span>
          <span class="step">Viral DNA integrates into host DNA</span><span class="arr">→</span>
          <span class="step">Produces virus particles (HIV factory)</span><span class="arr">→</span>
          <span class="step">HIV attacks helper T-lymphocytes (TH)</span><span class="arr">→</span>
          <span class="step">Progressive decrease in helper T-cells</span><span class="arr">→</span>
          <span class="step">Immune deficiency → opportunistic infections → death</span>
        </div>
        <ul>
          <li>Incubation period: few months to many years (usually 5–10 years).</li>
          <li>Opportunistic infections: Mycobacterium, viruses, fungi, Toxoplasma.</li>
          <li>Diagnosis: <b>ELISA</b> (most widely used). Treatment: anti-retroviral drugs (partial effect only — prolongs life, cannot prevent death).</li>
        </ul>
        <div class="callout"><b>HIV does NOT spread</b> by touch or physical contact — only through body fluids. HIV/AIDS infected persons should NOT be isolated from family/society.</div>
      `
    },
    {
      id: "hh_cancer",
      heading: "Cancer",
      html: `
        <p>Cancer arises when <b>contact inhibition</b> is lost — cells divide uncontrollably forming <b>tumors</b>.</p>
        <h4>Types of tumors</h4>
        <ul>
          <li><b>Benign</b>: confined to original location, does not spread. Causes little damage.</li>
          <li><b>Malignant</b>: proliferating neoplastic cells that invade surrounding tissue and spread via blood to new sites = <b>metastasis</b>. Most feared property.</li>
        </ul>
        <h4>Causes (Carcinogens)</h4>
        <ul>
          <li><b>Physical</b>: ionising radiation (X-rays, gamma rays), non-ionising (UV).</li>
          <li><b>Chemical</b>: chemicals in tobacco smoke — major cause of lung cancer.</li>
          <li><b>Biological</b>: oncogenic viruses (carry viral oncogenes). Proto-oncogenes (c-onc) in normal cells can become oncogenes under certain conditions.</li>
        </ul>
        <h4>Detection</h4>
        <ul>
          <li>Biopsy (tissue staining + microscopy).</li>
          <li>Radiography (X-rays), CT scan, MRI (for internal cancers).</li>
          <li>Antibodies against cancer-specific antigens.</li>
          <li>Molecular biology for gene detection.</li>
        </ul>
        <h4>Treatment</h4>
        <ul>
          <li>Surgery, radiation therapy (radiotherapy), chemotherapy.</li>
          <li>Immunotherapy: <b>α-interferon</b> (biological response modifier) activates immune system to destroy tumor.</li>
        </ul>
      `
    },
    {
      id: "hh_drugs",
      heading: "Drugs and Alcohol Abuse",
      html: `
        <table class="cmp">
          <thead><tr><th>Drug Class</th><th>Source</th><th>Example</th><th>Effect</th></tr></thead>
          <tbody>
            <tr><td><b>Opioids</b></td><td>Latex of poppy plant <i>Papaver somniferum</i></td><td>Heroin (smack / diacetylmorphine)</td><td>Binds opioid receptors in CNS & GIT; depressant — slows body functions; taken by snorting/injection.</td></tr>
            <tr><td><b>Cannabinoids</b></td><td>Inflorescences of <i>Cannabis sativa</i></td><td>Marijuana, hashish, charas, ganja</td><td>Interact with cannabinoid receptors in brain; effects on cardiovascular system; taken by inhalation/oral.</td></tr>
            <tr><td><b>Coca alkaloids</b></td><td><i>Erythroxylum coca</i> (South America)</td><td>Cocaine (coke/crack)</td><td>Interferes with dopamine transport; stimulates CNS; euphoria, increased energy; excessive dose → hallucinations.</td></tr>
          </tbody>
        </table>
        <h4>Effects of drug/alcohol abuse</h4>
        <ul>
          <li>Immediate: reckless behaviour, violence, coma, death (respiratory/heart failure).</li>
          <li>IV drug use → HIV, Hepatitis B (via shared needles).</li>
          <li>Chronic: nervous system damage, liver cirrhosis.</li>
          <li>Anabolic steroids (sports doping): females — masculinisation, abnormal menstrual cycles; males — testicular atrophy, decreased sperm count, breast enlargement (gynaecomastia).</li>
        </ul>
        <div class="callout"><b>Nicotine</b> (tobacco): stimulates adrenal gland to release adrenaline and nor-adrenaline → increased blood pressure and heart rate. Associated with lung, bladder, throat cancers.</div>
      `
    }
  ],

  mnemonics: [
    {
      title: "Innate Immunity 4 barriers",
      device: "<b>P</b>eter <b>P</b>hysically <b>C</b>raves <b>C</b>hocolate",
      expand: [
        { L: "P", t: "Physical barriers (skin, mucus)" },
        { L: "P", t: "Physiological barriers (acid, saliva, tears)" },
        { L: "C", t: "Cellular barriers (neutrophils, macrophages, NK cells)" },
        { L: "C", t: "Cytokine barriers (interferons)" }
      ]
    },
    {
      title: "HIV transmission routes",
      device: "<b>SNIP</b> — Sexual | Needles | Infected blood | Placenta",
      expand: [
        { L: "S", t: "Sexual contact with infected person" },
        { L: "N", t: "Needles shared (IV drug abusers)" },
        { L: "I", t: "Infected blood transfusion" },
        { L: "P", t: "Placenta (mother to child)" }
      ]
    },
    {
      title: "Drug plant sources",
      device: "<b>P</b>oppy gives <b>O</b>pioids; <b>C</b>annabis gives <b>C</b>annabinoids; <b>E</b>rythro gives <b>C</b>ocaine",
      expand: [
        { L: "", t: "Papaver somniferum → Heroin (opioid)" },
        { L: "", t: "Cannabis sativa → Marijuana/Ganja (cannabinoid)" },
        { L: "", t: "Erythroxylum coca → Cocaine (coca alkaloid)" }
      ]
    }
  ],

  flashcards: [
    { front: "Which test confirms typhoid fever?", back: "Widal test. Typhoid is caused by Salmonella typhi." },
    { front: "Which species of Plasmodium causes the most dangerous malaria?", back: "Plasmodium falciparum — causes malignant malaria; can be fatal." },
    { front: "What is haemozoin?", back: "A toxic substance released during rupture of RBCs in malaria — responsible for the chill and high fever recurring every 3–4 days." },
    { front: "What is the role of interferons?", back: "Proteins secreted by virus-infected cells that protect non-infected cells from further viral infection (part of cytokine barriers in innate immunity)." },
    { front: "IgE antibodies are produced in?", back: "Allergic reactions. Allergens trigger mast cells to release histamine and serotonin causing symptoms." },
    { front: "Primary vs secondary lymphoid organs?", back: "Primary: bone marrow and thymus (maturation of lymphocytes). Secondary: spleen, lymph nodes, tonsils, Peyer's patches, appendix (antigen interaction)." },
    { front: "What is MALT?", back: "Mucosa-Associated Lymphoid Tissue — lymphoid tissue lining major tracts (respiratory, digestive, urogenital). ~50% of lymphoid tissue in body." },
    { front: "AIDS was first reported in which year?", back: "1981." },
    { front: "What enzyme does HIV use to convert its RNA to DNA?", back: "Reverse transcriptase — used to make viral DNA from HIV's RNA genome inside macrophages." },
    { front: "What are benign vs malignant tumors?", back: "Benign: confined to original location, does not spread. Malignant: invasive, spreads via blood to new sites (metastasis)." },
    { front: "What is metastasis?", back: "Spread of malignant tumor cells via blood to distant sites where they form new tumors. Most feared property of cancer." },
    { front: "What is α-interferon used for in cancer treatment?", back: "Biological response modifier — activates the patient's immune system to help destroy tumor cells (immunotherapy)." },
    { front: "Heroin (smack) is chemically?", back: "Diacetylmorphine — obtained by acetylation of morphine from latex of poppy plant Papaver somniferum. A depressant." },
    { front: "What does cocaine do?", back: "Coca alkaloid from Erythroxylum coca — interferes with dopamine transport; potent CNS stimulant; produces euphoria and increased energy." },
    { front: "Wuchereria causes which disease?", back: "Filariasis (elephantiasis) — chronic inflammation of lymphatic vessels of lower limbs; genital organs often affected." }
  ],

  recall: [
    {
      q: "Distinguish between innate and acquired immunity with examples.",
      hint: "Innate: non-specific, 4 barriers; Acquired: specific, memory, B & T cells",
      a: "Innate immunity: non-specific, present at birth. 4 barriers: (1) Physical — skin, mucus; (2) Physiological — stomach acid, saliva, tears; (3) Cellular — neutrophils, macrophages, NK cells; (4) Cytokine — interferons. Acquired immunity: pathogen-specific, has memory. First exposure = primary response (low intensity). Second exposure = secondary/anamnestic response (highly intensified, due to memory B and T cells). B-lymphocytes → antibodies (humoral immunity); T-lymphocytes → cell-mediated immunity (CMI), responsible for graft rejection."
    },
    {
      q: "Describe the mechanism by which HIV destroys the immune system.",
      hint: "Macrophages, reverse transcriptase, helper T-cells, opportunistic infections",
      a: "HIV (retrovirus with RNA genome) enters macrophages → reverse transcriptase converts RNA to viral DNA → viral DNA integrates into host DNA → macrophages produce virus particles (HIV factory). HIV simultaneously enters helper T-lymphocytes (TH), replicates → progeny viruses released → attack more TH cells → progressive decrease in TH cells → immune deficiency. Patient suffers fever, diarrhoea, weight loss. With reduced TH, patient cannot fight opportunistic infections (Mycobacterium, fungi, Toxoplasma) → death. Incubation: 5–10 years. Diagnosis: ELISA. Treatment: anti-retroviral drugs (partial; prolongs life)."
    },
    {
      q: "What is cancer? Describe the types of tumors, causes (carcinogens) and treatment approaches.",
      hint: "Contact inhibition, benign vs malignant, metastasis, carcinogens, surgery/radio/chemo/immunotherapy",
      a: "Cancer: breakdown of regulatory mechanisms of cell growth. Normal cells have contact inhibition — cancer cells lose this, divide uncontrollably forming tumors. Benign tumors: confined, don't spread. Malignant tumors: invasive neoplastic cells, spread via blood = metastasis (most feared). Causes: Physical (X-rays, UV), Chemical (tobacco smoke), Biological (oncogenic viruses, viral oncogenes). Proto-oncogenes (c-onc) in normal cells can activate into oncogenes. Treatment: Surgery (remove tumor), Radiotherapy (irradiate tumor cells), Chemotherapy (drugs to kill cancer cells, side effects: hair loss, anaemia), Immunotherapy (α-interferon — activates immune system to destroy tumors)."
    }
  ],

  mcqs: [
    {
      q: "Typhoid fever is confirmed by:",
      o: ["Biopsy", "Widal test", "ELISA", "PCR"],
      c: 1,
      e: "Typhoid fever (caused by Salmonella typhi) is confirmed by the Widal test, which detects antibodies against S. typhi in patient's serum."
    },
    {
      q: "Haemozoin is responsible for:",
      o: ["Anaemia in malaria", "Chill and high fever in malaria", "Rupture of mosquito salivary glands", "Blocking of liver cells"],
      c: 1,
      e: "Haemozoin is a toxic substance released during rupture of RBCs in malaria. It is responsible for the chill and high fever recurring every three to four days."
    },
    {
      q: "Interferons are produced by:",
      o: ["Healthy cells to attract antibodies", "Virus-infected cells to protect non-infected cells", "B-lymphocytes", "T-lymphocytes"],
      c: 1,
      e: "Interferons are proteins secreted by virus-infected cells that protect non-infected cells from further viral infection. They form the cytokine barrier in innate immunity."
    },
    {
      q: "Antibodies produced during an allergic response are of type:",
      o: ["IgG", "IgM", "IgA", "IgE"],
      c: 3,
      e: "Allergens stimulate production of IgE antibodies. IgE binds to mast cells causing release of histamine and serotonin — producing allergic symptoms."
    },
    {
      q: "The thymus is a primary lymphoid organ. Which cells mature here?",
      o: ["B-lymphocytes", "T-lymphocytes", "NK cells", "Macrophages"],
      c: 1,
      e: "The thymus provides micro-environment for the development and maturation of T-lymphocytes. It is large at birth and reduces greatly by puberty."
    },
    {
      q: "Which of the following is NOT a property of malignant tumors?",
      o: ["Rapid cell division", "Metastasis", "Invasion of surrounding tissue", "Confined to original location"],
      c: 3,
      e: "Being confined to the original location is the property of benign tumors. Malignant tumors are invasive, grow rapidly, and spread to distant sites through blood (metastasis)."
    },
    {
      q: "Heroin is chemically known as:",
      o: ["Morphine", "Diacetylmorphine", "Cocaine", "Cannabis"],
      c: 1,
      e: "Heroin (smack) is chemically diacetylmorphine — obtained by acetylation of morphine extracted from latex of poppy plant Papaver somniferum."
    },
    {
      q: "HIV primarily attacks which cells?",
      o: ["B-lymphocytes", "Helper T-lymphocytes (TH)", "Macrophages only", "Red blood cells"],
      c: 1,
      e: "HIV first replicates in macrophages, then attacks helper T-lymphocytes (TH), progressively reducing their count, causing immune deficiency."
    },
    {
      q: "Filariasis (elephantiasis) is caused by:",
      o: ["Ascaris", "Entamoeba histolytica", "Wuchereria bancrofti", "Plasmodium vivax"],
      c: 2,
      e: "Filariasis (elephantiasis) is caused by filarial worms Wuchereria bancrofti and W. malayi, transmitted by female mosquito bite, causing chronic inflammation of lymphatic vessels."
    },
    {
      q: "α-interferon is used in cancer treatment as:",
      o: ["Chemotherapy drug", "Biological response modifier in immunotherapy", "Radiotherapy agent", "Hormone therapy"],
      c: 1,
      e: "α-interferon is a biological response modifier used in immunotherapy — it activates the patient's immune system to help recognise and destroy tumor cells."
    }
  ],

  match: [
    { term: "Widal test", def: "Confirms typhoid fever" },
    { term: "Haemozoin", def: "Toxic substance causing malaria fever/chills" },
    { term: "Rhino virus", def: "Causes common cold" },
    { term: "Entamoeba histolytica", def: "Causes amoebiasis (amoebic dysentery)" },
    { term: "Wuchereria", def: "Filarial worm — causes elephantiasis" },
    { term: "IgE", def: "Antibody produced in allergic reactions" },
    { term: "Interferons", def: "Cytokine barrier — protects non-infected cells from virus" },
    { term: "Colostrum", def: "Rich in IgA — passive immunity for newborn" },
    { term: "Metastasis", def: "Spread of malignant cancer cells via blood" },
    { term: "Reverse transcriptase", def: "HIV enzyme — converts RNA to DNA" },
    { term: "MALT", def: "Mucosa-Associated Lymphoid Tissue — 50% of lymphoid tissue" },
    { term: "Rheumatoid arthritis", def: "Auto-immune disease" }
  ],

  pathways: [
    {
      title: "HIV destroying the immune system",
      prompt: "Order the steps of how HIV causes AIDS.",
      steps: [
        "HIV enters the body via sexual contact / blood / needles / placenta",
        "HIV infects macrophages → RNA → viral DNA (reverse transcriptase)",
        "Viral DNA integrates into host cell's DNA",
        "Macrophages produce virus particles (HIV factory)",
        "HIV attacks helper T-lymphocytes (TH)",
        "Progressive decrease in TH cell count",
        "Immune deficiency — patient vulnerable to opportunistic infections",
        "Infections by Mycobacterium, fungi, Toxoplasma → death"
      ]
    },
    {
      title: "Malaria life cycle",
      prompt: "Order the stages of the Plasmodium life cycle.",
      steps: [
        "Female Anopheles mosquito bites human — injects sporozoites",
        "Sporozoites multiply in liver cells",
        "Parasites attack RBCs",
        "RBCs rupture — haemozoin released → fever/chills",
        "Female Anopheles bites infected person — picks up gametocytes",
        "Parasites develop into sporozoites in mosquito salivary glands",
        "Cycle repeats when mosquito bites next human"
      ]
    }
  ]
};
