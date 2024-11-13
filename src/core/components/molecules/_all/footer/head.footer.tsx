import { Logo } from "@/core/components/atoms/logo";
import { IconSocials, Menus } from "@/core/data/menu.data";
import Link from "next/link";
const HeadFooter = () => {
	return (
		<div className="flex flex-wrap items-center justify-between gap-y-8 text-light-100 max-sm:justify-center max-sm:gap-x-4 ">
			<div className="flex flex-col max-lg:gap-3 max-md:w-screen max-md:items-center md:flex-row md:items-center lg:flex-col lg:items-start lg:space-y-3">
				<Logo />
				<p className="w-fit text-sm font-medium max-md:text-center lg:w-80">
					Bienvenue a Pixel Innov : Marketing par excellence.
					Measurable results.
				</p>
			</div>
			<menu className="flex gap-4 text-base xl:text-lg">
				{Menus.map((menu, index) => {
					return (
						<Link
							href={menu.href}
							key={index}
							className="whitespace-nowrap  font-medium transition-all hover:opacity-60"
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
							{social.icon}
						</Link>
					);
				})}
			</menu>
		</div>
	);
};

export default HeadFooter;
