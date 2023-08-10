import React from 'react'
import {BsArrowLeft} from "react-icons//bs"

type ButtonWithIconLeftProps = {
	onClick: () => void;
	reactIconComponent: React.ReactNode;
	children: React.ReactNode;
	color?: string;
}

function ButtonWithIconLeft({onClick, reactIconComponent, children}: ButtonWithIconLeftProps) {
	return (
		<div onClick={onClick} className="mb-7 flex items-center justify-center gap-2 border border-solid w-28 bg-orange-300 rounded-3xl p-1 transition-all duration-100 hover:bg-orange-400 hover:rounded-lg">
			{reactIconComponent}
			{children}
		</div>	)
}

export default ButtonWithIconLeft