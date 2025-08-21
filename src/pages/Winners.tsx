import { useState } from "react";
import { motion } from "framer-motion";
import Countdown from "react-countdown";
import { Trophy, Clock, Star } from "lucide-react";
import Layout from "@/components/Layout";

const Winners = () => {
  const [showResults, setShowResults] = useState(false);

  // 🚨 CHANGE THIS DATE FOR COUNTDOWN 🚨
  const countdownDate = new Date("2025-08-21T17:00:00").getTime();

  // Winners data for different competitions
  const competitions = [
    {
      event: "Coding Championship",
      winners: [
        {
          position: "1st Place",
          team: "Team Alpha",
          members: ["Raj Sharma", "Priya Patel", "Arjun Singh"],
          prize: "₹10,000",
        },
        {
          position: "2nd Place",
          team: "Code Warriors",
          members: ["Sneha Joshi", "Vikram Kumar"],
          prize: "₹7,500",
        },
      ],
    },
    {
      event: "Debug Battle",
      winners: [
        {
          position: "1st Place",
          team: "Bug Slayers",
          members: ["Kavya Nair", "Rohit Gupta"],
          prize: "₹6,000",
        },
      ],
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

        {/* Show countdown OR winners */}
        {!showResults ? (
          <div className="bg-green-50 border rounded-2xl p-10 max-w-3xl mx-auto text-center shadow">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-600 rounded-full">
                <Clock className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Results Coming Soon!</h2>
            <p className="text-gray-600 mb-6">
              The winners will be announced once the countdown reaches zero.
            </p>
            <Countdown date={countdownDate} renderer={CountdownRenderer} />
          </div>
        ) : (
          <div className="space-y-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full">
                <Star className="w-4 h-4" />
                <span className="font-medium">Results Declared 🎊</span>
              </div>
            </div>

            {competitions.map((comp, i) => (
              <div key={i} className="bg-white border rounded-xl p-8 shadow">
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
                        <p className="font-semibold">{winner.team}</p>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Members: {winner.members.join(", ")}
                      </p>
                      <p className="text-sm">
                        Prize: <span className="font-bold text-green-600">{winner.prize}</span>
                      </p>
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
