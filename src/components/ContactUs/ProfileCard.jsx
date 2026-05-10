import React from "react";

const ProfileCard = ({ name, role }) => (
  <div className="bg-bgCard p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
    <div className="w-20 h-20 bg-lightBlue rounded-full mb-4 flex items-center justify-center text-primary text-2xl font-bold border-4 border-white shadow-sm">
      {name.charAt(0)}
    </div>
    
    <h4 className="font-bold text-textHeading text-lg">{name}</h4>
    <p className="text-sm text-textSec mb-5 font-medium">{role}</p>
    
    <button className="bg-primary-gradient text-white px-6 py-2.5 rounded-xl text-sm font-semibold w-full hover:shadow-lg hover:opacity-90 transition-all">
      Contact
    </button>
  </div>
);

export default ProfileCard;
