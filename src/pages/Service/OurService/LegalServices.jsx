import React from "react";
import CompanyMarquee from "../../../components/Service/common/CompanyMarquee";
import LegalServicesKeyboard from "../../../components/Service/legal/LegalServicesKeyboard";
import BackButton from "../../../components/Service/common/BackButton";

const LegalServices = () => {
  return (
    <div className="relative min-h-screen bg-[#F8FAFC] px-4 py-6">
      <BackButton />
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] rounded-3xl shadow-xl mb-8 py-6 px-6 text-center">
          <h1 className="text-white text-3xl sm:text-4xl font-bold">
            Complete Business Legal & Filing Services
          </h1>
          <p className="text-blue-100 text-lg mt-2">
            We offer a complete suite of legal and filing services covering
            company registration, GST returns, annual filings, and other
            compliance needs. Our approach focuses on simplifying
            documentation, reducing complexity, and helping businesses stay
            organized and compliant
          </p>
        </div>

        <div className="mb-6">
          <CompanyMarquee direction="right" />
        </div>

        <LegalServicesKeyboard />

        <div className="mt-6">
          <CompanyMarquee direction="left" />
        </div>
      </div>
    </div>
  );
};

export default LegalServices;
