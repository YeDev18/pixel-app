export const InputButton = ({
	children,
	className,
}: { children: React.ReactNode; className?: string }) => {
	return (
		<button className={`${className} inputButton`} type="submit">
			{children}
		</button>
	);
};
