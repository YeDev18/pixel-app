import Button from "@/core/components/atoms/Button";

function TextCible() {
	return (
		<div className="flex items-center justify-between space-x-8  space-y-12  max-lg:flex-col">
			<h1 className="whitespace-nowrap text-3xl font-medium  max-lg:text-center lg:ml-20 lg:text-5xl">
				Prenez Part A Votre Succès <br />
				Avec{" "}
				<span className="font-bold text-blue-700 ">
					Pix Digital{" "}
					<span className="text-[70px] text-[#DC0000]">.</span>{" "}
				</span>
			</h1>
			<div className="ml-auto">
				<Button className=" w-fit gap-4 text-[#04374b] ">
					Contactez-Nous Maintenant
				</Button>
			</div>
		</div>
	);
}

export default TextCible;
