
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion'

const fadeInUp = {
hidden: { opacity: 0, y: 40 },
visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};




const allCourses = {
  "Future Geniuses": [
    {
      id: 1,
      name: "Mehndi Course",
      image: "/images/mhendi.jpg",
      detail: "Learn the art of Mehndi design and students are learning both online and offline mode.",
      difficulty: "Beginner",
      rating: 5,
      duration: "6 months",
      pdf: "/pdfs/mhendi.pdf",
      price: "₹1599",
    },
    {
      id: 2,
      name: "Beautician Course",
      image: "/images/beautician.jpg",
      detail: "Learn the art of beauty and skincare. A comprehensive course for beginners and this course is available both online and offline mode.",
      difficulty: "Beginner",
      rating: 5,
      duration: "6 months",
      pdf: "/pdfs/beautician.pdf",
      price: "₹2999",
    }
    
  ],
  IT: [
    {
      id: 31,
      name: "Ethical Hacking (GFCSC)",
      image: "/images/hacker.png",
      detail: "Legally breaking into systems to find and fix security vulnerabilities before malicious hackers do.",
      difficulty: "Advanced",
      rating: 4,
      duration: "4 months + 2 internship",
      pdf: "/pdfs/ethical-hacking.pdf",
      price: "₹9999",
    },
    {
      id: 26,
      name: "HTML & CSS",
      image: "/images/html-css.png",
      detail: "Learn to build modern web apps using HTML & CSS.",
      difficulty: "Beginner",
      rating: 4,
      duration: "3 months",
      pdf: "/pdfs/html-css.pdf",
      price: "₹649",
    },
    {
      id: 27,
      name: "Bootstrap CSS",
      image: "/images/bootstrap.png",
      detail: "Master Bootstrap with real-world projects.",
      difficulty: "Intermediate",
      rating: 4,
      duration: "4 weeks",
      pdf: "/pdfs/bootstrap.pdf",
      price: "₹249",
    },
    {
      id: 28,
      name: "JavaScript Basics",
      image: "/images/javascript.png",
      detail: "Learn the fundamentals of JavaScript.",
      difficulty: "Beginner",
      rating: 4,
      duration: "2 months",
      pdf: "/pdfs/javascript.pdf",
      price: "₹499",
    },
    {
      id: 29,
      name: "Python",
      image: "/images/python copy.png",
      detail: "Master Python through practical projects.",
      difficulty: "Beginner",
      rating: 4,
      duration: "5 weeks",
      pdf: "/pdfs/python.pdf",
      price: "₹299",
    },
    {
      id: 30,
      name: "Tailwind CSS",
      image: "/images/tailwind.png",
      detail: "Build UIs rapidly with utility-first Tailwind CSS.",
      difficulty: "Intermediate",
      rating: 4,
      duration: "5 weeks",
      pdf: "/pdfs/tailwind.pdf",
      price: "₹299",
    },
    {
      id: 32,
      name: "React JS + Tailwind CSS",
      image: "/images/react.png",
      detail: "Build interactive UIs with React and Tailwind CSS.",
      difficulty: "Intermediate",
      rating: 4,
      duration: "3 months + 1 month internship",
      pdf: "/pdfs/react.pdf",
      price: "₹1499",
    },
    {
      id: 33,
      name: "Frontend Development",
      image: "/images/frontend.png",
      detail: "Comprehensive frontend development with HTML, CSS, JavaScript, and React.",
      difficulty: "Advanced",
      rating: 4,
      duration: "3 months + 1 month internship",
      pdf: "/pdfs/frontend.pdf",
      price: "₹1499",
    },
    {
      id: 34,
      name: "Backend Development",
      image: "/images/backend.png",
      detail: "Learn backend development with Node.js and Express.js with internship.",
      difficulty: "Advanced",
      rating: 4,
      duration: "3 months + 1 month internship",
      pdf: "/pdfs/backend.pdf",
      price: "₹1299",
    },
    {
      id: 35,
      name: "Full Stack Development",
      image: "/images/fullstack.png",
      detail: "Become a full stack developer with our comprehensive course with compatible softwares.",
      difficulty: "Advanced",
      rating: 4,
      duration: "4 months + 2 month internship",
      pdf: "/pdfs/fullstack.pdf",
      price: "₹1699",
    },
    {
      id: 36,
      name: "MySQL Database",
      image: "/images/sql.png",
      detail: "Master MySQL with hands-on projects.",
      difficulty: "Advanced",
      rating: 4,
      duration: "3 months",
      pdf: "/pdfs/sql.pdf",
      price: "₹1299",
    },
    {
      id: 37,
      name: "NoSQL Databases",
      image: "/images/nosql.png",
      detail: "Master NoSQL databases with hands-on projects.",
      difficulty: "Advanced",
      rating: 4,
      duration: "3 month",
      pdf: "/pdfs/nosql.pdf",
      price: "₹1299",
    },
    { id: 38,
      name: "PHP",
      image: "/images/php.png",
      detail: "Master PHP with hands-on projects.",
      difficulty: "Advanced",
      rating: 4,
      duration: "4 month",
      pdf: "/pdfs/php.pdf",
      price: "₹1499",
    },
    {
      id: 39,
      name: "C Programming",
      image: "/images/c.png",
      detail: "Master C programming with hands-on projects.",
      difficulty: "Advanced",
      rating: 4,
      duration: "4 months + 1 internship",
      pdf: "/pdfs/c.pdf",
      price: "₹1499",
    },
  ],
  "Non-IT": [
    {
      id: 31,
      name: "Ethical Hacking (GFCSC)",
      image: "/images/hacker.png",
      detail: "Legally breaking into systems to find and fix security vulnerabilities before malicious hackers do.",
      difficulty: "Advanced",
      rating: 4,
      duration: "4 months + 2 internship",
      pdf: "/pdfs/ethical-hacking.pdf",
      price: "₹9999",
    },
    {
      id: 61,
      name: "Basics of Computers",
      image: "/images/basicComputer.png",
      detail: "Learn how to use a computer from scratch.",
      difficulty: "Beginner",
      rating: 4,
      duration: "1 months",
      pdf: "/pdfs/computer.pdf",
      price: "₹249",
    },
    {
      id: 62,
      name: "Tally Accounting",
      image: "/images/tally.png",
      detail: "Learn accounting with Tally software.",
      difficulty: "Intermediate",
      rating: 5,
      duration: "2 months",
      pdf: "/pdfs/tally.pdf",
      price: "₹599",
    },
    {
      id: 64,
      name: "Wordpress",
      image: "/images/wordpress.png",
      detail: "Build dynamic websites using WordPress.",
      difficulty: "Intermediate",
      rating: 4,
      duration: "3 months",
      pdf: "/pdfs/wordpress.pdf",
      price: "₹799",
    },
    {
      id: 66,
      name: "Biology",
      image: "/images/bio copy.png",
      detail: "Learn the fundamentals of biology.",
      difficulty: "Advanced",
      rating: 5,
      duration: "8 months",
      pdf: "/pdfs/biology.pdf",
      price: "₹3599",
    },
    {
      id: 67,
      name: "Chemistry",
      image: "/images/chemistry.png",
      detail: "Learn the fundamentals of chemistry.",
      difficulty: "Advanced",
      rating: 5,
      duration: "8 months",
      pdf: "/pdfs/chemistry.pdf",
      price: "₹3599",
    },
    {
      id: 68,
      name: "Physics",
      image: "/images/physics.png",
      detail: "Learn the fundamentals of physics.",
      difficulty: "Advanced",
      rating: 5,
      duration: "8 months",
      pdf: "/pdfs/physics.pdf",
      price: "₹3599",
    },
    {
      id: 69,
      name: "English",
      image: "/images/english.png",
      detail: "Learn English language basics.",
      difficulty: "Beginner",
      rating: 4,
      duration: "3 months",
      pdf: "/pdfs/english.pdf",
      price: "₹999",
    },
    {
      id: 70,
      name: "Competition Exam Preparation",
      image: "/images/cep.png",
      detail: "Comprehensive preparation for various competitive exams.",
      difficulty: "Beginner",
      rating: 4,
      duration: "8 months",
      pdf: "/pdfs/cep.pdf",
      price: "₹2499",
    },
  ],
};




