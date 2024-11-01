import { Icon } from "@iconify/react";
import servicedata from "../../../../data/service.data";

function AllServices() {
	const firstRow = servicedata.slice(0, 2);
	const secondRow = servicedata.slice(2, 5);
	const thirdRow = servicedata.slice(5, 7);
	const fourthRow = servicedata.slice(7, 9);

	return (
		<div className="bgheader flex flex-col justify-center space-y-3 sm:space-y-4">
			{/* Première ligne avec 2 services */}
			<div className="flex w-full flex-wrap justify-center gap-1 sm:gap-4">
				{firstRow.map((service) => (
					<div
						key={service.id}
						className="group relative flex h-[56px] w-fit items-center justify-center gap-2 rounded-full border border-gray-300 border-opacity-10 p-1 px-3 shadow-lg transition-all delay-150 duration-300 ease-in hover:bg-[#0a2b38] sm:h-[88px] sm:gap-6 sm:p-2 sm:px-6"
					>
						<span className="text-[20px] transition-opacity delay-75 duration-300 group-hover:opacity-0 sm:text-[32px]">
							{service.icon}
						</span>

						<span className="absolute left-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:left-4">
							<div className="flex size-[32px] items-center justify-center rounded-full bg-[rgba(0,0,0,0.3)] sm:size-[50px]">
								<Icon
									icon="solar:round-arrow-right-up-bold"
									style={{
										color: "#ffffff",
										fontSize: "32px",
									}}
								/>
							</div>
						</span>

						<span className="text-[16px] sm:text-[32px]">
							{service.name}
						</span>
					</div>
				))}
			</div>

			{/* Deuxième ligne avec 3 services */}
			<div className="flex w-full flex-wrap justify-center gap-1 sm:gap-4">
				{secondRow.map((service) => (
					<div
						key={service.id}
						className="group relative flex h-[56px] w-fit items-center justify-center gap-2 rounded-full border border-gray-300 border-opacity-10 p-1 px-3 shadow-lg transition-all delay-150 duration-300 ease-in hover:bg-[#0a2b38] sm:h-[88px] sm:gap-6 sm:p-2 sm:px-6"
					>
						<span className="text-[20px] transition-opacity delay-75 duration-300 group-hover:opacity-0 sm:text-[32px]">
							{service.icon}
						</span>

						<span className="absolute left-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:left-4">
							<div className="flex size-[32px] items-center justify-center rounded-full bg-[rgba(0,0,0,0.3)] sm:size-[50px]">
								<Icon
									icon="solar:round-arrow-right-up-bold"
									style={{
										color: "#ffffff",
										fontSize: "32px",
									}}
								/>
							</div>
						</span>

						<span className="text-[16px] sm:text-[32px]">
							{service.name}
						</span>
					</div>
				))}
			</div>

			{/* Troisième ligne avec 2 services */}
			<div className="flex w-full flex-wrap justify-center gap-1 sm:gap-4">
				{thirdRow.map((service) => (
					<div
						key={service.id}
						className="group relative flex h-[56px] w-fit items-center justify-center gap-2 rounded-full border border-gray-300 border-opacity-10 p-1 px-3 shadow-lg transition-all delay-150 duration-300 ease-in hover:bg-[#0a2b38] sm:h-[88px] sm:gap-6 sm:p-2 sm:px-6"
					>
						<span className="text-[20px] transition-opacity delay-75 duration-300 group-hover:opacity-0 sm:text-[32px]">
							{service.icon}
						</span>

						<span className="absolute left-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:left-4">
							<div className="flex size-[32px] items-center justify-center rounded-full bg-[rgba(0,0,0,0.3)] sm:size-[50px]">
								<Icon
									icon="solar:round-arrow-right-up-bold"
									style={{
										color: "#ffffff",
										fontSize: "32px",
									}}
								/>
							</div>
						</span>

						<span className="text-[16px] sm:text-[32px]">
							{service.name}
						</span>
					</div>
				))}
			</div>

			{/* Quatrième ligne avec 2 services */}
			<div className="flex w-full flex-wrap justify-center gap-1 sm:gap-4">
				{fourthRow.map((service) => (
					<div
						key={service.id}
						className="group relative flex h-[56px] w-fit items-center justify-center gap-2 rounded-full border border-gray-300 border-opacity-10 p-1 px-3 shadow-lg transition-all delay-150 duration-300 ease-in hover:bg-[#0a2b38] sm:h-[88px] sm:gap-6 sm:p-2 sm:px-6"
					>
						<span className="text-[20px] transition-opacity delay-75 duration-300 group-hover:opacity-0 sm:text-[32px]">
							{service.icon}
						</span>

						<span className="absolute left-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:left-4">
							<div className="flex size-[32px] items-center justify-center rounded-full bg-[rgba(0,0,0,0.3)] sm:size-[50px]">
								<Icon
									icon="solar:round-arrow-right-up-bold"
									style={{
										color: "#ffffff",
										fontSize: "32px",
									}}
								/>
							</div>
						</span>

						<span className="text-[16px] sm:text-[32px]">
							{service.name}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}

export default AllServices;
