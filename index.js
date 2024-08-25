import { run } from "./utils/Algo.js"
import TelegramBot from "node-telegram-bot-api"
import "dotenv/config"

let token = process.env.TOKEN
const bot = new TelegramBot(token,{polling:true})

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  run(msg.text)
  .then(res => {
  bot.sendMessage(chatId, res);
  })
});