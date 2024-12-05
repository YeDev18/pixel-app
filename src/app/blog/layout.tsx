import HeadSection from "@/core/components/molecules/_all/head.section/head.section";
import React from "react";

export default function BlogLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<>
			<HeadSection
				head="Blog"
				information="Restez informer et Inspirer"
			/>
			{children}
		</>
	);
}
