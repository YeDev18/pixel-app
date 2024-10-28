import Hero from "@/core/components/organisms/home/hero/hero";
import MakingContact from "@/core/components/organisms/home/makingContact/makingContact";
import StayInformed from "@/core/components/organisms/home/stayInformed/stayInformed";
import Success from "@/core/components/organisms/home/success/success";

export default function HomeAll() {
	return (
		<div className=" space-y-24 bg-blue-950 py-8">
			<Hero />
			<Success />
			<MakingContact />
			<StayInformed />
		</div>
	);
}
