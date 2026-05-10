import React, { useState } from "react";
import { ArrowLeft, Search, Mail, X } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const DirectorySection = ({ title, Icon, data = [] }) => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.empId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedPerson) {
    return (
      <div className="bg-bgCard p-8 rounded-3xl shadow-sm border border-slate-100 animate-fade-in-up">
        <div className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-200">
          <button
            onClick={() => setSelectedPerson(null)}
            className="p-2 bg-bgSection rounded-lg shadow-sm text-textSec hover:text-primary hover:bg-slate-100 transition-all border border-slate-200 hover:-translate-x-1"
          >
            <ArrowLeft size={20} />
          </button>
          <h2 className="text-2xl font-bold text-textHeading">{title} Profile</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/3">
            <img src={selectedPerson.image} alt={selectedPerson.name} className="w-full aspect-square rounded-3xl object-cover shadow-md" />
          </div>
          <div className="w-full lg:w-2/3">
            <h2 className="text-4xl font-extrabold text-textHeading mb-2">{selectedPerson.name}</h2>
            <p className="text-primary font-bold uppercase tracking-widest mb-8">{selectedPerson.position}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-bgSection p-6 rounded-3xl border border-slate-100">
                <span className="text-xs font-bold text-textMuted uppercase mb-1">ID Number</span>
                <p className="text-lg font-bold text-textHeading">{selectedPerson.empId}</p>
              </div>
              <div className="bg-bgSection p-6 rounded-3xl border border-slate-100">
                <span className="text-xs font-bold text-textMuted uppercase mb-1">Department</span>
                <p className="text-lg font-bold text-textHeading">{selectedPerson.department}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="#" className="flex-1 bg-[#0A66C2] text-white py-4 rounded-2xl flex justify-center items-center gap-2 font-bold hover:shadow-lg transition-all"><FaLinkedin size={22} /> LinkedIn</a>
              <a href={`mailto:${selectedPerson.email}`} className="flex-1 bg-slate-800 text-white py-4 rounded-2xl flex justify-center items-center gap-2 font-bold hover:shadow-lg transition-all"><Mail size={22} /> Email</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in-up">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white rounded-xl shadow-sm text-primary border border-slate-100">
            <Icon size={24} />
          </div>
          <h2 className="text-2xl font-bold text-textHeading">{title} Directory</h2>
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-textMuted" size={18} />
          <input
            type="text"
            placeholder="Search by name or ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/40 outline-none shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredData.map((item) => (
          <div
            key={item.empId}
            onClick={() => setSelectedPerson(item)}
            className="bg-bgCard rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden group"
          >
            <div className="h-48 overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-textHeading group-hover:text-primary transition-colors">{item.name}</h3>
              <p className="text-xs font-bold text-primary uppercase tracking-wide mt-1 mb-4">{item.position}</p>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold text-textSec bg-bgSection px-2.5 py-1 rounded-md">ID: {item.empId}</span>
                <span className="text-sm font-bold text-primary">View Profile &rarr;</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectorySection;
