/* ====== data_bioclassif.js ====== */
/* ===== CHAPTER 2 · BIOLOGICAL CLASSIFICATION ===== */
DATA.chapters.bioclassif = {
id:"bioclassif", num:2, title:"Biological Classification", subtitle:"Monera · Protista · Fungi · Plantae · Animalia",
color:"#e58a5d", colorD:"#a8512a", glyph:"🔬",

notes:[
{
id:"history", heading:"History of Classification",
html:`
<p>Classification systems have evolved from a simple two-kingdom system to modern five-kingdom and three-domain systems.</p>
<table class="cmp"><thead><tr><th>Scientist</th><th>System</th><th>Kingdoms</th></tr></thead><tbody>
<tr><td><b>Aristotle</b></td><td>Two-kingdom</td><td>Plantae + Animalia (first attempt)</td></tr>
<tr><td><b>Linnaeus</b></td><td>Two-kingdom</td><td>Plantae + Animalia (formalised)</td></tr>
<tr><td><b>Ernst Haeckel</b></td><td>Three-kingdom</td><td>Protista added</td></tr>
<tr><td><b>Herbert Copeland</b></td><td>Four-kingdom</td><td>Monera added</td></tr>
<tr><td><b>Robert Whittaker (1969)</b></td><td><span class="kw">Five-kingdom</span></td><td>Monera, Protista, Fungi, Plantae, Animalia</td></tr>
<tr><td><b>Carl Woese (1977)</b></td><td>Six-kingdom / Three Domains</td><td>Based on rRNA — Archaea, Bacteria, Eukarya</td></tr>
</tbody></table>
<p>Whittaker's five-kingdom system is based on: <b>cell structure</b> (prokaryote/eukaryote), <b>body organisation</b>, <b>mode of nutrition</b>, and <b>phylogenetic relationships</b>.</p>
`
},
{
id:"monera", heading:"Kingdom Monera",
html:`
<p>Monera = all <span class="kw">prokaryotes</span> — no membrane-bound nucleus or organelles.</p>
<ul>
<li>Include <b>Bacteria</b> (most abundant microorganisms), <b>Mycoplasma</b>, <b>Cyanobacteria (blue-green algae)</b>.</li>
<li>Bacteria are the most abundant organisms in nature.</li>
</ul>
<h4>Bacterial shapes (4 types)</h4>
<table class="cmp"><thead><tr><th>Shape</th><th>Name</th><th>Example</th></tr></thead><tbody>
<tr><td>Sphere</td><td>Coccus (pl. cocci)</td><td><i>Streptococcus</i></td></tr>
<tr><td>Rod</td><td>Bacillus (pl. bacilli)</td><td><i>Lactobacillus</i></td></tr>
<tr><td>Comma</td><td>Vibrio</td><td><i>Vibrio cholerae</i></td></tr>
<tr><td>Spiral</td><td>Spirillum</td><td><i>Spirillum</i></td></tr>
</tbody></table>
<h4>Nutrition in Bacteria</h4>
<ul>
<li><b>Autotrophic</b>: Photosynthetic (e.g., <i>Nostoc</i>) or Chemosynthetic (oxidise inorganic compounds for energy).</li>
<li><b>Heterotrophic</b>: Most bacteria — parasitic, saprophytic, or symbiotic (e.g., <i>Rhizobium</i> in root nodules fixes N₂).</li>
</ul>
<h4>Archaebacteria (Ancient bacteria)</h4>
<p>Live in <span class="kw">extreme habitats</span> — hot springs (thermoacidophiles), highly saline (halophiles), anaerobic marshy areas (methanogens → produce biogas).</p>
<h4>Eubacteria (True bacteria)</h4>
<ul>
<li><b>Cyanobacteria</b> — photosynthetic prokaryotes; some fix N₂ (e.g., <i>Anabaena, Nostoc</i>); also called blue-green algae.</li>
<li><b>Mycoplasma</b> — smallest living cells; <b>no cell wall</b>; can survive without oxygen; many are pathogens.</li>
</ul>
<div class="callout"><b>Archaebacteria differ from eubacteria</b> in cell wall structure and rRNA sequences. Methanogens in cattle gut produce methane, and in biogas plants.</div>
`
},
{
id:"protista", heading:"Kingdom Protista",
html:`
<p>Protista = unicellular <span class="kw">eukaryotes</span>. The link between prokaryotes and complex eukaryotes (plants, fungi, animals).</p>
<table class="cmp"><thead><tr><th>Group</th><th>Features</th><th>Examples</th></tr></thead><tbody>
<tr><td><b>Chrysophytes</b></td><td>Diatoms + golden algae. Diatoms have <span class="kw">silica shells</span> (frustules); chief producers in ocean. Dead shells form <b>diatomaceous earth</b>.</td><td><i>Navicula</i></td></tr>
<tr><td><b>Dinoflagellates</b></td><td>Marine, photosynthetic. Two flagella. Shell of cellulose plates. Responsible for <span class="kw">red tides</span>; produce toxins.</td><td><i>Gonyaulax</i></td></tr>
<tr><td><b>Euglenoids</b></td><td>Freshwater. No cell wall — instead a <b>pellicle</b> (protein). Autotrophic in light, heterotrophic in dark. Reservoir of paramylon.</td><td><i>Euglena</i></td></tr>
<tr><td><b>Slime Moulds</b></td><td>Saprophytic protists. Form <b>pseudoplasmodium</b> (aggregation). Fruiting bodies bear spores with true walls.</td><td><i>Physarum</i></td></tr>
<tr><td><b>Protozoans</b></td><td>Heterotrophic (predators). Move by pseudopodia, flagella, cilia, or no organelle.</td><td><i>Amoeba, Paramoecium, Plasmodium, Trypanosoma</i></td></tr>
</tbody></table>
<h4>Protozoans sub-groups</h4>
<table class="cmp"><thead><tr><th>Sub-group</th><th>Locomotion</th><th>Example</th></tr></thead><tbody>
<tr><td>Amoeboid</td><td>Pseudopodia</td><td><i>Amoeba, Entamoeba</i></td></tr>
<tr><td>Flagellated</td><td>Flagella</td><td><i>Trypanosoma</i> (sleeping sickness), <i>Leishmania</i></td></tr>
<tr><td>Ciliated</td><td>Cilia</td><td><i>Paramoecium</i></td></tr>
<tr><td>Sporozoans</td><td>None</td><td><i>Plasmodium</i> (malaria)</td></tr>
</tbody></table>
`
},
{
id:"fungi", heading:"Kingdom Fungi",
html:`
<p>Fungi = <span class="kw">heterotrophic</span> eukaryotes with chitin cell walls. Mostly saprophytic (decomposers), some parasitic, some symbiotic. Body = <b>hyphae</b> (thread-like) forming a mass called <b>mycelium</b>.</p>
<table class="cmp"><thead><tr><th>Class</th><th>Common name</th><th>Hyphae</th><th>Asexual spore</th><th>Sexual spore</th><th>Examples</th></tr></thead><tbody>
<tr><td><b>Phycomycetes</b></td><td>Algal fungi</td><td>Aseptate, coenocytic</td><td>Zoospores / aplanospores</td><td>Zygospores</td><td><i>Mucor, Rhizopus, Albugo</i></td></tr>
<tr><td><b>Ascomycetes</b></td><td>Sac fungi</td><td>Septate</td><td>Conidia (on conidiophores)</td><td><span class="kw">Ascospores</span> in asci</td><td><i>Aspergillus, Penicillium, Morels, Truffles, Neurospora, Yeast (Saccharomyces)</i></td></tr>
<tr><td><b>Basidiomycetes</b></td><td>Club fungi</td><td>Septate</td><td>None typical</td><td><span class="kw">Basidiospores</span> on basidia</td><td><i>Agaricus</i> (mushroom), <i>Ustilago</i> (smut), <i>Puccinia</i> (rust)</td></tr>
<tr><td><b>Deuteromycetes</b></td><td>Imperfect fungi</td><td>Septate</td><td>Conidia</td><td><span class="kw">None known</span> (no sexual stage)</td><td><i>Alternaria, Colletotrichum, Trichoderma</i></td></tr>
</tbody></table>
<h4>Ecological/Economic Roles</h4>
<ul>
<li><b>Lichens</b> = fungus + alga/cyanobacterium (symbiosis). Fungi provide structure; algae photosynthesize. Pioneer species on bare rocks.</li>
<li><b>Mycorrhiza</b> = mutualistic association of fungi with plant roots; helps in water/mineral absorption.</li>
<li><i>Penicillium</i> → <b>Penicillin</b> antibiotic. <i>Neurospora</i> → research on genetics.</li>
<li>Yeasts (<i>Saccharomyces</i>) → bread, beer (fermentation).</li>
</ul>
`
},
{
id:"viruses", heading:"Viruses, Viroids & Prions — Not in Five Kingdoms",
html:`
<p>These are <span class="kw">acellular</span> entities — they are not placed in any of the five kingdoms.</p>
<table class="cmp"><thead><tr><th>Entity</th><th>Structure</th><th>Key point</th></tr></thead><tbody>
<tr><td><b>Virus</b></td><td>Nucleic acid (DNA or RNA) + protein coat (capsid). Some have lipid envelope.</td><td>Obligate intracellular parasites. Term coined by <b>Pasteur</b>. Discovered by <b>D.J. Ivanowsky</b> (1892) in tobacco mosaic disease. <b>M.W. Beijerinck</b> called them <i>Contagium vivum fluidum</i>.</td></tr>
<tr><td><b>Viroid</b></td><td>Naked RNA — <b>no protein coat</b></td><td>Discovered by <b>T.O. Diener</b> (1971). Cause potato spindle tuber disease.</td></tr>
<tr><td><b>Prion</b></td><td><b>Protein only</b> — no nucleic acid</td><td>Cause <b>BSE</b> (mad cow disease) and <b>Creutzfeldt–Jakob disease</b> in humans.</td></tr>
</tbody></table>
<div class="callout"><b>Bacteriophage</b> = virus that infects bacteria. Contains DNA. T4 bacteriophage is the classic example in research.</div>
`
}
],

mnemonics:[
{title:"Five-Kingdom order (Whittaker)", device:`<b>M</b>any <b>P</b>eople <b>F</b>ind <b>P</b>lants <b>A</b>mazing`, expand:[
 {L:"M",t:"Monera — prokaryotes (bacteria, cyanobacteria)"},
 {L:"P",t:"Protista — unicellular eukaryotes"},
 {L:"F",t:"Fungi — chitin walls, saprophytes"},
 {L:"P",t:"Plantae — multicellular plants"},
 {L:"A",t:"Animalia — multicellular animals"}
]},
{title:"4 Bacterial shapes", device:`<b>C</b>ute <b>B</b>oys <b>V</b>ery <b>S</b>mooth`, expand:[
 {L:"C",t:"Coccus — spherical (e.g. Streptococcus)"},
 {L:"B",t:"Bacillus — rod-shaped"},
 {L:"V",t:"Vibrio — comma-shaped"},
 {L:"S",t:"Spirillum — spiral"}
]},
{title:"4 Classes of Fungi", device:`<b>P</b>ig <b>A</b>te <b>B</b>ig <b>D</b>oughnuts`, expand:[
 {L:"P",t:"Phycomycetes — algal fungi (Mucor, Rhizopus)"},
 {L:"A",t:"Ascomycetes — sac fungi (Penicillium, Aspergillus)"},
 {L:"B",t:"Basidiomycetes — club fungi (Agaricus/mushroom)"},
 {L:"D",t:"Deuteromycetes — imperfect fungi (no sexual stage)"}
]},
{title:"Virus pioneers", device:`<b>I</b>vanowsky <b>B</b>eijerinck <b>S</b>tanley — <b>I</b>nitially <b>B</b>affled <b>S</b>cientists`, expand:[
 {L:"I",t:"Ivanowsky — discovered virus in tobacco mosaic disease (1892)"},
 {L:"B",t:"Beijerinck — called it 'Contagium vivum fluidum'"},
 {L:"S",t:"Stanley — crystallised TMV virus"}
]}
],

flashcards:[
{front:"Who proposed the five-kingdom classification and in which year?", back:"<b>Robert Whittaker</b>, 1969. Kingdoms: Monera, Protista, Fungi, Plantae, Animalia."},
{front:"What are the criteria for Whittaker's five-kingdom classification?", back:"Cell structure (prokaryote/eukaryote), body organisation (unicellular/multicellular), mode of nutrition, and phylogenetic relationships."},
{front:"Archaebacteria — what makes them unique?", back:"Live in extreme habitats (hot springs, salty lakes, marshy areas). Differ from true bacteria in cell wall structure and rRNA. Methanogens produce methane (biogas)."},
{front:"What is a mycoplasma?", back:"Smallest living cells. No cell wall. Can survive without oxygen. Many are pathogenic (cause diseases in plants and animals)."},
{front:"What are cyanobacteria?", back:"Photosynthetic prokaryotes (blue-green algae). Some fix nitrogen (e.g. Anabaena, Nostoc). Important in soil fertility and aquatic ecosystems."},
{front:"Diatoms — what are frustules?", back:"The hard silica shells of diatoms. Dead diatom shells form <b>diatomaceous earth</b>, used as abrasives, insulating material, and in filtration."},
{front:"What causes red tides?", back:"Dinoflagellates (e.g. <i>Gonyaulax</i>) — rapid multiplication makes seawater appear red; the toxins produced can kill fish and cause shellfish poisoning."},
{front:"What is a pellicle in Euglena?", back:"A flexible protein coat that replaces the cell wall in Euglena, allowing it to change shape."},
{front:"What are hyphae and mycelium?", back:"Hyphae = thread-like filaments making up the fungal body. Mycelium = the mass/network of hyphae."},
{front:"Sexual spores of Ascomycetes vs Basidiomycetes", back:"Ascomycetes → <b>ascospores</b> (inside a sac called ascus). Basidiomycetes → <b>basidiospores</b> (on club-shaped basidia)."},
{front:"What are Deuteromycetes?", back:"'Imperfect fungi' — only asexual reproduction (by conidia) is known; sexual stage has not been observed. E.g. Alternaria, Trichoderma."},
{front:"What are lichens?", back:"Symbiotic association between a fungus and an alga/cyanobacterium. Fungus = structure and protection; alga = photosynthesis. Pioneer organisms on bare rocks."},
{front:"Who discovered viruses? Key discovery facts?", back:"<b>D.J. Ivanowsky</b> (1892) — Tobacco mosaic virus (TMV) passes through porcelain filter. <b>Beijerinck</b> called the causative agent 'Contagium vivum fluidum'. <b>Stanley</b> crystallised TMV."},
{front:"Viroids vs Prions", back:"<b>Viroid</b> — naked RNA, no protein coat. Discovered by T.O. Diener. Cause potato spindle tuber disease. <b>Prion</b> — protein only, no nucleic acid. Cause BSE (mad cow disease)."}
],

recall:[
{q:"Compare the five kingdoms of Whittaker's classification on the basis of cell type, body organisation, and mode of nutrition.", hint:"Prokaryote vs eukaryote; unicellular vs multicellular; autotroph vs heterotroph.", a:"<b>Monera</b>: prokaryotic, unicellular, both autotrophic and heterotrophic. <b>Protista</b>: eukaryotic, unicellular, both. <b>Fungi</b>: eukaryotic, multicellular (except yeast), heterotrophic (saprophytic). <b>Plantae</b>: eukaryotic, multicellular, autotrophic. <b>Animalia</b>: eukaryotic, multicellular, heterotrophic."},
{q:"Describe the four classes of fungi with their distinguishing features.", hint:"PABD — Phycomycetes, Ascomycetes, Basidiomycetes, Deuteromycetes", a:"<b>Phycomycetes</b>: aseptate/coenocytic hyphae, sexual reproduction by zygospores, e.g., Mucor, Rhizopus. <b>Ascomycetes</b>: septate hyphae, asexual conidia, sexual ascospores in asci, e.g., Penicillium, Aspergillus, Neurospora. <b>Basidiomycetes</b>: septate, basidiospores on basidia, e.g., Agaricus, Puccinia. <b>Deuteromycetes</b>: only asexual conidia known, no sexual stage, e.g., Alternaria, Colletotrichum."},
{q:"What are the key differences between Archaebacteria and Eubacteria?", hint:"Cell wall, habitat, rRNA.", a:"<b>Archaebacteria</b>: ancient bacteria living in extreme habitats (thermoacidophiles in hot springs, halophiles in salt lakes, methanogens in marshes/cattle gut); unique cell wall chemistry; distinct rRNA. <b>Eubacteria</b>: true bacteria with rigid peptidoglycan cell wall; found in normal environments; include cyanobacteria and mycoplasma."},
{q:"How are viruses different from viroids and prions?", hint:"What each entity contains.", a:"<b>Virus</b>: nucleic acid (DNA or RNA) enclosed in a protein coat (capsid), obligate intracellular parasite. <b>Viroid</b> (T.O. Diener, 1971): naked RNA only, no protein coat, causes potato spindle tuber disease. <b>Prion</b>: protein only, no nucleic acid, causes BSE (mad cow) and Creutzfeldt–Jakob disease."}
],

mcqs:[
{q:"Five-kingdom classification was proposed by:", o:["Aristotle","Carl Woese","Robert Whittaker","Ernst Haeckel"], c:2, e:"<b>Robert Whittaker</b> proposed the five-kingdom classification in 1969."},
{q:"Which kingdom contains prokaryotes only?", o:["Protista","Monera","Fungi","Animalia"], c:1, e:"<b>Monera</b> contains all prokaryotes — bacteria, cyanobacteria, mycoplasma, archaebacteria."},
{q:"Methanogens are found in:", o:["Hot springs","Deep oceans","Cattle gut and marshes","Polar ice"], c:2, e:"<b>Methanogens</b> (archaebacteria) live in anaerobic marshy areas and cattle gut, producing methane."},
{q:"Which protist is responsible for red tides in the ocean?", o:["Diatoms","Dinoflagellates","Euglena","Slime moulds"], c:1, e:"<b>Dinoflagellates</b> (e.g. Gonyaulax) cause red tides by rapid reproduction in ocean water."},
{q:"Diatomaceous earth is formed from:", o:["Silica shells of diatoms","Calcium shells of foraminifera","Dead cyanobacteria","Dinoflagellate cysts"], c:0, e:"Dead <b>diatoms</b> leave behind silica frustules that accumulate as diatomaceous earth."},
{q:"The cell wall of fungi contains:", o:["Cellulose","Peptidoglycan","Chitin","Silica"], c:2, e:"<b>Chitin</b> — a nitrogen-containing polysaccharide — is the material of fungal cell walls."},
{q:"Ascospores are produced by:", o:["Basidiomycetes","Phycomycetes","Deuteromycetes","Ascomycetes"], c:3, e:"<b>Ascomycetes</b> (sac fungi) produce sexual ascospores inside a sac called an ascus."},
{q:"Which fungi are called 'imperfect fungi' because their sexual stage is unknown?", o:["Ascomycetes","Basidiomycetes","Phycomycetes","Deuteromycetes"], c:3, e:"<b>Deuteromycetes</b> — only asexual reproduction (by conidia) is known."},
{q:"Viroids differ from viruses in that viroids:", o:["Have no protein coat","Are larger","Are prokaryotic","Do not cause disease"], c:0, e:"<b>Viroids</b> have only naked RNA with <b>no protein coat</b>, unlike viruses."},
{q:"Prions cause:", o:["Potato spindle tuber disease","BSE and Creutzfeldt–Jakob disease","TMV","Malaria"], c:1, e:"<b>Prions</b> (proteins only, no nucleic acid) cause BSE in cattle and Creutzfeldt–Jakob disease in humans."},
{q:"Lichen is a symbiotic association between:", o:["Bacteria and algae","Fungi and plant roots","Fungi and algae/cyanobacteria","Virus and bacterium"], c:2, e:"<b>Lichen</b> = fungus (provides structure) + alga or cyanobacterium (photosynthesis)."},
{q:"Which of the following is NOT a protozoan?", o:["Amoeba","Paramoecium","Plasmodium","Euglena"], c:3, e:"<b>Euglena</b> is an Euglenoid (Protista), not classified as a protozoan. Amoeba, Paramoecium and Plasmodium are all protozoans."},
{q:"Sleeping sickness is caused by:", o:["Plasmodium","Trypanosoma","Leishmania","Entamoeba"], c:1, e:"<b>Trypanosoma</b> — a flagellated protozoan — causes African sleeping sickness."},
{q:"Who discovered the first virus (TMV)?", o:["M.W. Beijerinck","T.O. Diener","D.J. Ivanowsky","Wendell Stanley"], c:2, e:"<b>D.J. Ivanowsky</b> (1892) showed that TMV passes through a porcelain filter, implying a pathogen smaller than bacteria."},
{q:"Which kingdom was added by Copeland to Haeckel's three-kingdom system?", o:["Fungi","Animalia","Monera","Plantae"], c:2, e:"<b>Herbert Copeland</b> added <b>Monera</b> (prokaryotes) as a separate kingdom to Haeckel's three-kingdom system."}
],

match:[
{term:"Robert Whittaker", def:"Proposed Five-Kingdom classification (1969)"},
{term:"Carl Woese", def:"Three-domain system based on rRNA"},
{term:"Ivanowsky", def:"Discovered virus in tobacco mosaic disease"},
{term:"Beijerinck", def:"Called virus 'Contagium vivum fluidum'"},
{term:"T.O. Diener", def:"Discovered viroids (naked RNA)"},
{term:"Mycoplasma", def:"Smallest cell; no cell wall"},
{term:"Cyanobacteria", def:"Photosynthetic prokaryotes; some fix N₂"},
{term:"Diatomaceous earth", def:"Formed from dead diatom silica shells"},
{term:"Chitin", def:"Cell wall component of fungi"},
{term:"Ascospores", def:"Sexual spores of Ascomycetes"},
{term:"Basidiospores", def:"Sexual spores of Basidiomycetes"},
{term:"Prion", def:"Protein-only pathogen; causes BSE"},
],

pathways:[
{title:"Five-kingdom sequence (simplest to most complex)", prompt:"Order Whittaker's five kingdoms from simplest to most complex.", steps:["Monera (prokaryote, unicellular)","Protista (eukaryote, unicellular)","Fungi (eukaryote, multicellular, heterotroph)","Plantae (eukaryote, multicellular, autotroph)","Animalia (eukaryote, multicellular, heterotroph)"]},
{title:"History of classification systems", prompt:"Order classification systems chronologically.", steps:["Two-kingdom (Aristotle/Linnaeus)","Three-kingdom (Haeckel — added Protista)","Four-kingdom (Copeland — added Monera)","Five-kingdom (Whittaker 1969)","Six-kingdom/Three Domains (Woese 1977)"]}
]
};
