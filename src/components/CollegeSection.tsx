import { motion } from "framer-motion";
import { GraduationCap, Award, Building2, History } from "lucide-react";

const CollegeSection = () => {
    return (
        <section className="py-24 bg-[#0E1117] border-t border-white/5 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0F9D58]/5 blur-[120px] -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B6F000]/5 blur-[120px] translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Imagery */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#0F9D58] to-[#B6F000] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                            <img
                                src="/kdkce.jpg"
                                alt="KDK College of Engineering"
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1117] via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Stats Overlay */}
                        <div className="absolute -bottom-6 -right-6 bg-[#161B22] border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-xl hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#0F9D58]/10 flex items-center justify-center">
                                    <History className="w-6 h-6 text-[#0F9D58]" />
                                </div>
                                <div>
                                    <p className="text-xs font-mono text-[#8B949E] uppercase tracking-wider">Established</p>
                                    <p className="text-xl font-bold text-[#E6EDF3]">Since 1984</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-[#0F9D58] font-mono text-sm font-bold tracking-[0.3em] uppercase mb-4">
                // INSTITUTIONAL_PROFILE
                            </h2>
                            <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-[#E6EDF3] leading-tight mb-6">
                                Imparting Technical <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F9D58] to-[#B6F000]">Education Since 1984</span>
                            </h1>
                        </motion.div>

                        {/* Accreditation Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        >
                            <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-sm">
                                <div className="flex items-center gap-3 mb-3">
                                    <Award className="w-5 h-5 text-[#B6F000]" />
                                    <span className="font-mono text-xs font-bold text-[#E6EDF3]">NBA ACCREDITED</span>
                                </div>
                                <p className="text-[#8B949E] text-xs leading-relaxed">
                                    Five Programs: Civil, Mechanical, Electrical, CSE, and Electronics & Telecommunication Engineering.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-5 rounded-xl backdrop-blur-sm">
                                <div className="flex items-center gap-3 mb-3">
                                    <Building2 className="w-5 h-5 text-[#0F9D58]" />
                                    <span className="font-mono text-xs font-bold text-[#E6EDF3]">NAAC GRADE 'A'</span>
                                </div>
                                <p className="text-[#8B949E] text-xs leading-relaxed">
                                    Conferred by Government of Maharashtra on the basis of excellence & academic achievements.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-4"
                        >
                            <p className="text-[#8B949E] leading-relaxed text-sm">
                                The Karmavir Dadasaheb Kannamwar College of Engineering, situated in the heart of Nagpur,
                                established by BCYRC is a leading institution in Maharashtra. Approved by AICTE, DTE, and
                                Government of Maharashtra, it continues to attract scholars across the subcontinent.
                            </p>

                            <div className="flex flex-wrap gap-6 pt-4 border-t border-white/5">
                                {[
                                    { label: "7 Branches", sub: "Undergraduate" },
                                    { label: "3 PG Programs", sub: "Mechanical, Civil & MBA" },
                                    { label: "Research Centre", sub: "Ph.D in Civil & Mech" }
                                ].map((stat, i) => (
                                    <div key={i} className="flex flex-col">
                                        <span className="text-[#E6EDF3] font-bold text-lg">{stat.label}</span>
                                        <span className="text-[#8B949E] text-[10px] uppercase tracking-wider font-mono">{stat.sub}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CollegeSection;
