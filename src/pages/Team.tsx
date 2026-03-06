import React, { useRef } from "react";
import Layout from "@/components/Layout";
import TeamMemberCard, { TeamMember } from "@/components/TeamMemberCard";
import newCommitteeData from "@/data/new_committee.json";
import { motion, useScroll, useTransform } from "framer-motion";

const newCommittee: TeamMember[] = newCommitteeData.map((member) => ({
  name: member.preferred_name || member.full_name,
  fullName: member.full_name,
  preferredName: member.preferred_name,
  role: member.position || "Member",
  type: member.branch || "Member",
  image: `/team/new/${member.profile_photo}`,
  linkedin: member.linkedin && member.linkedin !== "." && member.linkedin !== "Don't have" && member.linkedin !== "na" ? member.linkedin : null,
  instagram: member.instagram && member.instagram !== "." && member.instagram !== "Don't have" && member.instagram !== "na" && member.instagram !== "None" ? member.instagram : null,
  github: member.github && member.github !== "." && member.github !== "Don't have" ? member.github : null,
  portfolio: member.portfolio && member.portfolio !== "." && member.portfolio !== "No" && member.portfolio !== "Comming Soon" ? member.portfolio : null,
  email: member.email,
  mobile: member.mobile,
  bio: member.info_card && member.info_card !== "." ? member.info_card : undefined,
  branch: member.branch,
  year: member.year_of_study,
  responsibilities: member.responsibilities && member.responsibilities !== "." ? member.responsibilities : undefined,
  joinDate: member.join_status,
}));

// Filter out removed members
const removedNames = ["R. Pande", "S. Wagh", "Tushar Bokade", "Anisha Gurumukhi", "Harshit Pachbudhe"];
const activeCommittee = newCommittee.filter(m => !removedNames.includes(m.name) && !removedNames.includes(m.fullName || ""));

const faculty: TeamMember[] = [
  { name: "Prof. A.M. Kuthe", role: "Club Incharge", type: "Faculty", image: "/team/kuthe_sir.jpeg" },
  { name: "Dr. A.A. Jaiswal", role: "HOD CSE", type: "Faculty", image: "/team/hod.jpg" },
  { name: "Dr. A.M. Badar", role: "Vice Principal KDKCE", type: "Faculty", image: "/team/v-principal.png" },
  { name: "Dr. V.P. Varghese", role: "Principal KDKCE", type: "Faculty", image: "/team/principal.jpg" },
];

const advisors: TeamMember[] = [
  { name: "A. Badhe", role: "Advisor", type: "Advisor", image: "/team/ap.png" },
  { name: "Aditi Badhe", role: "Advisor", type: "Advisor", image: "/team/ad.png" },
];

const matchName = (name: string, query: string) => name.toLowerCase() === query.toLowerCase();

// Find Sojval for Campus Mantri
const mantriData = activeCommittee.find(m => m.fullName && matchName(m.fullName, "Sojval Bhusari"));
const campusMantri: TeamMember = mantriData ? { ...mantriData, role: "Campus Mantri" } : { name: "Sojval Bhusari", role: "Campus Mantri", type: "Chapter Lead", image: "/placeholder.svg" };

// Core Team
const coreTeamNames = [
  { name: "Khushi Prajapati", finalRole: "Event Head" },
  { name: "Pranay Krupakar Gajbhiye", finalRole: "Technical Head" },
  { name: "Prince Naware", finalRole: "Social Media Head" },
  { name: "Mayuri K. Thakur", finalRole: "Marketing Head" },
  { name: "Akanksha Chitriv", finalRole: "Design Head" }
];
const coreTeam = coreTeamNames.map(info => {
  const match = activeCommittee.find(m => m.fullName && (matchName(m.fullName, info.name) || m.fullName.includes(info.name.split(" ")[0])));
  if (match) {
    return { ...match, role: info.finalRole, type: "CORE COMMAND" };
  }
  return { name: info.name, role: info.finalRole, type: "CORE COMMAND", image: "/placeholder.svg" };
});

