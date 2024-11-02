import { headerData } from "../../data/header.data";
import Logo from "../atoms/Logo";

function Header() {
	return (
		<header className=" fixed inset-x-1/2 top-6 z-40 flex w-[95%] -translate-x-1/2 items-center justify-between rounded-full border border-[rgba(225,225,225,0.1)] p-6 shadow-lg backdrop-blur-[80px]">
			<Logo />
			<div className="flex items-center gap-24 ">
				<nav className="flex items-center gap-6">
					{headerData.map((item) => (
						<a
							key={item.id}
							href={item.link}
							className="text-[16px] font-normal text-white transition duration-300 hover:text-gray-400"
						>
							{item.name}
						</a>
					))}
				</nav>

				<div className="flex items-center space-x-[32px]">
					<span>+225 07 07 07 07 07</span>
					{/* <a
						href={buttonData.link}
						className="bg-[rgba(18, 7, 28, 0.05)] bg-op`acity-20 rounded-full border border-[rgba(225,225,225,0.1)] px-4 py-2 font-bold text-white backdrop-blur-[80px] transition-all duration-300 hover:bg-transparent 
             				hover:shadow-[0_0_42px_rgba(133,72,244,1)] hover:backdrop-blur-[120px]"
					>
						{buttonData.name}
					</a> */}
				</div>
			</div>
		</header>
	);
}

export default Header;
