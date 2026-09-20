import React, { useState } from 'react';
import { UtensilsCrossed, Instagram, Facebook, Youtube, Twitter, Send, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0e0e10] border-t border-stone-800/80 pt-16 pb-12 text-stone-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-stone-800/80">
          
          {/* Logo & Description (4 cols) */}
          <div className="lg:col-span-4">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none mb-4"
            >
              <div className="w-10 h-10 rounded-full border border-[#d4af37]/60 bg-[#1e1d1a] flex items-center justify-center text-[#d4af37] shadow-inner group-hover:border-[#d4af37] transition-colors">
                <UtensilsCrossed className="w-5 h-5 text-[#d4af37]" />
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

            <p className="font-serif italic text-lg text-[#e5b842] mb-3">
              “Where tradition meets taste.”
            </p>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed mb-6 max-w-sm">
              Authentic Indian culinary heritage crafted with precision, artisanal hand-ground spices, and genuine hospitality.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                id="footer-social-instagram"
                className="w-10 h-10 rounded-xl bg-[#18181c] border border-stone-800 flex items-center justify-center text-stone-300 hover:text-[#d4af37] hover:border-[#d4af37]/60 transition-all hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                id="footer-social-facebook"
                className="w-10 h-10 rounded-xl bg-[#18181c] border border-stone-800 flex items-center justify-center text-stone-300 hover:text-[#d4af37] hover:border-[#d4af37]/60 transition-all hover:scale-105"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                id="footer-social-youtube"
                className="w-10 h-10 rounded-xl bg-[#18181c] border border-stone-800 flex items-center justify-center text-stone-300 hover:text-[#d4af37] hover:border-[#d4af37]/60 transition-all hover:scale-105"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                id="footer-social-twitter"
                className="w-10 h-10 rounded-xl bg-[#18181c] border border-stone-800 flex items-center justify-center text-stone-300 hover:text-[#d4af37] hover:border-[#d4af37]/60 transition-all hover:scale-105"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links (3 cols) */}
          <div className="lg:col-span-3 sm:pl-4">
            <h4 className="font-serif text-base font-bold text-[#f7f4ee] tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    id={`footer-link-${link.name.toLowerCase()}`}
                    className="text-xs sm:text-sm text-stone-400 hover:text-[#d4af37] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-700 group-hover:bg-[#d4af37] transition-colors" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#reservation"
                  onClick={(e) => handleScrollTo(e, '#reservation')}
                  className="text-xs sm:text-sm text-[#e5b842] hover:text-[#d4af37] font-medium transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                  <span>Book a Table</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription (5 cols) */}
          <div className="lg:col-span-5">
            <h4 className="font-serif text-base font-bold text-[#f7f4ee] tracking-wide mb-2">
              Newsletter Subscription
            </h4>
            <p className="text-xs sm:text-sm text-stone-400 mb-4 leading-relaxed">
              Subscribe for special offers, seasonal menus, and exclusive restaurant updates.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2" noValidate>
                <div className="flex items-center rounded-xl bg-[#161619] border border-stone-800 focus-within:border-[#d4af37] overflow-hidden p-1 transition-colors">
                  <input
                    type="email"
                    id="newsletter-email-input"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Enter your email address"
                    className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm text-[#fdfbf7] placeholder-stone-600 focus:outline-none"
                  />
                  <button
                    type="submit"
                    id="newsletter-submit-btn"
                    className="px-4 py-2.5 rounded-lg bg-[#d4af37] hover:bg-[#e5b842] text-[#121214] font-semibold text-xs tracking-wider uppercase transition-colors flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
                  >
                    <span>Join</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                {error && <p className="text-xs text-rose-400">{error}</p>}
                <p className="text-[11px] text-stone-500">
                  We respect your privacy. Unsubscribe anytime with one click.
                </p>
              </form>
            ) : (
              <div className="p-4 rounded-xl bg-[#18181c] border border-emerald-500/40 text-emerald-400 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                <div className="text-xs">
                  <p className="font-semibold text-white">Thank you for subscribing!</p>
                  <p className="text-stone-400 mt-0.5">
                    You're now on our private invitation list for tasting previews.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 Urban Spice. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-stone-400">123 Food Street, Chennai, India</span>
            <span>•</span>
            <span className="text-stone-400">+91 98765 43210</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
