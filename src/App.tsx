import React, { useState, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Specialties } from './components/Specialties';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { Chef } from './components/Chef';
import { Features } from './components/Features';
import { Reviews } from './components/Reviews';
import { Reservation } from './components/Reservation';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { LightboxModal } from './components/LightboxModal';
import { StoryModal } from './components/StoryModal';
import { DishItem, GalleryItem, CartItem } from './types';
import { Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeGalleryItem, setActiveGalleryItem] = useState<GalleryItem | null>(null);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Cart helper actions
  const handleAddToCart = (dish: DishItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.dish.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.dish.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { dish, quantity: 1 }];
    });

    // Show temporary toast feedback
    setToastMessage(`Added "${dish.name}" to your order tray`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleUpdateQuantity = (dishId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.dish.id === dishId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (dishId: string) => {
    setCart((prev) => prev.filter((item) => item.dish.id !== dishId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = useMemo(
    () => cart.reduce((acc, curr) => acc + curr.quantity, 0),
    [cart]
  );

  const cartItemIds = useMemo(
    () => new Set(cart.map((item) => item.dish.id)),
    [cart]
  );

  return (
    <div className="min-h-screen bg-[#121214] text-[#f7f4ee] relative selection:bg-[#d4af37] selection:text-[#121214]">
      {/* 1. Top Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main>
        {/* 2. Full-Screen Hero Section */}
        <Hero />

        {/* 3. About Section */}
        <About onOpenStoryModal={() => setIsStoryModalOpen(true)} />

        {/* 4. Specialties Section: 6 Signature Dishes */}
        <Specialties
          onAddToCart={handleAddToCart}
          cartItemIds={cartItemIds}
        />

        {/* 5. Menu Section with Category Filtering */}
        <Menu
          onAddToCart={handleAddToCart}
          cartItemIds={cartItemIds}
        />

        {/* 6. Food & Ambiance Gallery with Lightbox */}
        <Gallery onSelectImage={(item) => setActiveGalleryItem(item)} />

        {/* 7. Chef Section */}
        <Chef />

        {/* 8. Restaurant Experience: Why Dine With Us */}
        <Features />

        {/* 9. Customer Reviews Carousel */}
        <Reviews />

        {/* 10. Reservation Section: Book a Table */}
        <Reservation />

        {/* 11. Location & Contact Section with Map */}
        <Contact />
      </main>

      {/* 12. Premium Footer */}
      <Footer />

      {/* Slide-out Order Tray / Cart */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        selectedItem={activeGalleryItem}
        onClose={() => setActiveGalleryItem(null)}
        onSelect={(item) => setActiveGalleryItem(item)}
      />

      {/* Discover Our Story Modal */}
      <StoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
      />

      {/* Floating Bottom Toast for Tray Additions */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-[#1e1e24] border border-[#d4af37]/60 text-[#fdfbf7] px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-md"
          >
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
            <button
              onClick={() => setIsCartOpen(true)}
              className="ml-2 text-xs font-bold text-[#d4af37] hover:underline"
            >
              View Tray
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
