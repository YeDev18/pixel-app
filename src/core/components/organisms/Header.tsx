import { buttonData, headerData } from "../../data/header.data";
import Logo from "../atoms/Logo";

function Header() {
	return (
		<header className=" w-[95%] p-6 justify-between items-center flex fixed top-6 inset-x-1/2 -translate-x-1/2 bg-opacity-20 backdrop-filter backdrop-blur-[80px] border border-[rgba(225,225,225,0.1)] rounded-full shadow-lg z-40">
			<Logo />
			<div className="flex gap-24 items-center ">
				<nav className="flex items-center gap-6">
					{headerData.map((item) => (
						<a
							key={item.id}
							href={item.link}
							className="hover:text-gray-400 text-[16px] font-normal text-white transition duration-300"
						>
							{item.name}
						</a>
					))}
				</nav>

				<div className="flex items-center space-x-[32px]">
					<span>+225 07 07 07 07 07</span>
					<a
						href={buttonData.link}
						className="bg-[rgba(18, 7, 28, 0.05)] bg-op`acity-20 backdrop-filter backdrop-blur-[80px] border border-[rgba(225,225,225,0.1)] text-white font-bold py-2 px-4 rounded-full transition-all duration-300 
             hover:backdrop-blur-[120px] 
             hover:shadow-[0_0_42px_rgba(133,72,244,1)] hover:bg-transparent"
					>
						{buttonData.name}
					</a>
				</div>
			</div>
		</header>
	);
}

export default Header;
