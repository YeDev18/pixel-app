import { Menus } from "@/core/data/menu.data";
import Link from "next/link";

const ItemsHeader = () => {
	return (
		<div className="hidden items-center justify-center gap-x-16 tracking-wide md:flex ">
			<menu className="space-x-4 max-lg:hidden max-lg:text-sm">
				{Menus.map((item, index) => (
					<Link key={index} href={item.href}>
						{item.label}
					</Link>
				))}
			</menu>
			<div className="flex items-center justify-center gap-8 max-lg:text-sm">
				<p> +225 04 07 52 58 56 </p>

				<button className="rounded-3xl border px-5 py-3 text-sm">
					Contactez Nous
				</button>
			</div>
		</div>
	);
};

export default ItemsHeader;
