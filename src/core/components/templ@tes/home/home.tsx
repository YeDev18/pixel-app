import HeaderSection from "../../atoms/HeaderSection";

import Team from "../../molecules/dont.use/team/team";
import TextCible from "../../molecules/dontUse/textCible/TextCible";
import Cible from "../../organisms/home/cible/Cible";
import Hero from "../../organisms/home/hero/hero";
import HowWeWork from "../../organisms/home/howWeWork/howWeWork";
import MakingContact from "../../organisms/home/makingContact/makingContact";
import StayInformed from "../../organisms/home/stayInformed/stayInformed";
import Success from "../../organisms/home/success/success";
import Values from "../../organisms/home/value/values";
import ServiceAll from "../service/service";
// import Link from "next/link";

export default function HomeAll() {
	return (
		<main className="space-y-24  py-4">
			<Hero />
			<Values />
			<HeaderSection
				title="Notre Expertise, Votre succès "
				subtitle=""
				customTitleSize="52px"
				customSubtitleSize="16px"
				align="center"
			/>
			<ServiceAll />
			<HeaderSection
				title="How We Work"
				subtitle="Rejoignez ceux que nous aidons à atteindre l'excellence."
				customTitleSize="52px"
				customSubtitleSize="16px"
				align="center"
			/>

			<HowWeWork />

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
		</main>
	);
}
