const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
    const user = await client.users.fetch(args[0]);
    if(!user) return message.reply("L'utilisateur n'existe pas.");
    message.guild.members.unban(user);

    const embed = new MessageEmbed()
        .setAuthor(`${user.username} (${user.id})`, user.avatarURL())
        .setColor("#F05959")
        .setDescription(`**Action**: unban`)
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get('729389432612061316').send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.UNBAN;