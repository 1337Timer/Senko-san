const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
    const user = await client.users.fetch(args[0]);
    const guild = message.guild;
    const reason = (args.splice(1).join(' ') || 'Aucune raison spécifiée.');
    user ? message.guild.member(user).ban(reason) : message.channel.send("<:SenkoThinking:735210310138331229> L'utilisateur n'existe pas.");
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.BAN;
