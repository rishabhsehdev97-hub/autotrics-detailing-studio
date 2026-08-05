import React, { useState } from 'react';
import { Shield, Fingerprint, Lock, Mail, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScreenId } from '../types';

interface LoginScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onNavigate }) => {
  const [authMode, setAuthMode] = useState<'phone' | 'email'>('phone');
  const [inputVal, setInputVal] = useState('+1 (555) 019-2834');
  const [faceIdActive, setFaceIdActive] = useState(false);

  const handleFaceId = () => {
    setFaceIdActive(true);
    setTimeout(() => {
      onNavigate('home');
    }, 1200);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('otp');
  };

  return (
    <div className="relative w-full h-full min-h-[750px] bg-[#070709] flex flex-col justify-between p-6 overflow-hidden">
      
      {/* Top Brand Tag */}
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-[#00C2FF]" />
          <span className="font-heading font-extrabold text-sm text-white tracking-wider">AUTOTRICS</span>
        </div>

        <button 
          id="login-guest-btn"
          onClick={() => onNavigate('home')} 
          className="text-xs font-mono text-slate-400 hover:text-white"
        >
          ENTER AS GUEST
        </button>
      </div>

      {/* Main Form */}
      <div className="my-auto max-w-sm w-full mx-auto z-10">
        <h2 className="font-heading font-extrabold text-2xl text-white tracking-wide mb-1">
          VIP Studio Access
        </h2>
        <p className="text-slate-400 text-xs mb-6 font-light">
          Authenticate your APEX member profile or studio garage account.
        </p>

        {/* Tab Switcher */}
        <div className="glass-panel p-1 rounded-2xl flex items-center mb-6 border border-white/10">
          <button
            id="login-tab-phone"
            onClick={() => { setAuthMode('phone'); setInputVal('+1 (555) 019-2834'); }}
            className={`flex-1 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
              authMode === 'phone'
                ? 'bg-[#00C2FF] text-black shadow-lg font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Mobile Phone</span>
          </button>

          <button
            id="login-tab-email"
            onClick={() => { setAuthMode('email'); setInputVal('client@porsche-apex.com'); }}
            className={`flex-1 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
              authMode === 'email'
                ? 'bg-[#00C2FF] text-black shadow-lg font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email Address</span>
          </button>
        </div>

        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-2">
              {authMode === 'phone' ? 'Phone Number (SMS OTP)' : 'Email Credentials'}
            </label>
            <div className="relative">
              <input
                id="login-input-field"
                type={authMode === 'phone' ? 'tel' : 'email'}
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                required
                className="w-full glass-input px-4 py-3.5 rounded-2xl text-sm text-white placeholder-slate-500 focus:outline-none transition-all font-mono"
                placeholder={authMode === 'phone' ? '+1 (555) 000-0000' : 'name@example.com'}
              />
              <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            </div>
          </div>

          <button
            id="login-submit-btn"
            type="submit"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#00C2FF] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-heading font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,194,255,0.35)] transition-all"
          >
            <span>SEND VERIFICATION CODE</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6 flex items-center justify-center">
          <div className="w-full border-t border-white/10" />
          <span className="absolute bg-[#070709] px-3 text-[10px] font-mono text-slate-500 uppercase">
            OR BIOMETRIC AUTH
          </span>
        </div>

        {/* Face ID Quick Authentication */}
        <button
          id="login-faceid-btn"
          onClick={handleFaceId}
          disabled={faceIdActive}
          className={`w-full py-3.5 rounded-2xl glass-panel border border-[#00C2FF]/40 text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
            faceIdActive
              ? 'bg-[#00C2FF]/20 text-[#00C2FF] border-[#00C2FF] glow-cyan-sm'
              : 'text-slate-200 hover:bg-white/10'
          }`}
        >
          {faceIdActive ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-[#00C2FF] animate-bounce" />
              <span className="font-mono text-[#00C2FF]">FaceID Verified • Accessing Garage</span>
            </>
          ) : (
            <>
              <Fingerprint className="w-4 h-4 text-[#00C2FF]" />
              <span>Use FaceID / TouchID Quick Access</span>
            </>
          )}
        </button>
      </div>

      {/* Footer Disclaimer */}
      <p className="text-[10px] text-slate-500 text-center font-mono">
        Secured by 256-bit Encrypted Autotrics Key Vault • Terms & Privacy
      </p>

    </div>
  );
};
