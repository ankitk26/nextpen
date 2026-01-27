"use client";

import { useEditor } from "@/components/app-provider";
import ProgrammingEditor from "@/components/programming-editor";
import WebD from "@/components/web-d";

export default function Page() {
	const { language } = useEditor();

	return (
		<div className="h-full">
			{language === "webd" ? <WebD /> : <ProgrammingEditor />}
		</div>
	);
}
