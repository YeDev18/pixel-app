export const InputButton = ({
	children,
	className,
}: { children: React.ReactNode; className?: string }) => {
	return (
		<button
			className={`${className} inputButton bg-white text-[#04374b]`}
			type="submit"
		>
			{children}
		</button>
	);
};
