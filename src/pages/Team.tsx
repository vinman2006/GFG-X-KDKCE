import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const teamMembers = [
  { name: "Aparna Badhe", role: "Chairperson", image: "/ap.png" },
  { name: "Aditi Badhe", role: "Vice Chairperson", image: "/ad.png" },
  { name: "Rasika Pande", role: "Technical Head", image: "/image.png" },
  { name: "Khushi Bodakhe", role: "Event Head", image: "/ks.jpg" },
  { name: "Sakshi Wagh", role: "Design & Creative Head", image: "/sk.png" },
  { name: "Anisha Gurumukhi", role: "PR & Outreach Head", image: "/ag.jpg" },
  { name: "Harshit Pachbudhe", role: "Marketing Head", image: "/hs.jpg" },
  { name: "Himanshu Kamble", role: "Social Media Head", image: "/hm.png" },
];

const facultyAdvisors = [
  { name: "Dr. V. P. Varghese", role: "Principal, KDKCE", image: "/principal.jpg" },
  { name: "Dr. A. M. Badar", role: "Vice-Principal, KDKCE", image: "/v-principal.png" },

  { name: "Dr. A. A. Jaiswal", role: "HOD, CSE Dept", image: "/hod.jpg" },
  { name: "Prof. A. M. Kuthe", role: "Faculty Advisor, CSE Dept", image: "/advisor-f.jpg" },

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
          GeeksForGeeks KDKCE Team
        </motion.h2>

        {/* Faculty Advisors */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-green-600">The Driving Force Behind Our Success - Our Advisory Faculty</h3>
          <div className="flex justify-center gap-10 flex-wrap">
            {facultyAdvisors.map((fa, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg overflow-hidden w-60 transition-transform hover:scale-105"
              >
                <div className="aspect-square w-full">
                  <img
                    src={fa.image}
                    alt={fa.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{fa.name}</h3>
                  <p className="text-sm text-gray-600">{fa.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Committee */}
        <h3 className="text-2xl font-semibold mb-8 text-green-600">Core Committee</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="aspect-square w-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <br/>
        <br/>
        <br/>
        <h6 className="text-2xl font-semibold mb-8 text-black-600">More Members Coming Soon..</h6>

      </div>
    </section>
      </Layout>

  );
};

export default TeamPage;
// import { motion } from "framer-motion";
// import Layout from "@/components/Layout";

// const teamMembers = [
//   { name: "Aparna Badhe", role: "Chairperson", image: "/ap.jpg" },
//   { name: "Bob", role: "Vice President", image: "/team/bob.jpg" },
//   { name: "Charlie", role: "Secretary", image: "/team/charlie.jpg" },
//   { name: "David", role: "Technical Lead", image: "/team/david.jpg" },
//   { name: "Eva", role: "PR Head", image: "/team/eva.jpg" },
//   { name: "Frank", role: "Design Lead", image: "/team/frank.jpg" },
//   { name: "Grace", role: "Event Manager", image: "/team/grace.jpg" },
//   { name: "Hank", role: "Treasurer", image: "/team/hank.jpg" },
// ];

// const facultyAdvisors = [
//   { name: "Dr. Advisor One", role: "Faculty Advisor", image: "/team/faculty1.jpg" },
//   { name: "Dr. Advisor Two", role: "Faculty Advisor", image: "/team/faculty2.jpg" },
// ];

// const TeamPage = () => {
//   return (
//     <Layout>

//     <section className="min-h-screen bg-gradient-to-b from-white to-green-50 py-16 px-6">
//       <div className="container mx-auto text-center">
//         {/* Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-5xl font-bold text-green-700 mb-12"
//         >
//           Meet Our Team 🚀
//         </motion.h2>

//         {/* Faculty Advisors */}
//         <div className="mb-16">
//           <h3 className="text-2xl font-semibold mb-8 text-green-600">Faculty Advisors</h3>
//           <div className="flex justify-center gap-12 flex-wrap">
//             {facultyAdvisors.map((fa, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-64 transition-transform hover:scale-105"
//               >
//                 <img
//                   src={fa.image}
//                   alt={fa.name}
//                   className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-green-500/40"
//                 />
//                 <h3 className="text-lg font-semibold text-gray-900">{fa.name}</h3>
//                 <p className="text-sm text-gray-600">{fa.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Core Committee */}
//         <h3 className="text-2xl font-semibold mb-8 text-green-600">Core Committee</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//           {teamMembers.map((member, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: idx * 0.1 }}
//               className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform hover:scale-105"
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-green-400/30"
//               />
//               <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
//               <p className="text-sm text-gray-600">{member.role}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//     </Layout>

//   );
// };

// export default TeamPage;

