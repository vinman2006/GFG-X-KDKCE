import { motion } from "framer-motion";
import { GraduationCap, Award, Building2, History, ShieldCheck } from "lucide-react";

const CollegeSection = () => {
    return (
        <section className="py-[120px] bg-[#0E1117] border-t border-white/5 relative overflow-hidden">
            {/* Background Accents - Muted */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#22c55e]/3 blur-[120px] -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-20 items-center">

                    {/* Left Column: Imagery */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] rounded-[18px] overflow-hidden border border-white/5 shadow-[0_20px_40px_rgba(0,0,0,0.45)]">
                            <img
                                src="/kdkce.jpg"
                                alt="KDK College of Engineering"
                                className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-1000 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1117]/40 via-transparent to-transparent" />
                        </div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <div className="flex flex-col items-start gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-4"
                        >
                            <h2 className="text-[#4ade80] font-sans text-[13px] font-medium tracking-[0.3em] uppercase opacity-70">
                                // INSTITUTIONAL_PROFILE
                            </h2>
                            <h1 className="text-[40px] md:text-[56px] font-sans font-bold text-[#e5e7eb] leading-[1.1] tracking-tight">
                                Imparting Technical <br />
                                <span className="text-[#4ade80]">Education Since 1984</span>
                            </h1>
                        </motion.div>

                        {/* Accreditation Card Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full"
                        >
                            {[
                                {
                                    icon: <ShieldCheck className="w-5 h-5" />,
                                    title: "NBA ACCREDITED",
                                    desc: "Five Programs: Civil, Mechanical, Electrical, CSE, and Electronics & Telecommunication Engineering.",
                                    color: "text-[#4ade80]"
                                },
                                {
                                    icon: <Award className="w-5 h-5" />,
                                    title: "NAAC GRADE 'A'",
                                    desc: "Conferred by Government of Maharashtra on the basis of excellence & academic achievements.",
                                    color: "text-[#22c55e]"
                                }
                            ].map((card, idx) => (
                                <div key={idx} className="bg-white/[0.02] border border-white/[0.06] p-6 rounded-[14px] backdrop-blur-xl transition-colors hover:border-white/10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`${card.color} opacity-80`}>
                                            {card.icon}
                                        </div>
                                        <span className="font-sans text-[14px] font-semibold text-[#e5e7eb] tracking-wide">
                                            {card.title}
                                        </span>
                                    </div>
                                    <p className="text-[#9ca3af] text-[13px] leading-relaxed font-sans font-medium">
                                        {card.desc}
                                    </p>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="w-full space-y-12"
                        >
                            <p className="text-[#9ca3af] leading-[1.7] text-[15px] max-w-[520px] font-sans">
                                The Karmavir Dadasaheb Kannamwar College of Engineering, situated in the heart of Nagpur,
                                established by BCYRC is a leading institution in Maharashtra. Approved by AICTE, DTE, and
                                Government of Maharashtra, it continues to attract scholars across the subcontinent.
                            </p>

                            {/* Professional Stats Bar */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-white/5 w-full">
                                {[
                                    { label: "1984", title: "ESTABLISHED", sub: "FOUNDED BY BCYRC" },
                                    { label: "7", title: "BRANCHES", sub: "UNDERGRADUATE" },
                                    { label: "3", title: "PG PROGRAMS", sub: "MECH, CIVIL & MBA" },
                                    { label: "1", title: "RESEARCH", sub: "CENTRE" }
                                ].map((stat, i) => (
                                    <div key={i} className="flex flex-col items-start gap-1">
                                        <span className="text-[36px] md:text-[42px] font-bold text-[#e5e7eb] leading-none tracking-tight">
                                            {stat.label}
                                        </span>
                                        <div className="flex flex-col">
                                            <span className="text-[12px] font-bold text-[#4ade80] uppercase tracking-wider">{stat.title}</span>
                                            <span className="text-[#9ca3af] text-[10px] uppercase tracking-wider font-sans opacity-60">
                                                {stat.sub}
                                            </span>
                                        </div>
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
