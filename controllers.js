const fs = require("fs").promises;
const fs2 = require("fs");
const emailjs = require("@emailjs/nodejs");
const {
  reviewOptions,
  confirmMenu,
  mainMenu,
  replyServicesMenu,
  skipFeedbackMenu,
} = require("./menus");
const { error } = require("console");

async function handleFeedback(chatId, message, bot) {
  try {
    await bot.sendMessage(
      chatId,
      "Пожалуйста, оцените качество обслуживания нашего медицинского центра",
      reviewOptions
    );
    const ratingResponse = await waitForMessage(bot, chatId);

    if (!ratingResponse.text.includes("⭐")) {
      throw error;
    }

    await bot.sendMessage(
      chatId,
      "Спасибо за вашу оценку, опишите ваши впечатления✨",
      skipFeedbackMenu
    );

    const option = await waitForMessage(bot, chatId);

    if (option.text === "Пропустить" || option.text === "пропустить") {
      let last_name;

      if (typeof message.from.last_name == "undefined")
        last_name = "Не указана";
      else last_name = message.from.last_name;

      const dataToAppend = `\n\nИмя: ${message.from.first_name} Фамилия: ${last_name}\n\nОценка: ${ratingResponse.text}`;

      // Запись в файл
      // await fs.appendFile("reviews.txt", dataToAppend, "utf8");

      var templateParams = {
        subject: "Отзыв из telegram бота",
        message: dataToAppend,
        to: "doctor@131.by",
      };
      emailjs.send("service_25em63k", "template_327vh7g", templateParams).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

      await bot.sendMessage(
        chatId,
        "Спасибо за то, что выбрали нас 🤍. Ваша оценка была отправлена ✅",
        mainMenu
      );
    } else {
      let last_name;

      if (typeof message.from.last_name == "undefined")
        last_name = "Не указана";
      else last_name = message.from.last_name;

      const dataToAppend = `\n\nИмя: ${message.from.first_name} Фамилия: ${last_name}\nОценка: ${ratingResponse.text}\nОтзыв: ${option.text}`;

      // Запись в файл
      // await fs.appendFile("reviews.txt", dataToAppend, "utf8");

      var templateParams = {
        subject: "Отзыв из telegram бота",
        message: dataToAppend,
        to: "doctor@131.by",
      };

      // аргументы для метода взяты из профиля в сервисе EmailJS(https://www.emailjs.com/)
      emailjs.send("service_25em63k", "template_327vh7g", templateParams).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

      await bot.sendMessage(chatId, "Ваш отзыв был отправлен ✅", mainMenu);
    }
  } catch (error) {
    console.error("Error handling question:", error);
    await bot.sendMessage(
      chatId,
      "Извините, произошла ошибка. Пожалуйста, попробуйте ещё раз позже.",
      mainMenu
    );
  }
}

async function handleQuestion(chatId, bot) {
  try {
    await bot.sendMessage(
      chatId,
      "Введите ваш вопрос и я постараюсь вам помочь✍️:"
    );
    const questionResponse = await waitForMessage(bot, chatId);

    if (questionResponse.text === "ddkwjdhwkjhwk_-0293-02dwed][") {
      await bot.sendMessage(chatId, "https://ibb.co/tbCpsvn");
    }

    if (
      [
        "📝 Записаться на приём",
        "❓ Задать вопрос",
        "📞 Контакты",
        "⭐️ Оценка",
        "👨‍⚕️ Услуги",
        "/start",
      ].includes(questionResponse.text)
    )
      return;

    await bot.sendMessage(
      chatId,
      "Отлично!🔥 Теперь введите ваш номер телефона:"
    );
    const phoneResponse = await waitForMessage(bot, chatId);
    if (
      [
        "📝 Записаться на приём",
        "❓ Задать вопрос",
        "📞 Контакты",
        "⭐️ Оценка",
        "👨‍⚕️ Услуги",
        "/start",
      ].includes(phoneResponse.text)
    )
      return;

    await bot.sendMessage(
      chatId,
      "Спасибо!🔥, введите ваш email (электронную почту):"
    );
    const emailResponse = await waitForMessage(bot, chatId);
    if (
      [
        "📝 Записаться на приём",
        "❓ Задать вопрос",
        "📞 Контакты",
        "⭐️ Оценка",
        "👨‍⚕️ Услуги",
        "/start",
      ].includes(phoneResponse.text)
    )
      return;

    await bot.sendMessage(
      chatId,
      "Почти готово!👌 Скажите, как к вам можно обращаться?"
    );
    const nameResponse = await waitForMessage(bot, chatId);
    if (
      [
        "📝 Записаться на приём",
        "❓ Задать вопрос",
        "📞 Контакты",
        "⭐️ Оценка",
        "👨‍⚕️ Услуги",
        "/start",
      ].includes(nameResponse.text)
    )
      return;

    await bot.sendMessage(
      chatId,
      "Соглашаетесь ли вы на обработку персональных данных? 📁",
      confirmMenu
    );

    const option = await waitForMessage(bot, chatId);

    if ((await option.text) === "Да" || (await option.text) === "да") {
      await bot.sendMessage(
        chatId,
        "Спасибо, ваш вопрос записан, в ближайшее время мы постараемся дать вам ответ",
        mainMenu
      );

      const dataToAppend = `\nВопрос: ${questionResponse.text}, Телефон: ${phoneResponse.text}, Имя: ${nameResponse.text}, Email: ${emailResponse.text}\n`;

      // Запись в файл
      // await fs.appendFile("questions.txt", dataToAppend, "utf8");

      var templateParams = {
        subject: "Вопрос из telegram бота",
        message: dataToAppend,
        to: "doctor@131.by",
      };

      emailjs.send("service_25em63k", "template_327vh7g", templateParams).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    } else {
      await bot.sendMessage(
        chatId,
        "Извините, в таком случае ваш вопрос не будет отправлен",
        mainMenu
      );
      return;
    }
  } catch (error) {
    console.error("Error handling question:", error);
    await bot.sendMessage(
      chatId,
      "Извините, произошла ошибка. Пожалуйста, попробуйте ещё раз позже.",
      mainMenu
    );
  }
}

