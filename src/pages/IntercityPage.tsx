import React from 'react';
import { 
  Truck, 
  MapPin, 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Clock, 
  Boxes 
} from 'lucide-react';
import { PageRoute } from '../types';
import { BUSINESS_INFO, INTERCITY_ROUTES } from '../data/companyData';

interface IntercityPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const IntercityPage: React.FC<IntercityPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="bg-slate-950 text-slate-100">
      {/* Hero Banner */}
      <section className="bg-slate-900 border-b border-slate-800 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider bg-emerald-950/40 border border-emerald-700/50 px-3 py-1 rounded">
                <Truck className="w-3.5 h-3.5" />
                <span>Nationwide Shifting from Karachi</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Intercity Movers &amp; Packers <span className="text-amber-400">Karachi</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Relocating from Karachi to Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, or anywhere in Pakistan. Dedicated closed container trucks, export-grade packaging, and doorstep delivery.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenQuoteModal('Intercity Shifting (Karachi to Nationwide)')}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-lg text-sm sm:text-base flex items-center gap-2 cursor-pointer transition-colors shadow-lg shadow-amber-500/10"
                >
                  <span>Get Intercity Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-3.5 rounded-lg text-sm sm:text-base border border-slate-700 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hi, I need an intercity moving quote from Karachi.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3.5 rounded-lg text-sm sm:text-base flex items-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200"
                  alt="Intercity highway cargo truck for long distance moving from Karachi"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/80 text-xs">
                  <span className="font-bold text-white block">Dedicated Container Moving</span>
                  <span className="text-slate-400 text-[11px]">Direct non-stop transit with zero cargo transshipment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Intercity Routes Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800">
        <div className="max-w-3xl mb-12">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block mb-1">
            Major Corridors
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
            Regular Long-Distance Moving Routes from Karachi
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            We provide dedicated container trucks directly from your doorstep in Karachi (DHA, Malir Cantt, Clifton, etc.) to your destination address.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {INTERCITY_ROUTES.map((route, i) => (
            <div
              key={i}
              className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
                  <Truck className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white font-heading mb-1">
                  {route.destination}
                </h3>
                <span className="text-xs text-slate-400 block mb-3">
                  {route.distance} &bull; {route.duration}
                </span>
                <p className="text-[11px] text-amber-400/90 font-medium">
                  {route.frequency}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800">
                <button
                  onClick={() => onOpenQuoteModal(route.destination)}
                  className="w-full text-xs font-bold text-slate-200 hover:text-amber-400 bg-slate-950 border border-slate-800 hover:border-slate-700 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  Inquire Route
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Packaging & Safety for Long Highway Transit */}
      <section className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block mb-1">
              Safety First
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Heavy-Duty Packaging for 1,000+ Kilometer Highway Transit
            </h2>
            <p className="text-slate-300 text-sm mt-3 leading-relaxed">
              Moving your household 1,200 km on the National Highway (N-5) or Motorway (M-5) involves road vibrations, temperature fluctuations, and extended transit hours. We enforce strict packing standards:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-950 border border-slate-800 p-6 rounded-xl">
              <Boxes className="w-8 h-8 text-amber-400 mb-3" />
              <h4 className="text-white font-bold text-base mb-2 font-heading">
                Multi-Layer Corrugated Crating
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Every sensitive electronic, painting, and mirror is encased in thick bubble cushioning, surrounded by hard corrugated sheets and corner edge guards.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-6 rounded-xl">
              <ShieldCheck className="w-8 h-8 text-amber-400 mb-3" />
              <h4 className="text-white font-bold text-base mb-2 font-heading">
                Waterproof Sealed Containers
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                We utilize fully enclosed weather-proof containers to shield your belongings against highway rain, dust storms, and road debris.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-6 rounded-xl">
              <FileText className="w-8 h-8 text-amber-400 mb-3" />
              <h4 className="text-white font-bold text-base mb-2 font-heading">
                Itemized Inventory Tracking
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Every carton and furniture piece receives a numbered sticker recorded on your move manifest before leaving Karachi, verified upon arrival.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
          Relocating Out of Karachi?
        </h3>
        <p className="text-slate-400 text-sm mt-2 mb-6">
          Get a transparent intercity moving quotation with no transit surprises.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onOpenQuoteModal('Intercity Container Moving')}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-lg text-sm cursor-pointer"
          >
            Get a Free Intercity Quote
          </button>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-3 rounded-lg text-sm border border-slate-700 flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>0315-3615444</span>
          </a>
        </div>
      </section>
    </div>
  );
};
