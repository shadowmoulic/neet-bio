/* ====== phy.js ====== */

DATA.chapters.phy = {
  id: "phy",
  num: "PHY",
  title: "Physics: Top 10 Chapters",
  subtitle: "Most important formulas for NEET that you must know",
  color: "#e74c3c",
  colorD: "#c0392b",
  glyph: "⚡",

  notes: [
    {
      id: "phy_1",
      heading: "1. Ray Optics",
      html: `
        <ul>
          <li><b>Mirror Formula:</b> <span class="formula">1/v + 1/u = 1/f</span></li>
          <li><b>Lens Maker's Formula:</b> <span class="formula">1/f = (μ - 1)(1/R1 - 1/R2)</span></li>
          <li><b>Snell's Law:</b> <span class="formula">μ1 sin(i) = μ2 sin(r)</span></li>
          <li><b>Magnification (Lens):</b> <span class="formula">m = v/u = f / (f + u)</span></li>
        </ul>
      `
    },
    {
      id: "phy_2",
      heading: "2. Current Electricity",
      html: `
        <ul>
          <li><b>Ohm's Law:</b> <span class="formula">V = IR</span></li>
          <li><b>Drift Velocity:</b> <span class="formula">vd = eEτ/m</span></li>
          <li><b>Resistance:</b> <span class="formula">R = ρ(L/A)</span></li>
          <li><b>Power:</b> <span class="formula">P = VI = I²R = V²/R</span></li>
          <li><b>Kirchhoff's Laws:</b> KCL (ΣI = 0) and KVL (ΣV = 0).</li>
        </ul>
      `
    },
    {
      id: "phy_3",
      heading: "3. Semiconductor Electronics",
      html: `
        <ul>
          <li><b>Mass Action Law:</b> <span class="formula">ni² = ne * nh</span></li>
          <li><b>Current in Semiconductor:</b> <span class="formula">I = Ie + Ih</span></li>
          <li><b>Transistor Current:</b> <span class="formula">IE = IB + IC</span></li>
          <li><b>Alpha & Beta relation:</b> <span class="formula">β = α / (1 - α)</span></li>
        </ul>
      `
    },
    {
      id: "phy_4",
      heading: "4. Thermodynamics",
      html: `
        <ul>
          <li><b>1st Law:</b> <span class="formula">ΔQ = ΔU + ΔW</span></li>
          <li><b>Work Done (Isobaric):</b> <span class="formula">W = PΔV</span></li>
          <li><b>Efficiency of Carnot Engine:</b> <span class="formula">η = 1 - (T2/T1)</span></li>
          <li><b>Molar Specific Heat Relation:</b> <span class="formula">Cp - Cv = R</span></li>
        </ul>
      `
    },
    {
      id: "phy_5",
      heading: "5. Electrostatics",
      html: `
        <ul>
          <li><b>Coulomb's Law:</b> <span class="formula">F = (1/4πε0) * (q1q2/r²)</span></li>
          <li><b>Electric Field:</b> <span class="formula">E = F/q</span></li>
          <li><b>Capacitance:</b> <span class="formula">C = Q/V</span>, Parallel Plate: <span class="formula">C = ε0A/d</span></li>
          <li><b>Energy in Capacitor:</b> <span class="formula">U = (1/2)CV² = Q²/(2C)</span></li>
        </ul>
      `
    },
    {
      id: "phy_6",
      heading: "6. Magnetic Effects of Current",
      html: `
        <ul>
          <li><b>Biot-Savart Law:</b> <span class="formula">dB = (μ0/4π) * (I dl sinθ/r²)</span></li>
          <li><b>Magnetic Field (Straight Wire):</b> <span class="formula">B = (μ0I)/(2πr)</span></li>
          <li><b>Force on moving charge:</b> <span class="formula">F = q(v × B)</span></li>
          <li><b>Force on current wire:</b> <span class="formula">F = ILB sinθ</span></li>
        </ul>
      `
    },
    {
      id: "phy_7",
      heading: "7. Dual Nature of Radiation & Matter",
      html: `
        <ul>
          <li><b>Einstein's Photoelectric Equation:</b> <span class="formula">K_max = hν - Φ</span></li>
          <li><b>De Broglie Wavelength:</b> <span class="formula">λ = h/p = h/√(2mK)</span></li>
          <li><b>Photon Energy:</b> <span class="formula">E = hν = hc/λ</span></li>
        </ul>
      `
    },
    {
      id: "phy_8",
      heading: "8. Work, Energy & Power",
      html: `
        <ul>
          <li><b>Work Done:</b> <span class="formula">W = F·S = F S cosθ</span></li>
          <li><b>Kinetic Energy:</b> <span class="formula">K = 1/2 mv² = p²/(2m)</span></li>
          <li><b>Work-Energy Theorem:</b> <span class="formula">W_net = ΔK</span></li>
          <li><b>Power:</b> <span class="formula">P = W/t = F·v</span></li>
        </ul>
      `
    },
    {
      id: "phy_9",
      heading: "9. System of Particles & Rotation",
      html: `
        <ul>
          <li><b>Center of Mass:</b> <span class="formula">X_cm = (m1x1 + m2x2)/(m1+m2)</span></li>
          <li><b>Torque:</b> <span class="formula">τ = r × F = Iα</span></li>
          <li><b>Angular Momentum:</b> <span class="formula">L = r × p = Iω</span></li>
          <li><b>Rotational Kinetic Energy:</b> <span class="formula">K = 1/2 Iω²</span></li>
        </ul>
      `
    },
    {
      id: "phy_10",
      heading: "10. Gravitation",
      html: `
        <ul>
          <li><b>Newton's Law:</b> <span class="formula">F = G(m1m2/r²)</span></li>
          <li><b>Acceleration due to gravity:</b> <span class="formula">g = GM/R²</span></li>
          <li><b>Escape Velocity:</b> <span class="formula">ve = √(2GM/R) = √(2gR)</span></li>
          <li><b>Orbital Velocity:</b> <span class="formula">vo = √(GM/R)</span></li>
        </ul>
      `
    }
  ],

  mnemonics: [
    {
      title: "Electromagnetic Spectrum Order",
      device: "<b>R</b>ich <b>M</b>en <b>I</b>n <b>V</b>egas <b>U</b>se <b>X</b>pensive <b>G</b>adgets",
      expand: [
        { L: "R", t: "Radio Waves" },
        { L: "M", t: "Microwaves" },
        { L: "I", t: "Infrared" },
        { L: "V", t: "Visible Light" },
        { L: "U", t: "Ultraviolet" },
        { L: "X", t: "X-Rays" },
        { L: "G", t: "Gamma Rays" }
      ]
    }
  ],

  flashcards: [
    { front: "Formula for mirror magnification?", back: "m = -v/u" },
    { front: "What is the relation between Cp and Cv?", back: "Cp - Cv = R (Mayer's relation)" },
    { front: "What is the De Broglie wavelength formula?", back: "λ = h/p = h/√(2mK)" },
    { front: "Escape velocity formula?", back: "v_e = √(2GM/R)" },
    { front: "Energy of a photon?", back: "E = hν or hc/λ" }
  ],

  recall: [
    {
      q: "State Ohm's Law and the formula for drift velocity.",
      hint: "Relate voltage and current, and charge, electric field, relaxation time, and mass.",
      a: "Ohm's Law: V = IR. Drift Velocity: vd = eEτ/m."
    },
    {
      q: "State the First Law of Thermodynamics.",
      hint: "Conservation of energy involving heat, work, and internal energy.",
      a: "ΔQ = ΔU + ΔW. Heat supplied to the system equals the change in internal energy plus the work done by the system."
    }
  ],

  mcqs: [
    {
      q: "The escape velocity on earth is approx 11.2 km/s. If mass of a planet is 4 times that of earth and radius is half of earth, its escape velocity is:",
      o: ["11.2 km/s", "22.4 km/s", "31.6 km/s", "44.8 km/s"],
      c: 2,
      e: "v_e is proportional to √(M/R). √((4M)/(R/2)) = √8 * v_e(earth) ≈ 2.82 * 11.2 = 31.6 km/s"
    },
    {
      q: "Which law is based on the conservation of energy in electrical circuits?",
      o: ["Ohm's Law", "Kirchhoff's Current Law", "Kirchhoff's Voltage Law", "Faraday's Law"],
      c: 2,
      e: "KVL (Loop Rule) is based on the conservation of energy. KCL (Junction Rule) is based on conservation of charge."
    }
  ],

  match: [
    { term: "Energy of Photon", def: "hc/λ" },
    { term: "Drift Velocity", def: "eEτ/m" },
    { term: "Capacitance", def: "Q/V" },
    { term: "Torque", def: "r × F" }
  ],

  pathways: [
    {
      title: "Order of Electromagnetic Spectrum (Low to High Freq)",
      prompt: "Arrange the waves from lowest to highest frequency.",
      steps: ["Radio", "Microwave", "Infrared", "Visible", "Ultraviolet", "X-Rays"]
    }
  ]
};
