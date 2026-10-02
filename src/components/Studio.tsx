export function Studio() {
  const architecturalElements = [
    {
      title: 'Warm Grey Concrete Walls',
      description: 'Tactile, acoustic calm that shuts out city noise for deep creative concentration.',
      material: 'Concrete & Plaster',
    },
    {
      title: 'Dark Walnut Slats & Timber',
      description: 'Structural wood panels providing architectural rhythm and grounded warmth.',
      material: 'Natural Walnut',
    },
    {
      title: 'Rough Natural Stone',
      description: 'Earthy raw stone textures grounding the studio in timeless physical presence.',
      material: 'Raw Stone',
    },
    {
      title: 'Amber Architectural Glow',
      description: 'Warm, low-temperature indirect illumination engineered to relax clients during long sessions.',
      material: 'Warm Ambient Light',
    },
  ];

  return (
    <section className="relative w-full pt-16 pb-24 sm:pt-20 sm:pb-28 md:pt-32 md:pb-36 px-4 sm:px-6 lg:px-8 bg-studio-concrete-ambient text-[#F7F5F2] overflow-hidden" id="studio">
      {/* Dynamic Warm Studio Spotlights & Slat Atmosphere */}
      <div className="absolute inset-0 warm-spotlight-top pointer-events-none" />
      <div className="absolute inset-0 warm-spotlight-side-left pointer-events-none" />
      <div className="absolute inset-0 warm-spotlight-side-right pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[500px] ambient-glow-amber pointer-events-none opacity-85" />
      <div className="absolute inset-0 studio-slats-overlay pointer-events-none opacity-30" />

      {/* Seamless Feathered Blend into Works Section */}
      <div className="absolute bottom-0 inset-x-0 h-44 md:h-64 seam-blend-bottom pointer-events-none z-10" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-[#A18773]/30 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#F7F5F2] mb-2 sm:mb-3 font-medium">
              <span>✦</span>
              <span>The Physical Sanctuary</span>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#F7F5F2]">
              The Atelier.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm md:text-base text-[#F7F5F2]/90 font-light leading-relaxed">
            Designed as a tangible extension of the craft—minimal, tactile, and illuminated with warm amber serenity.
          </p>
        </div>

        {/* Feature Layout: Studio Interior Reference + Architectural Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center mb-12 sm:mb-16">
          {/* Main Visual: Studio Interior Reference Image */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-[#D0AD87]/30 shadow-2xl shadow-black/40 group bg-[#2E2B29]">
              <img
                src="/studio-interior.webp"
                alt="Sam Tattooz Studio Interior - Concrete, Stone, Walnut Wood and Warm Lighting"
                className="w-full h-[280px] xs:h-[350px] sm:h-[440px] md:h-[520px] object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E2B29]/90 via-[#2E2B29]/20 to-transparent" />

              {/* Floating Architectural Badge */}
              <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 glass-smoked px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#D0AD87]/25 flex items-center gap-2">
                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#D0AD87] animate-pulse" />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-[#F7F5F2]">
                  Bengaluru Atelier Interior
                </span>
              </div>

              {/* Bottom Caption Bar */}
              <div className="absolute bottom-3 inset-x-3 sm:bottom-5 sm:inset-x-5 glass-smoked p-3.5 sm:p-5 rounded-xl border border-[#D0AD87]/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D0AD87] font-semibold">
                    Architectural Space Design
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#D9D2CB] font-light mt-0.5">
                    Concrete walls • Rough stone • Dark walnut wood • Hospital sterilization
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Sam+Tattooz+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] sm:text-xs uppercase tracking-wider text-[#F7F5F2] hover:text-[#D0AD87] transition-colors font-medium flex items-center gap-1.5 whitespace-nowrap bg-[#2E2B29]/80 px-3 py-1.5 rounded-lg border border-[#A18773]/30"
                >
                  <span>Open in Maps</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Architectural Elements Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3.5 sm:gap-4">
            <div className="space-y-3 sm:space-y-4">
              {architecturalElements.map((elem) => (
                <div
                  key={elem.title}
                  className="p-4 sm:p-5 rounded-xl bg-[#2E2B29]/75 backdrop-blur-md border border-[#A18773]/25 hover:border-[#D0AD87]/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base sm:text-lg text-[#F7F5F2] font-medium" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                      {elem.title}
                    </h3>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#5D4737] text-[#D0AD87] border border-[#A18773]/30">
                      {elem.material}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#D9D2CB] font-light leading-relaxed">
                    {elem.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Visit Atelier Summary */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#2E2B29] border border-[#D0AD87]/30 mt-1 sm:mt-2">
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D0AD87] font-semibold">
                  Visiting Protocol
                </span>
                <span className="text-[10px] sm:text-xs text-[#A18773]">Private Sessions</span>
              </div>
              <p className="text-xs text-[#D9D2CB] leading-relaxed mb-3 sm:mb-4 font-light">
                To guarantee zero distractions and uncompromising focus, all consultations and tattooing sessions are scheduled by private appointment.
              </p>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-studio-primary text-xs py-2 px-4 cursor-pointer"
                >
                  Reserve Studio Time
                </button>
                <a
                  href="https://wa.me/918872684463"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-studio-secondary text-xs py-2 px-4 flex items-center gap-1.5"
                >
                  <span>WhatsApp Inquiries</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
