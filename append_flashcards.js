const fs = require('fs');
const path = require('path');

const newCards = {
  'data_sexual_repro.js': [
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
    { front: "What is polyembryony?", back: "The occurrence of more than one embryo in a seed." }
  ],
  'data_human_repro.js': [
    { front: "Where are the testes situated?", back: "Outside the abdominal cavity within a pouch called the scrotum." },
    { front: "What is the function of the scrotum?", back: "Maintains the low temperature of the testes (2-2.5°C lower than internal body temperature) necessary for spermatogenesis." },
    { front: "What cells synthesize and secrete testicular hormones (androgens)?", back: "Leydig cells (interstitial cells)." },
    { front: "What is the function of Sertoli cells?", back: "Provide nutrition to the germ cells." },
    { front: "What is spermatogenesis?", back: "The process of formation of sperms in the seminiferous tubules." },
    { front: "Which hormone initiates spermatogenesis at puberty?", back: "Gonadotropin releasing hormone (GnRH)." },
    { front: "What is the acrosome?", back: "A cap-like structure on the sperm head filled with enzymes that help in fertilization of the ovum." },
    { front: "Where does fertilization take place in humans?", back: "The ampullary region of the fallopian tube." },
    { front: "What is oogenesis?", back: "The process of formation of a mature female gamete." },
    { front: "What is the Graafian follicle?", back: "The mature ovarian follicle that ruptures to release the secondary oocyte." },
    { front: "Which hormone surge induces ovulation?", back: "Luteinizing Hormone (LH surge)." },
    { front: "What is the corpus luteum and what does it secrete?", back: "The remnant of the Graafian follicle after ovulation; it secretes large amounts of progesterone." },
    { front: "What is implantation?", back: "The embedding of the blastocyst in the endometrium of the uterus." },
    { front: "What is the role of hCG (Human Chorionic Gonadotropin)?", back: "Maintains the corpus luteum during early pregnancy." },
    { front: "What is parturition?", back: "The process of delivery of the fully developed fetus (childbirth)." }
  ],
  'data_microbes.js': [
    { front: "Which microbe is primarily responsible for converting milk to curd?", back: "Lactobacillus (Lactic Acid Bacteria or LAB)." },
    { front: "How does LAB improve the nutritional quality of curd?", back: "By increasing Vitamin B12 content." },
    { front: "What yeast is known as baker's yeast and brewer's yeast?", back: "Saccharomyces cerevisiae." },
    { front: "Which microbe produces the antibiotic Penicillin?", back: "Penicillium notatum." },
    { front: "Who discovered Penicillin?", back: "Alexander Fleming." },
    { front: "Which microbe produces Citric Acid?", back: "Aspergillus niger (a fungus)." },
    { front: "What is the medical use of Streptokinase and which microbe produces it?", back: "Used as a 'clot buster' for heart attack patients; produced by Streptococcus." },
    { front: "Which microbe produces Cyclosporin A and what is its use?", back: "Trichoderma polysporum; used as an immunosuppressive agent in organ transplants." },
    { front: "What are statins used for and what produces them?", back: "Blood-cholesterol lowering agents; produced by Monascus purpureus (yeast)." },
    { front: "What is the primary treatment of sewage?", back: "Physical removal of particles (filtration and sedimentation)." },
    { front: "What are flocs in secondary sewage treatment?", back: "Masses of bacteria associated with fungal filaments to form mesh-like structures." },
    { front: "What is Biochemical Oxygen Demand (BOD)?", back: "The amount of oxygen consumed if all organic matter in 1L of water were oxidized by bacteria." },
    { front: "What does methanobacterium produce during anaerobic sludge digestion?", back: "Biogas (primarily methane, H2S, and CO2)." },
    { front: "Give an example of a microbial biocontrol agent used against caterpillars.", back: "Bacillus thuringiensis (Bt)." },
    { front: "What are mycorrhizae?", back: "Symbiotic associations between fungi (like Glomus) and plant roots that absorb phosphorus from soil." },
    { front: "Which group of organisms act as biofertilizers in paddy fields?", back: "Cyanobacteria (e.g., Anabaena, Nostoc, Oscillatoria)." },
    { front: "What are baculoviruses used for?", back: "Biological control of insects and other arthropods (e.g., genus Nucleopolyhedrovirus)." }
  ],
  'data_human_health.js': [
    { front: "Who disproved the 'good humor' hypothesis of health?", back: "William Harvey." },
    { front: "What pathogen causes Typhoid fever and how is it confirmed?", back: "Salmonella typhi; confirmed by Widal test." },
    { front: "What causes Pneumonia?", back: "Streptococcus pneumoniae and Haemophilus influenzae." },
    { front: "Which species of Plasmodium causes the most fatal form of malaria?", back: "Plasmodium falciparum." },
    { front: "What is the infectious stage of Plasmodium that enters the human body?", back: "Sporozoites." },
    { front: "Which mosquito acts as the vector for Dengue and Chikungunya?", back: "Aedes mosquito." },
    { front: "What causes Ascariasis?", back: "Ascaris (an intestinal parasite)." },
    { front: "What pathogen causes ringworm?", back: "Fungi belonging to genera Microsporum, Trichophyton, and Epidermophyton." },
    { front: "Define innate immunity.", back: "Non-specific defense present at the time of birth." },
    { front: "What are interferons?", back: "Proteins secreted by virus-infected cells that protect non-infected cells." },
    { front: "What is the difference between active and passive immunity?", back: "Active: host produces antibodies; Passive: ready-made antibodies are directly given." },
    { front: "What is colostrum?", back: "Yellowish milk produced during the initial days of lactation, rich in IgA antibodies (passive immunity)." },
    { front: "What causes allergy and which antibodies are involved?", back: "Exaggerated immune response to allergens; IgE antibodies." },
    { front: "What is autoimmunity?", back: "When the immune system attacks self-cells (e.g., Rheumatoid arthritis)." },
    { front: "Which cells does the HIV virus primarily infect and destroy?", back: "Helper T-lymphocytes (TH cells)." },
    { front: "What is the difference between benign and malignant tumors?", back: "Benign remain confined; Malignant invade other tissues (metastasis)." },
    { front: "Which receptors do cannabinoids interact with?", back: "Cannabinoid receptors principally in the brain." }
  ],
  'data_repro_health.js': [
    { front: "What was the name of the national reproductive health program launched in India in 1951?", back: "Family planning program." },
    { front: "What does RCH stand for?", back: "Reproductive and Child Health Care program." },
    { front: "What is amniocentesis?", back: "A fetal sex determination test based on the chromosomal pattern in the amniotic fluid (often misused for female foeticide)." },
    { front: "What is 'Saheli'?", back: "A non-steroidal oral contraceptive pill for females developed by CDRI, Lucknow." },
    { front: "Name two natural methods of contraception.", back: "Periodic abstinence and Lactational amenorrhea." },
    { front: "Give examples of barrier methods.", back: "Condoms, diaphragms, cervical caps, and vaults." },
    { front: "How do copper-releasing IUDs (like CuT) work?", back: "They release Cu ions which suppress sperm motility and fertilising capacity." },
    { front: "Give an example of a hormone-releasing IUD.", back: "Progestasert, LNG-20." },
    { front: "How do oral contraceptive pills work?", back: "They inhibit ovulation and implantation, and alter cervical mucus quality to prevent sperm entry." },
    { front: "What are the surgical methods of contraception?", back: "Vasectomy in males and Tubectomy in females." },
    { front: "What is MTP?", back: "Medical Termination of Pregnancy (induced abortion)." },
    { front: "What are sexually transmitted infections (STIs)?", back: "Infections transmitted through sexual intercourse (e.g., Gonorrhea, Syphilis, HIV, Hepatitis B)." },
    { front: "Which STIs are completely curable if detected early and treated properly?", back: "Most, except Hepatitis B, Genital herpes, and HIV infections." },
    { front: "What is IVF (In Vitro Fertilisation)?", back: "Fertilisation outside the body in almost similar conditions as that in the body." },
    { front: "What is ZIFT?", back: "Zygote Intra Fallopian Transfer (transfer of zygote or early embryo into fallopian tube)." },
    { front: "What is GIFT?", back: "Gamete Intra Fallopian Transfer (transfer of an ovum collected from a donor into the fallopian tube of another female)." },
    { front: "What is ICSI?", back: "Intra Cytoplasmic Sperm Injection (a sperm is directly injected into the ovum)." }
  ]
};

for (const [filename, cards] of Object.entries(newCards)) {
  const filePath = path.join(__dirname, filename);
  if (!fs.existsSync(filePath)) {
    console.log('Skipping ' + filename);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Find "flashcards: [" and inject the new cards inside the array
  const fcRegex = /flashcards\s*:\s*\[/;
  const match = content.match(fcRegex);
  if (match) {
    const insertPos = match.index + match[0].length;
    let injection = '\n';
    cards.forEach(c => {
      // Escape quotes safely
      const front = c.front.replace(/"/g, '\\"');
      const back = c.back.replace(/"/g, '\\"');
      injection += `{front:"${front}", back:"${back}"},\n`;
    });
    content = content.slice(0, insertPos) + injection + content.slice(insertPos);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Appended ' + cards.length + ' cards to ' + filename);
  } else {
    console.log('Could not find flashcards:[ in ' + filename);
  }
}
