import Hero from "@/core/components/organisms/home/hero/hero";
import MakingContact from "@/core/components/organisms/home/makingContact/makingContact";
import StayInformed from "@/core/components/organisms/home/stayInformed/stayInformed";
import Success from "@/core/components/organisms/home/success/success";
import ItemsService from "../../organisms/_all/itemsService/items.service";
import Values from "../../organisms/home/value/values";
// import Link from "next/link";

export default function HomeAll() {
	return (
		<div className="space-y-24 py-4">
			<Hero />
			<Values />
			<Success />
			<ItemsService />
			<MakingContact />
			<StayInformed />
		</div>
	);
}
