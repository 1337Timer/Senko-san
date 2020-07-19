const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
    const user = message.mentions.users.first();
    const reason = (args.splice(1).join(' ') || '<:SenkoThinking:732192434137727057> Aucune raison spécifiée.');
    user ? message.guild.member(user).kick(reason) : message.channel.send("<:SenkoThinking:732192434137727057> L'utilisateur n'existe pas.");

    const embed = new MessageEmbed()
        .setAuthor(`${user.username} (${user.id})`)
        .setColor("#FFC621")
        .setDescription(`**<:IconJoin:731919767425777806> Action**: Kick\n<:ItemMagnifyingGlass:732197467759706132> **Raison**: ${reason}`)
        .setThumbnail(user.avatarURL())
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get('699452457104834580').send(embed);
    };
    
module.exports.help = MESSAGES.COMMANDS.MODERATION.KICK;