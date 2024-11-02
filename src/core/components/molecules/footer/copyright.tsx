import PointFilled from "../../atoms/icons/point";

const Copyright = () => {
	return (
		<div className="flex justify-between font-medium text-light-100 max-lg:flex-col  max-lg:items-center max-lg:space-y-5">
			<p className="max-lg:text-sm">
				Copyright © 2023 Pixel Innov. All Rights Reserved
			</p>
			<div className="flex items-center justify-center gap-2 max-lg:text-sm">
				<p>Terms & Conditions</p>
				<PointFilled className="opacity-10" />

				<p>Privacy & Policy</p>
			</div>
		</div>
	);
};

export default Copyright;
