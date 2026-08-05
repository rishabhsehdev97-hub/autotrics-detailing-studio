import React from 'react';
import { 
  Sparkles, ShieldCheck, ChevronRight, Calendar, ArrowUpRight, 
  Car, Wrench, Flame, Tag, Check, Award
} from 'lucide-react';
import { Vehicle, DetailService, ScreenId } from '../types';
import { PREMIUM_SERVICES, FEATURED_OFFERS } from '../data/mockData';

interface HomeScreenProps {
  vehicles: Vehicle[];
  onNavigate: (screen: ScreenId) => void;
  onSelectService: (service: DetailService) => void;
  onSelectVehicle: (vehicle: Vehicle) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  vehicles,
  onNavigate,
  onSelectService,
  onSelectVehicle,
}) => {
  const activeVehicle = vehicles[0] || vehicles[1];

  return (
    <div className="w-full space-y-6 pb-24 px-4 pt-3">
      
      {/* 1. HERO BANNER */}
      <div className="relative w-full rounded-3xl overflow-hidden glass-card border border-white/15 p-5 sm:p-6 shadow-2xl">
        {/* Background Image with Ambient Glow */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity filter saturate-150"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80')` }}
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-md space-y-3">
          {/* Live Studio Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C2FF]/15 border border-[#00C2FF]/40 text-[#00C2FF] text-[10px] font-mono font-bold tracking-widest uppercase glow-cyan-sm">
            <span className="w-2 h-2 rounded-full bg-[#00C2FF] animate-pulse" />
            STUDIO BAYS OPEN • 4 INFRARED CURING BAYS ACTIVE
          </div>

          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-wide leading-tight">
            THE APEX OF <br />
            <span className="text-gradient-cyan">PAINT PRESERVATION</span>
          </h1>

          <p className="text-slate-300 text-xs leading-relaxed font-light max-w-xs">
            Computer-cut self-healing TPU armor, 9H reduced graphene oxide matrices, and optical polish.
          </p>

          <div className="pt-2 flex items-center gap-3">
            <button
              id="hero-quick-book-btn"
              onClick={() => onNavigate('booking')}
              className="px-5 py-3 rounded-2xl bg-[#00C2FF] hover:bg-cyan-400 text-black font-heading font-bold text-xs tracking-wider uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(0,194,255,0.4)] transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Quick Booking</span>
            </button>

            <button
              id="hero-ai-scan-btn"
              onClick={() => onNavigate('ai-quote')}
              className="px-4 py-3 rounded-2xl glass-panel hover:bg-white/10 border border-white/20 text-white font-heading font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00C2FF]" />
              <span>AI Quote</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. AI RECOMMENDATION CARD */}
      <div 
        id="home-ai-recommendation-card"
        onClick={() => onNavigate('ai-quote')}
        className="relative w-full rounded-3xl glass-panel-cyan p-4 sm:p-5 border border-[#00C2FF]/40 cursor-pointer hover:border-[#00C2FF] transition-all duration-300 group shadow-[0_0_25px_rgba(0,194,255,0.15)]"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#00C2FF]/20 border border-[#00C2FF]/50 flex items-center justify-center glow-cyan-sm group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-[#00C2FF] animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono tracking-widest text-[#00C2FF] uppercase font-bold">
                  AUTOTRICS AI DIAGNOSTIC ENGINE
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.2 bg-emerald-500/20 text-emerald-400 rounded">
                  94% Paint Score
                </span>
              </div>
              <h3 className="font-heading font-bold text-sm text-white mt-0.5">
                AI Paint Health Alert: {activeVehicle ? `${activeVehicle.year} ${activeVehicle.make} ${activeVehicle.model}` : 'Porsche 911 GT3 RS'}
              </h3>
            </div>
          </div>

          <ChevronRight className="w-5 h-5 text-[#00C2FF] group-hover:translate-x-1 transition-transform" />
        </div>

        <p className="text-slate-300 text-xs mt-3 leading-relaxed font-light pl-1 border-l-2 border-[#00C2FF]/60">
          "Sub-micron clearcoat swirls detected on hood panels. Recommended: Stage 2 Correction + 9H Graphene Matrix Shield to maintain 100% optical depth."
        </p>

        <div className="mt-3 flex items-center justify-between pt-2 border-t border-[#00C2FF]/20 text-[11px] font-mono">
          <span className="text-slate-400">Est. Time: 18h • 10-Yr Warranty</span>
          <span className="text-[#00C2FF] font-bold group-hover:underline flex items-center gap-1">
            Run Custom AI Scan <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>

      {/* 3. RECENT VEHICLES IN GARAGE */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-heading font-extrabold text-base text-white tracking-wide flex items-center gap-2">
            <Car className="w-4 h-4 text-[#00C2FF]" />
            <span>Studio Garage Vehicles</span>
          </h2>
          <button
            id="home-view-garage-btn"
            onClick={() => onNavigate('garage')}
            className="text-xs font-mono text-[#00C2FF] hover:underline flex items-center gap-1"
          >
            <span>View All ({vehicles.length})</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Scrollable Horizontal Vehicle Cards */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
          {vehicles.slice(0, 3).map((veh) => (
            <div
              key={veh.id}
              id={`home-vehicle-card-${veh.id}`}
              onClick={() => {
                onSelectVehicle(veh);
                onNavigate('garage');
              }}
              className="min-w-[260px] sm:min-w-[280px] rounded-2xl glass-card p-3.5 border border-white/10 hover:border-[#00C2FF]/50 transition-all cursor-pointer group flex-shrink-0"
            >
              <div className="relative h-32 rounded-xl overflow-hidden mb-3">
                <img
                  src={veh.imageUrl}
                  alt={`${veh.make} ${veh.model}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-mono text-emerald-400">
                  {veh.status}
                </span>
                <span className="absolute bottom-2 left-2 text-xs font-heading font-bold text-white drop-shadow">
                  {veh.year} {veh.make} {veh.model}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                <span className="text-slate-400">{veh.finish}</span>
                <span className="text-[#00C2FF] font-bold">Score: {veh.paintHealthScore}%</span>
              </div>
            </div>
          ))}

          {/* Add Vehicle Card */}
          <div
            id="home-add-vehicle-card"
            onClick={() => onNavigate('add-vehicle')}
            className="min-w-[180px] rounded-2xl glass-panel border border-dashed border-white/20 hover:border-[#00C2FF] flex flex-col items-center justify-center p-4 cursor-pointer text-center group transition-colors flex-shrink-0"
          >
            <div className="w-10 h-10 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/30 flex items-center justify-center mb-2 text-[#00C2FF] group-hover:scale-110 transition-transform">
              +
            </div>
            <span className="text-xs font-heading font-bold text-white">Add New Vehicle</span>
            <span className="text-[10px] font-mono text-slate-400 mt-0.5">Register for AI diagnostics</span>
          </div>
        </div>
      </div>

      {/* 4. PREMIUM SERVICES (The 7 requested services) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-heading font-extrabold text-base text-white tracking-wide flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00C2FF]" />
              <span>Premium Studio Services</span>
            </h2>
            <p className="text-[11px] text-slate-400 font-light">Custom tailored for luxury hypercars and exotic vehicles</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PREMIUM_SERVICES.map((serv) => (
            <div
              key={serv.id}
              id={`service-card-${serv.id}`}
              onClick={() => {
                onSelectService(serv);
                onNavigate('booking');
              }}
              className="relative rounded-2xl glass-card p-4 border border-white/10 hover:border-[#00C2FF]/50 transition-all cursor-pointer group flex items-start gap-3.5"
            >
              <img
                src={serv.imageUrl}
                alt={serv.name}
                className="w-16 h-16 rounded-xl object-cover border border-white/10 group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading font-bold text-xs sm:text-sm text-white truncate group-hover:text-[#00C2FF] transition-colors">
                    {serv.name}
                  </h3>
                  {serv.popular && (
                    <span className="px-1.5 py-0.5 rounded bg-[#00C2FF]/15 text-[#00C2FF] text-[9px] font-mono uppercase font-bold border border-[#00C2FF]/30">
                      FLAGSHIP
                    </span>
                  )}
                </div>

                <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{serv.tagline}</p>

                <div className="mt-2 flex items-center justify-between font-mono text-xs">
                  <span className="text-white font-extrabold">${serv.price.toLocaleString()}</span>
                  <span className="text-[10px] text-slate-400">{serv.durationHours}h • {serv.warrantyYears > 0 ? `${serv.warrantyYears}Y Warranty` : 'Optical Finish'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. FEATURED OFFERS */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-heading font-extrabold text-base text-white tracking-wide flex items-center gap-2">
            <Tag className="w-4 h-4 text-[#00C2FF]" />
            <span>Featured VIP Offers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {FEATURED_OFFERS.map((offer) => (
            <div
              key={offer.id}
              id={`offer-card-${offer.id}`}
              className="relative rounded-2xl overflow-hidden glass-card p-4 border border-[#00C2FF]/30 flex items-center justify-between group"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('${offer.bgUrl}')` }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent pointer-events-none" />

              <div className="relative z-10 max-w-xs space-y-1">
                <span className="text-[9px] font-mono px-2 py-0.5 bg-[#00C2FF] text-black font-extrabold rounded uppercase">
                  {offer.code}
                </span>
                <h4 className="font-heading font-bold text-sm text-white">{offer.title}</h4>
                <p className="text-xs text-[#00C2FF] font-mono font-semibold">{offer.discount}</p>
              </div>

              <button
                id={`claim-offer-btn-${offer.id}`}
                onClick={() => onNavigate('booking')}
                className="relative z-10 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-[#00C2FF] hover:text-black border border-white/20 text-white font-heading font-bold text-xs transition-all"
              >
                Claim Offer
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 6. QUICK BOOKING FLOATING BANNER */}
      <div className="rounded-2xl glass-panel p-4 border border-white/15 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00C2FF] to-blue-600 flex items-center justify-center text-black font-extrabold">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-xs text-white">Need White-Glove Valet Transport?</h4>
            <p className="text-[11px] text-slate-400 font-mono">Enclosed air-ride carrier direct to studio</p>
          </div>
        </div>

        <button
          id="home-quick-valet-booking-btn"
          onClick={() => onNavigate('booking')}
          className="px-3.5 py-2 rounded-xl bg-[#00C2FF] text-black font-heading font-bold text-xs uppercase hover:bg-cyan-400 transition-colors"
        >
          Book Valet
        </button>
      </div>

    </div>
  );
};
