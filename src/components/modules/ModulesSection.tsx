import AnimatedActionGrid from "./AnimatedActionGrid";
import GlitchTechBox from "./GlitchTechBox";
import OrbitingNodesBox from "./OrbitingNodesBox";

export default function ModulesSection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedActionGrid />
            <GlitchTechBox />
            <OrbitingNodesBox />
        </div>
    );
}
