import HeadSection from "@/core/components/molecules/_all/head.section/head.section";
import { ReactNode } from "react";

export default function ChoixPackageLayout({
	children,
}: { children: ReactNode }) {
	return (
		<>
			<HeadSection
				head="Choix Package"
				information="Notre expertise, Notre Success"
			/>
			{children}
		</>
	);
}
