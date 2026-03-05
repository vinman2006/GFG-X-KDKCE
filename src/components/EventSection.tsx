import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TrendingUp, Globe, Mail, ChevronRight, X, MapPin, Calendar, Laptop, Sparkles, Send } from "lucide-react";

interface EventDetail {
    title: string;
    organizer: string;
    subtitle: string;
    description: string;
    mode: string;
    venue: string;
    date: string;
    perks: string[];
    registerLink: string;
    meetupLink: string;
    contacts: { name: string; phone: string }[];
}

const awsEvent: EventDetail = {
    title: "AWS Learn & Build — From Local Code to Live URL",
    organizer: "GFG KDKCE × AWS",
    subtitle: "An offline hands-on AWS workshop focused on building and deploying real cloud applications step by step.",
    description: "Welcome to AWS Learn & Build, an offline hands-on AWS workshop designed for practical cloud learning. This is not a theory session — participants will build, deploy, and explore AWS services step by step.\n\nAlong with technical learning, the workshop also includes interactive games and activities designed to boost confidence, help participants connect with others, and create an engaging learning environment.",
    mode: "Offline (On Campus)",
    venue: "KDK College of Engineering",
    date: "6th March 2026",
    perks: [
        "Hands-on AWS experience",
        "Certificate of Participation",
        "LinkedIn-shareable certificate",
        "Fun activities, quiz, and personality-building game",
        "Real-world AWS use cases"
    ],
    registerLink: "https://forms.gle/VE1quLhr1PXVEFtS9",
    meetupLink: "https://www.meetup.com/awsugnagpur/events/313492404/",
    contacts: [
        { name: "Sojval Bhusari", phone: "+91 8432473438" },
        { name: "Prince Naware", phone: "+91 6305738725" },
        { name: "Mayuri Thakur", phone: "+91 9511235783" }
    ]
};

