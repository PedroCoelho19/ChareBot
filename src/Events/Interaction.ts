import { Interaction, CommandInteractionOptionResolver } from "discord.js";
import { Event } from "../Interfaces";
import { ExtendeInteraction } from "../Interfaces/Command";

export const event: Event = {
  name: "interactionCreate",
  run: async (client, interaction: Interaction) => {
    console.log(client, "client foi executado aki");
    if (interaction.isCommand()) {
      await interaction.deferReply();
      const command = client.commands.get(interaction.commandName);
      if (!command) {
        return interaction.reply("Esse comando nãoexiste ");
      }
      command.run({
        args: interaction.options as CommandInteractionOptionResolver,
        client,
        interaction: interaction as ExtendeInteraction,
      });
    }
  },
};
