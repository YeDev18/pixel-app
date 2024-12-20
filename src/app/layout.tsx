import Footer from "@/core/components/organisms/_all/footer/footer";
import Header from "@/core/components/organisms/_all/header/header";
import ServiceProvider from "@/core/context/service/service.provider";
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
			<body className={`relative px-2 pb-4 antialiased lg:px-4 xl:px-8`}>
				<ServiceProvider>
					<Header />
					{children}
					<Footer />{" "}
				</ServiceProvider>
			</body>
		</html>
	);
}
