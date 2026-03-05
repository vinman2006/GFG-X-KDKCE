import AnimatedActionGrid from "./AnimatedActionGrid";
import GlitchTechBox from "./GlitchTechBox";
import OrbitingNodesBox from "./OrbitingNodesBox";

export default function ModulesSection() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-stretch">
            <div className="w-full">
                <AnimatedActionGrid />
            </div>
            <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-8 w-full">
                <GlitchTechBox />
                <OrbitingNodesBox />
            </div>
        </div>
    );
}
