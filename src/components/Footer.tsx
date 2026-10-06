import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ChevronRight, Clock } from 'lucide-react';
import { PageRoute } from '../types';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/companyData';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const handleNav = (page: PageRoute) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = 2026;

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Pre-Footer Call to Action banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border-b border-slate-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-amber-400 font-semibold text-xs tracking-wider uppercase block mb-1">
              Planning to Relocate in Karachi?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Get a Free Moving Quotation Today
            </h3>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Specialists in DHA Karachi bungalows, high-rise apartments, Malir Cantt, and intercity container shifting.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm px-5 py-3 rounded-lg border border-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              <span>Get Free Quote</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company Profile & Verified Contacts */}
          <div className="space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-0.5"
            >
              <Logo size="md" />
            </button>
            <p className="text-sm text-slate-400 leading-relaxed">
              Professional moving, packing, household shifting, and corporate relocation services. Serving DHA Phase 1–8, Malir Cantt, and all municipal zones of Karachi with reliable transport and skilled crew.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Office #26/02, Old Quaid-e-Azam Square, Near X.20, Adjacent to Edhi Complex, Malir Cantt, Karachi, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-amber-400 font-semibold text-white">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-amber-400 break-all">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{BUSINESS_INFO.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Moving & Packing Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {SERVICES_DATA.slice(0, 8).map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left text-xs sm:text-sm"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>{srv.title}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav('intercity')}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-left text-xs sm:text-sm font-medium text-amber-300/90"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>Intercity Container Moving (Karachi to Nationwide)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Karachi Areas We Serve */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Karachi Coverage
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Prompt shifting coverage across all key residential and commercial sectors:
            </p>
            <div className="flex flex-wrap gap-1.5 text-xs text-slate-400">
              <button
                onClick={() => handleNav('dha-movers')}
                className="bg-slate-900 hover:bg-slate-800 text-amber-300 font-semibold px-2 py-1 rounded border border-amber-800/40 text-left"
              >
                DHA Phase 1 to 8
              </button>
              <button onClick={() => handleNav('areas')} className="bg-slate-900 hover:bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-800">
                Clifton (Blocks 1-9)
              </button>
              <button onClick={() => handleNav('areas')} className="bg-slate-900 hover:bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-800">
                Malir Cantt (HQ)
              </button>
              <button onClick={() => handleNav('areas')} className="bg-slate-900 hover:bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-800">
                PECHS &amp; Tariq Road
              </button>
              <button onClick={() => handleNav('areas')} className="bg-slate-900 hover:bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-800">
                Gulshan-e-Iqbal
              </button>
              <button onClick={() => handleNav('areas')} className="bg-slate-900 hover:bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-800">
                Gulistan-e-Johar
              </button>
              <button onClick={() => handleNav('areas')} className="bg-slate-900 hover:bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-800">
                North Nazimabad
              </button>
              <button onClick={() => handleNav('areas')} className="bg-slate-900 hover:bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-800">
                Federal B Area
              </button>
              <button onClick={() => handleNav('areas')} className="bg-slate-900 hover:bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-800">
                Korangi &amp; Landhi
              </button>
              <button onClick={() => handleNav('areas')} className="bg-slate-900 hover:bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-800">
                Bahadurabad
              </button>
              <button onClick={() => handleNav('areas')} className="bg-slate-900 hover:bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-800">
                Scheme 33 &amp; Maymar
              </button>
              <button onClick={() => handleNav('areas')} className="bg-slate-900 hover:bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-800">
                Bahria Town Karachi
              </button>
            </div>
            <button
              onClick={() => handleNav('areas')}
              className="mt-3 text-xs text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1"
            >
              <span>View all Karachi service areas</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Column 4: Quick Links & Direct Actions */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-amber-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('dha-movers')} className="hover:text-amber-400 font-medium text-slate-200 transition-colors">
                  Movers &amp; Packers in DHA Karachi
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-amber-400 transition-colors">
                  All Moving &amp; Packing Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('areas')} className="hover:text-amber-400 transition-colors">
                  Areas We Serve in Karachi
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('intercity')} className="hover:text-amber-400 transition-colors">
                  Intercity Moving from Karachi
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-amber-400 transition-colors">
                  About Defence Movers &amp; Packers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-amber-400 transition-colors">
                  Contact &amp; Office Location
                </button>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400 block mb-2">Direct WhatsApp Booking:</span>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-semibold py-2.5 px-3 rounded-lg border border-emerald-600/50 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>0315-3615444 on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Terms */}
      <div className="border-t border-slate-900 bg-slate-950 py-6 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved. Registered moving &amp; packing service in Karachi.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>DHA Karachi Specialists</span>
            <span>&bull;</span>
            <span>Malir Cantt Office</span>
            <span>&bull;</span>
            <span>All-Karachi Moving</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
