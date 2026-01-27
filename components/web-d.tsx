"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	IconBrackets,
	IconCode,
	IconEye,
	IconScript,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import Editor from "./editor";

const WebD = () => {
	const [html, setHtml] = useState("");
	const [css, setCss] = useState("");
	const [js, setJs] = useState("");

	const [srcDoc, setSrcDoc] = useState("");

	useEffect(() => {
		const timeout = setTimeout(() => {
			setSrcDoc(`
        <html>
        <head>
        <style>${css}</style>
        </head>
        <body>
        ${html}
        <script>
        ${js}
        </script>
        </body>
        </html>
        `);
		}, 250);

		return () => clearTimeout(timeout);
	}, [html, css, js]);

	// const container = (alignment: string) => {
	// 	if (alignment === "right") {
	// 		return classes.rightAlign;
	// 	}
	// 	if (alignment === "left") {
	// 		return classes.leftAlign;
	// 	}
	// };

	return (
		<div className="h-screen w-screen flex space-x-4">
			{/* Editors section - always on left */}
			<div className="flex-1 flex flex-col">
				{/* Header with layout controls */}

				{/* Code editor tabs */}
				<Tabs defaultValue="html" className="flex-1 flex flex-col">
					<TabsList className="h-auto p-1 w-full">
						<TabsTrigger value="html">
							<IconCode className="size-3.5" />
							HTML
						</TabsTrigger>
						<TabsTrigger value="css">
							<IconBrackets className="size-3.5" />
							CSS
						</TabsTrigger>
						<TabsTrigger value="javascript">
							<IconScript className="size-3.5" />
							JavaScript
						</TabsTrigger>
					</TabsList>

					<div className="flex-1 min-h-0">
						<TabsContent value="html" className="h-full m-0 p-0">
							<Editor
								language="html"
								code={html}
								setCode={setHtml}
							/>
						</TabsContent>
						<TabsContent value="css" className="h-full m-0 p-0">
							<Editor
								language="css"
								code={css}
								setCode={setCss}
							/>
						</TabsContent>
						<TabsContent
							value="javascript"
							className="h-full m-0 p-0"
						>
							<Editor
								language="javascript"
								code={js}
								setCode={setJs}
							/>
						</TabsContent>
					</div>
				</Tabs>
			</div>

			{/* Preview section - always on right */}
			<div className="flex-1 flex flex-col bg-background">
				<div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
					<IconEye className="size-4" />
					<span className="text-sm font-medium">Preview</span>
				</div>
				<div className="flex-1 min-h-0">
					<iframe
						title="output"
						sandbox="allow-scripts"
						className="h-full w-full"
						srcDoc={srcDoc}
					/>
				</div>
			</div>
		</div>
	);
};

export default WebD;
