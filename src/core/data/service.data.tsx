import {
	Ads,
	Computer,
	Design,
	Email,
	Graph,
	Marketing,
	Message,
	SEO,
	Sales,
} from "../components/atoms/icons/service.icon";

export type ServiceDataProps = {
	id: number;
	name: string;
	link?: string;
	icon: JSX.Element;
};
export const ServiceData: ServiceDataProps[] = [
	{
		id: 1,
		name: "Web Development",
		link: "web-development",
		icon: <Computer />,
	},
	{
		id: 2,
		name: "Sale & Marketing Audit",
		link: "sale-marketing-audit",
		icon: <Graph />,
	},

	{
		id: 3,
		name: "Marketing Consulting",
		link: "marketing-consulting",
		icon: <Marketing />,
	},

	{
		id: 4,
		name: "Brand Design & Strategy",
		link: "brand-design-strategy",
		icon: <Design />,
	},
	{
		id: 5,
		name: "SMM",
		link: "smm",
		icon: <Message />,
	},
	{
		id: 6,
		name: "Sales Departments from Scratch",
		link: "sales-departments-from-scratch",
		icon: <Sales />,
	},
	{
		id: 7,
		name: "Google Ads",
		link: "google-ads",
		icon: <Ads />,
	},
	{
		id: 9,
		name: "Email Marketing",
		link: "email-marketing",
		icon: <Email />,
	},

	{
		id: 9,
		name: "SEO",
		link: "seo",
		icon: <SEO />,
	},
];
