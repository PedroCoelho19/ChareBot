import discord from "discord.js";
import { Command } from "../../Interfaces";

export const slash: Command = {
  name: "help",
  description: "Comandos do bot",
  testOnly: false,
  run: async ({ client, interaction }) => {
   try {
    let commands = client.commands;
    const enbed = new discord.MessageEmbed()
      .setTitle("Comandos do bot")
      .setColor("#f00");

    commands.forEach((command) => {
      enbed.addField(`${command.name}`, `${command.description}`, true);
    });

    interaction.reply({ embeds: [enbed], ephemeral: true });
   } catch (error) {
    return console.log(error)
   }
  },
};
