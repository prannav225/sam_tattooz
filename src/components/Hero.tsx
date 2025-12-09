export function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden" id="#">
      {/* Background Image - 70% height */}
      <img
        src="./banner_img.webp"
        alt="Hero background"
        className="absolute top-0 left-0 w-full h-fit object-cover"
      />

      {/* Overlay - Semi-transparent black */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60" />

      {/* Content - Centered in the image area */}
      <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-7xl md:text-8xl lg:text-9xl text-white">
            Bold Lines. Built to Last
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mt-4">
            Professional tattooing in the heart of Bengaluru. 
            <br />
            Bringing your concepts to life with precision and soul.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              className="btn-accent px-6 md:px-8 py-2 text-white rounded-3xl font-semibold transition-all duration-300 active:scale-95 whitespace-nowrap hover:opacity-90 cursor-pointer"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Inked
            </button>
            <button
              className="px-6 md:px-8 py-2 text-white rounded-3xl font-semibold transition-all duration-300 active:scale-95 whitespace-nowrap border-2 border-white hover:opacity-90 cursor-pointer"
              onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See the Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
