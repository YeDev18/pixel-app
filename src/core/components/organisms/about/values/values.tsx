import HeadSectionAbout from "@/core/components/molecules/about/values/headSectionAbout";
import ItemsValue from "@/core/components/molecules/about/values/itemsValue";
import { ValueData } from "@/core/data/value.data";

const Value = () => {
	return (
		<section className="content-center space-y-14 text-center text-light-100">
			<HeadSectionAbout
				head="Nos Valeurs"
				information="The Team Behind Your Digital Success"
			/>
			{ValueData.map((data, index) => {
				return <ItemsValue key={index} value={data} />;
			})}
		</section>
	);
};

export default Value;
