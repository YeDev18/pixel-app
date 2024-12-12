"use client";
import Button from "@/core/components/atoms/Button";
import CheckIcon from "@/core/components/atoms/icons/check.icon";

const PriceItem = ({
	tags,
	tarifs,
	features,
}: { tags: string; tarifs?: string; features?: string[] }) => {
	return (
		<div className="container relative mx-auto flex w-96 flex-col justify-between space-y-10  overflow-hidden rounded-xl bg-blue-950 p-8 shadow-md ">
			<div className="space-y-10  overflow-hidden">
				<h1 className="bg-gradient-to-b from-neutral-200 to-light-300 bg-clip-text text-start text-2xl text-transparent lg:text-3xl">
					{tags}
				</h1>
				<p className="bg-gradient-to-b  from-neutral-200 to-light-300 bg-clip-text  text-start text-3xl text-transparent lg:text-4xl overflow-hidden">
					{tarifs}
				</p>
				<ol className="space-y-5">
					{features?.map((feature, index) => (
						<span
							key={index}
							className="flex items-center justify-start text-base text-light-200 lg:text-xl"
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
			</div>

			<Button className="relative z-40 cursor-pointer text-blue-950">
				Commencez Maintenant
			</Button>
		</div>
	);
};

export default PriceItem;
