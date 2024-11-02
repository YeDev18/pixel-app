import Image from "next/image";
import ItemsHeader from "../../molecules/header/items.header";

const Header = () => {
	return (
		<nav className="fixed inset-x-1/2 top-4 z-20 flex w-[96%] -translate-x-1/2 items-center justify-between rounded-[8rem] bg-blue-700/20 px-6 py-4 text-light-100 backdrop-blur-md lg:px-6 xl:px-12">
			<div className="h-14 w-10">
				<Image
					src="/assets/Logo.webp"
					width={100}
					height={100}
					className="size-full"
					alt="logo"
				/>
			</div>
			<ItemsHeader />
		</nav>
	);
};

export default Header;
