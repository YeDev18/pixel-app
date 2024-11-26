"use client";
import CardItems from "../../organisms/service.item/card/cardItems";
import Cover from "../../organisms/service.item/cover/cover";
import ProcessItems from "../../organisms/service.item/process.items/process.items";

const ServiceItem = () => {
	return (
		<div className="space-y-14">
			<Cover />
			<CardItems />
			<ProcessItems />
		</div>
	);
};

export default ServiceItem;
