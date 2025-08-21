import { ollama } from 'ai-sdk-ollama';

export const ollamaModel = ollama( process.env.OLLAMA_MODEL ?? 'llama3.2')