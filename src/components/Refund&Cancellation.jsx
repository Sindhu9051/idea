import React from "react";
import { ShieldCheck, Info, AlertCircle } from "lucide-react";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-6 md:px-16">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10">
        {/* Header */}
        <div className="text-center mb-10">
          <ShieldCheck className="mx-auto w-14 h-14 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800 mt-4">Refund Policy</h1>
          <p className="text-gray-500 mt-2">
            Clear, transparent, and student-friendly refund guidelines.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">1. Eligibility for Refund</h2>
            <p className="text-gray-600 leading-relaxed">
                Refunds only apply to double purchases of the same course online made within <span className="font-semibold">7 days</span> of the original enrollment date</p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">2. Non-Refundable Items</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>If you purchase anything from our organization, like Pendrive, or any other item then it is non-refundable.</li>
              <li>If refunds are not available if purchased more than once.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">3. Process of Refund</h2>
            <p className="text-gray-600 leading-relaxed">
              To initiate a refund, please contact our support team at <a href="mailto:support@example.com" className="text-blue-600 underline">support@example.com</a>. 
              Once approved, refunds will be processed within <span className="font-semibold">7-10 business days</span> back to the original payment method.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">4. Late or Missing Refunds</h2>
            <p className="text-gray-600 leading-relaxed">
              If you haven’t received your refund within the specified time, first check with your bank or payment provider. 
              If the issue persists, contact us immediately for assistance.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-3">5. Contact Information</h2>
            <p className="text-gray-600 leading-relaxed">
              For further questions regarding our refund policy, feel free to reach us at:
            </p>
            <p className="mt-2 text-gray-700 font-medium">📧 support@example.com</p>
            <p className="text-gray-700 font-medium">📞 +1 (123) 456-7890</p>
          </div>
        </div>

        {/* Note */}
        <div className="mt-10 p-5 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-yellow-500 mt-1" />
          <p className="text-sm text-yellow-700">
            Please note: This policy may be updated from time to time. We encourage students to review it periodically.
          </p>
        </div>
      </div>
    </div>
  );
}
