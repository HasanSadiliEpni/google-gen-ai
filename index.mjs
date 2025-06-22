import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyC0GLIEzqq1RxG7dW6F5Cp0RwVqg1ZOaQM" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Say hi for me",
  });
  console.log(response.text);
}

main();