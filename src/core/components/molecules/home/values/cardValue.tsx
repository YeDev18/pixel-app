import { ValuesData } from "@/core/data/valeur.data";

const CardValue = () => {
	return (
		<>
			{ValuesData.map((value) => (
				<div
					key={value.id}
					className="mx-auto flex w-full items-start rounded-3xl border border-[#0a3b4e] bg-[#04374b] px-2 py-6 transition-shadow duration-300 md:w-80 "
				>
					<div className="text-light-100">
						<h3 className="ml-6 text-[18px] font-bold">
							{value.name}
							<span className="mt-2 block text-[14px] font-normal">
								{value.description}
							</span>
						</h3>
					</div>
				</div>
			))}
		</>
	);
};

export default CardValue;
