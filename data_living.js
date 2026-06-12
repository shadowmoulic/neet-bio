/* ====== data_living.js ====== */
/* ===== CHAPTER 1 · THE LIVING WORLD ===== */
DATA.chapters.living = {
id:"living", num:1, title:"The Living World", subtitle:"Diversity · Taxonomy · Nomenclature · Classification",
color:"#5fb6c4", colorD:"#2c7e8c", glyph:"🌍",

notes:[
{
id:"diversity", heading:"Diversity in the Living World",
html:`
<p>The living world shows enormous <span class="kw">diversity</span> — estimated 1.7–1.8 million species have been named and described so far. The science dealing with the identification, naming and classification of organisms is called <span class="kw">Taxonomy</span>.</p>
<ul>
<li><b>Biodiversity</b> — the variety of flora, fauna and microorganisms found on Earth.</li>
<li>The basic need: a <b>universal system of naming and classification</b> so biologists worldwide can share information without confusion.</li>
</ul>
<div class="callout"><b>Key terms:</b> <b>Taxonomy</b> = study of principles and practice of classification. <b>Systematics</b> = study of diversity of organisms and their evolutionary relationships (broader term).</div>
`
},
{
id:"livingchar", heading:"Defining Life — Characteristics of Living Organisms",
html:`
<p>No single feature defines life. Living organisms are identified by a <b>combination</b> of properties:</p>
<table class="cmp"><thead><tr><th>Characteristic</th><th>Brief Note</th></tr></thead><tbody>
<tr><td><b>Growth</b></td><td>Increase in mass and number. In plants: throughout life. In animals: up to a certain age. <span class="kw">Non-living</span> things grow by external accretion (e.g. crystal grows by adding material from outside — not true growth).</td></tr>
<tr><td><b>Reproduction</b></td><td>Production of offspring of the same kind. Not universally applicable — mules, worker bees do not reproduce; still considered living.</td></tr>
<tr><td><b>Metabolism</b></td><td>Sum total of all chemical reactions in the body. The most defining feature — even unicellular, even in a test tube. Non-living things do not metabolise.</td></tr>
<tr><td><b>Cellular organisation</b></td><td>All living things are composed of cells (cell = basic unit of life).</td></tr>
<tr><td><b>Response to stimuli</b></td><td>Plants bend toward light (phototropism); animals respond to heat, pain, etc. <b>Consciousness</b> — the ability to sense the environment and respond — is the most inclusive defining feature.</td></tr>
<tr><td><b>Homeostasis</b></td><td>Maintaining constant internal environment (body temperature, pH, etc.).</td></tr>
</tbody></table>
<div class="callout"><b>Metabolism is the most essential and universal feature of life.</b> Isolated metabolic reactions in vitro are also living reactions.</div>
`
},
{
id:"taxonomy", heading:"Taxonomy — Nomenclature & Classification",
html:`
<h4>Nomenclature</h4>
<p>The process of standardising the naming of organisms is <span class="kw">nomenclature</span>. Rules are set by ICBN (plants) and ICZN (animals). The system used is <b>Binomial Nomenclature</b>, proposed by <b>Carolus Linnaeus</b>.</p>
<ul>
<li>Each organism gets a two-part scientific name: <b>genus</b> name (capital first letter) + <b>species</b> name (lowercase).</li>
<li>Written in <i>italics</i> when printed; <u>underlined</u> when handwritten.</li>
<li>Example: <i>Mangifera indica</i> (mango), <i>Homo sapiens</i> (humans).</li>
</ul>
<h4>Identification, Classification & Cataloguing</h4>
<ul>
<li><b>Identification</b> — correct description of an organism so it can be recognised.</li>
<li><b>Classification</b> — arrangement of organisms into groups/categories based on similarities and differences.</li>
<li><b>Cataloguing</b> — recording all known organisms. Tools: <b>herbarium</b>, <b>museum</b>, <b>botanical garden</b>, <b>zoological park</b>, <b>monographs</b>, <b>flora</b>.</li>
</ul>
`
},
{
id:"hierarchy", heading:"Taxonomic Hierarchy",
html:`
<p>Organisms are placed in a hierarchical series of groups called <span class="kw">taxonomic categories</span> or <b>taxa</b>.</p>
<div class="flow">
<span class="node">Kingdom</span><span class="arr">→</span><span class="node">Phylum/Division</span><span class="arr">→</span><span class="node">Class</span><span class="arr">→</span><span class="node">Order</span><span class="arr">→</span><span class="node">Family</span><span class="arr">→</span><span class="node">Genus</span><span class="arr">→</span><span class="node">Species</span>
</div>
<ul>
<li><b>Species</b> — the basic unit of classification. A group of organisms capable of <span class="kw">interbreeding</span> and producing fertile offspring.</li>
<li><b>Genus</b> — group of related species (e.g. <i>Panthera</i> includes lion, tiger, leopard).</li>
<li><b>Family</b> — group of related genera (e.g. Felidae = cats).</li>
<li><b>Order</b> — group of related families.</li>
<li><b>Class</b> — group of related orders.</li>
<li><b>Phylum</b> — used for animals; <b>Division</b> — used for plants.</li>
<li><b>Kingdom</b> — the highest / broadest category.</li>
</ul>
<table class="cmp"><thead><tr><th>Category</th><th>Human</th><th>Housefly</th><th>Mango</th><th>Wheat</th></tr></thead><tbody>
<tr><td><b>Kingdom</b></td><td>Animalia</td><td>Animalia</td><td>Plantae</td><td>Plantae</td></tr>
<tr><td><b>Phylum/Division</b></td><td>Chordata</td><td>Arthropoda</td><td>Angiospermae</td><td>Angiospermae</td></tr>
<tr><td><b>Class</b></td><td>Mammalia</td><td>Insecta</td><td>Dicotyledonae</td><td>Monocotyledonae</td></tr>
<tr><td><b>Order</b></td><td>Primata</td><td>Diptera</td><td>Sapindales</td><td>Poales</td></tr>
<tr><td><b>Family</b></td><td>Hominidae</td><td>Muscidae</td><td>Anacardiaceae</td><td>Poaceae</td></tr>
<tr><td><b>Genus</b></td><td>Homo</td><td>Musca</td><td>Mangifera</td><td>Triticum</td></tr>
<tr><td><b>Species</b></td><td>sapiens</td><td>domestica</td><td>indica</td><td>aestivum</td></tr>
</tbody></table>
<div class="callout"><b>Mnemonic for hierarchy:</b> <b>K</b>ing <b>P</b>hilip <b>C</b>ame <b>O</b>ver <b>F</b>or <b>G</b>ood <b>S</b>oup → Kingdom, Phylum, Class, Order, Family, Genus, Species.</div>
`
},
{
id:"tools", heading:"Taxonomic Aids — Tools for Identification",
html:`
<p>Scientists use various tools and collections to identify and study organisms:</p>
<table class="cmp"><thead><tr><th>Tool / Aid</th><th>What it is</th><th>Key feature</th></tr></thead><tbody>
<tr><td><b>Herbarium</b></td><td>Store-house of dried, pressed and preserved plant specimens mounted on sheets</td><td>Filed according to a classification system; also called a "dead zoo" for plants. Example: Royal Botanic Gardens, Kew.</td></tr>
<tr><td><b>Botanical Garden</b></td><td>Collection of living plants for reference</td><td>Each plant labelled with its scientific name and family. E.g. Kew (England), Indian Botanical Garden (Howrah).</td></tr>
<tr><td><b>Museum</b></td><td>Collections of preserved plant & animal specimens</td><td>Preserved in formalin or dried; insects in collection boxes; larger animals stuffed.</td></tr>
<tr><td><b>Zoological Park (Zoo)</b></td><td>Places where wild animals are kept in captivity</td><td>Studied in natural habitats; helps conservation.</td></tr>
<tr><td><b>Key</b></td><td>Taxonomic tool for identification based on contrasting characters</td><td>Uses <span class="kw">couplets</span> (pairs of contrasting characters). Separate keys for roots, leaves, flowers.</td></tr>
<tr><td><b>Flora</b></td><td>Index to plant species found in a geographic area</td><td>Provides description and information on plants of that region.</td></tr>
<tr><td><b>Monograph</b></td><td>Detailed taxonomic treatment of a single taxon</td><td>Contains all information available for that particular taxon.</td></tr>
</tbody></table>
<div class="callout"><b>A taxonomic key</b> uses pairs of contrasting characters (couplets) at each step, leading to the correct identification of an organism.</div>
`
}
],

mnemonics:[
{title:"Taxonomic hierarchy (Kingdom → Species)", device:`<b>K</b>ing <b>P</b>hilip <b>C</b>ame <b>O</b>ver <b>F</b>or <b>G</b>ood <b>S</b>oup`, expand:[
 {L:"K",t:"Kingdom"},
 {L:"P",t:"Phylum (animals) / Division (plants)"},
 {L:"C",t:"Class"},
 {L:"O",t:"Order"},
 {L:"F",t:"Family"},
 {L:"G",t:"Genus"},
 {L:"S",t:"Species — most specific category"}
]},
{title:"Who proposed Binomial Nomenclature?", device:`<b>L</b>innaeus <b>L</b>abelled <b>L</b>ife`, expand:[
 {L:"L",t:"Carolus Linnaeus — Father of Taxonomy; proposed Binomial Nomenclature"}
]},
{title:"Most universal feature of life", device:`<b>M</b>etabolism = <b>M</b>ust-have for <b>M</b>atter to <b>L</b>ive`, expand:[
 {L:"M",t:"Metabolism — even isolated reactions in vitro are living; truly universal"}
]},
{title:"Nomenclature rules — what comes first?", device:`<b>G</b>enus goes <b>G</b>rand (Capital), <b>s</b>pecies stays <b>s</b>mall`, expand:[
 {L:"G",t:"Genus — first word, first letter CAPITALISED"},
 {L:"s",t:"species — second word, all lowercase"}
]}
],

flashcards:[
{front:"What is taxonomy?", back:"The branch of science dealing with identification, naming and classification of organisms."},
{front:"What is systematics?", back:"Study of the diversity of organisms and their evolutionary relationships. Coined by Linnaeus. Broader than taxonomy."},
{front:"Who proposed Binomial Nomenclature?", back:"Carolus Linnaeus — each organism gets a two-part Latin name: Genus (capital) + species (lowercase). Written in italics."},
{front:"Give the binomial name of mango and humans.", back:"Mango: <i>Mangifera indica</i>. Humans: <i>Homo sapiens</i>."},
{front:"What is the most universal / essential characteristic of living organisms?", back:"<b>Metabolism</b> — the sum of all chemical reactions in the body. Even in vitro metabolic reactions are considered 'living'."},
{front:"What is a species?", back:"Basic unit of classification. A group of organisms capable of interbreeding and producing fertile offspring."},
{front:"Arrange taxonomic categories from highest to lowest.", back:"Kingdom → Phylum/Division → Class → Order → Family → Genus → Species."},
{front:"What is a herbarium?", back:"A store-house of dried, pressed plant specimens mounted on sheets, filed according to a classification system."},
{front:"Difference between Phylum and Division", back:"Phylum — used for animals. Division — used for plants."},
{front:"What is a taxonomic key?", back:"A tool for identification that uses pairs of contrasting characters (couplets) leading to the name of the organism."},
{front:"What are the rules for writing a scientific name?", back:"Genus: first letter capital. Species: all lowercase. Printed in italics, handwritten with underline."},
{front:"Name any 4 taxonomic aids.", back:"Herbarium, Botanical Garden, Museum, Zoological Park, Flora, Monograph, Taxonomic Key."},
{front:"Which governing bodies set nomenclature rules?", back:"ICBN — International Code of Botanical Nomenclature (plants). ICZN — International Code of Zoological Nomenclature (animals)."},
{front:"Kingdom for humans, housefly, mango?", back:"Humans & housefly → Animalia. Mango → Plantae."},
{front:"Class of housefly vs human", back:"Housefly → Insecta. Human → Mammalia."}
],

recall:[
{q:"What is the difference between taxonomy and systematics?", hint:"Which is broader?", a:"<b>Taxonomy</b> deals with identification, naming and classification of organisms. <b>Systematics</b> is broader — it studies the diversity of organisms and their evolutionary (phylogenetic) relationships. The term was coined by Linnaeus."},
{q:"Why can't reproduction or growth alone define life?", hint:"Think of mules and crystals.", a:"Not all organisms reproduce (e.g. mules, worker bees) yet they are living. Crystals grow by external accretion — not true biological growth. <b>Metabolism</b> is the most universal feature — all living things metabolise."},
{q:"What is binomial nomenclature and what are its rules?", hint:"Who invented it? Two parts?", a:"Proposed by <b>Carolus Linnaeus</b>. Each organism has a two-part Latin name: <b>Genus</b> (first word, first letter capitalised) + <b>species</b> (second word, all lowercase). Written in italics (printed) or underlined (handwritten). E.g., <i>Homo sapiens</i>."},
{q:"Explain the taxonomic hierarchy with an example.", hint:"King Philip...", a:"Kingdom → Phylum/Division → Class → Order → Family → Genus → Species. Example for humans: Animalia → Chordata → Mammalia → Primata → Hominidae → Homo → sapiens."},
{q:"What is a herbarium and how is it useful?", hint:"Dried, pressed specimens...", a:"A <b>herbarium</b> is a store-house of dried, pressed and preserved plant specimens mounted on sheets and filed according to a classification system. It serves as a quick reference for identification and provides data on plant distribution."}
],

mcqs:[
{q:"The science of classification of organisms is called:", o:["Ecology","Taxonomy","Physiology","Genetics"], c:1, e:"<b>Taxonomy</b> is the science of identification, nomenclature and classification of organisms."},
{q:"Binomial Nomenclature was introduced by:", o:["Aristotle","Bentham & Hooker","Carolus Linnaeus","Charles Darwin"], c:2, e:"<b>Carolus Linnaeus</b> proposed binomial nomenclature, giving each organism a two-part Latin name."},
{q:"The correct scientific name of mango is:", o:["Mangifera Indica","mangifera indica","Mangifera indica","mangifera Indica"], c:2, e:"Genus first letter is capital, species all lowercase: <b><i>Mangifera indica</i></b>."},
{q:"Which is the most basic (smallest) unit of classification?", o:["Kingdom","Genus","Family","Species"], c:3, e:"<b>Species</b> is the basic and most specific unit — organisms can interbreed and produce fertile offspring."},
{q:"Which among these is the most universal feature of all living organisms?", o:["Reproduction","Growth","Metabolism","Response to stimuli"], c:2, e:"<b>Metabolism</b> is present in every living organism at all times and is the only truly universal feature."},
{q:"Which category is used for plants instead of 'Phylum'?", o:["Division","Order","Family","Class"], c:0, e:"Plants use <b>Division</b>; animals use Phylum."},
{q:"Dried, pressed and preserved plant specimens mounted on sheets are maintained in a:", o:["Zoo","Museum","Herbarium","Botanical garden"], c:2, e:"A <b>herbarium</b> is the store-house of mounted, dried plant specimens."},
{q:"A group of organisms capable of interbreeding and producing fertile offspring is a:", o:["Genus","Family","Species","Order"], c:2, e:"<b>Species</b> — the basic unit; members can interbreed freely and produce fertile offspring."},
{q:"Which is the correct sequence from most general to most specific?", o:["Species→Genus→Family→Order","Kingdom→Phylum→Class→Order→Family→Genus→Species","Kingdom→Class→Phylum→Order","Family→Genus→Species→Kingdom"], c:1, e:"The correct descending hierarchy is Kingdom → Phylum → Class → Order → Family → Genus → Species."},
{q:"ICBN stands for:", o:["International Code of Biological Nomenclature","International Code of Botanical Nomenclature","International Classification of Biological Names","Indian Code of Biological Nomenclature"], c:1, e:"<b>ICBN</b> = International Code of Botanical Nomenclature — governs naming of plants."},
{q:"Which taxonomic aid uses pairs of contrasting characters to identify an organism?", o:["Monograph","Flora","Museum","Key"], c:3, e:"A <b>taxonomic key</b> uses couplets (pairs of contrasting characters) to lead the user to a correct identification."},
{q:"Royal Botanic Gardens, Kew is famous as a:", o:["Zoo","Herbarium","Botanical Garden","Museum"], c:2, e:"Kew Gardens (England) is one of the most famous <b>botanical gardens</b>, with living labelled plant collections."},
{q:"The family of humans is:", o:["Primates","Mammalia","Hominidae","Chordata"], c:2, e:"Human classification: Order=Primata, Family=<b>Hominidae</b>, Genus=Homo, species=sapiens."},
{q:"In binomial nomenclature, how should a scientific name be written when handwritten?", o:["Printed in bold","Both words capitalised","Underlined","In italics"], c:2, e:"Handwritten scientific names should be <b>underlined</b> (italics is only for print)."},
{q:"The order of housefly is:", o:["Diptera","Insecta","Muscidae","Arthropoda"], c:0, e:"Housefly: Kingdom Animalia, Phylum Arthropoda, Class Insecta, Order <b>Diptera</b>, Family Muscidae, Genus Musca, species domestica."}
],

match:[
{term:"Carolus Linnaeus", def:"Father of Taxonomy; proposed binomial nomenclature"},
{term:"ICBN", def:"Nomenclature rules for plants"},
{term:"ICZN", def:"Nomenclature rules for animals"},
{term:"Herbarium", def:"Dried, pressed plant specimens on sheets"},
{term:"Botanical Garden", def:"Living plant reference collection"},
{term:"Species", def:"Basic unit of classification; interbreeding group"},
{term:"Systematics", def:"Study of diversity + evolutionary relationships"},
{term:"Metabolism", def:"Most universal feature of all living organisms"},
{term:"Mangifera indica", def:"Scientific name of mango"},
{term:"Homo sapiens", def:"Scientific name of humans"},
{term:"Division", def:"Plant equivalent of Phylum (animals)"},
{term:"Taxonomic Key", def:"Uses couplets for identification"}
],

pathways:[
{title:"Taxonomic hierarchy — most inclusive to least", prompt:"Order from Kingdom to Species.", steps:["Kingdom","Phylum / Division","Class","Order","Family","Genus","Species"]},
{title:"Steps in classifying an organism", prompt:"Arrange the steps a taxonomist follows.", steps:["Identify the organism","Name it (Binomial nomenclature)","Describe & document","Place in taxonomic category","File in herbarium / museum"]}
]
};
