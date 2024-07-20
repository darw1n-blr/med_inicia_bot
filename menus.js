const reviewOptions = {
  reply_markup: {
    keyboard: [
      [{ text: "⭐⭐⭐⭐⭐" }],
      [{ text: "⭐⭐⭐⭐" }],
      [{ text: "⭐⭐⭐" }],
      [{ text: "⭐⭐" }],
      [{ text: "⭐" }],
    ],
  },
  resize_keyboard: true,
  one_time_keyboard: true,
};

const skipFeedbackMenu = {
  reply_markup: {
    keyboard: [[{ text: "Пропустить" }]],
    resize_keyboard: true,
    one_time_keyboard: true,
  },
};

const contactsMenu = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "🏠 г.Минск, ул.Якуба Коласа, 42",
          callback_data: "kolas",
        },
      ],
      [{ text: "🏠 г.Минск, ул.Красная, 20", callback_data: "krasnaya" }],
      [
        {
          text: "🏠 г.Осиповичи, ул.Сумченко, 38",
          callback_data: "osipovichi",
        },
      ],
    ],
  }),
};

const servicesMenu = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "Терапевтическая стоматология",
          callback_data: "dental_therapy",
        },
      ],
      [{ text: "Ортопедическая стоматология", callback_data: "dental_orto" }],
      [{ text: "Хирургическая стоматология", callback_data: "dental_surgeon" }],
      [{ text: "Рентгенологическая диагностика", callback_data: "xray" }],
      [{ text: "Функциональная диагностика", callback_data: "func_diagnosis" }],
      [{ text: "Лабораторная диагностика", callback_data: "lab_diagnosis" }],
      [{ text: "Хирургическая косметология", callback_data: "cosmetology" }],
      [
        { text: "Неврология", callback_data: "neurology" }, { text: "Кардиология", callback_data: "cardio" }
      ],
      [
        { text: "Имплантация", callback_data: "implant" },
        { text: "УЗИ", callback_data: "uzi" },
      ],
    ],
  }),
};

const mainMenu = {
  reply_markup: {
    keyboard: [
      [{ text: "📝 Записаться на приём" }],
      [{ text: "❓ Задать вопрос" }, { text: "👨‍⚕️ Услуги" }],
      [{ text: "📞 Контакты" }],
      [{ text: "⭐️ Оценка" }],
    ],
    resize_keyboard: true,
    one_time_keyboard: false,
  },
};

const backServicesButton = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: "Записаться на приём", callback_data: "register" }],
      [{ text: "⬅️ Вернуться к списку услуг", callback_data: "back" }],
    ],
  }),
};

const backContactsButton = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "⬅️ Вернуться к списку отделений",
          callback_data: "backContacts",
        },
      ],
    ],
  }),
};

const replyServicesMenu = {
  reply_markup: {
    keyboard: [
      [
        {
          text: "Терапевтическая стоматология",
        },
      ],
      [{ text: "Ортопедическая стоматология" }],
      [{ text: "Хирургическая стоматология" }],
      [{ text: "Рентгенологическая диагностика" }],
      [{ text: "Функциональная диагностика" }],
      [{ text: "Лабораторная диагностика" }],
      [{ text: "Хирургическая косметология" }],
      [{ text: "Кардиология" }, { text: "Неврология" }],
      [{ text: "Имплантация" }, { text: "УЗИ" }],
      [{ text: "Пока не знаю" }],
      [{ text: "❌ Отменить запись" }],
    ],
    resize_keyboard: true,
    one_time_keyboard: true,
  },
};

const confirmMenu = {
  reply_markup: {
    keyboard: [[{ text: "Да" }, { text: "❌ Отменить запись" }]],
    resize_keyboard: true,
    one_time_keyboard: true,
  },
};

module.exports = {
  reviewOptions,
  skipFeedbackMenu,
  contactsMenu,
  servicesMenu,
  backServicesButton,
  backContactsButton,
  replyServicesMenu,
  confirmMenu,
  mainMenu,
};
