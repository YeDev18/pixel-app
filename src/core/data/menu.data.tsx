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
