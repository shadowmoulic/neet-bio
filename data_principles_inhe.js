/* ============================================================
   data_principles_inhe.js — Chapter 4 · Principles of Inheritance & Variation
   Updated with Class 12 Chapter 4 data (inheritance).
   ============================================================ */

DATA.chapters.inheritance = {
  id: "inheritance",
  num: 4,
  title: "Principles of Inheritance and Variation",
  subtitle: "Mendel · crosses · linkage · sex determination · genetic disorders",
  color: "#e84393",
  colorD: "#b71b6a",
  glyph: "🧬",

  /* ---------------- STUDY NOTES ---------------- */
  notes: [
    {
      id: "intro_genetics",
      heading: "1 · Genetics, Heredity & Variation",
      html: `
        <p><b>Genetics</b> is the branch of biology that studies the principles of <span class="kw">inheritance</span> and its practices.</p>
        <ul>
          <li><span class="kw">Heredity</span> — transmission of characters (resemblances) from parents to offspring.</li>
          <li><span class="kw">Variation</span> — the degree by which offspring differ from their parents and among themselves.</li>
        </ul>
        <div class="callout"><b>Big idea:</b> Every sexually reproducing organism shows both heredity (why children resemble parents) and variation (why they are never identical).</div>
        <p>Humans knew inheritance from ~8000–1000 BC (domestication, breeding) but the <b>scientific basis</b> was given by <span class="kw">Gregor Johann Mendel</span> (1856–1863) through pea-plant experiments.</p>
      `
    },
    {
      id: "mendel_experiments",
      heading: "2 · Mendel & His Pea-Plant Experiments",
      html: `
        <p>Mendel worked on the <span class="kw">garden pea (Pisum sativum)</span> and analysed results <b>mathematically/statistically</b> — a first in biology. He studied <b>7 pairs of contrasting traits</b>.</p>
        <h4>Why the pea plant was ideal</h4>
        <ul>
          <li>Many <b>distinct, contrasting characters</b> with clear-cut forms.</li>
          <li><b>Bisexual flowers</b> that are naturally <b>self-pollinating</b> (true-breeding lines).</li>
          <li>Could be easily <b>artificially cross-pollinated</b> (emasculation + dusting pollen).</li>
          <li>Short life cycle, easy to grow, produces <b>large numbers of offspring</b>.</li>
        </ul>
        <h4>The 7 contrasting traits Mendel selected</h4>
        <table class="cmp">
          <thead><tr><th>Character</th><th>Dominant</th><th>Recessive</th></tr></thead>
          <tbody>
            <tr><td>Stem height</td><td>Tall</td><td>Dwarf</td></tr>
            <tr><td>Flower colour</td><td>Violet</td><td>White</td></tr>
            <tr><td>Flower position</td><td>Axial</td><td>Terminal</td></tr>
            <tr><td>Pod shape</td><td>Inflated (full)</td><td>Constricted</td></tr>
            <tr><td>Pod colour</td><td>Green</td><td>Yellow</td></tr>
            <tr><td>Seed shape</td><td>Round</td><td>Wrinkled</td></tr>
            <tr><td>Seed colour</td><td>Yellow</td><td>Green</td></tr>
          </tbody>
        </table>
        <div class="callout"><b>True-breeding:</b> a line that, on self-pollination, shows the stable trait over many generations.</div>
      `
    },
    {
      id: "key_terms",
      heading: "3 · Key Vocabulary",
      html: `
        <table class="cmp">
          <thead><tr><th>Term</th><th>Meaning</th></tr></thead>
          <tbody>
            <tr><td><span class="kw">Factor / Gene</span></td><td>Unit of inheritance controlling a character (Mendel's "factor").</td></tr>
            <tr><td><span class="kw">Allele</span></td><td>Slightly different forms of the same gene (e.g. T and t).</td></tr>
            <tr><td><span class="kw">Genotype</span></td><td>Genetic constitution (e.g. Tt).</td></tr>
            <tr><td><span class="kw">Phenotype</span></td><td>Observable trait (e.g. Tall).</td></tr>
            <tr><td><span class="kw">Homozygous</span></td><td>Identical alleles (TT or tt).</td></tr>
            <tr><td><span class="kw">Heterozygous</span></td><td>Different alleles (Tt).</td></tr>
            <tr><td><span class="kw">Dominant</span></td><td>Allele expressed in heterozygote (capital, T).</td></tr>
            <tr><td><span class="kw">Recessive</span></td><td>Allele masked in heterozygote (small, t).</td></tr>
          </tbody>
        </table>
        <p><b>Convention:</b> capital letter = dominant allele, same small letter = recessive allele.</p>
      `
    },
    {
      id: "monohybrid",
      heading: "4 · Monohybrid Cross & Laws of Dominance/Segregation",
      html: `
        <p>A cross tracking <b>one</b> pair of contrasting traits.</p>
        <div class="flow">
          <span class="node">Tall TT × Dwarf tt (P)</span><span class="arr">→</span>
          <span class="node">F₁ : all Tall (Tt)</span><span class="arr">→ self</span>
          <span class="node">F₂ : 3 Tall : 1 Dwarf</span>
        </div>
        <ul>
          <li><b>F₂ phenotypic ratio = 3 : 1</b> (Tall : Dwarf).</li>
          <li><b>F₂ genotypic ratio = 1 : 2 : 1</b> (TT : Tt : tt).</li>
          <li>The <span class="kw">Punnett square</span> (by R. C. Punnett) predicts these combinations.</li>
        </ul>
        <h4>Mendel's Laws (from monohybrid)</h4>
        <div class="callout"><b>Law of Dominance:</b> Characters are controlled by discrete factors occurring in pairs; in a dissimilar pair one factor (dominant) expresses and masks the other (recessive).</div>
        <div class="callout"><b>Law of Segregation (Purity of Gametes):</b> The two alleles of a pair separate during gamete formation so that each gamete carries only <b>one</b> allele; they do not blend and are passed on pure.</div>
        <p><b>Test cross:</b> cross the unknown dominant phenotype with a <b>homozygous recessive</b> to reveal its genotype (offspring ratio 1:1 → heterozygous; all dominant → homozygous). <b>Back cross:</b> cross F₁ with either parent.</p>
      `
    },
    {
      id: "incomplete_codominance",
      heading: "5 · Incomplete Dominance & Co-dominance",
      html: `
        <table class="cmp">
          <thead><tr><th>Feature</th><th>Incomplete Dominance</th><th>Co-dominance</th></tr></thead>
          <tbody>
            <tr><td>F₁ phenotype</td><td><b>Intermediate</b> (blend)</td><td><b>Both</b> alleles expressed together</td></tr>
            <tr><td>Example</td><td><i>Snapdragon / Mirabilis jalapa</i>: Red × White → <b>Pink</b></td><td>Human <b>ABO blood group</b> (Iᴬ & Iᴮ)</td></tr>
            <tr><td>F₂ ratio</td><td>1 : 2 : 1 (Red:Pink:White) — phenotype = genotype ratio</td><td>Depends on cross; both antigens appear (AB)</td></tr>
          </tbody>
        </table>
        <h4>ABO blood groups — multiple alleles + co-dominance</h4>
        <p>Gene <b>I</b> has three alleles: <b>Iᴬ, Iᴮ, i</b> (a case of <span class="kw">multiple allelism</span> — more than two alleles for one gene). Iᴬ and Iᴮ each make a surface sugar (antigen A / B); <b>i</b> makes none. Iᴬ and Iᴮ are dominant over i but <b>co-dominant</b> to each other.</p>
        <table class="cmp">
          <thead><tr><th>Blood group</th><th>Genotype(s)</th></tr></thead>
          <tbody>
            <tr><td>A</td><td>IᴬIᴬ or Iᴬi</td></tr>
            <tr><td>B</td><td>IᴮIᴮ or Iᴮi</td></tr>
            <tr><td>AB</td><td>IᴬIᴮ (co-dominance)</td></tr>
            <tr><td>O</td><td>ii</td></tr>
          </tbody>
        </table>
      `
    },
    {
      id: "dihybrid",
      heading: "6 · Dihybrid Cross & Independent Assortment",
      html: `
        <p>A cross tracking <b>two</b> pairs of traits together (seed shape + seed colour).</p>
        <div class="flow">
          <span class="node">RRYY × rryy</span><span class="arr">→</span>
          <span class="node">F₁ : RrYy (Round Yellow)</span><span class="arr">→ self</span>
          <span class="node">F₂ : 9 : 3 : 3 : 1</span>
        </div>
        <ul>
          <li><b>F₂ phenotypic ratio 9:3:3:1</b> = 9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green.</li>
          <li>New (recombinant) combinations appear (Round-Green, Wrinkled-Yellow).</li>
        </ul>
        <div class="callout"><b>Law of Independent Assortment:</b> When two pairs of traits are combined in a hybrid, the segregation of one pair is <b>independent</b> of the other pair.</div>
      `
    },
    {
      id: "chromosomal_theory",
      heading: "7 · Chromosomal Theory of Inheritance",
      html: `
        <p>Mendel's work was rediscovered in 1900 (de Vries, Correns, von Tschermak).</p>
        <p><span class="kw">Walter Sutton & Theodore Boveri (1902)</span> noticed that chromosome behaviour during meiosis parallels the behaviour of Mendel's factors, and united the two ideas as the <b>Chromosomal Theory of Inheritance</b>.</p>
        <table class="cmp">
          <thead><tr><th>Chromosome behaviour</th><th>Gene / factor behaviour</th></tr></thead>
          <tbody>
            <tr><td>Occur in pairs (homologues)</td><td>Alleles occur in pairs</td></tr>
            <tr><td>Segregate at gamete formation</td><td>Alleles segregate (Law of Segregation)</td></tr>
            <tr><td>Independent pairs assort independently</td><td>Independent Assortment</td></tr>
          </tbody>
        </table>
      `
    },
    {
      id: "morgan_linkage",
      heading: "8 · Morgan, Linkage & Recombination",
      html: `
        <p><span class="kw">Thomas Hunt Morgan</span> worked on the fruit fly <b>Drosophila melanogaster</b> and gave experimental proof of the chromosomal theory.</p>
        <h4>Why Drosophila is a good model</h4>
        <ul>
          <li>Grows on simple synthetic medium; life cycle ~2 weeks.</li>
          <li>A single mating gives many progeny; clear <b>sexual dimorphism</b>.</li>
          <li>Many hereditary variations visible under a low-power microscope.</li>
        </ul>
        <table class="cmp">
          <thead><tr><th>Linkage</th><th>Recombination</th></tr></thead>
          <tbody>
            <tr><td>Physical association of genes on the <b>same</b> chromosome; tend to be inherited together.</td><td>Generation of <b>non-parental</b> gene combinations (crossing over).</td></tr>
            <tr><td>Genes <b>close together</b> → tightly linked, <b>low</b> recombination.</td><td>Genes <b>far apart</b> → loosely linked, <b>high</b> recombination.</td></tr>
          </tbody>
        </table>
        <p>Morgan's Drosophila dihybrid data: genes for white eye & yellow body were tightly linked (~1.3% recombination); white eye & miniature wing showed ~37.2% recombination.</p>
        <div class="callout"><b>Alfred Sturtevant</b> used recombination frequency between gene pairs to <b>map</b> their positions — the basis of <b>genetic maps</b>.</div>
      `
    },
    {
      id: "polygenic_pleiotropy",
      heading: "9 · Polygenic Inheritance & Pleiotropy",
      html: `
        <table class="cmp">
          <thead><tr><th>Polygenic inheritance</th><th>Pleiotropy</th></tr></thead>
          <tbody>
            <tr><td><b>Many genes → one trait</b></td><td><b>One gene → many traits</b></td></tr>
            <tr><td>Phenotype = additive effect of alleles + environment; shows a range/gradient.</td><td>A single gene affects several, seemingly unrelated, characters.</td></tr>
            <tr><td>Examples: human <b>skin colour</b>, <b>height</b>.</td><td>Examples: <b>phenylketonuria</b>, <b>sickle-cell anaemia</b>, starch synthesis in pea (round/wrinkled).</td></tr>
          </tbody>
        </table>
        <p>In skin colour, the more dominant alleles present (e.g. of genes A,B,C), the darker the skin — a quantitative, continuous trait.</p>
      `
    },
    {
      id: "sex_determination",
      heading: "10 · Sex Determination",
      html: `
        <table class="cmp">
          <thead><tr><th>System</th><th>Female</th><th>Male</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td>XX–XO</td><td>XX</td><td>XO (one X, no Y)</td><td>Grasshopper / many insects</td></tr>
            <tr><td>XX–XY</td><td>XX (homogametic)</td><td>XY (heterogametic)</td><td>Humans, Drosophila</td></tr>
            <tr><td>ZW–ZZ</td><td>ZW (heterogametic)</td><td>ZZ (homogametic)</td><td>Birds</td></tr>
          </tbody>
        </table>
        <p><b>Humans:</b> 22 pairs of autosomes + 1 pair of sex chromosomes. Female = XX, Male = XY. Because the <b>father</b> is heterogametic (X- or Y-bearing sperm), the <b>sex of the child is decided by the father</b>.</p>
        <h4>Sex determination in honeybees — haplodiploidy</h4>
        <div class="flow">
          <span class="node">Fertilised egg (2n=32)</span><span class="arr">→</span><span class="node">Female (queen/worker)</span>
        </div>
        <div class="flow">
          <span class="node">Unfertilised egg (n=16)</span><span class="arr">→ parthenogenesis</span><span class="node">Male (drone)</span>
        </div>
        <div class="callout"><b>Consequence:</b> males (drones) are haploid — they have <b>no father</b> and <b>cannot produce sons</b> (but have a grandfather and can have grandsons).</div>
      `
    },
    {
      id: "mendelian_disorders",
      heading: "11 · Mendelian (Single-gene) Disorders",
      html: `
        <table class="cmp">
          <thead><tr><th>Disorder</th><th>Type</th><th>Key facts</th></tr></thead>
          <tbody>
            <tr><td><span class="kw">Haemophilia</span></td><td>X-linked recessive</td><td>A clotting-factor protein not made → non-stop bleeding; mostly affects males; classic royal pedigree (Queen Victoria).</td></tr>
            <tr><td><span class="kw">Sickle-cell anaemia</span></td><td>Autosomal recessive</td><td>Glutamic acid → Valine at 6th position of β-globin (GAG→GUG); HbˢHbˢ affected, HbᴬHbˢ carrier; RBCs sickle at low O₂.</td></tr>
            <tr><td><span class="kw">Phenylketonuria</span></td><td>Autosomal recessive</td><td>Enzyme converting phenylalanine → tyrosine is absent; phenylalanine + derivatives accumulate → mental retardation; excreted in urine.</td></tr>
            <tr><td><span class="kw">Thalassemia</span></td><td>Autosomal recessive</td><td>Reduced synthesis of globin chains (α on chr 16 / β on chr 11); a <b>quantitative</b> problem (too little globin). Contrast: sickle-cell is <b>qualitative</b>.</td></tr>
            <tr><td><span class="kw">Colour blindness</span></td><td>X-linked recessive</td><td>Red-green defect; ~8% of males, ~0.4% of females.</td></tr>
          </tbody>
        </table>
        <div class="callout"><b>Thalassemia vs Sickle-cell:</b> Thalassemia = <i>quantity</i> defect (fewer globin chains); Sickle-cell = <i>quality</i> defect (abnormal globin).</div>
      `
    },
    {
      id: "chromosomal_disorders",
      heading: "12 · Chromosomal Disorders",
      html: `
        <p><b>Aneuploidy</b> = gain/loss of a chromosome due to <b>non-disjunction</b> (failure of segregation). <b>Polyploidy</b> = gain of a whole chromosome set (common in plants).</p>
        <table class="cmp">
          <thead><tr><th>Disorder</th><th>Karyotype</th><th>Features</th></tr></thead>
          <tbody>
            <tr><td><span class="kw">Down's syndrome</span></td><td>Trisomy 21 (extra 21)</td><td>Short stature, small round head, furrowed protruding tongue, partly open mouth, broad palm with a characteristic crease; retarded mental & physical development. (Described by Langdon Down.)</td></tr>
            <tr><td><span class="kw">Klinefelter's syndrome</span></td><td>47, XXY (extra X)</td><td>Overall masculine but with some feminine development (gynaecomastia = breast development); sterile.</td></tr>
            <tr><td><span class="kw">Turner's syndrome</span></td><td>45, X0 (missing X)</td><td>Sterile female; rudimentary ovaries; lack of other secondary sexual characters.</td></tr>
          </tbody>
        </table>
        <p><b>Pedigree analysis</b> studies a trait across generations using standard symbols (□ male, ○ female, filled = affected), used for genetic counselling.</p>
      `
    }
  ],

  /* ---------------- MNEMONICS ---------------- */
  mnemonics: [
    {
      title: "Mendel's 7 pea traits — \"SPA-FiPS-Se\"",
      device: `<b>S</b>tem · <b>P</b>od colour · <b>A</b>xial(flower position) · <b>Fi</b>=Flower colour · <b>P</b>od shape · <b>S</b>eed shape · <b>Se</b>ed colour`,
      expand: [
        { L: "Stem", t: "Tall vs Dwarf" },
        { L: "Flower colour", t: "Violet vs White" },
        { L: "Flower position", t: "Axial vs Terminal" },
        { L: "Pod shape", t: "Inflated vs Constricted" },
        { L: "Pod colour", t: "Green vs Yellow" },
        { L: "Seed shape", t: "Round vs Wrinkled" },
        { L: "Seed colour", t: "Yellow vs Green" }
      ]
    },
    {
      title: "Mendel's 3 laws — \"DSI\" (Do Sums Independently)",
      device: `<b>D</b>ominance → <b>S</b>egregation → <b>I</b>ndependent assortment`,
      expand: [
        { L: "D", t: "Dominance — one factor masks the other" },
        { L: "S", t: "Segregation — alleles separate into gametes (purity of gametes)" },
        { L: "I", t: "Independent Assortment — from the DIHYBRID cross (needs 2 pairs)" }
      ]
    },
    {
      title: "Dihybrid ratio — \"9-3-3-1\"",
      device: `<b>9</b> both-dominant : <b>3</b> : <b>3</b> single-dominant : <b>1</b> both-recessive`,
      expand: [
        { L: "9", t: "Round Yellow (both dominant)" },
        { L: "3", t: "Round Green" },
        { L: "3", t: "Wrinkled Yellow" },
        { L: "1", t: "Wrinkled Green (both recessive)" }
      ]
    },
    {
      title: "Blood group O = \"ii\" (nothing shown)",
      device: `<b>AB</b> = both antigens (co-dominance) · <b>O</b> = ii = no antigen`,
      expand: [
        { L: "AB", t: "IᴬIᴮ — both sugars made → co-dominance" },
        { L: "O", t: "ii — universal donor, no antigen" },
        { L: "3 alleles", t: "Iᴬ, Iᴮ, i → multiple allelism" }
      ]
    },
    {
      title: "Sex systems — \"Girls Grab XO, Birds ZW\"",
      device: `<b>XX–XO</b> grasshopper · <b>XX–XY</b> humans · <b>ZW–ZZ</b> birds (female ZW)`,
      expand: [
        { L: "XO", t: "Grasshopper — male has no Y" },
        { L: "XY", t: "Humans/Drosophila — male heterogametic" },
        { L: "ZW", t: "Birds — FEMALE is the heterogametic (ZW) one" }
      ]
    },
    {
      title: "Chromosomal disorders — \"Down-21, Klinefelter +X, Turner −X\"",
      device: `<b>Down</b> = +21 · <b>Klinefelter</b> = XXY · <b>Turner</b> = X0`,
      expand: [
        { L: "Down", t: "Trisomy 21 (extra chromosome 21)" },
        { L: "Klinefelter", t: "47 XXY — sterile male, gynaecomastia" },
        { L: "Turner", t: "45 X0 — sterile female" }
      ]
    },
    {
      title: "Thalassemia vs Sickle — \"QuaNtity vs QuaLity\"",
      device: `<b>Thalassemia = quaNtity</b> (too few chains) · <b>Sickle = quaLity</b> (wrong chain)`,
      expand: [
        { L: "N", t: "Thalassemia — reduced number of globin chains" },
        { L: "L", t: "Sickle-cell — structurally abnormal (Glu→Val) globin" }
      ]
    }
  ],

  /* ---------------- FLASHCARDS (50+) ---------------- */
  flashcards: [
    { front: "Who is the 'Father of Genetics'?", back: "Gregor Johann Mendel, from his pea-plant work (1856–1863)." },
    { front: "Scientific name of the garden pea Mendel used?", back: "Pisum sativum." },
    { front: "How many pairs of contrasting traits did Mendel study?", back: "Seven pairs." },
    { front: "Give the 7 characters Mendel studied.", back: "Stem height, flower colour, flower position, pod shape, pod colour, seed shape, seed colour." },
    { front: "Two reasons the pea plant was ideal for Mendel?", back: "Distinct contrasting traits; bisexual, self-pollinating flowers that can also be cross-pollinated; short cycle; many offspring." },
    { front: "Dominant vs recessive for stem height?", back: "Tall (dominant) vs Dwarf (recessive)." },
    { front: "Dominant vs recessive for seed shape and seed colour?", back: "Round dominant / Wrinkled recessive; Yellow dominant / Green recessive." },
    { front: "Define allele.", back: "One of the slightly different forms of the same gene (e.g. T and t)." },
    { front: "Genotype vs phenotype?", back: "Genotype = genetic makeup (e.g. Tt); Phenotype = observable character (e.g. Tall)." },
    { front: "Homozygous vs heterozygous?", back: "Homozygous = identical alleles (TT/tt); Heterozygous = different alleles (Tt)." },
    { front: "F2 phenotypic ratio of a monohybrid cross?", back: "3 : 1 (dominant : recessive)." },
    { front: "F2 genotypic ratio of a monohybrid cross?", back: "1 : 2 : 1 (TT : Tt : tt)." },
    { front: "Who devised the Punnett square?", back: "Reginald C. Punnett." },
    { front: "State the Law of Dominance.", back: "Characters are controlled by paired factors; in a dissimilar pair, one (dominant) is expressed and masks the other (recessive)." },
    { front: "State the Law of Segregation.", back: "Alleles of a pair separate during gamete formation so each gamete carries only one; they remain pure (Law of Purity of Gametes)." },
    { front: "What is a test cross?", back: "Crossing an individual of unknown genotype with a homozygous recessive to reveal its genotype." },
    { front: "What is a back cross?", back: "Crossing F1 with either of its parents." },
    { front: "Test-cross result if the tested plant is heterozygous?", back: "1 : 1 (dominant : recessive) offspring." },
    { front: "Define incomplete dominance with an example.", back: "F1 is an intermediate blend; e.g. snapdragon/Mirabilis Red × White → Pink." },
    { front: "F2 ratio in incomplete dominance?", back: "1 : 2 : 1 — phenotypic ratio equals genotypic ratio." },
    { front: "Define co-dominance with an example.", back: "Both alleles are fully expressed in the heterozygote; e.g. human AB blood group (Iᴬ and Iᴮ)." },
    { front: "How many alleles of the I gene control ABO blood groups?", back: "Three: Iᴬ, Iᴮ, i — an example of multiple allelism." },
    { front: "Genotype of blood group AB and of O?", back: "AB = IᴬIᴮ; O = ii." },
    { front: "Genotypes possible for blood group A?", back: "IᴬIᴬ or Iᴬi." },
    { front: "F2 phenotypic ratio of a dihybrid cross?", back: "9 : 3 : 3 : 1." },
    { front: "Spell out the 9:3:3:1 ratio.", back: "9 Round-Yellow : 3 Round-Green : 3 Wrinkled-Yellow : 1 Wrinkled-Green." },
    { front: "State the Law of Independent Assortment.", back: "Segregation of one pair of traits is independent of another pair (derived from the dihybrid cross)." },
    { front: "Who proposed the Chromosomal Theory of Inheritance and when?", back: "Walter Sutton and Theodore Boveri (1902)." },
    { front: "Who rediscovered Mendel's work in 1900?", back: "de Vries, Correns and von Tschermak." },
    { front: "Which organism did Morgan use, and its scientific name?", back: "Fruit fly, Drosophila melanogaster." },
    { front: "Two reasons Drosophila is a good genetic model?", back: "Short (~2-week) life cycle on simple medium; many progeny per mating; clear sexual dimorphism; visible variations." },
    { front: "Define linkage.", back: "Physical association of genes located on the same chromosome, tending to be inherited together." },
    { front: "Define recombination.", back: "Generation of non-parental (new) gene combinations via crossing over." },
    { front: "Relation between gene distance and recombination frequency?", back: "Closer genes → tighter linkage → lower recombination; farther genes → higher recombination." },
    { front: "Who first mapped genes using recombination frequency?", back: "Alfred Sturtevant (genetic maps)." },
    { front: "Polygenic inheritance — define with example.", back: "A trait controlled by many genes with additive effects; e.g. human skin colour and height." },
    { front: "Pleiotropy — define with example.", back: "A single gene affecting multiple traits; e.g. phenylketonuria, sickle-cell anaemia." },
    { front: "Sex determination in grasshopper?", back: "XX–XO type: female XX, male XO (male has one X, no Y)." },
    { front: "Sex determination in humans/Drosophila?", back: "XX–XY: female XX (homogametic), male XY (heterogametic)." },
    { front: "Sex determination in birds?", back: "ZW–ZZ: female ZW (heterogametic), male ZZ (homogametic)." },
    { front: "Who determines the sex of a human child and why?", back: "The father — he is heterogametic (X- or Y-bearing sperm)." },
    { front: "How is sex determined in honeybees?", back: "Haplodiploidy: fertilised diploid egg → female; unfertilised haploid egg → male (drone) by parthenogenesis." },
    { front: "A drone bee has how many chromosomes vs a queen?", back: "Drone (male) = 16 (haploid); queen/worker (female) = 32 (diploid)." },
    { front: "Haemophilia — inheritance and defect?", back: "X-linked recessive; a blood-clotting-factor protein is not formed → prolonged bleeding." },
    { front: "Molecular defect in sickle-cell anaemia?", back: "Glutamic acid replaced by valine at the 6th position of the β-globin chain (codon GAG→GUG)." },
    { front: "Genotypes in sickle-cell anaemia?", back: "HbˢHbˢ = affected; HbᴬHbˢ = carrier; HbᴬHbᴬ = normal." },
    { front: "Cause of phenylketonuria?", back: "Absence of the enzyme converting phenylalanine to tyrosine → phenylalanine accumulates → mental retardation." },
    { front: "Thalassemia — nature of defect?", back: "Autosomal recessive; reduced synthesis of globin chains (quantitative defect)." },
    { front: "Colour blindness — inheritance and frequency?", back: "X-linked recessive (red-green); ~8% males, ~0.4% females." },
    { front: "Down's syndrome karyotype and cause?", back: "Trisomy of chromosome 21 (extra 21) due to non-disjunction." },
    { front: "Klinefelter's syndrome karyotype and effect?", back: "47, XXY; masculine with gynaecomastia; sterile." },
    { front: "Turner's syndrome karyotype and effect?", back: "45, X0; sterile female with rudimentary ovaries." },
    { front: "Aneuploidy vs polyploidy?", back: "Aneuploidy = gain/loss of one chromosome (non-disjunction); polyploidy = gain of one or more complete chromosome sets." },
    { front: "What is a true-breeding line?", back: "A line that shows stable inheritance of a trait over generations on self-pollination." }
  ],

  /* ---------------- ACTIVE RECALL (30) ---------------- */
  recall: [
    { q: "Why did Mendel choose the garden pea for his experiments?", hint: "Traits, pollination, offspring number.", a: "It has many <b>distinct contrasting characters</b>, <b>bisexual self-pollinating flowers</b> (giving true-breeding lines) that can also be <b>artificially cross-pollinated</b>, a short life cycle, and produces <b>large numbers of offspring</b>." },
    { q: "List Mendel's seven pairs of contrasting traits.", hint: "Two are about seeds, two about pods, two about flowers, one about stem.", a: "Stem height (Tall/Dwarf), flower colour (Violet/White), flower position (Axial/Terminal), pod shape (Inflated/Constricted), pod colour (Green/Yellow), seed shape (Round/Wrinkled), seed colour (Yellow/Green)." },
    { q: "Explain a monohybrid cross and give F2 ratios.", hint: "Tall × Dwarf.", a: "Crossing TT × tt gives an all-Tall F1 (Tt). Selfing F1 gives F2 with a <b>3:1 phenotypic</b> ratio and a <b>1:2:1 genotypic</b> ratio (TT:Tt:tt)." },
    { q: "State and explain the Law of Segregation.", hint: "Purity of gametes.", a: "During gamete formation the two alleles of a pair <b>separate</b> so that each gamete receives <b>only one</b> allele; alleles do not blend and are transmitted pure — hence 'Law of Purity of Gametes'." },
    { q: "How does a test cross reveal an unknown genotype?", hint: "Cross with recessive.", a: "The dominant-phenotype individual is crossed with a <b>homozygous recessive</b>. A <b>1:1</b> ratio of offspring shows it was heterozygous; all-dominant offspring show it was homozygous dominant." },
    { q: "Differentiate incomplete dominance from co-dominance.", hint: "Blend vs both.", a: "In <b>incomplete dominance</b> the heterozygote is an <b>intermediate blend</b> (Red×White→Pink in snapdragon). In <b>co-dominance</b> <b>both alleles are fully expressed</b> together (blood group AB shows both A and B antigens)." },
    { q: "Explain multiple allelism using ABO blood groups.", hint: "3 alleles, one gene.", a: "The single gene I has <b>three alleles</b> Iᴬ, Iᴮ, i. Iᴬ and Iᴮ make antigens A and B; i makes none. Iᴬ, Iᴮ are dominant to i but co-dominant to each other — giving groups A, B, AB, O." },
    { q: "Give the genotypes for all four ABO blood groups.", hint: "A, B, AB, O.", a: "A = IᴬIᴬ or Iᴬi; B = IᴮIᴮ or Iᴮi; AB = IᴬIᴮ; O = ii." },
    { q: "Describe the dihybrid cross and its F2 ratio.", hint: "Two traits, 9:3:3:1.", a: "RRYY × rryy gives RrYy F1 (Round-Yellow). Selfing gives F2 in a <b>9:3:3:1</b> ratio (9 Round-Yellow : 3 Round-Green : 3 Wrinkled-Yellow : 1 Wrinkled-Green), with new recombinant types appearing." },
    { q: "State the Law of Independent Assortment.", hint: "Two pairs.", a: "When two pairs of traits are combined in a hybrid, the assortment of one pair of alleles is <b>independent</b> of the other pair during gamete formation." },
    { q: "What is the Chromosomal Theory of Inheritance?", hint: "Sutton & Boveri.", a: "Proposed by <b>Sutton and Boveri (1902)</b>: the pairing, segregation and independent assortment of <b>chromosomes</b> during meiosis exactly parallels the behaviour of Mendel's <b>factors</b>, so genes lie on chromosomes." },
    { q: "Why is Drosophila melanogaster useful for genetics?", hint: "Life cycle, progeny.", a: "It grows on simple synthetic medium, completes its life cycle in about <b>two weeks</b>, gives <b>many progeny</b> from a single mating, shows clear <b>sexual dimorphism</b>, and has many easily visible hereditary variations." },
    { q: "Explain linkage and recombination as shown by Morgan.", hint: "Same chromosome.", a: "<b>Linkage</b> is the tendency of genes on the same chromosome to be inherited together; <b>recombination</b> produces non-parental combinations by crossing over. Genes close together are tightly linked (low recombination); genes far apart show higher recombination." },
    { q: "How did Sturtevant use recombination data?", hint: "Maps.", a: "He used the <b>frequency of recombination</b> between gene pairs as a measure of the distance between them to construct <b>genetic maps</b> of chromosomes." },
    { q: "Compare polygenic inheritance and pleiotropy.", hint: "Many→one vs one→many.", a: "<b>Polygenic:</b> many genes control one trait with additive effect (skin colour, height). <b>Pleiotropy:</b> one gene controls many traits (phenylketonuria, sickle-cell)." },
    { q: "How is skin colour a polygenic trait?", hint: "Additive alleles.", a: "It is governed by several genes; the phenotype is the <b>additive sum</b> of the number of dominant alleles present, plus environmental effect, producing a continuous gradient from light to dark." },
    { q: "Describe the XX–XY system and who decides offspring sex.", hint: "Sperm type.", a: "Females are XX (homogametic), males XY (heterogametic). Since the <b>father</b> produces X- or Y-bearing sperm, he determines the sex of the child; the mother always contributes an X." },
    { q: "Explain sex determination in honeybees.", hint: "Haplodiploidy.", a: "A <b>fertilised (diploid) egg</b> develops into a female (queen or worker); an <b>unfertilised (haploid) egg</b> develops into a male (drone) by <b>parthenogenesis</b>. Drones have no father and cannot have sons." },
    { q: "Why are more males affected by haemophilia and colour blindness?", hint: "X-linked, one X.", a: "Both are <b>X-linked recessive</b>. Males have a single X, so one recessive allele is enough to show the trait; females need the recessive allele on both X chromosomes." },
    { q: "Describe the molecular basis of sickle-cell anaemia.", hint: "6th position, one base.", a: "A single base change (GAG→GUG) substitutes <b>valine for glutamic acid at the 6th position</b> of the β-globin chain, making abnormal HbS. Under low oxygen the RBCs become sickle-shaped." },
    { q: "What causes phenylketonuria and its effect?", hint: "Enzyme absent.", a: "Absence of the enzyme that converts <b>phenylalanine to tyrosine</b>; phenylalanine and its derivatives accumulate, causing <b>mental retardation</b>, and are excreted in urine." },
    { q: "Distinguish thalassemia from sickle-cell anaemia.", hint: "Quantity vs quality.", a: "<b>Thalassemia</b> is a <b>quantitative</b> disorder — too few globin chains are made. <b>Sickle-cell</b> is a <b>qualitative</b> disorder — a structurally abnormal globin chain is made." },
    { q: "Describe Down's syndrome.", hint: "Extra 21.", a: "Caused by <b>trisomy of chromosome 21</b>. Features: short stature, small round head, furrowed protruding tongue, partly open mouth, broad palm with a single crease, and retarded physical and mental development." },
    { q: "Compare Klinefelter's and Turner's syndromes.", hint: "XXY vs X0.", a: "<b>Klinefelter's</b> = 47,XXY — a sterile male with gynaecomastia (some feminine features). <b>Turner's</b> = 45,X0 — a sterile female with rudimentary ovaries and lacking secondary sexual characters." },
    { q: "What is non-disjunction and what can it cause?", hint: "Failed separation.", a: "Failure of chromosomes/chromatids to separate during cell division, producing gametes with an extra or missing chromosome — leading to <b>aneuploidy</b> such as Down's, Klinefelter's, or Turner's syndrome." },
    { q: "Differentiate aneuploidy and polyploidy.", hint: "One vs a set.", a: "<b>Aneuploidy</b> = gain or loss of one (or a few) chromosome(s) from non-disjunction. <b>Polyploidy</b> = gain of one or more complete chromosome sets (common in plants)." },
    { q: "What is pedigree analysis used for?", hint: "Family tree.", a: "It traces the inheritance of a trait across generations using standard symbols, helping to determine the mode of inheritance and to give <b>genetic counselling</b>." },
    { q: "Why is the F2 ratio of incomplete dominance 1:2:1 and not 3:1?", hint: "Heterozygote visible.", a: "Because the heterozygote has its <b>own distinct (intermediate) phenotype</b>, so the phenotype ratio matches the genotype ratio 1:2:1 instead of collapsing to 3:1." },
    { q: "What did Mendel mean by 'factors' and how do they relate to modern genes?", hint: "Units of heredity.", a: "Mendel's 'factors' were <b>discrete units of inheritance</b> occurring in pairs; today they are called <b>genes</b>, with their variant forms called <b>alleles</b>, located on chromosomes." },
    { q: "Give one example each of a dominant and a recessive Mendelian disorder in humans.", hint: "Think autosomal.", a: "Recessive examples: sickle-cell anaemia, phenylketonuria, thalassemia. (Haemophilia and colour blindness are X-linked recessive.) Some human disorders like Huntington's are dominant." }
  ],

  /* ---------------- MCQs (50) ---------------- */
  mcqs: [
    { q: "Mendel is called the Father of Genetics for his work on:", o: ["Maize", "Garden pea", "Snapdragon", "Fruit fly"], c: 1, e: "Mendel worked on <b>Pisum sativum</b> (garden pea)." },
    { q: "How many pairs of contrasting characters did Mendel study?", o: ["5", "6", "7", "8"], c: 2, e: "He studied <b>seven</b> pairs of contrasting traits." },
    { q: "Which is NOT one of Mendel's seven traits?", o: ["Seed shape", "Pod colour", "Leaf size", "Flower position"], c: 2, e: "Leaf size was not among the seven; flower position (axial/terminal) was." },
    { q: "For flower colour, the dominant trait is:", o: ["White", "Violet", "Pink", "Red"], c: 1, e: "Violet is dominant over white." },
    { q: "The observable characteristic of an organism is its:", o: ["Genotype", "Phenotype", "Karyotype", "Allele"], c: 1, e: "Phenotype = observable trait; genotype = genetic makeup." },
    { q: "A heterozygous tall pea plant has the genotype:", o: ["TT", "Tt", "tt", "TtTt"], c: 1, e: "Tt is heterozygous (one dominant, one recessive allele)." },
    { q: "The F2 phenotypic ratio in a monohybrid cross is:", o: ["1:1", "3:1", "9:3:3:1", "1:2:1"], c: 1, e: "Monohybrid F2 phenotype = <b>3:1</b>." },
    { q: "The F2 genotypic ratio in a monohybrid cross is:", o: ["3:1", "1:2:1", "9:3:3:1", "2:1"], c: 1, e: "Genotypes TT:Tt:tt = <b>1:2:1</b>." },
    { q: "The Punnett square was devised by:", o: ["Mendel", "Morgan", "R. C. Punnett", "Sutton"], c: 2, e: "Reginald C. Punnett devised it." },
    { q: "The Law of Purity of Gametes is another name for the Law of:", o: ["Dominance", "Segregation", "Independent Assortment", "Linkage"], c: 1, e: "Alleles separate pure into gametes — Law of Segregation." },
    { q: "A test cross is a cross between F1 and a:", o: ["Homozygous dominant", "Homozygous recessive", "Heterozygote", "Different species"], c: 1, e: "Crossing with a homozygous recessive reveals the genotype." },
    { q: "In snapdragon, Red × White gives Pink in F1. This is:", o: ["Co-dominance", "Incomplete dominance", "Complete dominance", "Epistasis"], c: 1, e: "Intermediate blend = incomplete dominance." },
    { q: "F2 ratio in incomplete dominance is:", o: ["3:1", "1:2:1", "9:3:3:1", "1:1"], c: 1, e: "Phenotype ratio equals genotype ratio 1:2:1." },
    { q: "Human AB blood group is an example of:", o: ["Incomplete dominance", "Co-dominance", "Epistasis", "Pleiotropy"], c: 1, e: "Both Iᴬ and Iᴮ are expressed — co-dominance." },
    { q: "The number of alleles controlling ABO blood groups is:", o: ["1", "2", "3", "4"], c: 2, e: "Iᴬ, Iᴮ and i — an example of multiple allelism." },
    { q: "The genotype of blood group O is:", o: ["IᴬIᴬ", "IᴬIᴮ", "ii", "Iᴮi"], c: 2, e: "O = homozygous ii (no antigen)." },
    { q: "The genotype of blood group AB is:", o: ["IᴬIᴬ", "IᴬIᴮ", "ii", "Iᴮi"], c: 1, e: "AB = IᴬIᴮ (co-dominance)." },
    { q: "F2 phenotypic ratio of a dihybrid cross is:", o: ["3:1", "1:2:1", "9:3:3:1", "1:1:1:1"], c: 2, e: "Dihybrid F2 = <b>9:3:3:1</b>." },
    { q: "The Law of Independent Assortment is derived from a:", o: ["Monohybrid cross", "Dihybrid cross", "Test cross", "Back cross"], c: 1, e: "It needs two trait pairs — the dihybrid cross." },
    { q: "The Chromosomal Theory of Inheritance was proposed by:", o: ["Morgan & Sturtevant", "Sutton & Boveri", "Watson & Crick", "Bateson & Punnett"], c: 1, e: "Sutton and Boveri (1902)." },
    { q: "Morgan carried out his linkage experiments on:", o: ["Pea", "Maize", "Drosophila", "Neurospora"], c: 2, e: "Drosophila melanogaster (fruit fly)." },
    { q: "Genes located close together on a chromosome show:", o: ["High recombination", "Low recombination", "No linkage", "Independent assortment"], c: 1, e: "Closely placed genes are tightly linked → low recombination." },
    { q: "Genetic maps based on recombination frequency were made by:", o: ["Morgan", "Sturtevant", "Bridges", "Muller"], c: 1, e: "Alfred Sturtevant constructed genetic maps." },
    { q: "Human skin colour is an example of:", o: ["Pleiotropy", "Co-dominance", "Polygenic inheritance", "Multiple allelism"], c: 2, e: "Many genes act additively — polygenic inheritance." },
    { q: "One gene affecting several traits is called:", o: ["Polygeny", "Pleiotropy", "Epistasis", "Linkage"], c: 1, e: "Pleiotropy — e.g. phenylketonuria." },
    { q: "In grasshoppers the sex-determination system is:", o: ["XX–XY", "ZW–ZZ", "XX–XO", "Haplodiploid"], c: 2, e: "Female XX, male XO (no Y)." },
    { q: "In birds, the female is:", o: ["ZZ", "ZW", "XX", "XY"], c: 1, e: "Birds are ZW–ZZ; the female is heterogametic ZW." },
    { q: "The sex of a human child is determined by the:", o: ["Mother's egg", "Father's sperm", "Temperature", "Both parents equally"], c: 1, e: "The father contributes X or Y — he is heterogametic." },
    { q: "A male honeybee (drone) develops from:", o: ["A fertilised diploid egg", "An unfertilised haploid egg", "A worker larva", "A fertilised haploid egg"], c: 1, e: "Drones arise from unfertilised (haploid) eggs by parthenogenesis." },
    { q: "A drone honeybee has how many chromosomes?", o: ["8", "16", "32", "64"], c: 1, e: "Haploid drone = 16 (queen/worker = 32)." },
    { q: "Haemophilia is inherited as:", o: ["Autosomal dominant", "Autosomal recessive", "X-linked recessive", "Y-linked"], c: 2, e: "X-linked recessive; a clotting factor is missing." },
    { q: "In sickle-cell anaemia, glutamic acid is replaced by valine at position:", o: ["4th", "6th", "10th", "1st"], c: 1, e: "6th position of the β-globin chain (GAG→GUG)." },
    { q: "The genotype of a sickle-cell carrier is:", o: ["HbᴬHbᴬ", "HbᴬHbˢ", "HbˢHbˢ", "HbᴬHbᴮ"], c: 1, e: "HbᴬHbˢ is the heterozygous carrier." },
    { q: "Phenylketonuria results from lack of an enzyme converting:", o: ["Tyrosine → phenylalanine", "Phenylalanine → tyrosine", "Glucose → galactose", "Lactose → glucose"], c: 1, e: "Phenylalanine is not converted to tyrosine and accumulates." },
    { q: "Thalassemia is best described as a:", o: ["Qualitative globin defect", "Quantitative globin defect", "Chromosomal defect", "Enzyme deficiency"], c: 1, e: "Reduced synthesis (quantity) of globin chains." },
    { q: "Down's syndrome is caused by trisomy of chromosome:", o: ["18", "21", "23", "13"], c: 1, e: "An extra copy of chromosome 21." },
    { q: "Klinefelter's syndrome has the karyotype:", o: ["45,X0", "47,XXY", "47,XYY", "47,+21"], c: 1, e: "47,XXY — sterile male with gynaecomastia." },
    { q: "Turner's syndrome individuals are:", o: ["Sterile males", "Fertile females", "Sterile females", "Normal males"], c: 2, e: "45,X0 — sterile females with rudimentary ovaries." },
    { q: "Failure of chromosomes to separate during meiosis is:", o: ["Crossing over", "Non-disjunction", "Translocation", "Inversion"], c: 1, e: "Non-disjunction leads to aneuploidy." },
    { q: "Gain of a whole chromosome set is called:", o: ["Aneuploidy", "Polyploidy", "Monosomy", "Trisomy"], c: 1, e: "Polyploidy — common in plants." },
    { q: "Colour blindness affects approximately what fraction of males?", o: ["0.4%", "8%", "20%", "50%"], c: 1, e: "About 8% of males (0.4% of females)." },
    { q: "Mendel's 'factors' correspond to modern:", o: ["Chromosomes", "Genes", "Enzymes", "Proteins"], c: 1, e: "Factors = genes; their variants = alleles." },
    { q: "The recombinant phenotypes in a dihybrid F2 are:", o: ["Round-Yellow & Wrinkled-Green", "Round-Green & Wrinkled-Yellow", "Only Round-Yellow", "Only Wrinkled-Green"], c: 1, e: "New non-parental combinations: Round-Green and Wrinkled-Yellow." },
    { q: "A cross of F1 with a parent is a:", o: ["Test cross", "Back cross", "Reciprocal cross", "Dihybrid cross"], c: 1, e: "Back cross = F1 × either parent." },
    { q: "Mendel's work was rediscovered in 1900 by:", o: ["Sutton, Boveri, Morgan", "de Vries, Correns, von Tschermak", "Watson, Crick, Wilkins", "Darwin, Wallace, Lamarck"], c: 1, e: "de Vries, Correns and von Tschermak independently rediscovered it." },
    { q: "The heterogametic sex in humans is:", o: ["Female (XX)", "Male (XY)", "Both", "Neither"], c: 1, e: "Male XY produces two kinds of gametes." },
    { q: "Which condition is a qualitative disorder of haemoglobin?", o: ["Thalassemia", "Sickle-cell anaemia", "Down's syndrome", "Turner's syndrome"], c: 1, e: "Sickle-cell — abnormal (wrong-quality) globin." },
    { q: "Which is an example of pleiotropy?", o: ["Skin colour", "Height", "Phenylketonuria", "ABO blood group"], c: 2, e: "PKU — one gene, many effects." },
    { q: "In a test cross giving 1:1 offspring, the tested parent was:", o: ["Homozygous dominant", "Heterozygous", "Homozygous recessive", "Sterile"], c: 1, e: "A 1:1 ratio indicates the tested parent was heterozygous." },
    { q: "The characteristic single palm crease is seen in:", o: ["Turner's", "Klinefelter's", "Down's syndrome", "Haemophilia"], c: 2, e: "Down's syndrome features a broad palm with a characteristic crease." }
  ],

  /* ---------------- MATCH-UP (18 pairs) ---------------- */
  match: [
    { term: "Pisum sativum", def: "Garden pea used by Mendel" },
    { term: "3:1", def: "Monohybrid F2 phenotypic ratio" },
    { term: "1:2:1", def: "Monohybrid F2 genotypic ratio" },
    { term: "9:3:3:1", def: "Dihybrid F2 phenotypic ratio" },
    { term: "Law of Segregation", def: "Alleles separate pure into gametes" },
    { term: "Incomplete dominance", def: "Red × White → Pink" },
    { term: "Co-dominance", def: "AB blood group" },
    { term: "Multiple alleles", def: "Iᴬ, Iᴮ, i" },
    { term: "Punnett square", def: "Grid predicting gamete combinations" },
    { term: "Sutton & Boveri", def: "Chromosomal Theory of Inheritance" },
    { term: "Morgan", def: "Linkage in Drosophila" },
    { term: "Sturtevant", def: "Genetic maps from recombination" },
    { term: "Polygenic", def: "Skin colour (many genes)" },
    { term: "Pleiotropy", def: "Phenylketonuria (one gene, many effects)" },
    { term: "Down's syndrome", def: "Trisomy 21" },
    { term: "Klinefelter's", def: "47, XXY" },
    { term: "Turner's", def: "45, X0" },
    { term: "Sickle-cell", def: "Glu→Val at 6th position of β-globin" }
  ],

  /* ---------------- BUILD THE PATHWAY (4 sets) ---------------- */
  pathways: [
    { title: "Monohybrid cross", prompt: "Order the steps from parents to F2.", steps: ["Tall TT × Dwarf tt (P)", "F1 all Tall (Tt)", "Self-pollinate F1", "F2 = 3 Tall : 1 Dwarf"] },
    { title: "Dihybrid cross", prompt: "Order the dihybrid sequence.", steps: ["RRYY × rryy (P)", "F1 = RrYy Round-Yellow", "Self F1", "F2 = 9:3:3:1"] },
    { title: "Non-disjunction → Down's syndrome", prompt: "Order the cause of Down's syndrome.", steps: ["Normal chromosome pair 21", "Non-disjunction in meiosis", "Gamete with extra chromosome 21", "Fertilisation → trisomy 21", "Down's syndrome"] },
    { title: "Honeybee sex determination", prompt: "Order the haplodiploid pathway for a drone.", steps: ["Queen lays egg", "Egg remains unfertilised", "Haploid egg (n=16)", "Parthenogenesis", "Male drone"] }
  ],

  /* ---------------- BOSS BATTLE (hard MCQs) ---------------- */
  boss: [
    { q: "A woman with blood group AB marries a man with blood group O. Which groups are impossible in their children?", o: ["A and B", "AB and O", "A only", "B only"], c: 1, e: "IᴬIᴮ × ii → children are Iᴬi (A) or Iᴮi (B). Neither AB nor O is possible." },
    { q: "A colour-blind daughter is possible only if:", o: ["Father normal, mother carrier", "Father colour-blind, mother carrier or colour-blind", "Father colour-blind, mother normal homozygous", "It is never possible"], c: 1, e: "She needs the recessive X allele from both parents — father must be colour-blind and mother at least a carrier." },
    { q: "In a dihybrid test cross (RrYy × rryy), the expected ratio of offspring is:", o: ["9:3:3:1", "1:1:1:1", "3:1", "1:2:1"], c: 1, e: "Test-crossing a dihybrid gives four equal classes — <b>1:1:1:1</b>." },
    { q: "Two genes 37.2 units apart on a chromosome would be described as:", o: ["Tightly linked", "Loosely linked", "Unlinked/independent-like", "On different chromosomes"], c: 1, e: "A high recombination value means the genes are far apart and only loosely linked." },
    { q: "A carrier mother (HbᴬHbˢ) and a carrier father have a child. Probability the child is affected (HbˢHbˢ)?", o: ["0", "1/4", "1/2", "3/4"], c: 1, e: "HbᴬHbˢ × HbᴬHbˢ → 1/4 HbˢHbˢ affected." },
    { q: "If both parents are heterozygous for an autosomal recessive disorder, the chance a child is a carrier is:", o: ["1/4", "1/2", "3/4", "1"], c: 1, e: "Aa × Aa → 1 AA : 2 Aa : 1 aa; carriers (Aa) = 1/2." },
    { q: "The distinguishing feature between Klinefelter's and Turner's is:", o: ["One has extra X, the other lacks an X", "Both are trisomies", "Both affect autosomes", "Both are fertile"], c: 0, e: "Klinefelter's (XXY) gains an X; Turner's (X0) loses an X." },
    { q: "In Mirabilis jalapa, crossing two pink flowers gives offspring in the ratio:", o: ["All pink", "3 red : 1 white", "1 red : 2 pink : 1 white", "9:3:3:1"], c: 2, e: "Rr × Rr with incomplete dominance → 1 Red : 2 Pink : 1 White." },
    { q: "Which statement about linkage and independent assortment is correct?", o: ["Linked genes always assort independently", "Independent assortment applies to genes on different chromosomes", "Recombination is impossible for linked genes", "Linkage increases recombinant frequency"], c: 1, e: "Independent assortment holds for genes on separate chromosomes; linked genes deviate from it." },
    { q: "A haemophilic man marries a normal (non-carrier) woman. Their sons and daughters will be:", o: ["All affected", "Sons affected, daughters carriers", "Sons normal, daughters carriers", "All normal non-carriers"], c: 2, e: "He passes his Y to sons (normal) and his affected X to daughters (all carriers)." },
    { q: "Which is the correct genotypic outcome of self-crossing an incompletely dominant heterozygote population, compared to complete dominance?", o: ["Both give 3:1 phenotype", "Both give 1:2:1 phenotype", "Complete dominance 3:1, incomplete 1:2:1", "Complete dominance 1:2:1, incomplete 3:1"], c: 2, e: "Complete dominance masks the heterozygote (3:1); incomplete dominance reveals it (1:2:1)." },
    { q: "A drone bee's sperm are genetically:", o: ["All identical (mitotic)", "Variable (meiotic)", "Diploid", "Non-functional"], c: 0, e: "Being haploid, a drone makes sperm by mitosis, so all its sperm are genetically identical." }
  ]
};

