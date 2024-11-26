"use client";
import Card from "@/core/components/molecules/service.item/cardItem/card";
import { useService } from "@/core/context/service/service.provider";
import { CardProps } from "@/core/data/service.data";
import { SectionMotion } from "../../_all/sectionMotion/section.motion";

const CardItems = () => {
	const { service } = useService();

	return (
		<SectionMotion>
			<div className="container relative mx-auto flex flex-wrap place-content-center gap-6 py-14 lg:p-8">
				<div className="card_service_ombre absolute inset-y-1/2 translate-y-1/2 rounded-full"></div>
				{service?.card?.map((card: CardProps, index: number) => (
					<Card key={index} array={card} />
				))}
			</div>
		</SectionMotion>
	);
};

export default CardItems;
