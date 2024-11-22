import HeadService from "@/core/components/organisms/service.item/head/head";
import ServiceItem from "@/core/components/templ@tes/service.item/service.item.all";
import { ServiceData, ServiceDataProps } from "@/core/data/service.data";

const ServiceName = ({ params }: { params: { service: string } }) => {
	const blog: ServiceDataProps | undefined = ServiceData.find(
		(blog) => params.service === blog.link,
	);
	const arrayfirst = Array.from({ length: 4 });
	console.log(arrayfirst);

	return (
		<div className="space-y-4 overflow-y-hidden">
			<HeadService blog={blog} />
			<ServiceItem />
			{arrayfirst.map((first, index) => (
				<h1 key={index} className="">
					{index}
				</h1>
			))}
		</div>
	);
};

export default ServiceName;
