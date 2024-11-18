import { ServiceData } from "@/core/data/service.data";
import { SectionMotion } from "../sectionMotion/section.motion";
import ItemService from "@/core/components/molecules/service/itemService/itemService";

const ItemsService = () => {
	return (
		<SectionMotion>
			<div className="container mx-auto flex scale-100 flex-wrap items-center justify-center gap-4 lg:scale-90 xl:w-4/5  ">
				{ServiceData.map((data) => {
					return <ItemService key={data.id} arrayService={data} />;
				})}
			</div>
		</SectionMotion>
	);
};

export default ItemsService;
