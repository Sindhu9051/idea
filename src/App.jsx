import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AllCrs from './components/AllCrs';
import VerifyCertificate from './components/VerifyCertificate';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';





import WebinarForm from './components/Webinar';
import BootcampForm from './components/Bootcamp';
import Courses from './components/Courses';
import InternshipForm from './components/Internship';





import PaymentPage from "./components/PaymentPage";







function App() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allcrs" element={<AllCrs />} />
        <Route path="/verify-certificates" element={<VerifyCertificate />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />


        <Route path="/webinar" element={<WebinarForm />} />
        <Route path="/bootcamp" element={<BootcampForm />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/internship" element={<InternshipForm />} />




        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
