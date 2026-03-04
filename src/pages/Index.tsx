import { useState, useEffect, useRef, memo } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ModulesSection from "@/components/modules/ModulesSection";
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
        <div className="h-[200vh]" />
      </section>

      {/* 🔹 The Core System (Team) */}
      <section className="py-32 bg-[#0E1117] relative border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#E6EDF3] mb-4">
              The <span className="text-[#0F9D58]">Core System</span>
            </h2>
            <p className="text-[#8B949E] font-mono text-sm max-w-xl border-l-2 border-[#B6F000] pl-4">Authorized personnel. Root access granted.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 group/grid">
            {[
              { name: "A. Badhe", role: "Chairperson", type: "Core Lead", image: "/ap.png" },
              { name: "Dr. Varghese", role: "Principal", type: "Faculty", image: "/principal.jpg" },
              { name: "R. Pande", role: "Technical Head", type: "Tech Team", image: "/image.png" },
              { name: "S. Wagh", role: "Design Head", type: "Tech Team", image: "/sk.png" },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
                className="group relative bg-[#161B22]/50 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-[#0F9D58] hover:shadow-[0_0_30px_rgba(15,157,88,0.2)]"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1117] via-[#0E1117]/50 to-transparent z-10" />
                <img src={member.image} alt={member.name} className="w-full h-80 object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-[#0E1117] to-transparent">
                  <span className="text-[10px] font-mono text-[#B6F000] uppercase tracking-wider mb-2 block">{member.type}</span>
                  <h3 className="text-xl font-heading font-bold text-[#E6EDF3]">{member.name}</h3>
                  <p className="text-[#8B949E] text-sm font-mono mb-2">{member.role}</p>

                  {/* Social Icons Slide Up */}
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                    <a href="#" className="text-white hover:text-[#0F9D58] transition-colors"><Linkedin className="w-5 h-5" /></a>
                    <a href="#" className="text-white hover:text-[#0F9D58] transition-colors"><Github className="w-5 h-5" /></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Collaboration Portal (Contact) */}
      <section className="py-32 bg-[#0E1117] relative border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-12 items-center justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#E6EDF3] mb-6">
              Establish <span className="text-[#0F9D58]">Connection</span>
            </h2>
            <p className="text-[#8B949E] font-sans text-lg mb-8">
              Open a secure channel to our core team for collaborations, sponsorships, or technical inquiries.
            </p>

            <div className="flex items-center gap-3 bg-[#161B22]/80 w-max px-4 py-2 rounded-full border border-white/10 shadow-glow mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B6F000] animate-pulse shadow-[0_0_10px_rgba(182,240,0,0.8)]" />
              <span className="text-sm font-mono text-[#E6EDF3] tracking-wide">System Status: Active</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Email", val: "gfg@kdkce.edu.in", icon: <Mail className="w-5 h-5" /> },
                { label: "LinkedIn", val: "gfg-kdkce", icon: <Linkedin className="w-5 h-5" /> },
                { label: "Instagram", val: "@gfg_kdkce", icon: <Instagram className="w-5 h-5" /> },
                { label: "Website", val: "kdkce.edu.in", icon: <Globe className="w-5 h-5" /> }
              ].map((item, idx) => (
                <a key={idx} href="#" className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#0F9D58]/50 transition-all group">
                  <div className="text-[#8B949E] group-hover:text-[#B6F000] transition-colors">{item.icon}</div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono text-[#8B949E] uppercase">{item.label}</div>
                    <div className="text-sm font-medium text-[#E6EDF3] truncate max-w-[120px]">{item.val}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="w-full md:w-[400px] bg-[#161B22]/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0F9D58] to-[#B6F000]" />
            <h3 className="text-xl font-heading font-bold text-[#E6EDF3] mb-6">Transmit Message</h3>
            <form className="space-y-4">
              <div>
                <input type="text" placeholder="Designation / Identifier" className="w-full bg-[#0E1117] border border-white/10 rounded-lg p-3 text-[#E6EDF3] font-mono text-sm focus:outline-none focus:border-[#0F9D58] transition-colors" />
              </div>
              <div>
                <input type="email" placeholder="Return Address" className="w-full bg-[#0E1117] border border-white/10 rounded-lg p-3 text-[#E6EDF3] font-mono text-sm focus:outline-none focus:border-[#0F9D58] transition-colors" />
              </div>
              <div>
                <textarea rows={4} placeholder="Payload..." className="w-full bg-[#0E1117] border border-white/10 rounded-lg p-3 text-[#E6EDF3] font-mono text-sm focus:outline-none focus:border-[#0F9D58] transition-colors resize-none" />
              </div>
              <button className="w-full py-3 rounded-lg bg-[#0F9D58] text-[#E6EDF3] font-mono font-bold hover:bg-[#0c8a4d] transition-colors flex items-center justify-center gap-2 group border border-[#0F9D58]/50 shadow-[0_0_15px_rgba(15,157,88,0.3)]">
                Execute Send <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 🔹 Membership CTA (Join) */}
      <section id="join" className="py-32 bg-[#0E1117] relative border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,157,88,0.1)_0%,transparent_100%)] pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#E6EDF3] mb-4">
              Join the Engineering <span className="text-[#0F9D58]">Network</span>
            </h2>
            <p className="text-[#8B949E] font-mono text-sm max-w-xl mx-auto">Select your access level and initialize your journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            {/* Explorer */}
            <div className="bg-[#161B22]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center transition-transform hover:scale-105">
              <h3 className="text-xl font-heading font-bold text-[#E6EDF3] mb-2">Explorer</h3>
              <p className="text-[#8B949E] font-mono text-xs mb-8">Lvl 1 - Beginner Access</p>
              <ul className="space-y-3 mb-8 text-sm text-[#8B949E] text-left w-full">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0F9D58]" /> Campus Workshops</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0F9D58]" /> Community Discord</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0F9D58]" /> Coding Resources</li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-[#0F9D58]/30 text-[#E6EDF3] font-mono font-bold hover:bg-[#0F9D58]/10 transition-colors">
                Initialize
              </button>
            </div>

            {/* Builder (Highlighted) */}
            <div className="bg-gradient-to-b from-[#0F9D58] to-[#0c8a4d] rounded-3xl p-8 flex flex-col items-center text-center transform md:scale-110 shadow-[0_0_40px_rgba(15,157,88,0.3)] relative overflow-hidden z-20 border border-[#B6F000]/30 transition-transform hover:scale-110 md:hover:scale-110 group cursor-pointer">
              <div className="absolute top-0 right-0 bg-[#B6F000] text-[#0E1117] text-[10px] font-bold px-3 py-1 rounded-bl-lg font-mono tracking-wider">RECOMMENDED</div>
              <h3 className="text-2xl font-heading font-bold text-white mb-2 mt-2 group-hover:drop-shadow-lg transition-all">Builder</h3>
              <p className="text-white/80 font-mono text-xs mb-8">Lvl 2 - Active Member Access</p>
              <ul className="space-y-3 mb-8 text-sm text-white/90 text-left w-full">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#B6F000]" /> Hackathon Teams</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#B6F000]" /> Open Source Projects</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#B6F000]" /> Mentorship Mux</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#B6F000]" /> Priority Event Reg</li>
              </ul>
              <button className="relative group/btn w-full overflow-hidden rounded-xl bg-[#B6F000] px-4 py-3 text-[#0E1117] font-mono font-bold transition-transform hover:scale-105 shadow-[0_0_15px_rgba(182,240,0,0.5)]">
                <div className="absolute inset-0 bg-white/30 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex justify-center items-center gap-2">Request Upgrade <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" /></span>
              </button>
            </div>

            {/* Elite */}
            <div className="bg-[#161B22]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center transition-transform hover:scale-105">
              <h3 className="text-xl font-heading font-bold text-[#E6EDF3] mb-2">Elite</h3>
              <p className="text-[#8B949E] font-mono text-xs mb-8">Lvl 3 - Core Team Access</p>
              <ul className="space-y-3 mb-8 text-sm text-[#8B949E] text-left w-full">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0F9D58]" /> Admin Privileges</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0F9D58]" /> Global GFG Network</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0F9D58]" /> Event Organization</li>
              </ul>
              <button className="w-full py-3 rounded-xl border border-white/10 text-[#8B949E] font-mono font-bold hover:bg-white/5 transition-colors hover:text-white">
                Apply for Core
              </button>
            </div>
          </div>
        </div>
      </section>

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