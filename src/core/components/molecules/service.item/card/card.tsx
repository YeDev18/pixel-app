import { Computer } from "@/core/components/atoms/icons/service.icon";

const Card = () => {
	return (
		<div className="relative flex w-96 items-start gap-2 rounded-2xl bg-blue-950 px-8 py-14">
			<span className="absolute shrink-0">
				<Computer />
			</span>

			<span className="cardText   text-pretty  indent-8 ">
				<span>Lorem ipsum </span>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
				aut veritatis reiciendis in illum ipsa nihil sunt fuga aliquam
				itaque nam culpa consectetur.
			</span>
		</div>
	);
};

export default Card;
