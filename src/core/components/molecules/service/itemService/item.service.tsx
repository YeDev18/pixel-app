import ArrowRightUpCircle from "@/core/components/atoms/icons/arrow.right.up.circle";
import { ServiceDataProps } from "@/core/data/service.data";

type ArrayServiceProps = {
	arrayService: ServiceDataProps;
};

const ItemService = ({ arrayService }: ArrayServiceProps) => {
	return (
		<>
			<div className="group flex  cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-full border p-3 text-base text-light-100 transition-all  hover:border-blue-700 hover:bg-blue-700  md:text-lg lg:p-6 xl:px-6 ">
				<span className="text-2xl group-hover:hidden xl:text-4xl">
					{arrayService.icon}
				</span>
				<span className="hidden text-2xl group-hover:flex xl:text-4xl ">
					{/* <div className="bg-[rgba(0,0,0,0.3)] rounded-full flex items-center justify-center"> */}
					<ArrowRightUpCircle />
					{/* </div> */}
				</span>
				<p className="font-medium tracking-wide lg:text-xl xl:text-3xl">
					{arrayService.name}
				</p>
			</div>
		</>
	);
};

export default ItemService;
