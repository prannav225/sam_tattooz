export function About() {
  const pillars = [
    {
      number: '01',
      title: 'Anatomical Flow',
      description:
        'A tattoo is not a flat canvas. Every piece is mapped to body contours, bone structure, and muscle motion so it feels native to your form.',
    },
    {
      number: '02',
      title: 'Built For Longevity',
      description:
        'Calibrated needle depth and meticulous pigment saturation ensure lines remain rich, sharp, and enduring through decades of living.',
    },
    {
      number: '03',
      title: 'Clinical Sanctuary',
      description:
        'Strict hospital-grade sterilization, single-use certified needles, and medical barrier hygiene inside a calm, private architectural space.',
    },
    {
      number: '04',
      title: 'Collaborative Vision',
      description:
        'Direct 1-on-1 consultations without rush. Whether an intimate symbol or a full-scale concept, your voice shapes the final work.',
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#2E2B29] text-[#F7F5F2] overflow-hidden" id="about">
      {/* Background Slat Pattern & Warm Spotlights */}
      <div className="absolute inset-0 warm-spotlight-top pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[650px] h-[500px] ambient-glow-amber pointer-events-none opacity-85" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[450px] ambient-glow-deep pointer-events-none opacity-75" />
      <div className="absolute inset-0 studio-slats-overlay pointer-events-none opacity-30" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 md:mb-20 pb-6 sm:pb-8 border-b border-[#A18773]/20 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D0AD87] mb-2 sm:mb-3 font-medium">
              <span>✦</span>
              <span>The Atelier Philosophy</span>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#F7F5F2]">
              Behind the Needle.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm md:text-base text-[#D9D2CB] font-light leading-relaxed">
            "A tattoo is a permanent dialogue between client, artist, and human anatomy. We treat every session with singular focus and quiet respect."
          </p>
        </div>

        {/* Narrative & Visual Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-24">
          {/* Left Column: Portrait & Studio Tactile Frame */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              <div className="rounded-2xl overflow-hidden border border-[#A18773]/25 bg-[#5F5652]/30 shadow-2xl relative group">
                <img
                  src="/singh.webp"
                  alt="Satwinder Singh - Sam Tattooz"
                  className="w-full h-[360px] xs:h-[420px] sm:h-[480px] md:h-[520px] object-cover object-top group-hover:scale-102 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E2B29] via-[#2E2B29]/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 glass-smoked rounded-xl border border-[#D0AD87]/20">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#D0AD87] font-semibold">
                    Satwinder Singh
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#D9D2CB] mt-1 font-light">
                    Artist & Studio Principal • 5+ Years Mastering Custom Tattooing in Bengaluru
                  </p>
                </div>
              </div>

              {/* Architectural Wood & Stone Badge */}
              <div className="hidden sm:block absolute -bottom-5 -right-5 bg-[#5D4737] text-[#F7F5F2] px-5 py-3 rounded-xl border border-[#D0AD87]/30 shadow-xl">
                <p className="text-[10px] uppercase tracking-widest text-[#D0AD87]">Bengaluru, India</p>
                <p className="text-sm font-semibold tracking-wide">Custom Tattoo Atelier</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio & Craft Statement */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4 sm:space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-[#5F5652]/40 border border-[#A18773]/25 text-[10px] sm:text-xs uppercase tracking-widest text-[#A18773]">
              Artist Profile
            </div>
            <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-[#F7F5F2] leading-tight" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
              Transforming individual stories into permanent, timeless art.
            </h3>

            <p className="text-sm sm:text-base md:text-lg text-[#D9D2CB] font-light leading-relaxed">
              I’m Satwinder Singh, founder and resident artist at Sam Tattooz. With over five years behind the machine in Bengaluru, my work is driven by one core principle: <strong className="text-[#F7F5F2] font-normal">never copy, never rush</strong>.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-[#D9D2CB]/90 font-light leading-relaxed">
              Tattooing is an intimate, permanent collaboration. Whether you are bringing in a refined concept, seeking guidance on a meaningful milestone, or looking for delicate micro-linework, every project begins with an unhurried consultation to understand your intention.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-[#A18773] leading-relaxed">
              Our studio was designed intentionally to feel nothing like a high-turnover tattoo shop. It is a calm, sterile, architectural haven—combining the warmth of concrete and walnut wood with the highest clinical standards of modern hygiene.
            </p>

            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-studio-primary cursor-pointer text-xs py-3 px-6"
              >
                Consult with Satwinder
              </button>
              <a
                href="#works"
                className="text-xs uppercase tracking-[0.16em] text-[#D0AD87] hover:text-[#F7F5F2] transition-colors font-medium flex items-center gap-1.5"
              >
                <span>Explore Portfolio</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4 sm:pt-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="glass-smoked-card p-5 sm:p-6 md:p-8 rounded-2xl border border-[#A18773]/20 hover:border-[#D0AD87]/40 transition-all duration-300 group"
            >
              <div className="text-2xl sm:text-3xl text-[#D0AD87] font-light mb-3 sm:mb-4 group-hover:translate-x-1 transition-transform" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                {pillar.number}
              </div>
              <h4 className="text-lg sm:text-xl text-[#F7F5F2] mb-2 sm:mb-3 tracking-wide" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                {pillar.title}
              </h4>
              <p className="text-xs md:text-sm text-[#D9D2CB] font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
