"use client";

import ProgrammingEditor from "../components/programming-editor";
import WebD from "../components/web-d";
import { useEditor } from "../components/app-provider";

export default function Page() {
	const { language } = useEditor();

	return (
		<div className="h-full">
			{language === "webd" ? <WebD /> : <ProgrammingEditor />}
		</div>
	);
}
