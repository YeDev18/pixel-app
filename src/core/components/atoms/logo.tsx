import Image from "next/image";
import Link from "next/link";
export const Logo = () => {
	return (
		<div className="relative h-14 w-10">
			<Link href="/" className="absolute z-20 size-full ">
				{" "}
			</Link>
			<Image
				src="/assets/Logo.webp"
				width={100}
				height={100}
				className="size-full"
				alt="logo"
			/>
		</div>
	);
};
