const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyBL4QbZ0DjCDkkV0sjb6sF6f8_HG2e_cDA");

async function main() {
  const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });
  const result = await model.generateContent("Who is Naruto Uzumaki?");
  console.log(result.response.text());
}

main();