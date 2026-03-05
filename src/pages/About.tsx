import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Code2, Users, Target, Award, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Coding Excellence",
      description: "Learn cutting-edge programming languages and development frameworks through hands-on workshops and projects.",
      color: "#00FF9C"
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Connect with like-minded students and build lasting relationships in the tech community.",
      color: "#4FD1FF"
    },
    {
      icon: Target,
      title: "Skill Development",
      description: "Enhance your technical skills through competitions, hackathons, and real-world problem solving.",
      color: "#9B5CFF"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Showcase your achievements and get recognized for your contributions to the tech community.",
      color: "#FF8A00"
    }
  ];

  return (
    <Layout>
      <div className="bg-[#0E1117] min-h-screen pt-32 pb-24 relative overflow-hidden">
        {/* Background Visual Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,157,88,0.1)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-[#E6EDF3] mb-6 tracking-tight drop-shadow-[0_0_20px_rgba(15,157,88,0.3)]">
              System.info(<span className="text-[#0F9D58]">KDKCE</span>)
            </h1>
            <p className="text-lg md:text-xl text-[#8B949E] font-mono max-w-3xl mx-auto border-l-2 border-[#B6F000] pl-4 text-left inline-block">
              <span className="text-[#B6F000]">$&gt;</span> grep "About GeeksForGeeks KDKCE"<br />
              We are the official GeeksforGeeks Student Chapter at KDK College of Engineering,
              Nagpur, dedicated to fostering a culture of learning and innovation in technology.
            </p>
          </motion.div>

          {/* Mission Section (Terminal Style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-24"
          >
            <div className="bg-[#161B22]/80 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0F9D58] to-[#B6F000]" />
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
                <Terminal className="w-6 h-6 text-[#B6F000]" />
                <h2 className="text-2xl font-mono font-bold text-[#E6EDF3] uppercase tracking-wider">Mission Directive</h2>
                <div className="ml-auto flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00FF9C] shadow-[0_0_8px_#00FF9C] animate-pulse" />
                  <span className="text-xs font-mono text-[#00FF9C]">Node: Active</span>
                </div>
              </div>
              <p className="text-lg text-[#8B949E] text-left max-w-4xl mx-auto leading-relaxed font-sans">
                To create a vibrant community of passionate programmers and tech enthusiasts who
                collaborate, learn, and grow together. We aim to <strong className="text-[#E6EDF3] font-mono px-2 bg-white/5 rounded">bridge the gap</strong> between academic
                learning and industry requirements by providing practical experience through
                hands-on projects, workshops, and competitive programming.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="mb-24">
            <h2 className="text-3xl font-heading font-extrabold text-[#E6EDF3] mb-12 text-center">
              Core <span className="text-[#0F9D58]">Directives</span>
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {features.map((feature, index) => (
                <FeatureCard key={feature.title} feature={feature} index={index} />
              ))}
            </motion.div>
          </div>

          {/* Coming Soon Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="bg-[#020617]/50 backdrop-blur-sm rounded-2xl p-12 border border-white/5 relative overflow-hidden">
              {/* Circuit SVG Background */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
                <rect width="100%" height="100%" fill="none" stroke="#B6F000" strokeWidth="2" strokeDasharray="4 8" className="animate-[circuit-travel_20s_linear_infinite]" />
              </svg>

              <h2 className="text-2xl font-mono font-bold text-[#E6EDF3] mb-4">Architecture Expansion</h2>
              <p className="text-sm font-mono text-[#8B949E] mb-8">
                INITIALIZING NEW MODULES... STANDBY FOR DEPLOYMENT.
              </p>

              {/* Loading Bar */}
              <div className="w-full bg-[#161B22] h-2 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#0F9D58] to-[#B6F000] w-1/3 animate-[pulse_3s_ease-in-out_infinite]" />
              </div>
              <div className="mt-4 inline-flex items-center space-x-2 text-[#B6F000]">
                <div className="w-2 h-2 bg-[#B6F000] rounded-full shadow-[0_0_8px_#B6F000] animate-pulse" />
                <span className="font-mono text-xs tracking-widest uppercase">Under Construction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

function FeatureCard({ feature, index }: { feature: any, index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative bg-[#161B22]/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 overflow-hidden cursor-crosshair transition-all duration-300"
      style={{
        boxShadow: isHovered ? `0 10px 30px rgba(0,0,0,0.5), inset 0 0 20px ${feature.color}15` : '0 10px 30px rgba(0,0,0,0.3)'
      }}
    >
      {/* Background Gradient Glow */}
      <div
        className="absolute inset-0 z-0 opacity-10 transition-opacity duration-500 group-hover:opacity-30"
        style={{
          background: `radial-gradient(circle at top right, ${feature.color}, transparent 70%)`
        }}
      />

      {/* Sweep Effect */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        initial={false}
        animate={isHovered ? { x: ["-100%", "200%"] } : { x: "-100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="w-[30%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
      </motion.div>

      <div className="relative z-20">
        <div className="mb-6 relative inline-block">
          <div
            className="absolute inset-0 blur-xl rounded-full scale-150 opacity-20 group-hover:opacity-40 transition-opacity"
            style={{ background: feature.color }}
          />
          <motion.div
            animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 1, repeat: Infinity }}
            className="relative z-10 bg-[#0E1117] border border-white/10 p-3 rounded-xl inline-block"
          >
            <feature.icon className="w-8 h-8" style={{ color: feature.color }} />
          </motion.div>
        </div>
        <h3 className="text-xl font-heading font-bold text-[#E6EDF3] mb-3">{feature.title}</h3>

        {/* Typing effect description logic can be complex for paragraphs so using a simpler opacity reveal for polish */}
        <p className="text-sm font-sans text-[#8B949E] leading-relaxed transition-colors group-hover:text-[#E6EDF3]/80">
          {feature.description}
        </p>

        <div className="mt-6 flex items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: feature.color, boxShadow: `0 0 5px ${feature.color}` }} />
          <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest">Online</span>
        </div>
      </div>

      {/* Neon Edge Outline */}
      <div
        className="absolute inset-0 border border-transparent group-hover:border-current rounded-2xl transition-all duration-500 pointer-events-none"
        style={{ color: `${feature.color}50` }}
      />
    </motion.div>
  );
}

export default About;
