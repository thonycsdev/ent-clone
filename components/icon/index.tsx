import React from "react";

interface IconValueProps {
	value: number;
	iconComponent: React.ReactNode;
}

function IconValue({ iconComponent, value }: IconValueProps) {
	return (
		<div className="flex items-center gap-1">
			{iconComponent}
			<div>:</div>
			{value}
		</div>
	);
}

export default IconValue;
