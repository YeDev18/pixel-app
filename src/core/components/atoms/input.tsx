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
				className={`p-3 rounded-[50px] shadow-inner bg-[#04374b] opacity-30 text-white ${className}`}
				ref={ref}
				{...props}				
			/>
		);
	},
);

Input.displayName = "Input";

export default Input;
