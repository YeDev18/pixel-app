"use client";
import ArrowLeft from "@/core/components/atoms/icons/arrow.left";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const ServiceLayout = ({ children }: { children: ReactNode }) => {
	const router = useRouter();
	return (
		<div className="space-y-14">
			<div className="container mx-auto flex h-[25vh] items-end justify-between  text-base text-light-100 xl:px-52">
				<button
					className="flex items-center gap-1"
					onClick={() => router.push("/service")}
				>
					<span className="text-2xl ">
						<ArrowLeft />
					</span>
					<span className=" font-medium">Revenir</span>
				</button>
				<button className="rounded-full border border-light-100 p-3">
					Obtenir un devis
				</button>
			</div>
			{children}
		</div>
	);
};

export default ServiceLayout;
