import CibleCard from "@/core/components/molecules/Home/CibleCard/CibleCard";
import { useMemo } from "react";

function Cible() {
	const ids = Array.from({ length: 26 }, (_, i) => i + 1);

	// Fonction pour mélanger l'ordre des ids
	const shuffledIds = useMemo(() => {
		const array = [...ids];
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}, []);

	return (
		<div className=" relative space-y-4 sm:space-y-4 md:space-y-4 ">
			{/* Ombre à gauche avec effet de fumée */}
			<div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-[#07161b] via-[#07161b] to-transparent sm:w-36 md:w-52" />

			{/* Première ligne : défile de gauche à droite */}
			<div className="relative overflow-hidden">
				<div className="animate-scroll-right inline-flex gap-2 sm:gap-4">
					{ids.map((id) => (
						<CibleCard key={id} id={id} />
					))}
					{ids.map((id) => (
						<CibleCard key={`clone-${id}`} id={id} />
					))}
				</div>
			</div>

			{/* Deuxième ligne : défile de droite à gauche */}
			<div className="relative overflow-hidden">
				<div className="animate-scroll-left inline-flex gap-2 sm:gap-4">
					{ids.map((id) => (
						<CibleCard key={id} id={id} />
					))}
					{ids.map((id) => (
						<CibleCard key={`clone-${id}`} id={id} />
					))}
				</div>
			</div>

			{/* Troisième ligne : défile de gauche à droite, ordre aléatoire */}
			<div className="relative overflow-hidden">
				<div className="animate-scroll-right inline-flex gap-2 sm:gap-4">
					{shuffledIds.map((id) => (
						<CibleCard key={id} id={id} />
					))}
					{shuffledIds.map((id) => (
						<CibleCard key={`clone-${id}`} id={id} />
					))}
				</div>
			</div>

			{/* Ombre à droite avec effet de fumée */}
			<div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-[#07161b] via-[#07161b] to-transparent sm:w-36 md:w-52" />

			{/* Ombre en bas avec effet de fumée */}
			<div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16 bg-gradient-to-t from-[#07161b] via-[#07161b] to-transparent sm:h-24 md:h-28" />
		</div>
	);
}

export default Cible;
