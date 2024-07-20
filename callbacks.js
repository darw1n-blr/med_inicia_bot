const fs = require("fs").promises;
const emailjs = require("@emailjs/nodejs");

const {
  reviewMenu,
  servicesMenu,
  contactsMenu,
  backServicesButton,
  backContactsButton,
} = require("./menus");

const { handleRegistration } = require("./controllers.js");

const { waitForMessage } = require("./controllers.js");

async function handleCallbackQuery(callbackQuery, bot) {
  if (callbackQuery.data === "kolas") {
    const latitude = 53.930063;
    const longitude = 27.598691;
    await bot.sendMessage(
      callbackQuery.message.chat.id,
      `МЕДИЦИНСКОЕ И СТОМАТОЛОГИЧЕСКОЕ ОТДЕЛЕНИЯ г. Минск, ул. Я. Коласа, 42\n📞+375(17)364-98-07\n📞+375(29)666-98-07\nРежим работы:\n🕰Понедельник - пятница 08.00-21.00\n🕰Суббота 09.00-17.00\n🕰Воскресенье 9.00-15.00`,
      backContactsButton
    );
    const title = "📍 Мы на карте";
    const body = "г. Минск, ул. Я. Коласа, 42";
    await bot.sendVenue(
      callbackQuery.message.chat.id,
      latitude,
      longitude,
      title,
      body
    );
  } else if (callbackQuery.data === "krasnaya") {
    const latitude = 53.914236;
    const longitude = 27.579332;
    await bot.sendMessage(
      callbackQuery.message.chat.id,
      "СТОМАТОЛОГИЧЕСКОЕ ОТДЕЛЕНИЕ г. Минск, ул. Красная, 20\n📞+375(17)243-19-18\n📞+375(29)688-19-18\nРежим работы:\n🕰Понедельник - пятница 08.00-21.00\n🕰Суббота 09.00-15.00\nВоскресенье выходной",
      backContactsButton
    );
    const title = "📍 Мы на карте";
    const body = "г. Минск, ул. Красная, 20";
    await bot.sendVenue(
      callbackQuery.message.chat.id,
      latitude,
      longitude,
      title,
      body
    );
  } else if (callbackQuery.data === "osipovichi") {
    const latitude = 53.310785;
    const longitude = 28.640802;
    await bot.sendMessage(
      callbackQuery.message.chat.id,
      "МЕДИЦИНСКОЕ ОТДЕЛЕНИЕ г. Осиповичи, ул. Сумченко, 38\n📞+375(22)35-51-115\n📞+375(29)33-51-115\nРежим работы:\n🕰Понедельник - пятница 08.00-21.00\n🕰Суббота 09.00-17.00\n🕰Воскресенье 9.00-15.00",
      backContactsButton
    );
    const title = "📍 Мы на карте";
    const body = "г. Осиповичи, ул. Сумченко, 38";
    await bot.sendVenue(
      callbackQuery.message.chat.id,
      latitude,
      longitude,
      title,
      body
    );
  } else if (callbackQuery.data === "dental_therapy") {
    await bot.sendPhoto(
      callbackQuery.message.chat.id,
      "assets/services/dental_therapy.png"
    );

    const s =
      "🦷🔍 Семейный медицинский центр «Медицинская инициатива» предлагает полный спектр услуг по терапевтической стоматологии:\n\
❗Лечение зубов под микроскопом.\n\
❗️Лечение кариеса: Наши специалисты помогут вам избавиться от кариеса и вернуть зубам здоровье.\n\
❗️Реставрация и пломбирование: Мы используем современные реставрационные системы и технологии для замены и исправления старых пломб и реставраций.\n\
❗️Лечение осложнений кариеса: Если у вас возникли осложнения, такие как пульпит или периодонтит, мы проведем пломбировку каналов гуттаперчей.\n\
❗️Перелечивание корневых каналов: После предыдущего эндодонтического вмешательства мы поможем вам восстановить здоровье корневых каналов.\n\
❗️Дизайн улыбки: Наша команда специалистов занимается реставрацией и реконструкцией зубов и зубных рядов, чтобы вы могли радоваться своей улыбке.\n\
❗️Отбеливание зубов: Хотите более белую улыбку? Мы предлагаем профессиональное отбеливание зубов.\n\n\
  🔗 Подробнее на сайте: https://inicia.by/index.php/uslugi/218-terapevticheskaya-stomatologiya. Если у вас есть какие-либо вопросы, воспользуйтесь формой: “Задать вопрос”.";

    await bot.sendMessage(callbackQuery.message.chat.id, s, backServicesButton);

    try {
      await bot.deleteMessage(
        callbackQuery.message.chat.id,
        callbackQuery.message.message_id
      );
    } catch (Error) {
      return;
    }
  } else if (callbackQuery.data === "dental_orto") {
    await bot.sendPhoto(
      callbackQuery.message.chat.id,
      "assets/services/dental_orto.jpg"
    );

    const s =
      "👩🏼‍⚕️ Семейный медицинский центр «Медицинская инициатива» предлагает полный спектр услуг по ортопедтической стоматологии:\n\
  1️⃣ Изготовление культевых штифтовых вкладок: Наши зуботехники используют современные методы для создания культевых штифтовых вкладок.\n\
  2️⃣ Металлокерамические, металлоакриловые и цельнолитые коронки: Мы изготавливаем коронки различных типов, обеспечивая надежность и эстетичность.\n\
  3️⃣ Мостовидные протезы с опорой на импланты: Если вам нужны мостовидные протезы, мы учтем особенности имплантов для наилучшего результата.\n\
  4️⃣ Частичные и полные пластиночные протезы: Наши специалисты помогут вам восстановить зубной ряд с комфортом.\n\
  5️⃣ Бюгельные протезы: Мы создаем металлические бюгельные протезы с фиксацией на кламмерах и аттачменах.\n\
  6️⃣ Эстетические пластмассовые бюгельные протезы: Система Кватротти позволяет нам создавать прочные и красивые протезы.\n\
  7️⃣ Сложные работы с опорой на импланты: Если у вас сложный случай, связанный с имплантами, мы найдем оптимальное решение.\n\n\
  🔗 Подробнее: https://inicia.by/index.php/uslugi/219-ortopedicheskaya-stomatologiya. Если у вас есть какие-либо вопросы, воспользуйтесь формой: “Задать вопрос”.";

    await bot.sendMessage(callbackQuery.message.chat.id, s, backServicesButton);

    try {
      await bot.deleteMessage(
        callbackQuery.message.chat.id,
        callbackQuery.message.message_id
      );
    } catch (Error) {
      return;
    }
  } else if (callbackQuery.data === "dental_surgeon") {
    await bot.sendPhoto(
      callbackQuery.message.chat.id,
      "assets/services/dental_surgeon.jpg"
    );

    const s =
      "🦷 Семейный медицинский центр «Медицинская инициатива» оказывает услуги плановой и экстренной хирургии.\n Хирургическая стоматология,  включает в себя как удаление зубов, зубосохраняющие процедуры, лечение воспалительных процессов, лечение и диагностика доброкачественных новообразований полости рта, подготовку полости рта к дальнейшему протезированию, операции на мягких тканях, пластика уздечки, имлантология\nВ своей работе применяем самое современное оборудование и инновационные технологии (технология PRF, использование ультразвукового аппарата и др.)\n\n🔗 Подробнее : https://www.inicia.by/index.php/uslugi/220-khirurgicheskaya-stomatologiya. Если у вас есть какие-либо вопросы, воспользуйтесь формой: “Задать вопрос”.";

    await bot.sendMessage(callbackQuery.message.chat.id, s, backServicesButton);

    try {
      await bot.deleteMessage(
        callbackQuery.message.chat.id,
        callbackQuery.message.message_id
      );
    } catch (Error) {
      return;
    }
  } else if (callbackQuery.data === "implant") {
    await bot.sendPhoto(
      callbackQuery.message.chat.id,
      "assets/services/implant.jpg"
    );

    const s =
      "🦷🛠 Имплантация зубов в нашей клинике является одним из наиболее прогрессивных направлений, пользующееся популярностью у пациентов.Наши специалисты обладают всем необходимым оборудованием, современными материалами, а также огромным опытом, что позволяет им оказывать высококачественные услуги по имплантации зубов \n\n\
    🔗 Подробнее: https://www.inicia.by/index.php/uslugi/643-implantatsiya. Если у вас есть какие-либо вопросы, воспользуйтесь формой: “Задать вопрос”.";

    await bot.sendMessage(callbackQuery.message.chat.id, s, backServicesButton);

    try {
      await bot.deleteMessage(
        callbackQuery.message.chat.id,
        callbackQuery.message.message_id
      );
    } catch (Error) {
      return;
    }
  } else if (callbackQuery.data === "uzi") {
    await bot.sendPhoto(
      callbackQuery.message.chat.id,
      "assets/services/uzi.jpg"
    );

    const s =
      "Семейный медицинский центр «Медицинская инициатива» рад предложить услуги ультразвуковой диагностики:\n\
    🔹 УЗИ брахиоцефальных артерий (БЦА) и брахиоцефальные сосуды (БЦС).\n\
    🔹 УЗИ вен нижних конечностей и артерии нижних конечностей.\n\
    🔹 УЗИ вен верхних конечностей и артерии верхних конечностей.\n\
    🔹 УЗИ суставов (коленные, плечевые, тазобедренные, локтевые, голеностопные, лучезапястные).\n\
    🔹 УЗИ лимфатических узлов.\n\
    🔹 УЗИ мышц и мягких тканей.\n\
    🔹 УЗИ сердца: Оценка структуры и функции сердца.\n\
    🔹 УЗИ плевральной полости: Диагностика плевры и легких.\n\
    🔹 УЗИ слюнных, подчелюстных, околоушных желез.\n\
    🔹 УЗИ щитовидной железы.\n\
    🔹 УЗИ органов брюшной полости (ОБП).\n\
    🔹 УЗИ почек и надпочечников.\n\
    🔹 УЗИ предстательной железы. \n\
    🔹 УЗИ мошонки. \n\
    🔹 УЗИ мочевого пузыря. \n\n\
    🔗 Подробнее: https://www.inicia.by/index.php/uslugi/481-ultrazvukovaya-diagnostika-uzi. Если у вас есть какие-либо вопросы, воспользуйтесь формой: “Задать вопрос”.";

    await bot.sendMessage(callbackQuery.message.chat.id, s, backServicesButton);

    try {
      await bot.deleteMessage(
        callbackQuery.message.chat.id,
        callbackQuery.message.message_id
      );
    } catch (Error) {
      return;
    }
  } else if (callbackQuery.data === "xray") {
    await bot.sendPhoto(
      callbackQuery.message.chat.id,
      "assets/services/xray.jpg"
    );

    const s =
      "🩻 Детальное обследование необходимо для правильной постановки диагноза и планирования лечения. У нас Вы можете получить полный комплекс стоматологического обследования по всем заболеваниям ротовой полости, а также сделать панорамный рентген (ортопантомография).\n\n\
    🔗 Подробнее: https://www.inicia.by/index.php/uslugi/217-rentgenologicheskaya-diagnostika. Если у вас есть какие-либо вопросы, воспользуйтесь формой: “Задать вопрос”.";

    await bot.sendMessage(callbackQuery.message.chat.id, s, backServicesButton);

    try {
      await bot.deleteMessage(
        callbackQuery.message.chat.id,
        callbackQuery.message.message_id
      );
    } catch (Error) {
      return;
    }
  } else if (callbackQuery.data === "func_diagnosis") {
    await bot.sendPhoto(
      callbackQuery.message.chat.id,
      "assets/services/func_diagnosis.jpg"
    );
    const s =
      "Функциональная диагностика — позволяют оценивать функциональное состояние органов и систем организма человека.\n В семейном едицинском центре 'Медицинская инициатива' выполняется следующее:\nЭКГ Холтеровское мониторирование\nТест 6-ти минутной ходьбы\nСМАД\n\nПодробнее: . Если у вас есть какие-либо вопросы, воспользуйтесь формой: “Задать вопрос”.";

    await bot.sendMessage(callbackQuery.message.chat.id, s, backServicesButton);

    try {
      await bot.deleteMessage(
        callbackQuery.message.chat.id,
        callbackQuery.message.message_id
      );
    } catch (Error) {
      return;
    }
  } else if (callbackQuery.data === "lab_diagnosis") {
    await bot.sendPhoto(
      callbackQuery.message.chat.id,
      "assets/services/lab_diagnosis.jpg"
    );

    const s =
      "🧪 Семейный медицинский центр «Медицинская инициатива» предлагает современную услугу – лабораторная диагностика в Минске. \nВиды лабораторных исследований, которые выполняются в ОАО «Медицинская инициатива»:\n\
    🔸Общий анализ крови (ОАК)\n\
    🔸Биохимический анализ крови (БАК)\n\
    🔸Гликированный гемоглобин\n\
    🔸Гормональные исследования\n\
    🔸Коагулограмма\n\
    🔸ВИЧ\n\
    🔸Сифилис\n\
    🔸Гепатиты (B и C)\n\n\
    🔗 Подробнее: https://www.inicia.by/index.php/uslugi/824-laboratornye-issledovaniya";

    await bot.sendMessage(callbackQuery.message.chat.id, s, backServicesButton);

    try {
      await bot.deleteMessage(
        callbackQuery.message.chat.id,
        callbackQuery.message.message_id
      );
    } catch (Error) {
      return;
    }
  } else if (callbackQuery.data === "cardio") {
    await bot.sendPhoto(
      callbackQuery.message.chat.id,
      "assets/services/cardio.jpg"
    );

    const s =
      "🫀Медцентр 'Медицинская инициатива' предлагает новое направление в своей работе - полное обследование вашей сердечно-сосудистой системы, сделает профессиональное заключение, совместно с пациентом разработает персональную программу лечения и только после этого проведет медикаментозную терапию.\nНаши услуги:\nКонсультация кардиолога;\nЭлектрокардиографические (ЭКГ);\nУльтразвуковые (УЗИ);\nХолтеровское мониторирование.\n\n\
    🔗 Подробнее: https://www.inicia.by/index.php/uslugi/512-kardiologiya";

    await bot.sendMessage(callbackQuery.message.chat.id, s, backServicesButton);

    try {
      await bot.deleteMessage(
        callbackQuery.message.chat.id,
        callbackQuery.message.message_id
      );
    } catch (Error) {
      return;
    }
  } else if (callbackQuery.data === "cosmetology") {
    await bot.sendPhoto(
      callbackQuery.message.chat.id,
      "assets/services/cosmetology.jpg"
    );

    const s =
      "☺️💉Мультипрофильный медицинский центр «Медицинская инициатива» предлагает современную услугу – удаление новообразований кожи (родинок, бородавок, папиллом и др.) передовым методом радиоволновой хирургии на аппарате Surgitron.\n⚠️ Внимание! В случае подозрения на злокачественный характер новообразования потребуется заключение врача-онколога. \n\n\
    🔗 Подробнее: https://www.inicia.by/index.php/uslugi/405-khirurgicheskaya-kosmetologiya-s-zaklyucheniem-onkologa";

    await bot.sendMessage(callbackQuery.message.chat.id, s, backServicesButton);

    try {
      await bot.deleteMessage(
        callbackQuery.message.chat.id,
        callbackQuery.message.message_id
      );
    } catch (Error) {
      return;
    }
  } else if (callbackQuery.data === "neurology") {
    await bot.sendPhoto(
      callbackQuery.message.chat.id,
      "assets/services/neurology.jpg"
    );

    const s =
      "🧠 Семейный медицинский центр «Медицинская инициатива» предлагает услугу - консультация врача-невролога в Осиповичах. Плановые осмотры у невролога позволяют своевременно диагностировать болезни и лечить их до того, как они приведут к необратимым последствиям.\n\n\
    🔗 Подробнее: https://www.inicia.by/index.php/uslugi/661-nevrologiya";

    await bot.sendMessage(callbackQuery.message.chat.id, s, backServicesButton);

    try {
      await bot.deleteMessage(
        callbackQuery.message.chat.id,
        callbackQuery.message.message_id
      );
    } catch (Error) {
      return;
    }
  } else if (callbackQuery.data === "therapy") {
    await bot.sendPhoto(
      callbackQuery.message.chat.id,
      "assets/services/neurology.jpg"
    );
    const s =
      "Семейный медицинский центр «Медицинская инициатива» предлагает услугу - консультация врача-терапевта в Осиповичах (для нетемпературящих пациентов). Приём осуществляется по адресу г. Осиповичи, ул. Сумченко, 38. Врач-терапевт лечит болезни разных систем организма: \n\
    ❗️ Дыхательная система. \n\
    ❗️ Пищеварительная система. \n\
    ❗️ Сердечно-сосудистая система.\n\
    ❗️Суставная система.\n\
    ❗️Мочевыделительная система.\n\n\
    🔗 Подробнее: https://www.inicia.by/index.php/uslugi/661-nevrologiya";

    await bot.sendMessage(callbackQuery.message.chat.id, s, backServicesButton);

    try {
      await bot.deleteMessage(
        callbackQuery.message.chat.id,
        callbackQuery.message.message_id
      );
    } catch (Error) {
      return;
    }
  } else if (callbackQuery.data === "back") {
    await bot.sendMessage(
      callbackQuery.message.chat.id,
      "Пожалуйста, выберите услугу:",
      servicesMenu
    );
  } else if (callbackQuery.data === "backContacts") {
    await bot.sendMessage(
      callbackQuery.message.chat.id,
      "Пожалуйста, выберите отделение:",
      contactsMenu
    );
  } else if (callbackQuery.data === "register") {
    try {
      await bot.deleteMessage(
        callbackQuery.message.chat.id,
        callbackQuery.message.message_id - 1
      );
    } catch (Error) {
      console.log(
        "Ошибка при удалении картинки(может возникнуть если при выборе услуги выводится текст без картинки"
      );
    }
    try {
      await bot.deleteMessage(
        callbackQuery.message.chat.id,
        callbackQuery.message.message_id
      );
    } catch (Error) {
      console.log(
        "Ошибка при удалении картинки(может возникнуть если при выборе услуги выводится текст без картинки"
      );
    }

    await handleRegistration(
      callbackQuery.message.chat.id,
      callbackQuery.message.message_id,
      bot
    );
  }
}
module.exports = {
  handleCallbackQuery,
};
