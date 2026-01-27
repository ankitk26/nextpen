import { Metadata } from "next";
import "./app.css";
import { AppProvider } from "@/components/app-provider";
import Header from "@/components/header";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Home",
	description: "Welcome to Next.js",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en" className={geistMono.className}>
			<body className="antialiased">
				<AppProvider>
					<div className="flex flex-col w-full h-screen gap-0">
						<Header />
						<main className="grow">{children}</main>
					</div>
				</AppProvider>
			</body>
		</html>
	);
};

export default Layout;
