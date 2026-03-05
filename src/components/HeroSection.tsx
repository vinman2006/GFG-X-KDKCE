import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-elem", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden flex flex-col justify-center bg-[#0E1117]">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0E1117]/60 via-[#0E1117]/90 to-[#0E1117]" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(15,157,88,0.05)_0%,_transparent_70%)]" />

      {/* Core Content */}
      <div className="relative z-30 container mx-auto px-6 lg:px-12 mt-16">
        <div className="max-w-4xl">
          <h1 className="hero-elem font-heading font-extrabold text-[#E6EDF3] text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-4">
            Engineering Minds.
          </h1>

          <h2 className="hero-elem font-mono font-bold text-[#B6F000] text-3xl md:text-4xl lg:text-5xl mb-8 uppercase tracking-widest drop-shadow-[0_0_15px_rgba(182,240,0,0.3)]">
            Compiling the Future.
          </h2>

          <p className="hero-elem font-sans text-lg md:text-xl text-[#8B949E] max-w-2xl leading-relaxed">
            We bridge theory and real-world software engineering through competitive programming, workshops, and open source.
          </p>

          <div className="hero-elem mt-12 flex gap-6">
            <a href="#events" className="group relative overflow-hidden rounded-full bg-white/5 border border-white/10 px-8 py-4 text-sm font-mono font-bold text-[#E6EDF3] backdrop-blur-md transition-all hover:border-[#0F9D58] hover:shadow-[0_0_30px_rgba(15,157,88,0.2)]">
              <div className="absolute inset-0 bg-[#0F9D58]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                Initialize System <span className="text-[#B6F000] group-hover:translate-x-1 transition-transform">&rarr;</span>
              </span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
