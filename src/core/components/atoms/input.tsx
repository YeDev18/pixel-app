import React from "react";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	type: string;
	props?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={`rounded-lg bg-[#04374b]/30 p-3 text-white  shadow-inner ${className}`}
				ref={ref}
				{...props}
			/>
		);
	},
);

Input.displayName = "Input";

export default Input;
