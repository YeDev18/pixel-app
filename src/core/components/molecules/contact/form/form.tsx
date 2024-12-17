"use client";
import Input from "@/core/components/atoms/input";
import Select from "@/core/components/atoms/select";

const FormField = () => {
	// const { choicePackages } = useService();
	const options = [
		{ value: "web", label: "Développement Web" },
		{ value: "audio", label: "Audio Visuel" },
		{ value: "community", label: "Community Management" },
		{ value: "design", label: "Conception Graphique" },
	];
	return (
		<div className="flex size-full h-fit flex-col  items-center justify-center gap-4 rounded-3xl bg-blue-800  py-4 lg:w-[50rem]">
			<h4 className=" text-4xl font-extralight text-light-100">
				Contactez-Nous
			</h4>
			<form className="flex w-2/4 flex-col gap-2 max-md:w-full max-md:px-4 lg:w-3/4">
				<Input
					outline-none
					border-none
					className=" w-full border-none bg-[#04374b] outline-none"
					type="text"
					placeholder="Nom"
				/>
				<Input
					outline-none
					border-none
					className=" w-full border-none bg-[#04374b] outline-none"
					type="Number"
					placeholder="Numéro De Téléphone"
				/>
				<Input
					className=" w-full border-none bg-[#04374b] outline-none"
					type="email"
					placeholder="Email"
				/>
				<Input
					className=" w-full border-none bg-[#04374b] outline-none"
					type="text"
					placeholder="Secteur D'activité"
				/>
				<Select
					className="w-full border-none bg-[#04374b] outline-none"
					options={options}
				/>

				<div className="h-56 max-h-60 w-full overflow-hidden  py-2 lg:px-1">
					<textarea
						className="h-52 max-h-52 min-h-16 w-full rounded-lg bg-[#04374b] p-3  text-white shadow-inner outline-none"
						placeholder="Dites Nous Vos Besoins"
					></textarea>
				</div>

				<button className=" overflow-hidden rounded-full border bg-light-100 py-4 text-base font-semibold text-blue-950 ">
					Envoyez
				</button>
			</form>
		</div>
	);
};

export default FormField;
