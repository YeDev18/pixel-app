"use client";
import PriceItem from "@/core/components/molecules/service.item/priceItem/price.item";
import Tag from "@/core/components/molecules/service.item/priceItem/tag";
import { useService } from "@/core/context/service/service.provider";
import { useEffect, useState } from "react";

const PriceItems = () => {
	const { service, setChoicePackages, choicePackages } = useService();

	console.log(service.option);
	const check = service.option[0].name;
	const [tags, setTags] = useState("");
	useEffect(() => {
		setTags(check);
	}, [service, check]);
	const packages = service.option.find((pack) => pack.name === tags);
	console.log(packages);
	console.log(service);

	// const handleSubmit = (value1, value2) => {
	// 	setChoicePackages([
	// 		...choicePackages,
	// 		{
	// 			service: value2.service,
	// 			tag: value1.tag,
	// 			package: value1.package,
	// 		},
	// 	]);
	// };
	const handleSubmit = () => {
		console.log("VIVA");
	};
	return (
		<>
			<div className="container mx-auto flex flex-wrap justify-center gap-4">
				{service.option.map((option, index) => (
					<menu
						key={index}
						className={`${tags === option.name && "tagCheck "} cursor-pointer px-2 py-4`}
						onClick={() => setTags(option.name)}
					>
						<Tag tag={option.name} />
					</menu>
				))}
			</div>

			<div className="mx-auto flex flex-wrap  gap-x-2 gap-y-4   lg:container max-lg:gap-4">
				{packages?.package.map((option, index) => {
					return (
						<PriceItem
							key={index}
							tags={option.name}
							tarifs={option?.tarif}
							features={option?.feature}
							handleSubmit={handleSubmit}
						/>
					);
				})}
			</div>
		</>
	);
};

export default PriceItems;
