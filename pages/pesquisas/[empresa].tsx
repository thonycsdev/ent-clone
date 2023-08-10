import AccordionMain from "@/root/components/UI/Accordion";
import React from "react";
import { useRouter } from "next/router";
import {BsArrowLeft} from "react-icons//bs"
import ButtonWithIconLeft from "@/root/components/UI/ButtonWithIconLeft";
function Pesquisas() {
	const router = useRouter();
	return <div className="w-4/5 mx-auto mt-14 rounded-3xl">
		<ButtonWithIconLeft onClick={router.back} reactIconComponent={<BsArrowLeft/>}>
			Voltar
		</ButtonWithIconLeft>
		<AccordionMain/>
	</div>;
}

export default Pesquisas;
