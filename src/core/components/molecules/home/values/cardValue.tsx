import ValeursData from "@/core/data/valeur.data";

const CardValue = () => {
	return (
		<div>
			{ValeursData.slice(0, 4).map((valeur) => (
				<div
					key={valeur.id}
					className="mx-auto flex w-[350px] items-start rounded-[50px] bg-[#0a2b38] p-6 transition-shadow duration-300"
				>
					<div>
						{/* <FontAwesomeIcon
							icon={valeur.icon}
							className="size-6 text-white"
						/> */}
						<h3 className="ml-6 text-[18px] font-bold">
							{valeur.name}
							<span className="mt-2 block text-[14px] font-normal">
								{valeur.description}
							</span>
						</h3>
					</div>
				</div>
			))}
		</div>
	);
};

export default CardValue;
