import {
  CommandInteraction,
  ChatInputApplicationCommandData,
  GuildMember,
  ApplicationCommandData,
  CommandInteractionOptionResolver,
} from "discord.js";
import Client from "../Client";

export interface ExtendeInteraction extends CommandInteraction {
  member: GuildMember;
}

interface RunOptions {
  client: Client;
  interaction: ExtendeInteraction;
  args: CommandInteractionOptionResolver;
}

type Run = (options: RunOptions) => any;

export type Command = ApplicationCommandData & {
  name: string;
  description: string;
  testOnly: boolean;
  run: Run;
} & ChatInputApplicationCommandData;
