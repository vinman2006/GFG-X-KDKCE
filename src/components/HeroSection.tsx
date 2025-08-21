import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

// === Floating Cube with glow ===
const FloatingCube = ({ position, color }: { position: [number, number, number]; color: string }) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <mesh position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.6}
        />
      </mesh>
    </Float>
  );
};

// === Torus code symbol with glow ===
const CodeSymbol = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.3}>
      <mesh position={position}>
        <torusGeometry args={[0.3, 0.1, 16, 100]} />
        <meshStandardMaterial
          color="#2F8D46"
          emissive="#2F8D46"
          emissiveIntensity={0.8}
        />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Floating Elements */}
      <FloatingCube position={[-3, 2, -2]} color="#2F8D46" />
      <FloatingCube position={[3, -1, -1]} color="#4CAF50" />
      <FloatingCube position={[-2, -2, -3]} color="#66BB6A" />

      <CodeSymbol position={[2, 2, 0]} />
      <CodeSymbol position={[-1, -1, 1]} />

      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
};

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/kdkce.jpg')" }} // 👈 make sure this image is in /public
    >
      {/* Background 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 lg:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(0,255,128,0.8)]"
          >
            GeeksForGeeks KDKCE
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed"
          >
            GeeksforGeeks Student Chapter
            <br />
            <span className="text-green-400 font-semibold">
              KDK College of Engineering, Nagpur
            </span>
          </motion.p>

          {/* Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-gray-100"
          >
            Empowering students with coding skills, technical knowledge,
            <br className="hidden sm:block" />
            and hands-on experience in software development.
          </motion.div>
        </motion.div>
      </div>

      {/* Floating 2D UI Shapes (overlay) */}
      <div className="absolute inset-0 pointer-events-none z-15">
        <div className="floating absolute top-20 left-10 w-12 h-12 bg-green-400/20 rounded-lg" />
        <div className="floating-delay absolute bottom-32 right-16 w-8 h-8 bg-green-300/30 rounded-full" />
        <div className="floating absolute top-1/3 right-1/4 w-6 h-6 bg-green-500/40 rounded-sm rotate-45" />
      </div>
    </section>
  );
};

export default HeroSection;
// import { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Float } from "@react-three/drei";
// import { motion } from "framer-motion";
// import * as THREE from "three";

// // 3D Components
// const FloatingCube = ({ position, color }: { position: [number, number, number]; color: string }) => {
//   return (
//     <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
//       <mesh position={position}>
//         <boxGeometry args={[0.5, 0.5, 0.5]} />
//         <meshStandardMaterial color={color} />
//       </mesh>
//     </Float>
//   );
// };

// const CodeSymbol = ({ position }: { position: [number, number, number] }) => {
//   return (
//     <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.3}>
//       <mesh position={position}>
//         <torusGeometry args={[0.3, 0.1, 16, 100]} />
//         <meshStandardMaterial color="#2F8D46" />
//       </mesh>
//     </Float>
//   );
// };

// const Scene = () => {
//   return (
//     <>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />
//       <directionalLight position={[5, 5, 5]} intensity={1} />
      
//       {/* Floating Elements */}
//       <FloatingCube position={[-3, 2, -2]} color="#2F8D46" />
//       <FloatingCube position={[3, -1, -1]} color="#4CAF50" />
//       <FloatingCube position={[-2, -2, -3]} color="#66BB6A" />
      
//       <CodeSymbol position={[2, 2, 0]} />
//       <CodeSymbol position={[-1, -1, 1]} />
      
//       <OrbitControls enableZoom={false} enablePan={false} />
//     </>
//   );
// };

// const HeroSection = () => {
//   return (
    
//     // <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
//     <section
//       className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
//       style={{ backgroundImage: "url('public/kdkce.jpg')" }} // 👈 put bg.jpg in your /public folder
//     >

//     {/* Background 3D Canvas */}
//       <div className="absolute inset-0 z-0">
//         <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
//           <Suspense fallback={null}>
//             <Scene />
//           </Suspense>
//         </Canvas>
//       </div>

//       {/* Gradient Overlay */}
//       {/* <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/50 to-transparent z-10" /> */}
// <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/20 to-transparent z-10" />

//       {/* Content */}
//       <div className="relative z-20 container mx-auto px-4 lg:px-6 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto space-y-6"
//         >
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="hero-text text-gradient glow-text"
//           >
//             GeeksForGeeks KDKCE
//           </motion.h1>
          
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
//           >
//             GeeksforGeeks Student Chapter
//             <br />
//             <span className="text-primary font-semibold">KDK College of Engineering, Nagpur</span>
//           </motion.p>
          
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="text-lg text-muted-foreground"
//           >
//             Empowering students with coding skills, technical knowledge,
//             <br className="hidden sm:block" />
//             and hands-on experience in software development.
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Floating Elements Overlay */}
//       <div className="absolute inset-0 pointer-events-none z-15">
//         <div className="floating absolute top-20 left-10 w-12 h-12 bg-primary/20 rounded-lg" />
//         <div className="floating-delay absolute bottom-32 right-16 w-8 h-8 bg-primary-glow/30 rounded-full" />
//         <div className="floating absolute top-1/3 right-1/4 w-6 h-6 bg-primary/40 rounded-sm rotate-45" />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;