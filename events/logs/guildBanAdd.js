const { MessageEmbed } = require('discord.js');

module.exports = async (client, message) => {
        
    const embed = new MessageEmbed()
          .setAuthor(`${user.username} (${user.id})`)
          .setColor("#F05959")
          .setDescription(`<:IconJoin:735207925370454066> **Action**: Ban\n<:ItemMagnifyingGlass:735207739587952682> **Raison**: ${reason}`)
          .setThumbnail(user.avatarURL())
          .setTimestamp()
          .setFooter(message.author.username, message.author.avatarURL({ format: 'png', dynamic: true}));

    client.channels.cache.get('699452457104834580').send(embed);
}
