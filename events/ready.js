const client = require("../index");
const chalk = require("chalk");
const { glob } = require("glob");
const { promisify } = require("util");
const globPromise = promisify(glob);
const { version: discordjsVersion } = require("discord.js");
const config = require("../config/bot.json");

client.on("ready", async () => {
  
  // ———————————————[MongoDB]———————————————
  let mongodb = config.mongodb
  const mongoose = require("mongoose");
  mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  /* Si no usas MongoDB simplemente borra esta parte de arriba */
  
  // ———————————————[Actividad]———————————————
  let estados = [`[Remplazar por la actividad que quieras]`]; // Se pueden poner más de 1
  let posicion = 0;

  setInterval(() => {
    if (posicion > estados.length - 1) posicion = 0;
    let estado = estados[posicion]
    client.user.setActivity(estado, { type: "WATCHING" }) // Se puede también "PLAYING" y algunos más pero los que más se usan son esos
    posicion++
  }, 4000) // Intervalo de milisegundos en el que se cambia la actividad

  // ———————————————[Mensaje de Inicio]———————————————

  const slashCommands = await globPromise(
    `${process.cwd()}/SlashCommands/*/*.js`
  );

  console.log(chalk.green.bold("Perfecto!"));
  console.log(chalk.gray("Conectado a"), chalk.magenta.bold(`${client.user.tag}`));
  console.log(
    chalk.white("Viendo"),

    chalk.magenta(`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}`),
    chalk.white(
      `${
        client.guilds.cache.reduce((a, b) => a + b.memberCount, 0) > 1
          ? "Users,"
          : "User,"
      }`
    ),
    chalk.magenta(`${client.guilds.cache.size}`),
    chalk.white(`${client.guilds.cache.size > 1 ? "Servers." : "Server."}`)
  );
  console.log(
    chalk.white(`MongoDB` + chalk.magenta(` Conectado`)),
    chalk.white("|"),
    chalk.magenta(`${slashCommands.length}`),
    chalk.white(`Comandos`)
  );
  console.log(
    chalk.white(`Support Server: `) +
      chalk.magenta("https://discord.gg/")
  );
  console.log("");
  console.log(chalk.magenta.bold("——————————[Estadisticas]——————————"));
  console.log(
    chalk.gray(
      `Discord.js Version: ${discordjsVersion}\nRunning on Node ${process.version} on ${process.platform} ${process.arch}`
    )
  );
  console.log(
    chalk.gray(
      `Memory: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(
        2
      )} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(
        2
      )} MB`
    )
  );
});