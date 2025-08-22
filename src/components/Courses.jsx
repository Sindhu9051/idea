
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


// Dummy course data categorized into Future Geniuses, IT, and Non-IT
const allCourses = {
  "Future Geniuses": [
    {
      id: 1,
      name: "Scratch Programming",
      image: "https://source.unsplash.com/400x250/?kids,code",
      detail: "Build games and animations using Scratch.",
      difficulty: "Beginner",
      rating: 5,
      duration: "4 weeks",
      pdf: "/pdfs/scratch.pdf",
      price: "Free",
    },
    {
      id: 2,
      name: "Fun with Math",
      image: "https://source.unsplash.com/400x250/?kids,math",
      detail: "Math games and logic puzzles.",
      difficulty: "Beginner",
      rating: 4,
      duration: "3 weeks",
      pdf: "/pdfs/math.pdf",
      price: "Free",
    },
  ],
  IT: [
    {
      id: 31,
      name: "Ethical Hacking",
      image: "/images/hacker.png",
      detail: "Legally breaking into systems to find and fix security vulnerabilities before malicious hackers do.",
      difficulty: "Advanced",
      rating: 4,
      duration: "6 weeks",
      pdf: "/pdfs/ethical-hacking.pdf",
      price: "₹9999",
    },
    {
      id: 26,
      name: "HTML & CSS",
      image: "/images/html-css.png",
      detail: "Learn to build modern web apps using HTML & CSS.",
      difficulty: "Advanced",
      rating: 4,
      duration: "6 weeks",
      pdf: "/pdfs/html-css.pdf",
      price: "₹249",
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
      duration: "5 weeks",
      pdf: "/pdfs/javascript.pdf",
      price: "₹299",
    },
    {
      id: 29,
      name: "Python",
      image: "/images/python copy.png",
      detail: "Master Python through practical projects.",
      difficulty: "Intermediate",
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
    
  ],
  "Non-IT": [
    {
      id: 31,
      name: "Ethical Hacking",
      image: "/images/hacker.png",
      detail: "Legally breaking into systems to find and fix security vulnerabilities before malicious hackers do.",
      difficulty: "Advanced",
      rating: 4,
      duration: "6 weeks",
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
      duration: "4 weeks",
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
      price: "₹399",
    },
    {
      id: 63,
      name: "Figma Designer",
      image: "/images/figma.png",
      detail: "Learn graphic design using Figma.",
      difficulty: "Advanced",
      rating: 5,
      duration: "8 weeks",
      pdf: "/pdfs/graphic-designing.pdf",
      price: "₹199",
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
      price: "₹6499",
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
      price: "₹6499",
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
      price: "₹6499",
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
    
  ],
};




const difficultyColor = {
  Beginner: "bg-green-100 text-green-800",
  Intermediate: "bg-yellow-100 text-yellow-800",
  Advanced: "bg-red-100 text-red-800",
};

const Courses = () => {
  
  const navigate = useNavigate();
  const [category, setCategory] = useState("Future Geniuses");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const courses = allCourses[category] || [];

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-10 min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="text-center py-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h1 className="text-4xl font-bold">📚 Explore Our Courses</h1>
        <p className="mt-2 text-lg">Choose a category and start learning today!</p>
      </header>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 my-8">
        {["Future Geniuses", "IT", "Non-IT"].map((cat) => (
          <button
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
          </button>
        ))}
      </div>

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
            <div
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
            </div>
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
            <button
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
              </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
