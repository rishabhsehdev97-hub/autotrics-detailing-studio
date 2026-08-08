export type ScreenId = 
  | 'splash'
  | 'onboarding'
  | 'login'
  | 'otp'
  | 'home'
  | 'ai-quote'
  | 'add-vehicle'
  | 'garage'
  | 'booking'
  | 'payment'
  'booking-confirmation'
  | 'bookings'
  | 'warranty'
  | 'profile'
  | 'settings'
  | 'notifications'
  | 'admin';

export type FinishType = 'Gloss' | 'Satin Matte' | 'Stealth Matte' | 'Carbon Fiber' | 'Raw Metal';

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  color: string;
  finish: FinishType;
  licensePlate: string;
  vin: string;
  imageUrl: string;
  paintHealthScore: number;
  protectionType: string;
  protectionExpires: string;
  lastServiceDate: string;
  status: 'Protected' | 'Due for Inspection' | 'In Studio' | 'Pending Treatment';
}

export interface DetailService {
  id: string;
  name: string;
  tagline: string;
  price: number;
  durationHours: number;
  warrantyYears: number;
  category: 'Protection' | 'Correction' | 'Detailing' | 'Maintenance';
  description: string;
  imageUrl: string;
  popular?: boolean;
  features: string[];
}

export interface AiQuoteResult {
  paintHealthScore: number;
  surfaceDefectAnalysis: string;
  recommendedSteps: string[];
  estimatedTimeHours: number;
  recommendedPackageName: string;
  estimatedPriceUSD: number;
  warrantyCoverageYears: number;
  hydrophobicRating: string;
  aiTechnicianNote: string;
}

export interface BookingDetails {
  // Customer details
  customerName: string;
  customerPhone: string;
  customerEmail: string;

  // Vehicle details
  vehicleId?: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: number;
  vehicleRegistration: string;
  vehicleColor: string;

  // Services
  serviceIds: string[];
  addonIds: string[];

  // Appointment
  deliveryMethod:
    | 'Studio Drop-off'
    | 'Valet Enclosed Transport'
    | 'On-Site Concierge';

  date: string;
  timeSlot: string;

  // Valet / additional information
  valetAddress?: string;
  specialInstructions?: string;

  // Final amount
  totalAmount: number;
}

export interface WarrantyCertificate {
  id: string;
  certificateNumber: string;
  vehicleName: string;
  licensePlate: string;
  packageInstalled: string;
  installationDate: string;
  expiryDate: string;
  warrantyYears: number;
  installerTechnician: string;
  status: 'Active' | 'Inspected' | 'Pending Inspection';
  qrCodeUrl: string;
  hydrophobicScore: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  unread: boolean;
  type: 'status' | 'offer' | 'warranty' | 'system';
  vehicleImage?: string;
}

export interface StudioBay {
  id: number;
  name: string;
  vehicleName: string;
  service: string;
  progressPercent: number;
  technician: string;
  estimatedCompletion: string;
  status: 'Active' | 'Infrared Curing' | 'Wash Bay' | 'QC Inspection';
}
