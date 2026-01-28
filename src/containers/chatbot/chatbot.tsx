import LlmConnector, {OpenaiProvider} from "@rcb-plugins/llm-connector";
import ChatBot, {type Flow} from "react-chatbotify";

// Declare the API key that webpack DefinePlugin will replace at build time
declare const VITE_API_KEY: string;

export const MyChatBot = () => {
	// OpenAI API key from environment variable (replaced by webpack at build time)
	const apiKey = typeof VITE_API_KEY !== 'undefined' ? VITE_API_KEY : "";

	// initialize the plugin
	const plugins = [LlmConnector()];

	// example flow for testing
	const flow = {
		start: {
			message: "Bạn đã sẵn sàng để bắt đầu cuộc trò chuyện chưa?",
			options: ["Bắt đầu trò chuyện"],
			chatDisabled: false,
			path: async (params) => {
				if (!apiKey) {
					await params.simulateStreamMessage("You have not set your API key!");
					return "start";
				}
				await params.simulateStreamMessage("Chào bạn tôi là chatbot của trường Trúc Đào, bạn muốn biết gì nào!");
				return "openai";
			},
		},
		openai: {
			llmConnector: {
				// provider configuration guide:
				// https://github.com/React-ChatBotify-Plugins/llm-connector/blob/main/docs/providers/OpenAI.md
				provider: new OpenaiProvider({
					mode: 'direct',
					model: 'gpt-5-mini',
					responseFormat: 'stream',
					apiKey: apiKey,
				}),
				outputType: 'character',
			},
		},
	};

	return (
		<ChatBot
			settings={{general: {embedded: true}, chatHistory: {storageKey: "example_openai_integration"}, }}
			plugins={plugins}
			flow={flow as Flow}

		></ChatBot>
	);
};
