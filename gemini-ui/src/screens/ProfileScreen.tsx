import React from 'react';
import {
  User,
  Car,
  CalendarDays,
  ShieldCheck,
  Bell,
  MapPin,
  CreditCard,
  Settings,
  ChevronRight,
  LogOut,
} from 'lucide-react';
import { ScreenId, Vehicle } from '../types';

interface ProfileScreenProps {
  onNavigate: (screen: ScreenId) => void;
  vehicles?: Vehicle[];
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  onNavigate,
  vehicles = [],
}) => {
  const activeBookings = 1;
  const serviceHistory = 0;
  const activeWarranty = 0;

  return (
    <div className="space-y-4 pb-6">

      {/* Profile Header */}
      <div className="relative overflow-hidden rounded-3xl border border-[#00C2FF]/30 bg-[#0B0D12] p-5">

        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#00C2FF]/10 blur-3xl pointer-events-none" />

        <div className="relative flex items-center gap-4">

          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-[#00C2FF]/40 bg-[#00C2FF]/10">
            <User className="h-7 w-7 text-[#00C2FF]" />
          </div>

          <div className="min-w-0">
            <p className="text-[9px] font-mono font-bold uppercase tracking-[0.18em] text-[#00C2FF]">
              AUTOTRICS CUSTOMER
            </p>

            <h2 className="mt-1 truncate font-heading text-xl font-extrabold text-white">
              Rishabh Sehdev
            </h2>

            <p className="mt-0.5 truncate text-[11px] font-mono text-slate-500">
              Customer Account
            </p>
          </div>

        </div>

        {/* Account Summary */}
        <div className="relative mt-5 grid grid-cols-3 gap-2">

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500">
              Bookings
            </p>

            <p className="mt-1 text-lg font-black text-white">
              {activeBookings}
            </p>

            <p className="text-[8px] text-[#00C2FF]">
              Active
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500">
              Vehicles
            </p>

            <p className="mt-1 text-lg font-black text-white">
              {vehicles.length}
            </p>

            <p className="text-[8px] text-slate-500">
              In Garage
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500">
              Warranty
            </p>

            <p className="mt-1 text-lg font-black text-white">
              {activeWarranty}
            </p>

            <p className="text-[8px] text-slate-500">
              Active
            </p>
          </div>

        </div>
      </div>

      {/* My Autotrics */}
      <div className="rounded-3xl border border-white/10 bg-[#0B0D12] p-2">

        <div className="px-3 pb-2 pt-2">
          <p className="text-[9px] font-mono font-bold uppercase tracking-[0.18em] text-slate-500">
            MY AUTOTRICS
          </p>
        </div>

        {[
          {
            label: 'My Bookings',
            subtitle: 'View appointments and booking status',
            icon: CalendarDays,
            screen: 'bookings' as ScreenId,
            badge: activeBookings > 0 ? `${activeBookings} Active` : 'None',
          },
          {
            label: 'My Garage',
            subtitle: 'Your personal vehicle garage',
            icon: Car,
            screen: 'garage' as ScreenId,
            badge: `${vehicles.length}`,
          },
          {
            label: 'Service History',
            subtitle: 'Completed detailing services',
            icon: ShieldCheck,
            screen: 'garage' as ScreenId,
            badge: `${serviceHistory}`,
          },
          {
            label: 'Warranty Certificates',
            subtitle: 'View active service warranties',
            icon: ShieldCheck,
            screen: 'warranty' as ScreenId,
            badge: activeWarranty > 0 ? 'Active' : 'None',
          },
        ].map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              onClick={() => onNavigate(item.screen)}
              className="w-full rounded-2xl p-3.5 flex items-center justify-between text-left transition-colors hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-3 min-w-0">

                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border border-[#00C2FF]/20 bg-[#00C2FF]/5">
                  <Icon className="h-4 w-4 text-[#00C2FF]" />
                </div>

                <div className="min-w-0">
                  <p className="font-heading text-xs font-bold text-white">
                    {item.label}
                  </p>

                  <p className="mt-0.5 truncate text-[9px] text-slate-500">
                    {item.subtitle}
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-2 flex-shrink-0">

                <span className="rounded-md bg-white/[0.06] px-2 py-1 text-[8px] font-mono text-slate-400">
                  {item.badge}
                </span>

                <ChevronRight className="h-4 w-4 text-slate-600" />

              </div>
            </button>
          );
        })}

      </div>

      {/* Account Settings */}
      <div className="rounded-3xl border border-white/10 bg-[#0B0D12] p-2">

        <div className="px-3 pb-2 pt-2">
          <p className="text-[9px] font-mono font-bold uppercase tracking-[0.18em] text-slate-500">
            ACCOUNT
          </p>
        </div>

        {[
          {
            label: 'Notifications',
            subtitle: 'Alerts and booking updates',
            icon: Bell,
            screen: 'notifications' as ScreenId,
          },
          {
            label: 'Saved Addresses',
            subtitle: 'Pickup and delivery addresses',
            icon: MapPin,
            screen: 'settings' as ScreenId,
          },
          {
            label: 'Payment Methods',
            subtitle: 'Manage your payment options',
            icon: CreditCard,
            screen: 'payment' as ScreenId,
          },
          {
            label: 'Settings',
            subtitle: 'App preferences and account settings',
            icon: Settings,
            screen: 'settings' as ScreenId,
          },
        ].map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={index}
              onClick={() => onNavigate(item.screen)}
              className="w-full rounded-2xl p-3.5 flex items-center justify-between text-left transition-colors hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                  <Icon className="h-4 w-4 text-slate-400" />
                </div>

                <div>
                  <p className="font-heading text-xs font-bold text-white">
                    {item.label}
                  </p>

                  <p className="mt-0.5 text-[9px] text-slate-500">
                    {item.subtitle}
                  </p>
                </div>

              </div>

              <ChevronRight className="h-4 w-4 text-slate-600" />
            </button>
          );
        })}

      </div>

      {/* Logout */}
      <button
        id="profile-logout-btn"
        onClick={() => onNavigate('login')}
        className="w-full rounded-2xl border border-rose-500/30 bg-rose-500/[0.03] py-3.5 text-xs font-heading font-bold uppercase tracking-wide text-rose-400 flex items-center justify-center gap-2 transition-all hover:bg-rose-500/10"
      >
        <LogOut className="h-4 w-4" />
        Log Out
      </button>

      <p className="text-center text-[8px] font-mono uppercase tracking-[0.2em] text-slate-700">
        AUTOTRICS DETAILING STUDIO
      </p>

    </div>
  );
};