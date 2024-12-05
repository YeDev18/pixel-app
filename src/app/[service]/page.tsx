"use client";
import HeadService from "@/core/components/organisms/service.item/head/head";
import ServiceItem from "@/core/components/templ@tes/service.item/service.item.all";
import { data, useService } from "@/core/context/service/service.provider";
import { ServiceData } from "@/core/data/service.data";

const ServiceName = ({ params }: { params: { service: string } }) => {
	const blog = ServiceData.find((blog) => params.service === blog.link);
	const { service, setService } = useService();
	setService(blog ?? data);

	console.log(service);
	return (
		<div className="space-y-4 overflow-y-hidden">
			<HeadService blog={blog} />
			<ServiceItem />
		</div>
	);
};

export default ServiceName;
