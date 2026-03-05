import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Linkedin, Github } from "lucide-react";

const teamMembers = [
  { name: "A. Badhe", role: "Chairperson", type: "Core Lead", image: "/ap.png" },
  { name: "Dr. Varghese", role: "Principal", type: "Faculty", image: "/principal.jpg" },
  { name: "R. Pande", role: "Technical Head", type: "Tech Team", image: "/image.png" },
  { name: "S. Wagh", role: "Design Head", type: "Tech Team", image: "/sk.png" },
  { name: "Aditi Badhe", role: "Vice Chairperson", type: "Core Lead", image: "/ad.png" },
  { name: "Khushi Bodakhe", role: "Event Head", type: "Core Lead", image: "/ks.jpg" },
  { name: "Anisha Gurumukhi", role: "PR & Outreach Head", type: "Tech Team", image: "/ag.jpg" },
  { name: "Harshit Pachbudhe", role: "Marketing Head", type: "Tech Team", image: "/hs.jpg" },
];

const TeamPage = () => {
  return (
    <Layout>
      <div className="bg-[#0E1117] pt-32 pb-24 min-h-screen">
        <section className="relative px-6 lg:px-12">
          <div className="container mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#E6EDF3] mb-4">
                The <span className="text-[#0F9D58]">Core System</span>
              </h2>
              <p className="text-[#8B949E] font-mono text-sm max-w-xl border-l-2 border-[#B6F000] pl-4">
                Authorized personnel. Root access granted.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 group/grid">
              {teamMembers.map((member, idx) => (
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
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-[#0E1117] to-transparent">
                    <span className="text-[10px] font-mono text-[#B6F000] uppercase tracking-wider mb-2 block">
                      {member.type}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-[#E6EDF3]">
                      {member.name}
                    </h3>
                    <p className="text-[#8B949E] text-sm font-mono mb-2">
                      {member.role}
                    </p>

                    {/* Social Icons Slide Up */}
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                      <a
                        href="#"
                        className="text-white hover:text-[#0F9D58] transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="text-white hover:text-[#0F9D58] transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-24 text-center">
              <h3 className="text-2xl font-mono text-[#8B949E] opacity-40">
                More Members Coming Soon...
              </h3>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TeamPage;

