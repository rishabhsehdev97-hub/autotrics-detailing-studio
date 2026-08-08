import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  CreditCard,
  Lock,
  MapPin,
  Smartphone,
  ShieldCheck,
  Wallet,
} from 'lucide-react';

import { BookingDetails, ScreenId } from '../types';

interface PaymentScreenProps {
  bookingDetails?: BookingDetails;
  onNavigate: (screen: ScreenId) => void;
  onPaymentSuccess: () => void;
}

type PaymentMethod = 'upi' | 'card' | 'netbanking';

export const PaymentScreen: React.FC<PaymentScreenProps> = ({
  bookingDetails,
  onNavigate,
  onPaymentSuccess,
}) => {
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>('upi');

  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardName, setCardName] = useState('');

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccessModal, setIsSuccessModal] = useState(false);

  const amount = bookingDetails?.totalAmount ?? 0;

  const serviceNames = bookingDetails?.serviceIds ?? [];
  const addonNames = bookingDetails?.addonIds ?? [];

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();

    if (!bookingDetails || amount <= 0) {
      return;
    }

    setIsProcessing(true);

    /*
     * TEMPORARY PAYMENT SIMULATION
     *
     * Later this will be replaced with the real
     * Razorpay / payment gateway integration.
     */
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccessModal(true);
      onPaymentSuccess();
    }, 1500);
  };

  const paymentReady =
    paymentMethod === 'upi'
      ? upiId.trim().length >= 5
      : paymentMethod === 'card'
        ? cardNumber.replace(/\s/g, '').length >= 12 &&
          cardExpiry.length >= 4 &&
          cardCvv.length >= 3 &&
          cardName.trim().length >= 2
        : true;

  return (
    <div className="w-full px-4 pt-3 pb-28 space-y-5">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border border-[#00C2FF]/30
          bg-[#0B0D12]
          p-5
        "
      >

        <div
          className="
            absolute
            -right-12
            -top-12
            w-36
            h-36
            rounded-full
            bg-[#00C2FF]/10
            blur-3xl
            pointer-events-none
          "
        />

        <div className="relative z-10 flex items-center gap-3">

          <button
            type="button"
            onClick={() => onNavigate('booking')}
            className="
              w-10
              h-10
              rounded-xl
              border border-white/10
              bg-white/[0.04]
              flex
              items-center
              justify-center
              text-slate-300
              hover:border-[#00C2FF]/40
              hover:text-[#00C2FF]
              transition
            "
            aria-label="Back to booking"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <div>

            <p className="
              text-[9px]
              font-mono
              font-bold
              tracking-[0.2em]
              text-[#00C2FF]
              uppercase
            ">
              AUTOTRICS SECURE CHECKOUT
            </p>

            <h1 className="
              mt-1
              font-heading
              font-extrabold
              text-xl
              text-white
            ">
              Complete Payment
            </h1>

            <p className="mt-1 text-[11px] text-slate-400">
              Secure your detailing appointment.
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          BOOKING SUMMARY
      ===================================================== */}

      <div
        className="
          rounded-3xl
          border border-white/10
          bg-[#0B0D12]
          p-4
          space-y-4
        "
      >

        <div className="flex items-center justify-between">

          <div>
            <p className="
              text-[9px]
              font-mono
              font-bold
              tracking-widest
              text-[#00C2FF]
              uppercase
            ">
              BOOKING SUMMARY
            </p>

            <h2 className="
              mt-1
              text-sm
              font-heading
              font-extrabold
              text-white
            ">
              Your Autotrics Appointment
            </h2>
          </div>

          <ShieldCheck className="w-5 h-5 text-[#00C2FF]" />

        </div>


        {/* Customer */}

        {bookingDetails && (
          <div className="
            rounded-2xl
            border border-white/10
            bg-white/[0.03]
            p-3
            space-y-2
          ">

            <div className="flex items-center justify-between">

              <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500">
                Customer
              </span>

              <span className="text-xs font-semibold text-white">
                {bookingDetails.customerName}
              </span>

            </div>


            <div className="flex items-center justify-between">

              <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500">
                Vehicle
              </span>

              <span className="text-xs font-semibold text-white">
                {bookingDetails.vehicleYear} {bookingDetails.vehicleMake}{' '}
                {bookingDetails.vehicleModel}
              </span>

            </div>


            <div className="flex items-center justify-between">

              <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500">
                Registration
              </span>

              <span className="text-xs font-mono text-slate-300">
                {bookingDetails.vehicleRegistration}
              </span>

            </div>

          </div>
        )}


        {/* Services */}

        <div className="space-y-2">

          <p className="
            text-[9px]
            font-mono
            uppercase
            tracking-widest
            text-slate-500
          ">
            Selected Services
          </p>

          {serviceNames.map((service, index) => (

            <div
              key={`${service}-${index}`}
              className="flex items-center justify-between gap-3"
            >

              <div className="flex items-center gap-2">

                <div className="
                  w-5
                  h-5
                  rounded-md
                  bg-[#00C2FF]/10
                  border border-[#00C2FF]/20
                  flex
                  items-center
                  justify-center
                ">
                  <Check className="w-3 h-3 text-[#00C2FF]" />
                </div>

                <span className="text-[11px] text-slate-300">
                  {service}
                </span>

              </div>

            </div>

          ))}

          {addonNames.length > 0 && (
            <div className="pt-2 border-t border-white/10">

              <p className="
                mb-2
                text-[9px]
                font-mono
                uppercase
                tracking-widest
                text-slate-600
              ">
                Add-ons
              </p>

              {addonNames.map((addon, index) => (

                <div
                  key={`${addon}-${index}`}
                  className="flex items-center gap-2 mb-1.5"
                >

                  <Check className="w-3 h-3 text-slate-500" />

                  <span className="text-[10px] text-slate-400">
                    {addon}
                  </span>

                </div>

              ))}

            </div>
          )}

        </div>


        {/* Appointment */}

        {bookingDetails && (
          <div className="
            grid
            grid-cols-2
            gap-2
          ">

            <div className="
              rounded-xl
              border border-white/10
              bg-white/[0.03]
              p-3
            ">

              <p className="text-[8px] font-mono uppercase tracking-widest text-slate-600">
                Appointment
              </p>

              <p className="mt-1 text-[10px] font-semibold text-white">
                {bookingDetails.date}
              </p>

              <p className="mt-0.5 text-[9px] text-slate-500">
                {bookingDetails.timeSlot}
              </p>

            </div>


            <div className="
              rounded-xl
              border border-white/10
              bg-white/[0.03]
              p-3
            ">

              <p className="text-[8px] font-mono uppercase tracking-widest text-slate-600">
                Handover
              </p>

              <p className="mt-1 text-[10px] font-semibold text-white">
                {bookingDetails.deliveryMethod ===
                'Valet Enclosed Transport'
                  ? 'White-Glove Pickup'
                  : 'Studio Drop-off'}
              </p>

              {bookingDetails.deliveryMethod ===
                'Valet Enclosed Transport' && (
                <p className="mt-0.5 text-[9px] text-[#00C2FF]">
                  Enclosed Transport
                </p>
              )}

            </div>

          </div>
        )}

      </div>


      {/* =====================================================
          PAYMENT METHOD
      ===================================================== */}

      <div
        className="
          rounded-3xl
          border border-white/10
          bg-[#0B0D12]
          p-4
          space-y-4
        "
      >

        <div>

          <p className="
            text-[9px]
            font-mono
            font-bold
            tracking-widest
            text-[#00C2FF]
            uppercase
          ">
            PAYMENT METHOD
          </p>

          <h2 className="
            mt-1
            text-sm
            font-heading
            font-extrabold
            text-white
          ">
            Choose how you'd like to pay
          </h2>

        </div>


        {/* Payment Tabs */}

        <div className="grid grid-cols-3 gap-2">

          {/* UPI */}

          <button
            type="button"
            onClick={() => setPaymentMethod('upi')}
            className={`
              rounded-2xl
              border
              p-3
              flex
              flex-col
              items-center
              justify-center
              gap-1.5
              transition-all
              ${
                paymentMethod === 'upi'
                  ? 'border-[#00C2FF] bg-[#00C2FF]/10 text-[#00C2FF]'
                  : 'border-white/10 bg-white/[0.03] text-slate-400'
              }
            `}
          >

            <Smartphone className="w-5 h-5" />

            <span className="text-[9px] font-bold">
              UPI
            </span>

          </button>


          {/* Card */}

          <button
            type="button"
            onClick={() => setPaymentMethod('card')}
            className={`
              rounded-2xl
              border
              p-3
              flex
              flex-col
              items-center
              justify-center
              gap-1.5
              transition-all
              ${
                paymentMethod === 'card'
                  ? 'border-[#00C2FF] bg-[#00C2FF]/10 text-[#00C2FF]'
                  : 'border-white/10 bg-white/[0.03] text-slate-400'
              }
            `}
          >

            <CreditCard className="w-5 h-5" />

            <span className="text-[9px] font-bold">
              Card
            </span>

          </button>


          {/* Net Banking */}

          <button
            type="button"
            onClick={() => setPaymentMethod('netbanking')}
            className={`
              rounded-2xl
              border
              p-3
              flex
              flex-col
              items-center
              justify-center
              gap-1.5
              transition-all
              ${
                paymentMethod === 'netbanking'
                  ? 'border-[#00C2FF] bg-[#00C2FF]/10 text-[#00C2FF]'
                  : 'border-white/10 bg-white/[0.03] text-slate-400'
              }
            `}
          >

            <Wallet className="w-5 h-5" />

            <span className="text-[9px] font-bold">
              Net Banking
            </span>

          </button>

        </div>


        {/* =====================================================
            UPI
        ===================================================== */}

        {paymentMethod === 'upi' && (

          <div className="
            rounded-2xl
            border border-[#00C2FF]/20
            bg-[#00C2FF]/5
            p-4
          ">

            <p className="
              text-[10px]
              font-semibold
              text-white
            ">
              Pay securely using UPI
            </p>

            <p className="
              mt-1
              text-[9px]
              text-slate-500
            ">
              Enter your UPI ID. The live payment gateway will be connected here.
            </p>

            <input
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              placeholder="yourname@upi"
              className="
                mt-3
                w-full
                rounded-xl
                border border-white/10
                bg-black/30
                px-3
                py-3
                text-xs
                text-white
                placeholder:text-slate-600
                outline-none
                focus:border-[#00C2FF]/60
              "
            />

          </div>

        )}


        {/* =====================================================
            CARD
        ===================================================== */}

        {paymentMethod === 'card' && (

          <div className="
            rounded-2xl
            border border-white/10
            bg-white/[0.03]
            p-4
            space-y-3
          ">

            <div>

              <label className="
                block
                mb-1.5
                text-[9px]
                font-mono
                uppercase
                tracking-widest
                text-slate-500
              ">
                Cardholder Name
              </label>

              <input
                type="text"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                placeholder="Name on card"
                className="
                  w-full
                  rounded-xl
                  border border-white/10
                  bg-black/30
                  px-3
                  py-3
                  text-xs
                  text-white
                  placeholder:text-slate-600
                  outline-none
                  focus:border-[#00C2FF]/60
                "
              />

            </div>


            <div>

              <label className="
                block
                mb-1.5
                text-[9px]
                font-mono
                uppercase
                tracking-widest
                text-slate-500
              ">
                Card Number
              </label>

              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="1234 5678 9012 3456"
                inputMode="numeric"
                className="
                  w-full
                  rounded-xl
                  border border-white/10
                  bg-black/30
                  px-3
                  py-3
                  text-xs
                  font-mono
                  text-white
                  placeholder:text-slate-600
                  outline-none
                  focus:border-[#00C2FF]/60
                "
              />

            </div>


            <div className="grid grid-cols-2 gap-3">

              <div>

                <label className="
                  block
                  mb-1.5
                  text-[9px]
                  font-mono
                  uppercase
                  tracking-widest
                  text-slate-500
                ">
                  Expiry
                </label>

                <input
                  type="text"
                  value={cardExpiry}
                  onChange={(e) => setCardExpiry(e.target.value)}
                  placeholder="MM/YY"
                  className="
                    w-full
                    rounded-xl
                    border border-white/10
                    bg-black/30
                    px-3
                    py-3
                    text-xs
                    font-mono
                    text-white
                    placeholder:text-slate-600
                    outline-none
                    focus:border-[#00C2FF]/60
                  "
                />

              </div>


              <div>

                <label className="
                  block
                  mb-1.5
                  text-[9px]
                  font-mono
                  uppercase
                  tracking-widest
                  text-slate-500
                ">
                  CVV
                </label>

                <input
                  type="password"
                  value={cardCvv}
                  onChange={(e) => setCardCvv(e.target.value)}
                  placeholder="•••"
                  className="
                    w-full
                    rounded-xl
                    border border-white/10
                    bg-black/30
                    px-3
                    py-3
                    text-xs
                    font-mono
                    text-white
                    placeholder:text-slate-600
                    outline-none
                    focus:border-[#00C2FF]/60
                  "
                />

              </div>

            </div>

          </div>

        )}


        {/* =====================================================
            NET BANKING
        ===================================================== */}

        {paymentMethod === 'netbanking' && (

          <div className="
            rounded-2xl
            border border-white/10
            bg-white/[0.03]
            p-4
          ">

            <p className="text-[10px] font-semibold text-white">
              Net Banking
            </p>

            <p className="mt-1 text-[9px] text-slate-500">
              You will be securely redirected to your bank when the live
              payment gateway is connected.
            </p>

            <select
              className="
                mt-3
                w-full
                rounded-xl
                border border-white/10
                bg-black/80
                px-3
                py-3
                text-xs
                text-white
                outline-none
                focus:border-[#00C2FF]/60
              "
              defaultValue=""
            >

              <option value="">
                Select your bank
              </option>

              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>Axis Bank</option>
              <option>State Bank of India</option>
              <option>Punjab National Bank</option>
              <option>Kotak Mahindra Bank</option>

            </select>

          </div>

        )}

      </div>


      {/* =====================================================
          SECURITY
      ===================================================== */}

      <div className="
        rounded-2xl
        border border-white/10
        bg-white/[0.02]
        p-3
        flex
        items-center
        gap-3
      ">

        <div className="
          w-9
          h-9
          rounded-xl
          bg-emerald-400/10
          border border-emerald-400/20
          flex
          items-center
          justify-center
          flex-shrink-0
        ">

          <Lock className="w-4 h-4 text-emerald-400" />

        </div>

        <div>

          <p className="text-[10px] font-bold text-slate-300">
            Secure Payment
          </p>

          <p className="mt-0.5 text-[9px] text-slate-600">
            Your payment details are protected during checkout.
          </p>

        </div>

      </div>


      {/* =====================================================
          FINAL TOTAL + PAY
      ===================================================== */}

      <div
        className="
          rounded-3xl
          border border-[#00C2FF]/30
          bg-[#0B0D12]
          p-5
          shadow-[0_0_25px_rgba(0,194,255,0.08)]
        "
      >

        <div className="flex items-end justify-between">

          <div>

            <p className="
              text-[9px]
              font-mono
              uppercase
              tracking-widest
              text-slate-500
            ">
              Amount Payable
            </p>

            <p className="
              mt-1
              text-3xl
              font-heading
              font-black
              text-white
            ">
              ₹{amount.toLocaleString('en-IN')}
            </p>

          </div>

          <div className="text-right">

            <p className="text-[9px] text-slate-600">
              AUTOTRICS
            </p>

            <p className="
              mt-1
              text-[9px]
              font-mono
              text-[#00C2FF]
            ">
              SECURE CHECKOUT
            </p>

          </div>

        </div>


        <button
          id="payment-submit-btn"
          type="button"
          onClick={handlePayment}
          disabled={
            isProcessing ||
            !bookingDetails ||
            amount <= 0 ||
            !paymentReady
          }
          className="
            mt-5
            w-full
            rounded-2xl
            bg-[#00C2FF]
            py-4
            text-xs
            font-heading
            font-extrabold
            uppercase
            tracking-wide
            text-black
            flex
            items-center
            justify-center
            gap-2
            transition-all
            disabled:cursor-not-allowed
            disabled:opacity-30
            enabled:hover:bg-cyan-300
            enabled:hover:shadow-[0_0_30px_rgba(0,194,255,0.25)]
          "
        >

          {isProcessing ? (
            <>
              <span>
                Processing ₹{amount.toLocaleString('en-IN')}...
              </span>
            </>
          ) : (
            <>
              <span>
                Pay ₹{amount.toLocaleString('en-IN')}
              </span>

              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </>
          )}

        </button>

        <p className="
          mt-3
          text-center
          text-[8px]
          font-mono
          uppercase
          tracking-widest
          text-slate-600
        ">
          Payment gateway integration will be connected before launch
        </p>

      </div>


      {/* =====================================================
          SUCCESS MODAL
      ===================================================== */}

      {isSuccessModal && (

        <div className="
          fixed
          inset-0
          z-50
          bg-black/90
          backdrop-blur-md
          flex
          items-center
          justify-center
          p-4
        ">

          <div
            className="
              w-full
              max-w-sm
              rounded-3xl
              border border-[#00C2FF]
              bg-[#0B0D12]
              p-6
              text-center
              shadow-[0_0_50px_rgba(0,194,255,0.3)]
            "
          >

            <div className="
              w-16
              h-16
              rounded-full
              bg-[#00C2FF]/10
              border border-[#00C2FF]/40
              flex
              items-center
              justify-center
              mx-auto
            ">

              <CheckCircle2 className="
                w-8
                h-8
                text-[#00C2FF]
              " />

            </div>


            <p className="
              mt-5
              text-[9px]
              font-mono
              font-bold
              tracking-[0.2em]
              text-[#00C2FF]
              uppercase
            ">
              PAYMENT SUCCESSFUL
            </p>


            <h2 className="
              mt-2
              font-heading
              font-black
              text-xl
              text-white
            ">
              Booking Confirmed
            </h2>


            <p className="
              mt-3
              text-xs
              leading-relaxed
              text-slate-400
            ">
              Your Autotrics detailing appointment has been confirmed.
              Your booking details will be available in your account.
            </p>


            <div className="
              mt-4
              rounded-2xl
              border border-white/10
              bg-white/[0.03]
              p-3
            ">

              <p className="
                text-[8px]
                font-mono
                uppercase
                tracking-widest
                text-slate-600
              ">
                Amount Paid
              </p>

              <p className="
                mt-1
                text-xl
                font-heading
                font-black
                text-[#00C2FF]
              ">
                ₹{amount.toLocaleString('en-IN')}
              </p>

            </div>


            <button
              type="button"
              onClick={() => {
                setIsSuccessModal(false);
                onNavigate('home');
              }}
              className="
                mt-5
                w-full
                rounded-2xl
                bg-[#00C2FF]
                py-3.5
                text-xs
                font-heading
                font-extrabold
                uppercase
                text-black
                flex
                items-center
                justify-center
                gap-2
              "
            >
              Return to Autotrics
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      )}

    </div>
  );
};