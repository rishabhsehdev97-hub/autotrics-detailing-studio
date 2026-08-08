import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  Calendar,
  Car,
  Check,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
  User,
} from 'lucide-react';

import { BookingDetails, DetailService, ScreenId } from '../types';
import { PREMIUM_SERVICES } from '../data/mockData';

interface BookingScreenProps {
  vehicles?: any[];
  selectedService?: DetailService;
  onNavigate: (screen: ScreenId) => void;
  onProceedToPayment: (details: BookingDetails) => void;
}

const ADDONS = [
  {
    id: 'leather-lock',
    name: 'Leather Lock Ceramic Coating',
    price: 299,
  },
  {
    id: 'brake-caliper',
    name: 'High-Temp Brake Caliper Coat',
    price: 349,
  },
  {
    id: 'engine-bay',
    name: 'Engine Bay Vapor Steam & Dress',
    price: 199,
  },
  {
    id: 'glass-shield',
    name: 'Hydrophobic Glass Hydro-Shield',
    price: 149,
  },
];

const YEARS = Array.from(
  { length: 15 },
  (_, index) => new Date().getFullYear() - index
);

const DATE_OPTIONS = [
  { value: '2026-08-10', label: 'Monday, Aug 10' },
  { value: '2026-08-11', label: 'Tuesday, Aug 11' },
  { value: '2026-08-12', label: 'Wednesday, Aug 12' },
  { value: '2026-08-13', label: 'Thursday, Aug 13' },
  { value: '2026-08-14', label: 'Friday, Aug 14' },
  { value: '2026-08-15', label: 'Saturday, Aug 15' },
];

const TIME_OPTIONS = [
  '09:00 AM',
  '11:30 AM',
  '02:00 PM',
  '04:30 PM',
];

