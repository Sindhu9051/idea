import React, { useState, useEffect } from "react";
import { Calendar, FileText, ArrowUp } from "lucide-react";

export default function TermsAndConditions() {
  const [showScroll, setShowScroll] = useState(false);

  // Show scroll-to-top button
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 250);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-12 lg:px-20 relative">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        
        {/* Sidebar Table of Contents */}
        <aside className="hidden lg:block col-span-1 sticky top-20 h-fit bg-white shadow-sm border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <FileText size={20} className="mr-2 text-blue-600" />
            Contents
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li><a href="#intro" className="hover:text-blue-600">Introduction</a></li>
            <li><a href="#usage" className="hover:text-blue-600">Conditions of Use</a></li>
            <li><a href="#legal" className="hover:text-blue-600">Legal & Jurisdiction</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="col-span-3 bg-white shadow-md rounded-2xl border border-gray-200 overflow-hidden">
          
          {/* Header */}
          <div className="px-8 py-8 border-b bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-900">Terms & Conditions</h1>
            <div className="flex items-center text-sm text-gray-600 mt-3">
              <Calendar size={16} className="mr-2" />
              <span>Last updated on: 26-08-2025 02:09:35</span>
            </div>
          </div>

          {/* Body */}
          <div className="p-10 space-y-12 text-gray-700 leading-relaxed">
            
            {/* Introduction */}
            <section id="intro">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p>
                These Terms and Conditions, along with our privacy policy and
                other terms (“Terms”), constitute a binding agreement between{" "}
                <span className="font-semibold text-blue-700">GENIUSES FACTORY</span> 
                (“we”, “us”, “our”) and you (“you”, “your”). They govern your
                use of our website, goods, or services (collectively, “Services”).
              </p>
              <p className="mt-4">
                By accessing our website or using our Services, you agree that
                you have read, understood, and accepted these Terms. We may
                update them periodically, and it is your responsibility to stay
                informed.
              </p>
            </section>

            {/* Conditions of Use */}
            <section id="usage">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Conditions of Use</h2>
              <ul className="list-disc pl-6 space-y-3 marker:text-blue-600">
                <li>You must provide accurate and complete information during registration.</li>
                <li>We do not guarantee the accuracy, timeliness, or suitability of information provided.</li>
                <li>Your use of our Services is at your own risk and discretion.</li>
                <li>All intellectual property rights remain with us; no rights are transferred.</li>
                <li>Unauthorized use may result in legal consequences.</li>
                <li>Payments must be made in accordance with our policies.</li>
                <li>You must not use our Services for unlawful activities.</li>
                <li>Third-party links are subject to their own terms and policies.</li>
                <li>Transactions are legally binding once initiated.</li>
                <li>Refunds (if applicable) follow our refund policy.</li>
                <li>No liability arises from force majeure events.</li>
                <li>We may modify or discontinue Services at any time without notice.</li>
                <li>If you try to misbehave with any teacher or students, you will be immediately expelled from any course, classes or our internship program without any notice and no money will be refunded and we or any faculty will not be held responsible for this.</li>
                <li>We may suspend or terminate your access for violations of these Terms.</li>
              </ul>
            </section>

            {/* Legal Section */}
            <section id="legal">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Legal & Jurisdiction</h2>
              <ul className="list-disc pl-6 space-y-3 marker:text-blue-600">
                <li>These Terms are governed by the laws of India.</li>
                <li>All disputes fall under the exclusive jurisdiction of courts in Jharkhand.</li>
              </ul>
            </section>

            {/* Contact */}
            <section id="contact">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact</h2>
              <p>
                If you have any concerns or queries about these Terms, please
                reach out using the contact details provided on this website.
              </p>
            </section>
          </div>

          {/* Footer Acknowledgement */}
          <div className="bg-gray-50 px-8 py-6 border-t text-sm text-gray-600 text-center">
            By continuing to use this website, you confirm that you have read,
            understood, and agreed to these Terms & Conditions.
          </div>
        </main>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
