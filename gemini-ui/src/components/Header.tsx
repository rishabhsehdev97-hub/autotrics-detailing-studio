import React from 'react';
import { Shield, Bell, Sparkles, ChevronLeft, Wrench, Menu } from 'lucide-react';
import { ScreenId } from '../types';

interface HeaderProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  unreadCount: number;
  isAdmin: boolean;
  onToggleAdmin: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  unreadCount,
  isAdmin,
  onToggleAdmin,
}) => {
  const isHome = currentScreen === 'home';
  const showBack = !isHome && currentScreen !== 'splash' && currentScreen !== 'onboarding';

  const getScreenTitle = (screen: ScreenId) => {
    switch (screen) {
      case 'home': return 'AUTOTRICS';
      case 'ai-quote': return 'AI Diagnostics & Quote';
      case 'add-vehicle': return 'Add Vehicle to Garage';
      case 'garage': return 'Studio Garage';
      case 'booking': return 'Book Detailing Concierge';
      case 'payment': return 'Secure Payment';
      case 'warranty': return 'Digital Warranty Vault';
      case 'profile': return 'VIP Member Profile';
      case 'settings': return 'Studio Preferences';
      case 'notifications': return 'Studio Notifications';
      case 'admin': return 'Studio Master Dashboard';
      case 'login': return 'Authentication';
      case 'otp': return 'Verify Access';
      default: return 'AUTOTRICS';
    }
  };

  if (currentScreen === 'splash' || currentScreen === 'onboarding') {
    return null;
  }

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-white/10 px-4 py-3 transition-all duration-300">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        
        {/* Left Side: Back button or Brand Logo */}
        <div className="flex items-center gap-3">
          {showBack ? (
            <button
              id="header-back-btn"
              onClick={() => onNavigate('home')}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center text-slate-200"
              aria-label="Back to home"
            >
              <ChevronLeft className="w-5 h-5 text-[#00C2FF]" />
            </button>
          ) : (
            <div 
              id="header-brand-logo"
              onClick={() => onNavigate('home')} 
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00C2FF]/30 to-black p-0.5 border border-[#00C2FF]/50 glow-cyan-sm flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#00C2FF] group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-base tracking-wider text-white flex items-center gap-1.5">
                  AUTOTRICS
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 bg-[#00C2FF]/15 text-[#00C2FF] border border-[#00C2FF]/30 rounded">
                    PRO
                  </span>
                </span>
                <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase -mt-0.5">
                  DETAILING STUDIO
                </p>
              </div>
            </div>
          )}

          {showBack && (
            <h1 className="font-heading font-semibold text-base text-white truncate max-w-[200px] sm:max-w-xs">
              {getScreenTitle(currentScreen)}
            </h1>
          )}
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-2">
          
          {/* AI Quick Quote Trigger Button */}
          {currentScreen !== 'ai-quote' && (
            <button
              id="header-ai-quote-btn"
              onClick={() => onNavigate('ai-quote')}
              className="px-2.5 py-1.5 rounded-xl bg-[#00C2FF]/10 hover:bg-[#00C2FF]/20 border border-[#00C2FF]/40 text-[#00C2FF] text-xs font-semibold flex items-center gap-1.5 transition-all glow-cyan-sm"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span className="hidden sm:inline font-mono">AI SCAN</span>
            </button>
          )}

          {/* Admin Toggle */}
          <button
            id="header-admin-toggle-btn"
            onClick={onToggleAdmin}
            title={isAdmin ? "Switch to Client App View" : "Switch to Studio Admin View"}
            className={`p-2 rounded-xl border text-xs font-mono flex items-center gap-1 transition-all ${
              currentScreen === 'admin' || isAdmin
                ? 'bg-amber-500/20 text-amber-400 border-amber-500/40 glow-cyan-sm'
                : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
            }`}
          >
            <Wrench className="w-4 h-4" />
            <span className="hidden md:inline font-semibold">{currentScreen === 'admin' ? 'Studio Admin' : 'Admin'}</span>
          </button>

          {/* Notifications Button */}
          <button
            id="header-notifications-btn"
            onClick={() => onNavigate('notifications')}
            className="relative p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-slate-300"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#00C2FF] text-black font-extrabold text-[10px] rounded-full flex items-center justify-center animate-bounce">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Quick Menu / Settings */}
          <button
            id="header-settings-btn"
            onClick={() => onNavigate('settings')}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-slate-300"
            aria-label="Settings"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>

      </div>
    </header>
  );
};
