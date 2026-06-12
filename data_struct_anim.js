/* ====== data_struct_anim.js ====== */
/* ===== CHAPTER 7 · STRUCTURAL ORGANISATION IN ANIMALS ===== */
DATA.chapters.structanim = {
id:"structanim", num:7, title:"Structural Organisation in Animals", subtitle:"Animal Tissues · Cockroach Morphology & Anatomy",
color:"#e58a5d", colorD:"#a8512a", glyph:"🪲",

notes:[
{
id:"tissues_intro", heading:"Tissue — The Basic Concept",
html:`
<p>A <span class="kw">tissue</span> is a group of similar cells, along with intercellular substance, that perform a specific function. The study of tissues is called <b>Histology</b>.</p>
<p>In animals, there are <b>four basic types of tissues</b>:</p>
<ol>
<li>Epithelial tissue</li>
<li>Connective tissue</li>
<li>Muscular tissue</li>
<li>Neural tissue</li>
</ol>
`
},
{
id:"epithelial", heading:"Epithelial Tissue",
html:`
<p>Epithelial tissue forms the <span class="kw">lining and covering</span> of organs. Cells are compactly packed, resting on a <b>basement membrane</b>. No blood supply (avascular) — nourished by diffusion from connective tissue below.</p>
<h4>Classification by cell shape</h4>
<table class="cmp"><thead><tr><th>Type</th><th>Cell shape</th><th>Location</th></tr></thead><tbody>
<tr><td><b>Squamous</b></td><td>Flat, scale-like</td><td>Walls of blood vessels (endothelium), air sacs of lungs</td></tr>
<tr><td><b>Cuboidal</b></td><td>Cube-shaped</td><td>Kidney tubules, salivary gland ducts</td></tr>
<tr><td><b>Columnar</b></td><td>Pillar-like, tall</td><td>Lining of stomach, intestine</td></tr>
<tr><td><b>Pseudostratified</b></td><td>Columnar but appear layered (not truly)</td><td>Trachea lining</td></tr>
<tr><td><b>Stratified squamous</b></td><td>Multiple layers, flat on surface</td><td>Skin (epidermis)</td></tr>
</tbody></table>
<h4>Specialised Epithelium</h4>
<ul>
<li><b>Ciliated epithelium</b> — columnar cells bearing cilia; move mucus (e.g. trachea, oviduct).</li>
<li><b>Glandular epithelium</b> — secretes substances. Unicellular: goblet cells (secrete mucin). Multicellular: salivary glands.</li>
</ul>
<div class="callout"><b>Key fact:</b> The free surface of epithelial cells may have microvilli (brush border) for absorption — seen in intestinal epithelium.</div>
`
},
{
id:"connective", heading:"Connective Tissue",
html:`
<p>Most abundant and widely distributed tissue. Cells are <span class="kw">loosely spaced</span> in a matrix (ground substance + fibres). Has a blood supply (vascular).</p>
<h4>Types of Connective Tissue</h4>
<table class="cmp"><thead><tr><th>Type</th><th>Matrix / Fibres</th><th>Cells</th><th>Function / Location</th></tr></thead><tbody>
<tr><td><b>Loose Connective</b></td><td>Fluid, collagen + elastic fibres</td><td>Fibroblasts, mast cells, macrophages</td><td>Under skin, between muscles — fills spaces</td></tr>
<tr><td><b>Dense Connective</b><br>(Dense regular)</td><td>Closely packed collagen fibres</td><td>Fibroblasts</td><td>Tendons (muscle to bone), Ligaments (bone to bone)</td></tr>
<tr><td><b>Adipose</b></td><td>Fat-filled cells</td><td>Adipocytes</td><td>Below skin, around kidneys — insulation + energy reserve</td></tr>
<tr><td><b>Cartilage</b></td><td>Solid but flexible — chondroitin sulphate</td><td>Chondrocytes in lacunae</td><td>Nose tip, ear pinna, trachea rings, intervertebral discs</td></tr>
<tr><td><b>Bone</b></td><td>Hard — calcium phosphate matrix</td><td>Osteocytes in lacunae</td><td>Skeleton — support + protection</td></tr>
<tr><td><b>Blood</b></td><td>Fluid — plasma</td><td>RBC, WBC, platelets</td><td>Transport — O₂, nutrients, hormones, waste</td></tr>
</tbody></table>
<div class="callout"><b>Blood is a connective tissue</b> — its cells are suspended in a fluid matrix (plasma). Haversian canals are characteristic of compact bone.</div>
`
},
{
id:"muscular", heading:"Muscular Tissue",
html:`
<p>Muscular tissue is made of elongated cells called <span class="kw">muscle fibres</span> that can <b>contract</b> (shorten). There are three types:</p>
<table class="cmp"><thead><tr><th>Feature</th><th>Skeletal / Striated</th><th>Smooth / Unstriated</th><th>Cardiac</th></tr></thead><tbody>
<tr><td><b>Shape</b></td><td>Long, cylindrical, unbranched</td><td>Long, spindle-shaped, unbranched</td><td>Cylindrical, branched</td></tr>
<tr><td><b>Striations</b></td><td>Yes</td><td>No</td><td>Yes</td></tr>
<tr><td><b>Nuclei</b></td><td>Many, peripheral</td><td>Single, central</td><td>Single, central</td></tr>
<tr><td><b>Control</b></td><td>Voluntary (conscious)</td><td>Involuntary</td><td>Involuntary</td></tr>
<tr><td><b>Location</b></td><td>Limbs, trunk — attached to bones</td><td>Wall of stomach, intestine, uterus, blood vessels</td><td>Heart wall only</td></tr>
<tr><td><b>Fatigue</b></td><td>Fatigues</td><td>Does not fatigue</td><td>Does not fatigue</td></tr>
</tbody></table>
<div class="callout"><b>Intercalated discs</b> are the dark bands joining adjacent cardiac muscle fibres — they allow the heart to act as a functional syncytium.</div>
`
},
{
id:"neural", heading:"Neural Tissue",
html:`
<p>Neural tissue controls and coordinates body functions. The <span class="kw">neuron</span> is the structural and functional unit of the nervous system.</p>
<ul>
<li><b>Cell body (soma/cyton)</b> — contains nucleus and most organelles.</li>
<li><b>Dendrites</b> — short, branched processes that <b>receive</b> impulses and carry them toward the cell body.</li>
<li><b>Axon</b> — single, long process that <b>conducts</b> impulses <b>away</b> from cell body to next neuron or effector.</li>
<li><b>Myelin sheath</b> — lipid coating around axon, produced by Schwann cells; speeds up impulse conduction. Gaps = <span class="kw">Nodes of Ranvier</span>.</li>
</ul>
<h4>Types of Neurons</h4>
<table class="cmp"><thead><tr><th>Type</th><th>Feature</th></tr></thead><tbody>
<tr><td>Multipolar</td><td>Many dendrites + one axon. Most common in brain and spinal cord.</td></tr>
<tr><td>Bipolar</td><td>One dendrite + one axon. Found in retina of eye.</td></tr>
<tr><td>Unipolar</td><td>Single process that divides into dendrite + axon. Embryonic neurons.</td></tr>
</tbody></table>
<p><b>Neuroglia (glial cells)</b> — non-neuronal support cells; make up more than half of neural tissue by volume.</p>
`
},
{
id:"cockroach", heading:"Cockroach (Periplaneta americana) — Morphology",
html:`
<p>The cockroach is a common model organism in animal biology. It is a <span class="kw">pest insect</span> belonging to Class Insecta.</p>
<h4>External features</h4>
<ul>
<li>Body: <b>dorso-ventrally flattened</b>; bilaterally symmetrical; divided into <b>head, thorax, abdomen</b>.</li>
<li>Exoskeleton of hardened <b>chitin</b>; body segments joined by flexible arthrodial membranes.</li>
<li><b>Head</b>: triangular, bears compound eyes, antennae and mouthparts (chewing type — mandibles, maxillae, labium, labrum, hypopharynx).</li>
<li><b>Thorax</b>: 3 segments (pro-, meso-, meta-thorax). Each bears a pair of <b>jointed legs</b>. Mesothorax + metathorax each bear a pair of wings.</li>
<li><b>Abdomen</b>: 10 segments; last segment bears <b>anal cerci</b> (sensory) and in females the <b>brood pouch (marsupium)</b> where eggs develop.</li>
<li>Sexual dimorphism: Males have <b>anal styles</b> (absent in females). Female abdomen ends bluntly; male ends pointed.</li>
</ul>
`
},
{
id:"cockroach_organ", heading:"Cockroach — Organ Systems",
html:`
<h4>Digestive System</h4>
<p>Alimentary canal: Mouth → Buccal cavity → Oesophagus → <b>Crop</b> (food storage) → <b>Gizzard/Proventriculus</b> (grinding) → Midgut (hepatic caecae for digestion) → Ileum → Colon → Rectum → Anus.</p>
<div class="callout"><b>6–8 hepatic caecae</b> at the junction of foregut and midgut secrete digestive enzymes.</div>
<h4>Circulatory System</h4>
<p><b>Open circulatory system</b> — blood (haemolymph) fills body cavity (haemocoel). Heart is a <span class="kw">13-chambered</span> tubular structure.</p>
<h4>Respiratory System</h4>
<p><b>Tracheal system</b> — network of tubes (tracheae → tracheoles) opening via <b>10 pairs of spiracles</b> (2 thoracic, 8 abdominal). Direct supply of O₂ to tissues; no pigment needed.</p>
<h4>Excretory System</h4>
<p><b>Malpighian tubules</b> — about 100 yellowish thread-like tubes at the junction of midgut and hindgut. Collect nitrogenous waste from haemolymph and pass to hindgut. Excretes <b>uric acid</b> (uricotelic).</p>
<h4>Nervous System</h4>
<p>Well-developed. <b>Supra-oesophageal ganglion</b> (brain = 3 pairs of fused ganglia) + sub-oesophageal ganglion + ventral nerve cord with segmental ganglia.</p>
<h4>Reproductive System</h4>
<ul>
<li><b>Male</b>: Testes (in segments 4–6) → vasa deferentia → ejaculatory duct → male gonopore. <b>Mushroom gland</b> (accessory gland) associated.</li>
<li><b>Female</b>: Ovaries (2) in segments 2–6 → oviducts → vagina → genital chamber. <b>Spermathecae</b> (x1) store sperm. Eggs in <b>ootheca</b>.</li>
</ul>
`
}
],

mnemonics:[
{title:"Four types of animal tissue", device:`<b>E</b>very <b>C</b>at <b>M</b>akes <b>N</b>oise`, expand:[
 {L:"E",t:"Epithelial — lining and covering"},
 {L:"C",t:"Connective — support and binding"},
 {L:"M",t:"Muscular — movement and contraction"},
 {L:"N",t:"Neural — control and coordination"}
]},
{title:"Muscles — 3 types", device:`<b>S</b>keletal <b>S</b>trains, <b>S</b>mooth <b>S</b>lides, <b>C</b>ardiac <b>C</b>ontinues`, expand:[
 {L:"S",t:"Skeletal (striated, voluntary) — attached to bones"},
 {L:"S",t:"Smooth (unstriated, involuntary) — gut, blood vessels"},
 {L:"C",t:"Cardiac (striated, involuntary) — heart only"}
]},
{title:"Cockroach excretion", device:`<b>M</b>alpighian <b>M</b>akes <b>U</b>ric acid (Uricotelic)`, expand:[
 {L:"M",t:"Malpighian tubules — ~100 yellow tubules at midgut-hindgut junction"},
 {L:"U",t:"Uric acid — waste product (uricotelic)"}
]},
{title:"Cockroach heart chambers", device:`<b>13</b> = <b>1</b> cockroach has <b>3</b> thorax + many more`, expand:[
 {L:"13",t:"Cockroach heart = 13-chambered tubular structure"}
]},
{title:"Tendon vs Ligament", device:`<b>T</b>endon ties <b>m</b>uscle to bo<b>ne</b>; <b>L</b>igament <b>L</b>inks bone to bone`, expand:[
 {L:"T",t:"Tendon — muscle to bone (dense regular connective tissue)"},
 {L:"L",t:"Ligament — bone to bone (dense regular connective tissue)"}
]}
],

flashcards:[
{front:"What is histology?", back:"The study of tissues — their structure, composition and function."},
{front:"What is the basement membrane in epithelial tissue?", back:"A thin non-cellular layer that separates epithelial cells from the underlying connective tissue. It is secreted by epithelial cells."},
{front:"Where is simple cuboidal epithelium found?", back:"Kidney tubules and salivary gland ducts."},
{front:"Which epithelium lines the trachea?", back:"Pseudostratified ciliated columnar epithelium."},
{front:"Distinguish tendon from ligament.", back:"Tendon = connects <b>muscle to bone</b>. Ligament = connects <b>bone to bone</b>. Both are dense regular connective tissue."},
{front:"What are Haversian canals?", back:"Channels in compact bone running longitudinally, containing blood vessels and nerves. Rings of bone around them = Haversian systems (osteons)."},
{front:"What is the key difference between skeletal and smooth muscle?", back:"Skeletal: striated, voluntary, multi-nucleate, fatigues. Smooth: non-striated, involuntary, single nucleus, doesn't fatigue."},
{front:"What are intercalated discs?", back:"Dark-staining transverse bands joining adjacent cardiac muscle cells, containing gap junctions — allow rapid electrical conduction for coordinated heartbeat."},
{front:"What are Nodes of Ranvier?", back:"Gaps in the myelin sheath along the axon that allow saltatory (jumping) conduction of nerve impulses."},
{front:"Which nervous system has 13 chambered heart — cockroach?", back:"Cockroach has a 13-chambered tubular heart with an open circulatory system (blood = haemolymph)."},
{front:"What are Malpighian tubules?", back:"~100 yellowish tubes at the midgut-hindgut junction in cockroach. Excrete uric acid into the gut from haemolymph (uricotelic organism)."},
{front:"How many pairs of spiracles does a cockroach have?", back:"10 pairs — 2 thoracic + 8 abdominal. They are the openings of the tracheal system."},
{front:"What is the ootheca in cockroach?", back:"A dark reddish-brown egg case that houses cockroach eggs. Produced by the female; 16 eggs per ootheca."},
{front:"Which gland in male cockroach is associated with the reproductive system?", back:"The mushroom-shaped gland (mushroom gland) — accessory reproductive gland in male cockroach."},
{front:"What are the hepatic caecae in cockroach?", back:"6–8 finger-like outgrowths at the junction of foregut and midgut. Secrete digestive enzymes."}
],

recall:[
{q:"Describe the four types of animal tissue, their general features and one example each.", hint:"E-C-M-N", a:"<b>Epithelial</b>: compact cells on basement membrane, avascular; lines body cavities (e.g. skin epidermis). <b>Connective</b>: cells in matrix with fibres, vascular; found throughout body (e.g. bone, blood, cartilage). <b>Muscular</b>: elongated contractile fibres; movement (e.g. skeletal muscle). <b>Neural</b>: neurons + glial cells; impulse conduction; control and coordination (e.g. brain)."},
{q:"Distinguish between the three types of muscle tissue.", hint:"Striated? Voluntary? Nuclei?", a:"<b>Skeletal</b>: striated, voluntary, cylindrical, multinucleate, attached to skeleton, fatigues. <b>Smooth</b>: unstriated, involuntary, spindle-shaped, uninucleate, in visceral organs, does not fatigue. <b>Cardiac</b>: striated, involuntary, cylindrical branched, uninucleate, only in heart, does not fatigue; has intercalated discs."},
{q:"Describe the digestive system of a cockroach.", hint:"Crop, Gizzard, Hepatic caecae...", a:"Alimentary canal: Mouth → buccal cavity → oesophagus → <b>crop</b> (food storage) → <b>gizzard/proventriculus</b> (muscular grinding) → midgut with <b>hepatic caecae</b> (6–8; enzyme secretion) → ileum → colon → rectum → anus."},
{q:"What is the excretory mechanism in cockroach?", hint:"Malpighian + uric acid.", a:"Cockroach is <b>uricotelic</b> — nitrogenous waste excreted as uric acid. About <b>100 Malpighian tubules</b> (yellowish, at midgut-hindgut junction) absorb waste from haemolymph and discharge uric acid into hindgut, which then passes out with faeces."},
{q:"How is the circulatory system of a cockroach different from that of humans?", hint:"Open vs closed; haemolymph.", a:"Cockroach has an <b>open circulatory system</b> — blood (haemolymph) is not confined to vessels; it fills the haemocoel bathing organs directly. The <b>13-chambered</b> heart pumps haemolymph. Humans have a closed circulatory system with blood confined to vessels and a 4-chambered heart."}
],

mcqs:[
{q:"Which tissue forms the lining and covering of all body surfaces?", o:["Connective","Muscular","Epithelial","Neural"], c:2, e:"<b>Epithelial tissue</b> covers and lines body surfaces, cavities and organs."},
{q:"Tendon connects:", o:["Bone to bone","Muscle to bone","Nerve to muscle","Cartilage to bone"], c:1, e:"<b>Tendon</b> connects muscle to bone; ligament connects bone to bone."},
{q:"Intercalated discs are found in:", o:["Skeletal muscle","Smooth muscle","Cardiac muscle","Neural tissue"], c:2, e:"<b>Intercalated discs</b> are unique to cardiac muscle — they join adjacent fibres and allow synchronized contraction."},
{q:"Malpighian tubules in cockroach are organs of:", o:["Digestion","Circulation","Excretion","Respiration"], c:2, e:"<b>Malpighian tubules</b> excrete uric acid from haemolymph — they are the excretory organs of cockroach."},
{q:"The cockroach heart has how many chambers?", o:["4","7","13","18"], c:2, e:"Cockroach heart = <b>13-chambered</b> tubular structure with an open circulation system."},
{q:"Which part of cockroach alimentary canal stores food temporarily?", o:["Gizzard","Crop","Hepatic caecae","Rectum"], c:1, e:"The <b>crop</b> stores food temporarily before it moves to the gizzard."},
{q:"The cockroach breathing system consists of:", o:["Gills","Lungs","Tracheae","Book lungs"], c:2, e:"Cockroach uses a <b>tracheal system</b> — a network of tracheae and tracheoles with spiracles."},
{q:"Chondrocytes are cells found in:", o:["Bone","Cartilage","Blood","Lymph"], c:1, e:"<b>Chondrocytes</b> (in lacunae) are the cells of <b>cartilage</b>."},
{q:"Which muscle is voluntary and striated?", o:["Cardiac","Smooth","Skeletal","All three"], c:2, e:"<b>Skeletal muscle</b> is both striated (cross-banded) and voluntary (under conscious control)."},
{q:"Nodes of Ranvier are gaps in:", o:["Cell membrane","Basement membrane","Myelin sheath","Sarcolemma"], c:2, e:"Nodes of Ranvier are gaps in the <b>myelin sheath</b> at regular intervals along the axon."},
{q:"How many pairs of spiracles does the cockroach possess?", o:["8","10","12","14"], c:1, e:"Cockroach has <b>10 pairs</b> of spiracles (2 thoracic + 8 abdominal)."},
{q:"Which connective tissue stores fat for insulation and energy?", o:["Dense connective","Cartilage","Adipose","Areolar"], c:2, e:"<b>Adipose tissue</b> — adipocytes packed with fat; found beneath the skin and around kidneys."},
{q:"Blood is classified as a type of:", o:["Epithelial tissue","Muscular tissue","Connective tissue","Neural tissue"], c:2, e:"<b>Blood</b> is a <b>connective tissue</b> — cells (RBCs, WBCs, platelets) suspended in a fluid matrix (plasma)."},
{q:"The ootheca of cockroach is:", o:["A digestive gland","An egg case","A reproductive organ in male","A sensory organ"], c:1, e:"<b>Ootheca</b> is the egg case produced by female cockroach housing 16 eggs."},
{q:"Which organ of the cockroach is called the 'gizzard'?", o:["Crop","Proventriculus","Hepatic caeca","Ileum"], c:1, e:"The <b>proventriculus (gizzard)</b> is the muscular organ that grinds food in the cockroach."}
],

match:[
{term:"Epithelial tissue", def:"Lining and covering; rests on basement membrane"},
{term:"Tendon", def:"Connects muscle to bone"},
{term:"Ligament", def:"Connects bone to bone"},
{term:"Intercalated disc", def:"Junction between cardiac muscle fibres"},
{term:"Node of Ranvier", def:"Gap in the myelin sheath"},
{term:"Malpighian tubules", def:"Excretory organs of cockroach; uric acid"},
{term:"Haemolymph", def:"Blood of insects; open circulatory system"},
{term:"Ootheca", def:"Cockroach egg case (16 eggs)"},
{term:"Hepatic caecae", def:"Digestive glands at cockroach midgut junction"},
{term:"Adipose tissue", def:"Fat-storing connective tissue"},
{term:"Chondrocytes", def:"Cells of cartilage in lacunae"},
{term:"Spiracles", def:"Openings of tracheal system in cockroach"}
],

pathways:[
{title:"Cockroach digestive system", prompt:"Arrange the organs of the cockroach alimentary canal in order.", steps:["Mouth","Buccal cavity","Oesophagus","Crop","Gizzard (Proventriculus)","Midgut + Hepatic caecae","Ileum","Colon","Rectum","Anus"]},
{title:"Nerve impulse conduction", prompt:"Order the steps of a nerve impulse travelling along a neuron.", steps:["Stimulus received by dendrites","Impulse travels toward cell body","Axon hillock generates action potential","Impulse travels along axon","Reaches axon terminal / synapse"]}
]
};
