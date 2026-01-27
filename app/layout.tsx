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
					<div className="flex w-full flex-col">
						<Header />
						<main className="grow my-4 w-9/10 mx-auto">
							{children}
						</main>
					</div>
				</AppProvider>
			</body>
		</html>
	);
};

export default Layout;
