import React from 'react';
import { Home, ArrowRight, Phone, MessageSquare, MapPin } from 'lucide-react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/companyData';

interface NotFoundPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <div className="inline-block bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full text-xs font-bold text-amber-400 uppercase tracking-widest">
          Error 404 &bull; Page Not Found
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight">
          Oops! That Moving Route Doesn&apos;t Exist
        </h1>

        <p className="text-slate-300 text-sm leading-relaxed max-w-md mx-auto">
          The page you are looking for may have been moved or updated. Don&apos;t worry—our moving services in DHA Karachi and across the city are always active.
        </p>

        {/* Useful Navigation Links */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-sm flex items-center gap-2 cursor-pointer transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </button>

          <button
            onClick={() => onNavigate('dha-movers')}
            className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-4 py-2.5 rounded-lg text-sm border border-slate-800 transition-colors cursor-pointer"
          >
            <span>DHA Karachi Movers</span>
          </button>

          <button
            onClick={() => onNavigate('services')}
            className="bg-slate-900 hover:bg-slate-800 text-slate-300 px-4 py-2.5 rounded-lg text-sm border border-slate-800 transition-colors cursor-pointer"
          >
            <span>All Services</span>
          </button>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-400">
          <span>Need immediate shifting assistance?</span>
          <div className="flex items-center gap-3 font-semibold text-slate-300">
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-amber-400 hover:underline flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-slate-700">&bull;</span>
            <a href={BUSINESS_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline flex items-center gap-1">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
