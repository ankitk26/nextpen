import { AppProvider } from "@/components/app-provider";
import Header from "@/components/header";
import { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./app.css";

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
					<div className="flex w-full flex-col h-screen overflow-hidden">
						<Header />
						<main className="flex-1 p-4 w-full overflow-y-auto lg:overflow-hidden">
							{children}
						</main>
					</div>
				</AppProvider>
			</body>
		</html>
	);
};

export default Layout;
