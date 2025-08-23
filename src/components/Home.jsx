import React from "react";
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';





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
    description: `geniusfactory offers hands-on training programs in backend, frontend, full-stack development, and more. Students gain practical skills through live classes, projects, and internships, preparing them for successful careers in tech.`,
    button: 'Training',
    id: 'courses',
  },
  {
    boximg: "images/intern.png",
    title: 'Internship',
    description: `geniusfactory offers hands-on internships in frontend, backend, and full-stack development, providing real-world experience and mentorship to help interns build their skills and prepare for tech careers.`,
    button: 'Internship',
    id: 'internship',
  },
  {
    boximg: "images/bootcamp.png",
    title: 'Bootcamp',
    description: `geniusfactory's upcoming Bootcamp offers intensive training in web development, AI/ML, Ethical Hacking and more. Through expert-led sessions, practical assignments, and hands-on projects, you'll gain job-ready skills in no time.`,
    button: 'Bootcamp',
    id: 'bootcamp',
  },
  {
    boximg: "images/team work.png",
    title: 'Team Work Projects',
    description: `geniusfactory will soon start a program in which some teams will be formed, they will have to make an industry level project with their team, the teams which make good projects will be given a gift from our side.`,
    button: 'Team Work',
    //id: 'team-work',
  },
];

const reviews = [
  {
    star: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.449 1.286 3.957c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.37 2.449c-.783.57-1.838-.197-1.538-1.118l1.286-3.957-3.37-2.449c-.783-.57-.38-1.81.588-1.81h4.163l1.286-3.957z",
    name: "Atish Kumar",
    role: "Front-End Intern",
    review:
      "Joining geniusfactory has been one of the best decisions in my learning journey! The training sessions are packed with real-world insights, and the projects truly challenge you to apply what you learn. From backend essentials to advanced web development techniques, this program gives you all the tools you need to succeed!",
  },
  {
    star: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.449 1.286 3.957c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.37 2.449c-.783.57-1.838-.197-1.538-1.118l1.286-3.957-3.37-2.449c-.783-.57-.38-1.81.588-1.81h4.163l1.286-3.957z",
    name: "Joydeep Banerjee",
    role: "Back-End Trainee",
    review:
      "A fantastic platform for college students looking to boost their skills! geniusfactory combines practical training with an internship experience that makes you feel like a real developer. I completed my backend training here and am now much more job-ready – thank you, geniusfactory!",
  },
  {
    star: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.449 1.286 3.957c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.37 2.449c-.783.57-1.838-.197-1.538-1.118l1.286-3.957-3.37-2.449c-.783-.57-.38-1.81.588-1.81h4.163l1.286-3.957z",
    name: "Priyanshu Kumari",
    role: "Python Intern",
    review:
      "geniusfactory internship program has been an eye-opener! The hands-on experience with industry-relevant projects and one-on-one guidance is unmatched. Not only did I learn new skills, but I also gained confidence to take on bigger challenges in my tech career!",
  },
  {
    star: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.449 1.286 3.957c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.37 2.449c-.783.57-1.838-.197-1.538-1.118l1.286-3.957-3.37-2.449c-.783-.57-.38-1.81.588-1.81h4.163l1.286-3.957z",
    name: "Tanmoy Gain",
    role: "Back-End Trainee",
    review:
      "The best part of geniusfactory is the exceptional mentorship and support. I learned so much about Node.js, MongoDB, and API development in the backend program. The instructors make sure every concept is crystal clear, and the certificates are great for showcasing my new technical skills. Highly recommend!",
  },
  {
    star: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.449 1.286 3.957c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.37 2.449c-.783.57-1.838-.197-1.538-1.118l1.286-3.957-3.37-2.449c-.783-.57-.38-1.81.588-1.81h4.163l1.286-3.957z",
    name: "Vivek Kumar",
    role: "Ethical Hacking Trainee",
    review:
      "The best part of geniusfactory is the exceptional mentorship and support. I learned so much about ethical hacking techniques, penetration testing, and security protocols in the ethical hacking program. The instructors make sure every concept is crystal clear, and the certificates are great for showcasing my new technical skills. Highly recommend!",
  },
  {
    star: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.449 1.286 3.957c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.37 2.449c-.783.57-1.838-.197-1.538-1.118l1.286-3.957-3.37-2.449c-.783-.57-.38-1.81.588-1.81h4.163l1.286-3.957z",
    name: "Praveen Kumar Saw",
    role: "Python Trainee",
    review:
      "The best part of geniusfactory is the exceptional mentorship and support. I learned so much about Python, Flask, and API development in the Python program. The instructors make sure every concept is crystal clear, and the certificates are great for showcasing my new technical skills. Highly recommend!",
  },
];

