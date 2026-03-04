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
        <div className="relative w-full h-[400px] bg-[#020617]/80 backdrop-blur-2xl border border-white/5 rounded-3xl overflow-hidden group shadow-[0_0_50px_rgba(79,209,255,0.05)] flex items-center justify-center">

            {/* Background Radar Rings */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                {[60, 80, 100, 120, 140, 160].map((r) => (
                    <div
                        key={r}
                        className="absolute rounded-full border border-white/40"
                        style={{ width: r * 2, height: r * 2 }}
                    />
                ))}
                {/* Radar sweep */}
                <motion.div
                    className="absolute w-full h-full bg-[conic-gradient(from_0deg,transparent_0%,rgba(79,209,255,0.1)_50%,transparent_100%)]"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                />
            </div>

            {/* Connection Lines (Center to Hub) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <circle cx="50%" cy="50%" r="20" fill="none" stroke="#4FD1FF" strokeWidth="1" className="animate-pulse" />
            </svg>

            {/* Center Hub */}
            <div className="relative z-20 flex flex-col items-center">
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="w-16 h-16 rounded-full bg-[#4FD1FF]/10 border border-[#4FD1FF]/40 backdrop-blur-3xl flex items-center justify-center shadow-[0_0_30px_rgba(79,209,255,0.2)]"
                >
                    <span className="text-[#4FD1FF] font-black text-2xl font-heading">G</span>
                </motion.div>
                <div className="mt-4 text-[10px] font-mono font-bold text-[#E6EDF3] tracking-widest uppercase text-center">
                    TECHNICAL CLUB
                </div>
            </div>

            {/* Orbiting Nodes */}
            {nodes.map((node, i) => (
                <motion.div
                    key={i}
                    className="absolute z-30 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20 / node.speed, ease: "linear" }}
                    style={{ width: node.radius * 2, height: node.radius * 2 }}
                >
                    <motion.div
                        className="absolute top-0 flex flex-col items-center"
                        style={{ rotate: -360 }} // Counter-rotate to keep text upright
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: 20 / node.speed, ease: "linear" }}
                        onMouseEnter={() => setHoveredNode(node.name)}
                        onMouseLeave={() => setHoveredNode(null)}
                    >
                        <motion.div
                            whileHover={{ scale: 1.5, zIndex: 50 }}
                            className="w-8 h-8 rounded-full bg-[#020617] border flex items-center justify-center cursor-pointer transition-shadow"
                            style={{ borderColor: node.color, boxShadow: `0 0 15px ${node.color}44` }}
                        >
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: node.color }} />
                        </motion.div>
                        <AnimatePresence>
                            {(hoveredNode === node.name || hoveredNode === null) && (
                                <motion.div
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: hoveredNode === node.name ? 1 : 0.4, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="mt-2 text-[8px] font-mono font-bold text-white uppercase tracking-tighter"
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
                        className="absolute bottom-8 z-50 px-4 py-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full font-mono text-[10px] text-[#4FD1FF] shadow-2xl"
                    >
                        {nodes.find(n => n.name === hoveredNode)?.desc}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
