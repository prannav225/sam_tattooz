export function About() {
  return (
    <section className="w-full py-12 md:py-24 px-4 md:px-8" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Centered Heading */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-lg md:text-xl leading-relaxed mb-4">About</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl">
            Behind the Needle
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image on Left */}
          <div className="flex justify-center">
            <img
              src="/about.png"
              alt="Sam Tattooz"
              className="w-full max-w-sm rounded-lg shadow-lg object-cover aspect-3/4"
            />
          </div>

          {/* Text on Right */}
          <div className="flex flex-col justify-center">
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              I’m Satwinder Singh, a professional tattoo artist based in Bengaluru with over 5 years of experience.
              I specialize in transforming your vision into a permanent work of art on your skin.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-4">
              I don’t just copy images; I collaborate with my clients to create custom pieces that flow with the body’s natural anatomy.
              Every tattoo tells a story, and I'm here to help you tell yours. Whether you're looking for a small meaningful piece 
              or an elaborate design, I bring creativity, precision, and dedication to every project.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              My approach combines technical expertise with artistic vision, ensuring that your tattoo is not just beautiful, 
              but also a true reflection of your personality and values.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">My Philosophy: A tattoo is a collaboration. I believe in creating a safe, inclusive, and relaxed environment where you feel heard. Whether it’s your first tattoo or your fiftieth, I approach every session with the same level of focus and respect.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
