import { InputButton } from "@/core/components/atoms/input-button";
import InputEmail from "@/core/components/atoms/input-email";
import InputText from "@/core/components/atoms/input-text";

const FormField = () => {
	return (
		<div className="">
			<form className=" flex flex-col justify-center gap-8 py-2">
				<InputText />
				<InputEmail />
				<InputButton>Commencez maintenant</InputButton>
			</form>
		</div>
	);
};

export default FormField;
