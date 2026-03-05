import { useEffect, useRef, Suspense, useState } from "react";
import { gsap } from "gsap";
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;
      if (i > text.length) {
        clearInterval(interval);
        setIsComplete(true);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="relative inline-block overflow-hidden">
      <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#E6EDF3] via-[#0F9D58] to-[#E6EDF3] bg-[length:200%_auto] animate-gradient-x">
        {displayText}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className={`inline-block w-[4px] h-[0.9em] bg-[#0F9D58] ml-2 align-middle shadow-[0_0_10px_#0F9D58] ${isComplete ? 'opacity-0' : ''}`}
      />
    </span>
  );
};

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
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden flex items-center bg-[#0E1117] pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0E1117]/40 via-[#0E1117]/80 to-[#0E1117] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(15,157,88,0.03)_0%,_transparent_70%)]" />

      {/* Core Content: 2-column Grid */}
      <div className="relative z-30 container mx-auto px-10 max-w-[1200px] grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-20 items-center py-[120px]">

        {/* Left Column: Text Content */}
        <div className="flex flex-col gap-[22px] max-w-[540px]">
          <h1 className="hero-elem font-sans font-extrabold text-[#E6EDF3] text-[56px] lg:text-[64px] leading-[1.1] tracking-[-0.03em]">
            <TypewriterText text="GDG X KDKCE" />
          </h1>

          <h2 className="hero-elem font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#0F9D58] to-[#B6F000] text-[18px] font-bold uppercase tracking-[8px] animate-pulse">
            BUILD • LEARN • SHIP
          </h2>

          <p className="hero-elem font-sans text-lg text-[#8B949E] leading-relaxed border-l-2 border-[#0F9D58]/30 pl-6">
            GDG X KDKCE is a student-driven developer community focused on learning, building, and sharing technology. We organize workshops, hackathons, and hands-on sessions to help students explore modern development and real-world problem solving.
          </p>

          <div className="hero-elem mt-[15px]">
            <a
              href="https://gdg.community.dev/chapters/gdg-on-campus-kdkce-nagpur-india/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block rounded-full bg-[#0F9D58] px-8 py-4 text-sm font-sans font-bold text-[#E6EDF3] transition-all hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(15,157,88,0.4)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F9D58] to-[#B6F000] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Join The Community <span className="text-white transition-transform duration-300 group-hover:translate-x-2">&rarr;</span>
              </span>
            </a>
          </div>
        </div>

        {/* Right Column: 3D Robot Scene */}
        <div className="hero-elem relative flex items-center justify-center w-full h-[520px]">
          {/* Radial Glow behind robot */}
          <div className="absolute w-[500px] h-[500px] bg-radial-gradient from-[#1aff9c22] to-transparent blur-[80px] pointer-events-none"
            style={{ background: 'radial-gradient(circle, #1aff9c22, transparent 70%)' }} />

          <div className="relative z-10 w-full h-full transform scale-[1.1] spline-container">
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center font-sans text-xs text-[#8B949E]">LOADING_INTERFACE...</div>}>
              <Spline
                scene="https://prod.spline.design/f1oOm4uqdNrVp-6d/scene.splinecode"
                onLoad={(splineApp) => {
                  try {
                    // @ts-ignore
                    splineApp.setBgColor('transparent');
                    // Increase resolution
                    // @ts-ignore
                    splineApp.setPixelRatio(window.devicePixelRatio || 1);
                  } catch (e) { }
                }}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
