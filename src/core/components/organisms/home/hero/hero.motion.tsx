"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
const HeroMotion = ({ children }: { children: ReactNode }) => {
	return (
		<motion.div
			layout
			initial={{ height: "5%", scale: 0.4 }}
			animate={{ height: "90vh", scale: 1 }}
			transition={{ ease: "easeIn", duration: 1 }}
			className="hero h-[90vh] content-end overflow-hidden rounded-[2rem] p-4"
		>
			{children}
		</motion.div>
	);
};

export default HeroMotion;
