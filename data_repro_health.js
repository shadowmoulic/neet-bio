/* ====== data_repro_health.js — Chapter 3: Reproductive Health ====== */
DATA.chapters.repro_health = {
  id: "repro_health",
  num: 3,
  title: "Reproductive Health",
  subtitle: "Population control, contraception, STIs, MTP and infertility — NCERT Ch 3",
  color: "#e84393",
  colorD: "#a0265e",
  glyph: "🏥",

  notes: [
    {
      id: "rh_def",
      heading: "Definition & RCH Programmes",
      html: `
        <p><b>Reproductive Health</b> (WHO): Total well-being in all aspects of reproduction — <b>physical, emotional, behavioural and social</b>.</p>
        <p>India was among the <b>first countries</b> to initiate action plans for reproductive health at the national level. 'Family planning' programmes began in <b>1951</b>, later expanded to <b>Reproductive and Child Health Care (RCH) programmes</b>.</p>
        <h4>Key RCH measures</h4>
        <ul>
          <li>Sex education in schools to remove myths and misconceptions.</li>
          <li>Awareness about STIs, AIDS, contraception, post-natal care.</li>
          <li><b>Amniocentesis</b> — analysing foetal cells from amniotic fluid to detect genetic disorders (Down syndrome, haemophilia, sickle-cell anaemia). <b>Banned for sex determination</b> to prevent female foeticide.</li>
          <li><b>Saheli</b> — non-steroidal oral contraceptive developed at CDRI, Lucknow; once-a-week pill, very few side effects.</li>
        </ul>
        <div class="callout"><b>Indicators of improved reproductive health:</b> reduced MMR and IMR, increased medically assisted deliveries, better STI detection.</div>
      `
    },
    {
      id: "rh_contraception",
      heading: "Contraceptive Methods",
      html: `
        <p>An ideal contraceptive: user-friendly, effective, reversible, no/minimal side-effects, does not interfere with sexual drive.</p>
        <table class="cmp">
          <thead><tr><th>Category</th><th>Examples</th><th>Mechanism</th></tr></thead>
          <tbody>
            <tr><td><b>Natural</b></td><td>Periodic abstinence (day 10–17), Coitus interruptus, Lactational amenorrhea (up to 6 months post-parturition)</td><td>Avoid ovum–sperm meeting</td></tr>
            <tr><td><b>Barrier</b></td><td>Condoms (Nirodh), diaphragm, cervical cap, vault, spermicidal creams</td><td>Physical block; condom also prevents STIs</td></tr>
            <tr><td><b>IUDs</b></td><td>Non-medicated: Lippes loop; Copper: CuT, Cu7, Multiload 375; Hormonal: Progestasert, LNG-20</td><td>Cu ions suppress sperm motility; hormonal IUDs make uterus hostile; increase phagocytosis of sperms</td></tr>
            <tr><td><b>Oral pills</b></td><td>Progestogen or progestogen + oestrogen (21-day course); Saheli (once a week)</td><td>Inhibit ovulation and implantation; alter cervical mucus</td></tr>
            <tr><td><b>Injectables / Implants</b></td><td>Progestogen-oestrogen injections under skin</td><td>Same as pills; longer effective period</td></tr>
            <tr><td><b>Emergency</b></td><td>Progestogen/IUD within 72 hours of coitus</td><td>Prevents post-coital pregnancy (rape, unprotected)</td></tr>
            <tr><td><b>Surgical</b></td><td><b>Vasectomy</b> (male) — cut/tie vas deferens; <b>Tubectomy</b> (female) — cut/tie fallopian tube</td><td>Blocks gamete transport; highly effective, poor reversibility</td></tr>
          </tbody>
        </table>
        <div class="callout"><b>Statutory minimum age:</b> Female = 18 years, Male = 21 years for marriage.</div>
      `
    },
    {
      id: "rh_mtp",
      heading: "Medical Termination of Pregnancy (MTP)",
      html: `
        <p>Intentional/voluntary termination of pregnancy before full term. Also called <b>induced abortion</b>. ~45–50 million MTPs/year worldwide.</p>
        <ul>
          <li>Legalised in India in <b>1971</b>.</li>
          <li><b>Safe: up to 12 weeks</b> (first trimester) — one registered medical practitioner's opinion needed.</li>
          <li><b>12–24 weeks</b> — two registered medical practitioners' opinion required.</li>
          <li>Grounds: risk to mother's life; substantial risk of serious physical/mental handicap in child.</li>
          <li><b>Amniocentesis for sex determination is illegal</b> — misuse leads to female foeticide.</li>
        </ul>
        <div class="callout"><b>Key law:</b> MTP (Amendment) Act, 2017 — reduces incidence of illegal abortion and maternal mortality/morbidity.</div>
      `
    },
    {
      id: "rh_sti",
      heading: "Sexually Transmitted Infections (STIs)",
      html: `
        <p>Also called <b>Venereal Diseases (VD)</b> or <b>Reproductive Tract Infections (RTI)</b>. Transmitted through sexual intercourse.</p>
        <h4>Common STIs</h4>
        <ul>
          <li>Gonorrhoea, syphilis, genital herpes, chlamydiasis, genital warts, trichomoniasis, hepatitis-B, HIV/AIDS.</li>
          <li><b>Hepatitis-B, genital herpes, HIV</b> — NOT completely curable.</li>
          <li>All others are curable if detected and treated early.</li>
          <li>Hepatitis-B and HIV can also spread via shared needles, blood transfusion, mother to foetus.</li>
        </ul>
        <h4>Complications of untreated STIs</h4>
        <ul>
          <li>PID (pelvic inflammatory diseases), abortions, still births, ectopic pregnancies, infertility, cancer of reproductive tract.</li>
        </ul>
        <h4>Prevention</h4>
        <ul>
          <li>Avoid sex with unknown/multiple partners.</li>
          <li>Use condoms during coitus.</li>
          <li>Get tested early if in doubt.</li>
        </ul>
        <div class="callout"><b>High risk group:</b> Age 15–24 years. STIs are most common in this group.</div>
      `
    },
    {
      id: "rh_infertility",
      heading: "Infertility & Assisted Reproductive Technologies (ART)",
      html: `
        <p>Inability to conceive after 2 years of unprotected sexual cohabitation. Causes: physical, congenital, diseases, drugs, immunological, psychological.</p>
        <table class="cmp">
          <thead><tr><th>Technique</th><th>Full Form</th><th>What happens</th></tr></thead>
          <tbody>
            <tr><td><b>IVF-ET</b></td><td>In Vitro Fertilisation – Embryo Transfer</td><td>"Test tube baby" — ova + sperm fertilised in lab; embryo transferred</td></tr>
            <tr><td><b>ZIFT</b></td><td>Zygote Intra Fallopian Transfer</td><td>Zygote / embryo (≤8 blastomeres) → fallopian tube</td></tr>
            <tr><td><b>IUT</b></td><td>Intra Uterine Transfer</td><td>Embryo (>8 blastomeres) → uterus</td></tr>
            <tr><td><b>GIFT</b></td><td>Gamete Intra Fallopian Transfer</td><td>Donor ovum → fallopian tube of recipient</td></tr>
            <tr><td><b>ICSI</b></td><td>Intra Cytoplasmic Sperm Injection</td><td>Sperm directly injected into ovum in lab</td></tr>
            <tr><td><b>AI / IUI</b></td><td>Artificial Insemination / Intra-Uterine Insemination</td><td>Semen from husband or donor → vagina or uterus</td></tr>
          </tbody>
        </table>
        <div class="callout"><b>Mnemonic for ART:</b> <b>ZIG-AI</b> — ZIFT, IUT, GIFT, AI/IUI.</div>
      `
    }
  ],

  mnemonics: [
    {
      title: "Contraceptive Categories",
      device: "<b>N</b>o <b>B</b>arrier <b>I</b>s <b>O</b>verwhelming <b>I</b>ntelligent <b>S</b>urgeons",
      expand: [
        { L: "N", t: "Natural methods (abstinence, LAM, withdrawal)" },
        { L: "B", t: "Barrier methods (condoms, diaphragm)" },
        { L: "I", t: "IUDs (Lippes loop, CuT, Progestasert)" },
        { L: "O", t: "Oral pills (combined or progestogen)" },
        { L: "I", t: "Injectables / Implants" },
        { L: "S", t: "Surgical (vasectomy / tubectomy)" }
      ]
    },
    {
      title: "ART Acronyms",
      device: "<b>Z</b>ebras <b>I</b>n <b>G</b>rass <b>A</b>lways <b>I</b>ntact",
      expand: [
        { L: "Z", t: "ZIFT — Zygote Intra Fallopian Transfer" },
        { L: "I", t: "IUT — Intra Uterine Transfer" },
        { L: "G", t: "GIFT — Gamete Intra Fallopian Transfer" },
        { L: "A", t: "AI — Artificial Insemination" },
        { L: "I", t: "ICSI — Intra Cytoplasmic Sperm Injection" }
      ]
    }
  ],

  flashcards: [
    { front: "WHO definition of Reproductive Health?", back: "Total well-being in all aspects of reproduction — physical, emotional, behavioural and social." },
    { front: "When did India start Family Planning programmes?", back: "1951 — India was among the first countries to do so at national level." },
    { front: "What is Saheli?", back: "A non-steroidal once-a-week oral contraceptive for females, developed at CDRI, Lucknow. Very few side effects." },
    { front: "What do Cu ions in IUDs do?", back: "Suppress sperm motility and fertilising capacity; IUDs also increase phagocytosis of sperms." },
    { front: "Lactational amenorrhea is effective for how long?", back: "Up to a maximum of 6 months following parturition (childbirth)." },
    { front: "Which STIs are NOT completely curable?", back: "Hepatitis-B, genital herpes, and HIV. All other common STIs are curable if detected and treated early." },
    { front: "MTP was legalised in India in which year?", back: "1971. Safe up to 12 weeks (one doctor); 12–24 weeks requires two doctors." },
    { front: "ZIFT vs IUT — what is the difference?", back: "ZIFT: embryo with ≤8 blastomeres transferred to fallopian tube. IUT: embryo with >8 blastomeres transferred to uterus." },
    { front: "What is ICSI?", back: "Intra Cytoplasmic Sperm Injection — sperm directly injected into the ovum in laboratory." },
    { front: "What is vasectomy?", back: "Surgical sterilisation in males — a small part of the vas deferens is removed or tied through a small incision in the scrotum." },
    { front: "What are the hormonal IUDs?", back: "Progestasert and LNG-20. They make the uterus unsuitable for implantation and cervix hostile to sperms." },
    { front: "Non-medicated IUD example?", back: "Lippes loop." },
    { front: "Copper-releasing IUDs?", back: "CuT, Cu7, Multiload 375." },
    { front: "What is amniocentesis used for?", back: "Analysing foetal cells from amniotic fluid to detect genetic disorders (Down syndrome, haemophilia, sickle-cell anaemia)." },
    { front: "Why is sex-determination by amniocentesis banned in India?", back: "To legally check the increasing menace of female foeticides." }
  ],

  recall: [
    {
      q: "List and explain the categories of contraceptive methods.",
      hint: "Natural → Barrier → IUDs → Pills → Injectables → Surgical",
      a: "Natural: periodic abstinence, coitus interruptus, lactational amenorrhea. Barrier: condoms, diaphragm, cervical cap (physical block). IUDs: non-medicated (Lippes loop), copper (CuT), hormonal (Progestasert). Oral pills: progestogen/oestrogen combo — inhibit ovulation and implantation. Injectables/implants: longer-acting pills. Surgical: vasectomy (male), tubectomy (female) — block gamete transport."
    },
    {
      q: "What are the Assisted Reproductive Technologies (ART)? Describe each briefly.",
      hint: "IVF-ET, ZIFT, IUT, GIFT, ICSI, AI/IUI",
      a: "IVF-ET: fertilisation in lab, embryo transferred to uterus ('test tube baby'). ZIFT: embryo ≤8 blastomeres → fallopian tube. IUT: embryo >8 blastomeres → uterus. GIFT: donor ovum → recipient's fallopian tube. ICSI: sperm directly injected into ovum. AI/IUI: semen introduced artificially into vagina or uterus."
    },
    {
      q: "What is MTP? When is it considered safe and what are the legal guidelines in India?",
      hint: "1971, first trimester, two doctors for 12–24 weeks",
      a: "MTP (Medical Termination of Pregnancy) = voluntary termination of pregnancy before full term. Legalised in India in 1971. Safe up to 12 weeks — requires one registered medical practitioner. Between 12–24 weeks — requires two registered practitioners. Grounds: risk to mother's life or substantial risk of serious handicap in child."
    }
  ],

  mcqs: [
    {
      q: "India's family planning programme was initiated in:",
      o: ["1947", "1951", "1961", "1971"],
      c: 1,
      e: "India was among the first countries to initiate national-level action plans for reproductive health. Family planning began in 1951."
    },
    {
      q: "Saheli, the oral contraceptive, was developed at:",
      o: ["AIIMS, New Delhi", "IIT Bombay", "CDRI, Lucknow", "CCMB, Hyderabad"],
      c: 2,
      e: "Saheli is a non-steroidal once-a-week oral contraceptive developed by scientists at the Central Drug Research Institute (CDRI) in Lucknow."
    },
    {
      q: "Cu ions released from copper IUDs primarily:",
      o: ["Kill the egg", "Suppress sperm motility and fertilising capacity", "Prevent implantation only", "Block the cervix physically"],
      c: 1,
      e: "Cu ions released by copper IUDs suppress sperm motility and fertilising capacity, and also increase phagocytosis of sperms within the uterus."
    },
    {
      q: "Which of the following STIs is NOT completely curable?",
      o: ["Gonorrhoea", "Syphilis", "Genital herpes", "Trichomoniasis"],
      c: 2,
      e: "Genital herpes (along with HIV and hepatitis-B) cannot be completely cured. All other common STIs are curable if detected and treated early."
    },
    {
      q: "MTP is considered relatively safe during:",
      o: ["First trimester only (up to 12 weeks)", "Second trimester (12–24 weeks)", "Third trimester", "Any time during pregnancy"],
      c: 0,
      e: "MTPs are considered relatively safe during the first trimester (up to 12 weeks). Second-trimester abortions are much riskier."
    },
    {
      q: "Embryo with more than 8 blastomeres is transferred to the uterus in:",
      o: ["ZIFT", "GIFT", "IUT", "ICSI"],
      c: 2,
      e: "IUT (Intra Uterine Transfer) is used for embryos with more than 8 blastomeres. ZIFT is for embryos with ≤8 blastomeres transferred to the fallopian tube."
    },
    {
      q: "Lactational amenorrhea as a contraceptive is effective for up to:",
      o: ["3 months", "6 months", "1 year", "2 years"],
      c: 1,
      e: "Lactational amenorrhea (absence of menstruation during intense lactation) is effective only up to a maximum of 6 months following parturition."
    },
    {
      q: "Vasectomy involves:",
      o: ["Removing part of the fallopian tube", "Removing the uterus", "Removing or tying part of the vas deferens", "Hormone injections"],
      c: 2,
      e: "In vasectomy, a small part of the vas deferens is removed or tied through a small incision on the scrotum, preventing sperm transport."
    }
  ],

  match: [
    { term: "Lippes loop", def: "Non-medicated IUD" },
    { term: "Saheli", def: "Non-steroidal once-a-week oral contraceptive" },
    { term: "GIFT", def: "Donor ovum transferred to fallopian tube" },
    { term: "ICSI", def: "Sperm injected directly into ovum" },
    { term: "Vasectomy", def: "Surgical sterilisation in males" },
    { term: "Tubectomy", def: "Surgical sterilisation in females" },
    { term: "Amniocentesis", def: "Analysis of foetal cells from amniotic fluid" },
    { term: "LNG-20", def: "Hormone-releasing IUD" }
  ],

  pathways: [
    {
      title: "IVF-ET (Test Tube Baby) Procedure",
      prompt: "Order the steps of in vitro fertilisation and embryo transfer.",
      steps: ["Collect ova from wife/donor", "Collect sperm from husband/donor", "Fertilise under simulated lab conditions", "Allow embryo to form", "Transfer embryo to fallopian tube (ZIFT) or uterus (IUT)"]
    }
  ]
};
