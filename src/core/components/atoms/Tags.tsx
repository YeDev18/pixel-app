type TagsProps = {
	tags: string[];
};
const Tags = ({ tags }: TagsProps) => {
	return (
		<p className="absolute inset-4 flex flex-wrap gap-4 font-semibold  text-blue-950">
			{tags.map((tag: string, index: number) => (
				<span
					key={index}
					className="size-fit whitespace-nowrap rounded-2xl bg-light-100/60 px-3 py-2 shadow-md backdrop-blur-md max-xl:text-sm max-lg:text-sm"
				>
					{tag}
				</span>
			))}
		</p>
	);
};

export default Tags;
