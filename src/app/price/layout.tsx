import HeadSection from "@/core/components/molecules/_all/head.section/head.section";
import { ReactNode } from "react";

const PriceLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<HeadSection
				head="Traifs"
				information="Restez informer et Inspirer"
			/>
			{children}
		</>
	);
};

export default PriceLayout;
