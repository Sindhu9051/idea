import React from 'react';
import { useNavigate } from 'react-router-dom';


const AllCrs = () => {

  const navigate = useNavigate();

  return (
    <div className="font-sans text-gray-900">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Learn Without <span className="text-orange-500">Limits</span>
            </h1>
            <p className="text-lg text-gray-300">
              Build your future with 200+ hands-on, industry-ready courses. Learn from top experts and get real-world experience.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition" onClick={() => window.location.href='/courses'}>
                Start Learning
              </button>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                  <img src="/images/user1.jpg" alt="user1" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="/images/user2.jpg" alt="user2" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="/images/user3.jpg" alt="user3" className="w-10 h-10 rounded-full border-2 border-white" />
                </div>
                <span className="text-sm text-gray-400">+1,200 students onboard</span>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-sm mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl text-center hover:scale-105 transition">
              <img src="/images/pic.png" alt="Instructor" className="w-40 h-auto mx-auto mb-4 rounded-lg -ms-1" />
              <p className="text-2xl font-bold">200+ <span className="text-sm font-normal text-gray-400">Courses</span></p>
              <div className="flex justify-center mt-6 space-x-2">
                <span className="w-4 h-4 bg-white rounded-full"></span>
                <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
                <span className="w-4 h-4 bg-white rounded-full"></span>
                <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
              </div>
            </div>
            <div className="absolute -top-14 right-0 bg-orange-600 text-white px-4 py-3 rounded-xl shadow-xl w-48 text-center">
              <img src="/images/pic.png" alt="Instructor" className="w-32 h-auto mx-auto mb-2 rounded-lg" />
              <p className="text-lg font-bold">JANE</p>
              <p className="text-xs">Data Scientist, Google</p>
            </div>
          </div>
        </div>
      </section>


      {/* COURSE CARDS SECTION */}
      <section>
        <div className="max-w-7xl mx-auto py-20 px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center mb-14">Connect with our Courses, Trainings and Internships Programs</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Free Webinar</h3>
              <p className="text-sm text-gray-600">Join our free webinars to learn about the latest trends and technologies in the industry. Offer for Random 20 students get free Internship with Certificates.</p>
              <button className="cursor-pointer mt-4 bg-[#864993] text-white px-4 py-2 rounded-md" onClick={() => navigate('/webinar')}>Webinar Register</button>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Free Bootcamps + free Certificates</h3>
              <p className="text-sm text-gray-600">Join our free bootcamps to gain hands-on experience and earn certificates upon completion. If any body have complete the bootcamp then 10 lucky students they will get free internship with certificates.</p>
              <button className="cursor-pointer mt-4 bg-[#864993] text-white px-4 py-2 rounded-md" onClick={() => navigate('/bootcamp')}>Register Now</button>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Courses + Certification</h3>
              <p className="text-sm text-gray-600">We have a wide range of courses available, from kids to adults and from non-IT to IT people and expert teachers. And we also have a large support team who will help you in your problems..</p>
              <button className="cursor-pointer mt-4 bg-[#864993] text-white px-4 py-2 rounded-md" onClick={() => navigate('/courses')}>Explore Courses</button>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Internship + Certification</h3>
              <p className="text-sm text-gray-600">Get real-world experience through hands-on internships and earn an industry-recognized certification. Boost your resume and stand out in the job market with practical skills that matter.</p>
              <button className="cursor-pointer mt-4 bg-[#864993] text-white px-4 py-2 rounded-md" onClick={() => navigate('/internship')}>Register Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AllCrs;
