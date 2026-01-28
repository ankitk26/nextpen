import { useEditor } from "./app-provider";
import { Textarea } from "./ui/textarea";

export default function CodeInput() {
	const { stdIn, setStdIn } = useEditor();

	return (
		<div className="flex flex-col h-full space-y-1">
			<h6 className="text-sm font-medium">Input</h6>
			<Textarea
				className="w-full flex-1 resize-none min-h-[100px]"
				value={stdIn}
				onChange={(e) => setStdIn(e.target.value)}
				spellCheck={false}
				autoCorrect="false"
			/>
		</div>
	);
}
