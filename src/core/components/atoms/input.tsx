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
				className={`rounded-[50px] bg-[rgba(4,55,75,0.3)] p-3 text-gray-300 shadow-inner ${className}`}
				ref={ref}
				{...props}
			/>
		);
	},
);

Input.displayName = "Input";

export default Input;
