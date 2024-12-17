"use client";
import ArrowLeft from "@/core/components/atoms/icons/arrow.left";
import { AnimatePresence } from "framer-motion";
import * as motion from "framer-motion/client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const ServiceLayout = ({ children }: { children: ReactNode }) => {
	const router = useRouter();
	return (
		<AnimatePresence mode="sync">
			<motion.div
				className="space-y-16 "
				initial={{ y: 10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: -10, opacity: 0 }}
				transition={{ duration: 0.6 }}
			>
				<div className="container mx-auto flex h-[25vh] items-end justify-between text-base text-light-100 xl:px-52">
					<button
						className="flex items-center gap-1"
						onClick={() => router.push("/service")}
					>
						<span className="text-2xl ">
							<ArrowLeft />
						</span>
						<span className=" font-medium">Revenir</span>
					</button>
					<button
						className="rounded-full border border-light-100 p-3"
						onClick={() => router.push("/contact")}
					>
						Obtenir un devis
					</button>
				</div>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default ServiceLayout;
