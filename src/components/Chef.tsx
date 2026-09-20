import React from 'react';
import { Award, Clock, Star, Quote, Utensils } from 'lucide-react';
import { motion } from 'motion/react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Chef: React.FC = () => {
  const { chef } = RESTAURANT_INFO;

  return (
    <section id="chef" className="py-24 bg-[#141417] relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ea580c]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Chef Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Portrait Card */}
              <div className="rounded-3xl overflow-hidden border border-stone-800 shadow-2xl bg-[#18181c] relative group">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-[480px] sm:h-[540px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/20 to-transparent" />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#18181c]/90 backdrop-blur-md border border-[#d4af37]/40 shadow-xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#d4af37] to-[#ea580c] flex items-center justify-center text-[#121214] font-bold shadow-md flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-serif text-base font-bold text-[#f7f4ee]">
                      {chef.experience}
                    </p>
                    <p className="text-xs text-[#d4af37] font-medium tracking-wide">
                      Awarded Master Chef 2024
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Frame Line */}
              <div className="absolute -top-4 -right-4 w-36 h-36 border-t-2 border-r-2 border-[#d4af37]/40 rounded-tr-3xl pointer-events-none" />
            </div>
          </motion.div>

          {/* Chef Biography & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#1e1d1a] w-fit mb-4">
              <Utensils className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
                Culinary Leadership
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fdfbf7] tracking-tight mb-2">
              Meet Our Chef
            </h2>
            <p className="text-xl sm:text-2xl text-[#d4af37] font-serif italic mb-6">
              {chef.name}
            </p>

            {/* Quote banner */}
            <div className="relative p-6 rounded-2xl bg-[#1a1a1e] border-l-4 border-[#d4af37] mb-8">
              <Quote className="w-8 h-8 text-[#d4af37]/20 absolute top-4 right-4" />
              <p className="text-stone-300 italic text-sm sm:text-base leading-relaxed relative z-10">
                “Cooking is not merely combining spices; it is honoring centuries of ancestral memory. When our guests take their first bite, we want them to feel transported into an unforgettable culinary sanctuary.”
              </p>
            </div>

            {/* Key Information Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {/* Experience */}
              <div className="p-4 rounded-xl border border-stone-800 bg-[#18181c] flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#222227] flex items-center justify-center text-[#d4af37] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                    Experience
                  </h4>
                  <p className="text-sm font-bold text-[#f7f4ee] mt-0.5">
                    {chef.experience}
                  </p>
                </div>
              </div>

              {/* Specialization */}
              <div className="p-4 rounded-xl border border-stone-800 bg-[#18181c] flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#222227] flex items-center justify-center text-[#ea580c] flex-shrink-0">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                    Specialization
                  </h4>
                  <p className="text-sm font-bold text-[#f7f4ee] mt-0.5 leading-snug">
                    {chef.specialization}
                  </p>
                </div>
              </div>
            </div>

            {/* Biography */}
            <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed">
              <p>
                {chef.bio}
              </p>
              <p className="text-stone-400 text-xs sm:text-sm">
                Chef Vikram personally supervises the stone-ground blending of all 32 signature spices every morning, ensuring zero compromises in freshness, texture, and aroma.
              </p>
            </div>

            {/* Signature Accent */}
            <div className="mt-8 pt-6 border-t border-stone-800 flex items-center gap-6">
              <div>
                <span className="font-serif italic text-2xl text-[#e5b842] font-semibold tracking-wider">
                  Vikram Oberoi
                </span>
                <p className="text-[11px] uppercase tracking-widest text-stone-400 font-sans mt-0.5">
                  Executive Chef & Co-Founder
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
