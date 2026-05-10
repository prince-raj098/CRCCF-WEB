import React from "react";
import { useOutletContext } from "react-router-dom";
import Card from "../../components/ContactUs/Card";
import { LayoutDashboard } from "lucide-react";

const Dashboard = () => {
  const { categories, setHoveredCardId } = useOutletContext();

  return (
    <>
      <header className="mb-8 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="p-3 bg-white rounded-2xl shadow-sm inline-block w-fit">
          <LayoutDashboard size={28} className="text-primary" />
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-textHeading tracking-tight">
            System Overview
          </h1>
          <p className="text-sm text-textSec font-medium mt-1">
            Hover over a module to highlight it, click to open.
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <Card
            key={cat.id}
            title={cat.title}
            id={cat.id}
            Icon={cat.icon}
            setHoveredCardId={setHoveredCardId}
          />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
