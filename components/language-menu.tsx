"use client";

import { supportedLanguages } from "@/lib/supported-languages";
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

	const supportedLanguagesList = Object.values(supportedLanguages).map(
		({ value, label }) => ({ value, label }),
	);

	return (
		<Select
			items={supportedLanguagesList}
			onValueChange={(val) => setLanguage(val as string)}
			defaultValue="cpp17"
		>
			<SelectTrigger className="w-48">
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{supportedLanguagesList.map((language) => (
						<SelectItem key={language.value} value={language.value}>
							{language.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
