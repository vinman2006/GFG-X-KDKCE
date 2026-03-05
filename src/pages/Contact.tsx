import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Mail, MapPin, Phone, Instagram, Linkedin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    // {
    //   icon: Mail,
    //   title: "Email",
    //   details: "gfg@kdkce.edu.in",
    //   link: "mailto:gfg@kdkce.edu.in"
    // },
    // {
    //   icon: Phone,
    //   title: "Phone",
    //   details: "+91 98765 43210",
    //   link: "tel:+919876543210"
    // },
    {
      icon: MapPin,
      title: "Location",
      details: "KDK College of Engineering, Nagpur, Maharashtra",
      link: "#"
    },
    // {
    //   icon: Clock,
    //   title: "Office Hours",
    //   details: "Mon - Fri: 9:00 AM - 5:00 PM",
    //   link: "#"
    // }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@geeksforgeeks_kdkce",
      link: "https://www.instagram.com/geeksforgeeks_kdkce?igsh=a241bGJ3anM3ZXhr",
      color: "hover:bg-pink-500"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "Geeks For Geeks KDKCE",
      link: "https://www.linkedin.com/company/geeks-for-geeks-kdkce/",
      color: "hover:bg-blue-600"
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
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with us for events, collaborations, or any queries.
              We're here to help you grow in your coding journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're a student looking to join our community or an organization
                  interested in collaboration, we'd love to hear from you.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-float transition-smooth group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary rounded-lg group-hover:shadow-glow transition-smooth">
                        <item.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.details}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 + 0.1 * index }}
                      className={`flex items-center space-x-3 bg-card rounded-lg p-4 shadow-card border border-border hover:shadow-float transition-smooth group ${social.color} hover:text-white`}
                    >
                      <social.icon className="w-5 h-5" />
                      <div>
                        <p className="font-medium">{social.name}</p>
                        <p className="text-sm opacity-75">{social.handle}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold mb-4">Find Us</h2>
                <p className="text-lg text-muted-foreground">
                  Visit us at KDK College of Engineering, Nagpur
                </p>
              </div>

              <div className="bg-card rounded-xl overflow-hidden shadow-card border border-border">
                <div className="aspect-square md:aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8517978847896!2d79.03185631494927!3d21.134481287615476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sKDK%20College%20of%20Engineering%2C%20Nagpur!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="KDK College of Engineering Location"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold mb-2">KDK College of Engineering</h3>
                  <p className="text-sm text-muted-foreground">
                    Great Nag Road, Nagpur, Maharashtra 440013, India
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 text-center"
          >
            <div id="join" className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-12 border border-primary/20">
              <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Be part of our growing community of passionate programmers and tech enthusiasts.
                Let's code the future together!
              </p>
              <div className="inline-flex items-center space-x-2 text-primary">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="font-medium">Coming Soon..</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;