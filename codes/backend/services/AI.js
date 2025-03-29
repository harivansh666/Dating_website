const { GoogleGenAI } = require("@google/genai");
const dotenv = require("dotenv");
dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.gemini_api,
});

const AiResponse = async (input) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [
      {
        role: "system",
        text: "Provide exactly 3 dating tips according to input tumne input ke hisab se response generate krna hai ke input wale user ko kya pasand hoga  (30 words max each) with emojis  ❤️🌹💑, and give me answer in bulletpoints",
      },
      { role: "user", text: JSON.stringify(input) }, // Ensure user input doesn't override instruction
    ],
  });

  return response.text;
};

module.exports = { AiResponse };
