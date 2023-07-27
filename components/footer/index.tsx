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
import { useRouter } from "next/router";
function Footer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
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
              onClick={() => router.push("/")}
              iconComponent={<AiOutlineHome />}
              iconName="HOME"
            />
            <MenuItensButton
              iconComponent={<CgProfile />}
              iconName="PERFIL"
              onClick={() => router.push("/profile")}
            />
            <MenuItensButton
              iconComponent={<BiStore />}
              iconName="LOJA"
              onClick={() => router.push("/store")}
            />
            <MenuItensButton
              iconComponent={<AiOutlineTrophy />}
              iconName="RANKING"
              onClick={() => router.push("/ranking")}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Footer;
