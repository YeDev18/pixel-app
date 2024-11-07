const Tags = ({ tags }) => {
	return (
		<p className="absolute inset-4 text-blue-950 font-semibold flex flex-wrap  gap-4">
			{tags.map((tag: string, index: number) => (
				<span
					key={index}
					className="bg-light-100/60 max-lg:text-sm max-xl:text-sm backdrop-blur-md size-fit py-2 px-3 rounded-2xl shadow-md whitespace-nowrap"
				>
					{tag}
				</span>
			))}
		</p>
	);
};

export default Tags;
