import MakingContact from "@/core/components/organisms/makingContact/makingContact";
import StayInformed from "@/core/components/organisms/stayInformed/stayInformed";
import Success from "@/core/components/organisms/success/success";

export default function Home() {
	return (
		<div className=" bg-blue-950 py-8 space-y-24">
			<Success />
			<MakingContact />
			<StayInformed />
		</div>
	);
}
