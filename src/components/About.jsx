import React from "react";
import { Helmet } from "react-helmet-async";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Sindhu Kumar", role: "CEO & Founder", imageUrl: "/images/ceo.png" },
  { name: "Subham Raj", role: "Deputy CEO", imageUrl: "/images/ceo1.png" },
  { name: "Vivek Kumar", role: "Event Organizer", imageUrl: "/images/vivek.png" },
  { name: "Praveen Kumar Saw", role: "Python Instructor", imageUrl: "/images/praveen.png" },
  { name: "Nayan Barnwal", role: "Support Executive", imageUrl: "/images/nayan.jpg" },
  { name: "Ankit Kumar", role: "Support Executive", imageUrl: "/images/ankit.png" },
  { name: "Himadri Sarkar", role: "MERN Stack Instructor", imageUrl: "/images/himadri.png" },
  { name: "Sonali Kumari", role: "Programming Instructor", imageUrl: "/images/sonali.png" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Geniuses Factory</title>
        <meta
          name="description"
          content="Learn about the mission, vision, and team behind Geniuses Factory — where innovation meets education."
        />
      </Helmet>

      <div className="bg-gradient-to-b from-gray-50 to-white text-gray-900 overflow-hidden">

        {/* 🌟 HERO */}
        <section className="relative py-28 px-6 text-center">
          <motion.div
            className="max-w-5xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
              We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Innovators</span>.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Geniuses Factory is redefining learning — empowering creators and thinkers through coding, AI, and robotics.
            </p>
          </motion.div>

          <motion.img
            src="/images/about-illustration.png"
            alt="Geniuses Factory Illustration"
            className="mx-auto mt-16 w-3/4 md:w-1/2 rounded-3xl shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          />
        </section>

        {/* 🧭 MISSION */}
        <section className="py-24 bg-white">
          <motion.div
            className="max-w-5xl mx-auto text-center px-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Our mission is to create a world where every learner has access to
              transformative education. We combine technology, creativity, and
              real-world experience to make learning meaningful and fun.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="px-6 py-3 bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl text-sm text-purple-700 font-medium">
                🚀 Empower Students
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl text-sm text-blue-700 font-medium">
                🧠 Build Real Skills
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-indigo-100 to-indigo-50 rounded-xl text-sm text-indigo-700 font-medium">
                🤝 Create Global Impact
              </div>
            </div>
          </motion.div>
        </section>


        {/* 👥 TEAM SECTION */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.h2
              className="text-4xl font-bold mb-14 text-gray-900"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Meet Our Team
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="group bg-gradient-to-b from-white to-purple-50 border border-purple-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.03 }}
                >
                  <div className="relative w-28 h-28 mx-auto mb-4">
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-4 border-purple-200 shadow-md group-hover:border-purple-400 transition-all"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-all" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 🚀 CTA */}
        <section className="py-24 bg-gradient-to-r from-purple-700 to-blue-700 text-center text-white">
          <motion.div
            className="max-w-3xl mx-auto px-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-6 leading-snug">
              Ready to Build the <span className="text-yellow-300">Future</span> With Us?
            </h3>
            <p className="text-blue-100 mb-10 text-lg">
              Join our community through bootcamps, internships, or collaborations.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button
                onClick={() => window.location.href = "https://forms.gle/aJoWL4QxhbWxG7nr6"}
                className="bg-white text-purple-700 px-8 py-3 rounded-xl font-semibold hover:bg-purple-100 transition-all"
              >
                Join Bootcamp
              </button>
              <button
                onClick={() => window.location.href = "https://forms.gle/jLv2C3XajhdwfHSZ7"}
                className="bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-100 transition-all"
              >
                Apply Internship
              </button>
              <button
                onClick={() => window.location.href = "mailto:thegeniusesfactory@gmail.com"}
                className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-all"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
}
