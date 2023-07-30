import { useRouter } from "next/router";
import React from "react";

function Pesquisas() {
	const router = useRouter();
	console.log();
	return <div>{router.query.empresa}</div>;
}

export default Pesquisas;
