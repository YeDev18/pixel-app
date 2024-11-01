import HeadSection from "@/core/components/molecules/headSection/headSection";
import AboutAll from "@/core/components/templ@tes/about/about";

export default function About() {
	return (
		<>
			<HeadSection
				head="A propos de nous"
				information="Our Expertise, Your Success"
			/>
			<AboutAll />
		</>
	);
}
