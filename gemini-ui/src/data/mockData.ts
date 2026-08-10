import { Vehicle, DetailService, WarrantyCertificate, NotificationItem, StudioBay } from '../types';

export const INITIAL_VEHICLES: Vehicle[] = [];

export const PREMIUM_SERVICES: DetailService[] = [
  // =====================================================
  // PPF PACKAGES
  // =====================================================

  {
    id: 'serv-cosmo-silver',
    name: 'Cosmo Silver PPF',
    tagline: '175 Micron TPU Self-Healing PPF',
    price: 47000,
    durationHours: 24,
    warrantyYears: 3,
    category: 'Protection',
    description:
      'Cosmo Silver 175 Micron TPU Self-Healing Paint Protection Film with 3-year warranty, hydrophobic protection and maintenance every 6 months for 3 years.',
    imageUrl:
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      '175 Micron TPU Self-Healing PPF',
      '3-Year Warranty',
      'Self Healing',
      'Anti Yellowing',
      'Hydrophobic',
      'Non Cracking',
      'Non Lining',
      'Non Bubbling',
      'PPF Coating included',
      'Underbody Coating included',
      'Exterior Detailing included',
      'Interior Deep Cleaning included',
      'Alloy Coating included',
      'Glass Coating included',
      'Foam Wash included',
      'Headlamp & Taillamp Coating included',
      'Maintenance every 6 months for 3 years',
      'USA & Italy sourced products',
    ],
  },

  {
    id: 'serv-uc-pro-plus',
    name: 'UC Pro+ PPF',
    tagline: '190 Micron Korean TPU Self-Healing PPF',
    price: 54000,
    durationHours: 24,
    warrantyYears: 7,
    category: 'Protection',
    description:
      'UC Pro+ 190 Micron TPU Self-Healing Paint Protection Film made in Korea with 7-year warranty and maintenance every 6 months for 7 years.',
    imageUrl:
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    popular: true,
    features: [
      '190 Micron TPU Self-Healing PPF',
      'Made in Korea',
      '7-Year Warranty',
      'Self Healing',
      'Anti Yellowing',
      'Hydrophobic',
      'Non Cracking',
      'Non Lining',
      'Non Bubbling',
      'PPF Coating included',
      'Underbody Coating included',
      'Exterior Detailing included',
      'Interior Deep Cleaning included',
      'Alloy Coating included',
      'Glass Coating included',
      'Foam Wash included',
      'Headlamp & Taillamp Coating included',
      'Maintenance every 6 months for 7 years',
      'USA & Italy sourced products',
    ],
  },

  {
    id: 'serv-cosmo-gold',
    name: 'Cosmo Gold PPF',
    tagline: '190 Micron TPU Self-Healing PPF',
    price: 62000,
    durationHours: 24,
    warrantyYears: 5,
    category: 'Protection',
    description:
      'Cosmo Gold 190 Micron TPU Self-Healing Paint Protection Film with 5-year warranty, hydrophobic protection and maintenance every 6 months for 5 years.',
    imageUrl:
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      '190 Micron TPU Self-Healing PPF',
      '5-Year Warranty',
      'Self Healing',
      'Anti Yellowing',
      'Hydrophobic',
      'Non Cracking',
      'Non Lining',
      'Non Bubbling',
      'PPF Coating included',
      'Underbody Coating included',
      'Exterior Detailing included',
      'Interior Deep Cleaning included',
      'Alloy Coating included',
      'Glass Coating included',
      'Foam Wash included',
      'Headlamp & Taillamp Coating included',
      'Maintenance every 6 months for 5 years',
      'USA & Italy sourced products',
    ],
  },

  {
    id: 'serv-garware-180',
    name: 'Garware Plus PPF',
    tagline: '180 Micron TPU Self-Healing PPF',
    price: 62000,
    durationHours: 24,
    warrantyYears: 5,
    category: 'Protection',
    description:
      'Garware Plus 180 Micron TPU Self-Healing Paint Protection Film with 5-year warranty and maintenance every 6 months for 5 years.',
    imageUrl:
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      '180 Micron TPU Self-Healing PPF',
      '5-Year Warranty',
      'Self Healing',
      'Anti Yellowing',
      'Hydrophobic',
      'Non Cracking',
      'Non Lining',
      'Non Bubbling',
      'PPF Coating included',
      'Underbody Coating included',
      'Exterior Detailing included',
      'Interior Deep Cleaning included',
      'Alloy Coating included',
      'Glass Coating included',
      'Foam Wash included',
      'Headlamp & Taillamp Coating included',
      'Maintenance every 6 months for 5 years',
      'USA & Italy sourced products',
    ],
  },

  {
    id: 'serv-uc-gloss-black',
    name: 'UC Gloss Black PPF',
    tagline: '190 Micron Korean TPU Self-Healing Gloss Black PPF',
    price: 64000,
    durationHours: 24,
    warrantyYears: 5,
    category: 'Protection',
    description:
      'UC Gloss Black 190 Micron TPU Self-Healing PPF made in Korea with 5-year warranty and maintenance every 6 months for 5 years.',
    imageUrl:
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      '190 Micron TPU Self-Healing PPF',
      'Made in Korea',
      'Gloss Black Finish',
      '5-Year Warranty',
      'Self Healing',
      'Anti Yellowing',
      'Hydrophobic',
      'Non Cracking',
      'Non Lining',
      'Non Bubbling',
      'PPF Coating included',
      'Underbody Coating included',
      'Exterior Detailing included',
      'Interior Deep Cleaning included',
      'Alloy Coating included',
      'Glass Coating included',
      'Foam Wash included',
      'Headlamp & Taillamp Coating included',
      'Maintenance every 6 months for 5 years',
      'USA & Italy sourced products',
    ],
  },

  {
    id: 'serv-uc-matte-black',
    name: 'UC Matte Black PPF',
    tagline: '190 Micron Korean TPU Self-Healing Matte Black PPF',
    price: 64000,
    durationHours: 24,
    warrantyYears: 5,
    category: 'Protection',
    description:
      'UC Matte Black 190 Micron TPU Self-Healing PPF made in Korea with 5-year warranty and maintenance every 6 months for 5 years.',
    imageUrl:
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      '190 Micron TPU Self-Healing PPF',
      'Made in Korea',
      'Matte Black Finish',
      '5-Year Warranty',
      'Self Healing',
      'Anti Yellowing',
      'Hydrophobic',
      'Non Cracking',
      'Non Lining',
      'Non Bubbling',
      'PPF Coating included',
      'Underbody Coating included',
      'Exterior Detailing included',
      'Interior Deep Cleaning included',
      'Alloy Coating included',
      'Glass Coating included',
      'Foam Wash included',
      'Headlamp & Taillamp Coating included',
      'Maintenance every 6 months for 5 years',
      'USA & Italy sourced products',
    ],
  },

  {
    id: 'serv-garware-200',
    name: 'Garware PLUS PPF',
    tagline: '200 Micron TPU Self-Healing PPF',
    price: 68000,
    durationHours: 24,
    warrantyYears: 5,
    category: 'Protection',
    description:
      'Garware PLUS 200 Micron TPU Self-Healing Paint Protection Film with 5-year warranty and maintenance every 6 months for 5 years.',
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
      'Underbody Coating included',
      'Exterior Detailing included',
      'Interior Deep Cleaning included',
      'Alloy Coating included',
      'Glass Coating included',
      'Foam Wash included',
      'Headlamp & Taillamp Coating included',
      'Maintenance every 6 months for 5 years',
      'USA & Italy sourced products',
    ],
  },

  {
    id: 'serv-uc-max',
    name: 'UC Max PPF',
    tagline: '190 Micron Korean TPU Self-Healing PPF',
    price: 70000,
    durationHours: 24,
    warrantyYears: 10,
    category: 'Protection',
    description:
      'UC Max 190 Micron TPU Self-Healing Paint Protection Film made in Korea with 10-year warranty and maintenance every 6 months for 10 years.',
    imageUrl:
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    popular: true,
    features: [
      '190 Micron TPU Self-Healing PPF',
      'Made in Korea',
      '10-Year Warranty',
      'Self Healing',
      'Anti Yellowing',
      'Hydrophobic',
      'Non Cracking',
      'Non Lining',
      'Non Bubbling',
      'PPF Coating included',
      'Underbody Coating included',
      'Exterior Detailing included',
      'Interior Deep Cleaning included',
      'Alloy Coating included',
      'Glass Coating included',
      'Foam Wash included',
      'Headlamp & Taillamp Coating included',
      'Maintenance every 6 months for 10 years',
      'USA & Italy sourced products',
    ],
  },

  {
    id: 'serv-cosmo-platinum',
    name: 'Cosmo Platinum PPF',
    tagline: '230 Micron TPU Self-Healing PPF',
    price: 95000,
    durationHours: 24,
    warrantyYears: 15,
    category: 'Protection',
    description:
      'Cosmo Platinum 230 Micron TPU Self-Healing Paint Protection Film with 15-year warranty, hydrophobic protection and maintenance every 6 months for 15 years.',
    imageUrl:
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    popular: true,
    features: [
      '230 Micron TPU Self-Healing PPF',
      '15-Year Warranty',
      'Self Healing',
      'Anti Yellowing',
      'Hydrophobic',
      'Non Cracking',
      'Non Lining',
      'Non Bubbling',
      'PPF Coating included',
      'Underbody Coating included',
      'Exterior Detailing included',
      'Interior Deep Cleaning included',
      'Alloy Coating included',
      'Glass Coating included',
      'Foam Wash included',
      'Headlamp & Taillamp Coating included',
      'Maintenance every 6 months for 15 years',
      'USA & Italy sourced products',
    ],
  },

    // =====================================================
  // OTHER SERVICES
  // =====================================================

  {
    id: 'serv-ceramic-6m',
    name: 'Ceramic Coating',
    tagline: '6 Month Ceramic Protection',
    price: 7500,
    durationHours: 6,
    warrantyYears: 0,
    category: 'Protection',
    description:
      'Professional ceramic coating package with 6 months of protection.',
    imageUrl:
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      '6 Months Protection',
      'Hydrophobic Surface',
      'Gloss Enhancement',
      'UV Protection',
      'Chemical Resistance',
    ],
  },

  {
    id: 'serv-ceramic-1y',
    name: 'Ceramic Coating',
    tagline: '1 Year Ceramic Protection',
    price: 11000,
    durationHours: 8,
    warrantyYears: 1,
    category: 'Protection',
    description:
      'Professional ceramic coating package with 1 year of protection.',
    imageUrl:
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80',
    popular: true,
    features: [
      '1 Year Protection',
      'Hydrophobic Surface',
      'Gloss Enhancement',
      'UV Protection',
      'Chemical Resistance',
    ],
  },

  {
    id: 'serv-ceramic-2y',
    name: 'Ceramic Coating',
    tagline: '2 Year Ceramic Protection',
    price: 14000,
    durationHours: 10,
    warrantyYears: 2,
    category: 'Protection',
    description:
      'Professional ceramic coating package with 2 years of protection.',
    imageUrl:
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      '2 Years Protection',
      'Hydrophobic Surface',
      'Gloss Enhancement',
      'UV Protection',
      'Chemical Resistance',
    ],
  },

  {
    id: 'serv-ceramic-3y',
    name: 'Ceramic Coating',
    tagline: '3 Year Ceramic Protection',
    price: 16500,
    durationHours: 12,
    warrantyYears: 3,
    category: 'Protection',
    description:
      'Professional ceramic coating package with 3 years of protection.',
    imageUrl:
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80',
    popular: true,
    features: [
      '3 Years Protection',
      'Hydrophobic Surface',
      'Gloss Enhancement',
      'UV Protection',
      'Chemical Resistance',
    ],
  },

  {
    id: 'serv-graphene-1y',
    name: 'Graphene Coating',
    tagline: '1 Year Graphene Protection',
    price: 12000,
    durationHours: 8,
    warrantyYears: 1,
    category: 'Protection',
    description:
      'Advanced graphene coating package with 1 year of protection.',
    imageUrl:
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      '1 Year Protection',
      'Graphene Coating',
      'Hydrophobic Surface',
      'Gloss Enhancement',
      'UV Protection',
      'Anti-Static Protection',
    ],
  },

  {
    id: 'serv-graphene-3y',
    name: 'Graphene Coating',
    tagline: '3 Year Graphene Protection',
    price: 19000,
    durationHours: 10,
    warrantyYears: 3,
    category: 'Protection',
    description:
      'Advanced graphene coating package with 3 years of protection.',
    imageUrl:
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
    popular: true,
    features: [
      '3 Years Protection',
      'Graphene Coating',
      'Hydrophobic Surface',
      'Gloss Enhancement',
      'UV Protection',
      'Anti-Static Protection',
    ],
  },

  {
    id: 'serv-graphene-5y',
    name: 'Graphene Coating',
    tagline: '5 Year Graphene Protection',
    price: 25000,
    durationHours: 12,
    warrantyYears: 5,
    category: 'Protection',
    description:
      'Advanced graphene coating package with 5 years of protection.',
    imageUrl:
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      '5 Years Protection',
      'Graphene Coating',
      'Hydrophobic Surface',
      'Gloss Enhancement',
      'UV Protection',
      'Anti-Static Protection',
    ],
  },

  {
    id: 'serv-graphene-7y',
    name: 'Graphene Coating',
    tagline: '7 Year Graphene Protection',
    price: 30000,
    durationHours: 14,
    warrantyYears: 7,
    category: 'Protection',
    description:
      'Advanced graphene coating package with 7 years of protection.',
    imageUrl:
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80',
    popular: true,
    features: [
      '7 Years Protection',
      'Graphene Coating',
      'Hydrophobic Surface',
      'Gloss Enhancement',
      'UV Protection',
      'Anti-Static Protection',
    ],
  },

  {
    id: 'serv-borophene-1y',
    name: 'Borophene Coating',
    tagline: '1 Year Borophene Protection',
    price: 13000,
    durationHours: 8,
    warrantyYears: 1,
    category: 'Protection',
    description:
      'Premium borophene coating package with 1 year of protection.',
    imageUrl:
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      '1 Year Protection',
      'Borophene Coating',
      'Hydrophobic Surface',
      'Gloss Enhancement',
      'UV Protection',
    ],
  },

  {
    id: 'serv-borophene-3y',
    name: 'Borophene Coating',
    tagline: '3 Year Borophene Protection',
    price: 22000,
    durationHours: 10,
    warrantyYears: 3,
    category: 'Protection',
    description:
      'Premium borophene coating package with 3 years of protection.',
    imageUrl:
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80',
    popular: true,
    features: [
      '3 Years Protection',
      'Borophene Coating',
      'Hydrophobic Surface',
      'Gloss Enhancement',
      'UV Protection',
    ],
  },

  {
    id: 'serv-borophene-5y',
    name: 'Borophene Coating',
    tagline: '5 Year Borophene Protection',
    price: 27000,
    durationHours: 12,
    warrantyYears: 5,
    category: 'Protection',
    description:
      'Premium borophene coating package with 5 years of protection.',
    imageUrl:
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      '5 Years Protection',
      'Borophene Coating',
      'Hydrophobic Surface',
      'Gloss Enhancement',
      'UV Protection',
    ],
  },

  {
    id: 'serv-borophene-7y',
    name: 'Borophene Coating',
    tagline: '7 Year Borophene Protection',
    price: 32000,
    durationHours: 14,
    warrantyYears: 7,
    category: 'Protection',
    description:
      'Premium borophene coating package with 7 years of protection.',
    imageUrl:
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80',
    popular: true,
    features: [
      '7 Years Protection',
      'Borophene Coating',
      'Hydrophobic Surface',
      'Gloss Enhancement',
      'UV Protection',
    ],
  },

  {
    id: 'serv-teflon-3m',
    name: 'Teflon Coating',
    tagline: '3 Month Teflon Protection',
    price: 1500,
    durationHours: 3,
    warrantyYears: 0,
    category: 'Protection',
    description:
      'Teflon protection package with 3 months of protection. Wash charges applicable.',
    imageUrl:
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      '3 Months Protection',
      'Teflon Coating',
      'Gloss Enhancement',
      'Hydrophobic Protection',
      'Wash Charges Applicable',
    ],
  },

  // =====================================================
  // FOAM WASH
  // =====================================================

  {
    id: 'serv-foam-small',
    name: 'Foam Wash',
    tagline: 'Small Cars',
    price: 800,
    durationHours: 2,
    warrantyYears: 0,
    category: 'Maintenance',
    description:
      'Complete foam wash package for small cars including underbody cleaning, interior cleaning and exterior detailing.',
    imageUrl:
      'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      'Small Cars',
      '₹800',
      'Underbody Cleaning - Hydraulic Lift',
      'Interior Vacuuming',
      'Seats Cleaning',
      'Mats Cleaning',
      'Interior Polish Dressing',
      'Engine Bay Cleaning if customer allows',
      'Exterior Foam Spray',
      'Exterior Foam Scrubbing',
      'All Windows Cleaning',
      'Polish Dressing on Trims & Tyres',
      'Add-ons Available',
    ],
  },

  {
    id: 'serv-foam-compact',
    name: 'Foam Wash',
    tagline: 'Compact Cars',
    price: 900,
    durationHours: 2,
    warrantyYears: 0,
    category: 'Maintenance',
    description:
      'Complete foam wash package for compact cars.',
    imageUrl:
      'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      'Compact Cars',
      '₹900',
      'Underbody Cleaning - Hydraulic Lift',
      'Interior Vacuuming',
      'Seats Cleaning',
      'Mats Cleaning',
      'Interior Polish Dressing',
      'Engine Bay Cleaning if customer allows',
      'Exterior Foam Spray',
      'Exterior Foam Scrubbing',
      'All Windows Cleaning',
      'Polish Dressing on Trims & Tyres',
      'Add-ons Available',
    ],
  },

  {
    id: 'serv-foam-midsize',
    name: 'Foam Wash',
    tagline: 'Mid-Size Cars',
    price: 1000,
    durationHours: 2,
    warrantyYears: 0,
    category: 'Maintenance',
    description:
      'Complete foam wash package for mid-size cars.',
    imageUrl:
      'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      'Mid-Size Cars',
      '₹1000',
      'Underbody Cleaning - Hydraulic Lift',
      'Interior Vacuuming',
      'Seats Cleaning',
      'Mats Cleaning',
      'Interior Polish Dressing',
      'Engine Bay Cleaning if customer allows',
      'Exterior Foam Spray',
      'Exterior Foam Scrubbing',
      'All Windows Cleaning',
      'Polish Dressing on Trims & Tyres',
      'Add-ons Available',
    ],
  },

  {
    id: 'serv-foam-sedan',
    name: 'Foam Wash',
    tagline: 'Sedans',
    price: 1000,
    durationHours: 2,
    warrantyYears: 0,
    category: 'Maintenance',
    description:
      'Complete foam wash package for sedans.',
    imageUrl:
      'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      'Sedans',
      '₹1000',
      'Underbody Cleaning - Hydraulic Lift',
      'Interior Vacuuming',
      'Seats Cleaning',
      'Mats Cleaning',
      'Interior Polish Dressing',
      'Engine Bay Cleaning if customer allows',
      'Exterior Foam Spray',
      'Exterior Foam Scrubbing',
      'All Windows Cleaning',
      'Polish Dressing on Trims & Tyres',
      'Add-ons Available',
    ],
  },

  {
    id: 'serv-foam-suv',
    name: 'Foam Wash',
    tagline: 'SUVs',
    price: 1200,
    durationHours: 2,
    warrantyYears: 0,
    category: 'Maintenance',
    description:
      'Complete foam wash package for SUVs.',
    imageUrl:
      'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&w=800&q=80',
    popular: true,
    features: [
      'SUVs',
      '₹1200',
      'Underbody Cleaning - Hydraulic Lift',
      'Interior Vacuuming',
      'Seats Cleaning',
      'Mats Cleaning',
      'Interior Polish Dressing',
      'Engine Bay Cleaning if customer allows',
      'Exterior Foam Spray',
      'Exterior Foam Scrubbing',
      'All Windows Cleaning',
      'Polish Dressing on Trims & Tyres',
      'Add-ons Available',
    ],
  },

  {
    id: 'serv-foam-luxury',
    name: 'Foam Wash',
    tagline: 'Luxury Cars',
    price: 1500,
    durationHours: 2,
    warrantyYears: 0,
    category: 'Maintenance',
    description:
      'Complete foam wash package for luxury cars including premium exterior and interior care.',
    imageUrl:
      'https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&w=800&q=80',
    popular: true,
    features: [
      'Luxury Cars',
      '₹1500',
      'Underbody Cleaning - Hydraulic Lift',
      'Interior Vacuuming',
      'Seats Cleaning',
      'Mats Cleaning',
      'Interior Polish Dressing',
      'Engine Bay Cleaning if customer allows',
      'Exterior Foam Spray',
      'Exterior Foam Scrubbing',
      'All Windows Cleaning',
      'Polish Dressing on Trims & Tyres',
      'Add-ons Available',
    ],
  },

  // Existing services
  {
    id: 'serv-correction',
    name: 'Paint Correction',
    tagline: 'Multi-Stage Optical Paint Restoration',
    price: 1299,
    durationHours: 10,
    warrantyYears: 0,
    category: 'Correction',
    description:
      'Precision multi-stage machine polishing removing 90-99% of swirl marks, buffer trails, holograms, and moderate clearcoat scratches.',
    imageUrl:
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      'Paint depth digital micrometer check',
      'Stage 1, 2, or Stage 3 custom correction',
      'Restores factory optical clarity',
      'Prepares surface for nano coatings',
    ],
  },

  {
    id: 'serv-interior',
    name: 'Interior Detailing',
    tagline: 'Connoisseur Cabin Spa & Leather Ceramic',
    price: 799,
    durationHours: 6,
    warrantyYears: 2,
    category: 'Detailing',
    description:
      'Deep extraction of Alcantara, steam sanitization of HVAC vents, conditioning of fine Nappa leather, and UV barrier ceramic application on dash screens.',
    imageUrl:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      'Leather lock ceramic protection',
      'Alcantara pile restoration',
      'Ozone odor eradication treatment',
      'Micro-vacuuming of carpet fibers',
    ],
  },

  {
    id: 'serv-exterior',
    name: 'Exterior Detailing',
    tagline: 'Precision Decontamination & Wheel Armor',
    price: 649,
    durationHours: 5,
    warrantyYears: 1,
    category: 'Detailing',
    description:
      'Hand wash with pH-neutral snow foam, clay bar iron decontamination, brake caliper ceramic coat, glass water-repellent treatment, and tire satin dressing.',
    imageUrl:
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      'pH-balanced snow foam bath',
      'Clay bar chemical decontamination',
      'Brake caliper & wheel barrel coating',
      'Glass hydrophobic sealant',
    ],
  },
  
