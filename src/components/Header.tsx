import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: 'Work', href: '#works' },
    { label: 'Philosophy', href: '#about' },
    { label: 'The Atelier', href: '#studio' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-2.5 sm:top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none w-full">
        <div
          className={`w-full max-w-5xl rounded-full transition-all duration-300 px-3.5 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between pointer-events-auto ${
            isScrolled ? 'navbar-pill-scrolled' : 'navbar-pill'
          }`}
        >
          {/* Brand Identity / Atelier Monogram */}
          <a
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-2 sm:gap-3 transition-opacity duration-300 shrink-0"
            aria-label="Sam Tattooz Home"
          >
            <div className="relative shrink-0">
              <img
                src="/logo.png"
                alt="Sam Tattooz Emblem"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-[#D0AD87]/40 group-hover:border-[#D0AD87] transition-all shadow-md"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border-2 border-[#1C1A19]" title="Studio Open" />
            </div>

            <div className="flex flex-col">
              <span className="text-base sm:text-lg md:text-xl tracking-tight leading-none text-[#F7F5F2] group-hover:text-[#D0AD87] transition-colors whitespace-nowrap font-bold">
                Sam Tattooz
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#D0AD87] font-semibold mt-0.5 hidden sm:block">
                Atelier • Bengaluru
              </span>
            </div>
          </a>

          {/* Center: Desktop/Tablet Navigation Links (visible on md+) */}
          <nav className="hidden md:flex items-center gap-0.5 lg:gap-1 bg-[#1C1A19]/50 border border-white/[0.06] rounded-full px-2 py-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[10px] lg:text-[11px] uppercase tracking-[0.14em] lg:tracking-[0.16em] font-medium text-[#D9D2CB] hover:text-[#F7F5F2] hover:bg-white/[0.08] px-2.5 lg:px-3.5 py-1.5 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Tablet & Desktop "Book Session" CTA (hidden on phone to avoid overflow) */}
            <button
              onClick={() => {
                closeMenu();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hidden sm:inline-flex btn-studio-primary text-xs py-2 px-4 cursor-pointer whitespace-nowrap"
            >
              Book Session
            </button>

            {/* Mobile/Tablet Menu Toggle Button - 40x40 touch target */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.12] active:scale-95 border border-[#A18773]/30 text-[#F7F5F2] focus:outline-none transition-all cursor-pointer"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-[#F7F5F2]" strokeWidth={2.2} />
              ) : (
                <Menu className="w-5 h-5 text-[#F7F5F2]" strokeWidth={2.2} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full Backdrop Overlay for Mobile Drawer */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer Overlay */}
      <div
        className={`md:hidden fixed inset-x-3.5 top-[84px] sm:top-[90px] z-50 max-h-[calc(100vh-100px)] overflow-y-auto rounded-3xl bg-[#1C1A19]/98 backdrop-blur-2xl border border-[#D0AD87]/35 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.85)] transition-all duration-300 ${
          isMenuOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4">
          {/* Header in Drawer */}
          <div className="flex justify-between items-center pb-3 border-b border-[#A18773]/20">
            <span className="text-xl text-[#F7F5F2] font-semibold">
              Navigation
            </span>
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#D0AD87]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Bengaluru Atelier</span>
              </div>
              <button
                onClick={closeMenu}
                className="w-7 h-7 rounded-full bg-white/[0.08] hover:bg-white/[0.15] flex items-center justify-center text-[#D9D2CB] cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-3.5 h-3.5" strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="text-lg font-light tracking-wide text-[#F7F5F2] hover:text-[#D0AD87] py-2.5 px-3 rounded-xl hover:bg-white/[0.06] transition-all flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#D0AD87]" />
              </a>
            ))}
          </div>

          {/* Bottom Actions */}
          <div className="pt-3 border-t border-[#A18773]/20 flex flex-col gap-3">
            <button
              onClick={() => {
                closeMenu();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-studio-primary w-full py-3.5 text-center cursor-pointer text-xs"
            >
              Reserve an Appointment
            </button>

            <div className="flex items-center justify-between text-xs text-[#A18773] pt-1">
              <a
                href="https://wa.me/918872684463"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D0AD87] transition-colors py-1 px-2"
              >
                WhatsApp Direct ↗
              </a>
              <a
                href="https://www.instagram.com/sam_tattooz_/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D0AD87] transition-colors py-1 px-2"
              >
                @sam_tattooz_ ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
