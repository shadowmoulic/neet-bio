/* Extracted from biolab 11 bio 0,2.html */
DATA.chapters['brain_biolab11bio02html_blood'] = {
  "id": "brain_biolab11bio02html_blood",
  "num": "15",
  "title": "Body Fluids & Circulation",
  "subtitle": "Blood, lymph, the human heart, cardiac cycle, ECG, double circulation and disorders.",
  "color": "#FF5470",
  "colorD": "#3E32A0",
  "glyph": "🫀",
  "notes": [
    {
      "id": "BloodComposition",
      "heading": "Blood — Composition",
      "html": "\n   <p><span class=\"term\">Blood</span> is a fluid connective tissue = <b>plasma</b> (55%) + <b>formed elements</b> (45%).</p>\n   <h4>Plasma</h4>\n   <p>Straw-coloured, ~90–92% water + 6–8% proteins. Proteins: <b>fibrinogen</b> (clotting), <b>globulins</b> (defence/immunity), <b>albumins</b> (osmotic balance). Also has minerals (Na⁺, Ca²⁺, etc.), glucose, amino acids, lipids. <b>Serum</b> = plasma without clotting factors.</p>\n   <h4>Formed elements</h4>\n   <table class=\"t\"><tr><th>Cell</th><th>Count</th><th>Function</th></tr>\n   <tr><td>RBC (erythrocyte)</td><td>5–5.5 million/mm³</td><td>Carry O₂/CO₂; no nucleus (mammals); biconcave; haemoglobin; lifespan ~120 days</td></tr>\n   <tr><td>WBC (leucocyte)</td><td>6000–8000/mm³</td><td>Immunity; nucleated; colourless</td></tr>\n   <tr><td>Platelets (thrombocytes)</td><td>1.5–3.5 lakh/mm³</td><td>Blood clotting (from megakaryocytes)</td></tr></table>\n   <h4>Types of WBC</h4>\n   <ul><li><b>Granulocytes:</b> Neutrophils (60–65%, phagocytic, most abundant), Eosinophils (2–3%, allergy/infection), Basophils (0.5–1%, rarest, release histamine/heparin).</li><li><b>Agranulocytes:</b> Lymphocytes (20–25%, B & T cells, immune response), Monocytes (6–8%, largest WBC, phagocytic).</li></ul>\n   <div class=\"mnem\"><div class=\"lab\">🧠 WBC abundance</div><div class=\"hook\">\"Never Let Monkeys Eat Bananas\"</div><div class=\"ex\">Neutrophils > Lymphocytes > Monocytes > Eosinophils > Basophils (high→low).</div></div>"
    },
    {
      "id": "BloodGroups",
      "heading": "Blood Groups",
      "html": "\n   <h4>ABO system</h4>\n   <table class=\"t\"><tr><th>Group</th><th>Antigen (RBC)</th><th>Antibody (plasma)</th><th>Donor to</th></tr>\n   <tr><td>A</td><td>A</td><td>anti-B</td><td>A, AB</td></tr>\n   <tr><td>B</td><td>B</td><td>anti-A</td><td>B, AB</td></tr>\n   <tr><td>AB</td><td>A & B</td><td>none</td><td>AB (universal recipient)</td></tr>\n   <tr><td>O</td><td>none</td><td>anti-A & anti-B</td><td>all (universal donor)</td></tr></table>\n   <h4>Rh factor</h4>\n   <p>Rh antigen (like rhesus monkey) — Rh⁺ has it, Rh⁻ lacks it. If an Rh⁻ mother carries an Rh⁺ foetus, leakage during delivery sensitises her; in a later Rh⁺ pregnancy her anti-Rh antibodies attack foetal RBCs → <span class=\"term\">erythroblastosis foetalis</span>. Prevented by giving anti-Rh antibodies to the mother.</p>\n   <div class=\"mnem\"><div class=\"lab\">🧠 Donor/Recipient</div><div class=\"hook\">\"O Outflows to all (donor); AB Absorbs all (recipient)\"</div></div>"
    },
    {
      "id": "CoagulationClottingofBlood",
      "heading": "Coagulation (Clotting) of Blood",
      "html": "\n   <p>A clot/coagulum is a network of <b>fibrin</b> threads trapping blood cells.</p>\n   <div class=\"flow\"><span class=\"step\">Injury → platelets release factors</span><span class=\"arr\">→</span><span class=\"step\">Thrombokinase (thromboplastin)</span><span class=\"arr\">→</span><span class=\"step\">Prothrombin → Thrombin</span><span class=\"arr\">→</span><span class=\"step\">Fibrinogen → Fibrin (clot)</span></div>\n   <p>Needs <b>Ca²⁺</b> ions and clotting factors. Prothrombin & fibrinogen are made in the liver (need vitamin K).</p>\n   <div class=\"mnem\"><div class=\"lab\">🧠 Clotting chain</div><div class=\"hook\">\"Platelets → Thrombokinase → Thrombin → Fibrin\"</div><div class=\"ex\">Prothrombin becomes Thrombin; Fibrinogen becomes Fibrin (the actual mesh). Calcium is essential.</div></div>"
    },
    {
      "id": "LymphTissueFluid",
      "heading": "Lymph (Tissue Fluid)",
      "html": "\n   <p>As blood passes through capillaries, plasma + WBCs + small solutes filter out (minus most proteins & RBCs) into spaces = <span class=\"term\">interstitial / tissue fluid</span>. This is drained by lymphatic vessels as <span class=\"term\">lymph</span>.</p>\n   <ul><li>Colourless fluid containing lymphocytes (no RBC, few proteins).</li><li>Functions: returns interstitial fluid/proteins to blood, absorbs & transports fats (via lacteals in intestinal villi), immunity.</li></ul>"
    },
    {
      "id": "HumanHeartStructure",
      "heading": "Human Heart — Structure",
      "html": "\n   <p>Mesodermally derived, four-chambered, in the thoracic cavity, enclosed by a double-walled <b>pericardium</b> (pericardial fluid reduces friction).</p>\n   <ul><li><b>2 atria</b> (thin-walled, receive blood) + <b>2 ventricles</b> (thick-walled, pump out). Inter-atrial & inter-ventricular septa keep oxygenated/deoxygenated blood separate.</li><li><b>Right AV (tricuspid) valve</b> between right atrium & ventricle; <b>left AV (bicuspid/mitral) valve</b> on the left.</li><li><b>Semilunar valves</b> guard the openings into the pulmonary artery & aorta. Valves allow one-way flow.</li></ul>\n   <h4>Conducting system (myogenic heart)</h4>\n   <ul><li><b>SA node (pacemaker)</b> in right atrium upper wall — initiates each beat (~70–75/min).</li><li><b>AV node</b> in lower right inter-atrial septum.</li><li><b>Bundle of His</b> → right & left bundle branches → <b>Purkinje fibres</b> spread the impulse through ventricles.</li></ul>\n   <div class=\"mnem\"><div class=\"lab\">🧠 Valves</div><div class=\"hook\">\"LAB RAT — Left Atrium Bicuspid, Right Atrium Tricuspid\"</div></div>"
    },
    {
      "id": "CardiacCycleHeartSounds",
      "heading": "Cardiac Cycle & Heart Sounds",
      "html": "\n   <p>One <span class=\"term\">cardiac cycle</span> = the sequential events in one heartbeat (~0.8 s at 72 beats/min): atrial systole → ventricular systole → joint diastole.</p>\n   <ul><li><b>Cardiac output</b> = Stroke volume × Heart rate ≈ 70 mL × 72 ≈ 5 L/min.</li><li><b>Stroke volume:</b> blood pumped per beat (~70 mL).</li></ul>\n   <span class=\"formula\">Cardiac Output (CO) = Stroke Volume (SV) × Heart Rate (HR)</span>\n   <h4>Heart sounds</h4>\n   <ul><li><b>First \"lubb\" (S1):</b> closure of AV valves (start of ventricular systole).</li><li><b>Second \"dup\" (S2):</b> closure of semilunar valves (end of ventricular systole).</li></ul>"
    },
    {
      "id": "ECGElectrocardiogram",
      "heading": "ECG (Electrocardiogram)",
      "html": "\n   <p>A graphic record of the electrical activity of the heart during a cardiac cycle (W. Einthoven).</p>\n   <ul><li><b>P wave:</b> atrial depolarisation (atrial contraction).</li><li><b>QRS complex:</b> ventricular depolarisation (ventricular contraction begins).</li><li><b>T wave:</b> ventricular repolarisation (recovery).</li></ul>\n   <p>Counting QRS complexes over a time period gives the heart rate. The number/shape of waves indicates heart abnormalities.</p>\n   <div class=\"mnem\"><div class=\"lab\">🧠 ECG waves</div><div class=\"hook\">\"P-pushes Atria, QRS-Quivers Ventricles, T-Takes a rest\"</div></div>"
    },
    {
      "id": "DoubleCirculationRegulation",
      "heading": "Double Circulation & Regulation",
      "html": "\n   <p>Blood passes through the heart <b>twice</b> per cycle = <span class=\"term\">double circulation</span>.</p>\n   <ul><li><b>Pulmonary circulation:</b> right ventricle → pulmonary artery → lungs (oxygenation) → pulmonary veins → left atrium.</li><li><b>Systemic circulation:</b> left ventricle → aorta → body tissues → vena cava → right atrium.</li><li><b>Hepatic portal system:</b> carries blood from intestine to liver before reaching the heart.</li><li><b>Coronary circulation:</b> supplies the heart muscle itself.</li></ul>\n   <p>Heart action is regulated by the <b>autonomic nervous system</b>: sympathetic ↑ rate & output; parasympathetic (vagus) ↓ rate. Adrenal medullary hormones (adrenaline) also ↑ cardiac output.</p>\n   <div class=\"mnem\"><div class=\"lab\">🧠 Two loops</div><div class=\"hook\">\"Pulmonary = to Lungs; Systemic = to System (body)\"</div></div>"
    },
    {
      "id": "DisordersoftheCirculatorySystem",
      "heading": "Disorders of the Circulatory System",
      "html": "\n   <ul><li><b>Hypertension:</b> high blood pressure (>140/90 mmHg; normal ~120/80). Leads to heart & kidney damage.</li><li><b>Coronary Artery Disease (CAD) / atherosclerosis:</b> deposits of Ca, fat, cholesterol & fibrous tissue narrow coronary arteries.</li><li><b>Angina (angina pectoris):</b> chest pain when heart muscle gets too little O₂.</li><li><b>Heart failure:</b> heart cannot pump enough blood (congestive when fluid accumulates in lungs).</li><li><b>Cardiac arrest:</b> heart stops beating. <b>Heart attack (myocardial infarction):</b> heart muscle damaged from sudden loss of blood supply.</li></ul>"
    }
  ],
  "mnemonics": [
    {
      "title": "WBC % high→low",
      "device": "Never Let Monkeys Eat Bananas",
      "expand": [
        {
          "L": "",
          "t": "Neutrophil > Lymphocyte > Monocyte > Eosinophil > Basophil."
        }
      ]
    },
    {
      "title": "Heart valves",
      "device": "LAB RAT",
      "expand": [
        {
          "L": "",
          "t": "Left Atrium Bicuspid, Right Atrium Tricuspid."
        }
      ]
    }
  ],
  "flashcards": [
    {
      "q": "Plasma vs serum?",
      "a": "Plasma = fluid part of blood with clotting factors (~55%). Serum = plasma minus clotting factors (fibrinogen).",
      "hint": "Clotting factors"
    },
    {
      "q": "Normal RBC count and lifespan?",
      "a": "~5–5.5 million/mm³; lifespan ~120 days; biconcave, no nucleus in mammals.",
      "hint": "120 days"
    },
    {
      "q": "Most abundant WBC?",
      "a": "Neutrophils (60–65%) — phagocytic granulocytes.",
      "hint": "~65%"
    },
    {
      "q": "Rarest WBC?",
      "a": "Basophils (0.5–1%) — release histamine & heparin.",
      "hint": "Histamine"
    },
    {
      "q": "Which protein is needed for clotting?",
      "a": "Fibrinogen (and prothrombin) — made in the liver; fibrin forms the clot mesh.",
      "hint": "Fibrin precursor"
    },
    {
      "q": "Universal donor and universal recipient blood groups?",
      "a": "O is the universal donor (no antigens); AB is the universal recipient (no antibodies).",
      "hint": "O / AB"
    },
    {
      "q": "What antibodies are present in blood group A?",
      "a": "Anti-B antibodies (antigen A on RBC).",
      "hint": "Opposite antibody"
    },
    {
      "q": "What is erythroblastosis foetalis?",
      "a": "Destruction of an Rh⁺ foetus’s RBCs by anti-Rh antibodies from a sensitised Rh⁻ mother during a later pregnancy.",
      "hint": "Rh incompatibility"
    },
    {
      "q": "Role of calcium in clotting?",
      "a": "Ca²⁺ ions are essential cofactors at several steps of the clotting cascade.",
      "hint": "Essential ion"
    },
    {
      "q": "What is lymph and a key function?",
      "a": "Colourless tissue fluid (lymphocytes, no RBC, few proteins); absorbs/transports fats via lacteals and returns fluid to blood.",
      "hint": "Lacteals, fats"
    },
    {
      "q": "Which valve lies between the left atrium and left ventricle?",
      "a": "The bicuspid (mitral) valve.",
      "hint": "LAB"
    },
    {
      "q": "Pacemaker of the heart?",
      "a": "The SA (sino-atrial) node in the right atrium — sets the heart rhythm (~70–75/min).",
      "hint": "SA node"
    },
    {
      "q": "Sequence of the heart’s conducting system?",
      "a": "SA node → AV node → Bundle of His → bundle branches → Purkinje fibres.",
      "hint": "SA→AV→His→Purkinje"
    },
    {
      "q": "Cardiac output formula and normal value?",
      "a": "CO = Stroke Volume × Heart Rate ≈ 70 mL × 72 ≈ 5 L/min.",
      "hint": "SV × HR"
    },
    {
      "q": "What causes the \"lubb\" and \"dup\" heart sounds?",
      "a": "Lubb (S1): AV valves close (start of ventricular systole). Dup (S2): semilunar valves close (end of ventricular systole).",
      "hint": "Valve closures"
    },
    {
      "q": "What do the P, QRS and T waves of an ECG represent?",
      "a": "P = atrial depolarisation; QRS = ventricular depolarisation; T = ventricular repolarisation.",
      "hint": "Depolarise / repolarise"
    },
    {
      "q": "What is double circulation?",
      "a": "Blood flows through the heart twice — pulmonary (heart↔lungs) and systemic (heart↔body) circuits.",
      "hint": "Two circuits"
    },
    {
      "q": "Hepatic portal system carries blood from ___ to ___?",
      "a": "From the intestine to the liver before it returns to the heart.",
      "hint": "Gut → liver"
    },
    {
      "q": "Define angina pectoris.",
      "a": "Chest pain due to insufficient oxygen reaching the heart muscle.",
      "hint": "Chest pain, low O₂"
    },
    {
      "q": "Normal vs hypertensive blood pressure?",
      "a": "Normal ~120/80 mmHg; hypertension is repeatedly above 140/90 mmHg.",
      "hint": "120/80 vs 140/90"
    }
  ],
  "recall": [
    {
      "q": "Name the formed elements of blood and one function of each.",
      "a": "RBCs (erythrocytes) — transport O₂/CO₂ via haemoglobin; WBCs (leucocytes) — immunity/defence; Platelets (thrombocytes) — blood clotting.",
      "hint": "RBC, WBC, platelet"
    },
    {
      "q": "Describe the ABO blood grouping with antigens and antibodies.",
      "a": "Group A: antigen A, anti-B antibody. Group B: antigen B, anti-A. Group AB: both antigens, no antibody (universal recipient). Group O: no antigen, both antibodies (universal donor).",
      "hint": "Antigen on RBC, antibody in plasma"
    },
    {
      "q": "Explain the mechanism of blood clotting.",
      "a": "Injury exposes tissue/platelet factors → thrombokinase (thromboplastin) forms → with Ca²⁺ it converts prothrombin to thrombin → thrombin converts soluble fibrinogen to insoluble fibrin threads, which trap cells forming the clot.",
      "hint": "Thromboplastin → thrombin → fibrin"
    },
    {
      "q": "Describe the structure of the human heart.",
      "a": "Four-chambered (2 atria, 2 ventricles) in a double-walled pericardium. AV valves (tricuspid right, bicuspid left) prevent backflow into atria; semilunar valves guard the aorta and pulmonary artery. Septa keep oxygenated and deoxygenated blood separate.",
      "hint": "4 chambers, valves, pericardium"
    },
    {
      "q": "Trace the conducting system of the heart.",
      "a": "SA node (pacemaker) in the right atrium initiates the impulse → AV node → Bundle of His → right & left bundle branches → Purkinje fibres, contracting the ventricles. The heart is myogenic.",
      "hint": "SA → AV → His → Purkinje"
    },
    {
      "q": "Define cardiac cycle, cardiac output and stroke volume.",
      "a": "Cardiac cycle = events of one heartbeat (~0.8 s): atrial systole, ventricular systole, joint diastole. Stroke volume = blood pumped per beat (~70 mL). Cardiac output = SV × heart rate ≈ 5 L/min.",
      "hint": "Cycle, SV, CO = SV×HR"
    },
    {
      "q": "Draw/explain the segments of a normal ECG.",
      "a": "P wave = atrial depolarisation; QRS complex = ventricular depolarisation; T wave = ventricular repolarisation. The number of QRS complexes per minute gives heart rate; abnormal waves indicate disease.",
      "hint": "P, QRS, T"
    },
    {
      "q": "What is double circulation? Name its components.",
      "a": "Blood passes through the heart twice per circuit. Pulmonary circulation: right ventricle → lungs → left atrium. Systemic circulation: left ventricle → body → right atrium. Also hepatic portal and coronary circulation.",
      "hint": "Pulmonary + systemic"
    },
    {
      "q": "How is the heart’s activity regulated?",
      "a": "The SA node is self-exciting (myogenic) but is modulated by the autonomic nervous system — sympathetic nerves increase rate & force, parasympathetic (vagus) decreases rate; adrenal medulla hormones (adrenaline) also raise cardiac output.",
      "hint": "Autonomic + adrenaline"
    },
    {
      "q": "List four disorders of the circulatory system.",
      "a": "Hypertension (high BP), coronary artery disease/atherosclerosis, angina pectoris (chest pain from low O₂), and heart failure / myocardial infarction (heart attack).",
      "hint": "BP, CAD, angina, heart failure"
    }
  ],
  "mcqs": [
    {
      "q": "The fluid part of blood without clotting factors is:",
      "o": [
        "Plasma",
        "Serum",
        "Lymph",
        "Tissue fluid"
      ],
      "a": 1,
      "e": "Serum = plasma minus clotting factors (chiefly fibrinogen)."
    },
    {
      "q": "Universal blood donor group is:",
      "o": [
        "AB",
        "A",
        "O",
        "B"
      ],
      "a": 2,
      "e": "O has no A/B antigens, so it can be given to any group."
    },
    {
      "q": "Most numerous WBCs are:",
      "o": [
        "Lymphocytes",
        "Neutrophils",
        "Eosinophils",
        "Monocytes"
      ],
      "a": 1,
      "e": "Neutrophils make up 60–65% of WBCs and are phagocytic."
    },
    {
      "q": "Pacemaker of the heart is the:",
      "o": [
        "AV node",
        "SA node",
        "Bundle of His",
        "Purkinje fibres"
      ],
      "a": 1,
      "e": "The SA node in the right atrium initiates each heartbeat."
    },
    {
      "q": "The bicuspid (mitral) valve is located between:",
      "o": [
        "Right atrium & ventricle",
        "Left atrium & ventricle",
        "Ventricle & aorta",
        "Atria"
      ],
      "a": 1,
      "e": "Bicuspid/mitral valve is the left AV valve (LAB — Left Atrium Bicuspid)."
    },
    {
      "q": "The \"lubb\" sound is produced by closure of:",
      "o": [
        "Semilunar valves",
        "AV valves",
        "The aorta",
        "SA node"
      ],
      "a": 1,
      "e": "S1 (lubb) = closure of atrioventricular valves at the start of ventricular systole."
    },
    {
      "q": "The QRS complex of an ECG represents:",
      "o": [
        "Atrial depolarisation",
        "Ventricular depolarisation",
        "Ventricular repolarisation",
        "Atrial repolarisation"
      ],
      "a": 1,
      "e": "QRS = depolarisation (contraction) of the ventricles."
    },
    {
      "q": "Cardiac output is defined as:",
      "o": [
        "SV ÷ HR",
        "SV − HR",
        "SV × HR",
        "HR ÷ SV"
      ],
      "a": 2,
      "e": "CO = Stroke Volume × Heart Rate (~70 mL × 72 ≈ 5 L/min)."
    },
    {
      "q": "Final insoluble protein of a blood clot is:",
      "o": [
        "Fibrinogen",
        "Prothrombin",
        "Fibrin",
        "Thrombin"
      ],
      "a": 2,
      "e": "Thrombin converts soluble fibrinogen into insoluble fibrin threads."
    },
    {
      "q": "Erythroblastosis foetalis is due to incompatibility of:",
      "o": [
        "ABO group",
        "Rh factor",
        "MN group",
        "Plasma proteins"
      ],
      "a": 1,
      "e": "It results from Rh incompatibility between an Rh⁻ mother and Rh⁺ foetus."
    },
    {
      "q": "Lymph differs from blood in lacking:",
      "o": [
        "Lymphocytes",
        "Plasma",
        "RBCs",
        "Water"
      ],
      "a": 2,
      "e": "Lymph has no RBCs and fewer proteins; it contains lymphocytes."
    },
    {
      "q": "Pulmonary artery carries:",
      "o": [
        "Oxygenated blood to body",
        "Deoxygenated blood to lungs",
        "Oxygenated blood to heart",
        "Deoxygenated blood to body"
      ],
      "a": 1,
      "e": "It carries deoxygenated blood from the right ventricle to the lungs."
    },
    {
      "q": "Normal human heart rate (resting) is about:",
      "o": [
        "40–50/min",
        "72/min",
        "120/min",
        "150/min"
      ],
      "a": 1,
      "e": "About 70–75 beats per minute at rest."
    },
    {
      "q": "Chest pain due to insufficient O₂ to heart muscle is:",
      "o": [
        "Hypertension",
        "Angina pectoris",
        "Atherosclerosis",
        "Cardiac arrest"
      ],
      "a": 1,
      "e": "Angina pectoris is chest pain from inadequate oxygen supply to the myocardium."
    },
    {
      "q": "Hepatic portal vein carries blood from:",
      "o": [
        "Heart to liver",
        "Intestine to liver",
        "Liver to heart",
        "Lungs to heart"
      ],
      "a": 1,
      "e": "It carries blood from the digestive tract to the liver before reaching the heart."
    },
    {
      "q": "Largest WBC, phagocytic, is the:",
      "o": [
        "Neutrophil",
        "Monocyte",
        "Basophil",
        "Eosinophil"
      ],
      "a": 1,
      "e": "Monocytes are the largest WBCs and are phagocytic."
    }
  ],
  "match": [
    {
      "t": "Neutrophil",
      "d": "Most abundant WBC (phagocyte)"
    },
    {
      "t": "Basophil",
      "d": "Releases histamine/heparin (rarest)"
    },
    {
      "t": "O group",
      "d": "Universal donor"
    },
    {
      "t": "AB group",
      "d": "Universal recipient"
    },
    {
      "t": "SA node",
      "d": "Pacemaker"
    },
    {
      "t": "Bicuspid valve",
      "d": "Left AV valve"
    },
    {
      "t": "P wave",
      "d": "Atrial depolarisation"
    },
    {
      "t": "T wave",
      "d": "Ventricular repolarisation"
    },
    {
      "t": "Fibrin",
      "d": "Forms the clot mesh"
    },
    {
      "t": "Pulmonary artery",
      "d": "Deoxygenated blood to lungs"
    },
    {
      "t": "Lacteals",
      "d": "Absorb fats into lymph"
    },
    {
      "t": "Angina pectoris",
      "d": "Chest pain from low O₂"
    }
  ],
  "pathways": [
    {
      "title": "Blood clotting cascade",
      "steps": [
        "Injury & platelet aggregation",
        "Thrombokinase (thromboplastin) released",
        "Prothrombin → Thrombin (needs Ca²⁺)",
        "Fibrinogen → Fibrin threads",
        "Clot/coagulum traps blood cells"
      ],
      "e": "The enzyme cascade ends in a fibrin mesh forming the clot."
    },
    {
      "title": "Cardiac impulse conduction",
      "steps": [
        "SA node fires",
        "AV node",
        "Bundle of His",
        "Bundle branches",
        "Purkinje fibres → ventricles contract"
      ],
      "e": "The myogenic impulse spreads from pacemaker to ventricular muscle."
    },
    {
      "title": "Pulmonary circulation path",
      "steps": [
        "Right ventricle",
        "Pulmonary artery",
        "Lungs (oxygenation)",
        "Pulmonary veins",
        "Left atrium"
      ],
      "e": "Deoxygenated blood is sent to the lungs and returns oxygenated."
    }
  ]
};
