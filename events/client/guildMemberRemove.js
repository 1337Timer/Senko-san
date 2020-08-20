const { MessageEmbed } = require("discord.js");

module.exports = (client, member) => {

    const guild = member.guild;

    if (guild.id == "527568704666599444") {
        const embed = new MessageEmbed()
        .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL({ format: 'png', dynamic: true}))
        .setColor('#F05959')
        .setFooter("Un utilisateur est parti")
        .setTimestamp();
        
        client.channels.cache.get('699450511400763423').send(embed);
    }
}