import React, { useState } from 'react';
import { 
  Sparkles, Camera, ShieldCheck, CheckCircle2, Clock, 
  DollarSign, ArrowRight, RefreshCw, Cpu, Layers, AlertTriangle 
} from 'lucide-react';
import { Vehicle, DetailService, AiQuoteResult, ScreenId } from '../types';
import { PREMIUM_SERVICES } from '../data/mockData';

interface AiQuoteScreenProps {
  vehicles: Vehicle[];
  onNavigate: (screen: ScreenId) => void;
  onApplyAiQuote: (quote: AiQuoteResult) => void;
}

export const AiQuoteScreen: React.FC<AiQuoteScreenProps> = ({
  vehicles,
  onNavigate,
  onApplyAiQuote,
}) => {
  const [make, setMake] = useState('Porsche');
  const [model, setModel] = useState('911 GT3 RS');
  const [year, setYear] = useState('2024');
  const [finish, setFinish] = useState<string>('Gloss');
  const [condition, setCondition] = useState<string>('Micro-swirls & light oxidation');
  const [selectedServices, setSelectedServices] = useState<string[]>(['Paint Protection Film (PPF)', 'Graphene Coating']);
  const [notes, setNotes] = useState('Requires maximum depth gloss and hydrophobic protection for track day use.');
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [scanStep, setScanStep] = useState<string>('');
  const [aiResult, setAiResult] = useState<AiQuoteResult | null>(null);

  const toggleService = (name: string) => {
    if (selectedServices.includes(name)) {
      setSelectedServices(selectedServices.filter(s => s !== name));
    } else {
      setSelectedServices([...selectedServices, name]);
    }
  };

  const handleGenerateQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setAiResult(null);

    const steps = [
      "Initializing Autotrics Optical Spectrogram...",
      "Analyzing paint depth and clearcoat micrometer variance...",
      "Evaluating substrate thermal properties for Graphene adhesion...",
      "Synthesizing Gemini AI detailer recommendations & package pricing..."
    ];

    for (let i = 0; i < steps.length; i++) {
      setScanStep(steps[i]);
      await new Promise(r => setTimeout(r, 600));
    }

    try {
      const response = await fetch('/api/ai-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vehicleMake: make,
          vehicleModel: model,
          year: parseInt(year) || 2024,
          finish,
          condition,
          servicesRequested: selectedServices,
          notes,
        })
      });

      const data = await response.json();
      if (data.success && data.quote) {
        setAiResult(data.quote);
      }
    } catch (err) {
      console.error("AI Quote request failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full space-y-6 pb-24 px-4 pt-3">
      
      {/* Header Banner */}
      <div className="rounded-3xl glass-panel-cyan p-5 border border-[#00C2FF]/40 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-[#00C2FF]/20 border border-[#00C2FF]/50 flex items-center justify-center glow-cyan-sm">
            <Cpu className="w-4 h-4 text-[#00C2FF] animate-pulse" />
          </div>
          <div>
            <h2 className="font-heading font-extrabold text-lg text-white">AI Optical Diagnostic Scanner</h2>
            <p className="text-xs text-slate-300 font-mono">Gemini 3.6 Flash Automotive Intelligence</p>
          </div>
        </div>
        <p className="text-slate-300 text-xs leading-relaxed font-light">
          Input your vehicle specifications or camera scan details below to receive an instant AI paint health evaluation, step-by-step correction plan, and transparent studio quote.
        </p>
      </div>

      {/* Form Input Container */}
      {!aiResult && (
        <form onSubmit={handleGenerateQuote} className="space-y-4">
          
          {/* Quick Vehicle Select or Manual Input */}
          <div className="glass-panel p-4 rounded-2xl border border-white/10 space-y-3">
            <h3 className="text-xs font-mono font-bold text-[#00C2FF] uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#00C2FF]" />
              1. Vehicle Information
            </h3>

            {/* Select from garage preset */}
            {vehicles.length > 0 && (
              <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
                {vehicles.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => {
                      setMake(v.make);
                      setModel(v.model);
                      setYear(v.year.toString());
                      setFinish(v.finish);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all border ${
                      make === v.make && model === v.model
                        ? 'bg-[#00C2FF]/20 text-[#00C2FF] border-[#00C2FF]'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {v.year} {v.make} {v.model}
                  </button>
                ))}
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Make</label>
                <input
                  type="text"
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  className="w-full glass-input px-3 py-2.5 rounded-xl text-xs text-white"
                  placeholder="e.g. Porsche"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Model</label>
                <input
                  type="text"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full glass-input px-3 py-2.5 rounded-xl text-xs text-white"
                  placeholder="e.g. 911 GT3 RS"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Model Year</label>
                <input
                  type="number"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full glass-input px-3 py-2.5 rounded-xl text-xs text-white"
                  placeholder="2024"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Paint Finish Type</label>
                <select
                  value={finish}
                  onChange={(e) => setFinish(e.target.value)}
                  className="w-full glass-input px-3 py-2.5 rounded-xl text-xs text-white bg-black/80"
                >
                  <option value="Gloss">Gloss Finish</option>
                  <option value="Satin Matte">Satin Matte</option>
                  <option value="Stealth Matte">Stealth Matte</option>
                  <option value="Carbon Fiber">Bare Carbon Fiber</option>
                </select>
              </div>
            </div>
          </div>

          {/* Paint Condition Selection */}
          <div className="glass-panel p-4 rounded-2xl border border-white/10 space-y-3">
            <h3 className="text-xs font-mono font-bold text-[#00C2FF] uppercase tracking-wider flex items-center gap-1.5">
              <Camera className="w-4 h-4 text-[#00C2FF]" />
              2. Optical Surface Assessment
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Showroom Factory Perfect",
                "Micro-swirls & light oxidation",
                "Moderate wash scratches & water spots",
                "Heavy buffer swirls & deep clearcoat defects"
              ].map((cond) => (
                <button
                  key={cond}
                  type="button"
                  onClick={() => setCondition(cond)}
                  className={`p-3 rounded-xl text-xs text-left transition-all border ${
                    condition === cond
                      ? 'bg-[#00C2FF]/15 border-[#00C2FF] text-[#00C2FF] font-semibold'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {cond}
                </button>
              ))}
            </div>
          </div>

          {/* Requested Treatments */}
          <div className="glass-panel p-4 rounded-2xl border border-white/10 space-y-3">
            <h3 className="text-xs font-mono font-bold text-[#00C2FF] uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00C2FF]" />
              3. Desired Treatments
            </h3>

            <div className="flex flex-wrap gap-2">
              {PREMIUM_SERVICES.map((serv) => {
                const isSelected = selectedServices.includes(serv.name);
                return (
                  <button
                    key={serv.id}
                    type="button"
                    onClick={() => toggleService(serv.name)}
                    className={`px-3 py-2 rounded-xl text-xs font-mono transition-all border flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#00C2FF] text-black border-[#00C2FF] font-bold shadow-md'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                    <span>{serv.name}</span>
                  </button>
                );
              })}
            </div>

            <div>
              <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Additional Specifics or Track Notes</label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full glass-input p-3 rounded-xl text-xs text-white placeholder-slate-500"
                placeholder="Mention track usage, highway driving distance, or specific panel scratch areas..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            id="ai-quote-generate-btn"
            type="submit"
            disabled={isLoading}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#00C2FF] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-heading font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,194,255,0.4)] transition-all"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Running Spectrogram Analysis...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>GENERATE AI DIAGNOSTIC QUOTE</span>
              </>
            )}
          </button>
        </form>
      )}

      {/* Loading Scanning Screen Simulation */}
      {isLoading && (
        <div className="rounded-3xl glass-card p-8 text-center space-y-4 border border-[#00C2FF]/50 my-6">
          <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-4 border-t-[#00C2FF] border-r-transparent border-b-[#00C2FF]/30 border-l-transparent animate-spin" />
            <Cpu className="w-8 h-8 text-[#00C2FF] animate-pulse" />
          </div>

          <h3 className="font-heading font-bold text-lg text-white">AUTOTRICS AI NEURAL SCAN</h3>
          <p className="text-xs font-mono text-[#00C2FF] animate-pulse">{scanStep}</p>
        </div>
      )}

      {/* Render AI Result Card */}
      {aiResult && (
        <div className="space-y-4 animate-fadeIn">
          <div className="rounded-3xl glass-card p-5 sm:p-6 border border-[#00C2FF]/50 space-y-5 shadow-2xl">
            
            {/* Top Score Banner */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#00C2FF] uppercase font-bold">
                  AI SPECIFICATION REPORT
                </span>
                <h3 className="font-heading font-extrabold text-xl text-white mt-0.5">
                  {aiResult.recommendedPackageName}
                </h3>
              </div>

              {/* Paint Health Circular Badge */}
              <div className="flex flex-col items-center justify-center px-4 py-2 rounded-2xl bg-[#00C2FF]/15 border border-[#00C2FF]/40 text-center glow-cyan-sm">
                <span className="font-heading font-black text-2xl text-[#00C2FF]">
                  {aiResult.paintHealthScore}%
                </span>
                <span className="text-[9px] font-mono text-slate-300 uppercase">Paint Score</span>
              </div>
            </div>

            {/* Surface Analysis */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Surface Optical Analysis</h4>
              <p className="text-xs text-slate-200 leading-relaxed glass-panel p-3 rounded-xl border border-white/10">
                "{aiResult.surfaceDefectAnalysis}"
              </p>
            </div>

            {/* Recommended Steps Checklist */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-[#00C2FF] uppercase">Recommended Detailing Steps</h4>
              <div className="space-y-1.5">
                {aiResult.recommendedSteps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#00C2FF] flex-shrink-0" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Metrics Grid */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="glass-panel p-2.5 rounded-xl border border-white/10 text-center">
                <Clock className="w-4 h-4 text-[#00C2FF] mx-auto mb-1" />
                <span className="block text-sm font-bold text-white font-mono">{aiResult.estimatedTimeHours} Hours</span>
                <span className="text-[9px] text-slate-400 uppercase font-mono">Studio Time</span>
              </div>

              <div className="glass-panel p-2.5 rounded-xl border border-white/10 text-center">
                <ShieldCheck className="w-4 h-4 text-[#00C2FF] mx-auto mb-1" />
                <span className="block text-sm font-bold text-white font-mono">{aiResult.warrantyCoverageYears} Years</span>
                <span className="text-[9px] text-slate-400 uppercase font-mono">Warranty</span>
              </div>

              <div className="glass-panel p-2.5 rounded-xl border border-white/10 text-center">
                <Sparkles className="w-4 h-4 text-[#00C2FF] mx-auto mb-1" />
                <span className="block text-xs font-bold text-[#00C2FF] font-mono truncate">{aiResult.hydrophobicRating}</span>
                <span className="text-[9px] text-slate-400 uppercase font-mono">Repellency</span>
              </div>
            </div>

            {/* AI Note */}
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <span><strong>Chief Engineer Note:</strong> {aiResult.aiTechnicianNote}</span>
            </div>

            {/* Price & Book Action */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase">Estimated Investment</span>
                <div className="font-heading font-black text-2xl text-white">
                  ${aiResult.estimatedPriceUSD.toLocaleString()}
                </div>
              </div>

              <button
                id="ai-quote-book-now-btn"
                onClick={() => {
                  onApplyAiQuote(aiResult);
                  onNavigate('booking');
                }}
                className="px-6 py-3.5 rounded-2xl bg-[#00C2FF] hover:bg-cyan-400 text-black font-heading font-bold text-xs uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(0,194,255,0.4)] transition-all"
              >
                <span>BOOK THIS AI QUOTE</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>

          <button
            id="ai-quote-recalculate-btn"
            onClick={() => setAiResult(null)}
            className="w-full py-3 rounded-xl glass-panel text-xs text-slate-400 hover:text-white font-mono"
          >
            ← Modify Input Parameters & Scan Again
          </button>
        </div>
      )}

    </div>
  );
};
