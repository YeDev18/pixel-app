import Link from "next/link"; // Importer le Link de Next.js
import { buttonData, headerData } from "../../../data/header.data";

function HeaderNav() {
	return (
		<>
			{/* Navigation Links */}
			<div className="flex space-x-[56px]">
				<nav className="flex items-center space-x-[26px]">
					{headerData.map((item) => (
						<Link
							key={item.id}
							href={item.link}
							className="
                text-[16px]
                font-normal shadow-inner transition duration-300 hover:shadow-[0_0_42px_rgba(19,81,106,1)]"
						>
							{item.name}
						</Link>
					))}
				</nav>

				{/* Contact Info and Get Started Button */}
				<div className="flex items-center space-x-[32px]">
					{/* Contact Number */}
					<span>+225 07 07 07 07 07</span>

					{/* Get Started Button */}
					<Link
						href={buttonData.link}
						className="rounded-full border border-[rgba(225,225,225,0.1)] p-6 py-2 font-bold shadow-[0px_1px_68px_-27px_rgba(60,160,204,0.1)_inset,0px_1px_24px_-1px_rgba(0,0,0,0.1)] backdrop-blur-[80px] transition-all duration-700 ease-in-out
                        hover:bg-transparent 
                        hover:shadow-[0px_1px_68px_-27px_rgba(60,160,204,1)_inset,0px_1px_24px_-1px_rgba(0,0,0,1)] 
                        hover:backdrop-blur-[120px]"
					>
						{buttonData.name}
					</Link>
				</div>
			</div>
		</>
	);
}

export default HeaderNav;
