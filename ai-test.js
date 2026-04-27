require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function main() {
  const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });
  const result = await model.generateContent("Who is Naruto Uzumaki?");
  console.log(result.response.text());
}

main();