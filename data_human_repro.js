/* ====== data_human_repro.js ====== */
DATA.chapters.human_repro = {
  id: "human_repro",
  num: 3,
  title: "Human Reproduction",
  subtitle: "Male and female reproductive systems, gametogenesis, menstrual cycle, fertilisation, implantation, pregnancy, and lactation — NCERT Class 12 Chapter 2",
  color: "#3b82f6",
  colorD: "#1d4ed8",
  glyph: "👶",

  notes: [
    {
      id: "male_reproductive_system",
      heading: "Male Reproductive System",
      html: `
        <p>Located in the pelvis region. Comprises a pair of testes, accessory ducts, accessory glands, and external genitalia.</p>
        
        <h4>1. Testes & Scrotum</h4>
        <ul>
          <li>Testes are situated outside the abdominal cavity within a pouch called the <b>scrotum</b>, which maintains a low temperature (<b>2–2.5°C lower</b> than internal body temperature) necessary for **spermatogenesis**.</li>
          <li>Each testis has about <b>250 testicular lobules</b>. Each lobule contains <b>1 to 3 highly coiled seminiferous tubules</b>.</li>
          <li><b>Seminiferous tubules</b> are lined with:
            <ul>
              <li><b>Male germ cells (Spermatogonia)</b>: Undergo meiosis to form sperms.</li>
              <li><b>Sertoli cells</b>: Provide nutrition to the dividing germ cells.</li>
            </ul>
          </li>
          <li><b>Leydig cells (Interstitial cells)</b>: Located outside the tubules; synthesise and secrete testicular hormones called **androgens (testosterone)**.</li>
        </ul>
        
        <h4>2. Accessory Ducts & Glands</h4>
        <ul>
          <li><b>Duct pathway</b>: Seminiferous tubules &rarr; <b>Rete testis</b> &rarr; <b>Vasa efferentia</b> &rarr; <b>Epididymis</b> (stores sperms) &rarr; <b>Vas deferens</b> &rarr; joins duct from seminal vesicle &rarr; **Ejaculatory duct** &rarr; Urethra.</li>
          <li><b>Accessory Glands</b>: Paired **Seminal vesicles**, a single **Prostate gland**, and paired **Bulbourethral (Cowper's) glands**.</li>
          <li>Secretions form **seminal plasma**, which is rich in **fructose, calcium, and certain enzymes**. Bulbourethral secretions also help in lubricating the penis.</li>
        </ul>
      `
    },
    {
      id: "female_reproductive_system",
      heading: "Female Reproductive System",
      html: `
        <p>Comprises a pair of ovaries, accessory ducts (fallopian tubes, uterus, vagina), external genitalia, and mammary glands.</p>
        
        <h4>1. Ovaries & Fallopian Tubes</h4>
        <ul>
          <li>Ovaries are the primary female sex organs producing the **ovum** and ovarian hormones (estrogen, progesterone).</li>
          <li><b>Fallopian tubes (10–12 cm long)</b>:
            <ul>
              <li><b>Infundibulum</b>: Funnel-shaped part closest to the ovary. Has finger-like projections called <b>fimbriae</b> to collect the ovum after ovulation.</li>
              <li><b>Ampulla</b>: Wider middle part where **fertilisation** takes place.</li>
              <li><b>Isthmus</b>: Narrow end joining the uterus.</li>
            </ul>
          </li>
        </ul>

        <h4>2. Uterus (Womb)</h4>
        <p>Inverted pear-shaped organ. Its wall consists of three layers:</p>
        <ul>
          <li><b>Perimetrium</b>: Outer thin membranous layer.</li>
          <li><b>Myometrium</b>: Middle thick layer of smooth muscle; exhibits strong contractions during parturition.</li>
          <li><b>Endometrium</b>: Inner glandular layer lining the cavity; undergoes cyclical changes during the menstrual cycle.</li>
        </ul>

        <h4>3. Mammary Glands</h4>
        <p>Glandular tissue divided into <b>15–20 mammary lobes</b> containing clusters of cells called <b>alveoli</b> which secrete milk. Pathway of milk: Alveoli &rarr; mammary tubules &rarr; mammary duct &rarr; mammary ampulla &rarr; **lactiferous duct** &rarr; expressed at the nipple.</p>
      `
    },
    {
      id: "gametogenesis",
      heading: "Gametogenesis (Spermatogenesis & Oogenesis)",
      html: `
        <h4>1. Spermatogenesis (Starts at Puberty)</h4>
        <p>Triggered by Hypothalamic **GnRH**, which stimulates anterior pituitary to release **LH** (stimulates Leydig cells to secrete androgens) and **FSH** (stimulates Sertoli cells to release factors helping spermiogenesis).</p>
        <div class="flow">
          <span class="step">Spermatogonia (2n, 46)</span><span class="arr">─Mitosis─&gt;</span>
          <span class="step">Primary Spermatocyte (2n)</span><span class="arr">─Meiosis I─&gt;</span>
          <span class="step">Secondary Spermatocyte (n, 23)</span><span class="arr">─Meiosis II─&gt;</span>
          <span class="step">Spermatids (n)</span><span class="arr">─Spermiogenesis─&gt;</span>
          <span class="step">Spermatozoa (n)</span>
        </div>
        <ul>
          <li><b>Spermiogenesis</b>: Transformation of spermatids into spermatozoa (sperms).</li>
          <li><b>Spermiation</b>: Release of sperms from Sertoli cells into the seminiferous tubule lumen.</li>
          <li><b>Sperm Structure</b>: Head (haploid nucleus + cap-like **acrosome** containing enzymes for egg entry), Neck, Middle piece (with many **mitochondria** providing energy for tail movement), and Tail.</li>
        </ul>

        <h4>2. Oogenesis (Starts in Fetal Life)</h4>
        <p>Markedly different from spermatogenesis. Couple of million **oogonia** are formed in fetal ovaries; no more form after birth.</p>
        <ul>
          <li>Oogonia start meiosis I and get arrested at Prophase I as **primary oocytes**.</li>
          <li>Primary oocyte + granulosa cells = **primary follicle**. Large numbers degenerate from birth to puberty; only **60,000–80,000 primary follicles** remain in each ovary at puberty.</li>
          <li>Follicular progression: Primary follicle &rarr; Secondary follicle &rarr; Tertiary follicle (characterised by a fluid-filled cavity called **antrum**).</li>
          <li>Within the tertiary follicle, the primary oocyte completes meiosis I (unequal division) to form a large haploid **secondary oocyte** and a tiny **first polar body**.</li>
          <li>Tertiary follicle matures into a **Graafian follicle**. The secondary oocyte forms a new membrane called **zona pellucida**.</li>
          <li>Graafian follicle ruptures to release the secondary oocyte (ovum) during **ovulation**.</li>
        </ul>
      `
    },
    {
      id: "menstrual_cycle",
      heading: "Menstrual Cycle",
      html: `
        <p>Reproductive cycle in female primates (monkeys, apes, humans). Repeated at an average interval of **28/29 days**.</p>
        
        <h4>Phases of Menstrual Cycle</h4>
        <ol>
          <li><b>Menstrual Phase (Days 1–5)</b>: Breakdown of the endometrial lining and blood vessels occurs due to low progesterone. Menstrual flow lasts 3-5 days.</li>
          <li><b>Follicular/Proliferative Phase (Days 6–13)</b>: Primary follicles mature into Graafian follicles; endometrium regenerates through proliferation. Induced by increasing estrogen and gonadotropins (LH/FSH).</li>
          <li><b>Ovulatory Phase (Day 14)</b>: LH and FSH attain peak levels. A rapid rise in LH (called **LH surge**) causes the Graafian follicle to rupture and release the secondary oocyte (ovulation).</li>
          <li><b>Luteal/Secretory Phase (Days 15–28)</b>: Remnants of the Graafian follicle transform into the **corpus luteum**, which secretes large amounts of **progesterone** (essential for maintaining the endometrium for implantation).</li>
        </ol>
        <p>In the absence of fertilisation, the corpus luteum degenerates, causing endometrial disintegration and marking the start of a new cycle. **Menarche** is the first cycle at puberty; **Menopause** is the permanent cessation of menstrual cycles (~50 years of age).</p>
      `
    },
    {
      id: "fertilisation_pregnancy",
      heading: "Fertilisation, Implantation & Pregnancy",
      html: `
        <h4>1. Fertilisation</h4>
        <p>Occurs in the <b>ampullary region</b> of the fallopian tube. Sperm comes in contact with the <b>zona pellucida</b> layer of the ovum, inducing changes that block polyspermy. Acrosome enzymes help sperm penetrate the cytoplasm, triggering the secondary oocyte to complete meiosis II (unequal division, forming a second polar body and haploid ootid/ovum). Fusion of nuclei forms the diploid **zygote**.</p>

        <h4>2. Cleavage & Implantation</h4>
        <p>As the zygote moves towards the uterus, it undergoes mitotic divisions called **cleavage** to form 2, 4, 8, 16 blastomeres.</p>
        <ul>
          <li>Embryo with 8–16 blastomeres is a **morula**.</li>
          <li>Morula transforms into a **blastocyst**. The blastomeres are arranged into an outer layer called **trophoblast** and an inner group called **inner cell mass**.</li>
          <li>Trophoblast attaches to the endometrium, and the inner cell mass differentiates into the embryo. Blastocyst gets embedded in the endometrium (**implantation**).</li>
        </ul>

        <h4>3. Pregnancy & Hormones</h4>
        <p>After implantation, trophoblast forms **chorionic villi** which, with uterine tissue, form the **placenta** (vascular connection between mother and fetus). The placenta acts as an endocrine tissue, secreting:</p>
        <ul>
          <li>Human chorionic gonadotropin (<b>hCG</b>)</li>
          <li>Human placental lactogen (<b>hPL</b>)</li>
          <li>Estrogens and Progestogens</li>
          <li>Relaxin (secreted by the ovary in later phases)</li>
        </ul>
        <div class="callout"><b>Pregnancy-Specific Hormones:</b> hCG, hPL, and relaxin are produced in women <b>only during pregnancy</b>. They are used in pregnancy test kits.</div>

        <h4>4. Parturition & Lactation</h4>
        <ul>
          <li><b>Parturition</b> (childbirth): Induced by a neuroendocrine mechanism. Developed fetus + placenta trigger **fetal ejection reflex**, causing maternal pituitary to release **oxytocin**, which stimulates strong uterine contractions.</li>
          <li><b>Lactation</b>: Mammary glands produce milk. The milk produced during the initial few days is called **colostrum** and is rich in **IgA antibodies**, essential for infant immunity.</li>
        </ul>
      `
    }
  ],

  mnemonics: [
    {
      title: "Male Duct Pathway",
      device: "<b>S**evere **R**ats **E**at **E**very **V**eggie **U**nderneath",
      expand: [
        { L: "S", t: "Seminiferous tubules" },
        { L: "R", t: "Rete testis" },
        { L: "E", t: "Efferent ducts (Vasa efferentia)" },
        { L: "E", t: "Epididymis" },
        { L: "V", t: "Vas deferens" },
        { L: "U", t: "Urethra" }
      ]
    },
    {
      title: "Uterine Wall Layers (Outer to Inner)",
      device: "<b>P**lease **M**ake **E**ntry",
      expand: [
        { L: "P", t: "Perimetrium (outer, thin)" },
        { L: "M", t: "Myometrium (middle, muscular, contracts during birth)" },
        { L: "E", t: "Endometrium (inner, glandular, changes monthly)" }
      ]
    },
    {
      title: "Pregnancy-Only Hormones",
      device: "<b>H**appy **H**ealthy **R**elationship",
      expand: [
        { L: "H", t: "hCG (human Chorionic Gonadotropin)" },
        { L: "H", t: "hPL (human Placental Lactogen)" },
        { L: "R", t: "Relaxin" }
      ]
    }
  ],

  flashcards: [
    { front: "What is the function of the scrotum in the male reproductive system?", back: "It holds the testes outside the abdominal cavity to maintain their temperature 2–2.5°C lower than normal body temperature, which is essential for spermatogenesis." },
    { front: "How many testicular lobules are present in a testis, and what do they contain?", back: "About 250 testicular lobules per testis, each containing 1 to 3 highly coiled seminiferous tubules." },
    { front: "Which cells in the testes secrete testosterone?", back: "Leydig cells (interstitial cells), located in the spaces outside the seminiferous tubules." },
    { front: "What is the location of sperm maturation and storage in the male tract?", back: "The epididymis, located along the posterior surface of each testis." },
    { front: "List the components of the male accessory glands.", back: "Paired seminal vesicles, a single prostate gland, and paired bulbourethral (Cowper's) glands." },
    { front: "What are the three sections of the fallopian tube (oviduct)?", back: "Infundibulum (funnel-shaped, with fimbriae), Ampulla (wider middle part), and Isthmus (narrow part joining the uterus)." },
    { front: "Differentiate between myometrium and endometrium functions.", back: "Myometrium (smooth muscle) contracts strongly to expel the baby during birth. Endometrium (glandular layer) undergoes monthly cyclic changes and sheds during menstruation." },
    { front: "How many primary follicles are left in each ovary at puberty?", back: "Only 60,000 to 80,000 primary follicles (the rest degenerate between birth and puberty)." },
    { front: "What is the antrum?", back: "The fluid-filled cavity that characterises a tertiary follicle during follicular development in the ovary." },
    { front: "Define spermiogenesis and spermiation.", back: "Spermiogenesis: transformation of spermatids into spermatozoa (sperms). Spermiation: release of mature sperms from Sertoli cells into the seminiferous tubule lumen." },
    { front: "Describe the structure and purpose of the acrosome.", back: "A cap-like structure covering the anterior portion of the sperm head, filled with hydrolytic enzymes that help the sperm penetrate the egg's zona pellucida." },
    { front: "What hormone surge triggers ovulation and on which day of a typical cycle?", back: "LH surge (Luteinising Hormone) triggers ovulation on day 14 of a 28-day menstrual cycle." },
    { front: "What is the corpus luteum and what does it secrete?", back: "A yellow endocrine structure formed from the ruptured Graafian follicle remnants; it secretes large amounts of progesterone to maintain the endometrium." },
    { front: "Where does fertilisation normally take place in the female reproductive tract?", back: "In the ampullary region of the fallopian tube (oviduct)." },
    { front: "What is a morula?", back: "A solid ball of 8 to 16 blastomeres formed by early cleavage divisions of the zygote." },
    { front: "What is the blastocyst and its two cellular regions?", back: "A hollow ball of cells composed of an outer trophoblast layer (attaches to the endometrium) and an inner cell mass (develops into the embryo)." },
    { front: "Name the hormones secreted exclusively during pregnancy in women.", back: "human Chorionic Gonadotropin (hCG), human Placental Lactogen (hPL), and Relaxin." },
    { front: "What is the fetal ejection reflex?", back: "Mild uterine contractions triggered by signals from the fully developed fetus and placenta, which initiate labor." },
    { front: "What is colostrum and why is it important?", back: "The yellowish milk produced during the first few days of lactation; it contains abundant IgA antibodies that provide passive immunity to the newborn." }
  ],

  recall: [
    {
      q: "Outline the steps and cell stages of spermatogenesis.",
      hint: "puberty, mitosis, primary oocyte/spermatocyte, meiosis I & II, spermiogenesis",
      a: "Spermatogenesis starts at puberty: 1. <b>Spermatogonia</b> (2n, 46 chromosomes) on the inner wall of seminiferous tubules multiply by mitosis. 2. Some differentiate into <b>Primary spermatocytes</b> (2n). 3. Primary spermatocytes undergo meiosis I (reduction) to form two equal, haploid <b>Secondary spermatocytes</b> (n, 23). 4. These undergo meiosis II to form four haploid <b>Spermatids</b> (n). 5. Spermatids transform into <b>Spermatozoa</b> (sperms) via spermiogenesis."
    },
    {
      q: "Explain oogenesis and contrast its initiation timeline with spermatogenesis.",
      hint: "embryonic stage, birth arrest, puberty count, tertiary follicle, secondary oocyte",
      a: "Oogenesis begins in the fetal embryonic stage where a couple million <b>oogonia</b> are formed; no more form after birth. They start meiosis I and get arrested at prophase I as <b>Primary oocytes</b>. By puberty, follicle degeneration leaves only 60k-80k primary follicles. In a tertiary follicle (with antrum), the primary oocyte completes meiosis I to form a large haploid <b>Secondary oocyte</b> and a tiny first polar body. Oogenesis only completes meiosis II if a sperm fertilises the secondary oocyte, whereas spermatogenesis runs continuously from puberty."
    },
    {
      q: "Describe the hormonal regulation and uterine changes in the four phases of the menstrual cycle.",
      hint: "menstrual, proliferative, luteal, progesterone, LH surge, ovulation",
      a: "1. <b>Menstrual Phase</b> (days 1-5): Low progesterone leads to endometrial shedding. 2. <b>Follicular/Proliferative Phase</b> (days 6-13): Estrogen from growing follicles regenerates the endometrium. Pituitary FSH and LH rise. 3. <b>Ovulatory Phase</b> (day 14): LH peak (LH surge) triggers Graafian follicle rupture, releasing the egg. 4. <b>Luteal Phase</b> (days 15-28): Corpus luteum secretes progesterone to maintain the endometrium. If no pregnancy, corpus luteum degenerates, progesterone drops, and a new cycle starts."
    },
    {
      q: "Detail the steps of fertilisation and how polyspermy is prevented.",
      hint: "ampulla, contact, zona pellucida, depolarization, meiosis II completion",
      a: "Fertilisation occurs in the ampulla of the fallopian tube. 1. Sperm contacts the <b>zona pellucida</b> layer of the secondary oocyte. 2. This contact induces chemical/structural changes in the membrane, depolarising it and blocking additional sperms (blocks polyspermy). 3. Acrosome enzymes help the sperm enter the cytoplasm. 4. This entry triggers the secondary oocyte to complete its arrested meiosis II, yielding a second polar body and a haploid egg nucleus, which fuses with the sperm nucleus to form the zygote."
    },
    {
      q: "Explain the role of the placenta as an endocrine gland and list the hormones it secretes.",
      hint: "villi, hCG, hPL, pregnancy maintenance",
      a: "The placenta acts as a temporary endocrine tissue in pregnant women. It synthesises and secretes: 1. <b>hCG</b> (human chorionic gonadotropin): maintains the corpus luteum so it continues secreting progesterone. 2. <b>hPL</b> (human placental lactogen): regulates maternal metabolism to support fetal growth. 3. <b>Estrogen and Progesterone</b>: maintain the endometrial lining and prevent menstruation. These hormones support fetal growth and maintain the pregnancy."
    }
  ],

  mcqs: [
    {
      q: "Testicular lobules contain seminiferous tubules lined by male germ cells and which of the following?",
      o: ["Leydig cells", "Sertoli cells", "Chromaffin cells", "Interstitial cells"],
      c: 1,
      e: "Seminiferous tubules are lined on the inside by spermatogonia (male germ cells) and Sertoli cells. Sertoli cells provide structural support and nutrition to the germ cells."
    },
    {
      q: "The secretions of bulbourethral glands primarily aid in:",
      o: ["Providing energy to sperms", "Lubrication of the penis", "Immunological protection", "Stimulating uterine contractions"],
      c: 1,
      e: "The paired bulbourethral (Cowper's) glands secrete mucus that helps in the lubrication of the penis during intercourse."
    },
    {
      q: "At puberty, how many primary follicles are left in each ovary?",
      o: ["2 million", "60,000–80,000", "10,000", "500,000"],
      c: 1,
      e: "Although a female is born with millions of primary follicles, a large number degenerate between birth and puberty, leaving only 60,000 to 80,000 in each ovary at puberty."
    },
    {
      q: "The fluid-filled cavity called antrum is a characteristic feature of:",
      o: ["Primary follicle", "Secondary follicle", "Tertiary follicle", "Corpus luteum"],
      c: 2,
      e: "As a secondary follicle matures into a tertiary follicle, it develops a fluid-filled cavity called the antrum, and its theca divides into interna and externa layers."
    },
    {
      q: "Which hormone surge causes the rupture of Graafian follicle and release of ovum?",
      o: ["FSH surge", "LH surge", "Progesterone surge", "Estrogen surge"],
      c: 1,
      e: "Around the middle of the menstrual cycle (day 14), LH attains its peak level (LH surge), which induces the rupture of the Graafian follicle and release of the secondary oocyte."
    },
    {
      q: "Which hormone is essential for the maintenance of the endometrium?",
      o: ["FSH", "LH", "Estrogen", "Progesterone"],
      c: 3,
      e: "Progesterone, secreted in large amounts by the corpus luteum during the luteal phase, is responsible for maintaining the thick glandular endometrium required for implantation."
    },
    {
      q: "In human females, meiosis II is completed only when:",
      o: ["Puberty is reached", "Ovulation occurs", "Sperm enters the ovum", "Implantation takes place"],
      c: 2,
      e: "The secondary oocyte is arrested in metaphase II. It completes meiosis II only when the sperm successfully penetrates the egg's plasma membrane, yielding a second polar body and zygote."
    },
    {
      q: "The outer layer of the blastocyst that attaches to the endometrium is called:",
      o: ["Inner cell mass", "Trophoblast", "Chorion", "Amnion"],
      c: 1,
      e: "The blastocyst consists of an outer layer of cells called the trophoblast (which attaches to the uterine wall) and an inner cell mass (which develops into the embryo)."
    }
  ],

  match: [
    { term: "Scrotum", def: "Maintains testicular temperature 2-2.5°C lower" },
    { term: "Leydig cells", def: "Secrete testicular androgens (testosterone)" },
    { term: "Fimbriae", def: "Finger-like projections on fallopian tube" },
    { term: "Spermiation", def: "Release of sperms from Sertoli cells" },
    { term: "Acrosome", def: "Sperm head cap containing fertilisation enzymes" },
    { term: "Antrum", def: "Fluid-filled cavity of tertiary follicle" },
    { term: "LH surge", def: "Triggers Graafian follicle rupture (ovulation)" },
    { term: "Progesterone", def: "Secreted by corpus luteum to maintain endometrium" },
    { term: "Trophoblast", def: "Outer cellular layer of blastocyst" },
    { term: "IgA antibodies", def: "Found in colostrum, provides passive immunity" }
  ],

  pathways: [
    {
      title: "Sperm Release and Ejaculation Pathway",
      prompt: "Order the anatomical structures a sperm passes through from synthesis to ejaculation.",
      steps: [
        "Seminiferous tubules (sperm synthesis)",
        "Rete testis network within testis",
        "Vasa efferentia ductules leaving testis",
        "Epididymis (sperm storage & maturation)",
        "Vas deferens ascending to abdomen",
        "Ejaculatory duct (joined with seminal vesicle duct)",
        "Urethra passing through penis",
        "Urethral meatus (expulsion)"
      ]
    },
    {
      title: "Menstrual Cycle Phase Transition",
      prompt: "Order the phases of the menstrual cycle starting from the breakdown of the endometrium.",
      steps: [
        "Menstrual phase (blood flow due to corpus luteum decay)",
        "Follicular phase (follicle grows, secretes estrogen)",
        "Proliferative phase (endometrium thickens)",
        "Ovulatory phase (LH surge, release of secondary oocyte)",
        "Luteal phase (remnants become corpus luteum)",
        "Secretory phase (progesterone builds endometrium)",
        "Luteolysis (decay of corpus luteum in absence of fertilisation)"
      ]
    }
  ]
};
