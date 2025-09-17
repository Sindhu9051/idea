import { useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const VerifyCertificate = () => {
  const [certificateId, setcertificateId] = useState("");
  const [certificateData, setCertificateData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const bgRef = useRef();

  // Parallax background movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;

      if (bgRef.current) {
        bgRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setCertificateData(null);
  setLoading(true);

  try {
    // ✅ FIX: singular route "certificate"
    const response = await axios.post(`https://api.geniusesfactory.com/api/certificate`, {
      certificateId,
    });

    console.log("✅ Response:", response.data);

    if (response.data.success) {
      setCertificateData(response.data.data);
      setError("");
    } else {
      setError("⚠️ " + (response.data.error || "Certificate not found"));
    }
  } catch (err) {
    console.error("❌ Axios Error:", err);

    if (err.response && err.response.data && err.response.data.error) {
      setError("⚠️ " + err.response.data.error);
    } else if (err.message) {
      setError("⚠️ " + err.message);
    } else {
      setError("⚠️ Server error. Please try again later.");
    }
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0f172a] text-white">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e293b] animate-gradient-x bg-[length:400%_400%]"></div>

      {/* Cursor-move parallax tech background */}
      <div
        ref={bgRef}
        className="absolute -z-10 top-0 left-0 w-full h-full pointer-events-none transition-transform duration-75 ease-out"
      >
        <div className="w-full h-full bg-cover opacity-10 mix-blend-lighten"></div>
      </div>

      {/* Main container */}
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="relative w-full max-w-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl p-8 md:p-10 overflow-hidden">

          {/* Glow ring effect */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-2xl opacity-30"></div>

          {/* Main content */}
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-sm">
                🎓 Certificate Verification
              </h1>
              <p className="text-gray-300 text-sm mt-2">
                Confirm the authenticity of a certificate by entering its ID.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="text"
                value={certificateId}
                onChange={(e) => setcertificateId(e.target.value)}
                placeholder="Enter Certificate No"
                className="flex-1 px-4 py-3 rounded-md text-sm bg-white/90 text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-3 w-full sm:w-auto text-white text-sm font-semibold rounded-md transition-all duration-300 ${
                  loading
                    ? "bg-indigo-400 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-700"
                }`}
              >
                {loading ? "Verifying..." : "Verify"}
              </button>
            </form>

            {/* Error Message */}
            {error && (
              <div className="mt-6 text-sm bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-md">
                {error}
              </div>
            )}

            {/* Verified Certificate Details */}
            {certificateData && (
              <div className="mt-10 bg-white text-gray-900 border border-gray-300 rounded-lg p-6 shadow-md">
                <h2 className="text-xl font-bold text-green-600 text-center">
                  ✅ Certificate Verified
                </h2>
                <p className="text-gray-400 text-center text-sm mb-6">
                  The following certificate is valid and verified.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
                  {/* Common Fields */}
                  <div>
                        <p className="text-gray-500 font-semibold">Name</p>
                        <p>{certificateData.name}</p>
                  </div>
                  <div>
                        <p className="text-gray-500 font-semibold">Certificate ID</p>
                        <p>{certificateData._id}</p>
                  </div>
                  <div>
                        <p className="text-gray-500 font-semibold">Issued Date</p>
                        <p>{new Date(certificateData.issuedDate).toLocaleDateString()}</p>
                  </div>
                    

                  {/* Internship Section */}
                  {certificateData.internship && (
                    <>
                        
                      <div>
                            <p className="text-gray-500 font-semibold">Internship Domain</p>
                            <p>{certificateData.internship}</p>
                      </div>
                      {certificateData.duration && (
                        <>
                          <div>
                              <p className="text-gray-500 font-semibold">Internship Duration</p>
                              <p>{certificateData.duration} month(s)</p>
                          </div>
                          <div>
                              <p className="text-gray-500 font-semibold">Mentor</p>
                              <p>{certificateData.mentor}</p>
                          </div>
                        </>
                      )}
                    </>
                  )}

                  {/* Course Section */}
                  {certificateData.course && (
                    <>
                      <div className="sm:col-span-2">
                        <p className="text-gray-500 font-semibold">Course</p>
                        <p>{certificateData.course}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 font-semibold">Mentor</p>
                        <p>{certificateData.mentor}</p>
                      </div>
                    </>
                  )}

                  {/* Job Section */}
                  {certificateData.job && (
                  <>
                      <div>
                      <p className="text-gray-500 font-semibold">Job Role</p>
                      <p>{certificateData.job}</p>
                      </div>
                      <div>
                      <p className="text-gray-500 font-semibold">Company</p>
                      <p>{certificateData.company}</p>
                      </div>
                      <div>
                      <p className="text-gray-500 font-semibold">Location</p>
                      <p>{certificateData.location}</p>
                      </div>
                  </>
                  )}
                </div>
                        <div className="mt-8 text-center">
                          <p className="text-gray-500 font-semibold">If you need more details regarding this certificate / view certificate pdf, please fill out the link given below and contact us.</p>
                          <h3 className="text-blue-500 hover:underline cursor-pointer" onClick={() => {window.location.href = 'mailto:sindhukumarfrontenddev@gmail.com'}}>Contact Us</h3>
                        </div>
                        <p className="text-gray-500 font-semibold text-center mt-5">Thank you for verifying your certificate with us!</p>

              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyCertificate;
