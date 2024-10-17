import Button from "@/core/components/atoms/Button";

const Contact = () => {
	return (
		<div className="flex flex-col lg:flex-row bg-blue-700 py-12 px-8  gap-6 rounded-3xl items-center justify-between">
			<div className="space-y-3 lg:space-y-5  text-center lg:text-start lg:w-[45%]">
				<h2 className="text-xl lg:text-3xl 2xl:text-4xl font-semibold text-light-100">
					Get Started With Pixel Inov
				</h2>
				<p className="text-sm/6 lg:text-base/8 xl:text-lg/8 font-medium text-light-100">
					We have considered our solutions to support every stage of
					your growth. We are the fastest and easiest way to launch.
				</p>
			</div>

			<Button>Contact nous</Button>
		</div>
	);
};

export default Contact;
