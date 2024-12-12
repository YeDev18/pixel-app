"use client";
import HowWeWorkItem from "@/core/components/molecules/_all/howWeWork/howWeWork";
import { HowWeWorkData } from "@/core/data/HowWeWork.data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HowWeWork = () => {
	const targetRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({ target: targetRef });
	const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);
	console.log(x);
	return (
		<section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
			<div className="sticky top-0 flex h-screen items-center overflow-hidden">
				<motion.div style={{ x }} className="flex gap-4">
					{HowWeWorkData.map((item, index) => {
						return (
							<HowWeWorkItem
								key={index}
								id={item.id}
								label={item.label}
							/>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
};

export default HowWeWork;
