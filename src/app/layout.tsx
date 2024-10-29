import Footer from "@/core/components/organisms/footer/footer";
import "@/styles/globals.css";
import "@fontsource-variable/montserrat";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Pixel App",
	description: "Pixel app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`px-8 pb-8 antialiased`}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
