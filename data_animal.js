/* ====== data_animal.js ====== */
/* ===== CHAPTER 4 · ANIMAL KINGDOM ===== */
DATA.chapters.animal = {
id:"animal", num:4, title:"Animal Kingdom", subtitle:"Basis of classification · Porifera to Mammalia",
color:"#e58a5d", colorD:"#a8512a", glyph:"🦋",

notes:[
{
id:"basis", heading:"Basis of Classification",
html:`
<p>Over a million animal species are known, so a shared framework is essential. Animals are grouped using fundamental features that cut across appearances.</p>
<h4>1. Levels of organisation</h4>
<ul>
<li><b>Cellular level</b> — cells loosely arranged (Porifera).</li>
<li><b>Tissue level</b> — cells form tissues (Coelenterata, Ctenophora).</li>
<li><b>Organ level</b> — tissues form organs (Platyhelminthes onward).</li>
<li><b>Organ-system level</b> — organs form systems (Aschelminthes onward).</li>
</ul>
<h4>2. Symmetry</h4>
<ul>
<li><b>Asymmetrical</b> — no plane divides into equal halves (most sponges).</li>
<li><b>Radial</b> — any plane through the central axis gives equal halves (Coelenterates, Ctenophores, adult echinoderms).</li>
<li><b>Bilateral</b> — only one plane divides into identical left & right halves (most animals).</li>
</ul>
<h4>3. Germ layers</h4>
<ul>
<li><b>Diploblastic</b> — two layers: ectoderm + endoderm, with mesoglea between (Coelenterates).</li>
<li><b>Triploblastic</b> — three layers: ecto-, meso-, endoderm (Platyhelminthes → Chordates).</li>
</ul>
<h4>4. Coelom (body cavity)</h4>
<table class="cmp"><thead><tr><th>Type</th><th>Body cavity</th><th>Examples</th></tr></thead><tbody>
<tr><td><b>Coelomate</b></td><td>True coelom lined by mesoderm</td><td>Annelids, arthropods, molluscs, echinoderms, hemichordates, chordates</td></tr>
<tr><td><b>Pseudocoelomate</b></td><td>Cavity not lined by mesoderm (mesoderm in scattered pouches)</td><td>Aschelminthes (round worms)</td></tr>
<tr><td><b>Acoelomate</b></td><td>No body cavity</td><td>Platyhelminthes</td></tr>
</tbody></table>
<h4>5. Segmentation & 6. Notochord</h4>
<p><b>Metameric segmentation</b> — body externally & internally divided into serial segments (Annelida). <b>Notochord</b> — a rod formed on the dorsal side during embryonic development; animals <span class="kw">with</span> it = Chordates, <span class="kw">without</span> it = Non-chordates.</p>
`
},
{
id:"nonchordata1", heading:"Porifera → Aschelminthes",
html:`
<table class="cmp"><thead><tr><th>Phylum</th><th>Key features</th><th>Symmetry / layers / coelom</th><th>Examples</th></tr></thead><tbody>
<tr><td><b>Porifera</b> (sponges)</td><td>Cellular level; <span class="kw">water canal system</span> (ostia→spongocoel→osculum); <b>choanocytes</b> (collar cells) line canals; spicules/spongin skeleton; hermaphrodite; indirect development</td><td>Mostly asymmetrical; "porocyte" body</td><td><i>Sycon, Spongilla, Euspongia</i></td></tr>
<tr><td><b>Coelenterata / Cnidaria</b></td><td>Tissue level; <span class="kw">cnidoblasts</span> (stinging cells) for defence/prey; central gastro-vascular cavity (coelenteron) with one opening; two forms — <b>polyp</b> (fixed) & <b>medusa</b> (free), with metagenesis</td><td>Radial; diploblastic</td><td><i>Hydra, Adamsia, Physalia, Aurelia, Pennatula</i></td></tr>
<tr><td><b>Ctenophora</b> (comb jellies)</td><td>Marine; 8 external <b>comb plates (ctenes)</b> for locomotion; <span class="kw">bioluminescent</span>; digestion both extra- & intracellular</td><td>Radial; diploblastic</td><td><i>Pleurobrachia, Ctenoplana</i></td></tr>
<tr><td><b>Platyhelminthes</b> (flatworms)</td><td>Organ level; dorso-ventrally flattened; mostly endoparasites; <span class="kw">flame cells</span> for osmoregulation/excretion; hooks & suckers in parasites</td><td>Bilateral; triploblastic; <b>acoelomate</b></td><td><i>Taenia</i> (tapeworm), <i>Fasciola</i> (liver fluke), <i>Planaria</i></td></tr>
<tr><td><b>Aschelminthes</b> (round worms)</td><td>Organ-system level; circular in cross-section; many parasitic; sexes separate (<span class="kw">dioecious</span>) with sexual dimorphism</td><td>Bilateral; triploblastic; <b>pseudocoelomate</b></td><td><i>Ascaris, Wuchereria</i> (filaria), <i>Ancylostoma</i> (hookworm)</td></tr>
</tbody></table>
<div class="callout"><b>Choanocytes</b> = the signature cell of sponges. <b>Cnidoblasts</b> = the signature cell of cnidarians. <b>Flame cells</b> = the signature cell of flatworms.</div>
`
},
{
id:"nonchordata2", heading:"Annelida → Echinodermata → Hemichordata",
html:`
<table class="cmp"><thead><tr><th>Phylum</th><th>Key features</th><th>Examples</th></tr></thead><tbody>
<tr><td><b>Annelida</b></td><td><span class="kw">Metameric segmentation</span>; coelomate; closed circulation; <b>nephridia</b> for excretion & osmoregulation; longitudinal & circular muscles; <i>Nereis</i> has parapodia</td><td><i>Nereis, Pheretima</i> (earthworm), <i>Hirudinaria</i> (leech)</td></tr>
<tr><td><b>Arthropoda</b> (largest phylum)</td><td><span class="kw">Jointed appendages</span>; chitinous <b>exoskeleton</b>; body = head, thorax, abdomen; <b>open</b> circulatory system; respiration via gills/book gills/book lungs/trachea; sensory & compound eyes</td><td><i>Apis</i> (bee), <i>Bombyx</i> (silkworm), <i>Laccifer</i> (lac insect), <i>Anopheles, Locusta, Limulus</i> (king crab, a living fossil)</td></tr>
<tr><td><b>Mollusca</b> (2nd largest)</td><td>Soft body covered by a <b>mantle</b>; usually a calcareous shell; muscular foot; <span class="kw">radula</span> (rasping feeding organ); gills for respiration</td><td><i>Pila</i> (apple snail), <i>Pinctada</i> (pearl oyster), <i>Sepia, Loligo, Octopus, Aplysia</i> (sea hare), <i>Dentalium, Chaetopleura</i></td></tr>
<tr><td><b>Echinodermata</b></td><td>Spiny endoskeleton of calcareous ossicles; unique <span class="kw">water vascular system</span> (tube feet) for locomotion, food capture & respiration; <b>marine</b>; adults radial but larvae bilateral</td><td><i>Asterias</i> (starfish), <i>Echinus</i> (sea urchin), <i>Antedon</i> (sea lily), <i>Cucumaria</i> (sea cucumber), <i>Ophiura</i> (brittle star)</td></tr>
<tr><td><b>Hemichordata</b></td><td>Worm-like marine animals; have a rudimentary <span class="kw">stomochord</span> in the collar (not a true notochord); proboscis–collar–trunk body</td><td><i>Balanoglossus, Saccoglossus</i></td></tr>
</tbody></table>
<div class="callout"><b>Water vascular system</b> = the unique identity of echinoderms. <b>Radula</b> = molluscs. <b>Metameric segmentation + nephridia</b> = annelids.</div>
`
},
{
id:"chordata", heading:"Chordata — fundamental features & lower groups",
html:`
<p>Four features define <b>Chordata</b> (at least at some life stage):</p>
<div class="flow">
<span class="node">Notochord</span><span class="node">Dorsal hollow nerve cord</span><span class="node">Pharyngeal gill slits</span><span class="node">Post-anal tail</span>
</div>
<table class="cmp"><thead><tr><th>Subphylum</th><th>Notochord</th><th>Examples</th></tr></thead><tbody>
<tr><td><b>Urochordata</b> (Tunicata)</td><td>Present only in the <span class="kw">larval tail</span></td><td><i>Ascidia, Salpa, Doliolum</i></td></tr>
<tr><td><b>Cephalochordata</b></td><td>Extends from head to tail, <span class="kw">persists throughout life</span></td><td><i>Branchiostoma</i> (Amphioxus / lancelet)</td></tr>
<tr><td><b>Vertebrata</b></td><td>Notochord replaced by a <b>vertebral column</b> in the adult; have a cranium</td><td>Fishes → Mammals</td></tr>
</tbody></table>
<div class="callout"><b>All vertebrates are chordates, but all chordates are not vertebrates.</b> Vertebrates additionally have a backbone and a skull.</div>
`
},
{
id:"vertebrata", heading:"Vertebrata — the seven classes",
html:`
<table class="cmp"><thead><tr><th>Class</th><th>Hallmarks</th><th>Examples</th></tr></thead><tbody>
<tr><td><b>Cyclostomata</b></td><td><span class="kw">Jawless</span>; circular sucking mouth; no scales/paired fins; ectoparasites on fish; cartilaginous skeleton</td><td><i>Petromyzon</i> (lamprey), <i>Myxine</i> (hagfish)</td></tr>
<tr><td><b>Chondrichthyes</b></td><td>Marine; <span class="kw">cartilaginous</span> endoskeleton; placoid scales; ventral mouth; no air bladder so must swim; internal fertilisation</td><td><i>Scoliodon</i> (dogfish), <i>Pristis</i> (sawfish), <i>Carcharodon</i> (great white), <i>Trygon</i> (sting ray)</td></tr>
<tr><td><b>Osteichthyes</b></td><td><span class="kw">Bony</span> endoskeleton; cycloid/ctenoid scales; <b>air bladder</b> regulates buoyancy; operculum over gills; mostly external fertilisation, oviparous</td><td><i>Labeo</i> (rohu), <i>Catla, Clarias</i> (magur), <i>Exocoetus</i> (flying fish), <i>Hippocampus</i> (sea horse)</td></tr>
<tr><td><b>Amphibia</b></td><td>Live on land & water; moist skin (no scales); two pairs of limbs; 3-chambered heart; <span class="kw">external fertilisation</span>, oviparous</td><td><i>Rana</i> (frog), <i>Bufo</i> (toad), <i>Hyla</i> (tree frog), <i>Salamandra, Ichthyophis</i> (limbless)</td></tr>
<tr><td><b>Reptilia</b></td><td>Creeping; dry, <span class="kw">scaly</span> skin; mostly 3-chambered heart (crocodile 4); <b>cold-blooded</b>; internal fertilisation; lay shelled eggs on land</td><td><i>Chelone</i> (turtle), <i>Testudo</i> (tortoise), <i>Naja</i> (cobra), <i>Crocodilus, Hemidactylus</i> (wall lizard)</td></tr>
<tr><td><b>Aves</b> (birds)</td><td><span class="kw">Feathers</span>; forelimbs → wings; beak; <b>4-chambered</b> heart; warm-blooded; bones pneumatic (air-filled); oviparous</td><td><i>Corvus</i> (crow), <i>Columba</i> (pigeon), <i>Struthio</i> (ostrich), <i>Neophron</i> (vulture)</td></tr>
<tr><td><b>Mammalia</b></td><td><span class="kw">Mammary glands</span> (milk); hair/fur; external ears (pinna); <b>4-chambered</b> heart; warm-blooded; mostly viviparous</td><td><i>Ornithorhynchus</i> (egg-laying platypus), <i>Macropus</i> (kangaroo), <i>Pteropus</i> (flying fox), <i>Balaenoptera</i> (blue whale), <i>Panthera, Homo</i></td></tr>
</tbody></table>
<div class="callout"><b>Warm-blooded (homeothermic):</b> only <b>Aves & Mammalia</b>. <b>4-chambered heart:</b> Aves, Mammalia, and crocodiles. Everything else is cold-blooded.</div>
`
}
],

mnemonics:[
{title:"Non-chordate phyla in order", device:`<b>P</b>lease <b>C</b>ome <b>C</b>lear <b>P</b>lates <b>A</b>fter <b>A</b> <b>M</b>eal & <b>E</b>at <b>H</b>oney`, expand:[
 {L:"P",t:"Porifera"},{L:"C",t:"Coelenterata"},{L:"C",t:"Ctenophora"},{L:"P",t:"Platyhelminthes"},{L:"A",t:"Aschelminthes"},{L:"A",t:"Annelida"},{L:"M",t:"Mollusca... wait — Arthropoda comes first"},{L:"E",t:"Echinodermata"},{L:"H",t:"Hemichordata"}
]},
{title:"Easier phyla order", device:`<b>P</b>orifera, <b>C</b>oelenterata, <b>C</b>tenophora, <b>P</b>latyhelminthes, <b>A</b>schelminthes, <b>A</b>nnelida, <b>A</b>rthropoda, <b>M</b>ollusca, <b>E</b>chinodermata, <b>H</b>emichordata → "PCC-PA-AAM-EH"`, expand:[
 {L:"3",t:"Three As in a row: Aschelminthes, Annelida, Arthropoda"}
]},
{title:"Signature cells", device:`Sponge <b>C</b>hoir (Choanocytes) · Cnidarian <b>C</b>annon (Cnidoblasts) · Flatworm <b>F</b>lame (Flame cells)`, expand:[
 {L:"C",t:"Choanocytes — Porifera"},
 {L:"C",t:"Cnidoblasts — Coelenterata"},
 {L:"F",t:"Flame cells — Platyhelminthes"}
]},
{title:"Coelom trio", device:`<b>A</b>coelomate flatworms · <b>Pseudo</b>coelomate round worms · <b>True</b> coelom from Annelids on`, expand:[
 {L:"A",t:"Platyhelminthes = acoelomate"},
 {L:"P",t:"Aschelminthes = pseudocoelomate"},
 {L:"T",t:"Annelida onward = true coelomate"}
]},
{title:"Vertebrate classes in order", device:`<b>C</b>ute <b>C</b>hubby <b>O</b>tters <b>A</b>re <b>R</b>eally <b>A</b>dorable <b>M</b>ammals`, expand:[
 {L:"C",t:"Cyclostomata (jawless)"},{L:"C",t:"Chondrichthyes (cartilage fish)"},{L:"O",t:"Osteichthyes (bony fish)"},{L:"A",t:"Amphibia"},{L:"R",t:"Reptilia"},{L:"A",t:"Aves"},{L:"M",t:"Mammalia"}
]},
{title:"Who is warm-blooded?", device:`Only <b>A</b>ves & <b>M</b>ammals stay warm — "AM = Always Mild"`, expand:[
 {L:"♨",t:"Homeothermic = Aves + Mammalia only"}
]},
{title:"4-chambered hearts", device:`<b>B</b>irds, <b>M</b>ammals & the <b>C</b>rocodile — "BMC has 4 rooms"`, expand:[
 {L:"4",t:"Crocodile is the reptile exception with a 4-chambered heart"}
]},
{title:"Echinoderm identity", device:`<b>E</b>chinoderm = <b>E</b>xclusive <b>W</b>ater <b>V</b>ascular system + spines, all marine`, expand:[
 {L:"WVS",t:"Tube feet run on the water vascular system"}
]},
{title:"Egg-laying mammal", device:`<b>Ornitho</b>rhynchus the platypus lays eggs — "Ornitho = bird-like, so it lays like a bird"`, expand:[
 {L:"🥚",t:"Platypus (Ornithorhynchus) & echidna are egg-laying mammals"}
]}
],

flashcards:[
{front:"The four fundamental chordate features", back:"(1) Notochord, (2) dorsal hollow nerve cord, (3) pharyngeal gill slits, (4) post-anal tail — present at least at some life stage."},
{front:"Signature cell of Porifera", back:"Choanocytes (collar cells) that line the canal system and drive the water current."},
{front:"Signature cell of Coelenterata", back:"Cnidoblasts (stinging cells) used for defence and capturing prey."},
{front:"Signature cell of Platyhelminthes", back:"Flame cells — used for excretion and osmoregulation."},
{front:"Coelom status: flatworm vs roundworm vs annelid", back:"Platyhelminthes = acoelomate; Aschelminthes = pseudocoelomate; Annelida onward = true coelomate."},
{front:"Which phylum is the largest? Its hallmark?", back:"Arthropoda — jointed appendages, chitinous exoskeleton, open circulatory system."},
{front:"Unique organ system of echinoderms", back:"Water vascular system (tube feet) for locomotion, feeding & respiration. All echinoderms are marine."},
{front:"What is the radula?", back:"A rasping, file-like feeding organ found in molluscs."},
{front:"Diploblastic vs triploblastic — give the phyla", back:"Diploblastic (2 germ layers): Coelenterata & Ctenophora. Triploblastic: Platyhelminthes through Chordates."},
{front:"Polyp vs medusa", back:"Two body forms of cnidarians: polyp is sessile (e.g. Hydra); medusa is free-swimming (e.g. jellyfish). Alternation = metagenesis."},
{front:"Cyclostomata distinguishing feature + examples", back:"Jawless vertebrates with a circular sucking mouth; ectoparasites on fish. Petromyzon, Myxine."},
{front:"Chondrichthyes vs Osteichthyes skeleton & air bladder", back:"Chondrichthyes: cartilaginous skeleton, NO air bladder (must keep swimming). Osteichthyes: bony skeleton, air bladder present."},
{front:"Which animal classes are warm-blooded?", back:"Only Aves (birds) and Mammalia."},
{front:"Which animals have a 4-chambered heart?", back:"Aves, Mammalia, and crocodiles (the reptile exception)."},
{front:"Reptilian skin & fertilisation", back:"Dry, cornified scaly skin; internal fertilisation; lay shelled eggs on land; cold-blooded."},
{front:"Amphibian fertilisation & skin", back:"External fertilisation, oviparous; moist skin without scales; usually 3-chambered heart."},
{front:"Defining feature of Mammalia", back:"Mammary glands (milk for young); body hair; external pinna; mostly viviparous; 4-chambered heart."},
{front:"Notochord in the three chordate subphyla", back:"Urochordata: only in larval tail. Cephalochordata: head-to-tail, lifelong. Vertebrata: replaced by vertebral column in adult."},
{front:"Metameric segmentation + nephridia → which phylum?", back:"Annelida (e.g. earthworm Pheretima, leech Hirudinaria)."},
{front:"Name an egg-laying mammal", back:"Ornithorhynchus (platypus) — an oviparous (egg-laying) mammal."}
],

recall:[
{q:"List the six fundamental bases used to classify animals.", hint:"Organisation, symmetry, layers...", a:"(1) Levels of organisation, (2) symmetry, (3) diploblastic/triploblastic organisation, (4) presence/type of coelom, (5) segmentation, (6) presence of a notochord."},
{q:"Distinguish acoelomate, pseudocoelomate and coelomate with one example each.", hint:"Is the cavity lined by mesoderm?", a:"<b>Acoelomate</b> — no body cavity (Platyhelminthes). <b>Pseudocoelomate</b> — cavity not lined by mesoderm (Aschelminthes/round worms). <b>Coelomate</b> — true coelom lined by mesoderm (Annelida, Arthropoda, Mollusca, Echinodermata, Chordata)."},
{q:"Name the signature cell of Porifera, Coelenterata and Platyhelminthes and its function.", hint:"Collar, sting, flame.", a:"<b>Choanocytes</b> (Porifera) — collar cells driving the water current. <b>Cnidoblasts</b> (Coelenterata) — sting cells for defence/prey capture. <b>Flame cells</b> (Platyhelminthes) — excretion & osmoregulation."},
{q:"Why is Arthropoda the largest phylum? State its distinguishing features.", hint:"Joints, skeleton, circulation.", a:"Arthropoda contains the most species. Hallmarks: <b>jointed appendages</b>, a chitinous <b>exoskeleton</b>, body divided into head–thorax–abdomen, an <b>open circulatory system</b>, and varied respiratory organs (gills, book gills, book lungs, tracheae). e.g. Apis, Bombyx, Anopheles, Limulus."},
{q:"Describe the unique feature of echinoderms and where they live.", hint:"Tube feet.", a:"Echinoderms have a <b>water vascular system</b> operating tube feet for locomotion, food capture and respiration, plus a spiny calcareous endoskeleton. They are exclusively <b>marine</b>; adults are radially symmetrical but larvae are bilateral. e.g. Asterias, Echinus, Cucumaria."},
{q:"List the four fundamental features of chordates and explain how the three subphyla differ in notochord.", hint:"Notochord position over life.", a:"Features: notochord, dorsal hollow nerve cord, pharyngeal gill slits, post-anal tail. <b>Urochordata</b> — notochord only in larval tail; <b>Cephalochordata</b> — notochord head-to-tail throughout life; <b>Vertebrata</b> — notochord replaced by a vertebral column in the adult."},
{q:"Compare Chondrichthyes and Osteichthyes (skeleton, scales, air bladder, fertilisation).", hint:"Cartilage vs bone.", a:"<b>Chondrichthyes:</b> cartilaginous skeleton, placoid scales, ventral mouth, NO air bladder (must swim continuously), internal fertilisation (e.g. Scoliodon, Trygon). <b>Osteichthyes:</b> bony skeleton, cycloid/ctenoid scales, operculum, air bladder present, mostly external fertilisation & oviparous (e.g. Labeo, Hippocampus)."},
{q:"Which vertebrate classes are warm-blooded and which have a 4-chambered heart?", hint:"AM and the croc.", a:"<b>Warm-blooded (homeothermic):</b> only Aves and Mammalia. <b>4-chambered heart:</b> Aves, Mammalia, and the crocodile (the reptilian exception). All other vertebrates are cold-blooded."},
{q:"Give the distinguishing features of Amphibia and Reptilia.", hint:"Skin & where eggs are laid.", a:"<b>Amphibia:</b> moist scaleless skin, two pairs of limbs, 3-chambered heart, external fertilisation, lay eggs in water (Rana, Bufo, Ichthyophis). <b>Reptilia:</b> dry cornified scaly skin, internal fertilisation, lay shelled eggs on land, cold-blooded, mostly 3-chambered heart (Naja, Chelone, Crocodilus)."},
{q:"State the defining features of Mammalia and name an egg-laying mammal.", hint:"Milk, hair, pinna.", a:"Mammals have <b>mammary glands</b> (milk), body hair, external pinna, a 4-chambered heart, are warm-blooded and mostly viviparous. The egg-laying (oviparous) mammal is <b>Ornithorhynchus</b> (platypus)."}
],

mcqs:[
{q:"Choanocytes (collar cells) are characteristic of:", o:["Coelenterata","Porifera","Annelida","Echinodermata"], c:1, e:"<b>Porifera</b> (sponges) have choanocytes lining the canal system."},
{q:"Which phylum is acoelomate?", o:["Annelida","Arthropoda","Platyhelminthes","Mollusca"], c:2, e:"<b>Platyhelminthes</b> have no body cavity (acoelomate)."},
{q:"Cnidoblasts are found in:", o:["Porifera","Coelenterata","Ctenophora","Platyhelminthes"], c:1, e:"<b>Coelenterata (Cnidaria)</b> use cnidoblasts for defence and capturing prey."},
{q:"The largest animal phylum is:", o:["Mollusca","Chordata","Arthropoda","Annelida"], c:2, e:"<b>Arthropoda</b> is the largest phylum (jointed appendages, chitin exoskeleton)."},
{q:"The water vascular system is the unique feature of:", o:["Mollusca","Echinodermata","Hemichordata","Annelida"], c:1, e:"Only <b>Echinodermata</b> possess a water vascular system with tube feet."},
{q:"Metameric segmentation is best shown by:", o:["Round worms","Flatworms","Annelids","Sponges"], c:2, e:"<b>Annelida</b> show true metameric segmentation; they also have nephridia."},
{q:"The radula is a feeding organ of:", o:["Arthropods","Molluscs","Echinoderms","Annelids"], c:1, e:"The rasping <b>radula</b> belongs to molluscs."},
{q:"In which subphylum does the notochord persist throughout life?", o:["Urochordata","Cephalochordata","Vertebrata","All chordates"], c:1, e:"<b>Cephalochordata</b> (e.g. Branchiostoma) retain the notochord head-to-tail for life."},
{q:"Jawless vertebrates that are ectoparasites on fish belong to:", o:["Chondrichthyes","Cyclostomata","Osteichthyes","Amphibia"], c:1, e:"<b>Cyclostomata</b> (Petromyzon, Myxine) are jawless."},
{q:"An air bladder is present in:", o:["Chondrichthyes","Osteichthyes","Both","Neither"], c:1, e:"<b>Osteichthyes</b> (bony fish) have an air bladder; cartilaginous fish lack it and must keep swimming."},
{q:"Which classes are warm-blooded?", o:["Reptilia & Aves","Aves & Mammalia","Amphibia & Mammalia","Only Mammalia"], c:1, e:"Only <b>Aves and Mammalia</b> are homeothermic (warm-blooded)."},
{q:"Which reptile has a 4-chambered heart?", o:["Cobra","Turtle","Crocodile","Wall lizard"], c:2, e:"The <b>crocodile</b> is the reptilian exception with a 4-chambered heart."},
{q:"Diploblastic organisation is seen in:", o:["Porifera & Annelida","Coelenterata & Ctenophora","Platyhelminthes","Echinodermata"], c:1, e:"<b>Coelenterata and Ctenophora</b> have two germ layers (diploblastic)."},
{q:"Pheretima and Hirudinaria belong to:", o:["Mollusca","Annelida","Arthropoda","Aschelminthes"], c:1, e:"Earthworm (Pheretima) and leech (Hirudinaria) are <b>Annelids</b>."},
{q:"An egg-laying mammal is:", o:["Macropus","Pteropus","Ornithorhynchus","Balaenoptera"], c:2, e:"<b>Ornithorhynchus</b> (platypus) is an oviparous mammal."},
{q:"Pleurobrachia and Ctenoplana belong to:", o:["Coelenterata","Ctenophora","Porifera","Echinodermata"], c:1, e:"They are <b>Ctenophores</b> (comb jellies), known for bioluminescence and comb plates."},
{q:"Flame cells perform which function in flatworms?", o:["Locomotion","Digestion","Excretion & osmoregulation","Reproduction"], c:2, e:"<b>Flame cells</b> handle excretion and osmoregulation in Platyhelminthes."},
{q:"Bilateral larva but radial adult is characteristic of:", o:["Annelida","Echinodermata","Mollusca","Arthropoda"], c:1, e:"<b>Echinoderms</b> have bilateral larvae and radially symmetric adults."},
{q:"Balanoglossus is an example of:", o:["Hemichordata","Cephalochordata","Urochordata","Cyclostomata"], c:0, e:"<b>Balanoglossus</b> is a hemichordate (has a stomochord, not a true notochord)."},
{q:"Which feature is NOT one of the four basic chordate characters?", o:["Notochord","Dorsal hollow nerve cord","Pharyngeal gill slits","Ventral solid nerve cord"], c:3, e:"Chordates have a <b>dorsal hollow</b> nerve cord, not a ventral solid one (that is the non-chordate pattern)."}
],

match:[
{term:"Porifera", def:"Choanocytes; water canal system"},
{term:"Coelenterata", def:"Cnidoblasts; polyp & medusa"},
{term:"Ctenophora", def:"Comb plates; bioluminescent"},
{term:"Platyhelminthes", def:"Flame cells; acoelomate"},
{term:"Aschelminthes", def:"Round worms; pseudocoelomate"},
{term:"Annelida", def:"Metameric segments; nephridia"},
{term:"Arthropoda", def:"Jointed legs; chitin exoskeleton"},
{term:"Mollusca", def:"Mantle; radula; muscular foot"},
{term:"Echinodermata", def:"Water vascular system; marine"},
{term:"Cyclostomata", def:"Jawless; sucking mouth"},
{term:"Aves", def:"Feathers; pneumatic bones"},
{term:"Mammalia", def:"Mammary glands; pinna"}
],

pathways:[
{title:"Non-chordate phyla order", prompt:"Arrange the non-chordate phyla in the standard sequence.", steps:["Porifera","Coelenterata","Ctenophora","Platyhelminthes","Aschelminthes","Annelida","Arthropoda","Mollusca","Echinodermata","Hemichordata"]},
{title:"Vertebrate classes order", prompt:"Order the seven vertebrate classes (simple → advanced).", steps:["Cyclostomata","Chondrichthyes","Osteichthyes","Amphibia","Reptilia","Aves","Mammalia"]},
{title:"Sponge water flow", prompt:"Trace the path of water through a sponge.", steps:["Ostia","Spongocoel","Osculum"]},
{title:"Chordate subphyla by notochord extent", prompt:"Order subphyla from least to most notochord persistence.", steps:["Urochordata (larval tail only)","Cephalochordata (lifelong, full length)","Vertebrata (replaced by vertebral column)"]}
]
};