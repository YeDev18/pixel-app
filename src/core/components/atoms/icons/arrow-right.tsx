import type { SVGProps } from "react";

export default function ArrowRight(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 15 15"
			{...props}
			className=" text-light-100"
		>
			<path
				fill="currentColor"
				fillRule="evenodd"
				d="M9.854 3.146L14.207 7.5l-4.353 4.354l-.708-.708L12.293 8H1V7h11.293L9.146 3.854z"
				clipRule="evenodd"
			></path>
		</svg>
	);
}