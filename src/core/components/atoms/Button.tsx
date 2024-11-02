import { ButtonHTMLAttributes, ReactNode } from "react";
import ArrowRight from "./icons/arrow.right";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	className?: string;
	props?: string;
}
const Button = ({ children, className }: ButtonProps) => {
	return (
		<button
			className={`${className} flex cursor-pointer items-center justify-between gap-4 whitespace-nowrap rounded-full bg-light-100 px-4 py-2 text-sm font-bold lg:px-5  lg:py-3 lg:text-base`}
		>
			{children}
			<span className="rounded-full bg-black p-1 text-lg text-white lg:text-xl">
				<ArrowRight />
			</span>
		</button>
	);
};

export default Button;
