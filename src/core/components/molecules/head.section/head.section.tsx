const HeadSection = ({
	head,
	information,
}: { head: string; information: string }) => {
	return (
		<>
			<div className="relative  my-8 h-[35vh] content-center overflow-hidden rounded-[3rem]  bg-blue-900 p-4 text-center lg:p-8">
				<div className="ombre absolute inset-x-1/2 -top-20 -translate-x-1/2"></div>
				<hgroup className="space-y-2">
					<h1 className=" h-fit overflow-hidden p-4 text-3xl font-semibold text-light-100  lg:text-4xl xl:text-5xl">
						{head}
					</h1>
					<p className="text-lg font-medium text-light-100 max-lg:text-sm">
						{information}
					</p>
				</hgroup>
			</div>
		</>
	);
};

export default HeadSection;
