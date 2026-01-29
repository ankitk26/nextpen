import AceEditor from "react-ace";
import { useEditor } from "./app-provider";

// Import themes
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";
import "ace-builds/src-noconflict/theme-vibrant_ink";
import "ace-builds/src-noconflict/theme-one_dark";

// Import languages
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-elixir";

// Additonal editor settings tools
import "ace-builds/src-noconflict/ext-language_tools";
import { supportedLanguages } from "@/lib/supported-languages";
import { JdoodleLanguage } from "@/lib/types";

type Props = {
	language: string;
	code: string;
	setCode: React.Dispatch<React.SetStateAction<string>>;
};

export default function Editor({ language, code, setCode }: Props) {
	const { theme, fontFamily, fontSize, wrap, showLineNumbers } = useEditor();

	console.log(language);

	return (
		<div className="flex flex-col items-center grow h-full">
			{/* Actual Editor */}
			<AceEditor
				mode={
					language === "html" || language === "css"
						? language
						: supportedLanguages[language as JdoodleLanguage]
								.aceEditorMode
				}
				theme={theme}
				fontSize={fontSize}
				value={code}
				onChange={(value) => setCode(value)}
				name={`${language}_editor`}
				style={{
					width: "100%",
					height: "100%",
				}}
				editorProps={{ $blockScrolling: true }}
				setOptions={{
					enableBasicAutocompletion: true,
					enableLiveAutocompletion: true,
					fontFamily,
					wrap,
					autoScrollEditorIntoView: true,
					showLineNumbers,
					fixedWidthGutter: true,
					showPrintMargin: false,
				}}
			/>
		</div>
	);
}
