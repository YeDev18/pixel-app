"use client";
import { ContactData } from "@/core/data/contact.data";
import Image from "next/image";
import { useEffect, useState } from "react";

// interface TeamInfo {
// 	Title: string;
// 	Desc: string;
// 	img: string;
// }

interface Stats {
	Team: number;
	project: number;
	Happy: number;
}

function Team() {
	const teamInfo = ContactData.Team[0];
	const stats: Stats = {
		Team: Number(ContactData.stat[0]?.Team) || 0,
		project: Number(ContactData.stat[0]?.project) || 0,
		Happy: Number(ContactData.stat[0]?.Happy) || 0,
	};

	console.log("Données de stats:", stats); // Log des données de stats

	const [countTeam, setCountTeam] = useState<number>(0);
	const [countProject, setCountProject] = useState<number>(0);
	const [countHappy, setCountHappy] = useState<number>(0);
	const [isInView, setIsInView] = useState<boolean>(false);

	const handleScroll = () => {
		const section = document.getElementById("team-section");
		if (section) {
			const { top, bottom } = section.getBoundingClientRect();
			const isVisible = top < window.innerHeight && bottom >= 0;
			setIsInView(isVisible);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		if (isInView) {
			const duration = 2000;
			const incrementTeam = Math.ceil(stats.Team / (duration / 100)) || 0;
			console.log("Incrément pour l'équipe:", incrementTeam);

			const incrementProject =
				Math.ceil(stats.project / (duration / 100)) || 0;
			console.log("Incrément pour les projets:", incrementProject);

			const incrementHappy =
				Math.ceil(stats.Happy / (duration / 100)) || 0;
			console.log(
				"Incrément pour les clients satisfaits:",
				incrementHappy,
			);

			const intervalTeam = setInterval(() => {
				setCountTeam((prev) => {
					if (prev >= stats.Team) {
						clearInterval(intervalTeam);
						return stats.Team;
					}
					return prev + incrementTeam;
				});
			}, 100);

			const intervalProject = setInterval(() => {
				setCountProject((prev) => {
					if (prev >= stats.project) {
						clearInterval(intervalProject);
						return stats.project;
					}
					return prev + incrementProject;
				});
			}, 100);

			const intervalHappy = setInterval(() => {
				setCountHappy((prev) => {
					if (prev >= stats.Happy) {
						clearInterval(intervalHappy);
						return stats.Happy;
					}
					return prev + incrementHappy;
				});
			}, 100);

			return () => {
				clearInterval(intervalTeam);
				clearInterval(intervalProject);
				clearInterval(intervalHappy);
			};
		}
	}, [isInView]);

	useEffect(() => {
		console.log(
			"Compteurs mis à jour:",
			countTeam,
			countProject,
			countHappy,
		); // Log des compteurs
	}, [countTeam, countProject, countHappy]);

	return (
		<div className="flex h-screen space-x-8 px-8" id="team-section">
			<div className="flex w-1/2 flex-col items-start justify-center space-y-12">
				<h2 className="mb-4 text-[52px] font-medium flex-shrink-0">
					{teamInfo.Title}
				</h2>
				<p className="mb-6 text-lg flex-shrink-0">{teamInfo.Desc}</p>

				<div className="size-full rounded-lg border border-[rgba(255,255,255,0.1)] p-4 shadow-md">
					<div className="flex h-full flex-col items-center justify-center space-y-10">
						<div className="flex items-center justify-center space-x-20">
							<div className="text-center">
								<h3 className="text-[52px] font-semibold">
									{countTeam}+
								</h3>
								<p>Membres de l&apos;équipe</p>
							</div>
							<div className="text-center">
								<h3 className="text-[52px] font-semibold">
									{countProject}+
								</h3>
								<p>Projets réalisés</p>
							</div>
						</div>
						<div className="text-center">
							<h3 className="text-[52px] font-semibold">
								{countHappy}+
							</h3>
							<p>Clients satisfaits</p>
						</div>
					</div>
				</div>
			</div>

			<div className="flex w-1/2 items-center justify-center">
				<Image
					src={teamInfo.img}
					alt="Team"
					className="size-full rounded-[40px] object-cover shadow-lg"
				/>
			</div>
		</div>
	);
}

export default Team;
