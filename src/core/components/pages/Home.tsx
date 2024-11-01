import AllServices from "../organisms/home/allServices/AllServices";
import Cible from "../organisms/home/cible/Cible";
// import Hero from "../organisms/Home/Hero/Hero";
import Team from "../organisms/home/team/Team";
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