/* ===== Chapter 4 TOP-UP (extends flashcards -> 80, recall -> 50, mcqs -> 70) ===== */
(function(){
  var C = DATA.chapters.inheritance;

  C.flashcards.push(
    { front: "Probability of a tt (short) plant from a Tt × Tt cross?", back: "1/4 (25%). Genotypes are 1 TT : 2 Tt : 1 tt." },
    { front: "Phenotypic ratio of a dihybrid <b>test cross</b> (RrYy × rryy)?", back: "1 : 1 : 1 : 1 (round-yellow : round-green : wrinkled-yellow : wrinkled-green)." },
    { front: "How many types of gametes does AaBbCc produce?", back: "2³ = 8 types (2ⁿ where n = number of heterozygous gene pairs)." },
    { front: "How many phenotypes appear in the F2 of a trihybrid cross (with dominance)?", back: "2³ = 8 phenotypes, in the ratio 27:9:9:9:3:3:3:1." },
    { front: "Genotypic ratio of a monohybrid F2?", back: "1 (homozygous dominant) : 2 (heterozygous) : 1 (homozygous recessive)." },
    { front: "What is a reciprocal cross?", back: "A pair of crosses where the sexes of the parents carrying each trait are swapped — used to detect sex-linked inheritance." },
    { front: "What is emasculation?", back: "Removal of anthers from a bisexual flower before pollen matures, to prevent self-pollination during controlled crosses." },
    { front: "In what year and where did Mendel publish his results?", back: "1866, in the Proceedings of the Natural History Society of Brünn." },
    { front: "Distinguish a 'character' from a 'trait'.", back: "A character is a heritable feature (e.g., seed colour); a trait is a variant form of it (e.g., yellow or green)." },
    { front: "What do P, F1 and F2 stand for?", back: "P = parental generation; F1 = first filial (offspring of P); F2 = second filial (offspring of F1 self-cross)." },
    { front: "Molecular basis of round vs wrinkled seed shape?", back: "Round seeds have a functional starch-branching enzyme (more starch, less water loss); wrinkled seeds lack it (sugar accumulates, seed shrivels on drying)." },
    { front: "What is the Bombay phenotype?", back: "Genotype hh blocks the H antigen, so I^A/I^B cannot be expressed — the person tests as blood group O despite carrying A/B alleles." },
    { front: "What is a Barr body?", back: "A condensed, inactivated X chromosome seen in the interphase nucleus. Number of Barr bodies = (number of X chromosomes − 1)." },
    { front: "Barr bodies in a normal female, Klinefelter (XXY) and Turner (XO)?", back: "Normal female = 1; Klinefelter = 1; Turner = 0." },
    { front: "What are holandric (Y-linked) genes?", back: "Genes on the non-homologous part of the Y chromosome, passed only from father to all sons (e.g., the SRY sex-determining gene)." },
    { front: "What is criss-cross inheritance?", back: "An X-linked trait passes from an affected male to his daughters (carriers) and then to his grandsons — 'grandfather to grandson'." },
    { front: "How many autosomes and sex chromosomes are in a human somatic cell?", back: "44 autosomes (22 pairs) + 2 sex chromosomes (XX or XY) = 46 total." },
    { front: "What is erythroblastosis foetalis?", back: "Haemolytic disease when an Rh⁻ mother, sensitised in a first Rh⁺ pregnancy, makes anti-Rh antibodies that attack the RBCs of a subsequent Rh⁺ foetus." },
    { front: "What is amniocentesis?", back: "A prenatal test sampling amniotic fluid to check the foetal karyotype and detect chromosomal/metabolic disorders." },
    { front: "Codon change responsible for sickle-cell haemoglobin (HbS)?", back: "GAG → GUG in the β-globin mRNA, so glutamic acid is replaced by valine at position 6." },
    { front: "What type of mutation causes sickle-cell anaemia?", back: "A point mutation — specifically a single base substitution (missense mutation)." },
    { front: "Give the F2 phenotypic ratio of a trihybrid cross.", back: "27 : 9 : 9 : 9 : 3 : 3 : 3 : 1 (8 phenotypic classes)." },
    { front: "What is a dihybrid cross?", back: "A cross tracking two characters simultaneously (e.g., seed shape and seed colour), giving the 9:3:3:1 F2 ratio." },
    { front: "In a Tt × tt cross, what is the phenotypic ratio?", back: "1 tall : 1 short (a 1:1 ratio, same as a test cross)." },
    { front: "Why is the Y chromosome called the 'sex-determining' chromosome in humans?", back: "Its SRY gene triggers testis development; its presence gives a male (XY), its absence a female (XX)." },
    { front: "Which parent's gamete decides a human baby's sex, and why?", back: "The father's — he is heterogametic (XY) and contributes either an X (→ girl) or a Y (→ boy); the mother always gives an X." },
    { front: "What is aneuploidy? Give two examples.", back: "Gain or loss of one/few chromosomes due to non-disjunction. Examples: Down's (trisomy 21), Turner's (monosomy X)." }
  );

  C.recall.push(
    { q: "State and explain the Law of Dominance with an example.", hint: "One factor masks the other.", a: "In a heterozygote, only one allele (the <b>dominant</b>) expresses itself while the other (<b>recessive</b>) is masked. E.g., Tt is tall because T masks t. It explains why the F1 resembles only one parent and why a 3:1 F2 appears." },
    { q: "Why is the monohybrid genotypic ratio 1:2:1 while the phenotypic ratio is 3:1?", hint: "Heterozygotes look like the dominant.", a: "Fertilisation combines gametes as 1 TT : 2 Tt : 1 tt. Because Tt looks identical to TT (dominance), the three dominant genotypes group into one phenotype, giving 3 tall : 1 short." },
    { q: "Work through a dihybrid test cross and give the ratio.", hint: "F1 × double recessive.", a: "RrYy × rryy → gametes RY, Ry, rY, ry from F1 all meet ry. Offspring: RrYy : Rryy : rrYy : rryy = <b>1 : 1 : 1 : 1</b>, revealing all four gamete types and confirming independent assortment." },
    { q: "Explain the molecular basis of round versus wrinkled seeds.", hint: "Starch-branching enzyme.", a: "Round seeds carry a working starch-branching enzyme, storing more starch and losing water evenly. Wrinkled seeds lack the enzyme, accumulate sugars, absorb water, and shrivel on drying — a single gene affecting seed shape at the biochemical level." },
    { q: "How does the ABO system show both multiple allelism and co-dominance?", hint: "Three alleles, two expressed together.", a: "Three alleles (I^A, I^B, i) exist in the population (multiple allelism). In genotype I^A I^B both A and B antigens appear together (co-dominance), giving blood group AB." },
    { q: "What is the Bombay phenotype and why does it occur?", hint: "H antigen missing.", a: "Genotype hh fails to make the H substance on which A and B antigens are built, so even a person with I^A or I^B tests as group O. It shows how one gene (H) can mask another (ABO) — recessive epistasis." },
    { q: "Explain Rh incompatibility and erythroblastosis foetalis.", hint: "Second pregnancy.", a: "If an Rh⁻ mother carries an Rh⁺ foetus, foetal RBCs entering at delivery sensitise her to make anti-Rh antibodies. In a later Rh⁺ pregnancy these cross the placenta and destroy foetal RBCs, causing haemolytic disease of the newborn." },
    { q: "Explain criss-cross inheritance with an example.", hint: "Grandfather to grandson.", a: "An X-linked recessive gene in an affected male passes to all his daughters (carriers), who then transmit it to half their sons. Thus colour blindness or haemophilia appears to skip from grandfather to grandson through carrier daughters." },
    { q: "Why do more males than females show X-linked recessive traits?", hint: "Hemizygous.", a: "Males have a single X (hemizygous), so one recessive allele is enough to show the trait. Females need two copies (one on each X) to be affected, which is far rarer." },
    { q: "Describe the chromosomal basis of Down's syndrome and its link to maternal age.", hint: "Trisomy 21, non-disjunction.", a: "An extra copy of chromosome 21 (trisomy 21, 47 chromosomes) arises from non-disjunction during meiosis, usually in the egg. The risk rises with maternal age as older oocytes segregate chromosomes less reliably." },
    { q: "Distinguish Mendelian disorders from chromosomal disorders.", hint: "Gene vs chromosome number.", a: "<b>Mendelian</b> disorders result from mutation in a single gene (e.g., sickle-cell, haemophilia) and follow inheritance patterns. <b>Chromosomal</b> disorders result from excess/absence of a whole chromosome or set (e.g., Down's, Turner's) due to non-disjunction." },
    { q: "What is non-disjunction and which syndromes can it cause?", hint: "Failure to separate.", a: "Non-disjunction is the failure of homologous chromosomes or sister chromatids to separate during meiosis, producing gametes with an extra or missing chromosome. It causes Down's (trisomy 21), Klinefelter's (XXY) and Turner's (XO)." },
    { q: "How many gamete types and genotypes arise from a trihybrid cross?", hint: "Powers of 2 and 3.", a: "A trihybrid (AaBbCc) forms 2³ = 8 gamete types. Selfing gives 3³ = 27 genotypes and 2³ = 8 phenotypes in the 27:9:9:9:3:3:3:1 ratio." },
    { q: "How does a Punnett square predict cross outcomes?", hint: "Gametes on the axes.", a: "The possible gametes of each parent are placed on the two axes; each cell combines a row and column gamete to show an offspring genotype. Counting the cells gives the expected genotypic and phenotypic ratios." },
    { q: "Compare a single-gene trait with a polygenic trait.", hint: "Discrete vs continuous.", a: "A single-gene trait shows discrete classes (tall/short) with clear dominance. A polygenic trait (e.g., human height, skin colour) is controlled by several genes whose additive effects, plus environment, give continuous variation and a bell-shaped distribution." },
    { q: "Why did Mendel's laws hold even though chromosomes were unknown to him?", hint: "Factors behave like chromosomes.", a: "Mendel's 'factors' segregate and assort exactly as chromosomes do in meiosis. When Sutton and Boveri later linked factors to chromosome behaviour, the physical basis of his statistical laws became clear." },
    { q: "Explain how linkage is an exception to independent assortment.", hint: "Same chromosome.", a: "Genes on the same chromosome tend to be inherited together (linked) rather than assorting independently, so their dihybrid ratios deviate from 9:3:3:1. Only crossing over separates them, producing recombinants." },
    { q: "How is a pedigree chart constructed and read?", hint: "Symbols and generations.", a: "Squares = males, circles = females, filled = affected, horizontal line = mating, vertical line to offspring; generations are numbered by Roman numerals. Reading it reveals whether a trait is dominant, recessive, autosomal or sex-linked." },
    { q: "Trace colour blindness through a pedigree.", hint: "X-linked recessive.", a: "A carrier mother (X^C X^c) × normal father (X^C Y) gives ½ of sons colour-blind (X^c Y) and ½ of daughters carriers. Affected daughters need a colour-blind father and at least a carrier mother." },
    { q: "Explain incomplete dominance at the level of gene product.", hint: "Enzyme dosage.", a: "In incomplete dominance the heterozygote makes an intermediate amount of product. In snapdragon, one pigment allele gives less pigment than two, so RR is red, rr white and Rr pink — an intermediate phenotype and a 1:2:1 F2 ratio." }
  );

  C.mcqs.push(
    { q: "The probability of obtaining a homozygous recessive (tt) plant from a Tt × Tt cross is:", o: ["1/2", "1/4", "3/4", "1/3"], c: 1, e: "Genotypes are 1 TT : 2 Tt : 1 tt, so tt = 1/4." },
    { q: "A plant of genotype AaBbCc produces how many types of gametes?", o: ["4", "6", "8", "16"], c: 2, e: "2ⁿ = 2³ = 8 gamete types." },
    { q: "The F2 phenotypic ratio of a trihybrid cross is:", o: ["9:3:3:1", "27:9:9:9:3:3:3:1", "1:1:1:1", "3:1"], c: 1, e: "Three independent gene pairs give the 27:9:9:9:3:3:3:1 ratio." },
    { q: "The phenotypic ratio of a dihybrid test cross (RrYy × rryy) is:", o: ["9:3:3:1", "3:1", "1:1:1:1", "1:2:1"], c: 2, e: "All four gamete types meet ry, giving equal 1:1:1:1 classes." },
    { q: "If a carrier woman for colour blindness marries a man with normal vision, the percentage of colour-blind sons expected is:", o: ["0%", "25%", "50%", "100%"], c: 2, e: "Half the sons inherit her X^c and are colour-blind." },
    { q: "The number of Barr bodies in a Klinefelter (XXY) individual is:", o: ["0", "1", "2", "3"], c: 1, e: "Barr bodies = (X count − 1) = 2 − 1 = 1." },
    { q: "The number of Barr bodies in a Turner (XO) individual is:", o: ["0", "1", "2", "3"], c: 0, e: "One X, so 1 − 1 = 0 Barr bodies." },
    { q: "The number of autosomes present in a normal human sperm is:", o: ["44", "23", "22", "46"], c: 2, e: "A gamete is haploid: 22 autosomes + 1 sex chromosome." },
    { q: "Mendel presented his classic paper on inheritance in the year:", o: ["1859", "1866", "1900", "1905"], c: 1, e: "He published in 1866; it was rediscovered in 1900." },
    { q: "A person with the Bombay phenotype has the genotype:", o: ["I^A I^A HH", "hh (I^A/I^B not expressed)", "ii HH", "I^B i hh only"], c: 1, e: "hh blocks the H antigen, so A/B cannot be displayed and the person tests as O." },
    { q: "A cross between a blood group AB parent and a group O parent can give children of group(s):", o: ["Only O", "A and B", "AB and O", "A, B, AB and O"], c: 1, e: "I^A I^B × ii → I^A i (A) and I^B i (B)." },
    { q: "Erythroblastosis foetalis is most likely when:", o: ["Rh⁺ mother carries an Rh⁻ foetus", "Rh⁻ mother carries a second Rh⁺ foetus", "Both parents are Rh⁻", "Mother is Rh⁺ in first pregnancy"], c: 1, e: "A sensitised Rh⁻ mother attacks a later Rh⁺ foetus's RBCs." },
    { q: "The mutation causing sickle-cell haemoglobin changes the codon:", o: ["GAG → GUG", "GUG → GAG", "AUG → GUG", "GAA → GAG"], c: 0, e: "GAG (glutamic acid) → GUG (valine) at position 6 of β-globin." },
    { q: "Holandric genes are located on the:", o: ["X chromosome", "Y chromosome", "Autosomes", "Mitochondrial DNA"], c: 1, e: "They lie on the Y and pass father → all sons." },
    { q: "A colour-blind daughter can be born only if:", o: ["The father is colour-blind and the mother is at least a carrier", "The mother alone is a carrier", "The father alone is colour-blind", "Neither parent carries it"], c: 0, e: "She needs an X^c from each parent, so the father must be affected and the mother a carrier or affected." },
    { q: "The phenotypic ratio of an Aa × aa cross is:", o: ["3:1", "1:2:1", "1:1", "9:3:3:1"], c: 2, e: "Half the offspring are Aa and half aa — a 1:1 ratio." },
    { q: "Two parents of blood group AB can NOT have a child of group:", o: ["A", "B", "AB", "O"], c: 3, e: "Neither parent carries the i allele needed for group O." },
    { q: "Klinefelter's syndrome individuals are:", o: ["Fertile females", "Sterile males with some feminine features", "Fertile males", "Short sterile females"], c: 1, e: "XXY males are typically tall, sterile, with gynaecomastia." },
    { q: "Failure of homologous chromosomes to separate in meiosis is called:", o: ["Crossing over", "Non-disjunction", "Synapsis", "Translocation"], c: 1, e: "Non-disjunction yields gametes with extra/missing chromosomes." },
    { q: "In snapdragon, a cross of pink (Rr) × pink (Rr) gives an F2 phenotypic ratio of:", o: ["3 red : 1 white", "1 red : 2 pink : 1 white", "9:3:3:1", "1 red : 1 white"], c: 1, e: "Incomplete dominance keeps genotype and phenotype ratios identical: 1:2:1." }
  );
})();
