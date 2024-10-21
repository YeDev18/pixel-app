const Tags = ({ tags }) => {
	return (
		<p className="absolute inset-4 text-blue-950 font-semibold flex  gap-4">
			{tags.map((tag: string, index: number) => (
				<span
					key={index}
					className="bg-light-100/60 backdrop-blur-md size-fit py-2 px-6 rounded-2xl shadow-md"
				>
					{tag}
				</span>
			))}
		</p>
	);
};

export default Tags;
