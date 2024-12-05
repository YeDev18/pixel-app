const Tag = ({ tag }: { tag: string }) => {
	return (
		<span className="bg-gradient-to-b from-neutral-200 to-light-300 bg-clip-text text-start text-2xl font-medium text-transparent ">
			{tag}
		</span>
	);
};

export default Tag;
