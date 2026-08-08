import { Vehicle, DetailService, WarrantyCertificate, NotificationItem, StudioBay } from '../types';

export const INITIAL_VEHICLES: Vehicle[] = [
  {
    id: 'veh-01',
    make: 'Porsche',
    model: '911 GT3 RS',
    year: 2024,
    color: 'Ice Grey Metallic / Acid Green',
    finish: 'Gloss',
    licensePlate: 'APEX-911',
    vin: 'WP0AF2A91RS29841',
    imageUrl: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80',
    paintHealthScore: 94,
    protectionType: 'Stealth PPF + 9H Graphene',
    protectionExpires: '2034-04-12',
    lastServiceDate: '2026-07-15',
    status: 'Protected',
  },
  {
    id: 'veh-02',
    make: 'Tesla',
    model: 'Cybertruck Cyberbeast',
    year: 2024,
    color: 'Satin Dark Stealth Stainless',
    finish: 'Satin Matte',
    licensePlate: 'CYBER-X',
    vin: '7G2CEBE38RA00192',
    imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
    paintHealthScore: 88,
    protectionType: 'Satin Self-Healing TPU Film',
    protectionExpires: '2031-11-04',
    lastServiceDate: '2026-06-02',
    status: 'In Studio',
  },
  {
    id: 'veh-03',
    make: 'BMW',
    model: 'M8 Competition Gran Coupe',
    year: 2025,
    color: 'Frozen Black Metallic',
    finish: 'Satin Matte',
    licensePlate: 'BIMMER-M',
    vin: 'WBS83GV090CJ7120',
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
    paintHealthScore: 82,
    protectionType: 'Ceramic Matrix 5-Year',
    protectionExpires: '2029-08-20',
    lastServiceDate: '2026-05-18',
    status: 'Due for Inspection',
  },
  {
    id: 'veh-04',
    make: 'Ferrari',
    model: 'SF90 Stradale Assetto Fiorano',
    year: 2024,
    color: 'Rosso Corsa Gloss',
    finish: 'Gloss',
    licensePlate: 'SF90-APX',
    vin: 'ZFF94NHA00028710',
    imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80',
    paintHealthScore: 98,
    protectionType: 'Full Body Clear Armor PPF',
    protectionExpires: '2034-01-10',
    lastServiceDate: '2026-07-28',
    status: 'Protected',
  }
];

export const PREMIUM_SERVICES: DetailService[] = [
  {
    
  id: 'serv-ppf',
  name: 'Garware PLUS PPF',
  tagline: '200 Micron TPU Self-Healing PPF',
  price: 68000,
  durationHours: 24,
  warrantyYears: 5,
  category: 'Protection',

  description:
    'Garware PLUS 200 Micron TPU self-healing Paint Protection Film with 5-year warranty, hydrophobic protection and long-term maintenance support.',

  imageUrl:
    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',

  popular: true,

  features: [
    '200 Micron TPU Self-Healing PPF',
    '5-Year Warranty',
    'E-Warranty registered on vehicle',
    'Self Healing',
    'Anti Yellowing',
    'Hydrophobic',
    'Non Cracking',
    'Non Lining',
    'Non Bubbling',
    'PPF Coating included',
    'Exterior Detailing included',
    'Interior Deep Cleaning included',
    'Underbody Coating included',
    'Alloy Coating included',
    'Glass Coating included',
    'Foam Wash included',
    'Headlamp & Taillamp Coating included',
    'Maintenance every 6 months for 5 years',
    'USA & Italy sourced products'
  ]
},
  {
    id: 'serv-ceramic',
    name: 'Ceramic Coating',
    tagline: 'Dual-Layer SiO2 Molecular Shield',
    price: 1499,
    durationHours: 12,
    warrantyYears: 5,
    category: 'Protection',
    description: 'High-density Silicon Dioxide ceramic bond matrix creating an ultra-hydrophobic surface with extreme chemical and UV resistance.',
    imageUrl: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80',
    popular: true,
    features: [
      '110° Water drop contact angle',
      'UV ray paint fade resistance',
      'Instant wet-look gloss depth',
      'Includes single-stage paint enhancement'
    ]
  },
  {
    id: 'serv-graphene',
    name: 'Graphene Coating',
    tagline: 'Next-Gen Reduced Graphene Oxide Matrix',
    price: 1899,
    durationHours: 14,
    warrantyYears: 7,
    category: 'Protection',
    description: 'Advanced reduced graphene oxide infusion offering superior heat dissipation to reduce water spotting, anti-static dust repelling, and hardness ratings above 10H.',
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
    popular: true,
    features: [
      '>10H Mohs surface hardness',
      'Reduces water spot etching by 90%',
      'Anti-static dust repellency',
      '7-Year certified studio warranty'
    ]
  },
  {
    id: 'serv-correction',
    name: 'Paint Correction',
    tagline: 'Multi-Stage Optical Paint Restoration',
    price: 1299,
    durationHours: 10,
    warrantyYears: 0,
    category: 'Correction',
    description: 'Precision multi-stage machine polishing removing 90-99% of swirl marks, buffer trails, holograms, and moderate clearcoat scratches.',
    imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      'Paint depth digital micrometer check',
      'Stage 1, 2, or Stage 3 custom correction',
      'Restores factory optical clarity',
      'Prepares surface for nano coatings'
    ]
  },
  {
    id: 'serv-interior',
    name: 'Interior Detailing',
    tagline: 'Connoisseur Cabin Spa & Leather Ceramic',
    price: 799,
    durationHours: 6,
    warrantyYears: 2,
    category: 'Detailing',
    description: 'Deep extraction of Alcantara, steam sanitization of HVAC vents, conditioning of fine Nappa leather, and UV barrier ceramic application on dash screens.',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      'Leather lock ceramic protection',
      'Alcantara pile restoration',
      'Ozone odor eradication treatment',
      'Micro-vacuuming of carpet fibers'
    ]
  },
  {
    id: 'serv-exterior',
    name: 'Exterior Detailing',
    tagline: 'Precision Decontamination & Wheel Armor',
    price: 649,
    durationHours: 5,
    warrantyYears: 1,
    category: 'Detailing',
    description: 'Hand wash with pH-neutral snow foam, clay bar iron decontamination, brake caliper ceramic coat, glass water-repellent treatment, and tire satin dressing.',
    imageUrl: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      'pH-balanced snow foam bath',
      'Clay bar chemical decontamination',
      'Brake caliper & wheel barrel coating',
      'Glass hydrophobic sealant'
    ]
  },
  {
    id: 'serv-wash',
    name: 'Premium Wash',
    tagline: 'De-ionized Touchless Spa Maintenance',
    price: 199,
    durationHours: 2,
    warrantyYears: 0,
    category: 'Maintenance',
    description: 'Single-vehicle maintenance wash using 0 PPM pure de-ionized water, dual-bucket scratchless microfiber techniques, and warm air blower drying.',
    imageUrl: 'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      '0 PPM de-ionized spot-free rinse',
      'Filtered warm air touchless dry',
      'Satin wheel & rubber dressing',
      'Quick interior wipe down'
    ]
  }
];

