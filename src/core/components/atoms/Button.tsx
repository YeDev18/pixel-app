import { Icon } from "@iconify/react";
import React from "react";
const Button = ({
	children,
	className,
}: { children: React.ReactNode; className?: string }) => {
	return (
		<button
			className={`${className} flex gap-x-2 text-sm lg:text-base  justify-center items-center w-fit bg-light-100 py-2 lg:py-3 px-4 lg:px-5 rounded-full font-bold  cursor-pointer whitespace-nowrap`}
		>
			{children}
			<span className="bg-black rounded-full p-1 text-white text-lg lg:text-xl">
				<Icon icon="basil:arrow-right-solid" />
			</span>
		</button>
	);
};

export default Button;
