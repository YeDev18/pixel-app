import Presentation from "@/core/components/molecules/home/hero/presentation";
import HeroMotion from "./hero.motion";
const Hero = () => {
	return (
		<div className="h-[94vh] content-center ">
			<HeroMotion>
				<Presentation />
			</HeroMotion>
		</div>
	);
};

export default Hero;
