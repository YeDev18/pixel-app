import { Computer } from "@/core/components/atoms/icons/service.icon";

const Card = () => {
	return (
		<div className="flex w-[35rem] items-start  gap-2">
			<span className="shrink-0">
				<Computer />
			</span>

			<span className="cardText mr-16 text-wrap ">
				<span>Lorem ipsum </span>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
				aut veritatis reiciendis in illum ipsa nihil sunt fuga aliquam
				itaque nam culpa consectetur error, necessitatibus saepe
				inventore omnis alias quos.
			</span>
		</div>
	);
};

export default Card;
