import React, { useState } from 'react';
import { Wrench, Shield, DollarSign, Users, Activity, Play, CheckCircle2, RefreshCw, Cpu, Flame, Video } from 'lucide-react';
import { StudioBay, ScreenId } from '../types';
import { INITIAL_STUDIO_BAYS } from '../data/mockData';

interface AdminDashboardScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const AdminDashboardScreen: React.FC<AdminDashboardScreenProps> = ({ onNavigate }) => {
  const [bays, setBays] = useState<StudioBay[]>(INITIAL_STUDIO_BAYS);
  const [selectedBayId, setSelectedBayId] = useState<number>(1);
  const [liveStreamActive, setLiveStreamActive] = useState<boolean>(true);

  const activeBay = bays.find(b => b.id === selectedBayId) || bays[0];

  const updateProgress = (bayId: number, delta: number) => {
    setBays(bays.map(b => {
      if (b.id === bayId) {
        const newPct = Math.min(100, Math.max(0, b.progressPercent + delta));
        return { ...b, progressPercent: newPct };
      }
      return b;
    }));
  };

  return (
    <div className="w-full space-y-6 pb-24 px-4 pt-3">
      
      {/* Admin Header */}
      <div className="rounded-3xl glass-card p-5 border border-amber-500/40 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center glow-cyan-sm">
            <Wrench className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-bold">
                STUDIO MASTER CONTROL ROOM
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <h2 className="font-heading font-extrabold text-lg text-white">AUTOTRICS Studio Admin</h2>
          </div>
        </div>

        <button
          id="admin-exit-mode-btn"
          onClick={() => onNavigate('home')}
          className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 font-mono text-xs border border-white/10"
        >
          Exit Admin
        </button>
      </div>

      {/* Revenue & Studio Metrics */}
      <div className="grid grid-cols-3 gap-2">
        <div className="glass-panel p-3 rounded-2xl border border-white/10 text-center">
          <span className="text-[10px] font-mono text-slate-400 uppercase block">Daily Gross</span>
          <span className="font-heading font-extrabold text-base text-emerald-400">$18,450</span>
          <span className="text-[9px] font-mono text-slate-400 block">+24% vs Prev</span>
        </div>

        <div className="glass-panel p-3 rounded-2xl border border-white/10 text-center">
          <span className="text-[10px] font-mono text-slate-400 uppercase block">Avg Ticket</span>
          <span className="font-heading font-extrabold text-base text-[#00C2FF]">$2,850</span>
          <span className="text-[9px] font-mono text-slate-400 block">PPF Flagship</span>
        </div>

        <div className="glass-panel p-3 rounded-2xl border border-white/10 text-center">
          <span className="text-[10px] font-mono text-slate-400 uppercase block">Occupancy</span>
          <span className="font-heading font-extrabold text-base text-amber-400">100% (4/4)</span>
          <span className="text-[9px] font-mono text-slate-400 block">All Bays Active</span>
        </div>
      </div>

      {/* Studio Bays Grid */}
      <div className="space-y-3">
        <h3 className="font-heading font-bold text-sm text-white uppercase tracking-wider font-mono flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#00C2FF]" />
            Active Detailing Bays
          </span>
          <span className="text-xs font-normal text-slate-400">Tap bay to control</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {bays.map((bay) => (
            <div
              key={bay.id}
              id={`admin-bay-card-${bay.id}`}
              onClick={() => setSelectedBayId(bay.id)}
              className={`p-4 rounded-3xl border transition-all cursor-pointer space-y-3 ${
                selectedBayId === bay.id
                  ? 'glass-card border-[#00C2FF] shadow-[0_0_20px_rgba(0,194,255,0.2)]'
                  : 'glass-panel border-white/10 opacity-80 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#00C2FF] uppercase">{bay.name}</span>
                <span className="px-2 py-0.5 rounded-full bg-white/10 text-emerald-400 text-[10px] font-mono">
                  {bay.status}
                </span>
              </div>

              <div>
                <h4 className="font-heading font-bold text-sm text-white">{bay.vehicleName}</h4>
                <p className="text-xs text-slate-300 font-mono mt-0.5">{bay.service}</p>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>Progress: {bay.progressPercent}%</span>
                  <span>Est. Completion: {bay.estimatedCompletion}</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-[#00C2FF] rounded-full transition-all duration-500"
                    style={{ width: `${bay.progressPercent}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1 border-t border-white/5">
                <span>Lead Tech: <strong>{bay.technician}</strong></span>
                <span className="text-[#00C2FF]">Live Bay Feed 🔴</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Bay Detail Controller */}
      {activeBay && (
        <div className="rounded-3xl glass-card p-5 border border-white/15 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono text-[#00C2FF] uppercase font-bold">
                STUDIO BAY CONTROLLER • {activeBay.name}
              </span>
              <h3 className="font-heading font-extrabold text-lg text-white">{activeBay.vehicleName}</h3>
            </div>

            <button
              id="admin-bay-stream-btn"
              onClick={() => setLiveStreamActive(!liveStreamActive)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono border flex items-center gap-1.5 transition-all ${
                liveStreamActive
                  ? 'bg-rose-500/20 text-rose-400 border-rose-500/40 glow-cyan-sm'
                  : 'bg-white/5 text-slate-400 border-white/10'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>{liveStreamActive ? 'Infrared Cam Live' : 'Cam Offline'}</span>
            </button>
          </div>

          {/* Video Simulator Frame */}
          {liveStreamActive && (
            <div className="relative h-48 rounded-2xl overflow-hidden border border-[#00C2FF]/40">
              <img
                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80"
                alt="Infrared Curing Feed"
                className="w-full h-full object-cover filter contrast-125 saturate-150"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-rose-600 text-white font-mono text-[10px] font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                CAM-0{activeBay.id} • 60FPS INFRARED
              </div>
              <div className="absolute bottom-3 left-3 text-xs font-mono text-white">
                Surface Thermal Temp: <strong className="text-[#00C2FF]">68.4°C (Optimal SiO2 Curing)</strong>
              </div>
            </div>
          )}

          {/* Quick Progress Adjusters */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-slate-300 block">Update Detailing Stage Progress:</span>
            <div className="flex gap-2">
              <button
                id="admin-progress-plus-10"
                onClick={() => updateProgress(activeBay.id, 10)}
                className="flex-1 py-2.5 rounded-xl bg-[#00C2FF]/20 text-[#00C2FF] font-mono text-xs font-bold border border-[#00C2FF]/40 hover:bg-[#00C2FF] hover:text-black transition-all"
              >
                +10% Progress
              </button>
              <button
                id="admin-progress-complete"
                onClick={() => updateProgress(activeBay.id, 100)}
                className="flex-1 py-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold border border-emerald-500/40 hover:bg-emerald-500 hover:text-black transition-all"
              >
                Mark Complete & Alert Client
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
