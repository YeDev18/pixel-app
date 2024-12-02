import { AnimatePresence } from "framer-motion";
import * as motion from "framer-motion/client";

export default function Template({ children }: { children: React.ReactNode }) {
	const divVariante = {
		visible: { y: 0, opacity: 1 },
		hidden: { y: 10, opacity: 0 },
	};

	return (
		<div className="space-y-16 overflow-hidden">
			<AnimatePresence mode="sync">
				<motion.div
					className="overflow-hidden"
					variants={divVariante}
					initial="hidden"
					animate="visible"
					exit={{ y: -10, opacity: 0 }}
					transition={{ duration: 0.6 }}
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
