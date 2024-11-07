
import Team from "../../molecules/dontUse/team/team";
import Cible from "../../organisms/Home/cible/Cible";
import Hero from "../../organisms/Home/hero/hero";
import MakingContact from "../../organisms/Home/makingContact/makingContact";
import StayInformed from "../../organisms/Home/stayInformed/stayInformed";
import Success from "../../organisms/Home/success/success";
import Values from "../../organisms/Home/value/values";
import ItemsService from "../../organisms/service/itemsService/items.service";
// import Link from "next/link";

export default function HomeAll() {
	return (
		<div className=" space-y-24  py-4">
			{/* <div className="bg-red-200 p-4">
				<Link href="./animation">Animation</Link>
			</div> */}

			<Hero />
			<Values />
			<ItemsService/>
			<Success />
			<Team/>
			<MakingContact />
			<Cible/>
			<StayInformed />
		</div>
	);
}
