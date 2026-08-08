import React from 'react';
import {
  ArrowLeft,
  Car,
  ShieldCheck,
  CalendarDays,
  Gauge,
  FileCheck2,
  Clock3,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

import { Vehicle, ScreenId } from '../types';

interface VehicleDetailsScreenProps {
  vehicle: Vehicle;
  onNavigate: (screen: ScreenId) => void;
}

export const VehicleDetailsScreen: React.FC<VehicleDetailsScreenProps> = ({
  vehicle,
  onNavigate,
}) => {
  return (
    <div className="space-y-4 pb-6">

      {/* Back */}
      <button
        onClick={() => onNavigate('garage')}
        className="flex items-center gap-2 text-xs font-semibold text-slate-400 transition hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to My Garage
      </button>

      {/* Vehicle Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-[#00C2FF]/30 bg-[#0B0D12] shadow-[0_0_35px_rgba(0,194,255,0.08)]">

        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#00C2FF]/10 blur-3xl" />

        <div className="relative">

          <div className="h-48 w-full overflow-hidden">
            <img
              src={vehicle.imageUrl}
              alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />

            <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/20 via-transparent to-[#0B0D12]" />
          </div>

          <div className="relative -mt-10 px-5 pb-5">

            <div className="flex items-end justify-between gap-3">

              <div>
                <p className="text-[9px] font-mono font-bold uppercase tracking-[0.18em] text-[#00C2FF]">
                  MY GARAGE
                </p>

                <h1 className="mt-1 font-heading text-2xl font-black leading-tight text-white">
                  {vehicle.year} {vehicle.make}
                </h1>

                <p className="text-sm font-semibold text-slate-400">
                  {vehicle.model}
                </p>
              </div>

              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-[#00C2FF]/30 bg-[#00C2FF]/10">
                <Car className="h-5 w-5 text-[#00C2FF]" />
              </div>

            </div>

            {/* Status */}
            <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5">

              <div>
                <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500">
                  Vehicle Status
                </p>

                <p className="mt-1 text-xs font-bold text-white">
                  {vehicle.status}
                </p>
              </div>

              <span className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[8px] font-mono font-bold uppercase text-emerald-400">
                {vehicle.status === 'Protected' ? 'Protected' : 'Active'}
              </span>

            </div>

          </div>
        </div>
      </div>

      {/* Vehicle Information */}
      <div className="rounded-3xl border border-white/10 bg-[#0B0D12] p-5">

        <div className="flex items-center gap-2">
          <Car className="h-4 w-4 text-[#00C2FF]" />

          <h2 className="text-sm font-extrabold text-white">
            Vehicle Information
          </h2>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">

          <InfoBox
            label="Registration"
            value={vehicle.licensePlate}
          />

          <InfoBox
            label="Colour"
            value={vehicle.color}
          />

          <InfoBox
            label="Finish"
            value={vehicle.finish}
          />

          <InfoBox
            label="VIN"
            value={vehicle.vin}
          />

        </div>
      </div>

      {/* Paint Health */}
      <div className="rounded-3xl border border-[#00C2FF]/20 bg-[#0B0D12] p-5">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">
            <Gauge className="h-4 w-4 text-[#00C2FF]" />

            <h2 className="text-sm font-extrabold text-white">
              Paint Health
            </h2>
          </div>

          <span className="text-xl font-black text-white">
            {vehicle.paintHealthScore}
            <span className="text-xs text-[#00C2FF]">/100</span>
          </span>

        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#00C2FF] to-blue-500"
            style={{
              width: `${Math.min(
                Math.max(vehicle.paintHealthScore, 0),
                100
              )}%`,
            }}
          />
        </div>

        <p className="mt-2 text-[10px] text-slate-500">
          Based on your latest Autotrics vehicle assessment.
        </p>

      </div>

      {/* Protection */}
      <div className="rounded-3xl border border-white/10 bg-[#0B0D12] p-5">

        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-[#00C2FF]" />

          <h2 className="text-sm font-extrabold text-white">
            Current Protection
          </h2>
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">

          <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500">
            Protection Package
          </p>

          <p className="mt-1 text-sm font-bold text-white">
            {vehicle.protectionType || 'No protection recorded'}
          </p>

          <div className="mt-4 flex items-center justify-between">

            <div>
              <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500">
                Protection Expiry
              </p>

              <p className="mt-1 text-xs font-semibold text-slate-300">
                {vehicle.protectionExpires || 'Not available'}
              </p>
            </div>

            <ShieldCheck className="h-5 w-5 text-[#00C2FF]" />

          </div>

        </div>

      </div>

      {/* Service History */}
      <div className="rounded-3xl border border-white/10 bg-[#0B0D12] p-5">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-[#00C2FF]" />

            <h2 className="text-sm font-extrabold text-white">
              Service History
            </h2>
          </div>

          <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500">
            Vehicle Record
          </span>

        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">

          <div className="flex items-center gap-3">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#00C2FF]/10">
              <CalendarDays className="h-4 w-4 text-[#00C2FF]" />
            </div>

            <div>
              <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500">
                Last Service
              </p>

              <p className="mt-1 text-xs font-bold text-white">
                {vehicle.lastServiceDate || 'No service recorded'}
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Warranty */}
      <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.03] p-5">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10">
            <FileCheck2 className="h-5 w-5 text-emerald-400" />
          </div>

          <div>
            <p className="text-[9px] font-mono uppercase tracking-widest text-emerald-400">
              Warranty Record
            </p>

            <p className="mt-1 text-sm font-bold text-white">
              Protection warranty information
            </p>
          </div>

        </div>

        <button
          onClick={() => onNavigate('warranty')}
          className="mt-4 flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-left"
        >
          <span className="text-xs font-semibold text-slate-300">
            View Warranty Certificates
          </span>

          <ChevronRight className="h-4 w-4 text-slate-500" />
        </button>

      </div>

      {/* Book Service */}
      <div className="rounded-3xl border border-[#00C2FF]/30 bg-[#0B0D12] p-4">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00C2FF]/10">
            <Sparkles className="h-5 w-5 text-[#00C2FF]" />
          </div>

          <div>
            <p className="text-[9px] font-mono uppercase tracking-widest text-slate-500">
              Vehicle Care
            </p>

            <p className="mt-1 text-sm font-bold text-white">
              Need detailing or protection?
            </p>
          </div>

        </div>

        <button
          onClick={() => onNavigate('booking')}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#00C2FF] py-3.5 text-xs font-heading font-extrabold uppercase tracking-wide text-black transition hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(0,194,255,0.25)]"
        >
          Book Service
          <ChevronRight className="h-4 w-4" />
        </button>

      </div>

    </div>
  );
};

const InfoBox: React.FC<{
  label: string;
  value: string;
}> = ({ label, value }) => (
  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">

    <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500">
      {label}
    </p>

    <p className="mt-1 truncate text-[10px] font-semibold text-white">
      {value || 'Not available'}
    </p>

  </div>
);