import { useRef, useState, useEffect } from "react";
import { UserPlus, GraduationCap, Bolt, Box, Network } from "lucide-react";
import { motion, useInView } from "framer-motion";
import ModuleCard from "./ModuleCard";

export default function ModulesSection() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.1 });
    const [activeIndex, setActiveIndex] = useState(-1);

    const modules = [
        { id: "join", title: "Join", subtitle: "Community Onboarding", icon: UserPlus, hoverGlow: "green" },
        { id: "learn", title: "Learn", subtitle: "Workshops / Knowledge", icon: GraduationCap, hoverGlow: "blue" },
        {
            id: "vision",
            title: "ENGINEER • BUILD • SCALE",
            subtitle: "Product Engineering Ecosystem",
            type: "vision"
        },
        { id: "innovate", title: "Innovate", subtitle: "Incubators / Research", icon: Bolt, hoverGlow: "orange" },
        { id: "deploy", title: "Deploy", subtitle: "Project Showcase", icon: Box, hoverGlow: "purple" },
        {
            id: "ecosystem",
            title: "Tech Ecosystem",
            subtitle: "Collaborations • Startups • Industry",
            icon: Network,
            type: "ecosystem"
        }
    ];

    useEffect(() => {
        if (isInView) {
            const sequence = [0, 1, 3, 4];
            let i = 0;
            const interval = setInterval(() => {
                setActiveIndex(sequence[i]);
                i++;
                if (i >= sequence.length) {
                    setTimeout(() => setActiveIndex(-1), 1200);
                    i = 0;
                }
            }, 1600);
            return () => clearInterval(interval);
        }
    }, [isInView]);

    return (
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch w-full">
            {modules.map((m, idx) => (
                <ModuleCard
                    key={m.id}
                    title={m.title}
                    subtitle={m.subtitle}
                    icon={m.icon}
                    hoverGlow={m.hoverGlow}
                    isActive={activeIndex === idx}
                >
                    {m.type === "vision" && (
                        <div className="flex flex-col items-center">
                            <h3 className="text-xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#00FF9C] via-[#4FD1FF] to-[#00FF9C] bg-[length:200%_auto] animate-gradient-x mb-1">
                                {m.title}
                            </h3>
                            <p className="text-sm text-[#8B949E] font-medium">
                                {m.subtitle}
                            </p>
                        </div>
                    )}
                    {m.type === "ecosystem" && (
                        <div className="flex flex-col items-center relative py-4">
                            {/* Orbiting Lines */}
                            <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-20">
                                <motion.div
                                    className="absolute w-24 h-24 border border-white/20 rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.div
                                    className="absolute w-32 h-16 border border-white/10 rounded-full"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                />
                            </div>
                            <Network className="w-10 h-10 text-[#4FD1FF] mb-4 relative z-10" />
                            <h3 className="text-[#E6EDF3] text-xl font-semibold mb-1 tracking-tight relative z-10">
                                {m.title}
                            </h3>
                            <p className="text-sm text-[#8B949E] font-medium relative z-10">
                                {m.subtitle}
                            </p>
                        </div>
                    )}
                </ModuleCard>
            ))}
        </div>
    );
}
