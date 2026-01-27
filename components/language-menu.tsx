"use client";

import { useEffect, useRef, useState } from "react";
import CodeIcon from "@material-ui/icons/Code";
import { languages } from "@/lib/constants";
import { useEditor } from "./app-provider";
import DropdownMenu from "./dropdown-menu";

const LanguageMenu = () => {
	const { setLanguage } = useEditor();
	const [isOpen, setIsOpen] = useState(false);

	const container = useRef<HTMLDivElement>(null);

	// Close dropdown when clicked outside the dropdown
	useEffect(() => {
		const handleOutsideClick = (e: any) => {
			if (!container.current?.contains(e.target)) {
				if (!isOpen) return;
				setIsOpen(false);
			}
		};

		window.addEventListener("click", handleOutsideClick);
		return () => window.removeEventListener("click", handleOutsideClick);
	}, [isOpen, container]);

	useEffect(() => {
		const handleEscape = (e: any) => {
			if (!isOpen) return;

			if (e.key === "Escape") {
				setIsOpen(false);
			}
		};

		document.addEventListener("keyup", handleEscape);
		return () => document.removeEventListener("keyup", handleEscape);
	}, [isOpen]);

	// Open dropdown
	const handleOpen = () => {
		setIsOpen((prev) => !prev);
	};

	// Change language
	const handleChange = (value: string) => {
		setLanguage(value);
		// cookieCutter.set("editor_lang", value);
		setIsOpen(false);
	};

	return (
		<div>
			<div ref={container} className="relative inline-block">
				<button
					className="flex items-center gap-2 px-4 py-2 rounded-md justify-evenly hover:text-textSecondary focus:outline-none"
					onClick={handleOpen}
				>
					<CodeIcon />
					<span className="text-sm">Languages</span>
				</button>

				<DropdownMenu
					data={languages}
					handleChange={handleChange}
					isOpen={isOpen}
				/>
			</div>
		</div>
	);
};

export default LanguageMenu;
