import React from 'react';

import {
  User,
  Award,
  Shield,
  CreditCard,
  MapPin,
  Bell,
  Settings,
  ChevronRight,
  LogOut,
  Sparkles,
  CalendarCheck,
} from 'lucide-react';

import { ScreenId } from '../types';


interface ProfileScreenProps {
  onNavigate: (screen: ScreenId) => void;
}


export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  onNavigate,
}) => {

  const accountItems = [

    {
      label: 'My Bookings',
      icon: CalendarCheck,
      screen: 'bookings' as ScreenId,
      badge: 'View',
    },

    {
      label: 'Studio Garage Vehicles',
      icon: Shield,
      screen: 'garage' as ScreenId,
      badge: '4 Cars',
    },

    {
      label: 'Digital Warranty Certificates',
      icon: Award,
      screen: 'warranty' as ScreenId,
      badge: 'Active',
    },

    {
      label: 'Notifications & Alerts',
      icon: Bell,
      screen: 'notifications' as ScreenId,
      badge: '3 Unread',
    },

    {
      label: 'Saved Valet Addresses',
      icon: MapPin,
      screen: 'settings' as ScreenId,
      badge: 'Saved',
    },

    {
      label: 'Payment Instruments',
      icon: CreditCard,
      screen: 'payment' as ScreenId,
      badge: 'UPI / Card',
    },

    {
      label: 'Studio Preferences & Audio',
      icon: Settings,
      screen: 'settings' as ScreenId,
    },

  ];


  return (

    <div className="w-full px-4 pt-5 pb-28 space-y-5">


      {/* =====================================================
          PROFILE HEADER
      ===================================================== */}

      <div
        className="
          relative
          rounded-3xl
          bg-[#0B0D12]
          p-5
          border border-[#00C2FF]/40
          space-y-4
          shadow-[0_0_35px_rgba(0,194,255,0.08)]
        "
      >

        <div className="flex items-center gap-4">

          <div className="relative">

            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-[#00C2FF]/10
                border-2
                border-[#00C2FF]
                flex
                items-center
                justify-center
              "
            >
              <User className="w-7 h-7 text-[#00C2FF]" />
            </div>

            <span
              className="
                absolute
                -bottom-1
                -right-1
                px-1.5
                py-1
                bg-[#00C2FF]
                rounded-lg
                text-black
                font-extrabold
                text-[8px]
              "
            >
              VIP
            </span>

          </div>


          <div className="min-w-0">

            <div className="flex items-center gap-2 flex-wrap">

              <span className="text-[9px] font-mono tracking-widest text-[#00C2FF] uppercase font-bold">
                MEMBER #0492
              </span>

              <span className="text-[8px] font-mono px-1.5 py-1 bg-amber-500/20 text-amber-400 rounded">
                APEX TIER
              </span>

            </div>

            <h2 className="mt-1 font-heading font-extrabold text-xl text-white">
              Julian Vance
            </h2>

            <p className="text-[10px] text-slate-500 font-mono truncate">
              julian.vance@porsche-apex.com
            </p>

          </div>

        </div>


        {/* Rewards */}

        <div
          className="
            rounded-2xl
            border border-white/10
            bg-white/[0.03]
            p-3.5
            flex
            items-center
            justify-between
            gap-3
          "
        >

          <div>

            <span className="text-[9px] font-mono text-slate-500 uppercase">
              Autotrics Rewards Credit
            </span>

            <div className="mt-1 font-heading font-extrabold text-lg text-white flex items-center gap-1.5">

              <Sparkles className="w-4 h-4 text-[#00C2FF]" />

              <span>3,450 ACC</span>

            </div>

            <span className="text-[9px] text-[#00C2FF] font-mono">
              ₹28,750 Value
            </span>

          </div>


          <button
            onClick={() => onNavigate('booking')}
            className="
              px-3
              py-2
              rounded-xl
              bg-[#00C2FF]/10
              text-[#00C2FF]
              border border-[#00C2FF]/30
              text-[9px]
              font-mono
              font-bold
              hover:bg-[#00C2FF]
              hover:text-black
              transition-all
              whitespace-nowrap
            "
          >
            Redeem Perks
          </button>

        </div>

      </div>


      {/* =====================================================
          ACCOUNT NAVIGATION
      ===================================================== */}

      <div
        className="
          bg-[#0B0D12]
          rounded-3xl
          border border-white/10
          p-2
          divide-y
          divide-white/5
        "
      >

        {accountItems.map((item, index) => {

          const Icon = item.icon;

          return (

            <button
              key={item.label}
              id={`profile-nav-item-${index}`}
              onClick={() => onNavigate(item.screen)}
              className="
                w-full
                p-3.5
                flex
                items-center
                justify-between
                hover:bg-white/5
                transition-colors
                rounded-2xl
                text-xs
                font-medium
                text-slate-200
              "
            >

              <div className="flex items-center gap-3">

                <Icon className="w-4 h-4 text-[#00C2FF]" />

                <span className="font-heading font-semibold">
                  {item.label}
                </span>

              </div>


              <div className="flex items-center gap-2">

                {item.badge && (

                  <span
                    className="
                      text-[9px]
                      font-mono
                      bg-white/10
                      text-slate-400
                      px-2
                      py-1
                      rounded-md
                    "
                  >
                    {item.badge}
                  </span>

                )}

                <ChevronRight className="w-4 h-4 text-slate-600" />

              </div>

            </button>

          );

        })}

      </div>


      {/* =====================================================
          LOGOUT
      ===================================================== */}

      <button
        id="profile-logout-btn"
        onClick={() => onNavigate('login')}
        className="
          w-full
          py-3.5
          rounded-2xl
          bg-[#0B0D12]
          hover:bg-rose-500/10
          text-rose-400
          border border-rose-500/30
          text-xs
          font-heading
          font-bold
          uppercase
          flex
          items-center
          justify-center
          gap-2
          transition-all
        "
      >

        <LogOut className="w-4 h-4" />

        <span>
          Log Out of Studio Session
        </span>

      </button>

    </div>

  );
};