import React from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import {motion} from 'framer-motion'

const fadeInUp = {
hidden: { opacity: 0, y: 40 },
visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};


const fadeInLeft = {
hidden: { opacity: 0, x: -60 },
visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};


const fadeInRight = {
hidden: { opacity: 0, x: 60 },
visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};




const AllCrs = () => {

  const navigate = useNavigate();

  return (
    <div className="font-sans text-gray-900">
      {/* HERO SECTION */}
      <motion.section className="bg-gradient-to-br from-black to-gray-900 text-white py-40 px-6 md:px-12" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="flex-1 space-y-6">
            <motion.h1 className="text-4xl md:text-6xl font-extrabold leading-tight" variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Learn Without <span className="text-orange-500">Limits</span>
            </motion.h1>
            <motion.p className="text-lg text-gray-300" variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Build your future with 20+ hands-on, industry-ready courses. Learn from top experts and get real-world experience.
            </motion.p>
            <div className="flex flex-wrap items-center gap-4">
              <motion.button className="cursor-pointer bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transition" onClick={() => window.location.href='/courses'} whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Start Learning
              </motion.button>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                  <img src="/images/user1.jpg" alt="user1" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="/images/user2.jpg" alt="user2" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="/images/user3.jpg" alt="user3" className="w-10 h-10 rounded-full border-2 border-white" />
                </div>
                <span className="text-sm text-gray-400">1,200+ students onboard</span>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-sm mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl text-center hover:scale-105 transition">
              <motion.img src="/images/ceo1.png" alt="Instructor" className="w-40 h-auto mx-auto mb-4 backdrop-blur-md rounded-lg -ms-1 hover:scale-105" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} />
              <p className="text-2xl font-bold">20+ <span className="text-sm font-normal text-gray-400">Courses</span></p>
              <div className="flex justify-center mt-6 space-x-2">
                <span className="w-4 h-4 bg-white rounded-full"></span>
                <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
                <span className="w-4 h-4 bg-white rounded-full"></span>
                <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
              </div>
            </div>
            <motion.div className="absolute -top-14 right-0 bg-orange-600 text-white px-4 py-3 rounded-xl shadow-xl w-48 text-center hover:scale-105" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.img src="/images/ceo.png" alt="Instructor" className="w-32 h-50 mx-auto mb-2 rounded-lg" variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} />
              <p className="text-lg font-bold">SINDHU KUMAR</p>
              <p className="text-xs">CEO & FOUNDER</p>
            </motion.div>
          </div>
        </div>
      </motion.section>


      {/* COURSE CARDS SECTION */}
      <section>
        <div className="max-w-7xl mx-auto py-20 px-6 md:px-12">
          <motion.h2 className="text-4xl font-bold text-center mb-14" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>Connect with our Courses, Trainings and Internships Programs</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <motion.div className="bg-white rounded-2xl shadow-lg p-6" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}>
              <h3 className="text-xl font-semibold mb-2">Free Bootcamps + free Certificates</h3>
              <p className="text-sm text-gray-600">Join our free bootcamps to gain hands-on experience and earn certificates upon completion. If any body have complete the bootcamp then 10 lucky students they will get free internship with certificates.</p>
              <motion.button
                className="cursor-pointer mt-4 bg-[#864993] text-white px-4 py-2 rounded-md"
                onClick={() => window.open('https://forms.gle/wKxbWAuVGF7u55EL9', '_blank')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Register Now
              </motion.button>

            </motion.div>
            <motion.div className="bg-white rounded-2xl shadow-lg p-6" variants={fadeInRight} initial="hidden" whileInView="visible" viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}>
              <h3 className="text-xl font-semibold mb-2">Courses + Certification</h3>
              <p className="text-sm text-gray-600">We have a wide range of courses available, from kids to adults and from non-IT to IT people and expert teachers. And we also have a large support team who will help you in your problems..</p>
              <motion.button className="cursor-pointer mt-4 bg-[#864993] text-white px-4 py-2 rounded-md" onClick={() => navigate('/courses')} whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>Explore Courses</motion.button>
            </motion.div>
            <motion.div className="bg-white rounded-2xl shadow-lg p-6" variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}>
              <h3 className="text-xl font-semibold mb-2">Internship + Certification</h3>
              <p className="text-sm text-gray-600">Get real-world experience through hands-on internships and earn an industry-recognized certification. Boost your resume and stand out in the job market with practical skills that matter.</p>
              <motion.button
                className="cursor-pointer mt-4 bg-[#864993] text-white px-4 py-2 rounded-md"
                onClick={() => window.open('https://forms.gle/9RzAC6wqiP9KZca17', '_blank')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Register Now
              </motion.button>

            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AllCrs;
