import { useEffect, useRef } from "react";
import Spline from '@splinetool/react-spline';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

      gsap.to(".scroll-indicator", {
        y: 10,
        opacity: 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      // Parallax effect for 3D canvas
      gsap.to(".hero-canvas", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden flex flex-col justify-center bg-[#0E1117]">
      {/* Background Image & Gradient */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
        style={{ backgroundImage: "url('/kdkce.jpg')" }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0E1117]/80 via-[#0E1117]/95 to-[#0E1117]" />

      {/* 3D Canvas Env */}
      <div className="hero-canvas absolute inset-0 z-20 pointer-events-auto">
        <Spline scene="https://prod.spline.design/M0wTt8Ij2Vpdvotm/scene.splinecode" />
      </div>

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
            <a href="#join" className="group relative overflow-hidden rounded-full bg-white/5 border border-white/10 px-8 py-4 text-sm font-mono font-bold text-[#E6EDF3] backdrop-blur-md transition-all hover:border-[#0F9D58] hover:shadow-[0_0_30px_rgba(15,157,88,0.2)]">
              <div className="absolute inset-0 bg-[#0F9D58]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                Initialize System <span className="text-[#B6F000] group-hover:translate-x-1 transition-transform">&rarr;</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] text-[#8B949E] uppercase tracking-[0.3em]">System Active</span>
        <div className="scroll-indicator w-6 h-10 border border-[#8B949E]/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#0F9D58] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
