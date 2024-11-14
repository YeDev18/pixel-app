import CardValue from "@/core/components/molecules/home/values/cardValue";
import * as motion from "framer-motion/client";
import { SectionMotion } from "../../_all/sectionMotion/section.motion";

function Values() {
	return (
		<div className="  relative flex items-center justify-center ">
			<motion.div
				initial={{ opacity: 0, y: -200 }}
				whileInView={{ opacity: 0.6, y: 80 }}
				transition={{ duration: 3, ease: "easeOut" }}
				viewport={{ once: true, amount: 0.8 }}
				className=" card_ombre absolute inset-x-1/2 -z-10 h-4 -translate-x-1/2 bg-black"
			></motion.div>
			<SectionMotion>
				<div className="card_wrap grid grid-cols-1 place-content-center justify-center gap-4  max-md:w-screen md:grid-cols-2">
					<CardValue />
				</div>
			</SectionMotion>
		</div>
	);
}

export default Values;
