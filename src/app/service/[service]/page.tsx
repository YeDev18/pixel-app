const ServiceName = ({ params }: { params: { service: string } }) => {
	return <div>page Service {params.service}</div>;
};

export default ServiceName;
