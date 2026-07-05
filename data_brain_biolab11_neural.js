/* Extracted from BioLab final 1.html */
DATA.chapters['brain_biolab11_neural'] = {
  "id": "brain_biolab11_neural",
  "num": "18",
  "title": "Neural Control & Coordination",
  "subtitle": "How neurons carry impulses, how the brain and spinal cord are organised, and how the eye and ear sense the world.",
  "color": "#FFB23E",
  "colorD": "#3E32A0",
  "glyph": "⚡",
  "notes": [
    {
      "id": "TheNeuronStructuralUnit",
      "heading": "The Neuron — Structural Unit",
      "html": "\n   <p>The <span class=\"term\">neuron</span> is the structural & functional unit of the nervous system, specialised to receive, conduct and transmit impulses.</p>\n   <ul><li><b>Cell body (cyton)</b> — contains the nucleus, cytoplasm and granular <b>Nissl bodies</b>.</li><li><b>Dendrites</b> — short branched processes that bring impulses toward the cell body.</li><li><b>Axon</b> — single long process carrying impulses away; ends in synaptic knobs with neurotransmitter vesicles.</li><li><b>Myelin sheath</b> (made by Schwann cells) insulates the axon; gaps are the <b>nodes of Ranvier</b>.</li></ul>\n   <h4>Types of neurons (by structure)</h4>\n   <table class=\"t\"><tr><th>Type</th><th>Processes</th><th>Example</th></tr>\n   <tr><td>Multipolar</td><td>One axon, many dendrites</td><td>Cerebral cortex</td></tr>\n   <tr><td>Bipolar</td><td>One axon, one dendrite</td><td>Retina of eye</td></tr>\n   <tr><td>Unipolar</td><td>Cell body with one axon</td><td>Embryonic stage</td></tr></table>\n   <div class=\"mnem\"><div class=\"lab\">🧠 Memory Hook</div><div class=\"hook\">\"Dendrites Deliver in, Axons Away\"</div><div class=\"ex\">Dendrites carry impulses toward the cyton; the axon carries them away.</div></div>"
    },
    {
      "id": "RestingPotential",
      "heading": "Resting Potential",
      "html": "\n   <p>A resting (non-conducting) neuron membrane is <span class=\"term\">polarised</span> at about <b>−70 mV</b> (inside negative relative to outside).</p>\n   <ul><li>The <b>Na⁺/K⁺ pump</b> pushes <b>3 Na⁺ out</b> and <b>2 K⁺ in</b>, using ATP.</li><li>The resting membrane is more permeable to K⁺ than Na⁺; the axoplasm has high K⁺ and low Na⁺, the outside the reverse.</li></ul>\n   <div class=\"formula\">Resting potential ≈ −70 mV (polarised)\nPump: 3 Na⁺ OUT  ↔  2 K⁺ IN  (active, ATP-driven)</div>"
    },
    {
      "id": "ActionPotentialImpulseConduction",
      "heading": "Action Potential & Impulse Conduction",
      "html": "\n   <p>A stimulus above threshold triggers an <span class=\"term\">action potential</span> — a transient reversal of membrane polarity.</p>\n   <div class=\"flow\"><span class=\"step\">Resting −70 mV</span><span class=\"arr\">→</span><span class=\"step\">Stimulus: Na⁺ channels open, Na⁺ rushes IN</span><span class=\"arr\">→</span><span class=\"step\">Depolarisation (+30 mV)</span><span class=\"arr\">→</span><span class=\"step\">K⁺ moves OUT — repolarisation</span><span class=\"arr\">→</span><span class=\"step\">Na⁺/K⁺ pump restores resting state</span></div>\n   <h4>Conduction speed</h4>\n   <ul><li><b>Myelinated fibres</b>: the impulse jumps node to node — <b>saltatory conduction</b> (much faster).</li><li><b>Non-myelinated fibres</b>: the impulse moves as a continuous wave (slower).</li></ul>\n   <div class=\"mnem\"><div class=\"lab\">🧠 Memory Hook</div><div class=\"hook\">\"Na⁺ IN to fire, K⁺ OUT to reset\"</div><div class=\"ex\">Sodium influx = depolarisation (firing); potassium efflux = repolarisation (reset).</div></div>"
    },
    {
      "id": "TheSynapse",
      "heading": "The Synapse",
      "html": "\n   <p>A <span class=\"term\">synapse</span> is the junction between two neurons. Two types exist.</p>\n   <table class=\"t\"><tr><th>Electrical synapse</th><th>Chemical synapse</th></tr>\n   <tr><td>Membranes very close; current flows directly</td><td>Separated by a synaptic cleft</td></tr>\n   <tr><td>Transmission very fast</td><td>Uses a neurotransmitter (slower)</td></tr></table>\n   <h4>Chemical transmission</h4>\n   <div class=\"flow\"><span class=\"step\">Impulse reaches axon terminal</span><span class=\"arr\">→</span><span class=\"step\">Ca²⁺ enters; vesicles release acetylcholine</span><span class=\"arr\">→</span><span class=\"step\">Neurotransmitter crosses the cleft</span><span class=\"arr\">→</span><span class=\"step\">Binds receptors on post-synaptic membrane</span><span class=\"arr\">→</span><span class=\"step\">New impulse generated</span></div>\n   <div class=\"callout\"><b>Acetylcholine</b> is a common neurotransmitter.</div>"
    },
    {
      "id": "OrganisationoftheNervousSystem",
      "heading": "Organisation of the Nervous System",
      "html": "\n   <p>The human neural system has a central and a peripheral division.</p>\n   <table class=\"t\"><tr><th>Division</th><th>Includes</th></tr>\n   <tr><td>Central NS (CNS)</td><td>Brain + spinal cord — integration</td></tr>\n   <tr><td>Peripheral NS (PNS)</td><td>Nerves linking CNS to body</td></tr></table>\n   <ul><li>PNS fibres: <b>afferent (sensory)</b> carry impulses to the CNS; <b>efferent (motor)</b> carry commands away.</li><li>PNS is functionally split into the <b>somatic</b> (voluntary, skeletal muscle) and <b>autonomic</b> systems.</li><li>The autonomic system has antagonistic <b>sympathetic</b> (\"fight/flight\") and <b>parasympathetic</b> (\"rest/digest\") parts.</li></ul>\n   <div class=\"callout\">Humans have <b>12 pairs of cranial nerves</b> and <b>31 pairs of spinal nerves</b>.</div>"
    },
    {
      "id": "ProtectionoftheBrainMeningesCSF",
      "heading": "Protection of the Brain — Meninges & CSF",
      "html": "\n   <p>The brain sits in the cranium and is wrapped in three <span class=\"term\">meninges</span>.</p>\n   <div class=\"flow\"><span class=\"step\">Dura mater (tough, outer)</span><span class=\"arr\">→</span><span class=\"step\">Arachnoid (middle, web-like)</span><span class=\"arr\">→</span><span class=\"step\">Pia mater (delicate, inner)</span></div>\n   <ul><li><b>Cerebrospinal fluid (CSF)</b> fills the ventricles and the space around the brain, cushioning it and supplying nutrients.</li></ul>\n   <div class=\"mnem\"><div class=\"lab\">🧠 Memory Hook</div><div class=\"hook\">\"D-A-P from outside in\"</div><div class=\"ex\">Meninges order outermost → innermost: Dura → Arachnoid → Pia.</div></div>"
    },
    {
      "id": "TheBrainForebrain",
      "heading": "The Brain — Forebrain",
      "html": "\n   <p>The brain has three regions: <b>forebrain</b>, <b>midbrain</b> and <b>hindbrain</b>.</p>\n   <h4>Cerebrum</h4>\n   <ul><li>Largest part; two hemispheres joined by the <b>corpus callosum</b>.</li><li>Outer <b>cerebral cortex</b> is grey matter (cell bodies); folds (<b>gyri</b>) and grooves (<b>sulci</b>) increase its surface area.</li><li>Four lobes — <b>frontal</b> (thinking, voluntary movement), <b>parietal</b> (touch), <b>temporal</b> (hearing), <b>occipital</b> (vision).</li></ul>\n   <h4>Thalamus & Hypothalamus</h4>\n   <ul><li><b>Thalamus</b> — major relay/coordination centre for sensory and motor signals.</li><li><b>Hypothalamus</b> — controls body temperature, hunger, thirst, sleep, emotions and the pituitary gland; secretes neurohormones.</li><li>The <b>limbic system</b> (amygdala, hippocampus) governs emotions, motivation and memory.</li></ul>"
    },
    {
      "id": "TheBrainMidbrainHindbrain",
      "heading": "The Brain — Midbrain & Hindbrain",
      "html": "\n   <p>The <span class=\"term\">midbrain</span> lies between the thalamus and pons; its <b>corpora quadrigemina</b> control visual and auditory reflexes; the cerebral aqueduct passes through it.</p>\n   <h4>Hindbrain</h4>\n   <table class=\"t\"><tr><th>Part</th><th>Function</th></tr>\n   <tr><td>Cerebellum</td><td>Coordination, balance, posture and precision of movement</td></tr>\n   <tr><td>Pons</td><td>Relay between brain regions; helps regulate respiration</td></tr>\n   <tr><td>Medulla oblongata</td><td>Controls respiration, heartbeat, blood pressure and gastric secretion</td></tr></table>\n   <div class=\"callout\">The <b>medulla, pons and midbrain</b> together form the <b>brain stem</b>, connecting the brain to the spinal cord.</div>"
    },
    {
      "id": "ReflexActionReflexArc",
      "heading": "Reflex Action & Reflex Arc",
      "html": "\n   <p>A <span class=\"term\">reflex action</span> is a rapid, automatic, involuntary response to a stimulus, mediated by the spinal cord.</p>\n   <div class=\"flow\"><span class=\"step\">Receptor</span><span class=\"arr\">→</span><span class=\"step\">Sensory (afferent) neuron</span><span class=\"arr\">→</span><span class=\"step\">Spinal cord / interneuron</span><span class=\"arr\">→</span><span class=\"step\">Motor (efferent) neuron</span><span class=\"arr\">→</span><span class=\"step\">Effector (muscle/gland)</span></div>\n   <ul><li>The pathway is the <b>reflex arc</b>; the knee-jerk is a simple example.</li><li>It protects the body by acting faster than conscious thought.</li></ul>\n   <div class=\"mnem\"><div class=\"lab\">🧠 Memory Hook</div><div class=\"hook\">\"Some Cars Move (R→S→C→M→E)\"</div><div class=\"ex\">Receptor → Sensory neuron → CNS → Motor neuron → Effector.</div></div>"
    },
    {
      "id": "TheEyePhotoreception",
      "heading": "The Eye — Photoreception",
      "html": "\n   <p>The <span class=\"term\">eye</span> has three coats and converts light into nerve impulses.</p>\n   <table class=\"t\"><tr><th>Layer</th><th>Features</th></tr>\n   <tr><td>Sclera (outer)</td><td>Tough white coat; transparent cornea in front</td></tr>\n   <tr><td>Choroid (middle)</td><td>Pigmented, vascular; forms ciliary body & iris; the pupil is its aperture</td></tr>\n   <tr><td>Retina (inner)</td><td>Contains photoreceptors — rods & cones</td></tr></table>\n   <ul><li>The <b>lens</b> (held by the ciliary body) focuses light; <b>aqueous humor</b> lies in front and <b>vitreous humor</b> behind it.</li></ul>\n   <h4>Rods vs Cones</h4>\n   <table class=\"t\"><tr><th></th><th>Rods</th><th>Cones</th></tr>\n   <tr><td>Light</td><td>Dim light (night)</td><td>Bright light</td></tr>\n   <tr><td>Colour</td><td>No</td><td>Yes (3 types)</td></tr>\n   <tr><td>Pigment</td><td>Rhodopsin (visual purple)</td><td>Photopsin/iodopsin</td></tr></table>\n   <ul><li><b>Fovea (yellow spot)</b> — packed with cones, point of sharpest vision.</li><li><b>Blind spot</b> — where the optic nerve leaves; no photoreceptors.</li></ul>\n   <div class=\"mnem\"><div class=\"lab\">🧠 Memory Hook</div><div class=\"hook\">\"Cones = Colour · Rods = Rhodopsin at night\"</div><div class=\"ex\">Cones see colour in bright light; rods (rhodopsin) work in dim light.</div></div>"
    },
    {
      "id": "TheEarHearingBalance",
      "heading": "The Ear — Hearing & Balance",
      "html": "\n   <p>The <span class=\"term\">ear</span> serves both hearing and equilibrium and has three regions.</p>\n   <table class=\"t\"><tr><th>Region</th><th>Parts</th></tr>\n   <tr><td>Outer ear</td><td>Pinna, external auditory canal, tympanic membrane (eardrum)</td></tr>\n   <tr><td>Middle ear</td><td>Ear ossicles — malleus, incus, stapes; Eustachian tube</td></tr>\n   <tr><td>Inner ear</td><td>Cochlea (organ of Corti — hearing) and vestibular apparatus (balance)</td></tr></table>\n   <ul><li>The <b>organ of Corti</b> on the basilar membrane holds hair cells that convert sound into impulses.</li><li>The <b>vestibular apparatus</b> = three semicircular canals + utricle + saccule, sensing position and movement.</li><li>The <b>Eustachian tube</b> equalises air pressure across the eardrum.</li></ul>\n   <div class=\"mnem\"><div class=\"lab\">🧠 Memory Hook</div><div class=\"hook\">\"MIS — Malleus, Incus, Stapes\"</div><div class=\"ex\">The three ear ossicles in order (hammer, anvil, stirrup).</div></div>"
    }
  ],
  "mnemonics": [
    {
      "title": "Action potential: Na⁺ influx = depolarisation; K⁺ efflux = repolarisation.",
      "device": "\"Na⁺ IN to fire, K⁺ OUT to reset\"",
      "expand": [
        {
          "L": "",
          "t": "Action potential"
        }
      ]
    },
    {
      "title": "Na⁺/K⁺ pump expels 3 Na⁺ and takes in 2 K⁺ to keep the resting potential (−70 mV).",
      "device": "\"Pump 3 OUT, 2 IN\"",
      "expand": [
        {
          "L": "",
          "t": "Resting potential"
        }
      ]
    },
    {
      "title": "Meninges outermost→innermost: Dura mater, Arachnoid, Pia mater.",
      "device": "\"D-A-P from outside in\"",
      "expand": [
        {
          "L": "",
          "t": "Meninges"
        }
      ]
    },
    {
      "title": "The three middle-ear ossicles in sequence.",
      "device": "\"MIS — Malleus, Incus, Stapes\"",
      "expand": [
        {
          "L": "",
          "t": "Ear ossicles"
        }
      ]
    },
    {
      "title": "Cones detect colour in bright light; rods (rhodopsin) work in dim light.",
      "device": "\"Cones Colour · Rods Rhodopsin\"",
      "expand": [
        {
          "L": "",
          "t": "Photoreceptors"
        }
      ]
    },
    {
      "title": "Reflex arc: Receptor → Sensory neuron → CNS → Motor neuron → Effector.",
      "device": "\"Some Cars Move (R-S-C-M-E)\"",
      "expand": [
        {
          "L": "",
          "t": "Reflex arc"
        }
      ]
    }
  ],
  "flashcards": [
    {
      "front": "What is the structural unit of the nervous system?",
      "back": "The neuron."
    },
    {
      "front": "Granular bodies in the cyton are called?",
      "back": "Nissl bodies (Nissl granules)."
    },
    {
      "front": "Function of dendrites?",
      "back": "Carry impulses toward the cell body."
    },
    {
      "front": "Function of the axon?",
      "back": "Carries impulses away from the cell body."
    },
    {
      "front": "What forms the myelin sheath?",
      "back": "Schwann cells."
    },
    {
      "front": "What are nodes of Ranvier?",
      "back": "Gaps in the myelin sheath along an axon."
    },
    {
      "front": "Example of a bipolar neuron?",
      "back": "Neurons of the retina of the eye."
    },
    {
      "front": "Example of a multipolar neuron?",
      "back": "Neurons of the cerebral cortex."
    },
    {
      "front": "Resting membrane potential value?",
      "back": "About −70 mV (polarised)."
    },
    {
      "front": "What does the Na⁺/K⁺ pump do?",
      "back": "Pumps 3 Na⁺ out and 2 K⁺ in, using ATP."
    },
    {
      "front": "Which ion is in higher concentration inside the axon at rest?",
      "back": "Potassium (K⁺)."
    },
    {
      "front": "What causes depolarisation?",
      "back": "Influx of Na⁺ into the axon."
    },
    {
      "front": "Peak voltage during an action potential?",
      "back": "About +30 mV."
    },
    {
      "front": "What causes repolarisation?",
      "back": "Efflux of K⁺ out of the axon."
    },
    {
      "front": "Conduction in myelinated fibres is called?",
      "back": "Saltatory conduction (jumps node to node)."
    },
    {
      "front": "Which conducts faster — myelinated or non-myelinated?",
      "back": "Myelinated fibres conduct faster."
    },
    {
      "front": "Two types of synapses?",
      "back": "Electrical and chemical synapses."
    },
    {
      "front": "What is the synaptic cleft?",
      "back": "The gap between pre- and post-synaptic neurons at a chemical synapse."
    },
    {
      "front": "A common neurotransmitter?",
      "back": "Acetylcholine."
    },
    {
      "front": "Which ion triggers neurotransmitter release?",
      "back": "Calcium (Ca²⁺)."
    },
    {
      "front": "What does the CNS consist of?",
      "back": "The brain and the spinal cord."
    },
    {
      "front": "Afferent vs efferent neurons?",
      "back": "Afferent (sensory) carry impulses to the CNS; efferent (motor) carry them away."
    },
    {
      "front": "Two parts of the autonomic nervous system?",
      "back": "Sympathetic and parasympathetic."
    },
    {
      "front": "Role of the sympathetic system?",
      "back": "Prepares the body for \"fight or flight\"."
    },
    {
      "front": "Number of cranial and spinal nerve pairs in humans?",
      "back": "12 pairs of cranial and 31 pairs of spinal nerves."
    },
    {
      "front": "Name the three meninges (outer to inner).",
      "back": "Dura mater, arachnoid and pia mater."
    },
    {
      "front": "Function of cerebrospinal fluid (CSF)?",
      "back": "Cushions and protects the brain and supplies nutrients."
    },
    {
      "front": "Three main regions of the brain?",
      "back": "Forebrain, midbrain and hindbrain."
    },
    {
      "front": "Largest part of the human brain?",
      "back": "The cerebrum."
    },
    {
      "front": "What joins the two cerebral hemispheres?",
      "back": "The corpus callosum."
    },
    {
      "front": "What is the cerebral cortex made of?",
      "back": "Grey matter (neuron cell bodies)."
    },
    {
      "front": "Lobe responsible for vision?",
      "back": "The occipital lobe."
    },
    {
      "front": "Lobe responsible for hearing?",
      "back": "The temporal lobe."
    },
    {
      "front": "Function of the thalamus?",
      "back": "Major relay centre for sensory and motor signals."
    },
    {
      "front": "Four functions of the hypothalamus?",
      "back": "Controls temperature, hunger/thirst, sleep and the pituitary (also emotions)."
    },
    {
      "front": "Which system controls emotions and memory?",
      "back": "The limbic system."
    },
    {
      "front": "Function of the corpora quadrigemina (midbrain)?",
      "back": "Control visual and auditory reflexes."
    },
    {
      "front": "Function of the cerebellum?",
      "back": "Coordination, balance, posture and precise movement."
    },
    {
      "front": "Which part controls heartbeat and breathing?",
      "back": "The medulla oblongata."
    },
    {
      "front": "What forms the brain stem?",
      "back": "Midbrain, pons and medulla oblongata."
    },
    {
      "front": "Define reflex action.",
      "back": "A rapid, automatic, involuntary response to a stimulus via the spinal cord."
    },
    {
      "front": "List the parts of a reflex arc in order.",
      "back": "Receptor → sensory neuron → CNS → motor neuron → effector."
    },
    {
      "front": "Three layers (coats) of the eye?",
      "back": "Sclera, choroid and retina."
    },
    {
      "front": "Transparent front part of the sclera?",
      "back": "The cornea."
    },
    {
      "front": "What controls the size of the pupil?",
      "back": "The iris."
    },
    {
      "front": "Photoreceptors for dim light?",
      "back": "Rods (contain rhodopsin)."
    },
    {
      "front": "Photoreceptors for colour and bright light?",
      "back": "Cones (three types)."
    },
    {
      "front": "Pigment present in rods?",
      "back": "Rhodopsin (visual purple)."
    },
    {
      "front": "What is the fovea (yellow spot)?",
      "back": "A cone-rich region of sharpest vision."
    },
    {
      "front": "What is the blind spot?",
      "back": "The point where the optic nerve leaves the retina; lacks photoreceptors."
    },
    {
      "front": "Name the three ear ossicles.",
      "back": "Malleus, incus and stapes."
    },
    {
      "front": "Which structure is responsible for hearing in the inner ear?",
      "back": "The organ of Corti (in the cochlea)."
    },
    {
      "front": "Which part of the ear maintains balance?",
      "back": "The vestibular apparatus (semicircular canals, utricle, saccule)."
    },
    {
      "front": "Function of the Eustachian tube?",
      "back": "Equalises air pressure on both sides of the eardrum."
    },
    {
      "front": "Outer ear parts?",
      "back": "Pinna, external auditory canal and tympanic membrane."
    },
    {
      "front": "Where are hair cells of hearing located?",
      "back": "On the basilar membrane in the organ of Corti."
    }
  ],
  "recall": [
    {
      "q": "Describe the structure of a neuron.",
      "hint": "Cyton, dendrite, axon, myelin",
      "a": "A neuron has a cell body (cyton) with nucleus and Nissl bodies, branched dendrites that bring impulses in, and a single axon that carries impulses away. The axon may be wrapped in a myelin sheath (Schwann cells) interrupted by nodes of Ranvier, ending in synaptic knobs."
    },
    {
      "q": "Classify neurons structurally with examples.",
      "hint": "Multi/bi/uni",
      "a": "Multipolar (one axon, many dendrites — cerebral cortex), bipolar (one axon, one dendrite — retina), and unipolar (cell body with one axon — embryonic stage)."
    },
    {
      "q": "Explain the resting potential of a neuron.",
      "hint": "−70 mV, pump, permeability",
      "a": "At rest the membrane is polarised at ~−70 mV, inside negative. The Na⁺/K⁺ pump expels 3 Na⁺ and takes in 2 K⁺; the membrane is more permeable to K⁺, leaving high K⁺ inside and high Na⁺ outside."
    },
    {
      "q": "Describe the generation of an action potential.",
      "hint": "Na in→depol, K out→repol",
      "a": "A threshold stimulus opens Na⁺ channels; Na⁺ rushes in causing depolarisation (to ~+30 mV). Then K⁺ channels open and K⁺ flows out, causing repolarisation. The Na⁺/K⁺ pump finally restores the resting potential."
    },
    {
      "q": "Compare saltatory and continuous conduction.",
      "hint": "Myelinated jumps; faster",
      "a": "In myelinated fibres the impulse jumps from one node of Ranvier to the next (saltatory conduction), which is fast and energy-efficient. In non-myelinated fibres it spreads as a continuous wave, which is slower."
    },
    {
      "q": "Describe transmission across a chemical synapse.",
      "hint": "Ca²⁺→vesicle→ACh→receptor",
      "a": "An arriving impulse opens Ca²⁺ channels in the axon terminal; vesicles fuse and release a neurotransmitter (e.g. acetylcholine) into the synaptic cleft. It binds receptors on the post-synaptic membrane, opening ion channels and generating a new impulse."
    },
    {
      "q": "Differentiate electrical and chemical synapses.",
      "hint": "Direct vs neurotransmitter",
      "a": "Electrical synapses have the membranes nearly touching so current flows directly and very fast. Chemical synapses are separated by a cleft and use a neurotransmitter, making transmission slower but allowing modulation."
    },
    {
      "q": "Outline the organisation of the human nervous system.",
      "hint": "CNS + PNS; somatic/autonomic",
      "a": "It is divided into the central nervous system (brain + spinal cord) for integration, and the peripheral nervous system (nerves). The PNS has afferent and efferent fibres and is split into the somatic (voluntary) and autonomic (involuntary, sympathetic + parasympathetic) systems."
    },
    {
      "q": "Differentiate the sympathetic and parasympathetic systems.",
      "hint": "Fight/flight vs rest/digest",
      "a": "The sympathetic system prepares the body for emergencies (\"fight or flight\") — raising heart rate, dilating pupils. The parasympathetic system promotes \"rest and digest\" — slowing the heart and stimulating digestion. They act antagonistically."
    },
    {
      "q": "Describe how the brain is protected.",
      "hint": "Cranium, meninges, CSF",
      "a": "The brain lies within the bony cranium and is wrapped in three meninges — the tough outer dura mater, the middle arachnoid and the delicate inner pia mater. Cerebrospinal fluid in the ventricles and around the brain cushions it."
    },
    {
      "q": "Describe the cerebrum and its functions.",
      "hint": "Cortex, lobes, functions",
      "a": "The cerebrum is the largest brain part, with two hemispheres joined by the corpus callosum. Its grey-matter cortex (folded into gyri and sulci) controls thinking, memory, voluntary movement, sensory perception and speech, organised into frontal, parietal, temporal and occipital lobes."
    },
    {
      "q": "State the functions of the thalamus and hypothalamus.",
      "hint": "Relay; homeostasis",
      "a": "The thalamus is the main relay station coordinating sensory and motor signals. The hypothalamus regulates body temperature, hunger, thirst, sleep and emotions, and controls the pituitary gland through neurohormones."
    },
    {
      "q": "Describe the parts and functions of the hindbrain.",
      "hint": "Cerebellum, pons, medulla",
      "a": "The cerebellum coordinates movement, balance and posture; the pons relays signals between brain regions and helps control respiration; the medulla oblongata governs vital reflexes — heartbeat, breathing, blood pressure and gastric secretion."
    },
    {
      "q": "What is a reflex action and a reflex arc?",
      "hint": "Automatic; R-S-C-M-E",
      "a": "A reflex action is an immediate, involuntary response to a stimulus mediated by the spinal cord. The reflex arc is its pathway: receptor → sensory neuron → CNS (often via an interneuron) → motor neuron → effector."
    },
    {
      "q": "Why are reflex actions advantageous?",
      "hint": "Fast protection",
      "a": "They are extremely fast because they bypass the conscious brain, allowing the body to react protectively (e.g. withdrawing from heat) before pain is even perceived, reducing injury."
    },
    {
      "q": "Describe the three layers of the eye.",
      "hint": "Sclera, choroid, retina",
      "a": "The outer sclera is a tough white coat with a transparent cornea in front. The middle choroid is pigmented and vascular and forms the ciliary body and iris (pupil is its aperture). The inner retina contains the photoreceptors."
    },
    {
      "q": "Differentiate rods and cones.",
      "hint": "Rhodopsin/dim vs colour/bright",
      "a": "Rods contain rhodopsin, function in dim light and give no colour vision; cones (three types) work in bright light and provide colour vision and acuity, being concentrated at the fovea."
    },
    {
      "q": "What are the fovea and the blind spot?",
      "hint": "Cones vs no receptors",
      "a": "The fovea (yellow spot/macula) is densely packed with cones and is the point of sharpest vision. The blind spot is where the optic nerve leaves the retina; lacking photoreceptors, no image forms there."
    },
    {
      "q": "Trace the path of light to image formation.",
      "hint": "Cornea→lens→retina→optic nerve",
      "a": "Light passes through the cornea, aqueous humor, pupil and lens, which focuses it on the retina. Photoreceptors transduce light into impulses carried by the optic nerve to the visual cortex of the occipital lobe."
    },
    {
      "q": "Describe the three regions of the ear.",
      "hint": "Outer/middle/inner",
      "a": "The outer ear (pinna, auditory canal, eardrum) collects sound; the middle ear (malleus, incus, stapes; Eustachian tube) amplifies it; the inner ear holds the cochlea (organ of Corti for hearing) and the vestibular apparatus for balance."
    },
    {
      "q": "Explain the mechanism of hearing.",
      "hint": "Eardrum→ossicles→cochlea→nerve",
      "a": "Sound waves vibrate the tympanic membrane; the ear ossicles (malleus→incus→stapes) amplify and transmit them to the oval window, creating waves in cochlear fluid. These move the basilar membrane, stimulating hair cells of the organ of Corti, which send impulses via the auditory nerve to the brain."
    },
    {
      "q": "How does the ear maintain balance?",
      "hint": "Semicircular canals",
      "a": "The vestibular apparatus — three semicircular canals plus the utricle and saccule — detects head rotation and position; hair cells in their fluid send equilibrium information to the brain (cerebellum)."
    },
    {
      "q": "What is the role of the Eustachian tube?",
      "hint": "Pressure balance",
      "a": "It connects the middle ear to the pharynx and equalises the air pressure on both sides of the eardrum, allowing the membrane to vibrate freely."
    },
    {
      "q": "Why is myelination important for nerve function?",
      "hint": "Insulation, speed",
      "a": "Myelin insulates the axon and forces the impulse to leap between nodes of Ranvier (saltatory conduction), greatly increasing conduction speed while saving energy; its loss slows or blocks impulses."
    },
    {
      "q": "How is the resting potential restored after an impulse?",
      "hint": "Pump restores gradients",
      "a": "After repolarisation the Na⁺/K⁺ pump actively expels the Na⁺ that entered and reabsorbs the K⁺ that left, re-establishing the ionic gradients and the −70 mV resting state."
    },
    {
      "q": "Distinguish grey matter and white matter.",
      "hint": "Cell bodies vs myelinated axons",
      "a": "Grey matter consists mainly of neuron cell bodies and dendrites (e.g. the cerebral cortex); white matter consists of myelinated axons (e.g. the inner cerebrum), the myelin giving it the white colour."
    },
    {
      "q": "What is the all-or-none principle of nerve impulses?",
      "hint": "Fire fully or not",
      "a": "A stimulus either reaches the threshold and triggers a full-sized action potential or it does not fire at all; the impulse strength does not vary with stimulus intensity above threshold."
    },
    {
      "q": "How do sensory receptors contribute to coordination?",
      "hint": "Detect→CNS→response",
      "a": "Receptors (in skin, eye, ear, etc.) detect specific stimuli and convert them into nerve impulses sent to the CNS, which integrates the information and directs an appropriate motor response."
    },
    {
      "q": "Describe the accommodation of the eye.",
      "hint": "Lens curvature changes",
      "a": "The ciliary muscles adjust the curvature of the lens — making it more convex to focus on near objects and flatter for distant objects — so that light is always focused sharply on the retina."
    },
    {
      "q": "Why does the medulla oblongata control \"vital\" functions?",
      "hint": "Breathing & heartbeat centres",
      "a": "It houses the centres regulating breathing, heart rate, blood pressure and reflexes like swallowing and vomiting — processes essential for survival, hence \"vital\" centres."
    }
  ],
  "mcqs": [
    {
      "q": "The structural and functional unit of the nervous system is the:",
      "o": [
        "Nephron",
        "Neuron",
        "Neuroglia",
        "Axon"
      ],
      "c": 1,
      "e": "The neuron carries and transmits impulses."
    },
    {
      "q": "Granular bodies in the cyton are:",
      "o": [
        "Golgi bodies",
        "Nissl bodies",
        "Ribosomes",
        "Centrioles"
      ],
      "c": 1,
      "e": "Nissl bodies are found in the neuron cell body."
    },
    {
      "q": "Myelin sheath is formed by:",
      "o": [
        "Neurons",
        "Schwann cells",
        "Microglia",
        "Astrocytes"
      ],
      "c": 1,
      "e": "Schwann cells wrap axons to form myelin."
    },
    {
      "q": "Gaps in the myelin sheath are called:",
      "o": [
        "Synapses",
        "Nodes of Ranvier",
        "Dendrites",
        "Axon hillocks"
      ],
      "c": 1,
      "e": "Nodes of Ranvier are the unmyelinated gaps."
    },
    {
      "q": "Bipolar neurons are typically found in the:",
      "o": [
        "Spinal cord",
        "Retina of the eye",
        "Cerebellum",
        "Skin"
      ],
      "c": 1,
      "e": "Retinal neurons are bipolar."
    },
    {
      "q": "The resting potential of a neuron is about:",
      "o": [
        "+30 mV",
        "0 mV",
        "−70 mV",
        "−30 mV"
      ],
      "c": 2,
      "e": "The polarised resting membrane sits near −70 mV."
    },
    {
      "q": "The Na⁺/K⁺ pump moves:",
      "o": [
        "2 Na⁺ out, 3 K⁺ in",
        "3 Na⁺ out, 2 K⁺ in",
        "3 K⁺ out, 2 Na⁺ in",
        "Equal Na⁺ and K⁺"
      ],
      "c": 1,
      "e": "It expels 3 Na⁺ and takes in 2 K⁺ using ATP."
    },
    {
      "q": "Depolarisation of a neuron is caused by influx of:",
      "o": [
        "K⁺",
        "Na⁺",
        "Ca²⁺",
        "Cl⁻"
      ],
      "c": 1,
      "e": "Na⁺ entering reverses the membrane polarity."
    },
    {
      "q": "Repolarisation is brought about by efflux of:",
      "o": [
        "Na⁺",
        "K⁺",
        "Ca²⁺",
        "Cl⁻"
      ],
      "c": 1,
      "e": "K⁺ leaving restores the negative interior."
    },
    {
      "q": "Conduction that jumps node to node is called:",
      "o": [
        "Continuous",
        "Saltatory",
        "Synaptic",
        "Reflex"
      ],
      "c": 1,
      "e": "Saltatory conduction occurs in myelinated fibres."
    },
    {
      "q": "Which conducts impulses faster?",
      "o": [
        "Non-myelinated axon",
        "Myelinated axon",
        "Dendrite",
        "Cell body"
      ],
      "c": 1,
      "e": "Myelinated axons conduct faster by saltatory conduction."
    },
    {
      "q": "A common neurotransmitter at synapses is:",
      "o": [
        "Insulin",
        "Acetylcholine",
        "Renin",
        "Thrombin"
      ],
      "c": 1,
      "e": "Acetylcholine is a widespread neurotransmitter."
    },
    {
      "q": "Neurotransmitter release is triggered by entry of:",
      "o": [
        "Na⁺",
        "K⁺",
        "Ca²⁺",
        "Cl⁻"
      ],
      "c": 2,
      "e": "Ca²⁺ influx causes vesicle fusion and release."
    },
    {
      "q": "The central nervous system consists of:",
      "o": [
        "Brain & nerves",
        "Brain & spinal cord",
        "Spinal cord & nerves",
        "Nerves only"
      ],
      "c": 1,
      "e": "CNS = brain + spinal cord."
    },
    {
      "q": "Sensory (afferent) neurons carry impulses:",
      "o": [
        "Away from the CNS",
        "Toward the CNS",
        "Within muscles",
        "Between glands"
      ],
      "c": 1,
      "e": "Afferent neurons bring impulses to the CNS."
    },
    {
      "q": "\"Fight or flight\" responses are due to the:",
      "o": [
        "Parasympathetic system",
        "Sympathetic system",
        "Somatic system",
        "Sensory system"
      ],
      "c": 1,
      "e": "The sympathetic division prepares for emergencies."
    },
    {
      "q": "Number of pairs of cranial nerves in humans is:",
      "o": [
        "10",
        "12",
        "31",
        "33"
      ],
      "c": 1,
      "e": "There are 12 pairs of cranial nerves."
    },
    {
      "q": "Number of pairs of spinal nerves is:",
      "o": [
        "12",
        "21",
        "31",
        "41"
      ],
      "c": 2,
      "e": "There are 31 pairs of spinal nerves."
    },
    {
      "q": "The outermost meninx is the:",
      "o": [
        "Pia mater",
        "Arachnoid",
        "Dura mater",
        "Cortex"
      ],
      "c": 2,
      "e": "Dura mater is the tough outer covering."
    },
    {
      "q": "Cerebrospinal fluid mainly serves to:",
      "o": [
        "Carry oxygen",
        "Cushion the brain",
        "Digest food",
        "Produce hormones"
      ],
      "c": 1,
      "e": "CSF protects and nourishes the CNS."
    },
    {
      "q": "The largest part of the human brain is the:",
      "o": [
        "Cerebellum",
        "Cerebrum",
        "Medulla",
        "Pons"
      ],
      "c": 1,
      "e": "The cerebrum is the largest brain region."
    },
    {
      "q": "The two cerebral hemispheres are connected by the:",
      "o": [
        "Corpus callosum",
        "Corpora quadrigemina",
        "Pons",
        "Thalamus"
      ],
      "c": 0,
      "e": "The corpus callosum links the hemispheres."
    },
    {
      "q": "The cerebral cortex is composed of:",
      "o": [
        "White matter",
        "Grey matter",
        "Cartilage",
        "Adipose tissue"
      ],
      "c": 1,
      "e": "The cortex is grey matter (cell bodies)."
    },
    {
      "q": "Vision is processed in the:",
      "o": [
        "Frontal lobe",
        "Temporal lobe",
        "Occipital lobe",
        "Parietal lobe"
      ],
      "c": 2,
      "e": "The occipital lobe handles vision."
    },
    {
      "q": "Hearing is processed in the:",
      "o": [
        "Occipital lobe",
        "Temporal lobe",
        "Frontal lobe",
        "Parietal lobe"
      ],
      "c": 1,
      "e": "The temporal lobe handles hearing."
    },
    {
      "q": "Body temperature, hunger and thirst are controlled by the:",
      "o": [
        "Cerebrum",
        "Hypothalamus",
        "Cerebellum",
        "Medulla"
      ],
      "c": 1,
      "e": "The hypothalamus regulates these homeostatic functions."
    },
    {
      "q": "The relay centre for sensory impulses is the:",
      "o": [
        "Thalamus",
        "Pons",
        "Cerebellum",
        "Medulla"
      ],
      "c": 0,
      "e": "The thalamus relays sensory and motor signals."
    },
    {
      "q": "Coordination of movement and balance is by the:",
      "o": [
        "Cerebrum",
        "Cerebellum",
        "Medulla",
        "Hypothalamus"
      ],
      "c": 1,
      "e": "The cerebellum controls balance and coordination."
    },
    {
      "q": "Breathing and heartbeat are regulated by the:",
      "o": [
        "Cerebrum",
        "Cerebellum",
        "Medulla oblongata",
        "Thalamus"
      ],
      "c": 2,
      "e": "The medulla houses vital centres."
    },
    {
      "q": "Visual and auditory reflexes are centred in the:",
      "o": [
        "Cerebellum",
        "Corpora quadrigemina",
        "Pons",
        "Hypothalamus"
      ],
      "c": 1,
      "e": "The corpora quadrigemina of the midbrain control these reflexes."
    },
    {
      "q": "The correct reflex-arc sequence is:",
      "o": [
        "Effector→motor→CNS→sensory→receptor",
        "Receptor→sensory→CNS→motor→effector",
        "Receptor→motor→CNS→sensory→effector",
        "CNS→receptor→sensory→motor→effector"
      ],
      "c": 1,
      "e": "Receptor → sensory neuron → CNS → motor neuron → effector."
    },
    {
      "q": "A reflex action is:",
      "o": [
        "Slow and voluntary",
        "Rapid and involuntary",
        "Always conscious",
        "Independent of neurons"
      ],
      "c": 1,
      "e": "Reflexes are fast, automatic responses."
    },
    {
      "q": "The transparent front part of the eye is the:",
      "o": [
        "Sclera",
        "Cornea",
        "Choroid",
        "Retina"
      ],
      "c": 1,
      "e": "The cornea is the clear front of the sclera."
    },
    {
      "q": "The coloured part controlling the pupil is the:",
      "o": [
        "Lens",
        "Iris",
        "Cornea",
        "Retina"
      ],
      "c": 1,
      "e": "The iris adjusts the pupil size."
    },
    {
      "q": "Photoreceptors active in dim light are:",
      "o": [
        "Cones",
        "Rods",
        "Bipolar cells",
        "Ganglion cells"
      ],
      "c": 1,
      "e": "Rods (rhodopsin) function in low light."
    },
    {
      "q": "Colour vision is provided by:",
      "o": [
        "Rods",
        "Cones",
        "Rhodopsin",
        "The blind spot"
      ],
      "c": 1,
      "e": "Three types of cones provide colour vision."
    },
    {
      "q": "The visual pigment in rods is:",
      "o": [
        "Iodopsin",
        "Rhodopsin",
        "Melanin",
        "Haemoglobin"
      ],
      "c": 1,
      "e": "Rhodopsin (visual purple) is the rod pigment."
    },
    {
      "q": "The point of sharpest vision is the:",
      "o": [
        "Blind spot",
        "Fovea",
        "Cornea",
        "Iris"
      ],
      "c": 1,
      "e": "The fovea (yellow spot) is cone-rich."
    },
    {
      "q": "The blind spot lacks:",
      "o": [
        "Blood vessels",
        "Photoreceptors",
        "Pigment",
        "Nerves"
      ],
      "c": 1,
      "e": "It has no rods or cones — only the optic nerve exit."
    },
    {
      "q": "The three ear ossicles in order are:",
      "o": [
        "Stapes, incus, malleus",
        "Malleus, incus, stapes",
        "Incus, malleus, stapes",
        "Malleus, stapes, incus"
      ],
      "c": 1,
      "e": "Malleus → incus → stapes (hammer, anvil, stirrup)."
    },
    {
      "q": "The organ of hearing is the:",
      "o": [
        "Organ of Corti",
        "Semicircular canal",
        "Utricle",
        "Pinna"
      ],
      "c": 0,
      "e": "The organ of Corti in the cochlea detects sound."
    },
    {
      "q": "Balance is maintained by the:",
      "o": [
        "Cochlea",
        "Vestibular apparatus",
        "Eardrum",
        "Pinna"
      ],
      "c": 1,
      "e": "Semicircular canals, utricle and saccule sense balance."
    },
    {
      "q": "The Eustachian tube connects the middle ear to the:",
      "o": [
        "Nose",
        "Pharynx",
        "Cochlea",
        "Brain"
      ],
      "c": 1,
      "e": "It links the middle ear to the pharynx to equalise pressure."
    },
    {
      "q": "The eardrum is also called the:",
      "o": [
        "Oval window",
        "Tympanic membrane",
        "Basilar membrane",
        "Pinna"
      ],
      "c": 1,
      "e": "The tympanic membrane is the eardrum."
    },
    {
      "q": "White matter of the brain is rich in:",
      "o": [
        "Cell bodies",
        "Myelinated axons",
        "Cartilage",
        "Glands"
      ],
      "c": 1,
      "e": "Myelin gives white matter its colour."
    },
    {
      "q": "The brain stem comprises:",
      "o": [
        "Cerebrum, thalamus, pons",
        "Midbrain, pons, medulla",
        "Cerebellum, pons, medulla",
        "Thalamus, hypothalamus, pons"
      ],
      "c": 1,
      "e": "Midbrain + pons + medulla form the brain stem."
    },
    {
      "q": "Emotions and memory are governed by the:",
      "o": [
        "Cerebellum",
        "Limbic system",
        "Medulla",
        "Pons"
      ],
      "c": 1,
      "e": "The limbic system controls emotion and memory."
    },
    {
      "q": "Aqueous humor lies between the cornea and the:",
      "o": [
        "Retina",
        "Lens",
        "Choroid",
        "Optic nerve"
      ],
      "c": 1,
      "e": "Aqueous humor fills the space in front of the lens."
    },
    {
      "q": "Adjustment of lens curvature for focusing is called:",
      "o": [
        "Adaptation",
        "Accommodation",
        "Refraction",
        "Diffraction"
      ],
      "c": 1,
      "e": "The ciliary muscles change lens shape during accommodation."
    },
    {
      "q": "According to the all-or-none principle, an impulse:",
      "o": [
        "Varies with stimulus strength",
        "Fires fully or not at all",
        "Travels backward",
        "Needs no threshold"
      ],
      "c": 1,
      "e": "Above threshold, a full action potential fires; below it, none."
    }
  ],
  "match": [
    {
      "term": "Neuron",
      "def": "Unit of the nervous system"
    },
    {
      "term": "Nissl bodies",
      "def": "Granules in the cyton"
    },
    {
      "term": "Schwann cell",
      "def": "Forms the myelin sheath"
    },
    {
      "term": "Nodes of Ranvier",
      "def": "Gaps in myelin"
    },
    {
      "term": "−70 mV",
      "def": "Resting potential"
    },
    {
      "term": "Na⁺ influx",
      "def": "Causes depolarisation"
    },
    {
      "term": "K⁺ efflux",
      "def": "Causes repolarisation"
    },
    {
      "term": "Acetylcholine",
      "def": "A neurotransmitter"
    },
    {
      "term": "Dura mater",
      "def": "Outermost meninx"
    },
    {
      "term": "Corpus callosum",
      "def": "Joins cerebral hemispheres"
    },
    {
      "term": "Cerebellum",
      "def": "Balance and coordination"
    },
    {
      "term": "Medulla oblongata",
      "def": "Controls heartbeat & breathing"
    },
    {
      "term": "Hypothalamus",
      "def": "Temperature, hunger, thirst"
    },
    {
      "term": "Occipital lobe",
      "def": "Centre for vision"
    },
    {
      "term": "Rods",
      "def": "Dim-light photoreceptors"
    },
    {
      "term": "Cones",
      "def": "Colour vision"
    },
    {
      "term": "Organ of Corti",
      "def": "Hearing in the cochlea"
    },
    {
      "term": "Eustachian tube",
      "def": "Equalises ear pressure"
    }
  ],
  "pathways": [
    {
      "title": "Action potential at one point on an axon",
      "prompt": "The transient reversal and recovery of membrane polarity is the nerve impulse (action potential).",
      "steps": [
        "Resting potential (−70 mV, polarised)",
        "Stimulus opens Na⁺ channels",
        "Na⁺ influx → depolarisation (+30 mV)",
        "K⁺ efflux → repolarisation",
        "Na⁺/K⁺ pump restores resting state"
      ]
    },
    {
      "title": "Reflex arc (e.g. knee-jerk)",
      "prompt": "The reflex arc lets the body respond rapidly without involving conscious brain centres.",
      "steps": [
        "Stimulus detected by a receptor",
        "Sensory (afferent) neuron carries impulse",
        "Spinal cord / interneuron processes it",
        "Motor (efferent) neuron carries response",
        "Effector muscle or gland reacts"
      ]
    },
    {
      "title": "Chemical synaptic transmission",
      "prompt": "Chemical synapses convert an electrical signal into a chemical one and back, allowing one-way transmission.",
      "steps": [
        "Impulse reaches the axon terminal",
        "Ca²⁺ enters the terminal",
        "Vesicles release acetylcholine into the cleft",
        "Neurotransmitter binds post-synaptic receptors",
        "New impulse generated in the next neuron"
      ]
    },
    {
      "title": "Mechanism of hearing",
      "prompt": "The ear converts air-pressure waves into fluid waves and then into nerve impulses interpreted as sound.",
      "steps": [
        "Sound waves vibrate the tympanic membrane",
        "Ossicles (malleus→incus→stapes) amplify them",
        "Vibrations pass through the oval window",
        "Cochlear fluid moves the basilar membrane",
        "Hair cells fire the auditory nerve to the brain"
      ]
    }
  ]
};
