import Card from "@/core/components/molecules/service.item/card/card";

const CardItems = () => {
	const arrayLenght = Array.from({ length: 5 });

	return (
		<div className="container mx-auto flex flex-wrap place-content-center gap-10 lg:p-8">
			{arrayLenght.map((array, index) => (
				<Card key={index} />
			))}
		</div>
	);
};

export default CardItems;
