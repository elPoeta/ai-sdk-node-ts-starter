# ai-sdk-node-ts-starter
AI sdk node typescript starter repo

## AI SDK V5

### Install Providers

```bash
pnpm add @ai-sdk/openai
```

```bash
pnpm add @ai-sdk/google
```

```bash
pnpm add @ai-sdk/cerebras
```

```bash
pnpm add ai-sdk-ollama
```

#### Generate text example

```bash
import { generateText } from 'ai'
import {
	getModel
} from './models/providers.js'

import '@dotenvx/dotenvx/config';


async function main() {
	const model = getModel('ollama/llama3.2');
	const { text } = await generateText({
		model,
		prompt: 'Write a story about the future of artificial intelligence.',

	});
	console.log(text);
}


main();
```
