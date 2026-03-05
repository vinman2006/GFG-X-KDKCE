import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Winners", path: "/winners" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 max-w-6xl mx-auto rounded-full ${scrolled ? 'bg-[#0E1117]/60 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(15,157,88,0.15)] py-2' : 'bg-transparent border-transparent py-4'}`}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex items-center">
              <img
                src="/gfg-kdkce.png"
                alt="GFG Logo"
                className="h-8 md:h-10 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-heading font-extrabold tracking-tight text-[#E6EDF3] uppercase leading-none">GeeksForGeeks</span>
              <span className="text-[10px] font-mono text-[#0F9D58] font-bold leading-none uppercase tracking-wider mt-0.5">KDKCE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-mono tracking-tight transition-all duration-300 rounded-full ${isActive(item.path)
                  ? "text-[#E6EDF3] bg-white/10 border border-white/5"
                  : "text-[#8B949E] hover:text-[#E6EDF3] hover:bg-white/5 border border-transparent"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link to="/contact#join" className="group relative overflow-hidden rounded-full bg-[#0E1117] border border-[#0F9D58]/30 px-6 py-2.5 text-sm font-mono font-bold text-[#E6EDF3] transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(15,157,88,0.3)] hover:border-[#0F9D58]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F9D58] to-[#B6F000] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Join Chapter <span className="text-[#B6F000] transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#E6EDF3] p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto", marginTop: 16 },
            closed: { opacity: 0, height: 0, marginTop: 0 },
          }}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          className="md:hidden overflow-hidden"
        >
          <div className="flex flex-col gap-2 pb-4 bg-[#0E1117]/90 backdrop-blur-3xl rounded-2xl p-4 border border-white/10 shadow-2xl">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm font-mono rounded-xl transition-all ${isActive(item.path)
                  ? "bg-[#0F9D58]/10 text-[#0F9D58] border border-[#0F9D58]/20"
                  : "text-[#8B949E] hover:text-[#E6EDF3] hover:bg-white/5"
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact#join"
              onClick={() => setIsOpen(false)}
              className="mt-4 block w-full text-center rounded-xl bg-gradient-to-r from-[#0F9D58]/20 to-[#B6F000]/10 border border-[#0F9D58]/40 px-4 py-3 text-sm font-mono font-bold text-[#B6F000]"
            >
              Join Chapter
            </Link>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navigation;