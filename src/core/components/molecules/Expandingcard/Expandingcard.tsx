"use client";

import { cardsData } from "@/core/data/card.data";

const ExpandingCard = () => {
	return (
		<div className="flex w-[80vw] ">
			{cardsData.map((card) => (
				<div
					key={card.id}
					className="relative mx-[10px] h-[646px] w-[546px] flex-1 cursor-pointer rounded-[50px] bg-cover bg-center bg-no-repeat text-white transition-[flex] duration-700 ease-in hover:flex-[5] hover:opacity-100"
					style={{ backgroundImage: `url(${card.url})` }}
				>
					<h3 className="delay-400 absolute bottom-[20px] left-[20px] m-0 text-[24px] opacity-0 transition-opacity duration-300 ease-in hover:opacity-100">
						{card.title}
					</h3>
				</div>
			))}
		</div>
	);
};

export default ExpandingCard;
