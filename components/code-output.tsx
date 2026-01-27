import { useEditor } from "./app-provider";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";

export default function CodeOutput() {
	const { output } = useEditor();

	if (!output) {
		return null;
	}

	return (
		<div className="w-full flex flex-col space-y-1">
			<h6 className="text-sm">Output</h6>
			{output.isExecutionSuccess && (
				<div className="flex gap-2 items-center">
					<Badge variant="secondary">{output.cpuTime} seconds</Badge>
					<Badge variant="secondary">{output.memory} kB</Badge>
				</div>
			)}
			<Textarea
				className="w-full resize-none"
				rows={8}
				aria-invalid={!output.isExecutionSuccess}
				cols={30}
				value={output.output}
				readOnly
				spellCheck={false}
				aria-readonly
			/>
		</div>
	);
}
