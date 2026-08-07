import React, { useState } from "react";
import carLogo from "../assets/autotrics_car_logo.svg";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../lib/firebase";



import {
  Shield,
  Fingerprint,
  Lock,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
  CarFront
} from 'lucide-react';
import { ScreenId } from '../types';

interface LoginScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onNavigate }) => {
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [inputVal, setInputVal] = useState('');
  const [faceIdActive, setFaceIdActive] = useState(false);

  const handleFaceId = () => {
    setFaceIdActive(true);
    setTimeout(() => {
      onNavigate('home');
    }, 1200);
  };
  const handleGoogleLogin = async () => {
  try {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);

    console.log("Logged in:", result.user);

    onNavigate("home");
  } catch (error) {
    console.error("Google Sign In Error:", error);
    alert("Google Sign-In failed.");
  }
};

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('otp');
  };

  return (

<div className="min-h-screen bg-[#070709] px-6 pt-6 pb-8">

  <div className="text-center mt-16 mb-8">

    

  </div>

      {/* Main Form */}
      <div className="max-w-sm w-full mx-auto z-10">
        

  <div className="text-center mb-10">

  <div className="flex flex-col items-center mb-6">
  <img
    src={carLogo}
    alt="Autotrics Logo"
    className="w-56 h-auto mb-2"
  />

  
</div>

  <h1 className="text-5xl font-black tracking-tight text-white">
    AUTOTRICS
  </h1>

  <p className="text-cyan-400 tracking-[8px] uppercase text-sm mt-2">
    DETAILING STUDIO
  </p>

  <div className="flex items-center justify-center gap-3 mt-4">
    <div className="w-14 h-px bg-gray-700"></div>

    <p className="text-gray-400 text-sm">
      Premium Care for Your Car
    </p>

    <div className="w-14 h-px bg-gray-700"></div>
  </div>

</div>

  

</div>

        {/* Tab Switcher */}
        <div className="glass-panel p-1 rounded-2xl flex items-center mb-6 border border-white/10">

  <button
    onClick={() => setAuthMode("login")}
    className={`flex-1 py-3 rounded-xl text-sm font-semibold transition ${
      authMode === "login"
        ? "bg-[#00C2FF] text-black"
        : "text-gray-400"
    }`}
  >
    Login
  </button>

  <button
    onClick={() => setAuthMode("signup")}
    className={`flex-1 py-3 rounded-xl text-sm font-semibold transition ${
      authMode === "signup"
        ? "bg-[#00C2FF] text-black"
        : "text-gray-400"
    }`}
  >
    Sign Up
  </button>

</div>

        {authMode === "login" ? (
  <>
    <div>
      <label className="block text-xs font-semibold text-gray-400 mb-2">
        Mobile Number
      </label>

      <input
        type="tel"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Enter your mobile number"
        className="w-full glass-input px-4 py-3.5 rounded-2xl text-white"
      />
    </div>

    <button
      type="submit"
      className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#00C2FF] to-blue-600 text-black font-bold"
    >
      GET OTP
    </button>
  </>
) : (
  <>
    <div>
      <label className="block text-xs font-semibold text-gray-400 mb-2">
        Full Name
      </label>

      <input
        type="text"
        placeholder="Enter your full name"
        className="w-full glass-input px-4 py-3.5 rounded-2xl text-white"
      />
    </div>

    <div>
      <label className="block text-xs font-semibold text-gray-400 mb-2">
        Mobile Number
      </label>

      <input
        type="tel"
        placeholder="Enter your mobile number"
        className="w-full glass-input px-4 py-3.5 rounded-2xl text-white"
      />
    </div>

    <div>
      <label className="block text-xs font-semibold text-gray-400 mb-2">
        Email Address
      </label>

      <input
        type="email"
        placeholder="Enter your email"
        className="w-full glass-input px-4 py-3.5 rounded-2xl text-white"
      />
    </div>

    <button
      type="submit"
      className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#00C2FF] to-blue-600 text-black font-bold"
    >
      CREATE ACCOUNT
    </button>
  </>
)}

        {/* Divider */}
        <div className="relative my-6 flex items-center justify-center">
          <div className="w-full border-t border-white/10" />
          <span className="absolute bg-[#070709] px-3 text-[10px] font-mono text-slate-500 uppercase">
            OR BIOMETRIC AUTH
          </span>
        </div>

        
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
        
    
<button
  onClick={handleGoogleLogin}
  className="w-full mt-4 py-4 rounded-2xl bg-white text-black font-bold hover:bg-gray-100 transition"
>
  Continue with Google
</button>


      {/* Footer Disclaimer */}
      <p className="text-[10px] text-slate-500 text-center font-mono">
        Secured by 256-bit Encrypted Autotrics Key Vault • Terms & Privacy
      </p>

    </div>
  );
};
