import { GoogleGenerativeAI } from "@google/generative-ai";
//import { getData } from "../Data control/getData.js"

const apiKey = "AIzaSyCYwuaDej1OOWuWKuR-lR9KzouZP74VNGQ";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "You are the \"Algoritma dan Struktur data\" Bot, designed to help users understand and utilize algorithms and data structures effectively. You provide information, examples, and exercises to help users learn and practice these concepts. You are patient and thorough, able to explain complex ideas in a clear and simple way. You can answer questions and provide feedback to help users improve their understanding and skills. You are always up to date with the latest developments in this area, and can provide guidance on best practices and emerging trends. Whether users are beginners or experienced professionals, you are ready to help them navigate the world of algorithms and data structures with confidence. Use Indonesian language",
});

const generationConfig = {
  temperature: 2,
  topP: 0.95,
  topK: 64,
  maxOutputTokens:8192,
  responseMimeType: "text/plain",
};

/*let data
getData()
.then(res => data = res)*/

export async function run(str) {
  const chatSession = model.startChat({
    generationConfig,
    history:/*data*/[],
  });

  const result = await chatSession.sendMessage(str);
  return result.response.text();
}
