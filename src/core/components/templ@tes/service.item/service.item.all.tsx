"use client";
import ServiceStackList from "@/core/components/molecules/service/ServiceStack/SeviceStack";
import HeaderSection from "../../atoms/HeaderSection";
import CardItems from "../../organisms/service.item/card/cardItems";
import Cover from "../../organisms/service.item/cover/cover";
import PriceItems from "../../organisms/service.item/price.items/price.items";
import ProcessItems from "../../organisms/service.item/process.items/process.items";

const ServiceItem = () => {
	return (
		<div className="space-y-14">
			<Cover />
			<CardItems />
			<HeaderSection
				title="Notre Processus de developpement"
				customTitleSize="52px"
				customSubtitleSize="16px"
				align="center"
			/>
			<ProcessItems />
			<HeaderSection
				title="Nos Technologies"
				customTitleSize="52px"
				customSubtitleSize="16px"
				align="center"
			/>
			<ServiceStackList />
			<HeaderSection
				title="Des Packages Adaptés Pour Vous"
				customTitleSize="52px"
				customSubtitleSize="16px"
				align="center"
			/>
			<PriceItems />
		</div>
	);
};

export default ServiceItem;
