const { MessageEmbed } = require("discord.js");
const { MESSAGES } = require("../../util/constants");

module.exports.run = (client, message, args) => {
    const user = message.guild.member(message.mentions.users.first());
    let muteRole = message.guild.roles.cache.find(r => r.name === 'muted');

    if (!user.roles.cache.has(muteRole.id)) return message.reply("<:SenkoThinking:735210310138331229> L'utilisateur mentionné n'est pas muté.")
    user.roles.remove(muteRole.id);
    message.channel.send(`<a:senkoEars:732199112820260875> <@${user.id}> n'est plus muté.`);

    const embed = new MessageEmbed()
        .setAuthor(`${user.user.username} (${user.id})`, user.user.avatarURL())
        .setColor("#FFC621")
        .setDescription(`<:IconJoin:735207925370454066> **Action**: Unmute`)
        .setTimestamp()
        .setFooter(message.author.username, message.author.avatarURL());

    client.channels.cache.get('699452457104834580').send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.UNMUTE;