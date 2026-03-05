import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef, ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface ModuleCardProps {
    title: string;
    subtitle: string;
    icon?: LucideIcon;
    hoverGlow?: string;
    className?: string;
    children?: ReactNode;
    style?: any;
    isActive?: boolean;
}

const glowColors: { [key: string]: string } = {
    green: "rgba(0, 255, 156, 0.4)",
    blue: "rgba(79, 209, 255, 0.4)",
    orange: "rgba(255, 138, 0, 0.4)",
    purple: "rgba(155, 92, 255, 0.4)",
};

export default function ModuleCard({ title, subtitle, icon: Icon, hoverGlow, className, children, style, isActive }: ModuleCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Tilt Effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

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

    const activeOrHovered = isHovered || isActive;
    const glowColor = hoverGlow ? glowColors[hoverGlow] || hoverGlow : "rgba(255, 255, 255, 0.1)";

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                ...style
            }}
            animate={{
                scale: activeOrHovered ? 1.05 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`group relative flex flex-col items-center justify-center rounded-[20px] border border-white/5 bg-[rgba(10,15,30,0.55)] backdrop-blur-[20px] p-8 overflow-hidden transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.35)] min-h-[220px] ${className}`}
        >
            {/* Background Glow */}
            <div
                className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-20"
                style={{
                    background: `radial-gradient(circle at center, ${glowColor}, transparent 70%)`
                }}
            />

            {/* Hover Light Sweep */}
            <motion.div
                className="absolute inset-0 z-10 pointer-events-none"
                initial={false}
                animate={activeOrHovered ? { x: ["-100%", "200%"] } : { x: "-100%" }}
                transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
            >
                <div className="w-[40%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
            </motion.div>

            {/* Border Glow */}
            <div
                className={`absolute inset-0 border border-transparent transition-all duration-300 rounded-[20px] pointer-events-none ${activeOrHovered ? 'border-white/20' : ''}`}
                style={{
                    boxShadow: activeOrHovered ? `0 0 20px ${glowColor}` : 'none'
                }}
            />

            <div className="relative z-20 flex flex-col items-center text-center">
                {Icon && (
                    <div className="mb-4">
                        <Icon className="w-10 h-10 transition-all duration-300 group-hover:scale-110" style={{ color: glowColor.replace('0.4', '1').replace('0.1', '1') }} />
                    </div>
                )}

                {children ? children : (
                    <>
                        <h3 className="text-[#E6EDF3] text-xl font-semibold mb-1 tracking-tight">
                            {title}
                        </h3>
                        <p className="text-sm text-[#8B949E] font-medium leading-tight">
                            {subtitle}
                        </p>
                    </>
                )}
            </div>
        </motion.div>
    );
}
