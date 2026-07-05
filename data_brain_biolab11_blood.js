/* Extracted from BioLab final 1.html */
DATA.chapters['brain_biolab11_blood'] = {
  "id": "brain_biolab11_blood",
  "num": "15",
  "title": "Body Fluids & Circulation",
  "subtitle": "Blood and lymph as the body’s transport fluids — from formed elements and clotting to the human heart, double circulation and the ECG.",
  "color": "#FF5470",
  "colorD": "#3E32A0",
  "glyph": "🫀",
  "notes": [
    {
      "id": "BloodASpecialConnectiveTissue",
      "heading": "Blood — A Special Connective Tissue",
      "html": "\n   <p><span class=\"term\">Blood</span> is a fluid connective tissue with a liquid matrix called <b>plasma</b> in which <b>formed elements</b> are suspended.</p>\n   <table class=\"t\"><tr><th>Component</th><th>Approx. share</th><th>Role</th></tr>\n   <tr><td>Plasma</td><td>~55%</td><td>Liquid matrix, transport</td></tr>\n   <tr><td>Formed elements</td><td>~45% (PCV)</td><td>RBC, WBC, platelets</td></tr></table>\n   <h4>Plasma (90–92% water; 6–8% proteins)</h4>\n   <ul><li><b>Fibrinogen</b> — needed for blood clotting.</li><li><b>Globulins</b> — defence (antibodies).</li><li><b>Albumins</b> — maintain osmotic balance.</li><li>Ions (Na⁺, Ca²⁺, Mg²⁺, HCO₃⁻, Cl⁻), glucose, amino acids, lipids and hormones are also transported.</li></ul>\n   <div class=\"callout\"><b>Serum</b> = plasma <b>minus</b> the clotting factors (fibrinogen).</div>"
    },
    {
      "id": "FormedElementsRBCWBCPlatelets",
      "heading": "Formed Elements — RBC, WBC & Platelets",
      "html": "\n   <p>Formed elements constitute about 45% of blood.</p>\n   <table class=\"t\"><tr><th>Element</th><th>Count</th><th>Key facts</th></tr>\n   <tr><td>RBC (erythrocyte)</td><td>5–5.5 million/mm³</td><td>Biconcave, no nucleus (mammals), haemoglobin, life 120 days</td></tr>\n   <tr><td>WBC (leucocyte)</td><td>6000–8000/mm³</td><td>Nucleated, colourless, immunity, life 1–2 weeks</td></tr>\n   <tr><td>Platelet (thrombocyte)</td><td>1.5–3.5 lakh/mm³</td><td>Cell fragments, blood clotting</td></tr></table>\n   <h4>RBC (Erythrocytes)</h4>\n   <ul><li>Formed in the <b>red bone marrow</b>; destroyed in the <b>spleen</b> (\"graveyard of RBCs\").</li><li>Carry <b>haemoglobin</b> (12–16 g per 100 mL blood) which transports O₂ and CO₂.</li></ul>\n   <h4>WBC (Leucocytes)</h4>\n   <table class=\"t\"><tr><th>Type</th><th>Group</th><th>%</th><th>Function</th></tr>\n   <tr><td>Neutrophil</td><td>Granulocyte</td><td>60–65%</td><td>Phagocytosis (most abundant)</td></tr>\n   <tr><td>Eosinophil</td><td>Granulocyte</td><td>2–3%</td><td>Allergy, resist infection</td></tr>\n   <tr><td>Basophil</td><td>Granulocyte</td><td>0.5–1%</td><td>Release histamine, heparin (rarest)</td></tr>\n   <tr><td>Lymphocyte</td><td>Agranulocyte</td><td>20–25%</td><td>Immunity (B & T cells)</td></tr>\n   <tr><td>Monocyte</td><td>Agranulocyte</td><td>6–8%</td><td>Phagocytosis (largest WBC)</td></tr></table>\n   <div class=\"mnem\"><div class=\"lab\">🧠 Memory Hook</div><div class=\"hook\">\"Never Let Monkeys Eat Bananas\"</div><div class=\"ex\">WBC abundance, high → low: <b>N</b>eutrophil > <b>L</b>ymphocyte > <b>M</b>onocyte > <b>E</b>osinophil > <b>B</b>asophil.</div></div>"
    },
    {
      "id": "BloodGroupsABORh",
      "heading": "Blood Groups — ABO & Rh",
      "html": "\n   <p>The <span class=\"term\">ABO system</span> depends on surface antigens (A, B) on RBCs and natural antibodies in plasma.</p>\n   <table class=\"t\"><tr><th>Group</th><th>Antigen (RBC)</th><th>Antibody (plasma)</th><th>Can donate to</th></tr>\n   <tr><td>A</td><td>A</td><td>anti-B</td><td>A, AB</td></tr>\n   <tr><td>B</td><td>B</td><td>anti-A</td><td>B, AB</td></tr>\n   <tr><td>AB</td><td>A and B</td><td>none</td><td>AB only</td></tr>\n   <tr><td>O</td><td>none</td><td>anti-A & anti-B</td><td>All (universal donor)</td></tr></table>\n   <div class=\"callout\"><b>O</b> = universal donor; <b>AB</b> = universal recipient.</div>\n   <h4>Rh Factor</h4>\n   <ul><li>Rh antigen (like the rhesus monkey): <b>Rh⁺</b> have it, <b>Rh⁻</b> lack it.</li><li><b>Erythroblastosis fetalis</b>: an Rh⁻ mother carrying an Rh⁺ foetus may make anti-Rh antibodies that attack the foetal RBCs in a later Rh⁺ pregnancy.</li></ul>\n   <div class=\"mnem\"><div class=\"lab\">🧠 Memory Hook</div><div class=\"hook\">\"O gives to all, AB takes from all\"</div><div class=\"ex\">O = no antigens → universal donor. AB = no antibodies → universal recipient.</div></div>"
    },
    {
      "id": "BloodClottingCoagulation",
      "heading": "Blood Clotting (Coagulation)",
      "html": "\n   <p>A clot or coagulum is a network of <b>fibrin</b> threads trapping blood cells. It seals injured vessels.</p>\n   <div class=\"flow\"><span class=\"step\">Injury → platelets release factors + thromboplastin</span><span class=\"arr\">→</span><span class=\"step\">Prothrombin → Thrombin (needs Ca²⁺)</span><span class=\"arr\">→</span><span class=\"step\">Fibrinogen → Fibrin</span><span class=\"arr\">→</span><span class=\"step\">Fibrin mesh traps cells = clot</span></div>\n   <ul><li>Requires <b>Ca²⁺</b> ions and clotting factors (numbered I–XIII).</li><li><b>Heparin</b> is a natural anticoagulant; <b>vitamin K</b> is needed for prothrombin synthesis.</li></ul>\n   <div class=\"formula\">Prothrombin --(thrombokinase + Ca²⁺)--> Thrombin\nFibrinogen --(thrombin)--> Fibrin (insoluble threads)</div>"
    },
    {
      "id": "LymphTissueFluid",
      "heading": "Lymph (Tissue Fluid)",
      "html": "\n   <p><span class=\"term\">Lymph</span> is a colourless fluid formed when plasma (without large proteins and RBCs) filters out of capillaries into tissue spaces.</p>\n   <ul><li>Contains WBCs — mainly <b>lymphocytes</b>; <b>no RBCs</b>.</li><li>Returns tissue fluid, proteins and absorbed <b>fats</b> (via lacteals) back to the blood.</li><li>Part of the immune system; nodes filter pathogens.</li></ul>\n   <table class=\"t\"><tr><th>Feature</th><th>Blood</th><th>Lymph</th></tr>\n   <tr><td>RBC</td><td>Present</td><td>Absent</td></tr>\n   <tr><td>Proteins</td><td>High</td><td>Low</td></tr>\n   <tr><td>Direction</td><td>Circulates in vessels/heart</td><td>Tissue → back to blood</td></tr></table>"
    },
    {
      "id": "CirculatoryPatterns",
      "heading": "Circulatory Patterns",
      "html": "\n   <p>Animals show <span class=\"term\">open</span> or <span class=\"term\">closed</span> circulation.</p>\n   <table class=\"t\"><tr><th>Open</th><th>Closed</th></tr>\n   <tr><td>Blood flows through open spaces (haemocoel)</td><td>Blood confined to vessels</td></tr>\n   <tr><td>Low pressure, less efficient</td><td>High pressure, precise control</td></tr>\n   <tr><td>Arthropods, molluscs</td><td>Annelids, vertebrates</td></tr></table>\n   <h4>Heart-based circulation</h4>\n   <ul><li><b>Single circulation</b> — fishes; blood passes through the heart once per cycle (2-chambered heart).</li><li><b>Incomplete double</b> — amphibians & most reptiles (3-chambered; mixing).</li><li><b>Complete double</b> — birds & mammals (4-chambered; no mixing).</li></ul>"
    },
    {
      "id": "TheHumanHeartStructure",
      "heading": "The Human Heart — Structure",
      "html": "\n   <p>The <span class=\"term\">heart</span> is mesodermal, lies in the thoracic cavity between the lungs, protected by a double-walled <b>pericardium</b> with pericardial fluid.</p>\n   <ul><li>Four chambers: two thin-walled <b>atria</b> (upper) and two thick-walled <b>ventricles</b> (lower); the <b>left ventricle</b> is thickest (pumps to the whole body).</li><li>Septa: inter-atrial, inter-ventricular and atrioventricular.</li></ul>\n   <h4>Valves (prevent backflow)</h4>\n   <table class=\"t\"><tr><th>Valve</th><th>Location</th><th>Cusps</th></tr>\n   <tr><td>Tricuspid</td><td>Right atrium → right ventricle</td><td>3</td></tr>\n   <tr><td>Bicuspid (mitral)</td><td>Left atrium → left ventricle</td><td>2</td></tr>\n   <tr><td>Pulmonary semilunar</td><td>Right ventricle → pulmonary artery</td><td>3</td></tr>\n   <tr><td>Aortic semilunar</td><td>Left ventricle → aorta</td><td>3</td></tr></table>\n   <div class=\"mnem\"><div class=\"lab\">🧠 Memory Hook</div><div class=\"hook\">\"LAB RAT\"</div><div class=\"ex\"><b>L</b>eft <b>A</b>trium → <b>B</b>icuspid; <b>R</b>ight <b>A</b>trium → <b>T</b>ricuspid.</div></div>"
    },
    {
      "id": "ConductingSystemCardiacCycle",
      "heading": "Conducting System & Cardiac Cycle",
      "html": "\n   <p>The heart is <b>myogenic</b> — it generates its own beat through specialised tissue.</p>\n   <div class=\"flow\"><span class=\"step\">SA node (pacemaker)</span><span class=\"arr\">→</span><span class=\"step\">AV node</span><span class=\"arr\">→</span><span class=\"step\">Bundle of His</span><span class=\"arr\">→</span><span class=\"step\">Bundle branches</span><span class=\"arr\">→</span><span class=\"step\">Purkinje fibres</span></div>\n   <ul><li>The <b>SA node</b> in the right atrium wall is the <b>pacemaker</b>, setting the rhythm (~70–75/min).</li></ul>\n   <h4>Cardiac cycle (~0.8 s at 72 bpm)</h4>\n   <table class=\"t\"><tr><th>Phase</th><th>Duration</th></tr>\n   <tr><td>Atrial systole</td><td>0.1 s</td></tr>\n   <tr><td>Ventricular systole</td><td>0.3 s</td></tr>\n   <tr><td>Joint diastole</td><td>0.4 s</td></tr></table>\n   <ul><li><b>Heart sounds</b>: \"<b>lub</b>\" (S1 — AV valves close) and \"<b>dub</b>\" (S2 — semilunar valves close).</li></ul>\n   <div class=\"formula\">Stroke Volume ≈ 70 mL\nCardiac Output = Stroke Volume × Heart Rate ≈ 70 × 72 ≈ 5000 mL/min (5 L)</div>"
    },
    {
      "id": "ECGDoubleCirculation",
      "heading": "ECG & Double Circulation",
      "html": "\n   <p>An <span class=\"term\">electrocardiogram (ECG)</span> records the heart’s electrical activity as standard waves.</p>\n   <table class=\"t\"><tr><th>Wave</th><th>Represents</th></tr>\n   <tr><td>P wave</td><td>Atrial depolarisation (atria contract)</td></tr>\n   <tr><td>QRS complex</td><td>Ventricular depolarisation (ventricles contract)</td></tr>\n   <tr><td>T wave</td><td>Ventricular repolarisation (relaxation)</td></tr></table>\n   <div class=\"callout\">Counting QRS complexes over a known time gives the heart rate.</div>\n   <h4>Double circulation</h4>\n   <div class=\"flow\"><span class=\"step\">Pulmonary: RA → RV → lungs → LA</span><span class=\"arr\">||</span><span class=\"step\">Systemic: LA → LV → body → RA</span></div>\n   <ul><li><b>Pulmonary circuit</b> carries deoxygenated blood to the lungs and oxygenated blood back.</li><li><b>Systemic circuit</b> delivers oxygenated blood to body tissues and returns deoxygenated blood.</li></ul>"
    },
    {
      "id": "BloodVesselsRegulationDisorders",
      "heading": "Blood Vessels, Regulation & Disorders",
      "html": "\n   <p>Three vessel types form the closed circuit.</p>\n   <table class=\"t\"><tr><th>Vessel</th><th>Carries</th><th>Wall</th><th>Valves</th></tr>\n   <tr><td>Artery</td><td>Blood away from heart</td><td>Thick, muscular, elastic</td><td>Absent</td></tr>\n   <tr><td>Vein</td><td>Blood toward heart</td><td>Thinner</td><td>Present</td></tr>\n   <tr><td>Capillary</td><td>Exchange site</td><td>One cell thick</td><td>—</td></tr></table>\n   <div class=\"callout\">The <b>pulmonary artery</b> is the only artery carrying deoxygenated blood; the <b>pulmonary vein</b> is the only vein carrying oxygenated blood.</div>\n   <h4>Regulation</h4>\n   <ul><li>The <b>cardiac centre</b> in the medulla oblongata regulates heart activity via the autonomic nervous system.</li><li><b>Sympathetic</b> nerves & adrenaline increase the rate/force; <b>parasympathetic (vagus)</b> decreases it.</li></ul>\n   <h4>Disorders</h4>\n   <ul><li><b>Hypertension</b> — persistent high blood pressure (above ~140/90 mmHg).</li><li><b>Coronary Artery Disease (atherosclerosis)</b> — narrowing of coronary arteries by plaque.</li><li><b>Angina pectoris</b> — chest pain from insufficient O₂ to the heart muscle.</li><li><b>Heart failure</b> — the heart cannot pump enough blood for body needs.</li></ul>"
    }
  ],
  "mnemonics": [
    {
      "title": "WBC abundance high→low: Neutrophil > Lymphocyte > Monocyte > Eosinophil > Basophil.",
      "device": "\"Never Let Monkeys Eat Bananas\"",
      "expand": [
        {
          "L": "",
          "t": "WBC counts"
        }
      ]
    },
    {
      "title": "Left Atrium → Bicuspid valve; Right Atrium → Tricuspid valve.",
      "device": "\"LAB RAT\"",
      "expand": [
        {
          "L": "",
          "t": "Heart valves"
        }
      ]
    },
    {
      "title": "Group O = universal donor (no antigens); Group AB = universal recipient (no antibodies).",
      "device": "\"O gives to all, AB takes from all\"",
      "expand": [
        {
          "L": "",
          "t": "Blood groups"
        }
      ]
    },
    {
      "title": "The SinoAtrial Node is the pacemaker that initiates each heartbeat.",
      "device": "\"SAN Sets the rhythm\"",
      "expand": [
        {
          "L": "",
          "t": "Conduction"
        }
      ]
    },
    {
      "title": "ECG waves in order — P (atrial contraction), QRS (ventricular contraction), T (ventricular relaxation).",
      "device": "\"P-QRS-T: Atria depol, Ventricle depol, Ventricle repol\"",
      "expand": [
        {
          "L": "",
          "t": "ECG"
        }
      ]
    },
    {
      "title": "It is the only artery carrying deoxygenated blood; the pulmonary vein is the only vein carrying oxygenated blood.",
      "device": "\"Pulmonary Artery is the ODD one\"",
      "expand": [
        {
          "L": "",
          "t": "Vessels"
        }
      ]
    }
  ],
  "flashcards": [
    {
      "front": "What type of tissue is blood?",
      "back": "A fluid connective tissue with plasma as its matrix."
    },
    {
      "front": "What percentage of blood is plasma?",
      "back": "About 55%."
    },
    {
      "front": "Water content of plasma?",
      "back": "90–92% water."
    },
    {
      "front": "Three major plasma proteins and roles?",
      "back": "Fibrinogen (clotting), globulins (defence/antibodies), albumins (osmotic balance)."
    },
    {
      "front": "What is serum?",
      "back": "Plasma without the clotting factors (fibrinogen)."
    },
    {
      "front": "Normal RBC count?",
      "back": "5–5.5 million per mm³."
    },
    {
      "front": "Lifespan of an RBC?",
      "back": "About 120 days."
    },
    {
      "front": "Where are RBCs formed and destroyed?",
      "back": "Formed in red bone marrow; destroyed in the spleen."
    },
    {
      "front": "Why is the spleen called the \"graveyard of RBCs\"?",
      "back": "Old/worn RBCs are broken down there."
    },
    {
      "front": "Haemoglobin concentration in blood?",
      "back": "12–16 g per 100 mL of blood."
    },
    {
      "front": "Shape and nucleus of a mammalian RBC?",
      "back": "Biconcave disc; lacks a nucleus."
    },
    {
      "front": "Normal WBC count?",
      "back": "6000–8000 per mm³."
    },
    {
      "front": "Two groups of WBCs?",
      "back": "Granulocytes and agranulocytes."
    },
    {
      "front": "Name the granulocytes.",
      "back": "Neutrophils, eosinophils and basophils."
    },
    {
      "front": "Name the agranulocytes.",
      "back": "Lymphocytes and monocytes."
    },
    {
      "front": "Most abundant WBC and its function?",
      "back": "Neutrophil (60–65%); phagocytosis."
    },
    {
      "front": "Rarest WBC and its function?",
      "back": "Basophil (0.5–1%); releases histamine and heparin."
    },
    {
      "front": "Largest WBC?",
      "back": "Monocyte (phagocytic)."
    },
    {
      "front": "Which WBCs provide immunity?",
      "back": "Lymphocytes (B and T cells)."
    },
    {
      "front": "Normal platelet count?",
      "back": "1.5–3.5 lakh per mm³."
    },
    {
      "front": "Function of platelets?",
      "back": "Help in blood clotting (coagulation)."
    },
    {
      "front": "Antigen and antibody of blood group A?",
      "back": "Antigen A on RBC; anti-B antibody in plasma."
    },
    {
      "front": "Which group is the universal donor?",
      "back": "O (no A or B antigens)."
    },
    {
      "front": "Which group is the universal recipient?",
      "back": "AB (no antibodies)."
    },
    {
      "front": "Antibodies present in group O?",
      "back": "Both anti-A and anti-B."
    },
    {
      "front": "What is the Rh factor?",
      "back": "An antigen on RBCs; Rh⁺ have it, Rh⁻ lack it."
    },
    {
      "front": "What is erythroblastosis fetalis?",
      "back": "Destruction of an Rh⁺ foetus’s RBCs by an Rh⁻ mother’s antibodies."
    },
    {
      "front": "End product of blood clotting?",
      "back": "A mesh of insoluble fibrin threads trapping blood cells."
    },
    {
      "front": "Which ion is essential for clotting?",
      "back": "Calcium (Ca²⁺)."
    },
    {
      "front": "Inactive form of thrombin?",
      "back": "Prothrombin."
    },
    {
      "front": "Fibrinogen is converted to fibrin by?",
      "back": "Thrombin."
    },
    {
      "front": "A natural anticoagulant in blood?",
      "back": "Heparin."
    },
    {
      "front": "Vitamin needed for clotting?",
      "back": "Vitamin K (for prothrombin synthesis)."
    },
    {
      "front": "What is lymph?",
      "back": "Colourless tissue fluid containing WBCs (mostly lymphocytes) but no RBCs."
    },
    {
      "front": "How does lymph differ from blood?",
      "back": "Lymph has no RBCs and little protein; it returns tissue fluid to blood."
    },
    {
      "front": "Lymph absorbs which nutrients from the intestine?",
      "back": "Fats, via lacteals."
    },
    {
      "front": "Open vs closed circulation?",
      "back": "Open — blood bathes tissues in open spaces; closed — blood stays within vessels."
    },
    {
      "front": "Type of circulation in fishes?",
      "back": "Single circulation (2-chambered heart)."
    },
    {
      "front": "Which animals show complete double circulation?",
      "back": "Birds and mammals (4-chambered heart)."
    },
    {
      "front": "How many chambers in the human heart?",
      "back": "Four — two atria and two ventricles."
    },
    {
      "front": "Which chamber has the thickest wall and why?",
      "back": "The left ventricle — it pumps blood to the whole body."
    },
    {
      "front": "What protects the heart externally?",
      "back": "A double-walled pericardium with pericardial fluid."
    },
    {
      "front": "Valve between right atrium and ventricle?",
      "back": "Tricuspid valve (3 cusps)."
    },
    {
      "front": "Valve between left atrium and ventricle?",
      "back": "Bicuspid (mitral) valve (2 cusps)."
    },
    {
      "front": "Which node is the pacemaker?",
      "back": "The sino-atrial node (SA node)."
    },
    {
      "front": "Correct order of impulse conduction?",
      "back": "SA node → AV node → bundle of His → bundle branches → Purkinje fibres."
    },
    {
      "front": "Duration of one cardiac cycle at 72 bpm?",
      "back": "About 0.8 seconds."
    },
    {
      "front": "What causes the first heart sound \"lub\"?",
      "back": "Closure of the atrioventricular (tricuspid & bicuspid) valves."
    },
    {
      "front": "What causes the second heart sound \"dub\"?",
      "back": "Closure of the semilunar valves."
    },
    {
      "front": "Define cardiac output.",
      "back": "Volume of blood pumped by each ventricle per minute (≈ 5 L); = stroke volume × heart rate."
    },
    {
      "front": "What does the QRS complex of an ECG represent?",
      "back": "Ventricular depolarisation (ventricular contraction)."
    },
    {
      "front": "What does the T wave represent?",
      "back": "Ventricular repolarisation (relaxation)."
    },
    {
      "front": "The only artery carrying deoxygenated blood?",
      "back": "The pulmonary artery."
    },
    {
      "front": "The only vein carrying oxygenated blood?",
      "back": "The pulmonary vein."
    },
    {
      "front": "Where is the cardiac centre located?",
      "back": "In the medulla oblongata."
    },
    {
      "front": "What is hypertension?",
      "back": "Persistently high blood pressure, above about 140/90 mmHg."
    }
  ],
  "recall": [
    {
      "q": "Describe the composition of blood.",
      "hint": "Plasma + formed elements",
      "a": "Blood is a fluid connective tissue: ~55% plasma (90–92% water; 6–8% proteins — fibrinogen, globulins, albumins; plus ions, glucose, hormones) and ~45% formed elements (RBCs, WBCs, platelets)."
    },
    {
      "q": "List the plasma proteins and their functions.",
      "hint": "Fib, glob, alb",
      "a": "Fibrinogen — blood clotting; globulins — immune defence (antibodies); albumins — maintain colloidal osmotic pressure/water balance."
    },
    {
      "q": "Describe RBCs and their function.",
      "hint": "Biconcave, Hb, 120 days",
      "a": "Biconcave, enucleate (in mammals) cells, 5–5.5 million/mm³, formed in red bone marrow and destroyed in the spleen after ~120 days; carry haemoglobin (12–16 g/100 mL) for O₂ and CO₂ transport."
    },
    {
      "q": "Classify WBCs with their percentages and functions.",
      "hint": "Granulo vs agranulo",
      "a": "Granulocytes: neutrophils (60–65%, phagocytosis), eosinophils (2–3%, allergy), basophils (0.5–1%, histamine/heparin). Agranulocytes: lymphocytes (20–25%, immunity), monocytes (6–8%, phagocytosis)."
    },
    {
      "q": "Explain the ABO blood group system.",
      "hint": "Antigen/antibody table",
      "a": "RBCs may carry antigen A and/or B; plasma carries the corresponding natural antibodies. A (anti-B), B (anti-A), AB (no antibody — universal recipient), O (both antibodies, no antigen — universal donor)."
    },
    {
      "q": "What is the Rh factor and erythroblastosis fetalis?",
      "hint": "Rh⁻ mother, Rh⁺ foetus",
      "a": "The Rh antigen on RBCs defines Rh⁺ (present) and Rh⁻ (absent). If an Rh⁻ mother carries an Rh⁺ foetus, she may form anti-Rh antibodies; in a later Rh⁺ pregnancy these cross the placenta and destroy foetal RBCs — erythroblastosis fetalis."
    },
    {
      "q": "Describe the mechanism of blood clotting.",
      "hint": "Thromboplastin→thrombin→fibrin",
      "a": "Injury makes platelets release factors and thromboplastin; with Ca²⁺ this converts prothrombin to thrombin; thrombin converts soluble fibrinogen into insoluble fibrin threads that mesh and trap cells, forming the clot."
    },
    {
      "q": "Differentiate blood and lymph.",
      "hint": "RBC, protein, direction",
      "a": "Blood is red, has RBCs and high protein, circulates in vessels/heart. Lymph is colourless, lacks RBCs, has low protein and mostly lymphocytes, flows from tissues back to blood and absorbs fats via lacteals."
    },
    {
      "q": "Distinguish open and closed circulatory systems.",
      "hint": "Haemocoel vs vessels",
      "a": "Open: blood pumped into open spaces (haemocoel) bathing tissues, low pressure, in arthropods/molluscs. Closed: blood confined to vessels, high pressure, precisely regulated, in annelids and vertebrates."
    },
    {
      "q": "Compare single, incomplete double and complete double circulation.",
      "hint": "Fish / amphibian / mammal",
      "a": "Single (fishes): blood passes once through a 2-chambered heart per cycle. Incomplete double (amphibians/reptiles): 3-chambered heart, some mixing. Complete double (birds/mammals): 4-chambered heart, fully separate oxygenated and deoxygenated streams."
    },
    {
      "q": "Describe the external structure of the human heart.",
      "hint": "Pericardium, 4 chambers",
      "a": "A mesodermal organ in the thoracic cavity between the lungs, enclosed by a double-walled pericardium with pericardial fluid. It has four chambers: two thin atria above and two thick ventricles below, the left ventricle being thickest."
    },
    {
      "q": "Name the heart valves and their positions.",
      "hint": "Tri, bi, 2 semilunar",
      "a": "Tricuspid (right atrium→right ventricle, 3 cusps), bicuspid/mitral (left atrium→left ventricle, 2 cusps), and semilunar valves at the pulmonary artery and aorta. All prevent backflow."
    },
    {
      "q": "Trace the conducting system of the heart.",
      "hint": "SAN→AVN→His→Purkinje",
      "a": "The SA node (pacemaker, right atrium) fires → impulse spreads through the atria to the AV node → bundle of His → right and left bundle branches → Purkinje fibres → ventricles contract."
    },
    {
      "q": "Describe the phases of the cardiac cycle.",
      "hint": "0.1 / 0.3 / 0.4 s",
      "a": "At 72 bpm one cycle lasts ~0.8 s: atrial systole (0.1 s), ventricular systole (0.3 s) and joint diastole (0.4 s) during which all chambers relax and fill."
    },
    {
      "q": "What produces the two heart sounds?",
      "hint": "AV close / SL close",
      "a": "\"Lub\" (S1) is the closure of the atrioventricular valves at the start of ventricular systole; \"dub\" (S2) is the closure of the semilunar valves at the end of ventricular systole."
    },
    {
      "q": "Define stroke volume and cardiac output with values.",
      "hint": "70 mL × 72",
      "a": "Stroke volume is the blood ejected per beat (~70 mL). Cardiac output = stroke volume × heart rate ≈ 70 mL × 72 ≈ 5000 mL (5 L) per minute."
    },
    {
      "q": "Explain the P, QRS and T waves of an ECG.",
      "hint": "Atria / ventricle / relax",
      "a": "P wave = atrial depolarisation (atria contract); QRS complex = ventricular depolarisation (ventricles contract); T wave = ventricular repolarisation (ventricles relax). Heart rate can be read from QRS spacing."
    },
    {
      "q": "Describe double circulation in humans.",
      "hint": "Pulmonary + systemic",
      "a": "Pulmonary circuit: deoxygenated blood goes right atrium → right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium. Systemic circuit: oxygenated blood goes left atrium → left ventricle → aorta → body → vena cava → right atrium."
    },
    {
      "q": "Differentiate arteries, veins and capillaries.",
      "hint": "Wall, direction, valves",
      "a": "Arteries: thick, muscular, elastic walls, carry blood away from the heart, no valves, high pressure. Veins: thinner walls, carry blood to the heart, have valves. Capillaries: one-cell-thick walls, site of exchange."
    },
    {
      "q": "How is heart activity regulated?",
      "hint": "Medulla, ANS, adrenaline",
      "a": "The cardiac centre in the medulla oblongata acts through the autonomic system: sympathetic nerves and adrenal adrenaline raise rate and force; the parasympathetic vagus nerve lowers heart rate."
    },
    {
      "q": "Why is the left ventricle wall thicker than the right?",
      "hint": "Systemic vs pulmonary",
      "a": "The left ventricle pumps oxygenated blood through the high-resistance systemic circuit to the whole body, needing greater force; the right ventricle only pumps to the nearby low-pressure lungs."
    },
    {
      "q": "Why is the pulmonary artery unusual among arteries?",
      "hint": "Carries deoxygenated",
      "a": "It is the only artery that carries deoxygenated blood (from the right ventricle to the lungs); conversely the pulmonary vein is the only vein carrying oxygenated blood."
    },
    {
      "q": "What is the role of haemoglobin?",
      "hint": "O₂ carrier",
      "a": "Haemoglobin is the iron-containing red pigment of RBCs that binds and transports oxygen (as oxyhaemoglobin) and helps carry carbon dioxide and buffer the blood."
    },
    {
      "q": "List functions of blood.",
      "hint": "Transport, defence, clot, regulate",
      "a": "Transport of O₂, CO₂, nutrients, hormones and wastes; defence (WBCs, antibodies); clotting (platelets); regulation of pH and body temperature."
    },
    {
      "q": "Why must blood groups be matched before transfusion?",
      "hint": "Agglutination",
      "a": "If donor RBC antigens meet matching recipient antibodies, the RBCs agglutinate (clump) and haemolyse, which can be fatal; matching prevents this incompatibility reaction."
    },
    {
      "q": "What is the function of the SA node and why is the heart myogenic?",
      "hint": "Self-generating beat",
      "a": "The SA node spontaneously generates electrical impulses that set the heartbeat rhythm; because the beat originates within the heart muscle itself (not from nerves), the heart is described as myogenic."
    },
    {
      "q": "Differentiate systole and diastole.",
      "hint": "Contract vs relax",
      "a": "Systole is contraction of heart muscle (atrial or ventricular) that ejects blood; diastole is relaxation during which the chambers fill with blood."
    },
    {
      "q": "Explain coronary artery disease (atherosclerosis).",
      "hint": "Plaque in coronary arteries",
      "a": "Deposits of cholesterol, fats and calcium (plaque) narrow and harden the coronary arteries, reducing blood flow to the heart muscle and causing chest pain (angina) or heart attack."
    },
    {
      "q": "What is the function of lymph nodes?",
      "hint": "Filter + immunity",
      "a": "Lymph nodes filter the lymph, trapping bacteria and other antigens, and house lymphocytes that mount immune responses."
    },
    {
      "q": "Why does an Rh-incompatibility problem usually not affect the first pregnancy?",
      "hint": "Sensitised at first birth",
      "a": "The mother is first exposed to Rh⁺ foetal blood mainly during delivery, so antibodies form afterward; these endanger only a subsequent Rh⁺ foetus."
    }
  ],
  "mcqs": [
    {
      "q": "Blood is a type of:",
      "o": [
        "Epithelial tissue",
        "Connective tissue",
        "Muscular tissue",
        "Nervous tissue"
      ],
      "c": 1,
      "e": "Blood is a fluid connective tissue with plasma as matrix."
    },
    {
      "q": "Percentage of plasma in blood is about:",
      "o": [
        "25%",
        "45%",
        "55%",
        "75%"
      ],
      "c": 2,
      "e": "Plasma forms roughly 55% of blood; formed elements ~45%."
    },
    {
      "q": "The plasma protein responsible for clotting is:",
      "o": [
        "Albumin",
        "Globulin",
        "Fibrinogen",
        "Haemoglobin"
      ],
      "c": 2,
      "e": "Fibrinogen is converted to fibrin during clotting."
    },
    {
      "q": "Serum is plasma without:",
      "o": [
        "Water",
        "Clotting factors",
        "Glucose",
        "Ions"
      ],
      "c": 1,
      "e": "Serum = plasma minus clotting factors (fibrinogen)."
    },
    {
      "q": "Normal RBC count per mm³ is about:",
      "o": [
        "5000–8000",
        "1.5–3.5 lakh",
        "5–5.5 million",
        "120"
      ],
      "c": 2,
      "e": "RBCs number 5–5.5 million/mm³."
    },
    {
      "q": "Lifespan of a human RBC is:",
      "o": [
        "10 days",
        "120 days",
        "1 year",
        "24 hours"
      ],
      "c": 1,
      "e": "RBCs live about 120 days."
    },
    {
      "q": "RBCs are destroyed in the:",
      "o": [
        "Liver",
        "Spleen",
        "Kidney",
        "Heart"
      ],
      "c": 1,
      "e": "The spleen is the graveyard of RBCs."
    },
    {
      "q": "Mammalian RBCs are unique in lacking a:",
      "o": [
        "Membrane",
        "Nucleus",
        "Cytoplasm",
        "Haemoglobin"
      ],
      "c": 1,
      "e": "Mature mammalian RBCs are enucleate and biconcave."
    },
    {
      "q": "The most abundant WBC is the:",
      "o": [
        "Lymphocyte",
        "Monocyte",
        "Neutrophil",
        "Basophil"
      ],
      "c": 2,
      "e": "Neutrophils form 60–65% of WBCs."
    },
    {
      "q": "The rarest WBC is the:",
      "o": [
        "Eosinophil",
        "Basophil",
        "Neutrophil",
        "Monocyte"
      ],
      "c": 1,
      "e": "Basophils are only 0.5–1% of WBCs."
    },
    {
      "q": "The largest WBC is the:",
      "o": [
        "Lymphocyte",
        "Monocyte",
        "Neutrophil",
        "Eosinophil"
      ],
      "c": 1,
      "e": "Monocytes are the largest leucocytes."
    },
    {
      "q": "Which WBCs are agranulocytes?",
      "o": [
        "Neutrophil & eosinophil",
        "Lymphocyte & monocyte",
        "Basophil & eosinophil",
        "Neutrophil & basophil"
      ],
      "c": 1,
      "e": "Lymphocytes and monocytes lack cytoplasmic granules."
    },
    {
      "q": "Normal platelet count per mm³ is:",
      "o": [
        "5 million",
        "6000–8000",
        "1.5–3.5 lakh",
        "120"
      ],
      "c": 2,
      "e": "Platelets number 1.5–3.5 lakh/mm³."
    },
    {
      "q": "Histamine and heparin are released by:",
      "o": [
        "Neutrophils",
        "Basophils",
        "Monocytes",
        "RBCs"
      ],
      "c": 1,
      "e": "Basophils release histamine and heparin."
    },
    {
      "q": "Blood group AB has antibodies:",
      "o": [
        "Anti-A only",
        "Anti-B only",
        "Both anti-A & anti-B",
        "None"
      ],
      "c": 3,
      "e": "AB has both antigens and no antibodies — universal recipient."
    },
    {
      "q": "The universal donor blood group is:",
      "o": [
        "A",
        "B",
        "AB",
        "O"
      ],
      "c": 3,
      "e": "O lacks A and B antigens, so it can donate to all."
    },
    {
      "q": "Antigen present on RBCs of group A is:",
      "o": [
        "A",
        "B",
        "Both",
        "None"
      ],
      "c": 0,
      "e": "Group A carries antigen A and anti-B antibody."
    },
    {
      "q": "Erythroblastosis fetalis arises from incompatibility of:",
      "o": [
        "ABO",
        "Rh factor",
        "MN groups",
        "HLA"
      ],
      "c": 1,
      "e": "It is due to Rh incompatibility between mother and foetus."
    },
    {
      "q": "The ion essential for blood clotting is:",
      "o": [
        "Na⁺",
        "K⁺",
        "Ca²⁺",
        "Cl⁻"
      ],
      "c": 2,
      "e": "Calcium ions are required at several clotting steps."
    },
    {
      "q": "Fibrinogen is converted into fibrin by:",
      "o": [
        "Prothrombin",
        "Thrombin",
        "Heparin",
        "Thromboplastin"
      ],
      "c": 1,
      "e": "Thrombin acts on fibrinogen to form fibrin."
    },
    {
      "q": "A natural anticoagulant present in blood is:",
      "o": [
        "Fibrin",
        "Thrombin",
        "Heparin",
        "Prothrombin"
      ],
      "c": 2,
      "e": "Heparin prevents intravascular clotting."
    },
    {
      "q": "Vitamin required for prothrombin synthesis is:",
      "o": [
        "Vitamin A",
        "Vitamin C",
        "Vitamin D",
        "Vitamin K"
      ],
      "c": 3,
      "e": "Vitamin K is needed for clotting factor synthesis."
    },
    {
      "q": "Lymph differs from blood in lacking:",
      "o": [
        "WBCs",
        "RBCs",
        "Plasma",
        "Proteins"
      ],
      "c": 1,
      "e": "Lymph has no RBCs."
    },
    {
      "q": "Fats absorbed from the intestine are carried by:",
      "o": [
        "Blood plasma",
        "Lymph (lacteals)",
        "RBCs",
        "Platelets"
      ],
      "c": 1,
      "e": "Lacteals of the lymphatic system absorb fats."
    },
    {
      "q": "Open circulation is found in:",
      "o": [
        "Annelids",
        "Vertebrates",
        "Arthropods",
        "Fishes"
      ],
      "c": 2,
      "e": "Arthropods and molluscs have open circulation."
    },
    {
      "q": "Single circulation occurs in:",
      "o": [
        "Fishes",
        "Birds",
        "Mammals",
        "Reptiles"
      ],
      "c": 0,
      "e": "Fishes have single circulation with a 2-chambered heart."
    },
    {
      "q": "A complete double circulation is seen in:",
      "o": [
        "Amphibians",
        "Reptiles",
        "Birds and mammals",
        "Fishes"
      ],
      "c": 2,
      "e": "Birds and mammals have 4-chambered hearts and complete double circulation."
    },
    {
      "q": "The human heart has how many chambers?",
      "o": [
        "Two",
        "Three",
        "Four",
        "Five"
      ],
      "c": 2,
      "e": "Two atria and two ventricles."
    },
    {
      "q": "The thickest chamber wall belongs to the:",
      "o": [
        "Right atrium",
        "Left atrium",
        "Right ventricle",
        "Left ventricle"
      ],
      "c": 3,
      "e": "The left ventricle pumps blood to the whole body."
    },
    {
      "q": "The heart is covered by the:",
      "o": [
        "Peritoneum",
        "Pericardium",
        "Pleura",
        "Meninges"
      ],
      "c": 1,
      "e": "A double-walled pericardium with fluid surrounds the heart."
    },
    {
      "q": "The valve between the right atrium and right ventricle is:",
      "o": [
        "Bicuspid",
        "Tricuspid",
        "Aortic",
        "Pulmonary"
      ],
      "c": 1,
      "e": "The tricuspid valve has three cusps."
    },
    {
      "q": "The bicuspid (mitral) valve lies between the:",
      "o": [
        "Right atrium & ventricle",
        "Left atrium & ventricle",
        "Ventricle & aorta",
        "Atria"
      ],
      "c": 1,
      "e": "The bicuspid valve guards the left atrioventricular opening."
    },
    {
      "q": "The pacemaker of the heart is the:",
      "o": [
        "AV node",
        "SA node",
        "Bundle of His",
        "Purkinje fibres"
      ],
      "c": 1,
      "e": "The SA node initiates each heartbeat."
    },
    {
      "q": "Correct sequence of impulse conduction is:",
      "o": [
        "AVN→SAN→His→Purkinje",
        "SAN→AVN→His→Purkinje",
        "His→SAN→AVN→Purkinje",
        "Purkinje→His→AVN→SAN"
      ],
      "c": 1,
      "e": "SA node → AV node → bundle of His → Purkinje fibres."
    },
    {
      "q": "One cardiac cycle at 72 bpm lasts about:",
      "o": [
        "0.4 s",
        "0.8 s",
        "1.2 s",
        "2 s"
      ],
      "c": 1,
      "e": "At 72 beats/min each cycle is ~0.8 seconds."
    },
    {
      "q": "The first heart sound \"lub\" is due to closure of:",
      "o": [
        "Semilunar valves",
        "AV valves",
        "Aorta",
        "Pulmonary vein"
      ],
      "c": 1,
      "e": "Lub = atrioventricular valves closing."
    },
    {
      "q": "Cardiac output of a healthy human is about:",
      "o": [
        "1 L/min",
        "5 L/min",
        "15 L/min",
        "70 mL/min"
      ],
      "c": 1,
      "e": "≈ stroke volume (70 mL) × heart rate (72) ≈ 5 L/min."
    },
    {
      "q": "Stroke volume is approximately:",
      "o": [
        "7 mL",
        "70 mL",
        "700 mL",
        "7 L"
      ],
      "c": 1,
      "e": "About 70 mL of blood is ejected per beat."
    },
    {
      "q": "The QRS complex of an ECG represents:",
      "o": [
        "Atrial depolarisation",
        "Ventricular depolarisation",
        "Ventricular repolarisation",
        "Atrial repolarisation"
      ],
      "c": 1,
      "e": "QRS = ventricular depolarisation (contraction)."
    },
    {
      "q": "The T wave of an ECG represents:",
      "o": [
        "Atrial contraction",
        "Ventricular contraction",
        "Ventricular repolarisation",
        "SA node firing"
      ],
      "c": 2,
      "e": "The T wave is ventricular repolarisation."
    },
    {
      "q": "The P wave corresponds to:",
      "o": [
        "Atrial depolarisation",
        "Ventricular depolarisation",
        "Repolarisation",
        "Heart sound"
      ],
      "c": 0,
      "e": "The P wave marks atrial depolarisation."
    },
    {
      "q": "The only artery carrying deoxygenated blood is the:",
      "o": [
        "Aorta",
        "Pulmonary artery",
        "Carotid artery",
        "Renal artery"
      ],
      "c": 1,
      "e": "The pulmonary artery takes deoxygenated blood to the lungs."
    },
    {
      "q": "The only vein carrying oxygenated blood is the:",
      "o": [
        "Vena cava",
        "Pulmonary vein",
        "Hepatic vein",
        "Renal vein"
      ],
      "c": 1,
      "e": "The pulmonary vein returns oxygenated blood to the heart."
    },
    {
      "q": "Vessels carrying blood away from the heart are:",
      "o": [
        "Veins",
        "Arteries",
        "Capillaries",
        "Lymphatics"
      ],
      "c": 1,
      "e": "Arteries carry blood away from the heart."
    },
    {
      "q": "Valves are present in:",
      "o": [
        "Arteries",
        "Veins",
        "Capillaries",
        "All vessels"
      ],
      "c": 1,
      "e": "Veins have valves to prevent backflow against gravity."
    },
    {
      "q": "The cardiac centre is located in the:",
      "o": [
        "Cerebrum",
        "Cerebellum",
        "Medulla oblongata",
        "Hypothalamus"
      ],
      "c": 2,
      "e": "The medulla oblongata houses the cardiac centre."
    },
    {
      "q": "Heart rate is decreased by the:",
      "o": [
        "Sympathetic nerves",
        "Vagus (parasympathetic) nerve",
        "Adrenaline",
        "Thyroxine"
      ],
      "c": 1,
      "e": "The parasympathetic vagus nerve slows the heart."
    },
    {
      "q": "Persistent blood pressure above 140/90 mmHg indicates:",
      "o": [
        "Anaemia",
        "Hypertension",
        "Hypotension",
        "Leukaemia"
      ],
      "c": 1,
      "e": "This defines hypertension (high blood pressure)."
    },
    {
      "q": "Narrowing of coronary arteries by plaque is called:",
      "o": [
        "Angina",
        "Atherosclerosis",
        "Anaemia",
        "Embolism"
      ],
      "c": 1,
      "e": "Atherosclerosis underlies coronary artery disease."
    },
    {
      "q": "The exchange of materials between blood and tissues occurs across:",
      "o": [
        "Arteries",
        "Veins",
        "Capillaries",
        "Aorta"
      ],
      "c": 2,
      "e": "Thin one-cell-thick capillary walls allow exchange."
    }
  ],
  "match": [
    {
      "term": "Plasma",
      "def": "Liquid matrix of blood (~55%)"
    },
    {
      "term": "Fibrinogen",
      "def": "Plasma protein for clotting"
    },
    {
      "term": "Albumin",
      "def": "Maintains osmotic balance"
    },
    {
      "term": "Serum",
      "def": "Plasma minus clotting factors"
    },
    {
      "term": "Erythrocyte",
      "def": "RBC — carries haemoglobin"
    },
    {
      "term": "Spleen",
      "def": "Graveyard of RBCs"
    },
    {
      "term": "Neutrophil",
      "def": "Most abundant WBC (phagocyte)"
    },
    {
      "term": "Basophil",
      "def": "Releases histamine & heparin"
    },
    {
      "term": "Monocyte",
      "def": "Largest WBC"
    },
    {
      "term": "Thrombocyte",
      "def": "Platelet — blood clotting"
    },
    {
      "term": "O group",
      "def": "Universal donor"
    },
    {
      "term": "AB group",
      "def": "Universal recipient"
    },
    {
      "term": "Heparin",
      "def": "Natural anticoagulant"
    },
    {
      "term": "SA node",
      "def": "Pacemaker of the heart"
    },
    {
      "term": "Tricuspid valve",
      "def": "Right atrioventricular valve"
    },
    {
      "term": "QRS complex",
      "def": "Ventricular depolarisation"
    },
    {
      "term": "Pulmonary artery",
      "def": "Artery with deoxygenated blood"
    },
    {
      "term": "Medulla oblongata",
      "def": "Site of cardiac centre"
    }
  ],
  "pathways": [
    {
      "title": "Blood clotting cascade",
      "prompt": "Clotting is an enzyme cascade ending in an insoluble fibrin mesh that seals the wound.",
      "steps": [
        "Injury exposes tissue; platelets adhere",
        "Platelets release factors + thromboplastin",
        "Prothrombin converted to thrombin (Ca²⁺)",
        "Thrombin converts fibrinogen to fibrin",
        "Fibrin mesh traps cells forming the clot"
      ]
    },
    {
      "title": "Conduction of the heartbeat",
      "prompt": "The myogenic impulse travels SAN → AVN → His → Purkinje, coordinating atrial then ventricular contraction.",
      "steps": [
        "SA node generates the impulse",
        "Atria depolarise and contract",
        "Impulse reaches the AV node",
        "Passes through the bundle of His & branches",
        "Purkinje fibres make ventricles contract"
      ]
    },
    {
      "title": "Pulmonary circulation (deoxygenated → oxygenated)",
      "prompt": "The pulmonary circuit sends blood to the lungs to pick up oxygen and release CO₂.",
      "steps": [
        "Right atrium receives deoxygenated blood",
        "Right ventricle",
        "Pulmonary artery to the lungs",
        "Gas exchange — blood is oxygenated",
        "Pulmonary vein to the left atrium"
      ]
    },
    {
      "title": "Systemic circulation (oxygenated → body)",
      "prompt": "The systemic circuit delivers oxygenated blood to the body and returns deoxygenated blood to the heart.",
      "steps": [
        "Left atrium receives oxygenated blood",
        "Left ventricle",
        "Aorta",
        "Body tissues (exchange)",
        "Vena cava returns blood to the right atrium"
      ]
    }
  ]
};
