import React from "react";
import { AiFillHome } from "react-icons/ai";

interface FooterBottonProps {
  icon: React.ReactNode;
  name: string;
}

function FooterButton({ icon, name }: FooterBottonProps) {
  return (
    <div className=" flex flex-col items-center rounded-sm w-40 py-1 border-black transition-all hover:border-b-4">
      {icon}
      {name}
    </div>
  );
}

export default FooterButton;
