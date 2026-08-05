import React, { useState } from 'react';
import { Settings, Moon, Volume2, Shield, Bell, MapPin, Globe, Check } from 'lucide-react';
import { ScreenId } from '../types';

interface SettingsScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const SettingsScreen: React.FC<SettingsScreenProps> = ({ onNavigate }) => {
  const [studioLocation, setStudioLocation] = useState('Beverly Hills Apex Studio');
  const [soundFx, setSoundFx] = useState(true);
  const [haptic, setHaptic] = useState(true);
  const [biometrics, setBiometrics] = useState(true);
  const [liveCameraFeed, setLiveCameraFeed] = useState(true);

  return (
    <div className="w-full space-y-6 pb-24 px-4 pt-3">
      
      {/* Header */}
      <div className="rounded-3xl glass-card p-5 border border-white/10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-[#00C2FF]/15 border border-[#00C2FF]/40 flex items-center justify-center glow-cyan-sm">
          <Settings className="w-5 h-5 text-[#00C2FF]" />
        </div>
        <div>
          <h2 className="font-heading font-extrabold text-lg text-white">Studio Preferences</h2>
          <p className="text-xs text-slate-400 font-mono">Customize Mobile Audio & Security</p>
        </div>
      </div>

      {/* Studio Location Switcher */}
      <div className="glass-panel p-4 rounded-3xl border border-white/10 space-y-3">
        <h3 className="text-xs font-mono font-bold text-[#00C2FF] uppercase tracking-wider flex items-center gap-1.5">
          <MapPin className="w-4 h-4 text-[#00C2FF]" />
          Primary Studio Location
        </h3>

        <div className="grid grid-cols-1 gap-2">
          {[
            "Beverly Hills Apex Studio (CA)",
            "Miami Design District Studio (FL)",
            "Dubai Motor City Studio (UAE)",
            "Tokyo Ginza Detailing Studio (JP)"
          ].map((loc) => (
            <button
              key={loc}
              onClick={() => setStudioLocation(loc)}
              className={`p-3 rounded-2xl text-xs text-left transition-all border flex items-center justify-between ${
                studioLocation === loc
                  ? 'bg-[#00C2FF]/20 border-[#00C2FF] text-white font-bold'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              <span>{loc}</span>
              {studioLocation === loc && <Check className="w-4 h-4 text-[#00C2FF]" />}
            </button>
          ))}
        </div>
      </div>

      {/* Audio & Visual FX */}
      <div className="glass-panel p-4 rounded-3xl border border-white/10 space-y-4">
        <h3 className="text-xs font-mono font-bold text-[#00C2FF] uppercase tracking-wider flex items-center gap-1.5">
          <Volume2 className="w-4 h-4 text-[#00C2FF]" />
          Audio & Haptics Engine
        </h3>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs">
            <div>
              <span className="font-heading font-bold text-white block">Engine Sound FX & Startup Audio</span>
              <span className="text-[10px] text-slate-400 font-mono">Hypercar exhaust sound design on tap</span>
            </div>
            <button
              onClick={() => setSoundFx(!soundFx)}
              className={`w-12 h-6 rounded-full transition-all relative ${soundFx ? 'bg-[#00C2FF]' : 'bg-white/20'}`}
            >
              <div className={`w-5 h-5 rounded-full bg-black absolute top-0.5 transition-all ${soundFx ? 'right-0.5' : 'left-0.5'}`} />
            </button>
          </div>

          <div className="flex items-center justify-between text-xs pt-2 border-t border-white/5">
            <div>
              <span className="font-heading font-bold text-white block">Tactile Haptic Feedback</span>
              <span className="text-[10px] text-slate-400 font-mono">Vibration pulse on button selection</span>
            </div>
            <button
              onClick={() => setHaptic(!haptic)}
              className={`w-12 h-6 rounded-full transition-all relative ${haptic ? 'bg-[#00C2FF]' : 'bg-white/20'}`}
            >
              <div className={`w-5 h-5 rounded-full bg-black absolute top-0.5 transition-all ${haptic ? 'right-0.5' : 'left-0.5'}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Security & Live Bay Camera Feed */}
      <div className="glass-panel p-4 rounded-3xl border border-white/10 space-y-4">
        <h3 className="text-xs font-mono font-bold text-[#00C2FF] uppercase tracking-wider flex items-center gap-1.5">
          <Shield className="w-4 h-4 text-[#00C2FF]" />
          Security & Privacy
        </h3>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs">
            <div>
              <span className="font-heading font-bold text-white block">Require Biometric FaceID</span>
              <span className="text-[10px] text-slate-400 font-mono">Protect garage and payment ledger</span>
            </div>
            <button
              onClick={() => setBiometrics(!biometrics)}
              className={`w-12 h-6 rounded-full transition-all relative ${biometrics ? 'bg-[#00C2FF]' : 'bg-white/20'}`}
            >
              <div className={`w-5 h-5 rounded-full bg-black absolute top-0.5 transition-all ${biometrics ? 'right-0.5' : 'left-0.5'}`} />
            </button>
          </div>

          <div className="flex items-center justify-between text-xs pt-2 border-t border-white/5">
            <div>
              <span className="font-heading font-bold text-white block">Live Studio Infrared Camera Feed</span>
              <span className="text-[10px] text-slate-400 font-mono">Stream live curing bay video to mobile app</span>
            </div>
            <button
              onClick={() => setLiveCameraFeed(!liveCameraFeed)}
              className={`w-12 h-6 rounded-full transition-all relative ${liveCameraFeed ? 'bg-[#00C2FF]' : 'bg-white/20'}`}
            >
              <div className={`w-5 h-5 rounded-full bg-black absolute top-0.5 transition-all ${liveCameraFeed ? 'right-0.5' : 'left-0.5'}`} />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
