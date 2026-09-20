import React, { useState } from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';

interface GalleryProps {
  onSelectImage: (item: GalleryItem) => void;
}

const GALLERY_CATEGORIES = ['All', 'Interior', 'Food', 'Chef', 'Desserts'] as const;

export const Gallery: React.FC<GalleryProps> = ({ onSelectImage }) => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const filteredItems = activeTab === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="py-24 bg-[#121214] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#1e1d1a] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
              Visual Journey
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fdfbf7] tracking-tight mb-4">
            Our Atmosphere & Craft
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Step inside our dining hall, witness the embers of our live kitchen, and feast your eyes on hand-finished creations.
          </p>
        </div>

        {/* Gallery Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {GALLERY_CATEGORIES.map((tab) => (
            <button
              key={tab}
              id={`gallery-filter-${tab.toLowerCase()}`}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === tab
                  ? 'bg-[#d4af37] text-[#121214] shadow-md shadow-[#d4af37]/20 font-bold'
                  : 'bg-[#1a1a1e] text-stone-400 hover:text-stone-200 border border-stone-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Modern Masonry/Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            // Give some items dynamic aspect ratio heights for masonry feeling
            const isSpan = index === 0 || index === 3;
            return (
              <motion.div
                key={item.id}
                id={`gallery-item-${item.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                onClick={() => onSelectImage(item)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-stone-900 border border-stone-800/80 shadow-lg hover:shadow-2xl hover:border-[#d4af37]/50 transition-all duration-500 ${
                  isSpan ? 'lg:col-span-1 h-[380px]' : 'h-[320px]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Corner Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#121214]/80 backdrop-blur-md text-[#e5b842] border border-[#d4af37]/40">
                    {item.category}
                  </span>
                </div>

                {/* View Fullscreen Action Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#121214]/80 backdrop-blur-md border border-stone-700 flex items-center justify-center text-stone-300 group-hover:text-[#d4af37] group-hover:border-[#d4af37] transition-all transform scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Caption & Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#fdfbf7] group-hover:text-[#e5b842] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 mt-1 line-clamp-2 opacity-90">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
