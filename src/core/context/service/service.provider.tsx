"use client";
import {
	CardProps,
	Definition,
	OptionsProps,
	ProcessProps,
	ServiceDataProps,
	StackProps,
} from "@/core/data/service.data";
import { createContext } from "@/core/hooks";
import React, { Dispatch, ReactNode, useContext, useState } from "react";

// export type ServiceDataProps = {
// 	id: number;
// 	name: string;
// 	link?: string;
// 	icon?: JSX.Element;
// 	definitions?: Definition[];
// 	card?: CardProps[];
// 	process?: ProcessProps[];
// };

export type ChoicesProps = {
	service: string;
	tag: string;
	package: string;
};

type ServiceType = {
	service: ServiceDataProps;
	choicePackages: ChoicesProps[];
	setChoicePackages: Dispatch<React.SetStateAction<ChoicesProps[]>>;
	setService: Dispatch<
		React.SetStateAction<{
			id: number;
			name: string;
			link: string;
			icon?: JSX.Element;
			definitions: Definition[];
			card: CardProps[];
			process: ProcessProps[];
			option: OptionsProps[];
			stack: StackProps[];
		}>
	>;
};

export const dataChoices = [
	{
		service: " ",
		tag: "",
		package: "",
	},
];
export const data = {
	id: 0,
	name: "",
	link: "",
	definitions: [
		{
			paragraph: ``,
		},
	],
	card: [
		{
			title: ``,
			paragraph: ``,
		},
	],
	process: [
		{
			id: 1,
			item: "",
			paragraph: "",
		},
	],
	option: [
		{
			name: "",
			package: [{ name: ``, feature: [""], tarif: `` }],
		},
	],
	stack: [
		{
			id: 1,
			stack: ``,
		},
	],
};

const ServiceContext = createContext<ServiceType | null>(null);

const ServiceProvider = ({ children }: { children: ReactNode }) => {
	const [service, setService] = useState(data);
	const [choicePackages, setChoicePackages] = useState(dataChoices);
	return (
		<ServiceContext.Provider
			value={{ service, setService, choicePackages, setChoicePackages }}
		>
			{children}
		</ServiceContext.Provider>
	);
};

export const useService = () => {
	const serviceGood = useContext(ServiceContext);
	if (!serviceGood) {
		throw new Error("Des error");
	}
	return serviceGood;
};

export default ServiceProvider;
