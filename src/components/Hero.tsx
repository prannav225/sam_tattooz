export function Hero() {
  return (
    <section
      className="relative w-full min-h-[90vh] flex items-center overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28 px-4 sm:px-6 lg:px-8 bg-[#1C1A19] text-[#F7F5F2]"
      id="#"
    >
      {/* 1. Deep Atmospheric Studio Background (Translating the physical studio interior) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Studio Interior Image with Chiaroscuro Mask */}
        <img
          src="/studio-interior.webp"
          alt="Sam Tattooz Studio Interior"
          className="w-full h-full object-cover object-center opacity-25 scale-105 filter contrast-125 brightness-75"
        />

        {/* Ambient Dark Charcoal & Walnut Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A19] via-[#1C1A19]/80 to-[#1C1A19]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C1A19] via-[#1C1A19]/70 to-transparent" />

        {/* Cinematic Warm Spotlight Beam from Ceiling */}
        <div className="absolute inset-0 hero-spotlight pointer-events-none" />

        {/* Ambient Warm Amber Glow Radiators */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] ambient-glow-amber pointer-events-none opacity-80" />
        <div className="absolute bottom-10 right-10 w-[550px] h-[450px] ambient-glow-deep pointer-events-none opacity-70" />

        {/* Vertical Architectural Slats Texture */}
        <div className="absolute inset-0 studio-slats-overlay opacity-30" />
      </div>

      {/* 3. Main Hero Editorial Content */}
      <div className="relative max-w-7xl mx-auto z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 items-center">
          {/* Left Column: Bold Typography & Architectural Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Studio Identification Tag */}
            <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 rounded-full bg-[#2E2B29]/80 border border-[#D0AD87]/30 backdrop-blur-xl mb-4 sm:mb-8 w-fit shadow-lg shadow-black/30">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#D0AD87] animate-pulse" />
              <span className="text-[9px] xs:text-[10px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[#D0AD87] font-semibold">
                Private Atelier • Bengaluru • By Appointment
              </span>
            </div>

            {/* Giant Editorial Headline */}
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F7F5F2] leading-[0.96] mb-5 sm:mb-6">
              Bold Lines. <br />
              <span className="italic font-light text-[#D0AD87] tracking-normal">
                Built to Last.
              </span>
            </h1>

            {/* Editorial Lead */}
            <div className="max-w-xl mb-6 sm:mb-8">
              <p className="text-sm xs:text-base sm:text-lg text-[#D9D2CB] font-light leading-relaxed">
                Bespoke tattoo art by Satwinder Singh in Bengaluru. Anatomical
                flow, hospital-grade precision, and custom compositions
                engineered to endure.
              </p>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 mb-8 sm:mb-12">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-studio-primary cursor-pointer flex items-center justify-center gap-2 text-xs py-3 px-5 sm:py-3.5 sm:px-7 grow sm:grow-0"
              >
                <span>Book a Session</span>
                <span className="text-sm">→</span>
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-studio-secondary cursor-pointer flex items-center justify-center gap-2 text-xs py-3 px-5 sm:py-3.5 sm:px-7 grow sm:grow-0"
              >
                <span>Explore the Archive</span>
                <span className="text-xs text-[#D0AD87]">↓</span>
              </button>
            </div>

            {/* Key Studio Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 xs:gap-5 sm:gap-6 pt-6 sm:pt-8 border-t border-[#A18773]/25 max-w-lg">
              <div>
                <p className="text-2xl xs:text-3xl md:text-4xl text-[#F7F5F2] font-bold tracking-tight">
                  05+
                </p>
                <p className="text-[9px] xs:text-[10px] uppercase tracking-widest text-[#D0AD87] mt-1 font-semibold">
                  Years Craft
                </p>
                <p className="text-[10px] sm:text-[11px] text-[#A18773] font-light hidden xs:block mt-0.5">
                  Bengaluru Studio
                </p>
              </div>

              <div>
                <p className="text-2xl xs:text-3xl md:text-4xl text-[#D0AD87] font-bold tracking-tight">
                  100%
                </p>
                <p className="text-[9px] xs:text-[10px] uppercase tracking-widest text-[#D0AD87] mt-1 font-semibold">
                  Sterile
                </p>
                <p className="text-[10px] sm:text-[11px] text-[#A18773] font-light hidden xs:block mt-0.5">
                  Single-Use Tools
                </p>
              </div>

              <div>
                <p className="text-2xl xs:text-3xl md:text-4xl text-[#F7F5F2] font-bold tracking-tight">
                  Custom
                </p>
                <p className="text-[9px] xs:text-[10px] uppercase tracking-widest text-[#D0AD87] mt-1 font-semibold">
                  Anatomical
                </p>
                <p className="text-[10px] sm:text-[11px] text-[#A18773] font-light hidden xs:block mt-0.5">
                  Zero Generic Flash
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Museum-Grade Image Presentation */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Backlit Ambient Aura behind the visual frame */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#D0AD87]/20 via-[#8D4C14]/15 to-transparent blur-2xl pointer-events-none" />

              {/* Main Artwork Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-[#D0AD87]/35 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)] bg-[#2E2B29] group">
                <img
                  src="/banner_img.webp"
                  alt="Satwinder Singh Tattoo Craftsmanship"
                  className="w-full h-[360px] xs:h-[420px] sm:h-[480px] md:h-[540px] object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                />

                {/* Smoked Architectural Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A19] via-[#1C1A19]/25 to-transparent opacity-85" />

                {/* Top Corner Pill: Discipline Badge */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 glass-smoked px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 sm:gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D0AD87]" />
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#F7F5F2] font-medium">
                    Fine-Line & Realism
                  </span>
                </div>

                {/* Bottom Architectural Caption Card */}
                <div className="absolute bottom-3 inset-x-3 sm:bottom-5 sm:inset-x-5 glass-smoked-dark p-3.5 sm:p-5 rounded-2xl border border-[#D0AD87]/25 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#D0AD87] font-semibold">
                      Satwinder Singh
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-[#D9D2CB] font-light mt-0.5">
                      Founder & Lead Artist • Sam Tattooz
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold rounded-full bg-[#5D4737] text-[#D0AD87] border border-[#D0AD87]/30 shadow-md">
                      Bengaluru
                    </span>
                  </div>
                </div>
              </div>

              {/* Subtle Architectural Corner Markers */}
              <div className="absolute -top-2.5 -right-2.5 sm:-top-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#D0AD87]/80 pointer-events-none" />
              <div className="absolute -bottom-2.5 -left-2.5 sm:-bottom-3 sm:-left-3 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#D0AD87]/80 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
