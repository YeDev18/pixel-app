import {
	Computer,
	Design,
	Graph,
	Marketing,
} from "../components/atoms/icons/service.icon";

type Definition = {
	paragraph: string;
};
type CardProps = {
	title: string;
	paragraph: string;
	icon: JSX.Element;
};

export type ServiceDataProps = {
	id: number;
	name: string;
	link?: string;
	icon: JSX.Element;
	definitions?: Definition[];
	card?: CardProps[];
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
		card: [
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe.`,
				icon: <Computer />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
				icon: <Computer />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe.`,
				icon: <Computer />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
				icon: <Computer />,
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
];
