import HeadSection from "@/core/components/molecules/_all/head.section/head.section";
import { ReactNode } from "react";
export default function AboutLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<HeadSection
				head="A propos de nous"
				information="Notre expertise, Notre Success"
			/>
			{children}
		</>
		// <AnimationLayout>

		// </AnimationLayout>
	);
}
