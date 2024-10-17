import { Icon } from "@iconify/react";

const Copyright = () => {
	return (
		<div className="flex max-lg:flex-col max-lg:items-center max-lg:space-y-5 justify-between  text-light-100 font-medium">
			<p className="max-lg:text-sm">
				Copyright © 2023 Pixel Innov. All Rights Reserved
			</p>
			<div className="flex justify-center items-center gap-2 max-lg:text-sm">
				<p>Terms & Conditions</p>
				<Icon icon="tabler:point-filled" className="opacity-10" />

				<p>Privacy & Policy</p>
			</div>
		</div>
	);
};

export default Copyright;
