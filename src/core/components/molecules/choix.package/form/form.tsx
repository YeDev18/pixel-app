"use client";
import Input from "@/core/components/atoms/input";

const FormPackages = () => {
	// const { choicePackages } = useService();

	return (
		<div className="my-8 flex size-full h-fit  flex-col items-center justify-center gap-4 rounded-3xl bg-blue-800   py-4 lg:w-[50rem]">
			<h4 className=" text-xl font-extralight text-light-100 lg:text-4xl">
				Choissisons le meilleur
			</h4>
			<form className="flex w-2/4 flex-col gap-2 max-md:w-full max-md:px-4 lg:w-3/4">
				<Input
					outline-none
					border-none
					className="w-full border-none bg-[#04374b] outline-none"
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
				<div>
					<fieldset className="flex flex-wrap items-start justify-start gap-4 rounded-lg bg-[#04374b]/30 p-4  text-white shadow-inner">
						{/* {choicePackages?.map((choice, index) => (
							<>
								<label>Viva</label>
								<input
									key={index}
									type="text"
									className=" line-clamp-1  w-60 truncate rounded-md bg-slate-600 p-1 text-center outline-none"
									// value={}
									disabled
								/>
							</>
						))} */}
						<div className="w-fit">
							<label className="text-xs">Viva</label>
							<input
								type="text"
								className=" line-clamp-1 w-full rounded-md bg-slate-600 p-1 text-center outline-none"
								value="Support de Communication | Emmeraude"
								disabled
							/>
						</div>
						<div className="w-fit">
							<label className="text-xs">Viva</label>
							<input
								type="text"
								className=" line-clamp-1 w-full rounded-md bg-slate-600 p-1 text-center outline-none"
								value="Support de Communication | Emmeraude"
								disabled
							/>
						</div>
						<div className="w-fit">
							<label className="text-xs">Viva</label>
							<input
								type="text"
								className=" line-clamp-1 w-full rounded-md bg-slate-600 p-1 text-center outline-none"
								value="Support de Communication | Emmeraude"
								disabled
							/>
						</div>
					</fieldset>
					<em className="p-4">choisir le packs</em>
				</div>

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

export default FormPackages;
