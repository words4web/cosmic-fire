import { HotspotItem, ServiceItem, IndustryItem, TechStep, ArticleItem } from '../types';

export const HERO_HOTSPOTS: HotspotItem[] = [
  {
    id: 'smoke-detection',
    name: 'Smoke Detection',
    shortName: 'Smoke Detection',
    category: 'Early Warning',
    description: 'Multi-criteria optical and thermal sensors calibrated for ultra-fast particle detection prior to visible flame generation.',
    specs: ['Dual-wavelength optical chamber', 'Zero false-alarm AI drift compensation', 'Addressable loop telemetry'],
    status: 'online',
    x: 58,
    y: 18,
    floor: 'Floor 04 — Executive Suite',
    iconName: 'ShieldAlert'
  },
  {
    id: 'fire-alarm',
    name: 'Fire Alarm',
    shortName: 'Fire Alarm',
    category: 'Notification & Evacuation',
    description: 'Synchronized visual strobes and multi-frequency directional voice acoustic arrays guiding safe egress across all occupant zones.',
    specs: ['95dB EN54 compliant sounders', 'High-candela multi-tap strobes', 'Dynamic pathway illumination'],
    status: 'online',
    x: 52,
    y: 31,
    floor: 'Floor 03 — Open Workspace',
    iconName: 'Bell'
  },
  {
    id: 'sprinkler-system',
    name: 'Sprinkler System',
    shortName: 'Sprinkler System',
    category: 'Active Suppression',
    description: 'Pre-action and wet-pipe rapid response fast-acting ESFR sprinkler heads with engineered hydraulic pipe network distribution.',
    specs: ['Quick-response thermal bulb (68°C)', 'K-Factor 14.0/16.8 high density', 'Monitored supervisory flow switches'],
    status: 'monitoring',
    x: 88,
    y: 17,
    floor: 'Roof & Level 04 Perimeter',
    iconName: 'Droplets'
  },
  {
    id: 'fire-control-panel',
    name: 'Fire Control Panel',
    shortName: 'Fire Control Panel',
    category: 'Core Command Hub',
    description: 'Central networked addressable intelligence unit continuously polling up to 4,000 sub-devices with redundant fiber link failover.',
    specs: ['Quad-loop EN54/UL864 Listed', 'Sub-millisecond loop isolation', 'Direct BMS & emergency service relay'],
    status: 'online',
    x: 75,
    y: 40,
    floor: 'Floor 02 — Server & Core Hub',
    iconName: 'Cpu'
  },
  {
    id: 'fire-extinguisher',
    name: 'Fire Extinguisher',
    shortName: 'Fire Extinguisher',
    category: 'Manual First Response',
    description: 'Strategically recessed clean-agent and multi-class pressurized extinguishing points with wireless pressure gauge monitoring.',
    specs: ['Class A, B, C & Electrical rated', 'Clean non-conductive residue-free agent', 'IoT pressure & tamper sensor'],
    status: 'online',
    x: 50,
    y: 52,
    floor: 'Floor 01 — Public Reception',
    iconName: 'Flame'
  },
  {
    id: 'emergency-exit',
    name: 'Emergency Exit',
    shortName: 'Emergency Exit',
    category: 'Safe Evacuation',
    description: 'Photoluminescent illuminated emergency egress signage with integrated fail-safe magnetic release and smoke barrier seals.',
    specs: ['3-Hour battery backup illumination', 'Positive pressure stairwell integration', 'Anti-panic push bar mechanism'],
    status: 'online',
    x: 91,
    y: 50,
    floor: 'Ground — East Perimeter Egress',
    iconName: 'LogOut'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'fire-detection',
    number: '01',
    title: 'Fire Detection Systems',
    tagline: 'Precision Early Warning Before Inception',
    category: 'Detection',
    description: 'State-of-the-art addressable optical, multisensor, aspirating smoke detection (ASD), and flame verification networks engineered for zero downtime and rapid spatial localization.',
    detailedSpecs: [
      'Aspirating Smoke Detection (ASD) with 0.001% obs/m sensitivity',
      'Infrared/Ultraviolet multi-spectrum flame detectors',
      'Linear heat sensing cables for tunnels and cable trays',
      'Intelligent drift compensation algorithm eliminating false alarms'
    ],
    keyBenefits: [
      'Pinpoint floor-by-floor coordinate pinpointing',
      'Ultra-early detection during smoldering phase',
      'Integrates seamlessly with HVAC smoke damper shutdowns'
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1200&q=80',
    schematicType: 'Optical Dispersion Array'
  },
  {
    id: 'fire-alarm',
    number: '02',
    title: 'Fire Alarm Systems',
    tagline: 'Coordinated Acoustic & Visual Evacuation',
    category: 'Notification',
    description: 'Intelligent multi-zoned voice evacuation (EVAC) and high-candela strobe networks ensuring rapid, calm, and phased egress compliance throughout multi-occupancy structures.',
    detailedSpecs: [
      'Multi-channel digital voice messaging with live override',
      'Synchronized ADA-compliant low-frequency 520Hz sounders',
      'Loop-powered addressable beacon sounders (EN54-3/EN54-23)',
      'Remote monitoring dialer over redundant 4G/IP mesh'
    ],
    keyBenefits: [
      'Phased vertical evacuation to prevent stairwell congestion',
      'Clear multilingual automated voice prompts',
      'Tested to UL 864 10th Edition and EN54 standard rigor'
    ],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    schematicType: 'Voice Egress Network'
  },
  {
    id: 'fire-suppression',
    number: '03',
    title: 'Clean Agent Fire Suppression',
    tagline: 'Waterless Extinguishment for Critical Assets',
    category: 'Suppression',
    description: 'Electrically non-conductive gaseous clean agents (FK-5-1-12, Novec™, Inergen, CO2) engineered to extinguish fires within 10 seconds without leaving residue or damaging critical electronic equipment.',
    detailedSpecs: [
      'Zero ozone depletion potential (ODP = 0) eco-friendly agents',
      'Rapid discharge: Complete agent release within 10 seconds',
      'Pre-discharge warning horns and abort switch stations',
      'Overpressure relief damper integration'
    ],
    keyBenefits: [
      'Safe for occupied spaces when engineered to design concentration',
      'Protects high-value data centers, server suites, and archival vaults',
      'Leaves zero liquid or powder residue—no cleanup downtime'
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    schematicType: 'Gaseous Extinguishment Loop'
  },
  {
    id: 'sprinkler-systems',
    number: '04',
    title: 'Sprinkler Systems & Water Deluge',
    tagline: 'Engineered Hydraulic Fire Suppression',
    category: 'Suppression',
    description: 'Complete wet pipe, dry pipe, pre-action, and deluge sprinkler solutions backed by precision hydraulic calculations, flow testing, and monitored control valves.',
    detailedSpecs: [
      'ESFR (Early Suppression Fast Response) high-ceiling warehouse heads',
      'Double-interlock pre-action systems for sensitive environments',
      'UL/FM rated diesel and electric fire booster pump skids',
      'Tamper-monitored OS&Y gate valves with supervisory telemetry'
    ],
    keyBenefits: [
      'Hydraulically calculated for maximum water density economy',
      'Prevents accidental water damage via double-interlock logic',
      'Meets NFPA 13, 14, 20, and 25 compliance thresholds'
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    schematicType: 'Hydraulic Riser System'
  },
  {
    id: 'fire-risk-assessment',
    number: '05',
    title: 'Fire Risk Assessment',
    tagline: 'Rigorous Hazard Analysis & Gap Audit',
    category: 'Consulting',
    description: 'Comprehensive structural, operational, and regulatory assessments conducted by accredited fire protection engineers (FPE) to uncover hidden vulnerabilities and secure statutory compliance.',
    detailedSpecs: [
      'Structural compartmentation and fire barrier integrity checks',
      'Combustible load and thermal energy calculations',
      'Egress width and escape travel distance optimization',
      'Comprehensive digital compliance report with prioritized remediation'
    ],
    keyBenefits: [
      'Protects liability and maintains insurance policy validity',
      'Clear, actionable roadmap categorized by risk severity',
      'Identifies life-safety bottlenecks before building sign-off'
    ],
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
    schematicType: 'Compartmentation Audit'
  },
  {
    id: 'inspection-maintenance',
    number: '06',
    title: 'Inspection & Maintenance',
    tagline: 'Continuous Operational Readiness',
    category: 'Service',
    description: 'Scheduled preventive maintenance, annual hydrostatic testing, pump flow testing, and 24/7 rapid emergency repair to guarantee equipment operates without compromise.',
    detailedSpecs: [
      'Quarterly and annual testing per NFPA 25 and BS 5839',
      'Calibrated aerosol sensitivity testing of all detection heads',
      'Fire pump churn and full-flow rated capacity certification',
      'Cloud-synced digital maintenance certificates and asset tagging'
    ],
    keyBenefits: [
      'Guaranteed SLA response times for emergency corrective callouts',
      'Transparent digital logbooks accessible via online portal',
      'Prolongs asset lifespan and avoids costly municipal citations'
    ],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    schematicType: 'Preventative Cycle'
  },
  {
    id: 'emergency-lighting',
    number: '07',
    title: 'Emergency Lighting & Signage',
    tagline: 'Illuminating Critical Evacuation Paths',
    category: 'Egress',
    description: 'Self-testing architectural emergency luminaires and photoluminescent wayfinding systems ensuring uninterrupted illumination of stairwells, corridors, and emergency exits during total power loss.',
    detailedSpecs: [
      'Central battery systems (CBS) with DALI automated testing',
      'High-temperature LiFePO4 battery packs with 3-hour minimum runtime',
      'Anti-glare optical distribution directed along escape path floor',
      'Surface and recessed architectural finishes blending into interior design'
    ],
    keyBenefits: [
      'Automated remote diagnostics without manual key-switch testing',
      'Guarantees 1 Lux floor illumination along center lines',
      'Compliant with BS 5266, NFPA 101, and EN 1838'
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    schematicType: 'Central Battery Network'
  },
  {
    id: 'fire-safety-consultation',
    number: '08',
    title: 'Fire Safety Engineering & Consultation',
    tagline: 'Architectural Co-Design & Performance-Based Strategy',
    category: 'Engineering',
    description: 'Expert guidance during preliminary architectural masterplanning, computational fluid dynamics (CFD) smoke modeling, and negotiations with local authorities having jurisdiction (AHJ).',
    detailedSpecs: [
      '3D Computational Fluid Dynamics (CFD) smoke movement modeling',
      'Evacuation flow simulations using agent-based pedestrian analytics',
      'Performance-based engineering alternatives for non-prescriptive architecture',
      'Coordination with AHJ, municipal fire departments, and insurers'
    ],
    keyBenefits: [
      'Unlocks creative architectural freedom through engineering proof',
      'Reduces costly retrofits by solving egress geometry early',
      'Delivers stamped, certified fire protection engineering packages'
    ],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    schematicType: 'CFD Smoke Model'
  }
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'commercial',
    name: 'Commercial & Corporate Towers',
    category: 'High-Rise & Corporate',
    description: 'Phased vertical evacuation, intelligent HVAC smoke dampers, and integrated command centers for dense corporate headquarters.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    riskProfile: 'High occupant density & multi-floor vertical evacuation complexity',
    primarySystems: ['Addressable Voice EVAC', 'Pressurized Stairwell Dampers', 'High-Rise Riser Standpipes'],
    standardsRef: 'NFPA 101 / EN 54-16'
  },
  {
    id: 'data-tech',
    name: 'Data Centers & Tech Infrastructure',
    category: 'Critical Infrastructure',
    description: 'Zero-water gaseous suppression and hypersensitive aspirating smoke detection safeguarding continuous server uptime.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    riskProfile: 'High heat density, non-water asset preservation, uninterrupted service',
    primarySystems: ['Novec™ Clean Agent', 'ASD Early Warning', 'Pre-Action Double Interlock'],
    standardsRef: 'NFPA 75 / NFPA 2001'
  },
  {
    id: 'industrial',
    name: 'Industrial Facilities & Manufacturing',
    category: 'Heavy Manufacturing',
    description: 'Ruggedized explosion-proof detection, thermal imaging monitoring, and high-flow deluge suppression systems.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    riskProfile: 'Flammable solvents, dust deflagration, heavy machinery heat sources',
    primarySystems: ['Explosion Venting & Isolation', 'Deluge Foam Systems', 'UV/IR Flame Detectors'],
    standardsRef: 'NFPA 30 / NFPA 652'
  },
  {
    id: 'warehouses',
    name: 'Logistics & Automated Warehouses',
    category: 'Storage & Supply Chain',
    description: 'Fast-response ceiling ESFR sprinkler arrays engineered to penetrate high-bay racking and protect vertical commodity storage.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    riskProfile: 'High fire-load stacking, automated robotic hazards, rapid vertical spread',
    primarySystems: ['ESFR High-Density Sprinklers', 'In-Rack Sprinkler Lines', 'Beam Smoke Detectors'],
    standardsRef: 'NFPA 13 / FM Global 8-9'
  },
  {
    id: 'hospitality',
    name: 'Luxury Hospitality & Resorts',
    category: 'Hospitality',
    description: 'Aesthetically concealed detection and fast-acting silent suppression designed around guest safety and architectural elegance.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    riskProfile: 'Sleeping unfamiliar occupants, commercial kitchen fire risks, heritage aesthetics',
    primarySystems: ['Concealed Sprinkler Plates', 'Commercial Kitchen Wet Chemical', 'Zoned Voice Alarm'],
    standardsRef: 'NFPA 96 / NFPA 72'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Medical Centers',
    category: 'Institutional',
    description: 'Defend-in-place compartmentation, surgical theater inert gas systems, and medical gas zone isolation.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    riskProfile: 'Non-ambulatory patients, high-oxygen atmospheres, uninterrupted life support',
    primarySystems: ['Horizontal Defend-in-Place Compartments', 'MRI Clean Agent', 'Automatic Smoke Dampers'],
    standardsRef: 'NFPA 99 / HTM 05-02'
  },
  {
    id: 'education',
    name: 'Educational Campuses & Research Labs',
    category: 'Education',
    description: 'Tamper-resistant student-safe sensors, laboratory chemical fume suppression, and campus-wide unified mass notification.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    riskProfile: 'High student foot traffic, laboratory chemical risks, large campus footprint',
    primarySystems: ['Campus Mass Notification', 'Chemical Fume Hood Suppression', 'Vandal-Resistant Sounders'],
    standardsRef: 'NFPA 72 / NFPA 45'
  },
  {
    id: 'residential',
    name: 'Premium Residential & Mixed-Use',
    category: 'Multi-Family Residential',
    description: 'Individual apartment monitored heat/smoke alarms, corridor smoke ventilation, and resident early warning panels.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    riskProfile: 'Unattended cooking, sleeping risk, shared common egress corridors',
    primarySystems: ['Residential Concealed Sprinklers', 'AOV Corridor Smoke Shafts', 'Central Monitored Panel'],
    standardsRef: 'NFPA 13R / BS 9251'
  }
];

export const TECH_STEPS: TechStep[] = [
  {
    step: '01',
    title: 'Detection',
    shortDesc: 'Continuous multi-spectrum sensing across thermal, optical, and chemical vectors.',
    fullDesc: 'Advanced optical chambers and dual-wave IR/UV sensors analyze combustion particles in microsecond cycles. Ambient temperature gradients and air currents are normalized to eliminate false triggers from dust or steam.',
    responseTime: '< 3.2 Seconds',
    hardware: 'Optical-Thermal Multisensors & ASD',
    protocol: 'Modbus / BACnet / IP Loop',
    icon: 'Radio'
  },
  {
    step: '02',
    title: 'Alert & Notification',
    shortDesc: 'Instantaneous multi-zone acoustic, visual, and operational notification broadcasting.',
    fullDesc: 'Upon confirmation, the network triggers synchronized directional strobes, directional tone frequencies (520Hz for sleeping occupants), and automated phased evacuation messaging to preserve stairwell throughput.',
    responseTime: '< 0.8 Seconds',
    hardware: 'Synchronized Voice Sounder Array',
    protocol: 'EN54-16 Certified Audio Mesh',
    icon: 'Megaphone'
  },
  {
    step: '03',
    title: 'Containment & Response',
    shortDesc: 'Automated mechanical isolation of smoke barriers, elevator recall, and HVAC dampers.',
    fullDesc: 'Fire doors release magnetically to seal compartment boundaries. Fire dampers drop to halt toxic smoke circulation. Elevators recall to ground floor and mechanical stairwell pressurization fans activate.',
    responseTime: '< 4.5 Seconds',
    hardware: 'Supervisory Relay & Damper Actuators',
    protocol: 'NFPA 72 Command Loop',
    icon: 'Sliders'
  },
  {
    step: '04',
    title: 'Suppression & Protection',
    shortDesc: 'Targeted discharge of clean agent or high-density water deluge to neutralize ignition.',
    fullDesc: 'Suppression mechanisms execute based on zone zoning: clean waterless gas discharges in server suites, or pre-action deluge heads activate directly above the thermal footprint, protecting adjacent zones from secondary water spread.',
    responseTime: '< 10 Seconds',
    hardware: 'Fast-Acting Pre-Action & Clean Gas Discharge',
    protocol: 'Monitored Supervisory Hydraulics',
    icon: 'ShieldCheck'
  }
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'clean-agent-vs-water',
    title: 'Clean Agent vs. Sprinkler Systems in Mission-Critical Facilities',
    category: 'Engineering Analysis',
    date: 'March 14, 2026',
    readTime: '6 min read',
    summary: 'A technical comparison of waterless suppression (Novec™ and Inergen) against traditional pre-action sprinkler systems for modern enterprise data centers.',
    author: 'David Chen, PE — Principal Fire Protection Engineer',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    content: [
      'In high-density computing environments, the introduction of conductive municipal water can cause catastrophic dielectric breakdown and permanent semiconductor loss. Clean agent gaseous suppression systems operate by removing heat or oxygen without conducting electrical current.',
      'Modern systems utilizing FK-5-1-12 discharge in under ten seconds, reducing room temperatures below the threshold of continued combustion while maintaining breathable atmosphere levels for personnel evacuation.',
      'When designing dual-tier protection, engineers typically specify clean agent flooding as the primary first-response layer, backed up by dry-pipe double-interlock sprinklers as a structural containment failsafe.'
    ]
  },
  {
    id: 'high-rise-egress-dynamics',
    title: 'Phased Evacuation Dynamics in Contemporary Commercial Towers',
    category: 'Life Safety Planning',
    date: 'February 28, 2026',
    readTime: '8 min read',
    summary: 'How computational crowd egress simulations and zoned voice alarms mitigate dangerous stairwell bottlenecking during high-occupancy emergency scenarios.',
    author: 'Elena Rostova, MSc — Egress & Human Behavior Specialist',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    content: [
      'Simultaneous building-wide evacuation in supertall structures (above 30 stories) often creates dangerous stairwell stagnation at lower landing junctions. Modern fire safety engineering prioritizes phased vertical evacuation.',
      'The fire floor and the immediately adjacent upper and lower floors are notified first with clear, localized acoustic commands, while other levels receive cautionary hold messages.',
      'Coupled with positive stairwell pressurization fans that physically push smoke back from escaping occupants, this methodology cuts average total building clearance times by over 40%.'
    ]
  },
  {
    id: 'predictive-maintenance-compliance',
    title: 'Transitioning from Reactive Fire Audits to Continuous Telemetry',
    category: 'Maintenance & Compliance',
    date: 'January 19, 2026',
    readTime: '5 min read',
    summary: 'Why manual clipboard inspections are giving way to real-time IoT loop monitoring, self-testing sounders, and automated NFPA 25 audit reporting.',
    author: 'Marcus Vance — Director of Technical Operations',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    content: [
      'Traditional annual testing models leave a potential 364-day blind spot where unmonitored isolation valves may be left closed or detector optics coated in industrial particulate.',
      'Addressable loop panels with live telemetry continuously measure chamber optical baseline drift, supervisory contact resistance, and emergency lighting battery cell capacitance.',
      'Facility directors gain live digital assurance that systems will activate flawlessly if an ignition event occurs, while providing timestamped digital certificates for statutory compliance.'
    ]
  }
];

export const TRUST_POINTS = [
  {
    title: 'Prevention-First Philosophy',
    description: 'We identify systemic vulnerabilities and thermal anomalies before ignition occurs, minimizing business disruption and preserving life safety.'
  },
  {
    title: 'Rigorous Engineering Standards',
    description: 'Every installation is modeled to NFPA, EN, BS, and local municipal fire codes with stamped hydraulic calculations and CFD simulations.'
  },
  {
    title: 'True Integrated Ecosystems',
    description: 'Seamless interconnection between detection, acoustic evacuation, mechanical smoke dampers, access control, and emergency services.'
  },
  {
    title: '24/7 Life-Safety Readiness',
    description: 'Round-the-clock monitoring and dedicated rapid-response technicians ensuring continuous certification and zero regulatory blind spots.'
  }
];
