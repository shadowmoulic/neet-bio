/* ====== chem.js ====== */

DATA.chapters.chem = {
  id: "chem",
  num: "CHEM",
  title: "Chemistry: Top 10 Chapters",
  subtitle: "Most important formulas & concepts for NEET",
  color: "#9b59b6",
  colorD: "#8e44ad",
  glyph: "🧪",

  notes: [
    {
      id: "chem_1",
      heading: "1. Mole Concept & Basic Concepts",
      html: `
        <ul>
          <li><b>Number of Moles (n):</b> <span class="formula">n = Given Mass / Molar Mass = N / N_A</span></li>
          <li><b>Molarity (M):</b> <span class="formula">M = Moles of solute / Volume of solution (L)</span></li>
          <li><b>Molality (m):</b> <span class="formula">m = Moles of solute / Mass of solvent (kg)</span></li>
          <li><b>Mole Fraction (x):</b> <span class="formula">x_A = n_A / (n_A + n_B)</span></li>
        </ul>
      `
    },
    {
      id: "chem_2",
      heading: "2. Chemical Thermodynamics",
      html: `
        <ul>
          <li><b>First Law:</b> <span class="formula">ΔU = q + w</span> (IUPAC convention: w = -PΔV)</li>
          <li><b>Enthalpy:</b> <span class="formula">H = U + PV</span> or <span class="formula">ΔH = ΔU + Δn_gRT</span></li>
          <li><b>Gibbs Free Energy:</b> <span class="formula">ΔG = ΔH - TΔS</span></li>
          <li><b>Spontaneity:</b> ΔG < 0 (Spontaneous), ΔG = 0 (Equilibrium)</li>
        </ul>
      `
    },
    {
      id: "chem_3",
      heading: "3. Equilibrium",
      html: `
        <ul>
          <li><b>Equilibrium Constant:</b> <span class="formula">K_p = K_c(RT)^{Δn}</span></li>
          <li><b>pH Formula:</b> <span class="formula">pH = -log[H+]</span></li>
          <li><b>Ionic Product of Water:</b> <span class="formula">K_w = [H+][OH-] = 10^{-14}</span> at 298K</li>
          <li><b>Henderson-Hasselbalch (Buffer):</b> <span class="formula">pH = pK_a + log([Salt]/[Acid])</span></li>
        </ul>
      `
    },
    {
      id: "chem_4",
      heading: "4. Chemical Bonding",
      html: `
        <ul>
          <li><b>Formal Charge:</b> <span class="formula">FC = V - L - (S/2)</span></li>
          <li><b>Dipole Moment:</b> <span class="formula">μ = q × d</span></li>
          <li><b>Hybridization:</b> sp (Linear), sp² (Trigonal Planar), sp³ (Tetrahedral)</li>
          <li><b>Bond Order:</b> <span class="formula">BO = 1/2 (N_b - N_a)</span></li>
        </ul>
      `
    },
    {
      id: "chem_5",
      heading: "5. Electrochemistry",
      html: `
        <ul>
          <li><b>Nernst Equation:</b> <span class="formula">E_cell = E°_cell - (0.0591/n) log Q</span></li>
          <li><b>Standard Cell Potential:</b> <span class="formula">E°_cell = E°_cathode - E°_anode</span></li>
          <li><b>Gibbs Energy & Cell Potential:</b> <span class="formula">ΔG° = -nFE°_cell</span></li>
          <li><b>Faraday's 1st Law:</b> <span class="formula">W = ZIt</span></li>
        </ul>
      `
    },
    {
      id: "chem_6",
      heading: "6. Solutions",
      html: `
        <ul>
          <li><b>Raoult's Law:</b> <span class="formula">P_A = P°_A × x_A</span></li>
          <li><b>Elevation in Boiling Point:</b> <span class="formula">ΔT_b = i × K_b × m</span></li>
          <li><b>Depression in Freezing Point:</b> <span class="formula">ΔT_f = i × K_f × m</span></li>
          <li><b>Osmotic Pressure:</b> <span class="formula">π = iCRT</span></li>
        </ul>
      `
    },
    {
      id: "chem_7",
      heading: "7. Coordination Compounds",
      html: `
        <ul>
          <li><b>Effective Atomic Number (EAN):</b> <span class="formula">EAN = Z - Oxidation State + 2(Coordination No.)</span></li>
          <li><b>Crystal Field Splitting (Δo):</b> Strong field ligands pair electrons (low spin), Weak field ligands don't pair (high spin).</li>
          <li><b>Magnetic Moment:</b> <span class="formula">μ = √(n(n+2)) BM</span> where n = unpaired electrons.</li>
        </ul>
      `
    },
    {
      id: "chem_8",
      heading: "8. Hydrocarbons",
      html: `
        <ul>
          <li><b>Alkanes:</b> C_nH_{2n+2} (Saturated, Free Radical Substitution)</li>
          <li><b>Alkenes:</b> C_nH_{2n} (Electrophilic Addition, Markovnikov's Rule)</li>
          <li><b>Alkynes:</b> C_nH_{2n-2} (Acidic Hydrogen in terminal alkynes)</li>
          <li><b>Benzene:</b> Aromatic (Electrophilic Aromatic Substitution)</li>
        </ul>
      `
    },
    {
      id: "chem_9",
      heading: "9. General Organic Chemistry (GOC)",
      html: `
        <ul>
          <li><b>Inductive Effect (I-effect):</b> Electron withdrawal/donation via sigma bonds.</li>
          <li><b>Resonance (M-effect):</b> Delocalization of pi electrons.</li>
          <li><b>Hyperconjugation:</b> No-bond resonance stabilizing carbocations/alkenes.</li>
          <li><b>Carbocation Stability:</b> 3° > 2° > 1° > Methyl</li>
        </ul>
      `
    },
    {
      id: "chem_10",
      heading: "10. Aldehydes, Ketones & Carboxylic Acids",
      html: `
        <ul>
          <li><b>Aldol Condensation:</b> Needs alpha-hydrogen, dilute base.</li>
          <li><b>Cannizzaro Reaction:</b> No alpha-hydrogen, conc. base (oxidation-reduction).</li>
          <li><b>Clemmensen Reduction:</b> <span class="formula">>C=O + Zn-Hg/HCl → >CH2</span></li>
          <li><b>Wolf-Kishner Reduction:</b> <span class="formula">>C=O + NH2NH2/KOH → >CH2</span></li>
        </ul>
      `
    }
  ],

  mnemonics: [
    {
      title: "Reactivity Series",
      device: "<b>P</b>lease <b>S</b>top <b>C</b>alling <b>M</b>e <b>A</b> <b>C</b>areless <b>Z</b>ebra <b>I</b>nstead <b>T</b>ry <b>L</b>earning <b>H</b>ow <b>C</b>opper <b>S</b>aves <b>G</b>old",
      expand: [
        { L: "P", t: "Potassium (K)" },
        { L: "S", t: "Sodium (Na)" },
        { L: "C", t: "Calcium (Ca)" },
        { L: "M", t: "Magnesium (Mg)" },
        { L: "A", t: "Aluminium (Al)" },
        { L: "Z", t: "Zinc (Zn)" },
        { L: "I", t: "Iron (Fe)" },
        { L: "L", t: "Lead (Pb)" },
        { L: "H", t: "Hydrogen (H)" },
        { L: "C", t: "Copper (Cu)" },
        { L: "S", t: "Silver (Ag)" },
        { L: "G", t: "Gold (Au)" }
      ]
    }
  ],

  flashcards: [
    { front: "Formula for Gibbs Free Energy change?", back: "ΔG = ΔH - TΔS" },
    { front: "What is Markovnikov's Rule?", back: "In electrophilic addition to unsymmetrical alkenes, the negative part of the addendum attaches to the carbon with fewer hydrogen atoms." },
    { front: "What is the Nernst Equation?", back: "E_cell = E°_cell - (0.0591/n) log Q" },
    { front: "Magnetic Moment formula?", back: "μ = √(n(n+2)) Bohr Magnetons" },
    { front: "What does the Cannizzaro reaction do?", back: "Aldehydes with no alpha-hydrogen undergo disproportionation (oxidation & reduction) in presence of strong base." }
  ],

  recall: [
    {
      q: "Explain Raoult's Law and write its formula.",
      hint: "Relate vapor pressure of a component to its mole fraction.",
      a: "Raoult's Law states that the partial vapor pressure of a volatile component in a solution is directly proportional to its mole fraction. P_A = P°_A × x_A."
    },
    {
      q: "What is the difference between Aldol Condensation and Cannizzaro Reaction?",
      hint: "Think about the requirement of alpha-hydrogens.",
      a: "Aldol Condensation requires aldehydes/ketones WITH alpha-hydrogens and dilute base. Cannizzaro Reaction is for aldehydes WITHOUT alpha-hydrogens and uses concentrated base."
    }
  ],

  mcqs: [
    {
      q: "Which of the following is an intensive property?",
      o: ["Enthalpy", "Volume", "Temperature", "Mass"],
      c: 2,
      e: "Temperature does not depend on the amount of substance, so it is an intensive property. The others are extensive."
    },
    {
      q: "In an electrochemical cell, oxidation always occurs at the:",
      o: ["Cathode", "Anode", "Salt Bridge", "Electrolyte"],
      c: 1,
      e: "Remember 'An Ox, Red Cat'. Oxidation at Anode, Reduction at Cathode."
    }
  ],

  match: [
    { term: "Osmotic Pressure", def: "π = iCRT" },
    { term: "Boiling Point Elevation", def: "ΔT_b = i × K_b × m" },
    { term: "Gibbs Energy & Cell Potential", def: "ΔG° = -nFE°_cell" },
    { term: "Equilibrium Constant", def: "K_p = K_c(RT)^{Δn}" }
  ],

  pathways: [
    {
      title: "Stability of Carbocations",
      prompt: "Order from most stable to least stable.",
      steps: ["Tertiary (3°)", "Secondary (2°)", "Primary (1°)", "Methyl"]
    }
  ]
};
