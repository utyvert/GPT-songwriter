import axios from 'axios';

const API_KEY = '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';
const API_URL = 'https://api.openai.com/v1/completions';

export async function GPT3(prompt) {
  try {
    const response = await axios.post(API_URL, {
      prompt: prompt,
      max_tokens: 256,
      n: 1,
      temperature: 0.5,
      api_key: API_KEY,
    });

    const generatedText = response.data.choices[0].text;
    return generatedText;
  } catch (error) {
    console.error(error);
  }
}

