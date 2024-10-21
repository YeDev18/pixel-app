import { InputButton } from "../../atoms/input-button";
import InputEmail from "../../atoms/input-email";
import InputText from "../../atoms/input-text";

const FormField = () => {
	return (
		<div className="">
			<form className=" flex justify-center flex-col gap-8 py-2">
				<InputText />
				<InputEmail />
				<InputButton>Commencez maintenant</InputButton>
			</form>
		</div>
	);
};

export default FormField;
