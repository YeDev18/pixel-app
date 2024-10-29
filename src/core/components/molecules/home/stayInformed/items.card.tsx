import { InformationInspiration } from "@/core/data/stay.informed.data";
import Image from "next/image";

const ItemsCard = () => {
	return (
		<div className="grid  grid-cols-3 place-items-center gap-4 max-md:grid-cols-1 lg:gap-8 ">
			{InformationInspiration.map((data, index) => {
				return (
					<div key={index} className="cursor-pointer space-y-6 ">
						<div className=" max-h-[28rem]  overflow-hidden rounded-3xl ">
							<Image
								src={data.image}
								alt={data.date}
								className="size-full"
							/>
						</div>
						<div className="space-y-2">
							<span className="text-base font-medium text-light-100/80">
								{data.date}
							</span>
							<h4 className=" line-clamp-2 text-2xl font-medium text-light-100 lg:text-lg xl:text-2xl">
								{data.lib}
							</h4>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ItemsCard;
