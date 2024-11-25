import { ProcessProps } from "@/core/data/service.data";

const ProcessItem = ({ array }: { array: ProcessProps }) => {
	return (
		<div className="group flex items-start justify-between gap-6 rounded-[2.5rem] bg-light-100 px-8 py-10 text-blue-950 transition-all hover:bg-blue-950 max-lg:flex-col">
			<div className="flex w-fit flex-col items-start justify-start gap-6 ">
				<div className="flex justify-center gap-3 text-lg ">
					<p className="rounded-full  bg-blue-950 px-4 py-2 text-light-100 group-hover:bg-blue-800">
						Step
					</p>
					<p className="rounded-full bg-blue-950  px-4 py-2 text-light-100 group-hover:bg-blue-800">
						{array.id}
					</p>
				</div>
				<h3 className="text-3xl group-hover:text-light-100 xl:text-4xl ">
					{array.item}
				</h3>
			</div>
			<div className="h-full  text-justify text-base/relaxed font-light group-hover:text-light-100 lg:w-[30rem] xl:w-[35rem]">
				{array.paragraph}
			</div>
		</div>
	);
};

export default ProcessItem;
