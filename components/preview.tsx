import { cssPreview, htmlPreview, jsPreview } from "@/lib/constants";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../components/editor"), { ssr: false });

export default function Preview() {
	const [html, setHtml] = useState(htmlPreview);
	const [css, setCss] = useState(cssPreview);
	const [js, setJs] = useState(jsPreview);

	return (
		<div className="w-full h-full">
			<Tabs defaultValue="html" className="w-100">
				<TabsList className="w-full">
					<TabsTrigger value="html">HTML</TabsTrigger>
					<TabsTrigger value="css">CSS</TabsTrigger>
					<TabsTrigger value="js">JavaScript</TabsTrigger>
				</TabsList>
				<TabsContent value="html">
					<div className="w-full h-full">
						<Editor
							language="html"
							code={html}
							setCode={setHtml}
							forPreview={true}
						/>
					</div>
				</TabsContent>
				<TabsContent value="css">
					<div className="w-full h-full">
						<Editor
							language="css"
							code={css}
							setCode={setCss}
							forPreview={true}
						/>
					</div>
				</TabsContent>
				<TabsContent value="js">
					<div className="w-full h-full">
						<Editor
							language="javascript"
							code={js}
							setCode={setJs}
							forPreview={true}
						/>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}
