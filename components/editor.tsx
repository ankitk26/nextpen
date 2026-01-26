import { useEffect } from "react";
import AceEditor from "react-ace";
import { useEditor } from "../context/app-provider";
import EditorTitle from "./editor-title";

// Import themes
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-vibrant_ink";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";

// Import languages
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";

// Additonal editor settings tools
import "ace-builds/src-noconflict/ext-language_tools";

type Props = {
	language: string;
	code: string;
	setCode: React.Dispatch<React.SetStateAction<string>>;
	forPreview?: boolean;
	editorOpen?: boolean;
	setEditorOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Editor({
	language,
	code,
	setCode,
	forPreview = false,
	editorOpen,
	setEditorOpen,
}: Props) {
	const { theme, fontFamily, fontSize, wrap, showLineNumbers } = useEditor();

	// Save code in localStorage (only for webd)
	useEffect(() => {
		if (!forPreview) {
			localStorage.setItem(language, code);
		}

		// eslint-disable-next-line
	}, [code, language]);

	const onChange = (newValue: string) => {
		setCode(newValue);
	};

	return (
		<div className="flex flex-col items-center grow h-full">
			{/* Editor title */}
			{!forPreview && editorOpen && setEditorOpen && (
				<EditorTitle
					language={language}
					editorOpen={editorOpen}
					setEditorOpen={setEditorOpen}
				/>
			)}

			{/* Actual Editor */}
			<AceEditor
				mode={
					language === "cpp" || language === "c" ? "c_cpp" : language
				}
				theme={theme}
				fontSize={fontSize}
				value={code}
				onChange={onChange}
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
				}}
			/>
		</div>
	);
}
