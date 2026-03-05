import { useState, useEffect, useRef, memo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import CollegeSection from "@/components/CollegeSection";
import ModulesSection from "@/components/modules/ModulesSection";
import EventSection from "@/components/EventSection";
import { Terminal, TrendingUp, TrendingDown, GitCommit, GitPullRequest, CheckCircle2, ChevronRight, Trophy, Github, Linkedin, Mail, Instagram, Globe } from "lucide-react";

const Index = () => {
  // 1. Leaderboard State
  const [leaderboard, setLeaderboard] = useState([
    { id: 1, name: "vineet_m", score: 2840, tag: "DSA", trend: "up" },
    { id: 2, name: "sarah_c", score: 2790, tag: "CP", trend: "up" },
    { id: 3, name: "alex_j", score: 2755, tag: "Hackathon", trend: "up" },
  ]);

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
      <section className="py-24 bg-[#0E1117] relative overflow-hidden border-t border-white/5">


        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#E6EDF3] mb-4">
              Computational <span className="text-[#0F9D58] font-mono italic font-normal tracking-tight">Modules</span>
            </h2>
            <p className="text-[#8B949E] font-mono text-sm max-w-xl border-l-2 border-[#B6F000] pl-4">
              System architecture designed to output 10x engineering potential.
              <br />Status: Online.
            </p>
          </div>

          <ModulesSection />
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
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-heading font-extrabold text-[#E6EDF3] tracking-tight drop-shadow-[0_0_20px_rgba(182,240,0,0.2)]">
              We train to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F9D58] to-[#B6F000] italic pr-2">solve problems.</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0F9D58] to-[#B6F000] mx-auto rounded-full shadow-[0_0_15px_rgba(15,157,88,0.5)]" />
          </motion.div>
        </div>
      </section>

      <EventSection />

      {/* 🔹 Hall of Fame Protocol (Winners) */}
      <section className="relative bg-[#0E1117]">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute top-24 z-50 text-center w-full">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#E6EDF3] tracking-tight">
              Hall of Fame <span className="text-[#0F9D58]">Protocol</span>
            </h2>
            <p className="text-[#8B949E] font-mono mt-2">Elite performers mapped into the system.</p>
          </div>

          {[
            { id: 1, contest: "Smart India Hackathon 2024", achievement: "National Finalists", color: "from-blue-600/20 to-cyan-500/20" },
            { id: 2, contest: "GFG Weekly Coding #124", achievement: "Global Rank 12", color: "from-[#0F9D58]/20 to-[#B6F000]/20" },
            { id: 3, contest: "Google HashCode", achievement: "Top 50 India", color: "from-amber-500/20 to-orange-400/20" },
          ].map((winner, idx) => (
            <motion.div
              key={winner.id}
              initial={{ y: 500, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ margin: "-100px", once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute w-[90%] max-w-4xl h-[50vh] min-h-[400px] bg-[#161B22]/80 backdrop-blur-3xl border border-white/10 rounded-3xl flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-default overflow-hidden"
              style={{ top: `calc(50% - 200px + ${idx * 40}px)`, zIndex: idx }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${winner.color} opacity-40 mix-blend-screen pointer-events-none`} />

              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#0E1117] border border-white/10 flex items-center justify-center mb-6 shadow-glow relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0F9D58] to-[#B6F000] rounded-full blur-[20px] opacity-30 animate-pulse" />
                  <Trophy className="w-8 h-8 text-[#B6F000]" />
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-[#E6EDF3] mb-2 drop-shadow-lg">
                  {winner.contest}
                </h3>
                <p className="text-[#B6F000] font-mono text-xl tracking-widest uppercase glow-text">
                  {winner.achievement}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Spacer for scroll */}
        <div className="h-[150vh]" />
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