import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-white text-[#2563EB] px-4 py-2 rounded-xl shadow-md hover:bg-[#DBEAFE] transition"
    >
      <ArrowLeft className="w-5 h-5" />
      <span className="font-semibold text-sm">Back</span>
    </button>
  );
};

export default BackButton;
