"use client";

import { useEditor } from "./app-provider";
import CodeInput from "./code-input";
import CodeOutput from "./code-output";
import CompileButton from "./compile-button";
import Editor from "./editor";

export default function ProgrammingEditor() {
	const { code, setCode, language } = useEditor();

	return (
		<div className="flex flex-col lg:flex-row gap-4 h-[calc(100vh-8rem)]">
			{/* Left side - Code Editor */}
			<section className="flex-1 h-full min-h-[400px]">
				<Editor language={language} code={code} setCode={setCode} />
			</section>

			{/* Right side - Input/Output */}
			<div className="flex flex-col gap-4 lg:w-[400px] xl:w-[450px]">
				{/* Input Section */}
				<section className="flex-1 flex flex-col min-h-[150px]">
					<CodeInput />
				</section>

				{/* Compile Button */}
				<CompileButton />

				{/* Output Section */}
				<section className="flex-[2] flex flex-col min-h-[200px]">
					<CodeOutput />
				</section>
			</div>
		</div>
	);
}
