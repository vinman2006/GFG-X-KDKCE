import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { UserPlus, Box, GraduationCap, Zap } from "lucide-react";

const actions = [
    { text: "Join", icon: UserPlus, desc: "Community onboarding", color: "#00FF9C" },
    { text: "Deploy", icon: Box, desc: "Project showcase", color: "#4FD1FF" },
    { text: "Learn", icon: GraduationCap, desc: "Workshops / Knowledge", color: "#9B5CFF" },
    { text: "Innovate", icon: Zap, desc: "Hackathons / Research", color: "#FF3B3B" },
];

export default function AnimatedActionGrid() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const { left, top } = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full h-[400px] bg-[#020617]/80 backdrop-blur-2xl border border-white/5 rounded-3xl overflow-hidden p-8 group transition-all duration-500 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
            {/* Circuit lines traveling along the borders */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <rect width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#00FF9C] animate-circuit" />
            </svg>

            {/* Cursor proximity glow effect */}
            <motion.div
                className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(0, 255, 156, 0.08), transparent)`
                    ),
                }}
            />

            <div className="grid grid-cols-2 gap-4 h-full relative z-10">
                {actions.map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className="relative flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] p-6 cursor-pointer overflow-hidden transition-all duration-300 hover:border-[#00FF9C]/40 hover:bg-[#00FF9C]/5 group/tile"
                    >
                        {/* Soft internal gradient lighting */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover/tile:opacity-100 transition-opacity" />

                        <item.icon className="w-8 h-8 mb-3 text-[#8B949E] group-hover/tile:text-[#00FF9C] transition-colors duration-300" />
                        <span className="text-[#E6EDF3] text-lg font-heading font-bold mb-1">{item.text}</span>
                        <span className="text-[10px] font-mono text-[#8B949E] uppercase tracking-wider text-center">{item.desc}</span>

                        {/* Subtle neon borders on hover */}
                        <div className="absolute inset-0 border border-[#00FF9C]/0 group-hover/tile:border-[#00FF9C]/50 rounded-2xl transition-all duration-500 shadow-[inset_0_0_20px_rgba(0,255,156,0.1)]" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
