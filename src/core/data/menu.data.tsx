import { ReactNode } from "react";
import Facebook from "../components/atoms/icons/facebook";
import Instagram from "../components/atoms/icons/instagram";
import Linkedin from "../components/atoms/icons/linkedin";

type Definition = {
	paragraph: string;
};
export interface MenuProps {
	label: string;
	href: string;
	icon?: string;
	definition?: Definition[];
}

export const Menus: MenuProps[] = [
	{
		label: "A props de nous",
		href: "/about",
	},
	{
		label: "Service",
		href: "/service",
	},
	{
		label: "Projet",
		href: "/projet",
	},
	{
		label: "Blog",
		href: "/blog",
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
