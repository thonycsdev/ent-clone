import {
  Drawer,
  DrawerBody,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineHome, AiOutlineTrophy } from "react-icons/ai";
import { FaArrowUp } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import MenuItensButton from "../MenuIconsButtons";
import { BiStore } from "react-icons/bi";
function Footer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div
      onClick={onOpen}
      className="flex justify-around transition-all duration-150 items-center bg-orange-400 h-14 text-center shadow-2xl w-full "
    >
      <div className="flex flex-col items-center">
        <FaArrowUp />
        MENU
      </div>
      <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
        <DrawerContent w={"512px"} mx={"auto"}>
          <DrawerBody className="bg-orange-400 flex flex-col items-center gap-5 text-black">
            <MenuItensButton
              iconComponent={<AiOutlineHome />}
              iconName="HOME"
            />
            <MenuItensButton iconComponent={<CgProfile />} iconName="PERFIL" />
            <MenuItensButton iconComponent={<BiStore />} iconName="LOJA" />
            <MenuItensButton
              iconComponent={<AiOutlineTrophy />}
              iconName="RANKING"
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

//fazer uma nova interface para o footer capaz de subir o menu ao ser clicado

export default Footer;
