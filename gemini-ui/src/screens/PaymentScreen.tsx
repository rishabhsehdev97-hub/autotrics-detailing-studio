import React, { useState } from 'react';
import { CreditCard, ShieldCheck, CheckCircle2, Lock, ArrowRight, DollarSign, Wallet } from 'lucide-react';
import { BookingDetails, ScreenId } from '../types';

interface PaymentScreenProps {
  bookingDetails?: BookingDetails;
  onNavigate: (screen: ScreenId) => void;
  onPaymentSuccess: () => void;
}

export const PaymentScreen: React.FC<PaymentScreenProps> = ({
  bookingDetails,
  onNavigate,
  onPaymentSuccess,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<'apple' | 'card' | 'crypto'>('apple');
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4921');
  const [cardExpiry, setCardExpiry] = useState('08/29');
  const [cardCvc, setCardCvc] = useState('841');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccessModal, setIsSuccessModal] = useState(false);

  const amount = bookingDetails?.totalAmount || 3649;
  const tax = Math.round(amount * 0.08);
  const total = amount + tax;

  const handlePaySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccessModal(true);
      onPaymentSuccess();
    }, 1500);
  };

  return (
    <div className="w-full space-y-6 pb-24 px-4 pt-3">
      
      {/* Header */}
      <div className="rounded-3xl glass-card p-5 border border-white/10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-[#00C2FF]/15 border border-[#00C2FF]/40 flex items-center justify-center glow-cyan-sm">
          <Lock className="w-5 h-5 text-[#00C2FF]" />
        </div>
        <div>
          <h2 className="font-heading font-extrabold text-lg text-white">256-Bit Encrypted Checkout</h2>
          <p className="text-xs text-slate-400 font-mono">Autotrics VIP Concierge Ledger</p>
        </div>
      </div>

      {/* Itemized Receipt Breakdown */}
      <div className="glass-panel p-4 rounded-2xl border border-white/10 space-y-3 font-mono text-xs">
        <h3 className="text-xs font-mono font-bold text-[#00C2FF] uppercase tracking-wider">
          Reservation Summary
        </h3>

        <div className="space-y-2 border-b border-white/10 pb-3">
          <div className="flex justify-between text-slate-300">
            <span>Primary Treatment Package</span>
            <span className="font-bold text-white">${amount.toLocaleString()}</span>
          </div>

          <div className="flex justify-between text-slate-400 text-[11px]">
            <span>Logistics: {bookingDetails?.deliveryMethod || 'Valet Enclosed Carrier'}</span>
            <span>Included</span>
          </div>

          <div className="flex justify-between text-slate-400 text-[11px]">
            <span>Est. Studio Taxes & Fees (8%)</span>
            <span>${tax}</span>
          </div>

          <div className="flex justify-between text-[#00C2FF] text-[11px]">
            <span>VIP Member Discount (APEX-10)</span>
            <span>-$150</span>
          </div>
        </div>

        <div className="flex justify-between text-sm font-bold text-white pt-1">
          <span>Total Investment</span>
          <span className="text-[#00C2FF] font-heading font-black text-lg">
            ${(total - 150).toLocaleString()}
          </span>
        </div>
      </div>

      {/* Payment Options Switcher */}
      <div className="space-y-3">
        <label className="block text-xs font-mono font-bold text-slate-300 uppercase">
          Select Payment Instrument
        </label>

        <div className="grid grid-cols-3 gap-2">
          <button
            id="pay-method-apple"
            type="button"
            onClick={() => setPaymentMethod('apple')}
            className={`py-3 rounded-xl border text-xs font-heading font-bold flex flex-col items-center justify-center gap-1 transition-all ${
              paymentMethod === 'apple'
                ? 'bg-[#00C2FF] text-black border-[#00C2FF] shadow-lg'
                : 'glass-panel text-slate-300 border-white/10'
            }`}
          >
            <span> Pay</span>
            <span className="text-[9px] font-mono opacity-80">1-Tap</span>
          </button>

          <button
            id="pay-method-card"
            type="button"
            onClick={() => setPaymentMethod('card')}
            className={`py-3 rounded-xl border text-xs font-heading font-bold flex flex-col items-center justify-center gap-1 transition-all ${
              paymentMethod === 'card'
                ? 'bg-[#00C2FF] text-black border-[#00C2FF] shadow-lg'
                : 'glass-panel text-slate-300 border-white/10'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            <span className="text-[9px] font-mono opacity-80">Credit Card</span>
          </button>

          <button
            id="pay-method-crypto"
            type="button"
            onClick={() => setPaymentMethod('crypto')}
            className={`py-3 rounded-xl border text-xs font-heading font-bold flex flex-col items-center justify-center gap-1 transition-all ${
              paymentMethod === 'crypto'
                ? 'bg-[#00C2FF] text-black border-[#00C2FF] shadow-lg'
                : 'glass-panel text-slate-300 border-white/10'
            }`}
          >
            <Wallet className="w-4 h-4" />
            <span className="text-[9px] font-mono opacity-80">USDC Crypto</span>
          </button>
        </div>
      </div>

      {/* Payment Form */}
      <form onSubmit={handlePaySubmit} className="space-y-4">
        {paymentMethod === 'card' && (
          <div className="glass-panel p-4 rounded-2xl border border-white/10 space-y-3">
            <div>
              <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Card Number</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full glass-input px-3 py-2.5 rounded-xl text-xs text-white font-mono"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">Expiry (MM/YY)</label>
                <input
                  type="text"
                  value={cardExpiry}
                  onChange={(e) => setCardExpiry(e.target.value)}
                  className="w-full glass-input px-3 py-2.5 rounded-xl text-xs text-white font-mono"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1">CVC Code</label>
                <input
                  type="password"
                  value={cardCvc}
                  onChange={(e) => setCardCvc(e.target.value)}
                  className="w-full glass-input px-3 py-2.5 rounded-xl text-xs text-white font-mono"
                />
              </div>
            </div>
          </div>
        )}

        {/* Digital Warranty Auto-Activate Checkbox */}
        <div className="flex items-center gap-2 p-3 rounded-xl bg-[#00C2FF]/10 border border-[#00C2FF]/30 text-xs text-slate-200">
          <input type="checkbox" defaultChecked className="accent-[#00C2FF] w-4 h-4" />
          <span>Automatically issue 10-Year Blockchain Digital Warranty Certificate upon service completion</span>
        </div>

        {/* Submit Pay Button */}
        <button
          id="payment-submit-btn"
          type="submit"
          disabled={isProcessing}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#00C2FF] to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-heading font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,194,255,0.4)] transition-all"
        >
          {isProcessing ? (
            <span className="font-mono">Authorizing ${(total - 150).toLocaleString()}...</span>
          ) : (
            <>
              <span>AUTHORIZE & CONFIRM BOOKING (${(total - 150).toLocaleString()})</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </>
          )}
        </button>
      </form>

      {/* Confirmation Modal */}
      {isSuccessModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-card rounded-3xl border border-[#00C2FF] p-6 max-w-sm w-full text-center space-y-4 shadow-[0_0_50px_rgba(0,194,255,0.3)] animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#00C2FF]/20 border border-[#00C2FF] flex items-center justify-center mx-auto glow-cyan-lg">
              <CheckCircle2 className="w-8 h-8 text-[#00C2FF] animate-bounce" />
            </div>

            <h3 className="font-heading font-black text-xl text-white">CONCIERGE BOOKING CONFIRMED</h3>
            <p className="text-xs text-slate-300 font-mono">
              Reservation Code: <strong className="text-[#00C2FF]">#ATC-2026-992</strong>
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your enclosed valet carrier is assigned. You will receive real-time infrared bay camera updates during service.
            </p>

            <div className="pt-2 space-y-2">
              <button
                id="payment-modal-warranty-btn"
                onClick={() => {
                  setIsSuccessModal(false);
                  onNavigate('warranty');
                }}
                className="w-full py-3 rounded-xl bg-[#00C2FF] text-black font-heading font-bold text-xs uppercase"
              >
                View Digital Warranty Vault
              </button>

              <button
                id="payment-modal-home-btn"
                onClick={() => {
                  setIsSuccessModal(false);
                  onNavigate('home');
                }}
                className="w-full py-2.5 rounded-xl glass-panel text-slate-300 font-mono text-xs"
              >
                Return to Home Studio
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
