import Footer from "@/core/components/organisms/footer/footer";
import Header from "@/core/components/organisms/Header";
import "@/styles/globals.css";
import '@fontsource-variable/montserrat';
import type { Metadata } from "next";

// import localFont from "next/font/local";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Pix Digital",
  description: "Pix Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased px-10 py-4 relative`  }
      >
        <Header />

        {children}
        <Footer/>
      </body>
    </html>
  );
}
