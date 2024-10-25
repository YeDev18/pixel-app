import MakingContact from "@/core/components/organisms/home/makingContact/makingContact";
import StayInformed from "@/core/components/organisms/home/stayInformed/stayInformed";
import Success from "@/core/components/organisms/home/success/success";
import Link from "next/link";

export default function HomeAll() {
	return (
		<div className=" bg-blue-950 py-8 space-y-24">
			<Link href="/about" className="text-light-100">
				About
			</Link>
			<Success />
			<MakingContact />
			<StayInformed />
		</div>
	);
}
