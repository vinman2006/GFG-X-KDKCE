import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const teamMembers = [
  { name: "Alice", role: "President", image: "/team/alice.jpg" },
  { name: "Bob", role: "Vice President", image: "/team/bob.jpg" },
  { name: "Charlie", role: "Secretary", image: "/team/charlie.jpg" },
  { name: "David", role: "Technical Lead", image: "/team/david.jpg" },
  { name: "Eva", role: "PR Head", image: "/team/eva.jpg" },
  { name: "Frank", role: "Design Lead", image: "/team/frank.jpg" },
  { name: "Grace", role: "Event Manager", image: "/team/grace.jpg" },
  { name: "Hank", role: "Treasurer", image: "/team/hank.jpg" },
];

const facultyAdvisors = [
  { name: "Dr. Advisor One", role: "Faculty Advisor", image: "/team/faculty1.jpg" },
  { name: "Dr. Advisor Two", role: "Faculty Advisor", image: "/team/faculty2.jpg" },
];

const TeamPage = () => {
  return (
    <Layout>

    <section className="min-h-screen bg-gradient-to-b from-white to-green-50 py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-green-700 mb-12"
        >
          Meet Our Team 🚀
        </motion.h2>

        {/* Faculty Advisors */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-green-600">Faculty Advisors</h3>
          <div className="flex justify-center gap-12 flex-wrap">
            {facultyAdvisors.map((fa, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-64 transition-transform hover:scale-105"
              >
                <img
                  src={fa.image}
                  alt={fa.name}
                  className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-green-500/40"
                />
                <h3 className="text-lg font-semibold text-gray-900">{fa.name}</h3>
                <p className="text-sm text-gray-600">{fa.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Committee */}
        <h3 className="text-2xl font-semibold mb-8 text-green-600">Core Committee</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-green-400/30"
              />
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </Layout>

  );
};

export default TeamPage;

// import { Card, CardContent } from "@/components/ui/card";
// import Layout from "@/components/Layout";
// import { Linkedin, Instagram, Mail } from "lucide-react";

// const team = [
//   {
//     name: "Dr. A. B. Faculty",
//     role: "Faculty Advisor",
//     img: "/team/faculty.jpg", // put in public/team/
//     linkedin: "https://linkedin.com/in/faculty",
//     instagram: "#",
//     email: "faculty@kdkce.edu.in",
//     advisor: true,
//   },
//   {
//     name: "Dr. A. B. Faculty",
//     role: "Faculty Advisor",
//     img: "/team/faculty.jpg", // put in public/team/
//     linkedin: "https://linkedin.com/in/faculty",
//     instagram: "#",
//     email: "faculty@kdkce.edu.in",
//     advisor: true,
//   },
//   {
//     name: "John Doe",
//     role: "President",
//     img: "/team/john.jpg",
//     linkedin: "https://linkedin.com/in/johndoe",
//     instagram: "#",
//     email: "john@kdkce.edu.in",
//   },
//   {
//     name: "Jane Smith",
//     role: "Vice President",
//     img: "/team/jane.jpg",
//     linkedin: "https://linkedin.com/in/jane",
//     instagram: "#",
//     email: "jane@kdkce.edu.in",
//   },
//   {
//     name: "John Doe",
//     role: "President",
//     img: "/team/john.jpg",
//     linkedin: "https://linkedin.com/in/johndoe",
//     instagram: "#",
//     email: "john@kdkce.edu.in",
//   },
//   {
//     name: "Jane Smith",
//     role: "Vice President",
//     img: "/team/jane.jpg",
//     linkedin: "https://linkedin.com/in/jane",
//     instagram: "#",
//     email: "jane@kdkce.edu.in",
//   },
//   {
//     name: "John Doe",
//     role: "President",
//     img: "/team/john.jpg",
//     linkedin: "https://linkedin.com/in/johndoe",
//     instagram: "#",
//     email: "john@kdkce.edu.in",
//   },
//   {
//     name: "Jane Smith",
//     role: "Vice President",
//     img: "/team/jane.jpg",
//     linkedin: "https://linkedin.com/in/jane",
//     instagram: "#",
//     email: "jane@kdkce.edu.in",
//   },
//   // 👉 add remaining 6 core committee members here
// ];

// const TeamPage = () => {
//   return (
//     <Layout>
//     <section className="py-20 bg-gradient-to-b from-white to-green-50">
//       <div className="container mx-auto px-6 text-center">
//         <h1 className="text-4xl font-bold text-green-600 mb-12">Meet Our Team 👨‍💻👩‍💻</h1>

//         {/* Faculty Advisor First */}
//         <div className="mb-16">
//           {team
//             .filter((member) => member.advisor)
//             .map((member, idx) => (
//               <Card key={idx} className="max-w-md mx-auto shadow-lg rounded-2xl">
//                 <CardContent className="p-6 flex flex-col items-center space-y-4">
//                   <img
//                     src={member.img}
//                     alt={member.name}
//                     className="w-32 h-32 object-cover rounded-full border-4 border-green-500"
//                   />
//                   <h2 className="text-2xl font-semibold">{member.name}</h2>
//                   <p className="text-muted-foreground">{member.role}</p>
//                   <div className="flex space-x-4 mt-2">
//                     <a href={member.linkedin} target="_blank" className="hover:text-green-600">
//                       <Linkedin className="w-5 h-5" />
//                     </a>
//                     <a href={member.instagram} target="_blank" className="hover:text-green-600">
//                       <Instagram className="w-5 h-5" />
//                     </a>
//                     <a href={`mailto:${member.email}`} className="hover:text-green-600">
//                       <Mail className="w-5 h-5" />
//                     </a>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//         </div>

//         {/* Core Committee */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {team
//             .filter((member) => !member.advisor)
//             .map((member, idx) => (
//               <Card key={idx} className="shadow-md rounded-2xl hover:shadow-xl transition">
//                 <CardContent className="p-6 flex flex-col items-center space-y-4">
//                   <img
//                     src={member.img}
//                     alt={member.name}
//                     className="w-28 h-28 object-cover rounded-full border-2 border-green-400"
//                   />
//                   <h3 className="text-xl font-semibold">{member.name}</h3>
//                   <p className="text-sm text-muted-foreground">{member.role}</p>
//                   <div className="flex space-x-4 mt-2">
//                     <a href={member.linkedin} target="_blank" className="hover:text-green-600">
//                       <Linkedin className="w-4 h-4" />
//                     </a>
//                     <a href={member.instagram} target="_blank" className="hover:text-green-600">
//                       <Instagram className="w-4 h-4" />
//                     </a>
//                     <a href={`mailto:${member.email}`} className="hover:text-green-600">
//                       <Mail className="w-4 h-4" />
//                     </a>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//         </div>
//       </div>
//     </section>
//     </Layout>
//   );
// };

// export default TeamPage;
