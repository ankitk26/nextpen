import { IconLoader } from "@tabler/icons-react";
import { useEditor } from "./app-provider";
import { Button } from "./ui/button";

export default function CompileButton() {
	const { language, code, stdIn, setOutput, isSubmitting, setIsSubmitting } =
		useEditor();

	async function handleSubmission() {
		setIsSubmitting(true);

		try {
			const body = JSON.stringify({
				script: code,
				stdin: stdIn,
				language,
			});

			const submissionResponse = await fetch("/api/submission", {
				method: "post",
				body,
				headers: {
					"content-type": "application/json",
				},
			});

			const submissionData = await submissionResponse.json();
			setOutput({
				output: submissionData.output,
				cpuTime: submissionData.cpuTime,
				memory: submissionData.memory,
				isExecutionSuccess: submissionData.isExecutionSuccess,
			});
		} catch (error) {
			setOutput(null);
			console.log(error);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<Button onClick={handleSubmission}>
			{isSubmitting ? <IconLoader className="animate-spin" /> : "Run"}
		</Button>
	);
}
