import { useState } from "react";
import { motion } from "framer-motion";
import Countdown from "react-countdown";
import { Trophy, Clock, Star } from "lucide-react";
import Layout from "@/components/Layout";

const Winners = () => {
  const [showResults, setShowResults] = useState(false);

  // Countdown date for final winners
  const countdownDate = new Date("2025-08-22T15:10:00").getTime();

  // Past winners: Rounds 1 & 2
  const competitions = [
   {
      event: "NationSkillUP - Round 2",
      winners: [
        { position: "1st Place", team: "Team Alpha" },
        { position: "2nd Place", team: "The Fab Five" },
        { position: "3rd Place", team: "Team RCC" },
        { position: "4th Place", team: "Brain Stormers" },
        { position: "5th Place", team: "The Fab" },
        { position: "6th Place", team: "404 Error" },
      ],
    },
    // {
    //   event: "Debug Battle - Round 1",
    //   winners: [
    //     { position: "1st Place", team: "Bug Slayers" },
    //     { position: "2nd Place", team: "Syntax Squad" },
    //   ],
    // },
  ];

  // Final rounds winners (shown after countdown)
  const finalRounds = [
    {
      event: "NationSkillUP - Final Round",
      winners: [
        { position: "1st Place", team: "Amartya Choubey" },
        { position: "2nd Place", team: "Krish Ganvir" },
        { position: "3rd Place", team: "Atharva Gaddalwar" },
        { position: "4th Place", team: "Hasnain Sheikh" },
        { position: "5th Place", team: "Paras Moharle" },
      ],
    },
    {
      event: "NationSkillUP - Social Media Activity",
      winners: [
        { position: "1st Place", team: "Harshit Sharma" }      ],
    },
  ];

  // Countdown UI
  const CountdownRenderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      setShowResults(true);
      return null;
    }
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto">
        {[
          { label: "Days", value: days },
          { label: "Hours", value: hours },
          { label: "Minutes", value: minutes },
          { label: "Seconds", value: seconds },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-white shadow-lg rounded-lg p-4 text-center border"
          >
            <div className="text-2xl md:text-3xl font-bold text-green-600">{item.value}</div>
            <div className="text-sm text-gray-500">{item.label}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Layout>
      <div className="min-h-screen py-24 px-4 bg-[#0E1117] relative overflow-hidden">
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0 bg-[#0E1117] -z-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[800px] bg-[#0F9D58]/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-[#E6EDF3] mb-4 tracking-tight drop-shadow-[0_0_15px_rgba(15,157,88,0.3)]">
            WINNERS<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F9D58] to-[#B6F000] ml-4">BOARD</span>
          </h1>
          <p className="text-lg font-mono text-[#8B949E]">
            Celebrating excellence in our computational competitions 🎉
          </p>
        </motion.div>

        {/* Countdown at the Top */}
        {!showResults && (
          <div className="relative bg-[#06090f]/40 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 max-w-3xl mx-auto text-center shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] mb-20 z-10 overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#0F9D58] to-transparent opacity-50" />
            
            <div className="flex justify-center mb-8">
              <div className="p-5 bg-gradient-to-br from-[#0F9D58]/20 to-[#1E5E2F]/20 border border-[#0F9D58]/30 rounded-full shadow-[0_0_30px_rgba(15,157,88,0.2)]">
                <Clock className="w-10 h-10 text-[#B6F000]" />
              </div>
            </div>
            <h2 className="text-3xl font-heading font-bold text-[#E6EDF3] mb-3 tracking-widest uppercase">Final Results Pending</h2>
            <p className="font-mono text-[#8B949E] text-sm mb-10 opacity-80">
              System decrypting final winners. Stand by until countdown zero.
            </p>
            <Countdown date={countdownDate} renderer={CountdownRenderer} />
          </div>
        )}

        {/* Past Winners */}
        <div className="space-y-16 mb-20 relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-[#0F9D58]/10 border border-[#0F9D58]/30 text-[#B6F000] px-6 py-2 rounded-full font-mono text-sm tracking-widest shadow-[0_0_15px_rgba(15,157,88,0.2)]">
              <Star className="w-4 h-4" />
              <span>PAST RESULTS DECLARED</span>
            </div>
          </div>

          {competitions.map((comp, i) => (
            <div
              key={i}
              className="bg-[#161B22]/40 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-[#0F9D58]/50 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0F9D58]/5 blur-[80px] rounded-full pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100" />
              
              <h2 className="text-3xl font-heading font-extrabold text-[#E6EDF3] mb-10 border-l-4 border-[#0F9D58] pl-5 uppercase tracking-wide">
                {comp.event}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {comp.winners.map((winner, j) => (
                  <div
                    key={j}
                    className="relative bg-gradient-to-br from-[#0E1117] to-[#161B22] border border-white/5 rounded-2xl p-6 shadow-xl hover:border-[#0F9D58]/40 hover:shadow-[0_0_20px_rgba(15,157,88,0.15)] transition-all duration-300 group/card flex flex-col items-center text-center overflow-hidden hover:-translate-y-1"
                  >
                    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#0F9D58]/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                    
                    <div className="w-16 h-16 bg-[#161B22] border border-white/10 flex items-center justify-center rounded-2xl mb-5 shadow-inner group-hover/card:border-[#0F9D58]/30 transition-colors duration-300">
                      <Trophy className={`w-8 h-8 ${j === 0 ? "text-[#FFD700]" : j === 1 ? "text-[#C0C0C0]" : j === 2 ? "text-[#CD7F32]" : "text-[#8B949E]"}`} />
                    </div>
                    <h3 className="text-sm font-mono font-bold text-[#B6F000] mb-2 uppercase tracking-wider">{winner.position}</h3>
                    <p className="text-xl font-heading font-bold text-[#E6EDF3] leading-tight">{winner.team}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Final Winners after countdown */}
        {showResults && (
          <div className="space-y-16 relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#0F9D58]/20 to-[#B6F000]/20 border border-[#B6F000]/40 text-[#B6F000] px-6 py-2 rounded-full font-mono text-sm tracking-widest shadow-[0_0_20px_rgba(182,240,0,0.3)] animate-pulse">
                <Star className="w-4 h-4" />
                <span>FINAL RESULTS DECLARED</span>
              </div>
            </div>

            {finalRounds.map((comp, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                key={i}
                className="bg-[#161B22]/60 backdrop-blur-2xl border border-[#0F9D58]/30 rounded-[32px] p-8 md:p-12 shadow-[0_0_40px_rgba(15,157,88,0.1)] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F9D58]/5 to-transparent pointer-events-none" />
                
                <h2 className="text-3xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7CFF4F] to-[#0F9D58] mb-10 border-l-4 border-[#B6F000] pl-5 uppercase tracking-wide">
                  {comp.event}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {comp.winners.map((winner, j) => (
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      key={j}
                      className={`relative bg-gradient-to-b from-[#0E1117] to-[#161B22] border ${j === 0 ? "border-[#FFD700]/50 shadow-[0_0_30px_rgba(255,215,0,0.15)]" : "border-white/10"} rounded-2xl p-6 shadow-2xl flex flex-col items-center text-center overflow-hidden`}
                    >
                      {j === 0 && <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />}
                      
                      <div className={`w-20 h-20 ${j === 0 ? "bg-[#FFD700]/10 border-[#FFD700]/30" : "bg-[#161B22] border-white/10"} border flex items-center justify-center rounded-[20px] mb-6 shadow-inner`}>
                        <Trophy className={`w-10 h-10 ${j === 0 ? "text-[#FFD700]" : j === 1 ? "text-[#C0C0C0]" : j === 2 ? "text-[#CD7F32]" : "text-[#8B949E]"}`} />
                      </div>
                      <h3 className={`text-sm font-mono font-bold ${j === 0 ? "text-[#FFD700]" : "text-[#B6F000]"} mb-2 uppercase tracking-wider`}>{winner.position}</h3>
                      <p className="text-2xl font-heading font-bold text-[#E6EDF3] leading-tight drop-shadow-md">{winner.team}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </Layout>
  );
};

export default Winners;

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Countdown from "react-countdown";
// import { Trophy, Clock, Star } from "lucide-react";
// import Layout from "@/components/Layout";

// const Winners = () => {
//   const [showResults, setShowResults] = useState(false);

//   // 🚨 CHANGE THIS DATE FOR FINAL ROUND 🚨
//   const countdownDate = new Date("2025-08-22T09:43:00").getTime();

//   // Winners data
//   const competitions = [
//     {
//       event: "Nation SkillUP - Round 2",
//       winners: [
//         { position: "1st Place", team: "Team Alpha" },
//         { position: "2nd Place", team: "The Fab Five" },
//         { position: "3rd Place", team: "Team RCC" },
//         { position: "4th Place", team: "Brain Stormers" },
//         { position: "5th Place", team: "404 Error" },
//       ],
//     },
//     // {
//     //   event: "Nation SkillUP - Social Media Activity",
//     //   winners: [
//     //     { position: "1st Place", team: "Coming Soon" },
//     //     { position: "2nd Place", team: "Coming Soon" },
//     //     { position: "3rd Place", team: "Coming Soon" },
//     //   ],
//     // },
    
//     {
//       event: "Final Round",
//       winners: [
//         { position: "1st Place", team: "Coming Soon" },
//         { position: "2nd Place", team: "Coming Soon" },
//         { position: "3rd Place", team: "Coming Soon" },
//       ],
//     },
//   ];

//   // Countdown UI
//   const CountdownRenderer = ({
//     days,
//     hours,
//     minutes,
//     seconds,
//     completed,
//   }: any) => {
//     if (completed) {
//       setShowResults(true);
//       return null;
//     }
//     return (
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto">
//         {[
//           { label: "Days", value: days },
//           { label: "Hours", value: hours },
//           { label: "Minutes", value: minutes },
//           { label: "Seconds", value: seconds },
//         ].map((item) => (
//           <div
//             key={item.label}
//             className="bg-white shadow-lg rounded-lg p-4 text-center border"
//           >
//             <div className="text-2xl md:text-3xl font-bold text-green-600">
//               {item.value}
//             </div>
//             <div className="text-sm text-gray-500">{item.label}</div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <Layout>
//       <div className="min-h-screen py-16 px-4">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-5xl font-bold text-green-600 mb-4">
//             Winners - GFG NationSkillUp
//           </h1>
//           <p className="text-lg text-gray-600">
//             Celebrating excellence in our competitions 🎉
//           </p>
//         </motion.div>

//         {/* Countdown */}
//         {!showResults && (
//           <div className="bg-green-50 border rounded-2xl p-10 max-w-3xl mx-auto text-center shadow mb-16">
//             <div className="flex justify-center mb-6">
//               <div className="p-4 bg-green-600 rounded-full">
//                 <Clock className="w-8 h-8 text-white" />
//               </div>
//             </div>
//             <h2 className="text-2xl font-bold mb-2">Final Results Coming Soon!</h2>
//             <p className="text-gray-600 mb-6">
//               The final winners will be announced once the countdown reaches
//               zero.
//             </p>
//             <Countdown date={countdownDate} renderer={CountdownRenderer} />
//           </div>
//         )}

//         {/* Winners Section */}
//         <div className="space-y-12">
//           <div className="text-center mb-8">
//             <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
//               <Star className="w-4 h-4" />
//               <span className="font-medium">Results Declared 🎊</span>
//             </div>
//           </div>

//           {competitions.map((comp, i) => (
//             <div
//               key={i}
//               className="bg-white border rounded-xl p-8 shadow hover:shadow-lg transition"
//             >
//               <h2 className="text-2xl font-bold text-green-600 mb-6">
//                 {comp.event}
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {comp.winners.map((winner, j) => (
//                   <div
//                     key={j}
//                     className="bg-green-50 rounded-lg p-6 shadow hover:shadow-md transition"
//                   >
//                     <div className="flex flex-col items-center mb-4">
//                       <div className="w-12 h-12 bg-green-600 flex items-center justify-center rounded-full mb-3">
//                         <Trophy className="w-6 h-6 text-white" />
//                       </div>
//                       <h3 className="text-lg font-bold text-green-700">
//                         {winner.position}
//                       </h3>
//                       <p className="font-semibold">{winner.team}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Winners;

// // import { useState } from "react";
// // import { motion } from "framer-motion";
// // import Countdown from "react-countdown";
// // import { Trophy, Clock, Star } from "lucide-react";
// // import Layout from "@/components/Layout";

// // const Winners = () => {
// //   const [showResults, setShowResults] = useState(false);

// //   // 🚨 CHANGE THIS DATE FOR COUNTDOWN 🚨
// //   const countdownDate = new Date("2025-08-22T12:20:00").getTime();

// //   // Winners data for different competitions
// //   const competitions = [
// //     {
// //       event: "Nation SkillUP - Round 2",
// //       winners: [
// //         {
// //           position: "1st Place",
// //           team: "Team Alpha",
// //          },
// //         {
// //           position: "2nd Place",
// //           team: "The Fab Five",
// //          },
// //         {
// //           position: "3rd Place",
// //           team: "Team Rcc",
// //          },
// //         {
// //           position: "4th Place",
// //           team: "Brain Stormers",
// //          },
// //         {
// //           position: "5th Place",
// //           team: "404 Error",
// //          },
// //       ],
// //     },
// //     {
// //       event: "Debug Battle",
// //       winners: [
// //         {
// //           position: "1st Place",
// //           team: "Bug Slayers",
// //         },
// //       ],
// //     },
// //   ];

// //   // Countdown UI
// //   const CountdownRenderer = ({ days, hours, minutes, seconds, completed }: any) => {
// //     if (completed) {
// //       setShowResults(true);
// //       return null;
// //     }
// //     return (
// //       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto">
// //         {[
// //           { label: "Days", value: days },
// //           { label: "Hours", value: hours },
// //           { label: "Minutes", value: minutes },
// //           { label: "Seconds", value: seconds },
// //         ].map((item) => (
// //           <div
// //             key={item.label}
// //             className="bg-white shadow-lg rounded-lg p-4 text-center border"
// //           >
// //             <div className="text-2xl md:text-3xl font-bold text-green-600">{item.value}</div>
// //             <div className="text-sm text-gray-500">{item.label}</div>
// //           </div>
// //         ))}
// //       </div>
// //     );
// //   };

// //   return (
// //     <Layout>
// //       <div className="min-h-screen py-16 px-4">
// //         {/* Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           className="text-center mb-12"
// //         >
// //           <h1 className="text-5xl font-bold text-green-600 mb-4">Winners - GFG NationSkillUp</h1>
// //           <p className="text-lg text-gray-600">
// //             Celebrating excellence in our competitions 🎉
// //           </p>
// //         </motion.div>

// //         {/* Show countdown OR winners */}
// //         {!showResults ? (
// //           <div className="bg-green-50 border rounded-2xl p-10 max-w-3xl mx-auto text-center shadow">
// //             <div className="flex justify-center mb-6">
// //               <div className="p-4 bg-green-600 rounded-full">
// //                 <Clock className="w-8 h-8 text-white" />
// //               </div>
// //             </div>
// //             <h2 className="text-2xl font-bold mb-2">Results Coming Soon!</h2>
// //             <p className="text-gray-600 mb-6">
// //               The winners will be announced once the countdown reaches zero.
// //             </p>
// //             <Countdown date={countdownDate} renderer={CountdownRenderer} />
// //           </div>
// //         ) : (
// //           <div className="space-y-12">
// //             <div className="text-center mb-8">
// //               <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
// //                 <Star className="w-4 h-4" />
// //                 <span className="font-medium">Results Declared 🎊</span>
// //               </div>
// //             </div>

// //             {competitions.map((comp, i) => (
// //               <div key={i} className="bg-white border rounded-xl p-8 shadow">
// //                 <h2 className="text-2xl font-bold text-green-600 mb-6">{comp.event}</h2>
// //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //                   {comp.winners.map((winner, j) => (
// //                     <div
// //                       key={j}
// //                       className="bg-green-50 rounded-lg p-6 shadow hover:shadow-md transition"
// //                     >
// //                       <div className="flex flex-col items-center mb-4">
// //                         <div className="w-12 h-12 bg-green-600 flex items-center justify-center rounded-full mb-3">
// //                           <Trophy className="w-6 h-6 text-white" />
// //                         </div>
// //                         <h3 className="text-lg font-bold text-green-700">{winner.position}</h3>
// //                         <p className="font-semibold">{winner.team}</p>
// //                       </div>
// //                       {/* <p className="text-sm text-gray-600 mb-2">
// //                         Members: {winner.members.join(", ")}
// //                       </p> */}
// //                       {/* <p className="text-sm">
// //                         Prize: <span className="font-bold text-green-600">{winner.prize}</span>
// //                       </p> */}
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </Layout>
// //   );
// // };

// // export default Winners;
