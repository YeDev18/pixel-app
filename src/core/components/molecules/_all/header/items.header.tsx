import { Menus } from "@/core/data/menu.data";
import Link from "next/link";
import ItemsMotion from "./items.motion";

const ItemsHeader = () => {
	return (
		<div className="hidden items-center justify-center gap-x-16 tracking-wide md:flex ">
			<menu className="flex space-x-4 max-lg:hidden max-lg:text-sm">
				{Menus.map((item, index) => (
					<ItemsMotion key={index}>
						<Link
							href={item.href}
							className="transition-all hover:opacity-60"
						>
							{item.label}
						</Link>
					</ItemsMotion>
				))}
			</menu>
			<div className="flex items-center justify-center gap-8 max-lg:text-sm">
				<p> +225 04 07 52 58 56 </p>

				<Link
					href="/contact"
					className="rounded-3xl border px-5 py-3 text-sm"
				>
					Contactez Nous
				</Link>
			</div>
		</div>
	);
};

export default ItemsHeader;
