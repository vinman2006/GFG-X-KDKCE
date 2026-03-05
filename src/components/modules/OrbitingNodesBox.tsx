import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const nodes = [
    { name: "Web", color: "#00FF9C", radius: 80, speed: 0.5, desc: "Explore Web Development" },
    { name: "AI", color: "#4FD1FF", radius: 120, speed: 0.3, desc: "Neural Networks & ML" },
    { name: "Robotics", color: "#9B5CFF", radius: 160, speed: 0.2, desc: "Hardware & Automation" },
    { name: "Cyber", color: "#FF3B3B", radius: 60, speed: 0.8, desc: "Cybersecurity Labs" },
    { name: "Hacks", color: "#FFA500", radius: 140, speed: 0.4, desc: "Hackathons & Builds" },
    { name: "OS", color: "#E6EDF3", radius: 100, speed: 0.6, desc: "Open Source Projects" },
];

export default function OrbitingNodesBox() {
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    return (
        <div className="relative w-full h-full min-h-[300px] bg-[rgba(10,15,30,0.55)] backdrop-blur-[20px] rounded-[28px] overflow-hidden group shadow-[0_10px_40px_rgba(0,0,0,0.35)] flex items-center justify-center border border-white/5">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,157,88,0.1),transparent_70%)]" />

            {/* Background Radar Rings */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
                {[60, 80, 100, 120, 140, 160].map((r) => (
                    <div
                        key={r}
                        className="absolute rounded-full border border-[#0F9D58]/20 bg-transparent"
                        style={{ width: r * 2, height: r * 2 }}
                    />
                ))}
                {/* Radar sweep */}
                <motion.div
                    className="absolute w-full h-full bg-[conic-gradient(from_0deg,transparent_0%,rgba(15,157,88,0.1)_50%,transparent_100%)]"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                />
            </div>

            {/* Center Hub */}
            <div className="relative z-20 flex flex-col items-center">
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 6,
                        ease: "easeInOut"
                    }}
                    className="w-20 h-20 rounded-2xl bg-white border-2 border-[#0F9D58] backdrop-blur-3xl flex items-center justify-center shadow-[0_0_40px_rgba(15,157,88,0.4)] relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[#0F9D58]/5 rounded-2xl animate-pulse" />
                    <img
                        src="/gfg-kdkce.png"
                        alt="GFG Logo"
                        className="w-14 h-14 object-contain relative z-10 p-1"
                    />
                </motion.div>
                <div className="mt-4 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                    <span className="text-[10px] font-mono font-bold text-[#E6EDF3] tracking-widest uppercase text-center block">
                        KDKCE CHAPTER
                    </span>
                </div>
            </div>

            {/* Orbiting Nodes */}
            {nodes.map((node, i) => (
                <motion.div
                    key={i}
                    className="absolute z-30 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 25 / node.speed, ease: "linear" }}
                    style={{ width: node.radius * 2, height: node.radius * 2 }}
                >
                    <motion.div
                        className="absolute top-0 flex flex-col items-center"
                        animate={{ rotate: -360 }} // Counter-rotate to keep text upright
                        transition={{ repeat: Infinity, duration: 25 / node.speed, ease: "linear" }}
                        onMouseEnter={() => setHoveredNode(node.name)}
                        onMouseLeave={() => setHoveredNode(null)}
                    >
                        <motion.div
                            whileHover={{ scale: 1.3, zIndex: 50 }}
                            className="w-10 h-10 rounded-xl bg-[#0E1117] border-2 flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                            style={{
                                borderColor: node.color,
                                boxShadow: `0 0 20px ${node.color}33`,
                            }}
                        >
                            <div className="w-2.5 h-2.5 rounded-full filter blur-[1px] animate-pulse" style={{ backgroundColor: node.color }} />
                        </motion.div>

                        <AnimatePresence>
                            {(hoveredNode === node.name || hoveredNode === null) && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                        opacity: hoveredNode === node.name ? 1 : 0.3,
                                        scale: 1,
                                        y: hoveredNode === node.name ? -5 : 0
                                    }}
                                    exit={{ opacity: 0 }}
                                    className={`mt-2 text-[9px] font-mono font-bold uppercase tracking-tighter ${hoveredNode === node.name ? 'text-white' : 'text-[#8B949E]'}`}
                                >
                                    {node.name}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            ))}

            {/* Hover Information Layer */}
            <AnimatePresence>
                {hoveredNode && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute bottom-6 z-50 px-6 py-3 bg-[#0F9D58]/10 backdrop-blur-xl border border-[#0F9D58]/30 rounded-2xl font-mono text-xs text-[#E6EDF3] shadow-2xl flex items-center gap-3"
                    >
                        <div className="w-2 h-2 rounded-full bg-[#B6F000] animate-ping" />
                        {nodes.find(n => n.name === hoveredNode)?.desc}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
