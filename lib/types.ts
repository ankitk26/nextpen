import { supportedLanguages } from "./supported-languages";

export type SubmissionOutput = {
	output: string;
	memory: string;
	cpuTime: string;
	isExecutionSuccess: boolean;
};

export type JdoodleLanguage = Exclude<keyof typeof supportedLanguages, "webd">; // "cpp17"|"c"|...
