import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Works', href: '#works' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: '#292827' }}>
      <div className="flex items-center justify-between px-4 md:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo Section */}
        <a href="/" className="flex items-center gap-2 text-lg md:text-xl hover:opacity-80 transition-opacity" style={{ fontFamily: '"Instrument Serif", serif' }}>
          <img src="/logo.png" alt="Sam Tattooz" className="w-8 h-8 md:w-10 md:h-10" />
          <span className="text-xl md:text-2xl" style={{ color: '#f4f4f4', fontFamily: '"Instrument Serif", serif' }}>
            Sam Tattooz
          </span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer transition-all duration-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 transition-all duration-300 origin-center ${
              isMenuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
            style={{ backgroundColor: '#f4f4f4' }}
          />
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
            style={{ backgroundColor: '#f4f4f4' }}
          />
          <span
            className={`w-6 h-0.5 transition-all duration-300 origin-center ${
              isMenuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
            style={{ backgroundColor: '#f4f4f4' }}
          />
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen
              ? 'fixed inset-0 top-16 flex flex-col gap-4 p-6 md:static md:flex md:gap-8 md:p-0'
              : 'hidden md:flex items-center gap-8'
          } transition-all duration-300`}
          style={isMenuOpen ? { backgroundColor: '#292827' } : {}}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:transition-all after:duration-300 hover:after:w-full md:text-base text-lg md:py-0 py-3"
              style={{
                color: '#f4f4f4',
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#F1592A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#f4f4f4';
              }}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          {/* Contact Button - Mobile Only */}
          <button
            className="md:hidden px-4 py-2 text-white rounded-3xl transition-all duration-300 active:scale-95 whitespace-nowrap mt-4"
            style={{ backgroundColor: '#F1592A' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              closeMenu();
            }}
          >
            Contact Us
          </button>
        </nav>

        {/* Contact Button - Desktop Only */}
        <button
          className="hidden md:block px-6 py-2.5 text-white rounded-3xl transition-all duration-300 active:scale-95 whitespace-nowrap"
          style={{ backgroundColor: '#F1592A' }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Contact Us
        </button>
      </div>
    </header>
  );
}
