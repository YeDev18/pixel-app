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
        className={`rounded-[50px] bg-[#04374b] p-3 text-white opacity-30 shadow-inner ${className}`}
        ref={ref}
        {...props}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value} className="text-white rounded-[50px]">
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

Select.displayName = "Select";

export default Select;
