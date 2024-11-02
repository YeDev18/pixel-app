import { ReactNode } from "react";
import Facebook from "../components/atoms/icons/facebook";
import Instagram from "../components/atoms/icons/instagram";
import Linkedin from "../components/atoms/icons/linkedin";

export interface MenuProps {
	label: string;
	href: string;
	icon?: string;
}

export const Menus: MenuProps[] = [
	{
		label: "A props de nous",
		href: "/about",
	},
	{
		label: "Service",
		href: "",
	},
	{
		label: "Project",
		href: "",
	},
	{
		label: "Blog",
		href: "",
	},

	{
		label: "Contact",
		href: "",
	},
];

export const IconSocials: { label: string; icon: ReactNode }[] = [
	{
		label: "Facebook",
		icon: <Facebook />,
	},
	{
		label: "Instagram",
		icon: <Instagram />,
	},
	{
		label: "Linkedin",
		icon: <Linkedin />,
	},
];
