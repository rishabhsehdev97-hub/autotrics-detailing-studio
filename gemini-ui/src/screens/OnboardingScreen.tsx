import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Truck, ArrowRight, Check } from 'lucide-react';
import { ScreenId } from '../types';

interface OnboardingScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      icon: ShieldCheck,
      title: "Precision Armor & PPF",
      subtitle: "SELF-HEALING TPU FILM",
      description: "Computer-cut 10-mil TPU protection and 9H Graphene SiO2 molecular shields engineered for extreme high-velocity preservation.",
      imageUrl: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80",
      stats: ["10-Year Warranty", "118° Water Repellency", "Zero Orange Peel"]
    },
    {
      id: 2,
      icon: Sparkles,
      title: "AI Optical Diagnostics",
      subtitle: "GEMINI PAINT SCANNER",
      description: "Upload your vehicle or select paint parameters to generate instant optical health ratings, paint correction steps, and precise quotes.",
      imageUrl: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1000&q=80",
      stats: ["Sub-Micron Swirl Scan", "Instant AI Quote", "Stage 1-3 Correction"]
    },
    {
      id: 3,
      icon: Truck,
      title: "Valet Detailing Concierge",
      subtitle: "ENCLOSED HYPERCAR TRANSPORT",
      description: "White-glove valet pickup in enclosed air-ride carriers. Track live studio bay progress with infrared curing cameras.",
      imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80",
      stats: ["Enclosed Carrier", "Live Studio Feed", "100% Insured Valet"]
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onNavigate('login');
    }
  };

  const slide = slides[currentSlide];
  const IconComponent = slide.icon;

  return (
    <div className="relative w-full h-full min-h-[750px] bg-[#070709] flex flex-col justify-between p-6 overflow-hidden">
      
      {/* Background Image with Dark Gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-30 filter blur-[1px]"
        style={{ backgroundImage: `url('${slide.imageUrl}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/80 to-[#070709]/40 pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="text-xs font-mono text-[#00C2FF] tracking-widest uppercase">
          STEP 0{currentSlide + 1} / 03
        </div>
        <button
          id="onboarding-skip-btn"
          onClick={() => onNavigate('home')}
          className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
        >
          SKIP TO APP
        </button>
      </div>

      {/* Center Slide Card */}
      <div className="relative z-10 my-auto flex flex-col items-start max-w-sm">
        <div className="w-12 h-12 rounded-2xl bg-[#00C2FF]/10 border border-[#00C2FF]/40 flex items-center justify-center mb-4 glow-cyan-sm">
          <IconComponent className="w-6 h-6 text-[#00C2FF]" />
        </div>

        <span className="text-[10px] font-mono tracking-widest text-[#00C2FF] uppercase font-bold bg-[#00C2FF]/10 px-2 py-0.5 rounded border border-[#00C2FF]/20 mb-2">
          {slide.subtitle}
        </span>

        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-wide mb-3">
          {slide.title}
        </h2>

        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
          {slide.description}
        </p>

        {/* Highlighted Stats Badges */}
        <div className="w-full flex flex-wrap gap-2">
          {slide.stats.map((stat, i) => (
            <div key={i} className="glass-panel px-3 py-1.5 rounded-xl border border-white/10 text-xs text-slate-200 flex items-center gap-1.5 font-mono">
              <Check className="w-3.5 h-3.5 text-[#00C2FF]" />
              <span>{stat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="relative z-10 pt-4 flex items-center justify-between gap-4">
        
        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              id={`onboarding-dot-${i}`}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === i ? 'w-8 bg-[#00C2FF] glow-cyan-sm' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Action Button */}
        <button
          id="onboarding-next-btn"
          onClick={nextSlide}
          className="px-6 py-3.5 rounded-2xl bg-[#00C2FF] hover:bg-cyan-400 text-black font-heading font-bold text-xs tracking-wider uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(0,194,255,0.4)] transition-all"
        >
          <span>{currentSlide === slides.length - 1 ? 'GET STARTED' : 'CONTINUE'}</span>
          <ArrowRight className="w-4 h-4 stroke-[3]" />
        </button>
      </div>

    </div>
  );
};
