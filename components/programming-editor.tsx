"use client";

import { useEditor } from "./app-provider";
import CodeInput from "./code-input";
import CodeOutput from "./code-output";
import CompileButton from "./compile-button";
import Editor from "./editor";

export default function ProgrammingEditor() {
	const { code, setCode, language } = useEditor();

	return (
		<div className="flex flex-col gap-10 mx-auto mt-3">
			<section className="grow h-[80vh]">
				<Editor language={language} code={code} setCode={setCode} />
			</section>

			<CompileButton />

			<section className="flex flex-col items-start justify-start gap-4">
				<CodeInput />
				<CodeOutput />
			</section>
		</div>
	);
}
