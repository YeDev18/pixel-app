import { HeadInformed } from "@/core/components/molecules/home/stayInformed/head.informed";
import ItemsCard from "@/core/components/molecules/home/stayInformed/items.card";

const StayInformed = () => {
	return (
		<div className="space-y-12 container mx-auto">
			<HeadInformed />
			<ItemsCard />
		</div>
	);
};

export default StayInformed;
