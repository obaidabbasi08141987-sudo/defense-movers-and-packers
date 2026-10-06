import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  ShieldCheck, 
  Package, 
  Truck, 
  Home, 
  Building2, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  Boxes,
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import { PageRoute } from '../types';
import { BUSINESS_INFO, SERVICES_DATA, DHA_PHASES_DATA, FAQ_DATA } from '../data/companyData';
import { QuoteForm } from '../components/QuoteForm';
import { GoogleMapSection } from '../components/GoogleMapSection';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800">
        {/* Subtle patterned overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (7 cols) with smooth entrance animation */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Location Tag */}
              <div className="inline-flex items-center gap-2 text-xs text-amber-400 font-semibold tracking-wide uppercase bg-amber-950/30 border border-amber-800/40 px-3 py-1 rounded-md">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Movers &amp; Packers in DHA Karachi &bull; Malir Cantt &bull; All Karachi</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-heading">
                Trusted Movers &amp; Packers in <span className="text-amber-400">DHA Karachi</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Professional packing, home shifting, office relocation and moving services across DHA and Karachi.
              </p>

              {/* Verified Contact Bar in Hero */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5 sm:p-4 flex flex-wrap items-center justify-between gap-3 max-w-xl shadow-lg transition-transform hover:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider block">
                      Call or WhatsApp For Immediate Quote
                    </span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-lg sm:text-xl font-extrabold text-white hover:text-amber-400 transition-colors tracking-tight font-heading"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-emerald-400 font-semibold">Available Today</span>
                </div>
              </div>

              {/* Prominent CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-lg text-sm sm:text-base transition-all shadow-lg shadow-amber-500/10 flex items-center gap-2 group cursor-pointer hover:scale-102 active:scale-98"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-3.5 rounded-lg text-sm sm:text-base border border-slate-700 transition-all flex items-center gap-2 hover:scale-102 active:scale-98"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Call Now</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3.5 rounded-lg text-sm sm:text-base transition-all flex items-center gap-2 shadow-sm hover:scale-102 active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Trust Badges - Factual and clean */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>DHA Phase 1–8 Specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>3-Ply Bubble Wrap &amp; Cartons</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>Carpenters for Bed &amp; Wardrobe Shifting</span>
                </div>
              </div>
            </motion.div>

            {/* Right Realistic Photography Hero Card with smooth scale-in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                  alt="Professional movers in Karachi carefully carrying packed moving boxes"
                  className="w-full h-[380px] sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 p-4 rounded-xl text-xs shadow-lg transition-transform group-hover:-translate-y-1">
                  <div className="flex items-center justify-between text-slate-200 mb-1">
                    <span className="font-bold text-white text-sm">Professional Shifting Crew</span>
                    <span className="text-amber-400 font-semibold">Karachi Wide</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Trained loaders, export-quality packing boxes, and secure enclosed transport for seamless relocation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CORE VALUE PILLARS (FACTUAL) */}
      <section className="bg-slate-900 border-b border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/40 hover:shadow-lg group">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-base mb-1 font-heading group-hover:text-amber-400 transition-colors">
                DHA &amp; Cantt Pass Protocol
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Trained team familiar with DHA Phase 1–8 checkpoint entry procedures, gated bungalows, and Malir Cantt protocols.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/40 hover:shadow-lg group">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-105 transition-transform">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-base mb-1 font-heading group-hover:text-amber-400 transition-colors">
                Multi-Layer Protective Packing
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                3-ply bubble wrapping, heavy corrugated cartons, and stretch film for crockery, LED TVs, and luxury woodwork.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/40 hover:shadow-lg group">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-105 transition-transform">
                <Home className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-base mb-1 font-heading group-hover:text-amber-400 transition-colors">
                Skilled Carpentry Assistance
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Specialized de-assembly and careful reassembly of king-size beds, modular wardrobes, and heavy dining setups.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-5 rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/40 hover:shadow-lg group">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3 group-hover:scale-105 transition-transform">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-white font-bold text-base mb-1 font-heading group-hover:text-amber-400 transition-colors">
                Direct Point-to-Point Transit
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prompt pickup and uninterrupted doorstep delivery across Karachi or intercity with no intermediate cargo transfers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRIMARY SERVICES SHOWCASE */}
      <section className="bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block mb-1">
                Comprehensive Moving Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-heading">
                Packers &amp; Movers Services in DHA &amp; Karachi
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>Explore all 10 services</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-950">
                    <img
                      src={service.imageUrl}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 font-heading group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-400">
                      {service.features.slice(0, 3).map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 flex items-center justify-between">
                  <button
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Get Quote for {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner to Specialized DHA and Intercity */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex items-center justify-between hover:border-slate-700 transition-all">
              <div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">DHA Relocation</span>
                <h4 className="text-base font-bold text-white mt-0.5">DHA Karachi Movers (Phase 1 to 8)</h4>
                <p className="text-xs text-slate-400 mt-1">Emaar Oceanfront, Creek Vistas, and Phase-to-Phase relocations.</p>
              </div>
              <button
                onClick={() => onNavigate('dha-movers')}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-lg shrink-0 ml-4 cursor-pointer transition-colors shadow-sm"
              >
                Learn More
              </button>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex items-center justify-between hover:border-slate-700 transition-all">
              <div>
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">Nationwide Routes</span>
                <h4 className="text-base font-bold text-white mt-0.5">Intercity Shifting from Karachi</h4>
                <p className="text-xs text-slate-400 mt-1">Direct closed container trucks to Lahore, Islamabad, Multan, and Peshawar.</p>
              </div>
              <button
                onClick={() => onNavigate('intercity')}
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-4 py-2.5 rounded-lg shrink-0 ml-4 border border-slate-700 cursor-pointer transition-colors"
              >
                View Routes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GET A FREE QUOTE SECTION */}
      <section id="quote-section" className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block mb-1">
              Fast Moving Quotation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Get a Free Moving Quote
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Share your moving details below to receive a fast, customized quotation directly on WhatsApp.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <QuoteForm compact={false} />
          </div>
        </div>
      </section>

      {/* 5. DHA KARACHI FOCUSED HIGHLIGHT SECTION (SEO PRIORITY) */}
      <section className="bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 6 cols */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block">
                Primary Local SEO Focus
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-heading">
                The Dedicated Moving Company in <span className="text-amber-400">DHA Karachi</span>
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether you are shifting between bungalows in DHA Phase 5 and Phase 6, moving into a high-rise seaside apartment in Phase 8 (Emaar Crescent Bay or Creek Vistas), or shifting an office in 26th Street commercial hubs, our team has hands-on experience navigating DHA&apos;s layout, security check posts, and building regulations.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-slate-900 border border-slate-800 p-3.5 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider">
                      DHA Phase 1 through Phase 8 Coverage
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Expert routing avoiding heavy school/commercial traffic around Khayaban-e-Shamsheer, Saba, Bukhari, and Ittehad.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-900 border border-slate-800 p-3.5 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider">
                      High-Rise &amp; Villa Architecture Expertise
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Service elevator booking coordination for towers, marble floor coverings, and balcony hoisting for heavy couches.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-slate-900 border border-slate-800 p-3.5 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider">
                      Cantonment Gate Clearance
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Full staff identification and vehicle documentation for smooth entry into Cantonment and DHA checkpoint areas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('dha-movers')}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-5 py-3 rounded-lg flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore DHA Shifting Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-xs font-semibold text-slate-200 hover:text-white px-4 py-3 bg-slate-800 rounded-lg border border-slate-700 flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call 0315-3615444</span>
                </a>
              </div>
            </div>

            {/* Right 6 cols: DHA Phases Grid */}
            <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7">
              <h3 className="text-lg font-bold text-white mb-4 font-heading flex items-center justify-between">
                <span>DHA Karachi Phases We Serve</span>
                <span className="text-xs font-normal text-amber-400">Daily Shifting Crews</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {DHA_PHASES_DATA.map((p, idx) => (
                  <div key={idx} className="bg-slate-950 border border-slate-800 p-3 rounded-lg">
                    <span className="font-bold text-amber-300 block mb-0.5">{p.phase}</span>
                    <p className="text-[11px] text-slate-400 line-clamp-2">{p.popularAreas}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. AUTHENTIC 5-STEP MOVING PROCESS */}
      <section className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block mb-1">
              Methodical Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              How We Execute a Smooth Shifting Process
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Our systematic approach ensures total protection of your belongings from initial survey to final placement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                step: '01',
                title: 'Inquiry & Assessment',
                desc: 'Call or WhatsApp us your locations, home size, and target date. We provide a transparent upfront quote.'
              },
              {
                step: '02',
                title: 'Protective Packing',
                desc: 'Our team arrives with 3-ply bubble wrap, sturdy cartons, and stretch film to securely box every room.'
              },
              {
                step: '03',
                title: 'Carpentry & Dismantling',
                desc: 'Skilled carpenters dismantle double beds, wardrobes, and tables, safeguarding all hardware accessories.'
              },
              {
                step: '04',
                title: 'Careful Loading & Transit',
                desc: 'Heavy items loaded securely into covered transport trucks and tied down to eliminate in-transit friction.'
              },
              {
                step: '05',
                title: 'Unloading & Reassembly',
                desc: 'Doorstep offloading, reassembling bed sets in chosen bedrooms, and placing heavy furniture into position.'
              }
            ].map((st, i) => (
              <div key={i} className="bg-slate-950 border border-slate-800 p-5 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-black text-amber-500/70 block mb-2 font-heading">
                    {st.step}
                  </span>
                  <h4 className="text-white font-bold text-sm mb-1.5 font-heading">
                    {st.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GENUINE FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-wider block mb-1">
              Have Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Frequently Asked Questions About Moving in Karachi
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Everything you need to know about booking, packing supplies, DHA permits, and pricing.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors"
              >
                <h4 className="text-white font-bold text-sm sm:text-base flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2.5 pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-400">
              Have a specific question about your upcoming move?
            </p>
            <div className="mt-2 flex items-center justify-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="text-amber-400 hover:underline text-xs font-bold inline-flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <span className="text-slate-600">&bull;</span>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline text-xs font-bold inline-flex items-center gap-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. GOOGLE MAP SECTION */}
      <GoogleMapSection />

      {/* 9. BOTTOM CTA STRIP */}
      <section className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-900/40 rounded-2xl p-8 sm:p-10 text-center shadow-2xl">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block mb-2">
            Stress-Free Relocation Across Karachi
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            Ready to Plan Your Move in DHA or Karachi?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mt-2 mb-6">
            Contact Defence Movers &amp; Packers today. We provide upfront quotes, experienced loaders, and complete packing materials.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-lg text-sm transition-all shadow-md cursor-pointer"
            >
              Get Free Quote
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-3 rounded-lg text-sm border border-slate-700 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>0315-3615444</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-lg text-sm transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
