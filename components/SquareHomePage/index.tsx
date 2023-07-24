import React from "react";
import { BsSearch } from "react-icons/bs";

interface SquareHomePageProps {
  icon: React.ReactNode;
  name: string;
  colorBgClass: string;
}

function SquareHomePage({ colorBgClass, icon, name }: SquareHomePageProps) {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-2 ${colorBgClass} w-32 h-32 rounded-2xl transition-all hover:scale-110`}
    >
      {icon}
      {name}
    </div>
  );
}

export default SquareHomePage;
