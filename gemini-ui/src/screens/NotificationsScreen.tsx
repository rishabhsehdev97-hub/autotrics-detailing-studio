import React, { useState } from 'react';
import { Bell, CheckCheck, Sparkles, Shield, Wrench, Tag, ChevronRight } from 'lucide-react';
import { NotificationItem, ScreenId } from '../types';

interface NotificationsScreenProps {
  notifications: NotificationItem[];
  onMarkAllRead: () => void;
  onNavigate: (screen: ScreenId) => void;
}

export const NotificationsScreen: React.FC<NotificationsScreenProps> = ({
  notifications,
  onMarkAllRead,
  onNavigate,
}) => {
  const [items, setItems] = useState<NotificationItem[]>(notifications);

  const toggleRead = (id: string) => {
    setItems(items.map(n => n.id === id ? { ...n, unread: false } : n));
  };

  return (
    <div className="w-full space-y-6 pb-24 px-4 pt-3">
      
      {/* Header */}
      <div className="rounded-3xl glass-card p-5 border border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#00C2FF]/15 border border-[#00C2FF]/40 flex items-center justify-center glow-cyan-sm">
            <Bell className="w-5 h-5 text-[#00C2FF]" />
          </div>
          <div>
            <h2 className="font-heading font-extrabold text-lg text-white">Studio Notifications</h2>
            <p className="text-xs text-slate-400 font-mono">Real-Time Vehicle & Studio Feed</p>
          </div>
        </div>

        <button
          id="notif-mark-read-btn"
          onClick={() => {
            onMarkAllRead();
            setItems(items.map(n => ({ ...n, unread: false })));
          }}
          className="text-xs font-mono text-[#00C2FF] hover:underline flex items-center gap-1"
        >
          <CheckCheck className="w-4 h-4" />
          <span>Mark Read</span>
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {items.map((notif) => (
          <div
            key={notif.id}
            id={`notification-item-${notif.id}`}
            onClick={() => {
              toggleRead(notif.id);
              if (notif.type === 'status') onNavigate('garage');
              else if (notif.type === 'warranty') onNavigate('warranty');
              else if (notif.type === 'offer') onNavigate('booking');
            }}
            className={`p-4 rounded-3xl border transition-all cursor-pointer group flex items-start gap-3.5 ${
              notif.unread
                ? 'glass-panel-cyan border-[#00C2FF]/40 shadow-[0_0_15px_rgba(0,194,255,0.1)]'
                : 'glass-panel border-white/10 opacity-80'
            }`}
          >
            {/* Icon depending on type */}
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 ${
              notif.type === 'status' ? 'bg-[#00C2FF]/20 text-[#00C2FF]' :
              notif.type === 'warranty' ? 'bg-amber-500/20 text-amber-400' :
              'bg-emerald-500/20 text-emerald-400'
            }`}>
              {notif.type === 'status' && <Wrench className="w-5 h-5" />}
              {notif.type === 'warranty' && <Shield className="w-5 h-5" />}
              {notif.type === 'offer' && <Tag className="w-5 h-5" />}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h4 className="font-heading font-bold text-xs text-white group-hover:text-[#00C2FF] transition-colors">
                  {notif.title}
                </h4>
                <span className="text-[10px] font-mono text-slate-400">{notif.time}</span>
              </div>

              <p className="text-xs text-slate-300 font-light mt-1 leading-relaxed">
                {notif.message}
              </p>

              {notif.vehicleImage && (
                <div className="mt-2.5 h-20 rounded-xl overflow-hidden border border-white/10">
                  <img src={notif.vehicleImage} alt="Vehicle Status" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              )}
            </div>

            {notif.unread && (
              <span className="w-2.5 h-2.5 rounded-full bg-[#00C2FF] flex-shrink-0 mt-1 glow-cyan-sm animate-pulse" />
            )}
          </div>
        ))}
      </div>

    </div>
  );
};
