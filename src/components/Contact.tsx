import { useState } from 'react';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', concept: '', placement: '', size: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Centered Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl">
            Ready to Book
          </h2>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Side - Contact Information */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              {/* Intro */}
              <div>
                <p className="text-lg md:text-xl leading-relaxed">
                  To inquire about a custom piece or book a flash appointment, please fill out the form below. I aim to respond to all inquiries within [48 hours]
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="text-3xl" style={{ color: '#F1592A' }}>
                    📞
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-700">
                      +91 887 268 4463
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="text-3xl">
                    ✉️
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl mb-1">
                      Email
                    </h3>
                    <p className="">
                      satwinderamloh4@gmail.com
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="text-3xl">
                    💬
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl mb-1">
                      WhatsApp
                    </h3>
                    <p className="">
                      <a href="https://wa.me/918872684463" className="hover:text-orange-500 transition-colors duration-300" style={{ color: '#F1592A' }}>
                        Message us on WhatsApp
                      </a>
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="text-3xl">
                    📷
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl mb-1">
                      Instagram
                    </h3>
                    <p className="">
                      <a href="https://www.instagram.com/sam_tattooz_?igsh=cW5kYTd0emZscmZz&utm_source=qr" className="hover:text-orange-500 transition-colors duration-300" style={{ color: '#F1592A' }}>
                        @sam_tattooz_
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-lg shadow-lg p-8 md:p-10">
            {submitted ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="text-5xl mb-4">✓</div>
                  <h3 className="text-2xl text-green-600 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-700">
                    We'll get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm md:text-base font-semibold mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm md:text-base font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm md:text-base font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors duration-300"
                    placeholder="+91 XXXX XXXX XX"
                  />
                </div>

                {/* Tattoo Concept */}
                <div>
                  <label htmlFor="concept" className="block text-sm md:text-base font-semibold mb-2">
                    Tattoo Concept
                  </label>
                  <textarea
                    id="concept"
                    name="concept"
                    value={formData.concept}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors duration-300 resize-none"
                    placeholder="Briefly describe what you want"
                  />
                </div>

                {/* Placement & Size Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Placement on Body */}
                  <div>
                    <label htmlFor="placement" className="block text-sm md:text-base font-semibold mb-2">
                      Placement on Body
                    </label>
                    <input
                      type="text"
                      id="placement"
                      name="placement"
                      value={formData.placement}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors duration-300"
                      placeholder="e.g., Inner forearm, left calf"
                    />
                  </div>

                  {/* Approximate Size */}
                  <div>
                    <label htmlFor="size" className="block text-sm md:text-base font-semibold mb-2">
                      Approximate Size
                    </label>
                    <input
                      type="text"
                      id="size"
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors duration-300"
                      placeholder="in inches or cm"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 active:scale-95"
                  style={{ backgroundColor: '#F1592A' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
