import HeadSection from "@/core/components/molecules/_all/head.section/head.section";
import React from "react";

export default function ProjectLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="space-y-16">
			<HeadSection
				head="Projet"
				information="Notre, Expertise votre succès"
			/>
			{children}
		</div>
	);
}
