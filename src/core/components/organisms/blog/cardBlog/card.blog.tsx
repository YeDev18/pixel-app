import ItemCard from "@/core/components/molecules/_all/stayInformed/item.card";
import { InformationInspiration } from "@/core/data/stay.informed.data";
const CardBlog = () => {
	return (
		<div className="grid  grid-cols-3 place-items-center gap-4 gap-y-16 max-md:grid-cols-1 lg:gap-8 ">
			{InformationInspiration.map((data) => {
				return <ItemCard key={data.id} arrayItemsInformed={data} />;
			})}
		</div>
	);
};

export default CardBlog;
