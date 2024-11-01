import AllServices from "../organisms/Home/AllServices/AllServices";
import Cible from "../organisms/Home/Cible/Cible";
import Hero from "../organisms/Home/Hero/Hero";
import Team from "../organisms/Home/Team/Team";
import Valeur from "../organisms/valeur";

export default function Home() {
	return (
		<div className="space-y-[180px]">
			{/* <Header /> */}
			<Hero />
			<Valeur />
			<AllServices />
			<Team />
			<Cible />
			{/* <Footer/> */}
		</div>
	);
}
