import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, UtensilsCrossed, CalendarDays, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = ['home', 'about', 'specialties', 'menu', 'gallery', 'chef', 'reviews', 'reservation', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121214]/95 backdrop-blur-md border-b border-[#d4af37]/20 py-3.5 shadow-2xl shadow-black/50'
          : 'bg-gradient-to-b from-[#121214]/90 via-[#121214]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none"
            id="brand-logo-link"
          >
            <div className="w-10 h-10 rounded-full border border-[#d4af37]/60 bg-[#1e1d1a] flex items-center justify-center text-[#d4af37] shadow-inner group-hover:border-[#d4af37] transition-colors">
              <UtensilsCrossed className="w-5 h-5 text-[#d4af37] transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#f7f4ee] via-[#e5b842] to-[#d4af37]">
                Urban Spice
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#d4af37]/80 uppercase font-sans -mt-1 font-semibold">
                Haute Cuisine
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  className={`text-sm tracking-wider uppercase font-medium transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#d4af37]'
                      : 'text-[#d8d3c7] hover:text-[#f7f4ee]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#d4af37] to-[#ea580c] rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Tray / Order Cart Toggle */}
            <button
              id="nav-cart-btn"
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full border border-stone-800 bg-[#1a1a1e]/80 hover:border-[#d4af37]/50 text-stone-300 hover:text-[#d4af37] transition-all"
              title="View Selected Dishes"
              aria-label="View Order Tray"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#ea580c] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Book a Table Primary CTA */}
            <a
              id="nav-book-table-btn"
              href="#reservation"
              onClick={(e) => handleScrollTo(e, '#reservation')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b38728] hover:from-[#e5b842] hover:to-[#c59b27] text-[#121214] font-semibold text-sm tracking-wider uppercase shadow-lg shadow-[#d4af37]/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <CalendarDays className="w-4 h-4 text-[#121214]" />
              <span>Book a Table</span>
            </a>
          </div>

          {/* Mobile hamburger & cart */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-cart-btn"
              onClick={onOpenCart}
              className="relative p-2 rounded-lg border border-stone-800 bg-[#1a1a1e] text-stone-300"
              aria-label="View Order Tray"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#ea580c] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg border border-stone-800 bg-[#1a1a1e] text-[#f7f4ee] hover:text-[#d4af37] focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#161619] border-b border-[#d4af37]/20 px-6 py-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  id={`mobile-nav-${link.name.toLowerCase()}`}
                  className="text-base tracking-wider uppercase font-medium text-[#f4efe6] hover:text-[#d4af37] transition-colors py-1 flex items-center justify-between border-b border-stone-800/60 pb-2"
                >
                  <span>{link.name}</span>
                  <span className="text-[#d4af37]/40 text-xs">0{navLinks.indexOf(link) + 1}</span>
                </a>
              ))}

              <div className="pt-2 flex flex-col gap-3">
                <a
                  id="mobile-nav-book-btn"
                  href="#reservation"
                  onClick={(e) => handleScrollTo(e, '#reservation')}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b38728] text-[#121214] font-semibold text-sm tracking-wider uppercase shadow-lg shadow-[#d4af37]/20"
                >
                  <CalendarDays className="w-4 h-4" />
                  <span>Book a Table</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
