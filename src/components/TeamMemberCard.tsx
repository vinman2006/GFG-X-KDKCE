import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github, Instagram, X, Globe, MapPin, Calendar, Briefcase, Mail, Phone } from "lucide-react";

export type TeamMember = {
    name: string;
    role: string;
    type: string;
    image: string;
    linkedin?: string | null;
    github?: string | null;
    instagram?: string | null;
    portfolio?: string | null;

    // New Google Form Fields
    fullName?: string;
    preferredName?: string;
    email?: string;
    mobile?: string;
    bio?: string;
    branch?: string;
    year?: string;
    rollNumber?: string;
    position?: string;
    domain?: string[];
    responsibilities?: string;
    joinDate?: string;
    team?: string;
};

type TeamMemberCardProps = {
    member: TeamMember;
    idx: number;
    isLead?: boolean;
};

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, idx, isLead }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const displayBio = member.bio || "Hi! I am part of the GFG KDKCE Chapter.";
    const displayRole = member.position || member.role;

    return (
        <>
            {/* Base Card in Grid */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => setIsOpen(true)}
                className="group relative bg-[#161B22]/50 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#0F9D58] hover:shadow-[0_0_20px_rgba(15,157,88,0.5)] flex flex-col items-center p-6 h-full w-full"
            >
                {/* Neon Glow Header */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0F9D58] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Photo Top */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 mb-4 sm:mb-5 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#0F9D58]/80 transition-colors duration-300 relative shrink-0">
                    <img
                        src={member.image}
                        alt={member.name}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3";
                        }}
                        className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                </div>

                {/* Content Section */}
                <div className="flex flex-col items-center justify-center text-center w-full flex-grow">
                    {member.type && member.type !== "Member" && !member.type.includes("CSE") && !member.type.includes("Other") && !member.type.includes("IT") && !member.type.includes("AI/ML") && (
                        <span className="text-[10px] font-mono text-[#B6F000] uppercase tracking-wider mb-2 block">
                            {member.type}
                        </span>
                    )}
                    <h3 className="text-[17px] sm:text-xl font-heading font-bold text-[#E6EDF3] leading-tight mb-2 truncate w-full group-hover:text-[#0F9D58] transition-colors duration-300">
                        {member.fullName || member.name}
                    </h3>
                    <p className="text-[#8B949E]/80 text-[11px] sm:text-[13px] font-mono tracking-wide px-2 leading-relaxed h-[36px] overflow-hidden line-clamp-2">
                        {displayRole}
                    </p>
                </div>

                <div className="mt-4 flex gap-3 sm:gap-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    {member.linkedin && <Linkedin className="w-4 h-4 text-white hover:text-[#0A66C2] transition-colors" />}
                    {member.github && <Github className="w-4 h-4 text-white hover:text-[#B6F000] transition-colors" />}
                    {member.instagram && <Instagram className="w-4 h-4 text-white hover:text-[#E1306C] transition-colors" />}
                    {member.portfolio && <Globe className="w-4 h-4 text-white hover:text-[#0F9D58] transition-colors" />}
                </div>
            </motion.div>

            {/* Expanded Modal Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/70 backdrop-blur-xl"
                        />

                        {/* Modal Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-4xl bg-[#0E1117]/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-[101]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-[#0F9D58]/20 backdrop-blur-md rounded-full border border-white/10 text-white/70 hover:text-white transition-colors z-20"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Image Section */}
                            <div className="w-full md:w-2/5 h-64 md:h-auto relative shrink-0">
                                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0E1117] md:via-transparent to-transparent z-10" />
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-3/5 p-6 sm:p-8 md:p-10 flex flex-col max-h-[80vh] overflow-y-auto custom-scrollbar">

                                <span className="inline-flex items-center w-max px-3 py-1 rounded-full bg-[#0F9D58]/10 border border-[#0F9D58]/30 text-[#0F9D58] text-xs font-mono font-medium mb-4">
                                    {member.team || member.type}
                                </span>

                                <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mb-1">
                                    {member.fullName || member.name}
                                </h2>
                                <h3 className="text-[#8B949E] text-lg font-mono mb-6">
                                    {displayRole}
                                </h3>

                                {/* Bio Section */}
                                <div className="bg-white/5 border border-white/5 rounded-xl p-5 mb-8 relative">
                                    <div className="absolute -top-3 left-4 bg-[#0E1117] px-2 text-[10px] text-white/50 font-mono tracking-widest uppercase">
                                        Data.Bio_
                                    </div>
                                    <p className="text-white/90 text-sm sm:text-base leading-relaxed italic">
                                        "{displayBio}"
                                    </p>
                                </div>

                                {/* Info Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 mb-8">
                                    {member.branch && (
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-white/5 text-[#B6F000]"><MapPin className="w-4 h-4" /></div>
                                            <div>
                                                <p className="text-[10px] uppercase text-white/40 tracking-wider">Branch</p>
                                                <p className="text-sm text-white/90 font-medium">{member.branch}</p>
                                            </div>
                                        </div>
                                    )}
                                    {member.year && (
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-white/5 text-[#B6F000]"><Calendar className="w-4 h-4" /></div>
                                            <div>
                                                <p className="text-[10px] uppercase text-white/40 tracking-wider">Year of Study</p>
                                                <p className="text-sm text-white/90 font-medium">{member.year}</p>
                                            </div>
                                        </div>
                                    )}
                                    {(member.domain || member.type) && (
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-white/5 text-[#B6F000]"><Briefcase className="w-4 h-4" /></div>
                                            <div>
                                                <p className="text-[10px] uppercase text-white/40 tracking-wider">Domain</p>
                                                <p className="text-sm text-white/90 font-medium">
                                                    {Array.isArray(member.domain) ? member.domain.join(', ') : member.type}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    {member.email && (
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-white/5 text-[#B6F000]"><Mail className="w-4 h-4" /></div>
                                            <div>
                                                <p className="text-[10px] uppercase text-white/40 tracking-wider">Contact</p>
                                                <p className="text-sm text-white/90 font-medium">{member.email}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Responsibilities */}
                                {member.responsibilities && (
                                    <div className="mb-8">
                                        <h4 className="text-white/70 font-mono text-xs uppercase tracking-widest mb-3 border-b border-white/10 pb-2">Responsibilities</h4>
                                        <p className="text-[#8B949E] text-sm leading-relaxed">
                                            {member.responsibilities}
                                        </p>
                                    </div>
                                )}

                                <div className="mt-auto pt-4 flex flex-wrap gap-3">
                                    {member.linkedin && (
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border border-[#0A66C2]/30 text-[#0A66C2] transition-colors text-sm font-medium">
                                            <Linkedin className="w-4 h-4" />
                                            LinkedIn
                                        </a>
                                    )}
                                    {member.github && (
                                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors text-sm font-medium">
                                            <Github className="w-4 h-4" />
                                            GitHub
                                        </a>
                                    )}
                                    {member.instagram && (
                                        <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E1306C]/10 hover:bg-[#E1306C]/20 border border-[#E1306C]/30 text-[#E1306C] transition-colors text-sm font-medium">
                                            <Instagram className="w-4 h-4" />
                                            Instagram
                                        </a>
                                    )}
                                    {member.portfolio && (
                                        <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0F9D58]/10 hover:bg-[#0F9D58]/20 border border-[#0F9D58]/30 text-[#0F9D58] transition-colors text-sm font-medium">
                                            <Globe className="w-4 h-4" />
                                            Portfolio
                                        </a>
                                    )}
                                </div>

                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default TeamMemberCard;
