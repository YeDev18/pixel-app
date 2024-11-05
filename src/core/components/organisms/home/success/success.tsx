import { SuccessData } from "@/core/data/success.data";
import Card from "../../../molecules/home/success/card";

const Success = () => {
	return (
		<div className="container mx-auto">
			<div
				className={` relative grid  grid-cols-1  gap-4 md:grid-cols-2 lg:grid-cols-3`}
			>
				{SuccessData.map((data, index) => {
					return <Card key={index} arrayItemsCard={data} />;
				})}
			</div>
		</div>
	);
};

export default Success;

// ${index === 0 && "row-span-8"} ${index === 2 && "row-span-8"} ${index === 3 && "row-span-8"}
