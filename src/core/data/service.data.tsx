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
	icon: JSX.Element;
};
export const ServiceData: ServiceDataProps[] = [
	{
		id: 1,
		name: "Web Development",
		icon: <Computer />,
	},
	{
		id: 2,
		name: "Sale & Marketing Audit",
		icon: <Graph />,
	},

	{
		id: 3,
		name: "Marketing Consulting",
		icon: <Marketing />,
	},

	{
		id: 4,

		name: "Brand Design & Strategy",
		icon: <Design />,
	},
	// {
	// 	id: 5,
	// 	name: "SMM",
	// 	icon: <Message />,
	// },
	// {
	// 	id: 6,
	// 	name: "Sales Departments from Scratch",
	// 	icon: <Sales />,
	// },
	// {
	// 	id: 7,
	// 	name: "Google Ads",
	// 	icon: <Ads />,
	// },
	// {
	// 	id: 9,
	// 	name: "Email Marketing",
	// 	icon: <Email />,
	// },

	// {
	// 	id: 9,
	// 	name: "SEO",
	// 	icon: <SEO />,
	// },
];
