export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Manu Alagawadi',
      session: 'Custom Fine-Line Concept',
      review:
        'Sam is an incredible tattoo artist! The design was exactly what I imagined, and the execution was flawless. Calm environment, meticulous hygiene, and exceptional linework. Highly recommended!',
    },
    {
      id: 2,
      name: 'Usha Menon',
      session: 'Botanical Flow Piece',
      review:
        'Professional, creative, and remarkably patient. Sam made me feel entirely comfortable throughout the session and delivered stunning, graceful results that move perfectly with my body.',
    },
    {
      id: 3,
      name: 'Srikanth G',
      session: 'Black & Grey Forearm Wrap',
      review:
        'Best tattoo experience in Bengaluru. Sam listened to my ideas, refined the anatomy placement, and brought the entire concept to life with razor-sharp precision. Worth every penny.',
    },
    {
      id: 4,
      name: 'Shobhika Srinivasan',
      session: 'Intricate Sacred Design',
      review:
        'Absolutely world-class work. Sam has a rare balance of artistic vision and surgical technical skill. The healed lines are as crisp as day one. My piece is truly a permanent masterpiece.',
    },
    {
      id: 5,
      name: 'Yashu',
      session: 'Custom Symbolic Piece',
      review:
        'Sam is deeply passionate about his craft. The attention to detail, sanitary discipline, and quiet care shown during the appointment made this an unforgettable and grounding experience.',
    },
    {
      id: 6,
      name: 'Pratheek Achar',
      session: 'Detailed Realism Concept',
      review:
        'Outstanding talent and unmatched hospitality. My tattoo exceeded all expectations in both healing and aesthetic depth. I will certainly be returning for future pieces.',
    },
  ];

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <section className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#2E2B29] text-[#F7F5F2]" id="testimonials">
      {/* Background Architectural Slats */}
      <div className="absolute inset-0 studio-slats-overlay pointer-events-none opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] ambient-glow-amber pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#A18773]/20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D0AD87] mb-3 font-medium">
              <span>✦</span>
              <span>Client Words</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#F7F5F2]">
              Collector Testimonials.
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-[#D9D2CB] font-light leading-relaxed">
            Honest reflections from clients who trusted Sam Tattooz with their vision, skin, and permanent stories.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-smoked-card p-7 sm:p-8 rounded-2xl border border-[#A18773]/20 hover:border-[#D0AD87]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Quotation Mark & Amber Stars */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-4xl sm:text-5xl leading-none text-[#D0AD87]/40 group-hover:text-[#D0AD87] transition-colors"
                    style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
                  >
                    “
                  </span>
                  <div className="flex items-center gap-1 text-[#D0AD87] text-xs">
                    {'★'.repeat(5)}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-sm md:text-base text-[#D9D2CB] font-light leading-relaxed mb-6 italic">
                  "{t.review}"
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="pt-4 border-t border-[#A18773]/20 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#5D4737] border border-[#D0AD87]/30 flex items-center justify-center text-xs font-semibold text-[#D0AD87] tracking-wider shrink-0">
                  {getInitials(t.name)}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#F7F5F2]">
                    {t.name}
                  </h3>
                  <p className="text-[11px] text-[#A18773] uppercase tracking-wider">
                    {t.session}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
