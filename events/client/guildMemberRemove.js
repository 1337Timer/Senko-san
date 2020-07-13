const { MessageEmbed } = require("discord.js");

module.exports = (client, member) => {

    const embed = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setColor('#F05959')
    .setFooter("<:IconLeave:732205158389514272> Un utilisateur est parti")
    .setTimestamp();
    
    client.channels.cache.get('699450511400763423').send(embed);
}