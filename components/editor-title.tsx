import { useEditor } from "./app-provider";
import { IconRowInsertBottom, IconRowRemove } from "@tabler/icons-react";

type Props = {
	language: string;
	editorOpen: boolean;
	setEditorOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditorTitle = ({ language, editorOpen, setEditorOpen }: Props) => {
	const { alignment } = useEditor();

	// Toggle closing and opening the editor (only for webd)
	const toggleEditor = () => {
		console.log("changed");
		setEditorOpen((prev) => !prev);
	};

	return (
		<div className="flex items-center justify-between w-full px-4 py-2">
			{/* Adjust title according to alignment and language */}
			<h2
				className={`uppercase ${
					alignment === "bottom" ? "text-left" : ""
				} `}
			>
				{language === "cpp" ? "C++" : language === "c" ? "C" : language}
			</h2>

			{/* Display toggle icon only for webd titles */}
			{(language === "html" ||
				language === "css" ||
				language === "javascript") && (
				<button
					className="flex items-center justify-center bg-transparent border-0 pointer focus:outline-none"
					onClick={() => toggleEditor()}
				>
					{editorOpen ? <IconRowRemove /> : <IconRowInsertBottom />}
				</button>
			)}
		</div>
	);
};

export default EditorTitle;
