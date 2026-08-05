import React, { useState } from 'react';
import { Shield, Sparkles, Volume2, VolumeX, ArrowRight, Lock } from 'lucide-react';
import { ScreenId } from '../types';

interface SplashScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onNavigate }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <div className="relative w-full h-full min-h-[750px] bg-gradient-to-b from-[#050507] via-[#0B0B0E] to-[#000000] flex flex-col items-center justify-between p-6 overflow-hidden text-center">
      
      {/* Background Hypercar Silhouette Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 filter blur-sm scale-105 pointer-events-none"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#0B0B0B]/80 to-transparent pointer-events-none" />

      {/* Top Header Controls */}
      <div className="w-full flex items-center justify-between z-10 pt-2">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-[#00C2FF]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00C2FF] animate-pulse" />
          VER. 4.9 LUXURY EDITION
        </div>

        <button
          id="splash-sound-toggle-btn"
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors"
          title="Toggle Studio Audio"
        >
          {soundEnabled ? <Volume2 className="w-4 h-4 text-[#00C2FF]" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
        </button>
      </div>

      {/* Center Brand Emblem */}
      <div className="relative z-10 my-auto flex flex-col items-center max-w-sm">
        
        {/* Glowing Crest Badge */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#00C2FF] to-blue-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-1000 animate-pulse" />
          
          <div className="relative w-28 h-28 rounded-3xl bg-black/80 border border-[#00C2FF]/60 flex items-center justify-center backdrop-blur-2xl shadow-2xl">
            <Shield className="w-14 h-14 text-[#00C2FF] drop-shadow-[0_0_15px_rgba(0,194,255,0.8)]" />
            <Sparkles className="absolute top-2 right-2 w-5 h-5 text-cyan-300 animate-spin" style={{ animationDuration: '6s' }} />
          </div>
        </div>

        {/* Title & Tagline */}
        <h1 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-widest uppercase mb-2">
          AUTOTRICS
        </h1>
        
        <p className="text-[#00C2FF] font-mono text-xs tracking-[0.25em] uppercase font-bold mb-4">
          DETAILING STUDIO
        </p>

        <p className="text-slate-400 text-xs sm:text-sm max-w-xs leading-relaxed font-light">
          The pinnacle of paint preservation, self-healing TPU armor, and AI precision correction.
        </p>
      </div>

      {/* Bottom CTA & Onboarding Launch */}
      <div className="w-full max-w-xs z-10 pb-4 flex flex-col gap-3">
        <button
          id="splash-enter-studio-btn"
          onClick={() => onNavigate('onboarding')}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#00C2FF] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-heading font-extrabold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,194,255,0.4)] transition-all transform hover:scale-102 active:scale-98"
        >
          <span>ENTER STUDIO EXPERIENCE</span>
          <ArrowRight className="w-4 h-4 stroke-[3]" />
        </button>

        <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 font-mono">
          <button 
            id="splash-direct-login-btn"
            onClick={() => onNavigate('login')}
            className="hover:text-[#00C2FF] transition-colors flex items-center gap-1"
          >
            <Lock className="w-3 h-3" /> Member Login
          </button>
          <span>•</span>
          <button 
            id="splash-direct-home-btn"
            onClick={() => onNavigate('home')}
            className="hover:text-white transition-colors"
          >
            Skip Intro
          </button>
        </div>
      </div>

    </div>
  );
};
