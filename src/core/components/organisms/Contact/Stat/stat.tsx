"use client";

import { ContactData } from "@/core/data/contact.data"; // Assurez-vous que le chemin est correct
import React, { useEffect, useState } from "react";

// Définir les types des données
interface StatData {
	Team: string;
	project: string;
	Happy: string;
}

const Stat: React.FC = () => {
	// Récupérer les statistiques avec typage
	const stats: StatData = ContactData.stat[0];

	// Déclarer les états avec typage
	const [teamCount, setTeamCount] = useState<number>(0);
	const [projectCount, setProjectCount] = useState<number>(0);
	const [happyCount, setHappyCount] = useState<number>(0);

	// Fonction d'incrémentation
	const incrementCount = (
		setCount: React.Dispatch<React.SetStateAction<number>>,
		target: number,
		step: number = 20,
		duration: number = 1000,
	) => {
		const increment = target / (duration / step);
		let count = 0;
		const interval = setInterval(() => {
			count += increment;
			if (count >= target) {
				count = target;
				clearInterval(interval);
			}
			setCount(Math.floor(count)); // Arrondir à l'entier inférieur
		}, step);
	};

	// Utiliser useEffect pour lancer l'incrémentation après le montage
	useEffect(() => {
		incrementCount(setTeamCount, parseInt(stats.Team), 20, 1000);
		incrementCount(setProjectCount, parseInt(stats.project), 20, 1000);
		incrementCount(setHappyCount, parseInt(stats.Happy), 20, 1000);
	}, [stats]);

	return (
		<div className="mb-8 mt-[180px] flex h-auto w-full items-center justify-center">
			<div className="flex size-full flex-col rounded-lg shadow-lg md:w-3/5 md:flex-row">
				{/* Team Stat */}
				<div className="flex min-h-[250px] w-full flex-col items-center justify-center border-y border-[rgba(255,255,255,0.1)] p-4 sm:w-full md:w-1/3 md:border-b md:border-r">
					<h2 className="text-[52px]  font-bold">{teamCount}+</h2>
					<p className="text-lg text-gray-500">
						Membres dans l'équipe
					</p>
				</div>
				{/* Project Stat */}
				<div className="flex min-h-[250px] w-full flex-col items-center justify-center border-y border-[rgba(255,255,255,0.1)] p-4 sm:w-full md:w-1/3 md:border-b md:border-r">
					<h2 className="text-[52px]  font-bold">{projectCount}+</h2>
					<p className="text-lg text-gray-500">Projets terminés</p>
				</div>
				{/* Happy Clients Stat */}
				<div className="flex min-h-[250px] w-full flex-col items-center justify-center border-y border-[rgba(255,255,255,0.1)] p-4 sm:w-full md:w-1/3">
					<h2 className="text-[52px]  font-bold">{happyCount}+</h2>
					<p className="text-lg text-gray-500">Clients satisfaits</p>
				</div>
			</div>
		</div>
	);
};

export default Stat;
