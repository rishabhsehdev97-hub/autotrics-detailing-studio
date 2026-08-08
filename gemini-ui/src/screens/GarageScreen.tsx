import React, { useState } from 'react';
import {
  Car,
  ShieldCheck,
  Plus,
  Calendar,
  Shield,
  ChevronRight,
  UserRound,
} from 'lucide-react';

import { Vehicle, ScreenId } from '../types';

interface GarageScreenProps {
  vehicles: Vehicle[];
  onSelectVehicle: (vehicle: Vehicle) => void;
  onNavigate: (screen: ScreenId) => void;
}

export const GarageScreen: React.FC<GarageScreenProps> = ({
  vehicles,
  onSelectVehicle,
  onNavigate,
}) => {
  const [selectedVehId, setSelectedVehId] = useState(
    vehicles[0]?.id || ''
  );

  const activeVehicle =
    vehicles.find((vehicle) => vehicle.id === selectedVehId) ||
    vehicles[0];

  const handleVehicleDetails = (vehicle: Vehicle) => {
    onSelectVehicle(vehicle);
    onNavigate('vehicle-details');
  };

  return (
    <div className="space-y-4 pb-6">

      {/* ========================================================= */}
      {/* HEADER */}
      {/* ========================================================= */}

      <div className="flex items-center justify-between">

        <div>
          <div className="flex items-center gap-2">
            <Car className="h-5 w-5 text-[#00C2FF]" />

            <h2 className="font-heading text-xl font-extrabold tracking-wide text-white">
              My Garage
            </h2>
          </div>

          <p className="mt-1 text-[10px] font-mono uppercase tracking-widest text-slate-500">
            {vehicles.length}{' '}
            {vehicles.length === 1 ? 'Vehicle' : 'Vehicles'} Registered
          </p>
        </div>

        <button
          id="garage-add-vehicle-btn"
          onClick={() => onNavigate('add-vehicle')}
          className="flex items-center gap-1.5 rounded-xl bg-[#00C2FF] px-3.5 py-2 text-xs font-heading font-bold uppercase text-black shadow-[0_0_15px_rgba(0,194,255,0.25)] transition-all hover:bg-cyan-300"
        >
          <Plus className="h-4 w-4 stroke-[3]" />
          Add Vehicle
        </button>

      </div>


      {/* ========================================================= */}
      {/* EMPTY GARAGE */}
      {/* ========================================================= */}

      {vehicles.length === 0 && (
        <div className="rounded-3xl border border-white/10 bg-[#0B0D12] p-8 text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#00C2FF]/20 bg-[#00C2FF]/10">
            <Car className="h-6 w-6 text-[#00C2FF]" />
          </div>

          <h3 className="mt-4 text-base font-extrabold text-white">
            Your Garage Is Empty
          </h3>

          <p className="mx-auto mt-2 max-w-xs text-xs leading-relaxed text-slate-500">
            Add your vehicle to keep its details, protection records,
            service history and warranties together.
          </p>

          <button
            onClick={() => onNavigate('add-vehicle')}
            className="mt-5 rounded-2xl bg-[#00C2FF] px-5 py-3 text-xs font-extrabold uppercase tracking-wide text-black transition hover:bg-cyan-300"
          >
            Add Your First Vehicle
          </button>

        </div>
      )}


      {/* ========================================================= */}
      {/* VEHICLE SELECTOR */}
      {/* ========================================================= */}

      {vehicles.length > 0 && (
        <div className="space-y-2">

          <p className="px-1 text-[9px] font-mono font-bold uppercase tracking-[0.18em] text-slate-500">
            Your Vehicles
          </p>

          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">

            {vehicles.map((vehicle) => (
              <button
                key={vehicle.id}
                id={`garage-tab-${vehicle.id}`}
                onClick={() => setSelectedVehId(vehicle.id)}
                className={`flex flex-shrink-0 items-center gap-2 rounded-2xl border px-4 py-2.5 text-xs font-mono whitespace-nowrap transition-all ${
                  selectedVehId === vehicle.id
                    ? 'border-[#00C2FF] bg-[#00C2FF] font-bold text-black shadow-lg'
                    : 'border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.06]'
                }`}
              >
                <span>
                  {vehicle.year} {vehicle.make}
                </span>

                <span
                  className={`h-2 w-2 rounded-full ${
                    vehicle.status === 'Protected'
                      ? 'bg-emerald-400'
                      : 'bg-amber-400'
                  }`}
                />
              </button>
            ))}

          </div>
        </div>
      )}


      {/* ========================================================= */}
      {/* ACTIVE VEHICLE */}
      {/* ========================================================= */}

      {activeVehicle && (
        <div className="space-y-4">

          {/* Vehicle Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B0D12] shadow-2xl">

            {/* Image */}
            <div className="relative h-56 overflow-hidden">

              <img
                src={activeVehicle.imageUrl}
                alt={`${activeVehicle.year} ${activeVehicle.make} ${activeVehicle.model}`}
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12] via-black/30 to-transparent" />

              {/* Status */}
              <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/75 px-3 py-1.5 text-[9px] font-mono font-bold uppercase text-emerald-400 backdrop-blur-md">

                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                {activeVehicle.status}

              </div>

              {/* Vehicle Name */}
              <div className="absolute bottom-4 left-5 right-5">

                <p className="text-[9px] font-mono font-bold uppercase tracking-[0.18em] text-[#00C2FF]">
                  MY VEHICLE
                </p>

                <h3 className="mt-1 font-heading text-2xl font-black leading-tight text-white">
                  {activeVehicle.year} {activeVehicle.make}
                </h3>

                <p className="text-sm font-semibold text-slate-300">
                  {activeVehicle.model}
                </p>

              </div>

            </div>


            {/* Vehicle Summary */}
            <div className="p-5">

              <div className="grid grid-cols-2 gap-2">

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">

                  <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500">
                    Colour
                  </p>

                  <p className="mt-1 text-xs font-bold text-white">
                    {activeVehicle.color || 'Not available'}
                  </p>

                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">

                  <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500">
                    Registration
                  </p>

                  <p className="mt-1 truncate text-xs font-bold text-white">
                    {activeVehicle.licensePlate || 'Not available'}
                  </p>

                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">

                  <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500">
                    Finish
                  </p>

                  <p className="mt-1 text-xs font-bold text-white">
                    {activeVehicle.finish || 'Not available'}
                  </p>

                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">

                  <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500">
                    Vehicle Status
                  </p>

                  <p className="mt-1 text-xs font-bold text-white">
                    {activeVehicle.status}
                  </p>

                </div>

              </div>


              {/* Protection */}
              <div className="mt-3 rounded-2xl border border-[#00C2FF]/20 bg-[#00C2FF]/[0.04] p-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#00C2FF]/10">
                    <ShieldCheck className="h-4 w-4 text-[#00C2FF]" />
                  </div>

                  <div className="min-w-0">

                    <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500">
                      Current Protection
                    </p>

                    <p className="mt-1 truncate text-xs font-bold text-white">
                      {activeVehicle.protectionType || 'No protection recorded'}
                    </p>

                  </div>

                </div>

                {activeVehicle.protectionExpires && (
                  <p className="mt-3 text-[9px] font-mono text-slate-500">
                    Protection expiry: {activeVehicle.protectionExpires}
                  </p>
                )}

              </div>


              {/* Paint Health */}
              <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">

                <div className="flex items-center justify-between">

                  <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500">
                    Paint Health
                  </span>

                  <span className="text-sm font-black text-[#00C2FF]">
                    {activeVehicle.paintHealthScore}/100
                  </span>

                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">

                  <div
                    className="h-full rounded-full bg-[#00C2FF] transition-all duration-700"
                    style={{
                      width: `${Math.min(
                        Math.max(activeVehicle.paintHealthScore, 0),
                        100
                      )}%`,
                    }}
                  />

                </div>

              </div>


              {/* Buttons */}
              <div className="mt-4 grid grid-cols-2 gap-2">

                <button
                  id="garage-view-details-btn"
                  onClick={() => handleVehicleDetails(activeVehicle)}
                  className="flex items-center justify-center gap-1.5 rounded-2xl border border-[#00C2FF]/30 bg-[#00C2FF]/10 py-3.5 text-[10px] font-heading font-extrabold uppercase tracking-wide text-[#00C2FF] transition hover:bg-[#00C2FF]/20"
                >
                  View Details
                  <ChevronRight className="h-4 w-4" />
                </button>

                <button
                  id="garage-book-service-btn"
                  onClick={() => {
                    onSelectVehicle(activeVehicle);
                    onNavigate('booking');
                  }}
                  className="flex items-center justify-center gap-1.5 rounded-2xl bg-[#00C2FF] py-3.5 text-[10px] font-heading font-extrabold uppercase tracking-wide text-black shadow-[0_0_15px_rgba(0,194,255,0.2)] transition hover:bg-cyan-300"
                >
                  <Calendar className="h-4 w-4" />
                  Book Service
                </button>

              </div>

            </div>
          </div>


          {/* ===================================================== */}
          {/* QUICK VEHICLE INFORMATION */}
          {/* ===================================================== */}

          <div className="rounded-3xl border border-white/10 bg-[#0B0D12] p-5">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                <Car className="h-5 w-5 text-slate-400" />
              </div>

              <div>
                <p className="text-[9px] font-mono uppercase tracking-widest text-slate-500">
                  Vehicle Record
                </p>

                <h4 className="mt-1 text-sm font-extrabold text-white">
                  Your vehicle information
                </h4>
              </div>

            </div>

            <div className="mt-4 space-y-2">

              <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5">

                <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500">
                  VIN
                </span>

                <span className="max-w-[60%] truncate text-[10px] font-semibold text-slate-300">
                  {activeVehicle.vin || 'Not available'}
                </span>

              </div>

              <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5">

                <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500">
                  Last Service
                </span>

                <span className="text-[10px] font-semibold text-slate-300">
                  {activeVehicle.lastServiceDate || 'No record'}
                </span>

              </div>

            </div>

          </div>


          {/* ===================================================== */}
          {/* WARRANTY */}
          {/* ===================================================== */}

          <button
            id="garage-warranty-btn"
            onClick={() => onNavigate('warranty')}
            className="w-full rounded-3xl border border-white/10 bg-[#0B0D12] p-5 text-left transition hover:border-[#00C2FF]/30"
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#00C2FF]/20 bg-[#00C2FF]/5">
                  <Shield className="h-5 w-5 text-[#00C2FF]" />
                </div>

                <div>

                  <p className="text-[9px] font-mono uppercase tracking-widest text-slate-500">
                    Protection Records
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    Warranty Certificates
                  </p>

                </div>

              </div>

              <ChevronRight className="h-5 w-5 text-slate-600" />

            </div>

          </button>


          {/* ===================================================== */}
          {/* ADD ANOTHER VEHICLE */}
          {/* ===================================================== */}

          <button
            onClick={() => onNavigate('add-vehicle')}
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] py-3.5 text-xs font-heading font-bold uppercase tracking-wide text-slate-400 transition hover:border-[#00C2FF]/40 hover:text-[#00C2FF]"
          >
            <Plus className="h-4 w-4" />
            Add Another Vehicle
          </button>

        </div>
      )}

    </div>
  );
};