import React from 'react';
import { Phone, MessageSquare, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../data/companyData';

interface MobileBottomBarProps {
  onOpenQuoteModal: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenQuoteModal }) => {
  return (
    <aside aria-label="Quick contact actions" className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 py-2.5 shadow-2xl safe-area-bottom">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors active:scale-95"
          aria-label="Call 0315-3615444"
        >
          <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={BUSINESS_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Get Quote */}
        <button
          onClick={onOpenQuoteModal}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors shadow-sm cursor-pointer active:scale-95"
          aria-label="Get a Free Quote"
        >
          <FileText className="w-4 h-4 text-slate-950 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Get Quote</span>
        </button>
      </div>
    </aside>
  );
};
