/* ====== data_morph.js ====== */
/* ===== CHAPTER 5 · MORPHOLOGY OF FLOWERING PLANTS ===== */
DATA.chapters.morph = {
id:"morph", num:5, title:"Morphology of Flowering Plants", subtitle:"Root · Stem · Leaf · Inflorescence · Flower · Fruit · Seed · Families",
color:"#5fb6c4", colorD:"#2c7e8c", glyph:"🌸",

notes:[
{
id:"root", heading:"The Root",
html:`
<p>The root is the usually <b>underground</b>, non-green descending part that anchors the plant and absorbs water & minerals.</p>
<h4>Types</h4>
<table class="cmp"><thead><tr><th>Type</th><th>Origin</th><th>Found in</th></tr></thead><tbody>
<tr><td><b>Tap root</b></td><td>Develops from the radicle; one main root with branches</td><td>Dicots (mustard)</td></tr>
<tr><td><b>Fibrous root</b></td><td>Many roots from the base of the stem</td><td>Monocots (wheat)</td></tr>
<tr><td><b>Adventitious</b></td><td>Arise from parts other than the radicle</td><td>Banyan, grass, <i>Monstera</i></td></tr>
</tbody></table>
<h4>Regions of the root</h4>
<div class="flow"><span class="node">Root cap</span><span class="arr">→</span><span class="node">Region of meristematic activity</span><span class="arr">→</span><span class="node">Region of elongation</span><span class="arr">→</span><span class="node">Region of maturation (root hairs)</span></div>
<h4>Modifications</h4>
<ul>
<li><b>Storage:</b> carrot, turnip (tap roots); sweet potato (adventitious) store food.</li>
<li><b>Prop roots:</b> hanging supportive roots of the banyan.</li>
<li><b>Stilt roots:</b> supporting roots from lower nodes of maize & sugarcane.</li>
<li><b>Pneumatophores:</b> roots that grow upward for gas exchange in mangroves (<i>Rhizophora</i>).</li>
</ul>
`
},
{
id:"stem", heading:"The Stem",
html:`
<p>The stem is the ascending axis bearing nodes, internodes, buds, leaves, flowers & fruits; it develops from the <b>plumule</b>. (Tip: nodes &amp; buds tell a stem from a root.)</p>
<table class="cmp"><thead><tr><th>Modification</th><th>Form</th><th>Examples</th></tr></thead><tbody>
<tr><td><b>Underground</b> (storage, perennation)</td><td>Tuber, rhizome, corm, bulb</td><td>Potato (tuber), ginger (rhizome), <i>Colocasia</i> (corm), onion (bulb)</td></tr>
<tr><td><b>Subaerial</b> (vegetative propagation)</td><td>Runner, stolon, offset, sucker</td><td>Grass (runner), strawberry, <i>Pistia</i>/<i>Eichhornia</i> (offset), mint (sucker)</td></tr>
<tr><td><b>Aerial</b></td><td>Stem tendril, thorn, phylloclade</td><td>Cucumber/grapevine (tendrils), <i>Citrus</i>/<i>Bougainvillea</i> (thorns), <i>Opuntia</i> (phylloclade)</td></tr>
</tbody></table>
<div class="callout"><b>Test:</b> A potato is a stem (it has nodes, eyes/buds &amp; scale leaves), while a sweet potato is a root (no nodes).</div>
`
},
{
id:"leaf", heading:"The Leaf",
html:`
<p>The leaf is a flattened lateral outgrowth of the stem borne at a node; it is the chief organ of photosynthesis. Parts: <b>leaf base, petiole, lamina</b>.</p>
<h4>Venation</h4>
<ul><li><b>Reticulate</b> — veins form a network (dicots).</li><li><b>Parallel</b> — veins run parallel (monocots).</li></ul>
<h4>Leaf types</h4>
<table class="cmp"><thead><tr><th>Type</th><th>Description</th><th>Example</th></tr></thead><tbody>
<tr><td><b>Simple</b></td><td>Lamina entire or incised but not reaching the midrib</td><td>Mango, guava</td></tr>
<tr><td><b>Pinnately compound</b></td><td>Leaflets along a common axis (rachis)</td><td>Neem</td></tr>
<tr><td><b>Palmately compound</b></td><td>Leaflets attached at a common point (petiole tip)</td><td><i>Silk cotton</i></td></tr>
</tbody></table>
<h4>Phyllotaxy (arrangement on stem)</h4>
<ul><li><b>Alternate</b> — one leaf per node (china rose, mustard).</li><li><b>Opposite</b> — two per node (Calotropis, guava).</li><li><b>Whorled</b> — more than two per node (<i>Alstonia</i>).</li></ul>
<div class="callout"><b>Modifications:</b> tendrils (pea), spines (cactus), phyllode (Australian acacia), storage (onion fleshy leaves), pitcher (insectivorous Nepenthes).</div>
`
},
{
id:"inflo", heading:"Inflorescence",
html:`
<p>An <b>inflorescence</b> is the arrangement of flowers on the floral axis. Two main types:</p>
<table class="cmp"><thead><tr><th>Type</th><th>Growth of main axis</th><th>Flower opening order</th></tr></thead><tbody>
<tr><td><b>Racemose</b></td><td>Continues to grow; flowers borne laterally</td><td>Acropetal — older below, younger above</td></tr>
<tr><td><b>Cymose</b></td><td>Tip ends in a flower; limited growth</td><td>Basipetal — older at top/centre, younger below</td></tr>
</tbody></table>
`
},
{
id:"flower", heading:"The Flower",
html:`
<p>The flower is the reproductive unit. Four whorls on the <b>thalamus</b>: <b>calyx (sepals), corolla (petals), androecium (stamens), gynoecium (carpels)</b>. Calyx + corolla are accessory; androecium + gynoecium are reproductive.</p>
<h4>Symmetry</h4>
<ul><li><b>Actinomorphic</b> (radial) — mustard, chilli.</li><li><b>Zygomorphic</b> (bilateral) — pea, <i>Cassia</i>.</li></ul>
<h4>Position of ovary (with respect to other whorls)</h4>
<table class="cmp"><thead><tr><th>Term</th><th>Ovary position</th><th>Example</th></tr></thead><tbody>
<tr><td><b>Hypogynous</b></td><td>Superior ovary; other parts below</td><td>Mustard, china rose</td></tr>
<tr><td><b>Perigynous</b></td><td>Half-inferior; parts at the rim, ~same level</td><td>Rose, plum</td></tr>
<tr><td><b>Epigynous</b></td><td>Inferior ovary; parts above</td><td>Guava, cucumber, sunflower</td></tr>
</tbody></table>
<h4>Aestivation (arrangement of sepals/petals in bud)</h4>
<ul><li><b>Valvate</b> — margins touch, no overlap (Calotropis).</li><li><b>Twisted</b> — one margin overlaps the next (china rose).</li><li><b>Imbricate</b> — overlapping but not in a set direction (Cassia).</li><li><b>Vexillary</b> — special pea type: largest standard covers two wings, which cover the keel.</li></ul>
<h4>Placentation (arrangement of ovules in ovary)</h4>
<table class="cmp"><thead><tr><th>Type</th><th>Description</th><th>Example</th></tr></thead><tbody>
<tr><td><b>Marginal</b></td><td>Ovules on the ventral suture, one chamber</td><td>Pea</td></tr>
<tr><td><b>Axile</b></td><td>Placenta axial, ovules in chambers</td><td>Tomato, lemon, china rose</td></tr>
<tr><td><b>Parietal</b></td><td>Ovules on inner wall / false septum</td><td>Mustard, <i>Argemone</i></td></tr>
<tr><td><b>Free central</b></td><td>On central axis, no septa</td><td><i>Dianthus</i>, <i>Primrose</i></td></tr>
<tr><td><b>Basal</b></td><td>Placenta at base, single ovule</td><td>Sunflower, marigold</td></tr>
</tbody></table>
`
},
{
id:"fruit-seed", heading:"Fruit, Seed & Floral Formula",
html:`
<h4>Fruit</h4>
<p>A fruit develops from the ovary after fertilisation. Wall = <b>pericarp</b> (epicarp + mesocarp + endocarp). A <b>true fruit</b> develops from the ovary only; a <b>false fruit</b> involves the thalamus too (apple).</p>
<ul><li><b>Drupe</b> — single seed, stony endocarp (mango, coconut).</li></ul>
<h4>Seed</h4>
<table class="cmp"><thead><tr><th></th><th>Dicot seed (gram/bean)</th><th>Monocot seed (maize)</th></tr></thead><tbody>
<tr><td>Cotyledons</td><td>Two, often store food</td><td>One; endosperm stores food</td></tr>
<tr><td>Special parts</td><td>Plumule, radicle, hilum, micropyle</td><td>Scutellum, coleoptile, coleorhiza, aleurone layer</td></tr>
</tbody></table>
<h4>Reading a Floral Formula — symbols</h4>
<div class="formula">
Br = bracteate · <span class="hl">⊕</span> actinomorphic · <span class="hl">%</span> zygomorphic · ⚥ bisexual<br>
K = calyx · C = corolla · P = perianth · A = androecium · G = gynoecium<br>
G (underlined) = superior ovary · G̅ (line above) = inferior ovary · ( ) = fusion · + = whorls
</div>
<div class="callout"><b>Example (mustard, Brassicaceae):</b> ⊕ ⚥ K2+2 C4 A2+4 <u>G(2)</u> — radial, bisexual, 4 sepals (2+2), 4 petals, 6 stamens (2 short + 4 long = tetradynamous), bicarpellary superior ovary.</div>
`
},
{
id:"families", heading:"Three Families",
html:`
<table class="cmp"><thead><tr><th></th><th>Fabaceae (pea)</th><th>Solanaceae (potato)</th><th>Liliaceae (lily)</th></tr></thead><tbody>
<tr><td><b>Root</b></td><td>Tap, root nodules</td><td>Tap</td><td>Fibrous (monocot)</td></tr>
<tr><td><b>Calyx/Corolla</b></td><td>K5 (united) · C5 papilionaceous (1 standard, 2 wings, 2 keel)</td><td>K(5), C(5) united</td><td>Perianth P3+3 (tepals)</td></tr>
<tr><td><b>Androecium</b></td><td>A(9)+1 (diadelphous)</td><td>A5, epipetalous</td><td>A3+3</td></tr>
<tr><td><b>Gynoecium</b></td><td>Monocarpellary, superior, marginal</td><td>Bicarpellary, syncarpous, superior, axile, obliquely placed</td><td>Tricarpellary, syncarpous, superior, axile</td></tr>
<tr><td><b>Aestivation</b></td><td>Vexillary</td><td>Valvate</td><td>Valvate</td></tr>
<tr><td><b>Examples / uses</b></td><td>Gram, pea, groundnut (pulses, dyes, fodder, N₂-fixing)</td><td>Tomato, potato, brinjal, tobacco, belladonna (food, medicine)</td><td>Onion, garlic, tulip, <i>Aloe</i>, <i>Colchicine</i></td></tr>
</tbody></table>
<div class="formula">Fabaceae: % ⚥ K(5) C5 A(9)+1 <u>G1</u><br>Solanaceae: ⊕ ⚥ K(5) C(5) A5 <u>G(2)</u><br>Liliaceae: ⊕ ⚥ P(3+3) A3+3 <u>G(3)</u></div>
`
}
],

mnemonics:[
{title:"Root regions (tip → up)", device:`<b>C</b>aps <b>M</b>ake <b>E</b>longated <b>M</b>ature roots`, expand:[
 {L:"C",t:"Root Cap"},{L:"M",t:"Meristematic region"},{L:"E",t:"Elongation region"},{L:"M",t:"Maturation region (root hairs)"}
]},
{title:"Stem vs root quick test", device:`<b>S</b>tem has <b>S</b>egments (nodes) — potato is a stem; sweet potato (no nodes) is a root`, expand:[
 {L:"!",t:"Eyes/buds + nodes ⇒ it's a stem"}
]},
{title:"Placentation types", device:`<b>M</b>y <b>A</b>unt <b>P</b>uts <b>F</b>resh <b>B</b>asil — Marginal, Axile, Parietal, Free-central, Basal`, expand:[
 {L:"M",t:"Marginal — pea"},{L:"A",t:"Axile — tomato/lemon"},{L:"P",t:"Parietal — mustard"},{L:"F",t:"Free central — Dianthus"},{L:"B",t:"Basal — sunflower"}
]},
{title:"Ovary position", device:`<b>Hypo</b> = ovary on <b>top</b> (superior) · <b>Epi</b> = ovary <b>under</b> everyone (inferior)`, expand:[
 {L:"Hypo",t:"Hypogynous → superior ovary (mustard)"},
 {L:"Peri",t:"Perigynous → half-inferior (rose)"},
 {L:"Epi",t:"Epigynous → inferior ovary (guava, cucumber)"}
]},
{title:"Aestivation set", device:`<b>V</b>ery <b>T</b>idy <b>I</b>vy <b>V</b>ines — Valvate, Twisted, Imbricate, Vexillary`, expand:[
 {L:"V",t:"Valvate — Calotropis"},{L:"T",t:"Twisted — china rose"},{L:"I",t:"Imbricate — Cassia"},{L:"V",t:"Vexillary — pea"}
]},
{title:"Racemose vs cymose", device:`<b>R</b>acemose <b>R</b>ises (axis keeps growing, opens bottom→up)`, expand:[
 {L:"R",t:"Racemose = acropetal, indefinite axis"},
 {L:"C",t:"Cymose = basipetal, axis ends in a flower"}
]},
{title:"Pea (Fabaceae) corolla", device:`<b>S</b>tandard, <b>W</b>ings, <b>K</b>eel — "SWK = the pea flag"`, expand:[
 {L:"S",t:"1 large standard (vexillum)"},{L:"W",t:"2 wings"},{L:"K",t:"2 keel petals"}
]},
{title:"Fabaceae stamens", device:`<b>9 + 1</b> diadelphous — nine fused, one free`, expand:[
 {L:"A",t:"A(9)+1 in pea family"}
]}
],

flashcards:[
{front:"What is a tap root system and in which plants is it found?", back:"Primary root grows directly from the radicle; found in dicotyledonous plants."},
{front:"What are adventitious roots?", back:"Roots that arise from parts of the plant other than the radicle."},
{front:"Give an example of a modified root for food storage.", back:"Carrot, turnip, sweet potato."},
{front:"What is a pneumatophore?", back:"A modified root for respiration found in mangrove plants like Rhizophora."},
{front:"What are the nodes and internodes on a stem?", back:"Nodes are where leaves attach; internodes are the spaces between nodes."},
{front:"Give examples of underground stem modifications.", back:"Potato, ginger, turmeric, zaminkand."},
{front:"What is phyllotaxy?", back:"The pattern of arrangement of leaves on the stem or branch."},
{front:"What is a compound leaf?", back:"A leaf where the lamina is completely broken into distinct leaflets."},
{front:"Define inflorescence.", back:"The arrangement of flowers on the floral axis."},
{front:"What is the difference between racemose and cymose inflorescence?", back:"Racemose: main axis continues to grow; Cymose: main axis terminates in a flower."},
{front:"What is actinomorphic symmetry?", back:"Radial symmetry in flowers (e.g., mustard, datura)."},
{front:"What is aestivation?", back:"The mode of arrangement of sepals or petals in the floral bud."},
{front:"What is a drupe fruit?", back:"A fleshy fruit developing from a monocarpellary superior ovary with a stony endocarp (e.g., mango, coconut)."},
{front:"What is parthenocarpic fruit?", back:"A fruit formed without fertilization of the ovary."},
{front:"Which family is commonly known as the potato family?", back:"Solanaceae."},

{front:"Tap vs fibrous vs adventitious root — origin", back:"Tap: from radicle (dicots). Fibrous: cluster from stem base (monocots). Adventitious: from any part other than the radicle (banyan)."},
{front:"Name the four regions of a root, tip to base", back:"Root cap → meristematic region → region of elongation → region of maturation (bears root hairs)."},
{front:"Pneumatophores — what & where?", back:"Roots that grow upward out of the soil for gas exchange in waterlogged mangroves (e.g. Rhizophora)."},
{front:"How do you tell a potato (stem) from a sweet potato (root)?", back:"Potato is a stem tuber — has nodes, 'eyes' (buds) and scale leaves. Sweet potato is a root — no nodes."},
{front:"Reticulate vs parallel venation", back:"Reticulate (net-like) = dicots; parallel = monocots."},
{front:"Simple vs compound leaf", back:"Simple: lamina not divided to the midrib. Compound: lamina divided into leaflets — pinnate (neem) or palmate (silk cotton)."},
{front:"Three types of phyllotaxy", back:"Alternate (one/node, china rose), opposite (two/node, guava), whorled (>two/node, Alstonia)."},
{front:"Racemose vs cymose inflorescence", back:"Racemose: main axis keeps growing, flowers open acropetally (bottom→top). Cymose: axis ends in a flower, flowers open basipetally."},
{front:"Four floral whorls (outer → inner)", back:"Calyx (sepals) → corolla (petals) → androecium (stamens) → gynoecium (carpels)."},
{front:"Hypogynous, perigynous, epigynous", back:"Position of ovary: hypogynous = superior (mustard); perigynous = half-inferior (rose); epigynous = inferior (guava, cucumber)."},
{front:"Five placentation types", back:"Marginal (pea), axile (tomato/lemon), parietal (mustard), free central (Dianthus), basal (sunflower)."},
{front:"Vexillary aestivation", back:"Pea-type: large standard covers two wings, which cover two keel petals (Fabaceae)."},
{front:"What is the pericarp?", back:"The wall of a fruit, made of epicarp + mesocarp + endocarp; develops from the ovary wall."},
{front:"True vs false fruit", back:"True fruit develops from the ovary alone; false fruit also involves the thalamus (e.g. apple)."},
{front:"Dicot vs monocot seed food store", back:"Dicot (gram): food in the two cotyledons. Monocot (maize): food in the endosperm; embryo has scutellum, coleoptile, coleorhiza."},
{front:"Fabaceae floral formula", back:"% ⚥ K(5) C5 (papilionaceous) A(9)+1 diadelphous G1 (superior, marginal). Root nodules fix N₂."},
{front:"Solanaceae floral formula", back:"⊕ ⚥ K(5) C(5) A5 epipetalous G(2) (superior, axile, obliquely placed). e.g. potato, tomato, tobacco."},
{front:"Liliaceae floral formula", back:"⊕ ⚥ P(3+3) A3+3 G(3) (superior). Monocot; e.g. onion, garlic, tulip, Aloe."},
{front:"Stamen condition in mustard", back:"Tetradynamous — 6 stamens, 4 long + 2 short (A2+4)."},
{front:"Examples of stem tendrils & thorns", back:"Stem tendrils: cucumber, grapevine. Stem thorns: Citrus, Bougainvillea."}
],

recall:[
{q:"List the four regions of a root from tip to base and name the structures of the maturation region.", hint:"Cap first.", a:"Root cap → region of meristematic activity → region of elongation → region of maturation. The maturation region bears fine <b>root hairs</b> for water/mineral absorption."},
{q:"Describe four root modifications with one example each.", hint:"Storage, prop, stilt, breathing.", a:"<b>Storage</b> (carrot, turnip, sweet potato), <b>prop roots</b> (banyan — hanging supports), <b>stilt roots</b> (maize, sugarcane — from lower nodes), <b>pneumatophores</b> (Rhizophora — grow up for gas exchange)."},
{q:"How is a stem distinguished from a root, and how can you tell a potato is a stem?", hint:"Nodes and buds.", a:"A stem bears <b>nodes, internodes and buds</b> and develops from the plumule; a root lacks nodes/buds and develops from the radicle. A potato has 'eyes' (axillary buds), nodes and scale leaves, proving it is an underground <b>stem tuber</b>."},
{q:"Differentiate the two types of inflorescence by axis growth and flower-opening order.", hint:"Acropetal vs basipetal.", a:"<b>Racemose:</b> main axis continues growing, flowers borne laterally and open <b>acropetally</b> (older below, younger above). <b>Cymose:</b> the axis tip terminates in a flower (limited growth) and flowers open <b>basipetally</b> (older at top/centre)."},
{q:"Name and describe the five types of placentation with examples.", hint:"Where ovules attach.", a:"<b>Marginal</b> — ovules on ventral suture, one chamber (pea). <b>Axile</b> — placenta axial, ovules in chambers (tomato, lemon). <b>Parietal</b> — on inner wall/false septum (mustard). <b>Free central</b> — on a central column without septa (Dianthus). <b>Basal</b> — at the base, single ovule (sunflower)."},
{q:"Explain hypogynous, perigynous and epigynous flowers.", hint:"Where is the ovary?", a:"Based on the ovary's position relative to other whorls: <b>hypogynous</b> = ovary superior, other parts below (mustard, china rose); <b>perigynous</b> = ovary half-inferior, parts at the rim (rose, plum); <b>epigynous</b> = ovary inferior, parts above (guava, cucumber, sunflower)."},
{q:"Write and explain the floral formula of the Fabaceae (pea family).", hint:"Papilionaceous + diadelphous.", a:"<b>% ⚥ K(5) C5 A(9)+1 G1</b>: zygomorphic, bisexual; calyx of 5 fused sepals; corolla papilionaceous (1 standard, 2 wings, 2 keel, vexillary aestivation); 10 stamens diadelphous (9 fused + 1 free); monocarpellary superior ovary with marginal placentation. Roots bear N₂-fixing nodules."},
{q:"Compare dicot and monocot seeds.", hint:"Cotyledons & food store.", a:"<b>Dicot (gram):</b> two cotyledons that often store food; has plumule, radicle, hilum, micropyle. <b>Monocot (maize):</b> one cotyledon (scutellum); food stored in the <b>endosperm</b>; embryo protected by coleoptile (shoot) and coleorhiza (root)."},
{q:"Define the four aestivation types with an example each.", hint:"Bud arrangement.", a:"<b>Valvate</b> — margins meet without overlap (Calotropis). <b>Twisted</b> — one margin regularly overlaps the next (china rose). <b>Imbricate</b> — overlapping with no fixed direction (Cassia). <b>Vexillary</b> — pea type: standard covers wings, wings cover keel."},
{q:"List the parts of a fruit and distinguish a true from a false fruit.", hint:"Pericarp layers.", a:"A fruit consists of the <b>pericarp</b> (epicarp + mesocarp + endocarp) enclosing seeds, developing from the ovary. A <b>true fruit</b> forms from the ovary only; a <b>false fruit</b> also develops from the thalamus or other floral parts (apple)."}
],

mcqs:[
{q:"Pneumatophores are found in:", o:["Banyan","Maize","Rhizophora (mangrove)","Carrot"], c:2, e:"Mangroves like <b>Rhizophora</b> form upward 'breathing' roots (pneumatophores)."},
{q:"Stilt roots arise in:", o:["Banyan","Maize and sugarcane","Mustard","Sweet potato"], c:1, e:"<b>Maize and sugarcane</b> develop supporting stilt roots from lower nodes."},
{q:"A potato is a modified:", o:["Root","Stem (tuber)","Leaf","Fruit"], c:1, e:"The potato is an underground <b>stem tuber</b> — it has nodes, eyes (buds) and scale leaves."},
{q:"Parallel venation is characteristic of:", o:["Dicots","Monocots","Ferns","Mosses"], c:1, e:"<b>Monocots</b> show parallel venation; dicots show reticulate."},
{q:"In racemose inflorescence, flowers open:", o:["Basipetally","Acropetally","Simultaneously","Randomly"], c:1, e:"Racemose = <b>acropetal</b> (older flowers below, younger above); the axis keeps growing."},
{q:"Marginal placentation is seen in:", o:["Tomato","Pea","Mustard","Sunflower"], c:1, e:"<b>Pea</b> shows marginal placentation (ovules along the ventral suture)."},
{q:"Axile placentation occurs in:", o:["Pea","Mustard","Lemon/tomato","Dianthus"], c:2, e:"<b>Lemon and tomato</b> show axile placentation."},
{q:"An epigynous flower (inferior ovary) is:", o:["Mustard","China rose","Guava","Pea"], c:2, e:"<b>Guava</b> (and cucumber, sunflower) have an inferior ovary → epigynous."},
{q:"Vexillary aestivation is typical of:", o:["Solanaceae","Liliaceae","Fabaceae","Brassicaceae"], c:2, e:"The pea family <b>Fabaceae</b> shows vexillary aestivation."},
{q:"Diadelphous stamens A(9)+1 are found in:", o:["Liliaceae","Fabaceae","Solanaceae","Asteraceae"], c:1, e:"<b>Fabaceae</b> — nine fused stamens + one free (diadelphous)."},
{q:"The fruit wall is collectively called the:", o:["Testa","Pericarp","Tegmen","Aleurone"], c:1, e:"The fruit wall is the <b>pericarp</b> (epicarp + mesocarp + endocarp)."},
{q:"In a maize seed, the stored food is mainly in the:", o:["Cotyledons","Endosperm","Radicle","Plumule"], c:1, e:"Monocot (maize) seeds store food in the <b>endosperm</b>; the single cotyledon is the scutellum."},
{q:"Tetradynamous condition (4 long + 2 short stamens) is seen in:", o:["Pea","Mustard","Lily","Tomato"], c:1, e:"<b>Mustard</b> (Brassicaceae) shows tetradynamous stamens (A2+4)."},
{q:"Onion and garlic belong to which family?", o:["Fabaceae","Solanaceae","Liliaceae","Brassicaceae"], c:2, e:"Onion, garlic, tulip and Aloe belong to <b>Liliaceae</b> (monocots)."},
{q:"An apple is an example of a:", o:["True fruit","False fruit","Drupe","Berry"], c:1, e:"Apple is a <b>false fruit</b> — the fleshy edible part develops from the thalamus."},
{q:"Phylloclade (flattened green stem) is seen in:", o:["Pea","Opuntia","Onion","Banyan"], c:1, e:"<b>Opuntia</b> has a phylloclade — a flattened photosynthetic stem."},
{q:"Whorled phyllotaxy means:", o:["One leaf per node","Two leaves per node","More than two leaves per node","No leaves"], c:2, e:"<b>Whorled</b> phyllotaxy has more than two leaves at a node (e.g. Alstonia)."},
{q:"Root nodules that fix nitrogen are a feature of:", o:["Solanaceae","Liliaceae","Fabaceae","Asteraceae"], c:2, e:"<b>Fabaceae</b> roots bear nodules with N₂-fixing bacteria."},
{q:"In the floral formula, an underlined G indicates:", o:["Inferior ovary","Superior ovary","Fused carpels","Bisexual flower"], c:1, e:"An <b>underlined G</b> denotes a superior ovary (hypogynous); a bar above G denotes inferior."},
{q:"The standard, wings and keel together form the corolla of:", o:["Lily","Pea (papilionaceous)","Tomato","Mustard"], c:1, e:"The <b>papilionaceous</b> pea corolla = 1 standard + 2 wings + 2 keel petals."}
],

match:[
{term:"Tap root", def:"From radicle; dicots"},
{term:"Pneumatophore", def:"Breathing root of mangroves"},
{term:"Potato", def:"Underground stem tuber"},
{term:"Racemose", def:"Axis grows; acropetal flowers"},
{term:"Cymose", def:"Axis ends in a flower; basipetal"},
{term:"Marginal placentation", def:"Pea"},
{term:"Axile placentation", def:"Tomato / lemon"},
{term:"Hypogynous", def:"Superior ovary (mustard)"},
{term:"Epigynous", def:"Inferior ovary (guava)"},
{term:"Vexillary", def:"Pea-flag aestivation"},
{term:"Diadelphous", def:"A(9)+1 stamens (Fabaceae)"},
{term:"Pericarp", def:"Epicarp + mesocarp + endocarp"}
],

pathways:[
{title:"Regions of the root (tip → base)", prompt:"Order the four regions starting from the root tip.", steps:["Root cap","Meristematic region","Region of elongation","Region of maturation (root hairs)"]},
{title:"Floral whorls (outer → inner)", prompt:"Arrange the floral whorls from outermost to innermost.", steps:["Calyx (sepals)","Corolla (petals)","Androecium (stamens)","Gynoecium (carpels)"]},
{title:"From flower to fruit", prompt:"Order the events from pollination to fruit.", steps:["Pollination","Fertilisation","Ovary develops","Ovary wall → pericarp","Ovules → seeds","Fruit"]},
{title:"Reticulate path: which group?", prompt:"Order placentation by ovule attachment site (outside → centre → base).", steps:["Parietal (wall)","Axile (axis with septa)","Free central (axis, no septa)","Basal (base)"]}
]
};