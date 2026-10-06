import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  Package, 
  Truck, 
  ShieldCheck, 
  Layers, 
  Wrench,
  Sparkles
} from 'lucide-react';
import { PageRoute } from '../types';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/companyData';

interface ServicesPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = selectedCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => {
        if (selectedCategory === 'residential') return ['home-shifting', 'house-moving', 'furniture-shifting'].includes(s.id);
        if (selectedCategory === 'corporate') return ['office-relocation', 'commercial-moving'].includes(s.id);
        if (selectedCategory === 'packing') return ['packing-unpacking', 'loading-unloading'].includes(s.id);
        if (selectedCategory === 'regional') return ['local-karachi-moving', 'dha-moving-services', 'intercity-moving'].includes(s.id);
        return true;
      });

  return (
    <div className="bg-slate-950 text-slate-100">
      {/* Services Header Banner */}
      <section className="bg-slate-900 border-b border-slate-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block mb-2">
              Comprehensive Relocation Solutions
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading tracking-tight">
              Moving &amp; Packing Services in Karachi
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              From residential apartments and DHA luxury villas to commercial offices and intercity transport, Defence Movers &amp; Packers delivers disciplined, damage-free moving across Karachi.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenQuoteModal()}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-3 rounded-lg text-sm flex items-center gap-2 cursor-pointer transition-colors"
              >
                <span>Request Custom Quote</span>
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

      {/* Interactive Service Filter Tabs (Zero-pill discipline, segmented control) */}
      <div className="bg-slate-950 border-b border-slate-800 sticky top-20 z-20 px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto pb-1 sm:pb-0">
          <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-lg border border-slate-800 shrink-0">
            {[
              { id: 'all', label: 'All 10 Services' },
              { id: 'residential', label: 'Home & Furniture' },
              { id: 'corporate', label: 'Office & Commercial' },
              { id: 'packing', label: 'Packing & Crew' },
              { id: 'regional', label: 'DHA & Intercity' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs text-slate-400">
            <span>Official WhatsApp:</span>
            <a href={BUSINESS_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline">
              0315-3615444
            </a>
          </div>
        </div>
      </div>

      {/* Services List Grid */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                id={service.slug}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-lg hover:border-slate-700 hover:shadow-xl transition-all"
              >
                {/* Image Container (5 cols) */}
                <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full bg-slate-950 overflow-hidden group">
                  <img
                    src={service.imageUrl}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover min-h-[260px] transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900" />
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-sm border border-slate-700 px-3 py-1 rounded text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                    Service 0{index + 1}
                  </div>
                </div>

                {/* Service Details (7 cols) */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h2 className="text-2xl font-bold text-white font-heading">
                        {service.title}
                      </h2>
                      <span className="text-xs text-slate-400">
                        Karachi &bull; DHA &amp; Cantt
                      </span>
                    </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.fullDesc}
                  </p>

                  {/* Service Features */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2.5">
                      Key Highlights &amp; Scope
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Materials Included */}
                  <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl mb-6">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 mb-2">
                      <Layers className="w-4 h-4 text-amber-400" />
                      <span>Standard Supplies &amp; Equipment Utilized:</span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                      {service.materialsIncluded.map((mat, i) => (
                        <span key={i} className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300">
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onOpenQuoteModal(service.title)}
                      className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <span>Book {service.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 bg-slate-800 rounded-lg border border-slate-700 flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-400" />
                      <span>{BUSINESS_INFO.phone}</span>
                    </a>
                  </div>

                  <a
                    href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(`Hi, I am interested in inquiring about ${service.title} in Karachi.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>

      {/* Moving Packages Comparison */}
      <section className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block mb-1">
              Flexible Tiers
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Choose the Level of Moving Service You Need
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Whether you want full turnkey packing or just transport with heavy lifting crew, we offer tailored options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tier 1 */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Economy</span>
                <h4 className="text-xl font-bold text-white font-heading">Transport &amp; Loading</h4>
                <p className="text-xs text-slate-400 mt-2 mb-6">
                  Ideal for customers who pack their own boxes and need professional truck transport with loaders.
                </p>
                <ul className="space-y-2 text-xs text-slate-300 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Covered cargo truck for safe transit</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Loading and ground-to-floor carrying</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Basic furniture protective quilts</li>
                  <li className="flex items-center gap-2 text-slate-500 line-through">Packing materials (bubble wrap/cartons)</li>
                  <li className="flex items-center gap-2 text-slate-500 line-through">Carpentry bed &amp; wardrobe dismantling</li>
                </ul>
              </div>
              <button
                onClick={() => onOpenQuoteModal('Transport & Loading Move')}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs py-2.5 rounded-lg border border-slate-700 cursor-pointer"
              >
                Select Transport Only
              </button>
            </div>

            {/* Tier 2 */}
            <div className="bg-slate-950 border-2 border-amber-500/80 rounded-2xl p-6 flex flex-col justify-between relative shadow-xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-3 py-0.5 rounded-full">
                Most Popular for DHA
              </div>
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">Standard Complete</span>
                <h4 className="text-xl font-bold text-white font-heading">Full Packing &amp; Moving</h4>
                <p className="text-xs text-slate-400 mt-2 mb-6">
                  Complete peace of mind. We bring all boxes, bubble wrap, and pack every room before loading.
                </p>
                <ul className="space-y-2 text-xs text-slate-300 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> All cartons, 3-ply bubble wrap &amp; tapes included</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Fragile glassware &amp; kitchenware protection</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> LED TVs, refrigerators &amp; electronics wrapped</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Loading, secure transit, and doorstep unloading</li>
                  <li className="flex items-center gap-2 text-slate-500 line-through">Full box unpacking &amp; cupboard re-arrangement</li>
                </ul>
              </div>
              <button
                onClick={() => onOpenQuoteModal('Full Packing & Moving')}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs py-2.5 rounded-lg cursor-pointer"
              >
                Select Full Packing
              </button>
            </div>

            {/* Tier 3 */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">VIP Turnkey</span>
                <h4 className="text-xl font-bold text-white font-heading">Executive Relocation</h4>
                <p className="text-xs text-slate-400 mt-2 mb-6">
                  Full white-glove shifting with dedicated carpenters, full packing, transit, reassembly, and unpacking.
                </p>
                <ul className="space-y-2 text-xs text-slate-300 mb-6">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Export-grade multi-layer packaging</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Professional carpentry dismantling &amp; reassembly</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Marble and wall protection at both residences</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Dedicated move supervisor on-site throughout</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Unpacking assistance and debris removal</li>
                </ul>
              </div>
              <button
                onClick={() => onOpenQuoteModal('VIP Executive Turnkey Shifting')}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs py-2.5 rounded-lg border border-slate-700 cursor-pointer"
              >
                Select VIP Executive
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
