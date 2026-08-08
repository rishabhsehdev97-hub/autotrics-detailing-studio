import React from 'react';
import {
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Car,
  MapPin,
  Sparkles,
  Receipt,
} from 'lucide-react';

import { BookingDetails, ScreenId, Vehicle } from '../types';
import { PREMIUM_SERVICES } from '../data/mockData';

interface BookingsScreenProps {
  bookingDetails?: BookingDetails;
  vehicles: Vehicle[];
  onNavigate: (screen: ScreenId) => void;
}

export const BookingsScreen: React.FC<BookingsScreenProps> = ({
  bookingDetails,
  vehicles,
  onNavigate,
}) => {

  const bookedVehicle = bookingDetails
    ? vehicles.find(
        (vehicle) => vehicle.id === bookingDetails.vehicleId
      )
    : undefined;

  const bookedServices = bookingDetails
    ? PREMIUM_SERVICES.filter((service) =>
        bookingDetails.serviceIds.includes(service.id)
      )
    : [];

  const formattedDate = bookingDetails?.date
    ? new Date(`${bookingDetails.date}T00:00:00`).toLocaleDateString(
        'en-IN',
        {
          weekday: 'short',
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }
      )
    : '';

  return (
    <div className="w-full px-4 pt-5 pb-28 space-y-5">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="px-1">

        <p className="text-[9px] font-mono font-bold tracking-[0.2em] text-[#00C2FF] uppercase">
          AUTOTRICS STUDIO
        </p>

        <div className="flex items-center justify-between mt-1">

          <h1 className="font-heading font-black text-2xl text-white">
            My Bookings
          </h1>

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
            <Receipt className="w-5 h-5 text-[#00C2FF]" />
          </div>

        </div>

        <p className="text-xs text-slate-500 mt-1">
          Manage your Autotrics studio appointments.
        </p>

      </div>


      {/* =====================================================
          NO BOOKINGS
      ===================================================== */}

      {!bookingDetails && (

        <div
          className="
            rounded-3xl
            border border-white/10
            bg-[#0B0D12]
            p-7
            text-center
          "
        >

          <div
            className="
              mx-auto
              w-14
              h-14
              rounded-2xl
              bg-[#00C2FF]/10
              border border-[#00C2FF]/30
              flex
              items-center
              justify-center
            "
          >
            <Calendar className="w-6 h-6 text-[#00C2FF]" />
          </div>

          <h2 className="mt-4 text-base font-heading font-extrabold text-white">
            No Bookings Yet
          </h2>

          <p className="mt-2 text-xs leading-relaxed text-slate-500">
            Your upcoming detailing appointments will appear here.
          </p>

          <button
            onClick={() => onNavigate('booking')}
            className="
              mt-5
              w-full
              rounded-2xl
              bg-[#00C2FF]
              py-3.5
              text-xs
              font-heading
              font-extrabold
              uppercase
              text-black
              flex
              items-center
              justify-center
              gap-2
            "
          >
            Book a Service
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>

      )}


      {/* =====================================================
          UPCOMING BOOKING
      ===================================================== */}

      {bookingDetails && (

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border border-[#00C2FF]/40
            bg-[#0B0D12]
            shadow-[0_0_35px_rgba(0,194,255,0.08)]
          "
        >

          {/* Accent glow */}

          <div
            className="
              absolute
              -right-12
              -top-12
              w-32
              h-32
              rounded-full
              bg-[#00C2FF]/10
              blur-3xl
              pointer-events-none
            "
          />


          {/* Booking Header */}

          <div className="relative p-4 border-b border-white/10">

            <div className="flex items-start justify-between">

              <div>

                <div className="flex items-center gap-2">

                  <span
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      bg-emerald-400/10
                      border border-emerald-400/20
                      px-2.5
                      py-1
                      text-[8px]
                      font-mono
                      font-bold
                      uppercase
                      tracking-wider
                      text-emerald-400
                    "
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    Confirmed
                  </span>

                </div>

                <p className="mt-3 text-[8px] font-mono uppercase tracking-widest text-slate-600">
                  Upcoming Appointment
                </p>

                <h2 className="mt-1 text-base font-heading font-extrabold text-white">
                  Autotrics Detailing Studio
                </h2>

              </div>

              <Sparkles className="w-5 h-5 text-[#00C2FF]" />

            </div>

          </div>


          {/* Vehicle */}

          <div className="relative p-4">

            <div
              className="
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                p-3
              "
            >

              <div className="flex items-center gap-3">

                {bookedVehicle?.imageUrl ? (

                  <img
                    src={bookedVehicle.imageUrl}
                    alt={`${bookedVehicle.make} ${bookedVehicle.model}`}
                    className="
                      w-16
                      h-16
                      rounded-xl
                      object-cover
                      border
                      border-white/10
                    "
                    referrerPolicy="no-referrer"
                  />

                ) : (

                  <div
                    className="
                      w-16
                      h-16
                      rounded-xl
                      bg-[#00C2FF]/10
                      border border-[#00C2FF]/20
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Car className="w-6 h-6 text-[#00C2FF]" />
                  </div>

                )}


                <div className="min-w-0">

                  <p className="text-[8px] font-mono uppercase tracking-widest text-slate-600">
                    Vehicle
                  </p>

                  <h3 className="mt-1 text-sm font-heading font-extrabold text-white truncate">
                    {bookedVehicle
                      ? `${bookedVehicle.year} ${bookedVehicle.make} ${bookedVehicle.model}`
                      : 'Selected Vehicle'}
                  </h3>

                  {bookedVehicle && (

                    <p className="mt-1 text-[9px] font-mono text-slate-500">
                      {bookedVehicle.licensePlate}
                      {' • '}
                      {bookedVehicle.color}
                    </p>

                  )}

                </div>

              </div>

            </div>


            {/* Date + Time */}

            <div className="grid grid-cols-2 gap-3 mt-3">

              <div
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  p-3
                "
              >

                <div className="flex items-center gap-2">

                  <Calendar className="w-4 h-4 text-[#00C2FF]" />

                  <span className="text-[8px] font-mono uppercase tracking-widest text-slate-600">
                    Date
                  </span>

                </div>

                <p className="mt-2 text-[10px] font-bold text-white leading-relaxed">
                  {formattedDate}
                </p>

              </div>


              <div
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  p-3
                "
              >

                <div className="flex items-center gap-2">

                  <Clock className="w-4 h-4 text-[#00C2FF]" />

                  <span className="text-[8px] font-mono uppercase tracking-widest text-slate-600">
                    Time
                  </span>

                </div>

                <p className="mt-2 text-[10px] font-bold text-white">
                  {bookingDetails.timeSlot}
                </p>

              </div>

            </div>


            {/* Services */}

            <div
              className="
                mt-3
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                p-3
              "
            >

              <div className="flex items-center gap-2">

                <Sparkles className="w-4 h-4 text-[#00C2FF]" />

                <span className="text-[8px] font-mono uppercase tracking-widest text-slate-600">
                  Selected Services
                </span>

              </div>


              <div className="mt-3 space-y-2">

                {bookedServices.map((service) => (

                  <div
                    key={service.id}
                    className="flex items-center justify-between gap-3"
                  >

                    <span className="text-[10px] font-semibold text-slate-300">
                      {service.name}
                    </span>

                    <span className="text-[10px] font-mono font-bold text-white whitespace-nowrap">
                      ₹{service.price.toLocaleString('en-IN')}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            {/* Handover */}

            <div
              className="
                mt-3
                flex
                items-center
                gap-3
                rounded-2xl
                border border-white/10
                bg-white/[0.03]
                p-3
              "
            >

              <div
                className="
                  w-9
                  h-9
                  rounded-xl
                  bg-[#00C2FF]/10
                  border border-[#00C2FF]/20
                  flex
                  items-center
                  justify-center
                  flex-shrink-0
                "
              >
                <MapPin className="w-4 h-4 text-[#00C2FF]" />
              </div>

              <div>

                <p className="text-[8px] font-mono uppercase tracking-widest text-slate-600">
                  Vehicle Handover
                </p>

                <p className="mt-1 text-[10px] font-bold text-white">
                  {bookingDetails.deliveryMethod}
                </p>

                {bookingDetails.valetAddress && (

                  <p className="mt-0.5 text-[9px] text-slate-500">
                    {bookingDetails.valetAddress}
                  </p>

                )}

              </div>

            </div>


            {/* Total */}

            <div
              className="
                mt-4
                flex
                items-center
                justify-between
                border-t
                border-white/10
                pt-4
              "
            >

              <div>

                <p className="text-[8px] font-mono uppercase tracking-widest text-slate-600">
                  Total Paid
                </p>

                <p className="mt-1 text-2xl font-heading font-black text-white">
                  ₹{bookingDetails.totalAmount.toLocaleString('en-IN')}
                </p>

              </div>


              <button
                onClick={() => onNavigate('booking-confirmation')}
                className="
                  rounded-xl
                  bg-[#00C2FF]
                  px-3.5
                  py-2.5
                  text-[10px]
                  font-bold
                  text-black
                  flex
                  items-center
                  gap-1
                  hover:bg-cyan-300
                  transition
                "
              >
                View Details
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

            </div>

          </div>

        </div>

      )}


      {/* =====================================================
          NEW BOOKING
      ===================================================== */}

      {bookingDetails && (

        <button
          onClick={() => onNavigate('booking')}
          className="
            w-full
            rounded-2xl
            border
            border-[#00C2FF]/30
            bg-[#00C2FF]/5
            py-3.5
            text-xs
            font-heading
            font-bold
            text-[#00C2FF]
            flex
            items-center
            justify-center
            gap-2
            hover:bg-[#00C2FF]/10
            transition
          "
        >
          Book Another Service
          <ChevronRight className="w-4 h-4" />
        </button>

      )}

    </div>
  );
};