// Department definitions
const departments = [
  {
    name: "Event Team",
    leadName: "Khushi Suraj Prajapati",
    memberNames: ["Sharwari Devhare", "Gauri Bandawar", "Samradnyee Dhanraj Raulkar", "Hamza Sayyed Riyaz Ali"]
  },
  {
    name: "Technical Team",
    leadName: "Pranay Krupakar Gajbhiye",
    memberNames: ["Vineet Ravi Mandhalkar", "Tanmay Manoj Sahare", "Soham Ghatole", "Tushar Sunil Ghuse", "Mayur Pralhad Raut"]
  },
  {
    name: "Social Media Team",
    leadName: "Prince Naware",
    memberNames: ["Shreyash Uday Chine", "Samyak Rahul Walde", "Anuj Rajendraprasad Vishwakarma", "Tushar Chhapekar", "Kritika Jethani"]
  },
  {
    name: "Marketing Team",
    leadName: "Mayuri K. Thakur",
    memberNames: ["Vikramaditya Kambani", "Sai Chopkar", "Shreya Vinod Wasnik"]
  },
  {
    name: "Design & Creative Team",
    leadName: "Akanksha Chitriv",
    memberNames: ["Madhusudan Bargade", "Harshal Kamdi", "Astha Lute", "Himanshi Hanwate", "Manasvi Tajane", "Aaditya Ravi Tiwari", "Leenakshi Thombre", "Kalyani A. Bhandarkar"]
  }
];

