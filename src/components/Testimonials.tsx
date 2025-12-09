export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Manu Alagawadi',
      avatarId: '1',
      stars: 5,
      review: 'Sam is an incredible tattoo artist! The design was exactly what I imagined, and the execution was flawless. Highly recommended!',
    },
    {
      id: 2,
      name: 'Usha Menon',
      avatarId: '2',
      stars: 5,
      review: 'Professional, creative, and talented. Sam made me feel comfortable throughout the process and delivered stunning results.',
    },
    {
      id: 3,
      name: 'Srikanth G',
      avatarId: '3',
      stars: 5,
      review: 'Best tattoo experience ever. Sam listened to my ideas and brought them to life beautifully. Worth every penny!',
    },
    {
      id: 4,
      name: 'Shobhika Srinivasan',
      avatarId: '4',
      stars: 5,
      review: 'Absolutely amazing work! Sam has a unique artistic vision and technical skill. My tattoo is a masterpiece.',
    },
    {
      id: 5,
      name: 'Yashu',
      avatarId: '5',
      stars: 5,
      review: 'Sam is passionate about his craft. The attention to detail and care shown made this an unforgettable experience.',
    },
    {
      id: 6,
      name: 'Pratheek Achar',
      avatarId: '6',
      stars: 5,
      review: 'Outstanding talent and incredible customer service. My tattoo exceeded all expectations. Definitely coming back!',
    },
  ];

  const renderStars = (count: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < count ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  const getAvatarInitials = (name: string) => {
    return name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getAvatarColor = (id: number) => {
    const colors = ['bg-blue-500', 'bg-purple-500', 'bg-pink-500', 'bg-green-500', 'bg-orange-500', 'bg-red-500'];
    return colors[id - 1] || 'bg-blue-500';
  };

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8" id="testimonials">
      <div className="max-w-7xl mx-auto">
        {/* Centered Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl">
            Testimonials
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden p-6 flex flex-col border border-gray-200"
            >
              {/* Photo - Avatar */}
              <div className="mb-4 flex justify-center">
                <div
                  className={`w-20 h-20 rounded-full ${getAvatarColor(testimonial.id)} flex items-center justify-center shadow-md`}
                >
                  <span className="text-white text-2xl font-bold">
                    {getAvatarInitials(testimonial.name)}
                  </span>
                </div>
              </div>

              {/* Name */}
              <h3 className="text-lg md:text-xl font text-center mb-2">
                {testimonial.name}
              </h3>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {renderStars(testimonial.stars)}
              </div>

              {/* Review */}
              <p className="text-base md:text-lg text-center leading-relaxed flex-grow">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
