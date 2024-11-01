const HeadSectionAbout = ({
	head,
	information,
}: { head: string; information: string }) => {
	return (
		<hgroup className="space-y-2">
			<h2 className="text-3xl/relaxed lg:text-4xl/relaxed xl:text-5xl/relaxed font-medium">
				{head}
			</h2>
			<p className="text-lg text-light-100 max-lg:text-sm font-medium">
				{information}
			</p>
		</hgroup>
	);
};

export default HeadSectionAbout;
