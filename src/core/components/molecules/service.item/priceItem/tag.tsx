const Tag = ({ tag }: { tag: string }) => {
	return (
		<span className="bg-gradient-to-b from-neutral-200 to-light-300 bg-clip-text text-start text-sm font-medium text-transparent lg:text-xl ">
			{tag}
		</span>
	);
};

export default Tag;
