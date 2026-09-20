import React from 'react';
import { Plus, Flame, Sparkles, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { DishItem } from '../types';
import { SIGNATURE_DISHES } from '../data/restaurantData';

interface SpecialtiesProps {
  onAddToCart: (dish: DishItem) => void;
  cartItemIds: Set<string>;
}

export const Specialties: React.FC<SpecialtiesProps> = ({ onAddToCart, cartItemIds }) => {
  return (
    <section id="specialties" className="py-24 bg-[#121214] relative">
      {/* Decorative Warm Ambient Lighting */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#ea580c]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#1e1d1a] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
              Chef's Masterpieces
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fdfbf7] tracking-tight mb-4">
            Our Signature Dishes
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            Handcrafted with uncompromising artistry, our signature offerings capture the true soul of traditional Indian spice crafts.
          </p>
        </div>

        {/* 6 Signature Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SIGNATURE_DISHES.map((dish, index) => {
            const isAdded = cartItemIds.has(dish.id);
            return (
              <motion.div
                key={dish.id}
                id={`signature-card-${dish.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group rounded-2xl bg-[#18181c] border border-stone-800/80 hover:border-[#d4af37]/50 shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/10 transition-all duration-300 flex flex-col overflow-hidden transform hover:-translate-y-1.5"
              >
                {/* Food Image Container */}
                <div className="relative h-60 overflow-hidden bg-stone-900">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18181c] via-transparent to-black/30" />

                  {/* Veg / Non-Veg Indicator Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span
                      className={`w-5 h-5 rounded-sm border flex items-center justify-center bg-[#121214]/90 backdrop-blur-sm ${
                        dish.isVeg ? 'border-emerald-500' : 'border-rose-500'
                      }`}
                      title={dish.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          dish.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                        }`}
                      />
                    </span>
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#121214]/80 backdrop-blur-sm text-stone-300 border border-stone-700">
                      {dish.category}
                    </span>
                  </div>

                  {/* Price Tag Pill */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-[#121214]/90 backdrop-blur-md border border-[#d4af37]/50 text-[#e5b842] font-serif font-bold text-sm tracking-wide shadow-md">
                      ₹{dish.price}
                    </span>
                  </div>

                  {/* Subtle Spice Level */}
                  {dish.spicyLevel && dish.spicyLevel > 1 && (
                    <div className="absolute bottom-3 left-4 flex items-center gap-1 text-[11px] text-amber-300/90 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      <Flame className="w-3 h-3 text-orange-400" />
                      <span>{dish.spicyLevel === 3 ? 'Spicy' : 'Medium Spice'}</span>
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#f7f4ee] group-hover:text-[#e5b842] transition-colors mb-2">
                      {dish.name}
                    </h3>
                    <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                      {dish.description}
                    </p>
                  </div>

                  {/* Card Footer: Price & Add to Order */}
                  <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-stone-500 font-medium block">
                        Price
                      </span>
                      <span className="font-serif text-xl font-bold text-[#fdfbf7]">
                        ₹{dish.price}
                      </span>
                    </div>

                    <button
                      id={`add-to-order-${dish.id}`}
                      onClick={() => onAddToCart(dish)}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-md ${
                        isAdded
                          ? 'bg-emerald-600/90 text-white hover:bg-emerald-600'
                          : 'bg-gradient-to-r from-[#d4af37] to-[#b38728] hover:from-[#e5b842] hover:to-[#c59b27] text-[#121214]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 text-[#121214]" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
