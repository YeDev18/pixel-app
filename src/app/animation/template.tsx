"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<motion.div
			layout
			initial={{ width: 0, opacity: 0 }}
			animate={{ width: "100%", opacity: 1 }}
			transition={{ ease: "easeIn", duration: 0.75 }}
		>
			{children}
		</motion.div>
	);
}
