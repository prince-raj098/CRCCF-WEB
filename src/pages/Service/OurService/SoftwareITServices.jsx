import React from "react";
import CompanyMarquee from "../../../components/Service/common/CompanyMarquee";
import SoftwareITKeyboard from "../../../components/Service/softwareIT/SoftwareITKeyboard";
import BackButton from "../../../components/Service/common/BackButton";

const SoftwareITServices = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 py-6">
      <BackButton />
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] rounded-3xl shadow-xl mb-8 py-8 px-6 text-center">
          <h1 className="text-white text-3xl sm:text-4xl font-bold">
            Innovative Software & IT Solutions
          </h1>
          <p className="text-blue-100 text-lg mt-2">
            We deliver smart, user-focused software and modern IT solutions
            designed to improve efficiency and digital experiences. Our services
            help businesses adapt, grow, and succeed in a technology-driven
            world.
          </p>
        </div>

        <div className="mb-6">
          <CompanyMarquee direction="right" />
        </div>

        <SoftwareITKeyboard />

        <div className="mt-6">
          <CompanyMarquee direction="left" />
        </div>
      </div>
    </div>
  );
};

export default SoftwareITServices;
