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
      <div className="min-h-screen py-16 px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-green-600 mb-4">Winners - GFG NationSkillUp</h1>
          <p className="text-lg text-gray-600">
            Celebrating excellence in our competitions 🎉
          </p>
        </motion.div>

                {/* Countdown at the Top */}
        {!showResults && (
          <div className="bg-green-50 border rounded-2xl p-10 max-w-3xl mx-auto text-center shadow mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-600 rounded-full">
                <Clock className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Final Results Coming Soon!</h2>
            <p className="text-gray-600 mb-6">
              The final winners will be announced once the countdown reaches zero.
            </p>
            <Countdown date={countdownDate} renderer={CountdownRenderer} />
          </div>
        )}


        {/* Past Winners */}
        <div className="space-y-12 mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
              <Star className="w-4 h-4" />
              <span className="font-medium">Past Results Declared 🎊</span>
            </div>
          </div>

          {competitions.map((comp, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-8 shadow hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-bold text-green-600 mb-6">{comp.event}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {comp.winners.map((winner, j) => (
                  <div
                    key={j}
                    className="bg-green-50 rounded-lg p-6 shadow hover:shadow-md transition"
                  >
                    <div className="flex flex-col items-center mb-4">
                      <div className="w-12 h-12 bg-green-600 flex items-center justify-center rounded-full mb-3">
                        <Trophy className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-green-700">{winner.position}</h3>
                      <p className="font-bold text-green-900 drop-shadow-sm">{winner.team}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Final Winners after countdown */}
        {showResults && (
          <div className="space-y-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
                <Star className="w-4 h-4" />
                <span className="font-medium">Final Results Declared 🎊</span>
              </div>
            </div>

            {finalRounds.map((comp, i) => (
              <div
                key={i}
                className="bg-white border rounded-xl p-8 shadow hover:shadow-lg transition"
              >
                <h2 className="text-2xl font-bold text-green-600 mb-6">{comp.event}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {comp.winners.map((winner, j) => (
                    <div
                      key={j}
                      className="bg-green-50 rounded-lg p-6 shadow hover:shadow-md transition"
                    >
                      <div className="flex flex-col items-center mb-4">
                        <div className="w-12 h-12 bg-green-600 flex items-center justify-center rounded-full mb-3">
                          <Trophy className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-green-700">{winner.position}</h3>
                        <p className="font-bold text-green-900 drop-shadow-sm">{winner.team}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
