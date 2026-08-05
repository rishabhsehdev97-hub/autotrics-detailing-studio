import React, { useState } from 'react';
import { Shield, ShieldCheck, QrCode, Calendar, CheckCircle, Download, ExternalLink, Sparkles } from 'lucide-react';
import { WarrantyCertificate, ScreenId } from '../types';
import { INITIAL_WARRANTIES } from '../data/mockData';

interface WarrantyScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const WarrantyScreen: React.FC<WarrantyScreenProps> = ({ onNavigate }) => {
  const [warranties, setWarranties] = useState<WarrantyCertificate[]>(INITIAL_WARRANTIES);
  const [selectedWarranty, setSelectedWarranty] = useState<WarrantyCertificate>(warranties[0]);

  return (
    <div className="w-full space-y-6 pb-24 px-4 pt-3">
      
      {/* Header */}
      <div className="rounded-3xl glass-card p-5 border border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#00C2FF]/15 border border-[#00C2FF]/40 flex items-center justify-center glow-cyan-sm">
            <ShieldCheck className="w-5 h-5 text-[#00C2FF]" />
          </div>
          <div>
            <h2 className="font-heading font-extrabold text-lg text-white">Digital Warranty Vault</h2>
            <p className="text-xs text-slate-400 font-mono">Blockchain-Verified Certificate Ledger</p>
          </div>
        </div>

        <div className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 text-[10px] font-mono font-bold">
          2 Active Vaults
        </div>
      </div>

      {/* Warranty Selector Tabs */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar">
        {warranties.map((war) => (
          <button
            key={war.id}
            id={`warranty-tab-${war.id}`}
            onClick={() => setSelectedWarranty(war)}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all border ${
              selectedWarranty.id === war.id
                ? 'bg-[#00C2FF] text-black border-[#00C2FF] font-bold shadow-md'
                : 'glass-panel text-slate-300 border-white/10 hover:bg-white/10'
            }`}
          >
            {war.vehicleName}
          </button>
        ))}
      </div>

      {/* Holographic Hologram Certificate Card */}
      {selectedWarranty && (
        <div className="space-y-4">
          <div className="relative rounded-3xl overflow-hidden p-6 border border-[#00C2FF]/60 shadow-[0_0_40px_rgba(0,194,255,0.2)] bg-gradient-to-br from-[#12141F] via-[#0B0C10] to-[#040508]">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00C2FF]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-[#00C2FF]" />
                <div>
                  <span className="font-heading font-black text-sm tracking-wider text-white">AUTOTRICS CERTIFICATE</span>
                  <p className="text-[9px] font-mono text-[#00C2FF]">OFFICIAL DIGITAL PRESERVATION</p>
                </div>
              </div>

              <span className="px-2.5 py-0.5 rounded-full bg-[#00C2FF]/15 text-[#00C2FF] border border-[#00C2FF]/30 text-[10px] font-mono font-bold">
                {selectedWarranty.status}
              </span>
            </div>

            {/* Certificate Details */}
            <div className="my-5 space-y-3 relative z-10">
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Certificate Serial Number</span>
                  <div className="font-mono font-extrabold text-base text-[#00C2FF] tracking-wider">
                    {selectedWarranty.certificateNumber}
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Coverage Term</span>
                  <div className="font-heading font-extrabold text-sm text-white">
                    {selectedWarranty.warrantyYears}-Year Guarantee
                  </div>
                </div>
              </div>

              <div className="glass-panel p-3.5 rounded-2xl border border-white/10 space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-mono">Vehicle Registered</span>
                  <span className="font-bold text-white">{selectedWarranty.vehicleName}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-mono">Package Armor</span>
                  <span className="font-bold text-[#00C2FF]">{selectedWarranty.packageInstalled}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400 font-mono">Hydrophobic Rating</span>
                  <span className="font-mono text-emerald-400">{selectedWarranty.hydrophobicScore}</span>
                </div>
              </div>
            </div>

            {/* QR Verification Code & Master Technician Signature */}
            <div className="flex items-center justify-between pt-3 border-t border-white/10 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-white p-1 rounded-xl shadow-lg">
                  <img src={selectedWarranty.qrCodeUrl} alt="QR Verification" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Master Detailer</span>
                  <p className="text-xs font-heading font-bold text-white">{selectedWarranty.installerTechnician}</p>
                  <p className="text-[9px] font-mono text-slate-400">Issued: {selectedWarranty.installationDate}</p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-mono text-slate-400 uppercase">Expires</span>
                <p className="text-xs font-mono font-bold text-[#00C2FF]">{selectedWarranty.expiryDate}</p>
              </div>
            </div>
          </div>

          {/* Action Tools */}
          <div className="grid grid-cols-2 gap-3">
            <button
              id="warranty-download-pdf-btn"
              onClick={() => alert("Downloading encrypted Certificate PDF with digital watermark...")}
              className="py-3 rounded-2xl glass-panel hover:bg-white/10 border border-white/15 text-xs text-white font-mono flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-[#00C2FF]" />
              <span>Export Certificate</span>
            </button>

            <button
              id="warranty-schedule-reinspection-btn"
              onClick={() => onNavigate('booking')}
              className="py-3 rounded-2xl bg-[#00C2FF] hover:bg-cyan-400 text-black font-heading font-bold text-xs uppercase flex items-center justify-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>Free Inspection</span>
            </button>
          </div>

          {/* Annual Maintenance Schedule */}
          <div className="glass-panel p-4 rounded-3xl border border-white/10 space-y-3">
            <h4 className="font-heading font-bold text-xs text-white uppercase tracking-wider font-mono flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#00C2FF]" />
              <span>Complimentary Hydrophobic Maintenance Schedule</span>
            </h4>

            <div className="space-y-2">
              {[
                { year: 'Year 01 (2025)', status: 'Inspected & Topcoated', date: 'Passed 118° Check' },
                { year: 'Year 02 (2026)', status: 'Upcoming Annual Check', date: 'Scheduled Nov 2026' },
                { year: 'Year 03 (2027)', status: 'Scheduled Inspection', date: 'Nov 2027' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 text-xs font-mono">
                  <span className="font-bold text-white">{item.year}</span>
                  <span className="text-slate-300">{item.status}</span>
                  <span className="text-[#00C2FF]">{item.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
