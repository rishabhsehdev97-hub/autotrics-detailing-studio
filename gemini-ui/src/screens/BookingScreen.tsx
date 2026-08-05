import React, { useState } from 'react';
import { Calendar, Truck, ShieldCheck, Check, Clock, ChevronRight, ArrowRight, Car, Plus } from 'lucide-react';
import { Vehicle, DetailService, BookingDetails, ScreenId } from '../types';
import { PREMIUM_SERVICES } from '../data/mockData';

interface BookingScreenProps {
  vehicles: Vehicle[];
  selectedService?: DetailService;
  onNavigate: (screen: ScreenId) => void;
  onProceedToPayment: (details: BookingDetails) => void;
}

export const BookingScreen: React.FC<BookingScreenProps> = ({
  vehicles,
  selectedService,
  onNavigate,
  onProceedToPayment,
}) => {
  const [selectedVehId, setSelectedVehId] = useState<string>(vehicles[0]?.id || '');
  const [chosenServiceId, setChosenServiceId] = useState<string>(selectedService?.id || PREMIUM_SERVICES[0].id);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['Leather Lock Ceramic']);
  const [deliveryMethod, setDeliveryMethod] = useState<'Studio Drop-off' | 'Valet Enclosed Transport'>('Valet Enclosed Transport');
  const [selectedDate, setSelectedDate] = useState<string>('2026-08-07 (Friday)');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>('09:00 AM - Studio Bay 01');
  const [valetAddress, setValetAddress] = useState<string>('742 Apex Boulevard, Beverly Hills, CA');
  const [specialInstructions, setSpecialInstructions] = useState<string>('Please exercise extra caution around carbon fiber rear wing.');

  const mainServ = PREMIUM_SERVICES.find(s => s.id === chosenServiceId) || PREMIUM_SERVICES[0];

  const addonsList = [
    { name: 'Leather Lock Ceramic Coating', price: 299 },
    { name: 'High-Temp Brake Caliper Coat', price: 349 },
    { name: 'Engine Bay Vapor Steam & Dress', price: 199 },
    { name: 'Hydrophobic Glass Hydro-Shield', price: 149 }
  ];

  const toggleAddon = (name: string) => {
    if (selectedAddons.includes(name)) {
      setSelectedAddons(selectedAddons.filter(a => a !== name));
    } else {
      setSelectedAddons([...selectedAddons, name]);
    }
  };

  const calculateTotal = () => {
    let base = mainServ.price;
    if (deliveryMethod === 'Valet Enclosed Transport') base += 150;
    selectedAddons.forEach(aName => {
      const match = addonsList.find(a => a.name === aName);
      if (match) base += match.price;
    });
    return base;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const details: BookingDetails = {
      vehicleId: selectedVehId,
      serviceIds: [chosenServiceId, ...selectedAddons],
      deliveryMethod,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      valetAddress: deliveryMethod === 'Valet Enclosed Transport' ? valetAddress : undefined,
      specialInstructions,
      totalAmount: calculateTotal(),
    };
    onProceedToPayment(details);
    onNavigate('payment');
  };

  return (
    <div className="w-full space-y-6 pb-24 px-4 pt-3">
      
      {/* Header Banner */}
      <div className="rounded-3xl glass-card p-5 border border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#00C2FF]/15 border border-[#00C2FF]/40 flex items-center justify-center glow-cyan-sm">
            <Calendar className="w-5 h-5 text-[#00C2FF]" />
          </div>
          <div>
            <h2 className="font-heading font-extrabold text-lg text-white">Concierge Booking Engine</h2>
            <p className="text-xs text-slate-400 font-mono">Reserve Studio Bays or Enclosed Transport</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleBookingSubmit} className="space-y-4">
        
        {/* Step 1: Vehicle Selector */}
        <div className="glass-panel p-4 rounded-2xl border border-white/10 space-y-3">
          <h3 className="text-xs font-mono font-bold text-[#00C2FF] uppercase tracking-wider flex items-center gap-1.5">
            <Car className="w-4 h-4 text-[#00C2FF]" />
            1. Select Studio Vehicle
          </h3>

          <div className="grid grid-cols-1 gap-2">
            {vehicles.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setSelectedVehId(v.id)}
                className={`p-3 rounded-xl text-left border transition-all flex items-center justify-between ${
                  selectedVehId === v.id
                    ? 'bg-[#00C2FF]/15 border-[#00C2FF] text-white font-semibold glow-cyan-sm'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <img src={v.imageUrl} alt={v.model} className="w-10 h-10 rounded-lg object-cover" referrerPolicy="no-referrer" />
                  <div>
                    <span className="text-xs font-heading font-bold">{v.year} {v.make} {v.model}</span>
                    <span className="block text-[10px] font-mono text-slate-400">{v.color} • {v.finish}</span>
                  </div>
                </div>
                {selectedVehId === v.id && <Check className="w-4 h-4 text-[#00C2FF]" />}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Main Service Package */}
        <div className="glass-panel p-4 rounded-2xl border border-white/10 space-y-3">
          <h3 className="text-xs font-mono font-bold text-[#00C2FF] uppercase tracking-wider flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#00C2FF]" />
            2. Choose Detailing Treatment
          </h3>

          <select
            value={chosenServiceId}
            onChange={(e) => setChosenServiceId(e.target.value)}
            className="w-full glass-input p-3 rounded-xl text-xs text-white bg-black/90 font-mono"
          >
            {PREMIUM_SERVICES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} — ${s.price.toLocaleString()} ({s.durationHours}h)
              </option>
            ))}
          </select>

          {/* Add-on Options */}
          <div className="pt-2">
            <label className="block text-[10px] font-mono text-slate-400 uppercase mb-2">Optional Studio Enhancements</label>
            <div className="grid grid-cols-1 gap-2">
              {addonsList.map((addon) => {
                const isChecked = selectedAddons.includes(addon.name);
                return (
                  <button
                    key={addon.name}
                    type="button"
                    onClick={() => toggleAddon(addon.name)}
                    className={`p-2.5 rounded-xl border text-xs flex items-center justify-between transition-all ${
                      isChecked
                        ? 'bg-[#00C2FF]/10 border-[#00C2FF] text-white font-medium'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${isChecked ? 'bg-[#00C2FF] text-black font-bold' : 'border border-slate-600'}`}>
                        {isChecked && '✓'}
                      </span>
                      {addon.name}
                    </span>
                    <span className="font-mono text-[#00C2FF]">+${addon.price}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Step 3: Transport Method */}
        <div className="glass-panel p-4 rounded-2xl border border-white/10 space-y-3">
          <h3 className="text-xs font-mono font-bold text-[#00C2FF] uppercase tracking-wider flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-[#00C2FF]" />
            3. Logistics & Valet Transport
          </h3>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setDeliveryMethod('Valet Enclosed Transport')}
              className={`p-3 rounded-xl border text-left text-xs transition-all ${
                deliveryMethod === 'Valet Enclosed Transport'
                  ? 'bg-[#00C2FF]/20 border-[#00C2FF] text-white font-bold glow-cyan-sm'
                  : 'bg-white/5 border-white/10 text-slate-400'
              }`}
            >
              <span className="block font-heading font-bold text-white">Enclosed Valet Carrier</span>
              <span className="block text-[10px] font-mono text-[#00C2FF] mt-1">+$150 • 100% Insured</span>
            </button>

            <button
              type="button"
              onClick={() => setDeliveryMethod('Studio Drop-off')}
              className={`p-3 rounded-xl border text-left text-xs transition-all ${
                deliveryMethod === 'Studio Drop-off'
                  ? 'bg-[#00C2FF]/20 border-[#00C2FF] text-white font-bold glow-cyan-sm'
                  : 'bg-white/5 border-white/10 text-slate-400'
              }`}
            >
              <span className="block font-heading font-bold text-white">Direct Studio Drop-off</span>
              <span className="block text-[10px] font-mono text-emerald-400 mt-1">Complimentary</span>
            </button>
          </div>

          {deliveryMethod === 'Valet Enclosed Transport' && (
            <div>
              <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Valet Pickup Address</label>
              <input
                type="text"
                value={valetAddress}
                onChange={(e) => setValetAddress(e.target.value)}
                className="w-full glass-input px-3 py-2.5 rounded-xl text-xs text-white"
              />
            </div>
          )}
        </div>

        {/* Step 4: Schedule Slot */}
        <div className="glass-panel p-4 rounded-2xl border border-white/10 space-y-3">
          <h3 className="text-xs font-mono font-bold text-[#00C2FF] uppercase tracking-wider flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#00C2FF]" />
            4. Date & Studio Technician Slot
          </h3>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Date</label>
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full glass-input p-2.5 rounded-xl text-xs text-white bg-black/90 font-mono"
              >
                <option value="2026-08-07 (Friday)">Friday, Aug 7</option>
                <option value="2026-08-08 (Saturday)">Saturday, Aug 8</option>
                <option value="2026-08-10 (Monday)">Monday, Aug 10</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Time Slot</label>
              <select
                value={selectedTimeSlot}
                onChange={(e) => setSelectedTimeSlot(e.target.value)}
                className="w-full glass-input p-2.5 rounded-xl text-xs text-white bg-black/90 font-mono"
              >
                <option value="09:00 AM - Studio Bay 01">09:00 AM (Bay 01)</option>
                <option value="11:30 AM - Studio Bay 02">11:30 AM (Bay 02)</option>
                <option value="02:00 PM - Studio Bay 03">02:00 PM (Bay 03)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Total Summary Bar */}
        <div className="rounded-2xl glass-card p-4 border border-[#00C2FF]/40 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono text-slate-400 uppercase">Total Booking Investment</span>
            <div className="font-heading font-black text-2xl text-white">
              ${calculateTotal().toLocaleString()}
            </div>
          </div>

          <button
            id="booking-proceed-payment-btn"
            type="submit"
            className="px-6 py-3.5 rounded-2xl bg-[#00C2FF] hover:bg-cyan-400 text-black font-heading font-bold text-xs uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(0,194,255,0.4)] transition-all"
          >
            <span>PROCEED TO PAYMENT</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>
      </form>

    </div>
  );
};
