import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useState, useRef, forwardRef } from "react";
import { UserPlus, Box, GraduationCap, Zap } from "lucide-react";

const actions = [
    { text: "Join", icon: UserPlus, desc: "COMMUNITY ONBOARDING", color: "#00FF9C", glow: "rgba(0, 255, 156, 0.4)" },
    { text: "Learn", icon: GraduationCap, desc: "WORKSHOPS / KNOWLEDGE", color: "#4FD1FF", glow: "rgba(79, 209, 255, 0.4)" },
    { text: "Innovate", icon: Zap, desc: "HACKATHONS / RESEARCH", color: "#FF8A00", glow: "rgba(255, 138, 0, 0.4)" },
    { text: "Deploy", icon: Box, desc: "PROJECT SHOWCASE", color: "#9B5CFF", glow: "rgba(155, 92, 255, 0.4)" },
];

export default function AnimatedActionGrid() {
    const containerRef = useRef(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });
    const [activeIndex, setActiveIndex] = useState(-1);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (isInView) {
            let current = 0;
            const interval = setInterval(() => {
                if (current < actions.length) {
                    setActiveIndex(current);

                    // Update cursor position to the center of the current card
                    if (cardRefs.current[current]) {
                        const rect = cardRefs.current[current]!.getBoundingClientRect();
                        setCursorPos({
                            x: rect.left + rect.width / 2,
                            y: rect.top + rect.height / 2
                        });
                    }

                    current++;
                } else {
                    setActiveIndex(-1);
                    clearInterval(interval);
                }
            }, 700);
            return () => clearInterval(interval);
        }
    }, [isInView]);

    return (
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
            {actions.map((item, i) => (
                <ActionCard
                    key={i}
                    item={item}
                    isActive={activeIndex === i}
                    ref={(el) => (cardRefs.current[i] = el)}
                />
            ))}

            {/* Guiding Pulse / Cursor Indicator */}
            <AnimatePresence>
                {activeIndex !== -1 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, x: cursorPos.x, y: cursorPos.y }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: cursorPos.x,
                            y: cursorPos.y
                        }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                        className="fixed pointer-events-none z-[100] w-16 h-16 rounded-full border-2 border-dashed mix-blend-difference -ml-8 -mt-8"
                        style={{
                            borderColor: actions[activeIndex].color,
                            boxShadow: `0 0 30px ${actions[activeIndex].color}`,
                        }}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

const ActionCard = forwardRef<HTMLDivElement, { item: typeof actions[0], isActive: boolean }>(({ item, isActive }, ref) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [clickRipple, setClickRipple] = useState<{ x: number, y: number } | null>(null);

    // Tilt Effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setClickRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setTimeout(() => setClickRipple(null), 1000);
    };

    const activeOrHovered = isHovered || isActive;

    return (
        <motion.div
            ref={(node) => {
                cardRef.current = node;
                if (typeof ref === 'function') ref(node);
                else if (ref) (ref as any).current = node;
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            animate={{
                y: activeOrHovered ? -12 : 0,
                scale: activeOrHovered ? 1.02 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`group relative flex flex-col items-center rounded-[28px] border ${activeOrHovered ? 'border-white/20' : 'border-white/5'} bg-[rgba(10,15,30,0.55)] backdrop-blur-[20px] p-[28px] cursor-pointer overflow-hidden transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.35)] min-h-[320px]`}
        >
            {/* Soft internal gradient background lighting */}
            <div
                className="absolute inset-0 z-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                style={{
                    background: `radial-gradient(circle at top, ${item.color}33, transparent 70%)`
                }}
            />

            {/* Hover Light Sweep Effect */}
            <motion.div
                className="absolute inset-0 z-10 pointer-events-none"
                initial={false}
                animate={activeOrHovered ? { x: ["-100%", "200%"] } : { x: "-100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            >
                <div className="w-[40%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
            </motion.div>

            {/* Icon Wrapper with Halo and Pulse */}
            <div className="relative mb-[18px] z-30 flex-shrink-0">
                <div
                    className="absolute inset-0 blur-3xl rounded-full scale-[2] opacity-20"
                    style={{ background: item.color }}
                />
                <motion.div
                    animate={{
                        scale: activeOrHovered ? [1, 1.1, 1] : [1, 1.05, 1],
                        opacity: activeOrHovered ? [1, 0.8, 1] : [0.8, 1, 0.8]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 p-4 rounded-2xl bg-white/5 border border-white/10"
                >
                    <item.icon className="w-10 h-10" style={{ color: item.color }} />
                </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-30 text-center flex-grow flex flex-col items-center">
                <h3 className="text-[#E6EDF3] text-3xl font-heading font-extrabold mb-[12px] tracking-tight">
                    {item.text}
                </h3>

                {/* Typing Effect Description */}
                <div className="h-4 flex items-center justify-center">
                    <p className="text-[10px] font-mono text-[#8B949E] uppercase tracking-[0.2em] overflow-hidden whitespace-nowrap">
                        <TypingText text={item.desc} isHovered={activeOrHovered} />
                    </p>
                </div>

                {/* Status Indicator - Pushed to bottom */}
                <div className="mt-auto pt-8 flex items-center justify-center gap-3 pb-[4px]">
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive || isHovered ? 'bg-[#00FF9C] shadow-[0_0_12px_#00FF9C]' : 'bg-[#00FF9C]/40'}`} />
                    <span className="text-[9px] font-mono text-[#E6EDF3]/60 tracking-[0.2em] uppercase">Node Active</span>
                </div>
            </div>

            {/* Neon Edge Glow on Hover/Active */}
            <div
                className="absolute inset-0 border border-transparent group-hover:border-current rounded-[28px] transition-all duration-700 pointer-events-none"
                style={{
                    color: `${item.color}${activeOrHovered ? '40' : '00'}`,
                    boxShadow: activeOrHovered ? `0 0 30px ${item.color}20, inset 0 0 20px ${item.color}10` : 'none'
                }}
            />
        </motion.div>
    );
    );
});

function TypingText({ text, isHovered }: { text: string, isHovered: boolean }) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        if (isHovered) {
            let i = 0;
            const timer = setInterval(() => {
                setDisplayedText(text.substring(0, i));
                i++;
                if (i > text.length) clearInterval(timer);
            }, 40);
            return () => clearInterval(timer);
        } else {
            setDisplayedText(text);
        }
    }, [isHovered, text]);

    return (
        <span className={isHovered ? "border-r border-white/50 pr-0.5 animate-pulse" : ""}>
            {displayedText}
        </span>
    );
}
