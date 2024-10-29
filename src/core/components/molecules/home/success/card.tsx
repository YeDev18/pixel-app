import { SuccessData } from "@/core/data/success.data";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Tags from "../../../atoms/Tags";

const Card = () => {
	return (
		<div
			className={` relative grid grid-cols-1  gap-4 md:grid-cols-2 lg:grid-cols-3`}
		>
			{SuccessData.map((data, index) => (
				<div
					key={index}
					className={`max-lg:card relative place-items-center rounded-[2.5rem] border border-blue-900 text-light-100 shadow-sm ${index === 0 && " row-span-8"} ${index === 2 && " row-span-8"} ${index === 3 && " lg:row-span-8"}`}
				>
					<div className="size-full">
						<Image
							src={data.image}
							alt="Picture of the author"
							className="aspect-auto size-full "
						/>
					</div>
					<div className="absolute bottom-0 z-10 flex  min-h-fit w-full flex-col  justify-center space-y-4 rounded-t-3xl bg-light-100/60 p-8  text-blue-950  backdrop-blur xl:h-2/5">
						<div className=" flex h-fit items-center justify-between text-blue-950">
							<h1 className="whitespace-nowrap text-lg font-semibold xl:text-2xl">
								{data.lib}
							</h1>

							<Icon
								icon="emojione-monotone:up-right-arrow"
								className="text-lg xl:text-2xl"
							/>
						</div>

						<p className=" text-pretty text-sm lg:text-justify">
							{data.describe}
						</p>
					</div>
					<Tags tags={data.tags} />
				</div>
			))}
		</div>
	);
};

export default Card;
