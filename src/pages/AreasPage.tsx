import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Building2, 
  Compass, 
  Clock 
} from 'lucide-react';
import { PageRoute } from '../types';
import { KARACHI_AREAS_DATA, BUSINESS_INFO } from '../data/companyData';

interface AreasPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: (areaName?: string) => void;
}

export const AreasPage: React.FC<AreasPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'DHA', 'South Karachi', 'East Karachi', 'Central Karachi', 'Malir & Cantt', 'Highway & Suburbs'];

  const filteredAreas = selectedFilter === 'All'
    ? KARACHI_AREAS_DATA
    : KARACHI_AREAS_DATA.filter(a => a.category === selectedFilter);

  return (
    <div className="bg-slate-950 text-slate-100">
      {/* Header Banner */}
      <section className="bg-slate-900 border-b border-slate-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block mb-2">
              City-Wide Coverage
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
              Areas We Serve Across Karachi
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              Based at our Malir Cantt office with daily shifting teams active across DHA Karachi, Clifton, and all major residential and commercial sectors.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenQuoteModal('Karachi Shifting')}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-3 rounded-lg text-sm flex items-center gap-2 cursor-pointer transition-colors"
              >
                <span>Get a Free Moving Quote</span>
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

      {/* Filter Tabs (Zero-pill discipline) */}
      <div className="bg-slate-950 border-b border-slate-800 sticky top-20 z-20 px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-lg border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer shrink-0 ${
                  selectedFilter === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Areas Grid */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredAreas.map((area, index) => (
              <motion.div
                key={area.name}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 hover:-translate-y-1 hover:shadow-xl transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white font-heading group-hover:text-amber-400 transition-colors">
                      {area.name}
                    </h3>
                    <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded">
                      {area.category}
                    </span>
                  </div>

                  <div className="text-xs text-amber-400/90 font-medium mb-3">
                    {area.popularFor}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {area.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <button
                    onClick={() => onOpenQuoteModal(`Shifting in ${area.name}`)}
                    className="font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Book move in {area.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(`Hi, I need moving services in ${area.name}, Karachi.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-emerald-400"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Local Karachi Moving Logistics Details */}
      <section className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block mb-1">
              Smart Transit Strategy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Navigating Karachi Traffic &amp; Route Logistics
            </h2>
            <p className="text-slate-300 text-sm mt-3 leading-relaxed">
              Moving across Karachi requires deep knowledge of heavy traffic hours, flyovers, ongoing construction corridors, and cantonment entry hours. Our dispatch planners choose the most reliable times and routes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-950 border border-slate-800 p-6 rounded-xl space-y-2">
              <Clock className="w-6 h-6 text-amber-400 mb-2" />
              <h4 className="text-white font-bold text-sm font-heading">Early Morning Departures</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We recommend starting moves at 8:00 AM to beat Shahrah-e-Faisal, University Road, and Korangi Road bottlenecks.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-6 rounded-xl space-y-2">
              <Compass className="w-6 h-6 text-amber-400 mb-2" />
              <h4 className="text-white font-bold text-sm font-heading">Optimal Corridor Routing</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Using Lyari Expressway, Malir Expressway corridors, and Sunset Boulevard to deliver swift, direct transits.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-6 rounded-xl space-y-2">
              <Building2 className="w-6 h-6 text-amber-400 mb-2" />
              <h4 className="text-white font-bold text-sm font-heading">Building Management Passes</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We assist customers with security letters and management approvals required by gated societies and high-rise apartments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
