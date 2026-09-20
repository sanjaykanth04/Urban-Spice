import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { REVIEWS } from '../data/restaurantData';

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate reviews every 6 seconds if not paused
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const currentReview = REVIEWS[currentIndex];

  return (
    <section
      id="reviews"
      className="py-24 bg-[#141417] relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Lighting Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#1e1d1a] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
              Guest Testimonials
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fdfbf7] tracking-tight mb-4">
            What Our Guests Say
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Honored by food critics, travelers, and dining connoisseurs from around the globe.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45 }}
              className="p-8 sm:p-12 md:p-14 rounded-3xl bg-[#18181c] border border-stone-800 shadow-2xl relative overflow-hidden"
            >
              {/* Decorative Large Background Quote Mark */}
              <Quote className="w-24 h-24 text-stone-800/40 absolute top-6 right-6 pointer-events-none" />

              <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1.5 mb-6">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#d4af37] text-[#d4af37] drop-shadow-sm"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#f7f4ee] font-medium leading-relaxed italic mb-8">
                  “{currentReview.comment}”
                </p>

                {/* Author Info with Profile Picture */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#d4af37] shadow-lg flex-shrink-0">
                    <img
                      src={currentReview.avatar}
                      alt={currentReview.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-left">
                    <h3 className="font-serif text-lg font-bold text-[#fdfbf7]">
                      {currentReview.name}
                    </h3>
                    <p className="text-xs text-[#d4af37] font-medium tracking-wide">
                      {currentReview.role}
                    </p>
                    <p className="text-[11px] text-stone-400 mt-0.5">
                      Visited in {currentReview.date}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Arrows */}
          <div className="flex items-center justify-between absolute top-1/2 -left-4 -right-4 -translate-y-1/2 pointer-events-none sm:-left-6 sm:-right-6">
            <button
              id="reviews-prev-btn"
              onClick={handlePrev}
              className="pointer-events-auto w-12 h-12 rounded-full bg-[#1e1e24]/90 hover:bg-[#d4af37] text-stone-300 hover:text-[#121214] border border-stone-700 hover:border-[#d4af37] shadow-xl flex items-center justify-center transition-all cursor-pointer transform hover:scale-105 active:scale-95"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              id="reviews-next-btn"
              onClick={handleNext}
              className="pointer-events-auto w-12 h-12 rounded-full bg-[#1e1e24]/90 hover:bg-[#d4af37] text-stone-300 hover:text-[#121214] border border-stone-700 hover:border-[#d4af37] shadow-xl flex items-center justify-center transition-all cursor-pointer transform hover:scale-105 active:scale-95"
              aria-label="Next Review"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {REVIEWS.map((review, idx) => (
              <button
                key={review.id}
                id={`reviews-dot-${idx + 1}`}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(idx);
                }}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 h-2.5 bg-[#d4af37]'
                    : 'w-2.5 h-2.5 bg-stone-700 hover:bg-stone-500'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
