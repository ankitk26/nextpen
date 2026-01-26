import { Metadata } from "next";
import Header from "../components/Header";
import { AppProvider } from "../context/app-context";

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
