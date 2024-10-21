import { HeadInformed } from "../../molecules/stayInformed/head.informed";
import ItemsCard from "../../molecules/stayInformed/items.card";

const StayInformed = () => {
	return (
		<div className="space-y-12 container mx-auto">
			<HeadInformed />
			<ItemsCard />
		</div>
	);
};

export default StayInformed;
