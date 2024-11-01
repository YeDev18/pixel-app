import Button1 from "../../atoms/button1";

const Contact = () => {
	return (
		<div className="flex flex-col items-center justify-between gap-6 rounded-3xl  bg-[#0a2b38] px-8 py-12 lg:flex-row">
			<div className="space-y-3 text-center  lg:w-[45%] lg:space-y-5 lg:text-start">
				<h2 className="text-xl font-semibold text-light-100 lg:text-3xl 2xl:text-4xl">
					Get Started With Pixel Innov
				</h2>
				<p className="text-sm/6 font-medium text-light-100 lg:text-base/8 xl:text-lg/8">
					We have considered our solutions to support every stage of
					your growth. We are the fastest and easiest way to launch.
				</p>
			</div>

			<Button1>Contact nous</Button1>
		</div>
	);
};

export default Contact;
