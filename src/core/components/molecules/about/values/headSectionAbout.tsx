const HeadSectionAbout = ({
	head,
	information,
}: { head: string; information: string }) => {
	return (
		<hgroup className="space-y-2">
			<h2 className="text-3xl/relaxed font-medium lg:text-4xl/relaxed xl:text-5xl/relaxed">
				{head}
			</h2>
			<p className="text-lg font-medium text-light-100 max-lg:text-sm">
				{information}
			</p>
		</hgroup>
	);
};

export default HeadSectionAbout;
