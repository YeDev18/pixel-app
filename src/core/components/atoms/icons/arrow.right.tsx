import type { SVGProps } from "react";

interface ArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string; // Permet de définir une couleur personnalisée
}

export default function ArrowRight({ color = "currentColor", ...props }: ArrowRightProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 15 15"
      {...props}
      style={{ color }} 
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
