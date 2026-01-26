// import { getLanguage } from "../../utils/get-language";

export async function POST(request: Request) {
	try {
		// const [language, versionIndex] = getLanguage(request.body);
		const language = "cpp";
		const versionIndex = "3";

		const inputParams = {
			...request.body,
			language,
			versionIndex,
			clientId: process.env.JDOODLE_CLIENT_ID,
			clientSecret: process.env.JDOODLE_CLIENT_SECRET,
		};

		const resp = await fetch("https://api.jdoodle.com/v1/execute", {
			method: "post",
			body: JSON.stringify(inputParams),
			headers: { "Content-type": "application/json" },
		});

		const data = await resp.json();

		return Response.json(data);
	} catch {
		return Response.error();
	}
}
