"use client";
import PriceItem from "@/core/components/molecules/service.item/priceItem/price.item";
import Tag from "@/core/components/molecules/service.item/priceItem/tag";
import { useService } from "@/core/context/service/service.provider";
import { useState } from "react";

const PriceItems = () => {
	const { service } = useService();
	const [tags, setTags] = useState("Crystal");
	console.log(service);
	return (
		<>
			<div className="container mx-auto flex justify-center gap-4">
				{["Crystal", "Emmeraude", "Rubi"].map((tag, index) => (
					<menu
						key={index}
						className={`${tags === tag && "tagCheck "} cursor-pointer px-4 pt-4`}
						onClick={() => setTags(tag)}
					>
						<Tag tag={tag} />
					</menu>
				))}
			</div>

			<div className="container mx-auto flex flex-wrap gap-4 space-y-4">
				{service.option.map((option, index) => {
					const blog = option.package.find(
						(pack) => pack.name === tags,
					);
					return (
						<PriceItem
							key={index}
							tags={option.name}
							tarifs={blog?.tarif}
							features={blog?.feature}
						/>
					);
				})}
			</div>
		</>
	);
};

export default PriceItems;
