import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Home, 
  Truck, 
  Package, 
  HelpCircle,
  FileText
} from 'lucide-react';
import { PageRoute } from '../types';
import { BUSINESS_INFO, DHA_PHASES_DATA } from '../data/companyData';
import { QuoteForm } from '../components/QuoteForm';

interface DhaMoversPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const DhaMoversPage: React.FC<DhaMoversPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="bg-slate-950 text-slate-100">
      {/* DHA Hero Header */}
      <section className="bg-slate-900 border-b border-slate-800 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider bg-amber-950/40 border border-amber-700/50 px-3 py-1 rounded">
                <MapPin className="w-3.5 h-3.5" />
                <span>Primary Local Specialists &bull; Phase 1 to Phase 8</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Movers and Packers in <span className="text-amber-400">DHA Karachi</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Specialized house shifting, villa relocation, and corporate office moving across all sectors of Defence Housing Authority Karachi. Damage-free packing, trained carpenters, and seamless Cantonment checkpoint access.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenQuoteModal('DHA Karachi Shifting')}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-lg text-sm sm:text-base flex items-center gap-2 cursor-pointer transition-colors shadow-lg shadow-amber-500/10"
                >
                  <span>Book DHA Shifting Quote</span>
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
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent('Hi, I need movers and packers in DHA Karachi.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3.5 rounded-lg text-sm sm:text-base flex items-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
                <span>Phase 1 to Phase 8 Daily</span>
                <span>&bull;</span>
                <span>Emaar &amp; Creek Vistas High-Rises</span>
                <span>&bull;</span>
                <span>Free On-Site Survey</span>
              </div>
            </div>

            {/* Right Photo Preview */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200"
                  alt="Modern DHA Karachi residential house and villa shifting"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-700/80 text-xs">
                  <span className="font-bold text-white block">DHA Bungalow &amp; Villa Specialists</span>
                  <span className="text-slate-400 text-[11px]">500, 1000 &amp; 2000 Sq Yd Houses Shifting across Defence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Content: Why DHA Shifting Requires Specialized Movers */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800">
        <div className="max-w-3xl mb-12">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block mb-1">
            Local Authority &amp; Infrastructure Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
            Why Moving in DHA Karachi Requires a Dedicated Team
          </h2>
          <p className="text-slate-300 text-sm mt-3 leading-relaxed">
            Relocating within or into Defence Housing Authority Karachi differs significantly from shifting in older downtown quarters. DHA features strict Cantonment Board bylaws, gated entries, designated heavy vehicle entry hours, modern high-rise security protocols, and high-value designer furnishings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold text-base mb-2 font-heading">
              DHA Security &amp; Gate Passes
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We ensure our vehicles and moving crews carry proper documentation, CNICs, and gate clearance for smooth passage through Cantonment and DHA checkpoints, including Phase 8 and Malir Cantt corridors.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold text-base mb-2 font-heading">
              High-Rise Apartment Logistics
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              For moves into Emaar Crescent Bay, Creek Vistas, and Defence Regency, we schedule moves with facility building managers, protect service elevator walls, and navigate basement parking clearances.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold text-base mb-2 font-heading">
              High-Value Furnishing Care
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We deploy export-grade 3-ply bubble wrap, corner edge protectors, and corrugated padding to shield imported Italian marble dining tables, chandeliers, fine glass cabinets, and luxury leather sofa sets.
            </p>
          </div>
        </div>
      </section>

      {/* DHA Phase 1 to Phase 8 Comprehensive Breakdown */}
      <section className="bg-slate-900/60 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block mb-1">
              Complete Locality Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Serving Every Sector from DHA Phase 1 to Phase 8
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Whether you are moving within the same phase or shifting from DHA to Clifton, PECHS, Gulshan, or Malir Cantt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {DHA_PHASES_DATA.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-bold text-white font-heading">
                      {item.phase}
                    </h3>
                    <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider bg-amber-950/40 border border-amber-800/40 px-2 py-0.5 rounded">
                      Phase 0{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-[11px] font-semibold text-slate-400 block mb-0.5">Key Avenues:</span>
                  <span className="text-xs text-slate-200 line-clamp-2">{item.popularAreas}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specific DHA Shifting Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800">
        <div className="max-w-3xl mb-10">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block mb-1">
            Tailored Scenarios
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
            DHA Shifting Scenarios We Specialize In
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Every home and commercial transition has distinct requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base font-heading">
              <Home className="w-5 h-5 text-amber-400" />
              <span>Local DHA-to-DHA Relocations</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Moving from Phase 2 to Phase 6 or Phase 5 to Phase 8? We manage swift same-day shifting. Our trucks take optimal interior routes, avoiding bottle-necks during peak commercial or school run hours.
            </p>
            <ul className="space-y-1 text-xs text-slate-400 pt-1">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Same-day completion for most villas</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Multiple truck round-trips if needed</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base font-heading">
              <Building2 className="w-5 h-5 text-amber-400" />
              <span>DHA to Other Karachi Areas &amp; Cantt</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Shifting from DHA to Clifton, PECHS, Gulshan, Malir Cantt, or Bahria Town Karachi. We coordinate timing to avoid Karachi rush hour on Shahrah-e-Faisal and Korangi Road.
            </p>
            <ul className="space-y-1 text-xs text-slate-400 pt-1">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Seamless inter-neighborhood transport</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Secure closed container options</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base font-heading">
              <Building2 className="w-5 h-5 text-amber-400" />
              <span>DHA Commercial &amp; Corporate Office Relocation</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Corporate offices and boutique firms in 26th Street, Bukhari Commercial, Shahbaz Commercial, and Ittehad. We provide weekend shifting with IT server protection and modular desk reassembly.
            </p>
            <ul className="space-y-1 text-xs text-slate-400 pt-1">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Weekend &amp; night shift execution</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Zero business interruption focus</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base font-heading">
              <Package className="w-5 h-5 text-amber-400" />
              <span>Luxury Furniture &amp; Fragile Packing Only</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Need specialized packing for your dining chandelier, fine bone china, framed oil paintings, or grand piano? Our master packers supply multi-layer protective materials and custom wooden crates.
            </p>
            <ul className="space-y-1 text-xs text-slate-400 pt-1">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> High-grade 3-ply bubble wrapping</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Professional carpentry team</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DHA Shifting Quotation Form Section */}
      <section className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block mb-1">
              DHA Shifting Request
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Get a Free Quote for DHA Karachi
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Share your pickup phase, destination, and moving requirements. We will provide a transparent quotation directly on WhatsApp.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <QuoteForm initialMovingType="Home Shifting" initialPickup="DHA Karachi" compact={false} />
          </div>
        </div>
      </section>

      {/* DHA FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block mb-1">
            DHA Moving Advice
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
            DHA Karachi Moving FAQs
          </h2>
        </div>

        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h4 className="text-white font-bold text-sm sm:text-base flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>What are the truck timing regulations in DHA Karachi?</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 pl-6">
              DHA allows moving trucks throughout residential zones during normal daytime hours (typically 8:00 AM to 8:00 PM). For heavy multi-axle commercial containers, specific night timings may apply. Our team manages schedules in full accordance with DHA guidelines.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h4 className="text-white font-bold text-sm sm:text-base flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Do you provide shifting for high-rise towers in Phase 8 (Emaar / Creek)?</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 pl-6">
              Yes. We have regular experience moving residents into Creek Vistas, Emaar Crescent Bay, and luxury residential complexes. We coordinate with management offices, wrap elevators, and ensure strict adherence to building rules.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h4 className="text-white font-bold text-sm sm:text-base flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>How soon can you inspect my villa in DHA for a survey?</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2 pl-6">
              Our supervisor can visit your premises anywhere in DHA Phase 1 through 8 on the same day or next day for an on-site evaluation, or you can send photos and video walk-throughs via WhatsApp for a quote within minutes.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => onOpenQuoteModal('DHA Karachi Shifting')}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-lg text-sm cursor-pointer shadow-md"
          >
            Request Free Quote for DHA Move
          </button>
        </div>
      </section>
    </div>
  );
};
