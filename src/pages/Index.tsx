import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { Terminal, Laptop, Lightbulb, ArrowRight, Github, Linkedin, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const whatWeDo = [
    {
      title: "Competitive Programming",
      description: "Master algorithms, data structures, and problem-solving techniques to ace coding interviews and competitions.",
      icon: <Terminal className="w-8 h-8 text-[#0F9D58]" />
    },
    {
      title: "Development & Open Source",
      description: "Build real-world projects, contribute to open source, and learn modern frameworks and technologies.",
      icon: <Laptop className="w-8 h-8 text-[#0F9D58]" />
    },
    {
      title: "Workshops & Hackathons",
      description: "Participate in intense coding sessions, hands-on workshops, and collaborative hackathons.",
      icon: <Lightbulb className="w-8 h-8 text-[#0F9D58]" />
    }
  ];

  const events = [
    {
      title: "Web Development Bootcamp",
      date: "Oct 15, 2025",
      type: "Workshop",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
      description: "A comprehensive 3-day bootcamp covering React, Node.js, and modern web architecture."
    },
    {
      title: "Algo Coding Contest",
      date: "Nov 02, 2025",
      type: "Competition",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
      description: "Test your algorithmic problem-solving skills against the best coders in the college."
    },
    {
      title: "Open Source Summit",
      date: "Dec 10, 2025",
      type: "Seminar",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
      description: "Learn how to make your first open-source contribution and collaborate on GitHub."
    }
  ];

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "President",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Sarah Chen",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Michael Gupta",
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    {
      name: "Priya Sharma",
      role: "Events Head",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* 🔹 Section 1 - What We Do */}
      <section className="py-[100px] bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-gray-600 font-sans text-lg">
              Empowering students with practical tech skills, professional networking, and real-world project experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatWeDo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:scale-[1.03] transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#0F9D58]/10 rounded-lg flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Section 3 - Events Showcase */}
      <section className="py-[100px] bg-[#F9FAFB]" id="events">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <p className="text-gray-600 font-sans text-lg">
                Join our workshops, hackathons, and technical sessions designed to accelerate your growth.
              </p>
            </div>
            <a href="#" className="hidden md:flex items-center text-[#0F9D58] font-semibold hover:underline">
              View all events <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-sm font-semibold text-gray-900">
                    {event.type}
                  </div>
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0F9D58] transition-colors">{event.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                  <a href="#" className="inline-flex items-center font-semibold text-[#0F9D58] hover:text-[#0c8a4d]">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Section 4 - Team */}
      <section className="py-[100px] bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Meet The Team</h2>
            <p className="text-gray-600 font-sans text-lg">
              The passionate individuals driving the GeeksforGeeks chapter at KDKCE.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-4 border-gray-50">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-[#0F9D58] font-medium text-sm mb-3">{member.role}</p>
                <a href="#" className="text-gray-400 hover:text-[#0a66c2] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;