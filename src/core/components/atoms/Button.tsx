import Link from "next/link";
import { ReactNode } from "react";
import ArrowRight from "./icons/arrow.right";

export interface LinkProps {
	children: ReactNode;
	className?: string;
	href?: string;
	// props?: string;
}
const Button = ({ href, children, className, ...props }: LinkProps) => {
	const classes = `flex cursor-pointer group  items-center justify-between gap-4 whitespace-nowrap rounded-full bg-light-100 px-4 py-2 text-sm font-bold lg:px-5 hover:button_shadow  lg:py-3 lg:text-base`;

	const renderLink = () => (
		<Link
			href={href ?? "/"}
			className={`${className} ${classes}`}
			{...props}
		>
			{children}
			<span className="rounded-full bg-black p-1 text-lg text-white transition-all group-hover:rotate-180 lg:text-xl">
				<ArrowRight />
			</span>
		</Link>
	);
	return renderLink();
};

export default Button;
