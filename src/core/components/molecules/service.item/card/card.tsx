const Card = ({ card }) => {
	return (
		<div>
			<span>{card.icon}</span>
			<span>{card.title}</span>
			<span>{card.paragraph}</span>
		</div>
	);
};

export default Card;