export const FEATURED_OFFERS = [
  {
    id: 'off-1',
    title: 'Stealth Matte PPF Full Body Package',
    discount: '15% OFF + FREE Graphene Topcoat',
    code: 'STEALTH15',
    expiry: 'Valid through Sunday',
    bgUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'off-2',
    title: 'Dual-Layer 10H Graphene Matrix',
    discount: 'Complimentary Interior Leather Ceramic',
    code: 'GRAPHENE-VIP',
    expiry: '4 Slots Remaining',
    bgUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
  }
];

export const INITIAL_WARRANTIES: WarrantyCertificate[] = [
  {
    id: 'war-01',
    certificateNumber: 'ATC-992-8419-AUT',
    vehicleName: '2024 Porsche 911 GT3 RS',
    licensePlate: 'APEX-911',
    packageInstalled: 'Stealth TPU Film + Dual Graphene 9H',
    installationDate: '2024-04-12',
    expiryDate: '2034-04-12',
    warrantyYears: 10,
    installerTechnician: 'Master Detailer Marcus Vance',
    status: 'Active',
    qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=AUTOTRICS-ATC-992-8419-AUT',
    hydrophobicScore: '118° Contact Angle'
  },
  {
    id: 'war-02',
    certificateNumber: 'ATC-338-1902-AUT',
    vehicleName: '2024 Tesla Cybertruck Cyberbeast',
    licensePlate: 'CYBER-X',
    packageInstalled: 'Satin Self-Healing TPU Body Armor',
    installationDate: '2024-11-04',
    expiryDate: '2031-11-04',
    warrantyYears: 7,
    installerTechnician: 'Senior Specialist Elena Rostova',
    status: 'Active',
    qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=AUTOTRICS-ATC-338-1902-AUT',
    hydrophobicScore: '112° Contact Angle'
  }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Stage 1 Correction Complete',
    message: 'Your 2024 Porsche 911 GT3 RS horizontal panels are now micro-polished to optical zero-defect standards.',
    time: '12 min ago',
    unread: true,
    type: 'status',
    vehicleImage: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'notif-2',
    title: 'Annual Hydrophobic Inspection Due',
    message: 'Your BMW M8 Competition is due for its complimentary 12-month Graphene gloss check-up.',
    time: '2 hours ago',
    unread: true,
    type: 'warranty',
    vehicleImage: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'notif-3',
    title: 'VIP Member Benefit Activated',
    message: 'You unlocked free Enclosed Valet Transport for your next studio booking!',
    time: '1 day ago',
    unread: false,
    type: 'offer'
  }
];

export const INITIAL_STUDIO_BAYS: StudioBay[] = [
  {
    id: 1,
    name: 'Bay 01 - IR Thermal Chamber',
    vehicleName: '2024 Porsche 911 GT3 RS',
    service: '9H Graphene Heat Curing',
    progressPercent: 88,
    technician: 'Marcus Vance',
    estimatedCompletion: '45 mins',
    status: 'Infrared Curing'
  },
  {
    id: 2,
    name: 'Bay 02 - Precision PPF Studio',
    vehicleName: '2024 Tesla Cybertruck',
    service: 'Full Body Satin TPU Wrap',
    progressPercent: 62,
    technician: 'Elena Rostova',
    estimatedCompletion: '3 hours',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Bay 03 - Pure De-Ionized Bay',
    vehicleName: '2025 BMW M8 Competition',
    service: 'Decontamination & Iron Removal',
    progressPercent: 25,
    technician: 'Alex Chen',
    estimatedCompletion: '1.5 hours',
    status: 'Wash Bay'
  },
  {
    id: 4,
    name: 'Bay 04 - Optical Inspection Studio',
    vehicleName: '2024 Ferrari SF90 Stradale',
    service: 'Final QC & Hydrophobic Certification',
    progressPercent: 95,
    technician: 'Master Tech Soren',
    estimatedCompletion: '15 mins',
    status: 'QC Inspection'
  }
];
