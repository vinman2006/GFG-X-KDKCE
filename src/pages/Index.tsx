import { useState, useEffect, useRef, memo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CollegeSection from "@/components/CollegeSection";
import ModuleInteractiveGrid from "@/components/modules/ModuleInteractiveGrid";
import EventSection from "@/components/EventSection";
import { Terminal, TrendingUp, TrendingDown, GitCommit, GitPullRequest, CheckCircle2, ChevronRight, Trophy, Github, Linkedin, Mail, Instagram, Globe } from "lucide-react";

const Index = () => {
  // 1. Leaderboard State
  const [leaderboard, setLeaderboard] = useState([
    { id: 1, name: "vineet_m", score: 2840, tag: "DSA", trend: "up" },
    { id: 2, name: "sarah_c", score: 2790, tag: "CP", trend: "up" },
    { id: 3, name: "alex_j", score: 2755, tag: "Hackathon", trend: "up" },
  ]);

  const eventPhotos = [
    "/events/WhatsApp Image 2026-03-05 at 12.01.23 PM.jpeg",
    "/events/WhatsApp Image 2026-03-05 at 12.01.24 PM.jpeg",
    "/events/WhatsApp Image 2026-03-05 at 12.01.25 PM (1).jpeg",
    "/events/WhatsApp Image 2026-03-05 at 12.01.25 PM.jpeg",
    "/events/WhatsApp Image 2026-03-05 at 12.01.26 PM (1).jpeg",
    "/events/WhatsApp Image 2026-03-05 at 12.01.26 PM (2).jpeg",
    "/events/WhatsApp Image 2026-03-05 at 12.01.26 PM.jpeg",
    "/events/WhatsApp Image 2026-03-05 at 12.01.27 PM.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLeaderboard(prev => {
        let newBoard = prev.map(p => ({
          ...p,
          score: p.score + Math.floor(Math.random() * 25),
          trend: Math.random() > 0.3 ? "up" : "down"
        }));
        newBoard.sort((a, b) => b.score - a.score);
        return newBoard.slice(0, 3);
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // 3. Terminal State
  const terminalStats = [
    { type: "push", text: "> Pushed feature: Dynamic Leaderboard", icon: <GitCommit className="w-4 h-4 text-[#0F9D58]" /> },
    { type: "fix", text: "> Fixed bug in Three.js rendering", icon: <Terminal className="w-4 h-4 text-[#B6F000]" /> },
    { type: "merge", text: "> Merged PR #42", icon: <GitPullRequest className="w-4 h-4 text-[#E6EDF3]" /> },
    { type: "deploy", text: "> Deployed production build", icon: <CheckCircle2 className="w-4 h-4 text-[#0F9D58]" /> }
  ];

  const [visibleTerminalLines, setVisibleTerminalLines] = useState<{ id: number; lineIdx: number }[]>([]);

  useEffect(() => {
    let step = 0;
    let idCounter = 0;
    const interval = setInterval(() => {
      setVisibleTerminalLines(prev => {
        // Only keep last 50 items to avoid DOM explosion entirely, but don't limit to 4 to allow scrolling
        const next = [...prev, { id: idCounter++, lineIdx: step }];
        if (next.length > 50) next.shift();
        return next;
      });
      step = (step + 1) % terminalStats.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <HeroSection />
      <CollegeSection />

      {/* 🔹 Interactive Modules Section */}
      <section className="py-24 bg-gradient-to-br from-[#050B14] to-[#0B1220] relative overflow-hidden border-t border-white/5">
        {/* Technical Grid Layer */}
        <div
          className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          }}
        />

        {/* Noise / Grain Layer */}
        <div className="absolute inset-0 z-[1] opacity-[0.03] mix-blend-overlay pointer-events-none">
          <svg className="w-full h-full opacity-20">
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="3"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Interactive Grid */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <ModuleInteractiveGrid />
            </div>

            {/* Right: Content & Dashboards */}
            <div className="order-1 lg:order-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl font-sans font-extrabold text-[#E6EDF3] leading-[1.1]">
                  Computational <br />
                  <span className="text-[#7CFF4F] font-sans italic font-normal tracking-tight">Modules</span>
                </h2>
                <div className="max-w-xl p-4 border-l-2 border-[#7CFF4F] bg-white/[0.02] backdrop-blur-sm">
                  <p className="text-[#8B949E] font-sans text-sm leading-relaxed">
                    System architecture designed to output 10x engineering potential.
                    Automated workflows, peer learning, and rapid deployment.
                    <br />
                    <span className="text-[#7CFF4F] font-mono text-[10px] mt-2 block opacity-80">STATUS: CORE_SYSTEM_ONLINE // V.2.5.0</span>
                  </p>
                </div>
              </div>

              {/* Stacked Terminal & Leaderboard for Right Column */}
              <div className="space-y-6 max-w-xl">
                {/* Terminal Interface */}
                <div className="bg-[rgba(10,15,30,0.55)] backdrop-blur-[20px] rounded-[24px] border border-white/5 p-6 h-[220px] overflow-hidden flex flex-col shadow-2xl">
                  <div className="flex items-center justify-between mb-3 opacity-60">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-[#FF3B3B]/50" />
                      <div className="w-2 h-2 rounded-full bg-[#FFB600]/50" />
                      <div className="w-2 h-2 rounded-full bg-[#7CFF4F]/50" />
                    </div>
                    <span className="text-[9px] font-mono text-[#8B949E] uppercase tracking-widest">LIVE_SIGNAL</span>
                  </div>
                  <div className="flex-1 space-y-1.5 font-mono text-[11px] custom-scrollbar overflow-y-auto">
                    <AnimatePresence mode="popLayout">
                      {visibleTerminalLines.map((item) => (
                        <TerminalLine key={item.id} item={item} stats={terminalStats} />
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Leaderboard Interface - Compact */}
                <div className="bg-[rgba(10,15,30,0.55)] backdrop-blur-[20px] rounded-[24px] border border-white/5 p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-sans font-bold text-white flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-[#7CFF4F]" />
                      TOP_CONTRIBUTORS
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {leaderboard.map((user, idx) => (
                      <motion.div
                        key={user.id}
                        layout
                        className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 group transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-[#8B949E] w-4">{idx + 1}</span>
                          <div>
                            <p className="text-xs font-bold text-white group-hover:text-[#7CFF4F] transition-colors">{user.name}</p>
                            <p className="text-[9px] font-mono text-[#8B949E] uppercase opacity-60">{user.tag}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-mono font-bold text-[#E6EDF3]">{user.score} XP</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Manifesto Section */}
      <section className="py-32 bg-[#0E1117] relative overflow-hidden flex items-center justify-center min-h-[80vh]">
        {/* Wireframe Grid */}
        <div className="absolute inset-0 bg-[#0E1117]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1117] via-[#0E1117]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1117] via-transparent to-transparent" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-sans font-medium text-[#8B949E] opacity-60">
              Most students learn to pass exams.
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-sans font-extrabold text-[#E6EDF3] tracking-tight drop-shadow-[0_0_20px_rgba(182,240,0,0.2)]">
              We train to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F9D58] to-[#B6F000] italic pr-2">solve problems.</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0F9D58] to-[#B6F000] mx-auto rounded-full shadow-[0_0_15px_rgba(15,157,88,0.5)]" />
          </motion.div>
        </div>
      </section>

      <EventSection />

      {/* 🔹 Event Glimpse Gallery (Replacing Hall of Fame) */}
      <section className="py-24 bg-[#0E1117] overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-[#E6EDF3] tracking-tight">
            Glimpse of previous <span className="text-[#0F9D58]">GFG x KDKCE event</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#0F9D58] to-[#B6F000] mx-auto mt-4 rounded-full opacity-50" />
        </div>

        <div className="relative flex overflow-x-hidden">
          <motion.div
            className="flex gap-6 py-4 animate-marquee"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...eventPhotos, ...eventPhotos].map((photo, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-[300px] h-[200px] md:w-[450px] md:h-[300px] rounded-[24px] overflow-hidden border border-white/10 group shadow-2xl"
              >
                <img
                  src={photo}
                  alt="Event Glimpse"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1117]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 🔹 Collaboration Portal (Contact) */}

    </Layout>
  );
};

// Memoized terminal line to prevent re-renders of older lines
const TerminalLine = memo(({ item, stats }: { item: { id: number, lineIdx: number }, stats: any[] }) => {
  const terminalStat = stats[item.lineIdx];
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, filter: "blur(4px)" }}
      className="flex items-start gap-3"
    >
      <span className="mt-0.5">{terminalStat.icon}</span>
      <span className="text-[#8B949E]">{terminalStat.text}</span>
    </motion.div>
  );
});

export default Index;