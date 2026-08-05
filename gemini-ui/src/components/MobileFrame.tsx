import React, { useState } from 'react';
import { Wifi, Battery, Signal, Smartphone, Monitor, ChevronRight, Layers } from 'lucide-react';
import { ScreenId } from '../types';

interface MobileFrameProps {
  children: React.ReactNode;
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const MobileFrame: React.FC<MobileFrameProps> = ({ children, currentScreen, onNavigate }) => {
  const [frameMode, setFrameMode] = useState<'mobile' | 'fluid'>('mobile');
  const [showScreenPicker, setShowScreenPicker] = useState<boolean>(false);

  const screensList: { id: ScreenId; title: string; category: string }[] = [
    { id: 'splash', title: '1. Splash Screen', category: 'Intro' },
    { id: 'onboarding', title: '2. Onboarding', category: 'Intro' },
    { id: 'login', title: '3. Login', category: 'Auth' },
    { id: 'otp', title: '4. OTP Verification', category: 'Auth' },
    { id: 'home', title: '5. Home Screen', category: 'Main' },
    { id: 'ai-quote', title: '6. AI Quote Screen', category: 'Core' },
    { id: 'add-vehicle', title: '7. Add Vehicle', category: 'Garage' },
    { id: 'garage', title: '8. Garage', category: 'Garage' },
    { id: 'booking', title: '9. Booking', category: 'Core' },
    { id: 'payment', title: '10. Payment', category: 'Core' },
    { id: 'warranty', title: '11. Warranty', category: 'Services' },
    { id: 'profile', title: '12. Profile', category: 'Account' },
    { id: 'settings', title: '13. Settings', category: 'Account' },
    { id: 'notifications', title: '14. Notifications', category: 'Account' },
    { id: 'admin', title: '15. Admin Dashboard', category: 'Studio' },
  ];

  return (
    <div className="min-h-screen bg-[#070709] text-white flex flex-col items-center justify-start py-2 sm:py-6 px-2 sm:px-4 font-poppins selection:bg-[#00C2FF] selection:text-black">
      
      {/* Top Floating Control Bar for Designer / Reviewer */}
      <div className="w-full max-w-xl mb-4 glass-panel rounded-2xl p-2.5 flex items-center justify-between border border-white/10 shadow-xl">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#00C2FF] animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-wider text-slate-300">
            AUTOTRICS LUXURY MOBILE ENGINE
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Direct Screen Picker Menu */}
          <div className="relative">
            <button
              id="mobile-frame-screen-picker-btn"
              onClick={() => setShowScreenPicker(!showScreenPicker)}
              className="px-2.5 py-1 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold flex items-center gap-1.5 text-white transition-colors"
            >
              <Layers className="w-3.5 h-3.5 text-[#00C2FF]" />
              <span className="hidden xs:inline">Jump Screen</span>
              <span className="text-[10px] font-mono bg-[#00C2FF]/20 text-[#00C2FF] px-1.5 py-0.5 rounded">
                15 Screens
              </span>
            </button>

            {/* Screen Dropdown */}
            {showScreenPicker && (
              <div className="absolute right-0 top-10 z-50 w-64 glass-card rounded-2xl border border-[#00C2FF]/30 p-2 shadow-2xl backdrop-blur-3xl bg-black/95 max-h-96 overflow-y-auto">
                <div className="px-2 py-1 text-[10px] uppercase font-mono tracking-widest text-[#00C2FF] border-b border-white/10 mb-1">
                  All 15 Application Screens
                </div>
                {screensList.map((sc) => (
                  <button
                    key={sc.id}
                    id={`screen-picker-${sc.id}`}
                    onClick={() => {
                      onNavigate(sc.id);
                      setShowScreenPicker(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                      currentScreen === sc.id
                        ? 'bg-[#00C2FF]/20 text-[#00C2FF] font-bold border border-[#00C2FF]/40'
                        : 'text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <span>{sc.title}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Viewport Mode Switcher */}
          <div className="flex bg-black/60 rounded-xl p-0.5 border border-white/10">
            <button
              id="view-mode-mobile-btn"
              onClick={() => setFrameMode('mobile')}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono flex items-center gap-1 transition-all ${
                frameMode === 'mobile'
                  ? 'bg-[#00C2FF] text-black font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Mobile Device Shell View"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mobile</span>
            </button>
            <button
              id="view-mode-fluid-btn"
              onClick={() => setFrameMode('fluid')}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono flex items-center gap-1 transition-all ${
                frameMode === 'fluid'
                  ? 'bg-[#00C2FF] text-black font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Fluid Full View"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Fluid</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      {frameMode === 'mobile' ? (
        /* Mobile Device Frame Chassis */
        <div className="relative w-full max-w-[420px] h-[850px] max-h-[92vh] rounded-[48px] p-3 border-[6px] border-[#1F1F27] bg-[#000000] shadow-[0_0_60px_rgba(0,194,255,0.15)] flex flex-col overflow-hidden transition-all duration-300">
          
          {/* Titanium Outer Rim Effect */}
          <div className="absolute inset-0 rounded-[42px] border border-white/10 pointer-events-none" />

          {/* Dynamic Island / Status Bar */}
          <div className="w-full pt-2 pb-1 px-6 flex items-center justify-between text-xs font-mono text-slate-300 z-50 select-none bg-black/90">
            <span>09:41</span>

            {/* Camera Pill */}
            <div className="w-24 h-4 bg-black rounded-full border border-white/20 flex items-center justify-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#111] border border-slate-700" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#00C2FF]/70" />
            </div>

            <div className="flex items-center gap-1.5">
              <Signal className="w-3.5 h-3.5" />
              <Wifi className="w-3.5 h-3.5" />
              <Battery className="w-4 h-4 text-[#00C2FF]" />
            </div>
          </div>

          {/* Screen Body Content */}
          <div className="flex-1 w-full overflow-y-auto relative pb-20 no-scrollbar">
            {children}
          </div>

          {/* iOS Bottom Gesture Home Bar */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-36 h-1 bg-white/40 rounded-full z-50 pointer-events-none" />
        </div>
      ) : (
        /* Fluid Responsive Layout View */
        <div className="w-full max-w-2xl min-h-[800px] bg-[#0B0B0B] rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden pb-20">
          {children}
        </div>
      )}
    </div>
  );
};
