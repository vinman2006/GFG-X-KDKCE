import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative h-[90vh] flex flex-col justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/kdkce.jpg')" }}
    >
      {/* Dark Overlay for text readability (60-70% opacity) */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Content - Left Aligned */}
      <div className="relative z-20 container mx-auto px-4 lg:px-6 text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-6"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight"
          >
            GeeksforGeeks Student Chapter
            <br />
            <span className="text-white text-4xl md:text-5xl">KDK College of Engineering, Nagpur</span>
          </motion.h1>

          {/* Tagline / Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-200 font-medium max-w-2xl leading-relaxed font-sans"
          >
            <p className="mb-2">Building engineers who think in algorithms.</p>
            <p className="text-gray-300 font-normal">Hands-on coding. Competitive programming. Real-world projects.</p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#join"
              className="px-8 py-4 bg-[#0F9D58] text-white font-semibold rounded hover:bg-[#0c8a4d] hover:-translate-y-1 transition-all duration-300"
            >
              Join Community
            </a>
            <a
              href="#events"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              View Events
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
