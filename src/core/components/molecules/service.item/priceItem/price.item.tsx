"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import CheckIcon from "@/core/components/atoms/icons/check.icon";

const PriceItem = ({
	tags,
	tarifs,
	features,
}: { tags: string; tarifs?: string; features?: string[] }) => {
	return (
		<div className="container relative mx-auto w-[28rem] space-y-10  overflow-hidden rounded-xl bg-blue-950 p-8 shadow-md ">
			<h1 className="bg-gradient-to-b from-neutral-200 to-light-300 bg-clip-text text-start text-3xl text-transparent">
				{tags}
			</h1>
			<p className="bg-gradient-to-b  from-neutral-200 to-light-300 bg-clip-text  text-start text-4xl text-transparent">
				{tarifs}
			</p>
			<ol className="space-y-5">
				{features?.map((feature, index) => (
					<span
						key={index}
						className="flex items-center justify-start text-xl text-light-200"
					>
						<li className=" flex items-center justify-center gap-4 ">
							<span className="pr-2 text-base">
								<CheckIcon />
							</span>
							<span>{feature} </span>
						</li>
					</span>
				))}
			</ol>

			<BackgroundBeams />
		</div>
	);
};

export default PriceItem;
