import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import AllCrs from './components/AllCrs';
import VerifyCertificate from './components/VerifyCertificate';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { HelmetProvider } from "react-helmet-async";

import Courses from './components/Courses';
import PaymentPage from "./components/PaymentPage";

import TermsAndConditions from './components/Terms&Conditions';
import RefundPolicy from './components/Refund&Cancellation';
import PrivacyPolicy from './components/Privacy&Policy';

function App() {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <Navbar />
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/allcrs" element={<AllCrs />} />
          <Route path="/verify-certificates" element={<VerifyCertificate />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </HelmetProvider>
      <Footer />
    </div>
  );
}

export default App;
