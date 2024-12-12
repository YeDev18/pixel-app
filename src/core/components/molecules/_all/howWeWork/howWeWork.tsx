import { HowWeWorkData } from "@/core/data/HowWeWork.data";

// interface HowWeWorkItemProps {
// 	id: number;
// 	label: string;
// }

const HowWeWorkItem = () => {
	return (
		<div className="flex items-center gap-4 overflow-hidden  p-6">
			{HowWeWorkData.map((item, index) => (
				<div
					key={index}
					className="h-[600px] w-[25rem] flex-col rounded-[25px] bg-[#04232c] p-10 lg:h-[600px] lg:w-[35rem]"
				>
					<div className="flex h-full flex-col justify-between">
						<div>
							<div className="flex space-x-1">
								<div className="flex w-12 items-center justify-center rounded-full bg-[#DC0000] px-10 py-1 text-white">
									Step
								</div>
								<div className="flex w-8 items-center justify-center rounded-full bg-[#DC0000] text-lg font-semibold text-white">
									{item.id}
								</div>
							</div>
						</div>
						<div className="mt-auto text-lg font-medium lg:text-3xl">
							{item.label}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default HowWeWorkItem;
