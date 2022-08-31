const { Client, Collection } = require("discord.js");
const chalk = require('chalk');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const client = new Client({ intents: 3243773 });
const config = require("./config/bot.json");
module.exports = client;

// ———————————————[Variables Globales]———————————————
client.commands = new Collection();
client.aliases = new Collection();
client.cooldowns = new Collection();
client.slashCommands = new Collection();
module.exports.client = client
client.config = require("./config/bot.json");
require("./handler")(client);

// ———————————————[Logueo del Bot]———————————————
const token = config.token;
client.login(token);

// ———————————————[AntiCrash]———————————————
process.on("unhandledRejection", (reason, p) => {
  console.log(chalk.gray("—————————————————————————————————"));
  console.log(
    chalk.white("["),
    chalk.red.bold("AntiCrash"),
    chalk.white("]"),
    chalk.gray(" : "),
    chalk.white.bold("Unhandled Rejection/Catch")
  );
  console.log(chalk.gray("—————————————————————————————————"));
  console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
  console.log(chalk.gray("—————————————————————————————————"));
  console.log(
    chalk.white("["),
    chalk.red.bold("AntiCrash"),
    chalk.white("]"),
    chalk.gray(" : "),
    chalk.white.bold("Uncaught Exception/Catch")
  );
  console.log(chalk.gray("—————————————————————————————————"));
  console.log(err, origin);
});
process.on("multipleResolves", (type, promise, reason) => {
  console.log(chalk.gray("—————————————————————————————————"));
  console.log(
    chalk.white("["),
    chalk.red.bold("AntiCrash"),
    chalk.white("]"),
    chalk.gray(" : "),
    chalk.white.bold("Multiple Resolves")
  );
  console.log(chalk.gray("—————————————————————————————————"));
  console.log(type, promise, reason);
});