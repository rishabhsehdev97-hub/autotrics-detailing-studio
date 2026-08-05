import React, { useState, useEffect } from 'react';
import { Shield, KeyRound, ArrowRight, CheckCircle, RefreshCw } from 'lucide-react';
import { ScreenId } from '../types';

interface OtpScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const OtpScreen: React.FC<OtpScreenProps> = ({ onNavigate }) => {
  const [pin, setPin] = useState<string[]>(['8', '4', '1', '9', '', '']);
  const [timer, setTimer] = useState<number>(45);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(t => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleKeyPress = (num: string) => {
    const emptyIndex = pin.findIndex(p => p === '');
    if (emptyIndex !== -1) {
      const newPin = [...pin];
      newPin[emptyIndex] = num;
      setPin(newPin);

      // Auto verify if full
      if (emptyIndex === 5) {
        triggerVerification();
      }
    }
  };

  const handleBackspace = () => {
    const filledIndices = pin.map((p, i) => (p !== '' ? i : -1)).filter(i => i !== -1);
    if (filledIndices.length > 0) {
      const lastIndex = filledIndices[filledIndices.length - 1];
      const newPin = [...pin];
      newPin[lastIndex] = '';
      setPin(newPin);
    }
  };

  const triggerVerification = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setIsSuccess(true);
      setTimeout(() => {
        onNavigate('home');
      }, 1000);
    }, 1200);
  };

  return (
    <div className="relative w-full h-full min-h-[750px] bg-[#070709] flex flex-col justify-between p-6 overflow-hidden">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between z-10">
        <button
          id="otp-back-btn"
          onClick={() => onNavigate('login')}
          className="text-xs font-mono text-slate-400 hover:text-white"
        >
          ← CHANGE PHONE
        </button>
        <span className="text-[10px] font-mono text-[#00C2FF] uppercase tracking-widest bg-[#00C2FF]/10 px-2 py-0.5 rounded border border-[#00C2FF]/30">
          2FA ENCRYPTED
        </span>
      </div>

      {/* Main Content */}
      <div className="my-auto max-w-sm w-full mx-auto z-10 text-center">
        <div className="w-14 h-14 rounded-2xl bg-[#00C2FF]/10 border border-[#00C2FF]/40 flex items-center justify-center mx-auto mb-4 glow-cyan-sm">
          <KeyRound className="w-7 h-7 text-[#00C2FF]" />
        </div>

        <h2 className="font-heading font-extrabold text-2xl text-white tracking-wide mb-1">
          Verify Security Code
        </h2>
        <p className="text-slate-400 text-xs mb-6 font-light max-w-xs mx-auto">
          We sent a 6-digit confirmation key to <span className="text-white font-mono">+1 (555) 019-2834</span>
        </p>

        {/* 6 Digit Display */}
        <div className="flex justify-center gap-2 mb-6">
          {pin.map((digit, i) => (
            <div
              key={i}
              className={`w-11 h-13 rounded-xl border flex items-center justify-center font-mono font-extrabold text-lg transition-all ${
                digit
                  ? 'bg-[#00C2FF]/10 border-[#00C2FF] text-[#00C2FF] shadow-[0_0_12px_rgba(0,194,255,0.3)]'
                  : 'glass-input border-white/10 text-white'
              }`}
            >
              {digit}
            </div>
          ))}
        </div>

        {/* Verification Status Feedback */}
        {isVerifying && (
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#00C2FF] mb-4 animate-pulse">
            <RefreshCw className="w-4 h-4 animate-spin" />
            <span>Validating APEX Cryptographic Token...</span>
          </div>
        )}

        {isSuccess && (
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-emerald-400 mb-4">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Identity Verified • Welcome to Autotrics</span>
          </div>
        )}

        {/* Resend Timer */}
        <div className="text-xs text-slate-400 font-mono mb-6">
          {timer > 0 ? (
            <span>Resend code in <strong className="text-white">0:{timer < 10 ? `0${timer}` : timer}</strong></span>
          ) : (
            <button
              id="otp-resend-btn"
              onClick={() => setTimer(45)}
              className="text-[#00C2FF] hover:underline font-bold"
            >
              Resend Security Code
            </button>
          )}
        </div>

        {/* Numeric Keypad Component */}
        <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '⌫'].map((key) => (
            <button
              key={key}
              id={`keypad-btn-${key}`}
              onClick={() => {
                if (key === 'C') setPin(['', '', '', '', '', '']);
                else if (key === '⌫') handleBackspace();
                else handleKeyPress(key);
              }}
              className="py-3 rounded-2xl glass-panel hover:bg-white/10 border border-white/10 font-heading font-bold text-base text-white transition-all active:scale-95 flex items-center justify-center"
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      {/* Verify Button */}
      <div className="w-full max-w-sm mx-auto z-10 pb-2">
        <button
          id="otp-verify-submit-btn"
          onClick={triggerVerification}
          disabled={pin.includes('') || isVerifying}
          className={`w-full py-4 rounded-2xl font-heading font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all ${
            pin.includes('')
              ? 'bg-white/10 text-slate-500 cursor-not-allowed border border-white/5'
              : 'bg-gradient-to-r from-[#00C2FF] to-blue-600 text-black shadow-[0_0_25px_rgba(0,194,255,0.4)]'
          }`}
        >
          <span>VERIFY & CONTINUE</span>
          <ArrowRight className="w-4 h-4 stroke-[3]" />
        </button>
      </div>

    </div>
  );
};
