import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  Package, 
  Truck, 
  Layers, 
  Wrench,
  Clock,
  Compass
} from 'lucide-react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/companyData';
import { GoogleMapSection } from '../components/GoogleMapSection';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="bg-slate-950 text-slate-100">
      {/* Header Banner */}
      <section className="bg-slate-900 border-b border-slate-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block mb-2">
              About Our Company
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
              Defence Movers &amp; Packers
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              A dedicated packing and moving service provider based in Karachi. We specialize in household shifting, apartment moving, and office relocations across DHA Karachi and all Karachi neighborhoods.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={onOpenQuoteModal}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-3 rounded-lg text-sm flex items-center gap-2 cursor-pointer transition-colors"
              >
                <span>Request a Free Moving Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-3 rounded-lg text-sm border border-slate-700 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Business Profile */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block">
              Operational Focus &amp; Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Built on Careful Handling &amp; Honest Communication
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Moving your home or corporate workplace is one of the most critical transitions a family or organization undertakes. At Defence Movers &amp; Packers, our objective is to eliminate shifting anxiety by deploying disciplined crews, durable packaging supplies, and punctual vehicle scheduling.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Headquartered at our physical office in Malir Cantt, Karachi, we maintain dedicated teams operating daily across Defence Housing Authority (DHA Phases 1 through 8), Clifton, PECHS, Gulshan-e-Iqbal, and all municipal zones. We also facilitate reliable nationwide intercity container relocations.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 bg-slate-900 border border-slate-800 p-3.5 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-wider">
                    Transparent Upfront Pricing
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Clear quotations based on actual load size, distance, and chosen packing materials with no sudden hidden surcharges on moving day.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900 border border-slate-800 p-3.5 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-wider">
                    Full Packaging Materials
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    We bring brand new corrugated cartons, 3-ply heavy bubble wrap, furniture quilts, and stretch wrap rolls directly to your doorstep.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-900 border border-slate-800 p-3.5 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-wider">
                    Dedicated Carpentry Equipment
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Trained carpenters equipped with power tools to dismantle complex double beds, wardrobes, and modular desks safely.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-white font-heading border-b border-slate-800 pb-3">
              Official Business Information
            </h3>

            <div className="space-y-4 text-xs text-slate-300">
              <div>
                <span className="text-slate-400 uppercase tracking-wider block text-[10px] font-semibold mb-0.5">
                  Business Entity
                </span>
                <span className="text-sm font-bold text-white">
                  {BUSINESS_INFO.name}
                </span>
              </div>

              <div>
                <span className="text-slate-400 uppercase tracking-wider block text-[10px] font-semibold mb-0.5">
                  Registered Office Address
                </span>
                <p className="text-slate-200 leading-relaxed">
                  {BUSINESS_INFO.address}
                </p>
              </div>

              <div>
                <span className="text-slate-400 uppercase tracking-wider block text-[10px] font-semibold mb-0.5">
                  Contact Phone &amp; WhatsApp
                </span>
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-amber-400 font-bold text-sm hover:underline">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div>
                <span className="text-slate-400 uppercase tracking-wider block text-[10px] font-semibold mb-0.5">
                  Electronic Mail
                </span>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-slate-200 hover:text-amber-400">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div>
                <span className="text-slate-400 uppercase tracking-wider block text-[10px] font-semibold mb-0.5">
                  Business Schedule
                </span>
                <span className="text-slate-200">
                  {BUSINESS_INFO.workingHours}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-lg text-xs transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Checklist Guide for Customers */}
      <section className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block mb-1">
              Customer Moving Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Helpful Moving Checklist Before Shifting Day
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Practical steps to make your house or office relocation in Karachi effortless:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl">
              <span className="text-amber-400 font-extrabold text-sm mb-2 block">Step 1: 3 Days Prior</span>
              <h4 className="text-white font-bold text-sm mb-1 font-heading">Segregate Essentials</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pack personal documents, jewelry, passports, medicines, and phone chargers in a personal bag you carry personally.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl">
              <span className="text-amber-400 font-extrabold text-sm mb-2 block">Step 2: 1 Day Prior</span>
              <h4 className="text-white font-bold text-sm mb-1 font-heading">Defrost Refrigerator</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Empty and unplug your refrigerator and deep freezer 12 hours before moving so moisture does not leak inside moving trucks.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl">
              <span className="text-amber-400 font-extrabold text-sm mb-2 block">Step 3: Moving Morning</span>
              <h4 className="text-white font-bold text-sm mb-1 font-heading">Building &amp; Gate Access</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Inform your DHA or apartment building security guards so the cargo truck has designated parking and cargo elevator access.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl">
              <span className="text-amber-400 font-extrabold text-sm mb-2 block">Step 4: At Destination</span>
              <h4 className="text-white font-bold text-sm mb-1 font-heading">Room Guidance</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Guide our crew to place labeled boxes and reassemble beds directly in the respective bedrooms, saving you hours of reorganization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <GoogleMapSection />
    </div>
  );
};
