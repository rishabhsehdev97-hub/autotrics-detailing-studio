import React from 'react';
import { Home, Sparkles, Calendar, Car, User, ShieldCheck } from 'lucide-react';
import { ScreenId } from '../types';

interface BottomNavProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  // Hide bottom nav on full splash, onboarding, login, otp, payment screens
  const hiddenScreens: ScreenId[] = ['splash', 'onboarding', 'login', 'otp', 'payment'];
  if (hiddenScreens.includes(currentScreen)) {
    return null;
  }

  const navItems = [
    { id: 'home' as ScreenId, label: 'Home', icon: Home },
    { id: 'ai-quote' as ScreenId, label: 'AI Quote', icon: Sparkles, highlight: true },
    { id: 'booking' as ScreenId, label: 'Booking', icon: Calendar },
    { id: 'garage' as ScreenId, label: 'Garage', icon: Car },
    { id: 'profile' as ScreenId, label: 'Profile', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 pointer-events-none max-w-lg mx-auto">
      <nav className="pointer-events-auto glass-panel rounded-2xl border border-white/15 px-3 py-2 flex items-center justify-around shadow-2xl backdrop-blur-2xl bg-black/80">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentScreen === item.id;

          return (
            <button
              key={item.id}
              id={`nav-item-${item.id}`}
              onClick={() => onNavigate(item.id)}
              className={`relative flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? 'text-[#00C2FF] scale-105'
                  : 'text-slate-400 hover:text-slate-200 hover:scale-102'
              }`}
            >
              {/* Active neon highlight bar */}
              {isActive && (
                <div className="absolute -top-2 w-8 h-1 bg-[#00C2FF] rounded-full glow-cyan-sm animate-pulse" />
              )}

              {/* Icon with glowing badge for AI Quote */}
              <div className="relative">
                <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'rotate-0' : 'rotate-0'}`} />
                {item.highlight && !isActive && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#00C2FF] rounded-full animate-ping" />
                )}
              </div>

              <span className={`text-[10px] mt-1 font-medium tracking-wide ${isActive ? 'font-bold text-[#00C2FF]' : 'text-slate-400'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
