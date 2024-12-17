"use client";
import CloseIcons from "@/core/components/atoms/icons/close";
import Input from "@/core/components/atoms/input";
import { useService } from "@/core/context/service/service.provider";
import { useRouter } from "next/navigation";

const FormPackages = () => {
	const { choicePackages, setChoicePackages } = useService();
	const router = useRouter();
	console.log(choicePackages);

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
					<fieldset className=" items-start justify-start gap-4 rounded-lg bg-[#04374b]/30 px-4 py-6  text-white  shadow-inner">
						<div className="flex w-full flex-col gap-y-2 ">
							{choicePackages?.map((choice, index) => {
								if (choice.service === " ") return;
								return (
									<div key={index}>
										<div className="flex w-3/4 items-center justify-between">
											<label className="text-sm">
												{choice.service}
											</label>
											<button
												onClick={() => {
													setChoicePackages(
														choicePackages.filter(
															(a) =>
																a.id !==
																choice.id,
														),
													);
												}}
											>
												<span>
													<CloseIcons />
												</span>
											</button>
										</div>

										<input
											type="text"
											className="w-3/4 rounded-md bg-blue-950 p-2 text-start text-sm outline-none"
											value={`${choice.tag} | ${choice.package}`}
											disabled
										/>
									</div>
								);
							})}
						</div>
					</fieldset>
					<em
						className="cursor-pointer px-2 py-4 font-medium"
						onClick={() => router.back()}
					>
						choisissez un ou plusieurs pack(s)
					</em>
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
