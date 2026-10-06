import { ServiceItem, AreaItem, FAQItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Defence Movers & Packers',
  tagline: 'Trusted Movers & Packers in DHA Karachi & Throughout Karachi',
  phone: '0315-3615444',
  phoneRaw: '03153615444',
  phoneInternational: '+923153615444',
  whatsappUrl: 'https://wa.me/923153615444',
  email: 'defensemoverspk@gmail.com',
  address: 'Office #26/02, Old Quaid-e-Azam Square, Near X.20, Adjacent to Edhi Complex, Malir Cantt, Karachi, Pakistan',
  officeShort: 'Office #26/02, Old Quaid-e-Azam Square, Malir Cantt, Karachi',
  workingHours: 'Monday – Sunday: 8:00 AM – 10:00 PM',
  primaryFocus: 'Movers and Packers in DHA Karachi',
  mapQuery: 'Office 26/02 Old Quaid-e-Azam Square Malir Cantt Karachi Pakistan',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Old+Quaid-e-Azam+Square+Malir+Cantt+Karachi',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'home-shifting',
    title: 'Home Shifting',
    slug: 'home-shifting',
    shortDesc: 'Complete residential relocation with careful disassembly, protective wrapping, and doorstep placement.',
    fullDesc: 'Relocating your household requires meticulous planning, durable packing supplies, and trustworthy handling. Our home shifting service covers single-room apartments to expansive multi-storey houses across DHA Karachi and all Karachi neighborhoods. We handle every item—from fragile glassware and LED screens to hefty wardrobes—with systematic care.',
    features: [
      'Comprehensive pre-move survey and planning',
      'Protective bubble wrapping for all fragile items',
      'Wardrobe, bed, and dining table disassembly and reassembly',
      'Room-by-room box labeling for stress-free unpacking',
      'Timely loading, transit, and careful unloading'
    ],
    materialsIncluded: ['Corrugated boxes', '3-ply bubble wrap', 'Stretch film', 'Adhesive packing tape', 'Blanket padding'],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Movers carefully carrying packed household moving boxes in Karachi residence'
  },
  {
    id: 'house-moving',
    title: 'House Moving',
    slug: 'house-moving',
    shortDesc: 'Specialized shifting solutions tailored for 500, 1000, and 2000 sq yd bungalows and villas in DHA.',
    fullDesc: 'Moving an entire standalone bungalow or duplex in DHA Karachi involves multiple floors, heavy solid-wood fixtures, outdoor patio furniture, and delicate chandeliers. Our experienced crew coordinates every phase, utilizing heavy-duty dollies and specialized moving straps to maneuver through wide staircases and gated compounds without scuffing walls or doorframes.',
    features: [
      'Multi-storey logistics management and balcony hoists when required',
      'Protection of marble floors and stair handrails',
      'Careful handling of outdoor, lawn, and rooftop items',
      'Coordination for large volume moving in single or multiple truck trips',
      'Placement of heavy furniture into designated rooms'
    ],
    materialsIncluded: ['Heavy corrugated cartons', 'Floor protection sheets', 'Corner guards', 'Thick furniture blankets'],
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Modern residential villa shifting and house moving in DHA Karachi'
  },
  {
    id: 'office-relocation',
    title: 'Office Relocation',
    slug: 'office-relocation',
    shortDesc: 'Organized commercial moving for corporate offices, IT workstations, conference rooms, and retail spaces.',
    fullDesc: 'We understand that corporate relocations require minimal downtime. Whether moving an office within DHA Commercial phases or shifting to I.I. Chundrigar Road, Clifton, or Shahrah-e-Faisal, our team organizes serial-numbered labeling of computer workstations, safe handling of servers, and systematic reassembly of modular office desks.',
    features: [
      'Weekend and after-hours shifting to minimize business interruption',
      'Anti-static bubble wrap for computers, monitors, and servers',
      'Organized document and file cabinet tagging',
      'Executive conference table and partition dismantling',
      'Direct coordination with facility management and building managers'
    ],
    materialsIncluded: ['Anti-static foam & wrap', 'Heavy duty file boxes', 'Shrink wrap', 'Heavy machinery dollies'],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Professional corporate office relocation and workstation shifting in Karachi'
  },
  {
    id: 'packing-unpacking',
    title: 'Packing & Unpacking',
    slug: 'packing-unpacking',
    shortDesc: 'Multi-layer export-grade packing utilizing 3-ply bubble wrap, corrugated sheets, and stretch films.',
    fullDesc: 'Superior packing is the cornerstone of damage-free moving. We provide premium industrial-grade packing materials. Our packers individually cushion bone china, glassware, crystal light fixtures, framed artwork, and television screens with multi-layer bubble wrap, edge guards, and custom crating where needed.',
    features: [
      'Cushioned wrapping for kitchenware and fine chinaware',
      'Double-wall corrugated boxes for heavy books and archives',
      'Stretch film sealing against moisture, dust, and rain',
      'Optional complete unpacking and debris removal service',
      'Color-coded box markers by room category'
    ],
    materialsIncluded: ['Multi-layer bubble wrap', 'Heavy cardboard boxes', 'Stretch wrap rolls', 'Foam edge protectors', 'Fragile stickers'],
    imageUrl: 'https://images.unsplash.com/photo-1603712780758-d6105f2b60f1?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Movers carefully packing household items with protective wrapping into moving boxes'
  },
  {
    id: 'furniture-shifting',
    title: 'Furniture Shifting',
    slug: 'furniture-shifting',
    shortDesc: 'Carpentry de-assembly and secure shifting for beds, wardrobes, dining tables, and plush sofas.',
    fullDesc: 'Heavy solid sheesham, oak, and imported particle-board furniture require dedicated carpentry skills to dismantle safely. Our shifting crew includes experienced carpenters equipped with proper tools to take down complex wardrobes, hydraulic beds, and dining sets, and securely reassemble them in your new residence.',
    features: [
      'Skilled carpentry team with power drills and hardware organizers',
      'Safe removal and reassembly of bed headboards and side tables',
      'Thick quilt and stretch wrapping for luxury fabric and leather sofas',
      'Tempered glass table top protection with padded foam corners',
      'Hardware pouching to ensure not a single screw is misplaced'
    ],
    materialsIncluded: ['Furniture quilts', 'Stretch film', 'Hardware fastener bags', 'Edge bumper guards'],
    imageUrl: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Movers wrapping and protecting furniture pieces with heavy padding'
  },
  {
    id: 'loading-unloading',
    title: 'Loading & Unloading',
    slug: 'loading-unloading',
    shortDesc: 'Physical moving crew equipped with dollies, lifting belts, and vehicle ramps for secure handling.',
    fullDesc: 'If you already have transport arranged or only require skilled manual labor to load and unload a truck or container, our professional crew is available on-demand. Every crew member is trained in ergonomic lifting techniques and weight balancing inside cargo trucks to prevent in-transit shifting.',
    features: [
      'Experienced and vetted moving crew',
      'Balanced truck bed stacking to avoid transit friction',
      'Lifting straps for heavy washing machines and double-door refrigerators',
      'Careful ground-to-upper-floor carrying via stairs or cargo lifts',
      'Courteous, punctual, and disciplined service'
    ],
    materialsIncluded: ['Heavy-duty hand trucks', 'Moving harnesses', 'Ramps', 'Tie-down ratchet straps'],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Careful loading of shifting items into commercial transport truck'
  },
  {
    id: 'local-karachi-moving',
    title: 'Local Karachi Moving',
    slug: 'local-karachi-moving',
    shortDesc: 'Prompt intra-city shifting connecting every town from Malir Cantt to DHA, Clifton, and Gulshan.',
    fullDesc: 'Karachi’s vast urban layout demands drivers who know route regulations, peak-traffic timings, and cantonment entry procedures. We provide swift, reliable local shifting connecting any two points in Karachi with fully enclosed and open-bed vehicles tailored to your load size.',
    features: [
      'Covering all 18 towns and cantonment zones of Karachi',
      'Flexible scheduling including early morning or evening transit',
      'Selection of pickup vehicles (Mazda, Suzuki Shahzor, closed container)',
      'Direct point-to-point transit with no intermediate transfers',
      'Upfront transparent pricing without sudden surcharge surprises'
    ],
    materialsIncluded: ['Vehicle tarpaulins', 'Fastening ropes', 'Padding blankets'],
    imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'House shifting and moving items inside a Karachi home'
  },
  {
    id: 'dha-moving-services',
    title: 'DHA Moving Services',
    slug: 'dha-moving-services',
    shortDesc: 'Premium specialized moving tailored for DHA Phase 1 through 8, Emaar Oceanfront, and Creek Vistas.',
    fullDesc: 'Defence Housing Authority (DHA) Karachi has specific cantonment regulations, security checkpoints, and unique property architectures. From seaside penthouses in Phase 8 to heritage residences in Phase 1 and 2, our team understands local gate pass protocols, high-rise service elevator requirements, and strict residential timings.',
    features: [
      'Direct familiarity with Phase 1 to Phase 8 streets and commercial zones',
      'Compliance with DHA Cantonment entry and security pass regulations',
      'Special procedures for high-rise apartments (Creek Vistas, Emaar Oceanfront)',
      'Discreet, low-noise handling suitable for DHA quiet residential streets',
      'Dedicated supervisor on-site for the duration of the shift'
    ],
    materialsIncluded: ['Premium 3-ply bubble wrap', 'New double-wall corrugated cartons', 'Floor and wall protective covers'],
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Movers moving furniture and goods in a premium DHA Karachi neighborhood'
  },
  {
    id: 'intercity-moving',
    title: 'Intercity Moving',
    slug: 'intercity-moving',
    shortDesc: 'Long-distance relocations from Karachi to Lahore, Islamabad, Rawalpindi, Multan, and nationwide.',
    fullDesc: 'Moving between provinces requires superior heavy-duty packaging, secure waterproof container trucks, and reliable drivers. We transport household goods and corporate cargo from Karachi to Lahore, Islamabad, Rawalpindi, Faisalabad, Peshawar, and Quetta with sealed container trucks and real-time transit communication.',
    features: [
      'Dedicated closed container trucks (16ft, 20ft, and 24ft options)',
      'Waterproof sealing and tarpaulin strapping for all weather conditions',
      'Numbered itemized inventory lists provided at loading',
      'Direct point-to-point intercity routes with no cross-docking',
      'Doorstep delivery with unloading and furniture placement at destination'
    ],
    materialsIncluded: ['Heavy wooden crating when required', 'Waterproof tarpaulin sheets', 'Heavy corrugated rolls', 'Seal locks'],
    imageUrl: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Long distance highway cargo container truck for intercity moving from Karachi'
  },
  {
    id: 'commercial-moving',
    title: 'Commercial Moving',
    slug: 'commercial-moving',
    shortDesc: 'Custom shifting for retail outlets, clinics, schools, warehouses, and financial institutions.',
    fullDesc: 'Beyond standard offices, we cater to retail boutiques, medical equipment moves, educational institutes, and warehousing inventory shifts across Karachi. We deploy the right manpower, heavy lifting equipment, and transport vehicles to move inventory, display fixtures, and sensitive commercial assets.',
    features: [
      'Inventory count verification and batch-wise boxing',
      'Safe shifting of glass showcases, display counters, and shelving racks',
      'Experienced handlers for heavy commercial appliances and machinery',
      'Flexible phased moving schedules to prevent revenue loss',
      'Official commercial quotation and billing support'
    ],
    materialsIncluded: ['Industrial stretch wrap', 'Heavy pallet wraps', 'Cushioning foams', 'Number-coded tags'],
    imageUrl: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200',
    imageAlt: 'Commercial moving and logistics inventory handling'
  }
];

