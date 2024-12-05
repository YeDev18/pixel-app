import * as motion from "framer-motion/client";
import { ReactNode } from "react";

const ItemsMotion = ({ children }: { children: ReactNode }) => {
	return (
		<motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			{children}
		</motion.div>
	);
};

export default ItemsMotion;
