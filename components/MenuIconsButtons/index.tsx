import React from "react";
import { AiOutlineHome } from "react-icons/ai";

interface MenuIconsButtonProps {
  iconName: string;
  iconComponent: React.ReactNode;
}
function MenuItensButton({ iconComponent, iconName }: MenuIconsButtonProps) {
  return (
    <div className="flex flex-col items-center hover:border-b-white border-b-2">
      {iconComponent}
      {iconName}
    </div>
  );
}

export default MenuItensButton;
