import HeaderSection from "../../atoms/HeaderSection";
import ExpandingCard from "../../molecules/dont.use/expandingcard/expandingcard";

import Team from "../../molecules/dont.use/team/team";
import TextCible from "../../molecules/dontUse/textCible/TextCible";
import HowWeWork from "../../molecules/_all/HowWeWork/HowWeWork";
import HowWeWorkList from "../../organisms/Home/HowWeWork.tsx/HowWeWork";
import Hero from "../../organisms/Home/hero/hero";
import Values from "../../organisms/Home/value/values";
import ItemsService from "../../organisms/_all/itemsService/itemsService";
import Success from "../../organisms/Home/success/success";
import MakingContact from "../../organisms/Home/makingContact/makingContact";
import Cible from "../../organisms/Home/cible/Cible";
import StayInformed from "../../organisms/Home/stayInformed/stayInformed";
// import Link from "next/link";

export default function HomeAll() {
	return (
		<div className="space-y-24 py-4">
			<Hero />
			<Values />
			<HeaderSection
				title="Notre Expertise, Votre succès "
				subtitle=""
				customTitleSize="52px"
				customSubtitleSize="16px"
				align="center"
			/>
			
			<ItemsService/>
			{/* <ExpandingCard/> */}
			<HeaderSection
				title="Nos Projets à succès"
				subtitle="Découvrez comment nous avons aidé nos clients à obtenir des résultats remarquables"
				customTitleSize="52px"
				customSubtitleSize="16px"
				align="center"
			/>
			<Success />
			<Team />
			<MakingContact />
			<HeaderSection
				title="Vous Faites Partir De Nos Cibles"
				subtitle="Rejoignez ceux que nous aidons à atteindre l'excellence."
				customTitleSize="52px"
				customSubtitleSize="16px"
				align="center"
			/>
			<Cible />
			<TextCible />
			<HeaderSection
				title="Restez Informé Et Inspriré"
				subtitle="Découvrez Nos Dernières Idées, Astuces Et Tendances"
				customTitleSize="52px"
				customSubtitleSize="16px"
				align="center"
			/>
			<StayInformed />
		</div>
	);
}
