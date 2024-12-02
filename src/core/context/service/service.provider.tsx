"use client";
import {
	CardProps,
	Definition,
	ProcessProps,
	ServiceDataProps,
	PackageProps,
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
type ServiceType = {
	service: ServiceDataProps;
	setService: Dispatch<
		React.SetStateAction<{
			id: number;
			name: string;
			link: string;
			icon?: JSX.Element;
			definitions: Definition[];
			card: CardProps[];
			process: ProcessProps[];
			package:PackageProps[];
		}>
	>;
};
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
	package: [
		{
			id: 1,
			name: "",
			desc: "",
		},
	],
};

const ServiceContext = createContext<ServiceType | null>(null);

const ServiceProvider = ({ children }: { children: ReactNode }) => {
	const [service, setService] = useState(data);
	return (
		<ServiceContext.Provider value={{ service, setService }}>
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
