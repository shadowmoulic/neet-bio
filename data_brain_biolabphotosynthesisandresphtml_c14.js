/* Extracted from biolab photosynthesis and resp.html */
DATA.chapters['brain_biolabphotosynthesisandresphtml_c14'] = {
  "id": "brain_biolabphotosynthesisandresphtml_c14",
  "num": "14",
  "title": "Respiration in Plants",
  "subtitle": "The step-wise oxidative breakdown of food (mainly glucose) inside cells, trapping released energy as ATP — the energy currency of the cell.",
  "color": "#f5a524",
  "colorD": "#3d2a08",
  "glyph": "🦠",
  "notes": [
    {
      "id": "140",
      "heading": "Introduction",
      "html": "\n    <p>All energy for life comes from <b>oxidation of food</b>. <span class=\"term\">Respiration</span> = breaking C–C bonds of complex compounds by oxidation, releasing energy trapped as <b>ATP</b> — the energy currency of the cell.</p>\n    <p>Compounds oxidised = <b>respiratory substrates</b> (usually carbohydrates, sometimes fats, proteins, organic acids). Energy is released in small, enzyme-controlled steps. Photosynthesis happens in chloroplasts; respiration in the <b>cytoplasm and mitochondria</b>.</p>"
    },
    {
      "id": "141",
      "heading": "Do Plants Breathe?",
      "html": "\n    <p>Plants need O₂ and release CO₂ but have <b>no specialised organs</b> — they use <b>stomata and lenticels</b> for diffusion. Reasons they manage without lungs:</p>\n    <ul><li>Each part handles its own gas exchange; little transport between parts.</li>\n        <li>Gas-exchange demand is low (roots/stems/leaves respire slowly).</li>\n        <li>Diffusion distances are short; living cells lie near the surface.</li>\n        <li>Loose <b>parenchyma</b> packing creates connected air spaces.</li></ul>\n    <div class=\"formula\">C₆H₁₂O₆ + 6 O₂  →  6 CO₂ + 6 H₂O + energy (mostly heat)</div>\n    <p>Cells avoid releasing all energy as heat by oxidising glucose in many small steps coupled to ATP synthesis. Some organisms are <b>facultative</b> or <b>obligate anaerobes</b>; all retain machinery for glycolysis.</p>"
    },
    {
      "id": "142",
      "heading": "Glycolysis",
      "html": "\n    <p><b>Glycos</b> (sugar) + <b>lysis</b> (splitting). Scheme by <b>Embden, Meyerhof & Parnas (EMP pathway)</b>. Occurs in the <b>cytoplasm</b> of all cells; in anaerobes it is the only respiration.</p>\n    <p>Glucose (from sucrose via <b>invertase</b>, or storage carbs) is partially oxidised to <b>2 pyruvic acid</b> through 10 enzyme-controlled steps.</p>\n    <ul>\n      <li><b>ATP used</b> at 2 steps: glucose → glucose-6-P; fructose-6-P → fructose-1,6-bisphosphate.</li>\n      <li><b>NADH+H⁺ formed</b> when PGAL → BPGA.</li>\n      <li><b>ATP made</b> at: BPGA → PGA; PEP → pyruvate.</li>\n      <li><b>Net gain: 2 ATP + 2 NADH</b> per glucose.</li>\n    </ul>\n    <div class=\"diagram\"><div class=\"flow\"><span class=\"fnode hl\">Glucose</span><span class=\"farrow\">→</span><span class=\"fnode\">G-6-P</span><span class=\"farrow\">→</span><span class=\"fnode\">F-6-P</span><span class=\"farrow\">→</span><span class=\"fnode\">F-1,6-BP</span><span class=\"farrow\">→</span><span class=\"fnode\">PGAL</span><span class=\"farrow\">→</span><span class=\"fnode\">BPGA</span><span class=\"farrow\">→</span><span class=\"fnode\">PGA</span><span class=\"farrow\">→</span><span class=\"fnode\">PEP</span><span class=\"farrow\">→</span><span class=\"fnode hl\">Pyruvate</span></div><div class=\"cap\">Glycolysis (EMP pathway).</div></div>"
    },
    {
      "id": "143",
      "heading": "Fermentation",
      "html": "\n    <p>Anaerobic, incomplete oxidation of pyruvate:</p>\n    <table class=\"cmp\"><tr><th></th><th>Alcoholic</th><th>Lactic acid</th></tr>\n      <tr><td>Product</td><td>CO₂ + ethanol</td><td>Lactic acid</td></tr>\n      <tr><td>Enzymes</td><td>Pyruvic acid decarboxylase, alcohol dehydrogenase</td><td>Lactate dehydrogenase</td></tr>\n      <tr><td>Where</td><td>Yeast</td><td>Some bacteria; muscle in low O₂</td></tr></table>\n    <p>NADH+H⁺ is reoxidised to NAD⁺. Less than <b>7%</b> of glucose's energy is released; net only <b>2 ATP</b>; products are hazardous. Yeast die at ~<b>13% alcohol</b>.</p>"
    },
    {
      "id": "144",
      "heading": "Aerobic Respiration",
      "html": "\n    <p>In mitochondria, with O₂. Two crucial events: <b>(1)</b> complete oxidation of pyruvate (matrix) and <b>(2)</b> passing electrons to O₂ with ATP synthesis (inner membrane).</p>\n    <p><b>Link reaction:</b> pyruvate → acetyl CoA by <b>pyruvate dehydrogenase</b> (needs NAD⁺ & CoA):</p>\n    <div class=\"formula\">Pyruvate + CoA + NAD⁺ → Acetyl CoA + CO₂ + NADH + H⁺</div>\n    <p><b>14.4.1 Krebs / TCA cycle</b> (Hans Krebs), in the matrix:</p>\n    <div class=\"diagram\"><div class=\"flow\"><span class=\"fnode hl\">Acetyl CoA + OAA</span><span class=\"farrow\">→</span><span class=\"fnode\">Citric acid (6C)</span><span class=\"farrow\">→</span><span class=\"fnode\">α-KG (5C)</span><span class=\"farrow\">→</span><span class=\"fnode\">Succinyl-CoA</span><span class=\"farrow\">→</span><span class=\"fnode\">Succinic (4C)</span><span class=\"farrow\">→</span><span class=\"fnode\">Malic (4C)</span><span class=\"farrow\">→</span><span class=\"fnode hl\">OAA (4C)</span></div><div class=\"cap\">Per turn: 3 NADH, 1 FADH₂, 1 GTP→ATP, 2 CO₂.</div></div>\n    <p>After glycolysis + link + Krebs (per glucose): <b>8 NADH, 2 FADH₂, 2 ATP</b> (from TCA), plus 2 NADH & 2 ATP net from glycolysis.</p>\n    <p><b>14.4.2 ETS & oxidative phosphorylation</b> (inner membrane):</p>\n    <div class=\"diagram\"><div class=\"flow\"><span class=\"fnode hl\">NADH→Complex I</span><span class=\"farrow\">→</span><span class=\"fnode\">Ubiquinone (+FADH₂/II)</span><span class=\"farrow\">→</span><span class=\"fnode\">Complex III</span><span class=\"farrow\">→</span><span class=\"fnode\">Cyt c</span><span class=\"farrow\">→</span><span class=\"fnode\">Complex IV</span><span class=\"farrow\">→</span><span class=\"fnode hl\">O₂ → H₂O</span></div><div class=\"cap\">Electrons flow to O₂, the final acceptor.</div></div>\n    <ul><li><b>1 NADH → 3 ATP; 1 FADH₂ → 2 ATP.</b></li>\n        <li>O₂ is the <b>terminal acceptor</b>, reduced to water.</li>\n        <li><b>Oxidative phosphorylation</b> uses redox energy (not light) to build the proton gradient.</li>\n        <li><b>ATP synthase (Complex V):</b> F1 = ATP-making headpiece; F0 = proton channel. <b>2 H⁺ per ATP</b> flow from intermembrane space to matrix.</li></ul>"
    },
    {
      "id": "145",
      "heading": "The Respiratory Balance Sheet",
      "html": "\n    <p>Net <b>38 ATP</b> per glucose (aerobic) — a theoretical figure under assumptions:</p>\n    <ul><li>A sequential, orderly pathway functions step after step.</li>\n        <li>Glycolytic NADH enters mitochondria for oxidative phosphorylation.</li>\n        <li>No intermediates are withdrawn for other syntheses.</li>\n        <li>Only glucose is respired (no alternative substrates).</li></ul>\n    <table class=\"cmp\"><tr><th></th><th>Fermentation</th><th>Aerobic respiration</th></tr>\n      <tr><td>Breakdown</td><td>Partial</td><td>Complete (to CO₂ + H₂O)</td></tr>\n      <tr><td>Net ATP / glucose</td><td>2</td><td>38</td></tr>\n      <tr><td>NADH reoxidation</td><td>Slow</td><td>Vigorous</td></tr></table>"
    },
    {
      "id": "146",
      "heading": "Amphibolic Pathway",
      "html": "\n    <p>Glucose is the favoured substrate. Others enter at points along the pathway:</p>\n    <ul><li><b>Fats</b> → glycerol (→ PGAL) + fatty acids (→ acetyl CoA).</li>\n        <li><b>Proteins</b> → amino acids (after deamination) → enter at pyruvate, acetyl CoA, or within Krebs.</li></ul>\n    <p>Because the same intermediates are used in both <b>breakdown (catabolism)</b> and <b>synthesis (anabolism)</b>, the respiratory pathway is <b>amphibolic</b>, not merely catabolic.</p>"
    },
    {
      "id": "147",
      "heading": "Respiratory Quotient",
      "html": "\n    <div class=\"formula\">RQ = volume of CO₂ evolved / volume of O₂ consumed</div>\n    <table class=\"cmp\"><tr><th>Substrate</th><th>RQ</th></tr>\n      <tr><td>Carbohydrates</td><td>1.0</td></tr>\n      <tr><td>Proteins</td><td>≈ 0.9</td></tr>\n      <tr><td>Fats</td><td>&lt; 1 (≈ 0.7)</td></tr></table>\n    <p>RQ depends on the substrate. In living organisms substrates are usually mixed — pure fats or proteins are never used alone.</p>"
    }
  ],
  "mnemonics": [
    {
      "title": "RQ values",
      "device": "<b>C</b>arb 1, <b>P</b>ro 0.9, <b>F</b>at 0.7",
      "expand": [
        {
          "L": "C",
          "t": "Carbohydrates (RQ = 1.0)"
        },
        {
          "L": "P",
          "t": "Proteins (RQ ≈ 0.9)"
        },
        {
          "L": "F",
          "t": "Fats/lipids (RQ ≈ 0.7)"
        }
      ]
    }
  ],
  "flashcards": [
    {
      "front": "Define cellular respiration",
      "back": "The breaking of C–C bonds of complex compounds through oxidation within cells, releasing energy that is trapped as ATP."
    },
    {
      "front": "What are respiratory substrates? Most common one?",
      "back": "Compounds oxidised during respiration. Usually carbohydrates (glucose), but proteins, fats and organic acids can also be used."
    },
    {
      "front": "Why is ATP the 'energy currency'?",
      "back": "Energy from oxidation isn't used directly; it is used to make ATP, which is broken down wherever/whenever energy is needed."
    },
    {
      "front": "How do plants exchange gases without lungs?",
      "back": "Through stomata and lenticels (diffusion). Each part handles its own needs, demand is low, diffusion distances are short, and loose parenchyma packing creates air spaces."
    },
    {
      "front": "Combustion (complete oxidation) equation of glucose",
      "back": "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (mostly as heat). Cells instead oxidise glucose in many small steps to trap energy as ATP."
    },
    {
      "front": "Facultative vs obligate anaerobes",
      "back": "Facultative anaerobes can live with or without O₂; obligate anaerobes require anaerobic conditions. All organisms can partially oxidise glucose without O₂ (glycolysis)."
    },
    {
      "front": "What is glycolysis (meaning, scientists, location)?",
      "back": "'Glycos' = sugar, 'lysis' = splitting. Scheme by Embden, Meyerhof & Parnas (EMP pathway). Occurs in the cytoplasm of all living cells."
    },
    {
      "front": "Net outcome of glycolysis",
      "back": "Glucose (6C) is partially oxidised to 2 molecules of pyruvic acid (3C each)."
    },
    {
      "front": "Where does the glucose for glycolysis come from in plants?",
      "back": "From sucrose (split by invertase into glucose + fructose) or from storage carbohydrates. Both glucose & fructose are phosphorylated to glucose-6-phosphate by hexokinase."
    },
    {
      "front": "At which steps is ATP USED in glycolysis?",
      "back": "Two steps: glucose → glucose-6-phosphate, and fructose-6-phosphate → fructose-1,6-bisphosphate."
    },
    {
      "front": "Where is NADH+H⁺ formed in glycolysis?",
      "back": "When PGAL (3-phosphoglyceraldehyde) is oxidised to BPGA (1,3-bisphosphoglycerate)."
    },
    {
      "front": "At which steps is ATP MADE in glycolysis?",
      "back": "BPGA → 3-PGA, and PEP → pyruvic acid."
    },
    {
      "front": "Net ATP gain from glycolysis",
      "back": "2 ATP (4 produced minus 2 consumed) plus 2 NADH per glucose."
    },
    {
      "front": "Three fates of pyruvate",
      "back": "Lactic acid fermentation, alcoholic fermentation, or aerobic respiration (Krebs cycle)."
    },
    {
      "front": "Alcoholic fermentation (product, enzymes)",
      "back": "Pyruvic acid → CO₂ + ethanol, by pyruvic acid decarboxylase and alcohol dehydrogenase (anaerobic, e.g. yeast)."
    },
    {
      "front": "Lactic acid fermentation (product, enzyme)",
      "back": "Pyruvic acid → lactic acid by lactate dehydrogenase (e.g. some bacteria; in muscle during low O₂). NADH+H⁺ is reoxidised to NAD⁺."
    },
    {
      "front": "Key limits of fermentation",
      "back": "Less than 7% of glucose's energy is released; only a net 2 ATP per glucose; products (acid/alcohol) are hazardous. Yeast die when alcohol reaches ~13%."
    },
    {
      "front": "Two crucial events of aerobic respiration",
      "back": "(1) Complete oxidation of pyruvate by stepwise removal of all H atoms (in the matrix). (2) Passing electrons to O₂ with ATP synthesis (on the inner membrane)."
    },
    {
      "front": "Conversion of pyruvate to acetyl CoA",
      "back": "In the matrix, pyruvate undergoes oxidative decarboxylation by pyruvate dehydrogenase (needs NAD⁺ & Coenzyme A): Pyruvate + CoA + NAD⁺ → Acetyl CoA + CO₂ + NADH+H⁺. (2 NADH per glucose here.)"
    },
    {
      "front": "First reaction of the Krebs / TCA cycle",
      "back": "Acetyl CoA (2C) + Oxaloacetic acid (OAA, 4C) + water → Citric acid (6C), catalysed by citrate synthase; CoA is released."
    },
    {
      "front": "Products per turn of the Krebs cycle",
      "back": "3 NADH+H⁺, 1 FADH₂, and 1 GTP (substrate-level phosphorylation → 1 ATP); 2 CO₂ released."
    },
    {
      "front": "Total reducing power after glycolysis + link + Krebs (per glucose)",
      "back": "8 NADH+H⁺, 2 FADH₂, and 2 ATP from the TCA cycle (plus the 2 NADH & 2 ATP net from glycolysis)."
    },
    {
      "front": "What is the Electron Transport System (ETS) and where is it?",
      "back": "A chain of carriers (Complexes I–IV) on the inner mitochondrial membrane that passes electrons from NADH/FADH₂ to O₂, forming water."
    },
    {
      "front": "Order of ETS complexes",
      "back": "Complex I (NADH dehydrogenase) → ubiquinone; Complex II (FADH₂) → ubiquinone; ubiquinol → Complex III (cyt bc1) → cytochrome c → Complex IV (cyt c oxidase, cyt a/a3 + 2 Cu) → O₂."
    },
    {
      "front": "ATP yield from one NADH vs one FADH₂",
      "back": "1 NADH → 3 ATP; 1 FADH₂ → 2 ATP."
    },
    {
      "front": "Role of oxygen in respiration",
      "back": "O₂ is the final/terminal acceptor of electrons (and hydrogen); it is reduced to water. It drives the whole process by removing H from the system."
    },
    {
      "front": "What is oxidative phosphorylation?",
      "back": "ATP synthesis driven by the proton gradient created using the energy of oxidation-reduction in the ETS (vs photophosphorylation, which uses light energy)."
    },
    {
      "front": "ATP synthase (Complex V): F1 and F0",
      "back": "F1 = peripheral headpiece, site of ATP synthesis from ADP + Pi. F0 = integral membrane channel for protons. For each ATP made, 2H⁺ pass through F0 from the intermembrane space into the matrix."
    },
    {
      "front": "Net ATP per glucose in aerobic respiration & assumptions",
      "back": "Net gain of 38 ATP. Assumes: a sequential orderly pathway; glycolytic NADH enters mitochondria for oxidative phosphorylation; no intermediates withdrawn; only glucose is respired."
    },
    {
      "front": "Fermentation vs aerobic respiration (3 differences)",
      "back": "Fermentation: partial breakdown, only 2 ATP/glucose, NADH reoxidised slowly. Aerobic: complete breakdown to CO₂ + H₂O, far more ATP, NADH reoxidised vigorously."
    },
    {
      "front": "Why is the respiratory pathway 'amphibolic'?",
      "back": "It is involved in both breakdown (catabolism) and synthesis (anabolism) of fats and proteins — intermediates are both withdrawn for, and produced by, biosynthesis."
    },
    {
      "front": "Where do fats and proteins enter respiration?",
      "back": "Fats → glycerol (→ PGAL) + fatty acids (→ acetyl CoA). Proteins → amino acids (after deamination) → enter at pyruvate, acetyl CoA, or within the Krebs cycle."
    },
    {
      "front": "Define Respiratory Quotient (RQ)",
      "back": "RQ = volume of CO₂ evolved / volume of O₂ consumed during respiration. It depends on the respiratory substrate used."
    },
    {
      "front": "RQ values for carbohydrates, fats and proteins",
      "back": "Carbohydrates RQ = 1; fats RQ < 1 (≈0.7); proteins RQ ≈ 0.9. In living organisms substrates are usually mixed."
    }
  ],
  "recall": [
    {
      "q": "Define cellular respiration",
      "hint": "Think...",
      "a": "The breaking of C–C bonds of complex compounds through oxidation within cells, releasing energy that is trapped as ATP."
    },
    {
      "q": "What are respiratory substrates? Most common one?",
      "hint": "Think...",
      "a": "Compounds oxidised during respiration. Usually carbohydrates (glucose), but proteins, fats and organic acids can also be used."
    },
    {
      "q": "Why is ATP the 'energy currency'?",
      "hint": "Think...",
      "a": "Energy from oxidation isn't used directly; it is used to make ATP, which is broken down wherever/whenever energy is needed."
    },
    {
      "q": "How do plants exchange gases without lungs?",
      "hint": "Think...",
      "a": "Through stomata and lenticels (diffusion). Each part handles its own needs, demand is low, diffusion distances are short, and loose parenchyma packing creates air spaces."
    },
    {
      "q": "Combustion (complete oxidation) equation of glucose",
      "hint": "Think...",
      "a": "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (mostly as heat). Cells instead oxidise glucose in many small steps to trap energy as ATP."
    },
    {
      "q": "Facultative vs obligate anaerobes",
      "hint": "Think...",
      "a": "Facultative anaerobes can live with or without O₂; obligate anaerobes require anaerobic conditions. All organisms can partially oxidise glucose without O₂ (glycolysis)."
    },
    {
      "q": "What is glycolysis (meaning, scientists, location)?",
      "hint": "Think...",
      "a": "'Glycos' = sugar, 'lysis' = splitting. Scheme by Embden, Meyerhof & Parnas (EMP pathway). Occurs in the cytoplasm of all living cells."
    },
    {
      "q": "Net outcome of glycolysis",
      "hint": "Think...",
      "a": "Glucose (6C) is partially oxidised to 2 molecules of pyruvic acid (3C each)."
    },
    {
      "q": "Where does the glucose for glycolysis come from in plants?",
      "hint": "Think...",
      "a": "From sucrose (split by invertase into glucose + fructose) or from storage carbohydrates. Both glucose & fructose are phosphorylated to glucose-6-phosphate by hexokinase."
    },
    {
      "q": "At which steps is ATP USED in glycolysis?",
      "hint": "Think...",
      "a": "Two steps: glucose → glucose-6-phosphate, and fructose-6-phosphate → fructose-1,6-bisphosphate."
    },
    {
      "q": "Where is NADH+H⁺ formed in glycolysis?",
      "hint": "Think...",
      "a": "When PGAL (3-phosphoglyceraldehyde) is oxidised to BPGA (1,3-bisphosphoglycerate)."
    },
    {
      "q": "At which steps is ATP MADE in glycolysis?",
      "hint": "Think...",
      "a": "BPGA → 3-PGA, and PEP → pyruvic acid."
    },
    {
      "q": "Net ATP gain from glycolysis",
      "hint": "Think...",
      "a": "2 ATP (4 produced minus 2 consumed) plus 2 NADH per glucose."
    },
    {
      "q": "Three fates of pyruvate",
      "hint": "Think...",
      "a": "Lactic acid fermentation, alcoholic fermentation, or aerobic respiration (Krebs cycle)."
    },
    {
      "q": "Alcoholic fermentation (product, enzymes)",
      "hint": "Think...",
      "a": "Pyruvic acid → CO₂ + ethanol, by pyruvic acid decarboxylase and alcohol dehydrogenase (anaerobic, e.g. yeast)."
    },
    {
      "q": "Lactic acid fermentation (product, enzyme)",
      "hint": "Think...",
      "a": "Pyruvic acid → lactic acid by lactate dehydrogenase (e.g. some bacteria; in muscle during low O₂). NADH+H⁺ is reoxidised to NAD⁺."
    },
    {
      "q": "Key limits of fermentation",
      "hint": "Think...",
      "a": "Less than 7% of glucose's energy is released; only a net 2 ATP per glucose; products (acid/alcohol) are hazardous. Yeast die when alcohol reaches ~13%."
    },
    {
      "q": "Two crucial events of aerobic respiration",
      "hint": "Think...",
      "a": "(1) Complete oxidation of pyruvate by stepwise removal of all H atoms (in the matrix). (2) Passing electrons to O₂ with ATP synthesis (on the inner membrane)."
    },
    {
      "q": "Conversion of pyruvate to acetyl CoA",
      "hint": "Think...",
      "a": "In the matrix, pyruvate undergoes oxidative decarboxylation by pyruvate dehydrogenase (needs NAD⁺ & Coenzyme A): Pyruvate + CoA + NAD⁺ → Acetyl CoA + CO₂ + NADH+H⁺. (2 NADH per glucose here.)"
    },
    {
      "q": "First reaction of the Krebs / TCA cycle",
      "hint": "Think...",
      "a": "Acetyl CoA (2C) + Oxaloacetic acid (OAA, 4C) + water → Citric acid (6C), catalysed by citrate synthase; CoA is released."
    },
    {
      "q": "Products per turn of the Krebs cycle",
      "hint": "Think...",
      "a": "3 NADH+H⁺, 1 FADH₂, and 1 GTP (substrate-level phosphorylation → 1 ATP); 2 CO₂ released."
    },
    {
      "q": "Total reducing power after glycolysis + link + Krebs (per glucose)",
      "hint": "Think...",
      "a": "8 NADH+H⁺, 2 FADH₂, and 2 ATP from the TCA cycle (plus the 2 NADH & 2 ATP net from glycolysis)."
    },
    {
      "q": "What is the Electron Transport System (ETS) and where is it?",
      "hint": "Think...",
      "a": "A chain of carriers (Complexes I–IV) on the inner mitochondrial membrane that passes electrons from NADH/FADH₂ to O₂, forming water."
    },
    {
      "q": "Order of ETS complexes",
      "hint": "Think...",
      "a": "Complex I (NADH dehydrogenase) → ubiquinone; Complex II (FADH₂) → ubiquinone; ubiquinol → Complex III (cyt bc1) → cytochrome c → Complex IV (cyt c oxidase, cyt a/a3 + 2 Cu) → O₂."
    },
    {
      "q": "ATP yield from one NADH vs one FADH₂",
      "hint": "Think...",
      "a": "1 NADH → 3 ATP; 1 FADH₂ → 2 ATP."
    },
    {
      "q": "Role of oxygen in respiration",
      "hint": "Think...",
      "a": "O₂ is the final/terminal acceptor of electrons (and hydrogen); it is reduced to water. It drives the whole process by removing H from the system."
    },
    {
      "q": "What is oxidative phosphorylation?",
      "hint": "Think...",
      "a": "ATP synthesis driven by the proton gradient created using the energy of oxidation-reduction in the ETS (vs photophosphorylation, which uses light energy)."
    },
    {
      "q": "ATP synthase (Complex V): F1 and F0",
      "hint": "Think...",
      "a": "F1 = peripheral headpiece, site of ATP synthesis from ADP + Pi. F0 = integral membrane channel for protons. For each ATP made, 2H⁺ pass through F0 from the intermembrane space into the matrix."
    },
    {
      "q": "Net ATP per glucose in aerobic respiration & assumptions",
      "hint": "Think...",
      "a": "Net gain of 38 ATP. Assumes: a sequential orderly pathway; glycolytic NADH enters mitochondria for oxidative phosphorylation; no intermediates withdrawn; only glucose is respired."
    },
    {
      "q": "Fermentation vs aerobic respiration (3 differences)",
      "hint": "Think...",
      "a": "Fermentation: partial breakdown, only 2 ATP/glucose, NADH reoxidised slowly. Aerobic: complete breakdown to CO₂ + H₂O, far more ATP, NADH reoxidised vigorously."
    },
    {
      "q": "Why is the respiratory pathway 'amphibolic'?",
      "hint": "Think...",
      "a": "It is involved in both breakdown (catabolism) and synthesis (anabolism) of fats and proteins — intermediates are both withdrawn for, and produced by, biosynthesis."
    },
    {
      "q": "Where do fats and proteins enter respiration?",
      "hint": "Think...",
      "a": "Fats → glycerol (→ PGAL) + fatty acids (→ acetyl CoA). Proteins → amino acids (after deamination) → enter at pyruvate, acetyl CoA, or within the Krebs cycle."
    },
    {
      "q": "Define Respiratory Quotient (RQ)",
      "hint": "Think...",
      "a": "RQ = volume of CO₂ evolved / volume of O₂ consumed during respiration. It depends on the respiratory substrate used."
    },
    {
      "q": "RQ values for carbohydrates, fats and proteins",
      "hint": "Think...",
      "a": "Carbohydrates RQ = 1; fats RQ < 1 (≈0.7); proteins RQ ≈ 0.9. In living organisms substrates are usually mixed."
    }
  ],
  "mcqs": [
    {
      "q": "Cellular respiration is best defined as the:",
      "o": [
        "Synthesis of glucose using light",
        "Breaking of C–C bonds by oxidation to release energy",
        "Exchange of gases through stomata",
        "Storage of starch in plastids"
      ],
      "c": 1,
      "e": "Respiration breaks C–C bonds of complex molecules by oxidation, releasing energy trapped as ATP."
    },
    {
      "q": "Plants carry out gaseous exchange mainly through:",
      "o": [
        "Lungs and gills",
        "Stomata and lenticels",
        "Xylem and phloem",
        "Root hairs only"
      ],
      "c": 1,
      "e": "Plants lack specialised respiratory organs; they use stomata and lenticels for diffusion."
    },
    {
      "q": "Glycolysis occurs in the:",
      "o": [
        "Mitochondrial matrix",
        "Cytoplasm",
        "Inner mitochondrial membrane",
        "Chloroplast"
      ],
      "c": 1,
      "e": "Glycolysis (the EMP pathway) occurs in the cytoplasm of all living cells."
    },
    {
      "q": "The EMP pathway is named after:",
      "o": [
        "Embden, Meyerhof, Parnas",
        "Engelmann, Meyer, Priestley",
        "Emerson, Mehler, Park",
        "Embden, Mendel, Pasteur"
      ],
      "c": 0,
      "e": "Gustav Embden, Otto Meyerhof and J. Parnas described the scheme of glycolysis."
    },
    {
      "q": "The end product of glycolysis is:",
      "o": [
        "Acetyl CoA",
        "Lactic acid",
        "Pyruvic acid",
        "Citric acid"
      ],
      "c": 2,
      "e": "One glucose → 2 molecules of pyruvic acid (partial oxidation)."
    },
    {
      "q": "Net ATP gained in glycolysis per glucose is:",
      "o": [
        "2",
        "4",
        "36",
        "38"
      ],
      "c": 0,
      "e": "4 ATP are produced, 2 are used → net 2 ATP (plus 2 NADH)."
    },
    {
      "q": "In alcoholic fermentation, pyruvate is converted to:",
      "o": [
        "Lactic acid",
        "CO₂ and ethanol",
        "Acetyl CoA",
        "Citric acid"
      ],
      "c": 1,
      "e": "Pyruvic acid decarboxylase and alcohol dehydrogenase convert pyruvate to CO₂ + ethanol."
    },
    {
      "q": "Lactic acid fermentation is catalysed by:",
      "o": [
        "Pyruvate dehydrogenase",
        "Lactate dehydrogenase",
        "Invertase",
        "Citrate synthase"
      ],
      "c": 1,
      "e": "Lactate dehydrogenase reduces pyruvate to lactic acid (e.g. in muscle during low O₂)."
    },
    {
      "q": "Yeast die when alcohol concentration reaches about:",
      "o": [
        "5%",
        "13%",
        "25%",
        "40%"
      ],
      "c": 1,
      "e": "Yeasts poison themselves when alcohol reaches roughly 13%."
    },
    {
      "q": "Pyruvate is converted to acetyl CoA by the enzyme:",
      "o": [
        "Hexokinase",
        "Pyruvate dehydrogenase",
        "RuBisCO",
        "ATP synthase"
      ],
      "c": 1,
      "e": "Pyruvate dehydrogenase carries out oxidative decarboxylation: pyruvate + CoA + NAD⁺ → acetyl CoA + CO₂ + NADH."
    },
    {
      "q": "The Krebs cycle takes place in the:",
      "o": [
        "Cytoplasm",
        "Mitochondrial matrix",
        "Inner membrane",
        "Outer membrane"
      ],
      "c": 1,
      "e": "The TCA / Krebs cycle operates in the matrix of the mitochondria."
    },
    {
      "q": "The first product of the Krebs cycle is:",
      "o": [
        "Citric acid",
        "Succinic acid",
        "Malic acid",
        "α-ketoglutaric acid"
      ],
      "c": 0,
      "e": "Acetyl CoA + OAA + water → citric acid (catalysed by citrate synthase)."
    },
    {
      "q": "Per turn of the Krebs cycle, the number of NADH, FADH₂ and GTP produced is:",
      "o": [
        "1, 1, 1",
        "3, 1, 1",
        "2, 2, 1",
        "3, 2, 2"
      ],
      "c": 1,
      "e": "Each turn: 3 NADH, 1 FADH₂, 1 GTP (and 2 CO₂ released)."
    },
    {
      "q": "Oxidation of one FADH₂ in the ETS yields how many ATP?",
      "o": [
        "1",
        "2",
        "3",
        "4"
      ],
      "c": 1,
      "e": "1 FADH₂ → 2 ATP; 1 NADH → 3 ATP."
    },
    {
      "q": "The final acceptor of electrons in the ETS is:",
      "o": [
        "NAD⁺",
        "FAD",
        "Oxygen",
        "Cytochrome c"
      ],
      "c": 2,
      "e": "O₂ is the terminal electron/hydrogen acceptor; it is reduced to water."
    },
    {
      "q": "Cytochrome c acts as:",
      "o": [
        "A complex II carrier",
        "A mobile carrier between Complex III and IV",
        "An ATP-synthesising enzyme",
        "A proton pump in the matrix"
      ],
      "c": 1,
      "e": "Cytochrome c is a small mobile protein carrying electrons between Complex III and Complex IV."
    },
    {
      "q": "In ATP synthase, the proton channel is the:",
      "o": [
        "F1 component",
        "F0 component",
        "Complex I",
        "Cytochrome c"
      ],
      "c": 1,
      "e": "F0 is the integral membrane channel; F1 is the headpiece where ATP is made. 2H⁺ pass per ATP."
    },
    {
      "q": "The net theoretical ATP yield from aerobic oxidation of one glucose is:",
      "o": [
        "2",
        "12",
        "36",
        "38"
      ],
      "c": 3,
      "e": "Under the stated assumptions, aerobic respiration nets 38 ATP per glucose."
    },
    {
      "q": "The respiratory pathway is called amphibolic because it:",
      "o": [
        "Only breaks down molecules",
        "Involves both catabolism and anabolism",
        "Occurs in two organelles",
        "Uses only glucose"
      ],
      "c": 1,
      "e": "Its intermediates are used in both breakdown (catabolism) and synthesis (anabolism)."
    },
    {
      "q": "The respiratory quotient (RQ) for carbohydrates is:",
      "o": [
        "0.7",
        "0.9",
        "1.0",
        "Greater than 1"
      ],
      "c": 2,
      "e": "For carbohydrates, equal volumes of CO₂ and O₂ are exchanged, so RQ = 1."
    },
    {
      "q": "The RQ for fats is approximately:",
      "o": [
        "1.0",
        "0.9",
        "0.7",
        "1.5"
      ],
      "c": 2,
      "e": "Fats consume more O₂ than the CO₂ they release, so RQ < 1 (≈0.7)."
    },
    {
      "q": "Oxidative phosphorylation differs from photophosphorylation because it uses:",
      "o": [
        "Light energy",
        "Energy of oxidation-reduction",
        "Substrate-level energy only",
        "Heat energy"
      ],
      "c": 1,
      "e": "In respiration the proton gradient is built using the energy of redox reactions, not light."
    },
    {
      "q": "Which is true of fermentation?",
      "o": [
        "Complete oxidation of glucose",
        "Net 2 ATP per glucose",
        "Occurs in mitochondria",
        "Requires oxygen"
      ],
      "c": 1,
      "e": "Fermentation only partially breaks down glucose, netting just 2 ATP, anaerobically in the cytoplasm."
    },
    {
      "q": "The link reaction (pyruvate → acetyl CoA) releases, per glucose:",
      "o": [
        "1 CO₂ and 1 NADH",
        "2 CO₂ and 2 NADH",
        "3 CO₂ and 3 NADH",
        "No CO₂"
      ],
      "c": 1,
      "e": "Two pyruvates each release 1 CO₂ + 1 NADH → 2 CO₂ and 2 NADH per glucose."
    }
  ],
  "match": [
    {
      "term": "Glycolysis",
      "def": "Cytoplasm"
    },
    {
      "term": "Link reaction & Krebs cycle",
      "def": "Mitochondrial matrix"
    },
    {
      "term": "Electron Transport System",
      "def": "Inner mitochondrial membrane"
    },
    {
      "term": "Fermentation",
      "def": "Cytoplasm (anaerobic)"
    },
    {
      "term": "Pyruvate → Acetyl CoA",
      "def": "Oxidative decarboxylation"
    },
    {
      "term": "ATP synthase (F0/F1)",
      "def": "Synthesises ATP from proton gradient"
    },
    {
      "term": "Invertase",
      "def": "Splits sucrose into glucose + fructose"
    },
    {
      "term": "Hexokinase",
      "def": "Phosphorylates glucose to glucose-6-P"
    },
    {
      "term": "Lactate dehydrogenase",
      "def": "Pyruvate → lactic acid"
    },
    {
      "term": "Alcohol dehydrogenase",
      "def": "Forms ethanol in fermentation"
    },
    {
      "term": "Citrate synthase",
      "def": "Acetyl CoA + OAA → citric acid"
    },
    {
      "term": "Cytochrome c",
      "def": "Mobile carrier between Complex III & IV"
    },
    {
      "term": "Net ATP from glycolysis",
      "def": "2"
    },
    {
      "term": "ATP per NADH (ETS)",
      "def": "3"
    },
    {
      "term": "ATP per FADH₂ (ETS)",
      "def": "2"
    },
    {
      "term": "Total ATP per glucose (aerobic)",
      "def": "38"
    },
    {
      "term": "RQ of carbohydrates",
      "def": "1.0"
    },
    {
      "term": "RQ of fats",
      "def": "≈ 0.7"
    }
  ],
  "pathways": [
    {
      "title": "Glycolysis (EMP pathway)",
      "prompt": "Order the key molecules from glucose to pyruvate",
      "steps": [
        "Glucose (6C)",
        "Glucose-6-phosphate",
        "Fructose-6-phosphate",
        "Fructose-1,6-bisphosphate",
        "Triose phosphate (PGAL)",
        "1,3-bisphosphoglycerate (BPGA)",
        "3-phosphoglyceric acid (PGA)",
        "Phosphoenolpyruvate (PEP)",
        "Pyruvic acid (3C)"
      ]
    },
    {
      "title": "Aerobic respiration overview",
      "prompt": "Order the four phases of complete oxidation",
      "steps": [
        "Glycolysis: glucose → 2 pyruvate (cytoplasm)",
        "Link reaction: pyruvate → acetyl CoA",
        "Krebs cycle: acetyl CoA fully oxidised",
        "ETS: NADH/FADH₂ oxidised, electrons to O₂",
        "Oxidative phosphorylation makes ATP"
      ]
    },
    {
      "title": "The Krebs / citric acid cycle",
      "prompt": "Order the carbon intermediates",
      "steps": [
        "Acetyl CoA (2C) + Oxaloacetic acid (4C)",
        "Citric acid (6C)",
        "α-ketoglutaric acid (5C)",
        "Succinyl-CoA",
        "Succinic acid (4C)",
        "Malic acid (4C)",
        "Oxaloacetic acid regenerated (4C)"
      ]
    },
    {
      "title": "The Electron Transport System",
      "prompt": "Order the carriers electrons pass through",
      "steps": [
        "NADH → Complex I (NADH dehydrogenase)",
        "Ubiquinone (also fed by FADH₂/Complex II)",
        "Complex III (cytochrome bc1)",
        "Cytochrome c (mobile carrier)",
        "Complex IV (cytochrome c oxidase)",
        "Oxygen → reduced to water"
      ]
    }
  ]
};
