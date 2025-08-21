export type OllamaModels = 'llama3.2' | 'gemma3:12b' | 'qwen3-14b-tools';
export type CerebrasModels = 'llama3:70b';
export type GoogleModels = 'gemini-2.0-flash';


export type ModelId =
	| `ollama/${OllamaModels}`
	| `google/${GoogleModels}`
	| `cerebras/${CerebrasModels}`;

export type ProviderModels = {
	google: GoogleModels;
	cerebras: CerebrasModels;
	ollama: OllamaModels;
};

