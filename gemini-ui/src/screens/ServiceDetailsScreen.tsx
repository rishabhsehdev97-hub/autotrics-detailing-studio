import React from 'react';
import {
  ArrowLeft,
  Check,
  Clock,
  ShieldCheck,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

import { DetailService, ScreenId } from '../types';

interface ServiceDetailsScreenProps {
  service: DetailService;
  onNavigate: (screen: ScreenId) => void;
  onBookService: () => void;
}

export const ServiceDetailsScreen: React.FC<ServiceDetailsScreenProps> = ({
  service,
  onNavigate,
  onBookService,
}) => {
  return (
    <div className="min-h-screen bg-black text-white px-4 pt-5 pb-28">

      {/* Back Button */}
      <button
        onClick={() => onNavigate('home')}
        className="mb-5 flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Services
      </button>

      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-[#00C2FF]/40 bg-[#0B0D12] p-5 shadow-[0_0_35px_rgba(0,194,255,0.10)]">

        <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-[#00C2FF]/10 blur-3xl pointer-events-none" />

        <div className="relative">

          {/* Category */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl border border-[#00C2FF]/30 bg-[#00C2FF]/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#00C2FF]" />
            </div>

            <div>
              <p className="text-[9px] font-mono tracking-[0.18em] text-[#00C2FF] uppercase">
                Autotrics Studio
              </p>

              <p className="text-[9px] font-mono text-slate-500 uppercase">
                Premium Service Package
              </p>
            </div>
          </div>

          {/* Service Name */}
          <h1 className="mt-5 text-2xl font-black leading-tight text-white">
            {service.name}
          </h1>

          {/* Tagline */}
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            {service.tagline}
          </p>

          {/* Price */}
          <div className="mt-6 flex items-end justify-between">

            <div>
              <p className="text-[9px] font-mono uppercase tracking-widest text-slate-500">
                Service Rate
              </p>

              <p className="mt-1 text-3xl font-black text-white">
                ₹{service.price.toLocaleString('en-IN')}
              </p>
            </div>

            {service.popular && (
              <span className="rounded-lg border border-[#00C2FF]/30 bg-[#00C2FF]/10 px-2.5 py-1.5 text-[9px] font-mono font-bold tracking-wider text-[#00C2FF] uppercase">
                FLAGSHIP
              </span>
            )}
          </div>

          {/* Warranty / Duration */}
          <div className="mt-5 grid grid-cols-2 gap-2">

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <ShieldCheck className="w-4 h-4 text-[#00C2FF]" />

              <p className="mt-2 text-[8px] font-mono uppercase tracking-widest text-slate-500">
                Warranty
              </p>

              <p className="mt-1 text-xs font-bold text-white">
                {service.warrantyYears > 0
                  ? `${service.warrantyYears} Years`
                  : 'No Warranty'}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <Clock className="w-4 h-4 text-[#00C2FF]" />

              <p className="mt-2 text-[8px] font-mono uppercase tracking-widest text-slate-500">
                Estimated Time
              </p>

              <p className="mt-1 text-xs font-bold text-white">
                {service.durationHours} Hours
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-4 rounded-3xl border border-white/10 bg-[#0B0D12] p-5">

        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#00C2FF]" />

          <h2 className="text-sm font-extrabold text-white">
            Package Overview
          </h2>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-slate-400">
          {service.description}
        </p>

      </div>

      {/* Included Features */}
      <div className="mt-4 rounded-3xl border border-white/10 bg-[#0B0D12] p-5">

        <div className="flex items-center justify-between">

          <h2 className="text-sm font-extrabold text-white">
            What's Included
          </h2>

          <span className="text-[9px] font-mono uppercase tracking-widest text-[#00C2FF]">
            {service.features.length} Benefits
          </span>

        </div>

        <div className="mt-4 space-y-2">

          {service.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5"
            >
              <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#00C2FF]/10">
                <Check className="w-3 h-3 text-[#00C2FF]" />
              </div>

              <span className="text-xs leading-relaxed text-slate-300">
                {feature}
              </span>
            </div>
          ))}

        </div>
      </div>

      {/* Warranty Highlight */}
      {service.warrantyYears > 0 && (
        <div className="mt-4 rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.04] p-5">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>

            <div>
              <p className="text-[9px] font-mono uppercase tracking-widest text-emerald-400">
                Studio Warranty
              </p>

              <p className="mt-1 text-sm font-bold text-white">
                {service.warrantyYears}-Year Warranty Included
              </p>
            </div>

          </div>

        </div>
      )}

      {/* Bottom Booking CTA */}
      <div className="mt-5 rounded-3xl border border-[#00C2FF]/30 bg-[#0B0D12] p-4">

        <div className="flex items-center justify-between gap-4">

          <div>
            <p className="text-[9px] font-mono uppercase tracking-widest text-slate-500">
              Total Service Rate
            </p>

            <p className="mt-1 text-xl font-black text-white">
              ₹{service.price.toLocaleString('en-IN')}
            </p>
          </div>

          <button
            onClick={onBookService}
            className="flex items-center gap-2 rounded-2xl bg-[#00C2FF] px-5 py-3.5 text-xs font-extrabold uppercase tracking-wide text-black transition hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(0,194,255,0.25)]"
          >
            Book This Package
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>

      </div>

    </div>
  );
};

export default ServiceDetailsScreen;