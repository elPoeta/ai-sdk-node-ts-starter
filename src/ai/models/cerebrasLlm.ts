import { createCerebras } from '@ai-sdk/cerebras';

const cerebrasModel = createCerebras({
  apiKey: process.env.CEREBRAS_API_KEY ?? '',
  
});