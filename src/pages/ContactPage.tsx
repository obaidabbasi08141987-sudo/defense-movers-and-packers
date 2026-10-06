import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  Navigation,
  Calendar,
  Truck
} from 'lucide-react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/companyData';
import { QuoteForm } from '../components/QuoteForm';
import { GoogleMapSection } from '../components/GoogleMapSection';

interface ContactPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-950 text-slate-100">
      {/* Header Banner */}
      <section className="bg-slate-900 border-b border-slate-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block mb-2">
              Get In Touch &bull; Request Quotation
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
              Contact Defence Movers &amp; Packers
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Serving DHA Karachi Phase 1–8, Malir Cantt, Clifton, and all Karachi locations. Reach out via WhatsApp, phone, or our online form for a prompt moving quotation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form Container (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="mb-6">
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block mb-1">
                Direct Moving Form
              </span>
              <h2 className="text-2xl font-bold text-white font-heading">
                Request a Free Moving Quote
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Fill in your pickup and destination details. Upon submission, your details will be formatted and opened on WhatsApp to 0315-3615444 for instant coordinator response.
              </p>
            </div>

            <QuoteForm compact={false} />
          </div>

          {/* Contact Details & Direct Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick WhatsApp & Call card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-lg space-y-4">
              <h3 className="text-lg font-bold text-white font-heading border-b border-slate-800 pb-3 flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Direct Contact Channels</span>
              </h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div>
                  <span className="text-slate-400 uppercase tracking-wider block text-[10px] font-semibold mb-1">
                    Direct Phone Call
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-base font-extrabold text-white hover:text-amber-400 transition-colors flex items-center gap-2 font-heading"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>{BUSINESS_INFO.phone}</span>
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">Available daily 8:00 AM – 10:00 PM for urgent inquiries</p>
                </div>

                <div>
                  <span className="text-slate-400 uppercase tracking-wider block text-[10px] font-semibold mb-1">
                    WhatsApp Chat Support
                  </span>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2.5 rounded-lg text-xs transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open WhatsApp (0315-3615444)</span>
                  </a>
                </div>

                <div>
                  <span className="text-slate-400 uppercase tracking-wider block text-[10px] font-semibold mb-1">
                    Email Correspondence
                  </span>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-sm text-slate-200 hover:text-amber-400 transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-amber-400" />
                    <span className="break-all">{BUSINESS_INFO.email}</span>
                  </a>
                </div>

                <div>
                  <span className="text-slate-400 uppercase tracking-wider block text-[10px] font-semibold mb-1">
                    Operating Schedule
                  </span>
                  <div className="flex items-center gap-2 text-slate-200">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>{BUSINESS_INFO.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Address Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 shadow-lg space-y-4">
              <h3 className="text-lg font-bold text-white font-heading border-b border-slate-800 pb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Malir Cantt Head Office</span>
              </h3>

              <div className="text-xs text-slate-300 space-y-2">
                <p className="leading-relaxed">
                  {BUSINESS_INFO.address}
                </p>
                <div className="pt-2">
                  <a
                    href={BUSINESS_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>View Map Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <GoogleMapSection />
    </div>
  );
};
