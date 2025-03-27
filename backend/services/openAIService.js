import OpenAI from "openai";
import dotenv from "dotenv";

import { parseData, codeGenerator } from "../utils/promptBuilder.js";

dotenv.config({ path: "./.env" });

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], // Ensure the API key is set correctly
});

export async function generateJSONFromGPT(samples) {
  const prompt = parseData(samples);

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0,
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
}

export async function generateCodeFromGPT(source, target, delimiter) {
  const prompt = codeGenerator(source, target, delimiter);

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0,
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
}
