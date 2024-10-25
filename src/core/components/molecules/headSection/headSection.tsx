const HeadSection = ({
	head,
	information,
}: { head: string; information: string }) => {
	return (
		<>
			<div className="bg-blue-900  rounded-2xl my-8 p-4 lg:p-8 h-[35vh] content-center text-center relative overflow-hidden">
				<div className="ombre absolute -top-20 inset-x-1/2 -translate-x-1/2"></div>
				<hgroup className="space-y-2">
					<h1 className=" text-3xl lg:text-4xl xl:text-5xl h-fit font-semibold text-light-100  overflow-hidden p-4">
						{head}
					</h1>
					<p className="text-lg text-light-100 max-lg:text-sm font-medium">
						{information}
					</p>
				</hgroup>
			</div>
		</>
	);
};

export default HeadSection;
