import React from "react";
import Layout from "@/components/Layout";
import TeamMemberCard, { TeamMember } from "@/components/TeamMemberCard";

const teamMembers: TeamMember[] = [
  { name: "A. Badhe", role: "Chairperson", type: "Core Lead", image: "/ap.png" },
  { name: "Dr. Varghese", role: "Principal", type: "Faculty", image: "/principal.jpg" },
  { name: "R. Pande", role: "Technical Head", type: "Tech Team", image: "/image.png" },
  { name: "S. Wagh", role: "Design Head", type: "Tech Team", image: "/sk.png" },
  { name: "Aditi Badhe", role: "Vice Chairperson", type: "Core Lead", image: "/ad.png" },
  { name: "Khushi Bodakhe", role: "Event Head", type: "Core Lead", image: "/ks.jpg" },
  { name: "Anisha Gurumukhi", role: "PR & Outreach Head", type: "Tech Team", image: "/ag.jpg" },
  { name: "Harshit Pachbudhe", role: "Marketing Head", type: "Tech Team", image: "/hs.jpg" },
];

const TeamPage = () => {
  return (
    <Layout>
      <div className="bg-[#0E1117] pt-32 pb-24 min-h-screen">
        <section className="relative px-6 lg:px-12">
          <div className="container mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#E6EDF3] mb-4">
                The <span className="text-[#0F9D58]">Core System</span>
              </h2>
              <p className="text-[#8B949E] font-mono text-sm max-w-xl border-l-2 border-[#B6F000] pl-4">
                Authorized personnel. Root access granted.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 group/grid">
              {teamMembers.map((member, idx) => (
                <TeamMemberCard key={idx} member={member} idx={idx} />
              ))}
            </div>

            <div className="mt-24 text-center">
              <h3 className="text-2xl font-mono text-[#8B949E] opacity-40">
                More Members Coming Soon...
              </h3>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TeamPage;
