const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
    const user = message.mentions.users.first();
    const reason = args.splice(1).join(' ');
    user ? message.guild.member(user).ban(reason) : message.channel.send("L'utilisateur n'existe pas.");

    const embed = new MessageEmbed()
        .setAuthor(`${user.username} (${user.id})`)
        .setColor("#F05959")
        .setDescription(`**Action**: ban\n**Raison**: ${reason}`)
        .setThumbnail(user.avatarURL())
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get('729389432612061316').send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.BAN;