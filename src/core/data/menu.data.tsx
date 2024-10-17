export interface MenuProps {
	label: string;
	href?: string;
	icon?: string;
}

export const Menus: MenuProps[] = [
	{
		label: "Service",
		href: "",
	},
	{
		label: "Blog",
		href: "",
	},
	{
		label: "Project",
		href: "",
	},
	{
		label: "Contact",
		href: "",
	},
];

export const IconSocials: { label: string; icon: string }[] = [
	{
		label: "Facebook",
		icon: "mdi:facebook",
	},
	{
		label: "Instagram",
		icon: "mdi:instagram",
	},
	{
		label: "Linkedin",
		icon: "mdi:linkedin",
	},
];
