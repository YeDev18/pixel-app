import HeadSectionAbout from "@/core/components/molecules/about/values/headSectionAbout";
import ItemsValue from "@/core/components/molecules/about/values/itemsValue";

const Value = () => {
	return (
		<section className="space-y-14 content-center text-center text-light-100">
			<HeadSectionAbout
				head="Nos Valeurs"
				information="The Team Behind Your Digital Success"
			/>
			<ItemsValue />
		</section>
	);
};

export default Value;
