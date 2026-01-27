"use client";

import { languages } from "@/lib/constants";
import { useEditor } from "./app-provider";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";

export default function LanguageMenu() {
	const { setLanguage } = useEditor();

	return (
		<Select
			items={languages}
			onValueChange={(val) => setLanguage(val as string)}
			defaultValue="cpp"
		>
			<SelectTrigger className="w-48">
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{languages.map((language) => (
						<SelectItem key={language.value} value={language.value}>
							{language.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
