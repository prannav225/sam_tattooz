export function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden" id="#">
      {/* Background Image - 70% height */}
      <img
        src="./banner_img.webp"
        alt="Hero background"
        className="absolute top-0 left-0 w-full h-[80%] object-cover"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-[80%] bg-black/40" />

      {/* Content - Centered in the image area */}
      <div className="absolute top-0 left-0 w-full h-[80%] z-10 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-white" style={{ fontFamily: '"Instrument Serif", serif' }}>
            Sam Tattooz
          </h2>
          <h1 className="text-lg md:text-xl text-gray-200 mt-4">
            Transform Your Vision Into Art
          </h1>
        </div>
      </div>
    </section>
  );
}
