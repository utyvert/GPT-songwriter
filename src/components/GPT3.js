// import axios from 'axios';

// const API_KEY = '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';
// const API_URL = 'https://api.openai.com/v1/completions';

// export async function GPT3(prompt) {
//   try {
//     const response = await axios.post(API_URL, {
//       prompt: prompt,
//       max_tokens: 256,
//       n: 1,
//       temperature: 0.7,
//       api_key: API_KEY,
//     });

//     const generatedText = response.data.choices[0].text;
//     return generatedText;
//   } catch (error) {
//     console.error(error);
//   }
// }

const openai = require('openai');

// Configure the OpenAI client with your API key
openai.apiKey = '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';

// Define the GPT3 function to generate text completions
export default function GPT3(prompt, temperature = 0.7) {
  // Use the 'completions' endpoint to generate text completions
  openai.completions.create(
    {
      // Provide the model ID and the prompt to complete
      model: 'text-completion-002',
      prompt: prompt,
      temperature: temperature
    },
    (err, response) => {
      // Handle any errors
      if (err) {
        console.error(err);
        return;
      }

      // Print the generated completions to the console
      return (response.data.choices[0].text);
    }
  );
}

// Call the GPT3 function with a prompt and temperature value
// GPT3('The quick brown fox jumps over the lazy ', 0.5);

// Request bad for both of these - 401 error 'AxiosError' ERR_BAD_REQUEST