import Input from "@/core/components/atoms/input";
import { InputButton } from "@/core/components/atoms/input-button";

const FormField = () => {
	return (
		<div className="">
			<form className=" flex flex-col justify-center gap-8 py-2">
				<Input type="text" />
				<Input type="email" />
				<InputButton>Commencez maintenant</InputButton>
			</form>
		</div>
	);
};

export default FormField;
