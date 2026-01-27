import { getLanguage } from "@/lib/get-language";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();

		const [languageCode, versionIndex] = getLanguage(body.language);

		const inputParams = {
			...body,
			language: languageCode,
			versionIndex,
			clientId: process.env.JDOODLE_CLIENT_ID,
			clientSecret: process.env.JDOODLE_CLIENT_SECRET,
		};

		const response = await fetch("https://api.jdoodle.com/v1/execute", {
			method: "post",
			body: JSON.stringify(inputParams),
			headers: { "Content-type": "application/json" },
		});

		const data = await response.json();

		console.log(data);

		return Response.json({
			output: data.output,
			memory: data.memory,
			cpuTime: data.cpuTime,
			isExecutionSuccess: data.isExecutionSuccess,
		});
	} catch {
		return Response.error();
	}
}
