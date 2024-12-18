"use client";
import HowWeWorkItem from "@/core/components/molecules/_all/howWeWork/howWeWork";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HowWeWork = () => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});
	const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
	return (
		<div ref={targetRef} className=" relative h-[150vh]  lg:h-[200vh] ">
			<div className="sticky top-0 flex h-screen  items-center overflow-hidden py-6">
				<motion.div style={{ x }}>
					<HowWeWorkItem />
				</motion.div>
			</div>
		</div>
	);
};

export default HowWeWork;
