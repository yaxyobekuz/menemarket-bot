// Bot configuration
require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(process.env.TOKEN, { polling: true });

// Helpers
const { formatMessage } = require("./src/helpers");

// Bot listeners
bot.onText(/\/start/, (msg) => {
  const message = msg.text;
  const chatId = msg.chat.id;

  const title = "Assalomu alaykum 👋 Hurmatli foydalanuvchi!";
  const description = `Men [Mene Market](https://menemarket.uz) Veb-saytining rasmiy telegram botiman. Mening vazifam sizning oqimingiz orqali kelgan buyurtmalar haqida hisobot berishdan iborat. » [Bu yerda ba'tafsil bilib oling](https://menemarket.uz/auth/register) «\n\nAkkauntingizni bog'lash uchun ID raqamingiz: \`${chatId}\``;

  bot.sendMessage(chatId, formatMessage(title, description), {
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [[{ text: "Nusxa olish", copy_text: { text: chatId } }]],
    },
  });
});

// Message
bot.on("message", async (msg) => {
  const message = msg.text;
  const chatId = msg.chat.id;
});

// Callbacks
bot.on("callback_query", async ({ message, data: query }) => {
  const chatId = message.chat.id;
});
