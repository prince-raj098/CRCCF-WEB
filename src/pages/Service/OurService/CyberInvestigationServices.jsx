import React from "react";
import { useNavigate } from "react-router-dom";

const CyberInvestigationServices = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 mt-6">
          <h1 className="text-3xl font-bold text-[#0F172A] mb-4">
            Cyber Investigation Services
          </h1>
          <p className="text-[#475569] text-lg leading-8">
            Our expert team provides forensic analysis, digital investigation
            support, and technical assistance for cyber crime cases.
          </p>
          <button
            onClick={() => navigate("/services")}
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
          >
            Back to Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default CyberInvestigationServices;
