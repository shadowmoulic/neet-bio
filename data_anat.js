/* ====== data_anat.js ====== */
/* ===== CHAPTER 6 · ANATOMY OF FLOWERING PLANTS ===== */
DATA.chapters.anat = {
id:"anat", num:6, title:"Anatomy of Flowering Plants",
subtitle:"Tissues · Tissue systems · Root, stem & leaf anatomy · Secondary growth",
color:"#bb8ed6", colorD:"#7f4ea0", glyph:"🔬",

notes:[
{
id:"meristem", heading:"Meristematic Tissues",
html:`
<p>Anatomy is the study of <span class="kw">internal structure</span>. Though flowering plants look very different outside, they are built from similar tissues inside. A <b>tissue</b> is a group of cells with a common origin, usually performing a common function.</p>
<p>On the basis of dividing ability, tissues are <b>meristematic</b> (actively dividing) or <b>permanent</b> (lost the ability to divide).</p>
<h4>Types of meristem — by position</h4>
<table class="cmp"><thead><tr><th>Meristem</th><th>Location</th><th>Function</th></tr></thead><tbody>
<tr><td><b>Apical</b></td><td>Tips of root &amp; shoot</td><td>Primary growth — increase in <span class="kw">length</span></td></tr>
<tr><td><b>Intercalary</b></td><td>At base of leaves / internodes (e.g. grasses)</td><td>Part of primary meristem left behind; helps regrowth after grazing/mowing</td></tr>
<tr><td><b>Lateral</b></td><td>Along the sides (vascular cambium, cork cambium)</td><td>Secondary growth — increase in <span class="kw">girth/thickness</span></td></tr>
</tbody></table>
<div class="callout"><b>Primary vs secondary meristem:</b> Apical &amp; intercalary are <b>primary</b> (present from the embryo). Lateral meristems are <b>secondary</b> (appear later). Cells left behind by the shoot apex that form the leaf primordia and axillary buds give rise to nodes/internodes.</div>
<h4>Growth zones in the root tip</h4>
<div class="flow">
<span class="node">Region of meristematic activity</span><span class="arr">→</span><span class="node">Region of elongation</span><span class="arr">→</span><span class="node">Region of maturation</span>
</div>
<p>Cells made by the apical meristem differentiate and mature into permanent tissues — this is <span class="kw">differentiation</span>. When a mature cell regains the ability to divide it is <b>dedifferentiation</b> (e.g. cork cambium, interfascicular cambium); when such tissue again loses dividing ability it is <b>redifferentiation</b>.</p>
`
},
{
id:"simple", heading:"Simple Permanent Tissues",
html:`
<p>A <b>simple tissue</b> is made of only <span class="kw">one type of cell</span>. There are three: parenchyma, collenchyma and sclerenchyma.</p>
<table class="cmp"><thead><tr><th>Feature</th><th>Parenchyma</th><th>Collenchyma</th><th>Sclerenchyma</th></tr></thead><tbody>
<tr><td><b>Cell wall</b></td><td>Thin, cellulosic</td><td>Thickened at <span class="kw">corners</span> (cellulose, hemicellulose, pectin)</td><td>Thick, <span class="kw">lignified</span> with narrow lumen</td></tr>
<tr><td><b>Living?</b></td><td>Living</td><td>Living</td><td>Usually <b>dead</b> at maturity</td></tr>
<tr><td><b>Shape/arrangement</b></td><td>Isodiametric; little space</td><td>Oval/round; in layers below epidermis, often in patches</td><td>Long fibres or short sclereids (stone cells)</td></tr>
<tr><td><b>Main job</b></td><td>Storage, photosynthesis (chlorenchyma), secretion</td><td>Mechanical support to growing parts; flexibility</td><td>Mechanical strength &amp; rigidity</td></tr>
<tr><td><b>Where</b></td><td>Everywhere — bulk of soft tissue</td><td>Petioles, leaf margins, dicot stem hypodermis</td><td>Fibres (jute, flax) &amp; sclereids (nut shells, pear grit)</td></tr>
</tbody></table>
<div class="callout"><b>Sclerenchyma = two kinds:</b> <b>Fibres</b> (long, narrow, pointed ends, in bundles) and <b>sclereids</b> (short, isodiametric stone cells — give the gritty texture of guava/pear and hardness to seed coats &amp; nut shells).</div>
<p>Note: collenchyma is the <span class="kw">only living mechanical tissue</span> and the only one giving support <i>plus</i> flexibility to growing organs.</p>
`
},
{
id:"complex", heading:"Complex Permanent Tissues — Xylem & Phloem",
html:`
<p>A <b>complex tissue</b> is made of <span class="kw">more than one type of cell</span> working as a unit. The two complex tissues — xylem and phloem — together make up the <b>vascular bundle</b>.</p>
<h4>Xylem — conducts water &amp; minerals upward; gives mechanical strength</h4>
<table class="cmp"><thead><tr><th>Element</th><th>Living/Dead</th><th>Role</th></tr></thead><tbody>
<tr><td><b>Tracheids</b></td><td>Dead, elongated, tapering, lignified</td><td>Chief water-conducting element; present in <span class="kw">all</span> vascular plants</td></tr>
<tr><td><b>Vessels</b> (trachea)</td><td>Dead tube with wide lumen, perforated end walls</td><td>Efficient water conduction; characteristic of <span class="kw">angiosperms</span></td></tr>
<tr><td><b>Xylem fibres</b></td><td>Dead, thick-walled</td><td>Mechanical support</td></tr>
<tr><td><b>Xylem parenchyma</b></td><td><b>Living</b></td><td>Stores food; radial conduction of water</td></tr>
</tbody></table>
<p><b>Primary xylem</b> is of two kinds by the order in which it matures: <span class="kw">protoxylem</span> (first formed) and <span class="kw">metaxylem</span> (later formed).</p>
<table class="cmp"><thead><tr><th>Arrangement</th><th>Protoxylem position</th><th>Found in</th></tr></thead><tbody>
<tr><td><b>Endarch</b></td><td>Towards the centre (proto inside, meta outside)</td><td><span class="kw">Stems</span></td></tr>
<tr><td><b>Exarch</b></td><td>Towards the periphery (proto outside)</td><td><span class="kw">Roots</span></td></tr>
</tbody></table>
<h4>Phloem — conducts food (sucrose), mostly downward, but in both directions</h4>
<ul>
<li><b>Sieve tube elements</b> — long tube-like living cells joined end to end; end walls are perforated <span class="kw">sieve plates</span>. Lose nucleus at maturity; controlled by companion cell.</li>
<li><b>Companion cells</b> — specialised parenchyma linked to sieve tubes by pits; keep the pressure gradient for transport.</li>
<li><b>Phloem parenchyma</b> — stores food &amp; resins; <span class="kw">absent in most monocots</span>.</li>
<li><b>Phloem fibres (bast fibres)</b> — the only dead element; sclerenchymatous; commercial fibres of jute, flax, hemp.</li>
</ul>
<div class="callout"><b>Remember:</b> Primary phloem matures as <b>protophloem</b> (narrow sieve tubes) then <b>metaphloem</b> (bigger). Only the sieve-tube element + companion cell are found together in angiosperms.</div>
`
},
{
id:"systems", heading:"The Tissue Systems",
html:`
<p>Based on structure &amp; location, all tissues of a plant fall into three <b>tissue systems</b> (a classification by J. von Sachs).</p>
<table class="cmp"><thead><tr><th>Tissue system</th><th>Made of</th><th>Function</th></tr></thead><tbody>
<tr><td><b>Epidermal</b></td><td>Epidermal cells, <span class="kw">stomata</span>, trichomes &amp; root hairs</td><td>Outer protective covering; gas exchange; reduces water loss (cuticle)</td></tr>
<tr><td><b>Ground</b></td><td>Parenchyma, collenchyma, sclerenchyma (everything except epidermis &amp; vascular)</td><td>Photosynthesis, storage, support; includes cortex, pericycle, pith, medullary rays</td></tr>
<tr><td><b>Vascular</b></td><td>Xylem + phloem (the vascular bundles)</td><td>Conduction of water, minerals &amp; food</td></tr>
</tbody></table>
<h4>The epidermal system in detail</h4>
<ul>
<li>Usually single-layered; outer wall often covered by waxy <span class="kw">cuticle</span> (absent in roots).</li>
<li>A <b>stoma</b> = a pore guarded by two bean-shaped (kidney) <b>guard cells</b>; in grasses guard cells are dumb-bell shaped. Surrounding specialised cells = <b>subsidiary cells</b>. The whole apparatus = <span class="kw">stomatal apparatus</span>.</li>
<li><b>Trichomes</b> (shoot hairs) — usually multicellular; help prevent water loss. <b>Root hairs</b> — unicellular extensions that absorb water &amp; minerals.</li>
</ul>
<h4>Kinds of vascular bundles</h4>
<table class="cmp"><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody>
<tr><td><b>Radial</b></td><td>Xylem &amp; phloem on <span class="kw">different radii</span>, alternating — typical of <b>roots</b></td></tr>
<tr><td><b>Conjoint</b></td><td>Xylem &amp; phloem on the <span class="kw">same radius</span>, phloem usually outside xylem — typical of <b>stems &amp; leaves</b></td></tr>
<tr><td><b>Open</b></td><td>Cambium present between xylem &amp; phloem → can show secondary growth (<b>dicot stem</b>)</td></tr>
<tr><td><b>Closed</b></td><td>No cambium → no secondary growth (<b>monocot stem</b>)</td></tr>
</tbody></table>
`
},
{
id:"rootstem", heading:"Anatomy of Root & Stem (Dicot vs Monocot)",
html:`
<h4>Dicot root vs Monocot root</h4>
<table class="cmp"><thead><tr><th>Feature</th><th>Dicot root (e.g. gram)</th><th>Monocot root (e.g. maize)</th></tr></thead><tbody>
<tr><td><b>Xylem arches</b></td><td>2–4 (di/tetrarch); <span class="kw">limited number</span></td><td>Many — <span class="kw">polyarch</span></td></tr>
<tr><td><b>Pith</b></td><td>Small or absent</td><td>Large, well developed</td></tr>
<tr><td><b>Secondary growth</b></td><td>Present</td><td>Absent</td></tr>
<tr><td><b>Common</b></td><td colspan="2">Both: epiblema (with root hairs) → cortex → endodermis with <span class="kw">Casparian strips</span> → pericycle → radial &amp; exarch vascular bundles. Pericycle gives rise to lateral roots.</td></tr>
</tbody></table>
<h4>Dicot stem vs Monocot stem</h4>
<table class="cmp"><thead><tr><th>Feature</th><th>Dicot stem (e.g. sunflower)</th><th>Monocot stem (e.g. maize)</th></tr></thead><tbody>
<tr><td><b>Vascular bundles</b></td><td>In a <span class="kw">ring</span>; conjoint, open, endarch</td><td><span class="kw">Scattered</span> in ground tissue; conjoint, closed</td></tr>
<tr><td><b>Bundle sheath</b></td><td>Absent</td><td>Sclerenchymatous sheath present</td></tr>
<tr><td><b>Ground tissue</b></td><td>Differentiated into hypodermis (collenchyma), cortex, endodermis, pericycle, pith</td><td>Not differentiated; ground parenchyma throughout</td></tr>
<tr><td><b>Special feature</b></td><td>Medullary rays between bundles</td><td><span class="kw">Water-containing cavity</span> in each bundle (in monocots like maize)</td></tr>
<tr><td><b>Secondary growth</b></td><td>Present (open bundles)</td><td>Absent (closed bundles)</td></tr>
</tbody></table>
<div class="callout"><b>Endodermis with Casparian strip:</b> the innermost cortex layer; its tangential &amp; radial walls have a band of <span class="kw">suberin</span> (the Casparian strip) that forces water to pass through the cell membrane — a checkpoint for entry into the stele.</div>
`
},
{
id:"leaf", heading:"Anatomy of the Leaf (Dorsiventral vs Isobilateral)",
html:`
<p>The leaf blade in section shows three parts: <b>epidermis</b>, <b>mesophyll</b> (the photosynthetic ground tissue) and <b>vascular system</b> (veins).</p>
<table class="cmp"><thead><tr><th>Feature</th><th>Dorsiventral (Dicot) leaf</th><th>Isobilateral (Monocot) leaf</th></tr></thead><tbody>
<tr><td><b>Orientation</b></td><td>Held more or less horizontal; two distinct faces</td><td>Held vertical/erect; both faces alike</td></tr>
<tr><td><b>Mesophyll</b></td><td>Differentiated into <span class="kw">palisade</span> (upper, columnar) &amp; <span class="kw">spongy</span> (lower, loose)</td><td>Not differentiated — uniform spongy-type cells</td></tr>
<tr><td><b>Stomata</b></td><td>More on the lower surface</td><td>Equal on both surfaces</td></tr>
<tr><td><b>Special cells</b></td><td>—</td><td><span class="kw">Bulliform (motor) cells</span> in upper epidermis — lose turgor to roll/fold the leaf, reducing water loss</td></tr>
<tr><td><b>Vein endings</b></td><td>Reticulate venation</td><td>Parallel venation; similar-sized bundles in a row</td></tr>
</tbody></table>
<h4>Kranz anatomy — the C₄ leaf</h4>
<p>In C₄ plants (maize, sorghum, sugarcane) the vascular bundles are surrounded by a ring of large, thick-walled <span class="kw">bundle-sheath cells</span> rich in chloroplasts and without intercellular spaces — the <b>Kranz</b> ("wreath") arrangement. This separates the two stages of C₄ photosynthesis spatially and makes these plants very efficient.</p>
<div class="flow">
<span class="node">Upper epidermis</span><span class="arr">→</span><span class="node">Palisade</span><span class="arr">→</span><span class="node">Spongy mesophyll</span><span class="arr">→</span><span class="node">Vascular bundle (vein)</span><span class="arr">→</span><span class="node">Lower epidermis + stomata</span>
</div>
`
},
{
id:"secondary", heading:"Secondary Growth",
html:`
<p><b>Secondary growth</b> increases the <span class="kw">girth/diameter</span> of stems &amp; roots. It is brought about by two lateral meristems: the <b>vascular cambium</b> and the <b>cork cambium</b>.</p>
<h4>1 · Vascular cambium → secondary vascular tissue</h4>
<ul>
<li>In the dicot stem, the cambium between xylem &amp; phloem (<b>intrafascicular</b>) joins with cells of the medullary ray that dedifferentiate (<b>interfascicular cambium</b>) to form a continuous <span class="kw">cambial ring</span>.</li>
<li>The cambium cuts off cells: <b>inwards → secondary xylem</b>, <b>outwards → secondary phloem</b>. Far more xylem is made, so the bulk of a tree trunk is secondary xylem (wood).</li>
</ul>
<h4>Spring wood vs Autumn wood → Annual rings</h4>
<table class="cmp"><thead><tr><th></th><th>Spring / Early wood</th><th>Autumn / Late wood</th></tr></thead><tbody>
<tr><td><b>Cambium activity</b></td><td>High</td><td>Low</td></tr>
<tr><td><b>Vessels</b></td><td>Wider, more numerous</td><td>Narrower, fewer</td></tr>
<tr><td><b>Appearance</b></td><td>Lighter, less dense</td><td>Darker, denser</td></tr>
</tbody></table>
<p>One ring of spring + autumn wood = one <span class="kw">annual ring</span>. Counting rings estimates a tree's age (<b>dendrochronology</b>).</p>
<table class="cmp"><thead><tr><th>Heartwood (duramen)</th><th>Sapwood (alburnum)</th></tr></thead><tbody>
<tr><td>Inner, dark, dead; tylose-filled; no conduction; gives strength &amp; durability</td><td>Outer, lighter, living; conducts water</td></tr>
</tbody></table>
<h4>2 · Cork cambium (phellogen) → periderm</h4>
<ul>
<li>As girth grows the epidermis breaks, so a cork cambium (<b>phellogen</b>) develops in the cortex.</li>
<li>It cuts off <b>cork (phellem)</b> outside — dead, suberised, waterproof — and <b>secondary cortex (phelloderm)</b> inside.</li>
<li>Phellem + phellogen + phelloderm = <span class="kw">periderm</span>.</li>
<li><b>Lenticels</b> — lens-shaped openings in the cork for gas exchange.</li>
</ul>
<div class="callout"><b>Bark</b> = all tissues outside the vascular cambium (secondary phloem + periderm). "Early bark" = soft/inner; "late bark" = hard/outer. Commercial cork comes from <i>Quercus suber</i> (cork oak).</div>
`
}
],

mnemonics:[
{title:"The three simple tissues", device:`"<b>P</b>oor <b>C</b>ats <b>S</b>truggle" — <b>P</b>arenchyma → <b>C</b>ollenchyma → <b>S</b>clerenchyma`,
expand:[{L:"P",t:"Parenchyma — living, thin-walled, storage"},{L:"C",t:"Collenchyma — living, corner-thickened, flexible support"},{L:"S",t:"Sclerenchyma — dead, lignified, hard support"}]},
{title:"Xylem elements", device:`"<b>T</b>iny <b>V</b>essels <b>F</b>eed <b>P</b>lants" — <b>T</b>racheids, <b>V</b>essels, <b>F</b>ibres, <b>P</b>arenchyma`,
expand:[{L:"T",t:"Tracheids — in all vascular plants"},{L:"V",t:"Vessels — angiosperm hallmark"},{L:"F",t:"Fibres — support"},{L:"P",t:"Parenchyma — the only LIVING xylem cell"}]},
{title:"Phloem elements", device:`"<b>S</b>ome <b>C</b>ompanions <b>P</b>refer <b>F</b>ibre" — <b>S</b>ieve tube, <b>C</b>ompanion cell, <b>P</b>arenchyma, <b>F</b>ibres`,
expand:[{L:"S",t:"Sieve tube — loses nucleus, has sieve plates"},{L:"C",t:"Companion cell — controls the sieve tube"},{L:"P",t:"Phloem parenchyma — absent in most monocots"},{L:"F",t:"Phloem fibres — the only DEAD phloem cell"}]},
{title:"Endarch vs Exarch", device:`"<b>S</b>tem is <b>EN</b>d; <b>R</b>oot is <b>EX</b>"`,
expand:[{L:"EN",t:"ENdarch = protoxylem towards centre = STEM"},{L:"EX",t:"EXarch = protoxylem towards periphery = ROOT"}]},
{title:"Three tissue systems", device:`"<b>E</b>very <b>G</b>arden <b>V</b>egetates" — <b>E</b>pidermal, <b>G</b>round, <b>V</b>ascular`,
expand:[{L:"E",t:"Epidermal — protection (skin)"},{L:"G",t:"Ground — everything in between"},{L:"V",t:"Vascular — the plumbing (xylem+phloem)"}]},
{title:"Periderm layers", device:`"<b>Cork</b> on a <b>Phello</b>-sandwich" — Phellem · Phellogen · Phelloderm`,
expand:[{L:"1",t:"Phellem (cork) — outside, dead, waterproof"},{L:"2",t:"Phellogen (cork cambium) — the meristem in the middle"},{L:"3",t:"Phelloderm (secondary cortex) — inside, living"}]},
{title:"Dicot vs Monocot stem bundles", device:`"<b>D</b>icots <b>R</b>ing, <b>M</b>onocots <b>S</b>catter"`,
expand:[{L:"D",t:"Dicot = bundles in a Ring, OPEN (with cambium)"},{L:"M",t:"Monocot = bundles Scattered, CLOSED (no cambium)"}]},
{title:"Spring vs Autumn wood", device:`"<b>S</b>pring is <b>W</b>ide & <b>L</b>ight; <b>A</b>utumn is <b>N</b>arrow & <b>D</b>ark"`,
expand:[{L:"S",t:"Spring wood — wide vessels, light, high cambial activity"},{L:"A",t:"Autumn wood — narrow vessels, dark, low activity"},{L:"+",t:"Spring + Autumn = ONE annual ring"}]}
],

flashcards:[
{front:"What is a tissue?", back:"A group of cells with a common origin, usually performing a common function."},
{front:"Which meristem causes increase in girth?", back:"Lateral meristem (vascular cambium & cork cambium) — secondary growth."},
{front:"Function of intercalary meristem?", back:"Located at base of internodes/leaves (grasses); allows regrowth after grazing or mowing. It is a primary meristem."},
{front:"Define differentiation.", back:"The process by which cells derived from meristems mature to perform specific functions, gaining specific walls/structures."},
{front:"Only LIVING mechanical tissue?", back:"Collenchyma — gives support AND flexibility to growing organs."},
{front:"Two types of sclerenchyma?", back:"Fibres (long, narrow, pointed) and sclereids (short, isodiametric stone cells, e.g. pear grit, nut shells)."},
{front:"Which xylem element is the ONLY living one?", back:"Xylem parenchyma — stores food and helps radial conduction."},
{front:"Water-conducting element present in ALL vascular plants?", back:"Tracheids. Vessels (with wide lumen & perforated end walls) are characteristic of angiosperms."},
{front:"Endarch vs Exarch?", back:"Endarch = protoxylem toward centre (STEMS). Exarch = protoxylem toward periphery (ROOTS)."},
{front:"What controls the enucleate sieve tube?", back:"The companion cell — a specialised parenchyma cell connected by pits, maintaining the pressure gradient."},
{front:"Only DEAD element of phloem?", back:"Phloem fibres (bast fibres) — sclerenchymatous; source of jute, flax, hemp."},
{front:"The three tissue systems?", back:"Epidermal, Ground, and Vascular tissue systems."},
{front:"What is the Casparian strip?", back:"A band of suberin on radial & tangential walls of endodermal cells that blocks the apoplast, forcing water through the cell membrane."},
{front:"Radial vs Conjoint vascular bundle?", back:"Radial = xylem & phloem on different radii (roots). Conjoint = both on same radius, phloem outside xylem (stems & leaves)."},
{front:"Open vs Closed vascular bundle?", back:"Open = cambium present, shows secondary growth (dicot stem). Closed = no cambium, no secondary growth (monocot stem)."},
{front:"Bulliform cells — what & where?", back:"Large empty motor cells in the upper epidermis of monocot (isobilateral) leaves; lose turgor to roll the leaf and reduce water loss."},
{front:"What is Kranz anatomy?", back:"A wreath of large, chloroplast-rich, thick-walled bundle-sheath cells around veins in C₄ plants (maize, sorghum) — enables efficient C₄ photosynthesis."},
{front:"What does the vascular cambium produce inward vs outward?", back:"Inward → secondary xylem (wood, more of it). Outward → secondary phloem."},
{front:"What makes one annual ring?", back:"One season of spring (early) wood + autumn (late) wood. Used to estimate a tree's age."},
{front:"Heartwood vs Sapwood?", back:"Heartwood (duramen): inner, dark, dead, non-conducting, durable. Sapwood (alburnum): outer, light, living, conducts water."},
{front:"What three layers make the periderm?", back:"Phellem (cork) + Phellogen (cork cambium) + Phelloderm (secondary cortex)."},
{front:"What are lenticels?", back:"Lens-shaped openings in the cork (periderm) that permit gas exchange between inner tissues and the atmosphere."}
],

recall:[
{q:"Compare the cell wall, living status and function of parenchyma, collenchyma and sclerenchyma.", hint:"Think wall thickness + lignin + living/dead.",
a:`<b>Parenchyma:</b> thin cellulosic wall, living, does storage/photosynthesis. <b>Collenchyma:</b> wall thickened at corners, living, flexible mechanical support to growing parts. <b>Sclerenchyma:</b> thick lignified wall, dead at maturity, rigid mechanical strength (fibres + sclereids).`},
{q:"List the four elements of xylem and state which is living.", hint:"One of them is alive.",
a:`Tracheids, vessels, xylem fibres and xylem parenchyma. <b>Xylem parenchyma is the only living element</b>; it stores food and aids radial water conduction.`},
{q:"Explain endarch and exarch and say where each occurs.", hint:"Position of protoxylem.",
a:`<b>Endarch</b> — protoxylem lies towards the centre (centripetal maturation) → found in <b>stems</b>. <b>Exarch</b> — protoxylem lies towards the periphery → found in <b>roots</b>.`},
{q:"Why does a sieve tube need a companion cell?", hint:"What did the sieve tube lose?",
a:`The mature sieve-tube element <b>loses its nucleus</b>, so it cannot run its own metabolism. The companion cell (connected by pit fields) provides regulation and maintains the pressure gradient that drives food (sucrose) transport.`},
{q:"Distinguish the vascular bundles of a dicot stem from a monocot stem.", hint:"Ring vs scattered; open vs closed.",
a:`<b>Dicot stem:</b> bundles arranged in a ring; conjoint, <b>open</b> (cambium present), endarch → secondary growth possible. <b>Monocot stem:</b> bundles <b>scattered</b> in ground tissue; conjoint, <b>closed</b> (no cambium), each with a sclerenchymatous sheath and water cavity → no secondary growth.`},
{q:"What is the Casparian strip and why does it matter?", hint:"Endodermis + suberin.",
a:`A band of <b>suberin</b> on the radial and tangential walls of <b>endodermal</b> cells. It is impermeable to water, so water/minerals cannot pass through the wall (apoplast) at the endodermis and must cross the <b>cell membrane</b>, giving the plant control over what enters the stele.`},
{q:"How does a dorsiventral (dicot) leaf differ internally from an isobilateral (monocot) leaf?", hint:"Mesophyll & bulliform cells.",
a:`<b>Dicot/dorsiventral:</b> mesophyll split into upper <b>palisade</b> + lower <b>spongy</b>; more stomata on lower surface. <b>Monocot/isobilateral:</b> uniform (undifferentiated) mesophyll; stomata equal on both faces; <b>bulliform cells</b> in upper epidermis roll the leaf to cut water loss.`},
{q:"Describe how the cambial ring forms in a dicot stem.", hint:"Intrafascicular + interfascicular.",
a:`The <b>intrafascicular</b> cambium (already present inside each vascular bundle) joins with newly formed <b>interfascicular</b> cambium (from dedifferentiated medullary-ray cells between bundles) to make a continuous <b>cambial ring</b> that then produces secondary xylem inwards and secondary phloem outwards.`},
{q:"What are annual rings and how are spring and autumn wood different?", hint:"Activity high vs low.",
a:`<b>Spring/early wood:</b> cambium very active → wide, numerous vessels, lighter colour. <b>Autumn/late wood:</b> cambium less active → narrow, fewer vessels, darker, denser. One spring + one autumn band = a single <b>annual ring</b>, used to estimate age.`},
{q:"Name the three layers of the periderm and the function of lenticels.", hint:"All start with 'phell-'.",
a:`<b>Phellem</b> (cork, outer, dead, suberised), <b>phellogen</b> (cork cambium, the meristem) and <b>phelloderm</b> (secondary cortex, inner, living). <b>Lenticels</b> are pores in the cork that allow gaseous exchange.`}
],

mcqs:[
{q:"Which meristem is responsible for increase in girth of the plant?", o:["Apical meristem","Intercalary meristem","Lateral meristem","Ground meristem"], c:2, e:`<b>Lateral meristem</b> (vascular & cork cambium) brings about secondary growth — increase in girth. Apical & intercalary increase length.`},
{q:"The only living mechanical tissue in plants is:", o:["Sclerenchyma","Collenchyma","Xylem fibre","Tracheid"], c:1, e:`<b>Collenchyma</b> is living and provides flexible support; the others are dead at maturity.`},
{q:"Vessels with wide lumen and perforated end walls are characteristic of:", o:["All vascular plants","Gymnosperms only","Angiosperms","Pteridophytes only"], c:2, e:`<b>Vessels</b> are typical of angiosperms. Tracheids occur in all vascular plants.`},
{q:"Which is the only living element of xylem?", o:["Tracheid","Vessel","Xylem fibre","Xylem parenchyma"], c:3, e:`<b>Xylem parenchyma</b> is living and stores food / aids radial conduction.`},
{q:"In roots, the protoxylem lies towards the periphery. This arrangement is called:", o:["Endarch","Exarch","Mesarch","Centrarch"], c:1, e:`Roots are <b>exarch</b> (protoxylem peripheral). Stems are endarch.`},
{q:"The enucleate cell of the phloem that conducts food is the:", o:["Companion cell","Sieve tube element","Phloem fibre","Phloem parenchyma"], c:1, e:`The mature <b>sieve tube element</b> loses its nucleus and is controlled by the companion cell.`},
{q:"Phloem parenchyma is generally absent in:", o:["Dicot stems","Dicot roots","Most monocots","Gymnosperms"], c:2, e:`Phloem parenchyma is <b>absent in most monocots</b>.`},
{q:"The Casparian strip is found in the:", o:["Epidermis","Endodermis","Pericycle","Pith"], c:1, e:`The <b>endodermis</b> bears Casparian strips of suberin that regulate water entry into the stele.`},
{q:"Bulliform cells are found in the:", o:["Upper epidermis of some monocot leaves","Lower epidermis of dicot leaves","Mesophyll of dicot leaves","Root cortex"], c:0, e:`<b>Bulliform (motor) cells</b> in the upper epidermis of isobilateral leaves roll/fold the leaf to reduce transpiration.`},
{q:"Vascular bundles that are conjoint, open and endarch are typical of:", o:["Monocot stem","Dicot stem","Dicot root","Monocot root"], c:1, e:`<b>Dicot stems</b> have conjoint, open (cambium present), endarch bundles arranged in a ring.`},
{q:"Scattered, closed vascular bundles are a feature of:", o:["Dicot stem","Monocot stem","Dicot root","Dorsiventral leaf"], c:1, e:`<b>Monocot stems</b> have scattered bundles that are closed (no cambium) → no secondary growth.`},
{q:"Radial vascular bundles are characteristic of:", o:["Stems","Leaves","Roots","Floral parts"], c:2, e:`In <b>roots</b>, xylem & phloem lie on different radii (radial bundles).`},
{q:"Kranz anatomy is associated with:", o:["C₃ plants","C₄ plants","CAM plants","Aquatic plants"], c:1, e:`<b>C₄ plants</b> (maize, sorghum, sugarcane) show Kranz anatomy — a wreath of bundle-sheath cells.`},
{q:"The cambium cuts off more cells towards which side?", o:["Outside (phloem)","Inside (xylem)","Equal both sides","Neither"], c:1, e:`Far more <b>secondary xylem</b> is formed inwards, so wood makes up the bulk of the trunk.`},
{q:"One annual ring is made up of:", o:["Only spring wood","Only autumn wood","Spring + autumn wood of one year","Two years of growth"], c:2, e:`One <b>spring (early) + autumn (late) wood</b> band of a single season = one annual ring.`},
{q:"The dark, central, non-conducting wood of an old trunk is called:", o:["Sapwood","Heartwood","Bark","Periderm"], c:1, e:`<b>Heartwood (duramen)</b> is dead, dark and durable; sapwood conducts water.`},
{q:"The cork cambium is also called:", o:["Phellem","Phellogen","Phelloderm","Periderm"], c:1, e:`The cork cambium = <b>phellogen</b>; it makes phellem (cork) outside and phelloderm inside.`},
{q:"Bark, in the technical sense, includes:", o:["Only cork","Secondary phloem + periderm","Only secondary xylem","Pith + cortex"], c:1, e:`<b>Bark</b> = all tissues outside the vascular cambium = secondary phloem + periderm.`},
{q:"Gaseous exchange through the cork is permitted by:", o:["Stomata","Hydathodes","Lenticels","Trichomes"], c:2, e:`<b>Lenticels</b> are lens-shaped openings in the periderm for gas exchange.`},
{q:"Which tissue system includes the cortex, pericycle and pith?", o:["Epidermal","Ground","Vascular","Dermal"], c:1, e:`The <b>ground tissue system</b> comprises all tissue except the epidermis and vascular bundles.`}
],

match:[
{term:"Collenchyma", def:"Living support tissue, thickened at corners"},
{term:"Sclereid", def:"Short stone cell giving pears their gritty feel"},
{term:"Tracheid", def:"Water-conducting element present in all vascular plants"},
{term:"Companion cell", def:"Regulates the enucleate sieve tube"},
{term:"Casparian strip", def:"Suberin band in the endodermis"},
{term:"Exarch", def:"Protoxylem toward periphery (roots)"},
{term:"Bulliform cells", def:"Motor cells that roll a monocot leaf"},
{term:"Kranz anatomy", def:"Bundle-sheath wreath in C₄ leaves"},
{term:"Phellogen", def:"Cork cambium"},
{term:"Lenticel", def:"Pore in cork for gas exchange"},
{term:"Heartwood", def:"Inner dark dead durable wood"},
{term:"Annual ring", def:"One season of spring + autumn wood"}
],

pathways:[
{title:"Root tip growth zones", prompt:"Order the regions from the very tip upward.",
steps:["Region of meristematic activity","Region of elongation","Region of maturation"]},
{title:"Cell fate in development", prompt:"Arrange the developmental sequence.",
steps:["Meristematic cell divides","Differentiation into permanent tissue","Dedifferentiation regains division","Redifferentiation loses division again"]},
{title:"Periderm formation (outside → in)", prompt:"Order the periderm layers from outermost to innermost.",
steps:["Phellem (cork)","Phellogen (cork cambium)","Phelloderm (secondary cortex)"]},
{title:"Secondary growth steps", prompt:"Put the events of dicot-stem secondary growth in order.",
steps:["Intra- & interfascicular cambium join into a ring","Cambium cuts off secondary xylem inward & phloem outward","Epidermis ruptures, cork cambium arises in cortex","Periderm + secondary phloem form the bark"]}
]
};