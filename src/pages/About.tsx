import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Code2, Users, Target, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Coding Excellence",
      description: "Learn cutting-edge programming languages and development frameworks through hands-on workshops and projects."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Connect with like-minded students and build lasting relationships in the tech community."
    },
    {
      icon: Target,
      title: "Skill Development",
      description: "Enhance your technical skills through competitions, hackathons, and real-world problem solving."
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Showcase your achievements and get recognized for your contributions to the tech community."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              About GeeksForGeeks KDKCE
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are the official GeeksforGeeks Student Chapter at KDK College of Engineering, 
              Nagpur, dedicated to fostering a culture of learning and innovation in technology.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
                To create a vibrant community of passionate programmers and tech enthusiasts who 
                collaborate, learn, and grow together. We aim to bridge the gap between academic 
                learning and industry requirements by providing practical experience through 
                hands-on projects, workshops, and competitive programming.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-float transition-smooth"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary rounded-lg flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Coming Soon Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="bg-muted/50 rounded-2xl p-12 border border-border">
              <h2 className="text-3xl font-bold mb-4">More Updates Coming Soon</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We're working on exciting new features and sections. Stay tuned for updates!
              </p>
              <div className="inline-flex items-center space-x-2 text-primary">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="font-medium">Under Development</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default About;