import ArrowRightUpCircle from "@/core/components/atoms/icons/arrow.right.up.circle";
import { ServiceDataProps } from "@/core/data/service.data";
import Link from "next/link";

type ArrayServiceProps = {
	arrayService: ServiceDataProps;
};

const ItemService = ({ arrayService }: ArrayServiceProps) => {
	return (
		<>
			<div className="group relative flex cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-full border p-3 text-base text-light-100 transition-all  hover:border-light-600 hover:bg-light-600  md:text-lg lg:p-6 xl:px-6 ">
				<Link
					href={`/${arrayService.link}`}
					className="absolute size-full cursor-pointer bg-black/0"
				></Link>
				<span className="text-2xl group-hover:hidden xl:text-4xl">
					{arrayService.icon}
				</span>
				<span className="hidden text-2xl group-hover:flex xl:text-4xl">
					<ArrowRightUpCircle />
				</span>
				<p className="font-medium tracking-wide lg:text-xl xl:text-3xl">
					{arrayService.name}
				</p>
			</div>
		</>
	);
};

export default ItemService;
