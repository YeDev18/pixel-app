import MakingContact from "@/core/components/organisms/makingContact/makingContact";
import Success from "@/core/components/organisms/success/success";

export default function Home() {
	return (
		<div className=" bg-blue-950 container mx-auto py-8 space-y-24">
			<Success />
			<MakingContact />
		</div>
	);
}
