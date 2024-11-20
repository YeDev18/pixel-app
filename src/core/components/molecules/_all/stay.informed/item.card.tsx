import { InformationInspirationProps } from "@/core/data/stay.informed.data";

type arrayItemsInformedProps = {
	arrayItemsInformed: InformationInspirationProps;
};

const ItemCard = ({ arrayItemsInformed }: arrayItemsInformedProps) => {
	return (
		<>
			<div className="cursor-pointer space-y-6 ">
				<div
					className="h-96 w-full overflow-hidden rounded-3xl bg-cover bg-center"
					style={{
						backgroundImage: `url(${arrayItemsInformed.image})`,
					}}
				></div>
				<div className="space-y-2">
					<span className="text-base font-medium text-light-100/80">
						{arrayItemsInformed.date}
					</span>
					<h4 className=" line-clamp-2 text-2xl font-medium text-light-100 lg:text-lg xl:text-2xl">
						{arrayItemsInformed.lib}
					</h4>
				</div>
			</div>
		</>
	);
};

export default ItemCard;
