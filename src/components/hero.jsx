import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="/video1.mp4"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-5xl">
          {/* Intro Tag */}
          <p className="inline-flex items-center gap-2 text-sm sm:text-base text-white/80 border border-white/15 px-5 py-2 rounded-full mb-7 backdrop-blur bg-white/5">
            👋 Hi, I’m Aman Rawal    QA Engineer
          </p>  

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-6">
            Ensuring{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-lime-400 to-green-500">
              Bug-Free Experiences
            </span>{" "}
            <br />
            with Quality Testing
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10">
            QA Engineer at Techwits IT Solutions (DPIIT Approved). Focused on UI, functional, regression testing for clean and reliable releases.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* View Projects */}
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-uiverse btn-uiverse--primary w-full sm:w-auto"
            >
              <span>View Projects</span>
            </button>

            {/* Contact */}
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-uiverse btn-uiverse--glass w-full sm:w-auto"
            >
              <span>Contact Me</span>
            </button>

            {/* Download Resume */}
            <a
              href="/Aman_Rawal_Resume.pdf"
              download
              className="btn-uiverse btn-uiverse--outline w-full sm:w-auto"
            >
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
