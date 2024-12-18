// "use client";
import { AnimatePresence } from "framer-motion";
import * as motion from "framer-motion/client";

export default function AnimationPage({
	children,
}: { children: React.ReactNode }) {
	const divVariante = {
		visible: { y: 0, opacity: 1 },
		hidden: { y: 10, opacity: 0 },
	};

	return (
		<AnimatePresence mode="wait">
			<motion.div
				className="overflow-hidden"
				variants={divVariante}
				initial="hidden"
				animate="visible"
				exit={{ y: -10, opacity: 0 }}
				transition={{ duration: 3 }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
