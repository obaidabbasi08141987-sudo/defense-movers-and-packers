/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageRoute } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { QuoteModal } from './components/QuoteModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { DhaMoversPage } from './pages/DhaMoversPage';
import { AreasPage } from './pages/AreasPage';
import { IntercityPage } from './pages/IntercityPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

const PAGE_SEO_MAP: Record<PageRoute, { title: string; description: string }> = {
  home: {
    title: 'Defence Movers & Packers | Trusted Movers & Packers in DHA Karachi',
    description: 'Professional packing, home shifting, office relocation, and moving services across DHA Karachi and all areas of Karachi. Call 0315-3615444.'
  },
  services: {
    title: 'Moving & Packing Services in Karachi | Defence Movers & Packers',
    description: 'Home shifting, house moving, office relocation, packing materials, carpentry disassembly, and loading crew services across Karachi.'
  },
  'dha-movers': {
    title: 'Movers and Packers in DHA Karachi | Phase 1 to Phase 8 Shifting Specialists',
    description: 'Dedicated movers and packers in DHA Karachi. Villa shifting, high-rise apartment moving at Emaar and Creek Vistas, and office relocation.'
  },
  areas: {
    title: 'Areas We Serve in Karachi | Packers and Movers Across All Karachi Towns',
    description: 'Prompt moving services covering DHA, Clifton, PECHS, Gulshan-e-Iqbal, Gulistan-e-Johar, North Nazimabad, Malir Cantt, and Scheme 33.'
  },
  intercity: {
    title: 'Intercity Movers and Packers Karachi | Nationwide Container Relocation',
    description: 'Long-distance intercity moving from Karachi to Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, and Peshawar with dedicated closed containers.'
  },
  about: {
    title: 'About Defence Movers & Packers | Moving Company Malir Cantt Karachi',
    description: 'Professional moving & packing company located at Old Quaid-e-Azam Square, Malir Cantt, Karachi. Focused on damage-free residential and commercial shifting.'
  },
  contact: {
    title: 'Contact Defence Movers & Packers | Get a Free Quote 0315-3615444',
    description: 'Contact Defence Movers & Packers in Karachi. Office #26/02, Old Quaid-e-Azam Square, Malir Cantt. Call 0315-3615444 or message on WhatsApp.'
  },
  '404': {
    title: '404 Page Not Found | Defence Movers & Packers Karachi',
    description: 'The requested page was not found. Explore our DHA Karachi movers, services, or request a free quote.'
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteServiceTarget, setQuoteServiceTarget] = useState<string | undefined>(undefined);

  // Synchronize hash / URL state
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const path = window.location.pathname.replace('/', '').toLowerCase();

      const candidate = hash || path;

      if (!candidate || candidate === 'home') {
        setCurrentPage('home');
      } else if (candidate === 'services') {
        setCurrentPage('services');
      } else if (candidate === 'dha-movers' || candidate === 'dha-karachi' || candidate === 'dha') {
        setCurrentPage('dha-movers');
      } else if (candidate === 'areas' || candidate === 'areas-we-serve') {
        setCurrentPage('areas');
      } else if (candidate === 'intercity' || candidate === 'intercity-moving') {
        setCurrentPage('intercity');
      } else if (candidate === 'about' || candidate === 'about-us') {
        setCurrentPage('about');
      } else if (candidate === 'contact' || candidate === 'contact-us') {
        setCurrentPage('contact');
      } else if (candidate === '404') {
        setCurrentPage('404');
      } else {
        // Unknown hash or path -> show 404
        setCurrentPage('404');
      }
    };

    handleLocationChange();
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Update dynamic document title and meta description
  useEffect(() => {
    const seo = PAGE_SEO_MAP[currentPage] || PAGE_SEO_MAP.home;
    document.title = seo.title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', seo.description);
    }
  }, [currentPage]);

  const navigateTo = (page: PageRoute) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : `#${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (serviceName?: string) => {
    setQuoteServiceTarget(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setQuoteServiceTarget(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 antialiased selection:bg-amber-400 selection:text-slate-950 pb-16 lg:pb-0">
      {/* Sticky Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main Content View with Smooth Page Transitions */}
      <main className="flex-1 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {currentPage === 'home' && (
              <HomePage
                onNavigate={navigateTo}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            )}
            {currentPage === 'services' && (
              <ServicesPage
                onNavigate={navigateTo}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            )}
            {currentPage === 'dha-movers' && (
              <DhaMoversPage
                onNavigate={navigateTo}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            )}
            {currentPage === 'areas' && (
              <AreasPage
                onNavigate={navigateTo}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            )}
            {currentPage === 'intercity' && (
              <IntercityPage
                onNavigate={navigateTo}
                onOpenQuoteModal={handleOpenQuoteModal}
              />
            )}
            {currentPage === 'about' && (
              <AboutPage
                onNavigate={navigateTo}
                onOpenQuoteModal={() => handleOpenQuoteModal()}
              />
            )}
            {currentPage === 'contact' && (
              <ContactPage
                onNavigate={navigateTo}
              />
            )}
            {currentPage === '404' && (
              <NotFoundPage
                onNavigate={navigateTo}
                onOpenQuoteModal={() => handleOpenQuoteModal()}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Sticky Mobile Bottom Bar: Call | WhatsApp | Get Quote */}
      <MobileBottomBar
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Quote Dialog / Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialService={quoteServiceTarget}
      />
    </div>
  );
}
