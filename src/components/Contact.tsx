import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink, Sparkles, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Contact: React.FC = () => {
  const { address, phone, email, hours } = RESTAURANT_INFO;
  const [mapZoomed, setMapZoomed] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyPhone = () => {
    navigator.clipboard?.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#141417] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#1e1d1a] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
              Find & Contact Us
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fdfbf7] tracking-tight mb-4">
            Urban Spice Restaurant
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Conveniently situated in the heart of Chennai’s vibrant gourmet corridor with dedicated valet parking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Contact Details Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 rounded-3xl bg-[#18181c] border border-stone-800 p-8 sm:p-10 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#f7f4ee] mb-6">
                Dining & Inquiries
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#202026] border border-stone-700 flex items-center justify-center text-[#d4af37] flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-1">
                      Our Location
                    </h4>
                    <p className="text-sm sm:text-base text-[#fdfbf7] font-medium leading-relaxed">
                      {address}
                    </p>
                    <span className="text-xs text-[#e5b842] mt-1 inline-block">
                      Valet Parking Available
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#202026] border border-stone-700 flex items-center justify-center text-[#d4af37] flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-1">
                      Phone Reservations
                    </h4>
                    <div className="flex items-center gap-3">
                      <a
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="text-sm sm:text-base text-[#fdfbf7] font-medium hover:text-[#d4af37] transition-colors"
                      >
                        {phone}
                      </a>
                      <button
                        onClick={copyPhone}
                        className="text-[11px] px-2 py-0.5 rounded bg-stone-800 text-stone-300 hover:text-white"
                        title="Copy phone number"
                      >
                        {copiedPhone ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                    <span className="text-xs text-stone-400 block mt-0.5">
                      Direct line for private dining and banquets
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#202026] border border-stone-700 flex items-center justify-center text-[#d4af37] flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-1">
                      Email Inquiries
                    </h4>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm sm:text-base text-[#fdfbf7] font-medium hover:text-[#d4af37] transition-colors"
                    >
                      {email}
                    </a>
                    <span className="text-xs text-stone-400 block mt-0.5">
                      We respond within 24 business hours
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 pt-2 border-t border-stone-800/80">
                  <div className="w-12 h-12 rounded-xl bg-[#202026] border border-stone-700 flex items-center justify-center text-[#ea580c] flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-[#ea580c]" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold mb-1">
                      Opening Hours
                    </h4>
                    <p className="text-xs sm:text-sm text-[#f7f4ee] font-medium">
                      {hours.weekdays}
                    </p>
                    <p className="text-xs sm:text-sm text-[#e5b842] font-medium mt-1">
                      {hours.weekends}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action button */}
            <div className="mt-8 pt-6 border-t border-stone-800">
              <a
                href="https://maps.google.com/?q=13.0827,80.2707"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b38728] text-[#121214] font-semibold text-xs tracking-wider uppercase shadow-lg shadow-[#d4af37]/20 hover:from-[#e5b842] hover:to-[#c59b27] transition-all"
              >
                <Navigation className="w-4 h-4 text-[#121214]" />
                <span>Get Driving Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#121214]/80" />
              </a>
            </div>
          </motion.div>

          {/* Interactive-Looking Styled Map Section (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 rounded-3xl bg-[#18181c] border border-stone-800 overflow-hidden shadow-2xl relative flex flex-col min-h-[420px]"
          >
            {/* Styled Map Background Simulation with Real Chennai Coordinates */}
            <div className="relative w-full flex-grow h-[380px] sm:h-[450px] bg-[#161619] overflow-hidden">
              {/* Map Grid / Street Graphic Texture */}
              <div
                className={`absolute inset-0 transition-transform duration-700 ${
                  mapZoomed ? 'scale-125' : 'scale-100'
                }`}
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, #24242e 10%, #151518 80%),
                    linear-gradient(to right, #1f1f26 1px, transparent 1px),
                    linear-gradient(to bottom, #1f1f26 1px, transparent 1px)`,
                  backgroundSize: '100% 100%, 40px 40px, 40px 40px',
                }}
              >
                {/* Simulated Street Arteries */}
                <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
                  {/* Major Avenues */}
                  <path d="M-50 120 L800 280" stroke="#383842" strokeWidth="8" strokeLinecap="round" />
                  <path d="M120 -50 L380 600" stroke="#383842" strokeWidth="10" strokeLinecap="round" />
                  <path d="M-20 320 Q280 260 800 420" stroke="#484854" strokeWidth="6" fill="none" />
                  {/* Marina Coast line contour */}
                  <path d="M520 -50 Q560 250 590 600" stroke="#1e3a5f" strokeWidth="24" fill="none" opacity="0.4" />
                  {/* Secondary roads */}
                  <line x1="200" y1="0" x2="200" y2="600" stroke="#2c2c36" strokeWidth="3" strokeDasharray="6 4" />
                  <line x1="0" y1="200" x2="800" y2="200" stroke="#2c2c36" strokeWidth="3" strokeDasharray="6 4" />
                </svg>

                {/* Chennai Landmark Labels */}
                <div className="absolute top-10 right-10 text-[10px] text-stone-500 uppercase tracking-widest font-mono">
                  Bay of Bengal Coastline
                </div>
                <div className="absolute bottom-10 left-8 text-[10px] text-stone-500 uppercase tracking-widest font-mono">
                  Food Street Gourmet District
                </div>
              </div>

              {/* Pinpoint Marker for Urban Spice */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                {/* Pulsing Radar Ring */}
                <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 absolute -top-4 animate-ping pointer-events-none" />
                <div className="w-24 h-24 rounded-full bg-[#ea580c]/10 absolute -top-8 animate-pulse pointer-events-none" />

                {/* Pin Card Callout */}
                <div className="mb-2 bg-[#121214]/95 border border-[#d4af37] px-3.5 py-2 rounded-xl shadow-2xl backdrop-blur-md flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-pulse" />
                  <div>
                    <span className="font-serif text-xs font-bold text-[#f7f4ee] block whitespace-nowrap">
                      Urban Spice Restaurant
                    </span>
                    <span className="text-[10px] text-[#e5b842]">123 Food Street, Chennai</span>
                  </div>
                </div>

                {/* Pin Icon */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#d4af37] to-[#ea580c] flex items-center justify-center text-[#121214] shadow-2xl border-2 border-white">
                  <MapPin className="w-5 h-5 text-[#121214] fill-[#121214]" />
                </div>
              </div>

              {/* Interactive Zoom & Mode Controls */}
              <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                <button
                  id="map-zoom-in-btn"
                  onClick={() => setMapZoomed(true)}
                  className={`w-9 h-9 rounded-lg bg-[#18181c]/90 border text-stone-200 hover:text-white flex items-center justify-center text-sm font-bold shadow-lg transition-colors ${
                    mapZoomed ? 'border-[#d4af37] text-[#d4af37]' : 'border-stone-700'
                  }`}
                  title="Zoom In"
                >
                  +
                </button>
                <button
                  id="map-zoom-out-btn"
                  onClick={() => setMapZoomed(false)}
                  className={`w-9 h-9 rounded-lg bg-[#18181c]/90 border text-stone-200 hover:text-white flex items-center justify-center text-sm font-bold shadow-lg transition-colors ${
                    !mapZoomed ? 'border-[#d4af37] text-[#d4af37]' : 'border-stone-700'
                  }`}
                  title="Zoom Out"
                >
                  −
                </button>
              </div>

              {/* Bottom Map Bar */}
              <div className="absolute bottom-4 left-4 right-4 z-20 bg-[#121214]/90 backdrop-blur-md border border-stone-800 p-3 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-stone-300 font-medium">Open Today until 10:30 PM</span>
                </div>
                <a
                  href="https://maps.google.com/?q=13.0827,80.2707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#e5b842] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
