export const InputButton = ({
	children,
	className,
}: { children: React.ReactNode; className?: string }) => {
	return (
		<button className={`${className} bg-white text-[#04374b] inputButton`} type="submit">
			{children}
		</button>
	);
};
