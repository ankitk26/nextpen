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

	return (
		<div className="h-full w-full flex flex-col lg:flex-row gap-4 overflow-hidden">
			{/* Editors section - top on mobile, left on desktop */}
			<div className="h-[400px] lg:flex-1 lg:h-full flex flex-col min-w-0">
				{/* Code editor tabs */}
				<Tabs
					defaultValue="html"
					className="flex-1 flex flex-col min-w-0"
				>
					<TabsList className="h-auto p-1 w-full shrink-0">
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

					<div className="flex-1 min-h-0 overflow-hidden">
						<TabsContent
							value="html"
							className="h-full m-0 p-0 overflow-hidden"
						>
							<Editor
								language="html"
								code={html}
								setCode={setHtml}
							/>
						</TabsContent>
						<TabsContent
							value="css"
							className="h-full m-0 p-0 overflow-hidden"
						>
							<Editor
								language="css"
								code={css}
								setCode={setCss}
							/>
						</TabsContent>
						<TabsContent
							value="javascript"
							className="h-full m-0 p-0 overflow-hidden"
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

			{/* Preview section - bottom on mobile, right on desktop */}
			<div className="flex-1 lg:flex-1 flex flex-col bg-background min-w-0">
				<div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border shrink-0">
					<IconEye className="size-4" />
					<span className="text-sm font-medium">Preview</span>
				</div>
				<div className="flex-1 min-h-0 overflow-hidden">
					<iframe
						title="output"
						sandbox="allow-scripts"
						className="h-full w-full border-0"
						srcDoc={srcDoc}
					/>
				</div>
			</div>
		</div>
	);
};

export default WebD;
