const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = async (client, message, args) => {
    const user = await client.users.fetch(args[0]);
    const reason = (args.splice(1).join(' ') || 'Aucune raison spécifiée.');
    user ? message.guild.member(user).ban(reason) : message.channel.send("<:SenkoThinking:735210310138331229> L'utilisateur n'existe pas.");

    const embed = new MessageEmbed()
        .setAuthor(`${user.username} (${user.id})`)
        .setColor("#F05959")
        .setDescription(`<:IconJoin:735207925370454066> **Action**: Ban\n<:ItemMagnifyingGlass:735207739587952682> **Raison**: ${reason}`)
        .setThumbnail(user.avatarURL())
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL({ format: 'png', dynamic: true}));

    client.channels.cache.get('699452457104834580').send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.BAN;