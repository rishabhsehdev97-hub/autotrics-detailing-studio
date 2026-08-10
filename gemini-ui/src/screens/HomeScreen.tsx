import React from 'react';
import { 
  Sparkles, ShieldCheck, ChevronRight, Calendar, ArrowUpRight, 
  Car, Wrench, Flame, Tag, Check, Award
} from 'lucide-react';
import { Vehicle, DetailService, ScreenId } from '../types';
import { PREMIUM_SERVICES, FEATURED_OFFERS } from '../data/mockData';

interface HomeScreenProps {
  vehicles: Vehicle[];
  onNavigate: (screen: ScreenId) => void;
  onSelectService: (service: DetailService) => void;
  onSelectVehicle: (vehicle: Vehicle) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  vehicles,
  onNavigate,
  onSelectService,
  onSelectVehicle,
}) => {
  const activeVehicle = vehicles[0] || vehicles[1];

  return (
    <div className="w-full space-y-6 pb-24 px-4 pt-3">
      
      {/* 1. PREMIUM HERO */}

<div className="relative overflow-hidden rounded-[32px] border border-cyan-500/20 bg-[#0B0D12]">

  {/* Background Image */}
  <img
    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    alt="Luxury Car"
    className="absolute inset-0 h-full w-full object-cover opacity-30"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

  {/* Content */}
  <div className="relative z-10 p-8">

    <span className="inline-flex rounded-full bg-cyan-500/20 px-4 py-2 text-xs font-bold tracking-[3px] text-cyan-300 uppercase">
      AUTOTRICS EXCLUSIVE
    </span>

    <h1 className="mt-6 text-6xl font-black leading-none text-white">
      Premium
      <br />
      <span className="text-cyan-400">
        PPF
      </span>
    </h1>

    <p className="mt-5 max-w-md text-lg text-slate-300 leading-8">
      Paint Protection Film • Ceramic Coating • Detailing • Car Spa
    </p>

    <div className="mt-8 flex gap-4">

      <button
  onClick={() => onNavigate("booking")}
  className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 px-10 py-4 font-bold text-black shadow-[0_0_30px_rgba(0,194,255,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,194,255,0.6)]"
>
  <span className="relative z-10 flex items-center justify-center gap-2">
    Book Now
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </span>

  <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
</button>

      <button
  onClick={() => onNavigate("ai-quote")}
  className="group relative overflow-hidden rounded-2xl border border-cyan-400/50 bg-black/30 px-10 py-4 font-bold text-cyan-400 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-300 hover:bg-cyan-400/10 hover:shadow-[0_0_30px_rgba(0,194,255,0.35)]"
>
  <span className="relative z-10 flex items-center justify-center gap-2">
    Get AI Quote
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      ✨
    </span>
  </span>
</button>

    </div>

  </div>

</div>
      {/* 2. AI PAINT HEALTH CARD */}

<div
  id="home-ai-recommendation-card"
  onClick={() => onNavigate("ai-quote")}
  className="relative overflow-hidden w-full rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-[#0B1118] to-[#07090D] p-5 cursor-pointer group transition-all duration-300 hover:border-cyan-400/70 hover:shadow-[0_0_30px_rgba(0,194,255,0.15)]"
>

  {/* Cyan glow */}
  <div className="absolute -top-16 -right-16 w-40 h-40 bg-cyan-400/10 blur-3xl rounded-full" />

  {/* Header */}
  <div className="relative flex items-center justify-between">

    <div className="flex items-center gap-3">

      <div className="w-11 h-11 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
        <Sparkles className="w-5 h-5 text-cyan-400" />
      </div>

      <div>
        <p className="text-[10px] font-mono tracking-[2px] text-cyan-400 uppercase font-bold">
          AI Paint Health
        </p>

        <h3 className="text-sm font-bold text-white mt-1">
          {activeVehicle
            ? `${activeVehicle.year} ${activeVehicle.make} ${activeVehicle.model}`
            : "Your Vehicle"}
        </h3>
      </div>

    </div>

    <ChevronRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />

  </div>

  {/* Score */}
<div>
  <p className="text-xs text-slate-400">
    Overall Paint Score
  </p>

  <div className="flex items-end gap-2 mt-1">
    <span className="text-3xl font-black text-white">
      —
    </span>
  </div>

  <p className="text-[10px] text-slate-500 mt-1">
    Inspection required
  </p>
</div>

<div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
  <span className="text-xs font-bold text-slate-400">
    Not Inspected
  </span>
</div>

  {/* Progress */}
  <div className="relative mt-4 h-2 rounded-full bg-white/10 overflow-hidden">

    <div
      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
      style={{ width: "94%" }}
    />

  </div>

  {/* Recommendation */}
  <div className="relative mt-5">

    <p className="text-[10px] uppercase tracking-[2px] font-mono text-slate-500">
      Recommended For Your Vehicle
    </p>

    <div className="mt-3 space-y-2">

      <div className="flex items-center gap-2">
        <span className="w-5 h-5 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 text-xs">
          ✓
        </span>

        <span className="text-xs text-slate-300">
          Stage 2 Paint Correction
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-5 h-5 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 text-xs">
          ✓
        </span>

        <span className="text-xs text-slate-300">
          9H Graphene Ceramic Shield
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-5 h-5 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400 text-xs">
          ✓
        </span>

        <span className="text-xs text-slate-300">
          Front-End PPF Protection
        </span>
      </div>

    </div>

  </div>

  {/* CTA */}
  <div className="relative mt-5 pt-4 border-t border-white/10 flex items-center justify-between">

    <div>
      <p className="text-[10px] text-slate-500 uppercase tracking-wider">
        Estimated Package
      </p>

      <p className="text-lg font-black text-white mt-0.5">
        ₹48,000
      </p>
    </div>

    <button
      onClick={(e) => {
        e.stopPropagation();
        onNavigate("ai-quote");
      }}
      className="px-4 py-2.5 rounded-xl bg-cyan-400 text-black text-xs font-bold uppercase hover:bg-cyan-300 transition"
    >
      View AI Quote
    </button>

  </div>

</div>

      

        {/* 3. STUDIO GARAGE VEHICLES */}

<div className="space-y-4">

  {/* Section Header */}
  <div className="flex items-center justify-between">

    <h2 className="font-heading font-extrabold text-base text-white tracking-wide flex items-center gap-2">
      <Car className="w-4 h-4 text-[#00C2FF]" />
      Studio Garage
    </h2>

    <button
      id="home-view-garage-btn"
      onClick={() => onNavigate("garage")}
      className="text-xs font-mono text-[#00C2FF] hover:text-white transition flex items-center gap-1"
    >
      View All ({vehicles.length})
      <ChevronRight className="w-3.5 h-3.5" />
    </button>

  </div>

  {/* Vehicle Cards */}
  <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">

    {vehicles.slice(0, 3).map((veh) => (

      <div
        key={veh.id}
        id={`home-vehicle-card-${veh.id}`}
        onClick={() => {
          onSelectVehicle(veh);
          onNavigate("garage");
        }}
        className="group min-w-[290px] overflow-hidden rounded-3xl border border-white/10 bg-[#0B0D12] cursor-pointer transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,194,255,0.12)]"
      >

        {/* Vehicle Image */}
        <div className="relative h-44 overflow-hidden">

          <img
            src={veh.imageUrl}
            alt={`${veh.make} ${veh.model}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />

          {/* Dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Status */}
          <div className="absolute top-3 right-3">

            <span className="rounded-full border border-emerald-400/30 bg-black/70 px-2.5 py-1 text-[9px] font-bold text-emerald-400 backdrop-blur-md">
              {veh.status}
            </span>

          </div>

          {/* Vehicle Name */}
          <div className="absolute bottom-3 left-4 right-4">

            <p className="text-[10px] font-mono text-cyan-400">
              {veh.year}
            </p>

            <h3 className="text-base font-black text-white">
              {veh.make} {veh.model}
            </h3>

          </div>

        </div>

        {/* Vehicle Details */}
        <div className="p-4">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-[9px] uppercase tracking-widest text-slate-500">
                Finish
              </p>

              <p className="text-xs text-slate-300 mt-1">
                {veh.finish}
              </p>
            </div>

            <div className="text-right">

              <p className="text-[9px] uppercase tracking-widest text-slate-500">
                Paint Score
              </p>

              <p className="text-sm font-black text-cyan-400 mt-1">
  {veh.paintHealthScore > 0
    ? `${veh.paintHealthScore}%`
    : 'Not Inspected'}
</p>

            </div>

          </div>

          {/* View Details */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">

            <span className="text-[10px] font-mono text-slate-500">
              STUDIO GARAGE
            </span>

            <span className="text-xs font-bold text-cyan-400 flex items-center gap-1">
              View Details
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>

          </div>

        </div>

      </div>

    ))}
</div>
</div>
  

     {/* 4. PREMIUM STUDIO SERVICES */}

<div className="space-y-4">

  {/* Section Header */}
  <div className="flex items-end justify-between">

    <div>
      <h2 className="font-heading font-extrabold text-base text-white tracking-wide flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-[#00C2FF]" />
        Premium Studio Services
      </h2>

      <p className="text-[11px] text-slate-400 mt-1">
        Professional care for luxury and everyday vehicles
      </p>
    </div>

    <span className="text-[9px] font-mono text-[#00C2FF] uppercase tracking-widest">
      7 Services
    </span>

  </div>


  {/* Service Cards */}
  <div className="grid grid-cols-2 gap-3">

    {PREMIUM_SERVICES.map((serv) => (

      <div
        key={serv.id}
        id={`service-card-${serv.id}`}
        onClick={() => {
  onSelectService(serv);
  onNavigate('service-details');
}}
        className="
          group
          min-h-[165px]
          rounded-2xl
          border border-white/10
          bg-[#0B0D12]
          p-4
          cursor-pointer
          flex
          flex-col
          transition-all
          duration-300
          hover:border-[#00C2FF]/50
          hover:bg-[#0D1118]
          hover:shadow-[0_0_20px_rgba(0,194,255,0.08)]
        "
      >

        {/* Service Icon */}
        <div
          className="
            w-9
            h-9
            rounded-xl
            bg-[#00C2FF]/10
            border border-[#00C2FF]/20
            flex
            items-center
            justify-center
            mb-3
            flex-shrink-0
          "
        >
          <Sparkles className="w-4 h-4 text-[#00C2FF]" />
        </div>


        {/* Service Name */}
        <h3
          className="
            font-heading
            font-bold
            text-sm
            leading-tight
            text-white
            min-h-[32px]
            group-hover:text-[#00C2FF]
            transition-colors
          "
        >
          {serv.name}
        </h3>


        {/* Price */}
        <div className="mt-2">

          <p className="text-[8px] font-mono uppercase tracking-widest text-slate-500">
            Service Rate
          </p>

          <p className="mt-1 text-lg leading-tight font-black text-white">
            ₹{serv.price.toLocaleString('en-IN')}
          </p>

        </div>


        {/* Bottom Action */}
        <div
          className="
            mt-auto
            pt-3
            border-t
            border-white/10
            flex
            items-center
            justify-between
          "
        >

          {/* Service Type */}
          {serv.popular ? (

            <span
              className="
                text-[8px]
                font-mono
                font-bold
                tracking-wider
                text-[#00C2FF]
                uppercase
              "
            >
              FLAGSHIP
            </span>

          ) : (

            <span
              className="
                text-[8px]
                font-mono
                font-bold
                tracking-wider
                text-slate-600
                uppercase
              "
            >
              PREMIUM
            </span>

          )}


          {/* Book */}
          <span
            className="
              flex
              items-center
              gap-1
              text-[10px]
              font-bold
              text-[#00C2FF]
              group-hover:translate-x-1
              transition-transform
            "
          >
            Book
            <ChevronRight className="w-3 h-3" />
          </span>

        </div>

      </div>

    ))}

  </div>

</div>

{/* 5. FEATURED VIP OFFERS */}

<div className="space-y-4">

  {/* Section Header */}
  <div className="flex items-center justify-between">

    <div>
      <h2 className="font-heading font-extrabold text-base text-white tracking-wide flex items-center gap-2">
        <Tag className="w-4 h-4 text-[#00C2FF]" />
        Featured VIP Offers
      </h2>

      <p className="text-[11px] text-slate-400 mt-1">
        Exclusive packages for Autotrics customers
      </p>
    </div>

    <span className="text-[9px] font-mono text-[#00C2FF] uppercase tracking-widest">
      VIP
    </span>

  </div>


  {/* Offer Cards */}
  <div className="space-y-3">

    {FEATURED_OFFERS.length > 0 && (
  <section className="mt-8">
    <div className="flex items-end justify-between mb-4">
      <div>
        <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-semibold">
          AUTOTRICS
        </p>

        <h2 className="text-xl font-semibold text-white mt-1">
          Featured Offers
        </h2>
      </div>
    </div>

    <div className="grid gap-4">
      {FEATURED_OFFERS.map((offer) => (
        <div
          key={offer.id}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900"
        >
          {offer.bgUrl && (
            <img
              src={offer.bgUrl}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
          )}

          <div className="relative p-5">
            <h3 className="text-lg font-semibold text-white">
              {offer.title}
            </h3>

            <p className="text-sm text-zinc-300 mt-2">
              {offer.discount}
            </p>

            {offer.code && (
              <p className="text-xs text-zinc-500 mt-3">
                Offer code: {offer.code}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
)}

  </div>

</div>


{/* 6. WHITE-GLOVE VALET TRANSPORT */}

<div
  className="
    relative
    overflow-hidden
    rounded-3xl
    border border-[#00C2FF]/30
    bg-[#0B0D12]
    p-5
    shadow-[0_0_25px_rgba(0,194,255,0.08)]
  "
>

  {/* Background Glow */}
  <div
    className="
      absolute
      -right-16
      -top-16
      w-40
      h-40
      rounded-full
      bg-[#00C2FF]/10
      blur-3xl
      pointer-events-none
    "
  />

  <div className="relative z-10">

    {/* Header */}
    <div className="flex items-center gap-3">

      <div
        className="
          w-11
          h-11
          rounded-2xl
          bg-[#00C2FF]/10
          border border-[#00C2FF]/30
          flex
          items-center
          justify-center
          flex-shrink-0
        "
      >
        <Calendar className="w-5 h-5 text-[#00C2FF]" />
      </div>

      <div>

        <p
          className="
            text-[9px]
            font-mono
            font-bold
            tracking-[0.18em]
            text-[#00C2FF]
            uppercase
          "
        >
          WHITE-GLOVE SERVICE
        </p>

        <h3
          className="
            mt-1
            font-heading
            font-extrabold
            text-base
            text-white
          "
        >
          We Pick Up. We Protect. We Deliver.
        </h3>

      </div>

    </div>


    {/* Description */}
    <p
      className="
        mt-4
        text-xs
        leading-relaxed
        text-slate-400
      "
    >
      Enclosed air-ride vehicle transport directly from your doorstep
      to Autotrics Detailing Studio and safely back to you.
    </p>


    {/* Service Features */}
    <div className="mt-4 grid grid-cols-2 gap-2">

      <div
        className="
          rounded-xl
          border border-white/10
          bg-white/[0.03]
          px-3
          py-2.5
        "
      >

        <p
          className="
            text-[8px]
            font-mono
            uppercase
            tracking-widest
            text-slate-500
          "
        >
          Transport
        </p>

        <p className="mt-1 text-[10px] font-semibold text-white">
          Enclosed Carrier
        </p>

      </div>


      <div
        className="
          rounded-xl
          border border-white/10
          bg-white/[0.03]
          px-3
          py-2.5
        "
      >

        <p
          className="
            text-[8px]
            font-mono
            uppercase
            tracking-widest
            text-slate-500
          "
        >
          Handling
        </p>

        <p className="mt-1 text-[10px] font-semibold text-white">
          White-Glove Care
        </p>

      </div>

    </div>


    {/* Booking Button */}
    <button
      id="home-quick-valet-booking-btn"
      onClick={() => onNavigate('booking')}
      className="
        mt-4
        w-full
        rounded-2xl
        bg-[#00C2FF]
        py-3.5
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
        hover:bg-cyan-300
        hover:shadow-[0_0_25px_rgba(0,194,255,0.25)]
      "
    >
      Book White-Glove Valet
      <ChevronRight className="w-4 h-4" />
    </button>

  </div>

</div>

</div>

);
};