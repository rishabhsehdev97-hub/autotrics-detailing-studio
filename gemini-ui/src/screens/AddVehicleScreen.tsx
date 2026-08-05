import React, { useState } from 'react';
import { Car, Camera, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { Vehicle, FinishType, ScreenId } from '../types';

interface AddVehicleScreenProps {
  onAddVehicle: (vehicle: Vehicle) => void;
  onNavigate: (screen: ScreenId) => void;
}

const PRESET_CAR_PHOTOS = [
  { label: 'Porsche GT3 RS', url: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1000&q=80' },
  { label: 'Tesla Cybertruck', url: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80' },
  { label: 'BMW M8 Coupe', url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80' },
  { label: 'Ferrari SF90', url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1000&q=80' },
  { label: 'McLaren 720S', url: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1000&q=80' },
  { label: 'Aston Martin DB12', url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1000&q=80' },
];

export const AddVehicleScreen: React.FC<AddVehicleScreenProps> = ({ onAddVehicle, onNavigate }) => {
  const [make, setMake] = useState('Aston Martin');
  const [model, setModel] = useState('DB12 Volante');
  const [year, setYear] = useState('2025');
  const [color, setColor] = useState('Iridescent Emerald / Tan Nappa');
  const [finish, setFinish] = useState<FinishType>('Gloss');
  const [licensePlate, setLicensePlate] = useState('ASTON-007');
  const [vin, setVin] = useState('SCFDB12V80098271');
  const [selectedImage, setSelectedImage] = useState(PRESET_CAR_PHOTOS[5].url);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newVeh: Vehicle = {
      id: `veh-${Date.now()}`,
      make,
      model,
      year: parseInt(year) || 2025,
      color,
      finish,
      licensePlate,
      vin,
      imageUrl: selectedImage,
      paintHealthScore: 92,
      protectionType: 'Pending Studio Treatment',
      protectionExpires: 'N/A',
      lastServiceDate: 'Just Added',
      status: 'Pending Treatment',
    };

    onAddVehicle(newVeh);
    onNavigate('garage');
  };

  return (
    <div className="w-full space-y-6 pb-24 px-4 pt-3">
      
      {/* Title */}
      <div className="rounded-3xl glass-card p-5 border border-white/10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-[#00C2FF]/15 border border-[#00C2FF]/40 flex items-center justify-center glow-cyan-sm">
          <Car className="w-5 h-5 text-[#00C2FF]" />
        </div>
        <div>
          <h2 className="font-heading font-extrabold text-lg text-white">Register Studio Vehicle</h2>
          <p className="text-xs text-slate-400 font-mono">Add vehicle specs for AI diagnostic logs</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Photo Selection */}
        <div className="glass-panel p-4 rounded-2xl border border-white/10 space-y-3">
          <label className="block text-xs font-mono font-bold text-[#00C2FF] uppercase tracking-wider">
            Select High-Resolution Vehicle Photo
          </label>

          <div className="relative h-44 rounded-2xl overflow-hidden border border-[#00C2FF]/50 mb-3 group">
            <img
              src={selectedImage}
              alt="Selected Vehicle Preview"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
              <span className="text-xs font-mono text-white flex items-center gap-1.5 bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur">
                <Camera className="w-3.5 h-3.5 text-[#00C2FF]" /> Studio Profile Photo Selected
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {PRESET_CAR_PHOTOS.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedImage(preset.url)}
                className={`h-16 rounded-xl overflow-hidden border transition-all ${
                  selectedImage === preset.url
                    ? 'border-[#00C2FF] ring-2 ring-[#00C2FF]/40 scale-102'
                    : 'border-white/10 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={preset.url}
                  alt={preset.label}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Specs Input */}
        <div className="glass-panel p-4 rounded-2xl border border-white/10 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Make</label>
              <input
                type="text"
                required
                value={make}
                onChange={(e) => setMake(e.target.value)}
                className="w-full glass-input px-3 py-2.5 rounded-xl text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Model</label>
              <input
                type="text"
                required
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full glass-input px-3 py-2.5 rounded-xl text-xs text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Year</label>
              <input
                type="number"
                required
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full glass-input px-3 py-2.5 rounded-xl text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Paint Finish</label>
              <select
                value={finish}
                onChange={(e) => setFinish(e.target.value as FinishType)}
                className="w-full glass-input px-3 py-2.5 rounded-xl text-xs text-white bg-black/90"
              >
                <option value="Gloss">Gloss</option>
                <option value="Satin Matte">Satin Matte</option>
                <option value="Stealth Matte">Stealth Matte</option>
                <option value="Carbon Fiber">Carbon Fiber</option>
                <option value="Raw Metal">Raw Metal</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Color Code & Description</label>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full glass-input px-3 py-2.5 rounded-xl text-xs text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">License Plate</label>
              <input
                type="text"
                value={licensePlate}
                onChange={(e) => setLicensePlate(e.target.value)}
                className="w-full glass-input px-3 py-2.5 rounded-xl text-xs text-white font-mono uppercase"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">VIN Number</label>
              <input
                type="text"
                value={vin}
                onChange={(e) => setVin(e.target.value)}
                className="w-full glass-input px-3 py-2.5 rounded-xl text-xs text-white font-mono uppercase"
              />
            </div>
          </div>
        </div>

        {/* Submit button */}
        <button
          id="add-vehicle-submit-btn"
          type="submit"
          className="w-full py-4 rounded-2xl bg-[#00C2FF] hover:bg-cyan-400 text-black font-heading font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(0,194,255,0.4)] transition-all"
        >
          <span>ADD VEHICLE TO GARAGE</span>
          <ArrowRight className="w-4 h-4 stroke-[3]" />
        </button>
      </form>

    </div>
  );
};