export default function EventSection() {
    const [selectedEvent, setSelectedEvent] = useState<EventDetail | null>(null);

    return (
        <section id="events" className="py-24 bg-[#0E1117] relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-sans font-extrabold text-[#E6EDF3] mb-4">
                        Upcoming <span className="text-[#0F9D58] font-sans italic font-normal tracking-tight">Events</span>
                    </h2>
                    <p className="text-[#8B949E] font-sans text-sm max-w-xl border-l-2 border-[#B6F000] pl-4">
                        Join our technical sessions and build real-world applications.
                        <br />Status: Registration Open.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12">
                    {/* Main Event Card */}
                    <motion.div
                        layoutId="event-card-aws"
                        onClick={() => setSelectedEvent(awsEvent)}
                        className="group relative bg-[rgba(10,15,30,0.55)] backdrop-blur-[20px] rounded-[28px] border border-white/5 p-8 cursor-pointer hover:border-[#0F9D58]/40 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.35)] flex flex-col md:flex-row gap-8 items-center"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#0F9D58]/10 to-transparent blur-3xl pointer-events-none" />

                        <div className="relative z-10 w-full md:w-auto">
                            <div className="w-20 h-20 rounded-2xl bg-[#0F9D58]/10 border border-[#0F9D58]/30 flex items-center justify-center shadow-[0_0_20px_rgba(15,157,88,0.1)]">
                                <TrendingUp className="w-10 h-10 text-[#0F9D58]" />
                            </div>
                        </div>

                        <div className="relative z-10 flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <span className="px-3 py-1 rounded-full bg-[#0F9D58]/20 border border-[#0F9D58]/30 text-[#0F9D58] font-sans text-[10px] tracking-widest uppercase">
                                    WORKSHOP // 2026
                                </span>
                                <span className="text-[#8B949E] font-sans text-[10px] tracking-widest uppercase">
                                    {awsEvent.organizer}
                                </span>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-sans font-black text-white mb-3 tracking-tighter group-hover:text-[#0F9D58] transition-colors">
                                FROM LOCAL CODE TO LIVE URL
                            </h3>
                            <p className="text-[#8B949E] mb-8 line-clamp-2 text-sm leading-relaxed">
                                {awsEvent.subtitle}
                            </p>

                            <div className="flex flex-wrap items-center gap-6">
                                <div className="flex items-center gap-2 text-[#E6EDF3]/80 font-sans text-[10px]">
                                    <MapPin className="w-4 h-4 text-[#0F9D58]" />
                                    <span>{awsEvent.venue}</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#E6EDF3]/80 font-sans text-[10px]">
                                    <Calendar className="w-4 h-4 text-[#0F9D58]" />
                                    <span>{awsEvent.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-[#E6EDF3]/80 font-sans text-[10px]">
                                    <Laptop className="w-4 h-4 text-[#0F9D58]" />
                                    <span>{awsEvent.mode}</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl p-6 min-w-[160px]">
                            <span className="text-[10px] font-sans text-[#0F9D58] mb-2 animate-pulse">● LIVE NOW</span>
                            <span className="text-white font-bold text-sm">Registration Open</span>
                            <ChevronRight className="w-5 h-5 text-[#0F9D58] mt-4 group-hover:translate-x-2 transition-transform" />
                        </div>
                    </motion.div>

                    {/* Secondary Column */}
                    <div className="flex flex-col gap-6">
                        <div className="p-8 bg-[rgba(10,15,30,0.55)] backdrop-blur-[20px] rounded-[28px] border border-white/5 border-dashed relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#B6F000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h4 className="text-lg font-bold text-white mb-2 relative z-10">Want to host an event?</h4>
                            <p className="text-sm text-[#8B949E] mb-6 relative z-10 leading-relaxed">Collaborate with our technical team to bring your ideas to life. We support community building through workshops and tech talks.</p>
                            <a href="/contact" className="inline-flex items-center text-[#0F9D58] hover:text-[#B6F000] font-sans text-sm transition-colors relative z-10">
                                Get in touch <ChevronRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>

                        <div className="p-8 bg-[rgba(10,15,30,0.55)] backdrop-blur-[20px] rounded-[28px] border border-white/5 flex items-center justify-between opacity-60">
                            <div>
                                <h4 className="text-white font-bold mb-1">Stay Notified</h4>
                                <p className="text-[10px] font-sans text-[#8B949E] uppercase tracking-wider">Join our announcement channel</p>
                            </div>
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                                <Send className="w-5 h-5 text-[#E6EDF3]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Detail Panel */}
            <AnimatePresence>
                {selectedEvent && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedEvent(null)}
                            className="absolute inset-0 bg-[#0E1117]/90 backdrop-blur-xl"
                        />

                        {/* Content */}
                        <motion.div
                            layoutId="event-card-aws"
                            className="relative w-full max-w-4xl max-h-[90vh] bg-[#161B22] border border-white/10 rounded-[40px] shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
                        >
                            <button
                                onClick={() => setSelectedEvent(null)}
                                className="absolute top-8 right-8 z-50 p-2 bg-white/5 border border-white/10 rounded-full hover:bg-[#FF3B3B]/20 hover:border-[#FF3B3B]/40 transition-all text-white"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="overflow-y-auto custom-scrollbar p-8 md:p-12">
                                <div className="max-w-3xl mx-auto">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-[#0F9D58]/10 border border-[#0F9D58]/30 flex items-center justify-center">
                                            <TrendingUp className="w-8 h-8 text-[#0F9D58]" />
                                        </div>
                                        <div>
                                            <span className="text-[#0F9D58] font-sans text-xs tracking-widest uppercase mb-1 block">AWS Learn & Build</span>
                                            <h2 className="text-3xl md:text-5xl font-sans font-black text-white tracking-tighter leading-none">
                                                {selectedEvent.organizer}
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                                        <div>
                                            <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                                                <Sparkles className="w-5 h-5 text-[#B6F000]" />
                                                Vision
                                            </h4>
                                            <p className="text-[#8B949E] text-sm leading-relaxed whitespace-pre-line">
                                                {selectedEvent.description}
                                            </p>
                                        </div>

                                        <div className="space-y-8">
                                            <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                                                <h4 className="text-[10px] font-sans text-[#8B949E] uppercase tracking-widest mb-4">Event Logistics</h4>
                                                <div className="space-y-4">
                                                    <div className="flex items-center gap-4">
                                                        <MapPin className="w-5 h-5 text-[#0F9D58]" />
                                                        <div>
                                                            <div className="text-white text-sm font-bold">{selectedEvent.mode}</div>
                                                            <div className="text-[#8B949E] text-xs">{selectedEvent.venue}</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-4">
                                                        <Calendar className="w-5 h-5 text-[#0F9D58]" />
                                                        <div>
                                                            <div className="text-white text-sm font-bold">{selectedEvent.date}</div>
                                                            <div className="text-[#8B949E] text-xs">Event Day</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-6 bg-[#0F9D58]/5 rounded-3xl border border-[#0F9D58]/20">
                                                <h4 className="text-[10px] font-sans text-[#0F9D58] uppercase tracking-widest mb-4">What You'll Get</h4>
                                                <ul className="space-y-2">
                                                    {selectedEvent.perks.map((perk, i) => (
                                                        <li key={i} className="flex items-center gap-3 text-[#E6EDF3] text-sm">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-[#0F9D58]" />
                                                            {perk}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-4 mb-12">
                                        <a
                                            href={selectedEvent.registerLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 py-4 bg-[#0F9D58] hover:bg-[#0c8047] text-white rounded-2xl font-bold text-center transition-all shadow-[0_10px_30px_rgba(15,157,88,0.3)]"
                                        >
                                            Register Now
                                        </a>
                                        <a
                                            href={selectedEvent.meetupLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-2xl font-bold text-center transition-all"
                                        >
                                            View Meetup
                                        </a>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                                        <div className="p-6 bg-yellow-500/5 border border-yellow-500/20 rounded-3xl">
                                            <h4 className="text-[10px] font-sans text-yellow-500 uppercase tracking-widest mb-3">Registration Note</h4>
                                            <ul className="text-xs text-[#8B949E] space-y-1">
                                                <li>• Seats are limited.</li>
                                                <li>• Prior registration is mandatory.</li>
                                                <li>• Event updates will be shared via WhatsApp.</li>
                                            </ul>
                                        </div>
                                        <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                                            <h4 className="text-[10px] font-sans text-[#8B949E] uppercase tracking-widest mb-3">Enquiry Contacts</h4>
                                            <div className="space-y-2">
                                                {selectedEvent.contacts.map((contact, i) => (
                                                    <div key={i} className="flex justify-between text-xs">
                                                        <span className="text-white font-medium">{contact.name}</span>
                                                        <span className="text-[#8B949E] font-sans">{contact.phone}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
