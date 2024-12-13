import { StackProps } from "@/core/data/service.data";
import Image from "next/image";

const ServiceStackItem = ({ stack }: { stack: StackProps }) => {
	return (
		<div className="flex size-[80px] flex-col items-center justify-center rounded-[24px] bg-white p-4">
			<Image
				src={stack.stack}
				alt="service image"
				width={50}
				height={50}
			/>
		</div>
	);
};

export default ServiceStackItem;
