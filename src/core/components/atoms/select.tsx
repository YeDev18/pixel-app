import React from "react";

export interface SelectProps
	extends React.SelectHTMLAttributes<HTMLSelectElement> {
	className?: string;
	options: { value: string; label: string }[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
	({ className, options, ...props }, ref) => {
		return (
			<select
				className={`rounded-lg bg-[#04374b]/30 p-5 text-white  shadow-inner ${className}`}
				ref={ref}
				{...props}
			>
				{options.map((option, index) => (
					<option
						key={index}
						value={option.value}
						className="rounded-[50px] text-black"
					>
						{option.label}
					</option>
				))}
			</select>
		);
	},
);

Select.displayName = "Select";

export default Select;
