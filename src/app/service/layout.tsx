import HeadSection from "@/core/components/molecules/_all/head.section/head.section";
import React from "react";

export default function ServiceLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<>
			<HeadSection
				head="Service"
				information="Notre, Expertise votre succès"
			/>
			{children}
		</>
	);
}
