import FormField from "../../molecules/makingContact/formField";
import TextFormField from "../../molecules/makingContact/textFormField";

const MakingContact = () => {
	return (
		<div className="h-[60vh] flex justify-center items-center bg-cover bg-no-repeat makingContactBg rounded-3xl">
			<div className="size-full px-10 xl:px-24 space-y-10 lg:size-3/4 backdrop-blur-xl border border-red-100 rounded-3xl border-opacity-25 flex max-lg:flex-col items-center justify-center lg:justify-between">
				<TextFormField />
				<FormField />
			</div>
		</div>
	);
};

export default MakingContact;
