const { MessageEmbed } = require("discord.js");

module.exports = (client, member) => {

    const embed = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setColor('#F05959')
    .setFooter("Un utilisateur est parti")
    .setTimestamp();
    
    client.channels.cache.get('729389432612061316').send(embed);
}