const difficultyColor = {
  Beginner: "bg-green-100 text-green-800",
  Intermediate: "bg-yellow-100 text-yellow-800",
  Advanced: "bg-red-100 text-red-800",
};

const Courses = () => {
  
  const navigate = useNavigate();
  const [category, setCategory] = useState("IT");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const courses = allCourses[category] || [];

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-10 min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <motion.header className="text-center py-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white" variants={fadeInUp} initial="hidden" animate="visible">
        <h1 className="text-4xl font-bold">📚 Explore Our Courses</h1>
        <p className="mt-2 text-lg">Choose a category and start learning today!</p>
      </motion.header>

      {/* Category Buttons */}
      <motion.div className="flex justify-center gap-4 my-8" variants={fadeInUp} initial="hidden" animate="visible">
        {["Future Geniuses", "IT", "Non-IT"].map((cat) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            key={cat}
            onClick={() => {
              setCategory(cat);
              setSearchTerm("");
            }}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              category === cat
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100"
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Search Bar */}
      <div className="flex justify-center mb-8 px-4">
        <input
          type="text"
          placeholder="🔍 Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Course Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-20">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={course.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.name}
                className="h-48 w-full object-cover cursor-pointer"
                onClick={() => setSelectedCourse(course)}
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-indigo-700">
                  {course.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">⏱️ {course.duration}</p>
                <div
                  className={`inline-block mt-2 px-3 py-1 text-sm rounded-full ${difficultyColor[course.difficulty]}`}
                >
                  {course.difficulty}
                </div>
                <div className="flex mt-2 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <AiFillStar
                      key={i}
                      className={i < course.rating ? "" : "text-gray-300"}
                    />
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={course.pdf}
                    download
                    className="text-sm px-3 py-1 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition"
                  >
                    📄 Download PDF
                  </a>
                  <span className="text-sm font-semibold text-gray-700">
                    {course.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 text-sm">
            No courses found matching your search.
          </p>
        )}
      </div>

      {/* Modal */}
      {selectedCourse && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl"
              onClick={() => setSelectedCourse(null)}
            >
              &times;
            </button>
            <img
              src={selectedCourse.image}
              alt={selectedCourse.name}
              className="w-full h-55 bg-cover bg-center rounded-md"
            />
            <h2 className="text-2xl font-bold mt-4 text-indigo-700">
              {selectedCourse.name}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Duration: {selectedCourse.duration}
            </p>
            <div
              className={`inline-block mt-2 px-3 py-1 text-sm rounded-full ${difficultyColor[selectedCourse.difficulty]}`}
            >
              {selectedCourse.difficulty}
            </div>
            <div className="flex mt-2 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <AiFillStar
                  key={i}
                  className={i < selectedCourse.rating ? "" : "text-gray-300"}
                />
              ))}
            </div>
            <p className="mt-4 text-gray-700 text-sm">
              {selectedCourse.detail}
            </p>
            <div className="flex justify-between items-center mt-6">
              <a
                href={selectedCourse.pdf}
                download
                className="text-sm text-indigo-600 hover:underline"
              >
                📄 Download PDF
              </a>
              <span className="text-md font-semibold text-indigo-600">
                {selectedCourse.price}
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                navigate("/payment", {
                  state: {
                    name: selectedCourse.name,
                    price: selectedCourse.price.replace("₹", "").trim()
                    }
                  })
                }
                className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition"
              >
                Enroll Now
              </motion.button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
