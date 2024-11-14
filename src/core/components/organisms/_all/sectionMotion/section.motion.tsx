import * as motion from "framer-motion/client";
import { ReactNode } from "react";

export const SectionMotion = ({ children }: { children: ReactNode }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 80 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, ease: "easeInOut" }}
			viewport={{ once: true, amount: 0.2 }}
			className="overflow-hidden "
		>
			{children}
		</motion.div>
	);
};
