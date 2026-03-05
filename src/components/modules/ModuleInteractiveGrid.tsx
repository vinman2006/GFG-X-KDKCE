import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { UserPlus, GraduationCap, Lightbulb, Rocket, MousePointer2 } from "lucide-react";

const cards = [
    { id: "join", title: "Join", icon: <UserPlus className="w-8 h-8" /> },
    { id: "learn", title: "Learn", icon: <GraduationCap className="w-8 h-8" /> },
    { id: "innovate", title: "Innovate", icon: <Lightbulb className="w-8 h-8" /> },
    { id: "deploy", title: "Deploy", icon: <Rocket className="w-8 h-8" /> }
];

export default function ModuleInteractiveGrid() {
    const [activeCard, setActiveCard] = useState<string | null>(null);
    const [isContainerHovered, setIsContainerHovered] = useState(false);
    const [cursorPos, setCursorPos] = useState({ x: "-10%", y: "110%", opacity: 0 });
    const [isScriptPlaying, setIsScriptPlaying] = useState(true);

    const containerRef = useRef<HTMLDivElement>(null);
    const cardRefs = {
        join: useRef<HTMLDivElement>(null),
        learn: useRef<HTMLDivElement>(null),
        innovate: useRef<HTMLDivElement>(null),
        deploy: useRef<HTMLDivElement>(null),
    };

    // Parallax values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 30, stiffness: 200 };
    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
    };

    useEffect(() => {
        if (!isScriptPlaying) return;

        const playSequence = async () => {
            // 1. Initial wait
            await new Promise(r => setTimeout(r, 1000));

            const sequence = ["join", "learn", "innovate", "deploy"];

            // Initial fade in and move to grid start
            setCursorPos(prev => ({ ...prev, opacity: 1, x: "20%", y: "80%" }));
            await new Promise(r => setTimeout(r, 500));

            for (const id of sequence) {
                const card = cardRefs[id as keyof typeof cardRefs].current;
                if (card && containerRef.current) {
                    const containerRect = containerRef.current.getBoundingClientRect();
                    const cardRect = card.getBoundingClientRect();

                    // Calculate center relative to container
                    const targetX = ((cardRect.left + cardRect.width / 2) - containerRect.left);
                    const targetY = ((cardRect.top + cardRect.height / 2) - containerRect.top);

                    setCursorPos({ x: `${targetX}px`, y: `${targetY}px`, opacity: 1 });

                    // Wait for movement
                    await new Promise(r => setTimeout(r, 900));

                    // Highight card
                    setActiveCard(id);
                    await new Promise(r => setTimeout(r, 1000));

                    setActiveCard(null);
                }
            }

            // Fade out
            setCursorPos(prev => ({ ...prev, opacity: 0 }));
            setIsScriptPlaying(false);
        };

        playSequence();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full max-w-[600px] aspect-square lg:aspect-auto lg:h-[600px] p-8 perspective-1200"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => !isScriptPlaying && setIsContainerHovered(true)}
            onMouseLeave={() => {
                setIsContainerHovered(false);
                mouseX.set(0);
                mouseY.set(0);
            }}
            style={{ perspective: "1200px" } as any}
        >
            {/* 2x2 Grid */}
            <motion.div
                className="grid grid-cols-2 grid-rows-2 gap-6 h-full w-full"
                style={{ rotateX, rotateY }}
            >
                {cards.map((card, index) => {
                    // Unique "drift" for each card with different amplitudes and phases
                    const driftX = [0, index % 2 === 0 ? 6 : -6, 0];
                    const driftY = [0, index < 2 ? -10 : 10, 0];

                    return (
                        <div key={card.id} className="relative group">
                            {/* Ambient Glow behind card */}
                            <div className="absolute inset-[-40px] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                <div
                                    className="w-full h-full blur-[80px] rounded-full"
                                    style={{
                                        background: `radial-gradient(circle, rgba(124, 255, 79, 0.08) 0%, transparent 70%)`
                                    }}
                                />
                            </div>

                            <motion.div
                                ref={cardRefs[card.id as keyof typeof cardRefs]}
                                onMouseEnter={() => !isScriptPlaying && setActiveCard(card.id)}
                                onMouseLeave={() => !isScriptPlaying && setActiveCard(null)}
                                initial={false}
                                animate={{
                                    scale: activeCard === card.id ? 1.1 : 1,
                                    borderColor: activeCard === card.id ? "#7CFF4F" : "rgba(255,255,255,0.08)",
                                    backgroundColor: activeCard === card.id ? "rgba(124, 255, 79, 0.05)" : "rgba(255,255,255,0.02)",
                                    boxShadow: activeCard === card.id ? "0 0 40px rgba(124, 255, 79, 0.2)" : "none",
                                    x: (isContainerHovered || isScriptPlaying) ? 0 : driftX,
                                    y: (isContainerHovered || isScriptPlaying) ? 0 : driftY,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 18,
                                    mass: 1,
                                    x: (isContainerHovered || isScriptPlaying) ? { type: "spring" } : { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                    y: (isContainerHovered || isScriptPlaying) ? { type: "spring" } : { duration: 5, repeat: Infinity, ease: "easeInOut" },
                                }}
                                className="relative z-10 flex flex-col items-center justify-center gap-4 rounded-[24px] border backdrop-blur-xl p-8 cursor-pointer overflow-hidden shadow-2xl h-full"
                            >
                                {/* Edge Light Sweep */}
                                <motion.div
                                    className="absolute inset-0 z-0 pointer-events-none opacity-20"
                                    animate={{
                                        background: [
                                            "linear-gradient(45deg, transparent 0%, rgba(255,255,255,0) 45%, rgba(124,255,79,0.1) 50%, rgba(255,255,255,0) 55%, transparent 100%)",
                                            "linear-gradient(45deg, transparent 0%, rgba(255,255,255,0) 85%, rgba(124,255,79,0.1) 90%, rgba(255,255,255,0) 95%, transparent 100%)",
                                            "linear-gradient(45deg, transparent 0%, rgba(255,255,255,0) 0%, rgba(124,255,79,0.1) 5%, rgba(255,255,255,0) 10%, transparent 100%)"
                                        ],
                                        x: ["-100%", "100%"]
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />

                                {/* Icon Container with Micro-Glow */}
                                <div className="relative">
                                    <div
                                        className={`absolute inset-0 blur-xl opacity-20 transition-all duration-500 scale-150 ${activeCard === card.id ? "bg-[#7CFF4F]" : "bg-transparent"}`}
                                    />
                                    <motion.div
                                        className={`relative z-10 transition-colors duration-300 ${activeCard === card.id ? "text-[#7CFF4F]" : "text-[#8B949E]"}`}
                                        animate={{ y: [0, -3, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        {card.icon}
                                    </motion.div>
                                </div>

                                <span className={`text-xl font-sans font-bold transition-colors duration-300 ${activeCard === card.id ? "text-[#E6EDF3]" : "text-[#8B949E]"}`}>
                                    {card.title}
                                </span>

                                {/* Pulsing glow during script */}
                                {isScriptPlaying && activeCard === card.id && (
                                    <motion.div
                                        className="absolute inset-0 border border-[#7CFF4F] rounded-[24px]"
                                        animate={{ opacity: [0, 1, 0], scale: [1, 1.02, 1] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    />
                                )}
                            </motion.div>
                        </div>
                    );
                })}
            </motion.div>

            {/* Scripted Mouse Cursor */}
            <motion.div
                initial={{ opacity: 0, x: "-10%", y: "110%" }}
                animate={{
                    x: cursorPos.x,
                    y: cursorPos.y,
                    opacity: cursorPos.opacity
                }}
                transition={{
                    x: { duration: 0.9, ease: [0.32, 0, 0.67, 0] },
                    y: { duration: 0.9, ease: [0.32, 0, 0.67, 0] },
                    opacity: { duration: 0.4 }
                }}
                className="absolute top-0 left-0 z-50 pointer-events-none text-[#7CFF4F] drop-shadow-[0_0_10px_rgba(124,255,79,0.5)]"
            >
                <MousePointer2 className="w-8 h-8 fill-current" />
            </motion.div>
        </div>
    );
}