export const DHA_PHASES_DATA = [
  {
    phase: 'DHA Phase 1',
    description: 'Near Korangi Road & Sunset Boulevard. Established bungalows, portions, and commercial corridors. Smooth access routes for shifting trucks.',
    popularAreas: 'Sunset Blvd, Commercial Area A & B, Korangi Road junction'
  },
  {
    phase: 'DHA Phase 2 & Phase 2 Ext',
    description: 'Central DHA location connecting Sunset Way and Korangi Road. Active residential houses, commercial hubs, and nearby institutions.',
    popularAreas: 'Sunset Way, 1st to 24th Commercial Streets, Phase 2 Extension'
  },
  {
    phase: 'DHA Phase 3',
    description: 'Adjacent to Gizri and Clifton. Features large residential bungalows and commercial strips. High demand for delicate villa shifting.',
    popularAreas: 'Gizri Road, Commercial Area C & D, Khayaban-e-Iqbal border'
  },
  {
    phase: 'DHA Phase 4',
    description: 'Popular residential zone around Nisar Shaheed Park. 500 & 1000 sq yd houses, quiet lanes, 9th & 10th Commercial streets.',
    popularAreas: 'Nisar Shaheed Park, 9th Commercial, 10th Commercial, Sunset Avenue'
  },
  {
    phase: 'DHA Phase 5 & Phase 5 Ext',
    description: 'One of the most active hubs in DHA. Khayaban-e-Shamsheer, Saba, Badban, and Shahbaz Commercial. High volume of luxury home and office moves.',
    popularAreas: 'Khayaban-e-Shamsheer, Saba Avenue, Badban, Shahbaz Commercial, 26th Street'
  },
  {
    phase: 'DHA Phase 6',
    description: 'Sprawling residential sector with Khayaban-e-Bukhari, Seher, Muslim, Nishat, and Ittehad. Large bungalows, executive villas, and trendy commercial spaces.',
    popularAreas: 'Khayaban-e-Bukhari, Khayaban-e-Seher, Khayaban-e-Muslim, Nishat, Ittehad'
  },
  {
    phase: 'DHA Phase 7 & Phase 7 Ext',
    description: 'Spacious planned sector featuring Jami Commercial, Rahat Commercial, and modern duplexes. Continuous residential development and house shifting.',
    popularAreas: 'Jami Commercial, Rahat Commercial, Khayaban-e-Hilal, Khayaban-e-Jami'
  },
  {
    phase: 'DHA Phase 8',
    description: 'The largest and most modern phase bordering the Arabian Sea. Zone A to E, Creek Vistas high-rises, and Emaar Oceanfront / Crescent Bay luxury towers.',
    popularAreas: 'Zone A to E, Creek Vistas, Emaar Crescent Bay, Sahil Avenue, Edhi Avenue'
  }
];