export const BookingScreen: React.FC<BookingScreenProps> = ({
  selectedService,
  onNavigate,
  onProceedToPayment,
}) => {
  // --------------------------------------------------
  // CUSTOMER DETAILS
  // --------------------------------------------------

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  // --------------------------------------------------
  // VEHICLE DETAILS
  // --------------------------------------------------

  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [vehicleRegistration, setVehicleRegistration] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');

  // --------------------------------------------------
  // SERVICES
  // --------------------------------------------------

  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>(
    selectedService ? [selectedService.id] : []
  );

  // --------------------------------------------------
  // ADD-ONS
  // --------------------------------------------------

  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);

  // --------------------------------------------------
  // APPOINTMENT
  // --------------------------------------------------

  const [deliveryMethod, setDeliveryMethod] = useState<
    'Studio Drop-off' | 'Valet Enclosed Transport'
  >('Studio Drop-off');

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [valetAddress, setValetAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');

  // --------------------------------------------------
  // SERVICE TOGGLE
  // --------------------------------------------------

  const toggleService = (serviceId: string) => {
    setSelectedServiceIds((current) =>
      current.includes(serviceId)
        ? current.filter((id) => id !== serviceId)
        : [...current, serviceId]
    );
  };

  // --------------------------------------------------
  // ADD-ON TOGGLE
  // --------------------------------------------------

  const toggleAddon = (addonId: string) => {
    setSelectedAddonIds((current) =>
      current.includes(addonId)
        ? current.filter((id) => id !== addonId)
        : [...current, addonId]
    );
  };

  // --------------------------------------------------
  // SELECTED SERVICES
  // --------------------------------------------------

  const selectedServices = useMemo(() => {
    return PREMIUM_SERVICES.filter((service) =>
      selectedServiceIds.includes(service.id)
    );
  }, [selectedServiceIds]);

  // --------------------------------------------------
  // SELECTED ADD-ONS
  // --------------------------------------------------

  const selectedAddons = useMemo(() => {
    return ADDONS.filter((addon) =>
      selectedAddonIds.includes(addon.id)
    );
  }, [selectedAddonIds]);

  // --------------------------------------------------
  // PRICE
  // --------------------------------------------------

  const servicesTotal = selectedServices.reduce(
    (total, service) => total + service.price,
    0
  );

  const addonsTotal = selectedAddons.reduce(
    (total, addon) => total + addon.price,
    0
  );

  const valetCharge =
    deliveryMethod === 'Valet Enclosed Transport' ? 150 : 0;

  const totalAmount = servicesTotal + addonsTotal + valetCharge;

  // --------------------------------------------------
  // FORM VALIDATION
  // --------------------------------------------------

  const isValid =
    customerName.trim().length >= 2 &&
    customerPhone.trim().length >= 10 &&
    customerEmail.trim().includes('@') &&
    vehicleMake.trim().length > 0 &&
    vehicleModel.trim().length > 0 &&
    vehicleYear.trim().length > 0 &&
    vehicleRegistration.trim().length > 0 &&
    vehicleColor.trim().length > 0 &&
    selectedServiceIds.length > 0 &&
    selectedDate.length > 0 &&
    selectedTimeSlot.length > 0 &&
    (deliveryMethod === 'Studio Drop-off' ||
      valetAddress.trim().length > 5);

  // --------------------------------------------------
  // SUBMIT
  // --------------------------------------------------

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValid) {
      return;
    }

    const details: BookingDetails = {
      customerName: customerName.trim(),
      customerPhone: customerPhone.trim(),
      customerEmail: customerEmail.trim(),

      vehicleMake: vehicleMake.trim(),
      vehicleModel: vehicleModel.trim(),
      vehicleYear: Number(vehicleYear),
      vehicleRegistration: vehicleRegistration.trim().toUpperCase(),
      vehicleColor: vehicleColor.trim(),

      serviceIds: selectedServiceIds,
      addonIds: selectedAddonIds,

      deliveryMethod,
      date: selectedDate,
      timeSlot: selectedTimeSlot,

      valetAddress:
        deliveryMethod === 'Valet Enclosed Transport'
          ? valetAddress.trim()
          : undefined,

      specialInstructions: specialInstructions.trim() || undefined,

      totalAmount,
    };

    onProceedToPayment(details);
    onNavigate('payment');
  };

  return (
    <div className="w-full px-4 pt-3 pb-28 space-y-5">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border border-[#00C2FF]/30
          bg-[#0B0D12]
          p-5
        "
      >

        <div
          className="
            absolute
            -right-12
            -top-12
            w-36
            h-36
            rounded-full
            bg-[#00C2FF]/10
            blur-3xl
          "
        />

        <div className="relative z-10 flex items-center gap-3">

          <div
            className="
              w-11
              h-11
              rounded-2xl
              bg-[#00C2FF]/10
              border border-[#00C2FF]/30
              flex
              items-center
              justify-center
              flex-shrink-0
            "
          >
            <Calendar className="w-5 h-5 text-[#00C2FF]" />
          </div>

          <div>
            <p className="text-[9px] font-mono font-bold tracking-[0.2em] text-[#00C2FF] uppercase">
              AUTOTRICS STUDIO
            </p>

            <h1 className="mt-1 font-heading font-extrabold text-xl text-white">
              Book Your Service
            </h1>

            <p className="mt-1 text-[11px] text-slate-400">
              Tell us about you, your vehicle and the care it needs.
            </p>
          </div>

        </div>

      </div>


      <form onSubmit={handleBookingSubmit} className="space-y-4">


        {/* =====================================================
            1. CUSTOMER DETAILS
        ===================================================== */}

        <div
          className="
            rounded-3xl
            border border-white/10
            bg-[#0B0D12]
            p-4
            space-y-4
          "
        >

          <div className="flex items-center gap-2">

            <div className="w-8 h-8 rounded-xl bg-[#00C2FF]/10 border border-[#00C2FF]/30 flex items-center justify-center">
              <User className="w-4 h-4 text-[#00C2FF]" />
            </div>

            <div>
              <p className="text-[9px] font-mono font-bold tracking-widest text-[#00C2FF] uppercase">
                01
              </p>

              <h2 className="text-sm font-heading font-extrabold text-white">
                Your Details
              </h2>
            </div>

          </div>


          {/* Name */}

          <div>
            <label className="block mb-1.5 text-[9px] font-mono uppercase tracking-widest text-slate-500">
              Full Name
            </label>

            <div className="relative">

              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />

              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your full name"
                className="
                  w-full
                  rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  py-3
                  pl-10
                  pr-3
                  text-xs
                  text-white
                  placeholder:text-slate-600
                  outline-none
                  focus:border-[#00C2FF]/60
                "
              />

            </div>
          </div>


          {/* Phone + Email */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            <div>

              <label className="block mb-1.5 text-[9px] font-mono uppercase tracking-widest text-slate-500">
                Mobile Number
              </label>

              <div className="relative">

                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />

                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  className="
                    w-full
                    rounded-xl
                    border border-white/10
                    bg-white/[0.04]
                    py-3
                    pl-10
                    pr-3
                    text-xs
                    text-white
                    placeholder:text-slate-600
                    outline-none
                    focus:border-[#00C2FF]/60
                  "
                />

              </div>

            </div>


            <div>

              <label className="block mb-1.5 text-[9px] font-mono uppercase tracking-widest text-slate-500">
                Email Address
              </label>

              <div className="relative">

                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />

                <input
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="
                    w-full
                    rounded-xl
                    border border-white/10
                    bg-white/[0.04]
                    py-3
                    pl-10
                    pr-3
                    text-xs
                    text-white
                    placeholder:text-slate-600
                    outline-none
                    focus:border-[#00C2FF]/60
                  "
                />

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            2. VEHICLE DETAILS
        ===================================================== */}

        <div
          className="
            rounded-3xl
            border border-white/10
            bg-[#0B0D12]
            p-4
            space-y-4
          "
        >

          <div className="flex items-center gap-2">

            <div className="w-8 h-8 rounded-xl bg-[#00C2FF]/10 border border-[#00C2FF]/30 flex items-center justify-center">
              <Car className="w-4 h-4 text-[#00C2FF]" />
            </div>

            <div>
              <p className="text-[9px] font-mono font-bold tracking-widest text-[#00C2FF] uppercase">
                02
              </p>

              <h2 className="text-sm font-heading font-extrabold text-white">
                Your Vehicle
              </h2>
            </div>

          </div>


          {/* Make + Model */}

          <div className="grid grid-cols-2 gap-3">

            <div>

              <label className="block mb-1.5 text-[9px] font-mono uppercase tracking-widest text-slate-500">
                Car Make
              </label>

              <input
                type="text"
                value={vehicleMake}
                onChange={(e) => setVehicleMake(e.target.value)}
                placeholder="BMW"
                className="
                  w-full
                  rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  px-3
                  py-3
                  text-xs
                  text-white
                  placeholder:text-slate-600
                  outline-none
                  focus:border-[#00C2FF]/60
                "
              />

            </div>


            <div>

              <label className="block mb-1.5 text-[9px] font-mono uppercase tracking-widest text-slate-500">
                Model
              </label>

              <input
                type="text"
                value={vehicleModel}
                onChange={(e) => setVehicleModel(e.target.value)}
                placeholder="M8 Competition"
                className="
                  w-full
                  rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  px-3
                  py-3
                  text-xs
                  text-white
                  placeholder:text-slate-600
                  outline-none
                  focus:border-[#00C2FF]/60
                "
              />

            </div>

          </div>


          {/* Year + Colour */}

          <div className="grid grid-cols-2 gap-3">

            <div>

              <label className="block mb-1.5 text-[9px] font-mono uppercase tracking-widest text-slate-500">
                Model Year
              </label>

              <select
                value={vehicleYear}
                onChange={(e) => setVehicleYear(e.target.value)}
                className="
                  w-full
                  rounded-xl
                  border border-white/10
                  bg-black/80
                  px-3
                  py-3
                  text-xs
                  text-white
                  outline-none
                  focus:border-[#00C2FF]/60
                "
              >

                <option value="">Select Year</option>

                {YEARS.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}

              </select>

            </div>


            <div>

              <label className="block mb-1.5 text-[9px] font-mono uppercase tracking-widest text-slate-500">
                Colour
              </label>

              <input
                type="text"
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                placeholder="Black"
                className="
                  w-full
                  rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  px-3
                  py-3
                  text-xs
                  text-white
                  placeholder:text-slate-600
                  outline-none
                  focus:border-[#00C2FF]/60
                "
              />

            </div>

          </div>


          {/* Registration */}

          <div>

            <label className="block mb-1.5 text-[9px] font-mono uppercase tracking-widest text-slate-500">
              Registration Number
            </label>

            <input
              type="text"
              value={vehicleRegistration}
              onChange={(e) => setVehicleRegistration(e.target.value)}
              placeholder="DL01AB1234"
              className="
                w-full
                rounded-xl
                border border-white/10
                bg-white/[0.04]
                px-3
                py-3
                text-xs
                font-mono
                text-white
                placeholder:text-slate-600
                uppercase
                outline-none
                focus:border-[#00C2FF]/60
              "
            />

          </div>

        </div>


        {/* =====================================================
            3. SELECT SERVICES
        ===================================================== */}

        <div
          className="
            rounded-3xl
            border border-white/10
            bg-[#0B0D12]
            p-4
            space-y-4
          "
        >

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2">

              <div className="w-8 h-8 rounded-xl bg-[#00C2FF]/10 border border-[#00C2FF]/30 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#00C2FF]" />
              </div>

              <div>

                <p className="text-[9px] font-mono font-bold tracking-widest text-[#00C2FF] uppercase">
                  03
                </p>

                <h2 className="text-sm font-heading font-extrabold text-white">
                  Select Services
                </h2>

              </div>

            </div>

            <span className="text-[9px] font-mono text-slate-500 uppercase">
              {selectedServiceIds.length} Selected
            </span>

          </div>


          <p className="text-[11px] leading-relaxed text-slate-400">
            Select one or more detailing services for your vehicle.
          </p>


          <div className="grid grid-cols-1 gap-2.5">

            {PREMIUM_SERVICES.map((service) => {

              const isSelected = selectedServiceIds.includes(service.id);

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => toggleService(service.id)}
                  className={`
                    w-full
                    rounded-2xl
                    border
                    p-3
                    text-left
                    transition-all
                    ${
                      isSelected
                        ? 'border-[#00C2FF] bg-[#00C2FF]/10 shadow-[0_0_20px_rgba(0,194,255,0.08)]'
                        : 'border-white/10 bg-white/[0.03] hover:border-[#00C2FF]/40'
                    }
                  `}
                >

                  <div className="flex items-center justify-between gap-3">

                    <div className="flex items-center gap-3 min-w-0">

                      <div
                        className={`
                          w-9
                          h-9
                          rounded-xl
                          flex
                          items-center
                          justify-center
                          flex-shrink-0
                          border
                          ${
                            isSelected
                              ? 'bg-[#00C2FF] border-[#00C2FF] text-black'
                              : 'bg-[#00C2FF]/10 border-[#00C2FF]/30 text-[#00C2FF]'
                          }
                        `}
                      >
                        {isSelected ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <Sparkles className="w-4 h-4" />
                        )}
                      </div>


                      <div className="min-w-0">

                        <h3 className="text-xs font-heading font-extrabold text-white">
                          {service.name}
                        </h3>

                        <p className="mt-0.5 text-[10px] text-slate-500 truncate">
                          {service.tagline}
                        </p>

                      </div>

                    </div>


                    <div className="text-right flex-shrink-0">

                      <p className="text-[8px] font-mono uppercase tracking-widest text-slate-600">
                        Starting
                      </p>

                      <p className="mt-0.5 text-sm font-black text-white">
                        ₹{service.price.toLocaleString('en-IN')}
                      </p>

                    </div>

                  </div>


                  {isSelected && (
                    <div className="mt-2 pt-2 border-t border-[#00C2FF]/20 flex items-center justify-between">

                      <span className="text-[8px] font-mono uppercase tracking-widest text-[#00C2FF]">
                        Selected
                      </span>

                      <span className="text-[9px] text-slate-500">
                        {service.durationHours}h studio service
                      </span>

                    </div>
                  )}

                </button>
              );
            })}

          </div>

        </div>


        {/* =====================================================
            4. OPTIONAL ADD-ONS
        ===================================================== */}

        <div
          className="
            rounded-3xl
            border border-white/10
            bg-[#0B0D12]
            p-4
            space-y-4
          "
        >

          <div className="flex items-center gap-2">

            <div className="w-8 h-8 rounded-xl bg-[#00C2FF]/10 border border-[#00C2FF]/30 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-[#00C2FF]" />
            </div>

            <div>

              <p className="text-[9px] font-mono font-bold tracking-widest text-[#00C2FF] uppercase">
                04
              </p>

              <h2 className="text-sm font-heading font-extrabold text-white">
                Optional Add-ons
              </h2>

            </div>

          </div>


          <div className="space-y-2">

            {ADDONS.map((addon) => {

              const isSelected = selectedAddonIds.includes(addon.id);

              return (
                <button
                  key={addon.id}
                  type="button"
                  onClick={() => toggleAddon(addon.id)}
                  className={`
                    w-full
                    rounded-xl
                    border
                    px-3
                    py-3
                    flex
                    items-center
                    justify-between
                    transition-all
                    ${
                      isSelected
                        ? 'border-[#00C2FF] bg-[#00C2FF]/10'
                        : 'border-white/10 bg-white/[0.03] hover:border-[#00C2FF]/40'
                    }
                  `}
                >

                  <div className="flex items-center gap-2.5">

                    <div
                      className={`
                        w-4
                        h-4
                        rounded
                        border
                        flex
                        items-center
                        justify-center
                        ${
                          isSelected
                            ? 'bg-[#00C2FF] border-[#00C2FF] text-black'
                            : 'border-slate-600'
                        }
                      `}
                    >
                      {isSelected && <Check className="w-3 h-3" />}
                    </div>

                    <span className="text-[11px] text-slate-300 text-left">
                      {addon.name}
                    </span>

                  </div>

                  <span className="text-[10px] font-mono font-bold text-[#00C2FF]">
                    +₹{addon.price}
                  </span>

                </button>
              );
            })}

          </div>

        </div>


        {/* =====================================================
            5. APPOINTMENT
        ===================================================== */}

        <div
          className="
            rounded-3xl
            border border-white/10
            bg-[#0B0D12]
            p-4
            space-y-4
          "
        >

          <div className="flex items-center gap-2">

            <div className="w-8 h-8 rounded-xl bg-[#00C2FF]/10 border border-[#00C2FF]/30 flex items-center justify-center">
              <Clock className="w-4 h-4 text-[#00C2FF]" />
            </div>

            <div>

              <p className="text-[9px] font-mono font-bold tracking-widest text-[#00C2FF] uppercase">
                05
              </p>

              <h2 className="text-sm font-heading font-extrabold text-white">
                Appointment
              </h2>

            </div>

          </div>


          {/* Date + Time */}

          <div className="grid grid-cols-2 gap-3">

            <div>

              <label className="block mb-1.5 text-[9px] font-mono uppercase tracking-widest text-slate-500">
                Date
              </label>

              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="
                  w-full
                  rounded-xl
                  border border-white/10
                  bg-black/80
                  px-3
                  py-3
                  text-[10px]
                  text-white
                  outline-none
                  focus:border-[#00C2FF]/60
                "
              >

                <option value="">Select Date</option>

                {DATE_OPTIONS.map((date) => (
                  <option key={date.value} value={date.value}>
                    {date.label}
                  </option>
                ))}

              </select>

            </div>


            <div>

              <label className="block mb-1.5 text-[9px] font-mono uppercase tracking-widest text-slate-500">
                Time
              </label>

              <select
                value={selectedTimeSlot}
                onChange={(e) => setSelectedTimeSlot(e.target.value)}
                className="
                  w-full
                  rounded-xl
                  border border-white/10
                  bg-black/80
                  px-3
                  py-3
                  text-[10px]
                  text-white
                  outline-none
                  focus:border-[#00C2FF]/60
                "
              >

                <option value="">Select Time</option>

                {TIME_OPTIONS.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}

              </select>

            </div>

          </div>


          {/* Location */}

          <div>

            <label className="block mb-2 text-[9px] font-mono uppercase tracking-widest text-slate-500">
              Vehicle Handover
            </label>

            <div className="grid grid-cols-2 gap-2">

              <button
                type="button"
                onClick={() => setDeliveryMethod('Studio Drop-off')}
                className={`
                  rounded-xl
                  border
                  p-3
                  text-left
                  transition-all
                  ${
                    deliveryMethod === 'Studio Drop-off'
                      ? 'border-[#00C2FF] bg-[#00C2FF]/10'
                      : 'border-white/10 bg-white/[0.03]'
                  }
                `}
              >

                <div className="flex items-center justify-between">

                  <span className="text-[10px] font-bold text-white">
                    Studio Drop-off
                  </span>

                  {deliveryMethod === 'Studio Drop-off' && (
                    <Check className="w-3.5 h-3.5 text-[#00C2FF]" />
                  )}

                </div>

                <p className="mt-1 text-[9px] font-mono text-emerald-400">
                  Complimentary
                </p>

              </button>


              <button
                type="button"
                onClick={() =>
                  setDeliveryMethod('Valet Enclosed Transport')
                }
                className={`
                  rounded-xl
                  border
                  p-3
                  text-left
                  transition-all
                  ${
                    deliveryMethod === 'Valet Enclosed Transport'
                      ? 'border-[#00C2FF] bg-[#00C2FF]/10'
                      : 'border-white/10 bg-white/[0.03]'
                  }
                `}
              >

                <div className="flex items-center justify-between">

                  <span className="text-[10px] font-bold text-white">
                    White-Glove Pickup
                  </span>

                  {deliveryMethod === 'Valet Enclosed Transport' && (
                    <Check className="w-3.5 h-3.5 text-[#00C2FF]" />
                  )}

                </div>

                <p className="mt-1 text-[9px] font-mono text-[#00C2FF]">
                  +₹150 • Insured
                </p>

              </button>

            </div>

          </div>


          {/* Valet Address */}

          {deliveryMethod === 'Valet Enclosed Transport' && (
            <div>

              <label className="block mb-1.5 text-[9px] font-mono uppercase tracking-widest text-slate-500">
                Pickup Address
              </label>

              <div className="relative">

                <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-600" />

                <input
                  type="text"
                  value={valetAddress}
                  onChange={(e) => setValetAddress(e.target.value)}
                  placeholder="Enter your pickup address"
                  className="
                    w-full
                    rounded-xl
                    border border-white/10
                    bg-white/[0.04]
                    py-3
                    pl-10
                    pr-3
                    text-xs
                    text-white
                    placeholder:text-slate-600
                    outline-none
                    focus:border-[#00C2FF]/60
                  "
                />

              </div>

            </div>
          )}


          {/* Special Instructions */}

          <div>

            <label className="block mb-1.5 text-[9px] font-mono uppercase tracking-widest text-slate-500">
              Special Instructions <span className="text-slate-700">(Optional)</span>
            </label>

            <textarea
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="Anything our studio team should know?"
              rows={3}
              className="
                w-full
                resize-none
                rounded-xl
                border border-white/10
                bg-white/[0.04]
                px-3
                py-3
                text-xs
                text-white
                placeholder:text-slate-600
                outline-none
                focus:border-[#00C2FF]/60
              "
            />

          </div>

        </div>


        {/* =====================================================
            6. BOOKING SUMMARY
        ===================================================== */}

        <div
          className="
            rounded-3xl
            border border-[#00C2FF]/30
            bg-[#0B0D12]
            p-5
            shadow-[0_0_25px_rgba(0,194,255,0.08)]
          "
        >

          <div className="flex items-center justify-between mb-4">

            <div>
              <p className="text-[9px] font-mono font-bold tracking-widest text-[#00C2FF] uppercase">
                06
              </p>

              <h2 className="mt-1 text-base font-heading font-extrabold text-white">
                Booking Summary
              </h2>
            </div>

            <ShieldCheck className="w-5 h-5 text-[#00C2FF]" />

          </div>


          {/* Selected Services */}

          <div className="space-y-2">

            {selectedServices.length === 0 ? (

              <div className="rounded-xl border border-dashed border-white/10 p-3">
                <p className="text-[10px] text-slate-500 text-center">
                  Select a service above to see your price.
                </p>
              </div>

            ) : (

              selectedServices.map((service) => (

                <div
                  key={service.id}
                  className="flex items-center justify-between gap-3"
                >

                  <span className="text-[11px] text-slate-300">
                    {service.name}
                  </span>

                  <span className="text-xs font-mono font-bold text-white">
                    ₹{service.price.toLocaleString('en-IN')}
                  </span>

                </div>

              ))

            )}


            {/* Add-ons */}

            {selectedAddons.map((addon) => (

              <div
                key={addon.id}
                className="flex items-center justify-between gap-3"
              >

                <span className="text-[10px] text-slate-500">
                  {addon.name}
                </span>

                <span className="text-[10px] font-mono text-slate-300">
                  +₹{addon.price.toLocaleString('en-IN')}
                </span>

              </div>

            ))}


            {/* Valet */}

            {deliveryMethod === 'Valet Enclosed Transport' && (
              <div className="flex items-center justify-between">

                <span className="text-[10px] text-slate-500">
                  White-Glove Pickup
                </span>

                <span className="text-[10px] font-mono text-slate-300">
                  +₹150
                </span>

              </div>
            )}

          </div>


          {/* Divider */}

          <div className="my-4 border-t border-white/10" />


          {/* Total */}

          <div className="flex items-end justify-between gap-4">

            <div>

              <p className="text-[9px] font-mono uppercase tracking-widest text-slate-500">
                Total Booking
              </p>

              <p className="mt-1 text-2xl font-heading font-black text-white">
                ₹{totalAmount.toLocaleString('en-IN')}
              </p>

            </div>


            <div className="text-right">

              <p className="text-[9px] text-slate-600">
                Secure checkout
              </p>

              <p className="mt-1 text-[9px] font-mono text-[#00C2FF]">
                AUTOTRICS SECURE
              </p>

            </div>

          </div>


          {/* Submit */}

          <button
            id="booking-proceed-payment-btn"
            type="submit"
            disabled={!isValid}
            className="
              mt-5
              w-full
              rounded-2xl
              bg-[#00C2FF]
              py-4
              text-xs
              font-heading
              font-extrabold
              uppercase
              tracking-wide
              text-black
              flex
              items-center
              justify-center
              gap-2
              transition-all
              disabled:cursor-not-allowed
              disabled:opacity-30
              enabled:hover:bg-cyan-300
              enabled:hover:shadow-[0_0_30px_rgba(0,194,255,0.25)]
            "
          >
            Proceed to Payment
            <ArrowRight className="w-4 h-4" />
          </button>


          {!isValid && (
            <p className="mt-3 text-center text-[9px] font-mono text-slate-600">
              Complete the required details above to continue.
            </p>
          )}

        </div>

      </form>

    </div>
  );
};