import * as motion from "framer-motion/client";
import { ReactNode } from "react";

export const SectionMotion = ({ children }: { children: ReactNode }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: false, amount: 0.2 }}
			className="overflow-y-hidden "
		>
			{children}
		</motion.div>
	);
};
