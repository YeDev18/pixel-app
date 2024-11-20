import FormField from "../../../molecules/_all/making.contact/formField";
import TextFormField from "../../../molecules/_all/making.contact/textFormField";

const MakingContact = () => {
	return (
		<div className="makingContactBg flex h-[60vh] items-center justify-center rounded-3xl bg-cover bg-no-repeat">
			<div className="flex size-full items-center justify-center space-y-10 rounded-3xl border border-red-100/20 px-10 backdrop-blur-xl max-lg:flex-col lg:size-3/4 lg:justify-between xl:px-24">
				<TextFormField />
				<FormField />
			</div>
		</div>
	);
};

export default MakingContact;
