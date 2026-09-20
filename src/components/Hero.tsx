import React from 'react';
import { ChevronDown, Utensils, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#121214]"
    >
      {/* Background Image with Rich Parallax & Cinematic Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
          alt="Urban Spice Luxury Restaurant Interior and Dining Table"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-slow"
          referrerPolicy="no-referrer"
        />
        {/* Subtle Dark Charcoal & Amber Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-[#121214]/75 to-[#121214]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08),_transparent_70%)]" />
      </div>

      {/* Decorative Warm Saffron Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#ea580c]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#d4af37]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 flex flex-col items-center">
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#1e1d1a]/80 backdrop-blur-sm mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] animate-ping" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#e5b842] font-semibold">
            Award-Winning Indian Culinary Journey
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#fdfbf7] max-w-4xl leading-[1.12] mb-6"
        >
          Taste the Tradition.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e5b842] via-[#d4af37] to-[#ea580c] block sm:inline">
            Experience the Flavor.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-xl text-[#d4cebd] max-w-2xl mx-auto font-light leading-relaxed mb-10"
        >
          Authentic flavors, handcrafted dishes, and unforgettable dining experiences.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            id="hero-explore-menu-btn"
            onClick={() => scrollTo('menu')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e5b842] to-[#c59b27] hover:from-[#e5b842] hover:to-[#b38728] text-[#121214] font-semibold text-base tracking-wide uppercase shadow-xl shadow-[#d4af37]/25 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer"
          >
            <Utensils className="w-5 h-5 text-[#121214]" />
            <span>Explore Menu</span>
          </button>

          <button
            id="hero-book-table-btn"
            onClick={() => scrollTo('reservation')}
            className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-[#d4af37]/60 hover:border-[#d4af37] bg-[#121214]/60 hover:bg-[#1e1d1a] backdrop-blur-md text-[#fdfbf7] hover:text-[#d4af37] font-semibold text-base tracking-wide uppercase transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer shadow-lg"
          >
            <Calendar className="w-5 h-5 text-[#d4af37]" />
            <span>Book a Table</span>
          </button>
        </motion.div>

        {/* Quick Highlights Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 mt-16 pt-8 border-t border-stone-800/80 text-center w-full max-w-3xl"
        >
          <div>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#e5b842]">100%</p>
            <p className="text-xs text-stone-400 tracking-wider uppercase mt-1">Authentic Recipes</p>
          </div>
          <div>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#e5b842]">18+</p>
            <p className="text-xs text-stone-400 tracking-wider uppercase mt-1">Mastery Years</p>
          </div>
          <div>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#e5b842]">4.9★</p>
            <p className="text-xs text-stone-400 tracking-wider uppercase mt-1">Guest Rating</p>
          </div>
          <div>
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#e5b842]">Daily</p>
            <p className="text-xs text-stone-400 tracking-wider uppercase mt-1">Fresh Spices Ground</p>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator at Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer group"
        onClick={() => scrollTo('about')}
        id="hero-scroll-indicator"
      >
        <span className="text-[11px] uppercase tracking-[0.2em] text-[#d4af37]/70 group-hover:text-[#d4af37] mb-2 font-medium transition-colors">
          Scroll to explore
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-[#d4af37]/40 group-hover:border-[#d4af37] flex items-start justify-center p-1.5 transition-colors">
          <motion.div
            animate={{
              y: [0, 14, 0],
              opacity: [0.8, 1, 0.4],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1.5 h-2.5 rounded-full bg-[#d4af37]"
          />
        </div>
        <ChevronDown className="w-4 h-4 text-[#d4af37]/60 group-hover:text-[#d4af37] -mt-0.5 animate-bounce" />
      </motion.div>
    </section>
  );
};
