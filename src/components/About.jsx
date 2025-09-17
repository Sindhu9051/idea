import React from 'react';
import { Helmet } from "react-helmet-async";

const teamMembers = [
  {
    name: 'Sindhu Kumar',
    role: 'CEO & Founder',
    imageUrl: '/images/ceo.png',
  },
  {
    name: 'Subham Raj',
    role: 'Deputy CEO',
    imageUrl: '/images/ceo1.png',
  },
  {
    name: 'Vivek Kumar',
    role: 'Event Organizer',
    imageUrl: '/images/vivek.png',
  },
  {
    name: 'Praveen Kumar Saw',
    role: 'Python Instructor',
    imageUrl: '/images/praveen.png',
  },
  {
    name: 'Nayan Barnwal',
    role: 'Email Support',
    imageUrl: '/images/nayan.jpg',
  },
  {
    name: 'Ankit Kumar',
    role: 'Email Support',
    imageUrl: '/images/ankit.png',
  },
  {
    name: 'Himadri Sarkar',
    role: 'Frontend Instructor',
    imageUrl: '/images/himadri.png',
  },
  {
    name: 'Sonali Kumari',
    role: 'Programming Instructor',
    imageUrl: '/images/sonali.png',
  },
  {
    name: 'Tanmay Gain',
    role: 'Backend Instructor',
    imageUrl: '/images/tanmoy.png',
  },
  
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>Geniuses Factory | Best Coding & AI Learning Platform</title>
        <meta
          name="description"
          content="Learn coding, AI, and robotics at Geniuses Factory."
        />
        <meta
          name="keywords"
          content="Geniuses Factory, coding, AI, robotics"
        />
      </Helmet>
      <div className="bg-white text-gray-900">
        {/* Hero */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-5xl mx-auto text-center px-4">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are a team of professionals committed to building secure, scalable, and user-friendly digital solutions.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to bridge the gap between technology and people. We aim to deliver exceptional results by focusing on security, simplicity, and purpose-driven design.
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold text-center mb-12">Meet the Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-6 text-center"
                >
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h3 className="text-3xl font-bold mb-4">Let's Build Together</h3>
            <p className="text-gray-600 mb-6">
              Want to collaborate with us or have a project in mind? We're ready to talk.
            </p>
            <button className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-blue-700 transition" onClick={() => window.location.href = 'mailto:sindhukumarfrontenddev@gmail.com'}>
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
