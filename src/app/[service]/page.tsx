import HeadService from "@/core/components/organisms/service.item/head/head";
import { ServiceData, ServiceDataProps } from "@/core/data/service.data";

const ServiceName = ({ params }: { params: { service: string } }) => {
	const blog: ServiceDataProps | undefined = ServiceData.find(
		(blog) => params.service === blog.link,
	);

	return (
		<div className="space-y-4 overflow-y-hidden">
			<HeadService blog={blog} />

			{/* <ServiceItem blog={blog} /> */}
		</div>
	);
};

export default ServiceName;
