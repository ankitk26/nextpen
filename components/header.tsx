"use client";

import { IconBrandGithub, IconSettings } from "@tabler/icons-react";
import Link from "next/link";
import LanguageMenu from "./language-menu";
import { Button } from "./ui/button";

export default function Header() {
	return (
		<nav className="py-2 shadow-md">
			<header className="w-9/10 flex items-center justify-between mx-auto">
				{/* Logo */}
				<Link href="/" className="text-lg font-medium">
					nextpen
				</Link>

				{/* Navigation buttons */}
				<div className="flex items-center justify-center gap-4">
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
