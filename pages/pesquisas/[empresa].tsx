import { useRouter } from "next/router";
import React from "react";

function Pesquisas() {
	const router = useRouter();
	return <div>{router.query.empresa}</div>;
}

export default Pesquisas;
