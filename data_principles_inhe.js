/* ====== data_principles_inhe.js ====== */
DATA.chapters.principles_inhe = {
  id: "principles_inhe",
  num: 5,
  title: "Principles of Inheritance & Variation",
  subtitle: "Mendelian genetics, incomplete dominance, codominance, linkage, sex determination, pedigree analysis, and genetic disorders — NCERT Class 12 Chapter 5",
  color: "#ec4899",
  colorD: "#be185d",
  glyph: "🧩",

  notes: [
    {
      id: "mendelian_genetics",
      heading: "Mendelian Genetics",
      html: `
        <p><b>Inheritance</b> is the process by which characters are passed from parent to progeny. <b>Variation</b> is the degree by which progeny differ from their parents. Gregor Mendel conducted hybridisation experiments on garden peas (<i>Pisum sativum</i>) for seven years (1856-1863) and proposed the laws of inheritance.</p>
        
        <h4>1. Mendel's 7 Characters and Contrast Traits</h4>
        <p>Mendel selected 14 true-breeding pea plant varieties showing contrasting traits for 7 characters: stem height (tall/dwarf), flower colour (violet/white), flower position (axial/terminal), pod shape (inflated/constricted), pod colour (green/yellow), seed shape (round/wrinkled), and seed colour (yellow/green).</p>
        
        <h4>2. Monohybrid Cross & Laws of Inheritance</h4>
        <p>A cross involving a single character. Crossing tall (TT) and dwarf (tt) plants yields tall (Tt) F1 progeny. Selfing F1 yields F2 with a <b>3:1 phenotypic ratio</b> (3 Tall : 1 Dwarf) and a <b>1:2:1 genotypic ratio</b> (1 TT : 2 Tt : 1 tt).</p>
        <ul>
          <li><b>Law of Dominance</b>: Characters are controlled by discrete units called factors (genes) that occur in pairs. In a dissimilar pair, one factor dominates (dominant) the other (recessive).</li>
          <li><b>Law of Segregation</b>: Alleles do not show any blending; both characters are recovered in F2. During gamete formation, factors segregate such that a gamete receives only one of the two factors (pure gamete).</li>
        </ul>

        <h4>3. Dihybrid Cross & Law of Independent Assortment</h4>
        <p>A cross involving two characters (e.g., seed shape and colour: Round-Yellow RRYY &times; Wrinkled-Green rryy). F1 is Round-Yellow (RrYy). F2 phenotypic ratio is <b>9:3:3:1</b> (9 Round-Yellow, 3 Round-Green, 3 Wrinkled-Yellow, 1 Wrinkled-Green).</p>
        <ul>
          <li><b>Law of Independent Assortment</b>: When two pairs of traits are combined in a hybrid, segregation of one pair of characters is independent of the other pair.</li>
          <li><b>Test Cross</b>: Crossing an F1 hybrid with the recessive parent to determine the hybrid's genotype (e.g., Tt &times; tt &rarr; 1 Tall : 1 Dwarf).</li>
        </ul>
      `
    },
    {
      id: "deviations_from_mendelism",
      heading: "Deviations from Mendelism",
      html: `
        <h4>1. Incomplete Dominance</h4>
        <p>F1 phenotype does not resemble either of the parents and is intermediate. E.g., flower colour inheritance in Snapdragon (<i>Antirrhinum majus</i>) or 4 o'clock plant (<i>Mirabilis jalapa</i>):</p>
        <ul>
          <li>Red flower (RR) &times; White flower (rr) &rarr; Pink flower (Rr) in F1.</li>
          <li>F2 phenotypic and genotypic ratios are identical: <b>1 Red (RR) : 2 Pink (Rr) : 1 White (rr) (1:2:1)</b>.</li>
        </ul>

        <h4>2. Codominance</h4>
        <p>F1 generation resembles both parents; both alleles express themselves fully. E.g., <b>ABO blood grouping</b> in humans.</p>
        <ul>
          <li>Controlled by gene <i>I</i>, which has three alleles: <i>I<sup>A</sup></i>, <i>I<sup>B</sup></i>, and <i>i</i> (example of **Multiple Allelism**).</li>
          <li><i>I<sup>A</sup></i> and <i>I<sup>B</sup></i> produce different sugars on red blood cells; <i>i</i> produces no sugar.</li>
          <li><i>I<sup>A</sup></i> and <i>I<sup>B</sup></i> are completely dominant over <i>i</i>. When <i>I<sup>A</sup></i> and <i>I<sup>B</sup></i> are present together, both express (Blood Group AB) due to codominance.</li>
        </ul>

        <h4>3. Pleiotropy vs Polygenic Inheritance</h4>
        <ul>
          <li><b>Pleiotropy</b>: A single gene controls multiple phenotypic effects. E.g., <b>Phenylketonuria (PKU)</b>: mutation in the gene coding for phenylalanine hydroxylase enzyme causes mental retardation, hair reduction, and skin pigmentation. Also, starch grain size and seed shape in peas.</li>
          <li><b>Polygenic Inheritance</b>: Multiple genes control a single character, with an additive effect. E.g., human skin colour (controlled by 3 genes A, B, C) and human height.</li>
        </ul>
      `
    },
    {
      id: "chromosomal_theory_linkage",
      heading: "Chromosomal Theory, Linkage & Drosophila",
      html: `
        <h4>1. Chromosomal Theory of Inheritance</h4>
        <p>Proposed by <b>Walter Sutton and Theodore Boveri (1902)</b>. They noted that the behaviour of chromosomes is parallel to the behaviour of genes. Chromosomes segregate and assort independently during meiosis. Experimental verification was provided by **Thomas Hunt Morgan** using the fruit fly (<i>Drosophila melanogaster</i>).</p>
        <p><b>Why Drosophila?</b> Simple synthetic medium growth, short life cycle (~2 weeks), single mating produces many progeny, clear male/female dimorphism, and distinct hereditary variations visible under low power microscope.</p>

        <h4>2. Linkage and Recombination</h4>
        <p>Morgan crossed yellow-bodied, white-eyed females with brown-bodied, red-eyed males (wild type):</p>
        <ul>
          <li>Found that the two genes did not segregate independently; F2 ratio deviated significantly from 9:3:3:1.</li>
          <li><b>Linkage</b>: Physical association of genes on a chromosome. Tightly linked genes show very low recombination (e.g., yellow & white genes = 1.3% recombination). Loosely linked genes show higher recombination (e.g., white & miniature wing genes = 37.2% recombination).</li>
          <li><b>Recombination</b>: Generation of non-parental gene combinations.</li>
          <li><b>Alfred Sturtevant</b> mapped the position of genes on chromosomes using the frequency of recombination between gene pairs as a measure of genetic distance (1% recombination = 1 map unit / centimorgan).</li>
        </ul>
      `
    },
    {
      id: "sex_determination_mutations",
      heading: "Sex Determination & Pedigree Analysis",
      html: `
        <h4>1. Sex Determination Mechanisms</h4>
        <ul>
          <li><b>Male Heterogamety</b>: Male produces two types of gametes.
            <ul>
              <li><b>XX-XY type</b>: Females have XX, males have XY. E.g., Humans, <i>Drosophila</i>.</li>
              <li><b>XX-XO type</b>: Females have XX, males have XO (only one X chromosome). E.g., Grasshopper.</li>
            </ul>
          </li>
          <li><b>Female Heterogamety</b>: Female produces two types of gametes.
            <ul>
              <li><b>ZZ-ZW type</b>: Females have ZW, males have ZZ. E.g., Birds.</li>
            </ul>
          </li>
          <li><b>Haplodiploid System</b>: E.g., Honeybees. Males (drones) are haploid (n = 16) and develop parthenogenetically from unfertilised eggs. Females (queen & workers) are diploid (2n = 32). Drones produce sperms by mitosis; they have no father and cannot have sons, but have a grandfather and grandsons.</li>
        </ul>

        <h4>2. Mutations & Pedigree Analysis</h4>
        <p><b>Mutation</b> is a phenomenon that results in alteration of DNA sequences, leading to changes in genotype and phenotype. A **point mutation** is a single base pair change (e.g., Sickle-cell anemia). **Frameshift mutations** involve insertion/deletions.</p>
        <p><b>Pedigree Analysis</b>: Study of the inheritance of a particular trait over several generations in a family. Autosomal dominant traits do not skip generations (e.g., Myotonic dystrophy). Autosomal recessive traits skip generations and appear in children of unaffected carrier parents (e.g., Sickle-cell anemia).</p>
      `
    },
    {
      id: "genetic_disorders",
      heading: "Genetic Disorders",
      html: `
        <h4>1. Mendelian Disorders (Single-Gene Mutations)</h4>
        <ul>
          <li><b>Haemophilia</b>: X-linked recessive disorder. Blood clotting protein is affected, causing continuous bleeding from minor cuts. Queen Victoria was a carrier.</li>
          <li><b>Sickle-cell Anemia</b>: Autosomal recessive disorder. Point mutation in the &beta;-globin gene at the 6th codon (<b>GAG &rarr; GUG</b>) replaces glutamic acid with **Valine**. Under low oxygen, RBCs become sickle-shaped, blocking capillaries.</li>
          <li><b>Phenylketonuria (PKU)</b>: Autosomal recessive metabolic disorder. Lacks phenylalanine hydroxylase enzyme, which converts phenylalanine to tyrosine. Phenylalanine accumulates and converts to phenylpyruvic acid, causing mental retardation.</li>
          <li><b>Thalassemia</b>: Autosomal recessive blood disorder leading to reduced synthesis of globin chains. Quantitative defect.
            <ul>
              <li><b>Alpha-Thalassemia</b>: Controlled by two closely linked genes **HBA1 and HBA2** on chromosome 16.</li>
              <li><b>Beta-Thalassemia</b>: Controlled by a single gene **HBB** on chromosome 11.</li>
            </ul>
          </li>
          <li><b>Colorblindness</b>: X-linked recessive defect in red or green cone cells of retina.</li>
        </ul>

        <h4>2. Chromosomal Disorders (Aneuploidy)</h4>
        <p>Caused by excess or lack of one or more chromosomes due to failure of chromatid segregation during cell division.</p>
        <table class="cmp">
          <thead>
            <tr><th>Disorder</th><th>Karyotype</th><th>Key Features</th></tr>
          </thead>
          <tbody>
            <tr><td><b>Down's Syndrome</b></td><td>Trisomy 21 (47, +21)</td><td>Short stature, round head, furrowed tongue, partially open mouth, mental retardation. Described by Langdon Down (1866).</td></tr>
            <tr><td><b>Klinefelter's Syndrome</b></td><td>47, XXY</td><td>Karyotype has an extra X. Sterile male with feminine development (gynaecomastia - breast development) and tall stature.</td></tr>
            <tr><td><b>Turner's Syndrome</b></td><td>45, XO</td><td>Monosomy of X. Sterile female with rudimentary ovaries, webbed neck, and lack of secondary sexual characters.</td></tr>
          </tbody>
        </table>
      `
    }
  ],

  mnemonics: [
    {
      title: "Mendelian Disorders",
      device: "<b>H**appy **S**ick **T**urtles **P**erform **C**leverly",
      expand: [
        { L: "H", t: "Haemophilia (X-linked recessive)" },
        { L: "S", t: "Sickle-cell Anemia (Autosomal recessive)" },
        { L: "T", t: "Thalassemia (Autosomal recessive, quantitative)" },
        { L: "P", t: "Phenylketonuria (PKU) (Autosomal recessive)" },
        { L: "C", t: "Cystic Fibrosis (Autosomal recessive)" }
      ]
    },
    {
      title: "Klinefelter vs Turner Chromosome Count",
      device: "<b>K**linefelter is **K**rowded; **T**urner is **T**hin",
      expand: [
        { L: "Krowded", t: "Klinefelter has 47 chromosomes (XXY) - an extra chromosome" },
        { L: "Thin", t: "Turner has 45 chromosomes (XO) - missing a chromosome" }
      ]
    },
    {
      title: "Sex Determination Heterogamety",
      device: "<b>M**ale is **Y**-O, **F**emale is **W**",
      expand: [
        { L: "Male is Y-O", t: "Male heterogamety is XY (Humans/Drosophila) or XO (Grasshopper)" },
        { L: "Female is W", t: "Female heterogamety is ZW (Birds) - female is ZW, male is ZZ" }
      ]
    }
  ],

  flashcards: [
    { front: "What is the scientific name of the garden pea Mendel studied, and for how long?", back: "Pisum sativum, studied for 7 years (1856-1863)." },
    { front: "What are the monohybrid phenotypic and genotypic ratios in the F2 generation?", back: "Phenotypic ratio = 3:1 (Dominant:Recessive). Genotypic ratio = 1:2:1 (Homozygous Dominant : Heterozygous : Homozygous Recessive)." },
    { front: "Define a test cross and its purpose.", back: "Crossing an organism of dominant phenotype but unknown genotype with a homozygous recessive parent. Determines if the dominant organism is homozygous or heterozygous." },
    { front: "State Mendel's Law of Segregation.", back: "Allelic pairs segregate during gamete formation, and each gamete receives only one allele. No blending of alleles occurs." },
    { front: "Explain flower colour inheritance in Snapdragon (Antirrhinum majus).", back: "An example of incomplete dominance. Crossing Red (RR) and White (rr) flowers produces Pink (Rr) F1 flowers. F2 phenotypic ratio is 1 Red : 2 Pink : 1 White (1:2:1)." },
    { front: "Which human blood group shows codominance, and which genes control it?", back: "Blood group AB shows codominance. Controlled by gene I, where alleles I<sup>A</sup> and I<sup>B</sup> are codominant and both express their sugars." },
    { front: "What is pleiotropy? Give an example.", back: "A single gene affecting multiple phenotypic traits. E.g., Phenylketonuria (PKU) which affects tyrosine conversion, causing mental retardation, skin depigmentation, and hair loss." },
    { front: "Differentiate between polygenic inheritance and multiple alleles.", back: "Polygenic: multiple genes control 1 trait (e.g., human skin color). Multiple alleles: more than 2 alleles of the same gene exist in a population (e.g., ABO blood groups)." },
    { front: "Who proposed the Chromosomal Theory of Inheritance, and in which year?", back: "Walter Sutton and Theodore Boveri in 1902." },
    { front: "Why did Thomas Hunt Morgan select Drosophila melanogaster for genetic studies?", back: "Simple synthetic medium growth, short 2-week life cycle, high progeny number, clear male/female dimorphism, and distinct visible mutations." },
    { front: "What is genetic linkage, and who first identified it?", back: "Physical association of genes on the same chromosome that tend to be inherited together. Discovered by Thomas Hunt Morgan in Drosophila." },
    { front: "How did Alfred Sturtevant construct the first genetic map?", back: "He used the frequency of recombination between gene pairs on a chromosome as a measure of the distance between them (1% recombination = 1 map unit)." },
    { front: "Explain sex determination in grasshoppers.", back: "XX-XO mechanism of male heterogamety. Females have 22 autosomes + XX. Males have 22 autosomes + a single X chromosome (XO). Sperms either have X or no sex chromosome." },
    { front: "How is sex determined in birds?", back: "ZZ-ZW mechanism of female heterogamety. Males are ZZ (homogametic). Females are ZW (heterogametic, producing two types of eggs: Z or W)." },
    { front: "Describe haplodiploid sex determination in honeybees.", back: "Males (drones) are haploid (n=16) and develop from unfertilised eggs. Females (queens/workers) are diploid (2n=32) and develop from fertilised eggs." },
    { front: "What is the exact amino acid substitution that causes Sickle-cell Anemia?", back: "Glutamic acid is replaced by Valine at the 6th position of the &beta;-globin chain of haemoglobin, caused by a point mutation (GAG &rarr; GUG)." },
    { front: "What enzyme deficiency causes Phenylketonuria (PKU), and what accumulates?", back: "Deficiency of phenylalanine hydroxylase. Phenylalanine accumulates and converts to phenylpyruvic acid." },
    { front: "Differentiate between alpha and beta thalassemia.", back: "Alpha: reduced alpha-globin synthesis, controlled by HBA1/HBA2 on chromosome 16. Beta: reduced beta-globin synthesis, controlled by HBB on chromosome 11." },
    { front: "Describe the karyotype and clinical features of Down's Syndrome.", back: "Karyotype is Trisomy 21 (47, +21). Features: short stature, furrowed tongue, partially open mouth, flat back of head, and mental retardation." },
    { front: "State the karyotypes of Klinefelter's and Turner's syndromes.", back: "Klinefelter's = 47, XXY (sterile male with gynaecomastia). Turner's = 45, XO (sterile female with rudimentary ovaries)." }
  ],

  recall: [
    {
      q: "Explain the inheritance of ABO blood groups in humans.",
      hint: "Gene I, multiple alleles, codominance, IA, IB, i",
      a: "ABO blood grouping is controlled by gene <i>I</i>, which has three alleles: <i>I<sup>A</sup></i>, <i>I<sup>B</sup></i>, and <i>i</i> (Multiple Allelism). <i>I<sup>A</sup></i> and <i>I<sup>B</sup></i> produce slightly different sugar polymers, while <i>i</i> produces none. <i>I<sup>A</sup></i> and <i>I<sup>B</sup></i> are completely dominant over <i>i</i>. When an individual inherits <i>I<sup>A</sup></i> and <i>I<sup>B</sup></i> together, both express themselves (Codominance), resulting in blood group AB. There are 6 genotypes and 4 phenotypes (A, B, AB, O)."
    },
    {
      q: "Discuss Morgan's linkage experiments in Drosophila and their significance.",
      hint: "Yellow-white vs white-miniature, parental types, recombination frequency",
      a: "T.H. Morgan crossed yellow-bodied, white-eyed females with brown-bodied, red-eyed males. He found the F2 progeny deviated from the expected 9:3:3:1 ratio because the genes were on the X chromosome. Cross I (yellow and white genes) showed 98.7% parental types and only 1.3% recombinant types, indicating tight linkage. Cross II (white and miniature wing genes) showed 62.8% parental and 37.2% recombinants, showing loose linkage. This proved physical proximity determines recombination frequency."
    },
    {
      q: "Describe sex determination in honeybees and the unique genealogical relationship it creates.",
      hint: "Haploid male, diploid female, no father or sons, grandfather",
      a: "Honeybees show haplodiploid sex determination. Unfertilised eggs develop into haploid males (drones, n=16) by parthenogenesis. Fertilised eggs develop into diploid females (queens or workers, 2n=32). Drones produce sperms by mitosis. Because males are haploid and develop from unfertilised eggs, they have no father and cannot have sons. However, they have a grandfather (since their mother had a father) and can have grandsons."
    },
    {
      q: "Explain the biochemical and genetic basis of Phenylketonuria.",
      hint: "Autosomal recessive, phenylalanine hydroxylase, phenylpyruvic acid, brain accumulation",
      a: "Phenylketonuria (PKU) is an autosomal recessive metabolic disorder. The affected individual lacks the liver enzyme <b>phenylalanine hydroxylase</b>, which normally converts the amino acid phenylalanine into tyrosine. Due to this deficiency, phenylalanine accumulates in the blood and body fluids. It is converted into <b>phenylpyruvic acid</b> and other derivatives. The accumulation of these substances in the brain leads to mental retardation; they are also excreted in urine due to poor kidney reabsorption."
    },
    {
      q: "Compare the genetic causes, karyotypes, and symptoms of Klinefelter's and Turner's syndromes.",
      hint: "XXY vs XO, sterile male vs female, gynaecomastia vs rudimentary ovaries",
      a: "<b>Klinefelter's Syndrome</b>: Caused by the addition of an X chromosome, resulting in karyotype <b>47, XXY</b>. Symptoms: sterile male, overall masculine development but with feminine features like breast development (gynaecomastia) and tall stature. <b>Turner's Syndrome</b>: Caused by the loss of an X chromosome, resulting in karyotype <b>45, XO</b>. Symptoms: sterile female, rudimentary ovaries, webbed neck, lack of secondary sexual characters, and short stature."
    }
  ],

  mcqs: [
    {
      q: "Mendel's monohybrid genotypic ratio in F2 is:",
      o: ["3:1", "9:3:3:1", "1:2:1", "1:1:1:1"],
      c: 2,
      e: "In Mendel's monohybrid cross, selfing F1 (Tt &times; Tt) produces F2 generation with 1 TT : 2 Tt : 1 tt, yielding a genotypic ratio of 1:2:1. The phenotypic ratio is 3:1."
    },
    {
      q: "In Snapdragon, a cross between pink-flowered plants (Rr x Rr) will produce:",
      o: ["All pink flowers", "25% red, 50% pink, 25% white", "50% red, 50% white", "75% red, 25% white"],
      c: 1,
      e: "Snapdragon shows incomplete dominance. Crossing two pink heterozygotes (Rr &times; Rr) produces 1 Red (RR) : 2 Pink (Rr) : 1 White (rr), which matches the 25% Red, 50% Pink, 25% White ratio."
    },
    {
      q: "A person with blood group AB has which alleles on their red blood cell membrane?",
      o: ["Only allele A", "Only allele B", "Both alleles A and B", "Neither allele A nor B"],
      c: 2,
      e: "Blood group AB displays codominance. The individual has genotype I<sup>A</sup>I<sup>B</sup>, and both alleles express their specific sugar polymers on the RBC surface."
    },
    {
      q: "The physical association of genes on a chromosome is called:",
      o: ["Recombination", "Linkage", "Mutation", "Polyploidy"],
      c: 1,
      e: "Linkage is the physical association of genes on the same chromosome, which keeps them inherited together, as described by T.H. Morgan."
    },
    {
      q: "Which of the following organisms shows female heterogamety?",
      o: ["Humans", "Drosophila", "Birds", "Grasshoppers"],
      c: 2,
      e: "In birds, the female has ZW sex chromosomes (heterogametic, producing eggs with Z or W), while males have ZZ sex chromosomes (homogametic)."
    },
    {
      q: "In honeybees, a male drone has how many chromosomes?",
      o: ["16", "32", "8", "46"],
      c: 0,
      e: "Male drones develop parthenogenetically from unfertilised eggs and are haploid, having 16 chromosomes (n=16). Females are diploid (2n=32)."
    },
    {
      q: "What is the genetic defect behind Beta-Thalassemia?",
      o: ["Defect in HBA1 gene on Chromosome 16", "Defect in HBB gene on Chromosome 11", "Trisomy of Chromosome 21", "Point mutation GAG to GUG on Chromosome 16"],
      c: 1,
      e: "Beta-Thalassemia is an autosomal recessive disorder caused by mutation of the HBB gene on chromosome 11, leading to reduced synthesis of beta-globin chains."
    },
    {
      q: "A sterile female with rudimentary ovaries and short stature most likely has:",
      o: ["Down's Syndrome", "Klinefelter's Syndrome", "Turner's Syndrome", "Edward's Syndrome"],
      c: 2,
      e: "Turner's syndrome is caused by monosomy of the X chromosome (45, XO), which manifests as a sterile female with rudimentary ovaries, lack of secondary sexual characters, and webbed neck."
    }
  ],

  match: [
    { term: "Garden Pea", def: "Pisum sativum studied by Mendel" },
    { term: "Test Cross", def: "Dominant phenotype x Recessive parent" },
    { term: "Snapdragon", def: "Incomplete dominance flower colour" },
    { term: "ABO Blood Group", def: "Multiple alleles & codominance example" },
    { term: "Sutton & Boveri", def: "Proposed Chromosomal Theory of Inheritance" },
    { term: "Morgan", def: "Experimental proof of linkage in Drosophila" },
    { term: "Drones", def: "Haploid male honeybees (n=16)" },
    { term: "Valine replacing Glutamate", def: "Sickle-cell anemia at 6th beta-globin position" },
    { term: "Trisomy 21", def: "Down's syndrome chromosomal anomaly" },
    { term: "47, XXY", def: "Klinefelter's sterile male karyotype" }
  ],

  pathways: [
    {
      title: "Mendelian Cross Progression",
      prompt: "Order the stages of a standard monohybrid cross.",
      steps: [
        "Select homozygous tall (TT) and dwarf (tt) parents",
        "Perform cross-pollination to obtain F1 seeds",
        "Grow F1 seeds to find all progeny are Tall (Tt)",
        "Allow F1 plants to undergo self-pollination",
        "Collect F2 seeds and grow them",
        "Observe 3:1 ratio of Tall to Dwarf plants in F2"
      ]
    },
    {
      title: "Drosophila Linkage Mapping Workflow",
      prompt: "Order the steps Sturtevant used to map genes on chromosomes.",
      steps: [
        "Perform dihybrid crosses for linked genes in Drosophila",
        "Calculate the recombination frequency between gene pairs",
        "Define 1% recombination frequency as 1 centimorgan map unit",
        "Determine the relative linear order of genes based on distance",
        "Construct a chromosome map showing gene positions"
      ]
    }
  ]
};
