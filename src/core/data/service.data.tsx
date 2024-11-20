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

type Definition = {
	paragraph: string;
};

export type ServiceDataProps = {
	id: number;
	name: string;
	link?: string;
	icon: JSX.Element;
	definitions?: Definition[];
};
export const ServiceData: ServiceDataProps[] = [
	{
		id: 1,
		name: "Web Development",
		link: "web-development",
		icon: <Computer />,
		definitions: [
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
		],
	},
	{
		id: 2,
		name: "Sale & Marketing Audit",
		link: "sale-marketing-audit",
		icon: <Graph />,
		definitions: [
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
		],
	},

	{
		id: 3,
		name: "Marketing Consulting",
		link: "marketing-consulting",
		icon: <Marketing />,
		definitions: [
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
		],
	},

	{
		id: 4,
		name: "Brand Design & Strategy",
		link: "brand-design-strategy",
		icon: <Design />,
		definitions: [
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
		],
	},
	{
		id: 5,
		name: "SMM",
		link: "smm",
		icon: <Message />,
		definitions: [
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
		],
	},
	{
		id: 6,
		name: "Sales Departments from Scratch",
		link: "sales-departments-from-scratch",
		icon: <Sales />,
		definitions: [
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
		],
	},
	{
		id: 7,
		name: "Google Ads",
		link: "google-ads",
		icon: <Ads />,
		definitions: [
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
		],
	},
	{
		id: 9,
		name: "Email Marketing",
		link: "email-marketing",
		icon: <Email />,
		definitions: [
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
		],
	},

	{
		id: 9,
		name: "SEO",
		link: "seo",
		icon: <SEO />,
		definitions: [
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
			{
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
			},
		],
	},
];
