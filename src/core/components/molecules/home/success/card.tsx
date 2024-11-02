import { SuccessData } from "@/core/data/success.data";
import * as motion from "framer-motion/client";

import UpArrowRight from "@/core/components/atoms/icons/arrow.up.right";
import Tags from "../../../atoms/Tags";

const Card = () => {
	// const red = "#12adc8";
	const parent = { variantA: { scale: 1 }, variantB: { scaleY: 1 } };

	const child = {
		variantA: { display: "none" },
		variantB: { display: "flex" },
	};
	return (
		<div
			className={` relative grid  grid-cols-1  gap-4 md:grid-cols-2 lg:grid-cols-3`}
		>
			{SuccessData.map((data, index) => {
				return (
					<div
						key={index}
						className={`max-lg:card  relative  min-h-[30rem] min-w-48 place-items-center overflow-hidden rounded-[2.5rem] border border-blue-900   bg-cover bg-center text-light-100 shadow-sm ${index === 0 && " row-span-8"} ${index === 2 && " row-span-8"} ${index === 3 && " lg:row-span-8"}`}
						style={{
							backgroundImage: `url(${data.image})`,
						}}
					>
						<motion.div
							layout
							variants={parent}
							initial="variantA"
							whileHover="variantB"
							transition={{ duration: 1, ease: "easeIn" }}
							className="absolute bottom-0 z-10 flex  h-fit w-full flex-col  justify-center space-y-4 rounded-t-3xl bg-light-100/60 px-8 py-16 text-blue-950  backdrop-blur xl:h-fit"
						>
							<div className=" flex h-fit items-center justify-between text-blue-950">
								<h1 className="whitespace-nowrap text-lg font-semibold xl:text-2xl">
									{data.lib}
								</h1>
								<UpArrowRight className="text-lg xl:text-2xl" />
							</div>

							<motion.p
								variants={child}
								initial={{ height: 0 }}
								whileHover={{ height: "fit-content" }}
								transition={{
									duration: 0.5,
									ease: [0.22, 1, 0.36, 1],
								}}
								className=" overflow-hidden text-pretty text-sm lg:text-justify"
							>
								{data.describe}
							</motion.p>
						</motion.div>
						<Tags tags={data.tags} />
					</div>
				);
			})}
		</div>
	);
};

export default Card;
