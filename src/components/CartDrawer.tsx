import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, CalendarDays } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (dishId: string, delta: number) => void;
  onRemoveItem: (dishId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const totalAmount = items.reduce((acc, curr) => acc + curr.dish.price * curr.quantity, 0);
  const totalCount = items.reduce((acc, curr) => acc + curr.quantity, 0);

  const handleProceedToReservation = () => {
    onClose();
    const reservationSection = document.getElementById('reservation');
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        />

        <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-screen max-w-md bg-[#161619] border-l border-stone-800 shadow-2xl flex flex-col justify-between"
          >
            {/* Header */}
            <div className="p-6 border-b border-stone-800 flex items-center justify-between bg-[#18181c]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#222227] border border-stone-700 flex items-center justify-center text-[#d4af37]">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#f7f4ee]">
                    Your Selected Dishes
                  </h3>
                  <span className="text-xs text-stone-400">
                    {totalCount} {totalCount === 1 ? 'item' : 'items'} in order tray
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-stone-800/80 text-stone-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close Tray"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {items.length > 0 ? (
                items.map((item) => (
                  <div
                    key={item.dish.id}
                    className="p-4 rounded-xl bg-[#1e1e24] border border-stone-800 flex items-center gap-3.5"
                  >
                    {/* Thumbnail */}
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-stone-900">
                      <img
                        src={item.dish.image}
                        alt={item.dish.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Dish Info */}
                    <div className="flex-grow min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-serif text-sm font-bold text-[#f7f4ee] truncate">
                          {item.dish.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.dish.id)}
                          className="text-stone-500 hover:text-rose-400 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-xs text-[#d4af37] font-semibold mt-0.5">
                        ₹{item.dish.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.dish.id, -1)}
                          className="w-6 h-6 rounded bg-[#2a2a33] text-stone-300 hover:text-white flex items-center justify-center text-xs"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-semibold text-white px-2">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.dish.id, 1)}
                          className="w-6 h-6 rounded bg-[#2a2a33] text-stone-300 hover:text-white flex items-center justify-center text-xs"
                        >
                          <Plus className="w-3 h-3" />
                        </button>

                        <span className="text-xs text-stone-400 ml-auto font-medium">
                          ₹{item.dish.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-16 text-center text-stone-500">
                  <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-30 text-stone-400" />
                  <p className="font-serif text-base text-stone-400">Your order tray is empty.</p>
                  <p className="text-xs mt-1 text-stone-500">
                    Explore our Signature Dishes or Menu above to add dishes to your dining list.
                  </p>
                </div>
              )}
            </div>

            {/* Footer / Summary */}
            {items.length > 0 && (
              <div className="p-6 border-t border-stone-800 bg-[#18181c] space-y-4">
                <div className="flex items-center justify-between text-xs text-stone-400">
                  <span>Tray Items Subtotal</span>
                  <span className="font-serif text-lg font-bold text-[#f7f4ee]">
                    ₹{totalAmount}
                  </span>
                </div>

                <p className="text-[11px] text-stone-400 leading-tight">
                  Taxes and service charge will be finalized at the table. You can link your selection directly to your table booking below.
                </p>

                <div className="flex flex-col gap-2.5">
                  <button
                    onClick={handleProceedToReservation}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5b842] to-[#c59b27] text-[#121214] font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-[#d4af37]/20 flex items-center justify-center gap-2 cursor-pointer hover:from-[#e5b842] hover:to-[#b38728] transition-all"
                  >
                    <CalendarDays className="w-4 h-4 text-[#121214]" />
                    <span>Attach to Table Reservation</span>
                    <ArrowRight className="w-4 h-4 text-[#121214]" />
                  </button>

                  <button
                    onClick={onClearCart}
                    className="w-full py-2 text-xs text-stone-500 hover:text-stone-300 transition-colors"
                  >
                    Clear All Items
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
