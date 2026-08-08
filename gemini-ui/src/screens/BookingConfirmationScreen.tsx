import React, { useMemo } from 'react';
import {
  ArrowRight,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Home,
  MapPin,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

import { BookingDetails, ScreenId } from '../types';
import { PREMIUM_SERVICES } from '../data/mockData';

interface BookingConfirmationScreenProps {
  bookingDetails: BookingDetails;
  onNavigate: (screen: ScreenId) => void;
}

const ADDON_NAMES: Record<string, string> = {
  'leather-lock': 'Leather Lock Ceramic Coating',
  'brake-caliper': 'High-Temp Brake Caliper Coat',
  'engine-bay': 'Engine Bay Vapor Steam & Dress',
  'glass-shield': 'Hydrophobic Glass Hydro-Shield',
};

export const BookingConfirmationScreen: React.FC<
  BookingConfirmationScreenProps
> = ({ bookingDetails, onNavigate }) => {

  const bookingId = useMemo(() => {
    const randomPart = Math.floor(10000 + Math.random() * 90000);
    return `ATX-${new Date().getFullYear()}-${randomPart}`;
  }, []);

  const selectedServices = PREMIUM_SERVICES.filter((service) =>
    bookingDetails.serviceIds.includes(service.id)
  );

  const selectedAddons = bookingDetails.addonIds
    .map((id) => ADDON_NAMES[id])
    .filter(Boolean);

  const formattedDate = useMemo(() => {
    if (!bookingDetails.date) return 'To be confirmed';

    const date = new Date(`${bookingDetails.date}T00:00:00`);

    if (Number.isNaN(date.getTime())) {
      return bookingDetails.date;
    }

    return date.toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }, [bookingDetails.date]);

  return (
    <div className="w-full px-4 pt-5 pb-28 space-y-4">

      {/* =====================================================
          SUCCESS HERO
      ===================================================== */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[2rem]
          border border-[#00C2FF]/40
          bg-[#0B0D12]
          p-6
          text-center
          shadow-[0_0_45px_rgba(0,194,255,0.12)]
        "
      >

        {/* Glow */}

        <div
          className="
            absolute
            left-1/2
            top-0
            -translate-x-1/2
            w-48
            h-48
            rounded-full
            bg-[#00C2FF]/10
            blur-3xl
            pointer-events-none
          "
        />


        {/* Check */}

        <div
          className="
            relative
            mx-auto
            w-20
            h-20
            rounded-full
            border
            border-[#00C2FF]/50
            bg-[#00C2FF]/10
            flex
            items-center
            justify-center
            shadow-[0_0_30px_rgba(0,194,255,0.18)]
          "
        >
          <CheckCircle2 className="w-10 h-10 text-[#00C2FF]" />
        </div>


        <p
          className="
            relative
            mt-5
            text-[9px]
            font-mono
            font-bold
            tracking-[0.25em]
            text-[#00C2FF]
            uppercase
          "
        >
          AUTOTRICS STUDIO
        </p>


        <h1
          className="
            relative
            mt-2
            font-heading
            font-black
            text-2xl
            text-white
          "
        >
          Booking Confirmed
        </h1>


        <p
          className="
            relative
            mt-2
            text-xs
            leading-relaxed
            text-slate-400
            max-w-xs
            mx-auto
          "
        >
          Your detailing appointment has been successfully secured.
        </p>


        {/* Booking ID */}

        <div
          className="
            relative
            mt-5
            inline-flex
            items-center
            gap-2
            rounded-xl
            border border-white/10
            bg-white/[0.03]
            px-4
            py-2.5
          "
        >
          <span className="text-[8px] font-mono uppercase tracking-widest text-slate-600">
            Booking ID
          </span>

          <span className="text-[10px] font-mono font-bold text-[#00C2FF]">
            {bookingId}
          </span>
        </div>

      </div>


      {/* =====================================================
          CUSTOMER + VEHICLE
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

          <div>
            <p className="text-[9px] font-mono font-bold tracking-widest text-[#00C2FF] uppercase">
              BOOKING DETAILS
            </p>

            <h2 className="mt-1 text-sm font-heading font-extrabold text-white">
              Your Appointment
            </h2>
          </div>

          <ShieldCheck className="w-5 h-5 text-[#00C2FF]" />

        </div>


        {/* Customer */}

        <div
          className="
            rounded-2xl
            border border-white/10
            bg-white/[0.03]
            p-3
          "
        >

          <p className="text-[8px] font-mono uppercase tracking-widest text-slate-600">
            Customer
          </p>

          <p className="mt-1 text-sm font-bold text-white">
            {bookingDetails.customerName}
          </p>

          <p className="mt-0.5 text-[10px] text-slate-500">
            {bookingDetails.customerPhone}
          </p>

        </div>


        {/* Vehicle */}

        <div
          className="
            rounded-2xl
            border border-white/10
            bg-white/[0.03]
            p-3
          "
        >

          <p className="text-[8px] font-mono uppercase tracking-widest text-slate-600">
            Vehicle
          </p>

          <p className="mt-1 text-sm font-bold text-white">
            {bookingDetails.vehicleYear}{' '}
            {bookingDetails.vehicleMake}{' '}
            {bookingDetails.vehicleModel}
          </p>

          <div className="mt-1 flex items-center gap-2">

            <span className="text-[10px] font-mono text-slate-500">
              {bookingDetails.vehicleRegistration}
            </span>

            <span className="text-slate-700">•</span>

            <span className="text-[10px] text-slate-500">
              {bookingDetails.vehicleColor}
            </span>

          </div>

        </div>

      </div>


      {/* =====================================================
          APPOINTMENT
      ===================================================== */}

      <div
        className="
          grid
          grid-cols-2
          gap-3
        "
      >

        <div
          className="
            rounded-2xl
            border border-white/10
            bg-[#0B0D12]
            p-4
          "
        >

          <div className="flex items-center gap-2">

            <Calendar className="w-4 h-4 text-[#00C2FF]" />

            <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500">
              Date
            </p>

          </div>

          <p className="mt-2 text-[11px] font-bold leading-relaxed text-white">
            {formattedDate}
          </p>

        </div>


        <div
          className="
            rounded-2xl
            border border-white/10
            bg-[#0B0D12]
            p-4
          "
        >

          <div className="flex items-center gap-2">

            <Clock className="w-4 h-4 text-[#00C2FF]" />

            <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500">
              Time
            </p>

          </div>

          <p className="mt-2 text-[11px] font-bold text-white">
            {bookingDetails.timeSlot}
          </p>

        </div>

      </div>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <div
        className="
          rounded-3xl
          border border-white/10
          bg-[#0B0D12]
          p-4
        "
      >

        <div className="flex items-center gap-2">

          <div
            className="
              w-8
              h-8
              rounded-xl
              bg-[#00C2FF]/10
              border border-[#00C2FF]/30
              flex
              items-center
              justify-center
            "
          >
            <Sparkles className="w-4 h-4 text-[#00C2FF]" />
          </div>

          <div>

            <p className="text-[9px] font-mono font-bold tracking-widest text-[#00C2FF] uppercase">
              SERVICES
            </p>

            <h2 className="mt-1 text-sm font-heading font-extrabold text-white">
              Selected Treatment
            </h2>

          </div>

        </div>


        <div className="mt-4 space-y-2">

          {selectedServices.map((service) => (

            <div
              key={service.id}
              className="
                flex
                items-center
                justify-between
                gap-3
                rounded-xl
                border border-white/10
                bg-white/[0.03]
                px-3
                py-3
              "
            >

              <div className="flex items-center gap-2.5">

                <div
                  className="
                    w-6
                    h-6
                    rounded-lg
                    bg-[#00C2FF]/10
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Check className="w-3.5 h-3.5 text-[#00C2FF]" />
                </div>

                <span className="text-[10px] font-semibold text-slate-300">
                  {service.name}
                </span>

              </div>

              <span className="text-[10px] font-mono font-bold text-white">
                ₹{service.price.toLocaleString('en-IN')}
              </span>

            </div>

          ))}


          {/* Add-ons */}

          {selectedAddons.length > 0 && (

            <div className="pt-2">

              <p className="mb-2 text-[8px] font-mono uppercase tracking-widest text-slate-600">
                Add-ons
              </p>

              {selectedAddons.map((addon) => (

                <div
                  key={addon}
                  className="flex items-center gap-2 py-1"
                >

                  <Check className="w-3 h-3 text-slate-500" />

                  <span className="text-[10px] text-slate-500">
                    {addon}
                  </span>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>


      {/* =====================================================
          HANDOVER
      ===================================================== */}

      <div
        className="
          rounded-2xl
          border border-white/10
          bg-[#0B0D12]
          p-4
        "
      >

        <div className="flex items-center gap-3">

          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-[#00C2FF]/10
              border border-[#00C2FF]/30
              flex
              items-center
              justify-center
            "
          >
            {bookingDetails.deliveryMethod ===
            'Valet Enclosed Transport' ? (
              <MapPin className="w-5 h-5 text-[#00C2FF]" />
            ) : (
              <Home className="w-5 h-5 text-[#00C2FF]" />
            )}
          </div>

          <div>

            <p className="text-[8px] font-mono uppercase tracking-widest text-slate-600">
              VEHICLE HANDOVER
            </p>

            <p className="mt-1 text-xs font-bold text-white">
              {bookingDetails.deliveryMethod ===
              'Valet Enclosed Transport'
                ? 'White-Glove Pickup'
                : 'Studio Drop-off'}
            </p>

            {bookingDetails.deliveryMethod ===
              'Valet Enclosed Transport' &&
              bookingDetails.valetAddress && (
                <p className="mt-1 text-[9px] text-slate-500">
                  {bookingDetails.valetAddress}
                </p>
              )}

          </div>

        </div>

      </div>


      {/* =====================================================
          TOTAL
      ===================================================== */}

      <div
        className="
          rounded-3xl
          border border-[#00C2FF]/30
          bg-[#0B0D12]
          p-5
          shadow-[0_0_30px_rgba(0,194,255,0.08)]
        "
      >

        <div className="flex items-center justify-between">

          <div>

            <p className="text-[9px] font-mono uppercase tracking-widest text-slate-500">
              Total Booking Value
            </p>

            <p className="mt-1 text-3xl font-heading font-black text-white">
              ₹{bookingDetails.totalAmount.toLocaleString('en-IN')}
            </p>

          </div>

          <div
            className="
              w-11
              h-11
              rounded-2xl
              bg-emerald-400/10
              border border-emerald-400/20
              flex
              items-center
              justify-center
            "
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          </div>

        </div>


        <div className="mt-4 border-t border-white/10 pt-3">

          <div className="flex items-center gap-2">

            <Check className="w-3.5 h-3.5 text-emerald-400" />

            <span className="text-[9px] text-slate-500">
              Payment received successfully
            </span>

          </div>

          <div className="mt-1 flex items-center gap-2">

            <Check className="w-3.5 h-3.5 text-emerald-400" />

            <span className="text-[9px] text-slate-500">
              Appointment reserved
            </span>

          </div>

        </div>

      </div>


      {/* =====================================================
          ACTIONS
      ===================================================== */}

      <button
        type="button"
        onClick={() => onNavigate('home')}
        className="
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
          hover:bg-cyan-300
          hover:shadow-[0_0_30px_rgba(0,194,255,0.25)]
        "
      >
        Back to Autotrics Home
        <ArrowRight className="w-4 h-4" />
      </button>


      <p className="text-center text-[8px] font-mono uppercase tracking-widest text-slate-700">
        Thank you for choosing Autotrics Detailing Studio
      </p>

    </div>
  );
};