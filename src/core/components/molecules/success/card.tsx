import { SuccessData } from "@/core/data/success.data";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Tags from "../../atoms/Tags";

const Card = () => {
	return (
		<div
			className={` grid grid-cols  md:grid-cols-2 lg:grid-cols-3 gap-4 relative`}
		>
			{SuccessData.map((data, index) => (
				<div
					key={index}
					className={`text-light-100 relative max-lg:card rounded-[2.5rem] shadow-sm border border-blue-900 place-items-center ${index === 0 && " row-span-8"} ${index === 2 && " row-span-8"} ${index === 3 && " lg:row-span-8"}`}
				>
					<div className="w-full h-full">
						<Image
							src={data.image}
							alt="Picture of the author"
							className="w-full h-full "
						/>
					</div>
					<div className="z-10 p-8 flex flex-col  justify-center absolute space-y-4 bottom-0 bg-light-100/60 backdrop-blur  rounded-t-3xl  text-justify  text-blue-950 h-[35%]">
						<div className=" flex justify-between items-center text-blue-950">
							<h1 className="text-2xl font-semibold">
								{data.lib}
							</h1>

							<Icon
								icon="emojione-monotone:up-right-arrow"
								className="text-2xl"
							/>
						</div>

						<p>{data.describe}</p>
					</div>
					<Tags tags={data.tags} />
				</div>
			))}
		</div>
	);
};

export default Card;
