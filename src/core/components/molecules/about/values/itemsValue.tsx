"use client";
import { ValueDataProps } from "@/core/data/value.data";
import * as motion from "framer-motion/client";

const ItemsValue = ({ value }: { value: ValueDataProps }) => {
	
	// const ref = useRef(null);
	// const { scrollYProgress } = useScroll({ target: ref });
	// const y = useTransform(scrollYProgress, [0, 1], [-300, 350]);
	// console.log(y);
	return (
		<div className="flex flex-col gap-8 lg:gap-14">
			<div className="flex items-center justify-start gap-6 max-md:flex-col lg:gap-14">
				<div
					className="h-96 w-full overflow-hidden rounded-lg bg-cover bg-center md:max-w-[30rem] lg:h-[30rem]"
					style={{
						backgroundImage: `url(${value.image})`,
					}}
				></div>
				<motion.hgroup
					// style={{ y }}
					className="space-y-3 text-start"
				>
					<h1 className="overflow-hidden py-2 text-2xl font-medium lg:text-4xl">
						{value.lib}
					</h1>
					<p className=" text-base/relaxed max-md:text-justify lg:w-[75vh] xl:text-lg/relaxed">
						{value.describe}
					</p>
				</motion.hgroup>
			</div>
		</div>
	);
};

export default ItemsValue;
