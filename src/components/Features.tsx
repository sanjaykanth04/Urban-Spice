import React from 'react';
import { Utensils, ChefHat, Heart, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: Utensils,
      title: 'Fresh Ingredients',
      emoji: '🍴',
      description: 'Hand-picked organic produce, antibiotic-free meats, and cold-pressed oils sourced fresh each morning.',
      highlight: 'Farm-to-Table'
    },
    {
      icon: ChefHat,
      title: 'Expert Chefs',
      emoji: '👨‍🍳',
      description: 'Master culinary artisans with decades of pedigree in royal Nawabi, Awadhi, and Kashmiri kitchens.',
      highlight: '18+ Years Mastery'
    },
    {
      icon: Heart,
      title: 'Authentic Flavors',
      emoji: '❤️',
      description: 'Whole spices slow-roasted on cast iron and ground daily using centuries-old heritage recipes.',
      highlight: 'Ancestral Dum Pukht'
    },
    {
      icon: Sparkles,
      title: 'Premium Ambience',
      emoji: '✨',
      description: 'Dark charcoal interiors, brass accents, ambient lighting, and warm Indian hospitality.',
      highlight: 'Fine Dining Sanctuary'
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#121214] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#1e1d1a] mb-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
              The Urban Spice Difference
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fdfbf7] tracking-tight mb-4">
            Why Dine With Us?
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Every dining experience at Urban Spice is thoughtfully orchestrated to engage your senses from arrival to the final course.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                id={`feature-card-${index + 1}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative p-8 rounded-2xl bg-[#18181c] border border-stone-800/80 hover:border-[#d4af37]/50 shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/10 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-2"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/5 rounded-bl-full pointer-events-none group-hover:bg-[#d4af37]/10 transition-colors" />

                <div>
                  {/* Icon with subtle aura */}
                  <div className="w-14 h-14 rounded-2xl bg-[#202026] border border-stone-700/80 group-hover:border-[#d4af37]/60 flex items-center justify-center text-[#d4af37] mb-6 shadow-inner transition-colors duration-300 group-hover:scale-110">
                    <Icon className="w-7 h-7 text-[#d4af37]" />
                  </div>

                  <span className="text-[11px] font-bold tracking-widest uppercase text-[#ea580c] block mb-2">
                    {feature.highlight}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-[#f7f4ee] group-hover:text-[#e5b842] transition-colors mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-800/60 flex items-center text-xs text-stone-500 font-medium">
                  <span>Standard of Excellence</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
