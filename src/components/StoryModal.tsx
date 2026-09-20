import React from 'react';
import { X, Sparkles, Flame, Clock, HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-2xl w-full bg-[#18181c] border border-[#d4af37]/40 rounded-3xl p-6 sm:p-10 shadow-2xl my-8 text-stone-300"
      >
        {/* Close Button */}
        <button
          id="story-modal-close-btn"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 transition-colors cursor-pointer"
          aria-label="Close Story Dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/40 bg-[#1e1d1a] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
            Our Heritage & Craft
          </span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fdfbf7] mb-6">
          The Genesis of Urban Spice
        </h2>

        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-stone-300">
          <p>
            Urban Spice was conceived from a single, unyielding conviction: that authentic Indian cooking is one of the world's most intricate and poetic culinary sciences.
          </p>
          <p>
            Over two decades ago, our founders traveled through the royal kitchens of Awadh, the clay-tandoor streets of Old Delhi, the fragrant coastal harbors of Goa, and the spice-cloaked hills of Kerala. They gathered heirloom spice combinations preserved for generations on palm-leaf manuscripts and family ledgers.
          </p>

          {/* Highlights in Modal */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6 pt-4 border-t border-stone-800">
            <div className="bg-[#121214] p-4 rounded-xl border border-stone-800">
              <Flame className="w-5 h-5 text-[#ea580c] mb-2" />
              <h4 className="font-serif font-bold text-white text-sm">Dum Pukht</h4>
              <p className="text-xs text-stone-400 mt-1">Dough-sealed handis preserving every drop of aroma.</p>
            </div>
            <div className="bg-[#121214] p-4 rounded-xl border border-stone-800">
              <Clock className="w-5 h-5 text-[#d4af37] mb-2" />
              <h4 className="font-serif font-bold text-white text-sm">16-Hour Simmer</h4>
              <p className="text-xs text-stone-400 mt-1">Our Dal Makhani rests over glowing charcoal all night.</p>
            </div>
            <div className="bg-[#121214] p-4 rounded-xl border border-stone-800">
              <HeartHandshake className="w-5 h-5 text-[#e5b842] mb-2" />
              <h4 className="font-serif font-bold text-white text-sm">Atithi Devo Bhava</h4>
              <p className="text-xs text-stone-400 mt-1">"The Guest is Sacred" — our foundational ethos.</p>
            </div>
          </div>

          <p>
            Today, in our flagship Chennai dining room, we invite you to experience this timeless reverence. Whether you are discovering a subtle Awadhi korma or our signature chocolate cardamom lava cake, welcome to our family table.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b38728] text-[#121214] font-semibold text-xs tracking-wider uppercase shadow-md hover:from-[#e5b842] hover:to-[#c59b27] transition-all cursor-pointer"
          >
            Close Story
          </button>
        </div>
      </motion.div>
    </div>
  );
};
