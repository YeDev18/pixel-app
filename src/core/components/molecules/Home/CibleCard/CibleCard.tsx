import { TargetGroups } from "../../../../data/Cible";

function CibleCard({ id }: { id: number }) {
	const group = TargetGroups.find((item) => item.id === id);

	if (!group) {
		return <div>Card not found</div>;
	}

	return (
		<div className="flex h-[150px] w-[250px] flex-col justify-center rounded-[30px] bg-[#07161b] p-4 duration-300 hover:scale-105 sm:h-[200px] sm:w-[300px] sm:rounded-[50px] sm:p-6 md:w-[350px] lg:w-[400px]">
			<p className="mb-2 text-sm font-normal sm:mb-4 sm:text-base">
				{group.description}
			</p>
			<h3 className="text-[14px] font-bold sm:text-[16px]">
				{group.name}
			</h3>
		</div>
	);
}

export default CibleCard;
