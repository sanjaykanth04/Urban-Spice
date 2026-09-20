import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GalleryItem } from '../types';
import { GALLERY_ITEMS } from '../data/restaurantData';

interface LightboxModalProps {
  selectedItem: GalleryItem | null;
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  selectedItem,
  onClose,
  onSelect,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  if (!selectedItem) return null;

  const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === selectedItem.id);

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    onSelect(GALLERY_ITEMS[prevIdx]);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % GALLERY_ITEMS.length;
    onSelect(GALLERY_ITEMS[nextIdx]);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/95 backdrop-blur-md">
        {/* Close Button */}
        <button
          id="lightbox-close-btn"
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Prev Arrow */}
        <button
          id="lightbox-prev-btn"
          onClick={handlePrev}
          className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-white/10 hover:bg-[#d4af37] text-white hover:text-black transition-colors cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Arrow */}
        <button
          id="lightbox-next-btn"
          onClick={handleNext}
          className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-[#d4af37] text-white hover:text-black transition-colors cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Lightbox Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
        >
          <div className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-2xl max-h-[70vh] bg-black">
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="max-h-[70vh] w-auto object-contain mx-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Caption & Counter */}
          <div className="mt-4 text-center max-w-2xl px-4">
            <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">
              {selectedItem.category} • {currentIndex + 1} of {GALLERY_ITEMS.length}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
              {selectedItem.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              {selectedItem.caption}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
