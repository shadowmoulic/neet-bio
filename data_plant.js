/* ====== data_plant.js ====== */
/* ===== CHAPTER 3 · PLANT KINGDOM ===== */
DATA.chapters.plant = {
id:"plant", num:3, title:"Plant Kingdom", subtitle:"Algae · Bryophytes · Pteridophytes · Gymnosperms · Angiosperms",
color:"#62b173", colorD:"#2f6b40", glyph:"🌿",

notes:[
{
id:"classif", heading:"Classification Systems",
html:`
<p>Earlier, plants were grouped using only a few visible traits. Over time, three broad approaches to classification developed:</p>
<table class="cmp"><thead><tr><th>System</th><th>Basis</th><th>Example / Note</th></tr></thead><tbody>
<tr><td><b>Artificial</b></td><td>One or a few <span class="kw">superficial vegetative characters</span> (e.g. number of stamens)</td><td>Linnaeus' system; gave equal weight to vegetative & sexual traits, separated closely related groups</td></tr>
<tr><td><b>Natural</b></td><td><span class="kw">Natural affinities</span> — many characters together, including internal features (anatomy, embryology, phytochemistry)</td><td>Bentham &amp; Hooker</td></tr>
<tr><td><b>Phylogenetic</b></td><td><span class="kw">Evolutionary relationships</span> — assumes organisms of a group share a common ancestor</td><td>Modern systems; uses molecular data too</td></tr>
</tbody></table>
<h4>Newer tools</h4>
<ul>
<li><b>Numerical Taxonomy</b> — uses computers; all observable characters are given codes &amp; numbers, processed so hundreds of traits can be considered at once.</li>
<li><b>Cytotaxonomy</b> — based on <span class="kw">cytological information</span> such as chromosome number, structure and behaviour.</li>
<li><b>Chemotaxonomy</b> — uses <span class="kw">chemical constituents</span> of the plant to resolve confusions.</li>
</ul>
<div class="callout"><b>Big idea:</b> Classification moved from "what looks similar" → to "what is truly related by evolution."</div>
`
},
{
id:"algae", heading:"Algae",
html:`
<p><b>Algae</b> are chlorophyll-bearing, simple, thalloid (no true root–stem–leaf), largely aquatic autotrophs. The plant body is a <span class="kw">thallus</span>.</p>
<h4>Reproduction</h4>
<ul>
<li><b>Vegetative</b> — by fragmentation; each fragment grows into a new thallus.</li>
<li><b>Asexual</b> — mostly by <span class="kw">zoospores</span> (flagellated, motile).</li>
<li><b>Sexual</b> — fusion of gametes: <em>isogamous</em> (similar gametes, e.g. <i>Ulothrix</i>), <em>anisogamous</em> (dissimilar in size, e.g. some <i>Chlamydomonas</i>), <em>oogamous</em> (large non-motile female + small motile male, e.g. <i>Volvox</i>, <i>Fucus</i>).</li>
</ul>
<h4>The three classes — compare carefully</h4>
<table class="cmp"><thead><tr><th>Feature</th><th>Chlorophyceae (Green)</th><th>Phaeophyceae (Brown)</th><th>Rhodophyceae (Red)</th></tr></thead><tbody>
<tr><td><b>Pigments</b></td><td>Chlorophyll <b>a, b</b></td><td>Chl <b>a, c</b> + <span class="kw">fucoxanthin</span></td><td>Chl <b>a, d</b> + <span class="kw">phycoerythrin</span> (r-phycoerythrin)</td></tr>
<tr><td><b>Colour</b></td><td>Grass green</td><td>Olive-green to brown</td><td>Red</td></tr>
<tr><td><b>Stored food</b></td><td>Starch</td><td>Laminarin / Mannitol</td><td>Floridean starch</td></tr>
<tr><td><b>Cell wall</b></td><td>Cellulose</td><td>Cellulose + algin</td><td>Cellulose, pectin + polysulphate esters</td></tr>
<tr><td><b>Flagella</b></td><td>2–8, equal, apical</td><td>2, unequal, lateral</td><td><span class="kw">Absent</span></td></tr>
<tr><td><b>Habitat</b></td><td>Mostly freshwater</td><td>Mostly marine</td><td>Mostly marine (warm waters)</td></tr>
<tr><td><b>Examples</b></td><td><i>Chlamydomonas, Volvox, Ulothrix, Spirogyra, Chara</i></td><td><i>Ectocarpus, Dictyota, Laminaria, Sargassum, Fucus</i></td><td><i>Polysiphonia, Porphyra, Gracilaria, Gelidium</i></td></tr>
</tbody></table>
<h4>Economic & ecological importance</h4>
<ul>
<li>At least half of Earth's <span class="kw">CO₂ fixation</span> (photosynthesis) is by algae.</li>
<li>Food: <i>Porphyra, Laminaria, Sargassum</i>. </li>
<li>Hydrocolloids: <b>algin</b> (brown algae), <b>carrageen</b> (red algae). <b>Agar</b> from <i>Gelidium</i> &amp; <i>Gracilaria</i> — used for culture media &amp; ice-creams.</li>
<li><i>Chlorella</i> &amp; <i>Spirulina</i> — protein-rich food supplements (even for space travellers).</li>
</ul>
`
},
{
id:"bryo", heading:"Bryophytes",
html:`
<p><b>Bryophytes</b> are the "<span class="kw">amphibians of the plant kingdom</span>" — they live on land but need water to complete sexual reproduction. They lack true vascular tissue.</p>
<ul>
<li>The main plant body is the <span class="kw">gametophyte</span> (haploid, dominant, photosynthetic). It bears <b>rhizoids</b> for anchorage.</li>
<li>Male organ = <b>antheridium</b> (produces flagellated antherozoids); female organ = <b>archegonium</b> (flask-shaped, produces one egg).</li>
<li>Water is needed so antherozoids can swim to the archegonium → fertilisation forms the <b>zygote</b>.</li>
<li>Zygote → <span class="kw">sporophyte</span> (diploid, partly dependent on the gametophyte). It makes spores by meiosis; spores germinate into new gametophytes.</li>
</ul>
<div class="flow">
<span class="node">Spore</span><span class="arr">→</span><span class="node">Gametophyte (n)</span><span class="arr">→</span><span class="node">Antheridium + Archegonium</span><span class="arr">→</span><span class="node">Fertilisation (needs water)</span><span class="arr">→</span><span class="node">Zygote (2n)</span><span class="arr">→</span><span class="node">Sporophyte → meiosis → Spores</span>
</div>
<h4>Liverworts</h4>
<p>Grow in moist, shady places; thalloid (e.g. <i>Marchantia</i>). Asexual reproduction by <span class="kw">gemmae</span> (green buds in gemma cups) or fragmentation.</p>
<h4>Mosses</h4>
<p>Two stages: (1) <b>protonema</b> — creeping green filamentous stage from a spore; (2) <b>leafy stage</b> — upright with spirally arranged leaves, bearing sex organs. Examples: <i>Funaria, Polytrichum, Sphagnum</i>.</p>
<div class="callout"><b>Importance:</b> <i>Sphagnum</i> (bog/peat moss) provides peat (fuel) &amp; is used as packing for transporting living material because it holds water. Mosses form mats that reduce soil erosion.</div>
`
},
{
id:"pterido", heading:"Pteridophytes",
html:`
<p><b>Pteridophytes</b> are the <span class="kw">first true land plants with vascular tissue</span> (xylem &amp; phloem). Examples: <i>Selaginella, Equisetum, Pteris, Adiantum, Lycopodium, Salvinia, Marsilea</i>.</p>
<ul>
<li>The dominant phase is the <span class="kw">sporophyte</span> (2n) — differentiated into true <b>roots, stem and leaves</b>.</li>
<li>Leaves may be small (<b>microphylls</b>, e.g. <i>Selaginella</i>) or large (<b>macrophylls</b>, e.g. ferns).</li>
<li>Sporophytes bear <b>sporangia</b>, often grouped in clusters called <span class="kw">sori</span> on leaf-like <b>sporophylls</b>.</li>
<li>Sporangia produce spores by <b>meiosis</b>. Spores germinate into a small, free-living, photosynthetic <span class="kw">prothallus</span> (the gametophyte) that needs cool, damp, shady soil.</li>
<li>The gametophyte bears antheridia &amp; archegonia; <b>water is needed</b> for fertilisation (like bryophytes).</li>
</ul>
<h4>Homospory vs Heterospory</h4>
<table class="cmp"><thead><tr><th></th><th>Homosporous</th><th>Heterosporous</th></tr></thead><tbody>
<tr><td><b>Spores</b></td><td>One kind of spore</td><td>Two kinds — large <b>megaspores</b> &amp; small <b>microspores</b></td></tr>
<tr><td><b>Examples</b></td><td>Most pteridophytes</td><td><i>Selaginella, Salvinia</i></td></tr>
<tr><td><b>Significance</b></td><td>—</td><td>Megaspores develop into female gametophyte <span class="kw">retained on the parent</span> → a key evolutionary step toward the <b>seed habit</b></td></tr>
</tbody></table>
<div class="callout"><b>Heterospory is the precursor to the seed.</b> Retention of the developing female gametophyte and zygote on the parent foreshadows seed plants.</div>
`
},
{
id:"gymno", heading:"Gymnosperms",
html:`
<p><b>Gymnosperms</b> bear <span class="kw">naked seeds</span> — the ovules are not enclosed in an ovary, so the seeds are not covered by a fruit. Examples: <i>Cycas, Pinus, Ginkgo, Cedrus, Ephedra</i>.</p>
<ul>
<li>Range from small to giant trees (e.g. <i>Sequoia</i>, the redwood — one of the tallest trees).</li>
<li>Roots usually tap roots; <i>Cycas</i> has special <b>coralloid roots</b> with N₂-fixing cyanobacteria; <i>Pinus</i> has <b>mycorrhiza</b>.</li>
<li><span class="kw">Heterosporous</span> — produce microspores &amp; megaspores. Reproductive structures are borne on <b>cones / strobili</b>.</li>
<li>Male cones bear <b>microsporophylls</b> with microsporangia → pollen grains (microspores).</li>
<li>Female cones bear <b>megasporophylls</b> with ovules; the megaspore develops into a female gametophyte bearing archegonia.</li>
<li><b>No water needed</b> for fertilisation — pollen is carried by <span class="kw">wind</span> to the ovule; a pollen tube delivers male gametes.</li>
<li>After fertilisation the zygote → embryo, ovule → naked seed.</li>
</ul>
<div class="callout"><b>Key advance:</b> The seed habit + wind pollination free gymnosperms from dependence on external water for reproduction.</div>
`
},
{
id:"angio", heading:"Angiosperms",
html:`
<p><b>Angiosperms</b> = flowering plants. Seeds develop <span class="kw">inside an ovary</span>, which matures into a <b>fruit</b>. They range from the tiny <i>Wolffia</i> to giant <i>Eucalyptus</i> (~100 m).</p>
<ul>
<li><b>Stamen</b> (male): anther holds pollen sacs → <b>pollen grains</b> (microspores) → male gametes.</li>
<li><b>Pistil/carpel</b> (female): ovary contains ovules; each ovule has an <b>embryo sac</b> (female gametophyte) with an egg + two <b>polar nuclei</b>.</li>
<li><span class="kw">Double fertilisation</span> (unique to angiosperms): one male gamete + egg → <b>zygote</b> (2n); other male gamete + two polar nuclei → <b>primary endosperm nucleus</b> (3n) → triploid endosperm to feed the embryo.</li>
</ul>
<h4>Two classes</h4>
<table class="cmp"><thead><tr><th>Feature</th><th>Dicotyledons</th><th>Monocotyledons</th></tr></thead><tbody>
<tr><td>Cotyledons in seed</td><td>Two</td><td>One</td></tr>
<tr><td>Leaf venation</td><td>Reticulate (net-like)</td><td>Parallel</td></tr>
<tr><td>Root</td><td>Tap root</td><td>Fibrous root</td></tr>
<tr><td>Floral parts</td><td>In 4s or 5s (tetra/pentamerous)</td><td>In 3s (trimerous)</td></tr>
</tbody></table>
`
},
{
id:"lifecycle", heading:"Plant Life Cycles & Alternation of Generations",
html:`
<p>Plants alternate between a haploid <b>gametophyte</b> (makes gametes by mitosis) and a diploid <b>sporophyte</b> (makes spores by meiosis). Which phase dominates defines the life-cycle type.</p>
<table class="cmp"><thead><tr><th>Type</th><th>Dominant phase</th><th>Other phase</th><th>Found in</th></tr></thead><tbody>
<tr><td><b>Haplontic</b></td><td>Gametophyte (n) — free-living, dominant</td><td>Only the <b>zygote</b> is diploid (no free-living sporophyte)</td><td>Many algae — <i>Volvox, Spirogyra, Chlamydomonas</i></td></tr>
<tr><td><b>Diplontic</b></td><td>Sporophyte (2n) — free-living, dominant</td><td>Gametophyte is reduced (a few cells); only <b>gametes</b> are haploid</td><td>Seed plants — gymnosperms &amp; angiosperms; alga <i>Fucus</i></td></tr>
<tr><td><b>Haplo-diplontic</b></td><td>Both multicellular &amp; free-living, but one dominates</td><td>—</td><td>Bryophytes (gametophyte dominant) &amp; Pteridophytes (sporophyte dominant); algae <i>Ectocarpus, Polysiphonia, Kelps</i></td></tr>
</tbody></table>
<div class="formula"><span class="hl">Gametophyte (n)</span> → gametes → fertilisation → <span class="hl">Zygote (2n)</span> → Sporophyte (2n) → meiosis → spores → Gametophyte (n) ...</div>
<div class="callout"><b>Memory anchor:</b> Moss &amp; ferns = "in-between" (haplo-diplontic). Bryophyte → gametophyte boss. Pteridophyte → sporophyte boss.</div>
`
}
],

mnemonics:[
{title:"The 3 algae classes (in evolutionary green→brown→red order)", device:`<b>G</b>reen <b>B</b>rats <b>R</b>un — "Chl-orophyceae, Pha-eophyceae, Rho-dophyceae"`, expand:[
 {L:"G",t:"Chlorophyceae — Green — Chl a+b — Starch"},
 {L:"B",t:"Phaeophyceae — Brown — fucoxanthin — Laminarin/Mannitol"},
 {L:"R",t:"Rhodophyceae — Red — phycoerythrin — Floridean starch — NO flagella"}
]},
{title:"Brown-algae pigment", device:`<b>F</b>ucoxanthin makes it <b>F</b>uscous (brown)`, expand:[
 {L:"F",t:"Fucoxanthin → brown colour (Phaeophyceae)"},
 {L:"P",t:"Phycoerythrin → red (Rhodophyceae)"}
]},
{title:"Red algae has NO flagella & lives deep", device:`<b>R</b>ed = <b>R</b>esting (no flagella), <b>R</b>eaches deep water (phycoerythrin absorbs blue light)`, expand:[
 {L:"!",t:"Only red algae lack flagella entirely"}
]},
{title:"Plant groups, simple → complex", device:`<b>A</b>ll <b>B</b>otanists <b>P</b>refer <b>G</b>reen <b>A</b>cres`, expand:[
 {L:"A",t:"Algae (thalloid, aquatic)"},
 {L:"B",t:"Bryophytes (amphibians of plant kingdom)"},
 {L:"P",t:"Pteridophytes (first vascular plants)"},
 {L:"G",t:"Gymnosperms (naked seeds)"},
 {L:"A",t:"Angiosperms (flowers + fruit)"}
]},
{title:"Bryophyte = amphibian", device:`<b>B</b>ryophyte = <b>B</b>aby that still <b>B</b>athes — needs water to reproduce`, expand:[
 {L:"♂",t:"Antheridium → Antherozoids (swim)"},
 {L:"♀",t:"Archegonium → egg (flask-shaped)"}
]},
{title:"Heterosporous pteridophytes", device:`<b>S</b>ally <b>S</b>plits two spore sizes — <b>S</b>elaginella & <b>S</b>alvinia`, expand:[
 {L:"S",t:"Selaginella + Salvinia = heterosporous (mega + micro spores)"}
]},
{title:"Life-cycle bosses", device:`Algae = <b>Haplo</b>boss · Seed plants = <b>Diplo</b>boss · Moss/Fern = <b>Both</b>`, expand:[
 {L:"H",t:"Haplontic: gametophyte dominant (Volvox, Spirogyra, Chlamydomonas)"},
 {L:"D",t:"Diplontic: sporophyte dominant (gymnosperms, angiosperms)"},
 {L:"B",t:"Haplo-diplontic: bryophytes (gameto-dom) & pteridophytes (sporo-dom)"}
]},
{title:"Agar source", device:`<b>Gel</b>idium + <b>Gra</b>cilaria give <b>Gel</b> (agar)`, expand:[
 {L:"A",t:"Agar = from red algae Gelidium & Gracilaria"}
]}
],

flashcards:[
{front:"What is the plant body of an alga called?", back:"A thallus — there is no differentiation into true root, stem or leaf."},
{front:"Pigments & stored food of Chlorophyceae (green algae)", back:"Chlorophyll a & b; food stored as starch. Cell wall of cellulose. e.g. Spirogyra, Chara, Volvox."},
{front:"Pigment that gives brown algae their colour", back:"Fucoxanthin (Phaeophyceae). Food stored as laminarin or mannitol."},
{front:"Which algae class lacks flagella entirely?", back:"Rhodophyceae (red algae). Red colour from phycoerythrin; food = floridean starch."},
{front:"Why are bryophytes called 'amphibians of the plant kingdom'?", back:"They live on land but still need water for sexual reproduction (antherozoids swim to the egg)."},
{front:"Dominant phase in bryophytes vs pteridophytes", back:"Bryophytes → gametophyte dominant. Pteridophytes → sporophyte dominant (true roots, stem, leaves)."},
{front:"Two stages in the life of a moss", back:"(1) Protonema — creeping green filamentous stage; (2) Leafy stage — upright, bears sex organs."},
{front:"What is a prothallus?", back:"The small, free-living, photosynthetic gametophyte of a pteridophyte; needs cool, damp, shady soil."},
{front:"Define heterospory & give two examples", back:"Production of two kinds of spores — micro & megaspores. Examples: Selaginella and Salvinia. It is a precursor to the seed habit."},
{front:"Why are gymnosperm seeds called 'naked'?", back:"Ovules are not enclosed in an ovary, so seeds are not covered by a fruit."},
{front:"Special roots of Cycas and Pinus", back:"Cycas → coralloid roots (N₂-fixing cyanobacteria). Pinus → mycorrhizal roots (fungal association)."},
{front:"What is double fertilisation?", back:"Unique to angiosperms: one male gamete + egg → zygote (2n); other male gamete + 2 polar nuclei → triploid (3n) endosperm."},
{front:"Dicot vs Monocot: cotyledons, venation, root", back:"Dicot: 2 cotyledons, reticulate venation, tap root. Monocot: 1 cotyledon, parallel venation, fibrous root."},
{front:"Name the three classification systems", back:"Artificial (few characters), Natural (many natural affinities — Bentham & Hooker), Phylogenetic (evolutionary relationships)."},
{front:"Cytotaxonomy vs Chemotaxonomy", back:"Cytotaxonomy uses chromosome number/structure/behaviour; Chemotaxonomy uses chemical constituents of the plant."},
{front:"Source of agar", back:"Red algae — Gelidium and Gracilaria. Used in culture media & food (ice-creams)."},
{front:"Algae that are protein-rich food supplements", back:"Chlorella and Spirulina."},
{front:"Three life-cycle patterns", back:"Haplontic (gametophyte dominant – algae), Diplontic (sporophyte dominant – seed plants), Haplo-diplontic (both free-living – bryophytes & pteridophytes)."},
{front:"Male & female sex organs in bryophytes", back:"Antheridium (male, makes antherozoids) and Archegonium (female, flask-shaped, makes one egg)."},
{front:"What are sori?", back:"Clusters of sporangia found on the underside of fern sporophylls."}
],

recall:[
{q:"Compare the three classes of algae on the basis of pigments, stored food and one example each.", hint:"Green / Brown / Red. Think colour-causing pigment.", a:"<b>Chlorophyceae (green):</b> chlorophyll a & b; food = starch; e.g. Spirogyra, Volvox. <b>Phaeophyceae (brown):</b> chl a, c + fucoxanthin; food = laminarin/mannitol; e.g. Laminaria, Sargassum. <b>Rhodophyceae (red):</b> chl a, d + phycoerythrin; food = floridean starch; no flagella; e.g. Porphyra, Gracilaria."},
{q:"Explain why bryophytes are called the 'amphibians of the plant kingdom'.", hint:"What do they still depend on for reproduction?", a:"They are land plants but the male antherozoids must <b>swim through water</b> to reach the egg in the archegonium for fertilisation. So they require water to complete sexual reproduction, like amphibians."},
{q:"Describe the alternation of generations in a moss, naming the dominant phase.", hint:"Spore → ? → sex organs → zygote → ?", a:"Spore germinates into a creeping <b>protonema</b>, which develops the <b>leafy gametophyte</b> (dominant, haploid). It bears antheridia & archegonia; with water, fertilisation gives a <b>zygote (2n)</b> that grows into the partly dependent <b>sporophyte</b>, which makes spores by meiosis."},
{q:"What is heterospory and why is it evolutionarily important?", hint:"Two spore types; what stays on the parent?", a:"Heterospory = production of two kinds of spores, large <b>megaspores</b> and small <b>microspores</b> (seen in Selaginella & Salvinia). The megaspore develops a female gametophyte <b>retained on the parent plant</b>, foreshadowing the <b>seed habit</b> of higher plants."},
{q:"How do gymnosperms reproduce without water, and what makes their seeds 'naked'?", hint:"Cones, wind, no ovary.", a:"They are heterosporous; reproductive structures are on <b>cones</b>. <b>Wind</b> carries pollen to the ovule and a pollen tube delivers the male gametes, so no external water is needed. Ovules are <b>not enclosed in an ovary</b>, so the resulting seeds lie exposed (naked) on megasporophylls."},
{q:"Explain double fertilisation in angiosperms and its products.", hint:"Two male gametes — two fusions.", a:"In the embryo sac, one male gamete fuses with the egg → <b>diploid zygote (2n)</b> (syngamy); the second male gamete fuses with the <b>two polar nuclei</b> → <b>triploid primary endosperm nucleus (3n)</b> (triple fusion). The endosperm nourishes the developing embryo. This double event is unique to angiosperms."},
{q:"Distinguish haplontic, diplontic and haplo-diplontic life cycles with examples.", hint:"Which phase is the free-living 'boss'?", a:"<b>Haplontic:</b> gametophyte dominant & free-living, only zygote is diploid (Volvox, Spirogyra, Chlamydomonas). <b>Diplontic:</b> sporophyte dominant, gametophyte reduced (gymnosperms, angiosperms). <b>Haplo-diplontic:</b> both phases multicellular & free-living — bryophytes (gametophyte dominant) and pteridophytes (sporophyte dominant)."},
{q:"List the economic uses of algae.", hint:"Food, gels, supplements, CO₂.", a:"Algae fix ~half of global CO₂. Food: Porphyra, Laminaria, Sargassum. Hydrocolloids: algin (brown), carrageen (red), <b>agar</b> (Gelidium, Gracilaria). Chlorella & Spirulina are protein-rich supplements."},
{q:"Differentiate the three systems of classification.", hint:"Few traits / many traits / evolution.", a:"<b>Artificial</b> — based on one or few superficial characters (Linnaeus). <b>Natural</b> — based on many natural affinities including internal features (Bentham & Hooker). <b>Phylogenetic</b> — based on evolutionary relationships and common ancestry."},
{q:"State the distinguishing features of pteridophytes that make them the 'first true land plants'.", hint:"Vascular tissue + body parts.", a:"They are the first plants with <b>vascular tissue (xylem & phloem)</b>. The dominant <b>sporophyte</b> has true <b>roots, stem and leaves</b>; it bears sporangia (often in sori). Spores form a free-living prothallus (gametophyte) and water is still needed for fertilisation."},
{q:"Give one defining example organism for each major plant group.", hint:"Algae→Bryo→Pterido→Gymno→Angio.", a:"Algae: Spirogyra/Volvox; Bryophyte: Marchantia (liverwort) / Funaria (moss); Pteridophyte: Selaginella / Pteris (fern); Gymnosperm: Cycas / Pinus; Angiosperm: any flowering plant (e.g. pea, maize)."}
],

mcqs:[
{q:"In which algal class is the stored food floridean starch?", o:["Chlorophyceae","Phaeophyceae","Rhodophyceae","Both a & b"], c:2, e:"Floridean starch is the reserve food of <b>red algae (Rhodophyceae)</b>. Green algae store starch; brown algae store laminarin/mannitol."},
{q:"Fucoxanthin is the characteristic pigment of:", o:["Green algae","Brown algae","Red algae","Bryophytes"], c:1, e:"<b>Brown algae (Phaeophyceae)</b> owe their colour to fucoxanthin (a xanthophyll)."},
{q:"Which group is referred to as the 'amphibians of the plant kingdom'?", o:["Algae","Bryophytes","Pteridophytes","Gymnosperms"], c:1, e:"<b>Bryophytes</b> — they live on land but need water for fertilisation."},
{q:"The dominant phase in a pteridophyte life cycle is the:", o:["Gametophyte","Sporophyte","Zygote","Prothallus"], c:1, e:"In pteridophytes the <b>sporophyte</b> dominates (true roots, stem, leaves). The gametophyte is the small prothallus."},
{q:"Naked seeds are characteristic of:", o:["Angiosperms","Pteridophytes","Gymnosperms","Bryophytes"], c:2, e:"<b>Gymnosperms</b> bear ovules not enclosed in an ovary, so the seeds are naked."},
{q:"Double fertilisation is a feature unique to:", o:["Gymnosperms","Angiosperms","Pteridophytes","Brown algae"], c:1, e:"Only <b>angiosperms</b> show double fertilisation → diploid zygote + triploid endosperm."},
{q:"Coralloid roots with nitrogen-fixing cyanobacteria are found in:", o:["Pinus","Cycas","Cedrus","Ginkgo"], c:1, e:"<b>Cycas</b> has coralloid roots harbouring N₂-fixing cyanobacteria."},
{q:"Which classification system is based on evolutionary relationships?", o:["Artificial","Natural","Phylogenetic","Numerical"], c:2, e:"<b>Phylogenetic</b> systems assume members of a group share a common ancestor."},
{q:"Selaginella and Salvinia are examples of:", o:["Homosporous pteridophytes","Heterosporous pteridophytes","Liverworts","Brown algae"], c:1, e:"Both are <b>heterosporous</b> — they form micro- and megaspores, a step toward the seed habit."},
{q:"Agar is obtained from:", o:["Chlorella","Sargassum","Gelidium and Gracilaria","Spirogyra"], c:2, e:"<b>Agar</b> comes from the red algae Gelidium and Gracilaria."},
{q:"In a haplontic life cycle, the only diploid stage is the:", o:["Gametophyte","Spore","Zygote","Sporophyte tissue"], c:2, e:"In haplontic cycles (e.g. Volvox, Spirogyra) only the <b>zygote</b> is diploid; it undergoes meiosis."},
{q:"The female sex organ of a bryophyte is the:", o:["Antheridium","Archegonium","Sporangium","Sorus"], c:1, e:"The flask-shaped <b>archegonium</b> produces a single egg; the antheridium is the male organ."},
{q:"Reticulate venation and tap roots are typical of:", o:["Monocots","Dicots","Mosses","Ferns"], c:1, e:"<b>Dicots</b> show reticulate (net) venation, tap roots and floral parts in 4s/5s."},
{q:"Chlorella and Spirulina are used as:", o:["Sources of agar","Protein-rich food supplements","Brown pigments","Soil binders"], c:1, e:"Both are unicellular algae rich in protein, used as food supplements."},
{q:"Which class of algae completely lacks flagellated cells?", o:["Chlorophyceae","Phaeophyceae","Rhodophyceae","None"], c:2, e:"<b>Rhodophyceae</b> (red algae) have no flagella at any stage."},
{q:"Cytotaxonomy is based primarily on:", o:["Chemical constituents","Chromosome data","Flower colour","Computer codes"], c:1, e:"Cytotaxonomy uses cytological data — chromosome number, structure and behaviour."},
{q:"The triploid tissue formed in angiosperm double fertilisation is the:", o:["Zygote","Embryo","Endosperm","Nucellus"], c:2, e:"The primary endosperm nucleus (3n) forms the <b>endosperm</b>, which nourishes the embryo."},
{q:"Sphagnum is economically important as a source of:", o:["Agar","Peat / packing material","Algin","Carrageen"], c:1, e:"<b>Sphagnum</b> (peat moss) provides peat fuel and is used as moist packing material."},
{q:"Pollination in gymnosperms is generally achieved by:", o:["Water","Insects","Wind","Birds"], c:2, e:"Gymnosperms are <b>wind-pollinated</b>; pollen reaches the ovule directly."},
{q:"Which is the correct simple-to-complex order?", o:["Algae→Pteridophytes→Bryophytes→Gymnosperms→Angiosperms","Algae→Bryophytes→Pteridophytes→Gymnosperms→Angiosperms","Bryophytes→Algae→Pteridophytes→Angiosperms→Gymnosperms","Algae→Bryophytes→Gymnosperms→Pteridophytes→Angiosperms"], c:1, e:"Correct order: Algae → Bryophytes → Pteridophytes → Gymnosperms → Angiosperms."}
],

match:[
{term:"Chlorophyceae", def:"Green algae; chlorophyll a & b; starch"},
{term:"Phaeophyceae", def:"Brown algae; fucoxanthin; laminarin"},
{term:"Rhodophyceae", def:"Red algae; phycoerythrin; no flagella"},
{term:"Marchantia", def:"A liverwort"},
{term:"Funaria", def:"A moss"},
{term:"Selaginella", def:"Heterosporous pteridophyte"},
{term:"Cycas", def:"Gymnosperm with coralloid roots"},
{term:"Double fertilisation", def:"Unique to angiosperms"},
{term:"Prothallus", def:"Free-living gametophyte of a fern"},
{term:"Agar", def:"From Gelidium & Gracilaria"},
{term:"Haplontic", def:"Gametophyte dominant (Volvox)"},
{term:"Diplontic", def:"Sporophyte dominant (seed plants)"}
],

pathways:[
{title:"Bryophyte life cycle", prompt:"Arrange the moss life cycle from spore onward.", steps:["Spore","Protonema","Leafy gametophyte (n)","Antheridium + Archegonium","Fertilisation (needs water)","Zygote (2n)","Sporophyte → meiosis"]},
{title:"Plant groups: simple → complex", prompt:"Order the five plant groups by increasing complexity.", steps:["Algae","Bryophytes","Pteridophytes","Gymnosperms","Angiosperms"]},
{title:"Alternation of generations", prompt:"Order the generic alternation of generations.", steps:["Gametophyte (n)","Gametes","Fertilisation","Zygote (2n)","Sporophyte (2n)","Meiosis","Spores (n)"]},
{title:"Algae by evolutionary pigment shift", prompt:"Order algae classes green → brown → red.", steps:["Chlorophyceae (green)","Phaeophyceae (brown)","Rhodophyceae (red)"]}
]
};