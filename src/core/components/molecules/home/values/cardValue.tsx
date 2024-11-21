import { ValuesData } from "@/core/data/valeur.data";

const CardValue = () => {
	return (
		<>
			{ValuesData.map((value) => (
				<div
					key={value.id}
					className="mx-auto flex w-full items-center rounded-3xl bg-[#07161b] p-6 transition-shadow duration-300 md:h-64 md:w-96 lg:pl-12 "
				>
					<div className="space-y-4 text-light-100">
						<h3 className="text-xl font-bold">{value.name}</h3>
						<p className="block text-wrap text-base font-normal max-md:text-justify">
							{value.description}
						</p>
					</div>
				</div>
			))}
		</>
	);
};

export default CardValue;
