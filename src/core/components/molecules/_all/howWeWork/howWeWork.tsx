import React from "react";

interface HowWeWorkItemProps {
	id: number;
	label: string;
}

const HowWeWorkItem: React.FC<HowWeWorkItemProps> = ({ id, label }) => {
	return (
		<div className="flex size-[520px] shrink-0 flex-col rounded-[25px] bg-[#035065] p-10">
			<div className="flex h-full flex-col justify-between">
				<div>
					<div className="flex space-x-1">
						<div className="flex w-12 items-center justify-center rounded-full bg-[#DC0000] px-10 py-1 text-white">
							Step
						</div>
						<div className="flex w-8 items-center justify-center rounded-full bg-[#DC0000] text-lg font-semibold text-white">
							{id}
						</div>
					</div>
				</div>
				<div className="mt-auto text-[32px] font-medium">{label}</div>
			</div>
		</div>
	);
};

export default HowWeWorkItem;
