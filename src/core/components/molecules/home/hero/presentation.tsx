import Button from "@/core/components/atoms/Button";
import PresentationMotion from "./presention.motion";

const Presentation = () => {
	return (
		<div className="overflow-hidden">
			<PresentationMotion>
				<div className="flex items-center justify-between gap-x-2 gap-y-4  max-lg:flex-col">
					<h1 className="h-fit break-normal px-2 py-4 text-3xl/relaxed   font-medium text-light-100 max-lg:text-center  lg:w-[40rem] lg:text-4xl/relaxed  xl:w-[50rem] xl:text-6xl/relaxed   ">
						Agence de marketing avec un service complet
					</h1>
					<div className=" grid grid-cols-1 place-items-center space-y-5 px-2 py-4  ">
						<p className="text-wrap text-lg/normal  text-light-100  max-lg:text-center lg:w-80 2xl:text-xl/normal">
							Amplifiez votre marque avec un marketing numérique
							expert
						</p>

						<Button className=" w-fit gap-4 lg:w-full">
							Joignez-nous
						</Button>
					</div>
				</div>
			</PresentationMotion>
		</div>
	);
};

export default Presentation;
