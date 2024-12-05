"use client";

import Button from "@/core/components/atoms/Button";
import Card from "@/core/components/molecules/home/success/card";
import { SuccessData } from "@/core/data/success.data";
import { SectionMotion } from "../../_all/sectionMotion/section.motion";

export default function Success() {
	return (
		<>
			<SectionMotion>
				<div className="container mx-auto flex flex-col items-center space-y-16  xl:w-fit">
					<div
						className={` relative grid w-full grid-cols-1  gap-4   md:grid-cols-2 lg:grid-cols-3`}
					>
						{SuccessData.map((data, index) => {
							return <Card key={index} arrayItemsCard={data} />;
						})}
					</div>
					<Button className=" w-fit gap-4 align-middle text-black">
						Voir plus
					</Button>
				</div>
			</SectionMotion>
		</>
	);
}
