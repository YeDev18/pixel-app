import type { SVGProps } from "react";

export default function ArrowRightUpCircle(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
		>
			<g fill="none" fillRule="evenodd">
				<path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.105.074l.014.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.092l.01-.009l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
				<path
					fill="currentColor"
					d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M9.003 8.997a1 1 0 0 0 1 1h2.586l-4.296 4.296a1 1 0 1 0 1.414 1.414l4.296-4.296v2.586a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1"
				></path>
			</g>
		</svg>
	);
}
