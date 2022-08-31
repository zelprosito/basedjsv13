const client = require("../index");
const { Client, CommandInteraction } = require("discord.js");
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')
const { Permissions } = require('discord.js');
const config = require("../config/bot.json");
const { color } = require("../config/bot.json");
const { MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');

client.on("messageCreate", async (message) => {
/*
--------------------------------------------------------------------------------

Evento que detecta nuevos mensajes

--------------------------------------------------------------------------------
*/
});