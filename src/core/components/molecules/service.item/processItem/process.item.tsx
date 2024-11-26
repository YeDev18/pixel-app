import { ProcessProps } from "@/core/data/service.data";
import * as motion from "framer-motion/client";

const ProcessItem = ({ array }: { array: ProcessProps }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.6,
				ease: [0.39, 0.35, 0.45, 0.46],
			}}
			viewport={{ once: true, amount: 0.2 }}
			className="group flex items-start justify-between gap-6 overflow-hidden rounded-[2.5rem] bg-light-100 px-8 py-10 text-blue-950 transition-all hover:bg-blue-950 max-lg:flex-col"
		>
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
		</motion.div>
	);
};

export default ProcessItem;
