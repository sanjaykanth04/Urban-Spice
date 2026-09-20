import React, { useState } from 'react';
import { Plus, Check, Search, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DishItem } from '../types';
import { FULL_MENU } from '../data/restaurantData';

interface MenuProps {
  onAddToCart: (dish: DishItem) => void;
  cartItemIds: Set<string>;
}

const CATEGORIES = [
  'Starters',
  'Main Course',
  'Biryani',
  'Vegetarian',
  'Desserts',
  'Beverages',
] as const;

export const Menu: React.FC<MenuProps> = ({ onAddToCart, cartItemIds }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Starters');
  const [vegOnlyFilter, setVegOnlyFilter] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter items based on active category, veg filter, and search
  const filteredItems = FULL_MENU.filter((item) => {
    const matchesCategory = item.category === selectedCategory;
    const matchesVeg = !vegOnlyFilter || item.isVeg;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesVeg && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 bg-[#141417] relative">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ea580c]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#1e1d1a] mb-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
              Curated Gastronomy
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fdfbf7] tracking-tight mb-4">
            Explore Our Complete Menu
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            From sizzling clay tandoor preparations to slow-simmered royal curries, discover culinary heritage in every creation.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10" role="tablist">
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                id={`menu-tab-${category.toLowerCase().replace(/\s+/g, '-')}`}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'text-[#121214] bg-gradient-to-r from-[#d4af37] to-[#e5b842] shadow-lg shadow-[#d4af37]/20 scale-105'
                    : 'text-stone-300 bg-[#1e1e24] hover:bg-[#25252c] hover:text-[#f7f4ee] border border-stone-800'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Search and Veg-only Filter Row */}
        <div className="max-w-3xl mx-auto mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#18181c] p-3 rounded-2xl border border-stone-800">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="menu-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes or spices..."
              className="w-full bg-[#121214] border border-stone-800 text-xs sm:text-sm text-stone-200 placeholder-stone-500 pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:border-[#d4af37]/60"
            />
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              id="menu-veg-filter-btn"
              onClick={() => setVegOnlyFilter(!vegOnlyFilter)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl border text-xs font-medium transition-all ${
                vegOnlyFilter
                  ? 'border-emerald-500/80 bg-emerald-950/30 text-emerald-400'
                  : 'border-stone-800 bg-[#121214] text-stone-400 hover:text-stone-300'
              }`}
            >
              <span className="w-3 h-3 rounded-sm border border-emerald-500 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </span>
              <span>Vegetarian Only</span>
            </button>
          </div>
        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${vegOnlyFilter}-${searchQuery}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => {
                const isAdded = cartItemIds.has(item.id);
                return (
                  <div
                    key={item.id}
                    id={`menu-item-${item.id}`}
                    className="p-5 rounded-2xl bg-[#18181c] border border-stone-800/80 hover:border-[#d4af37]/40 transition-all duration-300 flex items-start gap-4 sm:gap-5 group shadow-md hover:shadow-xl"
                  >
                    {/* Thumbnail */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 bg-stone-900 relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      {/* Dietary badge */}
                      <span
                        className={`absolute top-1.5 left-1.5 w-4 h-4 rounded-sm border flex items-center justify-center bg-[#121214]/90 backdrop-blur-sm ${
                          item.isVeg ? 'border-emerald-500' : 'border-rose-500'
                        }`}
                        title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                          }`}
                        />
                      </span>
                    </div>

                    {/* Dish Info */}
                    <div className="flex-grow flex flex-col justify-between min-h-[5rem]">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-serif text-base sm:text-lg font-bold text-[#f7f4ee] group-hover:text-[#e5b842] transition-colors leading-snug">
                            {item.name}
                          </h3>
                          <span className="font-serif text-base sm:text-lg font-bold text-[#d4af37] whitespace-nowrap ml-2">
                            ₹{item.price}
                          </span>
                        </div>
                        <p className="text-stone-400 text-xs sm:text-sm mt-1 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Add to Order CTA */}
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-[11px] text-stone-500 font-medium uppercase tracking-wider">
                          {item.isVeg ? 'Pure Veg' : 'Non-Veg'}
                        </span>
                        <button
                          id={`menu-add-btn-${item.id}`}
                          onClick={() => onAddToCart(item)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                            isAdded
                              ? 'bg-emerald-600/90 text-white'
                              : 'bg-[#222227] hover:bg-[#d4af37] text-stone-200 hover:text-[#121214] border border-stone-700 hover:border-[#d4af37]'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3 h-3" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3 h-3" />
                              <span>Add to Order</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-full py-12 text-center text-stone-400">
                <p className="text-base font-medium">No dishes match your selection.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setVegOnlyFilter(false);
                  }}
                  className="mt-3 text-xs text-[#d4af37] hover:underline"
                >
                  Clear search & filters
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
