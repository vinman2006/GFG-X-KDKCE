import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import { Code2, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-gray-300 border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Chapter */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <img
                  src="/gfg-kdkce.svg"
                  alt="GFG Logo"
                  className="h-10 lg:h-12 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-bold text-white block leading-none">GEEKSFORGEEKS</span>
                <span className="text-sm font-bold text-[#0F9D58] leading-none mt-1">KDKCE</span>
              </div>
            </div>
            <p className="text-gray-400 font-sans leading-relaxed">
              Empowering students at KDK College of Engineering with coding skills,
              technical knowledge, and practical experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-semibold text-white">Quick Links</h3>
            <div className="grid grid-cols-2 gap-3">
              <Link to="/" className="text-gray-400 hover:text-[#0F9D58] transition-colors">Home</Link>
              <Link to="/about" className="text-gray-400 hover:text-[#0F9D58] transition-colors">About Us</Link>
              <a href="/#events" className="text-gray-400 hover:text-[#0F9D58] transition-colors">Events</a>
              <Link to="/team" className="text-gray-400 hover:text-[#0F9D58] transition-colors">Team</Link>
              <Link to="/contact" className="text-gray-400 hover:text-[#0F9D58] transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-semibold text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#0F9D58] shrink-0" />
                <span>KDK College of Engineering, Great Nag Road, Nandanvan, Nagpur - 440024</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#0F9D58] shrink-0" />
                <a href="mailto:geekforgeekkdkce@gmail.com" className="hover:text-[#0F9D58] transition-colors">geekforgeekkdkce@gmail.com</a>
              </li>
            </ul>

            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/gfgkdkce?igsh=bWZyY3pmcWxlaWp5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-[#0F9D58] hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/geeks-for-geeks-kdkce/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-[#0F9D58] hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} GeeksForGeeks KDKCE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;