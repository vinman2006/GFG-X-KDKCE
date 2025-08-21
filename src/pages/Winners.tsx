import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Countdown from "react-countdown";
import Layout from "@/components/Layout";
import { Trophy, Clock, Star } from "lucide-react";

const Winners = () => {
  const [showResults, setShowResults] = useState(false);
  
  // Set countdown target date (you can change this)
  const countdownDate = new Date("2024-12-31T23:59:59").getTime();

  const winners = [
    {
      position: "1st Place",
      name: "Team Alpha",
      members: ["Raj Sharma", "Priya Patel", "Arjun Singh"],
      event: "Coding Championship 2024",
      prize: "₹10,000"
    },
    {
      position: "2nd Place", 
      name: "Code Warriors",
      members: ["Sneha Joshi", "Vikram Kumar", "Anita Desai"],
      event: "Coding Championship 2024",
      prize: "₹7,500"
    },
    {
      position: "3rd Place",
      name: "Debug Squad",
      members: ["Rohit Gupta", "Kavya Nair", "Aditya Rao"],
      event: "Coding Championship 2024", 
      prize: "₹5,000"
    }
  ];

  // Countdown renderer
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
          { label: "Seconds", value: seconds }
        ].map((item) => (
          <div key={item.label} className="bg-card rounded-lg p-4 text-center shadow-card">
            <div className="text-2xl md:text-3xl font-bold text-primary">{item.value}</div>
            <div className="text-sm text-muted-foreground">{item.label}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Winners
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Celebrating excellence and achievement in our coding competitions and events.
            </p>
          </motion.div>

          {!showResults ? (
            /* Countdown Section */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-20"
            >
              <div className="bg-card rounded-2xl p-12 shadow-card border border-border max-w-3xl mx-auto">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary rounded-full">
                    <Clock className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4">Results Coming Soon!</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  The winners will be announced when the countdown reaches zero.
                </p>
                
                <Countdown
                  date={countdownDate}
                  renderer={CountdownRenderer}
                />
                
                <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Stay tuned for the exciting results of our latest coding competition!
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            /* Winners Section */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                  <Star className="w-4 h-4" />
                  <span className="font-medium">Results Announced!</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {winners.map((winner, index) => (
                  <motion.div
                    key={winner.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-float transition-smooth"
                  >
                    <div className="text-center mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-3">
                        <Trophy className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-primary">{winner.position}</h3>
                      <p className="text-lg font-semibold">{winner.name}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Team Members:</p>
                        {winner.members.map((member, i) => (
                          <p key={i} className="text-sm">{member}</p>
                        ))}
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Event:</p>
                        <p className="text-sm">{winner.event}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Prize:</p>
                        <p className="text-lg font-bold text-primary">{winner.prize}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Past Winners Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Hall of Fame</h2>
              <p className="text-lg text-muted-foreground">
                Previous winners and achievements from our coding community.
              </p>
            </div>
            
            <div className="bg-muted/50 rounded-2xl p-12 border border-border text-center">
              <h3 className="text-2xl font-bold mb-4">More Winners Coming Soon</h3>
              <p className="text-muted-foreground">
                As we host more events and competitions, this section will showcase all our champions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Winners;