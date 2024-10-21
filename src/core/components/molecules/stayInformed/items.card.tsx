import { InformationInspiration } from "@/core/data/stay.informed.data";
import Image from "next/image";

const ItemsCard = () => {
	return (
		<div className="grid grid-cols-3 gap-4 lg:gap-8 max-md:grid-cols-1 place-items-center ">
			{InformationInspiration.map((data, index) => {
				return (
					<div key={index} className="space-y-6 ">
						<div className=" max-h-[28rem]  rounded-3xl overflow-hidden ">
							<Image
								src={data.image}
								alt={data.date}
								className="w-full h-full"
							/>
						</div>
						<div className="space-y-2">
							<span className="text-base font-medium text-light-100/80">
								{data.date}
							</span>
							<h4 className=" line-clamp-2 text-2xl lg:text-lg xl:text-2xl font-medium text-light-100">
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
