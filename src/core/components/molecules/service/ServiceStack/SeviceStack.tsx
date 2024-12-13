"use client";
import ServiceStackItem from "@/core/components/atoms/Service/serviceStack/serviceStack";
import { useService } from "@/core/context/service/service.provider";

const ServiceStackList = () => {
	const { service } = useService();
	return (
		<div className="flex justify-center gap-[38px] overflow-x-auto py-4">
			{service.stack?.map((item) => (
				<ServiceStackItem key={item.id} stack={item} />
			))}
		</div>
	);
};

export default ServiceStackList;
