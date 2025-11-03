import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Cpu,
  BrainCircuit,
  Rocket,
  Globe,
  Mail,
  MonitorSmartphone,
  ServerCog,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Startup & Innovation Support",
    description:
      "From idea validation to incubation — we help startups with mentorship, networking, and go-to-market strategies.",
    details:
      "We provide startup mentorship, branding, funding assistance, and workspace solutions for early-stage entrepreneurs.",
    icon: <Rocket className="w-12 h-12 text-[#10B981]" />,
  },
  {
    id: 2,
    title: "Website Design",
    description:
      "Modern, responsive, and user-focused web design services that reflect your brand’s identity and attract your audience.",
    details:
      "We craft beautiful, user-centric websites with UI/UX design best practices — ensuring great visuals, usability, and brand consistency.",
    icon: <MonitorSmartphone className="w-12 h-12 text-[#EC4899]" />,
  },
  {
    id: 3,
    title: "Website Development",
    description:
      "Full-stack website development with the latest technologies to build fast, secure, and scalable web platforms.",
    details:
      "Using React, Node.js, Express, and modern APIs, we develop responsive, high-performance web applications tailored to your goals.",
    icon: <Globe className="w-12 h-12 text-[#3B82F6]" />,
  },
  {
    id: 4,
    title: "Domain & Hosting Services",
    description:
      "Reliable domain registration and hosting solutions to keep your website fast, secure, and always online.",
    details:
      "We offer domain registration, VPS hosting, and cloud-based solutions with 99.9% uptime, SSL, and security management.",
    icon: <ServerCog className="w-12 h-12 text-[#8B5CF6]" />,
  },
  {
    id: 5,
    title: "Professional Email Solutions",
    description:
      "Custom business email setup with your domain name for professional communication and enhanced brand credibility.",
    details:
      "Get yourname@yourcompany.com — we provide business email setup, management, and integration with Outlook & Gmail Workspace.",
    icon: <Mail className="w-12 h-12 text-[#EF4444]" />,
  },
  {
    id: 6,
    title: "Digital Marketing & Branding",
    description:
      "Comprehensive digital solutions including SEO, social media marketing, and content strategy to boost your online presence.",
    details:
      "We handle social campaigns, SEO optimization, and branding design to grow your audience and online authority effectively.",
    icon: <Sparkles className="w-12 h-12 text-[#22C55E]" />,
  },
  {
    id: 7,
    title: "Courses & Training Programs",
    description:
      "Specialized learning for IT, Non-IT, and Girls — covering coding, design, skill development, and creative fields like Mehendi & Fashion.",
    details:
      "We provide structured courses for students of all backgrounds. Explore IT courses (Web, AI, Cybersecurity), Non-IT (Digital Marketing, Design), and Girls Special programs (Mehendi, Handicrafts, and more).",
    icon: <BookOpen className="w-12 h-12 text-[#864993]" />,
    link: "/courses",
  },
  {
    id: 8,
    title: "AI & Robotics Workshops",
    description:
      "Hands-on sessions that introduce AI, ML, and robotics-based automation for real-world problem solving.",
    details:
      "From Python for AI to IoT-based robotics, these workshops help students explore automation and intelligent systems through guided experimentation.",
    icon: <Cpu className="w-12 h-12 text-[#39A0ED]" />,
  },
  {
    id: 9,
    title: "Skill Development & Internships",
    description:
      "Build practical skills and gain real-world experience through expert-led training and internship programs.",
    details:
      "We partner with companies to offer internship placements and skill certifications to make students job-ready with hands-on experience.",
    icon: <BrainCircuit className="w-12 h-12 text-[#F59E0B]" />,
  },
  {
    id: 10,
    title: "Coding & Programming Bootcamps",
    description:
      "Interactive courses in web, mobile, and backend development — perfect for beginners and aspiring developers.",
    details:
      "Our bootcamps include HTML, CSS, JavaScript, React, Node.js, and database fundamentals. You’ll build projects and get real-world mentorship to strengthen your portfolio.",
    icon: <Code className="w-12 h-12 text-[#864993]" />,
  },
];

const Services = () => {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  const toggleActive = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>

        <motion.p
          className="text-gray-600 max-w-3xl mx-auto mb-14 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          At{" "}
          <span className="font-semibold text-[#864993]">Geniuses Factory</span>, we combine innovation,
          education, and technology to deliver{" "}
          <span className="text-[#864993] font-medium">digital solutions</span> that empower learners and businesses to grow in the modern world.
        </motion.p>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#864993]/30"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-5 bg-[#f5e9f7] p-4 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {service.link ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate(service.link)}
                    className="bg-[#864993] text-white px-5 py-2 rounded-full shadow-md hover:bg-[#6f3d7c] transition-colors duration-200"
                  >
                    Explore Courses →
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleActive(service.id)}
                    className="bg-[#864993] text-white px-5 py-2 rounded-full shadow-md hover:bg-[#6f3d7c] transition-colors duration-200"
                  >
                    {active === service.id ? "Show Less" : "Learn More"}
                  </motion.button>
                )}

                {/* Expandable section */}
                <AnimatePresence>
                  {active === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-4 text-gray-700 text-sm bg-gray-50 rounded-xl p-4 border border-gray-200"
                    >
                      {service.details}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
