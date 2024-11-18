import ItemService from "@/core/components/molecules/service/itemService/itemService";
import { ServiceData } from "@/core/data/service.data";

const ItemsService = () => {
	return (
		<div className=" container mx-auto flex scale-100 flex-wrap items-center justify-center gap-4 lg:scale-90 xl:w-4/5  ">
			{ServiceData.map((data) => {
				return <ItemService key={data.id} arrayService={data} />;
			})}
		</div>
	);
};

export default ItemsService;
