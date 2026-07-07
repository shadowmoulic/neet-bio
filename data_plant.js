/* ============================================================
   data_plant.js  —  CHAPTER 3 · PLANT KINGDOM  (NCERT Class 11)
   Drop-in replacement for DATA.chapters.plant
   Fully expanded: detailed notes (flow diagrams, comparison
   tables, formulas), 10 mnemonics, 70 flashcards, 40 active-recall
   prompts, 80 MCQs (power both Quiz Battle & Boss Battle),
   32 match pairs (= 4 shuffling sets of 8), 4 pathways.
   ============================================================ */

DATA.chapters.plant = {
id:"plant", num:3, title:"Plant Kingdom", subtitle:"Algae · Bryophytes · Pteridophytes · Gymnosperms · Angiosperms",
color:"#62b173", colorD:"#2f6b40", glyph:"🌿",

/* ============================ NOTES ============================ */
notes:[
{
id:"classif", heading:"Classification Systems",
html:`
<p>Early botanists grouped plants using only a few visible traits. Over time three broad approaches — and several modern tools — developed.</p>
<table class="cmp"><thead><tr><th>System</th><th>Basis</th><th>Proposed by / Note</th></tr></thead><tbody>
<tr><td><b>Artificial</b></td><td>One or a few <span class="kw">superficial vegetative characters</span> (e.g. number of stamens)</td><td>Linnaeus; gave equal weight to vegetative & sexual traits, separated closely related groups</td></tr>
<tr><td><b>Natural</b></td><td><span class="kw">Natural affinities</span> — many characters together, incl. internal features (anatomy, embryology, phytochemistry)</td><td>Bentham & Hooker</td></tr>
<tr><td><b>Phylogenetic</b></td><td><span class="kw">Evolutionary relationships</span> — members of a group share a common ancestor</td><td>Modern systems; also use molecular data</td></tr>
</tbody></table>
<h4>Newer tools</h4>
<ul>
<li><b>Numerical Taxonomy</b> — computer-based; each observable character is coded & numbered so hundreds of traits are weighed at once.</li>
<li><b>Cytotaxonomy</b> — based on <span class="kw">cytological information</span>: chromosome number, structure & behaviour.</li>
<li><b>Chemotaxonomy</b> — uses <span class="kw">chemical constituents</span> of the plant to resolve confusions.</li>
</ul>
<div class="flow"><span class="node">Artificial (few traits)</span><span class="arr">→</span><span class="node">Natural (many affinities)</span><span class="arr">→</span><span class="node">Phylogenetic (evolution)</span></div>
<div class="callout"><b>Big idea:</b> Classification moved from "what looks similar" → to "what is truly related by evolution."</div>
`
},
{
id:"algae", heading:"Algae",
html:`
<p><b>Algae</b> are chlorophyll-bearing, simple, <span class="kw">thalloid</span> (no true root–stem–leaf), largely aquatic autotrophs. The plant body is a <b>thallus</b>. They occur in fresh & marine water, moist stones, soil, wood, and even in/on other organisms.</p>
<h4>Reproduction — three routes</h4>
<ul>
<li><b>Vegetative</b> — by <span class="kw">fragmentation</span>; each fragment grows into a new thallus.</li>
<li><b>Asexual</b> — mostly by <span class="kw">zoospores</span> (flagellated, motile) that germinate into new plants.</li>
<li><b>Sexual</b> — fusion of gametes:</li>
</ul>
<table class="cmp"><thead><tr><th>Type</th><th>Gametes</th><th>Example</th></tr></thead><tbody>
<tr><td><b>Isogamous</b></td><td>Similar in size (both may be motile)</td><td><i>Ulothrix</i>, <i>Chlamydomonas</i> (some)</td></tr>
<tr><td><b>Anisogamous</b></td><td>Dissimilar in size</td><td>Some species of <i>Chlamydomonas</i></td></tr>
<tr><td><b>Oogamous</b></td><td>Large non-motile female + small motile male</td><td><i>Volvox</i>, <i>Fucus</i></td></tr>
</tbody></table>
<h4>The three classes — compare carefully</h4>
<table class="cmp"><thead><tr><th>Feature</th><th>Chlorophyceae (Green)</th><th>Phaeophyceae (Brown)</th><th>Rhodophyceae (Red)</th></tr></thead><tbody>
<tr><td><b>Major pigments</b></td><td>Chlorophyll <b>a, b</b></td><td>Chl <b>a, c</b> + <span class="kw">fucoxanthin</span></td><td>Chl <b>a, d</b> + <span class="kw">phycoerythrin</span></td></tr>
<tr><td><b>Colour</b></td><td>Grass green</td><td>Olive-green → brown</td><td>Red</td></tr>
<tr><td><b>Stored food</b></td><td>Starch</td><td>Laminarin / Mannitol</td><td>Floridean starch</td></tr>
<tr><td><b>Cell wall</b></td><td>Cellulose</td><td>Cellulose + <b>algin</b></td><td>Cellulose, pectin + polysulphate esters</td></tr>
<tr><td><b>Flagella</b></td><td>2–8, equal, apical</td><td>2, unequal, lateral</td><td><span class="kw">Absent</span></td></tr>
<tr><td><b>Habitat</b></td><td>Mostly freshwater</td><td>Mostly marine</td><td>Mostly marine (warmer waters)</td></tr>
<tr><td><b>Examples</b></td><td><i>Chlamydomonas, Volvox, Ulothrix, Spirogyra, Chara</i></td><td><i>Ectocarpus, Dictyota, Laminaria, Sargassum, Fucus</i></td><td><i>Polysiphonia, Porphyra, Gracilaria, Gelidium</i></td></tr>
</tbody></table>
<h4>Economic & ecological importance</h4>
<ul>
<li>Algae carry out at least <span class="kw">half of Earth's CO₂ fixation</span> (photosynthesis); they are primary producers of energy-rich food in aquatic food chains.</li>
<li>Food: <i>Porphyra, Laminaria, Sargassum</i>.</li>
<li>Hydrocolloids: <b>algin</b> (brown algae), <b>carrageen</b> (red algae). <b>Agar</b> from <i>Gelidium</i> & <i>Gracilaria</i> — culture media, jellies, ice-creams.</li>
<li><i>Chlorella</i> & <i>Spirulina</i> — protein-rich food supplements (even for space travellers).</li>
</ul>
<div class="callout"><b>Trap:</b> Only <b>red algae</b> lack flagella completely. Green = starch; Brown = laminarin/mannitol; Red = floridean starch.</div>
`
},
{
id:"bryo", heading:"Bryophytes",
html:`
<p><b>Bryophytes</b> are the "<span class="kw">amphibians of the plant kingdom</span>" — they live on land but need water to complete sexual reproduction. They lack true vascular tissue (no xylem/phloem).</p>
<ul>
<li>The main plant body is the <span class="kw">gametophyte</span> (haploid, dominant, photosynthetic), attached by <b>rhizoids</b>.</li>
<li>Male organ = <b>antheridium</b> → flagellated <b>antherozoids</b>; female organ = <b>archegonium</b> (flask-shaped) → one egg.</li>
<li>Water lets antherozoids swim to the archegonium → <b>zygote</b>.</li>
<li>Zygote → <span class="kw">sporophyte</span> (diploid, partly dependent on gametophyte) → spores by <b>meiosis</b> → new gametophytes.</li>
</ul>
<div class="flow">
<span class="node">Spore (n)</span><span class="arr">→</span><span class="node">Gametophyte (n)</span><span class="arr">→</span><span class="node">Antheridium + Archegonium</span><span class="arr">→</span><span class="node">Fertilisation (needs water)</span><span class="arr">→</span><span class="node">Zygote (2n)</span><span class="arr">→</span><span class="node">Sporophyte → meiosis → Spores</span>
</div>
<h4>Liverworts</h4>
<p>Moist, shady places; thalloid body (e.g. <i>Marchantia</i>). Asexual reproduction by <span class="kw">gemmae</span> (green multicellular buds in gemma cups) or fragmentation.</p>
<h4>Mosses</h4>
<p>Two stages: (1) <b>protonema</b> — creeping, green, branched filamentous stage from a spore; (2) <b>leafy stage</b> — upright, spirally arranged leaves, bears sex organs. Examples: <i>Funaria, Polytrichum, Sphagnum</i>.</p>
<div class="callout"><b>Importance:</b> <i>Sphagnum</i> (peat/bog moss) → <b>peat</b> (fuel) & water-holding packing for transport. Mosses form mats that reduce <span class="kw">soil erosion</span> and are pioneers on bare rock.</div>
`
},
{
id:"pterido", heading:"Pteridophytes",
html:`
<p><b>Pteridophytes</b> are the <span class="kw">first true land plants with vascular tissue</span> (xylem & phloem). Examples: <i>Selaginella, Equisetum, Pteris, Adiantum, Lycopodium, Salvinia, Marsilea</i>.</p>
<ul>
<li>Dominant phase = <span class="kw">sporophyte</span> (2n) with true <b>roots, stem & leaves</b>.</li>
<li>Leaves: small (<b>microphylls</b>, e.g. <i>Selaginella</i>) or large (<b>macrophylls</b>, ferns).</li>
<li>Sporophytes bear <b>sporangia</b> on <b>sporophylls</b>; clusters of sporangia = <span class="kw">sori</span>.</li>
<li>Sporangia → spores by <b>meiosis</b> → small, free-living, photosynthetic <span class="kw">prothallus</span> (gametophyte) needing cool, damp, shady soil.</li>
<li>Gametophyte bears antheridia & archegonia; <b>water needed</b> for fertilisation.</li>
</ul>
<div class="flow"><span class="node">Sporophyte (2n)</span><span class="arr">→</span><span class="node">Sporangia → meiosis</span><span class="arr">→</span><span class="node">Spores (n)</span><span class="arr">→</span><span class="node">Prothallus (gametophyte)</span><span class="arr">→</span><span class="node">Fertilisation (water)</span><span class="arr">→</span><span class="node">Zygote → new Sporophyte</span></div>
<h4>Homospory vs Heterospory</h4>
<table class="cmp"><thead><tr><th></th><th>Homosporous</th><th>Heterosporous</th></tr></thead><tbody>
<tr><td><b>Spores</b></td><td>One kind of spore</td><td>Two kinds — large <b>megaspores</b> & small <b>microspores</b></td></tr>
<tr><td><b>Examples</b></td><td>Most pteridophytes (<i>Pteris, Dryopteris</i>)</td><td><i>Selaginella, Salvinia</i></td></tr>
<tr><td><b>Significance</b></td><td>—</td><td>Megaspore → female gametophyte <span class="kw">retained on parent</span> → step toward the <b>seed habit</b></td></tr>
</tbody></table>
<div class="callout"><b>Heterospory is the precursor of the seed.</b> Retention of the developing female gametophyte and zygote on the parent foreshadows seed plants.</div>
`
},
{
id:"gymno", heading:"Gymnosperms",
html:`
<p><b>Gymnosperms</b> bear <span class="kw">naked seeds</span> — ovules are not enclosed in an ovary, so seeds are not covered by a fruit. Examples: <i>Cycas, Pinus, Ginkgo, Cedrus, Ephedra</i>.</p>
<ul>
<li>Small shrubs to giant trees (<i>Sequoia</i>, the redwood — among the tallest living organisms).</li>
<li>Roots usually tap roots; <i>Cycas</i> has <b>coralloid roots</b> (N₂-fixing cyanobacteria); <i>Pinus</i> has <b>mycorrhiza</b>.</li>
<li>Leaves may be needle-like with thick cuticle & sunken stomata (xerophytic adaptations).</li>
<li><span class="kw">Heterosporous</span> — micro- & megaspores borne on <b>cones / strobili</b>.</li>
<li>Male cone → <b>microsporophylls</b> + microsporangia → pollen grains (microspores).</li>
<li>Female cone → <b>megasporophylls</b> + ovules; megaspore → female gametophyte with <b>archegonia</b>.</li>
<li><b>No water needed</b> — <span class="kw">wind</span> carries pollen to the ovule; pollen tube delivers male gametes.</li>
<li>Zygote → embryo; ovule → naked seed (not inside a fruit).</li>
</ul>
<div class="flow"><span class="node">Male cone → Pollen</span><span class="arr">→</span><span class="node">Wind pollination</span><span class="arr">→</span><span class="node">Ovule (female cone)</span><span class="arr">→</span><span class="node">Pollen tube → fertilisation</span><span class="arr">→</span><span class="node">Naked seed</span></div>
<div class="callout"><b>Key advance:</b> The seed habit + wind pollination free gymnosperms from external water for reproduction.</div>
`
},
{
id:"angio", heading:"Angiosperms",
html:`
<p><b>Angiosperms</b> = flowering plants. Seeds develop <span class="kw">inside an ovary</span> that matures into a <b>fruit</b>. Sizes range from tiny <i>Wolffia</i> to giant <i>Eucalyptus</i> (~100 m).</p>
<ul>
<li><b>Stamen</b> (male): anther's pollen sacs → <b>pollen grains</b> (microspores) → male gametes.</li>
<li><b>Pistil/carpel</b> (female): ovary → ovules; each ovule has an <b>embryo sac</b> (female gametophyte) with an egg + two <b>polar nuclei</b>.</li>
<li><span class="kw">Double fertilisation</span> (unique to angiosperms): male gamete + egg → <b>zygote (2n)</b> (syngamy); second male gamete + two polar nuclei → <b>primary endosperm nucleus (3n)</b> (triple fusion) → triploid endosperm.</li>
</ul>
<h4>Two classes</h4>
<table class="cmp"><thead><tr><th>Feature</th><th>Dicotyledons</th><th>Monocotyledons</th></tr></thead><tbody>
<tr><td>Cotyledons in seed</td><td>Two</td><td>One</td></tr>
<tr><td>Leaf venation</td><td>Reticulate (net-like)</td><td>Parallel</td></tr>
<tr><td>Root system</td><td>Tap root</td><td>Fibrous root</td></tr>
<tr><td>Floral symmetry / parts</td><td>Usually in 4s or 5s (tetra/pentamerous)</td><td>In 3s (trimerous)</td></tr>
<tr><td>Examples</td><td>Pea, mustard, mango</td><td>Maize, wheat, grasses</td></tr>
</tbody></table>
<div class="formula">Syngamy: <span class="hl">male gamete (n) + egg (n) → zygote (2n)</span> &nbsp;|&nbsp; Triple fusion: <span class="hl">male gamete (n) + 2 polar nuclei (2n) → endosperm (3n)</span></div>
`
},
{
id:"lifecycle", heading:"Life Cycles & Alternation of Generations",
html:`
<p>Plants alternate between a haploid <b>gametophyte</b> (makes gametes by <b>mitosis</b>) and a diploid <b>sporophyte</b> (makes spores by <b>meiosis</b>). Which phase dominates defines the life-cycle type.</p>
<table class="cmp"><thead><tr><th>Type</th><th>Dominant phase</th><th>Other phase</th><th>Found in</th></tr></thead><tbody>
<tr><td><b>Haplontic</b></td><td>Gametophyte (n), free-living</td><td>Only the <b>zygote</b> is diploid; zygote undergoes meiosis</td><td>Many algae — <i>Volvox, Spirogyra, Chlamydomonas</i></td></tr>
<tr><td><b>Diplontic</b></td><td>Sporophyte (2n), free-living</td><td>Gametophyte reduced to a few cells; only <b>gametes</b> haploid</td><td>Seed plants (gymnosperms & angiosperms); alga <i>Fucus</i></td></tr>
<tr><td><b>Haplo-diplontic</b></td><td>Both multicellular & free-living</td><td>One phase dominates the other</td><td>Bryophytes (gametophyte dom.) & pteridophytes (sporophyte dom.); <i>Ectocarpus, Polysiphonia, Kelps</i></td></tr>
</tbody></table>
<div class="formula"><span class="hl">Gametophyte (n)</span> → gametes → fertilisation → <span class="hl">Zygote (2n)</span> → Sporophyte (2n) → meiosis → spores → Gametophyte (n) …</div>
<div class="callout"><b>Memory anchor:</b> Moss & ferns = "in-between" (haplo-diplontic). Bryophyte → gametophyte boss. Pteridophyte → sporophyte boss.</div>
`
}
],

/* ========================== MNEMONICS ========================= */
mnemonics:[
{title:"The 3 algae classes (green → brown → red)", device:`<b>G</b>reen <b>B</b>rats <b>R</b>un — Chl-orophyceae, Pha-eophyceae, Rho-dophyceae`, expand:[
 {L:"G",t:"Chlorophyceae — Green — Chl a+b — Starch"},
 {L:"B",t:"Phaeophyceae — Brown — fucoxanthin — Laminarin/Mannitol"},
 {L:"R",t:"Rhodophyceae — Red — phycoerythrin — Floridean starch — NO flagella"}
]},
{title:"Stored food by colour", device:`<b>S</b>tarch-<b>L</b>aminarin-<b>F</b>loridean = Green-Brown-Red`, expand:[
 {L:"S",t:"Green → Starch"},
 {L:"L",t:"Brown → Laminarin / Mannitol"},
 {L:"F",t:"Red → Floridean starch"}
]},
{title:"Red algae quirks", device:`<b>R</b>ed = <b>R</b>esting (no flagella), <b>R</b>eaches deep water`, expand:[
 {L:"!",t:"Only red algae lack flagella; phycoerythrin absorbs blue light → grow deep"}
]},
{title:"Plant groups, simple → complex", device:`<b>A</b>ll <b>B</b>otanists <b>P</b>refer <b>G</b>reen <b>A</b>cres`, expand:[
 {L:"A",t:"Algae (thalloid, aquatic)"},
 {L:"B",t:"Bryophytes (amphibians of plant kingdom)"},
 {L:"P",t:"Pteridophytes (first vascular plants)"},
 {L:"G",t:"Gymnosperms (naked seeds)"},
 {L:"A",t:"Angiosperms (flowers + fruit)"}
]},
{title:"Bryophyte = amphibian", device:`<b>B</b>ryophyte = <b>B</b>aby that still <b>B</b>athes — needs water`, expand:[
 {L:"♂",t:"Antheridium → Antherozoids (swim)"},
 {L:"♀",t:"Archegonium → egg (flask-shaped)"}
]},
{title:"Heterosporous pteridophytes", device:`<b>S</b>ally <b>S</b>plits spore sizes — <b>S</b>elaginella & <b>S</b>alvinia`, expand:[
 {L:"S",t:"Selaginella + Salvinia = heterosporous (mega + micro spores)"}
]},
{title:"Life-cycle bosses", device:`Algae = <b>Haplo</b> · Seed plants = <b>Diplo</b> · Moss/Fern = <b>Both</b>`, expand:[
 {L:"H",t:"Haplontic: gametophyte dominant (Volvox, Spirogyra, Chlamydomonas)"},
 {L:"D",t:"Diplontic: sporophyte dominant (gymnosperms, angiosperms)"},
 {L:"B",t:"Haplo-diplontic: bryophytes (gameto-dom) & pteridophytes (sporo-dom)"}
]},
{title:"Agar source", device:`<b>Gel</b>idium + <b>Gra</b>cilaria give <b>Gel</b> (agar)`, expand:[
 {L:"A",t:"Agar = red algae Gelidium & Gracilaria"}
]},
{title:"Double fertilisation numbers", device:`Egg → <b>2n</b> zygote · Polar nuclei → <b>3n</b> endosperm`, expand:[
 {L:"2",t:"Syngamy: 1 male gamete + egg → zygote (2n)"},
 {L:"3",t:"Triple fusion: 1 male gamete + 2 polar nuclei → endosperm (3n)"}
]},
{title:"Dicot vs Monocot", device:`<b>Di</b> = <b>2</b> cots, net veins, tap root · <b>Mono</b> = 1, parallel, fibrous`, expand:[
 {L:"D",t:"Dicot: 2 cotyledons, reticulate venation, tap root, parts in 4/5"},
 {L:"M",t:"Monocot: 1 cotyledon, parallel venation, fibrous root, parts in 3"}
]}
],

/* ========================= FLASHCARDS (70) ========================= */
flashcards:[
{front:"What is the plant body of an alga called?", back:"A thallus — no differentiation into true root, stem or leaf."},
{front:"Defining features of algae", back:"Chlorophyll-bearing, simple, thalloid, largely aquatic autotrophs."},
{front:"Pigments & food of Chlorophyceae (green algae)", back:"Chlorophyll a & b; food = starch; wall = cellulose. e.g. Spirogyra, Chara, Volvox."},
{front:"Pigment that gives brown algae their colour", back:"Fucoxanthin (Phaeophyceae). Food = laminarin or mannitol."},
{front:"Which algal class lacks flagella entirely?", back:"Rhodophyceae (red algae). Colour from phycoerythrin; food = floridean starch."},
{front:"Flagella in Chlorophyceae", back:"2–8, equal, apical."},
{front:"Flagella in Phaeophyceae", back:"2, unequal, lateral."},
{front:"Cell wall of brown algae", back:"Cellulose plus algin (a hydrocolloid)."},
{front:"Isogamous vs anisogamous vs oogamous", back:"Iso = similar gametes; Aniso = dissimilar sizes; Oogamous = large non-motile female + small motile male."},
{front:"Example of oogamy in algae", back:"Volvox and Fucus."},
{front:"Asexual reproduction in most algae is by…", back:"Zoospores — flagellated, motile spores."},
{front:"Why are bryophytes 'amphibians of the plant kingdom'?", back:"Live on land but need water for sexual reproduction (antherozoids swim to the egg)."},
{front:"Dominant phase in bryophytes vs pteridophytes", back:"Bryophytes → gametophyte dominant. Pteridophytes → sporophyte dominant."},
{front:"Function of rhizoids in bryophytes", back:"Anchorage (attach the gametophyte to the substrate); not true roots."},
{front:"Male & female sex organs of bryophytes", back:"Antheridium (male → antherozoids) and Archegonium (female, flask-shaped → one egg)."},
{front:"Two stages in the life of a moss", back:"(1) Protonema — creeping green filamentous stage; (2) Leafy stage — upright, bears sex organs."},
{front:"What are gemmae?", back:"Green multicellular asexual buds formed in gemma cups of liverworts (e.g. Marchantia)."},
{front:"Example of a liverwort and a moss", back:"Liverwort: Marchantia. Moss: Funaria (also Sphagnum, Polytrichum)."},
{front:"Economic importance of Sphagnum", back:"Provides peat (fuel) and is used as water-holding packing for transporting living material."},
{front:"First plant group with vascular tissue", back:"Pteridophytes (true xylem & phloem)."},
{front:"What is a prothallus?", back:"The small, free-living, photosynthetic gametophyte of a pteridophyte; needs cool, damp, shady soil."},
{front:"Microphylls vs macrophylls", back:"Microphylls = small leaves (Selaginella); Macrophylls = large leaves (ferns)."},
{front:"What are sori?", back:"Clusters of sporangia on the sporophylls (underside of fern leaves)."},
{front:"Define heterospory with examples", back:"Two kinds of spores — micro & megaspores; e.g. Selaginella, Salvinia. Precursor to the seed habit."},
{front:"Why is heterospory important evolutionarily?", back:"Megaspore's female gametophyte is retained on the parent — foreshadows the seed."},
{front:"Why are gymnosperm seeds 'naked'?", back:"Ovules are not enclosed in an ovary, so seeds are not covered by a fruit."},
{front:"Special roots of Cycas and Pinus", back:"Cycas → coralloid roots (N₂-fixing cyanobacteria); Pinus → mycorrhizal roots."},
{front:"How is pollination achieved in gymnosperms?", back:"By wind; no water needed. A pollen tube delivers the male gametes."},
{front:"Reproductive structures of gymnosperms", back:"Cones (strobili): male cones (microsporophylls) and female cones (megasporophylls)."},
{front:"One of the tallest tree gymnosperms", back:"Sequoia (the giant redwood)."},
{front:"What matures into a fruit in angiosperms?", back:"The ovary (after fertilisation), enclosing the seeds."},
{front:"What is double fertilisation?", back:"One male gamete + egg → zygote (2n); other male gamete + 2 polar nuclei → endosperm (3n). Unique to angiosperms."},
{front:"Syngamy vs triple fusion", back:"Syngamy: male gamete + egg → 2n zygote. Triple fusion: male gamete + 2 polar nuclei → 3n endosperm."},
{front:"Contents of an embryo sac (female gametophyte)", back:"An egg cell and two polar nuclei (plus other cells); the female gametophyte of angiosperms."},
{front:"Dicot vs Monocot: cotyledons", back:"Dicot = two cotyledons; Monocot = one cotyledon."},
{front:"Dicot vs Monocot: venation", back:"Dicot = reticulate (net-like); Monocot = parallel."},
{front:"Dicot vs Monocot: root & floral parts", back:"Dicot: tap root, floral parts in 4s/5s. Monocot: fibrous root, floral parts in 3s."},
{front:"Three systems of classification", back:"Artificial (few characters – Linnaeus), Natural (many affinities – Bentham & Hooker), Phylogenetic (evolutionary)."},
{front:"Basis of an artificial classification system", back:"One or a few superficial vegetative (& sexual) characters."},
{front:"Cytotaxonomy is based primarily on…", back:"Cytological data — chromosome number, structure and behaviour."},
{front:"Chemotaxonomy is based on…", back:"Chemical constituents of the plant."},
{front:"What is numerical taxonomy?", back:"Computer-based method coding each character with numbers so hundreds of traits are weighed at once."},
{front:"Source of agar", back:"Red algae — Gelidium and Gracilaria. Used in culture media & food."},
{front:"Source of algin and carrageen", back:"Algin from brown algae; carrageen from red algae."},
{front:"Protein-rich food-supplement algae", back:"Chlorella and Spirulina."},
{front:"Three life-cycle patterns in plants", back:"Haplontic (gametophyte dominant), Diplontic (sporophyte dominant), Haplo-diplontic (both free-living)."},
{front:"Which life cycle do bryophytes & pteridophytes show?", back:"Haplo-diplontic (both phases multicellular & free-living)."},
{front:"Life cycle of gymnosperms & angiosperms", back:"Diplontic — sporophyte dominant, gametophyte reduced."},
{front:"Life cycle of Volvox / Spirogyra", back:"Haplontic — gametophyte dominant; only the zygote is diploid."},
{front:"In haplontic cycle, which stage undergoes meiosis?", back:"The zygote (the only diploid stage)."},
{front:"Gametophyte makes gametes by…", back:"Mitosis (it is already haploid)."},
{front:"Sporophyte makes spores by…", back:"Meiosis (reducing 2n to n)."},
{front:"Which algae fix most of the planet's CO₂?", back:"Algae fix at least half of Earth's CO₂ via photosynthesis."},
{front:"Chara belongs to which class?", back:"Chlorophyceae (green algae)."},
{front:"Sargassum and Laminaria belong to…", back:"Phaeophyceae (brown algae)."},
{front:"Porphyra and Gracilaria belong to…", back:"Rhodophyceae (red algae)."},
{front:"Equisetum and Marsilea are examples of…", back:"Pteridophytes."},
{front:"Ginkgo and Ephedra are examples of…", back:"Gymnosperms."},
{front:"Where do liverworts usually grow?", back:"Moist, shady habitats such as banks of streams, marshy ground, damp soil, bark and rocks."},
{front:"What is a strobilus?", back:"A cone — a compact cluster of sporophylls bearing sporangia (in gymnosperms and some pteridophytes)."},
{front:"Reticulate vs parallel venation — which is dicot?", back:"Reticulate (net-like) venation is the dicot pattern."},
{front:"Which generation is nutritionally dependent in bryophytes?", back:"The sporophyte is partly dependent on the photosynthetic gametophyte."},
{front:"Smallest and one of the largest angiosperms", back:"Smallest: Wolffia; among the largest: Eucalyptus (~100 m)."},
{front:"Phycoerythrin allows red algae to…", back:"Absorb blue light and photosynthesise in deeper water."},
{front:"What is fragmentation?", back:"Vegetative reproduction where a thallus/plant breaks into pieces, each growing into a new individual."},
{front:"Where is the female gametophyte retained in seed plants?", back:"On the parent sporophyte (within the ovule) — a hallmark of the seed habit."},
{front:"Which pigment pair defines Rhodophyceae?", back:"Chlorophyll a & d with phycoerythrin (r-phycoerythrin)."},
{front:"Which group first shows true roots, stem and leaves?", back:"Pteridophytes (in the dominant sporophyte)."},
{front:"Bentham & Hooker gave which type of classification?", back:"A natural system of classification of flowering plants."},
{front:"Alternation of generations means…", back:"Alternation between a haploid gametophyte and a diploid sporophyte in the life cycle."}
],

/* ======================= ACTIVE RECALL (40) ======================= */
recall:[
{q:"Compare the three classes of algae on pigments, stored food, cell wall and one example each.", hint:"Green / Brown / Red — think colour-causing pigment.", a:"<b>Chlorophyceae (green):</b> chl a & b; starch; cellulose wall; e.g. Spirogyra, Volvox. <b>Phaeophyceae (brown):</b> chl a, c + fucoxanthin; laminarin/mannitol; cellulose + algin; e.g. Laminaria, Sargassum. <b>Rhodophyceae (red):</b> chl a, d + phycoerythrin; floridean starch; no flagella; e.g. Porphyra, Gracilaria."},
{q:"Distinguish isogamous, anisogamous and oogamous sexual reproduction with examples.", hint:"Compare the two fusing gametes.", a:"<b>Isogamous:</b> gametes similar in size, both may be motile (Ulothrix, some Chlamydomonas). <b>Anisogamous:</b> gametes dissimilar in size (some Chlamydomonas). <b>Oogamous:</b> large non-motile female + small motile male (Volvox, Fucus)."},
{q:"Explain why bryophytes are called the 'amphibians of the plant kingdom'.", hint:"What do they still depend on to reproduce?", a:"They are land plants but the male antherozoids must <b>swim through water</b> to reach the egg in the archegonium. So they require external water to complete sexual reproduction, like amphibians."},
{q:"Describe the alternation of generations in a moss, naming the dominant phase.", hint:"Spore → ? → sex organs → zygote → ?", a:"Spore → creeping <b>protonema</b> → upright <b>leafy gametophyte</b> (dominant, haploid) bearing antheridia & archegonia. With water, fertilisation gives a <b>zygote (2n)</b> that grows into the partly dependent <b>sporophyte</b>, which makes spores by meiosis."},
{q:"What is heterospory and why is it evolutionarily important?", hint:"Two spore types; what stays on the parent?", a:"Heterospory = production of two kinds of spores, large <b>megaspores</b> and small <b>microspores</b> (Selaginella, Salvinia). The megaspore's female gametophyte is <b>retained on the parent</b>, foreshadowing the <b>seed habit</b> of higher plants."},
{q:"How do gymnosperms reproduce without water, and what makes their seeds 'naked'?", hint:"Cones, wind, no ovary.", a:"They are heterosporous; reproductive structures sit on <b>cones</b>. <b>Wind</b> carries pollen to the ovule and a pollen tube delivers male gametes — no external water needed. Ovules are <b>not enclosed in an ovary</b>, so seeds lie exposed (naked) on megasporophylls."},
{q:"Explain double fertilisation in angiosperms and its two products.", hint:"Two male gametes — two fusions.", a:"One male gamete fuses with the egg → <b>diploid zygote (2n)</b> (syngamy); the second fuses with the <b>two polar nuclei</b> → <b>triploid primary endosperm nucleus (3n)</b> (triple fusion). The endosperm nourishes the embryo. This double event is unique to angiosperms."},
{q:"Distinguish haplontic, diplontic and haplo-diplontic life cycles with examples.", hint:"Which phase is the free-living 'boss'?", a:"<b>Haplontic:</b> gametophyte dominant & free-living; only zygote diploid (Volvox, Spirogyra). <b>Diplontic:</b> sporophyte dominant, gametophyte reduced (gymnosperms, angiosperms). <b>Haplo-diplontic:</b> both phases multicellular & free-living — bryophytes (gametophyte dom.) and pteridophytes (sporophyte dom.)."},
{q:"List the economic uses of algae.", hint:"Food, gels, supplements, CO₂.", a:"Algae fix ~half of global CO₂. Food: Porphyra, Laminaria, Sargassum. Hydrocolloids: algin (brown), carrageen (red), <b>agar</b> (Gelidium, Gracilaria). Chlorella & Spirulina are protein-rich supplements."},
{q:"Differentiate the three systems of classification.", hint:"Few traits / many traits / evolution.", a:"<b>Artificial</b> — one or few superficial characters (Linnaeus). <b>Natural</b> — many natural affinities incl. internal features (Bentham & Hooker). <b>Phylogenetic</b> — evolutionary relationships & common ancestry."},
{q:"State the features that make pteridophytes the 'first true land plants'.", hint:"Vascular tissue + body parts.", a:"They are the first with <b>vascular tissue (xylem & phloem)</b>. The dominant <b>sporophyte</b> has true <b>roots, stem and leaves</b> and bears sporangia (often in sori). Spores form a free-living prothallus and water is still needed for fertilisation."},
{q:"Give one defining example for each major plant group.", hint:"Algae→Bryo→Pterido→Gymno→Angio.", a:"Algae: Spirogyra/Volvox; Bryophyte: Marchantia (liverwort)/Funaria (moss); Pteridophyte: Selaginella/Pteris; Gymnosperm: Cycas/Pinus; Angiosperm: pea/maize."},
{q:"Describe the life cycle of a fern (pteridophyte).", hint:"Sporophyte → spores → prothallus → …", a:"The dominant <b>sporophyte</b> bears sporangia (in sori) that produce spores by <b>meiosis</b>. Spores germinate into a free-living <b>prothallus</b> (gametophyte) with antheridia & archegonia. Water enables fertilisation → zygote → new sporophyte."},
{q:"Why does red algae grow at greater depths than green algae?", hint:"Which light penetrates deep water?", a:"Red algae contain <b>phycoerythrin</b>, which absorbs the <b>blue light</b> that penetrates deep water, allowing photosynthesis where red light cannot reach."},
{q:"Compare the male and female cones of a gymsomperm.", hint:"Micro vs mega sporophylls.", a:"<b>Male cone:</b> microsporophylls with microsporangia → pollen grains (microspores). <b>Female cone:</b> megasporophylls with ovules; the megaspore develops the female gametophyte bearing archegonia."},
{q:"What is the significance of retaining the female gametophyte on the parent?", hint:"Think seed.", a:"It protects the developing egg and later the zygote/embryo, allowing nourishment from the parent — the essential step toward the <b>seed habit</b> that defines gymnosperms and angiosperms."},
{q:"Explain vegetative, asexual and sexual reproduction in algae.", hint:"Fragmentation / zoospores / gametes.", a:"<b>Vegetative:</b> fragmentation — each fragment becomes a new thallus. <b>Asexual:</b> mostly by flagellated <b>zoospores</b>. <b>Sexual:</b> fusion of gametes (isogamous, anisogamous or oogamous)."},
{q:"Describe the two growth stages unique to mosses.", hint:"Filamentous then leafy.", a:"(1) <b>Protonema</b> — a creeping, green, branched filamentous stage developing directly from a spore; (2) <b>Leafy stage</b> — upright, with spirally arranged leaves, bearing the sex organs."},
{q:"How do liverworts reproduce asexually?", hint:"Special buds in cups.", a:"By <b>gemmae</b> — green multicellular buds produced in <b>gemma cups</b> on the thallus — and also by fragmentation of the thallus."},
{q:"Summarise the distinguishing features of dicots vs monocots.", hint:"Four features.", a:"<b>Dicot:</b> two cotyledons, reticulate venation, tap root, floral parts in 4s/5s. <b>Monocot:</b> one cotyledon, parallel venation, fibrous root, floral parts in 3s."},
{q:"What are numerical, cyto- and chemo-taxonomy?", hint:"Computer / chromosomes / chemicals.", a:"<b>Numerical:</b> computer coding of many characters weighed equally. <b>Cytotaxonomy:</b> based on chromosome number, structure & behaviour. <b>Chemotaxonomy:</b> based on the plant's chemical constituents."},
{q:"Trace the products of double fertilisation to the mature seed.", hint:"Zygote and endosperm.", a:"The <b>zygote (2n)</b> develops into the embryo; the <b>primary endosperm nucleus (3n)</b> forms the endosperm that nourishes the embryo. The ovule becomes the seed and the ovary becomes the fruit."},
{q:"Why is the sporophyte of a bryophyte only 'partly independent'?", hint:"Does it photosynthesise fully?", a:"It is attached to and draws nutrition from the photosynthetic <b>gametophyte</b>, on which it depends for part of its needs, though it may photosynthesise a little itself."},
{q:"Explain the term 'thallus' and which groups have a thalloid body.", hint:"No true organs.", a:"A <b>thallus</b> is a plant body not differentiated into true root, stem and leaf. Algae are thalloid; many liverworts are also thalloid."},
{q:"Describe the role of water in bryophyte and pteridophyte reproduction.", hint:"Swimming male gametes.", a:"In both, the flagellated male gametes require a <b>film of water</b> to swim to the archegonium for fertilisation — a key reason both are tied to moist habitats."},
{q:"What adaptations let gymnosperms survive dry/cold habitats?", hint:"Leaves and roots.", a:"Needle-like leaves with thick cuticle and sunken stomata reduce water loss; specialised roots (mycorrhiza in Pinus, coralloid N₂-fixing roots in Cycas) improve nutrient uptake; wind pollination removes dependence on water."},
{q:"State the correct simple-to-complex sequence of plant groups.", hint:"Five groups.", a:"Algae → Bryophytes → Pteridophytes → Gymnosperms → Angiosperms (increasing complexity and independence from water)."},
{q:"Give the reserve food materials of the three algal classes.", hint:"Starch / laminarin / floridean.", a:"Green algae → starch; Brown algae → laminarin or mannitol; Red algae → floridean starch."},
{q:"What is the embryo sac and where is it located?", hint:"Female gametophyte of angiosperms.", a:"The <b>embryo sac</b> is the female gametophyte of angiosperms, located inside the ovule within the ovary; it contains the egg and two polar nuclei."},
{q:"Contrast homosporous and heterosporous pteridophytes.", hint:"One vs two spore types.", a:"<b>Homosporous:</b> a single kind of spore (most ferns). <b>Heterosporous:</b> two kinds — micro & megaspores (Selaginella, Salvinia); the latter leads toward the seed habit."},
{q:"Why is Chlamydomonas useful for illustrating algal sexual reproduction?", hint:"Shows several gamete types.", a:"Different species of <i>Chlamydomonas</i> show isogamy and anisogamy, illustrating a gradation of sexual reproduction from similar to dissimilar gametes."},
{q:"Describe how classification progressed from artificial to phylogenetic.", hint:"Basis of grouping.", a:"Artificial systems used a few easily seen traits (Linnaeus). Natural systems used many characters and true affinities (Bentham & Hooker). Phylogenetic systems group by <b>evolutionary descent</b> from common ancestors, aided by molecular data."},
{q:"What is the ecological role of algae in water bodies?", hint:"Producers and O₂.", a:"They are primary producers, forming the base of aquatic food chains, fixing a large share of global CO₂ and releasing oxygen."},
{q:"Explain the difference between microsporophyll and megasporophyll.", hint:"Which spore each bears.", a:"A <b>microsporophyll</b> bears microsporangia producing microspores (pollen); a <b>megasporophyll</b> bears ovules with megasporangia producing megaspores (→ female gametophyte)."},
{q:"How are agar, algin and carrageen obtained and used?", hint:"Source algae + uses.", a:"<b>Agar</b> from red algae (Gelidium, Gracilaria) → culture media, food. <b>Algin</b> from brown algae; <b>carrageen</b> from red algae — used commercially as gelling/thickening hydrocolloids."},
{q:"Why can gymnosperms be very large despite reduced gametophytes?", hint:"Which generation is the tree?", a:"The visible plant is the dominant <b>sporophyte (2n)</b>, which can grow into giant trees (e.g. Sequoia). The gametophytes are microscopic and dependent on the sporophyte."},
{q:"Summarise the life cycle common to all plants (alternation of generations).", hint:"n ↔ 2n.", a:"A haploid <b>gametophyte</b> makes gametes by mitosis → fertilisation → diploid <b>zygote</b> → <b>sporophyte</b> → meiosis → spores → gametophyte, repeating the cycle."},
{q:"Identify the group for: coralloid roots, naked seeds, wind pollination.", hint:"All three point to one group.", a:"<b>Gymnosperms</b> (specifically Cycas has coralloid roots; naked seeds and wind pollination are general gymnosperm features)."},
{q:"What distinguishes the gametophyte of bryophytes from that of pteridophytes?", hint:"Which is the main plant?", a:"In bryophytes the gametophyte is the <b>main, dominant, long-lived</b> plant body; in pteridophytes the gametophyte is a small, short-lived <b>prothallus</b> while the sporophyte dominates."},
{q:"Explain why angiosperms are the most successful land plants.", hint:"Flowers, fruits, double fertilisation.", a:"Flowers aid diverse pollination, <b>double fertilisation</b> provides nourishing endosperm, seeds are protected inside fruits aiding dispersal, and vascular tissue supports large, varied body forms — together enabling wide adaptation."},
{q:"Match each life-cycle type to its representative and dominant phase.", hint:"Haplo / diplo / both.", a:"Haplontic → Volvox (gametophyte dominant); Diplontic → Pinus/angiosperm (sporophyte dominant); Haplo-diplontic → Funaria (gametophyte dom.) and fern (sporophyte dom.)."}
],

/* ===================== MCQs (80) — Quiz + Boss ==================== */
mcqs:[
{q:"In which algal class is the stored food floridean starch?", o:["Chlorophyceae","Phaeophyceae","Rhodophyceae","Bryophyta"], c:2, e:"Floridean starch is the reserve food of <b>red algae (Rhodophyceae)</b>."},
{q:"Fucoxanthin is the characteristic pigment of:", o:["Green algae","Brown algae","Red algae","Mosses"], c:1, e:"<b>Brown algae (Phaeophyceae)</b> owe their colour to fucoxanthin."},
{q:"Which group is called the 'amphibians of the plant kingdom'?", o:["Algae","Bryophytes","Pteridophytes","Gymnosperms"], c:1, e:"<b>Bryophytes</b> — they live on land but need water for fertilisation."},
{q:"The dominant phase in a pteridophyte life cycle is the:", o:["Gametophyte","Sporophyte","Zygote","Protonema"], c:1, e:"In pteridophytes the <b>sporophyte</b> dominates (true roots, stem, leaves)."},
{q:"Naked seeds are characteristic of:", o:["Angiosperms","Pteridophytes","Gymnosperms","Bryophytes"], c:2, e:"<b>Gymnosperms</b> bear ovules not enclosed in an ovary → naked seeds."},
{q:"Double fertilisation is unique to:", o:["Gymnosperms","Angiosperms","Pteridophytes","Brown algae"], c:1, e:"Only <b>angiosperms</b> show double fertilisation → diploid zygote + triploid endosperm."},
{q:"Coralloid roots with N₂-fixing cyanobacteria occur in:", o:["Pinus","Cycas","Cedrus","Ginkgo"], c:1, e:"<b>Cycas</b> has coralloid roots harbouring N₂-fixing cyanobacteria."},
{q:"Which classification system is based on evolutionary relationships?", o:["Artificial","Natural","Phylogenetic","Numerical"], c:2, e:"<b>Phylogenetic</b> systems assume a shared common ancestor."},
{q:"Selaginella and Salvinia are examples of:", o:["Homosporous pteridophytes","Heterosporous pteridophytes","Liverworts","Brown algae"], c:1, e:"Both are <b>heterosporous</b> — they form micro- and megaspores."},
{q:"Agar is obtained from:", o:["Chlorella","Sargassum","Gelidium and Gracilaria","Spirogyra"], c:2, e:"<b>Agar</b> comes from the red algae Gelidium and Gracilaria."},
{q:"In a haplontic life cycle, the only diploid stage is the:", o:["Gametophyte","Spore","Zygote","Prothallus"], c:2, e:"In haplontic cycles (Volvox, Spirogyra) only the <b>zygote</b> is diploid."},
{q:"The female sex organ of a bryophyte is the:", o:["Antheridium","Archegonium","Sporangium","Sorus"], c:1, e:"The flask-shaped <b>archegonium</b> produces a single egg."},
{q:"Reticulate venation and tap roots are typical of:", o:["Monocots","Dicots","Mosses","Ferns"], c:1, e:"<b>Dicots</b> show reticulate venation, tap roots, floral parts in 4s/5s."},
{q:"Chlorella and Spirulina are used as:", o:["Sources of agar","Protein-rich food supplements","Brown pigments","Soil binders"], c:1, e:"Both are protein-rich algal food supplements."},
{q:"Which class of algae completely lacks flagellated cells?", o:["Chlorophyceae","Phaeophyceae","Rhodophyceae","None"], c:2, e:"<b>Rhodophyceae</b> have no flagella at any stage."},
{q:"Cytotaxonomy is based primarily on:", o:["Chemical constituents","Chromosome data","Flower colour","Computer codes"], c:1, e:"Cytotaxonomy uses chromosome number, structure and behaviour."},
{q:"The triploid tissue in angiosperm double fertilisation is the:", o:["Zygote","Embryo","Endosperm","Nucellus"], c:2, e:"The primary endosperm nucleus (3n) forms the <b>endosperm</b>."},
{q:"Sphagnum is economically important as a source of:", o:["Agar","Peat / packing material","Algin","Carrageen"], c:1, e:"<b>Sphagnum</b> provides peat fuel and moist packing material."},
{q:"Pollination in gymnosperms is generally by:", o:["Water","Insects","Wind","Birds"], c:2, e:"Gymnosperms are <b>wind-pollinated</b>."},
{q:"Correct simple-to-complex order is:", o:["Algae→Pterido→Bryo→Gymno→Angio","Algae→Bryo→Pterido→Gymno→Angio","Bryo→Algae→Pterido→Angio→Gymno","Algae→Bryo→Gymno→Pterido→Angio"], c:1, e:"Algae → Bryophytes → Pteridophytes → Gymnosperms → Angiosperms."},
{q:"Pigments of Chlorophyceae are:", o:["Chl a, c + fucoxanthin","Chl a, b","Chl a, d + phycoerythrin","Only carotenoids"], c:1, e:"Green algae contain chlorophyll <b>a and b</b>."},
{q:"Laminarin and mannitol are reserve foods of:", o:["Green algae","Brown algae","Red algae","Liverworts"], c:1, e:"Brown algae store <b>laminarin/mannitol</b>."},
{q:"Which of these is a liverwort?", o:["Funaria","Marchantia","Sphagnum","Polytrichum"], c:1, e:"<b>Marchantia</b> is a liverwort; the others are mosses."},
{q:"The creeping filamentous first stage of a moss is the:", o:["Prothallus","Protonema","Rhizoid","Sorus"], c:1, e:"The <b>protonema</b> develops directly from a moss spore."},
{q:"Gemmae are produced in:", o:["Mosses","Liverworts","Ferns","Gymnosperms"], c:1, e:"<b>Liverworts</b> form gemmae in gemma cups for asexual reproduction."},
{q:"The gametophyte of a fern is called the:", o:["Protonema","Prothallus","Sporophyll","Strobilus"], c:1, e:"The fern gametophyte is the free-living <b>prothallus</b>."},
{q:"Clusters of sporangia in ferns are known as:", o:["Cones","Sori","Gemmae","Rhizoids"], c:1, e:"<b>Sori</b> are groups of sporangia on the sporophyll."},
{q:"Which is NOT a feature of pteridophytes?", o:["Vascular tissue","True roots","Naked seeds","Dominant sporophyte"], c:2, e:"Pteridophytes are seedless; <b>naked seeds</b> belong to gymnosperms."},
{q:"Small leaves in Selaginella are called:", o:["Macrophylls","Microphylls","Sporophylls","Megaphylls"], c:1, e:"<b>Microphylls</b> are the small leaves of Selaginella."},
{q:"The tallest living tree is a gymnosperm named:", o:["Cycas","Sequoia","Ginkgo","Ephedra"], c:1, e:"<b>Sequoia</b> (redwood) is among the tallest trees."},
{q:"Mycorrhizal roots are characteristic of:", o:["Cycas","Pinus","Marchantia","Funaria"], c:1, e:"<b>Pinus</b> roots form mycorrhizal associations with fungi."},
{q:"Which contains an egg and two polar nuclei?", o:["Pollen grain","Embryo sac","Microspore","Antheridium"], c:1, e:"The <b>embryo sac</b> (female gametophyte) has the egg and two polar nuclei."},
{q:"Bentham and Hooker proposed a system that is:", o:["Artificial","Natural","Phylogenetic","Numerical"], c:1, e:"Bentham & Hooker gave a <b>natural</b> classification."},
{q:"Chemotaxonomy uses:", o:["Chromosome number","Chemical constituents","Fossil record","Computer coding"], c:1, e:"Chemotaxonomy relies on the plant's <b>chemical constituents</b>."},
{q:"Which alga shows oogamy?", o:["Ulothrix","Volvox","Spirogyra","Ectocarpus"], c:1, e:"<b>Volvox</b> (and Fucus) show oogamy — large non-motile egg + small motile male gamete."},
{q:"Phycoerythrin helps red algae to:", o:["Float on the surface","Absorb blue light at depth","Fix nitrogen","Store starch"], c:1, e:"Phycoerythrin absorbs the <b>blue light</b> reaching deep water."},
{q:"Which stage undergoes meiosis in a haplontic cycle?", o:["Gametophyte","Zygote","Spore","Gamete"], c:1, e:"The diploid <b>zygote</b> undergoes meiosis in haplontic cycles."},
{q:"Gametophyte produces gametes by:", o:["Meiosis","Mitosis","Fragmentation","Binary fission"], c:1, e:"Being haploid, the gametophyte makes gametes by <b>mitosis</b>."},
{q:"Sporophyte produces spores by:", o:["Mitosis","Meiosis","Budding","Conjugation"], c:1, e:"The diploid sporophyte makes spores by <b>meiosis</b>."},
{q:"Which pair is correctly matched?", o:["Chlorophyceae – phycoerythrin","Phaeophyceae – fucoxanthin","Rhodophyceae – laminarin","Chlorophyceae – floridean starch"], c:1, e:"Phaeophyceae ↔ fucoxanthin is correct."},
{q:"Algin is present in the cell walls of:", o:["Green algae","Brown algae","Red algae","Bryophytes"], c:1, e:"<b>Brown algae</b> have cellulose plus algin."},
{q:"A trimerous flower with parallel venation belongs to a:", o:["Dicot","Monocot","Gymnosperm","Pteridophyte"], c:1, e:"Trimerous parts + parallel venation → <b>monocot</b>."},
{q:"The male gamete of a bryophyte is the:", o:["Zoospore","Antherozoid","Megaspore","Pollen"], c:1, e:"Flagellated <b>antherozoids</b> are the male gametes of bryophytes."},
{q:"Which is a red alga?", o:["Laminaria","Porphyra","Ulothrix","Chara"], c:1, e:"<b>Porphyra</b> is a red alga (Rhodophyceae)."},
{q:"Which is a brown alga?", o:["Gracilaria","Sargassum","Spirogyra","Polysiphonia"], c:1, e:"<b>Sargassum</b> is a brown alga (Phaeophyceae)."},
{q:"Which is a green alga?", o:["Fucus","Chara","Gelidium","Dictyota"], c:1, e:"<b>Chara</b> is a green alga (Chlorophyceae)."},
{q:"Vegetative reproduction in algae commonly occurs by:", o:["Zoospores","Fragmentation","Conjugation tubes","Gemmae"], c:1, e:"<b>Fragmentation</b> is the usual vegetative method in algae."},
{q:"Asexual reproduction in algae is chiefly by:", o:["Gemmae","Zoospores","Sori","Cones"], c:1, e:"Most algae reproduce asexually by flagellated <b>zoospores</b>."},
{q:"Which develops into a fruit?", o:["Ovule","Ovary","Anther","Style"], c:1, e:"The <b>ovary</b> matures into the fruit after fertilisation."},
{q:"Which develops into a seed?", o:["Ovary","Ovule","Stigma","Filament"], c:1, e:"The <b>ovule</b> becomes the seed."},
{q:"[Boss] Assertion: bryophyte sporophytes are partly dependent. Reason:", o:["They lack chlorophyll entirely","They draw nutrition from the gametophyte","They live underwater","They are haploid"], c:1, e:"The sporophyte is attached to and partly nourished by the photosynthetic <b>gametophyte</b>."},
{q:"[Boss] Which sequence is the fern life cycle?", o:["Spore→prothallus→gametes→zygote→sporophyte","Spore→sporophyte→prothallus→zygote","Zygote→spore→prothallus→gametes","Prothallus→spore→sporophyte→gametes"], c:0, e:"Spore → prothallus (gametophyte) → gametes → zygote → sporophyte is correct."},
{q:"[Boss] The evolutionary significance of heterospory is that it:", o:["Increases spore number","Leads toward the seed habit","Removes need for meiosis","Produces flagellate spores"], c:1, e:"Retention of the female gametophyte on the parent foreshadows the <b>seed</b>."},
{q:"[Boss] Which set is entirely diplontic?", o:["Volvox, Spirogyra","Funaria, Pteris","Pinus, mango plant","Marchantia, Chara"], c:2, e:"Gymnosperms (Pinus) and angiosperms (mango) are <b>diplontic</b>."},
{q:"[Boss] Both microspores and megaspores are produced by:", o:["Homosporous ferns","Selaginella and gymnosperms","All bryophytes","Green algae"], c:1, e:"Heterosporous plants — Selaginella, Salvinia, gymnosperms, angiosperms."},
{q:"[Boss] In which does the gametophyte depend on the sporophyte?", o:["Moss","Fern prothallus","Gymnosperm","Liverwort"], c:2, e:"In seed plants the reduced gametophyte is retained on and depends on the sporophyte."},
{q:"[Boss] Which is a correct pigment–food–flagella set for red algae?", o:["Phycoerythrin – floridean starch – no flagella","Fucoxanthin – laminarin – 2 lateral","Chl b – starch – apical","Phycoerythrin – starch – 2 flagella"], c:0, e:"Red algae: phycoerythrin, floridean starch, and <b>no flagella</b>."},
{q:"[Boss] Chara is placed with green algae mainly because it:", o:["Lacks chlorophyll","Has chlorophyll a & b and stores starch","Is marine and brown","Lacks flagella"], c:1, e:"Chara has chl a & b and stores starch → Chlorophyceae."},
{q:"[Boss] Which statement about gymnosperms is FALSE?", o:["Seeds are naked","Fertilisation needs water","They are heterosporous","Pollination is by wind"], c:1, e:"Gymnosperms do <b>not</b> need water — wind pollination + pollen tube."},
{q:"[Boss] Number of polar nuclei involved in triple fusion:", o:["One","Two","Three","Four"], c:1, e:"<b>Two</b> polar nuclei fuse with one male gamete → 3n endosperm."},
{q:"[Boss] Ploidy of endosperm and embryo respectively in angiosperms:", o:["3n and 2n","2n and 3n","n and 2n","3n and n"], c:0, e:"Endosperm is <b>3n</b>; embryo (from zygote) is <b>2n</b>."},
{q:"[Boss] Which pair are both haplo-diplontic?", o:["Algae and gymnosperms","Bryophytes and pteridophytes","Angiosperms and gymnosperms","Volvox and Fucus"], c:1, e:"Bryophytes and pteridophytes have both phases free-living."},
{q:"[Boss] Odd one out (all lack vascular tissue except):", o:["Marchantia","Funaria","Selaginella","Sphagnum"], c:2, e:"<b>Selaginella</b> is a pteridophyte with vascular tissue; the rest are bryophytes."},
{q:"[Boss] A plant with tap root, net venation, seeds inside a fruit, parts in fives is a:", o:["Monocot","Dicot","Gymnosperm","Pteridophyte"], c:1, e:"All features point to a <b>dicot</b> angiosperm."},
{q:"[Boss] The retention of the developing zygote on the parent first clearly appears in:", o:["Green algae","Heterosporous pteridophytes","Homosporous ferns","Brown algae"], c:1, e:"Heterosporous pteridophytes (Selaginella) retain the female gametophyte/zygote — a seed precursor."},
{q:"[Boss] Which is correctly matched (alga – use)?", o:["Gelidium – agar","Sargassum – agar","Chlorella – algin","Porphyra – carrageen"], c:0, e:"Agar is from Gelidium (and Gracilaria)."},
{q:"[Boss] In gymnosperms the female gametophyte bears:", o:["Antheridia","Archegonia","Sori","Gemmae"], c:1, e:"The gymnosperm female gametophyte bears <b>archegonia</b>."},
{q:"[Boss] Which correctly orders ploidy: spore, gametophyte, gamete, zygote?", o:["n, n, n, 2n","2n, n, n, 2n","n, 2n, n, 2n","2n, 2n, n, n"], c:0, e:"Spore (n) → gametophyte (n) → gamete (n) → zygote (2n)."},
{q:"[Boss] Isogamy, anisogamy and oogamy differ in the:", o:["Number of gametes","Size/motility of fusing gametes","Ploidy of gametes","Colour of thallus"], c:1, e:"They differ in the <b>size and motility</b> of the two gametes."},
{q:"[Boss] Which feature is shared by bryophytes and pteridophytes but NOT gymnosperms?", o:["Vascular tissue","Need for water in fertilisation","Naked seeds","Dominant sporophyte"], c:1, e:"Both bryophytes and pteridophytes need <b>water</b> for fertilisation; gymnosperms do not."},
{q:"[Boss] The 3n primary endosperm nucleus results from fusion of:", o:["Two eggs","One male gamete + egg","One male gamete + two polar nuclei","Two male gametes"], c:2, e:"Triple fusion: one male gamete + two polar nuclei → 3n."},
{q:"[Boss] Which is NOT a modern tool of taxonomy?", o:["Numerical taxonomy","Cytotaxonomy","Chemotaxonomy","Artificial taxonomy"], c:3, e:"Artificial classification is an old approach, not a modern tool."},
{q:"[Boss] Peat used as fuel is mainly derived from:", o:["Marchantia","Sphagnum","Selaginella","Chara"], c:1, e:"<b>Sphagnum</b> (peat moss) forms peat over time."},
{q:"[Boss] Which alga is used as a food supplement even for space travellers?", o:["Gelidium","Spirulina","Sargassum","Polysiphonia"], c:1, e:"<b>Spirulina</b> (and Chlorella) are protein-rich supplements."},
{q:"[Boss] The main plant body of a moss is:", o:["Diploid sporophyte","Haploid gametophyte","Triploid endosperm","Diploid prothallus"], c:1, e:"The dominant moss body is the <b>haploid gametophyte</b>."},
{q:"[Boss] Which is the correct evolutionary trend across the plant kingdom?", o:["Increasing dependence on water","Gametophyte becoming dominant","Sporophyte becoming dominant & independent","Loss of vascular tissue"], c:2, e:"The trend is toward a dominant, independent <b>sporophyte</b> and reduced dependence on water."},
{q:"[Boss] Which structure is diploid?", o:["Antherozoid of moss","Prothallus of fern","Sporophyte of moss","Egg in archegonium"], c:2, e:"The moss <b>sporophyte</b> is diploid (2n); the others are haploid."},
{q:"[Boss] A botanist finds two spore sizes in a pteridophyte. It is:", o:["Homosporous","Heterosporous","Non-vascular","A gymnosperm"], c:1, e:"Two spore sizes → <b>heterosporous</b> (e.g. Selaginella/Salvinia)."},
{q:"[Boss] Which best explains why angiosperms dominate land flora?", o:["They lack seeds","Flowers, fruits and double fertilisation together","They are non-vascular","They need water to reproduce"], c:1, e:"Flowers, protective fruits, and nourishing endosperm from double fertilisation drive their success."},
{q:"[Boss] Ectocarpus, Polysiphonia and kelps illustrate which life cycle?", o:["Haplontic","Diplontic","Haplo-diplontic","None"], c:2, e:"These algae are <b>haplo-diplontic</b>, with both multicellular phases free-living."}
],

/* ================= MATCH-UP (32 pairs = 4 sets of 8) ============== */
match:[
{term:"Chlorophyceae", def:"Green algae; chl a & b; starch"},
{term:"Phaeophyceae", def:"Brown algae; fucoxanthin; laminarin"},
{term:"Rhodophyceae", def:"Red algae; phycoerythrin; no flagella"},
{term:"Chara", def:"Green alga"},
{term:"Sargassum", def:"Brown alga"},
{term:"Porphyra", def:"Red alga"},
{term:"Fucoxanthin", def:"Brown-algae pigment"},
{term:"Phycoerythrin", def:"Red-algae pigment"},
{term:"Floridean starch", def:"Reserve food of red algae"},
{term:"Laminarin", def:"Reserve food of brown algae"},
{term:"Agar", def:"From Gelidium & Gracilaria"},
{term:"Algin", def:"Hydrocolloid from brown algae"},
{term:"Spirulina", def:"Protein-rich food supplement"},
{term:"Marchantia", def:"A liverwort"},
{term:"Funaria", def:"A moss"},
{term:"Sphagnum", def:"Peat / bog moss"},
{term:"Protonema", def:"Creeping first stage of moss"},
{term:"Gemmae", def:"Asexual buds in gemma cups"},
{term:"Antheridium", def:"Male sex organ (antherozoids)"},
{term:"Archegonium", def:"Female sex organ (egg)"},
{term:"Rhizoids", def:"Anchoring structures in bryophytes"},
{term:"Prothallus", def:"Free-living gametophyte of a fern"},
{term:"Sori", def:"Clusters of sporangia on fern leaves"},
{term:"Selaginella", def:"Heterosporous pteridophyte"},
{term:"Cycas", def:"Gymnosperm with coralloid roots"},
{term:"Pinus", def:"Gymnosperm with mycorrhiza"},
{term:"Sequoia", def:"One of the tallest trees"},
{term:"Double fertilisation", def:"Unique to angiosperms"},
{term:"Endosperm", def:"Triploid (3n) nourishing tissue"},
{term:"Haplontic", def:"Gametophyte dominant (Volvox)"},
{term:"Diplontic", def:"Sporophyte dominant (seed plants)"},
{term:"Haplo-diplontic", def:"Both phases free-living (moss, fern)"}
],

/* ===================== BUILD THE PATHWAY (4) ==================== */
pathways:[
{title:"Bryophyte (moss) life cycle", prompt:"Arrange the moss life cycle from spore onward.", steps:["Spore (n)","Protonema","Leafy gametophyte (n)","Antheridium + Archegonium","Fertilisation (needs water)","Zygote (2n)","Sporophyte → meiosis"]},
{title:"Plant groups: simple → complex", prompt:"Order the five plant groups by increasing complexity.", steps:["Algae","Bryophytes","Pteridophytes","Gymnosperms","Angiosperms"]},
{title:"Alternation of generations", prompt:"Order the generic plant life cycle.", steps:["Gametophyte (n)","Gametes","Fertilisation","Zygote (2n)","Sporophyte (2n)","Meiosis","Spores (n)"]},
{title:"Fern (pteridophyte) life cycle", prompt:"Order the fern life cycle from sporophyte onward.", steps:["Sporophyte (2n)","Sporangia (in sori)","Meiosis","Spores (n)","Prothallus (gametophyte)","Fertilisation (water)","Zygote → new sporophyte"]}
]
};