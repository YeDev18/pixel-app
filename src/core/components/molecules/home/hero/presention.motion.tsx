import * as motion from "framer-motion/client";
import { ReactNode } from "react";

const PresentationMotion = ({ children }: { children: ReactNode }) => {
	return (
		<motion.div
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: "easeIn", duration: 2 }}
		>
			{children}
		</motion.div>
	);
};

export default PresentationMotion;
