"use client";
import { motion } from "framer-motion";

import { useState } from "react";

const Animation = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="flex h-screen items-center justify-center bg-slate-400">
			<motion.div
				layout
				initial={{ borderRadius: 50 }}
				data-open={isOpen}
				className="parent flex items-center justify-center space-y-44 p-14 text-center"
			>
				<motion.div
					layout
					className="flex w-40 content-center items-center justify-center rounded-full  bg-red-300 p-8 text-center"
					onClick={() => setIsOpen(!isOpen)}
				>
					<div className="w-20 rounded-lg bg-white">vi</div>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Animation;
