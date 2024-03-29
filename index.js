const { Telegraf } = require('telegraf');
require('dotenv').config()

const bot = new Telegraf(process.env.TOKEN);

bot.start((ctx) => ctx.reply(`Welcome ${ctx.from.first_name}`))
bot.command('mingw', (ctx) => ctx.reply("https://sourceforge.net/projects/mingw-w64/files/"))
bot.command('eclipse_c', (ctx) => ctx.reply("https://www.eclipse.org/downloads/packages/release/2022-09/r/eclipse-ide-cc-developers"))
bot.command('replit', (ctx) => ctx.reply("https://replit.com/"))
bot.hears(['mingw', 'Mingw', "Ming w"], (ctx) => ctx.reply("https://sourceforge.net/projects/mingw-w64/files/"))
bot.hears(['eclipse c', 'Eclipse c', 'Eclipse', 'eclipse'], (ctx) => ctx.reply("https://www.eclipse.org/downloads/packages/release/2022-09/r/eclipse-ide-cc-developers"))
bot.hears(['common ide', 'our ide', 'Online ide', 'Online c', 'ide', "Ide", "replit", "Replit", "online compiler", "Online compiler"], (ctx) => ctx.reply("https://replit.com/"))
bot.hears(['hai', 'Hai', 'hello', "Hello", 'Hey', 'hey', "Hi", "hi", "Hy", "hy"], (ctx) => ctx.reply(`Hello ${ctx.from.first_name}`))
bot.hears(['vs code', "visual studio code", "Vs code", "Vs code link"], (ctx) => ctx.reply("https://code.visualstudio.com/Download"))
bot.hears(['mongodb', "Mongodb", "Mongodb link"], (ctx) => ctx.reply("https://www.mongodb.com/try/download/community"))
bot.hears(['@admin', "@Admin", "admin", "Admin", "help", "Help", "spam"], (ctx) => ctx.pinChatMessage(ctx.update.message.message_id))
bot.help(ctx => ctx.reply('contact @anagh_k_r'))
bot.on('sticker', (ctx) => ctx.reply('🙄'))



bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
