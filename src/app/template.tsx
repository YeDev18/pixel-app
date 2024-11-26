import { AnimatePresence } from "framer-motion";
import * as motion from "framer-motion/client";

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<div className="space-y-16 overflow-hidden">
			<AnimatePresence mode="sync">
				<motion.div
					className="overflow-hidden"
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: -10, opacity: 0 }}
					transition={{ duration: 0.6 }}
				>
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
}
