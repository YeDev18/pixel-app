import Button from "@/core/components/atoms/Button";

const Contact = () => {
	return (
		<div className="flex flex-col lg:flex-row bg-blue-700 p-4 gap-4 rounded-2xl items-center justify-between">
			<div className="space-y-4 lg:space-y-8 text-center lg:text-start">
				<h2 className=" text-2xl lg:text-4xl font-semibold text-light-100">
					Get Started With Pixel Inov
				</h2>
				<p className="text-base lg:text-lg font-medium text-light-100">
					We have considered our solutions to support every stage of
					your growth. We are the fastest and easiest way to launch.
				</p>
			</div>

			<Button>Contact nous</Button>
		</div>
	);
};

export default Contact;
