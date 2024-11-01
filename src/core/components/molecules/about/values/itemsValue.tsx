import { ValueData } from "@/core/data/value.data";

const ItemsValue = () => {
	return (
		<div className="flex flex-col gap-8 lg:gap-14">
			{ValueData.map((value, index) => (
				<div
					key={index}
					className="flex items-center justify-start gap-6 max-md:flex-col lg:gap-14"
				>
					<div
						className="h-96 w-full overflow-hidden rounded-lg bg-red-400 bg-cover bg-center md:max-w-[30rem] lg:h-[30rem]"
						style={{
							backgroundImage: `url(${value.image})`,
						}}
					></div>
					<hgroup className="space-y-3 text-start">
						<h1 className="text-2xl font-medium lg:text-4xl ">
							{value.lib}
						</h1>
						<p className=" text-base/relaxed max-md:text-justify lg:w-[75vh] xl:text-lg/relaxed">
							{value.describe}
						</p>
					</hgroup>
				</div>
			))}
		</div>
	);
};

export default ItemsValue;
