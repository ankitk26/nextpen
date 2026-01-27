import { cssPreview, htmlPreview, jsPreview } from "@/lib/constants";
import { useState } from "react";
import Editor from "./editor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function Preview() {
	const [html, setHtml] = useState(htmlPreview);
	const [css, setCss] = useState(cssPreview);
	const [js, setJs] = useState(jsPreview);

	return (
		<div className="w-full h-full">
			<Tabs defaultValue="html" className="w-full h-full flex flex-col">
				<TabsList className="w-full">
					<TabsTrigger value="html">HTML</TabsTrigger>
					<TabsTrigger value="css">CSS</TabsTrigger>
					<TabsTrigger value="js">JavaScript</TabsTrigger>
				</TabsList>
				<TabsContent value="html" className="w-full flex-1 mt-2">
					<div className="w-full h-full">
						<Editor language="html" code={html} setCode={setHtml} />
					</div>
				</TabsContent>
				<TabsContent value="css" className="w-full flex-1 mt-2">
					<div className="w-full h-full">
						<Editor language="css" code={css} setCode={setCss} />
					</div>
				</TabsContent>
				<TabsContent value="js" className="w-full flex-1 mt-2">
					<div className="w-full h-full">
						<Editor
							language="javascript"
							code={js}
							setCode={setJs}
						/>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
