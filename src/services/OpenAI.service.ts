import { Configuration, OpenAIApi, CreateCompletionRequest } from 'openai';
import { OPENAI_COMMAND } from '../constants/OpenAI';
const config = new Configuration({
	apiKey: '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'
})
const openAI = new OpenAIApi(config);

export const CreateText = async (command: OPENAI_COMMAND) => {
	const request = {
		model: 'text-davinci-002',
		prompt: command,
		temperature: 0.9,
		max_tokens: 150,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0.9,
		stop: ['Human:', 'AI:']
	} as CreateCompletionRequest;
	return await openAI.createCompletion(request);
}