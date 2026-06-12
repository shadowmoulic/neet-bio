/* ====== data_biomol.js ====== */
/* ===== CHAPTER 9 · BIOMOLECULES ===== */
DATA.chapters.biomol = {
id:"biomol", num:9, title:"Biomolecules", subtitle:"Carbohydrates · Proteins · Lipids · Nucleic Acids · Enzymes",
color:"#bb8ed6", colorD:"#7f4ea0", glyph:"⚗️",

notes:[
{
id:"intro", heading:"Chemical Composition of Living Tissue",
html:`
<p>Living cells are composed of <span class="kw">organic compounds</span> (contain C, H, O, N, S, P) and inorganic ions. The technique of breaking a cell open and analysing its contents is called <b>chemical analysis</b>.</p>
<ul>
<li>Elemental composition: <b>H, O, C, N</b> are the most abundant (roughly 96% of a cell by mass).</li>
<li>Biomolecules fall into two broad categories: <b>micromolecules</b> (small — amino acids, sugars, nucleotides) and <b>macromolecules</b> (polymers — proteins, polysaccharides, nucleic acids).</li>
<li>Lipids are not polymers but are still classified as macromolecules (large, water-insoluble).</li>
</ul>
<div class="callout"><b>Biomolecules = all organic compounds in a living system.</b> They are made by living cells from small molecules using metabolic pathways.</div>
`
},
{
id:"carbs", heading:"Carbohydrates",
html:`
<p>Carbohydrates are made of C, H and O in the ratio 1:2:1 (general formula: Cₙ(H₂O)ₙ). They are the primary source of energy.</p>
<h4>Classification</h4>
<table class="cmp"><thead><tr><th>Type</th><th>Units</th><th>Linkage</th><th>Examples</th></tr></thead><tbody>
<tr><td><b>Monosaccharides</b></td><td>1</td><td>—</td><td>Glucose (6C), Fructose (6C), Galactose (6C), Ribose (5C), Deoxyribose (5C)</td></tr>
<tr><td><b>Disaccharides</b></td><td>2</td><td>Glycosidic bond</td><td>Sucrose (Glucose + Fructose), Maltose (Glucose + Glucose), Lactose (Glucose + Galactose)</td></tr>
<tr><td><b>Oligosaccharides</b></td><td>3–9</td><td>Glycosidic bond</td><td>Raffinose</td></tr>
<tr><td><b>Polysaccharides</b></td><td>Many</td><td>Glycosidic bond</td><td>Starch (storage, plants), Glycogen (storage, animals), Cellulose (structural, plants), Chitin (structural, fungi/arthropods)</td></tr>
</tbody></table>
<h4>Key Polysaccharides</h4>
<table class="cmp"><thead><tr><th>Polysaccharide</th><th>Monomer</th><th>Function</th></tr></thead><tbody>
<tr><td>Starch</td><td>Glucose (α-form)</td><td>Energy storage in plants (amylose + amylopectin)</td></tr>
<tr><td>Glycogen</td><td>Glucose (α-form)</td><td>Energy storage in animals and fungi</td></tr>
<tr><td>Cellulose</td><td>Glucose (β-form)</td><td>Cell wall of plants; structural; cannot be digested by most animals</td></tr>
<tr><td>Chitin</td><td>N-acetyl glucosamine</td><td>Exoskeleton of arthropods; fungal cell walls</td></tr>
</tbody></table>
`
},
{
id:"proteins", heading:"Proteins",
html:`
<p>Proteins are polymers of <span class="kw">amino acids</span> linked by <b>peptide bonds</b>. They are the most versatile biomolecules — structural, catalytic, transport, hormonal, immune, etc.</p>
<h4>Amino Acids</h4>
<ul>
<li>20 types of amino acids used in proteins. Each has: <b>amino group (-NH₂)</b>, <b>carboxyl group (-COOH)</b>, <b>H</b>, and a unique <b>R group (side chain)</b>, all attached to the α-carbon.</li>
<li>Essential amino acids cannot be synthesised by the body — must be taken in food.</li>
</ul>
<h4>Levels of Protein Structure</h4>
<table class="cmp"><thead><tr><th>Level</th><th>Bond type</th><th>Description</th></tr></thead><tbody>
<tr><td><b>Primary</b></td><td>Peptide bonds</td><td>Sequence of amino acids in a polypeptide chain</td></tr>
<tr><td><b>Secondary</b></td><td>H-bonds</td><td>Folding into α-helix or β-pleated sheet</td></tr>
<tr><td><b>Tertiary</b></td><td>H-bonds, ionic, disulphide, hydrophobic</td><td>3D folding of secondary structure — gives functional shape</td></tr>
<tr><td><b>Quaternary</b></td><td>Non-covalent interactions</td><td>Two or more polypeptide chains assembling (e.g. Haemoglobin = 2α + 2β subunits)</td></tr>
</tbody></table>
<h4>Functions of Proteins</h4>
<ul>
<li>Structural: Collagen, Keratin</li>
<li>Enzymatic: all enzymes are proteins</li>
<li>Transport: Haemoglobin (O₂)</li>
<li>Hormonal: Insulin, Growth hormone</li>
<li>Immune: Antibodies (IgG, IgM...)</li>
<li>Contractile: Actin, Myosin</li>
</ul>
`
},
{
id:"lipids", heading:"Lipids",
html:`
<p>Lipids are <span class="kw">insoluble in water</span>, soluble in organic solvents. They are not true polymers. They include fats, oils, waxes, sterols and phospholipids.</p>
<h4>Classification</h4>
<table class="cmp"><thead><tr><th>Lipid type</th><th>Components</th><th>Examples / Notes</th></tr></thead><tbody>
<tr><td><b>Triglycerides</b></td><td>Glycerol + 3 fatty acids (ester bond)</td><td>Fats (solid, saturated) and Oils (liquid, unsaturated). Energy storage, insulation.</td></tr>
<tr><td><b>Phospholipids</b></td><td>Glycerol + 2 fatty acids + phosphate group</td><td>Major component of cell membranes (bilayer). Amphipathic — hydrophilic head, hydrophobic tails.</td></tr>
<tr><td><b>Steroids / Sterols</b></td><td>4 fused rings</td><td>Cholesterol (membrane component), bile acids, steroid hormones (testosterone, oestrogen), Vitamin D.</td></tr>
<tr><td><b>Waxes</b></td><td>Long-chain fatty acid + long-chain alcohol</td><td>Cuticle of plants, earwax.</td></tr>
</tbody></table>
<div class="callout"><b>Saturated fatty acids</b> (no double bonds) are solid at room temperature (fats). <b>Unsaturated fatty acids</b> (one or more double bonds) are liquid (oils).</div>
`
},
{
id:"nucleicacids", heading:"Nucleic Acids",
html:`
<p>Nucleic acids are polymers of <span class="kw">nucleotides</span> linked by <b>phosphodiester bonds</b>. There are two types: <b>DNA</b> and <b>RNA</b>.</p>
<h4>Nucleotide = Nitrogenous base + Sugar + Phosphate</h4>
<table class="cmp"><thead><tr><th>Feature</th><th>DNA</th><th>RNA</th></tr></thead><tbody>
<tr><td><b>Sugar</b></td><td>Deoxyribose (5C)</td><td>Ribose (5C)</td></tr>
<tr><td><b>Bases</b></td><td>A, T, G, C (Thymine)</td><td>A, U, G, C (Uracil instead of Thymine)</td></tr>
<tr><td><b>Strands</b></td><td>Double helix (Watson & Crick, 1953)</td><td>Usually single-stranded</td></tr>
<tr><td><b>Function</b></td><td>Genetic information storage</td><td>Protein synthesis (mRNA, tRNA, rRNA)</td></tr>
<tr><td><b>Location</b></td><td>Nucleus (chromosomes) + mitochondria, chloroplasts</td><td>Nucleus + cytoplasm + ribosomes</td></tr>
</tbody></table>
<h4>Chargaff's Rule (Base Pairing)</h4>
<ul>
<li>In DNA: <b>A = T</b> (2 H-bonds) and <b>G = C</b> (3 H-bonds)</li>
<li>So total Purines = total Pyrimidines</li>
</ul>
<div class="callout"><b>Purines</b>: Adenine (A), Guanine (G) — double ring. <b>Pyrimidines</b>: Cytosine (C), Thymine (T), Uracil (U) — single ring. Memory: <b>PURe As Gold</b> (Purines = Adenine & Guanine).</div>
`
},
{
id:"enzymes", heading:"Enzymes",
html:`
<p>Enzymes are <span class="kw">biological catalysts</span> — almost all are proteins (except ribozymes, which are RNA). They speed up reactions without being consumed.</p>
<h4>Key Properties</h4>
<ul>
<li><b>Specificity</b>: Each enzyme acts on a specific substrate (lock-and-key model / induced fit model).</li>
<li><b>Active site</b>: The part of the enzyme that binds the substrate. Tertiary structure maintains its shape.</li>
<li><b>Temperature</b>: Reaction rate increases up to an optimum (~37°C in humans); above this, enzyme is <span class="kw">denatured</span>.</li>
<li><b>pH</b>: Each enzyme has an optimum pH (e.g., pepsin = acidic ~pH 2; trypsin = basic ~pH 8).</li>
</ul>
<h4>Enzyme Inhibition</h4>
<table class="cmp"><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><b>Competitive inhibition</b></td><td>Inhibitor structurally similar to substrate; competes for active site. Can be overcome by increasing substrate concentration.</td></tr>
<tr><td><b>Non-competitive inhibition</b></td><td>Inhibitor binds at <span class="kw">allosteric site</span> (elsewhere); changes shape of active site. Cannot be overcome by more substrate.</td></tr>
</tbody></table>
<h4>Cofactors</h4>
<ul>
<li>Many enzymes need non-protein helpers to function:</li>
<li><b>Cofactor</b> = inorganic ion (e.g. Fe²⁺, Mg²⁺, Zn²⁺)</li>
<li><b>Coenzyme</b> = organic molecule (usually a vitamin derivative, e.g. NAD⁺, FAD)</li>
<li><b>Prosthetic group</b> = coenzyme tightly/covalently bound to enzyme (e.g. haem in cytochrome)</li>
<li>Apoenzyme + Cofactor = <b>Holoenzyme</b></li>
</ul>
<h4>Enzyme Classification (IUB)</h4>
<table class="cmp"><thead><tr><th>Class</th><th>Reaction</th><th>Example</th></tr></thead><tbody>
<tr><td>Oxidoreductases</td><td>Oxidation-reduction</td><td>Dehydrogenases, oxidases</td></tr>
<tr><td>Transferases</td><td>Group transfer</td><td>Transaminases, kinases</td></tr>
<tr><td>Hydrolases</td><td>Hydrolysis</td><td>Lipases, proteases, amylases</td></tr>
<tr><td>Lyases</td><td>Addition/removal (non-hydrolytic)</td><td>Decarboxylases</td></tr>
<tr><td>Isomerases</td><td>Isomerisation</td><td>Phosphoglucose isomerase</td></tr>
<tr><td>Ligases</td><td>Joining with ATP hydrolysis</td><td>DNA ligase</td></tr>
</tbody></table>
`
}
],

mnemonics:[
{title:"Levels of protein structure", device:`<b>P</b>eter <b>S</b>tands <b>T</b>all & <b>Q</b>uiet`, expand:[
 {L:"P",t:"Primary — amino acid sequence (peptide bonds)"},
 {L:"S",t:"Secondary — α-helix/β-sheet (H-bonds)"},
 {L:"T",t:"Tertiary — 3D shape (multiple bond types)"},
 {L:"Q",t:"Quaternary — multiple subunits assembled"}
]},
{title:"Purines vs Pyrimidines", device:`<b>PUR</b>e <b>A</b>s <b>G</b>old (Purines=Adenine+Guanine) · <b>CUT</b> the <b>Py</b> (Pyrimidines=Cytosine, Uracil, Thymine)`, expand:[
 {L:"A,G",t:"Purines — double ring — Adenine & Guanine"},
 {L:"C,U,T",t:"Pyrimidines — single ring — Cytosine, Uracil, Thymine"}
]},
{title:"Chargaff's rules", device:`<b>AT</b>e <b>2</b> sweets, <b>GC</b> got <b>3</b>`, expand:[
 {L:"A=T",t:"A pairs with T via 2 H-bonds"},
 {L:"G≡C",t:"G pairs with C via 3 H-bonds"}
]},
{title:"6 enzyme classes (IUB)", device:`<b>O</b>ld <b>T</b>igers <b>H</b>ave <b>L</b>ong <b>I</b>ncisor-<b>L</b>ike fangs`, expand:[
 {L:"O",t:"Oxidoreductases — redox reactions"},
 {L:"T",t:"Transferases — group transfer"},
 {L:"H",t:"Hydrolases — hydrolysis (amylase, lipase)"},
 {L:"L",t:"Lyases — cleavage / addition"},
 {L:"I",t:"Isomerases — structural change"},
 {L:"L",t:"Ligases — joining (DNA ligase)"}
]},
{title:"Cofactor terms", device:`<b>A</b>po + <b>Co</b>factor = <b>Holo</b>enzyme (alone=apo, whole=holo)`, expand:[
 {L:"Apo",t:"Enzyme without cofactor — INACTIVE"},
 {L:"Holo",t:"Enzyme with cofactor — ACTIVE"}
]}
],

flashcards:[
{front:"What is a nucleotide?", back:"A nucleotide = nitrogenous base + pentose sugar + phosphate group. The monomer of nucleic acids (DNA and RNA)."},
{front:"DNA vs RNA — sugar and unique base", back:"DNA has <b>deoxyribose</b> and <b>Thymine</b>. RNA has <b>ribose</b> and <b>Uracil</b>. Both share A, G, C."},
{front:"State Chargaff's rule.", back:"In DNA: A=T (2 H-bonds) and G=C (3 H-bonds). Therefore total purines = total pyrimidines."},
{front:"What are purines and pyrimidines?", back:"<b>Purines</b> (double ring): Adenine, Guanine. <b>Pyrimidines</b> (single ring): Cytosine, Thymine (DNA), Uracil (RNA)."},
{front:"What is the primary structure of a protein?", back:"The linear sequence of amino acids in a polypeptide chain, held together by peptide bonds."},
{front:"What is an active site?", back:"The specific region on an enzyme that binds the substrate (and sometimes cofactor) to catalyse the reaction. Maintained by tertiary structure."},
{front:"What is the difference between competitive and non-competitive inhibition?", back:"Competitive: inhibitor at active site (can be overcome by more substrate). Non-competitive: inhibitor at allosteric site (changes enzyme shape, cannot be overcome by more substrate)."},
{front:"Apoenzyme + cofactor = ?", back:"<b>Holoenzyme</b> (fully active enzyme). Apoenzyme alone is inactive."},
{front:"What is denaturation of an enzyme?", back:"Loss of 3D shape (tertiary structure) of the enzyme, usually by high temperature or extreme pH, resulting in loss of activity. Often irreversible."},
{front:"Give the function of starch vs glycogen vs cellulose.", back:"<b>Starch</b>: energy storage in plants. <b>Glycogen</b>: energy storage in animals and fungi. <b>Cellulose</b>: structural — plant cell wall (β-glucose, cannot be digested by most animals)."},
{front:"What makes phospholipids special for membranes?", back:"Amphipathic nature: hydrophilic phosphate head (faces water) + two hydrophobic fatty acid tails (face inward). Forms a bilayer in water — the basis of all biological membranes."},
{front:"What are ribozymes?", back:"RNA molecules that act as biological catalysts (enzyme-like activity). E.g., the RNA component of ribosomes. Exceptions to the rule that all enzymes are proteins."},
{front:"What is the Watson-Crick discovery?", back:"In 1953, James Watson and Francis Crick proposed the <b>double helix model</b> of DNA structure, based on X-ray data from Rosalind Franklin."},
{front:"Essential vs non-essential amino acids", back:"<b>Essential</b>: cannot be synthesised by the body; must be in diet (e.g. leucine, lysine, tryptophan). <b>Non-essential</b>: can be made in the body."},
{front:"What is the monomer of chitin?", back:"<b>N-acetyl glucosamine</b> (a modified glucose). Chitin forms the exoskeleton of arthropods and fungal cell walls."}
],

recall:[
{q:"Distinguish between monosaccharides, disaccharides and polysaccharides with two examples each.", hint:"Number of monomers; glycosidic bond?", a:"<b>Monosaccharides</b>: single sugar units; cannot be hydrolysed further; e.g. Glucose, Fructose. <b>Disaccharides</b>: two monosaccharides joined by glycosidic bond; e.g. Sucrose (glucose+fructose), Lactose (glucose+galactose). <b>Polysaccharides</b>: many monosaccharides; e.g. Starch (storage, plants), Cellulose (structural, plants)."},
{q:"Describe the four levels of protein structure.", hint:"Primary → Quaternary; different bonds at each level.", a:"<b>Primary</b>: sequence of amino acids; peptide bonds. <b>Secondary</b>: folding into α-helix or β-pleated sheet; H-bonds. <b>Tertiary</b>: 3D conformation of secondary structure; H-bonds, ionic bonds, disulphide bridges, hydrophobic interactions — gives functional shape. <b>Quaternary</b>: association of two or more polypeptide subunits; e.g. Haemoglobin (2α + 2β chains)."},
{q:"Explain competitive vs non-competitive inhibition of enzymes with examples.", hint:"Active site vs allosteric site.", a:"<b>Competitive inhibition</b>: an inhibitor structurally similar to the substrate competes for and blocks the active site. Can be reversed by increasing substrate concentration. E.g., sulpha drugs compete with PABA in bacteria. <b>Non-competitive inhibition</b>: inhibitor binds at the allosteric site (different from active site), changing the enzyme's shape and reducing activity. Cannot be overcome by more substrate. E.g., product inhibition (feedback inhibition) in metabolic pathways."},
{q:"Differentiate DNA from RNA on the basis of structure and function.", hint:"Sugar, bases, strands, role.", a:"<b>DNA</b>: deoxyribose sugar, bases A/T/G/C, double-stranded helix, stores genetic information in the nucleus. <b>RNA</b>: ribose sugar, bases A/U/G/C (Uracil instead of Thymine), usually single-stranded, functions in protein synthesis (mRNA carries message, tRNA brings amino acids, rRNA is part of ribosome)."},
{q:"What is the role of cofactors in enzyme activity?", hint:"Apoenzyme + cofactor = ?", a:"Many enzymes require non-protein helpers: <b>cofactors</b> are inorganic ions (Fe²⁺, Mg²⁺, Zn²⁺); <b>coenzymes</b> are organic molecules (NAD⁺, FAD — often vitamin derivatives); <b>prosthetic groups</b> are coenzymes covalently bound to the enzyme (e.g., haem in cytochrome). An enzyme without its cofactor (apoenzyme) is inactive; adding the cofactor creates the active <b>holoenzyme</b>."}
],

mcqs:[
{q:"The bond that links two amino acids in a protein is called:", o:["Glycosidic bond","Phosphodiester bond","Peptide bond","Hydrogen bond"], c:2, e:"Amino acids are joined by <b>peptide bonds</b> (between -COOH of one and -NH₂ of the next)."},
{q:"Which sugar is found in RNA but NOT in DNA?", o:["Glucose","Deoxyribose","Ribose","Fructose"], c:2, e:"RNA has <b>ribose</b>; DNA has deoxyribose (lacks the 2'-OH group)."},
{q:"In DNA, Adenine always pairs with:", o:["Cytosine (3 H-bonds)","Guanine (3 H-bonds)","Thymine (2 H-bonds)","Uracil (2 H-bonds)"], c:2, e:"A pairs with <b>T via 2 H-bonds</b>; G pairs with C via 3 H-bonds (Chargaff's rule)."},
{q:"Which base is found in RNA but NOT in DNA?", o:["Adenine","Guanine","Thymine","Uracil"], c:3, e:"RNA contains <b>Uracil</b> instead of Thymine."},
{q:"Cellulose is a polymer of:", o:["α-glucose","β-glucose","Fructose","Galactose"], c:1, e:"Cellulose is made of <b>β-glucose</b> units linked by β-1,4 glycosidic bonds — cannot be digested by most animals."},
{q:"Which level of protein structure involves multiple polypeptide chains?", o:["Primary","Secondary","Tertiary","Quaternary"], c:3, e:"<b>Quaternary structure</b> — two or more polypeptide subunits assembled together (e.g. haemoglobin)."},
{q:"An enzyme without its cofactor is called:", o:["Holoenzyme","Apoenzyme","Coenzyme","Ribozyme"], c:1, e:"<b>Apoenzyme</b> = inactive enzyme protein without cofactor. Holoenzyme = apoenzyme + cofactor (active)."},
{q:"Which enzyme class catalyses hydrolysis reactions?", o:["Isomerases","Lyases","Oxidoreductases","Hydrolases"], c:3, e:"<b>Hydrolases</b> catalyse hydrolysis — breaking bonds by adding water (e.g. lipases, proteases, amylases)."},
{q:"In competitive inhibition, the inhibitor:", o:["Binds to allosteric site","Permanently blocks enzyme","Competes with substrate for active site","Denatures the enzyme"], c:2, e:"In <b>competitive inhibition</b>, the inhibitor is structurally similar to the substrate and competes for the active site; can be overcome by more substrate."},
{q:"Phospholipids are the main component of:", o:["Starch granules","Cell membranes","Protein fibres","DNA double helix"], c:1, e:"<b>Phospholipids</b> form the bilayer of all biological membranes — amphipathic structure with hydrophilic head and hydrophobic tails."},
{q:"Which of these is a disaccharide?", o:["Glucose","Starch","Lactose","Ribose"], c:2, e:"<b>Lactose</b> = glucose + galactose; a disaccharide. Glucose and ribose are monosaccharides; starch is a polysaccharide."},
{q:"The optimum pH of pepsin (stomach enzyme) is approximately:", o:["pH 7 (neutral)","pH 8 (basic)","pH 2 (acidic)","pH 10 (basic)"], c:2, e:"Pepsin works best at <b>pH 2</b> (strongly acidic — matches stomach environment). Trypsin works best at alkaline pH ~8."},
{q:"The double helix model of DNA was proposed by:", o:["Griffith and Avery","Hershey and Chase","Watson and Crick","Chargaff and Franklin"], c:2, e:"<b>Watson and Crick</b> proposed the double helix model in 1953, based partly on X-ray crystallography data by Rosalind Franklin."},
{q:"Energy storage polysaccharide in animals is:", o:["Starch","Glycogen","Cellulose","Chitin"], c:1, e:"<b>Glycogen</b> — stored mainly in liver and muscles. Animals use glycogen; plants use starch."},
{q:"Ribozymes are:", o:["Proteins that act on RNA","RNA molecules that act as catalysts","Ribosomes","Enzymes that replicate DNA"], c:1, e:"<b>Ribozymes</b> are <b>RNA molecules</b> with catalytic activity — exceptions to the rule that enzymes are proteins (e.g., self-splicing introns, peptidyl transferase activity of rRNA)."}
],

match:[
{term:"Peptide bond", def:"Links amino acids in a protein"},
{term:"Glycosidic bond", def:"Links monosaccharides in polysaccharides"},
{term:"Phosphodiester bond", def:"Links nucleotides in nucleic acids"},
{term:"Chargaff's rule", def:"A=T (2 H-bonds); G≡C (3 H-bonds) in DNA"},
{term:"Apoenzyme", def:"Protein part of enzyme without cofactor — inactive"},
{term:"Holoenzyme", def:"Active enzyme = apoenzyme + cofactor"},
{term:"Ribozyme", def:"RNA with catalytic (enzyme-like) activity"},
{term:"Competitive inhibition", def:"Inhibitor at active site; reversible with more substrate"},
{term:"Non-competitive inhibition", def:"Inhibitor at allosteric site; irreversible with more substrate"},
{term:"Glycogen", def:"Animal/fungal energy storage polysaccharide"},
{term:"Cellulose", def:"β-glucose structural polysaccharide in plant cell walls"},
{term:"Watson & Crick (1953)", def:"Proposed the double helix model of DNA"}
],

pathways:[
{title:"Levels of protein structure — simplest to most complex", prompt:"Order from primary to quaternary.", steps:["Primary — amino acid sequence (peptide bonds)","Secondary — α-helix / β-sheet (H-bonds)","Tertiary — 3D folded shape","Quaternary — multiple polypeptide subunits"]},
{title:"From gene to protein (central dogma)", prompt:"Order the central dogma steps.", steps:["DNA (genetic information)","Transcription → mRNA","Translation at ribosomes","Polypeptide / Protein","Folding → functional protein"]}
]
};
