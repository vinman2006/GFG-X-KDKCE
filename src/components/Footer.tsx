import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import { Code2, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <img
      src="/gfg-kdkce.png"
      alt="GFG KDKCE Logo"
      className="w-10 h-10 rounded-lg object-contain"
    />
    <div>
      <span className="text-xl font-bold text-gradient">GeeksForGeeks KDKCE</span>
      <p className="text-sm text-muted-foreground">GeeksForGeeks Student Chapter</p>
    </div>
  </div>
  <p className="text-sm text-muted-foreground">
    Empowering students at KDK College of Engineering with coding skills,
    technical knowledge, and practical experience.
  </p>
</div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Home
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                About Us
              </Link>
              <Link to="/winners" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Winners
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-smooth">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="space-y-3">
              {/* <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>gfg@kdkce.edu.in</span>
              </div> */}
              <div className="flex space-x-3">
                <a
                  href="https://www.instagram.com/geeksforgeeks_kdkce?igsh=a241bGJ3anM3ZXhr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background border border-border rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/geeks-for-geeks-kdkce/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background border border-border rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2025 GeeksForGeeks KDKCE. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              KDK College of Engineering, Nagpur
            </p>
            <VisitorCounter />
            
            </div>
        </div>
      </div>        

      </footer>
  );
};

export default Footer;