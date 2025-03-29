const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: "AIzaSyD2yVd1fZTwcOsSmZQxpE_zrhZQwUoO4C4",
});

// const AiResponse = async (input) => {
//   console.log(input);
//   const response = await ai.models.generateContent({
//     model: "gemini-2.0-flash",
//     contents: `${input}`,
//   });
//   console.log(response.text);
//   return response.text();
// };

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
