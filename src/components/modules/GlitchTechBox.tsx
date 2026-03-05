import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const SCRAMBLE_CHARS = "01$!%/[]{}=+?#@";

const ScrambleText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
    const [displayText, setDisplayText] = useState(text);

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(prev =>
                text.split("").map((char, index) => {
                    if (index < iteration) return text[index];
                    return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
                }).join("")
            );

            if (iteration >= text.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 30);
        return () => clearInterval(interval);
    }, [text]);

    return <span>{displayText}</span>;
}

export default function GlitchTechBox() {
    const [booting, setBooting] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setBooting(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative w-full h-full min-h-[300px] bg-[rgba(10,15,30,0.55)] backdrop-blur-[20px] rounded-[28px] overflow-hidden border border-white/5 p-[28px] flex flex-col items-center justify-center group shadow-[0_10px_40px_rgba(0,0,0,0.35)]">

            {/* HUD Overlay Elements */}
            <div className="absolute top-4 left-6 flex gap-1 items-center font-mono text-[8px] text-[#00FF9C]/60 uppercase tracking-widest">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00FF9C] animate-pulse" />
                Innovation Protocol Running
            </div>
            <div className="absolute top-4 right-6 font-mono text-[8px] text-[#4FD1FF]/60 uppercase tracking-widest">
                Override Active: 0x88FF
            </div>

            {/* Background Holographic Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,156,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,156,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />

            <div className="relative z-10 flex flex-col items-center">
                <AnimatePresence>
                    {booting ? (
                        <motion.div
                            key="boot"
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="font-mono text-[10px] text-[#00FF9C] space-y-1"
                        >
                            <div>{">"} INITIALIZING CORE_SYSTEM...</div>
                            <div>{">"} LOADING NEURAL_MAP... [OK]</div>
                            <div>{">"} ESTABLISHING LINK...</div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="main"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center space-y-2"
                        >
                            <h3 className="text-5xl md:text-6xl font-heading font-black tracking-tighter text-[#E6EDF3] leading-none">
                                <div className="text-[#00FF9C]/80"><ScrambleText text="CODE" /></div>
                                <div className="text-[#4FD1FF]/80"><ScrambleText text="BUILD" /></div>
                                <motion.div
                                    animate={{
                                        x: [0, -2, 2, -1, 0],
                                        filter: ["none", "hue-rotate(90deg)", "none"]
                                    }}
                                    transition={{ repeat: Infinity, duration: 0.2, repeatDelay: 3 }}
                                    className="text-[#FF3B3B] glitch-trigger relative"
                                >
                                    <ScrambleText text="DISRUPT" />
                                    <motion.div
                                        className="absolute inset-0 text-white opacity-40 mix-blend-overlay"
                                        animate={{ x: [-2, 2, -2] }}
                                        transition={{ repeat: Infinity, duration: 0.1 }}
                                    >
                                        DISRUPT
                                    </motion.div>
                                </motion.div>
                            </h3>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Scanning Line Overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00FF9C]/10 to-transparent h-1/4 w-full z-20 pointer-events-none"
                animate={{ top: ["-25%", "100%"] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            />

            {/* HUD Bottom Indicators */}
            <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end opacity-40">
                <div className="flex gap-1">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ height: [4, 12, 4] }}
                            transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
                            className="w-1 bg-[#00FF9C]"
                        />
                    ))}
                </div>
                <div className="font-mono text-[8px] text-[#8B949E]">SYSTEM_STATUS: NOMINAL</div>
            </div>
        </div>
    );
}
