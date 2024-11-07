import * as motion from "framer-motion/client";

import UpArrowRight from "@/core/components/atoms/icons/arrow.up.right";
import { SuccessDataProps } from "@/core/data/success.data";
import Tags from "../../../atoms/Tags";

type ArrayItemsCardProps = {
	arrayItemsCard: SuccessDataProps;
};

const Card = ({ arrayItemsCard }: ArrayItemsCardProps) => {
	// const red = "#12adc8";
	const parent = { variantA: { scale: 1 }, variantB: { scaleY: 1 } };

	const child = {
		variantA: { display: "none" },
		variantB: { display: "flex" },
	};
	return (
		<>
			<div
				className={`max-lg:card  relative  min-h-[20rem] max-w-[364px] place-items-center overflow-hidden rounded-[2.5rem] border border-blue-900   bg-cover bg-center text-light-100 shadow-sm ${arrayItemsCard.id === 1 && "row-span-8"} ${arrayItemsCard.id === 3 && "row-span-8"} ${arrayItemsCard.id === 4 && "row-span-8"} `}
				style={{
					backgroundImage: `url(${arrayItemsCard.image})`,
				}}
			>
				<motion.div
					layout
					variants={parent}
					initial="variantA"
					whileHover="variantB"
					transition={{ duration: 1, ease: "easeIn" }}
					className="absolute bottom-0 z-10 flex  h-fit w-full flex-col  justify-center space-y-4 rounded-t-3xl  px-8 py-16 text-blue-950  backdrop-blur-md xl:h-fit"
				>
					<div className=" flex h-fit items-center justify-between text-[#04374b]">
						<h1 className="whitespace-nowrap text-lg font-semibold xl:text-2xl">
							{arrayItemsCard.lib}
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
						{arrayItemsCard.describe}
					</motion.p>
				</motion.div>
				<Tags tags={arrayItemsCard.tags} />
			</div>
		</>
	);
};

export default Card;
