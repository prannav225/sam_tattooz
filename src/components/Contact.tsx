import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    concept: '',
    placement: '',
    size: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Initialize email.js
  useEffect(() => {
    emailjs.init('rWgfx85P7wMrGBde0');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Send email using email.js preserving exact service, template and payload
      await emailjs.send(
        'service_ty5v2vj',
        'template_xxkzye8',
        {
          to_email: 'satwinderamloh4@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          concept: formData.concept,
          placement: formData.placement,
          size: formData.size,
          reply_to: formData.email,
        },
        'rWgfx85P7wMrGBde0'
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', concept: '', placement: '', size: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to send message. Please try again.';
      setError(errorMessage);
      console.error('Email send error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-studio-concrete-ambient text-[#F7F5F2] overflow-hidden" id="contact">
      {/* Warm Ambient Studio Illumination */}
      <div className="absolute inset-0 warm-spotlight-top pointer-events-none" />
      <div className="absolute inset-0 warm-spotlight-side-left pointer-events-none" />
      <div className="absolute inset-0 warm-spotlight-side-right pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[700px] h-[550px] ambient-glow-amber pointer-events-none opacity-90" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[450px] ambient-glow-deep pointer-events-none opacity-80" />
      <div className="absolute inset-0 studio-slats-overlay pointer-events-none opacity-35" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-[#A18773]/30 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#D0AD87] mb-2 sm:mb-3 font-medium">
              <span>✦</span>
              <span>Consultations & Sessions</span>
            </div>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-[#F7F5F2]">
              Ready for Your Next Piece?
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm md:text-base text-[#F7F5F2]/90 font-light leading-relaxed">
            Begin the dialogue. Share your concept, placement ideas, and timeline. Satwinder will review and respond within 24–48 hours.
          </p>
        </div>

        {/* Two-Column Grid: Studio Info vs Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Communication & Studio Details */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="p-5 sm:p-7 md:p-8 rounded-2xl bg-[#2E2B29]/80 backdrop-blur-md border border-[#A18773]/25">
              <h3 className="text-xl sm:text-2xl text-[#F7F5F2] mb-2 sm:mb-3" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                Studio Direct Channels
              </h3>
              <p className="text-xs sm:text-sm text-[#D9D2CB] font-light leading-relaxed mb-5 sm:mb-6">
                Prefer immediate correspondence? Reach out via WhatsApp or explore our latest works on Instagram.
              </p>

              <div className="space-y-3 sm:space-y-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/918872684463"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-[#5F5652]/30 hover:bg-[#5F5652]/50 border border-[#A18773]/20 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <span className="text-lg sm:text-xl text-[#D0AD87]">💬</span>
                    <div>
                      <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#A18773]">WhatsApp Direct</p>
                      <p className="text-xs sm:text-sm font-semibold text-[#F7F5F2]">+91 887 268 4463</p>
                    </div>
                  </div>
                  <span className="text-xs text-[#D0AD87] group-hover:translate-x-1 transition-transform">
                    Chat ↗
                  </span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+918872684463"
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-[#5F5652]/30 hover:bg-[#5F5652]/50 border border-[#A18773]/20 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <span className="text-lg sm:text-xl text-[#D0AD87]">📞</span>
                    <div>
                      <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#A18773]">Phone Call</p>
                      <p className="text-xs sm:text-sm font-semibold text-[#F7F5F2]">+91 887 268 4463</p>
                    </div>
                  </div>
                  <span className="text-xs text-[#D0AD87] group-hover:translate-x-1 transition-transform">
                    Call ↗
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:satwinderamloh4@gmail.com"
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-[#5F5652]/30 hover:bg-[#5F5652]/50 border border-[#A18773]/20 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <span className="text-lg sm:text-xl text-[#D0AD87]">✉️</span>
                    <div>
                      <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#A18773]">Official Email</p>
                      <p className="text-xs sm:text-sm font-semibold text-[#F7F5F2] truncate max-w-[190px] xs:max-w-none">satwinderamloh4@gmail.com</p>
                    </div>
                  </div>
                  <span className="text-xs text-[#D0AD87] group-hover:translate-x-1 transition-transform">
                    Send ↗
                  </span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/sam_tattooz_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-[#5F5652]/30 hover:bg-[#5F5652]/50 border border-[#A18773]/20 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3 sm:gap-3.5">
                    <span className="text-lg sm:text-xl text-[#D0AD87]">✦</span>
                    <div>
                      <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#A18773]">Instagram Portfolio</p>
                      <p className="text-xs sm:text-sm font-semibold text-[#F7F5F2]">@sam_tattooz_</p>
                    </div>
                  </div>
                  <span className="text-xs text-[#D0AD87] group-hover:translate-x-1 transition-transform">
                    Follow ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Studio Location Card */}
            <div className="p-5 sm:p-7 md:p-8 rounded-2xl bg-[#2E2B29]/80 backdrop-blur-md border border-[#A18773]/25">
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D0AD87] font-semibold">
                  Atelier Location
                </span>
                <span className="text-[10px] sm:text-xs text-[#A18773]">Private Studio</span>
              </div>
              <p className="text-sm sm:text-base text-[#F7F5F2] font-medium mb-1">
                Bengaluru, Karnataka, India
              </p>
              <p className="text-xs text-[#D9D2CB] font-light leading-relaxed mb-3 sm:mb-4">
                Exact studio coordinates and arrival instructions are shared upon confirmation of your appointment to maintain sanctuary privacy.
              </p>
              <a
                href="https://maps.google.com/?q=Sam+Tattooz+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] sm:text-xs uppercase tracking-wider text-[#D0AD87] hover:text-[#F7F5F2] font-semibold inline-flex items-center gap-1.5 transition-colors"
              >
                <span>View Bengaluru District Map</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Refined Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-8 md:p-12 rounded-2xl bg-[#2E2B29]/95 backdrop-blur-xl border border-[#D0AD87]/25 shadow-2xl shadow-black/40">
              {submitted ? (
                <div className="py-12 sm:py-16 text-center space-y-3 sm:space-y-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#5D4737] border border-[#D0AD87] text-[#D0AD87] flex items-center justify-center text-2xl sm:text-3xl mx-auto">
                    ✓
                  </div>
                  <h3 className="text-2xl sm:text-3xl text-[#F7F5F2]" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                    Consultation Request Received
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-[#D9D2CB] font-light max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Satwinder will review your concept and reach out via email or phone within 24–48 hours to schedule your session.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl text-[#F7F5F2]" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
                      Session Request Form
                    </h3>
                    <p className="text-[11px] sm:text-xs md:text-sm text-[#A18773] mt-0.5 sm:mt-1 font-light">
                      Please provide details regarding your concept, sizing, and placement.
                    </p>
                  </div>

                  {error && (
                    <div className="p-3.5 sm:p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs sm:text-sm leading-relaxed">
                      {error}
                    </div>
                  )}

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#D0AD87] font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Maya Rao"
                        className="w-full px-4 py-3 rounded-xl bg-[#5F5652]/20 border border-[#A18773]/30 text-[#F7F5F2] placeholder-[#A18773]/70 focus:outline-none focus:border-[#D0AD87] focus:ring-1 focus:ring-[#D0AD87] transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#D0AD87] font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="e.g. maya@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#5F5652]/20 border border-[#A18773]/30 text-[#F7F5F2] placeholder-[#A18773]/70 focus:outline-none focus:border-[#D0AD87] focus:ring-1 focus:ring-[#D0AD87] transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-[#D0AD87] font-medium mb-2">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-[#5F5652]/20 border border-[#A18773]/30 text-[#F7F5F2] placeholder-[#A18773]/70 focus:outline-none focus:border-[#D0AD87] focus:ring-1 focus:ring-[#D0AD87] transition-all text-sm"
                    />
                  </div>

                  {/* Tattoo Concept */}
                  <div>
                    <label htmlFor="concept" className="block text-xs uppercase tracking-wider text-[#D0AD87] font-medium mb-2">
                      Tattoo Concept & Meaning *
                    </label>
                    <textarea
                      id="concept"
                      name="concept"
                      value={formData.concept}
                      onChange={handleChange}
                      required
                      rows={3}
                      placeholder="Describe your subject matter, visual elements, references, or symbolic intention..."
                      className="w-full px-4 py-3 rounded-xl bg-[#5F5652]/20 border border-[#A18773]/30 text-[#F7F5F2] placeholder-[#A18773]/70 focus:outline-none focus:border-[#D0AD87] focus:ring-1 focus:ring-[#D0AD87] transition-all text-sm resize-none"
                    />
                  </div>

                  {/* Placement & Size */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="placement" className="block text-xs uppercase tracking-wider text-[#D0AD87] font-medium mb-2">
                        Placement on Body *
                      </label>
                      <input
                        type="text"
                        id="placement"
                        name="placement"
                        value={formData.placement}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Inner forearm, spine, collarbone"
                        className="w-full px-4 py-3 rounded-xl bg-[#5F5652]/20 border border-[#A18773]/30 text-[#F7F5F2] placeholder-[#A18773]/70 focus:outline-none focus:border-[#D0AD87] focus:ring-1 focus:ring-[#D0AD87] transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="size" className="block text-xs uppercase tracking-wider text-[#D0AD87] font-medium mb-2">
                        Approximate Size *
                      </label>
                      <input
                        type="text"
                        id="size"
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                        required
                        placeholder="e.g. 4x3 inches, palm sized, sleeve"
                        className="w-full px-4 py-3 rounded-xl bg-[#5F5652]/20 border border-[#A18773]/30 text-[#F7F5F2] placeholder-[#A18773]/70 focus:outline-none focus:border-[#D0AD87] focus:ring-1 focus:ring-[#D0AD87] transition-all text-sm"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-studio-primary w-full py-4 text-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-[#2E2B29] border-t-transparent rounded-full animate-spin" />
                          <span>Transmitting Inscription Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Session Inquiry</span>
                          <span>→</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-[#A18773] text-center mt-3 font-light">
                      Protected clinical inquiries • No spam guaranteed
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
