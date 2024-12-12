"use client";
import { ValueData } from "@/core/data/value.data";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/react";
import { useRef } from "react";

export default function Index(): JSX.Element {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});

	return (
		<ReactLenis root>
			<main ref={container}>
				<section className="w-full text-white">
					{ValueData.map((value, i) => {
						const targetScale = 1 - (ValueData.length - i) * 0.05;
						return (
							<Card
								key={`value_${i}`}
								i={i}
								lib={value.lib}
								describe={value.describe}
								image={value.image}
								progress={scrollYProgress}
								range={[i * 0.2, 0.8]}
								targetScale={targetScale}
							/>
						);
					})}
				</section>
			</main>
		</ReactLenis>
	);
}

interface CardProps {
	i: number;
	lib: string;
	describe: string;
	image: string;
	progress: MotionValue<number>;
	range: [number, number];
	targetScale: number;
}
export const Card: React.FC<CardProps> = ({
	i,
	lib,
	describe,
	image,
	progress,
	range,
	targetScale,
}) => {
	const container = useRef(null);

	// Transformation pour la parallaxe
	const translateY = useTransform(progress, range, [0, -10 * i]);
	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<div
			ref={container}
			className="sticky top-0 flex h-screen items-center justify-center"
		>
			<motion.div
				style={{
					scale,
					translateY,
					top: `calc(-5vh + ${i * 25}px)`,
				}}
				className={`relative -top-10 flex h-[500px] w-4/5 origin-top flex-col rounded-md bg-slate-800 p-10`}
			>
				<h2 className="text-center text-2xl font-semibold">{lib}</h2>
				<div className={`mt-5 flex h-full gap-10`}>
					<div className={`relative top-[10%] w-2/5`}>
						<p className="text-sm">{describe}</p>
					</div>

					<div
						className={`relative h-full w-3/5 overflow-hidden rounded-lg `}
					>
						<motion.div className={`size-full`} style={{ scale }}>
							<img
								src={image}
								alt="image"
								className="size-full object-cover"
							/>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};