const AnimatedConnector = ({ hasMembers }: { hasMembers: boolean }) => {
  if (!hasMembers) return null;
  return (
    <div className="flex flex-col items-center justify-center pt-0 pb-[50px] relative w-full lg:w-3/4 mx-auto z-10">
      {/* Vertical drop from lead */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: 60, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-[2px] bg-gradient-to-b from-[#0F9D58] to-[#1E5E2F] relative shadow-[0_0_15px_#0F9D58] overflow-hidden"
      >
        <motion.div
          animate={{ y: ["-100%", "300%"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute w-full h-1/3 bg-[#B6F000] shadow-[0_0_10px_#B6F000]"
        />
      </motion.div>
      {/* Horizontal Split (Circuit effect) */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-[50%] sm:w-[50%] md:w-[60%] h-[2px] bg-gradient-to-r from-transparent via-[#1E5E2F] to-transparent relative shadow-[0_0_10px_#0F9D58] flex justify-between origin-center"
      >
        {/* Vertical drops down to the members block */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: 50 }}
          transition={{ duration: 0.3, delay: 1.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-[2px] bg-gradient-to-t from-transparent to-[#1E5E2F] absolute left-0 top-0"
        />
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: 50 }}
          transition={{ duration: 0.3, delay: 1.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-[2px] bg-gradient-to-t from-transparent to-[#1E5E2F] absolute right-0 top-0"
        />
      </motion.div>
    </div>
  );
};

const TeamStructureBlock = ({ dept }: { dept: typeof departments[0] }) => {
  const leadMatch = activeCommittee.find(m => m.fullName && (matchName(m.fullName, dept.leadName) || m.fullName.includes(dept.leadName.split(" ")[0])));
  const lead = leadMatch ? { ...leadMatch, role: "Team Lead" } : { name: dept.leadName, role: "Team Lead", type: dept.name, image: "/placeholder.svg" };

  const members = dept.memberNames.map(name => {
    const match = activeCommittee.find(m => m.fullName && (matchName(m.fullName, name) || m.fullName.includes(name.split(" ")[0])));
    return match ? { ...match, role: `${dept.name.split(" ")[0]} Team Member` } : { name, role: `${dept.name.split(" ")[0]} Team Member`, type: dept.name, image: "/placeholder.svg", linkedin: null, github: null, instagram: null, portfolio: null };
  });

  if (!lead && members.length === 0) return null;

  return (
    <div className="relative mb-32 last:mb-0 bg-[#06090f]/30 border border-white/5 rounded-[40px] p-6 sm:p-10 lg:p-16 shadow-[inset_0_0_80px_rgba(0,0,0,0.5)] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#0F9D58]/5 blur-[100px] rounded-full pointer-events-none -z-20" />

      <div className="flex justify-center mb-12 relative z-10">
        <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-[#E6EDF3] border-b-[3px] border-[#0F9D58] pb-3 tracking-widest text-center uppercase">
          {dept.name}
        </h3>
      </div>

      <div className="flex flex-col items-center relative z-10 w-full">
        {/* Top: Leader */}
        {lead && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center w-full z-20"
          >
            <div className="w-[300px] sm:w-[320px] relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-b from-[#0F9D58]/20 to-transparent blur-[40px] rounded-full -z-10 pointer-events-none" />
              <TeamMemberCard member={lead} idx={0} isLead={true} />
            </div>
          </motion.div>
        )}

        {/* Central Vertical & Horizontal Connector */}
        <AnimatedConnector hasMembers={members.length > 0} />

        {/* Bottom: Members Grid */}
        {members.length > 0 && (
          <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-[40px] place-items-center relative z-10">
            {members.map((member, idx) => (
              <motion.div
                key={`member-${idx}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 + (idx * 0.15) }}
                viewport={{ once: true, margin: "-50px" }}
                className="w-[300px] sm:w-[320px]"
              >
                <TeamMemberCard member={member} idx={idx + 1} />
              </motion.div>
            ))}
          </div>
        )}

        {members.length === 0 && (
          <div className="w-full max-w-2xl mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 text-[#8B949E] text-center font-mono text-sm shadow-inner">
            <span className="animate-pulse">_ Team members deploying soon...</span>
          </div>
        )}
      </div>
    </div>
  );
};


const TeamPage = () => {
  return (
    <Layout>
      <div className="bg-[#0E1117] pt-32 pb-24 min-h-screen overflow-hidden">
        <section className="relative px-6 lg:px-12">
          <div className="container mx-auto">
            {/* Header */}
            <div className="mb-20 text-center text-glow">
              <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-[#E6EDF3] mb-4">
                The <span className="text-[#0F9D58]">Core System</span>
              </h2>
              <p className="text-[#8B949E] font-mono text-sm inline-block border border-[#B6F000]/30 bg-[#B6F000]/10 text-[#B6F000] px-4 py-2 rounded-full">
                &gt; Authorized personnel. Root access granted.
              </p>
            </div>

            {/* SECTION 1: FACULTY */}
            <div className="mb-24">
              <h3 className="text-xl md:text-2xl font-heading font-medium text-white/70 mb-8 text-center uppercase tracking-widest">Faculty Board</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {faculty.map((member, idx) => (
                  <div key={`faculty-${idx}`} className="w-full sm:w-[280px]">
                    <TeamMemberCard member={member} idx={idx} />
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 2: ADVISORS */}
            <div className="mb-24">
              <h3 className="text-xl md:text-2xl font-heading font-medium text-white/70 mb-8 text-center uppercase tracking-widest">System Advisors</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {advisors.map((member, idx) => (
                  <div key={`advisor-${idx}`} className="w-full sm:w-[320px]">
                    <TeamMemberCard member={member} idx={idx} />
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 3: CAMPUS MANTRI */}
            <div className="mb-32 flex flex-col items-center">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-2">
                  <span className="text-white">Campus </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F9D58] to-[#B6F000] py-2 px-1 inline-block">मंत्री</span>
                </h2>
              </div>
              <div className="w-full max-w-sm relative">
                <div className="absolute -inset-4 bg-gradient-to-b from-[#0F9D58]/20 to-transparent blur-2xl rounded-full -z-10" />
                <TeamMemberCard member={campusMantri} idx={0} />
              </div>
            </div>

            {/* SECTION 4: CORE TEAM */}
            <div className="mb-32">
              <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-[#E6EDF3] mb-12 text-center uppercase tracking-widest border-b border-white/10 pb-4">
                Core Command
              </h3>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-wrap justify-center gap-6 px-4"
              >
                {coreTeam.map((member, idx) => (
                  <div key={`core-${idx}`} className="w-[260px] shrink-0">
                    <TeamMemberCard member={member} idx={idx} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* SECTION 5: TEAM STRUCTURE VISUALIZATION */}
            <div className="relative mt-32 pt-16 border-t border-white/5">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#0E1117] px-8 text-white/40 font-mono tracking-widest uppercase text-sm">
                Operational Branches
              </div>

              {departments.map((dept, idx) => (
                <TeamStructureBlock key={`dept-${idx}`} dept={dept} />
              ))}
            </div>

          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TeamPage;
