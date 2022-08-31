const { Client, CommandInteraction } = require("discord.js");
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')
const config = require("../../config/bot.json");

module.exports = {
  ... new SlashCommandBuilder()
  .setName("setup-tickets")
  .setDescription("Crea un panel de Tickets (Solo Administradores)"),
  run: async (client, interaction, args) => {

    const ping = Math.floor(clint.ws.ping)

    return interaction.followUp({ content: `Mi ping es ${ping}ms` });
     
   },
};