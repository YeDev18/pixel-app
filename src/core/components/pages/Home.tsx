import AllServices from "../molecules/dontUse/allServices/all.services";
import Cible from "../organisms/home/cible/Cible";
// import Hero from "../organisms/Home/Hero/Hero";
import Team from "../molecules/dontUse/team/team";
import Valeur from "../organisms/home/value/values";

export default function Home() {
	return (
		<div className="space-y-[180px]">
			{/* <Header /> */}
			{/* <Hero /> */}
			<Valeur />
			<AllServices />
			<Team />
			<Cible />
			{/* <Footer/> */}
		</div>
	);
}
