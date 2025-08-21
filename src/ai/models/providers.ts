import { google } from '@ai-sdk/google';
import { cerebras } from '@ai-sdk/cerebras';
import { ollama } from 'ai-sdk-ollama';

import {
	customProvider,
	createProviderRegistry
} from 'ai';


import type { ModelId } from './types.js'

const googleProvider = customProvider({
	languageModels: {
		google: google('gemini-2.0-flash'),
	},
	fallbackProvider: google,
});

const cerebrasProvider = customProvider({
	languageModels: {
		gptOss120: cerebras('gpt-oss-120b'),
		llama33: cerebras('llama-3.3-70b')
	},
	fallbackProvider: cerebras,
});

const ollamaProvider = customProvider({
	languageModels: {
		llama32: ollama('llama3.2'),
		qwen3: ollama('qwen3'),
		gemma: ollama('qwen3-14b-tools')
	},
	fallbackProvider: ollama,
});

export const registry = createProviderRegistry(
	{
		google: googleProvider,
		cerebras: cerebrasProvider,
		ollama: ollamaProvider,
	},
	{ separator: '/' }
);


export function getModel<Model extends ModelId>(modelId: Model) {
	return registry.languageModel(modelId);
}


