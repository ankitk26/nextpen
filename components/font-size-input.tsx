import { Button } from "@/components/ui/button";
import { useEditor } from "./app-provider";
import { IconMinus, IconPlus } from "@tabler/icons-react";

const FontSizeInput = () => {
	const { fontSize, setFontSize } = useEditor();

	return (
		<div className="flex items-center w-48 border">
			<Button
				variant="ghost"
				size="icon"
				onClick={() => setFontSize((p) => Math.max(1, p - 1))}
			>
				<IconMinus className="h-4 w-4" />
			</Button>

			<span className="grow text-sm">{fontSize}</span>

			<Button
				variant="ghost"
				size="icon"
				onClick={() => setFontSize((p) => p + 1)}
			>
				<IconPlus className="h-4 w-4" />
			</Button>
		</div>
	);
};

export default FontSizeInput;
