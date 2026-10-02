import { Sparkles, ShieldCheck, Compass, MessageSquare } from "lucide-react";

export function About() {
  const pillars = [
    {
      number: "01",
      title: "Anatomical Flow",
      description:
        "Mapped to your bone structure and muscle movement so the piece feels native to your body.",
    },
    {
      number: "02",
      title: "Built For Longevity",
      description:
        "Calibrated needle depth and premium pigments ensure rich, crisp lines across decades of living.",
    },
    {
      number: "03",
      title: "Clinical Sanctuary",
      description:
        "Hospital-grade sterilization, 100% single-use certified tools, and calm private session rooms.",
    },
    {
      number: "04",
      title: "Collaborative Vision",
      description:
        "Unhurried 1-on-1 consultations where your ideas and reference stories shape the final custom art.",
    },
  ];

  const highlights = [
    {
      icon: MessageSquare,
      title: "1-on-1 Dialogue",
      desc: "Private consultation before any ink touches skin.",
    },
    {
      icon: ShieldCheck,
      title: "Clinical Hygiene",
      desc: "Strict single-use medical barriers & autoclave hygiene.",
    },
    {
      icon: Compass,
      title: "Anatomical Fit",
      desc: "Composed to follow muscle lines and organic flow.",
    },
    {
      icon: Sparkles,
      title: "Zero Generic Flash",
      desc: "Every design is custom-drawn and never duplicated.",
    },
  ];

  return (
    <section
      className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#2E2B29] text-[#F7F5F2] overflow-hidden"
      id="about"
    >
      {/* Background Slat Pattern & Warm Spotlights */}
      <div className="absolute inset-0 warm-spotlight-top pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[650px] h-[500px] ambient-glow-amber pointer-events-none opacity-85" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[450px] ambient-glow-deep pointer-events-none opacity-75" />
      <div className="absolute inset-0 studio-slats-overlay pointer-events-none opacity-30" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 pb-6 border-b border-[#A18773]/20 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D0AD87] mb-2 font-medium">
              <span>✦</span>
              <span>The Atelier Philosophy</span>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#F7F5F2]">
              Behind the Needle.
            </h2>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-[#D0AD87] font-light max-w-sm">
            Tattooed with intention. Built to last. Designed for the individual.
          </p>
        </div>

        {/* Narrative & Visual Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center mb-14 sm:mb-20">
          {/* Left Column: Portrait & Studio Tactile Frame */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              <div className="rounded-2xl overflow-hidden border border-[#A18773]/25 bg-[#5F5652]/30 shadow-2xl relative group">
                <img
                  src="/singh.webp"
                  alt="Satwinder Singh - Sam Tattooz"
                  className="w-full h-[340px] xs:h-[390px] sm:h-[440px] md:h-[480px] object-cover object-top group-hover:scale-102 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E2B29] via-[#2E2B29]/20 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 p-3.5 sm:p-4 glass-smoked rounded-xl border border-[#D0AD87]/20">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#D0AD87] font-semibold">
                    Satwinder Singh
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#D9D2CB] mt-0.5 font-light">
                    Artist & Founder • 5+ Years Custom Tattooing in Bengaluru
                  </p>
                </div>
              </div>

              {/* Architectural Wood & Stone Badge */}
              <div className="hidden sm:block absolute -bottom-4 -right-4 bg-[#5D4737] text-[#F7F5F2] px-4 py-2.5 rounded-xl border border-[#D0AD87]/30 shadow-xl">
                <p className="text-[9px] uppercase tracking-widest text-[#D0AD87]">
                  Bengaluru Atelier
                </p>
                <p className="text-xs font-semibold tracking-wide">
                  Private Appointments
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Feature Grid instead of wordy paragraphs */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 sm:space-y-6">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#5F5652]/40 border border-[#A18773]/25 text-[10px] sm:text-xs uppercase tracking-widest text-[#A18773] mb-3">
                Artist Profile
              </div>
              <h3 className="text-xl xs:text-2xl sm:text-3xl text-[#F7F5F2]">
                Never copy. Never rush. Every piece is an anatomical
                collaboration.
              </h3>
            </div>

            {/* Visual Icon Grid (Instant visual comprehension) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1">
              {highlights.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-3.5 sm:p-4 rounded-xl glass-smoked border border-[#A18773]/25 hover:border-[#D0AD87]/50 backdrop-blur-md transition-all flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#5D4737]/60 border border-[#D0AD87]/30 flex items-center justify-center shrink-0 text-[#D0AD87] mt-0.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-md text-[#F7F5F2]">
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#A18773] font-light mt-0.5 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-5">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-studio-primary cursor-pointer text-xs py-2.5 px-5"
              >
                Consult with Satwinder
              </button>
              <a
                href="#works"
                className="text-xs uppercase tracking-[0.16em] text-[#D0AD87] hover:text-[#F7F5F2] transition-colors font-medium flex items-center gap-1.5"
              >
                <span>Explore Selected Works</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Architectural Pillars Grid with concise 1-sentence descriptions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="glass-smoked-card p-5 sm:p-6 rounded-2xl border border-[#A18773]/20 hover:border-[#D0AD87]/40 transition-all duration-300 group"
            >
              <div className="text-xl sm:text-2xl text-[#D0AD87] font-bold mb-2 group-hover:translate-x-1 transition-transform">
                {pillar.number}
              </div>
              <h4 className="text-base sm:text-lg text-[#F7F5F2] mb-1.5 tracking-wide">
                {pillar.title}
              </h4>
              <p className="text-xs text-[#D9D2CB] font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
