import React from 'react';
import { Sparkles, Leaf, Award, Flame, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutProps {
  onOpenStoryModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenStoryModal }) => {
  return (
    <section id="about" className="py-24 bg-[#141417] relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ea580c]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Imagery with Layered Composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Large Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-stone-800 group">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
                  alt="Urban Spice restaurant interior and authentic ambience"
                  className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                    Chennai Flagship
                  </span>
                  <p className="text-lg font-serif text-white font-medium mt-1">
                    An intimate sanctuary of aromas, brass, and warm candlelight.
                  </p>
                </div>
              </div>

              {/* Secondary Floating Accent Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden sm:block absolute -bottom-10 -right-6 z-20 w-56 rounded-xl overflow-hidden border-2 border-[#d4af37]/60 shadow-2xl bg-[#1a1a1e]"
              >
                <img
                  src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80"
                  alt="Fresh hand-roasted whole spices"
                  className="w-full h-40 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-3 bg-[#18181c]">
                  <p className="text-xs text-[#e5b842] font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Hand-Roasted Daily
                  </p>
                  <p className="text-[11px] text-stone-400 mt-0.5">Heritage spice mortar craftsmanship</p>
                </div>
              </motion.div>

              {/* Decorative Geometric Gold Accent Border */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-[#d4af37]/40 rounded-tl-3xl pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Story & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#1e1d1a] w-fit mb-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
                About Urban Spice
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fdfbf7] leading-tight mb-6">
              A Story Served on Every Plate
            </h2>

            {/* Narrative Paragraphs */}
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed mb-4">
              At <strong className="text-[#f7f4ee] font-semibold">Urban Spice</strong>, we believe great cooking is an art of patience and passion. Born out of a deep reverence for regional Indian culinary traditions, our kitchen harmonizes centuries-old ancestral recipes with modern gastronomic presentation.
            </p>

            <p className="text-stone-400 text-sm sm:text-base leading-relaxed mb-8">
              From the smoky clay embers of our bespoke tandoor to the delicate dum slow-cookers where saffron basmati gently breathes, every dish reflects pristine seasonal ingredients sourced directly from organic growers and spice plantations.
            </p>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {/* Fresh Ingredients */}
              <div className="p-4 rounded-xl border border-stone-800/80 bg-[#18181c]/80 hover:border-[#d4af37]/40 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-[#222227] flex items-center justify-center text-[#ea580c] mb-3 group-hover:scale-110 transition-transform">
                  <Leaf className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#f7f4ee] mb-1">
                  Fresh Ingredients
                </h3>
                <p className="text-xs text-stone-400 leading-normal">
                  Farm-fresh produce, cold-pressed oils, and non-GMO grains.
                </p>
              </div>

              {/* Experienced Chefs */}
              <div className="p-4 rounded-xl border border-stone-800/80 bg-[#18181c]/80 hover:border-[#d4af37]/40 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-[#222227] flex items-center justify-center text-[#d4af37] mb-3 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#f7f4ee] mb-1">
                  Experienced Chefs
                </h3>
                <p className="text-xs text-stone-400 leading-normal">
                  Masters trained in Awadhi, Mughlai, and royal heritage courts.
                </p>
              </div>

              {/* Authentic Recipes */}
              <div className="p-4 rounded-xl border border-stone-800/80 bg-[#18181c]/80 hover:border-[#d4af37]/40 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-[#222227] flex items-center justify-center text-[#e5b842] mb-3 group-hover:scale-110 transition-transform">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#f7f4ee] mb-1">
                  Authentic Recipes
                </h3>
                <p className="text-xs text-stone-400 leading-normal">
                  Uncompromised centuries-old proportions and hand-ground spices.
                </p>
              </div>
            </div>

            {/* Discover Our Story CTA */}
            <div>
              <button
                id="about-discover-story-btn"
                onClick={onOpenStoryModal}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full border border-[#d4af37] text-[#e5b842] hover:bg-[#d4af37] hover:text-[#121214] font-semibold text-sm tracking-wider uppercase transition-all duration-300 transform hover:translate-x-1 cursor-pointer group shadow-lg shadow-black/40"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
