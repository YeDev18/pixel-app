"use client";
import { ServiceDataProps } from "@/core/data/service.data";

const HeadService = ({
	blog,
}: {
	blog: ServiceDataProps | undefined;
}) => {
	console.log(blog);
	return (
		<div className="container mx-auto overflow-y-hidden py-4 text-light-100  xl:px-52">
			<h1 className="py-7 text-3xl font-medium lg:text-5xl">
				{blog?.name ?? "Service"}
			</h1>
			<div className="flex items-center justify-center gap-8 text-justify text-base/relaxed max-lg:flex-col max-md:text-sm/relaxed lg:gap-14 ">
				{blog?.definitions?.map(
					(definition: { paragraph: string }, index: number) => (
						<p className="" key={index}>
							{definition.paragraph}
						</p>
					),
				)}
			</div>
		</div>
	);
};

export default HeadService;
