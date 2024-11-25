import ProcessItem from "@/core/components/molecules/service.item/process/process.item";
import { useService } from "@/core/context/service/service.provider";
import { ProcessProps } from "@/core/data/service.data";

const ProcessItems = () => {
	const { service } = useService();
	return (
		<div className="container mx-auto space-y-0.5 lg:px-32">
			{service?.process?.map((process: ProcessProps, index: number) => (
				<ProcessItem key={index} array={process} />
			))}
		</div>
	);
};

export default ProcessItems;
