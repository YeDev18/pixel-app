import { HeadInformed } from "@/core/components/molecules/_all/stayInformed/head.informed";
import ItemCard from "@/core/components/molecules/_all/stayInformed/item.card";
import { InformationInspiration } from "@/core/data/stay.informed.data";

const StayInformed = () => {
	return (
		<div className="container mx-auto space-y-12">
			<HeadInformed />
			<div className="grid  grid-cols-3 place-items-center gap-4 gap-y-16 max-md:grid-cols-1 lg:gap-8 ">
				{InformationInspiration.slice(0, 3).map((data) => {
					return <ItemCard key={data.id} arrayItemsInformed={data} />;
				})}
			</div>
		</div>
	);
};

export default StayInformed;
