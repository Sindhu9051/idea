import React from "react";
import { ShieldCheck } from "lucide-react"; // install lucide-react if not already

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-6 md:px-16">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <ShieldCheck className="w-10 h-10 text-blue-600" />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Privacy Policy
          </h1>
        </div>

        <p className="text-gray-600 mb-6">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you use
          our services. Please read this policy carefully.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              1. Information We Collect
            </h2>
            <p className="text-gray-600">
              We may collect personal information such as your name, email
              address, and payment details, as well as non-personal information
              such as browser type, device, and usage data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600">
              We use the information we collect to improve our services,
              personalize user experience, process payments, communicate with
              you, and ensure security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              3. Sharing of Information
            </h2>
            <p className="text-gray-600">
              We do not sell or rent your personal data. We may share
              information with trusted third parties who assist in operating our
              services, conducting business, or serving you, under strict
              confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              4. Data Security
            </h2>
            <p className="text-gray-600">
              We implement security measures to protect your information from
              unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the internet is 100%
              secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              5. Your Rights
            </h2>
            <p className="text-gray-600">
              You have the right to access, correct, or delete your personal
              data. You may also opt-out of receiving communications from us at
              any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              6. Changes to This Policy
            </h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated date at the bottom.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-10 border-t pt-6 text-sm text-gray-500">
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a
              href="mailto:support@example.com"
              className="text-blue-600 hover:underline"
            >
              support@example.com
            </a>
            .
          </p>
          <p className="mt-2">Last updated: August 2025</p>
        </div>
      </div>
    </div>
  );
}
