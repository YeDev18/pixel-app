import { CardProps } from "@/core/data/service.data";

const Card = ({ array }: { array: CardProps }) => {
	return (
		<div className="relative flex w-96 items-start gap-2 rounded-[2.5rem] bg-[#0a1b20] px-8 py-14 text-light-100 shadow-md">
			<span className="absolute shrink-0 text-2xl">{array.icon}</span>

			<span className="cardText text-pretty indent-8  font-light leading-relaxed ">
				<span className="font-semibold">{array.title}</span>
				{array.paragraph}
			</span>
		</div>
	);
};

export default Card;
