import type { SVGProps } from "react";

export default function UpArrowRight(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 64 64"
			{...props}
		>
			<path
				fill="currentColor"
				d="M53.213 10.786c-11.715-11.715-30.711-11.715-42.426 0c-11.716 11.717-11.716 30.711 0 42.428c11.715 11.715 30.711 11.715 42.426 0c11.716-11.717 11.716-30.711 0-42.428M45 41.132l-7.585-7.414l-13.458 13.281L17 39.954l13.218-13.391l-7.343-7.564H45z"
			></path>
		</svg>
	);
}
