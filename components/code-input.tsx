import { useEditor } from "./app-provider";
import { Textarea } from "./ui/textarea";

export default function CodeInput() {
	const { stdIn, setStdIn } = useEditor();

	return (
		<div className="w-full space-y-1">
			<h6 className="text-sm">Input</h6>
			<Textarea
				className="w-full resize-none"
				cols={30}
				rows={5}
				value={stdIn}
				onChange={(e) => setStdIn(e.target.value)}
				spellCheck={false}
				autoCorrect="false"
			/>
		</div>
	);
}
