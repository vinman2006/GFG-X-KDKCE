import { useEffect, useRef, Suspense } from "react";
import { gsap } from "gsap";
import Spline from '@splinetool/react-spline';

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
          <h1 className="hero-elem font-heading font-bold text-[#E6EDF3] text-[64px] leading-[1.05] tracking-[-1px]">
            Engineering<br />Minds.
          </h1>

          <h2 className="hero-elem font-mono text-[#a3ff12] text-[26px] font-semibold uppercase tracking-[6px]">
            COMPILING THE FUTURE
          </h2>

          <p className="hero-elem font-sans text-lg text-[#8B949E] leading-relaxed">
            We bridge theory and real-world software engineering through competitive programming, workshops, and open source.
          </p>

          <div className="hero-elem mt-[10px]">
            <a
              href="#events"
              className="inline-block rounded-[40px] px-[26px] py-[14px] text-sm font-mono font-bold text-[#E6EDF3] border border-white/10 bg-white/5 backdrop-blur-[10px] transition-all hover:border-[#0F9D58] hover:shadow-[0_0_30px_rgba(15,157,88,0.2)]"
            >
              <span className="flex items-center gap-2">
                Initialize System <span className="text-[#B6F000]">&rarr;</span>
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
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center font-mono text-xs text-[#8B949E]">LOADING_INTERFACE...</div>}>
              <Spline
                scene="https://prod.spline.design/f1oOm4uqdNrVp-6d/scene.splinecode"
                onLoad={(splineApp) => {
                  try {
                    // @ts-ignore
                    splineApp.setBgColor('transparent');
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
