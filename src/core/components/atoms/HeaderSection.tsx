import * as motion from "framer-motion/client";
import Image from "next/image";
import React, { ReactNode } from "react";

interface HeaderSectionProps {
	title: ReactNode;
	subtitle?: ReactNode;
	// titleSize?: "small" | "medium" | "large";
	// subtitleSize?: "small" | "medium" | "large";
	// customTitleSize?: string;
	// customSubtitleSize?: string;
	// align?: "left" | "center" | "right";
}

const HeaderSection: React.FC<HeaderSectionProps> = ({
	title,
	subtitle,
	// titleSize = "medium",
	// subtitleSize = "medium",
	// customTitleSize,
	// customSubtitleSize,
	// align = "center",
}) => {
	// const alignmentClasses = {
	// 	left: "text-left",
	// 	center: "text-center",
	// 	right: "text-right",
	// };

	// const alignClass = alignmentClasses[align];

	// const sizeClasses = {
	// 	small: "text-sm",
	// 	medium: "text-xl",
	// 	large: "text-3xl",
	// };

	// const titleClass = customTitleSize
	// 	? `text-[${customTitleSize}]`
	// 	: sizeClasses[titleSize];

	// const subtitleClass = customSubtitleSize
	// 	? `text-[${customSubtitleSize}]`
	// 	: sizeClasses[subtitleSize];

	return (
		<div className={`relative text-center `}>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
				viewport={{ once: false, amount: 0.6 }}
				className=" absolute inset-x-1/2 -z-10 flex h-fit w-screen -translate-x-1/2 items-center justify-center"
			>
				<Image
					alt="bars"
					src="/assets/img/viva.avif"
					width={5}
					height={5}
					className="size-full opacity-30 lg:w-2/4"
				/>
			</motion.div>
			<div className="space-y-4 pt-8 lg:space-y-6 lg:pt-12">
				<h1 className={` text-[1.5rem] font-medium lg:text-[3.5rem]`}>
					{title} <span className=" text-[#DC0000]">.</span>
				</h1>
				<p className="text-sm lg:text-base">{subtitle}</p>
			</div>
		</div>
	);
};

export default HeaderSection;
