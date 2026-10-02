export function Footer() {
  return (
    <footer className="relative w-full bg-[#181615] text-[#F7F5F2] pt-12 sm:pt-16 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#A18773]/20">
      {/* Background Slat Overlay */}
      <div className="absolute inset-0 studio-slats-overlay pointer-events-none opacity-25" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Instagram CTA Banner */}
        <div className="mb-12 sm:mb-16 p-6 sm:p-8 md:p-12 rounded-2xl bg-[#5D4737]/30 border border-[#A18773]/30 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
          <div>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#D0AD87] font-semibold">
              ✦ Live Studio Archive
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#F7F5F2] mt-1" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
              Follow the Work on Instagram
            </h3>
            <p className="text-xs sm:text-sm text-[#D9D2CB] font-light mt-1">
              Fresh healed pieces, client progression, and studio behind-the-scenes @sam_tattooz_
            </p>
          </div>
          <a
            href="https://www.instagram.com/sam_tattooz_/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-studio-primary whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 text-xs py-3 px-6 w-full sm:w-auto"
          >
            <span>See More Work on Instagram</span>
            <span>↗</span>
          </a>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-[#A18773]/20">
          {/* Brand Column */}
          <div className="sm:col-span-2 md:col-span-5 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Sam Tattooz"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-[#D0AD87]/30"
              />
              <span className="text-2xl sm:text-3xl tracking-tight text-[#F7F5F2]" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                Sam Tattooz
              </span>
            </div>
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#D0AD87] font-medium">
              Bespoke Tattoo Atelier • Bengaluru
            </p>
            <p className="text-xs sm:text-sm text-[#A18773] max-w-sm leading-relaxed font-light">
              Founded by Satwinder Singh. An architectural sanctuary dedicated to custom tattooing, anatomical precision, and lifelong integrity.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-2 sm:space-y-3">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#D0AD87] font-semibold mb-2 sm:mb-3">
              Navigation
            </p>
            <ul className="space-y-2 text-xs uppercase tracking-wider text-[#D9D2CB]">
              <li>
                <a href="#works" className="hover:text-[#D0AD87] transition-colors">Curated Portfolio</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D0AD87] transition-colors">Philosophy & Artist</a>
              </li>
              <li>
                <a href="#studio" className="hover:text-[#D0AD87] transition-colors">The Atelier Space</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#D0AD87] transition-colors">Collector Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D0AD87] transition-colors">Book a Consultation</a>
              </li>
            </ul>
          </div>

          {/* Atelier Protocol & Coordinates */}
          <div className="md:col-span-4 space-y-2 sm:space-y-3">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#D0AD87] font-semibold mb-2 sm:mb-3">
              Studio Coordinates
            </p>
            <p className="text-xs sm:text-sm text-[#D9D2CB] font-light">
              Bengaluru, Karnataka, India
            </p>
            <p className="text-[11px] sm:text-xs text-[#A18773] font-light">
              Hours: By Confirmed Appointment Only
            </p>
            <div className="pt-1 sm:pt-2 flex flex-col gap-1 text-xs text-[#D9D2CB]">
              <a href="tel:+918872684463" className="hover:text-[#D0AD87] transition-colors">
                +91 887 268 4463
              </a>
              <a href="mailto:satwinderamloh4@gmail.com" className="hover:text-[#D0AD87] transition-colors truncate">
                satwinderamloh4@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left text-[11px] sm:text-xs text-[#A18773] font-light">
          <p>© {new Date().getFullYear()} Sam Tattooz. All rights reserved.</p>
          <p className="tracking-wide">
            Designed with architectural discipline & soul.
          </p>
        </div>
      </div>
    </footer>
  );
}
