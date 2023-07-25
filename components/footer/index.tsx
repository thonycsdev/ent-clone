import React from "react";
import { AiFillHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiOutlineTrophy } from "react-icons/ai";
import FooterButton from "../footerButton";
function Footer() {
  return (
    <div className="flex justify-around items-center bg-orange-400 h-16 text-center shadow-2xl ">
      <FooterButton icon={<AiFillHome />} name="INICIO" />
      <FooterButton icon={<CgProfile />} name="PERFIL" />
      <FooterButton icon={<AiOutlineTrophy />} name="RANKING" />
    </div>
  );
}

export default Footer;
