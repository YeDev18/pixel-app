import HeadService from "@/core/components/molecules/service.item/head/head";
import ServiceItem from "@/core/components/templ@tes/service.item/service.item.all";
import { ServiceData, ServiceDataProps } from "@/core/data/service.data";

const ServiceName = ({ params }: { params: { service: string } }) => {
	const blog: ServiceDataProps | undefined = ServiceData.find(
		(blog) => params.service === blog.link,
	);

	return (
		<div className="space-y-4 overflow-y-hidden">
			<HeadService blog={blog} />

			<ServiceItem />
			{params.service}
		</div>
	);
};

export default ServiceName;
