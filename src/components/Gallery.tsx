export function Gallery() {
  const galleryImages = [
    { id: 1, src: '/gallery/1.webp', alt: 'Tattoo design 1' },
    { id: 2, src: '/gallery/2.webp', alt: 'Tattoo design 2' },
    { id: 3, src: '/gallery/3.jpg', alt: 'Tattoo design 3' },
    { id: 4, src: '/gallery/4.jpg', alt: 'Tattoo design 4' },
    { id: 5, src: '/gallery/5.webp', alt: 'Tattoo design 5' },
    { id: 6, src: '/gallery/6.webp', alt: 'Tattoo design 6' },
    { id: 7, src: '/gallery/7.webp', alt: 'Tattoo design 7' },
    { id: 8, src: '/gallery/8.webp', alt: 'Tattoo design 8' },
    { id: 9, src: '/gallery/9.webp', alt: 'Tattoo design 9' },
    { id: 10, src: '/gallery/10.webp', alt: 'Tattoo design 10' },
    { id: 11, src: '/gallery/11.webp', alt: 'Tattoo design 11' },
    { id: 12, src: '/gallery/12.webp', alt: 'Tattoo design 12' },
    { id: 13, src: '/gallery/13.webp', alt: 'Tattoo design 13' },
    { id: 14, src: '/gallery/14.webp', alt: 'Tattoo design 14' },
    { id: 15, src: '/gallery/15.jpg', alt: 'Tattoo design 15' },
    { id: 16, src: '/gallery/16.webp', alt: 'Tattoo design 16' },
    { id: 17, src: '/gallery/17.jpg', alt: 'Tattoo design 17' },
    { id: 18, src: '/gallery/18.jpg', alt: 'Tattoo design 18' },
    { id: 19, src: '/gallery/19.jpg', alt: 'Tattoo design 19' },
    { id: 20, src: '/gallery/20.webp', alt: 'Tattoo design 20' },
    { id: 21, src: '/gallery/21.jpg', alt: 'Tattoo design 21' },
    { id: 24, src: '/gallery/24.webp', alt: 'Tattoo design 24' },
    { id: 25, src: '/gallery/25.jpg', alt: 'Tattoo design 25' },
    { id: 26, src: '/gallery/26.webp', alt: 'Tattoo design 26' },
    { id: 27, src: '/gallery/27.jpg', alt: 'Tattoo design 27' },
    { id: 28, src: '/gallery/28.webp', alt: 'Tattoo design 28' },
    { id: 29, src: '/gallery/29.webp', alt: 'Tattoo design 29' },
    { id: 30, src: '/gallery/30.webp', alt: 'Tattoo design 30' },
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Centered Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl">
            Recent Works
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              style={{ aspectRatio: '3/4' }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
