import React, { useState } from 'react';
import { Phone, Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/companyData';
import { Logo } from './Logo';

interface HeaderProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Clean navigation items without unnecessary badge pills
  const navItems: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'About', page: 'about' },
    { label: 'Areas We Serve', page: 'areas' },
    { label: 'DHA Karachi', page: 'dha-movers' },
    { label: 'Intercity', page: 'intercity' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-lg transition-all">
      {/* Main Navigation Bar (Clean header without top contact strip) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1 transition-transform active:scale-95 cursor-pointer"
            aria-label="Defence Movers & Packers Home"
          >
            <Logo size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-sm font-medium transition-all relative py-1 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 rounded ${
                  currentPage === item.page
                    ? 'text-amber-400 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {currentPage === item.page && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full transition-all" />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-sm font-semibold text-slate-200 hover:text-amber-400 px-3 py-2 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-5 py-2.5 rounded-lg transition-all shadow-md shadow-amber-500/10 flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 active:scale-98"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger & Call Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              aria-label="Call business"
              className="p-2 text-amber-400 bg-slate-800 rounded-lg hover:bg-slate-700 active:scale-95"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-800 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`flex items-center justify-between text-left px-3 py-3 rounded-md text-base font-medium transition-colors cursor-pointer ${
                  currentPage === item.page
                    ? 'bg-slate-800 text-amber-400 font-semibold'
                    : 'text-slate-200 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-4 mt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <div className="text-xs text-slate-400 px-3 flex items-center justify-between">
              <span>Direct Phone:</span>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-amber-400 font-bold">
                {BUSINESS_INFO.phone}
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-medium py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp ({BUSINESS_INFO.phone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
