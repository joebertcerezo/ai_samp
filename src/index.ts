import OpenAI from "openai";
import 'dotenv/config'

const token = process.env.GITHUB_TOKEN;
const endpoint = "";
const model = "model";

export async function main() {

  const client = new OpenAI({ baseURL: endpoint, apiKey: token });

  const response = await client.chat.completions.create({
    messages: [
        { role:"system", content: "You are a helpful assistant." },
        { role:"user", content: "What is the capital of Manila?" }
      ],
      temperature: 1.0,
      top_p: 1.0,
      model: model
    });

  console.log(response.choices[0]?.message.content);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});

