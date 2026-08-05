import React, { useState } from 'react';
import { Car, ShieldCheck, Sparkles, Plus, Calendar, Wrench, Shield, ChevronRight, CheckCircle2 } from 'lucide-react';
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
  const [selectedVehId, setSelectedVehId] = useState<string>(vehicles[0]?.id || '');
  const activeVehicle = vehicles.find(v => v.id === selectedVehId) || vehicles[0];

  return (
    <div className="w-full space-y-6 pb-24 px-4 pt-3">
      
      {/* Top Banner */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-heading font-extrabold text-xl text-white tracking-wide flex items-center gap-2">
            <Car className="w-5 h-5 text-[#00C2FF]" />
            <span>Studio Garage</span>
          </h2>
          <p className="text-xs text-slate-400 font-mono">{vehicles.length} Luxury Vehicles Registered</p>
        </div>

        <button
          id="garage-add-vehicle-btn"
          onClick={() => onNavigate('add-vehicle')}
          className="px-3.5 py-2 rounded-xl bg-[#00C2FF] hover:bg-cyan-400 text-black font-heading font-bold text-xs flex items-center gap-1.5 uppercase transition-all shadow-[0_0_15px_rgba(0,194,255,0.3)]"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>Add Car</span>
        </button>
      </div>

      {/* Vehicles Selector Carousel Tabs */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {vehicles.map((v) => (
          <button
            key={v.id}
            id={`garage-tab-${v.id}`}
            onClick={() => setSelectedVehId(v.id)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-mono whitespace-nowrap flex items-center gap-2 transition-all border ${
              selectedVehId === v.id
                ? 'bg-[#00C2FF] text-black border-[#00C2FF] font-bold shadow-lg scale-102'
                : 'glass-panel text-slate-300 border-white/10 hover:bg-white/10'
            }`}
          >
            <span>{v.year} {v.make} {v.model}</span>
            <span className={`w-2 h-2 rounded-full ${v.status === 'Protected' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
          </button>
        ))}
      </div>

      {/* Active Vehicle Hero Card */}
      {activeVehicle && (
        <div className="space-y-4">
          <div className="relative rounded-3xl overflow-hidden glass-card border border-white/15 p-5 space-y-4 shadow-2xl">
            {/* Vehicle Image */}
            <div className="relative h-56 rounded-2xl overflow-hidden">
              <img
                src={activeVehicle.imageUrl}
                alt={`${activeVehicle.make} ${activeVehicle.model}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

              {/* Status Pill */}
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {activeVehicle.status}
              </div>

              {/* Vehicle Title Overlay */}
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-[10px] font-mono tracking-widest text-[#00C2FF] uppercase font-bold">
                  {activeVehicle.finish} FINISH
                </span>
                <h3 className="font-heading font-black text-2xl text-white">
                  {activeVehicle.year} {activeVehicle.make} {activeVehicle.model}
                </h3>
                <p className="text-xs text-slate-300 font-mono">{activeVehicle.color}</p>
              </div>
            </div>

            {/* Coating & Protection Health Progress Bar */}
            <div className="glass-panel p-4 rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#00C2FF]" />
                  Paint Protection Health
                </span>
                <span className="text-[#00C2FF] font-extrabold">{activeVehicle.paintHealthScore}% OPTICAL SCORE</span>
              </div>

              {/* Meter */}
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-[#00C2FF] rounded-full glow-cyan-sm transition-all duration-1000"
                  style={{ width: `${activeVehicle.paintHealthScore}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                <span>Shield: {activeVehicle.protectionType}</span>
                <span>Expires: {activeVehicle.protectionExpires}</span>
              </div>
            </div>

            {/* Vehicle Details Table */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="glass-panel p-3 rounded-xl border border-white/10">
                <span className="text-slate-400 block text-[10px] uppercase">License Plate</span>
                <span className="text-white font-bold">{activeVehicle.licensePlate}</span>
              </div>

              <div className="glass-panel p-3 rounded-xl border border-white/10">
                <span className="text-slate-400 block text-[10px] uppercase">VIN Number</span>
                <span className="text-slate-200 font-bold truncate block">{activeVehicle.vin}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                id="garage-schedule-maintenance-btn"
                onClick={() => {
                  onSelectVehicle(activeVehicle);
                  onNavigate('booking');
                }}
                className="py-3.5 rounded-2xl bg-[#00C2FF] hover:bg-cyan-400 text-black font-heading font-bold text-xs uppercase flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(0,194,255,0.3)] transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Service</span>
              </button>

              <button
                id="garage-view-warranty-btn"
                onClick={() => onNavigate('warranty')}
                className="py-3.5 rounded-2xl glass-panel hover:bg-white/10 border border-white/20 text-white font-heading font-bold text-xs uppercase flex items-center justify-center gap-1.5 transition-all"
              >
                <Shield className="w-4 h-4 text-[#00C2FF]" />
                <span>Warranty Vault</span>
              </button>
            </div>
          </div>

          {/* Service History Timeline */}
          <div className="glass-panel p-4 rounded-3xl border border-white/10 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white flex items-center gap-2">
              <Wrench className="w-4 h-4 text-[#00C2FF]" />
              <span>Studio Service History</span>
            </h4>

            <div className="space-y-3">
              <div className="flex items-start gap-3 border-l-2 border-[#00C2FF] pl-3 py-1">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Full Body Stealth PPF + Graphene</span>
                    <span className="text-[10px] font-mono text-slate-400">July 15, 2026</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-light mt-0.5">
                    Stage 2 optical paint correction, 10-mil computer cut TPU film, 9H topcoat.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-l-2 border-white/20 pl-3 py-1">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-300">Hydrophobic Maintenance Wash</span>
                    <span className="text-[10px] font-mono text-slate-400">June 02, 2026</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-light mt-0.5">
                    0 PPM de-ionized water bath, leather conditioning, infrared dry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
