import { ValueData } from "@/core/data/value.data";
import Image from "next/image";

const ItemsValue = () => {
	return (
		<div className="flex flex-col gap-8 lg:gap-14">
			{ValueData.map((value, index) => (
				<div
					key={index}
					className="flex max-md:flex-col items-center justify-start gap-6 lg:gap-14"
				>
					<div className="max-h-[35rem] w-[100%]  md:max-w-[30rem] overflow-hidden rounded-lg">
						<Image
							src={value.image}
							alt={value.lib}
							className="w-[100%] h-[100%]"
						/>
					</div>
					<hgroup className="text-start space-y-3">
						<h1 className="text-2xl lg:text-4xl font-medium ">
							{value.lib}
						</h1>
						<p className=" lg:w-[75vh] max-md:text-justify text-base/relaxed xl:text-lg/relaxed">
							{value.describe}
						</p>
					</hgroup>
				</div>
			))}
		</div>
	);
};

export default ItemsValue;
