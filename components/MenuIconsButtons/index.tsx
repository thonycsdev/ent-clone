import React, { ComponentProps } from "react";
import { AiOutlineHome } from "react-icons/ai";

interface MenuIconsButtonProps {
  iconName: string;
  iconComponent: React.ReactNode;
  onClick: () => void;
}
function MenuItensButton({
  iconComponent,
  iconName,
  onClick,
}: MenuIconsButtonProps) {
  return (
    <div
      className="flex flex-col items-center hover:border-b-white border-b-2"
      onClick={onClick}
    >
      {iconComponent}
      {iconName}
    </div>
  );
}

export default MenuItensButton;
