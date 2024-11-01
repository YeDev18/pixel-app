import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ValeursData from "../../data/valeur.data"; // Assurez-vous que le chemin d'import est correct

function Valeur() {
	return (
		<div className=" flex items-center justify-center">
			<div className="bgheader w-fit grid grid-cols-2 gap-4 p-4 place-content-center justify-center">
				{ValeursData.slice(0, 4).map((valeur) => (
					<div
						key={valeur.id}
						className="w-[350px] bg-[#0a2b38] flex items-start p-6 rounded-[50px]   transition-shadow duration-300 mx-auto"
					>
						{/* Contenu de la carte */}
						<div>
							<FontAwesomeIcon
								icon={valeur.icon}
								className="w-6 h-6 text-white"
							/>
							<h3 className="text-[18px] font-bold ml-6">
								{/* Logo juste à côté du nom */}
								{valeur.name}
								<span className="block mt-2 font-normal text-[14px]">
									{valeur.description}
								</span>
							</h3>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Valeur;