export const KARACHI_AREAS_DATA: AreaItem[] = [
  {
    name: 'DHA Karachi',
    category: 'DHA',
    popularFor: 'Phase 1 to Phase 8, Emaar Oceanfront, Creek Vistas',
    description: 'Our primary service area with dedicated crews for luxury bungalow moves, apartments, and commercial shifts.'
  },
  {
    name: 'Clifton',
    category: 'South Karachi',
    popularFor: 'Blocks 1-9, Boat Basin, Sea View, Bath Island, Shireen Jinnah',
    description: 'Prompt moving for apartments, vintage bungalows, corporate offices, and coastal residences.'
  },
  {
    name: 'PECHS',
    category: 'East Karachi',
    popularFor: 'Blocks 1-6, Tariq Road, Khalid Bin Walid Road, Kashmir Road',
    description: 'Historic residential neighborhood with active commercial outlets requiring careful furniture handling.'
  },
  {
    name: 'Gulshan-e-Iqbal',
    category: 'East Karachi',
    popularFor: 'Blocks 1-20, University Road, Rashid Minhas Road, Disco Bakery',
    description: 'High-density residential hub with frequent apartment and family house shifting requirements.'
  },
  {
    name: 'Gulistan-e-Johar',
    category: 'East Karachi',
    popularFor: 'Blocks 1-20, Kamran Chowrangi, Safoora, Continental Bakery',
    description: 'Sprawling residential apartments and townhouses, served with prompt loading and elevator access handling.'
  },
  {
    name: 'North Nazimabad',
    category: 'Central Karachi',
    popularFor: 'Blocks A to N, Hyderi Market, Five Star Chowrangi, Sakhi Hassan',
    description: 'Planned residential blocks with spacious family homes and bustling commercial markets.'
  },
  {
    name: 'Nazimabad',
    category: 'Central Karachi',
    popularFor: 'Blocks 1 to 5, Golimar, Paposh Nagar, Inquiry Office',
    description: 'Traditional neighborhoods requiring agile vehicles to navigate busy streets and multi-family portions.'
  },
  {
    name: 'Federal B Area',
    category: 'Central Karachi',
    popularFor: 'Blocks 1 to 22, Water Pump, Ayesha Manzil, Yasinabad',
    description: 'Established family quarters with regular inter-neighborhood and intercity shifting needs.'
  },
  {
    name: 'Malir & Malir Cantt',
    category: 'Malir & Cantt',
    popularFor: 'Check Posts 1-6, Cantt Bazar, DOHS, Model Colony, Kala Board',
    description: 'Home to our office. Seamless cantonment pass coordination, secure gate entries, and timely service.'
  },
  {
    name: 'Shah Faisal Colony',
    category: 'Malir & Cantt',
    popularFor: 'Flyover junction, Green Town, Drigh Road station area',
    description: 'Rapid access connecting Shahrah-e-Faisal and Malir for fast local house and commercial moves.'
  },
  {
    name: 'Korangi & Landhi',
    category: 'South Karachi',
    popularFor: 'Korangi Industrial Area, Bilal Colony, Landhi Babar Market',
    description: 'Both residential shifting and commercial/industrial machinery transport support.'
  },
  {
    name: 'Saddar & Downtown',
    category: 'South Karachi',
    popularFor: 'Saddar, Kharadar, Mithadar, Burns Road, Civil Hospital area',
    description: 'Specialized scheduling for dense heritage streets, after-hours shifts, and commercial shops.'
  },
  {
    name: 'Bahadurabad & Dhoraji',
    category: 'East Karachi',
    popularFor: 'Bahadurabad Chowrangi, Sharfabad, CP Berar Society, Dhoraji Colony',
    description: 'Prestigious residential societies with premium furniture, crockery, and home shifting needs.'
  },
  {
    name: 'Tariq Road & Bahadur Shah',
    category: 'East Karachi',
    popularFor: 'Commercial strip, Liberty Chowrangi, nearby residential apartments',
    description: 'Commercial shop fit-out shifting and residential portion moves.'
  },
  {
    name: 'Scheme 33 & Maymar',
    category: 'Highway & Suburbs',
    popularFor: 'Gulshan-e-Maymar, Saadi Town, Kiran Hospital Road, Teachers Society',
    description: 'Fast expanding modern housing societies along the Super Highway and northern corridor.'
  },
  {
    name: 'Bahria Town Karachi & DCK',
    category: 'Highway & Suburbs',
    popularFor: 'Precinct 1-35, Midway Commercial, DHA City Karachi (Super Highway)',
    description: 'Dedicated long-distance shifting runs with sealed cargo trucks for gated highway communities.'
  }
];

