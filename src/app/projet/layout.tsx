import HeadSection from "@/core/components/molecules/_all/head.section/head.section";
import React from "react";

export default function ProjectLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<>
			<HeadSection
				head="Projet"
				information="Notre, Expertise votre succès"
			/>
			{children}
		</>
	);
}
