"use client";

import Link from "next/link";
import { useEditor } from "./app-provider";
import LanguageMenu from "./language-menu";
import OrientationMenu from "./orientation-menu";
// import SettingsModal from "./settings-modal";
import { IconBrandGithub, IconSettings } from "@tabler/icons-react";
import { Button } from "./ui/button";

export default function Header() {
	const { language } = useEditor();

	return (
		<nav className="py-2 shadow-md">
			<header className="w-9/10 flex items-center justify-between mx-auto">
				{/* Logo */}
				<Link href="/" className="text-lg font-medium">
					nextpen
				</Link>

				{/* Navigation buttons */}
				<div className="flex items-center justify-center gap-4">
					{/* Change the orientation of editors (only for webd view) */}
					{language === "webd" && <OrientationMenu />}

					{/* Choose language */}
					<LanguageMenu />

					{/* Opens settings modal */}
					<Link href="/settings">
						<Button size="icon">
							<IconSettings />
						</Button>
					</Link>
					{/*<SettingsModal />*/}

					<Button size="icon" variant="secondary">
						<a href="https://github.com/ankitk26/nextpen">
							<IconBrandGithub className="size-5" />
						</a>
					</Button>
				</div>
			</header>
		</nav>
	);
}
