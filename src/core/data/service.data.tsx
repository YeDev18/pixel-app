import {
	Computer,
	Design,
	Graph,
	Marketing,
} from "../components/atoms/icons/service.icon";

export type Definition = {
	paragraph: string;
};
export type CardProps = {
	title: string;
	paragraph: string;
	icon?: JSX.Element;
};
export type ProcessProps = {
	id: number;
	paragraph: string;
	item: string;
};

export type ServiceDataProps = {
	id: number;
	name: string;
	link: string;
	icon?: JSX.Element;
	definitions: Definition[];
	card: CardProps[];
	process: ProcessProps[];
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
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
				icon: <Computer />,
			},
		],
		process: [
			{
				id: 1,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 2,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 3,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 4,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
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
		card: [
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe.`,
				icon: <Graph />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
				icon: <Graph />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe.`,
				icon: <Graph />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
				icon: <Graph />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
				icon: <Graph />,
			},
		],
		process: [
			{
				id: 1,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 2,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 3,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 4,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
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
		card: [
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe.`,
				icon: <Marketing />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
				icon: <Marketing />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe.`,
				icon: <Marketing />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
				icon: <Marketing />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
				icon: <Marketing />,
			},
		],
		process: [
			{
				id: 1,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 2,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 3,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 4,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
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
		card: [
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe.`,
				icon: <Design />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
				icon: <Design />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe.`,
				icon: <Design />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
				icon: <Design />,
			},
			{
				title: `Lorem ipsum dolor`,
				paragraph: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
						Fugiat doloribus voluptate nulla saepe deleniti odit esse
						eum amet, quod quas quae vitae.`,
				icon: <Design />,
			},
		],
		process: [
			{
				id: 1,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 2,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 3,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
			{
				id: 4,
				item: "Discovery and Strategy",
				paragraph:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime neque pariatur doloribus natus quae reiciendis, voluptate modi praesentium ipsa doloremque et id veniam vitae blanditiis odit. Quo, praesentium obcaecati.",
			},
		],
	},
];
