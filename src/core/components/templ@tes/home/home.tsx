
import BgCard from "../../atoms/bgCard";
import ServiceHeaderCard from "../../atoms/serviceHeaderCard/headerCard";
import Subtitle from "../../atoms/Subtitle";
import Title from "../../atoms/HeaderSection";
import ExpandingCard from "../../molecules/dontUse/expandingcard/expandingcard";
import ProcessContainer from "../../molecules/dontUse/processCard/ProcessCard";
import Team from "../../molecules/dontUse/team/team";
import ServiceStackList from "../../molecules/service/ServiceStack/SeviceStack";
import ItemsService from "../../organisms/_all/itemsService/itemsService";
import Cible from "../../organisms/Home/cible/Cible";
import Hero from "../../organisms/Home/hero/hero";
import MakingContact from "../../organisms/Home/makingContact/makingContact";
import StayInformed from "../../organisms/Home/stayInformed/stayInformed";
import Success from "../../organisms/Home/success/success";
import Values from "../../organisms/Home/value/values";
import HeaderSection from "../../atoms/HeaderSection";
import TextCible from "../../molecules/dontUse/textCible/TextCible";
// import Link from "next/link";

export default function HomeAll() {
	return (
		<div className="space-y-24 py-4">
			<Hero />
			<Values />
			<HeaderSection
				title="Notre Expertise, Votre succès "
				customTitleSize="52px"
				customSubtitleSize="16px"
				align="center"
			/>
			<ItemsService/>
			<ExpandingCard/>
			<HeaderSection
				title="Nos Projets à succès"
				subtitle="Découvrez comment nous avons aidé nos clients à obtenir des résultats remarquables"
				customTitleSize="52px"
				customSubtitleSize="16px"
				align="center"
			/>
			<Success />
			<Team/>
			<MakingContact />
			<HeaderSection
				title="Vous Faites Partir De Nos Cibles"
				subtitle="Rejoignez ceux que nous aidons à atteindre l'excellence."
				customTitleSize="52px"
				customSubtitleSize="16px"
				align="center"
			/>
				<Cible/>
			<TextCible/>
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
