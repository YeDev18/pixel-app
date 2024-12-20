import { Logo } from "@/core/components/atoms/logo";
import ItemsHeader from "../../../molecules/_all/header/items.header";

const Header = () => {
	return (
		<nav className="fixed inset-x-1/2 top-4 z-40  flex w-[96.5%] -translate-x-1/2 items-center justify-between rounded-[8rem] bg-[#FAE3CF]/60 px-6 py-4 text-light-100 backdrop-blur-md lg:px-6 xl:px-12">
			<Logo />
			<ItemsHeader />
		</nav>
	);
};

export default Header;
