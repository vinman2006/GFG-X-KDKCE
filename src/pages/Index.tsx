import { motion } from "framer-motion";
import Countdown from "react-countdown";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import { Calendar, Clock, Trophy, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  // Ongoing event countdown (set to a future date)
  const ongoingEventDate = new Date("2024-12-25T10:00:00").getTime();
  
  const upcomingEvents = [
    {
      title: "Web Development Workshop",
      date: "Coming Soon",
      description: "Learn modern web development with React and Node.js",
      participants: "Open to All"
    },
    {
      title: "Competitive Programming Contest",
      date: "Coming Soon", 
      description: "Test your coding skills in this exciting programming challenge",
      participants: "Students Only"
    },
    {
      title: "Tech Talk Series",
      date: "Coming Soon",
      description: "Industry experts share insights on latest technology trends",
      participants: "Open to All"
    }
  ];

  const pastEvents = [
    {
      title: "Coding Championship 2024",
      date: "October 15, 2024",
      description: "Our flagship coding competition with 100+ participants",
      status: "Completed"
    },
    {
      title: "Python Bootcamp",
      date: "September 20, 2024", 
      description: "Intensive 3-day Python programming workshop",
      status: "Completed"
    },
    {
      title: "Open Source Hackathon",
      date: "August 10, 2024",
      description: "48-hour hackathon focused on open source contributions",
      status: "Completed"
    }
  ];

  // Countdown renderer for ongoing event
  const OngoingCountdownRenderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return (
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">Event Started!</p>
          <p className="text-muted-foreground">Join us live now</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-4 gap-2 text-center">
        {[
          { label: "Days", value: days },
          { label: "Hrs", value: hours },
          { label: "Min", value: minutes },
          { label: "Sec", value: seconds }
        ].map((item) => (
          <div key={item.label} className="bg-background/50 rounded-lg p-2">
            <div className="text-lg font-bold text-primary">{item.value}</div>
            <div className="text-xs text-muted-foreground">{item.label}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      <div className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Ongoing Event */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gradient mb-4">Ongoing Event</h2>
              <p className="text-lg text-muted-foreground">Don't miss out on our current event</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8 border border-primary/20 shadow-card">
                <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
                  <div className="flex-1 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                      <span className="text-primary font-semibold">LIVE EVENT</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Winter Coding Bootcamp</h3>
                    <p className="text-muted-foreground mb-4">
                      Intensive 5-day coding bootcamp covering full-stack development
                    </p>
                    <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Dec 25, 2024</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>50+ Participants</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <div className="bg-card rounded-xl p-6 shadow-card">
                      <div className="flex items-center space-x-2 mb-4">
                        <Clock className="w-5 h-5 text-primary" />
                        <span className="font-semibold">Time Remaining</span>
                      </div>
                      <Countdown
                        date={ongoingEventDate}
                        renderer={OngoingCountdownRenderer}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Upcoming Events */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
              <p className="text-lg text-muted-foreground">Exciting events lined up for the future</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-float transition-smooth"
                >
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-2 h-2 bg-primary-glow rounded-full" />
                    <span className="text-primary-glow font-medium text-sm">COMING SOON</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{event.participants}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Past Events */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Past Events</h2>
              <p className="text-lg text-muted-foreground">Celebrating our successful events and achievements</p>
            </div>
            
            <div className="space-y-4">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-float transition-smooth"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Trophy className="w-5 h-5 text-primary" />
                        <span className="text-primary font-medium text-sm">{event.status}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                      <Button variant="outline" size="sm" className="group">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-smooth" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link to="/winners">
                <Button size="lg" className="group">
                  View All Winners
                  <Trophy className="w-4 h-4 ml-2 group-hover:scale-110 transition-smooth" />
                </Button>
              </Link>
            </div>
          </motion.section>
        </div>
      </div>
    </Layout>
  );
};

export default Index;