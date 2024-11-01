import { HeadInformed } from "@/core/components/molecules/home/stayInformed/head.informed";
import ItemsCard from "@/core/components/molecules/home/stayInformed/items.card";

const StayInformed = () => {
	return (
		<div className="container mx-auto space-y-12">
			<HeadInformed />
			<ItemsCard />
		</div>
	);
};

export default StayInformed;
