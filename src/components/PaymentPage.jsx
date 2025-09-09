import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state || { name: "React Course", price: 4999, duration: "3 Months", level: "Intermediate" };

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [isPayClicked, setIsPayClicked] = useState(false);

  const isUserInfoFilled = userName.trim() !== "" && userEmail.trim() !== "";

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleRazorpayPayment = async () => {
    if (!isUserInfoFilled) {
      alert("Please fill all details");
      return;
    }

    setIsPayClicked(true); // Start animation

    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      alert("Razorpay SDK failed to load");
      setIsPayClicked(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:65136/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: course.price, currency: "INR" }),
      });

      const orderData = await res.json();

      const options = {
        key: "rzp_test_REyEr5kmaqo9OQ",
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Edu Platform",
        description: course.name,
        order_id: orderData.id,
        handler: function () {
          setPaymentSuccess(true);
        },
        prefill: { name: userName, email: userEmail },
        theme: { color: "#4F46E5" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setIsPayClicked(false); // Stop animation after checkout closes
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-indigo-100 flex items-center justify-center p-5 relative">
      {paymentSuccess && <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={200} gravity={0.3} />}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-6">

        {/* Payment Summary Card */}
        <div
          className={`md:w-1/2 bg-indigo-600 text-white p-10 rounded-3xl shadow-2xl transform transition-all duration-500 ${
            isPayClicked
              ? "animate-bounce scale-105 shadow-3xl ring-4 ring-indigo-400"
              : "hover:scale-105 hover:shadow-3xl"
          }`}
        >
          <h2 className="text-4xl font-extrabold mb-6">Payment Summary</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex justify-between border-b border-indigo-400 pb-2">
              <span>Course:</span>
              <span>{course.name}</span>
            </li>
            <li className="flex justify-between border-b border-indigo-400 pb-2">
              <span>Date:</span>
              <span>{new Date().toDateString()}</span>
            </li>
            <li className="flex justify-between border-b border-indigo-400 pb-2">
              <span>Duration:</span>
              <span>{course.duration}</span>
            </li>
            <li className="flex justify-between border-b border-indigo-400 pb-2">
              <span>Level:</span>
              <span>{course.level}</span>
            </li>
          </ul>
          <div className="mt-8">
            <div className="bg-white text-indigo-600 text-2xl font-bold p-5 rounded-xl text-center shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              Total: ₹ {course.price}
            </div>
            <p className="text-xs mt-2 text-center text-indigo-200">*All taxes included</p>
          </div>
        </div>

        {/* Payment Form Card */}
        <div className="md:w-1/2 bg-white p-10 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl flex flex-col justify-center">
          {!paymentSuccess ? (
            <>
              <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">Enter Your Details</h2>
              <div className="space-y-5 mb-6">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm transition-all duration-300 hover:shadow-md"
                />
                <input
                  type="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm transition-all duration-300 hover:shadow-md"
                />
              </div>
              <button
                onClick={handleRazorpayPayment}
                disabled={!isUserInfoFilled}
                className={`w-full py-4 rounded-xl font-bold text-white text-lg transition-all duration-500 transform ${
                  !isUserInfoFilled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 hover:scale-105 shadow-lg"
                }`}
              >
                Pay ₹ {course.price} via Razorpay
              </button>
            </>
          ) : (
            <div className="text-center p-10 bg-green-50 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105">
              <h2 className="text-4xl font-bold text-green-600 mb-4">🎉 Payment Successful!</h2>
              <p className="text-gray-700 mb-6">
                Thank you, <span className="font-semibold">{userName}</span>! <br />
                Your payment for <span className="font-semibold">{course.name}</span> has been completed.
              </p>
              <button
                onClick={() => navigate("/")}
                className="bg-indigo-500 hover:bg-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-md"
              >
                Go to Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