async function handleRegistration(chatId, messageId, bot) {
  try {
    await bot.sendMessage(
      chatId,
      "Пожалуйста, выберите услугу:",
      replyServicesMenu
    );

    const servicesResponse = await waitForMessage(bot, chatId);

    if (servicesResponse.text === "/start") return;

    const all = [
      "Терапевтическая стоматология",
      "Ортопедическая стоматология",
      "УЗИ",
    ];
    const all_idk = ["Пока не знаю"];
    const cancel = ["❌ Отменить запись"];
    const osip = ["Неврология", "Терапия"];

    let keyboard;
    if (all.includes(servicesResponse.text)) {
      // если услуга во всех отделениях
      keyboard = [
        [{ text: "🏠 г. Минск, Якуба Коласа, 42" }],
        [{ text: "🏠 г. Минск, Красная, 20" }],
        [{ text: "🏠 г. Осиповичи, Сумченко, 38" }],
      ];
    } else if (osip.includes(servicesResponse.text)) {
      keyboard = [[{ text: "🏠 г. Осиповичи, Сумченко, 38" }]];
    } else if (all_idk.includes(servicesResponse.text)) {
      keyboard = [
        [{ text: "🏠 г. Минск, Якуба Коласа, 42" }],
        [{ text: "🏠 г. Минск, Красная, 20" }],
        [{ text: "🏠 г. Осиповичи, Сумченко, 38" }],
        [{ text: "Пока не знаю" }],
      ];
    } else if (cancel.includes(servicesResponse.text)) {
      await bot.sendMessage(chatId, "Запись отменена.", mainMenu);
      return;
    } else {
      keyboard = [[{ text: "🏠 г. Минск, Якуба Коласа, 42" }]];
    }

    const replycontactsMenu = {
      reply_markup: {
        keyboard: keyboard,
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    };

    const emptyMenu = {
      reply_markup: {
        remove_keyboard: true,
      },
    };

    await bot.sendMessage(
      chatId,
      "Выберите предочитаемое отделение:",
      replycontactsMenu
    );
    const departmentResponse = await waitForMessage(bot, chatId);
    if (departmentResponse.text === "/start") return;

    await bot.sendMessage(
      chatId,
      "Возможно, у вас есть коментарий к записи?\nНапример:\n✔️ Желаемая дата и время\n✔️ Врач\n✔️ Описание проблемы",
      emptyMenu
    );

    const commentaryResponse = await waitForMessage(bot, chatId);
    if (commentaryResponse.text === "/start") return;

    await bot.sendMessage(chatId, "Подскажите пожалуйста ваш номер телефона:");
    const phoneResponse = await waitForMessage(bot, chatId);
    if (phoneResponse.text === "/start") return;

    await bot.sendMessage(chatId, "Как к вам можно обращаться?");
    const nameResponse = await waitForMessage(bot, chatId);
    if (nameResponse.text === "/start") return;

    await bot.sendMessage(
      chatId,
      `Ваша заявка:\n\nУслуга: ${servicesResponse.text}\nОтделение: ${departmentResponse.text}\nВаш комментарий: ${commentaryResponse.text}\nВаше имя: ${nameResponse.text}\nВаш номер телефона: ${phoneResponse.text}\n\nСоглашаетесь ли вы на обработку персональных данных?`,
      confirmMenu
    );

    const option = await waitForMessage(bot, chatId);

    if ((await option.text) === "Да" || (await option.text) === "да") {
      await bot.sendMessage(
        chatId,
        "Спасибо, ваша заявка отправлена, в ближайшее возможное время с вами свяжется оператор для уточнения деталей",
        mainMenu
      );
      const dataToAppend = `Запись ${chatId}:\nУслуга: ${servicesResponse.text}\n\Отделение: ${departmentResponse.text}\nКомментарий: ${commentaryResponse.text}\nИмя: ${nameResponse.text}\nНомер телефона: ${phoneResponse.text}\n\n`;
      // await fs.appendFile("register.txt", dataToAppend, "utf8");

      var templateParams = {
        subject: "Запись на услугу из telegram бота",
        message: dataToAppend,
        to: "doctor@131.by",
      };

      emailjs.send("service_25em63k", "template_327vh7g", templateParams).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    } else {
      await bot.sendMessage(chatId, "Запись отменена.", mainMenu);
      return;
    }
  } catch (error) {
    console.error("Error handling question:", error);
    await bot.sendMessage(
      chatId,
      "Извините, произошла ошибка. Пожалуйста, попробуйте ещё раз позже.",
      mainMenu
    );
  }
}

function waitForMessage(bot, chatId) {
  let flag = true;
  return new Promise((resolve) => {
    bot.once("message", (message) => {
      if (message.chat.id === chatId) {
        resolve(message);
      } else {
        waitForMessage(bot, chatId).then(resolve);
      }
    });
  });
}
module.exports = {
  handleQuestion,
  handleRegistration,
  handleFeedback,
  waitForMessage,
};