// NEW PPF PACKAGES START HERE

  // Garware Premium
  {
    id: 'serv-garware-premium',
    name: 'Garware Premium PPF',
    tagline: '200 Micron TPU Self-Healing PPF',
    price: 75000,
    durationHours: 24,
    warrantyYears: 8,
    category: 'Protection',
    description:
      'Garware Premium 200 Micron TPU Self-Healing Paint Protection Film with 8-year warranty and maintenance every 6 months for 8 years.',
    imageUrl:
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      '200 Micron TPU Self-Healing PPF',
      '8-Year Warranty',
      'Self Healing',
      'Anti Yellowing',
      'Hydrophobic',
      'Non Cracking',
      'Non Lining',
      'Non Bubbling',
      'PPF Coating included',
      'Underbody Coating included',
      'Exterior Detailing included',
      'Interior Deep Cleaning included',
      'Alloy Coating included',
      'Glass Coating included',
      'Foam Wash included',
      'Headlamp & Taillamp Coating included',
      'Maintenance every 6 months for 8 years',
      'USA & Italy sourced products',
    ],
  },

  // MotorProtek
  {
    id: 'serv-motorprotek',
    name: 'MotorProtek PPF',
    tagline: '190 Micron TPU Self-Healing PPF',
    price: 48000,
    durationHours: 24,
    warrantyYears: 6,
    category: 'Protection',
    description:
      'MotorProtek 190 Micron TPU Self-Healing Paint Protection Film with 6-year warranty and maintenance every 6 months for 6 years.',
    imageUrl:
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      '190 Micron TPU Self-Healing PPF',
      '6-Year Warranty',
      'Self Healing',
      'Anti Yellowing',
      'Hydrophobic',
      'Non Cracking',
      'Non Lining',
      'Non Bubbling',
      'PPF Coating included',
      'Underbody Coating included',
      'Exterior Detailing included',
      'Interior Deep Cleaning included',
      'Alloy Coating included',
      'Glass Coating included',
      'Foam Wash included',
      'Headlamp & Taillamp Coating included',
      'Maintenance every 6 months for 6 years',
      'USA & Italy sourced products',
    ],
  },

  {
    id: 'serv-motorprotek-instant',
    name: 'MotorProtek Instant Healing PPF',
    tagline: '215 Micron TPU Instant Healing PPF',
    price: 63000,
    durationHours: 24,
    warrantyYears: 8,
    category: 'Protection',
    description:
      'MotorProtek 215 Micron TPU Instant Healing Paint Protection Film with 8-year warranty and maintenance every 6 months for 8 years.',
    imageUrl:
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    popular: true,
    features: [
      '215 Micron TPU Instant Healing PPF',
      '8-Year Warranty',
      'Self Healing',
      'Anti Yellowing',
      'Hydrophobic',
      'Non Cracking',
      'Non Lining',
      'Non Bubbling',
      'PPF Coating included',
      'Underbody Coating included',
      'Exterior Detailing included',
      'Interior Deep Cleaning included',
      'Alloy Coating included',
      'Glass Coating included',
      'Foam Wash included',
      'Headlamp & Taillamp Coating included',
      'Maintenance every 6 months for 8 years',
      'USA & Italy sourced products',
    ],
  },

  {
    id: 'serv-motorprotek-gloss',
    name: 'MotorProtek Gloss Black PPF',
    tagline: '215 Micron TPU Instant Healing Gloss Black PPF',
    price: 55000,
    durationHours: 24,
    warrantyYears: 5,
    category: 'Protection',
    description:
      'MotorProtek Gloss Black 215 Micron TPU Instant Healing PPF with 5-year warranty and maintenance every 6 months for 5 years.',
    imageUrl:
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      '215 Micron TPU Instant Healing PPF',
      'Gloss Black Finish',
      '5-Year Warranty',
      'Self Healing',
      'Anti Yellowing',
      'Hydrophobic',
      'Non Cracking',
      'Non Lining',
      'Non Bubbling',
      'PPF Coating included',
      'Underbody Coating included',
      'Exterior Detailing included',
      'Interior Deep Cleaning included',
      'Alloy Coating included',
      'Glass Coating included',
      'Foam Wash included',
      'Headlamp & Taillamp Coating included',
      'Maintenance every 6 months for 5 years',
      'USA & Italy sourced products',
    ],
  },

  {
    id: 'serv-motorprotek-matte',
    name: 'MotorProtek Matte Black PPF',
    tagline: '215 Micron TPU Instant Healing Matte Black PPF',
    price: 55000,
    durationHours: 24,
    warrantyYears: 5,
    category: 'Protection',
    description:
      'MotorProtek Matte Black 215 Micron TPU Instant Healing PPF with 5-year warranty and maintenance every 6 months for 5 years.',
    imageUrl:
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      '215 Micron TPU Instant Healing PPF',
      'Matte Black Finish',
      '5-Year Warranty',
      'Self Healing',
      'Anti Yellowing',
      'Hydrophobic',
      'Non Cracking',
      'Non Lining',
      'Non Bubbling',
      'PPF Coating included',
      'Underbody Coating included',
      'Exterior Detailing included',
      'Interior Deep Cleaning included',
      'Alloy Coating included',
      'Glass Coating included',
      'Foam Wash included',
      'Headlamp & Taillamp Coating included',
      'Maintenance every 6 months for 5 years',
      'USA & Italy sourced products',
    ],
  },

  // NAR
  {
    id: 'serv-nar',
    name: 'NAR PPF',
    tagline: '190 Micron TPU Instant Healing PPF',
    price: 60000,
    durationHours: 24,
    warrantyYears: 5,
    category: 'Protection',
    description:
      'NAR 190 Micron TPU Instant Healing Paint Protection Film with 5-year warranty and maintenance every 6 months for 5 years.',
    imageUrl:
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      '190 Micron TPU Instant Healing PPF',
      '5-Year Warranty',
      'Self Healing',
      'Anti Yellowing',
      'Hydrophobic',
      'Non Cracking',
      'Non Lining',
      'Non Bubbling',
      'PPF Coating included',
      'Underbody Coating included',
      'Exterior Detailing included',
      'Interior Deep Cleaning included',
      'Alloy Coating included',
      'Glass Coating included',
      'Foam Wash included',
      'Headlamp & Taillamp Coating included',
      'Maintenance every 6 months for 5 years',
      'USA & Italy sourced products',
    ],
  },

  // Profection USA
  {
    id: 'serv-profection-190',
    name: 'Profection USA PPF',
    tagline: '190 Micron TPU Instant Healing PPF',
    price: 54000,
    durationHours: 24,
    warrantyYears: 5,
    category: 'Protection',
    description:
      'Profection USA 190 Micron TPU Instant Healing Paint Protection Film with 5-year warranty and maintenance every 6 months for 5 years.',
    imageUrl:
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    popular: false,
    features: [
      '190 Micron TPU Instant Healing PPF',
      '5-Year Warranty',
      'Self Healing',
      'Anti Yellowing',
      'Hydrophobic',
      'Non Cracking',
      'Non Lining',
      'Non Bubbling',
      'PPF Coating included',
      'Underbody Coating included',
      'Exterior Detailing included',
      'Interior Deep Cleaning included',
      'Alloy Coating included',
      'Glass Coating included',
      'Foam Wash included',
      'Headlamp & Taillamp Coating included',
      'Maintenance every 6 months for 5 years',
      'USA & Italy sourced products',
    ],
  },

  {
    id: 'serv-profection-200',
    name: 'Profection USA PPF',
    tagline: '200 Micron TPU Instant Healing PPF',
    price: 66000,
    durationHours: 24,
    warrantyYears: 8,
    category: 'Protection',
    description:
      'Profection USA 200 Micron TPU Instant Healing Paint Protection Film with 8-year warranty and maintenance every 6 months for 8 years.',
    imageUrl:
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    popular: true,
    features: [
      '200 Micron TPU Instant Healing PPF',
      '8-Year Warranty',
      'Self Healing',
      'Anti Yellowing',
      'Hydrophobic',
      'Non Cracking',
      'Non Lining',
      'Non Bubbling',
      'PPF Coating included',
      'Underbody Coating included',
      'Exterior Detailing included',
      'Interior Deep Cleaning included',
      'Alloy Coating included',
      'Glass Coating included',
      'Foam Wash included',
      'Headlamp & Taillamp Coating included',
      'Maintenance every 6 months for 8 years',
      'USA & Italy sourced products',
    ],
  },

  // AUTOTRICS
  {
    id: 'serv-autotrics-ppf',
    name: 'AUTOTRICS PPF',
    tagline: '190 Micron TPU Instant Healing PPF',
    price: 46000,
    durationHours: 24,
    warrantyYears: 4,
    category: 'Protection',
    description:
      'AUTOTRICS 190 Micron TPU Instant Healing Paint Protection Film with 4-year warranty and maintenance every 6 months for 4 years.',
    imageUrl:
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
    popular: true,
    features: [
      '190 Micron TPU Instant Healing PPF',
      '4-Year Warranty',
      'Self Healing',
      'Anti Yellowing',
      'Hydrophobic',
      'Non Cracking',
      'Non Lining',
      'Non Bubbling',
      'PPF Coating included',
      'Underbody Coating included',
      'Exterior Detailing included',
      'Interior Deep Cleaning included',
      'Alloy Coating included',
      'Glass Coating included',
      'Foam Wash included',
      'Headlamp & Taillamp Coating included',
      'Maintenance every 6 months for 4 years',
      'USA & Italy sourced products',
    ],
  },

];

type FeaturedOffer = {
  id: string;
  title: string;
  discount: string;
  code?: string;
  expiry?: string;
  bgUrl?: string;
};

export const FEATURED_OFFERS: FeaturedOffer[] = [];

export const INITIAL_WARRANTIES: WarrantyCertificate[] = [];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [];

export const INITIAL_STUDIO_BAYS: StudioBay[] = [];
