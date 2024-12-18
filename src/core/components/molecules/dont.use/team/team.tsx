"use client";
import Button from "@/core/components/atoms/Button";
import { ContactData } from "@/core/data/contact.data";
import { useEffect, useState } from "react";

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

	console.log("Données de stats:", stats);

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
		<div
			className="flex h-screen space-y-8 max-lg:flex-col lg:gap-4 "
			id="team-section"
		>
			<div className="flex w-full flex-col items-start justify-center space-y-8  max-lg:items-center lg:w-1/2">
				<h2 className="shrink-0  text-3xl font-medium leading-relaxed lg:text-5xl">
					{teamInfo.Title}
				</h2>
				<p className="mb-12 shrink-0 text-base max-lg:text-center">
					{teamInfo.Desc}
				</p>
				<Button className="w-fit shrink-0 gap-4 align-middle text-black">
					Voir plus
				</Button>

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

			<div className="flex items-center justify-center rounded-lg bg-emerald-400 max-lg:h-full lg:w-1/2">
				{/* <Image
					src={teamInfo.img}
					width={50}
					height={50}
					alt="Team"
					className="w-full rounded-[40px] object-cover shadow-lg"
				/> */}
			</div>
		</div>
	);
}

export default Team;
