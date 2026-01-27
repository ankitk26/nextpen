import { useEditor } from "./app-provider";

const CompileButton = () => {
	const { language, code, stdIn, setOutput, isSubmitting, setIsSubmitting } =
		useEditor();

	// Submit code to server
	const handleSubmission = async () => {
		setIsSubmitting(true);

		const body = JSON.stringify({
			script: code,
			stdin: stdIn,
			language,
		});

		const res = await fetch("/api/submission", {
			method: "post",
			body,
			headers: {
				"Content-type": "application/json",
			},
		});

		const data = await res.json();
		setOutput(data);

		setIsSubmitting(false);
	};

	return (
		<section>
			<button
				// variant="contained"
				// color="primary"
				onClick={handleSubmission}
			>
				{isSubmitting ? "Compiling..." : "Run"}
			</button>
		</section>
	);
};

export default CompileButton;
