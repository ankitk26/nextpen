import { Metadata } from "next";
import Header from "../components/header";
import { AppProvider } from "../context/app-provider";
import "../styles/app.css";

export const metadata: Metadata = {
	title: "Home",
	description: "Welcome to Next.js",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body>
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
