import { Icon } from "@iconify/react";
// import { cn } from "@/lib/utils";
import React from "react";
const Button = ({
	children,
	className,
}: { children: React.ReactNode; className?: string }) => {
	return (
		<button
			className={`${className} flex gap-x-2  justify-center items-center w-fit bg-light-100 py-3 px-5 rounded-full font-bold  cursor-pointer whitespace-nowrap`}
		>
			{children}
			<span className="bg-black rounded-full p-1 text-white text-xl">
				<Icon icon="basil:arrow-right-solid" />
			</span>
		</button>
	);
};

export default Button;
