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
				className={`rounded-[50px] bg-[#04374b] p-3 text-white opacity-30 shadow-inner ${className}`}
				ref={ref}
				{...props}
			/>
		);
	},
);

Input.displayName = "Input";

export default Input;
