const TOKEN = "7279003874:AAHTaF3g8jWLDh4alHMW4W_H5RdK1bnrSuU";

const TelegramApi = require("node-telegram-bot-api");

const emailjs = require("@emailjs/nodejs");

const {
  reviewOptions,
  reviewMenu,
  contactsMenu,
  servicesMenu,
} = require("./menus");
const {
  handleFeedback,
  handleQuestion,
  handleRegistration,
} = require("./controllers");
const { handleCallbackQuery } = require("./callbacks");
const { mainMenu } = require("./menus");
const bot = new TelegramApi(TOKEN, { polling: true });

emailjs.init({
  publicKey: "7k5TA9pLPxwQLVyP7",
  limitRate: {
    id: "app",
    // Allow 1 request per 1s
    throttle: 1000,
  },
});
let a = 4;
bot.on("message", async (message) => {
  const text = message.text;
  const chatId = message.chat.id;

  const messageId = message.message_id;

  if (text === "/start") {
    await bot.sendMessage(
      chatId,
      'Вас приветствует чат-бот семейного медицинского центра "Медицинская инициатива". 👋 🤖\n Чем могу Вам помочь?',
      mainMenu
    );
  } else if (text === "👨‍⚕️ Услуги") {
    await bot.sendMessage(chatId, "Пожалуйста, выберите услугу:", servicesMenu);
  } else if (text === "📝 Записаться на приём") {
    await handleRegistration(chatId, messageId, bot);
  } else if (text === "⭐️ Оценка") {
    await handleFeedback(chatId, message, bot);
  } else if (text === "❓ Задать вопрос") {
    await handleQuestion(chatId, bot);
  } else if (text === "📞 Контакты") {
    await bot.sendMessage(
      chatId,
      "Пожалуйста, выберите отделение:",
      contactsMenu
    );
  }
});

bot.on("callback_query", (callbackQuery) =>
  handleCallbackQuery(callbackQuery, bot)
);