export const INTERCITY_ROUTES = [
  { destination: 'Karachi to Lahore', distance: 'Approx 1,220 km', duration: '24–36 hrs transit', frequency: 'Regular dedicated trips' },
  { destination: 'Karachi to Islamabad / Rawalpindi', distance: 'Approx 1,410 km', duration: '28–40 hrs transit', frequency: 'Regular dedicated trips' },
  { destination: 'Karachi to Faisalabad', distance: 'Approx 1,100 km', duration: '22–32 hrs transit', frequency: 'Scheduled services' },
  { destination: 'Karachi to Multan', distance: 'Approx 900 km', duration: '18–26 hrs transit', frequency: 'Frequent trips' },
  { destination: 'Karachi to Hyderabad', distance: 'Approx 160 km', duration: 'Same-day service', frequency: 'Daily runs' },
  { destination: 'Karachi to Sukkur', distance: 'Approx 480 km', duration: '10–14 hrs transit', frequency: 'Regular services' },
  { destination: 'Karachi to Peshawar', distance: 'Approx 1,580 km', duration: '36–48 hrs transit', frequency: 'Direct container trips' },
  { destination: 'Karachi to Quetta', distance: 'Approx 690 km', duration: '18–24 hrs transit', frequency: 'Scheduled services' }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'How do I receive a quotation for moving in DHA Karachi?',
    answer: 'Simply share your move details through our online quote form or directly on WhatsApp at 0315-3615444. Based on your pickup location, destination, and approximate household or office items, our moving coordinator will provide a clear, comprehensive quotation without hidden charges.'
  },
  {
    question: 'Do you arrange DHA and Cantonment gate passes for moving trucks?',
    answer: 'Yes. For moves within DHA Karachi and Malir Cantt, we guide and coordinate vehicle details, driver CNIC documentation, and timing to ensure smooth compliance with DHA / Cantonment board security checkpoint regulations.'
  },
  {
    question: 'Do your movers dismantle and reassemble furniture like beds and wardrobes?',
    answer: 'Yes. Our moving crew includes experienced carpenters equipped with the proper power and manual tools. We systematically dismantle double beds, king-size master beds, dressing tables, and modular wardrobes, pack the screws and hardware into labeled pouches, and reassemble them at your new location.'
  },
  {
    question: 'What packing materials do you bring on moving day?',
    answer: 'We provide heavy-duty 3-ply corrugated boxes, industrial 3-layer bubble wrap for delicate glass and electronics, stretch wrap film to protect upholstery from dirt and moisture, adhesive packing tapes, and thick furniture padding quilts.'
  },
  {
    question: 'How far in advance should I book my move in Karachi?',
    answer: 'We recommend booking 2 to 4 days ahead to secure your preferred morning or weekend time slot. However, we also cater to urgent, same-day moving requests across Karachi based on truck and crew availability.'
  },
  {
    question: 'Do you provide shifting to other cities outside Karachi?',
    answer: 'Yes. We offer nationwide intercity moving from Karachi to Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Hyderabad, Peshawar, Quetta, and all other major cities using sealed, weather-tight container trucks.'
  },
  {
    question: 'How can I get an instant quote or book via WhatsApp?',
    answer: 'You can submit our quick online form or message us directly on WhatsApp at 0315-3615444. Simply share your pickup location, drop-off location, home size, and target date, and we will send you a prompt estimate.'
  }
];
