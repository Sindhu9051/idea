import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const course = location.state;

  if (!course) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
          <p className="text-gray-600 mb-6 text-lg">No course selected.</p>
          <button
            onClick={() => navigate("/")}
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-md transition"
          >
            Go Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    
    <>
      <div className="flex items-center justify-center bg-gray-100 px-4 py-7 relative top-12">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
      className=" bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-md shadow-sm transition"
    >
      ← Back
    </button>
    </div>
      {/* Existing content here */}

    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-5">
        
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden">
        {/* LEFT: Payment Summary */}
        <div className="md:w-1/2 bg-gray-900 text-white p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-6">Payment Summary</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between border-b pb-2">
                <span>Course:</span>
                <span>{course.name}</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Date:</span>
                <span>{new Date().toDateString()}</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Duration:</span>
                <span>3 Months</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span>Level:</span>
                <span>Intermediate</span>
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <div className="bg-red-600 text-white text-lg font-bold p-4 rounded-lg text-center">
              Total Price: ₹ {course.price}
            </div>
            <p className="text-xs mt-2 text-center text-gray-300">
              *Price includes all taxes
            </p>
          </div>
        </div>

        {/* RIGHT: Payment Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-xl font-bold text-gray-700 mb-6 text-center">
            Payment Method
          </h2>
          <p></p>

          <div className="flex justify-center gap-4 mb-6">
            <button className="border px-4 py-2 rounded-md flex items-center gap-2 hover:border-indigo-600">
              <img
                src="https://img.icons8.com/color/48/visa.png"
                alt="Visa"
                className="h-6"
              />
              <img
                src="https://img.icons8.com/color/48/mastercard.png"
                alt="MasterCard"
                className="h-6"
              />
            </button>
            <button className="border px-4 py-2 rounded-md flex items-center gap-2 hover:border-indigo-600">
              <img
                src="https://img.icons8.com/color/48/paypal.png"
                alt="PayPal"
                className="h-6"
              />
            </button>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Name on Card
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="xxxx xxxx xxxx xxxx"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  CVV
                </label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Expiration Date
              </label>
              <input
                type="text"
                placeholder="MM / YY"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
            >
              Pay ₹ {course.price}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Payments secured via <span className="font-semibold">Razorpay</span>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default PaymentPage;
