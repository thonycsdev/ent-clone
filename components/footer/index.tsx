import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
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

	const handleOnClick = (path: string) => {
		onClose();
		router.push(path);
	};
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
				<DrawerOverlay background={"-moz-initial"} />
				<DrawerContent w={"512px"} mx={"auto"}>
					<DrawerBody className="bg-orange-400 flex flex-col items-center gap-5 text-black">
						<MenuItensButton
							onClick={() => handleOnClick("/")}
							iconComponent={<AiOutlineHome />}
							iconName="HOME"
						/>
						<MenuItensButton
							iconComponent={<CgProfile />}
							iconName="PERFIL"
							onClick={() => handleOnClick("/profile")}
						/>
						<MenuItensButton
							iconComponent={<BiStore />}
							iconName="LOJA"
							onClick={() => handleOnClick("/store")}
						/>
						<MenuItensButton
							iconComponent={<AiOutlineTrophy />}
							iconName="RANKING"
							onClick={() => handleOnClick("/ranking")}
						/>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</div>
	);
}

export default Footer;
