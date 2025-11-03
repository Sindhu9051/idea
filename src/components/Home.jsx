
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";






    





const fadeInUp = {
hidden: { opacity: 0, y: 40 },
visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};


const fadeInLeft = {
hidden: { opacity: 0, x: -60 },
visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};


const fadeInRight = {
hidden: { opacity: 0, x: 60 },
visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const options = [
  { label: "Domain & Hosting Solutions", msg: "Hello! I’m looking for reliable Domain, Hosting, and Email services for my business website. Please guide me through the process." },
  { label: "Website Development", msg: "Hi! I’m looking for a Website Development service." },
  { label: "Training and Internship", msg: "Hi! I want to know about Training and Internship programs." },
  { label: "About Courses", msg: "Hello! I’m interested in joining one of your courses. Can you guide me on which one is best for me?" },
];

const technologies = [
    { name: "Ethical Hacking", logo: "images/hack.png" },
    { name: "Linux", logo: "images/linux.png" },
    { name: "HTML5", logo: "images/html.png" },
    { name: "CSS3", logo: "images/css.png" },
    { name: "JavaScript", logo: "images/js.png" },
    { name: "React", logo: "images/react.png" },
    { name: "Python", logo: "images/python.png" },
    { name: "Git", logo: "images/git.png" },
    { name: "C++", logo: "images/c.png" },
    { name: "Sql", logo: "images/sql.png" },
    { name: "MongoDB", logo: "images/mongo.png" },
    { name: "English", logo: "images/eng.png" },
    { name: "Mix languages", logo: "images/lang.png" },
    { name: "Biology", logo: "images/bio.png" },
    { name: "Basic computer", logo: "images/comp.png" },
    { name: "MS Excel", logo: "images/excel.png" },

];

const services = [
  {
    boximg: "images/support.png",
    title: '24hrs Support',
    description: `Students have access to 24/7 support and can enhance their practical skills through live classes, hands-on projects, and internships—preparing them for successful careers in tech.`,
    button: 'Supports',
    id: 'contact',
  },
  {
    boximg: "images/training1.png",
    title: 'Training',
    description: `Geniuses Factory offers hands-on training programs in backend, frontend, full-stack development, and more. Students gain practical skills through live classes, projects, and internships, preparing them for successful careers in tech.`,
    button: 'Training',
    id: 'courses',
  },
  {
    boximg: "images/intern.png",
    title: 'Internship',
    description: `Geniuses Factory offers hands-on internships in frontend, backend, and full-stack development, providing real-world experience and mentorship to help interns build their skills and prepare for tech careers.`,
    button: 'Internship',
    //id: 'internship-forms',
  },
  {
    boximg: "images/bootcamp.png",
    title: 'Bootcamp',
    description: `Geniuses Factory's upcoming Bootcamp offers intensive training in web development, AI/ML, Ethical Hacking and more. Through expert-led sessions, practical assignments, and hands-on projects, you'll gain job-ready skills in no time.`,
    button: 'Bootcamp',
    id: 'https://forms.gle/Q3DEZ3876XV7Hsnw7',
  },
  {
    boximg: "images/team work.png",
    title: 'Team Work Projects',
    description: `Geniuses Factory will soon start a program in which some teams will be formed, they will have to make an industry level project with their team, the teams which make good projects will be given a gift from our side.`,
    button: 'Team Work',
    //id: 'team-work',
  },
];

const reviews = [
  {
    name: "Atish Kumar",
    role: "Front-End Intern",
    review:
      "Joining Geniuses Factory has been one of the best decisions in my learning journey! The training sessions are packed with real-world insights, and the projects truly challenge you to apply what you learn. From backend essentials to advanced web development techniques, this program gives you all the tools you need to succeed!",
  },
  {
    name: "Joydeep Banerjee",
    role: "Back-End Trainee",
    review:
      "A fantastic platform for college students looking to boost their skills! Geniuses Factory combines practical training with an internship experience that makes you feel like a real developer. I completed my backend training here and am now much more job-ready – thank you, Geniuses Factory!",
  },
  {
    name: "Priyanshu Kumari",
    role: "Python Intern",
    review:
      "Geniuses Factory internship program has been an eye-opener! The hands-on experience with industry-relevant projects and one-on-one guidance is unmatched. Not only did I learn new skills, but I also gained confidence to take on bigger challenges in my tech career!",
  },
  {
    name: "Tanmoy Gain",
    role: "Back-End Trainee",
    review:
      "The best part of Geniuses Factory is the exceptional mentorship and support. I learned so much about Node.js, MongoDB, and API development in the backend program. The instructors make sure every concept is crystal clear, and the certificates are great for showcasing my new technical skills. Highly recommend!",
  },
  {
    name: "Vivek Kumar",
    role: "Ethical Hacking Trainee",
    review:
      "The best part of Geniuses Factory is the exceptional mentorship and support. I learned so much about ethical hacking techniques, penetration testing, and security protocols in the ethical hacking program. The instructors make sure every concept is crystal clear, and the certificates are great for showcasing my new technical skills. Highly recommend!",
  },
  {
    name: "Praveen Kumar Saw",
    role: "Python Trainee",
    review:
      "The best part of Geniuses Factory is the exceptional mentorship and support. I learned so much about Python, Flask, and API development in the Python program. The instructors make sure every concept is crystal clear, and the certificates are great for showcasing my new technical skills. Highly recommend!",
  },
  {
    name: "Himadri Sarkar",
    role: "Mern-Stack Trainee",
    review:
      "The best part of Geniuses Factory is the outstanding mentorship and hands-on support. As a MERN Stack trainee, I gained deep knowledge in MongoDB, Express.js, React, and Node.js. The instructors break down complex topics into easy-to-understand lessons, and the practical projects really solidified my learning. The certification is a great addition to my portfolio. Highly recommend for anyone serious about full-stack development!"
  },
];

const Home = () => {

  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(true);

  const phoneNumber = "916204857037";

  const handleOptionClick = (message) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setHasNewMessage(false);
  };






  return (
    <>
        <Helmet>
            <title>Geniuses Factory | Best Coding & AI Learning Platform</title>
            <meta
            name="description"
            content="Learn coding, AI, and robotics at Geniuses Factory. Genius Factory is the best platform for startups who want to do their business online through websites. It is very good for them and is no less than a boon for fresher students because in this you get live classes, hands-on experience and for those who want to learn technical skills, there are 20++ courses."
            />
            <meta
            name="keywords"
            content="Geniuses Factory, coding, AI, robotics, Genius Factory is the best platform for startups who want to do their business online through websites. It is very good for them and is no less than a boon for fresher students because in this you get live classes, hands-on experience and for those who want to learn technical skills, there are 20++ courses."
            />
        </Helmet>
        <section variants={fadeInUp} className="py-20 ">
            <motion.div className="max-w-7xl mx-auto px-4 grid grid-cols md:grid-cols-2 mt-5">
                    {/* Left: Text Content */}
                    <motion.div variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-[url(/images/text.png)] bg-cover text-justify-center flex flex-col justify-center">
                        <motion.h1 className="text-4xl font-bold text-gray-900 mb-4">
                            How to <span className="text-[#878bde]">Boost up your Skills</span>
                        </motion.h1>
                        <motion.p className="text-gray-600 mb-6">
                            Enhance your skills with Geniuses Factory expert-led training programs courses and real-world projects. Equip yourself with the knowledge and experience needed to excel in today’s tech industry.
                        </motion.p>
                        <motion.div>
                            <motion.button whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#864993] font-bold hover:border-2 border-dotted text-white px-6 py-3 rounded-xl shadow transition mt-1 me-2" 
                                onClick={() => navigate('/bootcamp')}>
                                Get Started
                            </motion.button>

                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white-100 text-black font-bold border-1 hover:border-2 border-dotted px-6 py-3 rounded-xl shadow transition mt-1"
                                onClick={() => navigate('/contact')}>
                                Contact Us
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right: Image */}
                    <motion.div 
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className=" flex justify-center md:justify-center">
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            src="images/face.png"
                            alt="Education Illustration"
                            className="max-w-full h-120"
                        />
                    </motion.div>
            </motion.div>
        </section>

        {/* ✨ NEW SECTION: We Design & Develop Websites */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl font-bold text-[#864993] mb-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            We Design & Develop Websites
          </motion.h2>

          <motion.p
            className="max-w-3xl mx-auto text-gray-700 mb-12"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            From modern websites to powerful online stores, we craft responsive,
            SEO-friendly digital experiences to help your business grow online.
          </motion.p>

          {/* Horizontal scrollable image gallery */}
          <motion.div
            className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory justify-start md:justify-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {["web1.jpg", "web2.jpg", "web3.jpg", "web4.jpg"].map((img, i) => (
              <motion.div
                key={i}
                className="snap-center shrink-0 w-80 h-56 rounded-xl shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={`images/${img}`}
                  alt={`Web Design ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/services")}
            className="mt-10 bg-[#864993] text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
          >
            Explore Our Web Solutions
          </motion.button>
        </div>
      </section>


        <section>
            <div className="max-w-7xl mx-auto py-20 px-6 md:px-12">
                <motion.h2
                    className="text-4xl font-bold text-center mb-14"
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    >
                    Why Choose Us?
                </motion.h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {["Expert Instructors", "Hands-On Projects", "Flexible Learning"].map((title, i) => (
                    <motion.div
                        key={i}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition"
                        >
                        <h3 className="text-xl font-semibold mb-2">{title}</h3>
                        <p className="text-sm text-gray-600">
                            {i === 0 && "Learn from industry leaders and gain real-world skills."}
                            {i === 1 && "Build a portfolio of real projects to showcase your skills."}
                            {i === 2 && "Learn at your own pace with 24/7 access to course materials."}
                        </p>
                    </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* Technologies Section */}
        <section className="bg-white-20 py-20">
            <div className="text-center mb-10">
                <motion.h2
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-gray-900"
                    >
                    Technologies we teach our students
                </motion.h2>
            </div>


            <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg max-w-6xl mx-auto px-6 py-6"
                >
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 place-items-center">
                    {technologies.map((tech, index) => (
                    <motion.img
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    key={index}
                    src={tech.logo}
                    alt={tech.name}
                    title={tech.name}
                    className="w-10 h-10 object-contain"
                    />
                    ))}
                </div>
            </motion.div>

        </section>

        <section className="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 py-12 max-w-7xl mx-auto">
            {/* Text Content */}
            <motion.div className="lg:w-1/2 text-center lg:text-left" variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Industry-Relevant Curriculum
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Geniuses Factory provides a carefully crafted curriculum designed to match the latest industry standards. It covers essential technologies and tools to ensure that students gain the practical knowledge required for real-world projects.
                </p>
            </motion.div>

            {/* Image */}
            <motion.div className="lg:w-1/2 flex justify-center" variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                <motion.img
                    whileHover={{ scale: 1.3 }}
                    src="images/industry.png"
                    alt="Industry-Relevant Curriculum Illustration"
                    className="max-w-full h-auto"
                />
            </motion.div>
        </section>

        <div className="flex flex-col md:flex-row items-center justify-center px-6 py-12">
            {/* Left Image Section */}
            <motion.div className="md:w-1/2 w-full mb-8 md:mb-0 flex justify-center" variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                <motion.img
                    whileHover={{ scale: 1.3 }}
                    src="/images/face2.png"
                    alt="Hands-on Project"
                    className="max-w-full h-auto"
                />
            </motion.div>

            {/* Right Text Section */}
            <motion.div className="md:w-1/2 w-full px-6" variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    Hands-on Project Experience
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Each training program includes project-based learning, allowing students to
                    work on real-world applications. This hands-on experience ensures students can
                    apply theoretical concepts and enhance their practical skills.
                </p>
            </motion.div>
        </div>

        <section className="flex flex-col lg:flex-row items-center justify-between px-8 py-16">
            {/* Text Content */}
            <motion.div className="w-full lg:w-1/2 mb-12 lg:mb-0" variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Expert Mentorship and Guidance
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Students receive guidance from experienced industry professionals who provide personalized mentorship. This helps students navigate challenges, refine their skills, and get valuable insights into career development.
                </p>
            </motion.div>

            {/* Illustration */}
            <motion.div className="w-full lg:w-1/2 flex justify-center" variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                <motion.img
                    whileHover={{ scale: 1.5 }}
                    src="/images/face3.png"
                    alt="Mentorship Illustration"
                    className="w-full max-w-md"
                />
            </motion.div>
        </section>

        <div className="p-6 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Image Section */}
                <motion.div className="flex-1" variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}>
                    <motion.img
                        whileHover={{ scale: 1.5 }}
                        src="/images/face4.png"
                        alt="Training and Internship"
                        className="w-full h-auto max-w-md mx-auto"
                    />
                </motion.div>

                {/* Text Section */}
                <motion.div className="flex-1 text-center md:text-left" variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Courses, Training and Internship Programs
                    </h2>
                    <p className="text-gray-700 text-lg">
                        geniuses factory offers a combination of training and internship programs,
                        providing students with the opportunity to gain practical experience
                        in real-world environments. These programs bridge the gap between
                        academic learning and industry requirements, helping students build a
                        strong portfolio for their careers.
                    </p>
                </motion.div>
            </div>
        </div>

        {/* Main Services */}
      <section className="py-16 px-6 text-center">
        <motion.h2
          className="text-4xl font-semibold text-purple-700 mb-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Our Main Services
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto text-gray-700 mb-12"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Geniuses Factory offers hands-on Training, Internships, and Bootcamps, teaching job-ready tech skills.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-blue-100 p-6 rounded-3xl shadow-md"
            >
              <img
                src={service.boximg}
                alt="Service illustration"
                className="w-40 h-40 mx-auto mb-6"
              />
              <p className="text-gray-800 mb-6">{service.description}</p>

              {/* ✅ Updated Button Logic */}
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white border border-gray-400 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition"
                onClick={() => {
                  if (service.title === "Bootcamp") {
                    window.open("https://forms.gle/aJoWL4QxhbWxG7nr6", "_blank");
                  } else if (service.title === "Internship") {
                    window.open("https://forms.gle/jLv2C3XajhdwfHSZ7", "_blank");
                  } else if (service.title === "Team Work Projects") {
                    alert("Team Work Project link will be available soon!");
                  } else {
                    navigate(`/${service.id}`);
                  }
                }}
              >
                {service.button}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

        <div className="min-h-screen px-6 py-20 bg-gradient-to-br from-white via-purple-50 to-blue-50">
  {/* Title */}
  <motion.h1
    className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    Ratings
  </motion.h1>

  {/* Subtext */}
  <motion.p
    className="text-center text-gray-600 max-w-2xl mx-auto mb-14"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    Real feedback from students who have experienced growth, skill-building,
    and transformation with <span className="font-semibold text-purple-700">Geniuses Factory</span>.
  </motion.p>

  {/* Illustration */}
  <div className="flex justify-center mb-14">
    <motion.img
      src="/images/review.png"
      alt="Review Illustration"
      className="w-80 h-auto drop-shadow-md hover:drop-shadow-xl transition-all"
      variants={fadeInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    />
  </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white/70 backdrop-blur-md border border-purple-100 shadow-lg rounded-3xl p-8 text-left transition-all duration-300 hover:shadow-2xl"
            >
              {/* Quote Icon */}
              <div className="mb-4 text-purple-500 text-4xl leading-none">“</div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 text-sm leading-relaxed italic">
                {review.review}
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full flex items-center justify-center text-2xl shadow-md">
                  👤
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-base">
                    {review.name}
                  </p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
              </div>

           {/* ✅ WhatsApp Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={toggleChat}
          className="bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg relative hover:scale-105 transition-transform"
        >
          <MessageCircle className="w-7 h-7" />
          {hasNewMessage && <span className="absolute top-2 right-2 w-3 h-3 bg-red-500 rounded-full animate-ping" />}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-20 right-0 bg-white shadow-2xl rounded-2xl w-72 overflow-hidden border border-gray-200"
            >
              <div className="p-4 border-b bg-gray-50 text-gray-800">
                <p className="font-semibold">👋 Hi! Welcome to Geniuses Factory</p>
                <p className="text-sm text-gray-500 mt-1">How can I help you today?</p>
              </div>

              <div className="p-4 flex flex-col gap-3">
                {options.map((opt, i) => (
                  <motion.button
                    key={i}
                    onClick={() => handleOptionClick(opt.msg)}
                    whileHover={{ scale: 1.03 }}
                    className="text-green-700 font-medium border border-green-600 px-3 py-2 rounded-full text-sm hover:bg-green-600 hover:text-white transition"
                  >
                    {opt.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </>
  );
};

export default Home;