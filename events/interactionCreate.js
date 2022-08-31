const client = require("../index");
const Discord = require('discord.js');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const config = require("../config/bot.json");
const { glob } = require("glob");
const { promisify } = require("util");
const globPromise = promisify(glob);

client.on("interactionCreate", async (interaction) => {
  // ———————————————[Slash Commands]———————————————
  if (interaction.isCommand()) {
    await interaction.deferReply().catch(() => { });

    const cmd = client.slashCommands.get(interaction.commandName);
    if (!cmd)
      return interaction.followUp({ content: "`Hubo un error ejecutando el comando.`" })

    const args = [];

    for (let option of interaction.options.data) {
      if (option.type === "SUB_COMMAND") {
        if (option.name) args.push(option.name);
        option.options?.forEach((x) => {
          if (x.value) args.push(x.value);
        });
      } else if (option.value) args.push(option.value);
    }
    interaction.member = interaction.guild.members.cache.get(
      interaction.user.id
    );

    cmd.run(client, interaction, args);
  }
  // ——————————————[Botones]———————————————
  if (interaction.isButton()) {
/*
--------------------------------------------------------------------------------

Detector de Botones

Se trabajará próximamente en vídeos

--------------------------------------------------------------------------------
*/
  }
  // ———————————————[Menus]———————————————
  if (interaction.isSelectMenu()) {
/*
--------------------------------------------------------------------------------

Detector de Menus

Se trabajará próximamente en vídeos

--------------------------------------------------------------------------------
*/
  }
});