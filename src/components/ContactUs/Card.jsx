import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Card = ({ title, id, Icon, setHoveredCardId }) => {
  return (
    <Link
      to={`/contact/${id}`}
      onMouseEnter={() => setHoveredCardId(id)}
      onMouseLeave={() => setHoveredCardId(null)}
      onClick={() => setHoveredCardId(null)}
      className="group bg-bgCard rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-lightBlue rounded-xl text-primary group-hover:bg-primary-gradient group-hover:text-white transition-all duration-300 shadow-sm [&>svg]:hover:animate-flipIcon">
          <Icon size={24} />
        </div>

        <ArrowUpRight
          size={20}
          className="text-slate-300 group-hover:text-primary transition-colors"
        />
      </div>

      <div>
        <h3 className="text-lg font-bold text-textHeading group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-textSec mt-1">Click to open page</p>
      </div>
    </Link>
  );
};

export default Card;
