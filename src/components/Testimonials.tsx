import { useState } from 'react';
import { Pause, Play } from 'lucide-react';

export function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Manu Alagawadi',
      session: 'Fine-Line Concept',
      review:
        'Sam is an incredible tattoo artist. The design was exactly what I imagined, and the execution was flawless. Calm environment, meticulous hygiene, and exceptional linework.',
    },
    {
      id: 2,
      name: 'Usha Menon',
      session: 'Botanical Flow',
      review:
        'Professional, creative, and remarkably patient. Sam made me feel entirely comfortable throughout the session and delivered stunning, graceful results that move with my body.',
    },
    {
      id: 3,
      name: 'Srikanth G',
      session: 'Forearm Wrap',
      review:
        'Best tattoo experience in Bengaluru. Sam listened to my ideas, refined the anatomy placement, and brought the entire concept to life with razor-sharp precision.',
    },
    {
      id: 4,
      name: 'Shobhika Srinivasan',
      session: 'Intricate Sacred Design',
      review:
        'World-class work. Sam has a rare balance of artistic vision and surgical technical skill. The healed lines are as crisp as day one. Truly a permanent masterpiece.',
    },
    {
      id: 5,
      name: 'Yashu',
      session: 'Symbolic Custom Piece',
      review:
        'Deeply passionate about his craft. The attention to detail, sanitary discipline, and quiet care shown during the appointment made this an unforgettable experience.',
    },
    {
      id: 6,
      name: 'Pratheek Achar',
      session: 'Realism Concept',
      review:
        'Outstanding talent and unmatched hospitality. My tattoo exceeded all expectations in both healing and aesthetic depth. Highly recommend for custom work.',
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

  // Duplicate for seamless 0-jump continuous marquee loop
  const marqueeCards = [...testimonials, ...testimonials];

  return (
    <section className="relative w-full py-16 sm:py-24 md:py-32 bg-[#2E2B29] text-[#F7F5F2] overflow-hidden" id="testimonials">
      {/* Background Architectural Slats */}
      <div className="absolute inset-0 studio-slats-overlay pointer-events-none opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] ambient-glow-amber pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-6 border-b border-[#A18773]/20 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D0AD87] mb-2 font-medium">
              <span>✦</span>
              <span>Client Words</span>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#F7F5F2]">
              Collector Words.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] sm:text-xs text-[#D0AD87] uppercase tracking-wider font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Hover or tap card to pause</span>
            </span>

            {/* Pause / Resume Button */}
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-[#1C1A19]/80 border border-[#D0AD87]/30 text-[#D0AD87] hover:text-[#F7F5F2] text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              aria-label={isPaused ? 'Resume scroll' : 'Pause scroll'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline text-[10px] uppercase tracking-wider">
                {isPaused ? 'Resume' : 'Pause'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Continuous Scrolling Marquee Carousel */}
      <div
        className="relative w-full marquee-mask overflow-hidden py-3"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          className={`animate-marquee-continuous flex items-stretch gap-4 sm:gap-6 pl-4 ${
            isPaused ? 'marquee-paused' : ''
          }`}
        >
          {marqueeCards.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="w-[290px] xs:w-[330px] sm:w-[380px] md:w-[420px] shrink-0 glass-smoked-card p-5 sm:p-7 rounded-2xl border border-[#A18773]/25 hover:border-[#D0AD87]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Quotation Mark & Amber Stars */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="text-3xl sm:text-4xl leading-none text-[#D0AD87]/50 group-hover:text-[#D0AD87] transition-colors font-serif">
                    “
                  </span>
                  <div className="flex items-center gap-1 text-[#D0AD87] text-xs">
                    {'★'.repeat(5)}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm md:text-[15px] text-[#D9D2CB] font-light leading-relaxed mb-5 italic">
                  "{t.review}"
                </p>
              </div>

              {/* Client Info Footer */}
              <div className="pt-3.5 border-t border-[#A18773]/20 flex items-center gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#5D4737] border border-[#D0AD87]/30 flex items-center justify-center text-[11px] font-semibold text-[#D0AD87] tracking-wider shrink-0">
                  {getInitials(t.name)}
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-semibold text-[#F7F5F2] truncate">
                    {t.name}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-[#A18773] uppercase tracking-wider truncate">
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
