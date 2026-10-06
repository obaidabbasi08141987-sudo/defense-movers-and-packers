import React from 'react';
import { MapPin, Navigation, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/companyData';

export const GoogleMapSection: React.FC = () => {
  const mapEmbedUrl = `https://maps.google.com/maps?q=Old+Quaid-e-Azam+Square,+Near+X.20,+Adjacent+to+Edhi+Complex,+Malir+Cantt,+Karachi,+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section className="bg-slate-900 border-t border-b border-slate-800 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block mb-1">
            Head Office Location
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
            Visit Our Malir Cantt Office
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Strategically positioned near major Karachi transit corridors to serve DHA, Clifton, Malir Cantt, and all municipal zones promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Office Address & Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg">
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                  Registered Address
                </span>
                <h3 className="text-xl font-bold text-white font-heading">
                  Defence Movers &amp; Packers
                </h3>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5 text-amber-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white text-xs uppercase tracking-wider mb-0.5">
                      Physical Address
                    </strong>
                    <p className="text-slate-300 leading-snug">
                      Office #26/02, Old Quaid-e-Azam Square, Near X.20, Adjacent to Edhi Complex, Malir Cantt, Karachi, Pakistan
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Landmark: Near X.20 &bull; Adjacent to Edhi Complex
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white text-xs uppercase tracking-wider mb-0.5">
                      Phone &amp; WhatsApp
                    </strong>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-white hover:text-amber-400 font-semibold transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white text-xs uppercase tracking-wider mb-0.5">
                      Official Email
                    </strong>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-slate-300 hover:text-amber-400 transition-colors"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white text-xs uppercase tracking-wider mb-0.5">
                      Operating Hours
                    </strong>
                    <p className="text-slate-300">{BUSINESS_INFO.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
              <a
                href={BUSINESS_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm py-3 px-4 rounded-lg transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
              </a>
              <p className="text-center text-[11px] text-slate-400">
                Staff dispatch and truck fleet available across DHA Phase 1-8 daily.
              </p>
            </div>
          </div>

          {/* Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-800 shadow-xl min-h-[380px] relative bg-slate-950">
            <iframe
              title="Defence Movers & Packers Office Map Location"
              src={mapEmbedUrl}
              className="w-full h-full min-h-[380px] lg:min-h-[460px] border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay badge */}
            <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-3 py-1.5 rounded-lg text-xs text-white shadow-md flex items-center gap-2 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold">Malir Cantt Head Office &bull; Karachi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
