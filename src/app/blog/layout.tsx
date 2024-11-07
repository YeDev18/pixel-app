import HeadSection from "@/core/components/molecules/_all/head.section/head.section";
import React from "react";

export default function BlogLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="space-y-16">
			<HeadSection
				head="Blog"
				information="Restez informer et Inspirer"
			/>
			{children}
		</div>
	);
}
