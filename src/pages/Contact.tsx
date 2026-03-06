import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Mail, MapPin, Phone, Instagram, Linkedin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    // {
    //   icon: Mail,
    //   title: "Email",
    //   details: "gfg@kdkce.edu.in",
    //   link: "mailto:gfg@kdkce.edu.in"
    // },
    // {
    //   icon: Phone,
    //   title: "Phone",
    //   details: "+91 98765 43210",
    //   link: "tel:+919876543210"
    // },
    {
      icon: MapPin,
      title: "Location",
      details: "KDK College of Engineering, Nagpur, Maharashtra",
      link: "#"
    },
    // {
    //   icon: Clock,
    //   title: "Office Hours",
    //   details: "Mon - Fri: 9:00 AM - 5:00 PM",
    //   link: "#"
    // }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@gfgkdkce",
      link: "https://www.instagram.com/gfgkdkce?igsh=bWZyY3pmcWxlaWp5",
      color: "hover:bg-pink-500"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "Geeks For Geeks KDKCE",
      link: "https://www.linkedin.com/company/geeks-for-geeks-kdkce/",
      color: "hover:bg-blue-600"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-24 px-4 bg-[#0E1117] relative overflow-hidden">
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0 bg-[#0E1117] -z-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-[#0F9D58]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="container mx-auto px-4 lg:px-6 relative z-10 max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-[#E6EDF3] mb-4 tracking-tight drop-shadow-[0_0_15px_rgba(15,157,88,0.3)]">
              ESTABLISH<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F9D58] to-[#B6F000] ml-4">CONNECTION</span>
            </h1>
            <p className="text-lg font-mono text-[#8B949E] max-w-3xl mx-auto">
              Initialize communication sequence for events, collaborations, or tech inquiries.
            </p>
          </motion.div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left: Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl font-heading font-bold text-[#E6EDF3] mb-4 border-l-4 border-[#0F9D58] pl-4 uppercase tracking-wide">
                  System Hub
                </h2>
                <p className="text-sm font-mono text-[#8B949E] leading-relaxed">
                  Our network is open. Transmit details regarding collaborations, technical
                  support, or joining the mainframe.
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 gap-5">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 bg-[#161B22]/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg hover:border-[#0F9D58]/40 hover:shadow-[0_0_20px_rgba(15,157,88,0.15)] transition-all duration-300 group"
                  >
                    <div className="p-4 bg-gradient-to-br from-[#0F9D58]/20 to-[#1E5E2F]/20 border border-[#0F9D58]/30 rounded-[16px] group-hover:shadow-[0_0_20px_rgba(15,157,88,0.3)] transition-all duration-300">
                      <item.icon className="w-6 h-6 text-[#B6F000]" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-[#E6EDF3] mb-1 uppercase tracking-wider">{item.title}</h3>
                      <p className="text-sm font-mono text-[#8B949E]">{item.details}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Media Protocols */}
              <div>
                <h3 className="text-lg font-heading font-bold text-[#E6EDF3] mb-5 border-b border-white/10 pb-2 uppercase tracking-wide">
                  Social Protocols
                </h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 + 0.1 * index }}
                      className="flex items-center space-x-3 bg-[#161B22]/40 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 shadow-lg hover:border-[#0F9D58]/40 hover:shadow-[0_0_20px_rgba(15,157,88,0.15)] transition-all duration-300 group"
                    >
                      <social.icon className="w-5 h-5 text-[#8B949E] group-hover:text-[#B6F000] transition-colors" />
                      <div>
                        <p className="font-heading font-bold text-[#E6EDF3] uppercase tracking-wider text-sm">{social.name}</p>
                        <p className="text-xs font-mono text-[#8B949E] opacity-75">{social.handle}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Map Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6 flex flex-col h-full"
            >
              <div>
                <h2 className="text-3xl font-heading font-bold text-[#E6EDF3] mb-4 border-l-4 border-[#0F9D58] pl-4 uppercase tracking-wide">
                  Physical Coordinates
                </h2>
                <p className="text-sm font-mono text-[#8B949E] leading-relaxed">
                  Deploy to the exact geographical location of our command center.
                </p>
              </div>

              <div className="bg-[#161B22]/40 backdrop-blur-xl rounded-[32px] overflow-hidden shadow-[0_0_30px_rgba(15,157,88,0.1)] border border-white/10 flex-1 flex flex-col group hover:border-[#0F9D58]/30 transition-colors duration-500">
                <div className="flex-1 w-full min-h-[300px] relative">
                  {/* Subtle map overlay scan line */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F9D58]/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-1000 z-10" />

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8517978847896!2d79.03185631494927!3d21.134481287615476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sKDK%20College%20of%20Engineering%2C%20Nagpur!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                    className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="KDK College of Engineering Location"
                  />
                </div>
                <div className="p-8 bg-gradient-to-t from-[#0E1117] to-[#161B22]/60 border-t border-white/5 relative z-20">
                  <h3 className="font-heading font-bold text-[#B6F000] mb-2 uppercase tracking-widest text-lg">KDK College of Engineering</h3>
                  <p className="font-mono text-sm text-[#8B949E]">
                    Great Nag Road, Nagpur, Maharashtra 440013, India
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action Terminal Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 text-center relative max-w-4xl mx-auto"
          >
            <div id="join" className="bg-[#06090f]/60 backdrop-blur-2xl rounded-[40px] p-12 border border-[#0F9D58]/30 shadow-[inset_0_0_60px_rgba(0,0,0,0.6)] relative overflow-hidden group">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0F9D58]/5 blur-[80px] rounded-full pointer-events-none -z-10 group-hover:bg-[#0F9D58]/10 transition-colors duration-500" />

              <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E6EDF3] to-[#8B949E] mb-6 uppercase tracking-wide">
                Ready to Initiate Sync?
              </h2>
              <p className="font-mono text-[#8B949E] mb-8 max-w-2xl mx-auto opacity-80 leading-relaxed">
                Connect your system to our growing mainframe of elite programmers and tech enthusiasts.
                The recruitment pipeline will open soon.
              </p>

              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#0F9D58]/20 to-transparent border border-[#0F9D58]/50 text-[#B6F000] px-8 py-3 rounded-full shadow-[0_0_15px_rgba(15,157,88,0.3)]">
                <div className="w-2 h-2 bg-[#B6F000] rounded-full animate-pulse shadow-[0_0_5px_#B6F000]" />
                <span className="font-mono font-bold uppercase tracking-widest text-sm text-[#E6EDF3]">Registration Offline</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;