import { IconSocials, Menus } from "@/core/data/menu.data";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Logo from "../../atoms/Logo";

const HeadFooter = () => {
	return (
		<div className="text-light-100 flex flex-wrap gap-y-8 items-center max-sm:justify-center max-sm:gap-x-4 justify-between ">
			<div className="flex lg:space-y-3 flex-col max-md:w-screen max-md:items-center max-lg:gap-3 md:flex-row md:items-center lg:flex-col lg:items-start">
				<Logo />
				<p className="text-sm w-fit lg:w-80 max-md:text-center font-medium">
					Bienvenue a Pixel Innov : Marketing par excellence.
					Measurable results.
				</p>
			</div>
			<menu className="flex gap-4 text-base xl:text-lg">
				{Menus.map((menu, index) => {
					return (
						<Link
							href="/"
							key={index}
							className="font-medium  whitespace-nowrap"
						>
							{menu.label}
						</Link>
					);
				})}
			</menu>

			<menu className="flex gap-4">
				{IconSocials.map((social, index) => {
					return (
						<Link
							href="/"
							className="text-3xl xl:text-4xl"
							key={index}
						>
							<Icon icon={social.icon} />
						</Link>
					);
				})}
			</menu>
		</div>
	);
};

export default HeadFooter;
