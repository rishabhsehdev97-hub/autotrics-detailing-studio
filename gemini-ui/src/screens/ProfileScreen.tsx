import React from 'react';
import { User, Award, Shield, CreditCard, MapPin, Bell, Settings, ChevronRight, LogOut, Sparkles } from 'lucide-react';
import { ScreenId } from '../types';

interface ProfileScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ onNavigate }) => {
  return (
    <div className="w-full space-y-6 pb-24 px-4 pt-3">
      
      {/* Profile Header Card */}
      <div className="relative rounded-3xl glass-card p-5 border border-[#00C2FF]/40 space-y-4 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
              alt="Julian Vance Profile"
              className="w-16 h-16 rounded-2xl object-cover border-2 border-[#00C2FF] glow-cyan-sm"
              referrerPolicy="no-referrer"
            />
            <span className="absolute -bottom-1 -right-1 p-1 bg-[#00C2FF] rounded-lg text-black font-extrabold text-[9px]">
              VIP
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono tracking-widest text-[#00C2FF] uppercase font-bold">
                MEMBER #0492
              </span>
              <span className="text-[9px] font-mono px-1.5 py-0.2 bg-amber-500/20 text-amber-400 rounded">
                APEX TIER
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-xl text-white">Julian Vance</h2>
            <p className="text-xs text-slate-400 font-mono">julian.vance@porsche-apex.com</p>
          </div>
        </div>

        {/* Autotrics VIP Rewards Balance */}
        <div className="glass-panel p-3.5 rounded-2xl border border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono text-slate-400 uppercase">Autotrics Rewards Credit</span>
            <div className="font-heading font-extrabold text-lg text-white flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#00C2FF]" />
              <span>3,450 ACC</span>
              <span className="text-xs text-[#00C2FF] font-mono font-normal">($345.00 Value)</span>
            </div>
          </div>

          <button
            id="profile-redeem-perk-btn"
            onClick={() => onNavigate('booking')}
            className="px-3 py-1.5 rounded-xl bg-[#00C2FF]/20 text-[#00C2FF] border border-[#00C2FF]/40 text-xs font-mono font-bold hover:bg-[#00C2FF] hover:text-black transition-all"
          >
            Redeem Perks
          </button>
        </div>
      </div>

      {/* Account Navigation List */}
      <div className="glass-panel rounded-3xl border border-white/10 p-2 divide-y divide-white/5">
        {[
          { label: 'Studio Garage Vehicles', icon: Shield, screen: 'garage' as ScreenId, badge: '4 Cars' },
          { label: 'Digital Warranty Certificates', icon: Award, screen: 'warranty' as ScreenId, badge: 'Active' },
          { label: 'Notifications & Alerts', icon: Bell, screen: 'notifications' as ScreenId, badge: '3 Unread' },
          { label: 'Saved Valet Addresses', icon: MapPin, screen: 'settings' as ScreenId, badge: 'Beverly Hills' },
          { label: 'Payment Instruments', icon: CreditCard, screen: 'payment' as ScreenId, badge: ' Pay / Visa' },
          { label: 'Studio Preferences & Audio', icon: Settings, screen: 'settings' as ScreenId },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              id={`profile-nav-item-${idx}`}
              onClick={() => onNavigate(item.screen)}
              className="w-full p-3.5 flex items-center justify-between hover:bg-white/5 transition-colors rounded-2xl text-xs font-medium text-slate-200"
            >
              <div className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-[#00C2FF]" />
                <span className="font-heading font-semibold">{item.label}</span>
              </div>

              <div className="flex items-center gap-2">
                {item.badge && (
                  <span className="text-[10px] font-mono bg-white/10 text-slate-300 px-2 py-0.5 rounded-md">
                    {item.badge}
                  </span>
                )}
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Logout button */}
      <button
        id="profile-logout-btn"
        onClick={() => onNavigate('login')}
        className="w-full py-3.5 rounded-2xl glass-panel hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-heading font-bold uppercase flex items-center justify-center gap-2 transition-all"
      >
        <LogOut className="w-4 h-4" />
        <span>Log Out of Studio Session</span>
      </button>

    </div>
  );
};