const Home = () => {

    const navigate = useNavigate();




  return (
    <>
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
                            Enhance your skills with geniusfactory expert-led training programs courses and real-world projects. Equip yourself with the knowledge and experience needed to excel in today’s tech industry.
                        </motion.p>
                        <motion.div>
                            <motion.button whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#864993] font-bold hover:border-2 border-dotted text-white px-6 py-3 rounded-xl shadow transition mt-1 me-2" 
                                onClick={() => navigate('/webinar')}>
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
                    geniusfactory provides a carefully crafted curriculum designed to match the latest industry standards. It covers essential technologies and tools to ensure that students gain the practical knowledge required for real-world projects.
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
                        geniusfactory offers a combination of training and internship programs,
                        providing students with the opportunity to gain practical experience
                        in real-world environments. These programs bridge the gap between
                        academic learning and industry requirements, helping students build a
                        strong portfolio for their careers.
                    </p>
                </motion.div>
            </div>
        </div>

        <section className="py-16 px-6 text-center">
            <motion.h2 className="text-4xl font-semibold text-purple-700 mb-6" variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                Our main services
            </motion.h2>
            <motion.p className="max-w-2xl mx-auto text-gray-700 mb-12" variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                geniusfactory offers hands-on Training, Internships, and Bootcamps, teaching job-ready tech skills in areas like backend, frontend, and AI. With real-world projects, mentorship, and certifications, it’s perfect for building career-ready expertise.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                <motion.div key={index}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-100 p-6 rounded-3xl shadow-md">
                    <img
                        src={service.boximg}
                        alt="Service illustration"
                        className="w-40 h-40 mx-auto mb-6"
                    />
                    <p className="text-gray-800 mb-6">{service.description}</p>
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white border border-gray-400 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition" onClick={() => navigate(`/${service.id}`)}>
                        {service.button}
                    </motion.button>
                </motion.div>
                ))}
            </div>
        </section>

        <div className="min-h-screen p-8">
            {/* Title */}
            <motion.h1 
                className="text-4xl font-bold text-purple-700 text-center mb-12"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                Reviews
            </motion.h1>

            <div className="flex justify-center mb-8">
                <motion.img src="/images/review.png" alt="Review" className="w-100 h-50" variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ scale: 1.3 }} />
            </div>

            <div className="flex flex-col lg:flex-row lg:flex-wrap gap-8 justify-center items-center">
                {/* Review Cards */}
                {reviews.map((review, index) => (
                <motion.div key={index} className="bg-white w-full max-w-md shadow-lg rounded-lg p-6" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} whileHover={{ scale: 1.05 }}>

                    {/* Stars */}
                    <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d={review.star} />
                        </svg>
                    ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 mb-6">{review.review}</p>

                    {/* Reviewer */}
                    <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-xl">👤</span>
                    </div>
                    <div>
                        <p className="font-semibold text-black">{review.name}</p>
                        <p className="text-sm text-gray-500">{review.role}</p>
                    </div>
                    </div>
                </motion.div>
                ))}

            </div>
        </div>
    </>
  );
};

export default Home;
